/* 托福模考（考场模式）：仿照机考的流程和界面——全屏、顶部状态栏（部分、题号、计时、隐藏时间）、一屏一题、
   阅读可以前后翻和 Review、听力只能往后、写作有剪切/粘贴/撤销按钮、口语自动计时录音。
   题库、判分和练习记录与各模块共用（reading.js、listening.js、writing.js、speaking.js 暴露的 *Kit）。
   界面是本站自己设计的，不使用 ETS 的标志和品牌样式。 */
(function(){
const { $, esc, shuffle } = App;
const RK = App.readingKit, LK = App.listeningKit, SK = App.speakingKit, WK = App.writingKit, T = App.tts;
const READ_MIN = 12;
const SEC = {
  reading:{ en:"Reading", cn:"阅读", mins:"约 24 分钟", desc:"两个模块，每个模块 12 分钟：补全单词、日常阅读、学术文章。模块内可以前后翻页、用 Review 查看作答情况。第二模块难度根据第一模块的表现调整。" },
  listening:{ en:"Listening", cn:"听力", mins:"约 20 分钟", desc:"两个模块：听后选回应、对话、通知、学术讲座。每段录音只播放一次，听完逐题作答，每题有作答时限，答完不能返回。" },
  writing:{ en:"Writing", cn:"写作", mins:"约 23 分钟", desc:"组句 10 题（6 分 50 秒）、写邮件（7 分钟）、学术讨论（10 分钟）。编辑框上方有剪切、粘贴、撤销、重做按钮，可以隐藏字数。" },
  speaking:{ en:"Speaking", cn:"口语", mins:"约 8 分钟", desc:"听后复述 7 句、模拟面试 4 题，没有准备时间，提示音后自动开始录音。需要麦克风，建议戴耳机。" }
};
const ORDER = ["reading","listening","writing","speaking"];

/* ---------- 记录 ---------- */
function normalize(d){ d = d || {}; return { history:Array.isArray(d.history) ? d.history : [], hideTime:!!d.hideTime } }
let data = normalize(App.store.get(App.KEYS.exam, null));
const save = () => App.store.set(App.KEYS.exam, data);
App.examData = () => data;
App.loadExamData = d => { data = normalize(d); save(); if(App.route==="exam" && !X) renderHome() };

/* ---------- 工具 ---------- */
const fmt = ms => { const s = Math.max(0, Math.ceil(ms/1000)); return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}` };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const view = html => { $("#view-exam").innerHTML = html };
const least = (list, done) => shuffle(list.slice()).sort((a,b) => ((done[a.id]||{}).cnt||0) - ((done[b.id]||{}).cnt||0));
const ABCD = "ABCD";

/* ---------- 会话 ---------- */
// X：{ order, si, results:{}, started, sec:当前部分的状态 }
let X = null, timer = 0, token = 0;
function stopAll(){ token++; clearInterval(timer); timer = 0; T.stop(); App.rec.stop() }
function startExam(order){
  X = { order, si:-1, results:{}, started:Date.now() };
  nextSection();
}
function nextSection(){
  X.si++;
  if(X.si>=X.order.length) return finishExam();
  const k = X.order[X.si];
  X.sec = { kind:k, phase:"dir" };
  render();
}
function beginSection(){
  const k = X.sec.kind;
  if(k==="reading") readingModule(1);
  else if(k==="listening") listeningModule(1);
  else if(k==="writing") writingStart();
  else speakingStart();
}
function exitExam(){ stopAll(); X = null; renderHome() }
function startTicker(){ clearInterval(timer); timer = setInterval(tick, 250) }
function tick(){
  if(!X || !X.sec) return;
  const s = X.sec, el = $("#xmTime");
  if(s.deadline){
    const left = s.deadline - Date.now();
    if(el){ el.textContent = fmt(left); el.parentElement.classList.toggle("warn", left<60000) }
    if(left<=0){ s.deadline = 0; onTimeUp() }
  }else if(el) el.textContent = "";
}
function onTimeUp(){
  const s = X.sec;
  if(s.kind==="reading") return submitReadingModule(true);
  if(s.kind==="listening") return listenNext(true);
  if(s.kind==="writing") return writingTimeUp();
}

/* ---------- 阅读 ---------- */
function readingModule(m){
  const s = X.sec, done = App.readingData().done, avoid = s.avoid || (s.avoid = new Set());
  const level = m===1 ? 2 : s.level2;
  const pick = (kind, n) => { const list = least(RK.R[kind].filter(it => it.level===level && !avoid.has(it.id)), done).slice(0,n); list.forEach(it => avoid.add(it.id)); return list };
  const tasks = [...pick("ctw",1), ...pick("daily",2), ...pick("academic",1)].map(RK.makeTask);
  const screens = []; let n = 1;
  tasks.forEach((t,ti) => {
    if(t.item.kind==="ctw"){ const k = RK.buildCtw(t.item).blanks.length; screens.push({ t:ti, ctw:true, from:n, to:n+k-1 }); n += k }
    else t.item.qs.forEach((q,qi) => screens.push({ t:ti, q:qi, from:n, to:n++ }));
  });
  Object.assign(s, { phase:"run", module:m, level, tasks, screens, idx:0, total:n-1, deadline:Date.now() + READ_MIN*60000, review:false });
  s.mods = s.mods || [];
  render(); startTicker();
}
function readingAnswered(scr){
  const t = X.sec.tasks[scr.t];
  if(scr.ctw){ const bl = RK.buildCtw(t.item).blanks; return bl.filter((_,i) => (t.ans[i]||"").trim()).length===bl.length }
  return t.ans[scr.q]!=null;
}
function submitReadingModule(timeUp){
  const s = X.sec;
  const res = s.tasks.map(RK.grade), c = res.reduce((a,r) => a+r.c, 0), n = res.reduce((a,r) => a+r.n, 0);
  s.mods.push({ level:s.level, tasks:s.tasks, res, c, n, timeUp });
  s.deadline = 0;
  if(s.module===1){ s.level2 = c/n>=0.6 ? 3 : 1; s.phase = "between"; render() }
  else{
    s.mods.forEach(m => m.tasks.forEach((t,i) => RK.record(t, m.res[i])));
    X.results.reading = { mods:s.mods, level2:s.level2, c:s.mods.reduce((a,m) => a+m.c, 0), n:s.mods.reduce((a,m) => a+m.n, 0) };
    s.phase = "end"; render();
  }
}
function passageHTML(t, q){
  const it = t.item;
  const mark = q && q.hl ? new RegExp("\\b(" + q.hl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")\\b") : null;
  const paras = it.text.split(/\n\s*\n/).map(p => `<p>${p.split("\n").map(l => { const e = esc(l); return mark ? e.replace(mark, "<mark>$1</mark>") : e }).join("<br>")}</p>`).join("");
  if(it.kind==="daily") return `<div class="doc"><div class="doc-kind">${esc(it.doc)}</div><div class="doc-head">${it.head.map(([k,v]) => `<div><span>${esc(k)}</span>${esc(v)}</div>`).join("")}</div><div class="ptext">${paras}</div></div>`;
  return `<div class="ptext"><h3 class="ptitle">${esc(it.title)}</h3>${paras}</div>`;
}
function readingScreenHTML(){
  const s = X.sec, scr = s.screens[s.idx], t = s.tasks[scr.t];
  if(s.review) return `<div class="xm-review"><h3>Review</h3><p class="note">点击题号回到这道题。灰色是还没作答的题。</p>
    <div class="xm-grid">${s.screens.map((x,i) => `<button class="xm-cell${readingAnswered(x) ? " done" : ""}${i===s.idx ? " cur" : ""}" data-xgo="${i}">${x.from===x.to ? x.from : `${x.from}–${x.to}`}<small>${x.ctw ? "补全单词" : readingAnswered(x) ? "已答" : "未答"}</small></button>`).join("")}</div></div>`;
  if(scr.ctw){
    const { parts, blanks } = RK.buildCtw(t.item);
    const body = parts.map(p => {
      if(p.blank===undefined) return esc(p.text);
      const b = blanks[p.blank], v = t.ans[p.blank] || "";
      return `${esc(b.shown)}<input class="ctw-in" data-xb="${p.blank}" maxlength="${b.missing.length}" style="width:calc(${b.missing.length}ch + 14px)" value="${esc(v)}" placeholder="${"_".repeat(b.missing.length)}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="第 ${scr.from + p.blank} 题">${esc(p.rest)}`;
    }).join("");
    return `<div class="xm-single"><p class="xm-dir">Fill in the missing letters in the paragraph.</p><p class="ctw">${body}</p></div>`;
  }
  const q = t.item.qs[scr.q];
  const opts = t.order[scr.q].map((oi,k) => `<button class="opt${t.ans[scr.q]===oi ? " sel" : ""}" data-xo="${oi}"><span class="l">${ABCD[k]}</span><span>${esc(q.opts[oi])}</span></button>`).join("");
  return `<div class="xm-split"><article class="xm-pane">${passageHTML(t, q)}</article><section class="xm-pane"><p class="xm-qno">Question ${scr.from}</p><div class="qt">${esc(q.q)}</div><div class="opts">${opts}</div></section></div>`;
}

