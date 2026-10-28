/* 雅思阅读（学术类）：单篇练习（建议 20 分钟）与三篇 40 题、60 分钟的完整模拟 */
(function(){
const { $, esc, shuffle } = App;
const Q = App.iq, P = window.IELTS_READING;
const BYID = {}; P.forEach(p => BYID[p.id] = p);
const LEVEL = { 1:["第 1 篇难度","new"], 2:["第 2 篇难度","learn"], 3:["第 3 篇难度","done"] };
const PRACTICE_MIN = 20, MOCK_MIN = 60;
const qCount = p => p.groups.reduce((a,g) => a + g.items.filter(it => !it.label).length, 0);
const wordCount = p => p.paras.reduce((a,[,t]) => a + t.split(/\s+/).length, 0);

/* ---------- 记录 ---------- */
const blank = () => ({ done:{}, types:{}, mocks:[] });
function normalize(d){ d = d || {}; return { done:d.done || {}, types:d.types || {}, mocks:Array.isArray(d.mocks) ? d.mocks : [] } }
let data = normalize(App.store.get(App.KEYS.ireading, null));
const save = () => App.store.set(App.KEYS.ireading, data);
App.ieltsReadingData = () => data;
App.loadIeltsReadingData = d => { data = normalize(d); save(); if(App.route==="ireading" && !S) renderHome() };
function record(p, res){
  const prev = data.done[p.id] || { cnt:0, best:0 };
  data.done[p.id] = { t:Date.now(), c:res.c, n:res.n, cnt:prev.cnt+1, best:Math.max(prev.best || 0, res.c) };
  Object.entries(res.types).forEach(([k,[c,n]]) => { const t = data.types[k] || (data.types[k] = [0,0]); t[0]+=c; t[1]+=n });
}

/* ---------- 会话 ---------- */
// S：{ mode, units:[{ p, built }], cur, ans, started, deadline, phase:"do"|"review", res }
let S = null, timer = 0;
const view = html => { $("#view-ireading").innerHTML = html };
const fmt = ms => { const s = Math.max(0, Math.round(Math.abs(ms)/1000)); return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}` };
function stopTimer(){ clearInterval(timer); timer = 0 }
function startTimer(){ stopTimer(); timer = setInterval(tick, 1000); tick() }
function tick(){
  const el = $("#irTimer"); if(!S || S.phase!=="do"){ stopTimer(); return }
  const left = S.deadline - Date.now();
  if(S.mode==="mock" && left<=0){ submit(true); return }
  if(el){ el.textContent = left>=0 ? `剩余 ${fmt(left)}` : `超时 ${fmt(left)}`; el.classList.toggle("warn", left<5*60000) }
}
function makeUnits(list){
  let n = 1;
  return list.map(p => { const built = Q.build(p.groups, n, { paras:p.paras.map(([k]) => k) }); n += built.list.length; return { p, built } });
}
function startPractice(id){
  S = { mode:"practice", units:makeUnits([BYID[id]]), cur:0, ans:{}, started:Date.now(), deadline:Date.now() + PRACTICE_MIN*60000, phase:"do" };
  render(); startTimer(); window.scrollTo(0,0);
}
function startMock(){
  // 每个难度各取一篇，优先选做得少的
  const pick = lv => shuffle(P.filter(p => p.level===lv)).sort((a,b) => ((data.done[a.id]||{}).cnt||0) - ((data.done[b.id]||{}).cnt||0))[0];
  S = { mode:"mock", units:makeUnits([1,2,3].map(pick)), cur:0, ans:{}, started:Date.now(), deadline:Date.now() + MOCK_MIN*60000, phase:"do" };
  render(); startTimer(); window.scrollTo(0,0);
}
function submit(timeUp){
  stopTimer();
  S.res = S.units.map(u => Q.grade(u.built, S.ans));
  S.units.forEach((u,i) => record(u.p, S.res[i]));
  const c = S.res.reduce((a,r) => a+r.c, 0), n = S.res.reduce((a,r) => a+r.n, 0);
  if(S.mode==="mock"){
    data.mocks.push({ t:Date.now(), c, n, mins:Math.round((Date.now()-S.started)/60000), ids:S.units.map(u => u.p.id) });
    if(data.mocks.length>50) data.mocks = data.mocks.slice(-50);
  }
  save();
  S.phase = "review"; S.timeUp = timeUp; S.total = [c, n]; S.cur = 0;
  render(); window.scrollTo(0,0);
}
function exit(){ stopTimer(); S = null; renderHome() }

/* ---------- 首页 ---------- */
function typeStats(){
  const rows = Object.keys(Q.TYPE).filter(k => data.types[k]).map(k => {
    const [c,n] = data.types[k], p = Math.round(c/n*100), col = p>=80 ? "var(--good)" : p>=60 ? "var(--warn)" : "var(--bad)";
    return `<div class="tstat wide"><span>${Q.TYPE[k]}</span><div class="bar"><i style="width:${p}%;background:${col}"></i></div><b>${c}/${n}</b></div>`;
  });
  return rows.length ? rows.join("") : `<p class="note" style="margin:0">做完题后，这里会按题型显示正确率。</p>`;
}
function renderHome(){
  stopTimer();
  const mocks = data.mocks.slice(-5).reverse();
  const row = p => { const d = data.done[p.id], lv = LEVEL[p.level];
    return `<button class="setrow" data-practice="${p.id}"><b>${esc(p.title)}</b><span class="chip ${lv[1]}">${lv[0]}</span><span class="note">${esc(p.topic)} · ${wordCount(p)} 词 · ${qCount(p)} 题</span><small>${d ? `上次 ${d.c}/${d.n}` : ""}</small></button>` };
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>雅思阅读</h2><div class="date">学术类 · 3 篇文章 · 40 题 · 60 分钟</div></div>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:8px">
        <p class="section-label" style="margin:0">各题型正确率</p>${typeStats()}
      </section>
      <div class="tip"><b>时间分配</b><br>三篇文章由易到难，每篇大约 20 分钟。雅思阅读没有额外的誊写时间，答案要在 60 分钟内写完。先做有顺序的题（判断、填空），段落配对和标题题可以放在读完全文之后。</div>
    </aside>
    <section class="desk">
      <article class="task" style="margin-bottom:14px">
        <div class="en">Full Academic Reading Test</div>
        <h3>完整模拟</h3>
        <div class="spec"><span>3 篇文章</span><span>40 题</span><span>60 分钟，时间到自动交卷</span></div>
        <p class="note" style="margin:0">从三个难度各抽一篇，题号 1–40 连续编排，可以在三篇之间来回切换。交卷后按 British Council 公布的参考分数线给出大致分数段。</p>
        <div class="row"><button class="btn" data-mock>开始模拟</button></div>
        ${mocks.length ? `<div class="setlist">${mocks.map(m => `<div class="setrow" style="cursor:default"><b>${new Date(m.t).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}</b><span class="note">${m.c}/${m.n} · 用时 ${m.mins} 分钟</span><small>${Q.band("reading", m.c)}</small></div>`).join("")}</div>` : ""}
      </article>
      <article class="task">
        <div class="en">Practice by Passage</div>
        <h3>单篇练习</h3>
        <div class="spec"><span>每篇 13–14 题</span><span>建议 20 分钟</span></div>
        <p class="note" style="margin:0">题型包括判断（True / False / Not Given、Yes / No / Not Given）、段落标题、段落信息配对、人物观点配对、句子结尾配对、摘要和笔记填空、单选和简答。文章是原创的，每篇约 450–560 词，比真题（每篇约 700–900 词）短，所以时间压力会比真实考试小，可以给自己少留一些时间。</p>
        <div class="setlist">${P.slice().sort((a,b) => a.level-b.level).map(row).join("")}</div>
      </article>
    </section>
  </div>`);
}

