/* 听力模块：听后选回应、对话、通知、学术讲座；音频由浏览器朗读、只播放一次；分题型练习与两模块自适应模拟 */
(function(){
const { $, esc, shuffle } = App;
const L = window.LISTENING;
const KIND = { response:"听后选回应", conv:"对话", ann:"通知", talk:"学术讲座" };
const KIND_EN = { response:"Listen and Choose a Response", conv:"Listen to a Conversation", ann:"Listen to an Announcement", talk:"Listen to an Academic Talk" };
const TYPE = { response:"选回应", main:"主旨", detail:"细节", purpose:"目的", function:"说话意图", infer:"推断", attitude:"态度", organization:"组织结构" };
const LEVEL = { 1:["基础","new"], 2:["标准","learn"], 3:["提高","done"] };
const WHO = { W:"Woman", M:"Man" };
const ABCD = "ABCD";
const ANSWER_SEC = { response:20, other:35 };   // 模拟时每题的作答时间（本站设定，非官方数据）

/* ---------- 题库整理 ---------- */
L.responseSets.forEach(set => {
  set.list = set.items.trim().split("\n").map((line,i) => {
    const [prompt,a,b,c,d,why] = line.split("|");
    return { id:`${set.id}#${i+1}`, kind:"response", level:set.level, set, title:prompt, prompt, who: i%2 ? "M" : "W",
      qs:[{ type:"response", q:"Choose the best response.", opts:[a,b,c,d], why }] };
  });
});
const POOL = { response:[].concat(...L.responseSets.map(s => s.list)), conv:L.conversations, ann:L.announcements, talk:L.talks };
POOL.conv.forEach(it => it.kind = "conv"); POOL.ann.forEach(it => it.kind = "ann"); POOL.talk.forEach(it => it.kind = "talk");
const BYID = {};
Object.values(POOL).forEach(list => list.forEach(it => BYID[it.id] = it));
L.responseSets.forEach(s => BYID[s.id] = s);

/* ---------- 记录 ---------- */
const lblank = () => ({ done:{}, types:{}, mocks:[], settings:{ replay:false, underline:true } });
function normalize(d){ const b = lblank(); d = d || {}; return { done:d.done||{}, types:d.types||{}, mocks:d.mocks||[], settings:Object.assign(b.settings, d.settings||{}) } }
let data = normalize(App.store.get(App.KEYS.listening, null));
const save = () => App.store.set(App.KEYS.listening, data);
App.listeningData = () => data;
App.loadListeningData = d => { data = normalize(d); save(); if(App.route==="listening" && !S) renderHome() };

/* ---------- 朗读：按句播放，男女声区分 ---------- */
const { voiceFor, sentences, play, canPlay } = App.tts;
const stopAudio = App.tts.stop;
function segments(it){
  if(it._segs) return it._segs;
  const out = [];
  if(it.kind==="response") out.push({ who:it.who, text:it.prompt, line:0 });
  else if(it.kind==="conv"){
    it.script.split("\n").forEach((row,li) => {
      const m = row.match(/^([WM]):\s*(.*)$/); if(!m) return;
      sentences(m[2]).forEach((s,i,a) => out.push({ who:m[1], text:s, line:li, gap: i===a.length-1 ? 350 : 80 }));
    });
  }else{
    it.script.split(/\n\s*\n/).forEach((p,li) => sentences(p).forEach((s,i,a) => out.push({ who:it.speaker, text:s, line:li, gap: i===a.length-1 ? 600 : 120 })));
  }
  return it._segs = out;
}

/* ---------- 题目与评分 ---------- */
function makeUnit(it){ return { item:it, ans:{}, order: it.qs.map(q => shuffle(q.opts.map((_,i) => i))), notes:"", textMode:false } }
function grade(u){
  const per = u.item.qs.map((q,i) => u.ans[i]===0), types = {};
  u.item.qs.forEach((q,i) => { const t = types[q.type] || (types[q.type] = [0,0]); t[1]++; if(per[i]) t[0]++ });
  return { c:per.filter(Boolean).length, n:per.length, per, types };
}
function mark(id, c, n){
  const prev = data.done[id] || { cnt:0, best:0 };
  data.done[id] = { t:Date.now(), c, n, cnt:prev.cnt+1, best:Math.max(prev.best||0, c) };
}
function record(u, res){
  mark(u.item.id, res.c, res.n);
  Object.entries(res.types).forEach(([k,[c,n]]) => { const t = data.types[k] || (data.types[k] = [0,0]); t[0]+=c; t[1]+=n });
  save();
}

// 给「模考」用：题库、录音、判分和记录与这里的练习共用
App.listeningKit = { POOL, TYPE, KIND, ANSWER_SEC, segments, makeUnit, grade, record };

/* ---------- 文本渲染 ---------- */
function wrapWords(str){
  return str.split(/([A-Za-z]+)/).map((p,i) => {
    if(i%2===0) return esc(p);
    const w = data.settings.underline && App.vocab ? App.vocab.lookup(p) : null;
    return w ? `<span class="vw" data-vw="${esc(w)}" role="button" tabindex="0" title="词库单词，点击查看">${p}</span>` : p;
  }).join("");
}
function transcriptHTML(it){
  const lines = [];
  segments(it).forEach((s,i) => {
    const l = lines[s.line] || (lines[s.line] = { who:s.who, parts:[] });
    l.parts.push(`<span class="seg" data-seg="${i}" title="点击重听这一句">${wrapWords(s.text)}</span>`);
  });
  const named = it.kind==="conv" || it.kind==="response";
  return `<div class="ltrans">${lines.filter(Boolean).map(l => `<p>${named ? `<b class="who">${WHO[l.who]}</b>` : ""}${l.parts.join(" ")}</p>`).join("")}</div>`;
}
function questionsHTML(u, review, res){
  const qs = u.item.qs;
  return qs.map((q,qi) => {
    const chosen = u.ans[qi];
    const opts = u.order[qi].map((oi,k) => {
      let cls = "";
      if(review){ if(oi===0) cls = " right"; else if(chosen===oi) cls = " wrong" }
      else if(chosen===oi) cls = " sel";
      return `<button class="opt${cls}" data-q="${qi}" data-o="${oi}" ${review ? "disabled" : ""}><span class="l">${ABCD[k]}</span><span>${esc(q.opts[oi])}</span></button>`;
    }).join("");
    const head = review ? `<span class="chip ${res.per[qi] ? "done" : "bad"}">${res.per[qi] ? "正确" : chosen==null ? "未作答" : "错误"}</span><span class="chip">${TYPE[q.type]||q.type}</span>` : "";
    const title = qs.length>1 ? `<b style="color:var(--ink)">Question ${qi+1}</b>` : "";
    return `<div class="qb">${title || head ? `<div class="meta">${title}${head}</div>` : ""}
      <div class="qt">${esc(q.q)}</div><div class="opts">${opts}</div>
      ${review ? `<div class="exp"><b>解析</b>　${esc(q.why)}</div>${App.reportBtn ? `<div class="rep-row">${App.reportBtn(`托福听力 ${u.item.id} 第 ${qi+1} 题：${q.q}｜你的答案：${chosen==null ? "未作答" : q.opts[chosen]}｜正确答案：${q.opts[0]}`)}</div>` : ""}` : ""}</div>`;
  }).join("");
}
const notesHTML = u => `<label class="field lnotes">笔记（考试中允许记笔记）<textarea id="lnotes" placeholder="边听边记关键词：人物、原因、例子、转折……">${esc(u.notes)}</textarea></label>`;

/* ---------- 会话 ---------- */
let S = null, timer = 0;
function stopTimer(){ clearInterval(timer); timer = 0 }
function startTimer(){ stopTimer(); timer = setInterval(tick, 1000) }
const fmt = ms => { const s = Math.ceil(ms/1000); return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}` };
function tick(){
  if(!S || S.mode!=="mock" || S.phase!=="answer") return;
  const left = Math.max(0, S.deadline-Date.now()), el = $("#ltimer");
  if(el){ el.textContent = "作答剩余 " + fmt(left); el.classList.toggle("warn", left<10000) }
  if(left<=0) nextUnit();
}
function view(html){ $("#view-listening").innerHTML = html }
const unit = () => S.units[S.idx];
const answerSec = u => u.item.kind==="response" ? ANSWER_SEC.response : ANSWER_SEC.other*u.item.qs.length;

function pick(kind, level, n, avoid){
  const pool = POOL[kind].filter(it => it.level===level && !avoid.has(it.id));
  return shuffle(pool.slice()).sort((a,b) => ((data.done[a.id]||{}).cnt||0) - ((data.done[b.id]||{}).cnt||0)).slice(0,n);
}
function moduleUnits(level, avoid){
  const list = [...pick("response",level,4,avoid), ...pick("conv",level,1,avoid), ...pick("ann",level,1,avoid), ...pick("talk",level,1,avoid)];
  list.forEach(it => avoid.add(it.id));
  return list.map(makeUnit);
}
function startPractice(id){
  const it = BYID[id];
  S = { mode:"practice", set: it.list ? it : null, units: it.list ? it.list.map(makeUnit) : [makeUnit(it)], idx:0, phase:"ready", mods:[] };
  render();
}
function startMock(){
  const avoid = new Set();
  S = { mode:"mock", module:1, avoid, units:moduleUnits(2, avoid), idx:0, phase:"intro", mods:[] };
  render();
}
function startModule2(){
  S.module = 2; S.units = moduleUnits(S.level2, S.avoid); S.idx = 0;
  playUnit();
}
function playUnit(){
  const u = unit();
  if(!canPlay()){ u.textMode = true; toAnswer(); return }
  S.phase = "play"; render();
  play(segments(u.item), (i,n) => {
    const p = $("#lprog"); if(p) p.style.width = Math.round(i/n*100) + "%";
    const c = $("#lcount"); if(c) c.textContent = `${i+1} / ${n}`;
  }).then(ok => { if(ok && S && unit()===u && S.phase==="play") toAnswer() });
}
function toAnswer(){
  S.phase = "answer";
  if(S.mode==="mock"){ S.deadline = Date.now() + answerSec(unit())*1000; startTimer() }
  render();
}
function submitPractice(){
  const u = unit(), res = grade(u);
  record(u, res); u.res = res;
  S.phase = S.set ? "feedback" : "review";
  render(); window.scrollTo(0,0);
}
function nextUnit(){
  stopTimer();
  if(S.mode==="practice"){
    if(S.idx < S.units.length-1){ S.idx++; playUnit(); return }
    const res = S.units.map(u => u.res), c = res.reduce((a,r) => a+r.c, 0);
    mark(S.set.id, c, res.length); save();
    S.mods = [{ level:S.set.level, units:S.units, res, c, n:res.length }];
    S.phase = "result"; render(); return;
  }
  if(S.idx < S.units.length-1){ S.idx++; playUnit(); window.scrollTo(0,0); return }
  // 模块结束
  const res = S.units.map(grade);
  const c = res.reduce((a,r) => a+r.c, 0), n = res.reduce((a,r) => a+r.n, 0);
  S.mods.push({ level: S.module===1 ? 2 : S.level2, units:S.units, res, c, n });
  if(S.module===1){ S.level2 = c/n >= 0.6 ? 3 : 1; S.phase = "between" }
  else{
    S.mods.forEach(m => m.units.forEach((u,i) => record(u, m.res[i])));
    data.mocks.push({ t:Date.now(), m1:[S.mods[0].c, S.mods[0].n], m2:[S.mods[1].c, S.mods[1].n], level2:S.level2 });
    if(data.mocks.length>50) data.mocks = data.mocks.slice(-50);
    save(); S.phase = "result";
  }
  render(); window.scrollTo(0,0);
}
function exitSession(){ stopAudio(); stopTimer(); S = null; renderHome() }

/* ---------- 首页 ---------- */
function typeStats(){
  const rows = Object.keys(TYPE).filter(k => data.types[k]).map(k => {
    const [c,n] = data.types[k], p = Math.round(c/n*100);
    const col = p>=80 ? "var(--good)" : p>=60 ? "var(--warn)" : "var(--bad)";
    return `<div class="tstat"><span>${TYPE[k]}</span><div class="bar"><i style="width:${p}%;background:${col}"></i></div><b>${c}/${n}</b></div>`;
  });
  return rows.length ? rows.join("") : `<p class="note" style="margin:0">做完题后，这里会按题型显示正确率，帮你找到薄弱环节。</p>`;
}
function row(it, sub){
  const d = data.done[it.id], lv = LEVEL[it.level];
  return `<button class="setrow" data-practice="${esc(it.id)}"><b>${esc(it.name || it.title)}</b><span class="chip ${lv[1]}">${lv[0]}</span><span class="note">${esc(sub || "")}</span><small>${d ? `上次 ${d.c}/${d.n}` : ""}</small></button>`;
}
const byLevel = list => list.slice().sort((a,b) => a.level-b.level);
function renderHome(){
  stopTimer();
  const mocks = data.mocks.slice(-5).reverse();
  const warn = !App.canSpeak ? `<div class="fb no">这个浏览器不支持朗读，听力题无法播放。请换用 Edge 或 Chrome。</div>` : "";
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>听力练习</h2><div class="date">新版托福 · 两个自适应模块</div></div>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:8px">
        <p class="section-label" style="margin:0">各题型正确率</p>
        ${typeStats()}
      </section>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:8px">
        <label class="check"><input type="checkbox" id="optReplay" ${data.settings.replay ? "checked" : ""}> 单项练习时允许重听</label>
        <label class="check"><input type="checkbox" id="optUnderL" ${data.settings.underline ? "checked" : ""}> 原文里标出词库单词</label>
        <p class="note" style="margin:0">考试中每段音频只播放一次。语速和声音在「设置」里调，建议先用「正常」练习。</p>
      </section>
      <div class="tip"><b>听的时候抓什么</b><br>对话听目的和最后的决定；通知听变化、时间和要求；讲座听开头的主题、first / second 等结构词，以及 but、actually 之后的内容。</div>
    </aside>
    <section class="desk">
      ${warn}
      <article class="task" style="margin-bottom:14px">
        <div class="en">Full Section · Adaptive</div>
        <h3>完整模拟</h3>
        <div class="spec"><span>2 个模块</span><span>每模块 7 段音频 · 12 题</span><span>约 20–25 分钟</span></div>
        <p class="note" style="margin:0">每个模块含 4 句听后选回应、1 段对话、1 则通知、1 段学术讲座。第一模块是标准难度，第二模块根据第一模块的正确率（60% 为界）变难或变简单。音频只播放一次，听完后限时作答（选回应每题 ${ANSWER_SEC.response} 秒，其他每题 ${ANSWER_SEC.other} 秒，本站设定），答完不能返回。</p>
        <div class="row"><button class="btn" data-mock>开始模拟</button></div>
        ${mocks.length ? `<div class="setlist">${mocks.map(m => `<div class="setrow" style="cursor:default"><b>${new Date(m.t).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"})}</b><span class="note">模块一 ${m.m1[0]}/${m.m1[1]} · 模块二（${LEVEL[m.level2][0]}）${m.m2[0]}/${m.m2[1]}</span><small>${Math.round((m.m1[0]+m.m2[0])/(m.m1[1]+m.m2[1])*100)}%</small></div>`).join("")}</div>` : ""}
      </article>
      <div class="tasks">
        <article class="task">
          <div class="en">${KIND_EN.response}</div><h3>${KIND.response}</h3>
          <div class="spec"><span>听一句话</span><span>选最恰当的回应</span><span>每套 10 句</span></div>
          <p class="note" style="margin:0">只听不看原句，从四个文字选项中选出最自然的回答。常考间接回答、委婉拒绝和重复用词陷阱。</p>
          <div class="setlist">${L.responseSets.map(s => row(s, `${s.list.length} 句`)).join("")}</div>
        </article>
        <article class="task">
          <div class="en">${KIND_EN.conv}</div><h3>${KIND.conv}</h3>
          <div class="spec"><span>校园生活对话</span><span>每段 2 题</span></div>
          <p class="note" style="margin:0">两人对话，考谈话目的、细节和接下来会做什么。</p>
          <div class="setlist">${byLevel(L.conversations).map(it => row(it)).join("")}</div>
        </article>
        <article class="task">
          <div class="en">${KIND_EN.ann}</div><h3>${KIND.ann}</h3>
          <div class="spec"><span>校园广播与课堂通知</span><span>每则 2 题</span></div>
          <p class="note" style="margin:0">听变化、时间地点、要求和原因。</p>
          <div class="setlist">${byLevel(L.announcements).map(it => row(it)).join("")}</div>
        </article>
        <article class="task">
          <div class="en">${KIND_EN.talk}</div><h3>${KIND.talk}</h3>
          <div class="spec"><span>约 175–250 词</span><span>每段 4 题</span></div>
          <p class="note" style="margin:0">一位教授讲一个学术话题，考主旨、细节、例子的作用、推断和态度。</p>
          <div class="setlist">${byLevel(L.talks).map(it => row(it, it.topic)).join("")}</div>
        </article>
      </div>
    </section>
  </div>`);
}

