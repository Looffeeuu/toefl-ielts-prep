// 检查听力题库格式：node tools/check_listening.js
const fs = require("fs"), path = require("path");
global.window = {};
eval(fs.readFileSync(path.join(__dirname, "../js/listening-data.js"), "utf8"));
const L = window.LISTENING, TYPES = ["response","main","detail","purpose","function","infer","attitude","organization"];
let err = 0; const bad = (id, m) => { err++; console.log(`✗ ${id}: ${m}`) };
const ids = new Set(), seen = id => { if(ids.has(id)) bad(id, "id 重复"); ids.add(id) };
const words = s => s.replace(/^[WM]:\s*/gm, "").split(/\s+/).filter(Boolean).length;
function checkQs(it, n){
  if(it.qs.length!==n) bad(it.id, `应有 ${n} 题，实际 ${it.qs.length}`);
  it.qs.forEach((q,i) => {
    if(!TYPES.includes(q.type)) bad(it.id, `第 ${i+1} 题题型未知 ${q.type}`);
    if(q.opts.length!==4 || new Set(q.opts).size!==4) bad(it.id, `第 ${i+1} 题选项不是 4 个不同选项`);
    if(!q.why || !q.q) bad(it.id, `第 ${i+1} 题缺题干或解析`);
  });
}
L.responseSets.forEach(s => {
  seen(s.id);
  const lines = s.items.trim().split("\n");
  if(lines.length!==10) bad(s.id, `应有 10 句，实际 ${lines.length}`);
  lines.forEach((l,i) => { const f = l.split("|"); if(f.length!==6) bad(s.id, `第 ${i+1} 行字段数 ${f.length}`); else if(new Set(f.slice(1,5)).size!==4) bad(s.id, `第 ${i+1} 行选项重复`) });
});
const range = { conv:[35,110], ann:[40,90], talk:[175,250] };
[["conv",L.conversations,2],["ann",L.announcements,2],["talk",L.talks,4]].forEach(([k,list,n]) => list.forEach(it => {
  seen(it.id); checkQs(it, n);
  if(![1,2,3].includes(it.level)) bad(it.id, "level 应为 1–3");
  if(k==="conv" && it.script.split("\n").some(l => !/^[WM]: \S/.test(l))) bad(it.id, "对话每行应以 W: 或 M: 开头");
  if(k!=="conv" && !/^[WM]$/.test(it.speaker)) bad(it.id, "缺 speaker");
  const w = words(it.script), [lo,hi] = range[k];
  if(w<lo || w>hi) bad(it.id, `${w} 词，超出 ${lo}–${hi}`);
}));
// 正确答案不应总是最长的选项（否则「选最长」就能蒙对）
const all = [];
L.responseSets.forEach(s => s.items.trim().split("\n").forEach(l => all.push(l.split("|").slice(1,5))));
[L.conversations, L.announcements, L.talks].forEach(list => list.forEach(it => it.qs.forEach(q => all.push(q.opts))));
const longest = all.filter(o => { const m = Math.max(...o.map(x => x.length)); return o[0].length===m && o.filter(x => x.length===m).length===1 }).length;
const ratio = longest/all.length;
console.log(`正确答案是唯一最长选项：${longest}/${all.length}（${Math.round(ratio*100)}%）`);
if(ratio>0.35) bad("全部", "正确答案过多地是最长选项");
const cnt = (list) => [1,2,3].map(l => list.filter(x => x.level===l).length).join("/");
console.log(`选回应 ${L.responseSets.length} 套；对话 ${cnt(L.conversations)}；通知 ${cnt(L.announcements)}；讲座 ${cnt(L.talks)}（基础/标准/提高）`);
console.log(err ? `共 ${err} 个问题` : "全部通过");
process.exit(err ? 1 : 0);
