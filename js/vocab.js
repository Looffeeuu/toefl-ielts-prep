/* 词汇模块：间隔重复背词、测验、词库；托福 / 雅思词库切换；导入自定义词表 */
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
// 精编补充分多批（RICH_WORDS、RICH_WORDS_2…），全部合并
Object.keys(window).filter(k => /^RICH_WORDS(_\d+)?$/.test(k)).map(k => window[k]).join("\n").trim().split(/\r?\n/).forEach(line => {
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
// 例句：一个词可以有多个例句，每句以词性开头（如 "vt. ..."），用 ## 分隔；o.ex 保留第一句给测验用
const EX_LAB = /^(n|vt|vi|v|adj|adv|prep|conj|pron|int)\.\s+/;
function setExamples(o, raw){
  o.exs = (raw || "").split(" ## ").map(s => s.trim()).filter(Boolean).map(s => {
    const m = s.match(EX_LAB);
    return m ? { pos:m[1] + ".", text:s.slice(m[0].length) } : { pos:"", text:s };
  });
  o.ex = o.exs.length ? o.exs[0].text : "";
}
WORDS.forEach(o => setExamples(o, o.ex));
// 多词性补充：覆盖词性、释义和例句（每个词性一个例句）
Object.keys(window).filter(k => /^POS_WORDS_\d+$/.test(k)).map(k => window[k]).join("\n").trim().split(/\r?\n/).forEach(line => {
  const [w,pos,cn,exs] = line.split("|").map(s => (s||"").trim());
  const o = BY[w] || BY[(w||"").toLowerCase()];
  if(!o || !exs) return;
  o.pos = pos; o.cn = cn; setExamples(o, exs);
});
GROUPS.forEach(g => g.exam = "toefl");
const TOEFL_WORDS = WORDS.slice();

/* ---------- 雅思词库 ---------- */
// 和托福词库重复的词直接共用同一个对象：例句、同义替换和背词进度都通用
const ITIERS = [["i1","雅思高频","词频前 5000"],["i2","雅思次高频","词频 5000–10000"],["i3","雅思中频","词频 10000–20000"],["i4","雅思低频","词频 20000 以后"]];
const iTier = { i1:[], i2:[], i3:[], i4:[] }, IELTS_SET = new Set();
(window.IELTS_WORDS || "").split("\n").forEach(line => {
  const [w,ph,pos,cn,tier,flag] = line.split("\t");
  if(!w || !iTier[tier]) return;
  let o = BY[w] || BY[w.toLowerCase()];
  if(o && IELTS_SET.has(o)) return;
  if(!o){ o = { w, ph, pos, cn, syn:[], ex:"", exs:[], basic:flag||"", g:tier }; BY[w] = o; WORDS.push(o) }
  IELTS_SET.add(o); iTier[tier].push(o);
});
ITIERS.forEach(([id,name,note]) => {
  const ws = iTier[id], g = { id, name, note:`${note}，共 ${ws.length} 词`, lists:[], exam:"ielts" };
  for(let i=0;i<ws.length;i+=CHUNK){
    const k = i/CHUNK + 1;
    const L = { id:`${id}-${k}`, name:`${name} ${k}`, en:`第 ${i+1}–${Math.min(i+CHUNK, ws.length)} 词`, words:ws.slice(i, i+CHUNK), group:id };
    L.words.forEach(o => { if(!o.ti) o.ti = L.id; if(!o.t) o.t = L.id });
    g.lists.push(L); TOPIC[L.id] = L;
  }
  GROUPS.push(g);
});
const IELTS_WORDS = [...IELTS_SET];
const BASE_N = WORDS.length;

/* ---------- 我的词表（自己导入的词表） ---------- */
// 存在背词数据里：custom = [{ id, name, created, items:[ "word" | [word, 释义, 词性, 音标] ] }]
// 内置词库里有的词直接用词库的对象（带例句、进度通用），item 里的释义作为「词表释义」显示；词库里没有的词新建对象
const custom = { id:"custom", name:"我的词表", note:"自己导入的词表，例如课程老师布置的单词", lists:[], exam:"both" };
GROUPS.push(custom);
const GROUP = {}; GROUPS.forEach(g => GROUP[g.id] = g);
let TOPICS = GROUPS.flatMap(g => g.lists);
let noted = [];
let customForms = null;   // 「我的词表」的词形索引，词表变化时清空，用到时再建
const itemParts = it => Array.isArray(it) ? it : [it];
function rebuildCustom(defs){
  WORDS.slice(BASE_N).forEach(o => { if(BY[o.w]===o) delete BY[o.w] });
  WORDS.length = BASE_N;
  noted.forEach(o => delete o.myCn); noted = [];
  custom.lists.forEach(l => delete TOPIC[l.id]);
  custom.lists = defs.map(d => {
    const L = { id:d.id, name:d.name, en:`${d.items.length} 词`, words:[], group:"custom" }, seen = new Set();
    d.items.forEach(it => {
      const [w, cn, pos, ph] = itemParts(it);
      if(!w) return;
      let o = BY[w] || BY[w.toLowerCase()];
      if(!o){ o = { w, ph:ph||"", pos:pos||"", cn:cn||"", syn:[], ex:"", exs:[], basic:"", g:"custom", t:L.id, custom:true }; BY[w] = o; WORDS.push(o) }
      else if(cn && !o.custom && !o.cn.includes(cn) && !o.myCn){ o.myCn = cn; noted.push(o) }
      if(!seen.has(o)){ seen.add(o); L.words.push(o) }
    });
    TOPIC[L.id] = L; return L;
  });
  TOPICS = GROUPS.flatMap(g => g.lists);
  customForms = null;
}
const exam = () => App.exam==="ielts" ? "ielts" : "toefl";
const EXAM_NAME = { toefl:"托福", ielts:"雅思" };
const examWords = () => exam()==="ielts" ? IELTS_WORDS : TOEFL_WORDS;
const customWords = () => [...new Set(custom.lists.flatMap(l => l.words))];
// 当前考试可见的分组：我的词表（有的话）放最前面
const visibleGroups = () => { const gs = GROUPS.filter(g => g.exam===exam()); return custom.lists.length ? [custom, ...gs] : gs };
const visibleLists = () => visibleGroups().flatMap(g => g.lists);
// 卡片上显示的词表名：优先显示本轮勾选的、包含这个词的词表
const listName = o => {
  const own = pickedLists().find(l => l.words.includes(o)); if(own) return own.name;
  const id = exam()==="ielts" && o.ti ? o.ti : o.t; return (TOPIC[id] || TOPIC[o.ti] || { name:"我的词表" }).name;
};

const fam = p => (p||"").split(/[./]/)[0];
function hlRe(w){ const stem = (w.length>5 || /[a-z]y$/.test(w)) ? w.slice(0,-1) : w; return new RegExp("\\b(" + stem.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + "\\w*)","i") }
const exHTML = o => o.ex ? esc(o.ex).replace(hlRe(o.w), "<mark>$1</mark>") : "";
const exBlank = o => o.ex ? esc(o.ex).replace(hlRe(o.w), '<span class="blank">' + o.w[0] + " _ _ _</span>") : "";
const phHTML = o => o.ph ? `<span class="ph">/${esc(o.ph)}/</span>` : "";
const BASIC = { z:"中考词", g:"高考词" };
// 词表下拉选项：全部 / 整个分组 / 单个词表
function listOptions(extraTop){
  return extraTop + visibleGroups().map(g => `<optgroup label="${g.name}">
    <option value="g:${g.id}">${g.name} · 全部（${g.lists.reduce((a,l) => a+l.words.length, 0)} 词）</option>
    ${g.lists.map(l => `<option value="${l.id}">${esc(l.name)}（${l.words.length} 词）</option>`).join("")}</optgroup>`).join("");
}
function wordsOf(sel){
  if(sel==="all") return examWords();
  if(sel && sel.startsWith("g:")) return (GROUP[sel.slice(2)] || core).lists.flatMap(l => l.words);
  return (TOPIC[sel] || { words:examWords() }).words;
}
const SPEAK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
App.SPEAK_SVG = SPEAK_SVG;
const speakBtn = w => App.canSpeak ? `<button class="speak" data-speak="${esc(w)}" title="发音 (P)" aria-label="朗读 ${esc(w)}">${SPEAK_SVG}</button>` : "";
function ivLabel(i){ if(i<=0) return "1 分钟内"; if(i<30) return i+" 天"; if(i<365) return Math.round(i/30)+" 个月"; return (i/365).toFixed(1)+" 年" }

/* ---------- 进度 ---------- */
// settings.lists：本轮选中的词表 id（空数组表示全部词库）；order：seq 按词表顺序 / rand 随机；seed：随机顺序的种子
// stats：个人词汇分析用的记录。forgot 选「不认识」的次数；spell 拼写测验拼错（含最近的错误拼法）；
// confuse 测验中把 A 选成 B 的次数（键为 "A|B"）；look 做题时点开查看的次数；quiz 测验总题数与答对数
const sblank = () => ({ forgot:{}, spell:{}, confuse:{}, look:{}, quiz:[0,0] });
const blank = () => ({ v:1, cards:{}, log:{}, settings:{ daily:20, lists:[], order:"seq", seed:1, auto:false, skipBasic:"z" }, custom:[], stats:sblank(), updatedAt:0 });
function legacyLists(sel){
  if(!sel || sel==="all") return [];
  if(sel.startsWith("g:")) return GROUP[sel.slice(2)] ? GROUP[sel.slice(2)].lists.map(l => l.id) : [];
  return TOPIC[sel] ? [sel] : [];
}
function normalize(d){
  const b = blank(); d = d||{};
  const s = Object.assign(b.settings, d.settings||{});
  if(!Array.isArray(s.lists) || (d.settings && d.settings.list && !d.settings.lists)) s.lists = legacyLists(s.list);
  const cl = Array.isArray(d.custom) ? d.custom.filter(x => x && x.id && Array.isArray(x.items)) : [];
  rebuildCustom(cl);
  s.lists = s.lists.filter(id => TOPIC[id]);
  delete s.exam;   // 考试改为页面级设置（App.exam），旧数据里的这一项在 core.js 里迁移
  delete s.list;
  return { v:1, cards:d.cards||{}, log:d.log||{}, settings:s, custom:cl, stats:Object.assign(sblank(), d.stats||{}), updatedAt:d.updatedAt||0 };
}
let store = null;
store = normalize(App.store.get(App.KEYS.vocab, null));
App.vocabData = () => store;
App.loadVocabData = d => { store = normalize(d); persist(); buildQueue(); renderAll() };
function persist(){ store.updatedAt = Date.now(); App.store.set(App.KEYS.vocab, store) }
function ensureLog(){ const k = keyOf(today()); return store.log[k] || (store.log[k] = { n:0, r:0 }) }
const todayLog = () => store.log[keyOf(today())] || { n:0, r:0 };
function status(w){ const c = store.cards[w]; if(!c) return ["new","新词"]; if(c[1]>=21) return ["done","已掌握"]; return ["learn","学习中"] }
const bump = (map, k, n=1) => { map[k] = (map[k]||0) + n };

/* ---------- 间隔重复 ---------- */
// card = [复习次数, 间隔天数, 难度系数%, 到期日, 遗忘次数, 手动标为已掌握(1)]
function schedule(c, g){
  let [r,i,e,d,l] = c ? c.slice(0,5) : [0,0,250,0,0];
  const T = today();
  if(g===0){ if(r>0) l++; r=0; i=0; e=Math.max(130,e-20); d=T }
  else if(g===1){ i = r===0 ? 1 : Math.max(i+1, Math.round(i*1.2)); e=Math.max(130,e-15); r++; d=T+i }
  else if(g===2){ i = r===0 ? 1 : r===1 ? 3 : Math.max(i+1, Math.round(i*e/100)); r++; d=T+i }
  else { i = r===0 ? 4 : Math.max(i+2, Math.round(i*e/100*1.3)); e+=15; r++; d=T+i }
  return [r,i,e,d,l];
}

let queue = [], revealed = false, interacted = false, lastSpoken = "";
// 新词来源：按设置的词表，并按需跳过中考、高考词
// 只算当前考试可见的词表；一个都没选时用当前考试的全部词库
const pickedLists = () => { const sel = new Set(store.settings.lists); return visibleLists().filter(l => sel.has(l.id)) };
function selectedWords(){
  const ls = pickedLists();
  return ls.length ? [...new Set(ls.flatMap(l => l.words))] : examWords();
}
// 带种子的洗牌：同一个种子得到同一个顺序，刷新页面后队列不会变；点「重新打乱」换种子
function seededShuffle(arr, seed){
  let a = seed >>> 0 || 1;
  const rnd = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ t>>>15, t | 1); t ^= t + Math.imul(t ^ t>>>7, t | 61); return ((t ^ t>>>14) >>> 0) / 4294967296 };
  for(let i=arr.length-1;i>0;i--){ const j = Math.floor(rnd()*(i+1)); [arr[i],arr[j]] = [arr[j],arr[i]] }
  return arr;
}
function srcWords(){
  const sb = store.settings.skipBasic;
  const ws = selectedWords().filter(o => !(sb==="z" && o.basic==="z") && !(sb==="zg" && o.basic));
  return store.settings.order==="rand" ? seededShuffle(ws.slice(), store.settings.seed) : ws;
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
  // 复习记住率：只算已经学过的词（新词第一次见不算）
  if(was){ L.rv = (L.rv||0) + 1; if(g>0) L.rk = (L.rk||0) + 1 }
  if(g===0) bump(store.stats.forgot, w);
  queue.shift();
  if(g===0) queue.splice(Math.min(3, queue.length), 0, w);
  revealed = false; undo = null; persist(); renderStats(); renderStudy();
}
// 手动标为已掌握：间隔直接设为 60 天，到期时再抽查一次；新词这样跳过不占用当天的新词名额，并补进一个新词
const MASTER_DAYS = 60;
let undo = null;
function markMastered(w, fromQueue){
  const was = store.cards[w], T = today();
  const [r,,e,,l] = was ? was : [0,0,250,0,0];
  undo = { w, was: was ? was.slice() : null, fromQueue, queue: queue.slice() };
  store.cards[w] = [Math.max(r,1), MASTER_DAYS, e, T+MASTER_DAYS, l, 1];
  const L = ensureLog(); L.r++;
  queue = queue.filter(x => x!==w);
  if(fromQueue && !was){
    const have = new Set(queue), next = srcWords().find(o => !store.cards[o.w] && !have.has(o.w));
    if(next) queue.push(next.w);
  }
  revealed = false; persist(); renderStats();
}
function undoMastered(){
  if(!undo) return;
  if(undo.was) store.cards[undo.w] = undo.was; else delete store.cards[undo.w];
  const L = ensureLog(); L.r = Math.max(0, L.r-1);
  queue = undo.queue; undo = null; revealed = false;
  persist(); renderStats(); renderStudy();
}
// 取消已掌握：放回今天的复习
function unmaster(w){
  const c = store.cards[w]; if(!c) return;
  store.cards[w] = [0, 0, Math.max(130, c[2]-20), today(), c[4]];
  if(!queue.includes(w)) queue.splice(Math.min(1, queue.length), 0, w);
  persist(); renderStats();
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
  const ex = exam()==="ielts" ? "雅思（IELTS）" : "托福（TOEFL iBT）", exs = EXAM_NAME[exam()];
  const prompt = `你是一位${ex}词汇老师。请为下面这个单词写一份简洁的中文讲解，帮助中国学生记住它，并在${exs}阅读和听力中认出它。

单词：${o.w}
词性：${o.pos}
释义：${o.cn || o.myCn || "（无）"}

按下面五个小标题输出，纯文本，不要使用任何 Markdown 符号（不要 #、*、**、-）：
【词根词缀】拆解构词并说明各部分含义；没有明显词根时，给出词源或联想
【记忆方法】一句好记的联想
【常见搭配】3 个学术写作常用搭配，每个附中文
【例句】2 个学术语境的英文例句，每句下一行附中文翻译
【同义替换】${exs}阅读里常见的 3 到 5 个同义词或短语
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
  // 词库进度只算当前考试的词库
  const ew = examWords(); let el = 0, em = 0;
  ew.forEach(o => { const c = store.cards[o.w]; if(c){ el++; if(c[1]>=21) em++ } });
  $("#sTotal").textContent = `${EXAM_NAME[exam()]}词库 · 已学 ${el} / ${fmtN(ew.length)}`;
  const bar = $("#totalBar"); bar.children[0].style.width = (em/ew.length*100)+"%"; bar.children[1].style.width = ((el-em)/ew.length*100)+"%";
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
    ? (App.hasAI() ? "" : `<p class="note" style="margin:0">这个词条只有释义。在<a href="#settings">设置</a>里填写 API Key 后，可以用 AI 讲解生成例句和搭配。</p>`)
    : "";
  return `<div class="cn">${o.cn ? cnHTML(o) : '<span class="note">这个词没有释义</span>'}</div>
    ${o.myCn ? `<div class="syn"><span class="lab">词表释义</span>${esc(o.myCn)}</div>` : ""}
    ${o.syn.length ? `<div class="syn"><span class="lab">同义替换</span>${o.syn.map(s => `<span class="s">${esc(s)}</span>`).join("")}</div>` : ""}
    ${examplesHTML(o)}
    ${extra}${aiBlock(o)}`;
}
// 多词性释义按词性分行显示（释义里用全角空格分隔各词性）
const cnHTML = o => o.cn.split("　").map(seg => `<span class="cn-seg">${esc(seg)}</span>`).join("");
// 每个例句前标出词性；只有一个且没标词性时按原样显示
function examplesHTML(o){
  if(!o.exs || !o.exs.length) return "";
  const re = hlRe(o.w);
  return `<div class="exs">${o.exs.map(e => `<p class="ex">${e.pos ? `<span class="ex-pos">${esc(e.pos)}</span>` : ""}${esc(e.text).replace(re, "<mark>$1</mark>")}</p>`).join("")}</div>`;
}
function renderStudy(){
  const box = $("#pane-study");
  $("#tabQ").textContent = queue.length ? queue.length : "";
  if(!queue.length){
    const L = todayLog(), left = srcWords().filter(o => !store.cards[o.w]).length;
    box.innerHTML = `${undo ? `<div class="undo-bar">已把 <b>${esc(undo.w)}</b> 标为已掌握。<button class="btn-ghost" id="undoMaster">撤销</button></div>` : ""}<div class="card done">
      <p class="section-label">今日任务</p>
      <h3>${L.r ? "今天的复习和新词都完成了" : "现在没有要复习的单词"}</h3>
      <p class="note" style="margin:0">今天共复习 ${L.r} 次，新学 ${L.n} 个词。${left ? `本轮词库还剩 ${left} 个新词。` : "本轮词库的新词已经全部学过，可以在左边「本轮词库」里换一批。"}</p>
      <div class="row">${left ? '<button class="btn" data-more="10">再学 10 个新词</button>' : ""}<button class="btn alt" data-goto="quiz">去做个测验</button></div>
    </div>`;
    return;
  }
  const o = BY[queue[0]], c = store.cards[o.w];
  const kind = !c ? ["new","新词"] : c[0]===0 ? ["learn","重学"] : ["learn","复习"];
  const undoBar = undo ? `<div class="undo-bar">已把 <b>${esc(undo.w)}</b> 标为已掌握，${MASTER_DAYS} 天后抽查一次。<button class="btn-ghost" id="undoMaster">撤销</button></div>` : "";
  const prev = [0,1,2,3].map(g => g===0 ? "1 分钟内" : ivLabel(schedule(c,g)[1]));
  box.innerHTML = `${undoBar}<div class="card">
    <div class="meta"><span class="chip ${kind[0]}">${kind[1]}</span><span>${esc(listName(o))}</span>${o.basic ? `<span class="chip">${BASIC[o.basic]}</span>` : ""}<span class="left">剩余 ${queue.length}</span></div>
    <div class="head"><span class="headword">${esc(o.w)}</span><span class="pos">${esc(o.pos)}</span>${speakBtn(o.w)}</div>
    ${phHTML(o)}
    ${revealed ? `<div class="back">${backHTML(o)}</div>` : ""}
    <div class="actions">
      ${revealed ? `<div class="rates">${["不认识","模糊","认识","太简单"].map((t,g) => `<button class="rate" data-g="${g}"><b>${t}<kbd>${g+1}</kbd></b><span>${prev[g]}后再见</span></button>`).join("")}</div>`
      : `<button class="reveal" id="revealBtn">先回想意思，再看答案<kbd>空格</kbd></button>`}
      <div class="hint">${revealed ? "按 1–4 打分，按 P 发音" : "想不起来也没关系，翻开后选「不认识」，它会很快再出现"}</div>
      <button class="master" id="masterBtn" title="确定已经掌握的词不用再按间隔重复去背，${MASTER_DAYS} 天后抽查一次">这个词我已经掌握了，不用再背<kbd>M</kbd></button>
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
  const others = shuffle((same.length>40 ? same : WORDS).filter(x => x!==o && x.cn && (mode!=="syn" || x.syn.length)));
  if(mode==="syn" && others.length<12) others.push(...shuffle(WORDS.filter(x => x!==o && x.syn.length)));
  others.sort((a,b) => (fam(b.pos)===fam(o.pos)) - (fam(a.pos)===fam(o.pos)));
  let correct, opts;
  // src 记下每个干扰项来自哪个词，答错时用来统计「混淆」
  const src = {};
  if(mode==="cn"){ correct = o.cn; opts = [correct]; for(const x of others){ if(opts.length>=4) break; if(!opts.includes(x.cn)){ opts.push(x.cn); src[x.cn] = x.w } } }
  else{
    correct = o.syn[0]; opts = [correct];
    for(const x of others){
      if(opts.length>=4) break;
      const s = x.syn[0];
      if(opts.includes(s) || o.syn.includes(s) || s===o.w || o.syn.includes(x.w) || x.syn.includes(o.w) || x.syn.some(z => o.syn.includes(z))) continue;
      opts.push(s); src[s] = x.w;
    }
  }
  return { o, opts:shuffle(opts), correct, src };
}
function renderQuizSetup(msg){
  const seen = Object.keys(store.cards).length;
  $("#pane-quiz").innerHTML = `<div class="qsetup">
    <div class="modes">${Object.entries(MODES).map(([k,[t,d]]) => `<button class="mode" data-mode="${k}" aria-pressed="${k===quizMode}"><b>${t}</b><span>${d}</span></button>`).join("")}</div>
    <label class="field" style="max-width:320px">出题范围
      <select id="qScope">
        ${listOptions(`<option value="seen" ${seen>=8 ? "selected" : ""}>我学过的词（${seen} 个）</option>
        <option value="all" ${seen<8 ? "selected" : ""}>${EXAM_NAME[exam()]}全部词库（${fmtN(examWords().length)} 个）</option>`)}
      </select>
    </label>
    <p class="note" style="margin:0">每次 10 题。答错的词会自动放回今天的复习队列。</p>
    ${msg ? `<div class="fb no">${msg}</div>` : ""}
    <div class="row"><button class="btn" id="qStart">开始测验</button></div>
  </div>`;
}
function startQuiz(){
  let p = pool($("#qScope").value);
  p = quizMode==="syn" ? p.filter(o => o.syn.length) : p.filter(o => o.cn);
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
  const st = store.stats; st.quiz[1]++; if(ok) st.quiz[0]++;
  if(!ok && quiz.mode==="spell"){ const e = st.spell[q.o.w] || (st.spell[q.o.w] = { n:0, wrong:[] }); e.n++; e.wrong = [q.given, ...e.wrong.filter(x => x!==q.given)].slice(0,3) }
  if(!ok && quiz.mode!=="spell"){ const other = q.src[q.opts[i]]; if(other) bump(st.confuse, `${q.o.w}|${other}`) }
  if(ok) quiz.score++; else { quiz.wrong.push(q.o.w); penalize(q.o.w) }
  if(ok) persist();
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
  const vg = visibleGroups();
  if(!vg.includes(GROUP[bankGroup])){ bankGroup = (vg.find(x => x!==custom) || vg[0]).id; bankTopic = GROUP[bankGroup].lists[0].id }
  if(!TOPIC[bankTopic] || TOPIC[bankTopic].group!==bankGroup) bankTopic = GROUP[bankGroup].lists[0].id;
  const g = GROUP[bankGroup];
  $("#groups").innerHTML = vg.map(x => `<button class="chip grp" data-group="${x.id}" aria-pressed="${x.id===bankGroup}">${x.name}</button>`).join("") + `<span class="note">${esc(g.note)}</span>`;
  $("#topics").innerHTML = g.lists.map(t => {
    let m = 0, l = 0; t.words.forEach(o => { const s = status(o.w)[0]; if(s==="done") m++; else if(s==="learn") l++ });
    return `<button class="topic" data-topic="${t.id}" aria-pressed="${t.id===bankTopic}">
      <b>${esc(t.name)}</b><small>${esc(t.en)} · ${m+l}/${t.words.length}</small>
      <div class="bar"><i class="m" style="width:${m/t.words.length*100}%"></i><i class="l" style="width:${l/t.words.length*100}%"></i></div></button>` }).join("");
  const q = $("#search").value.trim().toLowerCase();
  const all = q ? [...new Set([...examWords(), ...customWords()])].filter(o => o.w.toLowerCase().includes(q) || o.cn.includes(q) || (o.myCn||"").includes(q) || o.syn.some(s => s.toLowerCase().includes(q))) : TOPIC[bankTopic].words;
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
  $("#sheet").classList.remove("wide");
  const c = store.cards[w], [s,t] = status(w);
  const due = c ? (c[3]<=today() ? "今天复习" : `${ivLabel(c[3]-today())}后复习`) : "还没学过";
  $("#sheet").innerHTML = `<div class="meta"><span class="chip ${s}">${t}</span><span>${esc(listName(o))}</span>${o.basic ? `<span class="chip">${BASIC[o.basic]}</span>` : ""}<span>${due}</span><button class="x" id="closeSheet" aria-label="关闭">×</button></div>
    <div class="head" style="padding-top:0"><span class="headword" style="font-size:44px">${esc(o.w)}</span><span class="pos">${esc(o.pos)}</span>${speakBtn(o.w)}</div>
    ${phHTML(o)}
    ${backHTML(o)}
    ${wordStatsHTML(w)}
    <div class="row">${queue.includes(w) ? '<span class="note">已在今天的学习队列里</span>' : '<button class="btn alt" id="addQueue">加入今天的学习</button>'}
      ${s==="done" ? '<button class="btn-ghost" id="unmaster">还没掌握，重新学习</button>' : '<button class="btn-ghost" id="masterDetail">标为已掌握</button>'}</div>`;
  $("#overlay").hidden = false; $("#closeSheet").focus();
}
function closeDetail(){ $("#overlay").hidden = true; openWord = null }
// 这个词的个人记录，显示在详情里
function wordStatsHTML(w){
  const st = store.stats, c = store.cards[w], parts = [];
  if(c) parts.push(`复习 ${c[0]} 次`);
  if(c && c[5]) parts.push("手动标为已掌握");
  if(st.forgot[w]) parts.push(`选过「不认识」${st.forgot[w]} 次`);
  if(st.spell[w]) parts.push(`拼错 ${st.spell[w].n} 次（写成 ${st.spell[w].wrong.map(esc).join("、")}）`);
  const conf = Object.entries(st.confuse).filter(([k]) => k.split("|")[0]===w).map(([k,n]) => `${esc(k.split("|")[1])}×${n}`);
  if(conf.length) parts.push(`测验中错选成 ${conf.join("、")} 的释义`);
  if(st.look[w]) parts.push(`做题时查过 ${st.look[w]} 次`);
  return parts.length ? `<p class="note word-stat">${parts.join(" · ")}</p>` : "";
}

