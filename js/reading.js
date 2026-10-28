/* 阅读模块：补全单词、日常阅读、学术文章；分题型练习与两模块自适应模拟 */
(function(){
const { $, esc, shuffle } = App;
const R = window.READING;
const KIND = { ctw:"补全单词", daily:"日常阅读", academic:"学术文章" };
const KIND_EN = { ctw:"Complete the Words", daily:"Read in Daily Life", academic:"Read an Academic Passage" };
const TYPE = { word:"补全单词", main:"主旨", detail:"细节", vocab:"词汇", infer:"推断", purpose:"目的与修辞", negative:"否定事实", tone:"语气", structure:"文章结构" };
const LEVEL = { 1:["基础","new"], 2:["标准","learn"], 3:["提高","done"] };
const MODULE_MIN = 12;
const ABCD = "ABCD";

const ITEMS = [];
["ctw","daily","academic"].forEach(k => R[k].forEach(it => { it.kind = k; ITEMS.push(it) }));
const BYID = {}; ITEMS.forEach(it => BYID[it.id] = it);

/* ---------- 记录 ---------- */
const rblank = () => ({ done:{}, types:{}, mocks:[], settings:{ underline:true } });
function normalize(d){ const b = rblank(); d = d || {}; return { done:d.done||{}, types:d.types||{}, mocks:d.mocks||[], settings:Object.assign(b.settings, d.settings||{}) } }
let data = normalize(App.store.get(App.KEYS.reading, null));
const save = () => App.store.set(App.KEYS.reading, data);
App.readingData = () => data;
App.loadReadingData = d => { data = normalize(d); save(); if(App.route==="reading" && !S) renderHome() };

/* ---------- 补全单词：生成空格 ---------- */
// 第一句保持完整；之后每隔一个词，保留前一半字母，去掉后一半；共 10 处
function buildCtw(it){
  if(it._built) return it._built;
  const parts = it.text.split(/(\s+)/);
  const firstEnd = parts.findIndex(p => /[.!?]$/.test(p));
  const blanks = []; let count = 0;
  const out = parts.map((p,i) => {
    if(i<=firstEnd || blanks.length>=10 || /^\s*$/.test(p)) return { text:p };
    const m = p.match(/^([A-Za-z]+)([^A-Za-z]*)$/);
    if(!m) return { text:p };
    count++;
    if(count%2===0 && m[1].length>=2){
      const w = m[1], keep = Math.max(1, Math.floor(w.length/2));
      blanks.push({ full:w, shown:w.slice(0,keep), missing:w.slice(keep) });
      return { blank:blanks.length-1, rest:m[2] };
    }
    return { text:p };
  });
  return it._built = { parts:out, blanks };
}

/* ---------- 题目与评分 ---------- */
function makeTask(it){ return { item:it, ans:{}, order: it.qs ? it.qs.map(q => shuffle(q.opts.map((_,i) => i))) : null } }
function grade(task){
  const it = task.item;
  if(it.kind==="ctw"){
    const bl = buildCtw(it).blanks;
    const per = bl.map((b,i) => (task.ans[i]||"").trim().toLowerCase()===b.missing.toLowerCase());
    return { c:per.filter(Boolean).length, n:bl.length, per, types:{ word:[per.filter(Boolean).length, bl.length] } };
  }
  const per = it.qs.map((q,i) => task.ans[i]===0);
  const types = {};
  it.qs.forEach((q,i) => { const t = types[q.type] || (types[q.type] = [0,0]); t[1]++; if(per[i]) t[0]++ });
  return { c:per.filter(Boolean).length, n:per.length, per, types };
}
function record(task, res){
  const prev = data.done[task.item.id] || { cnt:0, best:0 };
  data.done[task.item.id] = { t:Date.now(), c:res.c, n:res.n, cnt:prev.cnt+1, best:Math.max(prev.best||0, res.c) };
  Object.entries(res.types).forEach(([k,[c,n]]) => { const t = data.types[k] || (data.types[k] = [0,0]); t[0]+=c; t[1]+=n });
  save();
}

// 给「模考」用：出题、判分和记录与这里的练习共用
App.readingKit = { R, TYPE, buildCtw, makeTask, grade, record };

/* ---------- 文本渲染 ---------- */
function wrapWords(str, ctx){
  return str.split(/([A-Za-z]+)/).map((p,i) => {
    if(i%2===0) return esc(p);
    const low = p.toLowerCase();
    if(ctx.hl.has(low) && !ctx.marked.has(low)){ ctx.marked.add(low); return `<mark>${p}</mark>` }
    const w = ctx.underline && App.vocab ? App.vocab.lookup(p) : null;
    return w ? `<span class="vw" data-vw="${esc(w)}" role="button" tabindex="0" title="词库单词，点击查看">${p}</span>` : p;
  }).join("");
}
function paras(text, ctx){
  return text.split(/\n\s*\n/).map(par => `<p>${par.split("\n").map(line => wrapWords(line, ctx)).join("<br>")}</p>`).join("");
}
function passageHTML(task, review){
  const it = task.item;
  const ctx = { hl:new Set((it.qs||[]).filter(q => q.hl).map(q => q.hl.toLowerCase())), marked:new Set(), underline: data.settings.underline && (S.mode==="practice" || review) };
  if(it.kind==="daily"){
    return `<div class="doc"><div class="doc-kind">${esc(it.doc)}</div>
      <div class="doc-head">${it.head.map(([k,v]) => `<div><span>${esc(k)}</span>${esc(v)}</div>`).join("")}</div>
      <div class="ptext">${paras(it.text, ctx)}</div></div>`;
  }
  return `<div class="ptext"><h3 class="ptitle">${esc(it.title)}</h3>${paras(it.text, ctx)}</div>`;
}
function questionsHTML(task, review, res){
  const it = task.item;
  return it.qs.map((q,qi) => {
    const chosen = task.ans[qi];
    const opts = task.order[qi].map((oi,k) => {
      let cls = "";
      if(review){ if(oi===0) cls = " right"; else if(chosen===oi) cls = " wrong" }
      else if(chosen===oi) cls = " sel";
      return `<button class="opt${cls}" data-q="${qi}" data-o="${oi}" ${review ? "disabled" : ""}><span class="l">${ABCD[k]}</span><span>${esc(q.opts[oi])}</span></button>`;
    }).join("");
    const head = review ? `<span class="chip ${res.per[qi] ? "done" : "bad"}">${res.per[qi] ? "正确" : chosen==null ? "未作答" : "错误"}</span><span class="chip">${TYPE[q.type]||q.type}</span>` : "";
    return `<div class="qb"><div class="meta"><b style="color:var(--ink)">Question ${qi+1}</b>${head}</div>
      <div class="qt">${esc(q.q)}</div><div class="opts">${opts}</div>
      ${review ? `<div class="exp"><b>解析</b>　${esc(q.why)}</div>${App.reportBtn ? `<div class="rep-row">${App.reportBtn(`托福阅读 ${task.item.id} 第 ${qi+1} 题：${q.q}｜你的答案：${chosen==null ? "未作答" : q.opts[chosen]}｜正确答案：${q.opts[0]}`)}</div>` : ""}` : ""}</div>`;
  }).join("");
}
function ctwHTML(task, review){
  const { parts, blanks } = buildCtw(task.item);
  const body = parts.map(p => {
    if(p.blank===undefined) return esc(p.text);
    const b = blanks[p.blank], v = task.ans[p.blank] || "";
    if(!review) return `${esc(b.shown)}<input class="ctw-in" data-b="${p.blank}" maxlength="${b.missing.length}" style="width:calc(${b.missing.length}ch + 14px)" value="${esc(v)}" placeholder="${"_".repeat(b.missing.length)}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="第 ${p.blank+1} 空，缺 ${b.missing.length} 个字母">${esc(p.rest)}`;
    const ok = v.trim().toLowerCase()===b.missing.toLowerCase();
    return `<span class="ctw-r">${esc(b.shown)}${ok ? `<b class="ok">${esc(b.missing)}</b>` : `<b class="no">${esc(v||"＿")}</b><b class="fix">${esc(b.missing)}</b>`}</span>${esc(p.rest)}`;
  }).join("");
  return `<p class="instr">Fill in the missing letters in the paragraph. 每个下划线代表一个字母。</p><p class="ctw">${body}</p>
    ${review ? `<p class="note" style="margin:0">绿色为答对，红色为你的答案，蓝色为正确拼写。这类题考拼写、语法和上下文，常见的空是连接词、介词和词形变化。</p>` : ""}`;
}

/* ---------- 会话 ---------- */
let S = null, timer = 0;
function stopTimer(){ clearInterval(timer); timer = 0 }
function tick(){
  if(!S) return stopTimer();
  const el = $("#rtimer"); const now = Date.now();
  if(S.mode==="mock" && S.screen==="task"){
    const left = Math.max(0, S.deadline-now);
    if(el){ el.textContent = "剩余 " + fmt(left); el.classList.toggle("warn", left<120000) }
    if(left<=0) submitModule(true);
  }else if(S.mode==="practice" && S.screen==="task" && el){ el.textContent = "用时 " + fmt(now-S.started) }
}
function startTimer(){ stopTimer(); timer = setInterval(tick, 1000) }
const fmt = ms => { const s = Math.round(ms/1000); return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}` };
function view(html){ $("#view-reading").innerHTML = html }

function pick(kind, level, n, avoid){
  const pool = R[kind].filter(it => it.level===level && !avoid.has(it.id));
  return shuffle(pool.slice()).sort((a,b) => ((data.done[a.id]||{}).cnt||0) - ((data.done[b.id]||{}).cnt||0)).slice(0,n);
}
function moduleTasks(level, avoid){
  const list = [...pick("ctw",level,1,avoid), ...pick("daily",level,2,avoid), ...pick("academic",level,1,avoid)];
  list.forEach(it => avoid.add(it.id));
  return list.map(makeTask);
}
function startPractice(id){
  S = { mode:"practice", tasks:[makeTask(BYID[id])], idx:0, screen:"task", started:Date.now() };
  startTimer(); renderTask();
}
function startMock(){
  const avoid = new Set();
  S = { mode:"mock", module:1, avoid, tasks:moduleTasks(2, avoid), idx:0, screen:"task", deadline:Date.now()+MODULE_MIN*60000, mods:[] };
  startTimer(); renderTask();
}
function submitModule(timeUp){
  const res = S.tasks.map(grade);
  const c = res.reduce((a,r) => a+r.c, 0), n = res.reduce((a,r) => a+r.n, 0);
  S.mods.push({ level: S.module===1 ? 2 : S.level2, tasks:S.tasks, res, c, n });
  if(S.module===1){
    S.level2 = c/n >= 0.6 ? 3 : 1;
    S.screen = "between"; S.timeUp = timeUp;
    renderBetween();
  }else{
    S.mods.forEach(m => m.tasks.forEach((t,i) => record(t, m.res[i])));
    data.mocks.push({ t:Date.now(), m1:[S.mods[0].c, S.mods[0].n], m2:[S.mods[1].c, S.mods[1].n], level2:S.level2 });
    if(data.mocks.length>50) data.mocks = data.mocks.slice(-50);
    save();
    S.screen = "result"; S.timeUp = timeUp; stopTimer();
    renderResult();
  }
}
function startModule2(){
  S.module = 2; S.tasks = moduleTasks(S.level2, S.avoid); S.idx = 0; S.screen = "task";
  S.deadline = Date.now()+MODULE_MIN*60000;
  startTimer(); renderTask();
}
function exitSession(){ stopTimer(); S = null; renderHome() }

/* ---------- 首页 ---------- */
function typeStats(){
  const rows = Object.keys(TYPE).filter(k => data.types[k]).map(k => {
    const [c,n] = data.types[k], p = Math.round(c/n*100);
    const col = p>=80 ? "var(--good)" : p>=60 ? "var(--warn)" : "var(--bad)";
    return `<div class="tstat"><span>${TYPE[k]}</span><div class="bar"><i style="width:${p}%;background:${col}"></i></div><b>${c}/${n}</b></div>`;
  });
  return rows.length ? rows.join("") : `<p class="note" style="margin:0">做完题后，这里会按题型显示正确率，帮你找到薄弱环节。</p>`;
}
function row(it){
  const d = data.done[it.id], lv = LEVEL[it.level];
  return `<button class="setrow" data-practice="${it.id}"><b>${esc(it.title)}</b><span class="chip ${lv[1]}">${lv[0]}</span><span class="note">${esc(it.topic || it.doc || "")}</span><small>${d ? `上次 ${d.c}/${d.n}` : ""}</small></button>`;
}
function renderHome(){
  const mocks = data.mocks.slice(-5).reverse();
  const lvName = l => LEVEL[l][0];
  const list = kind => R[kind].slice().sort((a,b) => a.level-b.level).map(row).join("");
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>阅读练习</h2><div class="date">新版托福 · 两个自适应模块</div></div>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:8px">
        <p class="section-label" style="margin:0">各题型正确率</p>
        ${typeStats()}
      </section>
      <section class="panel" style="padding:14px">
        <label class="check"><input type="checkbox" id="optUnder" ${data.settings.underline ? "checked" : ""}> 文章里标出词库单词（点击可查看、加入背词）</label>
        <p class="note" style="margin:6px 0 0">模拟考试作答时不标出，看解析时会标出。</p>
      </section>
      <div class="tip"><b>做题顺序</b><br>日常阅读先看题目再找信息；学术文章先扫一遍每段首句，再逐题回原文定位。词汇题一定要把选项代回原句读一遍。</div>
    </aside>
    <section class="desk">
      <article class="task" style="margin-bottom:14px">
        <div class="en">Full Section · Adaptive</div>
        <h3>完整模拟</h3>
        <div class="spec"><span>2 个模块</span><span>每模块 4 个任务</span><span>每模块 ${MODULE_MIN} 分钟</span></div>
        <p class="note" style="margin:0">第一模块是标准难度；第二模块根据第一模块的正确率变难或变简单，和正式考试的自适应方式一致。每个模块含 1 篇补全单词、2 篇日常阅读、1 篇学术文章。模块内可以来回切换，交卷后不能返回。</p>
        <div class="row"><button class="btn" data-mock>开始模拟</button></div>
        ${mocks.length ? `<div class="setlist">${mocks.map(m => `<div class="setrow" style="cursor:default"><b>${new Date(m.t).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}</b><span class="note">模块一 ${m.m1[0]}/${m.m1[1]} · 模块二（${lvName(m.level2)}）${m.m2[0]}/${m.m2[1]}</span><small>${Math.round((m.m1[0]+m.m2[0])/(m.m1[1]+m.m2[1])*100)}%</small></div>`).join("")}</div>` : ""}
      </article>
      <div class="tasks">
        <article class="task">
          <div class="en">${KIND_EN.ctw}</div><h3>${KIND.ctw}</h3>
          <div class="spec"><span>一段学术短文</span><span>10 个空</span></div>
          <p class="note" style="margin:0">第一句完整，之后每隔一个词缺后半部分字母，根据上下文补全拼写。</p>
          <div class="setlist">${list("ctw")}</div>
        </article>
        <article class="task">
          <div class="en">${KIND_EN.daily}</div><h3>${KIND.daily}</h3>
          <div class="spec"><span>邮件、通知、告示</span><span>每篇 2–3 题</span></div>
          <p class="note" style="margin:0">校园生活中的实用文字，考目的、细节、语气和言外之意。</p>
          <div class="setlist">${list("daily")}</div>
        </article>
        <article class="task">
          <div class="en">${KIND_EN.academic}</div><h3>${KIND.academic}</h3>
          <div class="spec"><span>约 170–260 词</span><span>每篇 5 题</span></div>
          <p class="note" style="margin:0">大学课程风格的短文，考主旨、细节、词汇、推断、作者意图和文章结构。</p>
          <div class="setlist">${list("academic")}</div>
        </article>
      </div>
    </section>
  </div>`);
}

