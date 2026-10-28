/* 雅思模考（考场模式）：仿照雅思机考的界面——全屏、顶部计时（可隐藏）、左右分屏可拖动、底部按 Part 排列的题号导航、
   Review 标记、在文章里高亮、调节字号；听力每部分有看题时间，录音只播一次，最后 2 分钟检查。
   按真实顺序：听力 → 阅读 → 写作；口语在「口语」里单独做完整模拟。界面为本站自行设计，不使用 IELTS 的标志和品牌样式。
   题库、判分和记录与雅思阅读、听力、写作模块共用（ielts-*.js 暴露的 *Kit、ielts-qs.js 的 App.iq）。 */
(function(){
const { $, esc, shuffle } = App;
const Q = App.iq, T = App.tts, RK = App.ireadingKit, LK = App.ilisteningKit, WK = App.iwritingKit;
const READ_SEC = 30, CHECK_SEC = 120, READING_MIN = 60, WRITING_MIN = 60;
const SEC = {
  listening:{ en:"Listening", cn:"听力", mins:"约 30 分钟", desc:"4 个部分共 40 题。每部分开始前有 30 秒看题时间，录音只播放一次，可以边听边答；四部分结束后有 2 分钟检查时间。" },
  reading:{ en:"Reading", cn:"阅读", mins:"60 分钟", desc:"3 篇文章共 40 题，没有额外的誊写时间。左右分屏可以拖动；选中文章里的文字可以高亮；底部题号导航可以跳题和标记 Review。" },
  writing:{ en:"Writing", cn:"写作", mins:"60 分钟", desc:"Task 1 图表描述（至少 150 词）和 Task 2 议论文（至少 250 词），两篇共用 60 分钟，可以在底部切换，建议先写分值更高的 Task 2。" }
};
const ORDER = ["listening","reading","writing"];

/* ---------- 记录 ---------- */
function normalize(d){ d = d || {}; return { history:Array.isArray(d.history) ? d.history : [], hideTime:!!d.hideTime, font:d.font || 0 } }
let data = normalize(App.store.get(App.KEYS.iexam, null));
const save = () => App.store.set(App.KEYS.iexam, data);
App.ieltsExamData = () => data;
App.loadIeltsExamData = d => { data = normalize(d); save(); if(App.route==="iexam" && !Y) renderHome() };

/* ---------- 会话 ---------- */
let Y = null, timer = 0, token = 0;
const view = html => { $("#view-iexam").innerHTML = html };
const fmt = ms => { const s = Math.max(0, Math.ceil(ms/1000)); return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}` };
function stopAll(){ token++; clearInterval(timer); timer = 0; T.stop() }
function startExam(order){ Y = { order, si:-1, results:{}, started:Date.now() }; nextSection() }
function nextSection(){
  Y.si++;
  if(Y.si>=Y.order.length) return finishExam();
  Y.sec = { kind:Y.order[Y.si], phase:"dir", flags:new Set(), lastQ:0 };
  render();
}
function beginSection(){ const k = Y.sec.kind; if(k==="listening") listeningStart(); else if(k==="reading") readingStart(); else writingStart() }
function exitExam(){ stopAll(); Y = null; renderHome() }
function startTicker(){ clearInterval(timer); timer = setInterval(tick, 250) }
function tick(){
  if(!Y || !Y.sec) return;
  const s = Y.sec, el = $("#ixTime");
  if(s.deadline){
    const left = s.deadline - Date.now();
    if(el){ el.textContent = fmt(left); el.parentElement.classList.toggle("warn", left<5*60000 && s.kind!=="listening" || (s.kind==="listening" && left<10000)) }
    if(left<=0){ s.deadline = 0; onTimeUp() }
  }
}
function onTimeUp(){
  const s = Y.sec;
  if(s.kind==="listening"){ if(s.phase==="read") listenPlay(); else if(s.phase==="check") submitSection(true) }
  else submitSection(true);
}
const least = (list, done) => shuffle(list.slice()).sort((a,b) => ((done[a.id]||{}).cnt||0) - ((done[b.id]||{}).cnt||0));

/* ---------- 听力 ---------- */
function listeningStart(){
  const s = Y.sec, mocks = App.ieltsListeningData().mocks;
  const t = LK.TESTS.slice().sort((a,b) => mocks.filter(m => m.test===a.id).length - mocks.filter(m => m.test===b.id).length)[0];
  Object.assign(s, { test:t, parts:t.parts.map(p => ({ p, built:Q.build(p.groups, (p.part-1)*10 + 1, { label:`雅思听力 ${t.id} Part ${p.part}` }) })), ans:{}, cur:0, viewPart:0 });
  listenRead();
}
function listenRead(){
  const s = Y.sec; s.phase = "read"; s.viewPart = s.cur; s.deadline = Date.now() + READ_SEC*1000;
  render(); startTicker();
}
function listenPlay(){
  const s = Y.sec; s.phase = "play"; s.deadline = 0; setStatus();
  const part = s.parts[s.cur], me = ++token;
  if(!T.canPlay()){ s.textMode = true; setStatus(); return }
  T.play(LK.segments(part.p), (i,n) => { const p = $("#ixProg"); if(p) p.style.width = Math.round(i/n*100) + "%" }).then(ok => {
    if(!ok || me!==token || !Y || Y.sec!==s) return;
    listenAfterPart();
  });
}
function listenAfterPart(){
  const s = Y.sec;
  if(s.cur < s.parts.length-1){ s.cur++; listenRead(); return }
  s.phase = "check"; s.deadline = Date.now() + CHECK_SEC*1000; render(); startTicker();
}
function statusHTML(){
  const s = Y.sec;
  if(s.kind!=="listening") return "";
  const p = s.parts[s.cur].p;
  if(s.phase==="read") return `<span>Part ${p.part} · 看题时间</span><button class="ix-mini" data-ix="play">开始播放</button>`;
  if(s.phase==="play") return s.textMode ? `<span>浏览器无法朗读，请在「听力」里查看原文练习</span><button class="ix-mini" data-ix="nextpart">下一部分</button>`
    : `<span><span class="recdot" style="background:var(--primary)"></span>Part ${p.part} 正在播放 · 只播放一次</span><div class="bar ix-prog"><i id="ixProg" style="width:0"></i></div>`;
  if(s.phase==="check") return `<span>录音结束，2 分钟检查时间，时间到自动交卷</span>`;
  return "";
}
function setStatus(){ const el = $("#ixStatus"); if(el) el.innerHTML = statusHTML(); const h = $("#ixTimeBox"); if(h) h.outerHTML = timeHTML() }

/* ---------- 阅读 ---------- */
function readingStart(){
  const s = Y.sec, done = App.ieltsReadingData().done;
  const ps = [1,2,3].map(lv => least(RK.P.filter(p => p.level===lv), done)[0]);
  let n = 1;
  const parts = ps.map(p => { const built = Q.build(p.groups, n, { paras:p.paras.map(([k]) => k), label:`雅思阅读 ${p.id}（${p.title}）` }); n += built.list.length; return { p, built } });
  Object.assign(s, { phase:"run", parts, ans:{}, viewPart:0, deadline:Date.now() + READING_MIN*60000, hl:{}, split:50 });
  render(); startTicker();
}

/* ---------- 写作 ---------- */
function writingStart(){
  const s = Y.sec, done = App.ieltsWritingData().done;
  const tasks = [least(WK.D.task1, done)[0], least(WK.D.task2, done)[0]];
  Object.assign(s, { phase:"run", tasks, texts:["",""], viewPart:0, deadline:Date.now() + WRITING_MIN*60000, split:50 });
  render(); startTicker();
}

/* ---------- 交卷 ---------- */
function submitSection(timeUp){
  const s = Y.sec; s.deadline = 0; T.stop(); token++;
  if(s.kind==="listening" || s.kind==="reading"){
    const res = s.parts.map(x => Q.grade(x.built, s.ans)), c = res.reduce((a,r) => a+r.c, 0), n = res.reduce((a,r) => a+r.n, 0);
    if(s.kind==="listening"){ s.parts.forEach((x,i) => LK.record(`${s.test.id}:${x.p.part}`, res[i])); LK.addMock({ t:Date.now(), test:s.test.id, c, n }) }
    else{ s.parts.forEach((x,i) => RK.record(x.p, res[i])); RK.addMock({ t:Date.now(), c, n, mins:READING_MIN, ids:s.parts.map(x => x.p.id) }) }
    Y.results[s.kind] = { parts:s.parts, ans:s.ans, res, c, n, timeUp, test:s.test };
  }else{
    const ta = $("#ixText"); if(ta) s.texts[s.viewPart] = ta.value;
    const as = s.tasks.map((it,i) => WK.analyze(s.texts[i], it));
    s.tasks.forEach((it,i) => WK.record(it, s.texts[i], as[i]));
    WK.addHistory({ t:Date.now(), mode:"full", ids:s.tasks.map(it => it.id), words:as.map(a => a.n), mins:Math.round((Date.now()-(Y.secStart||Y.started))/60000) });
    Y.results.writing = { tasks:s.tasks, texts:s.texts.slice(), as, timeUp };
  }
  s.phase = "end"; render();
}

/* ---------- 界面：顶部栏、分屏、底部导航 ---------- */
function timeHTML(){
  const s = Y.sec, show = s.deadline && (s.phase==="run" || s.phase==="read" || s.phase==="check");
  return `<div class="ix-time${data.hideTime ? " hidden" : ""}" id="ixTimeBox">${show ? `<span id="ixTime">${fmt(s.deadline - Date.now())}</span><span class="ix-left">${s.phase==="read" ? "看题" : s.phase==="check" ? "检查" : "剩余"}</span><button data-ix="hidetime">${data.hideTime ? "显示时间" : "隐藏时间"}</button>` : ""}</div>`;
}
function topBar(){
  const s = Y.sec, sec = SEC[s.kind], running = ["run","read","play","check"].includes(s.phase);
  return `<header class="ix-bar">
    <div class="ix-brand"><b>雅思模考</b><span>${sec.en}</span></div>
    ${timeHTML()}
    <div class="ix-tools">
      <button data-ix="font-" title="缩小字号">A−</button><button data-ix="font+" title="放大字号">A+</button>
      <button data-ix="theme" title="切换浅色 / 深色">颜色</button>
      ${running && s.kind!=="listening" ? `<button data-ix="submit" class="pri">提交本部分</button>` : ""}
      ${running && s.kind==="listening" && s.phase==="check" ? `<button data-ix="submit" class="pri">交卷</button>` : ""}
      <button data-ix="quit" class="quit">退出模考</button>
    </div>
  </header>`;
}
function answered(n){ const v = Y.sec.ans[n]; return v!=null && v!=="" }
function bottomNav(){
  const s = Y.sec;
  if(s.kind==="writing") return `<nav class="ix-nav">${s.tasks.map((it,i) => `<button class="ix-part${i===s.viewPart ? " on" : ""}" data-ixpart="${i}"><b>Part ${i+1}</b><span>${WK.wordsOf(s.texts[i]).length} 词</span></button>`).join("")}
    <span class="ix-navnote">Task 1 至少 150 词，Task 2 至少 250 词</span></nav>`;
  const parts = s.parts.map((x,i) => {
    const nums = x.built.list.map(({n}) => n), done = nums.filter(answered).length;
    if(i!==s.viewPart) return `<button class="ix-part" data-ixpart="${i}"><b>Part ${i+1}</b><span>${done} / ${nums.length}</span></button>`;
    return `<div class="ix-part on"><b>Part ${i+1}</b><div class="ix-nums">${nums.map(n => `<button class="ix-num${answered(n) ? " done" : ""}${s.flags.has(n) ? " flag" : ""}${n===s.lastQ ? " cur" : ""}" data-ixq="${n}" aria-label="第 ${n} 题">${n}</button>`).join("")}</div></div>`;
  }).join("");
  return `<nav class="ix-nav">${parts}
    <div class="ix-navbtns"><label class="ix-flag"><input type="checkbox" id="ixFlag" ${s.flags.has(s.lastQ) ? "checked" : ""} ${s.lastQ ? "" : "disabled"}> Review</label>
    <button data-ix="prevq" aria-label="上一题">←</button><button data-ix="nextq" aria-label="下一题">→</button></div></nav>`;
}
function passageHTML(x){
  const s = Y.sec;
  if(s.hl[x.p.id]) return s.hl[x.p.id];
  return `<h3 class="ptitle">${esc(x.p.title)}</h3>${x.p.paras.map(([k,t]) => `<p><b class="ir-par">${k}</b>${esc(t)}</p>`).join("")}`;
}
function bodyHTML(){
  const s = Y.sec;
  if(s.kind==="listening"){
    const x = s.parts[s.viewPart];
    return `<div class="ix-status" id="ixStatus">${statusHTML()}</div>
      <div class="ix-scroll"><div class="ix-single">${s.viewPart!==s.cur && s.phase!=="check" ? `<div class="fb no">你在查看 Part ${s.viewPart+1}，正在进行的是 Part ${s.cur+1}。</div>` : ""}<p class="instr">Part ${x.p.part}　${esc(x.p.intro)}</p><section class="iq">${Q.render(x.built, s.ans)}</section></div></div>`;
  }
  if(s.kind==="reading"){
    const x = s.parts[s.viewPart];
    return `<div class="ix-split" style="--ix-left:${s.split}%"><article class="ix-pane ix-passage ptext ir-text" id="ixPassage" data-pid="${x.p.id}">${passageHTML(x)}</article>
      <div class="ix-divider" id="ixDivider" role="separator" aria-label="拖动调整左右宽度"></div>
      <section class="ix-pane"><p class="note">Part ${s.viewPart+1}：阅读左边的文章，回答第 ${x.built.list[0].n}–${x.built.list[x.built.list.length-1].n} 题。选中文章里的文字可以高亮。</p><section class="iq">${Q.render(x.built, s.ans)}</section></section></div>`;
  }
  const it = s.tasks[s.viewPart], n = WK.wordsOf(s.texts[s.viewPart]).length, min = WK.MIN_WORDS[it.task];
  return `<div class="ix-split" style="--ix-left:${s.split}%"><article class="ix-pane">${WK.promptHTML(it)}</article>
    <div class="ix-divider" id="ixDivider" role="separator" aria-label="拖动调整左右宽度"></div>
    <section class="ix-pane"><textarea id="ixText" class="w-editor ix-editor" spellcheck="false" autocomplete="off" aria-label="Task ${it.task} 作答区">${esc(s.texts[s.viewPart])}</textarea>
      <p class="note" id="ixWords">字数：${n}（至少 ${min}）</p></section></div>`;
}
function dirHTML(){
  const k = Y.sec.kind, sec = SEC[k];
  return `<div class="xm-center"><p class="xm-kicker">${Y.si+1} / ${Y.order.length} · ${sec.en}</p><h2>${sec.cn}</h2><p>${sec.desc}</p>${k==="listening" ? `<p class="note">请戴上耳机。录音由浏览器朗读，语速和声音可以在「设置」里调。</p>` : ""}<button class="btn" data-ix="begin">开始${sec.cn}</button></div>`;
}
function endHTML(){
  const k = Y.sec.kind, last = Y.si===Y.order.length-1, r = Y.results[k];
  return `<div class="xm-center"><h2>${SEC[k].cn}部分已结束</h2>${r && r.timeUp ? `<p>时间到，已自动交卷。</p>` : ""}<p>${last ? "接下来查看成绩。" : `下一部分是${SEC[Y.order[Y.si+1]].cn}。`}</p><button class="btn" data-ix="nextsec">${last ? "查看成绩" : "进入下一部分"}</button></div>`;
}
function render(){
  if(!Y) return renderHome();
  if(Y.phase==="result") return renderResult();
  const s = Y.sec, running = !["dir","end"].includes(s.phase);
  view(`<div class="xm ix" style="--ix-font:${data.font}px">${topBar()}<main class="ix-body">${running ? bodyHTML() : s.phase==="dir" ? dirHTML() : endHTML()}</main>${running ? bottomNav() : ""}</div>`);
  tick();
  if(s.kind==="writing" && running){ const ta = $("#ixText"); if(ta){ ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length) } }
}
// 只刷新底部导航（作答时调用），不打断输入
function refreshNav(){ const nav = document.querySelector("#view-iexam .ix-nav"); if(nav) nav.outerHTML = bottomNav() }
function goQuestion(n){
  const s = Y.sec, pi = s.parts.findIndex(x => x.built.list.some(q => q.n===n));
  if(pi<0) return;
  s.lastQ = n;
  if(pi!==s.viewPart){ s.viewPart = pi; render() } else refreshNav();
  const el = document.querySelector(`#view-iexam [data-iqn="${n}"]`);
  if(el){ el.scrollIntoView({ block:"center", behavior:"smooth" }); if(el.tagName==="INPUT" || el.tagName==="SELECT") el.focus({ preventScroll:true }) }
}
const allNums = () => Y.sec.parts.flatMap(x => x.built.list.map(q => q.n));

/* ---------- 高亮（阅读） ---------- */
let hlMenu = null;
function hideHl(){ if(hlMenu){ hlMenu.remove(); hlMenu = null } }
function showHl(x, y, html){
  hideHl();
  hlMenu = document.createElement("div"); hlMenu.className = "ix-hlmenu"; hlMenu.innerHTML = html;
  hlMenu.style.left = Math.max(8, Math.min(window.innerWidth-160, x)) + "px"; hlMenu.style.top = Math.max(8, y - 44) + "px";
  document.body.appendChild(hlMenu);
}
function saveHl(){ const el = $("#ixPassage"); if(el) Y.sec.hl[el.dataset.pid] = el.innerHTML }
document.addEventListener("mouseup", e => {
  if(!Y || !Y.sec || Y.sec.kind!=="reading" || App.route!=="iexam") return;
  if(e.target.closest(".ix-hlmenu")) return;
  const pane = $("#ixPassage"); if(!pane) return;
  const mk = e.target.closest("mark.ix-hl");
  if(mk && pane.contains(mk)){ showHl(e.clientX, e.clientY, `<button data-hl="clear">清除高亮</button>`); hlMenu.target = mk; return }
  const sel = window.getSelection();
  if(!sel || sel.isCollapsed || !pane.contains(sel.anchorNode) || !pane.contains(sel.focusNode)){ hideHl(); return }
  const r = sel.getRangeAt(0).getBoundingClientRect();
  showHl(r.left + r.width/2 - 40, r.top, `<button data-hl="add">高亮</button>`);
});
document.addEventListener("mousedown", e => {
  const b = e.target.closest(".ix-hlmenu button"); if(!b){ if(!e.target.closest(".ix-hlmenu")) hideHl(); return }
  e.preventDefault();
  if(b.dataset.hl==="add"){
    const sel = window.getSelection(); if(!sel.rangeCount) return hideHl();
    const range = sel.getRangeAt(0), p1 = (range.startContainer.parentElement || range.startContainer).closest("p"), p2 = (range.endContainer.parentElement || range.endContainer).closest("p");
    if(p1 && p1===p2){ const mk = document.createElement("mark"); mk.className = "ix-hl"; mk.appendChild(range.extractContents()); range.insertNode(mk); sel.removeAllRanges(); saveHl() }
    else App.toast("一次只能高亮同一段里的文字。", 2500);
  }else if(b.dataset.hl==="clear" && hlMenu.target){ const mk = hlMenu.target; mk.replaceWith(...mk.childNodes); saveHl() }
  hideHl();
});

/* ---------- 拖动分隔条 ---------- */
document.addEventListener("pointerdown", e => {
  const d = e.target.closest("#ixDivider"); if(!d || !Y) return;
  e.preventDefault();
  const split = d.parentElement, rect = split.getBoundingClientRect();
  const move = ev => { const p = Math.round(Math.max(25, Math.min(75, (ev.clientX - rect.left)/rect.width*100))); Y.sec.split = p; split.style.setProperty("--ix-left", p + "%") };
  const up = () => { document.removeEventListener("pointermove", move); document.removeEventListener("pointerup", up) };
  document.addEventListener("pointermove", move); document.addEventListener("pointerup", up);
});

/* ---------- 成绩 ---------- */
function finishExam(){
  stopAll();
  const R = Y.results, rec = { t:Date.now(), mins:Math.round((Date.now()-Y.started)/60000), order:Y.order };
  if(R.listening) rec.listening = [R.listening.c, R.listening.n];
  if(R.reading) rec.reading = [R.reading.c, R.reading.n];
  if(R.writing) rec.writing = R.writing.as.map(a => a.n);
  data.history.push(rec); if(data.history.length>50) data.history = data.history.slice(-50); save();
  Y.phase = "result"; Y.rv = null; Y.rvPart = 0; renderResult();
}
function reviewHTML(k){
  const R = Y.results[k];
  if(k==="writing") return R.tasks.map((it,i) => { const a = R.as[i]; return `<section class="xm-rv"><h3>Task ${it.task} · ${esc(it.name)} · ${a.n} 词</h3>
      <div class="w-answer">${esc(R.texts[i]) || '<span class="note">（没有写内容）</span>'}</div>
      <div class="status-list" style="margin-top:8px">${a.checks.map(([ok,label,hint]) => `<div><span class="dot ${ok ? "ok" : "no"}"></span><span><b>${esc(label)}</b>${ok ? "" : `<br><span class="note">${esc(hint)}</span>`}</span></div>`).join("")}</div>
      <details><summary class="note">范文</summary><div class="w-answer model">${esc(it.model)}</div></details></section>` }).join("") + `<p class="note">想让 AI 按四项评分标准估分和修改，可以到「写作」里打开这道题重写，交卷后生成点评。</p>`;
  const x = R.parts[Y.rvPart];
  return `<div class="tabs ir-tabs">${R.parts.map((y,i) => `<button class="tab" data-ixrvpart="${i}" aria-selected="${i===Y.rvPart}">Part ${i+1}<span class="n">${R.res[i].c}/${R.res[i].n}</span></button>`).join("")}</div>
    <section class="iq">${Q.review(x.built, R.ans, R.res[Y.rvPart])}</section>`;
}
function renderResult(){
  const R = Y.results, rows = [];
  if(R.listening) rows.push(["listening","听力",`${R.listening.c} / 40`, Q.band("listening", R.listening.c)]);
  if(R.reading) rows.push(["reading","阅读（学术类）",`${R.reading.c} / 40`, Q.band("reading", R.reading.c)]);
  if(R.writing) rows.push(["writing","写作",`Task 1 ${R.writing.as[0].n} 词 · Task 2 ${R.writing.as[1].n} 词`, "看自动检查和范文"]);
  view(`<div class="xm"><header class="ix-bar"><div class="ix-brand"><b>雅思模考</b><span>成绩</span></div><div class="ix-tools"><button data-ix="home" class="pri">返回</button></div></header>
    <main class="ix-body"><div class="ix-scroll"><div class="xm-result">
      <h2>模考完成</h2>
      <p class="note">用时约 ${Math.max(1, Math.round((Date.now()-Y.started)/60000))} 分钟。听力和阅读按 British Council 公布的参考分数线换算成大致分数段；本站题目没有经过难度校准，阅读文章也比真题短，只能作为参考。口语请到「口语」做完整模拟。</p>
      <div class="tablewrap"><table><thead><tr><th>部分</th><th>结果</th><th>大致分数</th><th></th></tr></thead><tbody>
        ${rows.map(r => `<tr><td><b>${r[1]}</b></td><td>${r[2]}</td><td>${r[3]}</td><td><button class="btn-ghost" data-ixrv="${r[0]}">${Y.rv===r[0] ? "收起" : "查看详情"}</button></td></tr>`).join("")}
      </tbody></table></div>
      ${Y.rv ? reviewHTML(Y.rv) : ""}
    </div></div></main></div>`);
}

/* ---------- 首页 ---------- */
function renderHome(){
  const hist = data.history.slice(-6).reverse();
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>雅思模考</h2><div class="date">考场模式 · 仿照机考界面</div></div>
      <div class="tip"><b>考前准备</b><br>用电脑上的 Edge 浏览器，戴耳机。听力录音只播放一次，中途切换页面会打断录音。</div>
      <div class="tip"><b>界面操作</b><br>拖动中间的分隔条调整左右宽度；选中文章里的文字点「高亮」；底部题号可以跳题，勾选 Review 标记待检查的题；右上角 A−/A+ 调字号，「颜色」切换深浅。</div>
    </aside>
    <section class="desk">
      <article class="task" style="margin-bottom:14px">
        <div class="en">Full Test · Listening, Reading, Writing</div><h3>完整模考</h3>
        <div class="spec"><span>听力 → 阅读 → 写作</span><span>约 2 小时 30 分钟</span></div>
        <p class="note" style="margin:0">按真实顺序连续进行，每部分结束后可以休息。口语在「口语」里做完整模拟（Part 1–3）。</p>
        <div class="row"><button class="btn" data-ixstart="full">开始完整模考</button><a class="btn alt" href="#ielts/ispeaking">去做口语模拟</a></div>
      </article>
      <div class="tasks">${ORDER.map(k => `<article class="task"><div class="en">${SEC[k].en}</div><h3>只考${SEC[k].cn}</h3><div class="spec"><span>${SEC[k].mins}</span></div><p class="note" style="margin:0">${SEC[k].desc}</p><div class="row"><button class="btn alt" data-ixstart="${k}">开始</button></div></article>`).join("")}</div>
      <p class="section-label">最近模考</p>
      ${hist.length ? `<div class="tablewrap history"><table><thead><tr><th>时间</th><th>听力</th><th>阅读</th><th>写作字数</th><th>用时</th></tr></thead><tbody>${hist.map(h => `<tr><td>${new Date(h.t).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}</td><td>${h.listening ? `${h.listening[0]}/40 · ${Q.band("listening", h.listening[0])}` : "—"}</td><td>${h.reading ? `${h.reading[0]}/40 · ${Q.band("reading", h.reading[0])}` : "—"}</td><td>${h.writing ? h.writing.join(" / ") : "—"}</td><td>${h.mins} 分钟</td></tr>`).join("")}</tbody></table></div>`
        : `<p class="note">还没有模考记录。</p>`}
      <div id="cambridgeHome"></div>
    </section>
  </div>`);
  if(App.cambridge) App.cambridge.home($("#cambridgeHome"));
}

/* ---------- 事件 ---------- */
function onClick(e){
  const t = e.target.closest("button,[data-ixq]"); if(!t) return;
  const d = t.dataset;
  if(d.ixstart){ startExam(d.ixstart==="full" ? ORDER.slice() : [d.ixstart]); return }
  if(!Y) return;
  const s = Y.sec;
  if(d.ix){
    const a = d.ix;
    if(a==="quit"){ if(!d.armed){ d.armed = "1"; t.textContent = "再点一次确认退出"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "退出模考" } }, 4000); return } exitExam(); return }
    if(a==="home"){ Y = null; renderHome(); return }
    if(a==="hidetime"){ data.hideTime = !data.hideTime; save(); const h = $("#ixTimeBox"); if(h) h.outerHTML = timeHTML(); return }
    if(a==="font+" || a==="font-"){ data.font = Math.max(-2, Math.min(6, data.font + (a==="font+" ? 2 : -2))); save(); const x = document.querySelector("#view-iexam .xm"); if(x) x.style.setProperty("--ix-font", data.font + "px"); return }
    if(a==="theme"){ App.setTheme(document.documentElement.dataset.theme==="dark" || (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches) ? "light" : "dark"); return }
    if(a==="begin"){ Y.secStart = Date.now(); beginSection(); return }
    if(a==="nextsec"){ nextSection(); return }
    if(a==="play"){ listenPlay(); return }
    if(a==="nextpart"){ listenAfterPart(); return }
    if(a==="submit"){
      const left = s.kind==="writing" ? s.texts.filter((tx,i) => WK.wordsOf(i===s.viewPart && $("#ixText") ? $("#ixText").value : tx).length < WK.MIN_WORDS[i+1]).length : allNums().filter(n => !answered(n)).length;
      if(!d.armed){ d.armed = "1"; t.textContent = left ? (s.kind==="writing" ? "字数未达要求，再点一次提交" : `还有 ${left} 题没答，再点一次提交`) : "确认提交？再点一次"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = s.kind==="listening" ? "交卷" : "提交本部分" } }, 4000); return }
      submitSection(false); return;
    }
    if(a==="prevq" || a==="nextq"){ const ns = allNums(), i = Math.max(0, ns.indexOf(s.lastQ)); goQuestion(ns[Math.max(0, Math.min(ns.length-1, i + (a==="nextq" ? 1 : -1)))] || ns[0]); return }
    return;
  }
  if(d.ixpart!==undefined){
    if(s.kind==="writing"){ const ta = $("#ixText"); if(ta) s.texts[s.viewPart] = ta.value }
    s.viewPart = +d.ixpart; if(s.kind!=="writing") s.lastQ = s.parts[s.viewPart].built.list[0].n; render(); return;
  }
  if(d.ixq){ goQuestion(+d.ixq); return }
  if(d.ixrv){ Y.rv = Y.rv===d.ixrv ? null : d.ixrv; Y.rvPart = 0; renderResult(); return }
  if(d.ixrvpart!==undefined){ Y.rvPart = +d.ixrvpart; renderResult(); return }
}
function onInput(e){
  const t = e.target; if(!Y || !Y.sec) return;
  const s = Y.sec;
  if(t.id==="ixText"){ s.texts[s.viewPart] = t.value; const n = WK.wordsOf(t.value).length, w = $("#ixWords"); if(w) w.textContent = `字数：${n}（至少 ${WK.MIN_WORDS[s.tasks[s.viewPart].task]}）`; const b = document.querySelector(`#view-iexam [data-ixpart="${s.viewPart}"] span`); if(b) b.textContent = `${n} 词`; return }
  if(t.id==="ixFlag"){ if(s.lastQ){ t.checked ? s.flags.add(s.lastQ) : s.flags.delete(s.lastQ); refreshNav() } return }
}
// 记住正在作答的题号，用于底部导航高亮和 Review 标记
function onFocus(e){
  if(!Y || !Y.sec || !Y.sec.parts) return;
  const el = e.target.closest && e.target.closest("[data-iqn]"); if(!el) return;
  const n = +el.dataset.iqn; if(n!==Y.sec.lastQ){ Y.sec.lastQ = n; setTimeout(refreshNav, 0) }
}

App.routes.iexam = {
  exams:["ielts"],
  init(){
    const root = $("#view-iexam");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
    root.addEventListener("focusin", onFocus);
    root.addEventListener("click", onFocus);
    // 答题后刷新底部导航里的「已答」状态
    Q.bind(root, () => Y && Y.sec && Y.sec.ans && Y.phase!=="result" ? Y.sec.ans : null, n => { if(Y && Y.sec){ Y.sec.lastQ = n; refreshNav() } });
  },
  enter(){
    if(!Y) return renderHome();
    render(); if(Y.sec && Y.sec.deadline) startTicker();
    // 离开页面再回来：正在播放的这一部分从头重放
    if(Y.sec && Y.sec.kind==="listening" && Y.sec.phase==="play") listenPlay();
  },
  leave(){ clearInterval(timer); timer = 0; token++; T.stop(); hideHl() }
};
})();
