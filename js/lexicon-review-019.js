/* Batch 019: 100 TOEFL high-frequency words, checked 2026-11-17. Glosses summarized; examples original. */
(function(){
const raw=`
corn|n.|谷物（英式）；玉米、甜玉米（主要美式）；鸡眼|kɔːn|kɔːrn
correct|adj./v.|adj. 正确的；合乎规范的；v. 纠正；改正；批改；价格回调、恢复正常|kəˈrekt|kəˈrekt
corridor|n.|走廊；通道；狭长地带；交通沿线或城市带|ˈkɒr.ɪ.dɔːʳ|ˈkɔːr.ə.dɚ
corruption|n.|腐败；贪污；词形讹变；数据损坏|kəˈrʌp.ʃən|kəˈrʌp.ʃən
costume|n.|某时代或民族的服装；戏服；化装服|ˈkɒs.tʃuːm|ˈkɑː.stuːm
cotton|n.|棉花；棉布；棉线；药棉（美式及印度英语）|ˈkɒt.ən|ˈkɑː.tən
counsel|vt./n.|vt. 劝告；提供咨询或辅导；n. 忠告、建议（正式）；出庭律师或律师团（法律）|ˈkaʊn.səl|ˈkaʊn.səl
counseling|n.|咨询；辅导（美式拼写，英式通常为 counselling）|ˈkaʊn.səl.ɪŋ|ˈkaʊn.səl.ɪŋ
counselor|n.|咨询师；顾问；夏令营辅导员（美式）；律师（美式）；英式通常拼作 counsellor|ˈkaʊn.səl.əʳ|ˈkaʊn.səl.ɚ
counterpart|n.|对应的人或事物；在另一组织中承担相同职务的人|ˈkaʊn.tə.pɑːt|ˈkaʊn.t̬ɚ.pɑːrt
couple|n./vt./vi.|n. 两个、几个（a couple of）；一对；夫妻或情侣；vt. 连接、结合；vi. 交配（正式）|ˈkʌp.əl|ˈkʌp.əl
court|n./v.|n. 法院；法庭；审判人员；球场；庭院（主要英式）；宫廷及廷臣；vt. 争取、讨好；招致风险；v. 求爱、交往（旧式）|kɔːt|kɔːrt
cover|v./n.|v. 覆盖；遮盖；涵盖；报道；走过一段距离；占一定面积；足以支付；保险承保；代班；翻唱；n. 盖子；封面；被褥（covers）；掩蔽、保护；保险保障（英式）|ˈkʌv.əʳ|ˈkʌv.ɚ
coverage|n.|新闻报道；涉及范围；服务覆盖范围；保险保障（主要美式）；涂料或化妆品的遮盖力、涂布面积|ˈkʌv.ər.ɪdʒ|ˈkʌv.ɚ.ɪdʒ
crack|v./n./adj.|v. 裂开、破裂；砸开；破解；撞击；发出爆裂声；声音哽咽或变调；精神崩溃或屈服；n. 裂缝；爆裂声；尝试（非正式）；俏皮话；快克可卡因（俚语）；adj. 一流的、精锐的|kræk|kræk
craft|n./vt./adj.|n. 手艺；技巧；手工业；工艺品；船只、飞行器（单复数同形）；vt. 精心制作；adj. 小规模传统手工制作的（食品、饮品等）|krɑːft|kræft
crash|v./n./adj.|v. 撞毁、坠毁；轰然撞击；崩溃、死机；暴跌；临时借宿、倒头睡（非正式）；闯入未受邀的聚会（非正式）；n. 撞车、坠机；轰响；崩盘；死机；adj. 速成的、突击的（非正式）|kræʃ|kræʃ
crawl|vi./n.|vi. 爬行；匍匐；缓慢行进；巴结（英式，贬义）；n. 缓慢速度；爬泳、自由泳泳姿|krɔːl|krɑːl
crazy|adj./n.|adj. 荒唐的；不理智的；疯狂的；极其恼怒的；非常热衷的（常用 crazy about）；n. 行为古怪的人（非正式，可能冒犯）|ˈkreɪ.zi|ˈkreɪ.zi
credit|n./vt.|n. 赊购；信贷；功劳、赞扬；账户入账金额或可用额度；税收抵免；学分；演职员表（the credits）；vt. 将款项记入账户；相信；归功于（credit…with）|ˈkred.ɪt|ˈkred.ɪt
creek|n.|小海湾、港汊（主要英式）；溪流（美式及澳大利亚英语）|kriːk|kriːk
crew|n./v.|n. 船员；机组人员；工作团队；普通船员（不含高级船员）；赛艇运动（美式）；v. 当船员；为船配备船员|kruː|kruː
critic|n.|批评者；评论家、评论员|ˈkrɪt.ɪk|ˈkrɪt̬.ɪk
critical|adj.|批评的；评论界的；审慎分析判断的；至关重要的；危急的、严重的|ˈkrɪt.ɪ.kəl|ˈkrɪt̬.ɪ.kəl
critique|n./vt.|n. 评析、评论（常指出不足）；vt. 评析、评论|krɪˈtiːk|krɪˈtiːk
crowd|n./v.|n. 人群；一群朋友（非正式）；网络大众；v. 聚集；挤满、塞满；贴近或过多干涉使人不自在|kraʊd|kraʊd
cruel|adj.|残忍的；残酷的；令人痛苦的|ˈkruː.əl|ˈkruː.əl
crush|vt./vi./n.|vt. 压碎、压坏；使心碎；镇压；彻底击败；出色完成（非正式，如 crush it）；vi. 迷恋（美式非正式，crush on）；n. 短暂迷恋；暗恋对象；拥挤的人群|krʌʃ|krʌʃ
crystal|n.|晶体；结晶；水晶；高级雕花玻璃及其制品；表蒙（美式）|ˈkrɪs.təl|ˈkrɪs.təl
Cuban|adj./n.|adj. 古巴的、古巴人的；n. 古巴人|ˈkjuː.bən|ˈkjuː.bən
culture|n./vt.|n. 文化；风俗信仰；群体风气；艺术；培养、培养物（生物）；vt. 培养细胞或微生物|ˈkʌl.tʃəʳ|ˈkʌl.tʃɚ
cure|vt./n.|vt. 治愈；消除坏习惯；解决问题；腌制、熏制以保存食品；n. 疗法；治愈；解决办法|kjʊəʳ|kjʊr
curiosity|n.|好奇心；求知欲；珍奇物、稀罕事|ˌkjʊə.riˈɒs.ə.ti|ˌkjʊr.iˈɑː.sə.t̬i
curious|adj.|好奇的；求知欲强的；奇怪的、不寻常的|ˈkjʊə.ri.əs|ˈkjʊr.i.əs
current|adj./n.|adj. 当前的；现行的；n. 水流；气流；电流；思潮、倾向|ˈkʌr.ənt|ˈkɝː.ənt
currently|adv.|目前；当前|ˈkʌr.ənt.li|ˈkɝː.ənt.li
curtain|n.|窗帘；帷幕；幕布；遮蔽视线的一层烟、雨等；开演时间；中分垂下的发型（英式，curtains）|ˈkɜː.tən|ˈkɝː.tən
curve|n./vi.|n. 曲线；弯道；弧线；曲线球（棒球）；使人措手不及的事（美式非正式）；vi. 弯曲；沿曲线移动|kɜːv|kɝːv
custom|n./adj.|n. 风俗、习俗；个人惯例；光顾、生意（主要英式）；海关检查处（customs）；adj. 定制的|ˈkʌs.təm|ˈkʌs.təm
customer|n.|顾客；客户；某种类型的人（非正式，如 a tough customer 指难对付的人）|ˈkʌs.tə.məʳ|ˈkʌs.tə.mɚ
dam|n./vt.|n. 水坝；动物的母兽（尤其母马）；牙科橡皮障；vt. 筑坝拦水|dæm|dæm
dangerous|adj.|危险的；可能造成伤害的|ˈdeɪn.dʒər.əs|ˈdeɪn.dʒɚ.əs
date|n./v.|n. 日期；约会；约会对象；椰枣；v. 写上日期；鉴定年代；约会、谈恋爱；过时；暴露年龄；追溯到（date from/back to）|deɪt|deɪt
dawn|n./vi.|n. 黎明；开端；vi. 破晓；开始出现；逐渐明白（dawn on someone）|dɔːn|dɑːn
dead|adj./adv./n.|adj. 死的；麻木的（主要英式）；失灵的、没电的；冷清的；完全的、绝对的；adv. 完全、极其；正好；n. 死者（the dead）；最深、最冷等时段（the dead of…）|ded|ded
deadly|adj./adv.|adj. 致命的；极端的；极其无聊的（非正式）；adv. 极其；完全|ˈded.li|ˈded.li
deal|n./v.|n. 交易；协议；优惠价格；待遇；大量（a great/good deal）；轮到发牌；松木或冷杉木材；v. 做生意；分发、发牌；贩毒（俚语）；造成打击（deal a blow）；处理（deal with）|diːl|diːl
dealer|n.|商人；经销商；毒品贩子；发牌者；证券交易商|ˈdiː.ləʳ|ˈdiː.lɚ
debate|n./v.|n. 讨论；辩论；辩论赛；v. 讨论、辩论；仔细考虑|dɪˈbeɪt|dɪˈbeɪt
debris|n.|碎片；残骸；残余物（不可数；词尾 s 不发音）|ˈdeb.riː|dəˈbriː
debt|n.|债务；欠款；欠债状态；人情债、恩情（debt of gratitude）|det|det
decent|adj.|相当不错的、像样的；正派的；善良的；穿戴妥当的（非正式）|ˈdiː.sənt|ˈdiː.sənt
decide|v.|决定；选择；决定某种结果|dɪˈsaɪd|dɪˈsaɪd
deck|n./vt.|n. 甲板；公共汽车的一层；木制露台；一副牌（主要美式）；录音设备；vt. 装饰；击倒（俚语）|dek|dek
declare|v.|宣布；宣称；申报收入、财产或应税物品；宣布结束一局击球（板球）|dɪˈkleəʳ|dɪˈkler
decorate|v.|装饰；装修、刷漆或贴墙纸（主要英式）；授予勋章|ˈdek.ə.reɪt|ˈdek.ər.eɪt
decrease|v./n.|v. 减少；降低；使减少；n. 减少；降低；减少量|dɪˈkriːs|dɪˈkriːs
dedicate|vt.|奉献时间、精力等；献身；把书或作品题献给；为纪念某人而建|ˈded.ɪ.keɪt|ˈded.ə.keɪt
deem|vt.|认为；视为（正式）|diːm|diːm
defeat|vt./n.|vt. 击败；挫败；难倒；否决；n. 失败；击败对手|dɪˈfiːt|dɪˈfiːt
defend|v.|保护；保卫；为…辩护；防守；卫冕；支撑货币汇率|dɪˈfend|dɪˈfend
defense|n.|防御；国防；防御措施；辩护、辩护方；防守（美式拼写，英式通常为 defence）|dɪˈfens|dɪˈfens
defensive|adj./n.|adj. 防御的；防守的；戒备或急于辩解的；抗跌稳健的（金融）；n. 防御姿态（on the defensive）；防御性投资（金融）|dɪˈfen.sɪv|dɪˈfen.sɪv
deficit|n.|赤字；不足；落后的分数；功能缺损（医学）|ˈdef.ɪ.sɪt|ˈdef.ə.sɪt
definitely|adv.|肯定地；无疑地；确实|ˈdef.ɪ.nət.li|ˈdef.ən.ət.li
definition|n.|定义；释义；界定；图像或声音的清晰度；肌肉线条的清晰程度|ˌdef.ɪˈnɪʃ.ən|ˌdef.ɪˈnɪʃ.ən
delay|v./n.|v. 延迟；推迟；拖延；n. 延迟；耽搁；等待时间|dɪˈleɪ|dɪˈleɪ
deliberately|adv.|故意地；有条不紊地、审慎地|dɪˈlɪb.ər.ət.li|dɪˈlɪb.ɚ.ət.li
delicate|adj.|易损的；脆弱的；精致纤细的；需要小心处理的；敏感棘手的；灵敏的；柔和淡雅的|ˈdel.ɪ.kət|ˈdel.ə.kət
delicious|adj.|美味的；芳香的；令人愉快的|dɪˈlɪʃ.əs|dɪˈlɪʃ.əs
democracy|n.|民主制度；民主国家；民主组织或决策方式|dɪˈmɒk.rə.si|dɪˈmɑː.krə.si
democrat|n.|民主主义者；民主政体支持者；美国民主党党员或支持者（大写 Democrat）|ˈdem.ə.kræt|ˈdem.ə.kræt
demonstrate|vt./vi.|vt. 表明；论证；演示操作；表现感情、品质或能力；vi. 示威|ˈdem.ən.streɪt|ˈdem.ən.streɪt
demonstration|n.|演示；证明；示威游行；感情或支持的表示|ˌdem.ənˈstreɪ.ʃən|ˌdem.ənˈstreɪ.ʃən
deny|vt.|否认；拒绝承认；拒绝给予；不许自己享有（deny oneself）|dɪˈnaɪ|dɪˈnaɪ
depart|vi.|离开；出发（正式）；偏离（depart from）|dɪˈpɑːt|dɪˈpɑːrt
departure|n.|离开；出发；离职；出发的班次；偏离常规、不同以往的做法|dɪˈpɑː.tʃəʳ|dɪˈpɑːr.tʃɚ
dependent|adj./n.|adj. 依赖的；取决于…的；n. 受抚养人（美式，英式为 dependant）|dɪˈpen.dənt|dɪˈpen.dənt
depressed|adj.|沮丧的；情绪低落的；经济萧条的、不景气的|dɪˈprest|dɪˈprest
depression|n.|抑郁症；情绪低落；经济萧条；低气压；凹陷、洼地|dɪˈpreʃ.ən|dɪˈpreʃ.ən
deputy|n.|副手；代理人；副职；县警长的副手（美国）|ˈdep.jə.ti|ˈdep.jə.t̬i
descend|v.|下降；下来；夜幕降临、情绪或寂静笼罩（文学）；源自、是…的后代（descend from）；陷入（descend into）|dɪˈsend|dɪˈsend
deserve|vt.|值得；应得、应受（可指好事或坏事）|dɪˈzɜːv|dɪˈzɝːv
design|v./n.|v. 设计；计划；打算用于；n. 设计；设计图；布局；图案；意图；图谋（designs on）|dɪˈzaɪn|dɪˈzaɪn
desire|vt./n.|vt. 渴望、想要（正式）；对…有性欲；n. 愿望；欲望；性欲|dɪˈzaɪəʳ|dɪˈzaɪr
desperate|adj.|绝望而不惜冒险的；极其渴望的；十分严重的；极端的；可能铤而走险的|ˈdes.pər.ət|ˈdes.pɚ.ət
desperately|adv.|极其；非常渴望地；绝望地、不顾一切地|ˈdes.pər.ət.li|ˈdes.pɚ.ət.li
dessert|n.|餐后甜食；甜点|dɪˈzɜːt|dɪˈzɝːt
destination|n./adj.|n. 目的地；终点；adj. 值得专程前往的|ˌdes.tɪˈneɪ.ʃən|ˌdes.təˈneɪ.ʃən
destruction|n.|毁灭；破坏；被毁的状态|dɪˈstrʌk.ʃən|dɪˈstrʌk.ʃən
detect|vt.|察觉；发现；探测出|dɪˈtekt|dɪˈtekt
detective|n.|侦探；刑警；警察职衔的一部分|dɪˈtek.tɪv|dɪˈtek.tɪv
determination|n.|决心；毅力；决定、确定；查明、测定（正式）|dɪˌtɜː.mɪˈneɪ.ʃən|dɪˌtɝː.mɪˈneɪ.ʃən
determine|vt.|决定；支配、影响；决意；查明、确定|dɪˈtɜː.mɪn|dɪˈtɝː.mɪn
devastating|adj.|破坏性极大的；令人震惊悲痛的；有强大影响力的|ˈdev.ə.steɪ.tɪŋ|ˈdev.ə.steɪ.t̬ɪŋ
develop|v.|发展；成长；研发；形成；逐渐产生；患病；开发土地；详述；冲洗胶片、显影|dɪˈvel.əp|dɪˈvel.əp
device|n.|装置；设备；电子终端；方法、手法；爆炸装置|dɪˈvaɪs|dɪˈvaɪs
devise|vt.|设计；想出；发明计划、系统等|dɪˈvaɪz|dɪˈvaɪz
devote|vt.|把时间、精力等用于；献身于；把篇幅或空间专门用于（devote…to）|dɪˈvəʊt|dɪˈvoʊt
diagnose|vt.|诊断；查明疾病或问题的性质及原因|ˌdaɪ.əɡˈnəʊz|ˌdaɪ.əɡˈnoʊs
`;
const readings={
  "corridor": [
    {
      "label": "n.",
      "uk": "ˈkɒr.ɪ.dɔːʳ",
      "us": "ˈkɔːr.ə.dɚ"
    },
    {
      "label": "n. 美式另一读音",
      "uk": "ˈkɒr.ɪ.dɔːʳ",
      "us": "ˈkɔːr.ə.dɔːr"
    }
  ],
  "debris": [
    {
      "label": "n.",
      "uk": "ˈdeb.riː",
      "us": "dəˈbriː"
    },
    {
      "label": "n. 英式另一读音",
      "uk": "ˈdeɪ.briː",
      "us": "dəˈbriː"
    }
  ],
  "decrease": [
    {
      "label": "v.",
      "uk": "dɪˈkriːs",
      "us": "dɪˈkriːs"
    },
    {
      "label": "v. 另一读音",
      "uk": "ˈdiː.kriːs",
      "us": "ˈdiː.kriːs"
    },
    {
      "label": "n.",
      "uk": "ˈdiː.kriːs",
      "us": "ˈdiː.kriːs"
    }
  ]
};
const notes={
  "corn": "区分英式谷物、美式玉米，以及同形的鸡眼义；不把地区义互相替代。",
  "corridor": "美式保留词典列出的两种尾音；兼顾建筑走廊、狭长地带和城市交通走廊。",
  "costume": "按词典区分英式 /tʃ/ 与美式 /st/，不从拼写推音。",
  "counsel": "核对动词劝告、咨询与名词忠告、出庭律师；区别 council（委员会）。",
  "counseling": "作为独立名词核对，不仅当作 counsel 的分词；说明美英拼写差别。",
  "counselor": "补明咨询师、夏令营辅导员和律师等用途；英式通常写 counsellor。",
  "craft": "补动词和食品饮品的形容词用法；船只、飞行器义单复数同形，与 crafts 工艺品区别。",
  "crawl": "英美主读音来自剑桥发音页；巴结义另据 Collins 核实。",
  "credit": "分清信贷、功劳、学分、演职员表及记账、相信等动词义；英美音照剑桥主条，不按惯常规则自行添加闪音。",
  "creek": "小海湾或港汊为主要英式义，溪流为美式及澳大利亚英语义。",
  "Cuban": "保留国籍名称的大写，不与普通小写词混同。",
  "current": "名词水流、电流、思潮与形容词当前的分别展示。",
  "custom": "海关检查处限 customs；光顾、生意为主要英式用法；保留定制的形容词义。",
  "date": "补椰枣及鉴定年代；约会、过时和暴露年龄与日期义区分。",
  "dead": "分别标注形容词、副词及 the dead、the dead of… 等名词结构，不把各结构中的意思无条件泛化。",
  "debris": "保留两个英式主读音及美式主读音；重音地区差异与不发音的 s 均据词典。",
  "debt": "按词典保留 /det/；b 不发音；人情债并非金融欠款。",
  "decrease": "剑桥学习词典将动词列为后重音、前重音两读；名词主读为前重音，分别列项。",
  "dedicate": "献身与题献据词典分开；to 后可接名词或动名词。",
  "defense": "标明美式拼写，对应英式 defence；不把防御、法律辩护、体育防守混为一义。",
  "deliberately": "故意与缓慢审慎两义分列，不能一律译为故意。",
  "democrat": "普通名词为民主主义者；美国民主党成员义须大写 Democrat。",
  "demonstrate": "及物的表明、演示与不及物的示威分别标注。",
  "dependent": "形容词和美式名词受抚养人分开；后者英式通常拼作 dependant。",
  "depressed": "保留情绪与经济语境；情绪低落本身不能等同于抑郁症的诊断。",
  "depression": "区分心理、经济、天气和地形中的不同名词义。",
  "deserve": "既能应得奖励，也能应受惩罚，不限褒义。",
  "destination": "补值得专程前往的前置形容词用法。",
  "device": "名词装置、手法与爆炸装置分开；尾音 /s/，与 devise 的 /z/ 对照。",
  "devise": "核实想出、设计计划系统等常用动词义；尾音 /z/，与 device 区别。",
  "devote": "释义另链 devote-to 词条；to 后跟名词或动名词，表示投入或专门用于。",
  "diagnose": "英美主读音照剑桥学习词典分别抄录，保留英式尾音 /z/ 与美式 /s/；不从 diagnose 派生词反推。"
};
const senses={
  "corn": [
    [
      "n. 玉米",
      "We roasted fresh corn over the fire."
    ],
    [
      "n. 鸡眼",
      "A painful corn made her shoe uncomfortable."
    ]
  ],
  "correct": [
    [
      "adj. 正确的",
      "Please select the correct address."
    ],
    [
      "vt. 纠正",
      "You can correct the spelling before submission."
    ]
  ],
  "corruption": [
    [
      "n. 腐败",
      "The inquiry uncovered corruption in local government."
    ],
    [
      "n. 数据损坏",
      "The backup protected the files from corruption."
    ]
  ],
  "cotton": [
    [
      "n. 棉花",
      "The farm grows cotton in the southern fields."
    ],
    [
      "n. 棉布",
      "This cotton feels soft against the skin."
    ],
    [
      "n. 药棉（美式）",
      "She cleaned the cut with cotton."
    ]
  ],
  "counsel": [
    [
      "vt. 辅导",
      "Volunteers counsel families after the disaster."
    ],
    [
      "n. 忠告",
      "His grandmother offered thoughtful counsel."
    ],
    [
      "n. 出庭律师",
      "The defendant consulted counsel before the hearing."
    ]
  ],
  "counselor": [
    [
      "n. 咨询师",
      "The school counselor helped her manage exam stress."
    ],
    [
      "n. 营地辅导员（美式）",
      "Each counselor supervised a small group of campers."
    ]
  ],
  "couple": [
    [
      "n. 两个或几个",
      "I need a couple of minutes to check the figures."
    ],
    [
      "n. 夫妻或情侣",
      "The couple moved into a small apartment."
    ],
    [
      "vt. 连接",
      "Engineers couple the carriages before departure."
    ]
  ],
  "court": [
    [
      "n. 法庭",
      "The court will hear the case next week."
    ],
    [
      "n. 球场",
      "The basketball court is beside the library."
    ],
    [
      "n. 宫廷",
      "The musician worked at the royal court."
    ],
    [
      "vt. 争取",
      "The candidates court younger voters."
    ],
    [
      "vt. 招致风险",
      "Ignoring those warnings would court disaster."
    ]
  ],
  "cover": [
    [
      "vt. 覆盖",
      "Cover the bowl with a clean cloth."
    ],
    [
      "vt. 涵盖",
      "The course will cover basic statistics."
    ],
    [
      "vt. 报道",
      "Two journalists cover the election."
    ],
    [
      "vt. 足以支付",
      "The grant will cover my travel expenses."
    ],
    [
      "vi. 代班",
      "Could you cover for me during lunch?"
    ],
    [
      "vt. 翻唱",
      "Several bands cover that song at concerts."
    ],
    [
      "n. 封面",
      "Her photograph appeared on the magazine cover."
    ],
    [
      "n. 掩蔽",
      "We ran for cover when the hail began."
    ]
  ],
  "coverage": [
    [
      "n. 新闻报道",
      "The station expanded its coverage of local science."
    ],
    [
      "n. 服务覆盖范围",
      "Mobile coverage is weak in this valley."
    ],
    [
      "n. 保险保障",
      "Her policy includes coverage for emergency treatment."
    ]
  ],
  "crack": [
    [
      "vi. 裂开",
      "The old paint may crack in the heat."
    ],
    [
      "vt. 破解",
      "The team hopes to crack the code tonight."
    ],
    [
      "vi. 崩溃",
      "She refused to crack under pressure."
    ],
    [
      "n. 裂缝",
      "A narrow crack runs across the ceiling."
    ],
    [
      "n. 尝试（非正式）",
      "Let me have a crack at the puzzle."
    ],
    [
      "adj. 精锐的",
      "A crack rescue team reached the village."
    ]
  ],
  "craft": [
    [
      "n. 手艺",
      "She learned her craft from an experienced carpenter."
    ],
    [
      "n. 船只（单复数同形）",
      "Three small craft approached the harbour."
    ],
    [
      "vt. 精心制作",
      "The jeweller will craft a silver pendant."
    ],
    [
      "adj. 传统手工制作的",
      "The town has several craft breweries."
    ]
  ],
  "crash": [
    [
      "vi. 撞毁",
      "The vehicle could crash if its brakes fail."
    ],
    [
      "vi. 死机",
      "The program may crash when memory runs out."
    ],
    [
      "vi. 暴跌",
      "Prices can crash after a sudden loss of confidence."
    ],
    [
      "vi. 临时借宿（非正式）",
      "You can crash on our sofa tonight."
    ],
    [
      "n. 轰响",
      "A loud crash came from the empty kitchen."
    ],
    [
      "adj. 速成的",
      "She took a crash course in accounting."
    ]
  ],
  "crawl": [
    [
      "vi. 爬行",
      "The baby can crawl across the rug."
    ],
    [
      "vi. 缓慢行进",
      "Cars crawl through the narrow streets."
    ],
    [
      "n. 爬泳",
      "He practises the crawl twice a week."
    ]
  ],
  "crazy": [
    [
      "adj. 荒唐的",
      "That sounds like a crazy plan."
    ],
    [
      "adj. 极其热衷的",
      "My sister is crazy about astronomy."
    ],
    [
      "adj. 极其恼怒的",
      "The constant noise is driving him crazy."
    ]
  ],
  "credit": [
    [
      "n. 信贷",
      "The bank offers credit to small businesses."
    ],
    [
      "n. 功劳",
      "The whole team deserves credit for the discovery."
    ],
    [
      "n. 学分",
      "This laboratory course earns one credit."
    ],
    [
      "n. 演职员表",
      "We stayed until the final credits ended."
    ],
    [
      "vt. 将款项记入账户",
      "The bank will credit your account tomorrow."
    ],
    [
      "vt. 归功于",
      "Researchers credit the improvement to better training."
    ]
  ],
  "creek": [
    [
      "n. 溪流（美式、澳大利亚英语）",
      "The children followed a creek through the forest."
    ],
    [
      "n. 小海湾或港汊（主要英式）",
      "The fishing boat sheltered in a tidal creek."
    ]
  ],
  "crew": [
    [
      "n. 机组人员",
      "The flight crew completed the safety checks."
    ],
    [
      "n. 工作团队",
      "A film crew arrived at the museum."
    ],
    [
      "vi. 当船员",
      "She will crew on a yacht this summer."
    ]
  ],
  "critic": [
    [
      "n. 批评者",
      "He became an outspoken critic of the policy."
    ],
    [
      "n. 评论家",
      "The theatre critic praised the young actor."
    ]
  ],
  "critical": [
    [
      "adj. 至关重要的",
      "Reliable measurements are critical to the experiment."
    ],
    [
      "adj. 危急的",
      "The injured driver remains in critical condition."
    ],
    [
      "adj. 批评的",
      "The report was highly critical of the management."
    ],
    [
      "adj. 审慎分析判断的",
      "The seminar encourages critical thinking."
    ]
  ],
  "crowd": [
    [
      "n. 人群",
      "A large crowd waited outside the station."
    ],
    [
      "n. 朋友群体",
      "She spends weekends with the same crowd."
    ],
    [
      "vt. 贴近或干涉使人不自在",
      "Please do not crowd me while I work."
    ]
  ],
  "crush": [
    [
      "vt. 压碎",
      "Crush the nuts before adding them to the mixture."
    ],
    [
      "vt. 彻底击败",
      "The army tried to crush the rebellion."
    ],
    [
      "vt. 使心碎",
      "Another rejection could crush his confidence."
    ],
    [
      "n. 迷恋",
      "She had a brief crush on a classmate."
    ],
    [
      "n. 拥挤的人群",
      "We struggled through the crush near the exit."
    ]
  ],
  "crystal": [
    [
      "n. 晶体",
      "A salt crystal formed on the edge of the dish."
    ],
    [
      "n. 高级雕花玻璃",
      "The cabinet contains some fine crystal."
    ]
  ],
  "culture": [
    [
      "n. 文化",
      "Students explore the culture of different regions."
    ],
    [
      "n. 群体风气",
      "The company is trying to change its working culture."
    ],
    [
      "n. 培养物",
      "The laboratory examined a bacterial culture."
    ],
    [
      "vt. 培养",
      "Scientists culture the cells in small dishes."
    ]
  ],
  "cure": [
    [
      "vt. 治愈",
      "This medicine cannot cure every infection."
    ],
    [
      "vt. 腌制保存",
      "They cure the meat with salt."
    ],
    [
      "n. 解决办法",
      "There is no simple cure for the housing shortage."
    ]
  ],
  "curiosity": [
    [
      "n. 好奇心",
      "Her curiosity led her to study marine biology."
    ],
    [
      "n. 珍奇物",
      "The tiny mechanical bird is a museum curiosity."
    ]
  ],
  "curious": [
    [
      "adj. 好奇的",
      "The children were curious about the fossils."
    ],
    [
      "adj. 奇怪的",
      "A curious pattern appeared in the data."
    ]
  ],
  "current": [
    [
      "adj. 当前的",
      "We reviewed the current safety rules."
    ],
    [
      "n. 水流",
      "A strong current carried the boat downstream."
    ],
    [
      "n. 电流",
      "The wire carries an electric current."
    ],
    [
      "n. 思潮",
      "The essay examines a new current in political thought."
    ]
  ],
  "curtain": [
    [
      "n. 窗帘",
      "She pulled the curtain across the window."
    ],
    [
      "n. 一层遮蔽物",
      "A curtain of rain hid the mountain."
    ],
    [
      "n. 幕布",
      "The curtain rose on an empty stage."
    ]
  ],
  "curve": [
    [
      "n. 曲线",
      "The graph shows a smooth curve."
    ],
    [
      "n. 曲线球",
      "The batter failed to hit the curve."
    ],
    [
      "vi. 弯曲",
      "The road begins to curve beyond the bridge."
    ]
  ],
  "custom": [
    [
      "n. 习俗",
      "It is a local custom to share food with visitors."
    ],
    [
      "n. 光顾、生意",
      "The shop depends on custom from nearby offices."
    ],
    [
      "n. 海关检查处（customs）",
      "We passed through customs without a delay."
    ],
    [
      "adj. 定制的",
      "The engineer designed custom software for the laboratory."
    ]
  ],
  "dam": [
    [
      "n. 水坝",
      "The dam stores water for the dry season."
    ],
    [
      "n. 母兽",
      "The foal stayed close to its dam."
    ],
    [
      "vt. 筑坝拦水",
      "They plan to dam the river upstream."
    ]
  ],
  "date": [
    [
      "n. 日期",
      "Please write the date at the top of the form."
    ],
    [
      "n. 约会",
      "They arranged a date for Friday evening."
    ],
    [
      "n. 椰枣",
      "Each date contains a long hard stone."
    ],
    [
      "vt. 鉴定年代",
      "The laboratory can date the wooden tool."
    ],
    [
      "vi. 谈恋爱",
      "They began to date during their final year."
    ]
  ],
  "dawn": [
    [
      "n. 黎明",
      "The hikers left before dawn."
    ],
    [
      "n. 开端",
      "The discovery marked the dawn of a new field."
    ],
    [
      "vi. 开始",
      "As a new era dawns, the industry faces fresh challenges."
    ]
  ],
  "dead": [
    [
      "adj. 死的",
      "The dead tree fell during the storm."
    ],
    [
      "adj. 没电的",
      "The remote has a dead battery."
    ],
    [
      "adj. 冷清的",
      "The village is usually dead after sunset."
    ],
    [
      "adv. 极其",
      "We were dead tired after the climb."
    ],
    [
      "n. 死者",
      "The memorial honours the dead."
    ]
  ],
  "deadly": [
    [
      "adj. 致命的",
      "The gas can be deadly in a confined space."
    ],
    [
      "adv. 极其",
      "She was deadly serious about the warning."
    ]
  ],
  "deal": [
    [
      "n. 交易",
      "They signed a deal to supply solar panels."
    ],
    [
      "n. 待遇",
      "Small suppliers sometimes get a raw deal."
    ],
    [
      "n. 大量",
      "We learned a great deal from the survey."
    ],
    [
      "n. 松木或冷杉木材",
      "The old table was made of deal."
    ],
    [
      "vt. 发牌",
      "Please deal five cards to each player."
    ],
    [
      "v. 处理（deal with）",
      "The volunteers deal with hundreds of requests each week."
    ]
  ],
  "dealer": [
    [
      "n. 经销商",
      "The dealer sells second-hand laboratory equipment."
    ],
    [
      "n. 发牌者",
      "The dealer placed three cards on the table."
    ]
  ],
  "debate": [
    [
      "n. 辩论",
      "The proposal sparked a lively debate."
    ],
    [
      "vt. 考虑",
      "We still debate whether to expand the study."
    ]
  ],
  "debt": [
    [
      "n. 债务",
      "The company has paid off its debt."
    ],
    [
      "n. 人情债",
      "I owe my teacher a debt of gratitude."
    ]
  ],
  "decent": [
    [
      "adj. 像样的",
      "We found a decent hotel near the station."
    ],
    [
      "adj. 正派善良的",
      "He is a decent person who helps his neighbours."
    ],
    [
      "adj. 穿戴妥当的（非正式）",
      "Are you decent enough for me to come in?"
    ]
  ],
  "deck": [
    [
      "n. 甲板",
      "The passengers gathered on deck."
    ],
    [
      "n. 木制露台",
      "We ate breakfast on the deck behind the house."
    ],
    [
      "n. 一副牌",
      "He shuffled a new deck of cards."
    ],
    [
      "vt. 装饰",
      "They deck the hall with paper flowers."
    ]
  ],
  "declare": [
    [
      "vt. 宣布",
      "The panel will declare the winner tomorrow."
    ],
    [
      "vt. 申报",
      "Travellers must declare goods above the allowance."
    ]
  ],
  "decorate": [
    [
      "vt. 装饰",
      "The children decorate the room with drawings."
    ],
    [
      "vt. 装修（主要英式）",
      "We plan to decorate the spare bedroom."
    ],
    [
      "vt. 授勋",
      "The president will decorate the rescue workers."
    ]
  ],
  "decrease": [
    [
      "vi. 减少",
      "Demand tends to decrease after the holidays."
    ],
    [
      "vt. 降低",
      "The new design will decrease energy use."
    ],
    [
      "n. 减少量",
      "The report records a small decrease in waste."
    ]
  ],
  "dedicate": [
    [
      "vt. 奉献",
      "She plans to dedicate a year to field research."
    ],
    [
      "vt. 题献",
      "I would like to dedicate this book to my parents."
    ]
  ],
  "defeat": [
    [
      "vt. 击败",
      "They hope to defeat the defending champions."
    ],
    [
      "vt. 难倒",
      "The final puzzle may defeat even experienced players."
    ],
    [
      "n. 失败",
      "The team accepted defeat with dignity."
    ]
  ],
  "defend": [
    [
      "vt. 保卫",
      "The wall helped defend the city."
    ],
    [
      "vt. 辩护",
      "The lawyer will defend the accused researcher."
    ],
    [
      "vt. 卫冕",
      "She returns next month to defend her title."
    ],
    [
      "vt. 支撑汇率",
      "The central bank intervened to defend the currency."
    ]
  ],
  "defense": [
    [
      "n. 国防",
      "The committee discussed spending on national defense."
    ],
    [
      "n. 辩护",
      "The lawyer prepared a detailed defense."
    ],
    [
      "n. 防守",
      "Their defense improved during the second half."
    ]
  ],
  "defensive": [
    [
      "adj. 防御的",
      "The castle had strong defensive walls."
    ],
    [
      "adj. 急于辩解的",
      "He became defensive when we questioned the figures."
    ]
  ],
  "deficit": [
    [
      "n. 赤字",
      "The city faces a budget deficit."
    ],
    [
      "n. 落后的分数",
      "They overcame a ten-point deficit."
    ]
  ],
  "definition": [
    [
      "n. 定义",
      "The textbook gives a clear definition of entropy."
    ],
    [
      "n. 清晰度",
      "The new screen offers much better definition."
    ]
  ],
  "delay": [
    [
      "vt. 推迟",
      "Bad weather may delay the launch."
    ],
    [
      "n. 耽搁",
      "A technical fault caused a short delay."
    ]
  ],
  "deliberately": [
    [
      "adv. 故意地",
      "He deliberately left the last question unanswered."
    ],
    [
      "adv. 审慎地",
      "She spoke slowly and deliberately as she explained the procedure."
    ]
  ],
  "delicate": [
    [
      "adj. 易损的",
      "The delicate glass needs careful packing."
    ],
    [
      "adj. 棘手的",
      "Funding is a delicate issue for the committee."
    ],
    [
      "adj. 灵敏的",
      "The device contains a delicate measuring instrument."
    ],
    [
      "adj. 柔和淡雅的",
      "The tea has a delicate floral flavour."
    ]
  ],
  "democrat": [
    [
      "n. 民主主义者",
      "He remained a committed democrat throughout his career."
    ],
    [
      "n. 美国民主党党员（大写）",
      "Her uncle is a lifelong Democrat."
    ]
  ],
  "demonstrate": [
    [
      "vt. 表明",
      "The results demonstrate the value of early training."
    ],
    [
      "vt. 演示",
      "The instructor will demonstrate the new equipment."
    ],
    [
      "vi. 示威",
      "Residents plan to demonstrate against the closure."
    ]
  ],
  "demonstration": [
    [
      "n. 演示",
      "We watched a demonstration of the robotic arm."
    ],
    [
      "n. 示威",
      "The peaceful demonstration filled the central square."
    ]
  ],
  "deny": [
    [
      "vt. 否认",
      "The authors deny using the disputed data."
    ],
    [
      "vt. 拒绝给予",
      "The school cannot deny children access to the library."
    ]
  ],
  "departure": [
    [
      "n. 出发",
      "The storm delayed our departure."
    ],
    [
      "n. 不同以往的做法",
      "The new design is a departure from their earlier work."
    ]
  ],
  "dependent": [
    [
      "adj. 依赖的",
      "The village is dependent on tourism."
    ],
    [
      "n. 受抚养人（美式）",
      "He claimed his daughter as a dependent."
    ]
  ],
  "depressed": [
    [
      "adj. 情绪低落的",
      "She felt depressed after the project ended."
    ],
    [
      "adj. 不景气的",
      "Investment is scarce in the depressed region."
    ]
  ],
  "depression": [
    [
      "n. 抑郁症",
      "The clinic offers treatment for depression."
    ],
    [
      "n. 经济萧条",
      "Unemployment rose during the depression."
    ],
    [
      "n. 洼地",
      "Water collected in a shallow depression."
    ],
    [
      "n. 低气压",
      "A depression is moving across the coast."
    ]
  ],
  "descend": [
    [
      "vi. 下降",
      "The aircraft will descend after crossing the coast."
    ],
    [
      "vi. 笼罩",
      "Silence seemed to descend over the hall."
    ],
    [
      "vi. 源自（descend from）",
      "These languages descend from a shared ancestor."
    ]
  ],
  "design": [
    [
      "vt. 设计",
      "Students design a bridge from recycled materials."
    ],
    [
      "n. 图案",
      "The fabric has a simple geometric design."
    ],
    [
      "n. 意图",
      "The resemblance happened by accident rather than by design."
    ]
  ],
  "desperate": [
    [
      "adj. 极其渴望的",
      "The residents are desperate for clean water."
    ],
    [
      "adj. 不惜冒险的",
      "They made a desperate attempt to escape."
    ],
    [
      "adj. 严重的",
      "The hospital faces a desperate shortage of staff."
    ]
  ],
  "desperately": [
    [
      "adv. 极其",
      "The injured bird was desperately weak."
    ],
    [
      "adv. 不顾一切地",
      "They fought desperately to keep the boat afloat."
    ]
  ],
  "destination": [
    [
      "n. 目的地",
      "The train reached its destination after midnight."
    ],
    [
      "adj. 值得专程前往的",
      "The small town now has a destination restaurant."
    ]
  ],
  "determination": [
    [
      "n. 决心",
      "Her determination kept the project moving."
    ],
    [
      "n. 测定",
      "The determination of the sample's age took several weeks."
    ]
  ],
  "determine": [
    [
      "vt. 决定",
      "Weather conditions determine the sailing schedule."
    ],
    [
      "vt. 查明",
      "The tests will determine the cause of the failure."
    ]
  ],
  "devastating": [
    [
      "adj. 破坏性极大的",
      "The flood had a devastating effect on the farms."
    ],
    [
      "adj. 令人震惊悲痛的",
      "The family received devastating news."
    ]
  ],
  "develop": [
    [
      "vi. 成长",
      "The seedlings develop quickly in warm soil."
    ],
    [
      "vt. 研发",
      "The team plans to develop a cheaper sensor."
    ],
    [
      "vt. 患病",
      "Some patients develop a mild rash."
    ],
    [
      "vt. 冲洗胶片",
      "We still develop film in the school darkroom."
    ]
  ],
  "device": [
    [
      "n. 装置",
      "A small device measures the air pressure."
    ],
    [
      "n. 手法",
      "Repetition is a useful literary device."
    ],
    [
      "n. 爆炸装置",
      "The police safely removed the explosive device."
    ]
  ],
  "devise": [
    [
      "vt. 想出",
      "We must devise a way to reduce waste."
    ]
  ],
  "devote": [
    [
      "vt. 投入时间精力",
      "She will devote the summer to fieldwork."
    ],
    [
      "vt. 专用于篇幅或空间",
      "The editors devote a page to readers' letters."
    ]
  ],
  "diagnose": [
    [
      "vt. 诊断疾病",
      "Doctors use several tests to diagnose the infection."
    ],
    [
      "vt. 查明问题",
      "The engineer can diagnose faults in the circuit."
    ]
  ]
};
const phPages=new Set("couple curve crawl credit critical crush decide decrease demonstrate deny devote develop".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-17",batch:"019",file:"js/lexicon-review-019.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性及英美音；中文释义为归纳，例句为原创，专业、地区或语域差异另作说明。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
for(const w of ['crawl','deck']) get(w).sources=[get(w).source,'https://www.collinsdictionary.com/dictionary/english/'+w];
get('counsel').sources=[get('counsel').source,'https://dictionary.cambridge.org/us/dictionary/english/counsel'];
get('devote').sources=[get('devote').source,'https://dictionary.cambridge.org/dictionary/english/devote-to'];
get('descend').sources=[get('descend').source,'https://dictionary.cambridge.org/dictionary/english/descend-from','https://dictionary.cambridge.org/dictionary/english/descend-into'];
get('crowd').sources=[get('crowd').source,'https://www.collinsdictionary.com/dictionary/english/crowd','https://dictionary.cambridge.org/dictionary/learner-english/crowd-around-round-sb-sth'];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"019",checkedOn:"2026-11-17",words:records.map(r=>r.w),note:"托福高频接续批次；核对多词性、多义、地区义及英美主读音，并保留来源与语域说明。",deferred:[]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