/* ---------- 做题界面 ---------- */
function renderTask(review){
  const task = review ? review.task : S.tasks[S.idx];
  const it = task.item, res = review ? review.res : null;
  const isMock = S.mode==="mock";
  const lv = LEVEL[it.level];
  const steps = !review && isMock ? `<div class="steps">${S.tasks.map((t,i) => `<i class="${i<S.idx ? "on" : i===S.idx ? "cur" : ""}"></i>`).join("")}</div>` : "";
  const label = isMock && !review ? `模块 ${S.module} · 任务 ${S.idx+1}/${S.tasks.length}` : "";
  const body = it.kind==="ctw" ? `<div class="ctw-wrap">${ctwHTML(task, !!review)}</div>`
    : `<div class="rgrid"><article class="pane-text">${passageHTML(task, !!review)}</article><section class="pane-q">${questionsHTML(task, !!review, res)}</section></div>`;
  let foot = "";
  if(review && S.mode==="practice") foot = `<button class="btn" data-redo>再做一遍</button><button class="btn alt" data-home>返回题库</button>`;
  else if(review) foot = `<button class="btn" data-back-result>返回成绩单</button>`;
  else if(isMock){
    const last = S.idx===S.tasks.length-1;
    foot = `${S.idx>0 ? '<button class="btn alt" data-prev>上一个任务</button>' : ""}
      ${last ? `<button class="btn" data-submit-module>${S.module===1 ? "提交第一模块" : "交卷并查看成绩"}</button>` : '<button class="btn" data-next>下一个任务</button>'}
      <span class="note">${last ? "提交后不能再修改本模块的答案。" : ""}</span>`;
  }else foot = `<button class="btn" data-submit>提交答案</button><span class="note">没把握的题也选一个，提交后会显示解析。</span>`;
  const banner = review ? `<div class="fb ${res.c===res.n ? "ok" : "no"}">本篇答对 ${res.c} / ${res.n}${S.mode==="practice" ? "。下面是逐题解析。" : ""}</div>` : "";
  view(`<div class="stage reading">
    <div class="meta"><span class="chip learn">${KIND[it.kind]}</span><span>${esc(it.title)}</span><span class="chip ${lv[1]}">${lv[0]}</span>
      <span class="left">${label}</span>${review ? "" : `<span class="timer" id="rtimer"></span>`}
      ${review ? "" : `<button class="btn alt" data-quit style="margin-left:8px">${isMock ? "放弃模拟" : "退出"}</button>`}</div>
    ${steps}${banner}${body}
    <div class="row">${foot}</div>
  </div>`);
  if(!review){ tick(); const first = document.querySelector(".ctw-in"); if(first && !Object.keys(task.ans).length) first.focus() }
}
function renderBetween(){
  stopTimer();
  view(`<div class="stage"><div class="phase">
    <div class="page-title">第一模块已提交</div>
    <p class="note" style="max-width:48ch;margin:0">${S.timeUp ? "时间到，系统已自动提交。" : ""}第二模块的难度已根据你在第一模块的表现调整。准备好后开始，计时 ${MODULE_MIN} 分钟。</p>
    <div class="row" style="justify-content:center"><button class="btn" data-module2>开始第二模块</button></div>
  </div></div>`);
}
function renderResult(){
  const all = S.mods.reduce((a,m) => [a[0]+m.c, a[1]+m.n], [0,0]);
  const types = {};
  S.mods.forEach(m => m.res.forEach(r => Object.entries(r.types).forEach(([k,[c,n]]) => { const t = types[k] || (types[k] = [0,0]); t[0]+=c; t[1]+=n })));
  view(`<div class="stage">
    <div class="meta"><span class="chip done">模拟完成</span><span>阅读 · 两个模块</span></div>
    ${S.timeUp ? `<div class="fb no">第二模块时间到，已自动交卷。</div>` : ""}
    <div class="row" style="align-items:baseline;gap:16px">
      <div class="score">${Math.round(all[0]/all[1]*100)}<span style="font-size:24px;color:var(--muted)">%</span></div>
      <div class="note">共答对 ${all[0]} / ${all[1]}。第二模块难度：<b>${LEVEL[S.level2][0]}</b>${S.level2===3 ? "（第一模块表现好，进入了较难的模块，正式考试中这部分题目分值更高）" : "（第一模块正确率不到六成，进入了较简单的模块）"}。官方的分数换算没有公开，这里只给正确率。</div>
    </div>
    <div class="tablewrap"><table><thead><tr><th>题型</th><th>答对</th><th>正确率</th></tr></thead><tbody>
      ${Object.keys(TYPE).filter(k => types[k]).map(k => `<tr><td>${TYPE[k]}</td><td>${types[k][0]} / ${types[k][1]}</td><td>${Math.round(types[k][0]/types[k][1]*100)}%</td></tr>`).join("")}
    </tbody></table></div>
    ${S.mods.map((m,mi) => `<div><p class="section-label">模块 ${mi+1} · ${LEVEL[m.level][0]} · ${m.c}/${m.n}</p>
      <div class="setlist">${m.tasks.map((t,ti) => `<button class="setrow" data-rv="${mi}:${ti}"><b>${esc(t.item.title)}</b><span class="note">${KIND[t.item.kind]}</span><small>${m.res[ti].c}/${m.res[ti].n} · 看解析</small></button>`).join("")}</div></div>`).join("")}
    <div class="row"><button class="btn" data-home>返回阅读首页</button><button class="btn alt" data-mock>再模拟一次</button></div>
  </div>`);
}
function renderCurrent(){
  if(!S) return renderHome();
  if(S.screen==="task") return renderTask();
  if(S.screen==="between") return renderBetween();
  if(S.screen==="result") return renderResult();
  if(S.screen==="review") return renderTask(S.review);
}