/* ---------- 做题界面 ---------- */
function header(u, extra){
  const it = u.item, lv = LEVEL[it.level], mock = S.mode==="mock";
  const label = mock ? `模块 ${S.module} · ${S.idx+1} / ${S.units.length}` : S.set ? `${S.idx+1} / ${S.units.length}` : "";
  const title = mock || it.kind==="response" ? (S.set ? S.set.name : "") : it.title;
  return `<div class="meta"><span class="chip learn">${KIND[it.kind]}</span>${title ? `<span>${esc(title)}</span>` : ""}<span class="chip ${lv[1]}">${lv[0]}</span>
    <span class="left">${label}</span>${extra || ""}
    <button class="btn alt" data-quit style="margin-left:8px">${mock ? "放弃模拟" : "退出"}</button></div>
    ${S.units.length>1 ? `<div class="steps">${S.units.map((x,i) => `<i class="${i<S.idx ? "on" : i===S.idx ? "cur" : ""}"></i>`).join("")}</div>` : ""}`;
}
function direction(it){
  return { response:"You will hear a person speak. Choose the best response.",
    conv:"Listen to a conversation. You will hear it only once.",
    ann:"Listen to an announcement. You will hear it only once.",
    talk:"Listen to part of a talk in a class. You will hear it only once." }[it.kind];
}
function renderReady(){
  const u = unit(), it = u.item;
  const msg = S.interrupted ? "播放被打断了（离开了本页）。点下面的按钮重新播放。" : it.kind==="response" ? "听完一句话后出现四个选项，选出最自然的回应。" : `听完后回答 ${it.qs.length} 道题，可以边听边记笔记。`;
  view(`<div class="stage">${header(u)}
    <div class="phase">
      <div class="page-title" style="font-family:var(--f-head)">${direction(it)}</div>
      <p class="note" style="max-width:52ch;margin:0">${msg}${canPlay() ? "" : "<br>当前浏览器没有可用的英文朗读声音，将改为显示文字。"}</p>
      <div class="row" style="justify-content:center"><button class="btn" data-play>${canPlay() ? "开始播放" : "显示文字"}</button></div>
    </div></div>`);
}
function renderIntro(){
  view(`<div class="stage"><div class="phase">
    <div class="page-title">听力完整模拟 · 第一模块</div>
    <p class="note" style="max-width:52ch;margin:0">本模块 7 段音频、12 道题，依次是 4 句听后选回应、1 段对话、1 则通知、1 段学术讲座。每段只播放一次，播完后开始限时作答，答完进入下一段，不能返回。请戴好耳机。</p>
    <div class="row" style="justify-content:center"><button class="btn" data-begin>开始</button></div>
  </div></div>`);
}
function renderPlay(){
  const u = unit(), it = u.item, n = segments(it).length;
  view(`<div class="stage listening">${header(u)}
    <p class="instr">${direction(it)}</p>
    <div class="lplay">
      <div class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="note">正在播放 · 只播放一次 <span id="lcount" style="font-family:var(--f-mono)">1 / ${n}</span></div>
      <div class="bar" style="max-width:360px;width:100%"><i id="lprog" style="width:0"></i></div>
    </div>
    ${it.kind==="response" ? "" : notesHTML(u)}
  </div>`);
}
function renderAnswer(){
  const u = unit(), it = u.item, mock = S.mode==="mock";
  const replay = !mock && data.settings.replay && !u.textMode ? `<button class="btn alt" data-replay>再听一遍</button>` : "";
  const text = u.textMode ? `<div class="fb no">浏览器无法朗读，下面直接显示原文。</div>${transcriptHTML(it)}` : "";
  const foot = mock ? `<button class="btn" data-next>${S.idx===S.units.length-1 ? (S.module===1 ? "提交第一模块" : "交卷并查看成绩") : "下一题"}</button><span class="note">没把握也选一个，时间到会自动进入下一段。</span>`
    : `<button class="btn" data-submit>提交答案</button>${replay}`;
  const timerEl = mock ? `<span class="timer" id="ltimer"></span>` : "";
  if(it.kind==="response"){
    view(`<div class="stage listening">${header(u, timerEl)}
      ${text}<div class="lresp">${questionsHTML(u, false)}</div>
      <div class="row">${foot}</div></div>`);
  }else{
    view(`<div class="stage listening">${header(u, timerEl)}
      <div class="rgrid"><div class="pane-text">${text}${notesHTML(u)}</div><section class="pane-q">${questionsHTML(u, false)}</section></div>
      <div class="row">${foot}</div></div>`);
  }
  tick();
}
function renderReview(u, res, foot){
  const it = u.item;
  const banner = `<div class="fb ${res.c===res.n ? "ok" : "no"}">${it.kind==="response" ? (res.c ? "回答正确。" : "回答错误。") : `本段答对 ${res.c} / ${res.n}。`}点原文里的句子可以重听。</div>`;
  const notes = u.notes ? `<details class="panel"><summary>我的笔记</summary><div class="body" style="white-space:pre-wrap">${esc(u.notes)}</div></details>` : "";
  view(`<div class="stage listening">
    <div class="meta"><span class="chip learn">${KIND[it.kind]}</span><span>${esc(it.kind==="response" ? (it.set.name) : it.title)}</span><span class="chip ${LEVEL[it.level][1]}">${LEVEL[it.level][0]}</span>
      ${S.set ? `<span class="left">${S.idx+1} / ${S.units.length}</span>` : ""}</div>
    ${banner}
    <div class="rgrid"><div class="pane-text"><div class="row" style="margin:0 0 8px"><p class="section-label" style="margin:0">原文</p><button class="btn-ghost" data-playall>播放全文</button></div>${transcriptHTML(it)}${notes}</div>
      <section class="pane-q">${questionsHTML(u, true, res)}</section></div>
    <div class="row">${foot}</div></div>`);
}
function renderBetween(){
  stopTimer();
  view(`<div class="stage"><div class="phase">
    <div class="page-title">第一模块已提交</div>
    <p class="note" style="max-width:48ch;margin:0">第二模块的难度已根据你在第一模块的表现调整。结构和第一模块相同，准备好后开始。</p>
    <div class="row" style="justify-content:center"><button class="btn" data-module2>开始第二模块</button></div>
  </div></div>`);
}
function renderResult(){
  const all = S.mods.reduce((a,m) => [a[0]+m.c, a[1]+m.n], [0,0]);
  const types = {};
  S.mods.forEach(m => m.res.forEach(r => Object.entries(r.types).forEach(([k,[c,n]]) => { const t = types[k] || (types[k] = [0,0]); t[0]+=c; t[1]+=n })));
  const mock = S.mode==="mock";
  const desc = mock ? `共答对 ${all[0]} / ${all[1]}。第二模块难度：<b>${LEVEL[S.level2][0]}</b>${S.level2===3 ? "（第一模块表现好，进入了较难的模块）" : "（第一模块正确率不到六成，进入了较简单的模块）"}。官方的分数换算没有公开，这里只给正确率。`
    : `${esc(S.set.name)}：答对 ${all[0]} / ${all[1]}。点下面每一句可以查看原句和解析。`;
  const unitRow = (u, r, key) => `<button class="setrow" data-rv="${key}"><b>${esc(u.item.kind==="response" ? u.item.prompt : u.item.title)}</b><span class="note">${KIND[u.item.kind]}</span><small>${r.c}/${r.n} · 看解析</small></button>`;
  view(`<div class="stage">
    <div class="meta"><span class="chip done">${mock ? "模拟完成" : "本套完成"}</span><span>听力${mock ? " · 两个模块" : ""}</span></div>
    <div class="row" style="align-items:baseline;gap:16px">
      <div class="score">${Math.round(all[0]/all[1]*100)}<span style="font-size:24px;color:var(--muted)">%</span></div>
      <div class="note">${desc}</div>
    </div>
    ${mock ? `<div class="tablewrap"><table><thead><tr><th>题型</th><th>答对</th><th>正确率</th></tr></thead><tbody>
      ${Object.keys(TYPE).filter(k => types[k]).map(k => `<tr><td>${TYPE[k]}</td><td>${types[k][0]} / ${types[k][1]}</td><td>${Math.round(types[k][0]/types[k][1]*100)}%</td></tr>`).join("")}
    </tbody></table></div>` : ""}
    ${S.mods.map((m,mi) => `<div>${mock ? `<p class="section-label">模块 ${mi+1} · ${LEVEL[m.level][0]} · ${m.c}/${m.n}</p>` : ""}
      <div class="setlist">${m.units.map((u,ui) => unitRow(u, m.res[ui], `${mi}:${ui}`)).join("")}</div></div>`).join("")}
    <div class="row"><button class="btn" data-home>返回听力首页</button>${mock ? `<button class="btn alt" data-mock>再模拟一次</button>` : `<button class="btn alt" data-practice="${esc(S.set.id)}">再做一遍</button>`}</div>
  </div>`);
}
function render(){
  if(!S) return renderHome();
  const p = S.phase;
  if(p==="intro") return renderIntro();
  if(p==="ready") return renderReady();
  if(p==="play") return renderPlay();
  if(p==="answer") return renderAnswer();
  if(p==="between") return renderBetween();
  if(p==="result") return renderResult();
  if(p==="feedback"){
    const u = unit(), last = S.idx===S.units.length-1;
    return renderReview(u, u.res, `<button class="btn" data-next>${last ? "查看本套结果" : "下一句"}</button><button class="btn alt" data-home>退出</button>`);
  }
  if(p==="review"){ const u = unit(); return renderReview(u, u.res, `<button class="btn" data-practice="${esc(u.item.id)}">再做一遍</button><button class="btn alt" data-home>返回题库</button>`) }
  if(p==="rv"){ const m = S.mods[S.rv[0]]; return renderReview(m.units[S.rv[1]], m.res[S.rv[1]], `<button class="btn" data-back-result>返回成绩单</button>`) }
}
function reviewItem(){
  if(!S) return null;
  if(S.phase==="rv") return S.mods[S.rv[0]].units[S.rv[1]].item;
  if(S.phase==="feedback" || S.phase==="review" || (S.phase==="answer" && unit().textMode)) return unit().item;
  return null;
}

