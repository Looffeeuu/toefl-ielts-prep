/* 词汇模块：间隔重复背词、测验、词库 */
(function(){
const { $, $$, esc, shuffle, today, keyOf, DAY } = App;

/* ---------- 词表 ---------- */
// 分组 → 词表 → 单词。核心精编按话题；扩展词库按词频分层，每 200 词一组
const WORDS = [], BY = {}, TOPIC = {}, GROUPS = [];
const splitSyn = s => s ? s.split(",").map(x => x.trim()).filter(Boolean) : [];
const PHON = window.CORE_PHON || {};
const core = { id:"core", name:"核心精编", note:"按话题分组，每个词都有例句和同义替换", lists:[] };
window.TOPICS.forEach(t => {
  const L = { id:t.id, name:t.name, en:t.en, words:[], group:"core" };
  t.raw.trim().split(/\r?\n/).forEach(line => {
    const [w,pos,cn,syn,ex] = line.split("|").map(s => (s||"").trim());
    if(!w || BY[w]) return;
    const o = { w, ph:PHON[w]||"", pos, cn, syn:splitSyn(syn), ex, t:L.id, g:"core", basic:"" };
    WORDS.push(o); BY[w] = o; L.words.push(o);
  });
  core.lists.push(L); TOPIC[L.id] = L;
});
GROUPS.push(core);

const RICH = {};
[window.RICH_WORDS, window.RICH_WORDS_2, window.RICH_WORDS_3].join("\n").trim().split(/\r?\n/).forEach(line => {
  const [w,pos,cn,syn,ex] = line.split("|").map(s => (s||"").trim());
  if(w) RICH[w.toLowerCase()] = { pos, cn, syn:splitSyn(syn), ex };
});
const TIERS = [["f1","高频","词频前 5000"],["f2","次高频","词频 5000–10000"],["f3","中频","词频 10000–20000"],["f4","低频","词频 20000 以后"]];
const CHUNK = 200, tierWords = { f1:[], f2:[], f3:[], f4:[] };
(window.EXT_WORDS || "").split("\n").forEach(line => {
  let [w,ph,pos,cn,tier,flag] = line.split("\t");
  if(!w || !tierWords[tier]) return;
  const r = RICH[w.toLowerCase()];
  if(r) w = w.toLowerCase();
  if(BY[w]) return;
  const o = r ? { w, ph, pos:r.pos, cn:r.cn, syn:r.syn, ex:r.ex, rich:true } : { w, ph, pos, cn, syn:[], ex:"" };
  o.basic = flag || ""; o.g = tier;
  BY[w] = o; tierWords[tier].push(o);
});
TIERS.forEach(([id,name,note]) => {
  const ws = tierWords[id], g = { id, name, note:`${note}，共 ${ws.length} 词`, lists:[] };
  for(let i=0;i<ws.length;i+=CHUNK){
    const k = i/CHUNK + 1;
    const L = { id:`${id}-${k}`, name:`${name} ${k}`, en:`第 ${i+1}–${Math.min(i+CHUNK, ws.length)} 词`, words:ws.slice(i, i+CHUNK), group:id };
    L.words.forEach(o => { o.t = L.id; WORDS.push(o) });
    g.lists.push(L); TOPIC[L.id] = L;
  }
  GROUPS.push(g);
});
const GROUP = {}; GROUPS.forEach(g => GROUP[g.id] = g);
const TOPICS = GROUPS.flatMap(g => g.lists);
App.WORDS = WORDS;

const fam = p => (p||"").split(/[./]/)[0];
function hlRe(w){ const stem = (w.length>5 || /[a-z]y$/.test(w)) ? w.slice(0,-1) : w; return new RegExp("\\b(" + stem.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + "\\w*)","i") }
const exHTML = o => o.ex ? esc(o.ex).replace(hlRe(o.w), "<mark>$1</mark>") : "";
const exBlank = o => o.ex ? esc(o.ex).replace(hlRe(o.w), '<span class="blank">' + o.w[0] + " _ _ _</span>") : "";
const phHTML = o => o.ph ? `<span class="ph">/${esc(o.ph)}/</span>` : "";
const BASIC = { z:"中考词", g:"高考词" };
// 词表下拉选项：全部 / 整个分组 / 单个词表
function listOptions(extraTop){
  return extraTop + GROUPS.map(g => `<optgroup label="${g.name}">
    <option value="g:${g.id}">${g.name} · 全部（${g.lists.reduce((a,l) => a+l.words.length, 0)} 词）</option>
    ${g.lists.map(l => `<option value="${l.id}">${esc(l.name)}（${l.words.length} 词）</option>`).join("")}</optgroup>`).join("");
}
function wordsOf(sel){
  if(sel==="all") return WORDS;
  if(sel && sel.startsWith("g:")) return (GROUP[sel.slice(2)] || core).lists.flatMap(l => l.words);
  return (TOPIC[sel] || { words:WORDS }).words;
}
const SPEAK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
App.SPEAK_SVG = SPEAK_SVG;
const speakBtn = w => App.canSpeak ? `<button class="speak" data-speak="${esc(w)}" title="发音 (P)" aria-label="朗读 ${esc(w)}">${SPEAK_SVG}</button>` : "";
function ivLabel(i){ if(i<=0) return "1 分钟内"; if(i<30) return i+" 天"; if(i<365) return Math.round(i/30)+" 个月"; return (i/365).toFixed(1)+" 年" }

/* ---------- 进度 ---------- */
const blank = () => ({ v:1, cards:{}, log:{}, settings:{ daily:20, list:"all", auto:false, skipBasic:"z" }, updatedAt:0 });
function normalize(d){ const b = blank(); d = d||{}; return { v:1, cards:d.cards||{}, log:d.log||{}, settings:Object.assign(b.settings, d.settings||{}), updatedAt:d.updatedAt||0 } }
let store = normalize(App.store.get(App.KEYS.vocab, null));
App.vocabData = () => store;
App.loadVocabData = d => { store = normalize(d); persist(); buildQueue(); renderAll() };
function persist(){ store.updatedAt = Date.now(); App.store.set(App.KEYS.vocab, store) }
function ensureLog(){ const k = keyOf(today()); return store.log[k] || (store.log[k] = { n:0, r:0 }) }
const todayLog = () => store.log[keyOf(today())] || { n:0, r:0 };
function status(w){ const c = store.cards[w]; if(!c) return ["new","新词"]; if(c[1]>=21) return ["done","已掌握"]; return ["learn","学习中"] }

/* ---------- 间隔重复 ---------- */
// card = [复习次数, 间隔天数, 难度系数%, 到期日, 遗忘次数]
function schedule(c, g){
  let [r,i,e,d,l] = c ? c.slice() : [0,0,250,0,0];
  const T = today();
  if(g===0){ if(r>0) l++; r=0; i=0; e=Math.max(130,e-20); d=T }
  else if(g===1){ i = r===0 ? 1 : Math.max(i+1, Math.round(i*1.2)); e=Math.max(130,e-15); r++; d=T+i }
  else if(g===2){ i = r===0 ? 1 : r===1 ? 3 : Math.max(i+1, Math.round(i*e/100)); r++; d=T+i }
  else { i = r===0 ? 4 : Math.max(i+2, Math.round(i*e/100*1.3)); e+=15; r++; d=T+i }
  return [r,i,e,d,l];
}

let queue = [], revealed = false, interacted = false, lastSpoken = "";
// 新词来源：按设置的词表，并按需跳过中考、高考词
function srcWords(){
  const sb = store.settings.skipBasic;
  return wordsOf(store.settings.list).filter(o => !(sb==="z" && o.basic==="z") && !(sb==="zg" && o.basic));
}
function buildQueue(){
  const T = today();
  const due = Object.entries(store.cards).filter(([w,c]) => BY[w] && c[3]<=T).sort((a,b) => a[1][3]-b[1][3]).map(([w]) => w);
  const left = Math.max(0, store.settings.daily - todayLog().n);
  const fresh = [];
  for(const o of srcWords()){ if(fresh.length>=left) break; if(!store.cards[o.w]) fresh.push(o.w) }
  queue = []; let i=0, j=0;
  while(i<due.length || j<fresh.length){ for(let k=0;k<2&&i<due.length;k++) queue.push(due[i++]); if(j<fresh.length) queue.push(fresh[j++]) }
  revealed = false;
}
function rate(g){
  const w = queue[0]; if(!w) return;
  const was = store.cards[w];
  store.cards[w] = schedule(was, g);
  const L = ensureLog(); if(!was) L.n++; L.r++;
  queue.shift();
  if(g===0) queue.splice(Math.min(3, queue.length), 0, w);
  revealed = false; persist(); renderStats(); renderStudy();
}
function addMore(n){
  const have = new Set(queue);
  queue.push(...srcWords().filter(o => !store.cards[o.w] && !have.has(o.w)).slice(0,n).map(o => o.w));
  renderStudy();
}

/* ---------- AI 讲解 ---------- */
const aiBlock = o => App.hasAI() ? `<button class="ai-btn" data-ai="${esc(o.w)}">AI 讲解 · 词根、记忆法、搭配、例句</button><div class="ai-out" hidden></div>` : "";
const aiCache = {};
async function explain(btn){
  const o = BY[btn.dataset.ai], out = btn.nextElementSibling; if(!o) return;
  out.hidden = false;
  if(aiCache[o.w]){ out.textContent = aiCache[o.w]; return }
  btn.disabled = true; out.textContent = "正在生成讲解…";
  const prompt = `你是一位托福（TOEFL iBT）词汇老师。请为下面这个单词写一份简洁的中文讲解，帮助中国学生记住它，并在托福阅读中认出它。

单词：${o.w}
词性：${o.pos}
释义：${o.cn}

按下面五个小标题输出，纯文本，不要使用任何 Markdown 符号（不要 #、*、**、-）：
【词根词缀】拆解构词并说明各部分含义；没有明显词根时，给出词源或联想
【记忆方法】一句好记的联想
【常见搭配】3 个学术写作常用搭配，每个附中文
【托福例句】2 个学术语境的英文例句，每句下一行附中文翻译
【同义替换】托福阅读里常见的 3 到 5 个同义词或短语
总长度控制在 280 个汉字左右。`;
  try{ const text = await App.askClaude(prompt, { maxTokens:4000, effort:"low" }); aiCache[o.w] = text; out.textContent = text }
  catch(e){ out.textContent = e.message || "生成失败，可以再点一次试试。" }
  btn.disabled = false;
}

/* ---------- 左栏 ---------- */
function renderStats(){
  const T = today(), cards = Object.entries(store.cards).filter(([w]) => BY[w]);
  const due = cards.filter(([,c]) => c[3]<=T).length;
  const mast = cards.filter(([,c]) => c[1]>=21).length;
  const L = todayLog();
  $("#sDue").textContent = due;
  $("#sNew").innerHTML = `${L.n}<small> / ${store.settings.daily}</small>`;
  $("#sMast").innerHTML = `${mast}<small> 词</small>`;
  let s = 0, d = T; if(!(store.log[keyOf(d)]||{}).r) d--;
  while((store.log[keyOf(d)]||{}).r){ s++; d-- }
  $("#sStreak").innerHTML = `${s}<small> 天</small>`;
  $("#sTotal").textContent = `已学 ${cards.length} / ${WORDS.length}`;
  const bar = $("#totalBar"); bar.children[0].style.width = (mast/WORDS.length*100)+"%"; bar.children[1].style.width = ((cards.length-mast)/WORDS.length*100)+"%";
  $("#tabQ").textContent = queue.length ? queue.length : "";
  $("#dateLine").textContent = new Date().toLocaleDateString("zh-CN", { year:"numeric", month:"long", day:"numeric", weekday:"long" });
  renderHeat();
}
function renderHeat(){
  const T = today(), dow = (new Date().getDay()+6)%7, start = T-dow-7*11;
  let h = "";
  for(let n=start; n<=T+(6-dow); n++){
    if(n>T){ h += '<i class="future"></i>'; continue }
    const L = store.log[keyOf(n)], r = L ? L.r : 0;
    const lv = r===0 ? 0 : r<20 ? 1 : r<50 ? 2 : r<100 ? 3 : 4;
    h += `<i data-l="${lv}" title="${keyOf(n)}：复习 ${r} 次${L&&L.n ? "，新词 "+L.n+" 个" : ""}"></i>`;
  }
  $("#heat").innerHTML = h;
}

/* ---------- 背单词 ---------- */
// 卡片背面：释义、同义替换、例句；扩展词库的词只有释义时给出提示
function backHTML(o){
  const extra = !o.ex && !o.syn.length
    ? (App.hasAI() ? "" : `<p class="note" style="margin:0">扩展词库的词条只有释义。在<a href="#settings">设置</a>里填写 API Key 后，可以用 AI 讲解生成例句和搭配。</p>`)
    : "";
  return `<div class="cn">${esc(o.cn)}</div>
    ${o.syn.length ? `<div class="syn"><span class="lab">同义替换</span>${o.syn.map(s => `<span class="s">${esc(s)}</span>`).join("")}</div>` : ""}
    ${o.ex ? `<p class="ex">${exHTML(o)}</p>` : ""}
    ${extra}${aiBlock(o)}`;
}
function renderStudy(){
  const box = $("#pane-study");
  $("#tabQ").textContent = queue.length ? queue.length : "";
  if(!queue.length){
    const L = todayLog(), left = srcWords().filter(o => !store.cards[o.w]).length;
    box.innerHTML = `<div class="card done">
      <p class="section-label">今日任务</p>
      <h3>${L.r ? "今天的复习和新词都完成了" : "现在没有要复习的单词"}</h3>
      <p class="note" style="margin:0">今天共复习 ${L.r} 次，新学 ${L.n} 个词。${left ? `当前词表还剩 ${left} 个新词。` : "当前词表的新词已经全部学过。"}</p>
      <div class="row">${left ? '<button class="btn" data-more="10">再学 10 个新词</button>' : ""}<button class="btn alt" data-goto="quiz">去做个测验</button></div>
    </div>`;
    return;
  }
  const o = BY[queue[0]], c = store.cards[o.w];
  const kind = !c ? ["new","新词"] : c[0]===0 ? ["learn","重学"] : ["learn","复习"];
  const prev = [0,1,2,3].map(g => g===0 ? "1 分钟内" : ivLabel(schedule(c,g)[1]));
  box.innerHTML = `<div class="card">
    <div class="meta"><span class="chip ${kind[0]}">${kind[1]}</span><span>${esc(TOPIC[o.t].name)}</span>${o.basic ? `<span class="chip">${BASIC[o.basic]}</span>` : ""}<span class="left">剩余 ${queue.length}</span></div>
    <div class="head"><span class="headword">${esc(o.w)}</span><span class="pos">${esc(o.pos)}</span>${speakBtn(o.w)}</div>
    ${phHTML(o)}
    ${revealed ? `<div class="back">${backHTML(o)}</div>` : ""}
    <div class="actions">
      ${revealed ? `<div class="rates">${["不认识","模糊","认识","太简单"].map((t,g) => `<button class="rate" data-g="${g}"><b>${t}<kbd>${g+1}</kbd></b><span>${prev[g]}后再见</span></button>`).join("")}</div>`
      : `<button class="reveal" id="revealBtn">先回想意思，再看答案<kbd>空格</kbd></button>`}
      <div class="hint">${revealed ? "按 1–4 打分，按 P 发音" : "想不起来也没关系，翻开后选「不认识」，它会很快再出现"}</div>
    </div>
  </div>`;
  if(store.settings.auto && interacted && !revealed && lastSpoken!==o.w){ lastSpoken = o.w; App.speak(o.w) }
}

/* ---------- 测验 ---------- */
let quizMode = "cn", quiz = null;
const MODES = { cn:["看词选义","英文单词，选正确的中文释义"], syn:["同义替换","托福阅读词汇题：closest in meaning to"], spell:["听写拼写","看中文和例句，拼出单词"] };
function pool(scope){ if(scope==="seen") return WORDS.filter(o => store.cards[o.w]); return wordsOf(scope) }
function makeQ(o, mode){
  if(mode==="spell") return { o };
  // 干扰项优先从同一分组里选，难度更接近
  const same = WORDS.filter(x => x.g===o.g);
  const others = shuffle((same.length>40 ? same : WORDS).filter(x => x!==o && (mode!=="syn" || x.syn.length)));
  if(mode==="syn" && others.length<12) others.push(...shuffle(WORDS.filter(x => x!==o && x.syn.length)));
  others.sort((a,b) => (fam(b.pos)===fam(o.pos)) - (fam(a.pos)===fam(o.pos)));
  let correct, opts;
  if(mode==="cn"){ correct = o.cn; opts = [correct]; for(const x of others){ if(opts.length>=4) break; if(!opts.includes(x.cn)) opts.push(x.cn) } }
  else{
    correct = o.syn[0]; opts = [correct];
    for(const x of others){
      if(opts.length>=4) break;
      const s = x.syn[0];
      if(opts.includes(s) || o.syn.includes(s) || s===o.w || o.syn.includes(x.w) || x.syn.includes(o.w) || x.syn.some(z => o.syn.includes(z))) continue;
      opts.push(s);
    }
  }
  return { o, opts:shuffle(opts), correct };
}
function renderQuizSetup(msg){
  const seen = Object.keys(store.cards).length;
  $("#pane-quiz").innerHTML = `<div class="qsetup">
    <div class="modes">${Object.entries(MODES).map(([k,[t,d]]) => `<button class="mode" data-mode="${k}" aria-pressed="${k===quizMode}"><b>${t}</b><span>${d}</span></button>`).join("")}</div>
    <label class="field" style="max-width:320px">出题范围
      <select id="qScope">
        ${listOptions(`<option value="seen" ${seen>=8 ? "selected" : ""}>我学过的词（${seen} 个）</option>
        <option value="all" ${seen<8 ? "selected" : ""}>全部词库（${WORDS.length} 个）</option>`)}
      </select>
    </label>
    <p class="note" style="margin:0">每次 10 题。答错的词会自动放回今天的复习队列。</p>
    ${msg ? `<div class="fb no">${msg}</div>` : ""}
    <div class="row"><button class="btn" id="qStart">开始测验</button></div>
  </div>`;
}
function startQuiz(){
  let p = pool($("#qScope").value);
  if(quizMode==="syn") p = p.filter(o => o.syn.length);
  if(p.length<4){ renderQuizSetup("这个范围里的单词还不够出题。先多学几个，或者把范围换成「全部词库」。"); return }
  quiz = { mode:quizMode, items:shuffle(p.slice()).slice(0,10).map(o => makeQ(o,quizMode)), idx:0, score:0, answered:false, wrong:[] };
  renderQuiz();
}
function penalize(w){
  const T = today(), c = store.cards[w];
  if(c){ c[1]=0; c[3]=T; c[2]=Math.max(130,c[2]-20); c[4]++ } else store.cards[w] = [0,0,250,T,0];
  if(!queue.includes(w)) queue.push(w);
  persist(); renderStats();
}
function answer(i){
  if(!quiz || quiz.answered) return;
  const q = quiz.items[quiz.idx]; let ok;
  if(quiz.mode==="spell"){ const v = ($("#spellIn").value||"").trim().toLowerCase(); if(!v) return; q.given = v; ok = v===q.o.w.toLowerCase() }
  else{ q.given = i; ok = q.opts[i]===q.correct }
  q.ok = ok; quiz.answered = true;
  if(ok) quiz.score++; else { quiz.wrong.push(q.o.w); penalize(q.o.w) }
  renderQuiz();
}
function nextQ(){ if(!quiz || !quiz.answered) return; quiz.idx++; quiz.answered = false; renderQuiz() }
function renderQuiz(){
  const box = $("#pane-quiz");
  if(quiz.idx>=quiz.items.length){
    box.innerHTML = `<div class="card done">
      <p class="section-label">${MODES[quiz.mode][0]} · 结果</p>
      <div class="score">${quiz.score}<span style="font-size:28px;color:var(--muted)"> / ${quiz.items.length}</span></div>
      ${quiz.wrong.length ? `<div class="syn"><span class="lab">已加入复习</span>${quiz.wrong.map(w => `<button class="chip" data-detail="${esc(w)}">${esc(w)}</button>`).join("")}</div>` : `<p class="note" style="margin:0">全部答对。</p>`}
      <div class="row"><button class="btn" id="qAgain">再来 10 题</button><button class="btn alt" id="qBack">换个题型</button>${quiz.wrong.length ? '<button class="btn alt" data-goto="study">去复习错词</button>' : ""}</div>
    </div>`;
    return;
  }
  const q = quiz.items[quiz.idx], o = q.o, A = "ABCD";
  let body = "";
  if(quiz.mode==="cn"){
    body = `<div class="head" style="padding-top:4px"><span class="headword" style="font-size:44px">${esc(o.w)}</span><span class="pos">${esc(o.pos)}</span>${speakBtn(o.w)}</div>
      <div class="qprompt">选择正确的中文释义</div>`;
  }else if(quiz.mode==="syn"){
    body = `<div class="passage">${exHTML(o)}</div>
      <div class="qprompt">The word <b>${esc(o.w)}</b> in the passage is closest in meaning to</div>`;
  }else{
    body = `<div class="cn">${esc(o.cn)} <span class="pos">${esc(o.pos)}</span></div>
      ${o.ex ? `<div class="passage">${exBlank(o)}</div>` : `<p class="note" style="margin:0">首字母：${esc(o.w[0])}，共 ${o.w.length} 个字母</p>`}
      <input class="spell-in" id="spellIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="输入单词，按回车提交" ${quiz.answered ? "disabled" : ""} value="${quiz.answered ? esc(q.given) : ""}">
      <div class="row">${App.canSpeak ? `<button class="btn alt" data-speak="${esc(o.w)}">听发音提示</button>` : ""}${quiz.answered ? "" : '<button class="btn" id="spellGo">提交</button>'}</div>`;
  }
  let opts = "";
  if(q.opts){
    opts = `<div class="opts">${q.opts.map((t,i) => {
      let cls = ""; if(quiz.answered){ if(t===q.correct) cls = " right"; else if(i===q.given) cls = " wrong" }
      return `<button class="opt${quiz.mode==="syn" ? " syn-o" : ""}${cls}" data-opt="${i}" ${quiz.answered ? "disabled" : ""}><span class="l">${A[i]}</span><span>${esc(t)}</span></button>` }).join("")}</div>`;
  }
  const fb = quiz.answered ? `<div class="fb ${q.ok ? "ok" : "no"}">${q.ok ? "正确。" : "答错了，正确答案：" + esc(quiz.mode==="cn" ? o.cn : quiz.mode==="syn" ? q.correct : o.w) + "。"} <b>${esc(o.w)}</b> ${esc(o.pos)} ${esc(o.cn)}${o.syn.length ? "｜"+esc(o.syn.join(", ")) : ""}</div>
    <div class="row"><button class="btn" id="qNext">${quiz.idx+1<quiz.items.length ? "下一题" : "查看结果"}<kbd>Enter</kbd></button></div>` : "";
  box.innerHTML = `<div class="card">
    <div class="meta"><span class="chip learn">${MODES[quiz.mode][0]}</span><span class="left">${quiz.idx+1} / ${quiz.items.length} · 答对 ${quiz.score}</span></div>
    ${body}${opts}${fb}
  </div>`;
  const si = $("#spellIn"); if(si && !quiz.answered) si.focus();
  const nb = $("#qNext"); if(nb && quiz.mode==="spell") nb.focus();
}

/* ---------- 词库 ---------- */
let bankGroup = "core", bankTopic = TOPICS[0].id, openWord = null;
const SEARCH_MAX = 300;
function renderBank(){
  const g = GROUP[bankGroup];
  $("#groups").innerHTML = GROUPS.map(x => `<button class="chip grp" data-group="${x.id}" aria-pressed="${x.id===bankGroup}">${x.name}</button>`).join("") + `<span class="note">${esc(g.note)}</span>`;
  $("#topics").innerHTML = g.lists.map(t => {
    let m = 0, l = 0; t.words.forEach(o => { const s = status(o.w)[0]; if(s==="done") m++; else if(s==="learn") l++ });
    return `<button class="topic" data-topic="${t.id}" aria-pressed="${t.id===bankTopic}">
      <b>${esc(t.name)}</b><small>${esc(t.en)} · ${m+l}/${t.words.length}</small>
      <div class="bar"><i class="m" style="width:${m/t.words.length*100}%"></i><i class="l" style="width:${l/t.words.length*100}%"></i></div></button>` }).join("");
  const q = $("#search").value.trim().toLowerCase();
  const all = q ? WORDS.filter(o => o.w.toLowerCase().includes(q) || o.cn.includes(q) || o.syn.some(s => s.toLowerCase().includes(q))) : TOPIC[bankTopic].words;
  // 搜索时完全匹配的词排最前
  if(q) all.sort((a,b) => (b.w.toLowerCase()===q) - (a.w.toLowerCase()===q) || (b.w.toLowerCase().startsWith(q)) - (a.w.toLowerCase().startsWith(q)));
  const list = all.slice(0, SEARCH_MAX);
  $("#wordRows").innerHTML = list.length ? list.map(o => { const [s,t] = status(o.w);
    return `<tr data-detail="${esc(o.w)}" tabindex="0"><td class="w">${esc(o.w)}${o.ph ? `<div class="ph">/${esc(o.ph)}/</div>` : ""}</td><td class="p">${esc(o.pos)}</td><td>${esc(o.cn)}</td><td>${esc(o.syn.join(", "))}</td><td><span class="chip ${s}">${t}</span></td></tr>` }).join("")
      + (all.length>SEARCH_MAX ? `<tr><td colspan="5" class="note">共找到 ${all.length} 个，只显示前 ${SEARCH_MAX} 个，输入更多字母可以缩小范围。</td></tr>` : "")
    : `<tr><td colspan="5" class="note">没有找到「${esc(q)}」。</td></tr>`;
}
function openDetail(w){
  const o = BY[w]; if(!o) return; openWord = w;
  const c = store.cards[w], [s,t] = status(w);
  const due = c ? (c[3]<=today() ? "今天复习" : `${ivLabel(c[3]-today())}后复习`) : "还没学过";
  $("#sheet").innerHTML = `<div class="meta"><span class="chip ${s}">${t}</span><span>${esc(TOPIC[o.t].name)}</span>${o.basic ? `<span class="chip">${BASIC[o.basic]}</span>` : ""}<span>${due}</span><button class="x" id="closeSheet" aria-label="关闭">×</button></div>
    <div class="head" style="padding-top:0"><span class="headword" style="font-size:44px">${esc(o.w)}</span><span class="pos">${esc(o.pos)}</span>${speakBtn(o.w)}</div>
    ${phHTML(o)}
    ${backHTML(o)}
    <div class="row">${queue.includes(w) ? '<span class="note">已在今天的学习队列里</span>' : '<button class="btn alt" id="addQueue">加入今天的学习</button>'}</div>`;
  $("#overlay").hidden = false; $("#closeSheet").focus();
}
function closeDetail(){ $("#overlay").hidden = true; openWord = null }

/* ---------- 设置 ---------- */
function renderSettings(){
  $("#setList").innerHTML = listOptions(`<option value="all">全部，按顺序：核心精编 → 高频 → 低频（${WORDS.length} 词）</option>`);
  $("#setDaily").value = String(store.settings.daily);
  $("#setList").value = store.settings.list;
  if($("#setList").value!==store.settings.list) $("#setList").value = "all";
  $("#setBasic").value = store.settings.skipBasic || "none";
  $("#setAuto").checked = !!store.settings.auto;
  if(!App.canSpeak) $("#setAuto").closest(".check").hidden = true;
}

/* ---------- 标签页与事件 ---------- */
let curTab = "study";
function showTab(t){
  curTab = t;
  $$("#view-vocab .tab").forEach(b => b.setAttribute("aria-selected", b.dataset.tab===t));
  ["study","quiz","bank"].forEach(k => $("#pane-"+k).hidden = k!==t);
  if(t==="bank") renderBank();
  if(t==="quiz" && !quiz) renderQuizSetup();
  if(t==="study") renderStudy();
  App.store.set("toefl.vocab.tab", t);
}
function renderAll(){ renderSettings(); renderStats(); renderStudy(); if(curTab==="bank") renderBank(); if(curTab==="quiz" && !quiz) renderQuizSetup() }

function init(){
  $("#view-vocab").addEventListener("click", onClick);
  $("#overlay").addEventListener("click", e => { if(e.target.id==="overlay") closeDetail(); else onClick(e) });
  $("#search").addEventListener("input", renderBank);
  $("#setDaily").addEventListener("change", e => { store.settings.daily = +e.target.value; persist(); buildQueue(); renderStats(); renderStudy() });
  $("#setList").addEventListener("change", e => { store.settings.list = e.target.value; persist(); buildQueue(); renderStats(); renderStudy() });
  $("#setAuto").addEventListener("change", e => { store.settings.auto = e.target.checked; persist() });
  $("#setBasic").addEventListener("change", e => { store.settings.skipBasic = e.target.value; persist(); buildQueue(); renderStats(); renderStudy() });
  document.addEventListener("keydown", onKey);
  buildQueue();
  renderSettings();
  renderStats();
  const t = App.store.get("toefl.vocab.tab", "study");
  showTab(["study","quiz","bank"].includes(t) ? t : "study");
}

function onClick(e){
  interacted = true;
  const t = e.target.closest("button,tr[data-detail]"); if(!t) return;
  if(t.dataset.speak){ App.speak(t.dataset.speak); return }
  if(t.dataset.ai){ explain(t); return }
  if(t.dataset.tab){ showTab(t.dataset.tab); return }
  if(t.id==="revealBtn"){ revealed = true; renderStudy(); return }
  if(t.classList.contains("rate")){ rate(+t.dataset.g); return }
  if(t.dataset.more){ addMore(+t.dataset.more); return }
  if(t.dataset.goto){ closeDetail(); showTab(t.dataset.goto); return }
  if(t.dataset.mode){ quizMode = t.dataset.mode; $$(".mode").forEach(b => b.setAttribute("aria-pressed", b===t)); return }
  if(t.id==="qStart"){ startQuiz(); return }
  if(t.dataset.opt!==undefined){ answer(+t.dataset.opt); return }
  if(t.id==="spellGo"){ answer(); return }
  if(t.id==="qNext"){ nextQ(); return }
  if(t.id==="qAgain"){ quizMode = quiz.mode; quiz = null; renderQuizSetup(); startQuiz(); return }
  if(t.id==="qBack"){ quiz = null; renderQuizSetup(); return }
  if(t.dataset.topic){ bankTopic = t.dataset.topic; $("#search").value = ""; renderBank(); return }
  if(t.dataset.group){ bankGroup = t.dataset.group; bankTopic = GROUP[bankGroup].lists[0].id; $("#search").value = ""; renderBank(); return }
  if(t.dataset.detail){ openDetail(t.dataset.detail); return }
  if(t.id==="closeSheet"){ closeDetail(); return }
  if(t.id==="addQueue"){ queue.splice(Math.min(1, queue.length), 0, openWord); renderStudy(); openDetail(openWord); return }
  if(t.id==="resetBtn"){
    if(t.dataset.armed){ store = Object.assign(blank(), { settings:store.settings }); buildQueue(); persist(); quiz = null; renderAll(); t.textContent = "清空背词记录"; delete t.dataset.armed; return }
    t.dataset.armed = "1"; t.textContent = "再点一次，确认清空全部背词进度";
    setTimeout(() => { if(t.dataset.armed){ delete t.dataset.armed; t.textContent = "清空背词记录" } }, 4000);
  }
}

function onKey(e){
  if(!$("#overlay").hidden){ if(e.key==="Escape") closeDetail(); if(App.route==="vocab") return }
  if(App.route!=="vocab") return;
  interacted = true;
  if(e.target.matches && e.target.matches("tr[data-detail]") && e.key==="Enter"){ openDetail(e.target.dataset.detail); return }
  const typing = /INPUT|SELECT|TEXTAREA/.test(e.target.tagName||"");
  if(e.ctrlKey || e.metaKey || e.altKey) return;
  if(curTab==="study" && !typing && queue.length){
    if(e.code==="Space" && !revealed){ e.preventDefault(); revealed = true; renderStudy(); return }
    if(revealed && /^[1-4]$/.test(e.key)){ rate(+e.key-1); return }
    if(e.key==="p" || e.key==="P"){ App.speak(queue[0]); return }
  }
  if(curTab==="quiz" && quiz && quiz.idx<quiz.items.length){
    if(e.key==="Enter"){
      if(quiz.answered){ e.preventDefault(); nextQ() }
      else if(quiz.mode==="spell" && e.target.id==="spellIn"){ e.preventDefault(); answer() }
      return;
    }
    if(!typing && !quiz.answered && quiz.mode!=="spell"){
      const k = e.key.toUpperCase(), i = "1234".indexOf(k)>=0 ? "1234".indexOf(k) : "ABCD".indexOf(k);
      if(i>=0) answer(i);
    }
  }
}

/* ---------- 给其他模块用：在文章里识别词库单词 ---------- */
// 只标出值得查的词：核心精编、精编补充，以及高频段以外的非基础词，避免满篇下划线
const FORMS = {};
WORDS.forEach(o => {
  if(o.w.includes(" ")) return;
  if(!(o.g==="core" || o.rich || (!o.basic && o.g!=="f1"))) return;
  const w = o.w.toLowerCase(), base = w.replace(/e$/,"");
  [w, w+"s", w+"es", w+"ed", w+"d", w+"ing", base+"ing", base+"ed",
   w.replace(/y$/,"ies"), w.replace(/y$/,"ied"), w+"ly"].forEach(f => { if(!FORMS[f]) FORMS[f] = o.w });
});
App.vocab = {
  lookup: token => FORMS[String(token).toLowerCase()] || null,
  open: w => openDetail(w)
};

App.routes.vocab = {
  init,
  enter(){ buildQueueIfStale(); renderStats(); if(curTab==="study") renderStudy(); if(curTab==="bank") renderBank() }
};
let builtDay = today();
function buildQueueIfStale(){ if(builtDay!==today()){ builtDay = today(); buildQueue() } }
})();
