// 检查雅思阅读、听力题库：node tools/check_ielts.js
// 题量、题组格式、选项字母、填空答案的字数，以及填空答案是否真的出现在文章或录音原文里
const fs = require("fs"), path = require("path");
global.window = {};
["ielts-reading-data.js","ielts-listening-data.js"].forEach(f => eval(fs.readFileSync(path.join(__dirname, "../js", f), "utf8")));
const R = window.IELTS_READING, L = window.IELTS_LISTENING;
const ROMAN = ["i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii"];
let err = 0; const bad = (id, m) => { err++; console.log(`✗ ${id}: ${m}`) };
const norm = s => String(s).toLowerCase().replace(/[’]/g, "'").replace(/\s+/g, " ");
const words = s => s.trim().split(/\s+/).length;

function checkGroups(id, groups, text, paras){
  let n = 0;
  const flatText = norm(text);
  groups.forEach((g,gi) => {
    const tag = `${id} 第 ${gi+1} 组 (${g.type})`;
    if(!g.instr) bad(tag, "缺 instr");
    const items = g.items.filter(it => !it.label);
    n += items.length;
    items.forEach((it,k) => {
      const t = `${tag} 第 ${k+1} 题`;
      if(!it.q) bad(t, "缺题干");
      if(!it.why) bad(t, "缺解析");
      if(g.type==="tfng" && !["TRUE","FALSE","NOT GIVEN"].includes(it.a)) bad(t, "答案应为 TRUE/FALSE/NOT GIVEN");
      if(g.type==="ynng" && !["YES","NO","NOT GIVEN"].includes(it.a)) bad(t, "答案应为 YES/NO/NOT GIVEN");
      if(g.type==="headings" && !ROMAN.slice(0, g.options.length).includes(it.a)) bad(t, `标题编号 ${it.a} 不在选项范围内`);
      if(g.type==="match"){
        const letters = g.options==="paras" ? paras : g.options.map(o => o[0]);
        if(!letters || !letters.includes(it.a)) bad(t, `答案 ${it.a} 不在选项字母中`);
      }
      if(g.type==="mcq" && !(Number.isInteger(it.a) && it.a>=0 && it.a<it.opts.length)) bad(t, "mcq 答案序号越界");
      if(g.type==="mcq" && new Set(it.opts).size!==it.opts.length) bad(t, "mcq 选项重复");
      if(g.type==="gap"){
        if(!Array.isArray(it.a) || !it.a.length) bad(t, "填空答案应为非空数组");
        else{
          if(g.maxWords && words(it.a[0])>g.maxWords) bad(t, `首选答案「${it.a[0]}」超过 ${g.maxWords} 个词`);
          // 首选答案（数字除外）应该在原文中出现
          if(!/^\d/.test(it.a[0]) && !flatText.includes(norm(it.a[0]))) bad(t, `答案「${it.a[0]}」没有出现在原文中`);
          if(g.flow===undefined && !it.q.includes("___") && !/\?$/.test(it.q)) bad(t, "填空题题干应包含 ___ 或以问号结尾");
        }
      }
    });
    if(g.type==="headings" && new Set(g.items.map(it => it.a)).size!==g.items.length) bad(tag, "段落标题答案重复");
  });
  return n;
}

R.forEach(p => {
  const text = p.paras.map(x => x[1]).join(" "), letters = p.paras.map(x => x[0]);
  if(letters.join("")!=="ABCDEFGH".slice(0, letters.length)) bad(p.id, "段落字母应从 A 连续编排");
  const n = checkGroups(p.id, p.groups, text, letters);
  const expect = p.level===3 ? 14 : 13;
  if(n!==expect) bad(p.id, `第 ${p.level} 档文章应有 ${expect} 题，实际 ${n}`);
  console.log(`阅读 ${p.id}：${text.split(/\s+/).length} 词，${n} 题`);
});
L.forEach(t => {
  let total = 0;
  t.parts.forEach(p => {
    const id = `${t.id} Part ${p.part}`;
    const lines = p.script.split("\n");
    lines.forEach((l,i) => { const m = l.match(/^([^:]+):/); if(!m || !p.speakers[m[1].trim()]) bad(id, `第 ${i+1} 行的说话人不在 speakers 里`) });
    const n = checkGroups(id, p.groups, p.script, null);
    if(n!==10) bad(id, `每部分应有 10 题，实际 ${n}`);
    total += n;
    console.log(`听力 ${id}：${p.script.split(/\s+/).length} 词，${n} 题`);
  });
  if(total!==40) bad(t.id, `一套应有 40 题，实际 ${total}`);
});
const levels = [1,2,3].map(l => R.filter(p => p.level===l).length);
if(levels.some(x => x<1)) bad("阅读", "每个难度至少要有一篇，完整模拟才能组卷");
console.log(err ? `共 ${err} 个问题` : "全部通过");
process.exit(err ? 1 : 0);
