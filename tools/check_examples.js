// 检查补充例句（js/words-ex-*.js）：node tools/check_examples.js [--missing 输出文件]
// 词要在词库里、原来没有例句、例句里能找到这个词（背词卡片高亮和拼写题挖空都靠它），并统计还缺例句的词
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "../js");
global.window = {};
fs.readdirSync(dir).filter(f => /^words.*\.js$/.test(f)).sort().forEach(f => eval(fs.readFileSync(path.join(dir, f), "utf8")));

// 按 vocab.js 的顺序建词库：核心精编 → 扩展词库（精编补充覆盖）→ 多词性补充 → 雅思词库
const BY = {}, toefl = new Set(), ielts = new Set();
window.TOPICS.forEach(t => t.raw.trim().split(/\r?\n/).forEach(l => { const [w,pos,cn,syn,ex] = l.split("|").map(s => (s||"").trim()); if(w && !BY[w]){ BY[w] = { w, pos, cn, ex }; toefl.add(BY[w]) } }));
const RICH = {};
Object.keys(window).filter(k => /^RICH_WORDS(_\d+)?$/.test(k)).map(k => window[k]).join("\n").trim().split(/\r?\n/).forEach(l => { const [w,pos,cn,syn,ex] = l.split("|").map(s => (s||"").trim()); if(w) RICH[w.toLowerCase()] = { pos, cn, ex } });
window.EXT_WORDS.split("\n").forEach(l => { let [w,ph,pos,cn,tier,flag] = l.split("\t"); if(!w || !/^f\d$/.test(tier)) return; const r = RICH[w.toLowerCase()]; if(r) w = w.toLowerCase(); if(BY[w]) return; BY[w] = r ? { w, pos:r.pos, cn:r.cn, ex:r.ex, g:tier } : { w, pos, cn, ex:"", g:tier, basic:flag }; toefl.add(BY[w]) });
Object.keys(window).filter(k => /^POS_WORDS_\d+$/.test(k)).map(k => window[k]).join("\n").trim().split(/\r?\n/).forEach(l => { const [w,pos,cn,exs] = l.split("|").map(s => (s||"").trim()); const o = BY[w] || BY[(w||"").toLowerCase()]; if(o && exs) o.ex = exs });
window.IELTS_WORDS.split("\n").forEach(l => { const [w,ph,pos,cn,tier,flag] = l.split("\t"); if(!w || !/^i\d$/.test(tier)) return; let o = BY[w] || BY[w.toLowerCase()]; if(!o) o = BY[w] = { w, pos, cn, ex:"", g:tier, basic:flag }; ielts.add(o) });

// 和 vocab.js 的 hlRe 一致
function hlRe(w){ const stem = (w.length>5 || /[a-z]y$/.test(w)) ? w.slice(0,-1) : w; return new RegExp("\\b(" + stem.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + "\\w*)","i") }
const EX_LAB = /^(n|vt|vi|v|adj|adv|prep|conj|pron|int)\.\s+/;

let bad = 0, n = 0;
const seen = new Set(), err = m => { bad++; console.log("✗ " + m) };
Object.keys(window).filter(k => /^EX_WORDS_\d+$/.test(k)).sort((a,b) => +a.split("_")[2] - +b.split("_")[2]).forEach(k => {
  window[k].trim().split(/\r?\n/).forEach(line => {
    const i = line.indexOf("|");
    if(i<0){ err(`${k} 缺少 |：${line}`); return }
    const w = line.slice(0,i).trim(), raw = line.slice(i+1).trim(), o = BY[w] || BY[w.toLowerCase()];
    if(!o){ err(`${k} 词库里没有：${w}`); return }
    if(seen.has(o.w)){ err(`${k} 重复：${w}`); return }
    seen.add(o.w);
    if(o.ex){ err(`${k} 原来已有例句：${w}`); return }
    raw.split(" ## ").forEach(s => {
      const text = s.trim().replace(EX_LAB, "");
      if(!hlRe(o.w).test(text)) err(`${k} 例句里找不到 ${w}：${text}`);
      if(!/[.!?]["”’)]?$/.test(text)) err(`${k} 例句没有句末标点：${w}`);
      if(text.length > 180) err(`${k} 例句太长（${text.length}）：${w}`);
      if(/[一-龥]/.test(text)) err(`${k} 例句里有中文：${w}`);
    });
    o.ex = raw; n++;
  });
});
const all = new Set([...toefl, ...ielts]);
const miss = [...all].filter(o => !o.ex);
console.log(`补充例句 ${n} 条；全部 ${all.size} 词，还缺例句 ${miss.length} 词（托福 ${miss.filter(o => toefl.has(o)).length}，雅思 ${miss.filter(o => ielts.has(o)).length}）`);
const at = process.argv.indexOf("--missing");
if(at>0) fs.writeFileSync(process.argv[at+1], miss.map(o => [o.w, o.pos, o.cn, o.g||"", o.basic||""].join("\t")).join("\n"));
console.log(bad ? `${bad} 个问题` : "全部通过");
process.exit(bad ? 1 : 0);
