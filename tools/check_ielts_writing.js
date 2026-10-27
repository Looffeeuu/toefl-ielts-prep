// 检查雅思写作题库：node tools/check_ielts_writing.js
// 范文字数是否达到要求；Task 1 范文里出现的数字是否都能在图表数据里找到（找不到的列出来人工核对，比如差值和合计）
const fs = require("fs"), path = require("path");
global.window = {};
eval(fs.readFileSync(path.join(__dirname, "../js/ielts-writing-data.js"), "utf8"));
const D = window.IELTS_WRITING;
let err = 0; const bad = (id, m) => { err++; console.log(`✗ ${id}: ${m}`) };
const words = t => (t.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*|\d+(?:[.,]\d+)*%?/g) || []).length;
const ids = new Set();
[...D.task1, ...D.task2].forEach(it => {
  if(ids.has(it.id)) bad(it.id, "id 重复"); ids.add(it.id);
  ["name","prompt","hint","model"].forEach(k => { if(!it[k]) bad(it.id, `缺 ${k}`) });
  if(!Array.isArray(it.phrases) || it.phrases.length<4) bad(it.id, "常用句型少于 4 条");
});
D.task1.forEach(it => {
  const n = words(it.model); if(n<150) bad(it.id, `范文只有 ${n} 词`);
  const c = it.chart, vals = new Set();
  if(it.kind==="line" || it.kind==="bar"){
    c.series.forEach(s => { if(s.values.length!==c.x.length) bad(it.id, `${s.name} 的数据个数和横轴不一致`); s.values.forEach(v => { vals.add(String(v)); if(v>c.yMax) bad(it.id, `${v} 超过 yMax`) }) });
    c.x.forEach(x => vals.add(x));
    if(c.series.length>5) bad(it.id, "系列超过 5 个，配色只校验了前 5 个");
  }else if(it.kind==="pie"){
    c.pies.forEach(p => { const s = p.values.reduce((a,b) => a+b, 0); if(s!==100) bad(it.id, `${p.title} 的百分比合计是 ${s}`); p.values.forEach(v => vals.add(String(v))); vals.add(p.title) });
  }else if(it.kind==="table"){
    c.rows.forEach(r => { if(r.length!==c.cols.length) bad(it.id, "表格列数不一致"); r.slice(1).forEach(v => { vals.add(String(v)); vals.add(Number(v).toFixed(1)); vals.add(String(v*1000).replace(/\B(?=(\d{3})+(?!\d))/g, ",")) }) });
  }
  const nums = (it.model.match(/\d[\d,]*(?:\.\d+)?/g) || []).map(x => x.replace(/,$/, ""));
  const unknown = [...new Set(nums.filter(x => !vals.has(x) && !vals.has(x.replace(/,/g, ""))))];
  if(unknown.length) console.log(`  ${it.id} 范文中不在图表里的数字（请人工核对是否为差值、合计或年份区间）：${unknown.join(", ")}`);
});
D.task2.forEach(it => {
  const n = words(it.model); if(n<250) bad(it.id, `范文只有 ${n} 词`);
  if(!/\bIn conclusion\b/.test(it.model)) bad(it.id, "范文没有结论段");
  console.log(`  ${it.id}：${n} 词，${it.model.split(/\n\s*\n/).length} 段`);
});
// 范文应该能通过页面上的自动检查，否则说明检查规则太严或范文需要修改
global.App = { $:() => null, esc:s => s, shuffle:a => a, store:{ get:() => null, set(){} }, KEYS:{}, routes:{} }; window.App = App;
eval(fs.readFileSync(path.join(__dirname, "../js/ielts-writing.js"), "utf8").replace(/\}\)\(\);\s*$/, "App._analyze = analyze; })();"));
[...D.task1, ...D.task2].forEach(it => {
  const fails = App._analyze(it.model, it).checks.filter(c => !c[0]).map(c => c[1]);
  if(fails.length) bad(it.id, "范文没有通过自动检查：" + fails.join("；"));
});
console.log(`Task 1 ${D.task1.length} 题，Task 2 ${D.task2.length} 题`);
console.log(err ? `共 ${err} 个问题` : "全部通过");
process.exit(err ? 1 : 0);