/* ---------- 听力 ---------- */
function listeningModule(m){
  const s = X.sec, done = App.listeningData().done, avoid = s.avoid || (s.avoid = new Set());
  const level = m===1 ? 2 : s.level2;
  const pick = (kind, n) => { const list = least(LK.POOL[kind].filter(it => it.level===level && !avoid.has(it.id)), done).slice(0,n); list.forEach(it => avoid.add(it.id)); return list };
  const units = [...pick("response",4), ...pick("conv",1), ...pick("ann",1), ...pick("talk",1)].map(LK.makeUnit);
  const screens = []; let n = 1;
  units.forEach((u,ui) => { screens.push({ u:ui, play:true }); u.item.qs.forEach((q,qi) => screens.push({ u:ui, q:qi, no:n++ })) });
  Object.assign(s, { phase:"run", module:m, level, units, screens, idx:0, total:n-1, deadline:0 });
  s.mods = s.mods || [];
  render(); startTicker(); enterListenScreen();
}
function enterListenScreen(){
  const s = X.sec, scr = s.screens[s.idx];
  if(scr.play){
    s.deadline = 0;
    const u = s.units[scr.u], me = ++token;
    if(!T.canPlay()){ u.textMode = true; render(); return }
    T.play(LK.segments(u.item), (i,n) => { const p = $("#xmProg"); if(p) p.style.width = Math.round(i/n*100) + "%" }).then(ok => { if(ok && me===token && X && X.sec===s && s.screens[s.idx]===scr) listenNext(false) });
  }else{
    const u = s.units[scr.u];
    s.deadline = Date.now() + (u.item.kind==="response" ? LK.ANSWER_SEC.response : LK.ANSWER_SEC.other)*1000;
    render();   // 顶部栏要显示这道题的作答倒计时
  }
}
function listenNext(){
  const s = X.sec; T.stop();
  if(s.idx < s.screens.length-1){ s.idx++; if(s.screens[s.idx].play) render(); enterListenScreen(); return }
  const res = s.units.map(LK.grade), c = res.reduce((a,r) => a+r.c, 0), n = res.reduce((a,r) => a+r.n, 0);
  s.mods.push({ level:s.level, units:s.units, res, c, n }); s.deadline = 0;
  if(s.module===1){ s.level2 = c/n>=0.6 ? 3 : 1; s.phase = "between"; render() }
  else{
    s.mods.forEach(m => m.units.forEach((u,i) => LK.record(u, m.res[i])));
    X.results.listening = { mods:s.mods, level2:s.level2, c:s.mods.reduce((a,m) => a+m.c, 0), n:s.mods.reduce((a,m) => a+m.n, 0) };
    s.phase = "end"; render();
  }
}
const SCENE = {
  conv:'<svg viewBox="0 0 220 120" aria-hidden="true"><circle cx="70" cy="45" r="20"/><path d="M38 110c0-22 14-36 32-36s32 14 32 36"/><circle cx="150" cy="45" r="20"/><path d="M118 110c0-22 14-36 32-36s32 14 32 36"/></svg>',
  talk:'<svg viewBox="0 0 220 120" aria-hidden="true"><rect x="96" y="12" width="110" height="64" rx="4"/><path d="M110 32h70M110 46h55M110 60h62"/><circle cx="52" cy="42" r="18"/><path d="M22 112c0-22 13-36 30-36s30 14 30 36M78 80l24-12"/></svg>',
  ann:'<svg viewBox="0 0 220 120" aria-hidden="true"><path d="M70 50h22l46-26v72L92 70H70z"/><path d="M152 46c8 8 8 20 0 28M166 36c14 14 14 34 0 48"/></svg>',
  response:'<svg viewBox="0 0 220 120" aria-hidden="true"><circle cx="110" cy="42" r="20"/><path d="M78 110c0-22 14-36 32-36s32 14 32 36"/><path d="M146 30c6 6 6 16 0 22M156 22c11 11 11 27 0 38"/></svg>'
};
function listeningScreenHTML(){
  const s = X.sec, scr = s.screens[s.idx], u = s.units[scr.u], it = u.item;
  if(scr.play){
    if(u.textMode) return `<div class="xm-single"><div class="fb no">浏览器无法朗读，下面显示原文，读完后点 Next。</div><div class="ltrans"><p>${esc(it.kind==="response" ? it.prompt : it.script).replace(/\n/g,"<br>")}</p></div></div>`;
    return `<div class="xm-listen"><div class="xm-scene">${SCENE[it.kind]}</div>
      <p class="xm-dir">${it.kind==="response" ? "Listen to the speaker, then choose the best response." : it.kind==="conv" ? "Listen to a conversation." : it.kind==="ann" ? "Listen to an announcement." : "Listen to part of a talk in a class."}</p>
      <div class="bar xm-prog"><i id="xmProg" style="width:0"></i></div><p class="note">正在播放，只播放一次</p></div>`;
  }
  const q = it.qs[scr.q];
  const opts = u.order[scr.q].map((oi,k) => `<button class="opt${u.ans[scr.q]===oi ? " sel" : ""}" data-xo="${oi}"><span class="l">${ABCD[k]}</span><span>${esc(q.opts[oi])}</span></button>`).join("");
  return `<div class="xm-single"><p class="xm-qno">Question ${scr.no}</p><div class="qt">${esc(q.q)}</div><div class="opts">${opts}</div></div>`;
}

