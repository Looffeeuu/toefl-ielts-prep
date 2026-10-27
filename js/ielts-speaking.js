/* 雅思口语：Part 1 问答、Part 2 话题卡（1 分钟准备 + 最多 2 分钟）、Part 3 讨论，以及三部分连起来的完整模拟 */
(function(){
const { $, esc, shuffle } = App;
const { tokens, FILLER, SR, MIC_ERR, RECOG_ERR, ensureMic, record } = App.rec;
const D = window.IELTS_SPEAKING;
const P1 = D.part1, P2 = D.part2;
const MAX = { p1:40, follow:25, p2:120, p3:75 };   // 每题最长录音秒数；真实考试由考官掌握节奏
const PREP = 60, P2_MIN = 60;
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ---------- 考官说的话（本站自拟） ---------- */
const SAY = {
  open:"Good morning. This is the speaking test. In the first part, I'd like to ask you some questions about yourself.",
  p2:"Now I'm going to give you a topic. You'll have one minute to prepare, and you can make some notes. Then I'd like you to talk about the topic for one to two minutes.",
  p2go:"Your preparation time is over. Please start speaking now.",
  p3: theme => `Now let's discuss some more general questions about ${theme}.`,
  end:"Thank you. That is the end of the speaking test."
};

/* ---------- 记录 ---------- */
const blank = () => ({ history:[], settings:{ showText:false, showLive:false } });
function normalize(d){ const b = blank(); d = d || {}; return { history:Array.isArray(d.history) ? d.history : [], settings:Object.assign(b.settings, d.settings || {}) } }
let data = normalize(App.store.get(App.KEYS.ispeaking, null));
const save = () => App.store.set(App.KEYS.ispeaking, data);
App.ieltsSpeakingData = () => data;
App.loadIeltsSpeakingData = d => { data = normalize(d); save(); if(App.route==="ispeaking" && !S) renderHome() };

/* ---------- 流程：把一次练习排成一串步骤 ---------- */
// 步骤：{ kind:"say", text } 考官说话；{ kind:"q", part, text, max, group } 提问后录音；{ kind:"card", card } Part 2 准备 + 陈述
const BY = {}; P1.forEach(t => BY[t.id] = t); P2.forEach(c => BY[c.id] = c);
function p1Steps(t, n){ return [{ kind:"say", text:t.intro }, ...t.qs.slice(0, n || t.qs.length).map(q => ({ kind:"q", part:1, text:q, max:MAX.p1, group:t.id }))] }
function p2Steps(c){ return [{ kind:"say", text:SAY.p2 }, { kind:"card", part:2, card:c, group:c.id }, { kind:"q", part:2, text:c.follow, max:MAX.follow, group:c.id }] }
function p3Steps(c){ return [{ kind:"say", text:SAY.p3(c.part3.theme) }, ...c.part3.qs.map(q => ({ kind:"q", part:3, text:q, max:MAX.p3, group:c.id+":p3" }))] }
function plan(mode, id){
  if(mode==="p1"){ const t = BY[id]; return { name:`Part 1 · ${t.name}`, steps:p1Steps(t) } }
  if(mode==="p2"){ const c = BY[id]; return { name:`Part 2 · ${c.name}`, steps:p2Steps(c) } }
  if(mode==="p3"){ const c = BY[id]; return { name:`Part 3 · ${c.part3.theme}`, steps:p3Steps(c) } }
  // 完整模拟：Part 1 先问一个身份类话题（4 题），再问两个其他话题（各 3 题）；Part 2 和 Part 3 用同一张卡
  const first = shuffle(P1.filter(t => t.first).slice())[0];
  const others = shuffle(P1.filter(t => !t.first).slice()).slice(0, 2);
  const card = shuffle(P2.slice())[0];
  return { name:"完整模拟", card, steps:[{ kind:"say", text:SAY.open }, ...p1Steps(first, 4), ...others.flatMap(t => p1Steps(t, 3)),
    ...p2Steps(card), ...p3Steps(card), { kind:"say", text:SAY.end }] };
}

/* ---------- 会话 ---------- */
let S = null, token = 0;
function abortSession(){ token++; App.rec.stop(); if(S && S.skip) S.skip(); if(App.canSpeak) speechSynthesis.cancel(); S = null }
function view(html){ $("#view-ispeaking").innerHTML = html }
const partOf = st => st.part || 0;
const fmtS = s => `${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`;

function start(mode, id){
  S = Object.assign({ mode, id, idx:-1, results:[], notes:"" }, plan(mode, id));
  renderIntro();
}
function renderIntro(){
  const rules = {
    p1:"考官会问 4 个日常问题，题目只有声音。每题听完提示音后回答，一般说 2–4 句（约 15–30 秒）就够了，说完按空格或点「说完了」进入下一题。",
    p2:`你会拿到一张话题卡，有 ${PREP} 秒准备时间，可以在旁边记笔记；然后最多讲 2 分钟，至少要讲满 1 分钟。讲完考官会再问一个简短的问题。`,
    p3:"考官会就 Part 2 的话题问 4 个更抽象的讨论题，每题建议说 30–60 秒：观点、理由、例子，可以比较或推测。",
    full:"按真实考试顺序：Part 1 三个话题约 10 题 → Part 2 话题卡 → Part 3 讨论 4 题，全程约 12–15 分钟。中途不能暂停，建议找一个安静的地方，戴上耳机。"
  }[S.mode];
  view(`<div class="stage">
    <div class="meta"><span class="chip learn">雅思口语</span><span>${esc(S.name)}</span><button class="btn alt" data-home style="margin-left:auto">返回</button></div>
    <div class="phase">
      <div class="page-title">${esc(S.name)}</div>
      <p class="note" style="max-width:56ch;margin:0">${rules}</p>
      <div class="level"><i></i></div>
      <div class="row" style="justify-content:center"><button class="btn" id="isGo">开始</button></div>
      <div class="note" id="isErr"></div>
    </div>
  </div>`);
  ensureMic().catch(() => {});
}
async function begin(){
  try{ await ensureMic() }catch(e){ $("#isErr").textContent = MIC_ERR[e.name] || ("打开麦克风失败：" + (e.message||e.name)); return }
  App.audioCtx();
  const tok = ++token;
  for(let i=0; S && tok===token && i<S.steps.length; i++){
    if(tok!==token) return;
    S.idx = i;
    const st = S.steps[i];
    if(st.kind==="say"){ phaseSay(st.text); await App.speak(st.text); if(tok!==token) return; await sleep(300); continue }
    if(st.kind==="card"){ await runCard(st, tok); continue }
    phaseAsk(st);
    await App.speak(st.text); if(tok!==token) return;
    await sleep(200); await App.beep(); if(tok!==token) return;
    const r = await record(st.max, phaseRecord(st));
    if(tok!==token) return;
    S.results.push(Object.assign(r, { part:st.part, q:st.text, group:st.group }));
    await sleep(400);
  }
  if(tok!==token) return;
  finish();
}
async function runCard(st, tok){
  const c = st.card;
  // 准备 1 分钟：可以提前开始
  phaseCard(c, "prep");
  const t0 = Date.now();
  await new Promise(resolve => {
    const iv = setInterval(() => {
      const left = Math.max(0, PREP - (Date.now()-t0)/1000), el = $("#isCd");
      if(el) el.textContent = Math.ceil(left);
      const tb = $("#isTb"); if(tb) tb.style.width = (100 - left/PREP*100) + "%";
      if(left<=0) done();
    }, 200);
    const done = () => { clearInterval(iv); if(S) S.skip = null; resolve() };
    S.skip = done;
  });
  if(tok!==token) return;
  phaseCard(c, "go");
  await App.speak(SAY.p2go); if(tok!==token) return;
  await sleep(200); await App.beep(); if(tok!==token) return;
  const ui = phaseCard(c, "rec");
  const r = await record(MAX.p2, ui);
  if(tok!==token) return;
  S.results.push(Object.assign(r, { part:2, q:c.title, group:c.id, card:c }));
  await sleep(400);
}

/* ---------- 作答界面 ---------- */
function head(){
  const nx = S.steps.slice(Math.max(0, S.idx)).find(partOf), part = nx ? nx.part : 3;
  const qs = S.steps.filter(x => x.kind!=="say"), done = S.steps.slice(0, Math.max(0, S.idx)).filter(x => x.kind!=="say").length;
  return `<div class="meta"><span class="chip learn">${part ? "Part " + part : "雅思口语"}</span><span>${esc(S.name)}</span><span class="left">${Math.min(done+1, qs.length)} / ${qs.length}</span><button class="btn alt" data-quit style="margin-left:8px">退出</button></div>
    <div class="steps">${qs.map((_,i) => `<i class="${i<done ? "on" : i===done ? "cur" : ""}"></i>`).join("")}</div>`;
}
const examiner = (title, sub) => `<div class="interviewer"><div class="avatar">E</div><div><b>${title}</b><div class="note">${sub || ""}</div></div></div>`;
function phaseSay(text){
  view(`<div class="stage">${head()}<div class="phase">${examiner("Examiner", "考官正在说话…")}${data.settings.showText ? `<p class="question" style="font-size:18px">${esc(text)}</p>` : ""}</div></div>`);
}
function phaseAsk(st){
  view(`<div class="stage">${head()}<div class="phase">${examiner("Examiner", data.settings.showText ? "" : "题目只有声音，认真听")}${data.settings.showText ? `<p class="question">${esc(st.text)}</p>` : ""}<div class="label">考官正在提问…</div></div></div>`);
}
function recHTML(max, mark){
  return `<div class="label"><span class="recdot"></span>正在录音</div>
    <div class="big" id="cd">${fmtS(max)}</div>
    <div class="timebar is-bar"><i id="tb"></i>${mark ? `<b style="left:${mark/max*100}%" title="至少讲到这里"></b>` : ""}</div>
    <div class="level"><i></i></div>
    <div class="live" id="live"></div>`;
}
function recUI(max){
  return {
    onTick(el){ const cd = $("#cd"), tb = $("#tb"); if(cd) cd.textContent = fmtS(Math.max(0, max-el)); if(tb) tb.style.width = Math.min(100, el/max*100) + "%"; const h = $("#isMin"); if(h && el>=P2_MIN) h.textContent = "已经讲满 1 分钟，可以继续讲到 2 分钟" },
    onText(t){ const l = $("#live"); if(l && data.settings.showLive) l.textContent = t }
  };
}
function phaseRecord(st){
  view(`<div class="stage">${head()}<div class="phase rec">
    ${data.settings.showText ? `<p class="question" style="font-size:19px">${esc(st.text)}</p>` : ""}
    ${recHTML(st.max)}
    <div class="note">${st.part===1 ? "说 2–4 句就可以" : st.part===3 ? "观点 → 理由 → 例子" : "简短回答即可"}</div>
    <button class="btn alt" data-stop>说完了（空格）</button>
  </div></div>`);
  return recUI(st.max);
}
function cardHTML(c){
  return `<div class="cue"><p class="cue-t">${esc(c.title)}</p><p class="cue-s">You should say:</p><ul>${c.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>`;
}
function phaseCard(c, stage){
  const notes = `<label class="field is-notes">笔记（考试中可以边准备边记）<textarea id="isNotes" placeholder="只记关键词：人物、时间、地点、经过、感受…">${esc(S.notes)}</textarea></label>`;
  let right;
  if(stage==="prep") right = `<div class="phase" style="padding:0"><div class="label">准备时间</div><div class="big" id="isCd">${PREP}</div><div class="timebar"><i id="isTb" style="background:var(--primary)"></i></div><button class="btn" data-skip>准备好了，开始讲</button></div>`;
  else if(stage==="go") right = `<div class="phase" style="padding:0">${examiner("Examiner", "准备时间结束")}</div>`;
  else right = `<div class="phase rec" style="padding:0">${recHTML(MAX.p2, P2_MIN)}<div class="note" id="isMin">至少讲满 1 分钟（进度条上的竖线），最多 2 分钟</div><button class="btn alt" data-stop>讲完了</button></div>`;
  view(`<div class="stage">${head()}<div class="cue-grid"><div>${cardHTML(c)}${notes}</div><div>${right}</div></div></div>`);
  return recUI(MAX.p2);
}

/* ---------- 结果 ---------- */
function metrics(r){
  const words = tokens(r.transcript).length, mins = Math.max(r.duration, 1)/60;
  return { words, wpm:Math.round(words/mins), fillers:(r.transcript.match(FILLER) || []).length };
}
const metricsHTML = r => { const m = metrics(r); return `<span>作答 <b>${fmtS(r.duration)}</b></span><span>词数 <b>${m.words}</b></span><span>语速 <b>${m.wpm}</b> 词/分</span><span>填充词 <b>${m.fillers}</b></span>` };
function finish(){
  const rs = S.results, p2 = rs.find(r => r.part===2 && r.card);
  let summary;
  if(S.mode==="p2" && p2) summary = `讲了 ${fmtS(p2.duration)}`;
  else{ const avg = rs.length ? rs.reduce((a,r) => a + r.duration, 0)/rs.length : 0; summary = `${rs.length} 题 · 平均 ${Math.round(avg)} 秒` + (p2 ? ` · Part 2 ${fmtS(p2.duration)}` : "") }
  S.entry = { t:Date.now(), mode:S.mode, set:S.id || (S.card && S.card.id) || "", name:S.name, summary };
  data.history.push(S.entry);
  if(data.history.length>200) data.history = data.history.slice(-200);
  save();
  renderReview();
}
function hintFor(group){
  if(BY[group]) return BY[group].hint;
  const c = BY[group.replace(/:p3$/, "")]; return c ? c.part3.hint : "";
}
function renderReview(){
  const recogErr = S.results.map(r => r.recogError).find(Boolean);
  const groups = [];
  S.results.forEach((r,i) => { let g = groups[groups.length-1]; if(!g || g.key!==r.group){ g = { key:r.group, part:r.part, items:[] }; groups.push(g) } g.items.push(i) });
  const body = groups.map(g => {
    const title = g.part===1 ? `Part 1 · ${BY[g.key].name}` : g.part===2 ? `Part 2 · ${BY[g.key].name}` : `Part 3 · ${BY[g.key.replace(/:p3$/,"")].part3.theme}`;
    return `<section class="is-group"><p class="section-label" style="margin:0">${esc(title)}</p>
      ${g.items.map(i => {
        const r = S.results[i], short = r.card && r.duration < P2_MIN;
        return `<div class="ritem">
          <div class="meta"><span>${r.card ? "话题卡" : "问题"}</span><button class="btn alt" data-say="${esc(r.q)}" style="margin-left:auto">${r.card ? "朗读题目" : "再听题目"}</button></div>
          ${r.card ? cardHTML(r.card) + (S.notes ? `<div class="note">你的笔记：${esc(S.notes)}</div>` : "") : `<div class="q">${esc(r.q)}</div>`}
          <div class="row">${r.url ? `<audio controls src="${r.url}"></audio>` : '<span class="note">没有录到声音</span>'}</div>
          <div class="metrics" id="ism${i}">${metricsHTML(r)}</div>
          ${short ? `<div class="fb no">Part 2 不到 1 分钟。考官希望你讲满 1–2 分钟，可以多讲细节、经过和感受。</div>` : ""}
          <label class="field">你的回答（识别文字，可以修改识别错的地方）<textarea class="transcript" data-tr="${i}" placeholder="没有识别到文字。可以听录音后把自己说的内容打在这里，用于 AI 点评。">${esc(r.transcript)}</textarea></label>
        </div>`;
      }).join("")}
      ${hintFor(g.key) ? `<details><summary class="note" style="cursor:pointer">答题思路</summary><div class="tip" style="margin-top:6px">${esc(hintFor(g.key))}</div></details>` : ""}
    </section>`;
  }).join("");
  view(`<div class="stage">
    <div class="meta"><span class="chip done">练习完成</span><span>${esc(S.name)}</span><span class="left">${esc(S.entry.summary)}</span></div>
    ${recogErr ? `<div class="fb no">${RECOG_ERR[recogErr] || "语音识别出错：" + esc(recogErr)}</div>` : ""}
    <div class="review">${body}
      <div class="ritem">
        <b>AI 估分与修改建议</b>
        ${App.hasAI() ? `<p class="note" style="margin:0">把上面的回答发给 Claude，按雅思口语评分标准估分（流利与连贯、词汇、语法；文字无法评价发音），逐题点评，并给出改进版回答。</p>
          <div class="row"><button class="btn" id="isAI">生成点评</button></div><div class="ai-out" id="isAIOut" hidden></div>`
        : `<p class="note" style="margin:0">在 <a href="#settings">设置</a> 里填写 Claude API Key 后，这里可以生成估分、逐题点评和改进版回答。参考：Part 1 每题 15–30 秒，Part 2 讲满 1–2 分钟（约 180–260 词），Part 3 每题 30–60 秒。</p>`}
      </div>
    </div>
    <div class="row"><button class="btn" data-again>再练一次</button><button class="btn alt" data-home>返回</button></div>
  </div>`);
}
async function aiGrade(btn){
  const out = $("#isAIOut"); out.hidden = false; btn.disabled = true; out.textContent = "正在生成点评，大约需要半分钟到一分钟…";
  const qa = S.results.map((r,i) => {
    const m = metrics(r), q = r.card ? `${r.card.title} You should say: ${r.card.points.join("; ")}.` : r.q;
    return `[Part ${r.part}] Q${i+1}: ${q}\nA${i+1}（作答 ${Math.round(r.duration)} 秒，${m.words} 词）: ${r.transcript || "（没有内容）"}`;
  }).join("\n\n");
  const prompt = `你是一位经验丰富的雅思口语考官和老师。下面是一名中国学生的雅思口语模拟回答（${S.name}）。回答是语音识别转写的文字，可能有识别错误；明显由识别造成的错误请忽略，不要因此扣分。

请用中文输出，纯文本，不要使用 Markdown 符号（不要 #、*、**）：
【估分】按雅思口语评分标准，分别给 Fluency and Coherence、Lexical Resource、Grammatical Range and Accuracy 三项一个估计分（0–9，可以是 .5），各用一句话说明依据。Pronunciation 无法从文字判断，写明「未评估」。再给一个整体的粗略估分，并提醒这只是根据文字的估计。
【逐题点评】每题写：是否切题、展开是否充分（Part 2 是否覆盖了卡片上的要点、时长是否够）；1–2 个具体的用词或语法问题，写出原句和改正后的句子；可以替换得更地道的表达。
【改进版回答】每题给一个改进版英文回答，尽量保留学生原来的内容和观点。长度：Part 1 每题 40–60 词，Part 2 约 220–260 词，Part 3 每题 80–110 词，追问题 20–40 词。
【下一步练习建议】两三条具体可做的建议。

${qa}`;
  try{ out.textContent = await App.askClaude(prompt, { maxTokens:16000, effort:"medium" }) }
  catch(e){ out.textContent = e.message || "生成失败，可以再试一次。" }
  btn.disabled = false;
}

/* ---------- 首页 ---------- */
function lastOf(mode, id){ const h = data.history.filter(x => x.mode===mode && x.set===id); return h.length ? `练过 ${h.length} 次` : "" }
function renderHome(){
  const hist = data.history.slice(-8).reverse(), on = App.rec.hasStream(), rb = App.rec.recogBroken();
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>雅思口语</h2><div class="date">三个部分 · 约 11–14 分钟 · 与考官面对面</div></div>
      <section class="panel" style="padding:14px">
        <p class="section-label">设备检查</p>
        <div class="status-list">
          <div><span class="dot ${navigator.mediaDevices ? (on ? "ok" : "unk") : "no"}"></span><span>麦克风：${navigator.mediaDevices ? (on ? "已连接" : "还没测试") : "当前打开方式用不了麦克风"}</span></div>
          <div><span class="dot ${!SR || rb ? "no" : "unk"}"></span><span>语音识别：${!SR ? "浏览器不支持" : rb ? "上次出错（" + esc(rb) + "）" : "浏览器支持，测一下才知道能否连上"}</span></div>
        </div>
        <div class="row" style="margin-top:10px"><button class="btn alt" id="isMic">录 4 秒试试</button></div>
        <div class="level" style="margin-top:10px"><i></i></div>
        <div id="isMicOut" class="note" style="margin-top:8px"></div>
      </section>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:8px">
        <p class="section-label" style="margin:0">练习选项</p>
        <label class="check"><input type="checkbox" id="isOptText" ${data.settings.showText ? "checked" : ""}> 显示考官问题的文字（真实考试只有声音）</label>
        <label class="check"><input type="checkbox" id="isOptLive" ${data.settings.showLive ? "checked" : ""}> 作答时显示实时识别文字</label>
      </section>
      <div class="tip"><b>评分看四项</b><br>流利与连贯、词汇丰富度、语法多样性与准确性、发音，各占四分之一。说得自然、连贯比用难词更重要。</div>
    </aside>
    <section class="desk">
      <article class="task" style="margin-bottom:14px">
        <div class="en">Full Speaking Test</div>
        <h3>完整模拟</h3>
        <div class="spec"><span>Part 1 三个话题约 10 题</span><span>Part 2 话题卡</span><span>Part 3 讨论 4 题</span><span>约 12–15 分钟</span></div>
        <p class="note" style="margin:0">按真实考试顺序随机抽题，Part 2 和 Part 3 用同一个话题。练完可以逐题回放、修改识别文字，并让 AI 按雅思评分标准估分。</p>
        <div class="row"><button class="btn" data-start="full">开始模拟</button></div>
      </article>
      <div class="tasks">
        <article class="task">
          <div class="en">Part 1 · Introduction and Interview</div><h3>日常问答</h3>
          <div class="spec"><span>每个话题 4 题</span><span>每题 15–30 秒</span></div>
          <p class="note" style="margin:0">考官问关于你自己的日常问题。前三个是考试开头常问的身份类话题。</p>
          <div class="setlist">${P1.map(t => `<button class="setrow" data-start="p1" data-set="${t.id}"><b>${esc(t.name)}</b><span class="note">${esc(t.en)}</span><small>${lastOf("p1", t.id)}</small></button>`).join("")}</div>
        </article>
        <article class="task">
          <div class="en">Part 2 · Long Turn</div><h3>话题卡</h3>
          <div class="spec"><span>准备 1 分钟</span><span>陈述 1–2 分钟</span><span>1 个追问</span></div>
          <p class="note" style="margin:0">拿到一张话题卡，按卡片上的提示讲一段经历或描述。</p>
          <div class="setlist">${P2.map(c => `<button class="setrow" data-start="p2" data-set="${c.id}"><b>${esc(c.name)}</b><span class="note">${esc(c.title.replace(/^Describe /, "").replace(/\.$/, ""))}</span><small>${lastOf("p2", c.id)}</small></button>`).join("")}</div>
        </article>
        <article class="task">
          <div class="en">Part 3 · Discussion</div><h3>深入讨论</h3>
          <div class="spec"><span>每组 4 题</span><span>每题 30–60 秒</span></div>
          <p class="note" style="margin:0">围绕 Part 2 的话题讨论更抽象的社会问题，考观点、论证和比较。</p>
          <div class="setlist">${P2.map(c => `<button class="setrow" data-start="p3" data-set="${c.id}"><b>${esc(c.part3.theme)}</b><span class="note">接「${esc(c.name)}」</span><small>${lastOf("p3", c.id)}</small></button>`).join("")}</div>
        </article>
      </div>
      <p class="section-label">最近练习</p>
      ${hist.length ? `<div class="tablewrap history"><table><thead><tr><th>时间</th><th>题目</th><th>情况</th></tr></thead><tbody>${hist.map(h => `<tr><td>${new Date(h.t).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}</td><td>${esc(h.name)}</td><td>${esc(h.summary)}</td></tr>`).join("")}</tbody></table></div>`
        : `<p class="note">还没有练习记录。先在左边测一下麦克风，然后选一个部分开始。</p>`}
    </section>
  </div>`);
}
async function micTest(btn){
  const out = $("#isMicOut");
  btn.disabled = true;
  try{ await ensureMic() }catch(e){ out.textContent = MIC_ERR[e.name] || ("打开麦克风失败：" + (e.message||e.name)); btn.disabled = false; return }
  out.textContent = "正在录音，说一句英文，比如 “I'm preparing for the IELTS speaking test.”";
  const r = await record(4, { onTick:el => { btn.textContent = `录音中 ${Math.ceil(4-el)} 秒` }, onText:t => { out.textContent = "识别中：" + t } });
  btn.textContent = "再录一次"; btn.disabled = false;
  out.innerHTML = (r.url ? `<audio controls src="${r.url}"></audio>` : "没有录到声音。") +
    `<div style="margin-top:6px">${r.transcript ? "识别结果：" + esc(r.transcript) : (RECOG_ERR[r.recogError] || "没有识别到文字。说话声音大一点再试，或检查网络。")}</div>`;
}

/* ---------- 事件 ---------- */
function onClick(e){
  const t = e.target.closest("button"); if(!t) return;
  const d = t.dataset;
  if(t.id==="isMic"){ micTest(t); return }
  if(d.start){ start(d.start, d.set); return }
  if(t.id==="isGo"){ t.disabled = true; begin(); return }
  if(d.skip!==undefined){ if(S && S.skip) S.skip(); return }
  if(d.stop!==undefined){ App.rec.stop(); return }
  if(d.quit!==undefined || d.home!==undefined){ abortSession(); renderHome(); return }
  if(d.again!==undefined){ const { mode, id } = S; abortSession(); start(mode, id); return }
  if(d.say){ App.speak(d.say); return }
  if(t.id==="isAI"){ aiGrade(t); return }
}
function onInput(e){
  const t = e.target;
  if(t.id==="isNotes" && S){ S.notes = t.value; return }
  if(t.dataset && t.dataset.tr!==undefined && S){ const i = +t.dataset.tr; S.results[i].transcript = t.value; const el = $("#ism"+i); if(el) el.innerHTML = metricsHTML(S.results[i]); return }
  if(t.id==="isOptText"){ data.settings.showText = t.checked; save() }
  if(t.id==="isOptLive"){ data.settings.showLive = t.checked; save() }
}
function onKey(e){
  if(App.route!=="ispeaking" || !S) return;
  if(e.code!=="Space" || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName||"")) return;
  if(App.rec.busy()){ e.preventDefault(); App.rec.stop() }
  else if(S.skip){ e.preventDefault(); S.skip() }
}

App.routes.ispeaking = {
  exams:["ielts"],
  init(){
    const root = $("#view-ispeaking");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
    document.addEventListener("keydown", onKey);
  },
  enter(){ if(!S) renderHome() },
  leave(){ if(S && !S.entry) abortSession() }
};
})();
