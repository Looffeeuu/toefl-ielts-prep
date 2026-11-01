/* 构词分析：派生词和合成词拆成词库里已有的词 + 前后缀，背词卡片上用来辅助记忆。
   只在拆得可靠时才显示：
   1. 派生词：去掉前缀 / 后缀后剩下的是词库里的词，并且两者的中文释义有共同的字（un+happy、environment+al）
   2. 合成词：两半都是词库里的词，并且释义对得上（class+room）
   拉丁 / 希腊词根不靠程序猜：只用人工编写的记忆线索（js/words-memo-*.js），见 vocab.js。
   WORD_PARTS_FIX 里可以逐词指定拆法或屏蔽（值为空字符串表示不显示） */
(function(){
// 前缀：[写法, 释义, 否定类前缀]
const PREFIX = [
  ["counter","反；对抗"],["inter","在…之间"],["intra","在内"],["trans","横穿；转移"],["super","超；在上"],["under","在下；不足"],
  ["circum","环绕"],["contra","相反"],["extra","超出"],["ultra","超"],["multi","多"],["micro","微小"],["macro","宏大"],["hyper","过度"],
  ["semi","半"],["anti","反对",1],["auto","自己"],["mono","单一"],["poly","多"],["post","在后"],["over","过度；在上"],["fore","前"],
  ["tele","远"],["pseudo","伪"],["bene","好"],["mal","坏"],["mis","错误",1],["non","非",1],["dis","不；分开",1],["out","超过；向外"],
  ["pre","预先"],["pro","向前"],["sub","在下"],["sur","超；在上"],["uni","单一"],["tri","三"],["mid","中间"],["neo","新"],
  ["re","再；回"],["de","去除；向下"],["un","不",1],["in","不；向内",1],["im","不；向内",1],["il","不",1],["ir","不",1],
  ["en","使"],["em","使"],["co","共同"],["bi","二"]
];
// 后缀：[写法, 释义, 词性类别]。类别决定原词需要有的词性：n 名词 / a 形容词（也可作名词）/ d 副词或形容词 / v 动词 / va 动词或形容词
const SUFFIX = [
  ["ization","…化（名词）","n"],["ational","…的","a"],["ation","名词：行为、结果","n"],["ition","名词：行为、结果","n"],["ology","…学","n"],["ically","…地","d"],
  ["cracy","统治","n"],["crat","统治者","n"],
  ["ical","…的","a"],["ally","…地","d"],["ment","名词：行为、结果","n"],["ness","名词：性质","n"],["ship","名词：身份、关系","n"],["hood","名词：状态","n"],["less","无…的","a"],
  ["able","能…的","a"],["ible","能…的","a"],["ance","名词：性质、状态","n"],["ence","名词：性质、状态","n"],["ancy","名词：性质、状态","n"],["ency","名词：性质、状态","n"],
  ["ious","…的","a"],["eous","…的","a"],["tion","名词：行为、结果","n"],["sion","名词：行为、结果","n"],["ture","名词","n"],["ward","向…","d"],["wise","方式；方向","d"],
  ["ful","充满…的","a"],["ous","…的","a"],["ive","…的","a"],["ize","使…化","v"],["ise","使…化","v"],["ify","使…","v"],["ity","名词：性质","n"],["ism","主义；学说","n"],
  ["ist","人：…者","n"],["ian","人；…的","a"],["ial","…的","a"],["ion","名词","n"],["ant","…的；…者","a"],["ent","…的；…者","a"],["ary","…的；场所","a"],["ory","…的；场所","a"],
  ["ery","名词：场所、行为","n"],["dom","名词：领域、状态","n"],["ure","名词","n"],["age","名词","n"],["ate","使…；…的","va"],["ic","…的","a"],["al","…的；名词","a"],
  ["ly","…地；…的","d"],["er","人；物","n"],["or","人；物","n"],["ee","被…者","n"],["en","使…；…制的","va"],["ty","名词：性质","n"],["ar","…的","a"],["y","名词；…的","a"]
];
const POS_OK = { n:/\bn\./, a:/adj\.|\bn\./, d:/adv\.|adj\./, v:/\bv[ti]?\./, va:/\bv[ti]?\.|adj\./ };
const posOk = (cat, pos) => !pos || POS_OK[cat].test(pos);
const P1 = PREFIX.slice().sort((a,b) => b[0].length - a[0].length);
const SUF = SUFFIX.slice().sort((a,b) => b[0].length - a[0].length);

// 释义里有实际意义的字，用来判断拆出来的部分和原词意思是否相关
const STOP = /[的地得之性化使者人一了着于和与及或等其被所以为在是有不个种些物事作用可能被做]/g;
const chars = cn => new Set((cn||"").replace(/[a-z]+\.\s*/gi, "").replace(/[^一-龥]/g, "").replace(STOP, ""));
const related = (a, b) => { const A = chars(a); for(const ch of chars(b)) if(A.has(ch)) return true; return false };
const NEG = /[不非无未反误错失难缺去解]/;
// 词库词的简短释义：优先选和原词释义有共同字的那个义项，否则用第一个义项，最多 6 个字
function gloss(cn, wordCn){
  const senses = (cn||"").split(/[；;，,　]/).map(s => s.replace(/^[a-z]+\.(\/[a-z]+\.)*\s*/i, "").replace(/（.*?）|\(.*?\)/g, "").trim()).filter(Boolean);
  const best = (wordCn && senses.find(s => related(s, wordCn))) || senses[0] || "";
  return best.slice(0, 6);
}
// 去掉后缀后可能的原形：直接、补 e、i→y、双写辅音还原、-abil→-able
function stems(s){
  const out = [s, s+"e"];
  if(/i$/.test(s)) out.push(s.slice(0,-1)+"y");
  if(/([bdgklmnprt])\1$/.test(s)) out.push(s.slice(0,-1));
  if(/abil$|ibil$/.test(s)) out.push(s.slice(0,-3)+"le");
  if(/at$/.test(s)) out.push(s+"e");
  return out;
}

const SUF_SET = new Set(SUFFIX.map(s => s[0]));
function parse(w, lex, depth){
  depth = depth || 0;
  const self = lex(w); if(!self || depth>3) return null;
  // 后缀：剩下的部分是词库词，释义相关，并且后缀和原词词性相符
  for(const [s,g,cat] of SUF){
    if(!w.endsWith(s) || w.length - s.length < 3) continue;
    if(s==="y" || s==="er" && !/[者员人家师器机手]/.test(self.cn)) continue;
    if(!posOk(cat, self.pos)) continue;
    for(const st of stems(w.slice(0, -s.length))){
      const o = st!==w && lex(st);
      if(o && related(self.cn, o.cn)){
        const inner = parse(st, lex, depth+1) || [{ t:st, k:"w", g:gloss(o.cn, self.cn) }];
        return [...inner, { t:s, k:"s", g }];
      }
    }
  }
  // 前缀：否定类前缀要求原词释义里有否定意思，其他前缀要求释义相关
  for(const [p,g,neg] of P1){
    const rest = w.slice(p.length).replace(/^-/, "");
    if(!w.startsWith(p) || rest.length < 3) continue;
    const o = lex(rest); if(!o) continue;
    if(neg ? NEG.test(self.cn) : related(self.cn, o.cn)){
      const inner = parse(rest, lex, depth+1) || [{ t:rest, k:"w", g:gloss(o.cn, self.cn) }];
      return [{ t:p, k:"p", g:neg ? g.split("；")[0] : g }, ...inner];
    }
  }
  // 合成词：两半都是词库词（后一半不能是后缀），至少一半和原词释义相关
  if(depth===0 && w.length>=6) for(let i=3; i<=w.length-3; i++){
    const a = w.slice(0,i), b = w.slice(i).replace(/^-/, ""), A = lex(a), B = lex(b);
    if(SUF_SET.has(b) || b==="ally") continue;
    if(A && B && (related(self.cn, A.cn) || related(self.cn, B.cn))) return [{ t:a, k:"w", g:gloss(A.cn, self.cn) }, { t:b, k:"w", g:gloss(B.cn, self.cn) }];
  }
  return null;
}

// 逐词修正：「部分:释义」用 + 连接，前缀以 - 结尾、后缀以 - 开头；空字符串表示不显示
const FIX = window.WORD_PARTS_FIX || {};
const cache = {};
// lex(word) → 词库里的词条（至少有 cn），没有就返回 null
App.wordParts = (word, lex) => {
  const w = String(word||"").toLowerCase();
  if(w in cache) return cache[w];
  let r = null;
  if(w in FIX) r = FIX[w] ? FIX[w].split("+").map(x => { const [t,g] = x.split(":"); const k = t.endsWith("-") ? "p" : t.startsWith("-") ? "s" : "r"; return { t:t.replace(/^-|-$/g,""), k, g:g||"" } }) : null;
  else if(/^[a-z][a-z-]{4,}$/.test(w)) r = parse(w, lex);
  if(r && r.length < 2) r = null;
  return cache[w] = r;
};
})();
