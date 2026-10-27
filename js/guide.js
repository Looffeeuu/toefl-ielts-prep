/* 考点地图：托福 / 雅思的考试结构、官方资源、各题型考点与常见陷阱、按考点统计的个人正确率（按当前考试显示） */
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
  { id:"listening", name:"听力", route:"listening", tasks:[
    { name:"听后选回应 Listen and Choose a Response", tests:"只听一句话（不显示文字），从四个文字选项中选出最自然的回应，考对日常口语意图的理解。",
      points:["特殊疑问词决定答案类型：Where 答地点、When 答时间、Why 答原因","间接回答：不说 Yes / No，而是给出相关信息","Why don't we…、Would you mind…、Shouldn't we… 等句型的真实意图","选择疑问句（A or B）不能用 Yes / No 回答"],
      traps:["选项重复问句里的词或发音相近的词（rain / train）","时态和问句不一致","用 Because 回答其实是建议的 Why don't we…"],
      practice:"听力 → 听后选回应（4 套 40 句）", statKey:"listen:response" },
    { name:"对话与通知 Conversation · Announcement", tests:"听校园生活中的两人对话或广播通知，考谈话目的、细节、说话人接下来会做什么，以及通知里的变化和要求。",
      points:["目的题：开头一两句通常说明来意","细节题：时间、地点、数字、条件","推断题：根据建议和结尾判断下一步","通知里的变化（改期、改地点、新规定）和原因"],
      traps:["听到的第一个时间或数字不一定是答案（6:15 和 6:30）","对话中途被否定或修改的信息","把例子当成主旨"],
      practice:"听力 → 对话（12 段）· 通知（10 则）", statKey:"listen:short" },
    { name:"学术讲座 Academic Talk", tests:"听一段 175–250 词的课堂讲解，考主旨、细节、例子的作用、推断、组织结构和讲者态度。",
      points:["开头的主题句和 Today let's talk about…","结构词：first / second / another、however、so","说话意图题：讲者为什么提到某个例子或常见误解","态度题：承认优点再指出问题（it can…, but…）"],
      traps:["只在讲座某一部分成立的选项冒充主旨","讲者先说常见误解再纠正，误解出现在选项里","记了细节却没记住它支持的观点"],
      practice:"听力 → 学术讲座（8 段）· 完整模拟", statKey:"listen:talk" }
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


/* ---------- 雅思（学术类）：来自 IELTS 官网 ---------- */
const IELTS_STRUCTURE = [
  ["听力 Listening", "4 个部分：日常对话、日常独白、学术讨论、学术讲座，录音只播放一次", "40", "约 30 分钟"],
  ["阅读 Reading（学术类）", "3 篇长文，共 2,150–2,750 词", "40", "60 分钟"],
  ["写作 Writing（学术类）", "Task 1 图表描述（至少 150 词）· Task 2 议论文（至少 250 词）", "2", "60 分钟"],
  ["口语 Speaking", "Part 1 问答 · Part 2 话题卡 · Part 3 深入讨论，与考官面对面", "3 部分", "11–14 分钟"]
];
const IELTS_RESOURCES = [
  { name:"官方样题", org:"IELTS 官网", desc:"学术类和培训类各部分的官方样题和答案，可以免费下载。", url:"https://ielts.org/take-a-test/preparation-resources/sample-test-questions" },
  { name:"备考资源总页", org:"IELTS 官网", desc:"官方备考入口，包括样题、模拟考试和考试当天的说明。", url:"https://ielts.org/take-a-test/preparation-resources" },
  { name:"学术类考试形式详解", org:"IELTS 官网", desc:"各部分的题型、题量、时长和评分方式，是本页结构表的来源。", url:"https://ielts.org/organisations/ielts-for-organisations/test-types/ielts-academic-test/academic-test-format-in-detail" },
  { name:"分数说明", org:"IELTS 官网", desc:"0–9 分的含义，以及总分的计算和取整规则。", url:"https://ielts.org/for-test-takers/how-ielts-is-scored" },
  { name:"中国考区报名", org:"教育部教育考试院", desc:"中国大陆考生报名、考点查询和成绩相关事务。", url:"https://ielts.neea.cn/" }
];
const IELTS_SECTIONS = [
  { id:"vocab", name:"词汇", route:"vocab", tasks:[
    { name:"雅思词汇", tests:"词汇贯穿四个部分：听力和阅读靠同义替换出题，写作和口语的评分标准里都有一项专门看词汇。",
      points:["认得同义替换：题目和原文、录音常用不同的词表达同一个意思","听力填空要拼写正确，注意单复数","写作和口语里用准确、多样的词，而不是生僻词"],
      traps:["只认识单词的一个意思","会认不会拼，听力和阅读填空因拼写丢分","背了很多难词但用错搭配"],
      practice:"词汇 → 雅思词库 5,026 词，也可以导入老师布置的词表", statKey:"vocab:ielts" }
  ]},
  { id:"listening", name:"听力", route:"ilistening", tasks:[
    { name:"听力 Listening", tests:"四个部分由易到难：日常对话（如预订、咨询）、日常独白（如场所介绍）、学术场景的多人讨论、学术讲座。题型有填空（表格、笔记、流程图、句子）、选择、配对、地图或平面图标注、简答。",
      points:["每部分开始前先读题，预测答案是数字、日期、人名还是名词","注意字数要求，例如 NO MORE THAN TWO WORDS AND/OR A NUMBER","题目顺序一般和录音顺序一致","抓住 but、actually、in fact 后面的修正信息"],
      traps:["说话人先说一个答案又改口","拼写或单复数错误直接不得分","超出字数限制","题目和录音用词不同（同义替换），等原词出现时答案已经过去了"],
      practice:"听力 → 两套练习（8 个部分，80 题）· 整套模拟", statKey:"ilisten" }
  ]},
  { id:"reading", name:"阅读", route:"ireading", tasks:[
    { name:"阅读 Reading（学术类）", tests:"3 篇来自书籍、期刊、报纸的长文，60 分钟 40 题。题型包括判断题（True / False / Not Given，Yes / No / Not Given）、段落标题配对、信息配对、特征配对、句子结尾配对、各类填空、选择和简答。",
      points:["判断题：False 是与原文相反，Not Given 是原文没有提到","标题配对看段落主旨，不被段落中的细节词吸引","多数题型按原文顺序出题，配对题通常不按顺序","每篇大约 20 分钟，答案要在 60 分钟内写完，没有额外的誊写时间"],
      traps:["用常识而不是原文判断 True / False","被和原文相同的词吸引，忽略了意思变化","填空超出字数或改动了原文词形","在一道难题上花太多时间"],
      practice:"阅读 → 6 篇文章（80 题）· 三篇 60 分钟完整模拟", statKey:"iread" }
  ]},
  { id:"writing", name:"写作", route:"", tasks:[
    { name:"Task 1 图表描述", tests:"描述图表、表格、流程图或地图中的信息，至少 150 词，建议用 20 分钟。评分看任务完成度、连贯与衔接、词汇、语法四项。",
      points:["写一段概述（overview），点出最主要的趋势或特征","挑选关键数据进行比较，不用罗列每个数字","准确表达变化和比较：rise sharply、remain stable、twice as high as"],
      traps:["没有概述段","加入个人观点或猜测原因","数据写错，或时态和图表时间不一致"],
      practice:"本站暂未提供", statKey:"" },
    { name:"Task 2 议论文", tests:"就一个观点或问题写议论文，至少 250 词，建议用 40 分钟。分值是 Task 1 的两倍。",
      points:["先判断题目类型：是否同意、讨论双方观点、问题与解决、利弊分析","立场明确并贯穿全文","每个主体段一个中心论点，配解释和例子"],
      traps:["只回答了题目的一部分","堆砌背好的模板句，和题目关系不大","少于 250 词"],
      practice:"本站暂未提供", statKey:"" }
  ]},
  { id:"speaking", name:"口语", route:"ispeaking", tasks:[
    { name:"口语 Speaking", tests:"与考官面对面交流，全程录音。Part 1 约 4–5 分钟，回答家乡、学习、爱好等日常问题；Part 2 拿到话题卡，准备 1 分钟后讲 1–2 分钟；Part 3 约 4–5 分钟，围绕 Part 2 的话题深入讨论。评分看流利与连贯、词汇、语法、发音四项。",
      points:["Part 1 每题展开两三句，不只回答 yes / no","Part 2 用准备时间记关键词，按卡片上的提示讲满两分钟","Part 3 给出观点、理由和例子，可以比较过去和现在、推测未来"],
      traps:["Part 2 讲一分钟就没话了","明显背诵的答案，考官会换问题","为了用难词而影响流利度"],
      practice:"口语 → Part 1（12 个话题）· Part 2 话题卡（10 张）· Part 3 讨论（10 组）· 完整模拟", statKey:"ispeak" }
  ]}
];
const EXAM_GUIDE = {
  toefl:{ intro:"ETS 不公开发布真实考题，网上流传的「真题」「机经」多是回忆或泄露的版本，这里不收录。想熟悉真实考试，最可靠的是 ETS 官方的样题和模考（见下方「官方资源」）。本页整理新版考试的结构、每种题型考什么、常见陷阱，以及你在本站练习中各考点的正确率，帮你找准方向。",
    structTitle:"新版考试结构（2026 年 1 月 21 日起）", structure:STRUCTURE,
    scoreNote:"全程约 2 小时。阅读和听力是自适应的，实际题量和时长会有变化。每部分按 1–6 分计分，以半分为单位；总分是四部分的平均，四舍五入到半分。过渡期内成绩单还会给出对应的 0–120 分（例如 5 分对应 95 分以上）。数据来自 ETS 官网。",
    resources:RESOURCES, sections:SECTIONS },
  ielts:{ intro:"本页按雅思学术类整理。想做真题，可以用剑桥大学出版社出版的官方真题集《剑桥雅思》（需要购买），以及下方官网的免费样题；本站不收录真题和网传「机经」。本站的雅思部分目前有词汇、口语、阅读和听力，写作正在制作。",
    structTitle:"考试结构（学术类）", structure:IELTS_STRUCTURE,
    scoreNote:"听力、阅读、写作在同一天连续进行，口语可能安排在同一天或前后几天。每部分 0–9 分，以半分为单位；总分是四部分的平均分，取到最近的半分，平均分尾数为 .25 时进到半分、为 .75 时进到整分（例如 6.25 记 6.5，6.75 记 7.0）。学术类和培训类的听力、口语相同，阅读和写作不同。数据来自 IELTS 官网。",
    resources:IELTS_RESOURCES, sections:IELTS_SECTIONS }
};

const LISTEN_TYPES = { response:"选回应", main:"主旨", detail:"细节", purpose:"目的", function:"说话意图", infer:"推断", attitude:"态度", organization:"组织结构" };
const READ_TYPES = { word:"补全单词", main:"主旨", detail:"细节", vocab:"词汇", infer:"推断", purpose:"目的与修辞", negative:"否定事实", tone:"语气", structure:"文章结构" };

/* ---------- 个人数据 ---------- */
function bar(c, n){
  const p = n ? Math.round(c/n*100) : 0;
  const col = p>=80 ? "var(--good)" : p>=60 ? "var(--warn)" : "var(--bad)";
  return `<div class="bar"><i style="width:${p}%;background:${col}"></i></div><b>${n ? `${c}/${n} · ${p}%` : "未练习"}</b>`;
}
function statHTML(key){
  if(!key) return "";
  if((key==="iread" && App.ieltsReadingData) || (key==="ilisten" && App.ieltsListeningData)){
    const d = key==="iread" ? App.ieltsReadingData() : App.ieltsListeningData(), ks = key==="iread" ? ["tfng","ynng","headings","match","gap","mcq"] : ["gap","mcq","match"];
    const IT = App.iq.TYPE;
    return ks.map(k => { const t = d.types[k] || [0,0]; return `<div class="tstat wide"><span>${IT[k]}</span>${bar(t[0], t[1])}</div>` }).join("");
  }
  if(key==="ispeak" && App.ieltsSpeakingData){
    const h = App.ieltsSpeakingData().history, n = m => h.filter(x => x.mode===m).length;
    return h.length ? `<p class="note" style="margin:0">Part 1 练了 ${n("p1")} 次，Part 2 ${n("p2")} 次，Part 3 ${n("p3")} 次，完整模拟 ${n("full")} 次</p>` : `<p class="note" style="margin:0">还没有练习记录</p>`;
  }
  if(key==="vocab:ielts" && App.vocab){
    const p = App.vocab.progress("ielts");
    return `<div class="tstat wide"><span>已学</span>${bar(p.learned, p.total)}</div><div class="tstat wide"><span>已掌握</span>${bar(p.mastered, p.total)}</div>`;
  }
  const rd = App.readingData ? App.readingData() : null, wd = App.writingData ? App.writingData() : null, sd = App.speakingData ? App.speakingData() : null, ld = App.listeningData ? App.listeningData() : null;
  if(key==="read:word" && rd){ const t = rd.types.word || [0,0]; return `<div class="tstat"><span>正确率</span>${bar(t[0], t[1])}</div>` }
  if(key==="read:daily" && rd){
    return ["purpose","detail","infer","tone"].map(k => { const t = rd.types[k] || [0,0]; return `<div class="tstat"><span>${READ_TYPES[k]}</span>${bar(t[0], t[1])}</div>` }).join("") + `<p class="note" style="margin:0">日常阅读和学术文章的题型统计合在一起计算。</p>`;
  }
  if(key==="read:academic" && rd){
    return ["main","detail","vocab","infer","purpose","negative","structure"].map(k => { const t = rd.types[k] || [0,0]; return `<div class="tstat"><span>${READ_TYPES[k]}</span>${bar(t[0], t[1])}</div>` }).join("");
  }
  if(key.startsWith("listen:") && ld){
    const keys = { "listen:response":["response"], "listen:short":["purpose","detail","infer"], "listen:talk":["main","detail","function","infer","attitude","organization"] }[key];
    return keys.map(k => { const t = ld.types[k] || [0,0]; return `<div class="tstat"><span>${LISTEN_TYPES[k]}</span>${bar(t[0], t[1])}</div>` }).join("") + (key==="listen:response" ? "" : `<p class="note" style="margin:0">对话、通知和讲座的同类题型合在一起统计。</p>`);
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
  const G = EXAM_GUIDE[App.exam==="ielts" ? "ielts" : "toefl"];
  $("#view-guide").innerHTML = `<div class="guide">
    <section>
      <h2 class="page-title">${App.exam==="ielts" ? "雅思" : "托福"}考点地图</h2>
      <p class="note" style="max-width:70ch">${esc(G.intro)}</p>
    </section>

    <section class="guide-block">
      <p class="section-label">${G.structTitle}</p>
      <div class="tablewrap"><table><thead><tr><th>部分</th><th>题型</th><th>题量</th><th>时长</th></tr></thead><tbody>
        ${G.structure.map(r => `<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td class="num">${r[2]}</td><td>${r[3]}</td></tr>`).join("")}
      </tbody></table></div>
      <p class="note">${esc(G.scoreNote)}</p>
    </section>

    <section class="guide-block">
      <p class="section-label">官方资源</p>
      <div class="res-grid">${G.resources.map(r => `<a class="res" href="${r.url}" target="_blank" rel="noopener"><b>${esc(r.name)}</b><span class="note">${esc(r.org)}</span><span>${esc(r.desc)}</span></a>`).join("")}</div>
    </section>

    ${G.sections.map(s => `<section class="guide-block">
      <div class="row" style="justify-content:space-between"><h3 class="g-sec">${s.name}</h3>${s.route ? `<a class="btn alt" href="${App.href(s.route)}">去练习${s.name}</a>` : ""}</div>
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

App.routes.guide = { init(){ document.addEventListener("exam-change", () => { if(App.route==="guide") render() }) }, enter(){ render() } };
})();