/* ---------- 作答与解析 ---------- */
// 交卷后的原文里，词库单词可以点开查看（作答时不标出）
function passageHTML(p, review){
  const txt = t => review && App.vocab ? App.vocab.linkify(t) : esc(t);
  return `<div class="ptext ir-text"><h3 class="ptitle">${esc(p.title)}</h3>${review ? `<p class="note" style="font-family:var(--f-ui);font-size:13px">虚线标出的是词库单词，点击可以查看释义、加入背词；实线是你正在学的词。</p>` : ""}${p.paras.map(([k,t]) => `<p><b class="ir-par">${k}</b>${txt(t)}</p>`).join("")}</div>`;
}
function render(){
  if(!S) return renderHome();
  const u = S.units[S.cur], review = S.phase==="review", mock = S.mode==="mock";
  const tabs = S.units.length>1 ? `<div class="tabs ir-tabs">${S.units.map((x,i) => {
      const done = Q.answered(x.built, S.ans), tot = x.built.list.length;
      const extra = review ? ` · ${S.res[i].c}/${S.res[i].n}` : ` · 已答 ${done}/${tot}`;
      return `<button class="tab" data-tab="${i}" aria-selected="${i===S.cur}">Passage ${i+1}<span class="n">${x.built.list[0].n}–${x.built.list[tot-1].n}${extra}</span></button>`;
    }).join("")}</div>` : "";
  let banner = "", foot;
  if(review){
    const [c,n] = S.total;
    banner = `<div class="fb ${c===n ? "ok" : "no"}">${S.timeUp ? "时间到，已自动交卷。" : ""}${mock ? `40 题答对 ${c} 题，按参考分数线对应 <b>${Q.band("reading", c)}</b>。官方分数线每场略有不同，本站文章也没有经过难度校准，只能作为参考。` : `本篇答对 ${c} / ${n}。`}</div>`;
    foot = `${mock ? `<button class="btn" data-mock>再模拟一次</button>` : `<button class="btn" data-practice="${u.p.id}">再做一遍</button>`}<button class="btn alt" data-home>返回</button>`;
  }else{
    const left = S.units.reduce((a,x) => a + x.built.list.length - Q.answered(x.built, S.ans), 0);
    foot = `<button class="btn" data-submit>${mock ? "交卷" : "提交答案"}</button><span class="note" id="irLeft">${left ? `还有 ${left} 题没有作答` : "全部作答完毕"}</span>`;
  }
  view(`<div class="stage reading">
    <div class="meta"><span class="chip learn">雅思阅读</span><span>${mock ? "完整模拟" : esc(u.p.title)}</span>${mock ? "" : `<span class="chip ${LEVEL[u.p.level][1]}">${LEVEL[u.p.level][0]}</span>`}
      <span class="left">${review ? "解析" : mock ? `${MOCK_MIN} 分钟` : `建议 ${PRACTICE_MIN} 分钟`}</span>${review ? "" : `<span class="timer" id="irTimer"></span>`}
      ${review ? "" : `<button class="btn alt" data-quit style="margin-left:8px">${mock ? "放弃模拟" : "退出"}</button>`}</div>
    ${banner}${tabs}
    <div class="rgrid"><article class="pane-text">${passageHTML(u.p, review)}</article>
      <section class="pane-q iq">${review ? Q.review(u.built, S.ans, S.res[S.cur]) : Q.render(u.built, S.ans)}</section></div>
    <div class="row">${foot}</div>
  </div>`);
  if(!review) tick();
}
function updateLeft(){
  const el = $("#irLeft"); if(!el || !S) return;
  const left = S.units.reduce((a,x) => a + x.built.list.length - Q.answered(x.built, S.ans), 0);
  el.textContent = left ? `还有 ${left} 题没有作答` : "全部作答完毕";
  const tab = document.querySelector(`#view-ireading .ir-tabs [data-tab="${S.cur}"] .n`);
  if(tab){ const u = S.units[S.cur], tot = u.built.list.length; tab.textContent = `${u.built.list[0].n}–${u.built.list[tot-1].n} · 已答 ${Q.answered(u.built, S.ans)}/${tot}` }
}