/* ---------- 写作 ---------- */
function writingStart(){
  const s = X.sec, wd = App.writingData();
  const set = least(WK.W.sentenceSets, Object.fromEntries(Object.entries(wd.sets).map(([k,v]) => [k, { cnt:v.cnt }])))[0];
  const items = set.list.map(it => {
    let uid = 0;
    return { it, bank: shuffle([...it.chunks.filter(c => !c.fixed).map(c => ({ id:uid++, text:c.text })), ...it.distractors.map(d => ({ id:uid++, text:d }))]),
      slots: it.chunks.map(c => c.fixed ? { fixed:true, text:c.text } : { fixed:false, chip:null }) };
  });
  const byDraft = list => least(list, wd.drafts)[0];
  Object.assign(s, { phase:"run", part:"bs", set, items, idx:0, email:byDraft(WK.W.emails), disc:byDraft(WK.W.discussions), texts:{ email:"", disc:"" }, hideCount:false, clip:"",
    deadline:Date.now() + WK.SET_SECONDS*1000, partStart:Date.now(), secs:{} });
  render(); startTicker();
}
function writingNext(){
  const s = X.sec;
  if(s.part==="bs" && s.idx < s.items.length-1){ s.idx++; render(); return }
  if(s.part==="bs"){ s.part = "email"; s.deadline = Date.now() + WK.EMAIL_SECONDS*1000; s.partStart = Date.now(); render(); return }
  if(s.part==="email"){ s.secs.email = Math.round((Date.now()-s.partStart)/1000); s.part = "disc"; s.deadline = Date.now() + WK.DISC_SECONDS*1000; s.partStart = Date.now(); render(); return }
  s.secs.disc = Math.round((Date.now()-s.partStart)/1000);
  finishWriting();
}
function writingTimeUp(){
  const s = X.sec;
  if(s.part==="bs"){ s.idx = s.items.length-1 }
  writingNext();
}
function finishWriting(){
  const s = X.sec; s.deadline = 0;
  const bs = s.items.map(x => { const built = x.slots.map(sl => sl.fixed ? sl.text : (x.bank.find(b => b.id===sl.chip) || {}).text); const ok = built.every((t,i) => t===x.it.chunks[i].text); return { ok, built: built.map(t => t || "＿").join(" ") + x.it.punct } });
  bs.forEach((r,i) => WK.tag(s.items[i].it.tag, r.ok));
  const ea = WK.analyze(s.texts.email, "email", s.email), da = WK.analyze(s.texts.disc, "disc", s.disc);
  WK.draft(s.email.id, s.texts.email, s.secs.email || 0); WK.draft(s.disc.id, s.texts.disc, s.secs.disc || 0);
  X.results.writing = { set:s.set, items:s.items, bs, c:bs.filter(r => r.ok).length, email:{ it:s.email, text:s.texts.email, a:ea }, disc:{ it:s.disc, text:s.texts.disc, a:da } };
  s.phase = "end"; render();
}
function writingScreenHTML(){
  const s = X.sec;
  if(s.part==="bs"){
    const x = s.items[s.idx], it = x.it, used = new Set(x.slots.filter(sl => sl.chip!=null).map(sl => sl.chip));
    const slots = x.slots.map((sl,i) => sl.fixed ? `<span class="slot fixed">${esc(sl.text)}</span>` : `<button class="slot${sl.chip!=null ? " filled" : ""}" data-xslot="${i}">${sl.chip!=null ? esc(x.bank.find(b => b.id===sl.chip).text) : "&nbsp;"}</button>`).join("");
    return `<div class="xm-single"><p class="xm-dir">Make an appropriate sentence.</p>
      <div class="sb"><div class="sb-turn"><span class="sb-who">A</span><p class="sb-ctx">${esc(it.ctx)}</p></div>
      <div class="sb-turn"><span class="sb-who b">B</span><div class="sb-line">${slots}<span class="sb-punct">${esc(it.punct)}</span></div></div>
      <div class="sb-bank">${x.bank.map(b => `<button class="bchip" data-xchip="${b.id}" ${used.has(b.id) ? "disabled" : ""}>${esc(b.text)}</button>`).join("")}</div></div></div>`;
  }
  const kind = s.part, it = s[kind], text = s.texts[kind];
  const prompt = kind==="email"
    ? `<div class="doc"><div class="doc-kind">Write an Email</div><div class="ptext"><p>${esc(it.scenario)}</p><p><b>In your email, do the following:</b></p><ul class="wbul">${it.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul><p class="note">Write as much as you can and in complete sentences.</p></div></div>`
    : `<div class="ptext"><p class="note" style="font-family:var(--f-ui);font-size:14px">Your professor is teaching a class on ${esc(it.topic.toLowerCase())}. Write a post responding to the professor's question. An effective response will contain at least 100 words.</p></div>
       <div class="post prof"><div class="who">${esc(it.professor.name)}</div><p>${esc(it.professor.post)}</p></div>${it.students.map(st => `<div class="post"><div class="who">${esc(st.name)}</div><p>${esc(st.post)}</p></div>`).join("")}`;
  const n = WK.wordsOf(text).length;
  return `<div class="xm-split"><article class="xm-pane">${prompt}</article><section class="xm-pane">
    <div class="xm-tools"><button data-xtool="cut">Cut</button><button data-xtool="paste">Paste</button><button data-xtool="undo">Undo</button><button data-xtool="redo">Redo</button>
      <span class="xm-count">${s.hideCount ? "" : `Word Count: <b id="xmCount">${n}</b>`}</span><button data-xtool="count">${s.hideCount ? "Show Word Count" : "Hide Word Count"}</button></div>
    ${kind==="email" ? `<div class="doc-head xm-mailhead"><div><span>To</span>${esc(it.to)}</div><div><span>Subject</span>${esc(it.title)}</div></div>` : ""}
    <textarea id="xmText" class="w-editor xm-editor" spellcheck="false" autocomplete="off">${esc(text)}</textarea></section></div>`;
}
function tool(name){
  const s = X.sec, ta = $("#xmText");
  if(name==="count"){ s.hideCount = !s.hideCount; render(); return }
  if(!ta) return;
  ta.focus();
  const a = ta.selectionStart, b = ta.selectionEnd;
  // 用 execCommand 修改，编辑框自己的撤销记录才会包含剪切和粘贴
  if(name==="cut" && b>a){ s.clip = ta.value.slice(a,b); document.execCommand("delete") }
  else if(name==="paste" && s.clip){ if(!document.execCommand("insertText", false, s.clip)) ta.setRangeText(s.clip, a, b, "end") }
  else if(name==="undo") document.execCommand("undo");
  else if(name==="redo") document.execCommand("redo");
  s.texts[s.part] = ta.value; const c = $("#xmCount"); if(c) c.textContent = WK.wordsOf(ta.value).length;
}

