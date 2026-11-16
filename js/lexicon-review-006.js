/* Batch 006, dictionary checks 2026-11-16. Glosses are Chinese summaries;
   examples are original. Optional-schwa typography is flattened in IPA. */
(function(){
const raw=`
approval|n.|赞许；赞同；正式批准；许可|əˈpruː.vəl|əˈpruː.vəl
approve|v.|vt. 批准；正式同意　vi. 赞成；认可（approve of）|əˈpruːv|əˈpruːv
approximate|adj./v.|adj. 大约的；近似的　v. 接近；近似于（正式）|əˈprɒk.sɪ.mət|əˈprɑːk.sə.mət
approximately|adv.|大约；近似地|əˈprɒk.sɪ.mət.li|əˈprɑːk.sə.mət.li
April|n.|四月（缩写 Apr.）|ˈeɪ.prəl|ˈeɪ.prəl
apt|adj.|恰当的；贴切的；易于或常常做…的（be apt to）；有天赋的（正式）|æpt|æpt
aptitude|n.|天资；天赋；自然的才能或技能|ˈæp.tɪ.tʃuːd|ˈæp.tə.tuːd
aptly|adv.|恰当地；贴切地|ˈæpt.li|ˈæpt.li
aquamarine|n./adj.|n. 海蓝宝石；蓝绿色　adj. 海蓝宝石制的；镶海蓝宝石的；蓝绿色的|ˌæk.wə.məˈriːn|ˌæk.wə.məˈriːn
aquarium|n.|水族箱；水族馆|əˈkweə.ri.əm|əˈkwer.i.əm
aquatic|adj.|水生的；水中的；与水有关的|əˈkwæt.ɪk|əˈkwɑː.t̬ɪk
arable|adj.|可耕作的；适于种植作物的；种植作物的|ˈær.ə.bəl|ˈer.ə.bəl
arbitrary|adj.|任意的；无计划或无依据的；专断的；专横的（贬义）|ˈɑː.bɪ.trər.i|ˈɑːr.bə.trer.i
arbitration|n.|仲裁；由独立第三方裁决争端的程序|ˌɑː.bɪˈtreɪ.ʃən|ˌɑːr.bəˈtreɪ.ʃən
arbitrator|n.|仲裁人；仲裁员|ˈɑː.bɪ.treɪ.təʳ|ˈɑːr.bə.treɪ.t̬ɚ
arboreal|adj.|树的；树栖的（生物学）|ɑːˈbɔː.ri.əl|ɑːrˈbɔːr.i.əl
arc|n./vi.|n. 弧；弧线；电弧；故事情节的发展线　vi. 作弧线运动；产生电弧|ɑːk|ɑːrk
arch|n./v./adj.|n. 拱；拱门；拱形；足弓　v. （使）成弓形；拱起　adj. 调皮而会意的；自命不凡的（贬义）|ɑːtʃ|ɑːrtʃ
archaeological|adj.|考古学的；考古的（也拼 archeological）|ˌɑː.ki.əˈlɒdʒ.ɪ.kəl|ˌɑːr.ki.əˈlɑː.dʒɪ.kəl
archaeology|n.|考古学（也拼 archeology）|ˌɑː.kiˈɒl.ə.dʒi|ˌɑːr.kiˈɑː.lə.dʒi
archaic|adj.|古代的；古老的；陈旧的；已不通行的|ɑːˈkeɪ.ɪk|ɑːrˈkeɪ.ɪk
archipelago|n.|群岛；多岛屿的海域|ˌɑː.kɪˈpel.ə.ɡəʊ|ˌɑːr.kəˈpel.ə.ɡoʊ
architect|n.|建筑师；设计师；方案的策划者|ˈɑː.kɪ.tekt|ˈɑːr.kə.tekt
architectural|adj.|建筑的；建筑学的；建筑设计的|ˌɑː.kɪˈtek.tʃər.əl|ˌɑːr.kəˈtek.tʃɚ.əl
architecture|n.|建筑学；建筑设计；建筑风格；（计算机等的）架构|ˈɑː.kɪ.tek.tʃəʳ|ˈɑːr.kə.tek.tʃɚ
archive|n./vt.|n. 档案；档案馆；电子存档文件　vt. 将…存档；归档|ˈɑː.kaɪv|ˈɑːr.kaɪv
arctic|n./adj.|n. 北极地区（the Arctic）　adj. 北极的；极寒的|ˈɑːk.tɪk|ˈɑːrk.tɪk
ardent|adj.|热情的；热烈的；热切的（常置于名词前）|ˈɑː.dənt|ˈɑːr.dənt
ardor|n.|热情；热忱；炽热的爱（美式拼写；英式 ardour）|ˈɑː.dəʳ|ˈɑːr.dɚ
arduous|adj.|艰巨的；费力的；艰苦的|ˈɑː.dʒu.əs|ˈɑːr.dʒu.əs
area|n.|地区；区域；部位；领域；面积|ˈeə.ri.ə|ˈer.i.ə
arena|n.|竞技场；表演场地；活动或争论的领域|əˈriː.nə|əˈriː.nə
argue|v.|vi. 争吵；争论　v. 论证；据理主张　vt. 表明；显示|ˈɑːɡ.juː|ˈɑːrɡ.juː
argument|n.|争论；争吵；论据；理由；论证；作品的主题或梗概（文学）|ˈɑːɡ.jə.mənt|ˈɑːrɡ.jə.mənt
aria|n.|咏叹调；歌剧等中的独唱曲|ˈɑː.ri.ə|ˈɑːr.i.ə
arid|adj.|干旱的；干燥的；无成效的；枯燥乏味的（后两义正式）|ˈær.ɪd|ˈer.ɪd
arise|vi.|发生；出现；产生；起床（文学）；过去式 arose，过去分词 arisen|əˈraɪz|əˈraɪz
aristocracy|n.|贵族阶层；贵族统治；贵族政体|ˌær.ɪˈstɒk.rə.si|ˌer.əˈstɑː.krə.si
aristocrat|n.|贵族；贵族阶层成员|ˈær.ɪ.stə.kræt|əˈrɪs.tə.kræt
arithmetic|n./adj.|n. 算术；算术运算　adj. 算术的|əˈrɪθ.mə.tɪk|əˈrɪθ.mə.tɪk
armament|n.|武装；扩充军备；武器装备（常用复数 armaments）|ˈɑː.mə.mənt|ˈɑːr.mə.mənt
armor|n.|盔甲；装甲；防护层；装甲车辆（美式拼写；英式 armour）|ˈɑː.məʳ|ˈɑːr.mɚ
armored|adj.|有装甲防护的；装甲部队的（美式拼写；英式 armoured）|ˈɑː.məd|ˈɑːr.mɚd
armory|n.|军械库；武器库；地方部队训练或集会的建筑（美式拼写；英式 armoury）|ˈɑː.mər.i|ˈɑːr.mɚ.i
armour|n.|盔甲；装甲；防护层；装甲车辆（英式拼写；美式 armor）|ˈɑː.məʳ|ˈɑːr.mɚ
arms|n.|武器；军火；也是 arm“手臂”等名词义的复数|ɑːmz|ɑːrmz
army|n.|军队；陆军；大群人；大批同类活动参与者；球队支持者群体（非正式）|ˈɑː.mi|ˈɑːr.mi
aroma|n.|香气；芳香（通常指食物或饮料的香味）|əˈrəʊ.mə|əˈroʊ.mə
aromatic|adj./n.|adj. 芳香的；芳香族的（化学）　n. 芳香植物或物质；芳香族化合物|ˌær.əˈmæt.ɪk|ˌer.əˈmæt̬.ɪk
arouse|vt.|激起（情绪或反应）；使产生性兴奋；激怒；唤醒（书面语）|əˈraʊz|əˈraʊz
arraign|vt.|提讯；传讯并要求对指控作有罪或无罪答辩（法律）|əˈreɪn|əˈreɪn
arrange|v.|安排；筹备；整理；排列；改编乐曲|əˈreɪndʒ|əˈreɪndʒ
arrangement|n.|安排；筹备；商定；协议；排列方式；插花；改编的乐曲|əˈreɪndʒ.mənt|əˈreɪndʒ.mənt
array|n./vt.|n. 一系列；大量；整齐的排列；数组（计算机）；数表或矩阵式排列（数学）　vt. 布置；排列；部署军队|əˈreɪ|əˈreɪ
arrest|vt./n.|vt. 逮捕；阻止；使停止；吸引注意（后两义正式）　n. 逮捕；停止（如 cardiac arrest 心搏骤停）|əˈrest|əˈrest
arrival|n.|到达；到来；到达的人或事物；新生婴儿（非正式）|əˈraɪ.vəl|əˈraɪ.vəl
arrogance|n.|傲慢；自大|ˈær.ə.ɡəns|ˈer.ə.ɡəns
arrogant|adj.|傲慢的；自大的|ˈær.ə.ɡənt|ˈer.ə.ɡənt
arsenal|n.|军械库；兵工库；武器储备|ˈɑː.sən.əl|ˈɑːr.sən.əl
art|n.|艺术；美术；艺术作品；艺术形式；人文学科（arts）；技巧；技艺|ɑːt|ɑːrt
artery|n.|动脉；交通干线；重要公路或铁路|ˈɑː.tər.i|ˈɑːr.t̬ɚ.i
arthritis|n.|关节炎|ɑːˈθraɪ.tɪs|ɑːrˈθraɪ.t̬əs
article|n.|文章；物品；冠词（语法）；条款；条文|ˈɑː.tɪ.kəl|ˈɑːr.t̬ɪ.kəl
articulate|adj./vt.|adj. 善于清楚表达的；表达清晰的　vt. 清楚表达；发音；使骨骼形成关节（医学）|ɑːˈtɪk.jə.lət|ɑːrˈtɪk.jə.lət
artifact|n.|人工制品；历史文物；实验方法造成的假象（科学）；数字图像或数据的伪影（计算机；英式 artefact）|ˈɑː.tə.fækt|ˈɑːr.t̬ə.fækt
artificial|adj.|人工的；人造的；假装的；不真诚的|ˌɑː.tɪˈfɪʃ.əl|ˌɑːr.t̬əˈfɪʃ.əl
artillery|n.|大炮；重型火炮；炮兵；炮兵部队|ɑːˈtɪl.ər.i|ɑːrˈtɪl.ɚ.i
artisan|n.|手艺人；工匠|ˈɑː.tɪ.zæn|ˈɑːr.t̬ə.zən
artistic|adj.|艺术的；有艺术才能的；善于欣赏艺术的|ɑːˈtɪs.tɪk|ɑːrˈtɪs.tɪk
as|prep./conj./adv.|prep. 作为；当作　conj. 当…时；因为；按照；尽管（倒装结构）　adv. 同样地（as…as 比较结构）|æz|æz
ascend|v.|上升；攀登；升至更高职位（正式）|əˈsend|əˈsend
ascent|n.|攀登；上升；地位或权力的上升|əˈsent|əˈsent
ascertain|vt.|查明；弄清；确定（正式）|ˌæs.əˈteɪn|ˌæs.ɚˈteɪn
ascetic|adj./n.|adj. 苦行的；禁欲的；过清苦生活的　n. 苦行者；禁欲者|əˈset.ɪk|əˈset̬.ɪk
ascribe|vt.|归因于；认为是某人的作品或言论；把某种特性归于（ascribe…to，正式）|əˈskraɪb|əˈskraɪb
ashamed|adj.|羞愧的；惭愧的；感到丢脸的（作表语）|əˈʃeɪmd|əˈʃeɪmd
Asia|n.|亚洲|ˈeɪ.ʒə|ˈeɪ.ʒə
aspect|n.|方面；朝向；外观；神态（正式）；体（语法）；画面宽高比例（媒体、计算机）|ˈæs.pekt|ˈæs.pekt
aspersion|n.|诽谤；中伤性言论（正式，通常复数；cast aspersions on）|əˈspɜː.ʃən|əˈspɝː.ʒən
asphalt|n./vt.|n. 沥青；沥青铺路材料　vt. 用沥青铺盖|ˈæs.fɔːlt|ˈæs.fɑːlt
aspiration|n.|抱负；志向；抽吸（医学）；误吸入气道（医学）；送气（语音学）|ˌæs.pɪˈreɪ.ʃən|ˌæs.pəˈreɪ.ʃən
aspire|vi.|渴望；追求；立志（常接 to）|əˈspaɪəʳ|əˈspaɪr
aspirin|n.|阿司匹林；阿司匹林片|ˈæs.prɪn|ˈæs.prɪn
assail|vt.|猛烈攻击；严厉抨击；使遭受大量不快的事（正式）|əˈseɪl|əˈseɪl
assassin|n.|刺客；暗杀重要或知名人物的人|əˈsæs.ɪn|əˈsæs.ən
assassinate|vt.|暗杀；行刺（重要或知名人物）|əˈsæs.ɪ.neɪt|əˈsæs.ə.neɪt
assassination|n.|暗杀；行刺|əˌsæs.ɪˈneɪ.ʃən|əˌsæs.əˈneɪ.ʃən
assault|n./vt.|n. 暴力袭击；强攻；攻坚式尝试　vt. 袭击；殴打|əˈsɒlt|əˈsɑːlt
assemblage|n.|集合的人或物（正式）；聚集；组装过程|əˈsem.blɪdʒ|əˈsem.blɪdʒ
assemble|v.|集合；聚集；收集；组装|əˈsem.bəl|əˈsem.bəl
assembly|n.|集会；议会；学校集会；装配；组装；总成（工程）|əˈsem.bli|əˈsem.bli
assert|vt.|断言；坚称；主张或行使（权利、权威）；展现自信（assert oneself）|əˈsɜːt|əˈsɝːt
assess|vt.|评估；评价；估算；核定；向…征收特定款项（美）|əˈses|əˈses
assessment|n.|评估；评价；考核；评估结果；特别征收费（美）|əˈses.mənt|əˈses.mənt
asset|n.|资产；财产（常用复数）；有用的人或事物；优势；数字资源（计算机）|ˈæs.et|ˈæs.et
assiduous|adj.|勤勉的；认真细致的；坚持不懈的（正式）|əˈsɪdʒ.u.əs|əˈsɪdʒ.u.əs
assign|vt.|分配工作；指派；选定时间；赋予数值或特征；归因；转让财产或权利（法律）|əˈsaɪn|əˈsaɪn
assignment|n.|作业；任务；外派工作；分派；转让财产或权利（法律）|əˈsaɪn.mənt|əˈsaɪn.mənt
assimilate|v.|（使）融入；同化；理解并吸收知识；吸收养分；使语音同化（语音学）|əˈsɪm.ɪ.leɪt|əˈsɪm.ə.leɪt
assist|v./n.|v. 帮助；协助（正式）　n. 助攻（体育）|əˈsɪst|əˈsɪst
`;
const readings={
  approximate:[{label:"adj. 近似的",uk:"əˈprɒk.sɪ.mət",us:"əˈprɑːk.sə.mət"},{label:"v. 接近",uk:"əˈprɒk.sɪ.meɪt",us:"əˈprɑːk.sə.meɪt"}],
  articulate:[{label:"adj. 表达清晰的",uk:"ɑːˈtɪk.jə.lət",us:"ɑːrˈtɪk.jə.lət"},{label:"vt. 表达；发音",uk:"ɑːˈtɪk.jə.leɪt",us:"ɑːrˈtɪk.jə.leɪt"}],
  arithmetic:[{label:"n. 算术（剑桥）",uk:"əˈrɪθ.mə.tɪk",us:"əˈrɪθ.mə.tɪk"},{label:"adj. 算术的（牛津）",uk:"ˌærɪθˈmetɪk",us:"ˌærɪθˈmetɪk"}],
  as:[{label:"strong 强读",uk:"æz",us:"æz"},{label:"weak 弱读",uk:"əz",us:"əz"}]
};
const notes={
  approximate:"形容词词尾 /mət/、动词词尾 /meɪt/ 分开照录，不根据拼写推导。",
  arithmetic:"名词据剑桥；形容词据牛津独立词条。剑桥发音页美音形容词标注与牛津有差异，形容词明确标明采用牛津，不静默合并。",
  articulate:"区分形容词清楚表达的与动词表达、发音、形成关节；分别列出词尾读音。",
  as:"补齐常用连词用法，区分强读与弱读；不把化学符号 As 的释义混入小写 as。",
  array:"依据牛津补齐数组及数表，不把学习词典简略条目的未列义当作错误义。",
  arch:"柯林斯补充独立形容词义；arch- 前缀不混作本词的形容词释义。",
  aromatic:"剑桥核对常用芳香义和英美音，柯林斯补充化学形容词义及名词。",
  artifact:"结合英式拼写 artefact 条目，补齐实验假象及数字图像伪影。",
  arraign:"指法院正式宣读指控并要求答辩，不泛化成任何责难或最终定罪。",
  arms:"武器是独立复数名词条目；保留 arm 的普通复数身份，避免只剩军火义。",
  arise:"发生、出现为现代常用义；起床标为文学用法，不和 rise 的全部用法互换。",
  arouse:"柯林斯补查唤醒与性兴奋义，未因单一学习词典简略页遗漏而删除。"
};
const senses={
  approval:[["n. 赞许","She smiled in approval."],["n. 正式批准","The project requires approval from the council."]],
  approve:[["vt. 批准","The board will approve the budget tomorrow."],["vi. 赞成（approve of）","Her parents approve of the plan."]],
  approximate:[["adj. 近似的","Please give an approximate cost."],["v. 接近","The model can approximate the behaviour of the real system."]],
  apt:[["adj. 贴切的","That is an apt description of the problem."],["adj. 容易…的（be apt to）","This old pipe is apt to leak."],["adj. 有天赋的（正式）","The teacher praised her as an apt pupil."]],
  aquamarine:[["n. 海蓝宝石","The ring contains a pale aquamarine."],["n. 蓝绿色","The walls were painted aquamarine."]],
  aquarium:[["n. 水族箱","She keeps tropical fish in an aquarium."],["n. 水族馆","The aquarium welcomes school groups."]],
  arbitrary:[["adj. 任意的","The choice of date was arbitrary."],["adj. 专横的","The ruler exercised arbitrary power."]],
  arc:[["n. 弧线","The ball followed a wide arc."],["n. 电弧","An electric arc formed between the electrodes."],["n. 故事情节线","The final episode completes the character's arc."],["vi. 作弧线运动","The water will arc across the pool."]],
  arch:[["n. 拱门","We walked beneath a stone arch."],["n. 足弓","The shoe supports the arch of the foot."],["v. 拱起","Cats often arch their backs when frightened."],["adj. 调皮而会意的","She gave him an arch smile."]],
  architect:[["n. 建筑师","The architect designed a public library."],["n. 策划者","She was the architect of the successful reform."]],
  architecture:[["n. 建筑风格","The town is known for its medieval architecture."],["n. 计算机架构","The new architecture reduces memory use."]],
  archive:[["n. 档案馆","The archive holds records of the town's history."],["vt. 归档","Please archive the completed reports."]],
  area:[["n. 地区","The area has several public parks."],["n. 领域","This is her main area of research."],["n. 面积","Calculate the area of the rectangle."]],
  arena:[["n. 竞技场","The arena can hold ten thousand spectators."],["n. 活动领域","She entered the political arena last year."]],
  argue:[["vi. 争吵","The neighbours argue about parking."],["v. 论证；主张","The report argues for a change in policy."]],
  argument:[["n. 争吵","They had an argument about money."],["n. 论据","The evidence supports her argument."]],
  arid:[["adj. 干旱的","Few crops survive in this arid region."],["adj. 无成效的（正式）","The firm recovered after several arid years."],["adj. 枯燥的（正式）","The review described the lecture as arid."]],
  arise:[["vi. 发生；出现","Problems may arise during the move."],["vi. 起床（文学）","We arise before sunrise in this remote village."]],
  arithmetic:[["n. 算术","The children practise mental arithmetic."],["adj. 算术的","Check each arithmetic calculation carefully."]],
  army:[["n. 陆军","He served in the army for five years."],["n. 大群人","An army of volunteers cleaned the beach."]],
  aromatic:[["adj. 芳香的","The soup contains aromatic herbs."],["adj. 芳香族的（化学）","Benzene is an aromatic compound."],["n. 芳香食材","The cook added aromatics to the broth."]],
  arouse:[["vt. 激起","The discovery may arouse public interest."],["vt. 唤醒（书面语）","A sudden knock can arouse him from sleep."]],
  arrange:[["v. 安排","We can arrange a meeting next week."],["vt. 排列","Arrange the books by author."],["vt. 改编乐曲","She will arrange the song for a small orchestra."]],
  arrangement:[["n. 安排","The new arrangement allows her to work from home."],["n. 插花","A flower arrangement stood on the table."],["n. 乐曲改编","We heard a new arrangement of the melody."]],
  array:[["n. 一系列","The shop offers an array of handmade gifts."],["n. 数组（计算机）","The program stores each score in an array."],["vt. 排列","The curator will array the objects by date."]],
  arrest:[["vt. 逮捕","The police plan to arrest the suspect."],["vt. 阻止","The treatment may arrest the spread of the disease."],["vt. 吸引注意","The unusual sound can arrest a listener's attention."],["n. 逮捕","The arrest took place at dawn."]],
  art:[["n. 艺术","The gallery displays contemporary art."],["n. 技艺","He has mastered the art of negotiation."]],
  artery:[["n. 动脉","The scan revealed a blocked artery."],["n. 交通干线","The road is a major artery linking the two cities."]],
  article:[["n. 文章","The article explains the findings."],["n. 物品","Each article of clothing has a label."],["n. 冠词（语法）","The word the is a definite article."],["n. 条款","Article five sets out the payment terms."]],
  articulate:[["adj. 表达清晰的","She is an articulate speaker."],["vt. 表达","He struggled to articulate his concerns."],["vt. 发音","The student can articulate the sound clearly."]],
  artifact:[["n. 人工制品；文物","The artifact was found near an ancient settlement."],["n. 实验方法造成的假象","The apparent effect was an artifact of the testing method."],["n. 图像伪影","Compression created a visible artifact in the image."]],
  artificial:[["adj. 人造的","The room was lit by artificial light."],["adj. 不真诚的","He greeted them with an artificial smile."]],
  as:[["prep. 作为","She works as an engineer."],["conj. 当…时","As the train arrived, everyone stood up."],["conj. 因为","As it was raining, we stayed indoors."],["conj. 按照","Please do as the instructions say."],["conj. 尽管（倒装）","Tired as he was, he continued working."],["adv. 同样地","The second task was as difficult as the first."]],
  aspect:[["n. 方面","Consider every aspect of the problem."],["n. 朝向","The room has a southern aspect."],["n. 外观（正式）","The old house had a gloomy aspect."],["n. 体（语法）","The lesson introduces grammatical aspect."]],
  asphalt:[["n. 沥青铺路材料","The workers laid fresh asphalt on the road."],["vt. 铺沥青","They plan to asphalt the courtyard."]],
  aspiration:[["n. 抱负","Her main aspiration is to become a teacher."],["n. 抽吸（医学）","The fluid was removed by needle aspiration."],["n. 送气（语音学）","The class practised aspiration after the consonant."]],
  assail:[["vt. 抨击","Critics assail the plan as too expensive."],["vt. 使遭受不快","Doubts may assail even experienced researchers."]],
  assembly:[["n. 议会；会议机构","The assembly approved the proposal."],["n. 学校集会","The pupils gathered for morning assembly."],["n. 组装","The furniture requires some assembly."],["n. 总成（工程）","The engine assembly needs a stronger frame."]],
  assert:[["vt. 断言","The authors assert that the change is permanent."],["vt. 行使或维护","She sought to assert her rights."],["vt. 展现自信（assert oneself）","He learned to assert himself during meetings."]],
  assess:[["vt. 评估","The team will assess the damage."],["vt. 征收特定款项（美）","The club may assess each member an additional fee."]],
  asset:[["n. 资产","The building is the company's largest asset."],["n. 优势；有用的人","Her language skills are a valuable asset."]],
  assign:[["vt. 分派工作","The teacher will assign a task to each group."],["vt. 赋予数值","Assign a value to each variable."],["vt. 转让（法律）","The owner may assign the lease to another tenant."]],
  assignment:[["n. 作业","The assignment is due on Monday."],["n. 外派任务","She accepted an overseas assignment."],["n. 转让（法律）","The agreement requires approval before assignment."]],
  assimilate:[["v. 融入","New residents need time to assimilate into the community."],["vt. 吸收知识","It takes time to assimilate new information."],["vt. 吸收养分","The body can assimilate these nutrients easily."]],
  assist:[["v. 协助","Volunteers assist visitors at the entrance."],["n. 助攻（体育）","The midfielder supplied the assist for the winning goal."]]
};
const phPages=new Set('approve arbitration architect area arrange arrangement article aspect aspire approximate articulate arithmetic ascribe asset'.split(' '));
const records=raw.trim().split('\n').map(line=>{
  const [w,pos,cn,uk,us]=line.split('|'),source=`https://dictionary.cambridge.org/dictionary/english/${w.toLowerCase()}`;
  return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"006",file:"js/lexicon-review-006.js",
    reason:notes[w]||"核对所链词典中的现代常用学习义、词性与英美音；按适用领域标明专业义。",
    senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
    pronunciationSource:phPages.has(w)?`https://dictionary.cambridge.org/pronunciation/english/${w.toLowerCase()}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('ascribe').source="https://dictionary.cambridge.org/dictionary/english/ascribe-to";
get('arch').sources=[get('arch').source,"https://www.collinsdictionary.com/dictionary/english/arch"];
get('array').sources=[get('array').source,"https://www.oxfordlearnersdictionaries.com/definition/english/array_1"];
get('aromatic').sources=[get('aromatic').source,"https://www.collinsdictionary.com/us/dictionary/english/aromatic"];
get('arouse').sources=[get('arouse').source,"https://www.collinsdictionary.com/dictionary/english/arouse"];
get('artifact').sources=[get('artifact').source,"https://dictionary.cambridge.org/dictionary/english/artefact"];
get('arrest').sources=[get('arrest').source,"https://dictionary.cambridge.org/dictionary/english/cardiac-arrest"];
get('arms').sources=[get('arms').source,"https://dictionary.cambridge.org/dictionary/english/arm"];
get('arithmetic').sources=[get('arithmetic').source,"https://www.oxfordlearnersdictionaries.com/definition/english/arithmetic_2"];
get('arithmetic').pronunciationSources=[get('arithmetic').pronunciationSource,get('arithmetic').sources[1]];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"006",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[]}]);
for(const r of records){
  window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,...(r.pronunciationSources?{sources:r.pronunciationSources}:{}),checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