/* ---------- 事件 ---------- */
function onClick(e){
  const v = e.target.closest("[data-vw]");
  if(v) return;   // 词库单词的点击由 vocab.js 统一处理
  const t = e.target.closest("button"); if(!t) return;
  const d = t.dataset;
  if(d.practice){ startPractice(d.practice); return }
  if(d.mock!==undefined){ startMock(); return }
  if(d.o!==undefined){
    const task = S.tasks[S.idx]; task.ans[+d.q] = +d.o;
    t.parentElement.querySelectorAll(".opt").forEach(b => b.classList.toggle("sel", b===t));
    return;
  }
  if(d.submit!==undefined){
    const task = S.tasks[0], res = grade(task);
    record(task, res); S.screen = "review"; S.review = { task, res }; stopTimer();
    renderTask(S.review); window.scrollTo(0,0); return;
  }
  if(d.redo!==undefined){ startPractice(S.tasks[0].item.id); return }
  if(d.home!==undefined){ exitSession(); return }
  if(d.next!==undefined){ S.idx++; renderTask(); window.scrollTo(0,0); return }
  if(d.prev!==undefined){ S.idx--; renderTask(); window.scrollTo(0,0); return }
  if(d.submitModule!==undefined){ submitModule(false); window.scrollTo(0,0); return }
  if(d.module2!==undefined){ startModule2(); return }
  if(d.rv){ const [mi,ti] = d.rv.split(":").map(Number); const m = S.mods[mi]; S.screen = "review"; S.review = { task:m.tasks[ti], res:m.res[ti] }; renderTask(S.review); window.scrollTo(0,0); return }
  if(d.backResult!==undefined){ S.screen = "result"; renderResult(); return }
  if(d.quit!==undefined){
    if(S.mode==="mock" && !d.armed){ d.armed = "1"; t.textContent = "再点一次，放弃本次模拟"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "放弃模拟" } }, 4000); return }
    exitSession(); return;
  }
}
function onInput(e){
  const t = e.target;
  if(t.id==="optUnder"){ data.settings.underline = t.checked; save(); return }
  if(t.classList.contains("ctw-in") && S){
    const clean = t.value.replace(/[^A-Za-z]/g,"");
    if(clean!==t.value) t.value = clean;
    S.tasks[S.idx].ans[+t.dataset.b] = clean;
    if(e.type==="input" && clean.length>=+t.maxLength){
      const all = Array.from(document.querySelectorAll(".ctw-in")), i = all.indexOf(t);
      if(all[i+1]) all[i+1].focus();
    }
  }
}
function onKey(e){
  if(App.route!=="reading") return;
  const t = e.target;
  if(t.classList && t.classList.contains("ctw-in") && e.key==="Backspace" && !t.value){
    const all = Array.from(document.querySelectorAll(".ctw-in")), i = all.indexOf(t);
    if(all[i-1]){ e.preventDefault(); all[i-1].focus() }
  }
}

App.routes.reading = {
  exams:["toefl"],
  init(){
    const root = $("#view-reading");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
    root.addEventListener("keydown", onKey);
  },
  enter(){ renderCurrent() }
};
})();
