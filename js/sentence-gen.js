/* 例句组句：把词库例句自动切成词块，生成 Build a Sentence 式的练习题。
   切块规则：冠词、介词、助动词、形容词等跟后面的词连在一起，所以块不会以 the / to / can 结尾；一句切成 4–7 块，
   切不出合适块数的句子直接跳过。句末的时间 / 地点状语（in …、every …）固定住，减少"别的顺序也通"的情况；
   再加一个明显错误的语法干扰块（is↔are、a↔an、his↔him…），不用介词互换，免得干扰块本身也说得通。
   自动切块难免还有别的合理顺序，所以界面上允许"我的也通顺"。 */
(function(){
// 跟后面的词连成一块的功能词
const FWD = new Set(("a an the to of in on at for with by from into onto about as like than during through across along " +
  "among between without within under over behind beyond toward towards against upon via near around despite per " +
  "my your his her its our their this that these those some any each every no not very too so more most less such both either neither " +
  "and or but if when because while although since until after before whose who which what where how " +
  "can could will would should must may might shall do does did don't doesn't didn't can't won't isn't aren't wasn't " +
  "is are was were be been being am has have had i he she we they it there you").split(" "));
// 句末这些词开头的块是可移动的状语，固定住
const ADVERBIAL = /^(in|on|at|for|during|after|before|since|every|last|next|this|each|by|until|throughout|across|around|near|with)\b/i;
// 干扰块：把块里的一个词换成另一个明显错误的语法形式
const SWAP = { is:"are", are:"is", was:"were", were:"was", has:"have", have:"has", does:"do", do:"does",
  a:"an", an:"a", much:"many", many:"much", this:"these", these:"this", that:"those", those:"that",
  his:"him", their:"them", than:"then" };

// 适合出题的句子：7–16 个词，不含引号、括号、分号、冒号，最多一个逗号
function usable(s){
  if(!s || /["“”()\[\];:]/.test(s)) return false;
  if((s.match(/,/g) || []).length > 1) return false;
  const m = s.trim().match(/^(.*?)([.?!])$/); if(!m) return false;
  const n = m[1].split(/\s+/).length;
  return n >= 7 && n <= 16;
}

// 这个词要不要连到后面：功能词、只作形容词的词、-ly 副词
function attaches(word, lex){
  const bare = word.replace(/,$/, "").toLowerCase();
  if(FWD.has(bare)) return true;
  const pos = lex(bare) || "";
  if(/^adj\.$/.test(pos)) return true;
  return /ly$/.test(bare) && /adv\./.test(pos) && !/\bn\.|\bv[ti]?\./.test(pos);
}
// 切块；切不出 4–7 块就返回 null
function chunk(words, lex){
  const out = []; let cur = [];
  words.forEach((w, i) => {
    cur.push(w);
    if(i === words.length - 1 || /,$/.test(w) || !attaches(w, lex)){ out.push(cur); cur = [] }
  });
  // 块太多：把最短的相邻两块合并（不跨逗号）
  while(out.length > 7){
    let best = -1, len = Infinity;
    for(let i=0;i<out.length-1;i++){ const l = out[i].length + out[i+1].length; if(l < len && !/,$/.test(out[i][out[i].length-1])){ len = l; best = i } }
    if(best < 0) return null;
    out.splice(best, 2, out[best].concat(out[best+1]));
  }
  // 块太少：在最长的块里找一个不在功能词后面的切点
  while(out.length < 4){
    let pick = null;
    out.forEach((c, i) => { for(let k = c.length - 1; k >= 1; k--){ if(!attaches(c[k-1], lex) && (!pick || c.length > out[pick[0]].length)){ pick = [i, k]; break } } });
    if(!pick) return null;
    const [i, k] = pick, c = out[i];
    out.splice(i, 1, c.slice(0, k), c.slice(k));
  }
  if(out.some(c => c.length > 5)) return null;
  return out.map(c => c.join(" "));
}

// lex(word) → 词库里这个小写词条的词性（没有、或词库里只有大写形式如 Russia，返回 null）；
// 用来判断句首大写是不是普通词、形容词要不要连到后面
const inLex = (w, lex) => lex(w) != null || lex(w.replace(/(es|s)$/, "")) != null || lex(w.replace(/ies$/, "y")) != null;
function build(sentence, keyword, lex, rnd){
  rnd = rnd || Math.random;
  const m = sentence.trim().match(/^(.*?)([.?!])$/);
  if(!m) return null;
  const words = m[1].split(/\s+/), punct = m[2];
  // 句首的词：确定是普通词就改成小写，否则一眼就能看出谁在开头；
  // 判断不了的（人名、地名、词库里没有的词）保留大写，并把第一块固定住
  const w0 = words[0], low0 = w0.replace(/['’]s$|,$/g, "").toLowerCase();
  const plain = w0 !== "I" && !/^[A-Z]{2,}/.test(w0) && !/^[A-Z]/.test(words[1] || "") && (FWD.has(low0) || inLex(low0, lex));
  if(plain) words[0] = w0[0].toLowerCase() + w0.slice(1);
  const texts = chunk(words, lex);
  if(!texts) return null;
  const chunks = texts.map(t => ({ text:t, fixed:false }));
  if(!plain) chunks[0].fixed = true;
  // 句末的状语块固定住（关键词所在的块除外）
  const lastC = chunks[chunks.length-1];
  if(chunks.length >= 5 && ADVERBIAL.test(lastC.text) && !lastC.text.toLowerCase().includes(keyword.toLowerCase())) lastC.fixed = true;
  // 能动的块至少 3 个，不然没什么可排的
  if(chunks.filter(c => !c.fixed).length < 3) return null;
  // 干扰块：在没固定的块里找一个可替换的词
  let distractor = "";
  const order = chunks.map((c,i) => i).filter(i => !chunks[i].fixed).sort(() => rnd() - .5);
  for(const i of order){
    const ws = chunks[i].text.split(" ");
    const j = ws.findIndex(w => SWAP[w.toLowerCase()]);
    if(j >= 0){
      const alt = ws.slice(), rep = SWAP[ws[j].toLowerCase()];
      alt[j] = /^[A-Z]/.test(ws[j]) ? rep[0].toUpperCase() + rep.slice(1) : rep;
      const t = alt.join(" ");
      if(!texts.includes(t)){ distractor = t; break }
    }
  }
  return { chunks, punct, distractors: distractor ? [distractor] : [], sentence: sentence.trim() };
}

App.sentenceGen = { usable, build };
})();