/* ---------- 设置 ---------- */
function renderSettings(){
  $("#setDaily").value = String(store.settings.daily);
  $("#setOrder").value = store.settings.order;
  $("#reshuffle").hidden = store.settings.order!=="rand";
  $("#pickLabel").textContent = pickSummary();
  $("#setBasic").value = store.settings.skipBasic || "none";
  $("#setAuto").checked = !!store.settings.auto;
  if(!App.canSpeak) $("#setAuto").closest(".check").hidden = true;
}

/* ---------- 本轮词库（多选） ---------- */
const fmtN = n => n.toLocaleString("en-US");
function pickSummary(){
  const sel = new Set(pickedLists().map(l => l.id));
  if(!sel.size) return `${EXAM_NAME[exam()]}全部词库（${fmtN(examWords().length)} 词）`;
  const parts = [];
  visibleGroups().forEach(g => {
    const picked = g.lists.filter(l => sel.has(l.id));
    if(!picked.length) return;
    if(picked.length===g.lists.length) parts.push(`${g.name}全部`);
    else parts.push(picked.length<=2 ? picked.map(l => l.name).join("、") : `${g.name} ${picked.length} 组`);
  });
  return `${parts.join(" + ")}（${fmtN(selectedWords().length)} 词）`;
}
function sourceChanged(){
  persist(); buildQueue(); renderSettings(); renderStats(); renderStudy();
}
function renderPicker(){
  const sel = new Set(pickedLists().map(l => l.id));
  const sheet = $("#sheet"), scroll = sheet.scrollTop;
  const unseen = ws => ws.filter(o => !store.cards[o.w]).length;
  const total = selectedWords(), left = unseen(srcWords());
  sheet.innerHTML = `<div class="meta"><b style="color:var(--ink);font-size:17px">本轮词库</b><button class="x" id="closeSheet" aria-label="关闭">×</button></div>
    <p class="note" style="margin:0">勾选这一轮要背的词表，可以多选，也可以整组勾选。一个都不选时，按${EXAM_NAME[exam()]}全部词库出新词。到期的复习词不受这里的选择影响，会照常出现。</p>
    <div class="row" style="margin:0"><button class="btn-ghost" data-open-lists>${custom.lists.length ? "管理我的词表 / 导入新词表" : "导入自己的词表（例如老师布置的单词）"}</button></div>
    ${visibleGroups().map(g => {
      const ids = g.lists.map(l => l.id), n = ids.filter(id => sel.has(id)).length;
      return `<section class="pick-group">
        <label class="pick-head"><input type="checkbox" data-pick-group="${g.id}" ${n===ids.length ? "checked" : ""} ${n && n<ids.length ? 'data-mixed="1"' : ""}><b>${g.name}</b><span class="note">${esc(g.note)}</span></label>
        <div class="pick-lists">${g.lists.map(l => `<label class="pick${sel.has(l.id) ? " on" : ""}"><input type="checkbox" data-pick="${l.id}" ${sel.has(l.id) ? "checked" : ""}><span>${esc(l.name)}</span><small>未学 ${unseen(l.words)}/${l.words.length}</small></label>`).join("")}</div>
      </section>`;
    }).join("")}
    <div class="pick-foot"><span class="note">${sel.size ? `已选 ${sel.size} 个词表，共 ${fmtN(total.length)} 词` : `未勾选，使用${EXAM_NAME[exam()]}全部 ${fmtN(examWords().length)} 词`}；按当前基础词设置，还有 ${fmtN(left)} 个新词可学</span>
      <span class="row"><button class="btn alt" id="pickNone">清空选择</button><button class="btn" id="pickDone">完成</button></span></div>`;
  sheet.querySelectorAll("[data-mixed]").forEach(el => el.indeterminate = true);
  sheet.scrollTop = scroll;
}
function openPicker(){ $("#sheet").classList.add("wide"); renderPicker(); $("#overlay").hidden = false; openWord = null }
function onPickChange(e){
  if(onListsInput(e)) return;
  const t = e.target, sel = new Set(store.settings.lists);
  if(t.dataset.pick){ t.checked ? sel.add(t.dataset.pick) : sel.delete(t.dataset.pick) }
  else if(t.dataset.pickGroup){ GROUP[t.dataset.pickGroup].lists.forEach(l => t.checked ? sel.add(l.id) : sel.delete(l.id)) }
  else return;
  store.settings.lists = TOPICS.filter(l => sel.has(l.id)).map(l => l.id);
  sourceChanged(); renderPicker();
}