/* ---------- 口语 ---------- */
async function speakingStart(){
  const s = X.sec;
  try{ await App.rec.ensureMic() }catch(e){ s.phase = "nomic"; s.micErr = App.rec.MIC_ERR[e.name] || ("打开麦克风失败：" + (e.message || e.name)); render(); return }
  const hist = App.speakingData().history, cnt = id => hist.filter(h => h.set===id).length;
  const rep = window.REPEAT_SETS.slice().sort((a,b) => cnt(a.id)-cnt(b.id))[0], intv = window.INTERVIEW_SETS.slice().sort((a,b) => cnt(a.id)-cnt(b.id))[0];
  Object.assign(s, { phase:"run", rep, intv, part:"repeat", idx:-1, results:{ repeat:[], interview:[] }, label:"", status:"" });
  App.audioCtx();
  runSpeaking(++token);
}
function speakView(label, status, recording){
  const s = X.sec; s.label = label; s.status = status; s.recording = recording; render();
}
async function runSpeaking(me){
  const s = X.sec, ok = () => me===token && X && X.sec===s;
  speakView(s.rep.intro, "Listen and Repeat"); await App.speak(s.rep.intro); if(!ok()) return; await sleep(400);
  for(let i=0;i<s.rep.items.length;i++){
    s.part = "repeat"; s.idx = i; const sentence = s.rep.items[i];
    speakView("", "请仔细听，只播放一次"); await App.speak(sentence); if(!ok()) return;
    await sleep(200); await App.beep(); if(!ok()) return;
    const max = SK.repeatSeconds(sentence);
    speakView("", "Recording", max);
    const r = await App.rec.record(max, recUI(max)); if(!ok()) return;
    const sc = SK.scoreRepeat(sentence, r.transcript);
    s.results.repeat.push(Object.assign(r, { target:sentence, pct: r.transcript ? sc.pct : null, html:sc.html }));
    await sleep(500);
  }
  speakView(s.intv.intro, "Take an Interview"); await App.speak(s.intv.intro); if(!ok()) return; await sleep(400);
  for(let i=0;i<s.intv.items.length;i++){
    s.part = "interview"; s.idx = i; const q = s.intv.items[i];
    speakView("", "采访者正在提问…"); await App.speak(q.q); if(!ok()) return;
    await sleep(200); await App.beep(); if(!ok()) return;
    speakView("", "Recording", SK.INTERVIEW_SECONDS);
    const r = await App.rec.record(SK.INTERVIEW_SECONDS, recUI(SK.INTERVIEW_SECONDS)); if(!ok()) return;
    s.results.interview.push(Object.assign(r, { q:q.q, hint:q.hint }));
    await sleep(500);
  }
  finishSpeaking();
}
function recUI(max){
  const t0 = Date.now();
  return { onTick(el){ const c = $("#xmRec"), b = $("#xmRecBar"); if(c) c.textContent = fmt((max-el)*1000); if(b) b.style.width = Math.min(100, el/max*100) + "%" }, onText(){} };
}
function finishSpeaking(){
  const s = X.sec, rp = s.results.repeat.filter(r => r.pct!=null);
  const avg = rp.length ? Math.round(rp.reduce((a,r) => a+r.pct, 0)/rp.length) : null;
  const words = r => (r.transcript.match(/[A-Za-z']+/g) || []).length;
  SK.addHistory({ t:Date.now(), task:"repeat", set:s.rep.id, name:s.rep.name + "（模考）", score:avg, summary: avg==null ? "未识别，自评" : `平均 ${avg}%` });
  SK.addHistory({ t:Date.now(), task:"interview", set:s.intv.id, name:s.intv.name + "（模考）", score:null, summary:`平均 ${Math.round(s.results.interview.reduce((a,r) => a+words(r), 0)/Math.max(1, s.results.interview.length))} 词/题` });
  X.results.speaking = { rep:s.rep, intv:s.intv, repeat:s.results.repeat, interview:s.results.interview, avg, words };
  s.phase = "end"; render();
}
function speakingScreenHTML(){
  const s = X.sec;
  if(s.phase==="nomic") return `<div class="xm-single"><div class="fb no">${esc(s.micErr)}</div><p class="note">口语部分需要麦克风。可以检查设置后重试，或者跳过这一部分。</p></div>`;
  const total = s.rep.items.length + s.intv.items.length, no = s.part==="repeat" ? s.idx+1 : s.rep.items.length + s.idx + 1;
  return `<div class="xm-listen">
    <div class="xm-scene">${s.part==="repeat" ? SCENE.response : SCENE.conv}</div>
    ${s.label ? `<p class="xm-dir">${esc(s.label)}</p>` : ""}
    <p class="xm-status">${s.recording ? `<span class="recdot"></span>Recording · <b id="xmRec">${fmt(s.recording*1000)}</b>` : esc(s.status)}</p>
    ${s.recording ? `<div class="timebar xm-prog"><i id="xmRecBar"></i></div><div class="level xm-prog"><i></i></div><button class="btn alt" data-xstop>说完了</button>` : ""}
    <p class="note">${s.idx>=0 ? `第 ${Math.max(1,no)} / ${total} 题` : ""}</p></div>`;
}

/* ---------- 界面 ---------- */
function header(){
  const s = X.sec, sec = SEC[s.kind];
  let info = "", btns = "";
  if(s.phase==="run"){
    if(s.kind==="reading"){ const scr = s.screens[s.idx]; info = `Module ${s.module} · Question ${scr.from===scr.to ? scr.from : `${scr.from}–${scr.to}`} of ${s.total}`;
      btns = s.review ? `<button data-xm="return">Return</button>` : `<button data-xm="review">Review</button><button data-xm="back" ${s.idx===0 ? "disabled" : ""}>Back</button><button data-xm="next" class="pri">${s.idx===s.screens.length-1 ? "Submit" : "Next"}</button>` }
    else if(s.kind==="listening"){ const scr = s.screens[s.idx]; info = `Module ${s.module}${scr.play ? "" : ` · Question ${scr.no} of ${s.total}`}`;
      btns = scr.play && !s.units[scr.u].textMode ? "" : `<button data-xm="next" class="pri">Next</button>` }
    else if(s.kind==="writing"){ info = s.part==="bs" ? `Build a Sentence · Question ${s.idx+1} of ${s.items.length}` : s.part==="email" ? "Write an Email" : "Academic Discussion"; btns = `<button data-xm="next" class="pri">Next</button>` }
    else info = s.idx>=0 ? (s.part==="repeat" ? "Listen and Repeat" : "Take an Interview") : "";
  }
  const showTime = s.phase==="run" && s.deadline;
  return `<header class="xm-bar">
    <div class="xm-brand"><b>托福模考</b><span>${sec.en}</span></div>
    <div class="xm-info">${info}</div>
    <div class="xm-time${data.hideTime ? " hidden" : ""}">${showTime ? `<span id="xmTime">${fmt(s.deadline-Date.now())}</span><button data-xm="hidetime">${data.hideTime ? "Show Time" : "Hide Time"}</button>` : ""}</div>
    <div class="xm-btns">${btns}<button data-xm="quit" class="quit">退出模考</button></div>
  </header>`;
}
function dirHTML(){
  const k = X.sec.kind, sec = SEC[k];
  return `<div class="xm-center"><p class="xm-kicker">${X.si+1} / ${X.order.length} · ${sec.en} Section</p><h2>${sec.cn}</h2><p>${sec.desc}</p>
    ${k==="speaking" ? `<p class="note">点「开始」后浏览器会请求麦克风权限，请选择允许。</p>` : ""}
    <button class="btn" data-xm="begin">开始${sec.cn}</button></div>`;
}
function between(){
  const s = X.sec;
  return `<div class="xm-center"><h2>Module 1 已结束</h2><p>第二模块的难度已经根据你在第一模块的表现调整。${s.kind==="reading" ? `第二模块同样是 ${READ_MIN} 分钟。` : ""}准备好后继续。</p>
    <button class="btn" data-xm="module2">开始 Module 2</button></div>`;
}
function sectionEnd(){
  const k = X.sec.kind, last = X.si===X.order.length-1;
  return `<div class="xm-center"><h2>${SEC[k].cn}部分已结束</h2><p>${last ? "这是最后一个部分，接下来查看成绩。" : `下一部分是${SEC[X.order[X.si+1]].cn}。可以稍作休息，准备好后继续。`}</p>
    <button class="btn" data-xm="nextsec">${last ? "查看成绩" : "进入下一部分"}</button></div>`;
}
function render(){
  if(!X) return renderHome();
  if(X.phase==="result") return renderResult();
  const s = X.sec;
  let body;
  if(s.phase==="dir") body = dirHTML();
  else if(s.phase==="between") body = between();
  else if(s.phase==="end") body = sectionEnd();
  else if(s.kind==="reading") body = readingScreenHTML();
  else if(s.kind==="listening") body = listeningScreenHTML();
  else if(s.kind==="writing") body = writingScreenHTML();
  else body = speakingScreenHTML();
  const skip = s.phase==="nomic" ? `<div class="xm-center" style="min-height:0"><button class="btn" data-xm="retrymic">重试麦克风</button> <button class="btn alt" data-xm="skipsec">跳过口语</button></div>` : "";
  view(`<div class="xm">${header()}<main class="xm-body">${body}${skip}</main></div>`);
  tick();
  if(s.kind==="writing" && s.part!=="bs" && s.phase==="run"){ const ta = $("#xmText"); if(ta){ ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length) } }
}

/* ---------- 成绩 ---------- */
function finishExam(){
  stopAll();
  const R = X.results, rec = { t:Date.now(), mins:Math.round((Date.now()-X.started)/60000), order:X.order };
  if(R.reading) rec.reading = [R.reading.c, R.reading.n];
  if(R.listening) rec.listening = [R.listening.c, R.listening.n];
  if(R.writing) rec.writing = { bs:R.writing.c, email:R.writing.email.a.n, disc:R.writing.disc.a.n };
  if(R.speaking) rec.speaking = { repeat:R.speaking.avg, interview:R.speaking.interview.length };
  data.history.push(rec); if(data.history.length>50) data.history = data.history.slice(-50); save();
  X.phase = "result"; X.rv = null; renderResult();
}
function optLine(q, ans, order){
  return order.map((oi,k) => `<div class="xm-opt${oi===0 ? " right" : ans===oi ? " wrong" : ""}">${ABCD[k]}. ${esc(q.opts[oi])}</div>`).join("");
}
function reviewHTML(kind){
  const R = X.results[kind];
  if(kind==="reading" || kind==="listening") return R.mods.map((m,mi) => `<section class="xm-rv"><h3>Module ${mi+1} · ${m.c}/${m.n}</h3>${(kind==="reading" ? m.tasks : m.units).map((t,ti) => {
      const it = t.item, res = m.res[ti];
      if(it.kind==="ctw"){ const bl = RK.buildCtw(it).blanks; return `<div class="ritem"><b>补全单词 · ${esc(it.title)}</b> <span class="note">${res.c}/${res.n}</span><div>${bl.map((b,i) => `<span class="xm-blank ${res.per[i] ? "ok" : "no"}">${esc(b.shown)}<b>${esc(b.missing)}</b>${res.per[i] ? "" : `<small>（你写 ${esc(t.ans[i]||"空")}）</small>`}</span>`).join(" ")}</div></div>` }
      const title = kind==="reading" ? esc(it.title) : `${LK.KIND[it.kind]}${it.title && it.kind!=="response" ? " · " + esc(it.title) : ""}`;
      const script = kind==="listening" ? `<details><summary class="note">原文</summary><div class="ltrans"><p>${esc(it.kind==="response" ? it.prompt : it.script).replace(/\n/g,"<br>")}</p></div></details>` : "";
      return `<div class="ritem"><b>${title}</b>${script}${it.qs.map((q,qi) => `<div class="xm-q"><div class="meta"><span class="chip ${res.per[qi] ? "done" : "bad"}">${res.per[qi] ? "正确" : t.ans[qi]==null ? "未作答" : "错误"}</span></div><div class="qt">${esc(q.q)}</div>${optLine(q, t.ans[qi], t.order[qi])}<div class="exp"><b>解析</b>　${esc(q.why)}</div></div>`).join("")}</div>`;
    }).join("")}</section>`).join("");
  if(kind==="writing") return `<section class="xm-rv"><h3>组句 · ${R.c}/${R.items.length}</h3>${R.items.map((x,i) => `<div class="ritem"><div class="meta"><span class="chip ${R.bs[i].ok ? "done" : "bad"}">${R.bs[i].ok ? "正确" : "错误"}</span></div><div class="note">A：${esc(x.it.ctx)}</div><div><b>${esc(x.it.sentence)}</b></div>${R.bs[i].ok ? "" : `<div class="said">你的答案：${esc(R.bs[i].built)}</div>`}<div class="exp">${esc(x.it.tip)}</div></div>`).join("")}</section>
    ${["email","disc"].map(k => { const w = R[k]; return `<section class="xm-rv"><h3>${k==="email" ? "写邮件" : "学术讨论"} · ${esc(w.it.title)} · ${w.a.n} 词</h3><div class="w-answer">${esc(w.text) || '<span class="note">（没有写内容）</span>'}</div>
      <div class="status-list" style="margin-top:8px">${w.a.checks.map(([ok,label,hint]) => `<div><span class="dot ${ok ? "ok" : "no"}"></span><span><b>${esc(label)}</b>${ok ? "" : `<br><span class="note">${esc(hint)}</span>`}</span></div>`).join("")}</div>
      <details><summary class="note">范文</summary><div class="w-answer model">${esc(w.it.model)}</div></details>
      <p class="note">想要 AI 估分和逐句修改，可以到「写作」里打开这道题重写，交卷后生成点评。</p></section>` }).join("")}`;
  const S = R;
  return `<section class="xm-rv"><h3>听后复述 · ${S.avg==null ? "未识别" : `平均完整度 ${S.avg}%`}</h3>${S.repeat.map((r,i) => `<div class="ritem"><div class="meta"><span>第 ${i+1} 句</span>${r.pct!=null ? `<span class="chip">${r.pct}%</span>` : ""}</div><div class="diff">${r.pct!=null ? r.html : esc(r.target)}</div>${r.transcript ? `<div class="said">识别到：${esc(r.transcript)}</div>` : ""}${r.url ? `<audio controls src="${r.url}"></audio>` : ""}</div>`).join("")}</section>
    <section class="xm-rv"><h3>模拟面试</h3>${S.interview.map((r,i) => `<div class="ritem"><b>Question ${i+1}</b><div class="q">${esc(r.q)}</div>${r.url ? `<audio controls src="${r.url}"></audio>` : ""}<div class="said">${r.transcript ? esc(r.transcript) : "没有识别到文字"}</div><div class="note">作答 ${Math.round(r.duration)} 秒 · ${S.words(r)} 词</div><details><summary class="note">参考思路</summary><div class="tip">${esc(r.hint)}</div></details></div>`).join("")}
    <p class="note">录音只保存在当前页面，离开或刷新后就没有了。AI 估分可以在「口语」里做模拟面试后生成。</p></section>`;
}
function renderResult(){
  const R = X.results;
  const rows = [];
  if(R.reading) rows.push(["reading", "阅读", `${R.reading.c} / ${R.reading.n}`, `${Math.round(R.reading.c/R.reading.n*100)}%`, `第二模块：${R.reading.level2===3 ? "较难" : "较易"}`]);
  if(R.listening) rows.push(["listening", "听力", `${R.listening.c} / ${R.listening.n}`, `${Math.round(R.listening.c/R.listening.n*100)}%`, `第二模块：${R.listening.level2===3 ? "较难" : "较易"}`]);
  if(R.writing) rows.push(["writing", "写作", `组句 ${R.writing.c} / ${R.writing.items.length}`, "", `邮件 ${R.writing.email.a.n} 词 · 讨论 ${R.writing.disc.a.n} 词`]);
  if(R.speaking) rows.push(["speaking", "口语", R.speaking.avg==null ? "复述未识别" : `复述 ${R.speaking.avg}%`, "", `面试 ${R.speaking.interview.length} 题`]);
  view(`<div class="xm"><header class="xm-bar"><div class="xm-brand"><b>托福模考</b><span>成绩</span></div><div class="xm-info"></div><div class="xm-time"></div><div class="xm-btns"><button data-xm="home" class="pri">返回</button></div></header>
    <main class="xm-body"><div class="xm-result">
      <h2>模考完成</h2><p class="note">用时约 ${Math.max(1, Math.round((Date.now()-X.started)/60000))} 分钟。新版托福按 1–6 分计分，ETS 没有公开答对题数和分数的换算，这里只给正确率和作答情况。阅读、听力、组句的结果已经计入各模块的题型统计。</p>
      <div class="tablewrap"><table><thead><tr><th>部分</th><th>结果</th><th>正确率</th><th>说明</th><th></th></tr></thead><tbody>
        ${rows.map(r => `<tr><td><b>${r[1]}</b></td><td>${r[2]}</td><td>${r[3]}</td><td class="note">${r[4]}</td><td><button class="btn-ghost" data-xrv="${r[0]}">${X.rv===r[0] ? "收起" : "查看详情"}</button></td></tr>`).join("")}
      </tbody></table></div>
      ${X.rv ? reviewHTML(X.rv) : ""}
    </div></main></div>`);
}

/* ---------- 首页 ---------- */
function renderHome(){
  const hist = data.history.slice(-6).reverse();
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>托福模考</h2><div class="date">考场模式 · 仿照机考流程</div></div>
      <div class="tip"><b>考前准备</b><br>用电脑上的 Edge 浏览器，戴耳机，找安静的地方。模考过程中不要切换到别的页面：听力录音会中断，口语录音会丢失。</div>
      <div class="tip"><b>和真实考试的区别</b><br>界面布局和操作方式参照机考，但不是 ETS 的官方界面；录音由浏览器朗读；题目是本站原创练习题；没有官方分数换算。</div>
    </aside>
    <section class="desk">
      <article class="task" style="margin-bottom:14px">
        <div class="en">Full Test</div><h3>完整模考</h3>
        <div class="spec"><span>阅读 → 听力 → 写作 → 口语</span><span>约 75 分钟</span></div>
        <p class="note" style="margin:0">全屏进行，一屏一题，顶部显示部分、题号和计时（可以隐藏）。阅读和听力是两个自适应模块，写作和口语按真实时限自动计时。每个部分结束后可以稍作休息。</p>
        <div class="row"><button class="btn" data-xstart="full">开始完整模考</button></div>
      </article>
      <div class="tasks">${ORDER.map(k => `<article class="task"><div class="en">${SEC[k].en} Section</div><h3>只考${SEC[k].cn}</h3><div class="spec"><span>${SEC[k].mins}</span></div><p class="note" style="margin:0">${SEC[k].desc}</p><div class="row"><button class="btn alt" data-xstart="${k}">开始</button></div></article>`).join("")}</div>
      <p class="section-label">最近模考</p>
      ${hist.length ? `<div class="tablewrap history"><table><thead><tr><th>时间</th><th>阅读</th><th>听力</th><th>写作（组句）</th><th>口语（复述）</th><th>用时</th></tr></thead><tbody>${hist.map(h => `<tr><td>${new Date(h.t).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}</td><td>${h.reading ? `${h.reading[0]}/${h.reading[1]}` : "—"}</td><td>${h.listening ? `${h.listening[0]}/${h.listening[1]}` : "—"}</td><td>${h.writing ? `${h.writing.bs}/10` : "—"}</td><td>${h.speaking ? (h.speaking.repeat==null ? "未识别" : h.speaking.repeat + "%") : "—"}</td><td>${h.mins} 分钟</td></tr>`).join("")}</tbody></table></div>`
        : `<p class="note">还没有模考记录。</p>`}
    </section>
  </div>`);
}

/* ---------- 事件 ---------- */
function onClick(e){
  const t = e.target.closest("button"); if(!t) return;
  const d = t.dataset;
  if(d.xstart){ startExam(d.xstart==="full" ? ORDER.slice() : [d.xstart]); return }
  if(!X) return;
  const s = X.sec;
  if(d.xm){
    const a = d.xm;
    if(a==="quit"){ if(!d.armed){ d.armed = "1"; t.textContent = "再点一次确认退出"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "退出模考" } }, 4000); return } exitExam(); return }
    if(a==="home"){ X = null; renderHome(); return }
    if(a==="hidetime"){ data.hideTime = !data.hideTime; save(); render(); return }
    if(a==="begin"){ beginSection(); return }
    if(a==="module2"){ if(s.kind==="reading") readingModule(2); else listeningModule(2); return }
    if(a==="nextsec"){ nextSection(); return }
    if(a==="retrymic"){ speakingStart(); return }
    if(a==="skipsec"){ s.phase = "end"; render(); return }
    if(s.kind==="reading"){
      if(a==="review"){ s.review = true; render(); return }
      if(a==="return"){ s.review = false; render(); return }
      if(a==="back" && s.idx>0){ s.idx--; render(); return }
      if(a==="next"){
        if(s.idx<s.screens.length-1){ s.idx++; render(); return }
        const left = s.screens.filter(x => !readingAnswered(x)).length;
        if(left && !d.armed){ d.armed = "1"; t.textContent = `还有 ${left} 处没答，再点一次提交`; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "Submit" } }, 4000); return }
        submitReadingModule(false); return;
      }
    }
    if(s.kind==="listening" && a==="next"){ listenNext(false); return }
    if(s.kind==="writing" && a==="next"){
      const ta = $("#xmText"); if(ta) s.texts[s.part] = ta.value;
      if(s.part!=="bs" && !d.armed){ d.armed = "1"; t.textContent = "进入下一题后不能返回，再点一次"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "Next" } }, 4000); return }
      writingNext(); return;
    }
    return;
  }
  if(d.xgo!==undefined){ s.idx = +d.xgo; s.review = false; render(); return }
  if(d.xo!==undefined){
    const v = +d.xo;
    if(s.kind==="reading"){ const scr = s.screens[s.idx]; s.tasks[scr.t].ans[scr.q] = v }
    else{ const scr = s.screens[s.idx]; s.units[scr.u].ans[scr.q] = v }
    t.parentElement.querySelectorAll(".opt").forEach(b => b.classList.toggle("sel", b===t));
    return;
  }
  if(d.xtool){ tool(d.xtool); return }
  if(d.xstop!==undefined){ App.rec.stop(); return }
  if(d.xrv){ X.rv = X.rv===d.xrv ? null : d.xrv; renderResult(); return }
  if(s.kind==="writing" && s.part==="bs"){
    const x = s.items[s.idx];
    if(d.xchip!==undefined){ const sl = x.slots.find(z => !z.fixed && z.chip==null); if(sl){ sl.chip = +d.xchip; render() } return }
    if(d.xslot!==undefined){ x.slots[+d.xslot].chip = null; render(); return }
  }
}
function onInput(e){
  const t = e.target; if(!X || !X.sec) return;
  const s = X.sec;
  if(t.id==="xmText"){ s.texts[s.part] = t.value; const c = $("#xmCount"); if(c) c.textContent = WK.wordsOf(t.value).length; return }
  if(t.dataset.xb!==undefined && s.kind==="reading"){
    const clean = t.value.replace(/[^A-Za-z]/g, ""); if(clean!==t.value) t.value = clean;
    s.tasks[s.screens[s.idx].t].ans[+t.dataset.xb] = clean;
    if(clean.length>=+t.maxLength){ const all = [...document.querySelectorAll("#view-exam .ctw-in")], i = all.indexOf(t); if(all[i+1]) all[i+1].focus() }
  }
}
function onKey(e){
  if(App.route!=="exam" || !X) return;
  const t = e.target;
  if(t.classList && t.classList.contains("ctw-in") && e.key==="Backspace" && !t.value){ const all = [...document.querySelectorAll("#view-exam .ctw-in")], i = all.indexOf(t); if(all[i-1]){ e.preventDefault(); all[i-1].focus() } }
}

App.routes.exam = {
  exams:["toefl"],
  init(){
    const root = $("#view-exam");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    document.addEventListener("keydown", onKey);
  },
  enter(){
    if(!X) return renderHome();
    render(); if(X.sec && X.sec.phase==="run") startTicker();
    // 离开页面再回来：听力录音从这一段开头重放；口语这一部分需要重新开始
    if(X.sec && X.sec.kind==="listening" && X.sec.phase==="run") enterListenScreen();
    if(X.sec && X.sec.kind==="speaking" && X.sec.phase==="run"){ X.sec.phase = "dir"; render() }
  },
  leave(){ clearInterval(timer); timer = 0; token++; T.stop(); App.rec.stop() }
};
})();
