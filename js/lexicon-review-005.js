/* Batch 005: dictionary checks dated 2026-11-16.
   Chinese glosses are summaries; English examples are original.
   IPA follows the linked dictionary; optional-schwa typography is flattened. */
(function(){
const raw=`
analyze|vt.|分析；系统细致地研究（美式拼写；英式 analyse）|ˈæn.əl.aɪz|ˈæn.əl.aɪz
anarchist|n.|无政府主义者；意图推翻现有政府和法律的人（贬义用法）|ˈæn.ə.kɪst|ˈæn.ɚ.kɪst
anatomy|n.|解剖学；动植物的结构；身体（幽默）；深入剖析（正式）|əˈnæt.ə.mi|əˈnæt̬.ə.mi
ancestor|n.|祖先；先祖；动植物的祖先；事物的原型或前身|ˈæn.ses.təʳ|ˈæn.ses.tɚ
ancestral|adj.|祖先的；祖传的（常置于名词前）|ænˈses.trəl|ænˈses.trəl
ancestry|n.|祖先；世系；血统；家族起源|ˈæn.ses.tri|ˈæn.ses.tri
anchor|n./v.|n. 锚；支柱；新闻主播（尤美）；接力赛最后一棒选手　v. 抛锚；固定；主持新闻；担任最后一棒|ˈæŋ.kəʳ|ˈæŋ.kɚ
ancient|adj.|古代的；古老的；年代久远的；非常旧的（非正式）|ˈeɪn.ʃənt|ˈeɪn.ʃənt
anecdotal|adj.|基于个人见闻或传闻而非严谨研究的|ˌæn.ɪkˈdəʊ.təl|ˌæn.ɪkˈdoʊ.t̬əl
anecdote|n.|轶事；趣闻；关于某人或某事的短故事|ˈæn.ɪk.dəʊt|ˈæn.ɪk.doʊt
anesthesia|n.|麻醉；麻醉状态；感觉缺失（医学；美式拼写，英式 anaesthesia）|ˌæn.əsˈθiː.zi.ə|ˌæn.əsˈθiː.zi.ə
anesthetic|n./adj.|n. 麻醉剂　adj. 麻醉的；引起麻醉的；失去感觉的（美式拼写，英式 anaesthetic）|ˌæn.əsˈθet.ɪk|ˌæn.əsˈθet̬.ɪk
anger|n./vt.|n. 愤怒；怒气　vt. 激怒；使生气|ˈæŋ.ɡəʳ|ˈæŋ.ɡɚ
angle|n./v.|n. 角；角度；观察位置；看问题的角度　v. （使）倾斜；使信息针对某一群体|ˈæŋ.ɡəl|ˈæŋ.ɡəl
angry|adj.|生气的；愤怒的|ˈæŋ.ɡri|ˈæŋ.ɡri
anguish|n.|极度痛苦；剧烈的身心痛苦|ˈæŋ.ɡwɪʃ|ˈæŋ.ɡwɪʃ
angular|adj.|有角的；角的；棱角分明的；瘦骨嶙峋的|ˈæŋ.ɡjə.ləʳ|ˈæŋ.ɡjə.lɚ
animal|n./adj.|n. 动物；兽类；粗野残暴的人（非正式）；某一类型的人或事物　adj. 动物的；来自动物的；肉体欲望的|ˈæn.ɪ.məl|ˈæn.ɪ.məl
animated|adj.|兴致勃勃的；生气勃勃的；动画的|ˈæn.ɪ.meɪ.tɪd|ˈæn.ə.meɪ.t̬ɪd
animosity|n.|强烈的敌意；憎恶；仇恨|ˌæn.ɪˈmɒs.ə.ti|ˌæn.əˈmɑː.sə.t̬i
ankle|n.|踝；踝关节；脚踝|ˈæŋ.kəl|ˈæŋ.kəl
annex|n./vt.|n. 附属建筑（美式拼写，英式 annexe）；文件附件　vt. 吞并；兼并领土|ˈæn.ɪks|ˈæn.ɪks
annihilate|vt.|彻底毁灭；消灭；彻底击败（非正式）|əˈnaɪ.ə.leɪt|əˈnaɪ.ə.leɪt
anniversary|n.|周年纪念日|ˌæn.ɪˈvɜː.sər.i|ˌæn.əˈvɝː.sɚ.i
annotate|vt.|给文本或图像加注释；给数据加标注（计算机、语言学）|ˈæn.ə.teɪt|ˈæn.ə.teɪt
announce|vt.|宣布；公布；通告；预示…即将发生|əˈnaʊns|əˈnaʊns
announcement|n.|公告；声明；通告；宣布|əˈnaʊns.mənt|əˈnaʊns.mənt
announcer|n.|播音员；广播或电视节目报幕员；体育赛事播报员|əˈnaʊn.səʳ|əˈnaʊn.sɚ
annoy|vt.|使烦恼；使恼怒；惹烦|əˈnɔɪ|əˈnɔɪ
annoying|adj.|令人恼火的；令人烦恼的|əˈnɔɪ.ɪŋ|əˈnɔɪ.ɪŋ
annual|adj./n.|adj. 每年一次的；一年的；年度的　n. 年刊；年鉴；一年生植物|ˈæn.ju.əl|ˈæn.ju.əl
annually|adv.|每年；一年一次地|ˈæn.ju.ə.li|ˈæn.ju.ə.li
annuity|n.|年金；按年支付的固定款项；提供年金的保险或投资|əˈnjuː.ə.ti|əˈnjuː.ə.t̬i
annul|vt.|宣布（婚姻、法律、协议等）无效；撤销（法律）|əˈnʌl|əˈnʌl
anomalous|adj.|异常的；反常的；不符合常规或其他情况的|əˈnɒm.ə.ləs|əˈnɑː.mə.ləs
anomaly|n.|异常事物；反常现象；不一致之处（正式）|əˈnɒm.ə.li|əˈnɑː.mə.li
anonymous|adj.|匿名的；姓名不详的；无明显特色的|əˈnɒn.ɪ.məs|əˈnɑː.nə.məs
antagonism|n.|对抗；敌意；强烈反对|ænˈtæɡ.ən.ɪ.zəm|ænˈtæɡ.ən.ɪ.zəm
antagonist|n.|对手；反对者（正式）；拮抗肌（解剖）；拮抗物质（生物、化学）|ænˈtæɡ.ən.ɪst|ænˈtæɡ.ən.ɪst
antagonize|vt.|使反感；使与自己对立；招惹（英式通常拼 antagonise）|ænˈtæɡ.ə.naɪz|ænˈtæɡ.ə.naɪz
antarctic|n./adj.|n. 南极地区（the Antarctic，含大陆及周边海域）　adj. 南极的（通常首字母大写）|ænˈtɑːk.tɪk|ænˈtɑːrk.tɪk
Antarctica|n.|南极洲；南极大陆|ænˈtɑːk.tɪ.kə|ænˈtɑːrk.tɪ.kə
antecedent|n./adj.|n. 前身；前因；祖先；先行词（语法）；条件句的前件（逻辑、数学）　adj. 先前的（正式）|ˌæn.tiˈsiː.dənt|ˌæn.t̬əˈsiː.dənt
antedate|vt.|早于；先于；把日期填早；倒填日期（正式）|ˌæn.tiˈdeɪt|ˈæn.t̬i.deɪt
anthem|n.|国歌；对团体有特殊意义的歌曲；颂歌；唱诗班合唱的宗教歌曲|ˈæn.θəm|ˈæn.θəm
anthology|n.|（文学、音乐等的）作品选集|ænˈθɒl.ə.dʒi|ænˈθɑː.lə.dʒi
anthropology|n.|人类学|ˌæn.θrəˈpɒl.ə.dʒi|ˌæn.θrəˈpɑː.lə.dʒi
antibiotic|n./adj.|n. 抗生素　adj. 抗生素的；含抗生素的；抗菌的|ˌæn.ti.baɪˈɒt.ɪk|ˌæn.t̬i.baɪˈɑː.t̬ɪk
anticipate|vt.|预料；预期；预先准备或采取行动|ænˈtɪs.ɪ.peɪt|ænˈtɪs.ə.peɪt
anticipation|n.|期待；盼望；预先准备（in anticipation of）|ænˌtɪs.ɪˈpeɪ.ʃən|ænˌtɪs.əˈpeɪ.ʃən
antipathy|n.|强烈反感；厌恶；敌意|ænˈtɪp.ə.θi|ænˈtɪp.ə.θi
antiquate|vt.|使过时；使陈旧；使呈古旧外观|ˈæn.tɪ.kweɪt|ˈæn.t̬ə.kweɪt
antiquated|adj.|陈旧的；过时的；不适应现代社会的|ˈæn.tɪ.kweɪ.tɪd|ˈæn.t̬ə.kweɪ.t̬ɪd
antique|n./adj.|n. 古董；古物；老古董（幽默）　adj. 古董的；古旧而有价值的；老式的|ænˈtiːk|ænˈtiːk
antiquity|n.|古代；远古；古物；古迹（后两义常用复数）|ænˈtɪk.wə.ti|ænˈtɪk.wə.t̬i
antiseptic|n./adj.|n. 防腐剂；皮肤或伤口抗菌剂　adj. 防感染的；无菌的；过于整洁而缺乏特色的（贬义）|ˌæn.tiˈsep.tɪk|ˌæn.t̬əˈsep.tɪk
antonym|n.|反义词（语言学）|ˈæn.tə.nɪm|ˈæn.t̬ən.ɪm
anxiety|n.|焦虑；忧虑；令人担忧的事；渴望；焦虑症|æŋˈzaɪ.ə.ti|æŋˈzaɪ.ə.t̬i
anxious|adj.|焦虑的；忧虑的；渴望的；急切想做某事的|ˈæŋk.ʃəs|ˈæŋk.ʃəs
anyhow|adv.|无论如何；反正；总之；随便地；杂乱地|ˈen.i.haʊ|ˈen.i.haʊ
apartment|n.|公寓套房（尤美）；豪华套间（英式复数用法）|əˈpɑːt.mənt|əˈpɑːrt.mənt
apathetic|adj.|漠不关心的；缺乏兴趣或热情的；不愿采取行动的|ˌæp.əˈθet.ɪk|ˌæp.əˈθet̬.ɪk
ape|n./vt.|n. 猿；类人猿　vt. 笨拙模仿；仿效（常含贬义）|eɪp|eɪp
aperture|n.|小孔；窄口；（相机）光圈孔径|ˈæp.ə.tʃəʳ|ˈæp.ɚ.tʃɚ
apex|n./adj.|n. 顶点；最高点；鼎盛时期；器官尖端（医学）　adj. 最高层级的（金融、法律、政治）|ˈeɪ.peks|ˈeɪ.peks
apologetic|adj.|表示歉意的；愧疚的|əˌpɒl.əˈdʒet.ɪk|əˌpɑː.ləˈdʒet̬.ɪk
apologize|vi.|道歉；表示歉意（英式通常拼 apologise）|əˈpɒl.ə.dʒaɪz|əˈpɑː.lə.dʒaɪz
apology|n.|道歉；歉意；因无法出席而致歉的口信（复数）；对信仰或制度的辩护（正式）|əˈpɒl.ə.dʒi|əˈpɑː.lə.dʒi
apostasy|n.|背弃宗教或政治信仰；叛教；脱党（正式）|əˈpɒs.tə.si|əˈpɑː.stə.si
apostrophe|n.|撇号（用于省略、所有格等，如 I'm、Tom's）|əˈpɒs.trə.fi|əˈpɑː.strə.fi
appall|vt.|使震惊；使惊骇；使强烈反感（美式拼写，英式 appal）|əˈpɔːl|əˈpɑːl
apparatus|n.|器械；设备；装置；组织机构；运作体系|ˌæp.əˈreɪ.təs|ˌæp.əˈræt̬.əs
apparel|n.|服装（尤美，用于商业；一般用法属正式或旧式）|əˈpær.əl|əˈper.əl
apparent|adj.|明显的；显而易见的；表面上的；看似真实的|əˈpær.ənt|əˈper.ənt
appeal|n./v.|n. 呼吁；恳求；上诉；吸引力　v. 呼吁；恳求；上诉；引起兴趣或吸引|əˈpiːl|əˈpiːl
appealing|adj.|吸引人的；有趣的；恳求帮助或保护的|əˈpiː.lɪŋ|əˈpiː.lɪŋ
appear|vi.|出现；显现；似乎；显得；登台演出；出庭|əˈpɪəʳ|əˈpɪr
appearance|n.|外貌；外观；表象；出现；公开露面；演出；出庭|əˈpɪə.rəns|əˈpɪr.əns
appendix|n.|阑尾；（书籍、报告等的）附录|əˈpen.dɪks|əˈpen.dɪks
appetite|n.|食欲；胃口；欲望；强烈兴趣（常接 for）|ˈæp.ə.taɪt|ˈæp.ə.taɪt
applaud|v.|鼓掌；为…鼓掌；赞赏；赞同（后两义正式）|əˈplɔːd|əˈplɑːd
appliance|n.|器具；设备；尤指家用电器|əˈplaɪ.əns|əˈplaɪ.əns
applicant|n.|申请人；求职者|ˈæp.lɪ.kənt|ˈæp.lə.kənt
application|n.|申请；申请书；应用程序；应用；用途；勤奋；涂抹；涂层；（法律等的）适用|ˌæp.lɪˈkeɪ.ʃən|ˌæp.ləˈkeɪ.ʃən
applied|adj.|应用的；实用的（学科，常置于名词前）；也为 apply 的过去式和过去分词|əˈplaɪd|əˈplaɪd
apply|v.|申请；适用；应用；使用；涂抹；施加；专心致力于（apply oneself）|əˈplaɪ|əˈplaɪ
appoint|vt.|任命；委派；指定或约定（日期、时间，正式）|əˈpɔɪnt|əˈpɔɪnt
appointment|n.|预约；约定；任命；职位|əˈpɔɪnt.mənt|əˈpɔɪnt.mənt
apportion|vt.|分配；分摊；分派（责任，正式）|əˈpɔː.ʃən|əˈpɔːr.ʃən
appraisal|n.|评估；评价；估价；员工工作评议|əˈpreɪ.zəl|əˈpreɪ.zəl
appraise|vt.|评估；评价；估价（尤美）|əˈpreɪz|əˈpreɪz
appreciable|adj.|足以察觉的；相当可观的；足以产生影响的（数量或变化）|əˈpriː.ʃə.bəl|əˈpriː.ʃə.bəl
appreciate|v.|欣赏；赏识；感激；理解并意识到重要性；升值（不及物）|əˈpriː.ʃi.eɪt|əˈpriː.ʃi.eɪt
appreciation|n.|欣赏；赏识；理解；感激；升值|əˌpriː.ʃiˈeɪ.ʃən|əˌpriː.ʃiˈeɪ.ʃən
apprehend|vt.|逮捕；拘捕；理解；领会（正式）|ˌæp.rɪˈhend|ˌæp.rəˈhend
apprehension|n.|忧虑；担心；逮捕；理解；领会（后两义正式）|ˌæp.rɪˈhen.ʃən|ˌæp.rəˈhen.ʃən
apprentice|n./v.|n. 学徒；徒弟　v. 使当学徒（常用被动，旧式）；当学徒（美）|əˈpren.tɪs|əˈpren.t̬ɪs
appropriation|n.|擅自取用；侵占；文化挪用（常含贬义）；专用拨款（正式）|əˌprəʊ.priˈeɪ.ʃən|əˌproʊ.priˈeɪ.ʃən
approach|v./n.|v. 接近；临近；着手处理；接洽　n. 方法；接近；通路；接洽|əˈprəʊtʃ|əˈproʊtʃ
appropriate|adj./vt.|adj. 适当的；合适的　vt. 擅用；侵占；拨款；将他种文化的元素据为己用（贬义）|əˈprəʊ.pri.ət|əˈproʊ.pri.ət
`;
const readings={
  annex:[{label:"n. 附属建筑；附件",uk:"ˈæn.ɪks",us:"ˈæn.ɪks"},{label:"vt. 吞并",uk:"ænˈeks",us:"ænˈeks"}],
  appropriate:[{label:"adj. 合适的",uk:"əˈprəʊ.pri.ət",us:"əˈproʊ.pri.ət"},{label:"vt. 擅用；拨款",uk:"əˈprəʊ.pri.eɪt",us:"əˈproʊ.pri.eɪt"}],
  anesthesia:[{label:"n.（读法一）",uk:"ˌæn.əsˈθiː.zi.ə",us:"ˌæn.əsˈθiː.zi.ə"},{label:"n.（读法二）",uk:"ˌæn.əsˈθiː.ʒə",us:"ˌæn.əsˈθiː.ʒə"}]
};
const notes={
  anecdotal:"强调以见闻而非严谨研究为依据，避免仅以趣闻的概括学术语境。",
  annex:"名词和动词分别照录，重音及第二音节元音不同；补齐建筑与文件附件。",
  antedate:"所查剑桥英美重音不同，按原标注分别保留。",
  antibiotic:"说明抑制或杀灭细菌，不将抗生素泛化成治疗一切感染的药物。",
  antiseptic:"区分伤口防感染用品与抗生素；补齐形容词及贬义比喻。",
  apparent:"分开明显与表面上看似两义，不能混为同一程度的确定判断。",
  appreciable:"指足以察觉或产生影响，避免误作值得感激的。",
  appropriate:"形容词尾音与动词尾音不同，分别照录；动词区分侵占和拨款。",
  antiquate:"释义依据柯林斯独立词条，英美音依据剑桥本词发音页，不从 antiquated 推导。",
  anesthetic:"剑桥核对名词及英美音，柯林斯补充形容词义，不因剑桥仅列名词就删掉形容词。",
  antarctic:"区分南极地区与南极大陆 Antarctica；显示原词库小写词头但注明规范大写。",
  applied:"区分应用学科的形容词义与 apply 的过去式、过去分词身份。"
};
const senses={
  anatomy:[["n. 解剖学","She studies anatomy at medical school."],["n. 结构","The diagram shows the anatomy of a leaf."],["n. 深入剖析（正式）","The book offers an anatomy of political failure."]],
  ancestor:[["n. 祖先","One ancestor moved here from a distant island."],["n. 前身","This instrument is an ancestor of the modern piano."]],
  anchor:[["n. 锚","The anchor held the boat in place."],["n. 精神支柱","Her family became an anchor during difficult times."],["n. 新闻主播","The anchor introduced the evening report."],["vt. 固定","Workers anchor the frame to the wall."]],
  anger:[["n. 愤怒","He struggled to control his anger."],["vt. 激怒","The unfair decision may anger local residents."]],
  angle:[["n. 角","Measure the angle between the two lines."],["n. 看问题的角度","Consider the question from another angle."],["vt. 使倾斜","Angle the mirror towards the window."]],
  animal:[["n. 动物","The animal returned to its shelter."],["n. 某一类型的人","She describes herself as a social animal."],["adj. 来自动物的","The recipe contains no animal fat."]],
  animated:[["adj. 兴致勃勃的","The students had an animated discussion."],["adj. 动画的","She designs characters for animated films."]],
  annex:[["n. 附属建筑","The museum opened an annex beside the main building."],["n. 文件附件","The figures are listed in the annex."],["vt. 吞并","The ruler sought to annex the neighbouring province."]],
  annual:[["adj. 每年的","The club holds an annual meeting."],["n. 一年生植物","This annual produces flowers throughout the summer."],["n. 年刊","The library keeps each annual in its archive."]],
  anonymous:[["adj. 匿名的","An anonymous donor paid for the repairs."],["adj. 无明显特色的","They stayed in an anonymous office building."]],
  antagonist:[["n. 对手","The senator debated her strongest antagonist."],["n. 拮抗物质（药理）","The drug acts as a receptor antagonist."]],
  antecedent:[["n. 前身","Historians traced the antecedent of the modern institution."],["n. 先行词（语法）","The pronoun refers back to its antecedent."],["adj. 先前的（正式）","The study examines antecedent conditions."]],
  antedate:[["vt. 早于","These ruins antedate the medieval castle."],["vt. 倒填日期","The clerk refused to antedate the contract."]],
  antique:[["n. 古董","The dealer examined the antique carefully."],["adj. 古董的","She inherited an antique desk."]],
  antiquity:[["n. 古代","The tradition dates back to antiquity."],["n. 古物（常用复数）","The museum displays antiquities from the region."]],
  antiseptic:[["n. 皮肤或伤口抗菌剂","The nurse cleaned the cut with antiseptic."],["adj. 防感染的","She applied an antiseptic cream."],["adj. 整洁得缺乏特色的（贬义）","The critic disliked the hotel's antiseptic atmosphere."]],
  anxiety:[["n. 焦虑","The delay caused considerable anxiety."],["n. 渴望","In her anxiety to finish, she overlooked an error."]],
  anxious:[["adj. 忧虑的","He felt anxious about the test results."],["adj. 急切想做的","She is anxious to begin her new job."]],
  anyhow:[["adv. 反正","The tickets are expensive, and I cannot go anyhow."],["adv. 随便地","He threw his clothes into the suitcase anyhow."]],
  ape:[["n. 猿","The ape reached for a branch."],["vt. 模仿（贬义）","The new design merely apes an older model."]],
  apex:[["n. 顶点","Draw a line from the apex to the base."],["n. 鼎盛时期","The artist reached the apex of her career."],["adj. 最高层级的（法律）","The case went before the apex court."]],
  apology:[["n. 道歉","He sent a written apology for the mistake."],["n. 辩护（正式）","The essay is an apology for the old political system."]],
  apparatus:[["n. 设备","The laboratory bought new measuring apparatus."],["n. 运作体系","The reform changed the administrative apparatus."]],
  apparent:[["adj. 明显的","Her relief was apparent to everyone."],["adj. 表面上的","The apparent simplicity hides a complex process."]],
  appeal:[["n. 呼吁","The charity launched an appeal for donations."],["n. 吸引力","The village retains its quiet appeal."],["n. 上诉","The court rejected the appeal."],["vi. 引起兴趣","The proposal may appeal to younger voters."]],
  appealing:[["adj. 吸引人的","The plan offers an appealing combination of benefits."],["adj. 恳求的","The puppy gave us an appealing look."]],
  appear:[["vi. 出现","Small cracks may appear in the paint."],["vi. 似乎","The calculations appear to be correct."],["vi. 演出","She will appear in a new play next month."]],
  appearance:[["n. 外貌","His appearance changed after the haircut."],["n. 公开露面","The actor made a brief appearance at the festival."]],
  appendix:[["n. 阑尾","The surgeon removed her appendix."],["n. 附录","The appendix contains the survey questions."]],
  appetite:[["n. 食欲","The illness reduced his appetite."],["n. 强烈兴趣","She has an appetite for adventure."]],
  applaud:[["v. 鼓掌","The audience began to applaud."],["vt. 赞赏","We applaud the decision to protect the forest."]],
  application:[["n. 申请","Please submit your application by Friday."],["n. 应用程序","The application stores notes on your device."],["n. 应用","The research has a practical application in farming."],["n. 勤奋","Success requires ability and application."],["n. 涂抹","Allow the paint to dry between applications."]],
  apply:[["vi. 申请","You can apply for the course online."],["vi. 适用","The rule does not apply to children."],["vt. 应用","Try to apply the method to another problem."],["vt. 涂抹","Apply a thin layer of cream to the skin."],["v. 专心致力于","She decided to apply herself to her studies."]],
  appointment:[["n. 预约","I have an appointment with the dentist."],["n. 任命","The committee confirmed her appointment as director."]],
  appraise:[["vt. 评价","The team will appraise the risks."],["vt. 估价（尤美）","An expert will appraise the painting."]],
  appreciate:[["vt. 欣赏","Visitors appreciate the quiet beauty of the garden."],["vt. 感激","We appreciate your help with the project."],["vt. 理解其重要性","They appreciate the need for careful planning."],["vi. 升值","The property may appreciate over time."]],
  appreciation:[["n. 欣赏","The course develops an appreciation of music."],["n. 感激","She wrote a note to express her appreciation."],["n. 升值","The investment benefited from capital appreciation."]],
  apprehend:[["vt. 逮捕","The police hope to apprehend the suspect."],["vt. 理解（正式）","It is difficult to apprehend the scale of the change."]],
  apprehension:[["n. 忧虑","He waited for the results with apprehension."],["n. 逮捕（正式）","The operation led to the apprehension of the suspect."],["n. 理解（正式）","The text demands a precise apprehension of the argument."]],
  apprentice:[["n. 学徒","The apprentice learned to repair the old clock."],["v. 当学徒（美）","She chose to apprentice with a local carpenter."]],
  approach:[["v. 接近","We watched the train approach the platform."],["vt. 处理","We need to approach the problem carefully."],["vt. 接洽","They will approach the bank for a loan."],["n. 方法","The teacher suggested a different approach."],["n. 通路","Snow blocked the northern approach to the village."]],
  appropriate:[["adj. 合适的","Choose appropriate clothing for the weather."],["vt. 擅用；侵占","Officials must not appropriate public funds for personal use."],["vt. 拨款","The council will appropriate money for the repairs."]]
};
senses.appropriation=[["n. 擅用；侵占","The court examined the alleged appropriation of public property."],["n. 文化挪用","The exhibition prompted a debate about cultural appropriation."],["n. 专用拨款（正式）","The committee approved an appropriation for school repairs."]];
const phPages=new Set('anchor angry annoy anxious apology approach appear antiquate annuity'.split(' '));
const records=raw.trim().split('\n').map(line=>{
  const [w,pos,cn,uk,us]=line.split('|'),source=`https://dictionary.cambridge.org/dictionary/english/${w.toLowerCase()}`;
  return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"005",file:"js/lexicon-review-005.js",
    reason:notes[w]||"依据所链词典核对现代常用学习义、词性和英美音；专业及语域限制分别标注。",
    senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
    pronunciationSource:phPages.has(w)?`https://dictionary.cambridge.org/pronunciation/english/${w.toLowerCase()}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('antiquate').source="https://www.collinsdictionary.com/dictionary/english/antiquate";
get('anesthetic').sources=[get('anesthetic').source,"https://www.collinsdictionary.com/dictionary/english/anesthetic"];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"005",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[]}]);
for(const r of records){
  window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