/* ---------- 我的词表：导入、管理、分享 ---------- */
const IO = App.wordlistIO;
const MAX_ITEMS = 3000;
const SRC = { lex:["词库已有","done"], dict:["查词表补全","learn"], user:["词表自带","new"], ai:["AI 补全","learn"], none:["缺释义","bad"] };
let imp = { step:"edit", name:"", text:"", rows:[], bad:[], dup:0, msg:"", fromShare:false };
let wlMsg = "", shareOut = null;
const newId = () => "u" + Date.now().toString(36) + Math.random().toString(36).slice(2,5);
const defOf = id => store.custom.find(d => d.id===id);

// 对照内置词库和离线查词表，给每个词找释义；结果是预览表格的一行
async function resolveRows(items){
  let dict = null;
  try{ dict = await IO.loadDict() }catch(e){ imp.msg = "离线查词表没有加载成功，词库外的词需要自己填释义。" }
  return items.map(it => {
    const o = BY[it.w] || BY[it.w.toLowerCase()];
    if(o && !o.custom) return { w:o.w, cn:it.cn, pos:it.pos, ph:"", base:o, src:"lex" };
    const d = dict && dict.get(it.w.toLowerCase());
    if(it.cn) return { w:it.w, cn:it.cn, pos:it.pos || "", ph:it.ph || (d ? d.ph : ""), src:"user" };
    if(d) return { w:it.w, cn:d.cn, pos:d.pos, ph:it.ph || d.ph, src:"dict" };
    return { w:it.w, cn:"", pos:it.pos || "", ph:it.ph || "", src:"none" };
  });
}
async function parseImport(){
  const r = IO.parse(imp.text);
  if(!r.items.length){ imp.msg = r.bad.length ? "没有识别出英文单词。每行要以英文单词开头，例如：abandon 放弃" : "先粘贴单词或选择文件。"; renderListsSheet(); return }
  if(r.items.length>MAX_ITEMS){ imp.msg = `一个词表最多 ${MAX_ITEMS} 个词，请分成几个词表导入。`; renderListsSheet(); return }
  imp.msg = "正在查词…"; renderListsSheet();
  imp.msg = "";
  imp.rows = await resolveRows(r.items); imp.bad = r.bad; imp.dup = r.dup; imp.step = "preview";
  renderListsSheet();
}
function saveImport(){
  const name = (imp.name || "").trim() || `我的词表 ${store.custom.length+1}`;
  const items = imp.rows.map(x => {
    if(x.src==="lex") return x.cn && !x.base.cn.includes(x.cn) ? [x.base.w, x.cn] : x.base.w;
    const a = [x.w, x.cn, x.pos, x.ph];
    while(a.length>1 && !a[a.length-1]) a.pop();
    return a.length===1 ? a[0] : a;
  });
  const d = { id:newId(), name, created:Date.now(), items };
  store.custom.push(d);
  rebuildCustom(store.custom);
  imp = { step:"edit", name:"", text:"", rows:[], bad:[], dup:0, msg:"", fromShare:false };
  wlMsg = `「${name}」已保存，共 ${items.length} 个词。点「只背这个」开始随机背诵，或者在「本轮词库」里和其他词表一起勾选。`;
  sourceChanged(); renderListsSheet();
}
async function aiFill(btn){
  const miss = imp.rows.filter(x => x.src==="none").slice(0,150);
  if(!miss.length) return;
  btn.disabled = true; btn.textContent = "AI 正在补全…";
  const prompt = `为下面这些英文单词或短语给出最常用的词性和简短中文释义（不超过 12 个字）。每行一个，格式严格为：单词|词性|中文释义。词性用 n. v. adj. adv. phr. 这类缩写。只输出这些行，不要编号和其他文字。

${miss.map(x => x.w).join("\n")}`;
  try{
    const text = await App.askClaude(prompt, { maxTokens:6000, effort:"low" });
    const got = {};
    text.split(/\r?\n/).forEach(l => { const [w,pos,cn] = l.split("|").map(x => (x||"").trim()); if(w && cn) got[w.toLowerCase()] = { pos, cn } });
    let n = 0;
    miss.forEach(x => { const g = got[x.w.toLowerCase()]; if(g){ x.cn = g.cn.slice(0,40); x.pos = x.pos || g.pos; x.src = "ai"; n++ } });
    imp.msg = `AI 补全了 ${n} 个词的释义，保存前可以检查一下。`;
  }catch(e){ imp.msg = e.message || "AI 补全失败，可以再试一次。" }
  renderListsSheet();
}
async function shareList(id){
  const d = defOf(id); if(!d) return;
  try{
    const code = await IO.encode({ n:d.name, i:d.items });
    const url = `${location.origin}${location.pathname}?wl=${code}#vocab`;
    shareOut = { id, url, long: url.length>8000 };
  }catch(e){ shareOut = { id, url:"", err:"生成链接失败：" + (e.message||"") } }
  renderListsSheet();
}
function downloadList(id){
  const L = TOPIC[id], d = defOf(id); if(!L || !d) return;
  const text = "﻿" + L.words.map(o => [o.w, [o.pos, o.myCn || o.cn].filter(Boolean).join(" ")].join("\t")).join("\r\n") + "\r\n";
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type:"text/plain;charset=utf-8" }));
  a.download = `${d.name.replace(/[\\/:*?"<>|]/g, "_")}.txt`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