/* ---------- 事件 ---------- */
function onClick(e){
  const v = e.target.closest("[data-vw]");
  if(v) return;   // 词库单词的点击由 vocab.js 统一处理
  const sg = !e.target.closest("[data-vw]") && e.target.closest("[data-seg]");
  if(sg){ const it = reviewItem(); if(it){ const s = segments(it)[+sg.dataset.seg]; stopAudio(); App.speak(s.text, voiceFor(s.who)) } return }
  const t = e.target.closest("button"); if(!t) return;
  const d = t.dataset;
  if(d.practice){ stopAudio(); startPractice(d.practice); return }
  if(d.mock!==undefined){ startMock(); return }
  if(d.begin!==undefined){ playUnit(); return }
  if(d.play!==undefined){ S.interrupted = false; playUnit(); return }
  if(d.replay!==undefined){ playUnit(); return }
  if(d.playall!==undefined){ const it = reviewItem(); if(it) play(segments(it)); return }
  if(d.o!==undefined){
    unit().ans[+d.q] = +d.o;
    t.parentElement.querySelectorAll(".opt").forEach(b => b.classList.toggle("sel", b===t));
    return;
  }
  if(d.submit!==undefined){ submitPractice(); return }
  if(d.next!==undefined){ stopAudio(); nextUnit(); return }
  if(d.module2!==undefined){ startModule2(); return }
  if(d.home!==undefined){ exitSession(); return }
  if(d.rv){ stopAudio(); S.rv = d.rv.split(":").map(Number); S.phase = "rv"; render(); window.scrollTo(0,0); return }
  if(d.backResult!==undefined){ stopAudio(); S.phase = "result"; render(); return }
  if(d.quit!==undefined){
    if(S.mode==="mock" && !d.armed){ d.armed = "1"; t.textContent = "再点一次，放弃本次模拟"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "放弃模拟" } }, 4000); return }
    exitSession(); return;
  }
}
function onInput(e){
  const t = e.target;
  if(t.id==="optReplay"){ data.settings.replay = t.checked; save(); return }
  if(t.id==="optUnderL"){ data.settings.underline = t.checked; save(); return }
  if(t.id==="lnotes" && S) unit().notes = t.value;
}
function onKey(e){
  if(App.route!=="listening" || !S || S.phase!=="answer") return;
  if(/^(TEXTAREA|INPUT|SELECT)$/.test(e.target.tagName)) return;
  const u = unit(); if(u.item.kind!=="response") return;
  const k = "1234".indexOf(e.key) >= 0 ? "1234".indexOf(e.key) : "abcd".indexOf(e.key.toLowerCase());
  if(k>=0 && e.key.length===1){ const b = document.querySelectorAll("#view-listening .opt")[k]; if(b) b.click() }
  else if(e.key==="Enter" && e.target.tagName!=="BUTTON" && u.ans[0]!=null){ const b = document.querySelector("#view-listening [data-submit],#view-listening [data-next]"); if(b){ e.preventDefault(); b.click() } }
}

App.routes.listening = {
  exams:["toefl"],
  init(){
    const root = $("#view-listening");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
    document.addEventListener("keydown", onKey);
  },
  enter(){ render(); if(S && S.mode==="mock" && S.phase==="answer") startTimer() },
  leave(){
    stopAudio(); stopTimer();
    if(S && S.phase==="play"){ S.phase = "ready"; S.interrupted = true }
  }
};
})();
