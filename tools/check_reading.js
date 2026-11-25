// 检查托福阅读题库格式：node tools/check_reading.js
const fs = require("fs"), path = require("path");
global.window = {};
eval(fs.readFileSync(path.join(__dirname, "../js/reading-data.js"), "utf8"));
const R = window.READING, TYPES = ["main","detail","vocab","infer","purpose","negative","tone","structure"];
let err = 0; const bad = (id, m) => { err++; console.log(`✗ ${id}: ${m}`) };
const ids = new Set();
["ctw","daily","academic"].forEach(k => R[k].forEach(it => {
  if(ids.has(it.id)) bad(it.id, "id 重复"); ids.add(it.id);
  if(![1,2,3].includes(it.level)) bad(it.id, "level 应为 1–3");
  if(!it.title || !it.text) bad(it.id, "缺标题或正文");
}));
// 补全单词：第一句之后要能挖出 10 个空（与 js/reading.js 的 buildCtw 规则一致）
R.ctw.forEach(it => {
  const parts = it.text.split(/(\s+)/), firstEnd = parts.findIndex(p => /[.!?]$/.test(p));
  let count = 0, blanks = 0;
  parts.forEach((p,i) => {
    if(i<=firstEnd || blanks>=10 || /^\s*$/.test(p)) return;
    const m = p.match(/^([A-Za-z]+)([^A-Za-z]*)$/); if(!m) return;
    count++; if(count%2===0 && m[1].length>=2) blanks++;
  });
  if(blanks<10) bad(it.id, `只能挖出 ${blanks} 个空`);
});
const all = [];
["daily","academic"].forEach(k => R[k].forEach(it => it.qs.forEach((q,i) => {
  if(!TYPES.includes(q.type)) bad(it.id, `第 ${i+1} 题题型未知 ${q.type}`);
  if(q.opts.length!==4 || new Set(q.opts).size!==4) bad(it.id, `第 ${i+1} 题选项不是 4 个不同选项`);
  if(!q.q || !q.why) bad(it.id, `第 ${i+1} 题缺题干或解析`);
  if(q.hl && !it.text.toLowerCase().includes(q.hl.toLowerCase())) bad(it.id, `第 ${i+1} 题高亮词 ${q.hl} 不在原文中`);
  all.push(q.opts);
})));
// 正确答案不应总是最长的选项（否则「选最长」就能蒙对）
const longest = all.filter(o => { const m = Math.max(...o.map(x => x.length)); return o[0].length===m && o.filter(x => x.length===m).length===1 }).length;
const ratio = longest/all.length;
console.log(`正确答案是唯一最长选项：${longest}/${all.length}（${Math.round(ratio*100)}%）`);
if(ratio>0.35) bad("全部", "正确答案过多地是最长选项");
const cnt = list => [1,2,3].map(l => list.filter(x => x.level===l).length).join("/");
console.log(`补全单词 ${cnt(R.ctw)}；日常阅读 ${cnt(R.daily)}；学术文章 ${cnt(R.academic)}（基础/标准/提高）`);
console.log(err ? `共 ${err} 个问题` : "全部通过");
process.exit(err ? 1 : 0);
