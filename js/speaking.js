/* 口语模块：听后复述（Listen and Repeat）与模拟面试（Take an Interview） */
(function(){
const { $, esc } = App;
const { tokens, FILLER, SR, MIC_ERR, RECOG_ERR, ensureMic, record } = App.rec;
const REPEAT = window.REPEAT_SETS, INTERVIEW = window.INTERVIEW_SETS;
const INTERVIEW_SECONDS = 45;
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ---------- 记录 ---------- */
const sblank = () => ({ history:[], settings:{ showText:false, showLive:false } });
let data = Object.assign(sblank(), App.store.get(App.KEYS.speaking, {}));
data.settings = Object.assign(sblank().settings, data.settings || {});
const save = () => App.store.set(App.KEYS.speaking, data);
App.speakingData = () => data;
App.loadSpeakingData = d => { data = Object.assign(sblank(), d || {}); data.settings = Object.assign(sblank().settings, data.settings || {}); save(); if(App.route==="speaking") renderHome() };

/* ---------- 文本比对 ---------- */
const norm = w => w.replace(/'/g,"");
// 最长公共子序列：标记原句中被说出的词
function align(target, said){
  const a = target.map(norm), b = said.map(norm), n = a.length, m = b.length;
  const dp = Array.from({length:n+1}, () => new Uint16Array(m+1));
  for(let i=n-1;i>=0;i--) for(let j=m-1;j>=0;j--) dp[i][j] = a[i]===b[j] ? dp[i+1][j+1]+1 : Math.max(dp[i+1][j], dp[i][j+1]);
  const hit = new Array(n).fill(false); let i=0, j=0;
  while(i<n && j<m){ if(a[i]===b[j]){ hit[i]=true; i++; j++ } else if(dp[i+1][j]>=dp[i][j+1]) i++; else j++ }
  return hit;
}
function scoreRepeat(sentence, transcript){
  const words = sentence.split(/\s+/);
  const owners = [], toks = [];
  words.forEach((w,k) => tokens(w).forEach(t => { toks.push(t); owners.push(k) }));
  const hit = align(toks, tokens(transcript));
  const okWord = words.map(() => true);
  hit.forEach((h,idx) => { if(!h) okWord[owners[idx]] = false });
  const pct = toks.length ? Math.round(hit.filter(Boolean).length / toks.length * 100) : 0;
  const html = words.map((w,k) => `<span class="${okWord[k] ? "ok" : "miss"}">${esc(w)}</span>`).join(" ");
  return { pct, html };
}
const repeatSeconds = s => { const n = s.split(/\s+/).length; return n<=7 ? 8 : n<=12 ? 10 : 12 };
const levelOf = p => p>=95 ? ["done","完整复述"] : p>=70 ? ["learn","基本复述"] : p>=40 ? ["new","部分复述"] : ["bad","没跟上"];

/* ---------- 会话 ---------- */
let S = null, token = 0;
function abortSession(){
  token++;
  App.rec.stop();
  if(App.canSpeak) speechSynthesis.cancel();
  S = null;
}
function view(html){ $("#view-speaking").innerHTML = html }

/* ---------- 首页 ---------- */
function bestOf(task, id){
  const h = data.history.filter(x => x.task===task && x.set===id);
  if(!h.length) return "";
  if(task==="repeat"){ const b = Math.max(...h.map(x => x.score==null ? -1 : x.score)); return b>=0 ? `最好 ${b}%` : `练过 ${h.length} 次` }
  return `练过 ${h.length} 次`;
}
function renderHome(){
  const hist = data.history.slice(-8).reverse();
  const voices = App.voices().length;
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>口语练习</h2><div class="date">新版托福 · 约 8 分钟 · 无准备时间</div></div>
      <section class="panel" style="padding:14px">
        <p class="section-label">设备检查</p>
        <div class="status-list">
          <div><span class="dot ${navigator.mediaDevices ? (App.rec.hasStream() ? "ok" : "unk") : "no"}"></span><span>麦克风：${navigator.mediaDevices ? (App.rec.hasStream() ? "已连接" : "还没测试") : "当前打开方式用不了麦克风"}</span></div>
          <div><span class="dot ${!SR || App.rec.recogBroken() ? "no" : "unk"}"></span><span>语音识别：${!SR ? "浏览器不支持" : App.rec.recogBroken() ? "上次出错（" + esc(App.rec.recogBroken()) + "）" : "浏览器支持，测一下才知道能否连上"}</span></div>
          <div><span class="dot ${voices ? "ok" : "no"}"></span><span>朗读声音：${voices ? voices + " 个英文声音" : "没有找到英文声音"}</span></div>
        </div>
        <div class="row" style="margin-top:10px"><button class="btn alt" id="micTest">录 4 秒试试</button></div>
        <div class="level" style="margin-top:10px"><i></i></div>
        <div id="micOut" class="note" style="margin-top:8px"></div>
      </section>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:8px">
        <p class="section-label" style="margin:0">练习选项</p>
        <label class="check"><input type="checkbox" id="optText" ${data.settings.showText ? "checked" : ""}> 面试题显示文字（真实考试只有声音）</label>
        <label class="check"><input type="checkbox" id="optLive" ${data.settings.showLive ? "checked" : ""}> 作答时显示实时识别文字</label>
      </section>
      <div class="tip"><b>45 秒回答结构</b><br>直接回答（约 5 秒）→ 理由和细节（约 15 秒）→ 具体例子（约 15 秒）→ 一句收尾（约 5 秒）。</div>
    </aside>
    <section class="desk">
      <div class="tasks">
        <article class="task">
          <div class="en">Task 1 · Listen and Repeat</div>
          <h3>听后复述</h3>
          <div class="spec"><span>7 句</span><span>每句只播放一次</span><span>8–12 秒作答</span></div>
          <p class="note" style="margin:0">听一句话，提示音后原样复述。句子从短到长，考的是听辨和短时记忆，复述得越完整越好。</p>
          <div class="setlist">${REPEAT.map(s => `<button class="setrow" data-start="repeat" data-set="${s.id}"><b>${esc(s.name)}</b><span class="note">${esc(s.en)}</span><small>${bestOf("repeat", s.id)}</small></button>`).join("")}</div>
        </article>
        <article class="task">
          <div class="en">Task 2 · Take an Interview</div>
          <h3>模拟面试</h3>
          <div class="spec"><span>4 题</span><span>无准备时间</span><span>每题 45 秒</span></div>
          <p class="note" style="margin:0">一位研究者就某个话题采访你。问题从个人经历逐步过渡到观点和社会议题，要即时组织语言。</p>
          <div class="setlist">${INTERVIEW.map(s => `<button class="setrow" data-start="interview" data-set="${s.id}"><b>${esc(s.name)}</b><span class="note">${esc(s.en)}</span><small>${bestOf("interview", s.id)}</small></button>`).join("")}</div>
        </article>
      </div>
      <p class="section-label">最近练习</p>
      ${hist.length ? `<div class="tablewrap history"><table><thead><tr><th>时间</th><th>题型</th><th>题目</th><th>结果</th></tr></thead><tbody>${hist.map(h => `<tr><td>${new Date(h.t).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}</td><td>${h.task==="repeat" ? "听后复述" : "模拟面试"}</td><td>${esc(h.name)}</td><td>${esc(h.summary)}</td></tr>`).join("")}</tbody></table></div>`
      : `<p class="note">还没有练习记录。先在左边测一下麦克风，然后选一套题开始。</p>`}
    </section>
  </div>`);
}

async function micTest(btn){
  const out = $("#micOut");
  btn.disabled = true;
  try{ await ensureMic() }catch(e){ out.textContent = MIC_ERR[e.name] || ("打开麦克风失败：" + (e.message||e.name)); btn.disabled = false; return }
  out.textContent = "正在录音，说一句英文，比如 “I am preparing for the TOEFL test.”";
  const r = await record(4, { onTick:el => { btn.textContent = `录音中 ${Math.ceil(4-el)} 秒` }, onText:t => { out.textContent = "识别中：" + t } });
  btn.textContent = "再录一次"; btn.disabled = false;
  out.innerHTML = (r.url ? `<audio controls src="${r.url}"></audio>` : "没有录到声音。") +
    `<div style="margin-top:6px">${r.transcript ? "识别结果：" + esc(r.transcript) : (RECOG_ERR[r.recogError] || "没有识别到文字。说话声音大一点再试，或检查网络。")}</div>`;
  renderStatusOnly();
}
function renderStatusOnly(){ /* 轻量刷新：只更新状态点，保留测试结果 */
  const dots = document.querySelectorAll("#view-speaking .status-list .dot");
  const rb = App.rec.recogBroken(), on = App.rec.hasStream();
  if(dots[0]){ dots[0].className = "dot " + (on ? "ok" : "unk"); dots[0].nextElementSibling.textContent = "麦克风：" + (on ? "已连接" : "还没测试") }
  if(dots[1]){ dots[1].className = "dot " + (!SR || rb ? "no" : "ok"); dots[1].nextElementSibling.textContent = "语音识别：" + (!SR ? "浏览器不支持" : rb ? "出错（" + rb + "）" : "可用") }
}

/* ---------- 练习开始前 ---------- */
function renderIntro(task, id){
  const set = (task==="repeat" ? REPEAT : INTERVIEW).find(s => s.id===id);
  S = { task, set, idx:-1, results:[] };
  const rules = task==="repeat"
    ? "你会听到 7 句话，每句只播放一次。听到提示音后马上开始复述，时间到会自动进入下一句。尽量一字不差地复述，包括冠词和介词。"
    : `采访者会问你 4 个问题，每题读完响提示音后直接作答，没有准备时间，每题 ${INTERVIEW_SECONDS} 秒。说完可以提前结束本题。`;
  view(`<div class="stage">
    <div class="meta"><span class="chip learn">${task==="repeat" ? "听后复述" : "模拟面试"}</span><span>${esc(set.en)}</span><button class="btn alt" data-home style="margin-left:auto">返回</button></div>
    <div class="phase">
      <div class="page-title">${esc(set.name)}</div>
      <p class="question" style="font-size:19px">${esc(set.intro)}</p>
      <p class="note" style="max-width:52ch;margin:0">${rules}</p>
      <div class="level"><i></i></div>
      <div class="note">戴上耳机效果更好，可以避免题目声音被录进去。</div>
      <div class="row" style="justify-content:center"><button class="btn" id="go">开始</button></div>
      <div class="note" id="introErr"></div>
    </div>
  </div>`);
  ensureMic().catch(() => {});
}

async function begin(){
  try{ await ensureMic() }catch(e){ $("#introErr").textContent = MIC_ERR[e.name] || ("打开麦克风失败：" + (e.message||e.name)); return }
  App.audioCtx();
  const tok = ++token;
  if(S.task==="repeat") runRepeat(tok); else runInterview(tok);
}

/* ---------- 听后复述 ---------- */
function stageHead(){
  const n = S.task==="repeat" ? S.set.items.length : S.set.items.length;
  return `<div class="meta"><span class="chip learn">${S.task==="repeat" ? "听后复述" : "模拟面试"}</span><span>${esc(S.set.name)}</span><span class="left">${Math.max(0,S.idx)+1} / ${n}</span><button class="btn alt" data-quit style="margin-left:8px">退出</button></div>
    <div class="steps">${S.set.items.map((_,i) => `<i class="${i<S.idx ? "on" : i===S.idx ? "cur" : ""}"></i>`).join("")}</div>`;
}
function phaseListen(label){
  view(`<div class="stage">${stageHead()}<div class="phase"><div class="avatar">${S.task==="repeat" ? "♪" : "Q"}</div><div class="label">${label}</div></div></div>`);
}
function phaseRecord(max, extra){
  view(`<div class="stage">${stageHead()}<div class="phase rec">
    ${extra||""}
    <div class="label"><span class="recdot"></span>正在录音</div>
    <div class="big" id="cd">${max}</div>
    <div class="timebar"><i id="tb"></i></div>
    <div class="level"><i></i></div>
    <div class="live" id="live"></div>
    <button class="btn alt" data-stop>${S.task==="repeat" ? "说完了" : "提前结束本题"}</button>
  </div></div>`);
  return {
    onTick(el){ const cd = $("#cd"), tb = $("#tb"); if(cd) cd.textContent = Math.max(0, Math.ceil(max-el)); if(tb) tb.style.width = Math.min(100, el/max*100) + "%" },
    onText(t){ const l = $("#live"); if(l && data.settings.showLive) l.textContent = t }
  };
}
async function runRepeat(tok){
  for(let i=0;i<S.set.items.length;i++){
    if(tok!==token) return;
    S.idx = i;
    const sentence = S.set.items[i];
    phaseListen("请仔细听，只播放一次");
    await sleep(500); if(tok!==token) return;
    await App.speak(sentence); if(tok!==token) return;
    await sleep(250); await App.beep(); if(tok!==token) return;
    const max = repeatSeconds(sentence);
    const r = await record(max, phaseRecord(max));
    if(tok!==token) return;
    const sc = scoreRepeat(sentence, r.transcript);
    S.results.push(Object.assign(r, { target:sentence, pct: r.transcript ? sc.pct : null, html: sc.html }));
    await sleep(600);
  }
  if(tok!==token) return;
  finishSession();
}

/* ---------- 模拟面试 ---------- */
async function runInterview(tok){
  S.idx = 0;
  view(`<div class="stage">${stageHead()}<div class="phase"><div class="interviewer"><div class="avatar">R</div><div><b>Researcher</b><div class="note">${esc(S.set.en)}</div></div></div>
    <p class="question" style="font-size:19px">${esc(S.set.intro)}</p></div></div>`);
  await App.speak(S.set.intro); if(tok!==token) return;
  await sleep(500);
  for(let i=0;i<S.set.items.length;i++){
    if(tok!==token) return;
    S.idx = i;
    const item = S.set.items[i];
    const qText = `<div class="interviewer"><div class="avatar">R</div><div><b>Question ${i+1}</b><div class="note">${data.settings.showText ? "" : "题目只有声音，认真听"}</div></div></div>`
      + (data.settings.showText ? `<p class="question">${esc(item.q)}</p>` : "");
    view(`<div class="stage">${stageHead()}<div class="phase">${qText}<div class="label">采访者正在提问…</div></div></div>`);
    await App.speak(item.q); if(tok!==token) return;
    await sleep(250); await App.beep(); if(tok!==token) return;
    const r = await record(INTERVIEW_SECONDS, phaseRecord(INTERVIEW_SECONDS, data.settings.showText ? `<p class="question" style="font-size:19px">${esc(item.q)}</p>` : ""));
    if(tok!==token) return;
    S.results.push(Object.assign(r, { q:item.q, hint:item.hint }));
    await sleep(600);
  }
  if(tok!==token) return;
  finishSession();
}

/* ---------- 结果 ---------- */
function interviewMetrics(r){
  const words = tokens(r.transcript).length;
  const mins = Math.max(r.duration, 1) / 60;
  const fillers = (r.transcript.match(FILLER) || []).length;
  return { words, wpm: Math.round(words / mins), fillers };
}
function finishSession(){
  const set = S.set;
  let summary, score = null;
  if(S.task==="repeat"){
    const scored = S.results.filter(r => r.pct!=null);
    score = scored.length ? Math.round(scored.reduce((a,r) => a+r.pct, 0) / scored.length) : null;
    summary = score==null ? "未识别，自评" : `平均 ${score}%`;
  }else{
    const ms = S.results.map(interviewMetrics);
    const avgW = Math.round(ms.reduce((a,m) => a+m.words, 0) / ms.length);
    summary = `平均 ${avgW} 词/题`;
  }
  S.entry = { t:Date.now(), task:S.task, set:set.id, name:set.name, score, summary };
  data.history.push(S.entry);
  if(data.history.length>200) data.history = data.history.slice(-200);
  save();
  renderReview();
}
function renderReview(){
  const isRepeat = S.task==="repeat";
  const recogErr = S.results.map(r => r.recogError).find(Boolean);
  let body = "";
  if(isRepeat){
    const scored = S.results.filter(r => r.pct!=null);
    const avg = scored.length ? Math.round(scored.reduce((a,r) => a+r.pct, 0)/scored.length) : null;
    body = `<div class="row" style="align-items:baseline;gap:14px">
        <div class="score">${avg==null ? "—" : avg}<span style="font-size:24px;color:var(--muted)">${avg==null ? "" : "%"}</span></div>
        <div class="note">${avg==null ? "没有拿到识别文字，请听自己的录音，对照原句给每一句自评。" : `7 句平均复述完整度。红色波浪线是没有识别到的词，可能是漏说，也可能是发音不够清楚。`}</div>
      </div>
      ${S.results.map((r,i) => {
        const lv = r.pct!=null ? levelOf(r.pct) : null;
        return `<div class="ritem">
          <div class="meta"><span>第 ${i+1} 句 · ${repeatSeconds(r.target)} 秒</span>${lv ? `<span class="chip ${lv[0]}">${lv[1]} ${r.pct}%</span>` : ""}</div>
          <div class="diff">${r.pct!=null ? r.html : esc(r.target)}</div>
          ${r.transcript ? `<div class="said">识别到：${esc(r.transcript)}</div>` : ""}
          <div class="row">${r.url ? `<audio controls src="${r.url}"></audio>` : '<span class="note">没有录到声音</span>'}<button class="btn alt" data-say="${esc(r.target)}">再听原句</button></div>
          ${r.pct==null ? `<div class="selfcheck">${[["done","完整复述"],["learn","基本复述"],["bad","没跟上"]].map(([k,t]) => `<label><input type="radio" name="self${i}" value="${k}" ${r.self===k ? "checked" : ""} data-self="${i}"> ${t}</label>`).join("")}</div>` : ""}
        </div>`}).join("")}`;
  }else{
    body = `${S.results.map((r,i) => {
        const m = interviewMetrics(r);
        return `<div class="ritem">
          <div class="meta"><span>Question ${i+1}</span><button class="btn alt" data-say="${esc(r.q)}" style="margin-left:auto">再听题目</button></div>
          <div class="q">${esc(r.q)}</div>
          <div class="row">${r.url ? `<audio controls src="${r.url}"></audio>` : '<span class="note">没有录到声音</span>'}</div>
          <div class="metrics" id="m${i}"><span>作答 <b>${Math.round(r.duration)}</b> 秒</span><span>词数 <b>${m.words}</b></span><span>语速 <b>${m.wpm}</b> 词/分</span><span>填充词 <b>${m.fillers}</b></span></div>
          <label class="field">你的回答（识别文字，可以修改识别错的地方）<textarea class="transcript" data-tr="${i}" placeholder="没有识别到文字。可以听录音后把自己说的内容打在这里，用于 AI 点评。">${esc(r.transcript)}</textarea></label>
          <div class="selfcheck">${["直接回答了问题","给出了理由","有具体例子","有收尾句"].map(t => `<label><input type="checkbox"> ${t}</label>`).join("")}</div>
          <details><summary class="note" style="cursor:pointer">参考思路</summary><div class="tip" style="margin-top:6px">${esc(r.hint)}</div></details>
        </div>`}).join("")}
      <div class="ritem">
        <b>AI 估分与修改建议</b>
        ${App.hasAI() ? `<p class="note" style="margin:0">把上面 4 段回答发给 Claude，按托福 1–6 分制粗略估分，逐题点评，并给出示范回答。只根据文字评价，不评价发音。</p>
          <div class="row"><button class="btn" id="aiGrade">生成点评</button></div><div class="ai-out" id="aiOut" hidden></div>`
        : `<p class="note" style="margin:0">在 <a href="#settings">设置</a> 里填写 Claude API Key 后，这里可以生成估分、逐题点评和示范回答。参考范围：一段 45 秒的回答通常有 90–120 词，语速约 120–150 词/分比较自然。</p>`}
      </div>`;
  }
  view(`<div class="stage">
    <div class="meta"><span class="chip done">练习完成</span><span>${esc(S.set.name)}</span><span class="left">${isRepeat ? "听后复述" : "模拟面试"}</span></div>
    ${recogErr ? `<div class="fb no">${RECOG_ERR[recogErr] || "语音识别出错：" + esc(recogErr)}</div>` : ""}
    <div class="review">${body}</div>
    <div class="row"><button class="btn" data-again>再练一次这套</button><button class="btn alt" data-home>换一套题</button></div>
  </div>`);
}
function updateMetrics(i){
  const r = S.results[i], m = interviewMetrics(r), el = $("#m"+i);
  if(el) el.innerHTML = `<span>作答 <b>${Math.round(r.duration)}</b> 秒</span><span>词数 <b>${m.words}</b></span><span>语速 <b>${m.wpm}</b> 词/分</span><span>填充词 <b>${m.fillers}</b></span>`;
}
async function aiGrade(btn){
  const out = $("#aiOut"); out.hidden = false; btn.disabled = true; out.textContent = "正在生成点评，大约需要半分钟…";
  const qa = S.results.map((r,i) => { const m = interviewMetrics(r); return `Q${i+1}: ${r.q}\nA${i+1}（作答 ${Math.round(r.duration)} 秒，${m.words} 词）: ${r.transcript || "（没有内容）"}` }).join("\n\n");
  const prompt = `你是一位经验丰富的托福口语老师。下面是一名中国学生在 2026 新版托福口语「Take an Interview」任务中的回答。话题：${S.set.en}。每题无准备时间，作答 45 秒。
回答是语音识别转写的文字，可能有识别错误；明显是识别造成的错误请忽略，不要因此扣分。

请用中文输出，纯文本，不要使用 Markdown 符号（不要 #、*、**）：
【整体估分】按新版托福 1–6 分制给一个粗略估分（可以是 .5），一句话说明依据，并提醒这是只根据文字的估计，没有评价发音和语调。
【逐题点评】每题分别写：切题程度；展开是否充分（理由、例子）；1–2 个具体的语法或用词问题，写出原句和改正后的句子。
【示范回答】每题给一个改进版英文回答，90–110 词，适合 45 秒说完，尽量保留学生原来的观点和例子。
【下一步练习建议】两三条具体可做的建议。

${qa}`;
  try{ out.textContent = await App.askClaude(prompt, { maxTokens:12000, effort:"medium" }) }
  catch(e){ out.textContent = e.message || "生成失败，可以再试一次。" }
  btn.disabled = false;
}

/* ---------- 事件 ---------- */
function onClick(e){
  const t = e.target.closest("button,input[data-self]"); if(!t) return;
  if(t.id==="micTest"){ micTest(t); return }
  if(t.dataset.start){ renderIntro(t.dataset.start, t.dataset.set); return }
  if(t.id==="go"){ t.disabled = true; begin(); return }
  if(t.dataset.stop!==undefined){ App.rec.stop(); return }
  if(t.dataset.quit!==undefined){ abortSession(); renderHome(); return }
  if(t.dataset.home!==undefined){ abortSession(); renderHome(); return }
  if(t.dataset.again!==undefined){ const { task, set } = S; abortSession(); renderIntro(task, set.id); return }
  if(t.dataset.say){ App.speak(t.dataset.say); return }
  if(t.id==="aiGrade"){ aiGrade(t); return }
  if(t.dataset.self!==undefined){
    const r = S.results[+t.dataset.self]; r.self = t.value;
    const vals = S.results.map(x => x.pct!=null ? x.pct : x.self==="done" ? 100 : x.self==="learn" ? 70 : x.self==="bad" ? 20 : null).filter(v => v!=null);
    if(S.entry && vals.length===S.results.length){ S.entry.score = Math.round(vals.reduce((a,b) => a+b, 0)/vals.length); S.entry.summary = `自评 ${S.entry.score}%`; save() }
  }
}
function onInput(e){
  const t = e.target;
  if(t.dataset && t.dataset.tr!==undefined && S){ S.results[+t.dataset.tr].transcript = t.value; updateMetrics(+t.dataset.tr) }
  if(t.id==="optText"){ data.settings.showText = t.checked; save() }
  if(t.id==="optLive"){ data.settings.showLive = t.checked; save() }
}
function onKey(e){
  if(App.route!=="speaking" || !App.rec.busy()) return;
  if(e.code==="Space" && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName||"")){ e.preventDefault(); App.rec.stop() }
}

App.routes.speaking = {
  exams:["toefl"],
  init(){
    const root = $("#view-speaking");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
    document.addEventListener("keydown", onKey);
    document.addEventListener("voices-ready", () => { if(App.route==="speaking" && !S) renderHome() });
  },
  enter(){ if(!S) renderHome() },
  leave(){ if(S && !S.entry){ abortSession() } }
};
})();
