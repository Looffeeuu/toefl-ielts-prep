// 检查记忆线索（js/words-memo-*.js）：node tools/check_memo.js
// 词要在词库里、不重复；拆分的各部分连起来要正好是这个词；线索里要有「→」把拆分串到词义
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "../js");
global.window = {};
fs.readdirSync(dir).filter(f => /^words.*\.js$/.test(f)).forEach(f => eval(fs.readFileSync(path.join(dir, f), "utf8")));
const words = new Set(), core = [];
window.TOPICS.forEach(t => t.raw.trim().split(/\r?\n/).forEach(l => { const w = l.split("|")[0].trim(); words.add(w); core.push(w) }));
window.EXT_WORDS.split("\n").forEach(l => { const w = l.split("\t")[0]; if(w) words.add(w.toLowerCase()) });
window.IELTS_WORDS.split("\n").forEach(l => { const w = l.split("\t")[0]; if(w) words.add(w.toLowerCase()) });

let bad = 0, n = 0;
const seen = new Set(), err = m => { bad++; console.log("✗ " + m) };
Object.keys(window).filter(k => /^MEMO_WORDS_\d+$/.test(k)).forEach(k => {
  window[k].trim().split(/\r?\n/).forEach(line => {
    const f = line.split("|");
    if(f.length !== 4){ err(`${k} 应该有 4 栏：${line}`); return }
    const [w, split, note] = f.map(x => x.trim());
    if(!words.has(w) && !words.has(w.toLowerCase())){ err(`${k} 词库里没有：${w}`); return }
    if(seen.has(w)){ err(`${k} 重复：${w}`); return }
    seen.add(w); n++;
    if(split && split.split("·").map(x => x.trim()).join("") !== w.toLowerCase()) err(`${k} 拆分拼不回原词：${w} ≠ ${split}`);
    if(!note.includes("→")) err(`${k} 线索里没有 →：${w}`);
  });
});
const without = core.filter(w => !seen.has(w));
console.log(`记忆线索 ${n} 条；核心精编 ${core.length} 词中 ${core.length - without.length} 个有线索`);
console.log(`没有线索的核心词（${without.length}）：${without.join(" ")}`);
console.log(bad ? `${bad} 个问题` : "全部通过");
process.exit(bad ? 1 : 0);
