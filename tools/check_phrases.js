// 检查常用搭配（js/words-phrase-*.js）和一词多义例句（js/words-sense-*.js）：node tools/check_phrases.js
// 搭配：词要在词库里，每条都是「短语=释义」，短语里要有这个词（或它的变形），名词、形容词的搭配词可以在前面（make a decision / be aware of）
// 多义例句：至少两个意思，每句都能找到这个词（含不规则变形），有句末标点，没有中文
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "../js");
global.window = {};
fs.readdirSync(dir).filter(f => /^(words.*|irregular-verbs)\.js$/.test(f)).forEach(f => eval(fs.readFileSync(path.join(dir, f), "utf8")));
const words = new Set();
window.TOPICS.forEach(t => t.raw.trim().split(/\r?\n/).forEach(l => words.add(l.split("|")[0].trim())));
Object.keys(window).filter(k => /^RICH_WORDS(_\d+)?$/.test(k)).forEach(k => window[k].trim().split(/\r?\n/).forEach(l => words.add(l.split("|")[0].trim().toLowerCase())));
window.EXT_WORDS.split("\n").forEach(l => words.add(l.split("\t")[0]));
window.IELTS_WORDS.split("\n").forEach(l => words.add(l.split("\t")[0]));
const IRR = {};
window.IRREGULAR_VERBS.trim().split(/\r?\n/).forEach(l => { const [w, a, b] = l.split("|"); IRR[w] = [a, b].join(" / ").split(" / ").map(s => s.trim()) });
// 不规则复数
const PLURAL = { criterion:"criteria", medium:"media", phenomenon:"phenomena", stimulus:"stimuli", larva:"larvae", analysis:"analyses", hypothesis:"hypotheses", crisis:"crises", thesis:"theses", nucleus:"nuclei", fungus:"fungi", datum:"data", bacterium:"bacteria", alga:"algae", formula:"formulae", stratum:"strata", index:"indices", appendix:"appendices", axis:"axes", basis:"bases", oasis:"oases", child:"children", foot:"feet", tooth:"teeth", mouse:"mice", man:"men", woman:"women", person:"people", goose:"geese" };
// 这个词在文本里可能出现的写法：原形、规则变化、不规则变化
function forms(w){
  const b = w.replace(/e$/, ""), y = w.replace(/y$/, "i"), last = w[w.length-1];
  return [w, w+"s", w+"es", w+"ed", w+"d", w+"ing", b+"ing", b+"ed", y+"es", y+"ed", w+last+"ed", w+last+"ing", w+"ly", w+"er", w+"est", y+"er", y+"est", w+last+"er", w+last+"est", w.replace(/fe?$/, "ves"), ...(IRR[w] || []), ...(PLURAL[w] ? [PLURAL[w]] : [])];
}
const has = (text, w) => forms(w).some(f => new RegExp("\\b" + f + "\\b", "i").test(text));

let bad = 0, nP = 0, nS = 0;
const err = m => { bad++; console.log("✗ " + m) };
const seenP = new Set(), seenS = new Set();
Object.keys(window).filter(k => /^PHRASE_WORDS_\d+$/.test(k)).forEach(k => window[k].trim().split(/\r?\n/).forEach(line => {
  const i = line.indexOf("|"), w = line.slice(0, i).trim();
  if(i < 0 || !words.has(w)){ err(`${k} 词库里没有：${line.slice(0, 30)}`); return }
  if(seenP.has(w)){ err(`${k} 重复：${w}`); return }
  seenP.add(w); nP++;
  line.slice(i+1).split(/;\s+/).forEach(item => {
    const [p, cn] = item.split("=");
    if(!p || !cn || item.split("=").length !== 2) err(`${k} ${w} 格式不对：${item}`);
    else if(!has(p, w)) err(`${k} ${w} 短语里找不到这个词：${p}`);
    else if(p.trim().split(/[\s-]+/).length < 2) err(`${k} ${w} 搭配至少两个词：${p}`);
    if(/[；;]\s*[a-z]/i.test(cn || "")) err(`${k} ${w} 释义里混进了下一条（分隔符要用英文分号）：${item}`);
  });
}));
Object.keys(window).filter(k => /^SENSE_WORDS_\d+$/.test(k)).forEach(k => window[k].trim().split(/\r?\n/).forEach(line => {
  const i = line.indexOf("|"), w = line.slice(0, i).trim();
  if(i < 0 || !words.has(w)){ err(`${k} 词库里没有：${line.slice(0, 30)}`); return }
  if(seenS.has(w)){ err(`${k} 重复：${w}`); return }
  seenS.add(w); nS++;
  const items = line.slice(i+1).split(" ## ");
  if(items.length < 2) err(`${k} ${w} 至少要两个意思`);
  items.forEach(item => {
    const j = item.indexOf("="), sense = item.slice(0, j).trim(), ex = item.slice(j+1).trim();
    if(j < 0 || !sense || !ex){ err(`${k} ${w} 格式不对：${item}`); return }
    if(!has(ex, w)) err(`${k} ${w} 例句里找不到这个词：${ex}`);
    if(!/[.!?]["”’)]?$/.test(ex)) err(`${k} ${w} 例句没有句末标点：${ex}`);
    if(/[一-龥]/.test(ex)) err(`${k} ${w} 例句里有中文：${ex}`);
  });
}));
console.log(`常用搭配 ${nP} 个词，一词多义例句 ${nS} 个词`);
console.log(bad ? `${bad} 个问题` : "全部通过");
process.exit(bad ? 1 : 0);
