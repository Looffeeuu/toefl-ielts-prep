/* 雅思听力：单个部分练习与四个部分 40 题的完整模拟。
   和真实考试一样，先有阅读题目的时间，录音播放时可以同时作答，录音只播放一次；完整模拟最后有 2 分钟检查时间 */
(function(){
const { $, esc } = App;
const Q = App.iq, T = App.tts, TESTS = window.IELTS_LISTENING;
const READ_SEC = 30, CHECK_SEC = 120;
const BYID = {}; TESTS.forEach(t => t.parts.forEach(p => { p.test = t; BYID[`${t.id}:${p.part}`] = p }));

/* ---------- 记录 ---------- */
function normalize(d){ d = d || {}; return { done:d.done || {}, types:d.types || {}, mocks:Array.isArray(d.mocks) ? d.mocks : [] } }
let data = normalize(App.store.get(App.KEYS.ilistening, null));
const save = () => App.store.set(App.KEYS.ilistening, data);
App.ieltsListeningData = () => data;
App.loadIeltsListeningData = d => { data = normalize(d); save(); if(App.route==="ilistening" && !S) renderHome() };
function record(key, res){
  const prev = data.done[key] || { cnt:0, best:0 };
  data.done[key] = { t:Date.now(), c:res.c, n:res.n, cnt:prev.cnt+1, best:Math.max(prev.best || 0, res.c) };
  Object.entries(res.types).forEach(([k,[c,n]]) => { const t = data.types[k] || (data.types[k] = [0,0]); t[0]+=c; t[1]+=n });
}

/* ---------- 录音：旁白 + 对话，按句播放 ---------- */
function segments(p){
  if(p._segs) return p._segs;
  const used = Object.values(p.speakers), narrator = used.includes("M2") ? "W2" : "M2";
  const out = [{ who:narrator, text:`Part ${p.part}. ${p.intro}`, line:-1, gap:900 }];
  p.script.split("\n").forEach((row,li) => {
    const m = row.match(/^([^:]+):\s*(.*)$/); if(!m) return;
    const who = p.speakers[m[1].trim()] || "W";
    T.sentences(m[2]).forEach((s,i,a) => out.push({ who, name:m[1].trim(), text:s, line:li, gap: i===a.length-1 ? 380 : 90 }));
  });
  return p._segs = out;
}

// 给「雅思模考」用
App.ilisteningKit = { TESTS, segments, record: (key, res) => { record(key, res); save() }, addMock: m => { data.mocks.push(m); if(data.mocks.length>50) data.mocks = data.mocks.slice(-50); save() } };

/* ---------- 会话 ---------- */
// S：{ mode, parts:[{ p, built }], cur, ans, phase:"read"|"play"|"check"|"interrupted"|"review", until, res }
let S = null, timer = 0;
const view = html => { $("#view-ilistening").innerHTML = html };
function stopTimer(){ clearInterval(timer); timer = 0 }
// 题号和真实考试一致：Part 1 是 1–10，Part 2 是 11–20……单独练某一部分时也一样
function makeParts(list){ return list.map(p => ({ p, built:Q.build(p.groups, (p.part-1)*10 + 1, { label:`雅思听力 ${p.test.id} Part ${p.part}` }) })) }
function startPart(key){ S = { mode:"practice", parts:makeParts([BYID[key]]), cur:0, ans:{} }; beginRead() }
function startMock(testId){ const t = TESTS.find(x => x.id===testId); S = { mode:"mock", test:t, parts:makeParts(t.parts), cur:0, ans:{} }; beginRead() }

// 阅读题目时间：显示本部分题目，可以提前开始
function beginRead(){
  S.phase = "read"; S.until = Date.now() + READ_SEC*1000;
  renderStage(); window.scrollTo(0,0);
  stopTimer(); timer = setInterval(() => { if(!S) return stopTimer(); const left = S.until - Date.now(); setBar(); if(left<=0) beginPlay() }, 250);
}
function beginPlay(){
  stopTimer();
  if(!T.canPlay()){ S.phase = "play"; S.textMode = true; setBar(); return }
  S.phase = "play"; setBar();
  const part = S.parts[S.cur], segs = segments(part.p), me = S;
  T.play(segs, (i,n) => { const el = $("#ilProg"); if(el) el.style.width = Math.round(i/n*100) + "%" }).then(ok => {
    if(!ok || S!==me || S.phase!=="play") return;
    afterPart();
  });
}
// 一个部分播完：练习直接等提交；模拟进入下一部分，最后一部分后有 2 分钟检查时间
function afterPart(){
  if(S.mode==="practice"){ S.phase = "check"; setBar(); return }
  if(S.cur < S.parts.length-1){ S.cur++; beginRead(); return }
  S.phase = "check"; S.until = Date.now() + CHECK_SEC*1000; setBar();
  stopTimer(); timer = setInterval(() => { if(!S) return stopTimer(); setBar(); if(S.until - Date.now()<=0) submit(true) }, 250);
}
function submit(timeUp){
  stopTimer(); T.stop();
  S.res = S.parts.map(x => Q.grade(x.built, S.ans));
  S.parts.forEach((x,i) => record(`${x.p.test.id}:${x.p.part}`, S.res[i]));
  const c = S.res.reduce((a,r) => a+r.c, 0), n = S.res.reduce((a,r) => a+r.n, 0);
  if(S.mode==="mock"){ data.mocks.push({ t:Date.now(), test:S.test.id, c, n }); if(data.mocks.length>50) data.mocks = data.mocks.slice(-50) }
  save();
  S.phase = "review"; S.timeUp = timeUp; S.total = [c, n]; S.cur = 0;
  renderStage(); window.scrollTo(0,0);
}
function exit(){ stopTimer(); T.stop(); S = null; renderHome() }

/* ---------- 首页 ---------- */
function typeStats(){
  const rows = ["gap","mcq","match"].filter(k => data.types[k]).map(k => {
    const [c,n] = data.types[k], p = Math.round(c/n*100), col = p>=80 ? "var(--good)" : p>=60 ? "var(--warn)" : "var(--bad)";
    return `<div class="tstat"><span>${Q.TYPE[k]}</span><div class="bar"><i style="width:${p}%;background:${col}"></i></div><b>${c}/${n}</b></div>`;
  });
  return rows.length ? rows.join("") : `<p class="note" style="margin:0">做完题后，这里会按题型显示正确率。</p>`;
}
const PART_DESC = { 1:"日常对话（如预订、咨询）", 2:"日常独白（如场所介绍）", 3:"学术场景的讨论", 4:"学术讲座" };
function renderHome(){
  const mocks = data.mocks.slice(-5).reverse();
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>雅思听力</h2><div class="date">4 个部分 · 40 题 · 约 30 分钟</div></div>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:8px">
        <p class="section-label" style="margin:0">各题型正确率</p>${typeStats()}
      </section>
      ${T.canPlay() ? "" : `<div class="fb no">这个浏览器没有可用的英文朗读声音，录音无法播放，题目会改为显示原文。建议用 Edge 或 Chrome。</div>`}
      <div class="tip"><b>边听边写</b><br>每部分开始前利用阅读时间看题，预测答案是数字、日期、名字还是名词。注意字数要求和拼写；说话人改口时，以最后的说法为准。录音语速和声音在「设置」里调。</div>
    </aside>
    <section class="desk">
      ${TESTS.map(t => `<article class="task" style="margin-bottom:14px">
        <div class="en">Listening Practice Test</div>
        <h3>${esc(t.name)}</h3>
        <div class="spec"><span>4 个部分</span><span>40 题</span></div>
        <div class="setlist">${t.parts.map(p => { const d = data.done[`${t.id}:${p.part}`];
          return `<button class="setrow" data-part="${t.id}:${p.part}"><b>Part ${p.part} · ${esc(p.title)}</b><span class="note">${PART_DESC[p.part]}</span><small>${d ? `上次 ${d.c}/${d.n}` : ""}</small></button>` }).join("")}</div>
        <div class="row"><button class="btn" data-mock="${t.id}">整套模拟（40 题）</button>
          ${mocks.filter(m => m.test===t.id).slice(0,1).map(m => `<span class="note">上次 ${m.c}/${m.n} · ${Q.band("listening", m.c)}</span>`).join("")}</div>
      </article>`).join("")}
      <p class="note">单个部分练习：先有 ${READ_SEC} 秒看题，然后播放录音，边听边作答，播完后提交。整套模拟：四个部分连续进行，最后有 2 分钟检查时间，时间到自动交卷。题目和录音都是原创的。</p>
    </section>
  </div>`);
}

/* ---------- 作答界面 ---------- */
function barHTML(){
  if(!S) return "";
  const part = S.parts[S.cur].p, mock = S.mode==="mock";
  if(S.phase==="read"){
    const left = Math.max(0, Math.ceil((S.until - Date.now())/1000));
    return `<span class="il-state">阅读题目时间 <b id="ilCount">${left}</b> 秒</span><button class="btn" data-play>${T.canPlay() ? "开始播放" : "显示原文"}</button>`;
  }
  if(S.phase==="play") return S.textMode ? `<span class="il-state">浏览器无法朗读，原文显示在下方</span>${mock && S.cur<S.parts.length-1 ? `<button class="btn" data-nextpart>下一部分</button>` : `<button class="btn" data-submit>${mock ? "交卷" : "提交答案"}</button>`}`
    : `<span class="il-state"><span class="recdot" style="background:var(--primary)"></span>正在播放 Part ${part.part} · 只播放一次</span><div class="bar il-bar"><i id="ilProg" style="width:0"></i></div>`;
  if(S.phase==="check"){
    if(!mock) return `<span class="il-state">录音播放完毕，检查一下拼写和字数</span><button class="btn" data-submit>提交答案</button>`;
    const left = Math.max(0, S.until - Date.now()), s = Math.ceil(left/1000);
    return `<span class="il-state">检查时间 <b id="ilCount">${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}</b>，时间到自动交卷</span><button class="btn" data-submit>交卷</button>`;
  }
  if(S.phase==="interrupted") return `<span class="il-state">离开页面时录音被打断了，已填的答案还在</span><button class="btn" data-play>从头重新播放 Part ${part.part}</button>`;
  return "";
}
// 状态栏：阶段变化时整体重画；倒计时只改数字，避免按钮在点击时被替换
function setBar(){
  const el = $("#ilBar"); if(!el || !S) return;
  const key = `${S.phase}:${S.cur}`;
  if(el.dataset.key!==key){
    el.dataset.key = key; el.innerHTML = barHTML();
    const el2 = $("#ilText"); if(el2) el2.innerHTML = S.textMode && S.phase==="play" ? transcriptHTML(S.parts[S.cur].p) : "";
    return;
  }
  const c = $("#ilCount"); if(!c) return;
  const left = Math.max(0, S.until - Date.now()), sec = Math.ceil(left/1000);
  c.textContent = S.phase==="read" ? sec : `${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}`;
}
function transcriptHTML(p){
  const segs = segments(p), lines = [];
  segs.forEach((s,i) => { if(s.line<0) return; const l = lines[s.line] || (lines[s.line] = { name:s.name, parts:[] }); l.parts.push(`<span class="seg" data-seg="${i}" title="点击重听这一句">${S && S.phase==="review" && App.vocab ? App.vocab.linkify(s.text) : esc(s.text)}</span>`) });
  const many = new Set(Object.keys(p.speakers)).size>1;
  return `<div class="ltrans">${lines.filter(Boolean).map(l => `<p>${many ? `<b class="who">${esc(l.name)}</b>` : ""}${l.parts.join(" ")}</p>`).join("")}</div>`;
}
function renderStage(){
  if(!S) return renderHome();
  const mock = S.mode==="mock", review = S.phase==="review", x = S.parts[S.cur], p = x.p;
  const steps = mock ? `<div class="steps">${S.parts.map((_,i) => `<i class="${review || i<S.cur ? "on" : i===S.cur ? "cur" : ""}"></i>`).join("")}</div>` : "";
  if(review){
    const [c,n] = S.total;
    const tabs = S.parts.length>1 ? `<div class="tabs ir-tabs">${S.parts.map((y,i) => `<button class="tab" data-tab="${i}" aria-selected="${i===S.cur}">Part ${y.p.part}<span class="n">${S.res[i].c}/${S.res[i].n}</span></button>`).join("")}</div>` : "";
    view(`<div class="stage listening">
      <div class="meta"><span class="chip done">${mock ? "模拟完成" : "练习完成"}</span><span>${mock ? esc(S.test.name) + " · 整套" : `Part ${p.part} · ${esc(p.title)}`}</span></div>
      <div class="fb ${c===n ? "ok" : "no"}">${S.timeUp ? "检查时间结束，已自动交卷。" : ""}${mock ? `40 题答对 ${c} 题，按参考分数线对应 <b>${Q.band("listening", c)}</b>。官方分数线每场略有不同，本站题目也没有经过难度校准，只能作为参考。` : `本部分答对 ${c} / ${n}。`}</div>
      ${tabs}
      <div class="rgrid"><div class="pane-text"><div class="row" style="margin:0 0 8px"><p class="section-label" style="margin:0">原文 · Part ${p.part}</p><button class="btn-ghost" data-playall>播放全文</button></div>${transcriptHTML(p)}</div>
        <section class="pane-q iq">${Q.review(x.built, S.ans, S.res[S.cur])}</section></div>
      <div class="row">${mock ? `<button class="btn" data-mock="${S.test.id}">再模拟一次</button>` : `<button class="btn" data-part="${p.test.id}:${p.part}">再做一遍</button>`}<button class="btn alt" data-home>返回</button></div>
    </div>`);
    return;
  }
  view(`<div class="stage listening">
    <div class="meta"><span class="chip learn">雅思听力</span><span>${mock ? esc(S.test.name) + " · 整套模拟" : esc(p.test.name)}</span><span class="left">Part ${p.part} · Questions ${x.built.list[0].n}–${x.built.list[x.built.list.length-1].n}</span>
      <button class="btn alt" data-quit style="margin-left:8px">${mock ? "放弃模拟" : "退出"}</button></div>
    ${steps}
    <div class="il-bar-row" id="ilBar" data-key="${S.phase}:${S.cur}">${barHTML()}</div>
    <p class="instr">${esc(p.intro)}</p>
    <div id="ilText"></div>
    <section class="iq il-q">${Q.render(x.built, S.ans)}</section>
  </div>`);
}

/* ---------- 事件 ---------- */
function onClick(e){
  const sg = e.target.closest("[data-seg]");
  if(e.target.closest("[data-vw]")) return;   // 点词库单词是查词，不是重听这一句
  if(sg && S && S.phase==="review"){ const s = segments(S.parts[S.cur].p)[+sg.dataset.seg]; T.stop(); App.speak(s.text, T.voiceFor(s.who)); return }
  const t = e.target.closest("button"); if(!t || t.dataset.iqv!==undefined) return;
  const d = t.dataset;
  if(d.part){ T.stop(); startPart(d.part); return }
  if(d.mock){ T.stop(); startMock(d.mock); return }
  if(d.play!==undefined){ beginPlay(); return }
  if(d.nextpart!==undefined){ afterPart(); return }
  if(d.playall!==undefined){ T.play(segments(S.parts[S.cur].p)); return }
  if(d.tab!==undefined){ T.stop(); S.cur = +d.tab; renderStage(); return }
  if(d.home!==undefined){ exit(); return }
  if(d.submit!==undefined){
    const left = S.parts.reduce((a,x) => a + x.built.list.length - Q.answered(x.built, S.ans), 0);
    if(left && !d.armed){ d.armed = "1"; t.textContent = `还有 ${left} 题没答，再点一次交卷`; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = S && S.mode==="mock" ? "交卷" : "提交答案" } }, 4000); return }
    submit(false); return;
  }
  if(d.quit!==undefined){
    if(!d.armed){ d.armed = "1"; t.textContent = "再点一次，放弃作答"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = S && S.mode==="mock" ? "放弃模拟" : "退出" } }, 4000); return }
    exit(); return;
  }
}

App.routes.ilistening = {
  exams:["ielts"],
  init(){
    const root = $("#view-ilistening");
    root.addEventListener("click", onClick);
    Q.bind(root, () => S && S.phase!=="review" ? S.ans : null);
  },
  enter(){
    if(!S) return renderHome();
    renderStage();
    if(S.phase==="read") beginRead();
    else if(S.phase==="check" && S.mode==="mock"){ stopTimer(); timer = setInterval(() => { if(!S) return stopTimer(); setBar(); if(S.until - Date.now()<=0) submit(true) }, 250) }
  },
  // 离开页面时停止播放；回来后可以从头重播这一部分
  leave(){ stopTimer(); if(S && S.phase==="play" && !S.textMode){ T.stop(); S.phase = "interrupted" } else T.stop() }
};
})();
