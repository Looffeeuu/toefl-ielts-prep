/* 构词分析：把单词拆成前缀、词根、后缀，背词卡片上用来辅助记忆。
   只在拆得比较可靠时才显示，宁可不显示也不乱拆：
   1. 派生词：去掉前缀 / 后缀后剩下的是词库里的词，并且两者的中文释义有共同的字（un+happy、environment+al）
   2. 合成词：两半都是词库里的词，并且释义对得上（class+room）
   3. 拉丁 / 希腊词根：整词正好拆成「前缀 + 词根 + 后缀」，例如 in+spect、trans+port+ation
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
// 只和词根连用的前缀（同化形式等），单独加在词库词前面时不拆
const ROOT_PREFIX = [
  ["com","共同"],["con","共同"],["col","共同"],["cor","共同"],["ab","离开"],["ad","向"],["ac","向"],["af","向"],["ag","向"],["al","向"],
  ["ap","向"],["ar","向"],["as","向"],["at","向"],["ex","向外"],["ef","向外"],["e","向外"],["ob","反对；朝向"],["oc","朝向"],["of","朝向"],
  ["op","反对"],["per","贯穿；完全"],["dia","穿过"],["syn","共同"],["sym","共同"],["se","分开"],["suc","在下"],["suf","在下"],["sup","在下"],
  ["sus","在下"],["di","分开"],["dif","分开"]
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
// 词根层的后缀连用：第二个后缀只能是这些，第一个后缀不能是表示「人 / 抽象名词」的结尾
const SECOND = new Set(["al","ly","ally","ity","ness","ive","ize","ion","ation","ism","ist","ic","ial","ious","ous","ance","ence"]);
const NO_FOLLOW = new Set(["er","or","ist","ee","ism","ness","ment","ship","hood","dom","age","ty","y","ly","ity","ure","ery"]);
// 词根：[写法…, 释义]，同一个词根的几种写法放在一起
const ROOTS = [
  [["spect","spic"],"看"],[["vis","vid"],"看"],[["aud"],"听"],[["dict"],"说"],[["loqu","locut"],"说"],[["scrib","script"],"写"],
  [["graph","gram"],"写；画"],[["port"],"拿；运"],[["duc","duct"],"引导"],[["tract"],"拉"],[["ject"],"扔"],[["mit","miss"],"送"],
  [["pel","puls"],"推"],[["struct","stru"],"建造"],[["fac","fact","fect","fic"],"做"],[["form"],"形状"],[["ven","vent"],"来"],
  [["ced","ceed","cess"],"走"],[["gress","grad"],"走；步"],[["vert","vers"],"转"],[["cap","capt","cept","ceiv","ceit"],"拿"],
  [["tain","ten","tin"],"握住"],[["tend","tens","tent"],"伸展"],[["pos","pon","pound"],"放"],[["cur","curs","cour"],"跑"],
  [["rupt"],"断裂"],[["flect","flex"],"弯曲"],[["flu"],"流"],[["fer"],"带；拿"],[["ply","plic","ploy"],"折叠"],[["press"],"压"],
  [["pend","pens"],"悬挂；称量"],[["sist","stit","stat","stan"],"站立"],[["voc","vok"],"喊叫"],[["cred"],"相信"],[["jud","jur","jus"],"判断；法律"],
  [["leg","lect"],"选；读；法律"],[["log"],"言语；学说"],[["manu","mani"],"手"],[["ped","pod"],"脚"],[["corp","corpor"],"身体"],[["cord"],"心"],
  [["mort"],"死"],[["viv","vit"],"生命"],[["bio"],"生命"],[["gen"],"产生；种族"],[["nat"],"出生"],[["anim"],"生命；心灵"],
  [["path"],"感情；疾病"],[["phil"],"爱"],[["soph"],"智慧"],[["psych"],"心理"],[["chron"],"时间"],[["tempor"],"时间"],[["geo"],"地"],
  [["terr"],"土地"],[["aqu","hydr"],"水"],[["photo"],"光"],[["lum","luc"],"光"],[["therm"],"热"],[["phon"],"声音"],[["son"],"声音"],
  [["meter","metr"],"测量"],[["scop"],"看"],[["mov","mot","mob"],"移动"],[["vol"],"意志"],[["sci"],"知道"],[["cogn","gnos"],"知道"],
  [["sens","sent"],"感觉"],[["memor"],"记忆"],[["fin"],"结束；界限"],[["equ"],"相等"],[["prim"],"第一"],[["sequ","secu"],"跟随"],
  [["serv"],"服务；保持"],[["solv","solu"],"松开；解决"],[["spir"],"呼吸"],[["tort"],"扭"],[["trib"],"给予"],[["vac"],"空"],
  [["val"],"价值；强"],[["vinc","vict"],"征服"],[["volv","volu"],"卷；转"],[["claim","clam"],"喊"],[["clud","clus","clos"],"关闭"],
  [["cid","cis"],"切；杀"],[["dur"],"持久"],[["fid"],"相信"],[["grat"],"感激；令人愉快"],[["habit"],"居住"],[["loc"],"地方"],
  [["magn"],"大"],[["medi"],"中间"],[["migr"],"迁移"],[["mut"],"改变"],[["norm"],"标准"],[["nov"],"新"],[["oper"],"工作"],
  [["pact"],"紧压"],[["part"],"部分"],[["pass","pati"],"感受；经过"],[["pet"],"寻求"],[["plex"],"交织"],[["popul"],"人民"],
  [["quir","quest","quis"],"寻求"],[["rect"],"直；正"],[["reg"],"统治；规则"],[["rat"],"计算；理性"],[["sid","sed"],"坐"],
  [["sign"],"标记"],[["simil","simul"],"相似"],[["soci"],"社会；同伴"],[["tact","tang"],"接触"],[["text"],"编织"],[["vari"],"变化"],
  [["ver"],"真实"],[["via"],"道路"],[["vor"],"吃"],[["dem"],"人民"],[["arch"],"统治；首领"],[["astr","aster"],"星"],
  [["cycl"],"圆；环"],[["morph"],"形状"],[["nom","onym"],"名字"],[["mater","matr"],"母亲"],[["pater","patr"],"父亲"],[["urb"],"城市"],
  [["agr"],"田地"],[["hab","hibit"],"拥有；居住"],[["junct"],"连接"],[["lingu"],"语言"],[["liter"],"文字"],[["mand","mend"],"命令"],
  [["nounc","nunci"],"宣告"],[["scend"],"爬"],[["sort"],"种类"],[["tribut"],"给予"],[["vent"],"来"]
];
// 已知会被词根规则拆错的词（词源不是这样）
const NO_ROOT = new Set("portion person mansion manner manage manager mention minister ministry administer administration pension season reason lesson poison prison cousin legend legion region pattern patent potent native nature natural sentence century devise".split(" "));

const P1 = PREFIX.slice().sort((a,b) => b[0].length - a[0].length);
// 词根层只用拉丁 / 希腊来源的前缀；un-、over-、out- 这类英语本族前缀一般不和拉丁词根连用
const NATIVE = new Set(["un","non","mis","over","under","out","fore","mid","self"]);
const PR = [...PREFIX.filter(p => !NATIVE.has(p[0])), ...ROOT_PREFIX].sort((a,b) => b[0].length - a[0].length);
const SUF = SUFFIX.slice().sort((a,b) => b[0].length - a[0].length);
const RT = []; ROOTS.forEach(([forms, g]) => forms.forEach(f => RT.push([f, g]))); RT.sort((a,b) => b[0].length - a[0].length);

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
// 有两种意思的前缀（in- 不 / 向内）：原词释义里有否定意思时只显示「不」
const prefixGloss = (g, cn) => /^不；/.test(g) && NEG.test(cn) ? "不" : g;

// 去掉后缀后可能的原形：直接、补 e、i→y、双写辅音还原、-abil→-able
function stems(s){
  const out = [s, s+"e"];
  if(/i$/.test(s)) out.push(s.slice(0,-1)+"y");
  if(/([bdgklmnprt])\1$/.test(s)) out.push(s.slice(0,-1));
  if(/abil$|ibil$/.test(s)) out.push(s.slice(0,-3)+"le");
  if(/at$/.test(s)) out.push(s+"e");
  return out;
}

// 词根层：整词拆成 前缀* + 词根(1–2 个) + 后缀*，允许词根和后缀之间有连接元音 i / u / o
// cn / pos 是整词的释义和词性：用来选前缀的意思、检查最后一个后缀和词性是否相符
function rootSplit(w, cn, pos){
  if(NO_ROOT.has(w)) return null;
  let best = null;
  const go = (i, parts, roots, phase) => {
    if(best) return;
    if(i===w.length){
      const core = parts.filter(p => p.k!=="x"), sufs = core.filter(p => p.k==="s");
      if(!roots || core.length<2) return;
      // 没有任何前后缀时，只接受两个都较长的词根（photo+graph），避免 fer+vent 这类巧合
      if(core.every(p => p.k==="r") && core.some(p => p.t.length<4)) return;
      if(sufs.length>2) return;
      if(sufs.length===2 && (NO_FOLLOW.has(sufs[0].base) || !SECOND.has(sufs[1].base))) return;
      if(sufs.length && !posOk(sufs[sufs.length-1].cat, pos)) return;
      // -y / -ly 不直接接在词根后面（curly、comity 这类多半是巧合）
      if(sufs.length && (sufs[0].base==="y" || sufs[0].base==="ly")) return;
      // 三个字母的短词根：没有前缀时，后缀要至少三个字母（vocal、natal 这类太容易撞上）
      if(!core.some(p => p.k==="p") && core.some(p => p.k==="r" && p.t.length===3) && !sufs.some(p => p.t.length>=3)) return;
      best = parts.slice(); return;
    }
    const rest = w.slice(i);
    if(phase===0) for(const [p,g] of PR){ if(rest.startsWith(p) && rest.length>p.length+2){ parts.push({ t:p, k:"p", g:prefixGloss(g, cn) }); go(i+p.length, parts, roots, 0); parts.pop(); if(best) return } }
    if(phase<=1 && roots<2) for(const [r,g] of RT){ if(rest.startsWith(r)){ parts.push({ t:r, k:"r", g }); go(i+r.length, parts, roots+1, 1); parts.pop(); if(best) return } }
    if(!roots) return;
    for(const [s,g,cat] of SUF){
      for(const link of ["", "i", "u", "o"]){
        const f = link + s;
        if(rest.startsWith(f)){ parts.push({ t:f, k:"s", g, cat, base:s }); go(i+f.length, parts, roots, 2); parts.pop(); if(best) return }
      }
    }
    // 词尾不发音的 e 并到前一部分里显示
    if(rest==="e"){ parts.push({ t:"e", k:"x" }); go(i+1, parts, roots, 2); parts.pop() }
  };
  go(0, [], 0, 0);
  // 词根至少 3 个字母，并且不能整个词就是「前缀 + 一个很短的词根」
  if(best && best.filter(p => p.k==="r").every(p => p.t.length < 3)) return null;
  return best;
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
        const inner = parse(st, lex, depth+1) || rootSplit(st, o.cn, o.pos) || [{ t:st, k:"w", g:gloss(o.cn, self.cn) }];
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
const FIX = Object.assign({
  organism:"organ:器官+-ism:名词"
}, window.WORD_PARTS_FIX || {});
const cache = {};
// lex(word) → 词库里的词条（至少有 cn），没有就返回 null
App.wordParts = (word, lex) => {
  const w = String(word||"").toLowerCase();
  if(w in cache) return cache[w];
  let r = null;
  if(w in FIX) r = FIX[w] ? FIX[w].split("+").map(x => { const [t,g] = x.split(":"); const k = t.endsWith("-") ? "p" : t.startsWith("-") ? "s" : "r"; return { t:t.replace(/^-|-$/g,""), k, g:g||"" } }) : null;
  else if(/^[a-z][a-z-]{4,}$/.test(w)){ const o = lex(w) || {}; r = parse(w, lex) || rootSplit(w, o.cn || "", o.pos || "") }
  if(r && r.length < 2) r = null;
  return cache[w] = r;
};
})();