/* ---------- 事件 ---------- */
function onClick(e){
  const t = e.target.closest("button"); if(!t || t.dataset.iqv!==undefined) return;
  const d = t.dataset;
  if(d.practice){ startPractice(d.practice); return }
  if(d.mock!==undefined){ startMock(); return }
  if(d.tab!==undefined){ S.cur = +d.tab; render(); return }
  if(d.home!==undefined){ exit(); return }
  if(d.submit!==undefined){
    const left = S.units.reduce((a,x) => a + x.built.list.length - Q.answered(x.built, S.ans), 0);
    if(left && !d.armed){ d.armed = "1"; t.textContent = `还有 ${left} 题没答，再点一次交卷`; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = S && S.mode==="mock" ? "交卷" : "提交答案" } }, 4000); return }
    submit(false); return;
  }
  if(d.quit!==undefined){
    if(!d.armed){ d.armed = "1"; t.textContent = "再点一次，放弃作答"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = S && S.mode==="mock" ? "放弃模拟" : "退出" } }, 4000); return }
    exit(); return;
  }
}

App.routes.ireading = {
  exams:["ielts"],
  init(){
    const root = $("#view-ireading");
    root.addEventListener("click", onClick);
    Q.bind(root, () => S && S.phase==="do" ? S.ans : null, updateLeft);
  },
  enter(){ render(); if(S && S.phase==="do") startTimer() },
  leave(){ stopTimer() }
};
})();