function studyList(id){
  store.settings.lists = [id];
  store.settings.order = "rand"; store.settings.seed = Math.floor(Math.random()*1e9);
  sourceChanged(); closeDetail(); showTab("study");
}
function deleteList(id){
  store.custom = store.custom.filter(d => d.id!==id);
  store.settings.lists = store.settings.lists.filter(x => x!==id);
  rebuildCustom(store.custom);
  if(shareOut && shareOut.id===id) shareOut = null;
  wlMsg = "词表已删除。学过的进度保留在本机，重新导入同一个词表后会接着用。";
  sourceChanged(); renderListsSheet();
}
// 打开分享链接：先预览，确认后才保存
async function openShared(code){
  try{
    const p = await IO.decode(code);
    if(!p || !Array.isArray(p.i)) throw new Error("链接内容不完整");
    const items = p.i.slice(0, MAX_ITEMS).map(it => { const [w,cn,pos,ph] = itemParts(it); return { w:String(w||"").trim(), cn:cn||"", pos:pos||"", ph:ph||"" } }).filter(x => /^[A-Za-z]/.test(x.w));
    imp = { step:"preview", name:String(p.n||"").slice(0,40), text:items.map(x => x.w + (x.cn ? " " + x.cn : "")).join("\n"), rows:[], bad:[], dup:0, msg:"", fromShare:true };
    openLists();
    imp.rows = await resolveRows(items);
  }catch(e){ imp = { step:"edit", name:"", text:"", rows:[], bad:[], dup:0, msg:"这个分享链接打不开：" + (e.message || "格式不对") + "。请让对方重新复制链接，或者发词表文件。", fromShare:false }; openLists() }
  renderListsSheet();
}
function listsRowsHTML(){
  if(!store.custom.length) return "";
  return `<div class="wl-list">${store.custom.map(d => {
    const L = TOPIC[d.id]; if(!L) return "";
    const learned = L.words.filter(o => store.cards[o.w]).length;
    const share = shareOut && shareOut.id===d.id ? (shareOut.err ? `<div class="fb no">${esc(shareOut.err)}</div>` : `<div class="wl-share">
        <input readonly value="${esc(shareOut.url)}" id="wlShareUrl" aria-label="分享链接"><button class="btn alt" data-wl-copy>复制</button>
        <p class="note" style="margin:0">整个词表都在链接里，同学打开后会先预览，确认后才保存到他自己的浏览器，不经过任何服务器。${shareOut.long ? "这个词表比较大，链接很长，部分聊天软件可能会截断，建议改用「下载」发文件。" : ""}</p></div>`) : "";
    return `<div class="wl-row">
      <div class="wl-main"><input class="wl-name" data-wl-name="${d.id}" value="${esc(d.name)}" aria-label="词表名称" maxlength="40"><small>${L.words.length} 词 · 已学 ${learned}</small></div>
      <div class="wl-acts"><button class="btn" data-wl-study="${d.id}">只背这个</button><button class="btn-ghost" data-wl-share="${d.id}">分享链接</button><button class="btn-ghost" data-wl-dl="${d.id}">下载</button><button class="btn-ghost btn-danger" data-wl-del="${d.id}">删除</button></div>
      ${share}</div>`;
  }).join("")}</div>`;
}
function importHTML(){
  if(imp.step==="preview"){
    const rows = imp.rows, cnt = k => rows.filter(x => x.src===k).length;
    const sum = [["lex","个在内置词库里，使用词库的释义、例句，进度和词库通用"],["dict","个用离线查词表补全了释义"],["user","个用词表里自带的释义"],["ai","个由 AI 补全"],["none","个没有找到释义，可以在下面直接填写"]]
      .filter(([k]) => cnt(k)).map(([k,t]) => `<b>${cnt(k)}</b> ${t}`).join("；");
    const shown = rows.slice(0, 500);
    return `<section class="wl-import">
      <p class="section-label" style="margin:0">${imp.fromShare ? "同学分享的词表 · 预览" : "导入预览"}</p>
      ${imp.fromShare ? `<p class="note" style="margin:0">这是通过分享链接打开的词表，确认内容后点「保存词表」才会存到你的浏览器。</p>` : ""}
      <label class="field">词表名称<input id="wlName" value="${esc(imp.name)}" placeholder="例如：学术英语 Week 3" maxlength="40"></label>
      ${rows.length ? `<p class="note" style="margin:0">共 ${rows.length} 个词：${sum}。${imp.dup ? `重复的 ${imp.dup} 个已合并。` : ""}</p>` : `<p class="note" style="margin:0">正在查词…</p>`}
      ${imp.bad.length ? `<details class="panel"><summary>${imp.bad.length} 行没有识别（不是以英文单词开头）</summary><div class="body"><pre class="wl-bad">${esc(imp.bad.slice(0,50).join("\n"))}</pre></div></details>` : ""}
      ${imp.msg ? `<div class="fb no">${esc(imp.msg)}</div>` : ""}
      ${rows.length ? `<div class="tablewrap wl-table"><table><thead><tr><th>#</th><th>单词</th><th>释义</th><th>来源</th></tr></thead><tbody>
        ${shown.map((x,i) => `<tr><td class="note">${i+1}</td><td class="w">${esc(x.w)}</td><td>${x.src==="none"
            ? `<input class="wl-fix" data-wl-fix="${i}" placeholder="填写释义（可不填）" value="">`
            : esc([x.src==="lex" ? x.base.pos : x.pos, x.src==="lex" ? x.base.cn : x.cn].filter(Boolean).join(" ")) + (x.src==="lex" && x.cn && !x.base.cn.includes(x.cn) ? `<div class="note">词表释义：${esc(x.cn)}</div>` : "")}</td>
          <td><span class="chip ${SRC[x.src][1]}">${SRC[x.src][0]}</span></td></tr>`).join("")}
        ${rows.length>shown.length ? `<tr><td colspan="4" class="note">只显示前 500 个，保存时全部保留。</td></tr>` : ""}
      </tbody></table></div>` : ""}
      <div class="row"><button class="btn" id="wlSave" ${rows.length ? "" : "disabled"}>保存词表</button><button class="btn alt" id="wlBack">${imp.fromShare ? "不要了" : "返回修改"}</button>
        ${cnt("none") && App.hasAI() ? `<button class="btn alt" id="wlAI">用 AI 补全缺失的释义</button>` : ""}</div>
    </section>`;
  }
  return `<section class="wl-import">
    <p class="section-label" style="margin:0">导入新词表</p>
    <label class="field">词表名称<input id="wlName" value="${esc(imp.name)}" placeholder="例如：学术英语 Week 3" maxlength="40"></label>
    <label class="field">粘贴单词
      <textarea id="wlText" rows="8" spellcheck="false" placeholder="每行一个词，可以带词性和中文释义，例如：
abandon 放弃
abandon, v. 放弃
1. take into account 考虑
也可以从 Excel 里复制「单词」「释义」两列直接粘贴；只有单词也可以，会自动查释义">${esc(imp.text)}</textarea></label>
    <div class="row"><label class="btn alt" style="cursor:pointer">选择文件（.txt / .csv）<input type="file" id="wlFile" accept=".txt,.csv,text/plain,text/csv" hidden></label>
      <button class="btn" id="wlParse">识别单词</button></div>
    ${imp.msg ? `<div class="fb no">${esc(imp.msg)}</div>` : ""}
    <p class="note" style="margin:0">Excel 文件请先另存为 CSV，或者直接复制粘贴。没有释义的词会用离线词典（约 1.9 万词）自动补全。</p>
  </section>`;
}
function renderListsSheet(){
  const sheet = $("#sheet"), scroll = sheet.scrollTop;
  sheet.innerHTML = `<div class="meta"><b style="color:var(--ink);font-size:17px">我的词表</b><button class="x" id="closeSheet" aria-label="关闭">×</button></div>
    <p class="note" style="margin:0">把课程老师布置的单词导入进来，和内置词库一样用间隔重复来背，可以随机顺序。词表保存在这台电脑的浏览器里，会跟背词进度一起导出备份；想发给同学，用「分享链接」或「下载」。</p>
    ${wlMsg ? `<div class="fb ok">${esc(wlMsg)}</div>` : ""}
    ${listsRowsHTML()}
    ${importHTML()}`;
  sheet.scrollTop = scroll;
}
function openLists(){ $("#sheet").classList.add("wide"); wlMsg = ""; renderListsSheet(); $("#overlay").hidden = false; openWord = null }
function onListsInput(e){
  const t = e.target;
  if(t.id==="wlName"){ imp.name = t.value; return true }
  if(t.id==="wlText"){ imp.text = t.value; return true }
  if(t.dataset.wlFix!==undefined){ const x = imp.rows[+t.dataset.wlFix]; if(x){ x.cn = t.value.trim() } return true }
  if(t.dataset.wlName && e.type==="change"){
    const d = defOf(t.dataset.wlName), v = t.value.trim();
    if(d && v){ d.name = v.slice(0,40); rebuildCustom(store.custom); persist(); renderSettings() } else if(d) t.value = d.name;
    return true;
  }
  if(t.id==="wlFile" && t.files && t.files[0]){
    const f = t.files[0];
    if(f.size>2e6){ imp.msg = "文件太大（超过 2 MB）。"; renderListsSheet(); return true }
    IO.readFile(f).then(text => { imp.text = text; if(!imp.name) imp.name = f.name.replace(/\.[^.]+$/, "").slice(0,40); imp.msg = ""; parseImport() });
    return true;
  }
  return false;
}

