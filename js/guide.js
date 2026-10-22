/* 考点地图：新版托福结构、官方资源、各题型考点与常见陷阱、按考点统计的个人正确率 */
(function(){
const { $, esc } = App;

/* ---------- 官方信息（来自 ETS 官网，2026 年 1 月 21 日起的新版） ---------- */
const STRUCTURE = [
  ["阅读 Reading", "补全单词 · 日常阅读 · 学术文章", "50", "约 30 分钟"],
  ["听力 Listening", "听后选回应 · 对话 · 通知 · 学术讲座", "47", "约 29 分钟"],
  ["写作 Writing", "组句 · 写邮件 · 学术讨论", "12", "约 23 分钟"],
  ["口语 Speaking", "听后复述 · 模拟面试", "11", "约 8 分钟"]
];
const RESOURCES = [
  { name:"TOEFL iBT 备考资源总页", org:"ETS 官网", desc:"官方备考入口，汇总 TestReady、样题、免费 8 周备考计划（含样题）等资源。", url:"https://www.ets.org/toefl/test-takers/ibt/prepare.html" },
  { name:"TOEFL TestReady 与官方样题", org:"ETS 官网", desc:"ETS 的备考平台，提供完整的官方模考和练习，可以看到新版真实的界面和题型。需要注册账号。", url:"https://www.ets.org/toefl/test-takers/ibt/prepare/sample-test.html" },
  { name:"考试内容说明", org:"ETS 官网", desc:"四个部分的题型名称、题量和时长，是本页结构表的来源。", url:"https://www.ets.org/toefl/test-takers/ibt/about/content.html" },
  { name:"新版考试规格说明（PDF）", org:"ETS", desc:"各题型的题量、能力等级和计分方式等技术细节。", url:"https://www.ets.org/content/dam/ets-org/pdfs/toefl/toefl-ibt-test-specifications-2026.pdf" },
  { name:"分数说明", org:"ETS 官网", desc:"1–6 分制、半分为单位、总分取四项平均，以及过渡期 0–120 分对照。", url:"https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html" },
  { name:"中国考区报名", org:"教育部教育考试院", desc:"中国大陆考生报名、考位查询和成绩相关事务。", url:"https://toefl.neea.cn/" }
];

/* ---------- 各题型考点（用自己的话概括，不是官方原文） ---------- */
const SECTIONS = [
  { id:"reading", name:"阅读", route:"reading", tasks:[
    { name:"补全单词 Complete the Words", tests:"在一段学术短文里补全单词的后半部分，考拼写、词形变化和对上下文的理解。",
      points:["词形：名词单复数、动词时态和第三人称 -s、形容词与副词","高频功能词：介词、连词、冠词、代词","根据前后句判断词义和词性"],
      traps:["只看前几个字母猜词，忽略句子需要的词性","拼对了词但漏了 -s、-ed、-ly 等词尾","大小写和双写辅音（occurred、beginning）"],
      practice:"阅读 → 补全单词（10 篇）", statKey:"read:word" },
    { name:"日常阅读 Read in Daily Life", tests:"读邮件、通知、告示等校园生活文字，考写作目的、具体细节、语气和言外之意。",
      points:["目的题：这篇文字主要想做什么","细节题：时间、地点、费用、条件","推断题：根据规定推出某种情况会怎样","语气题：正式 / 友好 / 紧急"],
      traps:["选项照抄原文的词，但意思被改了","推断过度：原文没有依据的结论","忽略 only、must、unless、except 等限定词"],
      practice:"阅读 → 日常阅读（10 篇）", statKey:"read:daily" },
    { name:"学术文章 Read an Academic Passage", tests:"读大学课程风格的短文，考主旨、细节、词汇、推断、作者意图和文章结构。",
      points:["主旨题：概括全文，而不是某一段的细节","词汇题：把选项代回原句，看意思是否通顺","否定事实题（NOT）：逐项在原文中排除","目的与修辞题：作者为什么提到某个例子","结构题：提出—反驳—证实、问题—解决等"],
      traps:["只在某一段成立的选项冒充主旨","词汇题选了单词的常见意思而不是文中的意思","all、never、only 等绝对化表述"],
      practice:"阅读 → 学术文章（6 篇）· 完整模拟", statKey:"read:academic" }
  ]},
  { id:"listening", name:"听力", route:"", tasks:[
    { name:"听后选回应 · 对话 · 通知 · 学术讲座", tests:"从一句话到一段讲座，考对日常和学术英语的理解，包括说话人的意图和态度。",
      points:["说话人的目的和态度","日常对话中的习惯表达","讲座的主旨、例子的作用和概念之间的关系"],
      traps:["选项里出现听到的原词，但意思不对","忽略语气、转折（but、actually）带来的意思变化"],
      practice:"本站暂时没有听力模块，建议用 ETS TestReady 的官方材料练习", statKey:"" }
  ]},
  { id:"writing", name:"写作", route:"writing", tasks:[
    { name:"组句 Build a Sentence", tests:"用打乱的词块拼出对话中 B 的回答，考句子结构和语法，每题全对才得分。",
      points:["间接疑问句用陈述语序（Do you know where it is?）","助动词、情态动词后接动词原形","时态、被动语态、比较结构","不定式与动名词（would like to do / mind doing）","句末是问号还是句号，决定整句的结构"],
      traps:["干扰词块：多一个 does、is 或错误的词形","把疑问句的倒装带进从句里","固定词块的位置限制了其他词块的顺序，要先看它们"],
      practice:"写作 → 组句（6 套 60 题）", statKey:"write:tags" },
    { name:"写邮件 Write an Email", tests:"按情境给指定对象写邮件，考任务完成度、语气是否得体、组织和语言准确性。",
      points:["三个要点逐一写到","称呼、开头说明目的、结尾礼貌用语、署名","语气匹配对象：教授、职员、朋友各不相同"],
      traps:["只写了两个要点","对教授或机构用太随便的语气","写太长导致时间不够、来不及检查"],
      practice:"写作 → 写邮件（8 题）", statKey:"write:email" },
    { name:"学术讨论 Write for an Academic Discussion", tests:"回应教授的问题和两位同学的帖子，考观点表达、论证、与他人观点的互动和语言。",
      points:["开头就亮出立场","点名回应同学的观点（同意或反驳）","理由加具体例子，提出同学没说过的新角度"],
      traps:["只复述同学的观点，没有新内容","通篇只有观点、没有例子","少于 100 词"],
      practice:"写作 → 学术讨论（8 题）", statKey:"write:disc" }
  ]},
  { id:"speaking", name:"口语", route:"speaking", tasks:[
    { name:"听后复述 Listen and Repeat", tests:"听一句话后原样复述，句子由短到长，考听辨、短时记忆、发音和语法结构。",
      points:["完整保留冠词、介词和词尾（-s、-ed）","长句先抓意群：主语 + 动词 + 宾语，再补修饰成分","语调和停顿尽量贴近原句"],
      traps:["只记住了意思，换成自己的说法","漏掉 the、a、of、to 等小词","长句后半部分记不住就放弃，能说多少说多少更好"],
      practice:"口语 → 听后复述（6 套 42 句）", statKey:"speak:repeat" },
    { name:"模拟面试 Take an Interview", tests:"回答研究者的 4 个问题，没有准备时间，考流利度、语言使用和内容展开。",
      points:["问题通常由浅入深：个人经历 → 偏好 → 观点 → 社会或未来","45 秒结构：直接回答 → 理由 → 例子 → 收尾","保持连贯，适当使用连接词"],
      traps:["开头停顿太久","只说观点、没有例子，时间没用完","背模板却答非所问"],
      practice:"口语 → 模拟面试（8 套 32 题）", statKey:"speak:interview" }
  ]}
];

const READ_TYPES = { word:"补全单词", main:"主旨", detail:"细节", vocab:"词汇", infer:"推断", purpose:"目的与修辞", negative:"否定事实", tone:"语气", structure:"文章结构" };

/* ---------- 个人数据 ---------- */
function bar(c, n){
  const p = n ? Math.round(c/n*100) : 0;
  const col = p>=80 ? "var(--good)" : p>=60 ? "var(--warn)" : "var(--bad)";
  return `<div class="bar"><i style="width:${p}%;background:${col}"></i></div><b>${n ? `${c}/${n} · ${p}%` : "未练习"}</b>`;
}
function statHTML(key){
  if(!key) return "";
  const rd = App.readingData ? App.readingData() : null, wd = App.writingData ? App.writingData() : null, sd = App.speakingData ? App.speakingData() : null;
  if(key==="read:word" && rd){ const t = rd.types.word || [0,0]; return `<div class="tstat"><span>正确率</span>${bar(t[0], t[1])}</div>` }
  if(key==="read:daily" && rd){
    return ["purpose","detail","infer","tone"].map(k => { const t = rd.types[k] || [0,0]; return `<div class="tstat"><span>${READ_TYPES[k]}</span>${bar(t[0], t[1])}</div>` }).join("") + `<p class="note" style="margin:0">日常阅读和学术文章的题型统计合在一起计算。</p>`;
  }
  if(key==="read:academic" && rd){
    return ["main","detail","vocab","infer","purpose","negative","structure"].map(k => { const t = rd.types[k] || [0,0]; return `<div class="tstat"><span>${READ_TYPES[k]}</span>${bar(t[0], t[1])}</div>` }).join("");
  }
  if(key==="write:tags" && wd){
    const G = window.WRITING.grammarTags;
    return Object.keys(G).map(k => { const t = wd.tags[k] || [0,0]; return `<div class="tstat wide"><span>${G[k]}</span>${bar(t[0], t[1])}</div>` }).join("");
  }
  if(key==="write:email" && wd){ const n = window.WRITING.emails.filter(e => wd.drafts[e.id]).length; return `<p class="note" style="margin:0">已写 ${n} / ${window.WRITING.emails.length} 题</p>` }
  if(key==="write:disc" && wd){ const n = window.WRITING.discussions.filter(d => wd.drafts[d.id]).length; return `<p class="note" style="margin:0">已写 ${n} / ${window.WRITING.discussions.length} 题</p>` }
  if(key==="speak:repeat" && sd){
    const h = sd.history.filter(x => x.task==="repeat" && x.score!=null);
    if(!h.length) return `<p class="note" style="margin:0">还没有练习记录</p>`;
    const avg = Math.round(h.reduce((a,x) => a + x.score, 0) / h.length);
    return `<div class="tstat"><span>平均完整度</span>${bar(avg, 100).replace(/<b>.*<\/b>/, `<b>${avg}% · ${h.length} 次</b>`)}</div>`;
  }
  if(key==="speak:interview" && sd){ const n = sd.history.filter(x => x.task==="interview").length; return `<p class="note" style="margin:0">已练 ${n} 次</p>` }
  return "";
}

/* ---------- 渲染 ---------- */
function render(){
  $("#view-guide").innerHTML = `<div class="guide">
    <section>
      <h2 class="page-title">考点地图</h2>
      <p class="note" style="max-width:70ch">ETS 不公开发布真实考题，网上流传的「真题」「机经」多是回忆或泄露的版本，这里不收录。想熟悉真实考试，最可靠的是 ETS 官方的样题和模考（见下方「官方资源」）。本页整理新版考试的结构、每种题型考什么、常见陷阱，以及你在本站练习中各考点的正确率，帮你找准方向。</p>
    </section>

    <section class="guide-block">
      <p class="section-label">新版考试结构（2026 年 1 月 21 日起）</p>
      <div class="tablewrap"><table><thead><tr><th>部分</th><th>题型</th><th>题量</th><th>时长</th></tr></thead><tbody>
        ${STRUCTURE.map(r => `<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td class="num">${r[2]}</td><td>${r[3]}</td></tr>`).join("")}
      </tbody></table></div>
      <p class="note">全程约 2 小时。阅读和听力是自适应的，实际题量和时长会有变化。每部分按 1–6 分计分，以半分为单位；总分是四部分的平均，四舍五入到半分。过渡期内成绩单还会给出对应的 0–120 分（例如 5 分对应 95 分以上）。数据来自 ETS 官网。</p>
    </section>

    <section class="guide-block">
      <p class="section-label">官方资源</p>
      <div class="res-grid">${RESOURCES.map(r => `<a class="res" href="${r.url}" target="_blank" rel="noopener"><b>${esc(r.name)}</b><span class="note">${esc(r.org)}</span><span>${esc(r.desc)}</span></a>`).join("")}</div>
    </section>

    ${SECTIONS.map(s => `<section class="guide-block">
      <div class="row" style="justify-content:space-between"><h3 class="g-sec">${s.name}</h3>${s.route ? `<a class="btn alt" href="#${s.route}">去练习${s.name}</a>` : ""}</div>
      ${s.tasks.map(t => `<article class="g-task">
        <div class="g-head"><b>${esc(t.name)}</b><span class="note">${esc(t.tests)}</span></div>
        <div class="g-cols">
          <div><p class="lab">考点</p><ul class="wbul">${t.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
          <div><p class="lab">常见陷阱</p><ul class="wbul">${t.traps.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
          <div class="g-stat"><p class="lab">我的数据</p>${statHTML(t.statKey) || '<p class="note" style="margin:0">暂无数据</p>'}<p class="note" style="margin:6px 0 0">本站练习：${esc(t.practice)}</p></div>
        </div>
      </article>`).join("")}
    </section>`).join("")}
  </div>`;
}

App.routes.guide = { init(){}, enter(){ render() } };
})();
