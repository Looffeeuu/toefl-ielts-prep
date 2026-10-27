// 测试导入词表的解析：node tools/check_wordlist.js
const fs = require("fs"), path = require("path");
global.window = { App:{} };
eval(fs.readFileSync(path.join(__dirname, "../js/wordlist-io.js"), "utf8"));
const IO = window.App.wordlistIO;
const cases = [
  ["abandon 放弃", { w:"abandon", cn:"放弃" }],
  ["abandon,放弃", { w:"abandon", cn:"放弃" }],
  ["abandon\tv.\t放弃", { w:"abandon", pos:"v.", cn:"放弃" }],
  ["1. abandon v. 放弃", { w:"abandon", pos:"v.", cn:"放弃" }],
  ["12、abandon vt.&vi. 放弃；抛弃", { w:"abandon", pos:"vt.&vi.", cn:"放弃；抛弃" }],
  ["abandon /əˈbændən/ 放弃", { w:"abandon", ph:"əˈbændən", cn:"放弃" }],
  ["take into account 考虑", { w:"take into account", cn:"考虑" }],
  ["abandon,v.,放弃", { w:"abandon", pos:"v.", cn:"放弃" }],
  ["abandon | 放弃", { w:"abandon", cn:"放弃" }],
  ["abandon - to leave behind", { w:"abandon", cn:"to leave behind" }],
  ["\uFEFFword,meaning", null],
  ["abandon", { w:"abandon", cn:"" }],
  ["\"well-being\",\"幸福\"", { w:"well-being", cn:"幸福" }],
];
let bad = 0;
cases.forEach(([line, exp]) => {
  const r = IO.parse(line).items[0] || null;
  const ok = exp===null ? r===null : r && Object.entries(exp).every(([k,v]) => r[k]===v);
  if(!ok){ bad++; console.log("✗", JSON.stringify(line), "→", JSON.stringify(r)) }
});
const multi = IO.parse("apple, banana, cherry\nApple 苹果\n放弃 abandon");
if(multi.items.map(x => x.w).join()!=="apple,banana,cherry" || multi.dup!==1 || multi.bad.length!==1){ bad++; console.log("✗ multi", JSON.stringify(multi)) }
console.log(bad ? `${bad} 个用例失败` : `全部 ${cases.length+1} 个用例通过`);
process.exit(bad ? 1 : 0);
