/* 自定义词表的读入与分享：解析粘贴或上传的文字、读取 GBK 编码的文件、离线查词、分享链接的编码与解码 */
(function(){
const IO = window.App.wordlistIO = {};

/* ---------- 解析 ---------- */
// 每行一个词，后面可以跟词性和中文释义，支持这些写法：
//   abandon 放弃          abandon,放弃         abandon<Tab>v. 放弃（从 Excel 复制）
//   1. abandon v. 放弃    abandon /əˈbændən/ 放弃    take into account 考虑
// 一行里只有用逗号分开的英文时，当作多个词：apple, banana, cherry
const CJK = /[㐀-鿿豈-﫿]/;
const POS = "n|v|vt|vi|adj|adv|a|ad|prep|conj|pron|num|int|interj|art|aux|abbr|phr|pl";
const POS_HEAD = new RegExp(`^((?:(?:${POS})\\.\\s*(?:[&/,，]\\s*)?)+)\\s*`, "i");
const POS_TOKEN = new RegExp(`^(?:${POS})$`, "i");
const WORD_RUN = /^([A-Za-z][A-Za-z'’\-]*(?:[ ]+[A-Za-z][A-Za-z'’\-]*)*)(.*)$/;
const HEADER = /^(word|words|单词|词汇|英文|english)\s*([,，\t|]|$)/i;

function parseLine(raw){
  let line = raw.replace(/^﻿/, "").replace(/["“”]/g, "").trim();
  if(!line || line.startsWith("#") || HEADER.test(line)) return null;
  line = line.replace(/^\(?\d+[.、)\]）:]?\s+/, "").replace(/^\d+[.、)）]\s*/, "");
  // 只有英文、用逗号或分号分开：一行多个词
  if(!CJK.test(line) && /[,;，；]/.test(line) && !/\t|\|/.test(line)){
    const parts = line.split(/[,;，；]/).map(s => s.trim()).filter(Boolean);
    if(parts.length>=2 && parts.every(p => /^[A-Za-z][A-Za-z'’\- ]*$/.test(p) && p.split(/\s+/).length<=4)) return parts.map(w => ({ w }));
  }
  let w, rest;
  const cut = line.match(/^([^\t|]+)[\t|](.*)$/);
  if(cut){ w = cut[1].trim().replace(/^["']|["']$/g, ""); rest = cut[2].replace(/[\t|]/g, " ") }
  else{
    const m = line.match(WORD_RUN); if(!m) return { bad:raw.trim() };
    w = m[1]; rest = m[2];
    // 「abandon v. 放弃」：最后一个词其实是词性缩写
    const toks = w.split(/\s+/);
    while(toks.length>1 && POS_TOKEN.test(toks[toks.length-1]) && /^\s*\./.test(rest)){ rest = toks.pop() + rest }
    w = toks.join(" ");
  }
  w = w.replace(/’/g, "'").replace(/\s+/g, " ").trim();
  if(!/^[A-Za-z][A-Za-z' \-.]*$/.test(w) || w.length>40) return { bad:raw.trim() };
  rest = rest.trim().replace(/^[,，:：=\-–—;；.]+\s*/, "");
  let ph = "", pos = "";
  const phm = rest.match(/^(\/[^/]{1,40}\/|\[[^\]]{1,40}\])\s*/);
  if(phm){ ph = phm[1].slice(1,-1).trim(); rest = rest.slice(phm[0].length) }
  const pm = rest.match(POS_HEAD);
  if(pm){ pos = pm[1].replace(/\s+/g, "").replace(/[，,]/g, "/").replace(/[&/]+$/, ""); rest = rest.slice(pm[0].length) }
  const cn = rest.replace(/\s+/g, " ").replace(/^["']|["']$/g, "").trim().slice(0, 80);
  return { w, ph, pos, cn };
}
// 返回 { items:[{w, ph, pos, cn}], bad:[无法识别的行], dup:重复的词数 }
IO.parse = text => {
  const items = [], bad = [], seen = new Set(); let dup = 0;
  String(text||"").split(/\r?\n/).forEach(line => {
    const r = parseLine(line); if(!r) return;
    (Array.isArray(r) ? r : [r]).forEach(x => {
      if(x.bad){ bad.push(x.bad); return }
      const k = x.w.toLowerCase();
      if(seen.has(k)){ dup++; return }
      seen.add(k); items.push(Object.assign({ ph:"", pos:"", cn:"" }, x));
    });
  });
  return { items, bad, dup };
};

/* ---------- 读文件：先按 UTF-8，不是合法 UTF-8 就按 GBK（Excel 在中文系统里另存的 CSV 多是 GBK） ---------- */
IO.readFile = file => file.arrayBuffer().then(buf => {
  try{ return new TextDecoder("utf-8", { fatal:true }).decode(buf) }
  catch(e){ try{ return new TextDecoder("gb18030").decode(buf) }catch(e2){ return new TextDecoder("utf-8").decode(buf) } }
});

/* ---------- 离线查词表（约 1.2 MB，第一次导入时才加载） ---------- */
let dictP = null;
IO.loadDict = () => dictP || (dictP = new Promise((resolve, reject) => {
  const s = document.createElement("script");
  s.src = "js/dict-lookup.js";
  s.onload = () => {
    const map = new Map();
    (window.DICT_LOOKUP || "").split("\n").forEach(l => { const [w,ph,pos,cn] = l.split("\t"); if(w && !map.has(w.toLowerCase())) map.set(w.toLowerCase(), { w, ph, pos, cn }) });
    window.DICT_LOOKUP = null;
    resolve(map);
  };
  s.onerror = () => { dictP = null; reject(new Error("查词表加载失败")) };
  document.head.appendChild(s);
}));

/* ---------- 分享链接：词表压缩后放进网址，不经过任何服务器 ---------- */
const b64 = bytes => { let s = ""; bytes.forEach(b => s += String.fromCharCode(b)); return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"") };
const unb64 = str => { const s = atob(str.replace(/-/g,"+").replace(/_/g,"/")); return Uint8Array.from(s, c => c.charCodeAt(0)) };
const pipe = (bytes, Stream, mode) => new Response(new Blob([bytes]).stream().pipeThrough(new Stream(mode))).arrayBuffer().then(b => new Uint8Array(b));
const canZip = typeof CompressionStream==="function" && typeof DecompressionStream==="function";
// payload：{ n:词表名, i:[ "word" 或 [word, cn, pos] ] }
IO.encode = async payload => {
  const raw = new TextEncoder().encode(JSON.stringify(payload));
  return canZip ? "1" + b64(await pipe(raw, CompressionStream, "deflate-raw")) : "0" + b64(raw);
};
IO.decode = async code => {
  const kind = code[0], bytes = unb64(code.slice(1));
  if(kind==="1"){
    if(!canZip) throw new Error("这个浏览器太旧，打不开分享链接，请升级浏览器");
    return JSON.parse(new TextDecoder().decode(await pipe(bytes, DecompressionStream, "deflate-raw")));
  }
  return JSON.parse(new TextDecoder().decode(bytes));
};
})();