/* ---------- 分析：个人薄弱词 ---------- */
const topN = (map, n=12) => Object.entries(map).filter(([w]) => BY[w.split("|")[0]]).sort((a,b) => b[1]-a[1]).slice(0,n);
function reviewWords(ws){
  ws = ws.filter(w => BY[w]);
  queue = [...ws, ...queue.filter(w => !ws.includes(w))];
  revealed = false; undo = null; showTab("study");
}
function wordChips(list){ return `<div class="an-words">${list.map(([w,extra]) => `<button class="an-w" data-detail="${esc(w)}"><b>${esc(w)}</b>${extra ? `<small>${extra}</small>` : ""}</button>`).join("")}</div>` }
function anBlock(title, desc, list, words){
  return `<section class="an-block"><div class="an-head"><div><h4>${title}</h4><p class="note">${desc}</p></div>
    ${words.length ? `<button class="btn alt" data-review="${esc(words.join("\n"))}">集中复习这 ${words.length} 个词</button>` : ""}</div>
    ${list.length ? wordChips(list) : `<p class="note empty">暂时还没有记录。</p>`}</section>`;
}
function renderAnalysis(){
  const T = today(), st = store.stats, cards = Object.entries(store.cards).filter(([w]) => BY[w]);
  const mast = cards.filter(([,c]) => c[1]>=21), manual = mast.filter(([,c]) => c[5]).length;
  const learning = cards.length - mast.length;
  let rv = 0, rk = 0, n7 = 0, r7 = 0;
  for(let d=T-6; d<=T; d++){ const L = store.log[keyOf(d)]; if(L){ rv += L.rv||0; rk += L.rk||0; n7 += L.n||0; r7 += L.r||0 } }
  const retention = rv ? Math.round(rk/rv*100) + "%" : "—";
  const qa = st.quiz[1] ? Math.round(st.quiz[0]/st.quiz[1]*100) + "%" : "—";
  // 经常忘记：「不认识」次数加上卡片记录的遗忘次数，取较大值
  const forgotMap = {}; Object.entries(st.forgot).forEach(([w,n]) => forgotMap[w] = n);
  cards.forEach(([w,c]) => { if(c[4]) forgotMap[w] = Math.max(forgotMap[w]||0, c[4]) });
  const forgot = topN(forgotMap).filter(([,n]) => n>=2);
  const spell = Object.entries(st.spell).filter(([w]) => BY[w]).sort((a,b) => b[1].n-a[1].n).slice(0,12);
  const conf = topN(st.confuse);
  const look = topN(st.look);
  // 难词：难度系数低的在学词
  const hard = cards.filter(([,c]) => c[1]<21 && c[2]<=190 && c[0]>0).sort((a,b) => a[1][2]-b[1][2]).slice(0,12);
  $("#pane-stats").innerHTML = `<div class="an">
    <div class="an-tiles">
      <div class="stat"><div class="k">已学</div><div class="v">${cards.length}</div></div>
      <div class="stat"><div class="k">已掌握</div><div class="v">${mast.length}<small>${manual ? ` 其中手动 ${manual}` : ""}</small></div></div>
      <div class="stat"><div class="k">学习中</div><div class="v">${learning}</div></div>
      <div class="stat"><div class="k">近 7 天复习记住率</div><div class="v">${retention}<small>${rv ? ` ${rk}/${rv}` : ""}</small></div></div>
      <div class="stat"><div class="k">近 7 天</div><div class="v">${n7}<small> 新词 · ${r7} 次复习</small></div></div>
      <div class="stat"><div class="k">测验正确率</div><div class="v">${qa}<small>${st.quiz[1] ? ` ${st.quiz[0]}/${st.quiz[1]}` : ""}</small></div></div>
    </div>
    <p class="note" style="margin:0">「复习记住率」是复习已学过的词时选「模糊」及以上的比例。数据只在这台电脑上统计，点任意一个词可以查看释义和它的个人记录。</p>
    ${anBlock("经常忘记的词", "背词时多次选「不认识」或复习时忘记的词。", forgot.map(([w,n]) => [w, `忘了 ${n} 次`]), forgot.map(([w]) => w))}
    ${anBlock("经常拼错的词", "听写拼写测验中拼错的词，后面是你最近写错的拼法。", spell.map(([w,e]) => [w, `${e.n} 次 · ${e.wrong.map(esc).join(" / ")}`]), spell.map(([w]) => w))}
    ${anBlock("容易混淆的词", "测验中把左边的词错选成右边那个词的释义或同义词。", conf.map(([k,n]) => [k.split("|")[0], `↔ ${esc(k.split("|")[1])} · ${n} 次`]), [...new Set(conf.flatMap(([k]) => k.split("|")))])}
    ${anBlock("还不稳的词", "正在学、但多次评为「不认识」或「模糊」的词（难度系数偏低）。", hard.map(([w,c]) => [w, `间隔 ${c[1]} 天`]), hard.map(([w]) => w))}
    ${anBlock("做题时查过的词", "在阅读、听力原文和范文里点开查看过的词，适合做完题后集中复盘。", look.map(([w,n]) => [w, `${n} 次`]), look.map(([w]) => w))}
  </div>`;
}

