// 检查例句组句的自动切块：node tools/check_sentence_gen.js [抽样数]
// 统计能出题的例句数、块数分布、有干扰块的比例，并检查每题的块拼回去正好是原句、干扰块不和正确块重复
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "../js");
global.window = {}; global.App = {};
fs.readdirSync(dir).filter(f => /^words.*\.js$/.test(f)).forEach(f => eval(fs.readFileSync(path.join(dir, f), "utf8")));
eval(fs.readFileSync(path.join(dir, "sentence-gen.js"), "utf8"));
const G = App.sentenceGen;

// 词性表（小写词 → 词性）和全部例句（只取第一句，去掉词性标签）
const POS = {}, ex = [];
// 只收小写词条：Russia 这类专有名词不算普通词
const addPos = (w, pos) => { if(w && w === w.toLowerCase() && !(w in POS)) POS[w] = pos || "" };
// 多词性例句以词性开头、用 ## 分隔：拆开逐句出题
const addEx = (w, raw) => (raw||"").split(" ## ").forEach(e => { e = e.replace(/^(n|vt|vi|v|adj|adv|prep|conj|pron|int)\.\s+/, "").trim(); if(e) ex.push([w, e]) });
window.TOPICS.forEach(t => t.raw.trim().split(/\r?\n/).forEach(l => { const [w,pos,,,e] = l.split("|").map(s => (s||"").trim()); addPos(w,pos); addEx(w,e) }));
Object.keys(window).filter(k => /^RICH_WORDS(_\d+)?$/.test(k)).forEach(k => window[k].trim().split(/\r?\n/).forEach(l => { const [w,pos,,,e] = l.split("|").map(s => (s||"").trim()); addPos(w,pos); addEx(w,e) }));
window.EXT_WORDS.split("\n").forEach(l => { const [w,,pos] = l.split("\t"); addPos(w,pos) });
window.IELTS_WORDS.split("\n").forEach(l => { const [w,,pos] = l.split("\t"); addPos(w,pos) });
Object.keys(window).filter(k => /^(EX_WORDS|POS_WORDS)_\d+$/.test(k)).forEach(k => window[k].trim().split(/\r?\n/).forEach(l => {
  const f = l.split("|"); addEx(f[0].trim(), f[f.length-1]);
}));
const lex = w => (w in POS) ? POS[w] : null;

let ok = 0, bad = 0, skipped = 0, withDis = 0, fixedN = 0; const dist = {}, samples = [];
let seed = +(process.env.SEED || 7); const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
ex.forEach(([w, e]) => {
  if(!G.usable(e)) return;
  const q = G.build(e, w, lex, rnd);
  if(!q){ skipped++; return }
  const joined = q.chunks.map(c => c.text).join(" ") + q.punct;
  // 拼回去应该和原句一致（句首大小写可以不同）
  if(joined.toLowerCase() !== e.trim().toLowerCase() || q.distractors.some(d => q.chunks.some(c => c.text === d)) || q.chunks.length < 4 || q.chunks.length > 7){
    bad++; if(bad <= 10) console.log("✗", e, "→", q.chunks.map(c => c.text).join(" / ")); return;
  }
  ok++; dist[q.chunks.length] = (dist[q.chunks.length]||0) + 1;
  if(q.distractors.length) withDis++;
  if(q.chunks.some(c => c.fixed)) fixedN++;
  samples.push([w, q]);
});
console.log(`例句共 ${ex.length} 条，能出题 ${ok} 条（切不出合适块数跳过 ${skipped} 条，${bad} 条切块异常）；块数分布`, dist, `；有干扰块 ${Math.round(withDis/ok*100)}%，有固定块 ${Math.round(fixedN/ok*100)}%`);
const n = +(process.argv[2] || 0);
for(let i = 0; i < n; i++){
  const [w, q] = samples[Math.floor(rnd() * samples.length)];
  console.log(`${w.padEnd(14)} ${q.chunks.map(c => c.fixed ? "[" + c.text + "]" : c.text).join(" / ")}${q.punct}   干扰：${q.distractors[0] || "—"}`);
}
process.exit(bad ? 1 : 0);