/* ---------- 标签页与事件 ---------- */
let curTab = "study";
function showTab(t){
  curTab = t;
  $$("#view-vocab .tab").forEach(b => b.setAttribute("aria-selected", b.dataset.tab===t));
  ["study","quiz","bank","stats"].forEach(k => $("#pane-"+k).hidden = k!==t);
  if(t==="bank") renderBank();
  if(t==="stats") renderAnalysis();
  if(t==="quiz" && !quiz) renderQuizSetup();
  if(t==="study") renderStudy();
  App.store.set("toefl.vocab.tab", t);
}
function renderAll(){ renderSettings(); renderStats(); renderStudy(); if(curTab==="bank") renderBank(); if(curTab==="quiz" && !quiz) renderQuizSetup(); if(curTab==="stats") renderAnalysis() }

function init(){
  $("#view-vocab").addEventListener("click", onClick);
  $("#overlay").addEventListener("click", e => { if(e.target.id==="overlay") closeDetail(); else onClick(e) });
  $("#search").addEventListener("input", renderBank);
  $("#setDaily").addEventListener("change", e => { store.settings.daily = +e.target.value; persist(); buildQueue(); renderStats(); renderStudy() });
  $("#setOrder").addEventListener("change", e => {
    store.settings.order = e.target.value;
    if(e.target.value==="rand") store.settings.seed = Math.floor(Math.random()*1e9);
    sourceChanged();
  });
  $("#overlay").addEventListener("change", onPickChange);
  $("#overlay").addEventListener("input", e => { if(e.target.id==="wlName" || e.target.id==="wlText" || e.target.dataset.wlFix!==undefined) onListsInput(e) });
  // 顶部切换托福 / 雅思后，换成对应的词库
  document.addEventListener("exam-change", () => { buildQueue(); renderSettings(); renderStats(); renderStudy(); if(curTab==="bank") renderBank(); if(curTab==="quiz" && !quiz) renderQuizSetup() });
  $("#setAuto").addEventListener("change", e => { store.settings.auto = e.target.checked; persist() });
  $("#setBasic").addEventListener("change", e => { store.settings.skipBasic = e.target.value; persist(); buildQueue(); renderStats(); renderStudy() });
  document.addEventListener("keydown", onKey);
  buildQueue();
  renderSettings();
  renderStats();
  const t = App.store.get("toefl.vocab.tab", "study");
  showTab(["study","quiz","bank","stats"].includes(t) ? t : "study");
  // 打开同学的分享链接：?wl=…；读完后把参数从地址栏去掉，刷新不会重复弹出
  const code = new URLSearchParams(location.search).get("wl");
  if(code){ history.replaceState(null, "", location.pathname + (location.hash || "#vocab")); openShared(code) }
}

function onClick(e){
  interacted = true;
  const t = e.target.closest("button,tr[data-detail]"); if(!t || !t.closest("#view-vocab,#overlay")) return;
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
  if(t.id==="closeSheet" || t.id==="pickDone"){ closeDetail(); return }
  if(t.id==="pickLists"){ openPicker(); return }
  if(t.id==="openLists" || t.dataset.openLists!==undefined){ openLists(); return }
  if(t.id==="wlParse"){ parseImport(); return }
  if(t.id==="wlSave"){ saveImport(); return }
  if(t.id==="wlBack"){ if(imp.fromShare) imp = { step:"edit", name:"", text:"", rows:[], bad:[], dup:0, msg:"", fromShare:false }; else { imp.step = "edit"; imp.msg = "" } renderListsSheet(); return }
  if(t.id==="wlAI"){ aiFill(t); return }
  if(t.dataset.wlStudy){ studyList(t.dataset.wlStudy); return }
  if(t.dataset.wlShare){ shareList(t.dataset.wlShare); return }
  if(t.dataset.wlDl){ downloadList(t.dataset.wlDl); return }
  if(t.dataset.wlCopy!==undefined){
    const inp = $("#wlShareUrl"); inp.select();
    const done = () => { t.textContent = "已复制"; setTimeout(() => { if(t.isConnected) t.textContent = "复制" }, 1500) };
    if(navigator.clipboard) navigator.clipboard.writeText(inp.value).then(done, () => { document.execCommand("copy"); done() }); else { document.execCommand("copy"); done() }
    return;
  }
  if(t.dataset.wlDel){
    if(t.dataset.armed){ deleteList(t.dataset.wlDel); return }
    t.dataset.armed = "1"; t.textContent = "再点一次确认删除";
    setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "删除" } }, 4000);
    return;
  }
  if(t.id==="pickNone"){ store.settings.lists = []; sourceChanged(); renderPicker(); return }
  if(t.id==="reshuffle"){ store.settings.seed = Math.floor(Math.random()*1e9); sourceChanged(); t.textContent = "已重新打乱"; setTimeout(() => { t.textContent = "重新打乱" }, 1500); return }
  if(t.id==="addQueue"){ queue.splice(Math.min(1, queue.length), 0, openWord); renderStudy(); openDetail(openWord); return }
  if(t.id==="masterBtn"){ markMastered(queue[0], true); renderStudy(); return }
  if(t.id==="undoMaster"){ undoMastered(); return }
  if(t.id==="masterDetail"){ markMastered(openWord, false); undo = null; renderStudy(); openDetail(openWord); if(curTab==="bank") renderBank(); if(curTab==="stats") renderAnalysis(); return }
  if(t.id==="unmaster"){ unmaster(openWord); renderStudy(); openDetail(openWord); if(curTab==="bank") renderBank(); if(curTab==="stats") renderAnalysis(); return }
  if(t.dataset.review){ reviewWords(t.dataset.review.split("\n")); return }
  if(t.id==="resetBtn"){
    if(t.dataset.armed){ store = Object.assign(blank(), { settings:store.settings, custom:store.custom }); buildQueue(); persist(); quiz = null; renderAll(); t.textContent = "清空背词记录"; delete t.dataset.armed; return }
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
    if(e.key==="m" || e.key==="M"){ markMastered(queue[0], true); renderStudy(); return }
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
// 只标出值得查的词：核心精编、精编补充、高频段以外的非基础词，以及「我的词表」里的词，避免满篇下划线
function addForms(map, o){
  if(o.w.includes(" ")) return;
  const w = o.w.toLowerCase(), base = w.replace(/e$/,"");
  [w, w+"s", w+"es", w+"ed", w+"d", w+"ing", base+"ing", base+"ed",
   w.replace(/y$/,"ies"), w.replace(/y$/,"ied"), w+"ly"].forEach(f => { if(!map[f]) map[f] = o.w });
}
const worthy = o => o.g==="core" || o.rich || (!o.basic && o.g!=="f1" && o.g!=="i1");
const FORMS = { toefl:{}, ielts:{} };
TOEFL_WORDS.forEach(o => { if(worthy(o)) addForms(FORMS.toefl, o) });
IELTS_WORDS.forEach(o => { if(worthy(o)) addForms(FORMS.ielts, o) });
const lookup = token => {
  const k = String(token).toLowerCase();
  if(!customForms){ customForms = {}; customWords().forEach(o => addForms(customForms, o)) }
  return FORMS[exam()][k] || customForms[k] || null;
};
// 把一段英文变成可点击的 HTML：词库单词加虚线下划线，正在学的词用实线强调
function linkify(text){
  return String(text).split(/([A-Za-z]+(?:'[a-z]+)?)/).map((p,i) => {
    if(i%2===0) return esc(p);
    const w = lookup(p.replace(/'[a-z]+$/, ""));
    if(!w) return esc(p);
    const c = store.cards[w], cls = c && c[1]<21 ? "vw lrn" : "vw";
    return `<span class="${cls}" data-vw="${esc(w)}" role="button" tabindex="0" title="${c && c[1]<21 ? "正在学的词" : "词库单词"}，点击查看">${esc(p)}</span>`;
  }).join("");
}
App.vocab = {
  // 考点页用：某个考试词库的学习进度
  progress: ex => { const ws = ex==="ielts" ? IELTS_WORDS : TOEFL_WORDS; let l = 0, m = 0; ws.forEach(o => { const c = store.cards[o.w]; if(c){ l++; if(c[1]>=21) m++ } }); return { learned:l, mastered:m, total:ws.length } },
  lookup, linkify,
  // 从做题页面打开：记一次「做题时查过」
  open: w => { if(!BY[w]) return; bump(store.stats.look, w); persist(); openDetail(w) }
};
// 页面上任何带 data-vw 的词都可以点开（阅读、听力原文、范文等）
document.addEventListener("click", e => { const v = e.target.closest("[data-vw]"); if(v && !v.closest("#overlay")) App.vocab.open(v.dataset.vw) });
document.addEventListener("keydown", e => { const v = e.target.closest && e.target.closest("[data-vw]"); if(v && e.key==="Enter") App.vocab.open(v.dataset.vw) });

App.routes.vocab = {
  init,
  enter(){ buildQueueIfStale(); renderStats(); if(curTab==="study") renderStudy(); if(curTab==="bank") renderBank() }
};
let builtDay = today();
function buildQueueIfStale(){ if(builtDay!==today()){ builtDay = today(); buildQueue() } }
})();
