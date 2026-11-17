/* Batch 018: 100 TOEFL high-frequency words, checked 2026-11-17. Glosses summarized; examples original. */
(function(){
const raw=`
community|n.|社区；社群；共同体；公众；群落（生物）；共同归属感|kəˈmjuː.nə.ti|kəˈmjuː.nə.t̬i
companion|n.|同伴；伴侣；陪伴的人或动物；成对物品中的另一个（旧式）；指南、手册（常用于书名）|kəmˈpæn.jən|kəmˈpæn.jən
company|n.|公司；陪伴；同伴；来客；剧团等表演团体；连队|ˈkʌm.pə.ni|ˈkʌm.pə.ni
comparable|adj.|相近的；可相比的；可比拟的|ˈkɒm.pər.ə.bəl|ˈkɑːm.pɚ.ə.bəl
compare|v./n.|v. 比较；把…比作；比得上；n. 比拟、匹敌（文学，用于 beyond compare）|kəmˈpeəʳ|kəmˈper
compassion|n.|同情；怜悯；恻隐之心（含希望帮助他人的意思）|kəmˈpæʃ.ən|kəmˈpæʃ.ən
compel|vt.|强迫；迫使；引起强烈的感情或反应（正式）|kəmˈpel|kəmˈpel
compensation|n.|赔偿；补偿；起补偿作用的事物；薪酬及福利|ˌkɒm.penˈseɪ.ʃən|ˌkɑːm.penˈseɪ.ʃən
compete|vi.|竞争；争夺；参加比赛|kəmˈpiːt|kəmˈpiːt
competition|n.|竞争；比赛；竞争对手（the competition）|ˌkɒm.pəˈtɪʃ.ən|ˌkɑːm.pəˈtɪʃ.ən
complain|vi.|抱怨；投诉；诉说病痛（complain of）|kəmˈpleɪn|kəmˈpleɪn
complaint|n.|抱怨；投诉；抱怨的原因；疾病；正式控告或申诉（法律）|kəmˈpleɪnt|kəmˈpleɪnt
complete|adj./v.|adj. 完整的；全部的；彻底的；vt. 完成；补全；填写；成功传球；v. 完成房产交易（英国法律用语）|kəmˈpliːt|kəmˈpliːt
complex|adj./n.|adj. 复杂的；难以理解的；n. 综合建筑群；复合体；情结，心理上的焦虑或自卑|ˈkɒm.pleks|kɑːmˈpleks
complexity|n.|复杂性；错综复杂之处（常用 complexities）|kəmˈplek.sə.ti|kəmˈplek.sə.t̬i
complicated|adj.|复杂的；难以理解或处理的|ˈkɒm.plɪ.keɪ.tɪd|ˈkɑːm.plə.keɪ.t̬ɪd
complication|n.|使事情复杂化的因素或困难；复杂化；并发症|ˌkɒm.plɪˈkeɪ.ʃən|ˌkɑːm.pləˈkeɪ.ʃən
comply|vi.|遵守；服从；按要求行事（常接 with，正式）|kəmˈplaɪ|kəmˈplaɪ
compose|v.|作曲；创作诗文；构成；使自己平静（compose oneself）；排版|kəmˈpəʊz|kəmˈpoʊz
compound|n./adj./vt.|n. 化合物；混合物；复合词；围有围墙的建筑群或场地；adj. 复合的；复利的；vt. 加重；使恶化；按复利计算|ˈkɒm.paʊnd|ˈkɑːm.paʊnd
compromise|n./vi./vt.|n. 妥协；折中办法；vi. 妥协；vt. 降低原则或标准；损害；危及|ˈkɒm.prə.maɪz|ˈkɑːm.prə.maɪz
concede|v.|（勉强）承认；认输；让出；给予；失分或让对手得分|kənˈsiːd|kənˈsiːd
conceive|v.|想象；构思；想出计划；怀孕；受孕|kənˈsiːv|kənˈsiːv
concept|n.|概念；观念；构想|ˈkɒn.sept|ˈkɑːn.sept
conception|n.|观念；理解；构思；受孕|kənˈsep.ʃən|kənˈsep.ʃən
concerned|adj.|担心的；关切的；涉及的；有关的；be concerned with 指关于、涉及|kənˈsɜːnd|kənˈsɝːnd
concerning|prep./adj.|prep. 关于；涉及（正式）；adj. 令人担忧的|kənˈsɜː.nɪŋ|kənˈsɝː.nɪŋ
concert|n.|音乐会；演奏会；联合、一致行动（in concert）|ˈkɒn.sət|ˈkɑːn.sɚt
conclude|v.|（使）结束；总结；达成协议或交易；得出结论；断定|kənˈkluːd|kənˈkluːd
concrete|n./adj.|n. 混凝土；adj. 具体的；确实的；基于事实的；有形的|ˈkɒŋ.kriːt|ˈkɑːn.kriːt
condemn|vt.|强烈谴责；判刑（常接 to）；使注定遭受；判定建筑等不安全、不宜使用|kənˈdem|kənˈdem
condition|n./vt.|n. 状况；状态；环境（conditions）；疾病；条件；vt. 使形成条件反射或习惯；影响、制约；护理头发或皮肤|kənˈdɪʃ.ən|kənˈdɪʃ.ən
conduct|v./n.|vt. 组织、进行活动；带领；传导电或热；v. 指挥乐队或合唱团；conduct oneself 指表现、举止；n. 行为；举止；活动的组织或实施方式|kənˈdʌkt|kənˈdʌkt
conference|n.|会议；研讨会；商谈；体育联盟|ˈkɒn.fər.əns|ˈkɑːn.fɚ.əns
confess|v.|承认；坦白；供认；忏悔，告解|kənˈfes|kənˈfes
confession|n.|坦白；供认；供词；忏悔；告解|kənˈfeʃ.ən|kənˈfeʃ.ən
confidence|n.|自信；信心；信任；私下透露的秘密；保密（in confidence）|ˈkɒn.fɪ.dəns|ˈkɑːn.fə.dəns
confident|adj.|自信的；确信的；有信心的|ˈkɒn.fɪ.dənt|ˈkɑːn.fə.dənt
confirm|v.|确认安排；证实；加强信念；正式批准；给…施坚振礼|kənˈfɜːm|kənˈfɝːm
conflict|n./vi.|n. 冲突；争执；战争；（作品中的）矛盾冲突；vi. 冲突；不一致；抵触|ˈkɒn.flɪkt|ˈkɑːn.flɪkt
confront|vt.|面对或处理困难；与…当面对质；使面对|kənˈfrʌnt|kənˈfrʌnt
confuse|vt.|使困惑；使难以理解；混淆；认错人或物|kənˈfjuːz|kənˈfjuːz
confusion|n.|困惑；混淆；混乱；慌乱|kənˈfjuː.ʒən|kənˈfjuː.ʒən
congress|n.|代表大会；国会；美国国会（Congress）；性交（正式用语）|ˈkɒŋ.ɡres|ˈkɑːŋ.ɡres
congressional|adj.|美国国会的|kəŋˈɡreʃ.ən.əl|kəŋˈɡreʃ.ən.əl
connect|v.|（使）连接；接通电话或供应；联系起来；建立情感联系；交通工具衔接|kəˈnekt|kəˈnekt
connection|n.|连接；接头；联系；关联；情感联系；电话或网络连接；转乘的交通工具；人脉（connections）|kəˈnek.ʃən|kəˈnek.ʃən
conscience|n.|良心；道德感；内疚|ˈkɒn.ʃəns|ˈkɑːn.ʃəns
consciousness|n.|意识；知觉；清醒状态；对某事的认识|ˈkɒn.ʃəs.nəs|ˈkɑːn.ʃəs.nəs
consecutive|adj.|连续的；接连的；按顺序相接的|kənˈsek.jə.tɪv|kənˈsek.jə.t̬ɪv
consequently|adv.|因此；所以；结果|ˈkɒn.sɪ.kwənt.li|ˈkɑːn.sə.kwənt.li
conservation|n.|自然或文物保护；资源节约；守恒（物理）|ˌkɒn.səˈveɪ.ʃən|ˌkɑːn.sɚˈveɪ.ʃən
Conservative|adj./n.|adj. 保守的；（估计）偏低的；谨慎稳健的；保守党的（大写）；n. 保守派人士；保守党党员或支持者（大写）|kənˈsɜː.və.tɪv|kənˈsɝː.və.t̬ɪv
consider|v.|考虑；仔细思考；把…考虑在内；顾及感受；认为|kənˈsɪd.əʳ|kənˈsɪd.ɚ
considerably|adv.|相当地；显著地；很大程度上|kənˈsɪd.ər.ə.bli|kənˈsɪd.ɚ.ə.bli
consideration|n.|仔细考虑；需考虑的因素；体谅；报酬（正式）；对价（合同法）|kənˌsɪd.əˈreɪ.ʃən|kənˌsɪd.əˈreɪ.ʃən
consist|vi.|由…组成（consist of）；在于、以…为主要特征（consist in，正式）|kənˈsɪst|kənˈsɪst
consistency|n.|一致性；稳定表现；（液体或混合物的）稠度、质地|kənˈsɪs.tən.si|kənˈsɪs.tən.si
consistent|adj.|一贯的；持续稳定的；一致的；相符的（常接 with）|kənˈsɪs.tənt|kənˈsɪs.tənt
conspiracy|n.|阴谋；密谋；共谋|kənˈspɪr.ə.si|kənˈspɪr.ə.si
constant|adj./n.|adj. 经常发生的；不断的；恒定的；忠诚的；n. 常数；始终存在或不变的事物|ˈkɒn.stənt|ˈkɑːn.stənt
constantly|adv.|不断地；经常地；始终|ˈkɒn.stənt.li|ˈkɑːn.stənt.li
constitution|n.|宪法；章程；体质；组成；构成|ˌkɒn.stɪˈtʃuː.ʃən|ˌkɑːn.stəˈtuː.ʃən
constitutional|adj./n.|adj. 宪法的；符合宪法的；体质的；n. 保健散步（旧式，幽默）|ˌkɒn.stɪˈtʃuː.ʃən.əl|ˌkɑːn.stəˈtuː.ʃən.əl
construct|vt./n.|vt. 建造；构建；组织句子或论证；n. 构想；理论构建（正式）|kənˈstrʌkt|kənˈstrʌkt
construction|n.|建造；建筑业；结构；构造；建筑物；语法结构；解释、理解（正式）|kənˈstrʌk.ʃən|kənˈstrʌk.ʃən
consult|v.|咨询；请教；查阅；商量；征询意见|kənˈsʌlt|kənˈsʌlt
consultant|n.|顾问；高级专科医生（英国）|kənˈsʌl.tənt|kənˈsʌl.tənt
consume|vt.|消耗；消费；吃喝（正式）；阅读或观看媒体内容；烧毁；使充满强烈情感（be consumed with/by）|kənˈsjuːm|kənˈsuːm
consumer|n.|消费者；消耗者；消费者（生态学，依靠摄食其他生物获取能量）|kənˈsjuː.məʳ|kənˈsuː.mɚ
contact|n./v.|n. 联系；接触；可提供帮助的人脉；隐形眼镜；电触点；vt. 联系；联络；v. 接触|ˈkɒn.tækt|ˈkɑːn.tækt
contain|vt.|包含；容纳；含有；控制扩散；抑制感情|kənˈteɪn|kənˈteɪn
container|n.|容器；集装箱|kənˈteɪ.nəʳ|kənˈteɪ.nɚ
contemplate|v.|考虑；沉思；凝视，端详|ˈkɒn.təm.pleɪt|ˈkɑːn.t̬əm.pleɪt
contemporary|adj./n.|adj. 当代的；现代的；同一时期的；n. 同时代的人；同龄人|kənˈtem.pər.ər.i|kənˈtem.pə.rer.i
contend|v.|竞争；争夺；声称、主张（正式）；应付困难（contend with）|kənˈtend|kənˈtend
content|adj./vt./n.|adj. 满足的；vt. 使满足；n. 内容；含量；所容纳之物或目录（contents）；满足（文学，另读）|kənˈtent|kənˈtent
context|n.|背景；环境；上下文；语境|ˈkɒn.tekst|ˈkɑːn.tekst
continent|n./adj.|n. 大陆；洲；欧洲大陆（the Continent，主要为英国）；adj. 能控制大小便的；节制性欲的（文学）|ˈkɒn.tɪ.nənt|ˈkɑːn.tən.ənt
continuous|adj.|连续不断的；无间断的；进行式的（语法）|kənˈtɪn.ju.əs|kənˈtɪn.ju.əs
contract|n./v.|n. 合同；契约；v.（使）收缩；感染疾病；订约；签约雇用或承包|ˈkɒn.trækt|ˈkɑːn.trækt
contractor|n.|承包商；承包人；按合同提供服务的非雇员|kənˈtræk.təʳ|ˈkɑːn.træk.tɚ
contrast|n./v.|n. 对比；明显差异；反差；对比度；vt. 对比以显示差异；vi. 形成鲜明对照|ˈkɒn.trɑːst|ˈkɑːn.træst
controversial|adj.|有争议的；引起争论的|ˌkɒn.trəˈvɜː.ʃəl|ˌkɑːn.trəˈvɝː.ʃəl
convenience|n.|方便；便利；便利设施或用具；公共厕所（正式，通常用复数）|kənˈviː.ni.əns|kənˈviː.ni.əns
convention|n.|惯例；习俗；约定俗成的规则；大型会议；公约|kənˈven.ʃən|kənˈven.ʃən
conversation|n.|交谈；谈话；会谈|ˌkɒn.vəˈseɪ.ʃən|ˌkɑːn.vɚˈseɪ.ʃən
conversion|n.|转换；改造；改宗；改造后的住宅；客户转化（商业）；非法处分他人财产（法律）|kənˈvɜː.ʃən|kənˈvɝː.ʒən
convert|v./n.|v.（使）转变；改装；换算；兑换；（使）改宗或改变观念；将得分机会转化为得分（体育）；n. 改宗者；新近接受某观念或生活方式的人|kənˈvɜːt|kənˈvɝːt
convey|vt.|传达；表达；运输；运送|kənˈveɪ|kənˈveɪ
convict|vt./n.|vt. 判定…有罪；n. 已决犯；服刑囚犯|kənˈvɪkt|kənˈvɪkt
conviction|n.|定罪；判罪记录；坚定的信念；确信；坚定有力的表达|kənˈvɪk.ʃən|kənˈvɪk.ʃən
convince|vt.|使确信；使相信；说服|kənˈvɪns|kənˈvɪns
convinced|adj.|确信的；深信不疑的；信念坚定的|kənˈvɪnst|kənˈvɪnst
cooperation|n.|合作；协作；配合；英式也拼 co-operation|kəʊˌɒp.ərˈeɪ.ʃən|koʊˌɑː.pəˈreɪ.ʃən
cooperative|adj./n.|adj. 合作的；愿意配合的；合作经营的；n. 合作社；合作所有的公寓楼（美国）；英式也拼 co-operative|kəʊˈɒp.ər.ə.tɪv|koʊˈɑː.pɚ.ə.t̬ɪv
coordinate|v./n.|vt. 协调；统筹；vi. 颜色或样式相配（英国）；n. 坐标（常用复数）；可搭配穿着的服装（coordinates）|kəʊˈɔː.dɪ.neɪt|koʊˈɔːr.dən.eɪt
cope|vi.|应付；处理困难（常接 with）|kəʊp|koʊp
copy|n./v.|n. 复制品；副本；一本或一份；供排印的稿件；广告文案；v. 复制；抄写；模仿；抄袭；听到或听懂无线电信息|ˈkɒp.i|ˈkɑː.pi
cord|n./vt./adj.|n. 绳；细索；电线；索状组织；脐带；灯芯绒（英国）；灯芯绒裤（cords）；考德，木材体积单位（128立方英尺）；vt. 用绳捆扎；adj. 灯芯绒制的|kɔːd|kɔːrd
`;
const readings={
  "comparable": [
    {
      "label": "adj.",
      "uk": "ˈkɒm.pər.ə.bəl",
      "us": "ˈkɑːm.pɚ.ə.bəl"
    },
    {
      "label": "adj. 变体",
      "uk": "kəmˈpær.ə.bəl",
      "us": "kəmˈper.ə.bəl"
    }
  ],
  "complex": [
    {
      "label": "adj.",
      "uk": "ˈkɒm.pleks",
      "us": "kɑːmˈpleks"
    },
    {
      "label": "adj. 变体",
      "uk": "kəmˈpleks",
      "us": "ˈkɑːm.pleks"
    },
    {
      "label": "n.",
      "uk": "ˈkɒm.pleks",
      "us": "ˈkɑːm.pleks"
    }
  ],
  "compound": [
    {
      "label": "n./adj.",
      "uk": "ˈkɒm.paʊnd",
      "us": "ˈkɑːm.paʊnd"
    },
    {
      "label": "vt.",
      "uk": "kəmˈpaʊnd",
      "us": "kəmˈpaʊnd"
    }
  ],
  "conduct": [
    {
      "label": "v.",
      "uk": "kənˈdʌkt",
      "us": "kənˈdʌkt"
    },
    {
      "label": "n.",
      "uk": "ˈkɒn.dʌkt",
      "us": "ˈkɑːn.dʌkt"
    }
  ],
  "conflict": [
    {
      "label": "n.",
      "uk": "ˈkɒn.flɪkt",
      "us": "ˈkɑːn.flɪkt"
    },
    {
      "label": "vi.",
      "uk": "kənˈflɪkt",
      "us": "kənˈflɪkt"
    }
  ],
  "construct": [
    {
      "label": "vt.",
      "uk": "kənˈstrʌkt",
      "us": "kənˈstrʌkt"
    },
    {
      "label": "n.",
      "uk": "ˈkɒn.strʌkt",
      "us": "ˈkɑːn.strʌkt"
    }
  ],
  "content": [
    {
      "label": "adj./vt.；n. 满足",
      "uk": "kənˈtent",
      "us": "kənˈtent"
    },
    {
      "label": "n. 内容、含量",
      "uk": "ˈkɒn.tent",
      "us": "ˈkɑːn.tent"
    }
  ],
  "contract": [
    {
      "label": "n.",
      "uk": "ˈkɒn.trækt",
      "us": "ˈkɑːn.trækt"
    },
    {
      "label": "v.",
      "uk": "kənˈtrækt",
      "us": "kənˈtrækt"
    }
  ],
  "contrast": [
    {
      "label": "n.",
      "uk": "ˈkɒn.trɑːst",
      "us": "ˈkɑːn.træst"
    },
    {
      "label": "v.",
      "uk": "kənˈtrɑːst",
      "us": "kənˈtræst"
    }
  ],
  "convert": [
    {
      "label": "v.",
      "uk": "kənˈvɜːt",
      "us": "kənˈvɝːt"
    },
    {
      "label": "n.",
      "uk": "ˈkɒn.vɜːt",
      "us": "ˈkɑːn.vɝːt"
    }
  ],
  "convict": [
    {
      "label": "vt.",
      "uk": "kənˈvɪkt",
      "us": "kənˈvɪkt"
    },
    {
      "label": "n.",
      "uk": "ˈkɒn.vɪkt",
      "us": "ˈkɑːn.vɪkt"
    }
  ],
  "coordinate": [
    {
      "label": "v.",
      "uk": "kəʊˈɔː.dɪ.neɪt",
      "us": "koʊˈɔːr.dən.eɪt"
    },
    {
      "label": "n.",
      "uk": "kəʊˈɔː.dɪ.nət",
      "us": "koʊˈɔːr.dən.ət"
    }
  ],
  "conversion": [
    {
      "label": "n.",
      "uk": "kənˈvɜː.ʃən",
      "us": "kənˈvɝː.ʒən"
    },
    {
      "label": "n. 变体",
      "uk": "kənˈvɜː.ʒən",
      "us": "kənˈvɝː.ʃən"
    }
  ]
};
const notes={
  "community": "包括居民群体、共同兴趣社群、生物群落及归属感，不只等于地理社区。",
  "company": "区分可数的公司、表演团体、连队与通常不可数的陪伴或来客义。",
  "comparable": "剑桥列出首音节与第二音节重读两组变体，均分别保留，不把一种合法读法判错。",
  "compensation": "包括赔偿、补偿与薪酬福利；不能只译为赔偿金。",
  "complain": "不及物动词常接 about/to；complain of 可表示诉说病痛，不是只能表示抱怨。",
  "complex": "形容词英美均有重音变体；名词建筑群、复合体、情结首音节重读。复合体义另据柯林斯核对。",
  "compose": "区分作曲写作、构成、使自己平静与排版；组成常见被动结构 be composed of。",
  "compound": "名词、形容词首重读，动词后重读。化合物、围墙内场地、复合词与加重、复利计算分开。",
  "compromise": "妥协的不及物义与降低标准、危及的及物义分开，不把 compromise safety 译成妥协安全。",
  "conception": "观念、构思与受孕分开；不把所有 conception 都解释成概念。",
  "concerning": "介词关于据剑桥；令人担忧的形容词义由柯林斯补充，不误当仅有介词。",
  "concrete": "混凝土不等于水泥；英音中的 ŋ 与美音中的 n 按剑桥抄录。形容词指具体、确实或有形。",
  "conduct": "动词后重读，名词前重读；补充传导、指挥、行为和活动实施方式，避免搭配义缺失。",
  "congress": "大写 Congress 指美国国会，小写还指代表大会及其他国家国会；正式性交义有词典依据，并非错误造义。",
  "congressional": "按所引剑桥条目主要指美国国会的，不无条件泛化为所有国家议会的。",
  "conscience": "良心、道德感，与 consciousness 意识不同；不将两词混用。",
  "Conservative": "原词库以大写保存；说明大写保守党与小写保守、稳健、低估义的区别，避免把普通形容词当政党专名。",
  "consist": "由…组成用 consist of；在于用 consist in；不及物，不写成 be consisted of。",
  "consistency": "一致性与混合物的稠度、质地分别给例句，不只保留抽象义。",
  "conservation": "保护、节约与物理守恒分别标注，不能一律替换为环境保护。",
  "constitution": "宪法、组织章程、体质和组成均有依据；英美 -tʃuː-/-tuː- 按剑桥分列。",
  "constitutional": "补充体质义与旧式幽默用语保健散步名词，保留语域说明。",
  "construct": "动词建造、构建后重读；正式名词构想或理论构建前重读。",
  "consultant": "顾问之外，在英国医院还指最高级别的专科医生，不只泛指咨询者。",
  "consume": "消耗、吃喝、消费媒体内容、火焰吞噬及强烈情感占据均核对，英音带 j、美音不带 j。",
  "consumer": "商业消费者之外，生态学消费者生物义由柯林斯补充核对。",
  "contact": "名词与动词均前重读；名词常接 with，联系人的动词直接接宾语。补充电触点和隐形眼镜。",
  "contain": "控制扩散及抑制情感与容纳分开；抑制感情义由柯林斯交叉核对。",
  "contemplate": "考虑、沉思据剑桥；长时间凝视某物义据柯林斯补充，不与一般看见等同。",
  "contemporary": "当代的和与过去某人同时代的并存；名词可指同时代人或同龄人。",
  "content": "内容、含量名词前重读；满足的形容词、使满足动词和文学满足名词后重读。contents 的容纳物、目录义注明复数形式。",
  "contract": "合同名词前重读；收缩、感染疾病及订约动词后重读，不将 contract a disease 误作签订疾病。",
  "contractor": "剑桥给英音后重读、美音前重读，按实际条目分别保留，不因词源机械套读。",
  "contrast": "名词前重读、动词后重读，英美后元音另有差别。",
  "conversion": "剑桥在英美音均列 ʃ/ʒ 变体；改造、改宗、客户转化及法律非法处分义分开。",
  "convert": "动词后重读，改宗者或新信奉者名词前重读。",
  "convict": "判定有罪的动词后重读，服刑囚犯名词前重读，与 conviction 的判罪、信念区别。",
  "coordinate": "动词末尾 -neɪt，名词末尾 -nət；不把坐标名词读成协调动词。",
  "cord": "绳、电线、身体索状组织与灯芯绒分开；捆扎动词和木材体积单位由柯林斯补充。"
};
const senses={
  "community": [
    [
      "n. 社区",
      "The local community helped restore the park."
    ],
    [
      "n. 群落（生物）",
      "The reef supports a diverse community of organisms."
    ]
  ],
  "companion": [
    [
      "n. 同伴",
      "Her dog was a loyal companion on long walks."
    ],
    [
      "n. 指南；手册",
      "The volume is a useful companion to the course."
    ]
  ],
  "company": [
    [
      "n. 公司",
      "The company develops equipment for marine research."
    ],
    [
      "n. 陪伴",
      "She enjoyed his company during the journey."
    ],
    [
      "n. 剧团",
      "The company will perform three plays this season."
    ],
    [
      "n. 连队",
      "The company returned to its base before nightfall."
    ]
  ],
  "compare": [
    [
      "v. 比较",
      "Compare the two samples under the same lighting."
    ],
    [
      "v. 比作",
      "Critics compare her writing to that of earlier modernists."
    ]
  ],
  "compel": [
    [
      "vt. 迫使",
      "The evidence may compel the committee to reconsider."
    ],
    [
      "vt. 引起强烈反应",
      "Her skill and determination compel admiration."
    ]
  ],
  "compensation": [
    [
      "n. 赔偿",
      "Residents received compensation for the damage."
    ],
    [
      "n. 薪酬及福利",
      "The offer includes a detailed compensation package."
    ]
  ],
  "competition": [
    [
      "n. 竞争",
      "Competition for places on the course is intense."
    ],
    [
      "n. 比赛",
      "The school organised a photography competition."
    ],
    [
      "n. 竞争对手",
      "The team studied the competition before the final."
    ]
  ],
  "complaint": [
    [
      "n. 投诉",
      "The office investigated a complaint about the service."
    ],
    [
      "n. 疾病",
      "He visited the clinic with a stomach complaint."
    ]
  ],
  "complete": [
    [
      "adj. 完整的",
      "The archive holds a complete set of the journals."
    ],
    [
      "adj. 彻底的",
      "The announcement came as a complete surprise."
    ],
    [
      "vt. 完成",
      "Students must complete the project by Friday."
    ],
    [
      "vt. 填写",
      "Please complete the application form in ink."
    ]
  ],
  "complex": [
    [
      "adj. 复杂的",
      "The software controls a complex network of sensors."
    ],
    [
      "n. 建筑群",
      "The new sports complex includes a swimming pool."
    ],
    [
      "n. 情结",
      "He developed a complex about speaking in public."
    ]
  ],
  "complication": [
    [
      "n. 新增困难",
      "A shortage of materials caused an unexpected complication."
    ],
    [
      "n. 并发症",
      "The study examined complications following surgery."
    ]
  ],
  "compose": [
    [
      "v. 创作；作曲",
      "She hopes to compose music for the documentary."
    ],
    [
      "v. 构成",
      "Several small islands compose the archipelago."
    ],
    [
      "v. 使自己平静",
      "Take a moment to compose yourself before the interview."
    ]
  ],
  "compound": [
    [
      "n. 化合物",
      "The compound contains carbon and oxygen."
    ],
    [
      "n. 有围墙的场地",
      "Visitors must report to the gate of the compound."
    ],
    [
      "adj. 复合的",
      "A compound sentence contains more than one main clause."
    ],
    [
      "vt. 加重",
      "Further delays could compound the shortage."
    ],
    [
      "adj. 复利的",
      "The account pays compound interest."
    ]
  ],
  "compromise": [
    [
      "n. 折中办法",
      "The two sides finally reached a compromise."
    ],
    [
      "vi. 妥协",
      "Neither side was willing to compromise."
    ],
    [
      "vt. 危及",
      "The change must not compromise safety."
    ]
  ],
  "concede": [
    [
      "v. 承认",
      "The author had to concede that the evidence was weak."
    ],
    [
      "v. 认输",
      "The candidate refused to concede before the count ended."
    ],
    [
      "v. 失分",
      "The defence cannot afford to concede another goal."
    ]
  ],
  "conceive": [
    [
      "v. 构思",
      "The team will conceive a new design for the exhibition."
    ],
    [
      "v. 想象",
      "It is difficult to conceive of such enormous distances."
    ],
    [
      "v. 怀孕",
      "The study followed women who were trying to conceive."
    ]
  ],
  "conception": [
    [
      "n. 观念；理解",
      "The course challenges a narrow conception of intelligence."
    ],
    [
      "n. 受孕",
      "The researchers studied development from conception onward."
    ]
  ],
  "concerned": [
    [
      "adj. 担心的",
      "The residents are concerned about water quality."
    ],
    [
      "adj. 有关的",
      "All the people concerned received a copy of the report."
    ]
  ],
  "concerning": [
    [
      "prep. 关于",
      "The letter contains information concerning the new timetable."
    ],
    [
      "adj. 令人担忧的",
      "The rapid decline in numbers is particularly concerning."
    ]
  ],
  "concert": [
    [
      "n. 音乐会",
      "The students gave a concert in the town hall."
    ],
    [
      "n. 联合行动（in concert）",
      "The agencies acted in concert to restore the wetland."
    ]
  ],
  "conclude": [
    [
      "v. 结束",
      "The meeting will conclude with a short discussion."
    ],
    [
      "v. 得出结论",
      "We cannot conclude that the treatment caused the change."
    ],
    [
      "v. 达成协议",
      "The firms hope to conclude the agreement this month."
    ]
  ],
  "concrete": [
    [
      "n. 混凝土",
      "The supports are made of reinforced concrete."
    ],
    [
      "adj. 具体的；确实的",
      "The report offers concrete evidence of the change."
    ]
  ],
  "condemn": [
    [
      "vt. 谴责",
      "The council voted to condemn the attack."
    ],
    [
      "vt. 判刑",
      "The court had the power to condemn him to imprisonment."
    ],
    [
      "vt. 判定不安全",
      "Inspectors may condemn the building if the damage is severe."
    ]
  ],
  "condition": [
    [
      "n. 状况",
      "The manuscript remains in excellent condition."
    ],
    [
      "n. 条件",
      "Payment in advance is a condition of the agreement."
    ],
    [
      "n. 疾病",
      "The patient has a long-standing heart condition."
    ],
    [
      "vt. 使形成习惯或条件反射",
      "Repeated rewards can condition animals to respond to a signal."
    ],
    [
      "vt. 护理",
      "This treatment helps condition dry hair."
    ]
  ],
  "conduct": [
    [
      "v. 进行",
      "The team will conduct a survey of coastal habitats."
    ],
    [
      "v. 传导",
      "Metals conduct heat at different rates."
    ],
    [
      "v. 指挥",
      "She will conduct the orchestra at the opening concert."
    ],
    [
      "n. 行为",
      "The school has clear rules governing student conduct."
    ]
  ],
  "conference": [
    [
      "n. 会议",
      "The conference brings together researchers from several countries."
    ],
    [
      "n. 体育联盟",
      "The team leads its conference after six matches."
    ]
  ],
  "confess": [
    [
      "v. 坦白",
      "I must confess that I forgot the meeting."
    ],
    [
      "v. 告解",
      "Some worshippers confess their sins to a priest."
    ]
  ],
  "confidence": [
    [
      "n. 信心",
      "The successful trial restored confidence in the design."
    ],
    [
      "n. 秘密",
      "They exchanged confidences during the long journey."
    ],
    [
      "n. 保密（in confidence）",
      "The information was shared in confidence."
    ]
  ],
  "confirm": [
    [
      "v. 确认安排",
      "Please confirm your booking before departure."
    ],
    [
      "v. 证实",
      "Further tests are needed to confirm the result."
    ],
    [
      "v. 正式批准",
      "The committee will confirm the appointment next week."
    ]
  ],
  "conflict": [
    [
      "n. 冲突",
      "The proposal caused conflict within the organisation."
    ],
    [
      "vi. 不一致",
      "These figures conflict with the earlier report."
    ]
  ],
  "confront": [
    [
      "vt. 面对困难",
      "The town must confront the problem of coastal erosion."
    ],
    [
      "vt. 当面对质",
      "She decided to confront him about the missing funds."
    ]
  ],
  "confuse": [
    [
      "vt. 使困惑",
      "The extra instructions may confuse new users."
    ],
    [
      "vt. 混淆",
      "Do not confuse correlation with causation."
    ]
  ],
  "connection": [
    [
      "n. 关联",
      "The study found a connection between diet and sleep."
    ],
    [
      "n. 转乘的交通工具",
      "We missed our connection after the first train was delayed."
    ],
    [
      "n. 人脉",
      "Her connections helped the group find a suitable venue."
    ]
  ],
  "consciousness": [
    [
      "n. 清醒；知觉",
      "He regained consciousness shortly after the accident."
    ],
    [
      "n. 认识",
      "The campaign raised public consciousness of food waste."
    ]
  ],
  "conservation": [
    [
      "n. 保护",
      "Habitat conservation is central to the project."
    ],
    [
      "n. 节约",
      "Water conservation reduced demand during the drought."
    ],
    [
      "n. 守恒",
      "The experiment illustrates the conservation of energy."
    ]
  ],
  "Conservative": [
    [
      "adj. 保守党的（大写）",
      "A Conservative councillor spoke at the meeting."
    ],
    [
      "adj. 谨慎稳健的；保守的（小写）",
      "The fund follows a conservative investment strategy."
    ],
    [
      "adj. 估计偏低的（小写）",
      "Even a conservative estimate puts the cost above a million."
    ],
    [
      "n. 保守党支持者（大写）",
      "She has been a Conservative for many years."
    ]
  ],
  "consider": [
    [
      "v. 考虑",
      "We need to consider several possible explanations."
    ],
    [
      "v. 认为",
      "Most researchers consider the method reliable."
    ],
    [
      "v. 顾及",
      "Please consider the needs of the other passengers."
    ]
  ],
  "consideration": [
    [
      "n. 仔细考虑",
      "The proposal deserves careful consideration."
    ],
    [
      "n. 需考虑的因素",
      "Safety is the most important consideration."
    ],
    [
      "n. 体谅",
      "She showed consideration for her elderly neighbours."
    ],
    [
      "n. 报酬（正式）",
      "He agreed to repair the instrument for a small consideration."
    ]
  ],
  "consist": [
    [
      "vi. 由…组成",
      "The samples consist of sand and fine clay."
    ],
    [
      "vi. 在于",
      "The value of the method may consist in its simplicity."
    ]
  ],
  "consistency": [
    [
      "n. 稳定表现",
      "The team needs greater consistency throughout the season."
    ],
    [
      "n. 稠度；质地",
      "Stir until the mixture reaches a smooth consistency."
    ]
  ],
  "constant": [
    [
      "adj. 不断发生的",
      "The constant noise made concentration difficult."
    ],
    [
      "adj. 恒定的",
      "Keep the temperature constant during the experiment."
    ],
    [
      "n. 常数",
      "The equation includes a constant that represents the initial value."
    ]
  ],
  "constitution": [
    [
      "n. 宪法",
      "The constitution defines the powers of the government."
    ],
    [
      "n. 体质",
      "Her strong constitution helped her recover."
    ],
    [
      "n. 组成",
      "The constitution of the committee was reviewed."
    ]
  ],
  "constitutional": [
    [
      "adj. 符合宪法的",
      "The court considered whether the measure was constitutional."
    ],
    [
      "adj. 体质的",
      "The doctor noted a constitutional weakness."
    ],
    [
      "n. 保健散步（旧式，幽默）",
      "He takes a constitutional along the river each morning."
    ]
  ],
  "construct": [
    [
      "vt. 建造",
      "Workers will construct a new bridge across the stream."
    ],
    [
      "vt. 构建",
      "The researchers must construct a testable explanation."
    ],
    [
      "n. 理论构建",
      "The category is a theoretical construct rather than a physical object."
    ]
  ],
  "construction": [
    [
      "n. 建造",
      "Construction of the station began last spring."
    ],
    [
      "n. 语法结构",
      "The lesson introduces a common grammatical construction."
    ],
    [
      "n. 解释（正式）",
      "That construction of her words seems unfair."
    ]
  ],
  "consult": [
    [
      "v. 查阅",
      "Consult the map before choosing a route."
    ],
    [
      "v. 商量；征询意见",
      "The council will consult residents before making a decision."
    ]
  ],
  "consultant": [
    [
      "n. 顾问",
      "The museum hired a conservation consultant."
    ],
    [
      "n. 高级专科医生（英国）",
      "The patient was referred to a consultant at the teaching hospital."
    ]
  ],
  "consume": [
    [
      "vt. 消耗",
      "These lamps consume very little electricity."
    ],
    [
      "vt. 吃喝",
      "Participants recorded the food they consume each day."
    ],
    [
      "vt. 消费媒体内容",
      "People increasingly consume news on mobile devices."
    ],
    [
      "vt. 烧毁",
      "The flames could consume the entire wooden structure."
    ]
  ],
  "consumer": [
    [
      "n. 消费者",
      "The consumer can compare prices online."
    ],
    [
      "n. 消费者（生态学）",
      "A rabbit is a primary consumer in this food web."
    ]
  ],
  "contact": [
    [
      "n. 联系",
      "The team lost radio contact with the vessel."
    ],
    [
      "n. 接触",
      "Avoid direct contact between the two metals."
    ],
    [
      "n. 电触点",
      "A damaged contact interrupted the circuit."
    ],
    [
      "vt. 联络",
      "Please contact the office for further details."
    ]
  ],
  "contain": [
    [
      "vt. 包含；容纳",
      "The bottles contain samples from the river."
    ],
    [
      "vt. 控制扩散",
      "Firefighters worked to contain the blaze."
    ],
    [
      "vt. 抑制感情",
      "She could barely contain her excitement."
    ]
  ],
  "contemplate": [
    [
      "v. 考虑",
      "The committee will contemplate several options."
    ],
    [
      "v. 凝视；端详",
      "He paused to contemplate the distant mountains."
    ]
  ],
  "contemporary": [
    [
      "adj. 当代的",
      "The gallery exhibits contemporary sculpture."
    ],
    [
      "adj. 同时代的",
      "Contemporary accounts describe the city before the fire."
    ],
    [
      "n. 同时代人",
      "The poet was admired by many of her contemporaries."
    ]
  ],
  "contend": [
    [
      "vi. 争夺",
      "Four teams will contend for the title."
    ],
    [
      "v. 主张",
      "The authors contend that the differences are significant."
    ],
    [
      "vi. 应付（contend with）",
      "The crew must contend with strong winds."
    ]
  ],
  "content": [
    [
      "n. 内容",
      "The content of the report is available online."
    ],
    [
      "n. 含量",
      "The soil has a high salt content."
    ],
    [
      "adj. 满足的",
      "She was content with the final result."
    ],
    [
      "vt. 使满足",
      "We must content ourselves with a shorter visit."
    ],
    [
      "n. 满足（文学）",
      "The quiet evening brought him a sense of content."
    ]
  ],
  "context": [
    [
      "n. 背景",
      "The discovery must be understood in its historical context."
    ],
    [
      "n. 上下文",
      "Use the context to infer the meaning of the word."
    ]
  ],
  "continent": [
    [
      "n. 大陆；洲",
      "The species is found across the African continent."
    ],
    [
      "n. 欧洲大陆（the Continent）",
      "They travelled from Britain to the Continent by train."
    ],
    [
      "adj. 能控制大小便的",
      "The assessment recorded whether the patient was continent."
    ]
  ],
  "continuous": [
    [
      "adj. 连续不断的",
      "The instrument records a continuous signal."
    ],
    [
      "adj. 进行式的（语法）",
      "The exercise practises the present continuous tense."
    ]
  ],
  "contract": [
    [
      "n. 合同",
      "The company signed a contract to supply equipment."
    ],
    [
      "v. 收缩",
      "The material will contract as it cools."
    ],
    [
      "v. 感染疾病",
      "Travellers may contract the infection through contaminated water."
    ],
    [
      "v. 签约雇用",
      "The museum will contract a specialist to restore the painting."
    ]
  ],
  "contrast": [
    [
      "n. 对比；反差",
      "The contrast between the two landscapes is striking."
    ],
    [
      "v. 对比",
      "The report will contrast the results of the two surveys."
    ]
  ],
  "convenience": [
    [
      "n. 便利",
      "The location offers the convenience of nearby public transport."
    ],
    [
      "n. 便利设施或用具",
      "The cottage has every modern convenience."
    ],
    [
      "n. 公共厕所（正式）",
      "The public conveniences are beside the car park."
    ]
  ],
  "convention": [
    [
      "n. 惯例",
      "The artist challenged the conventions of portrait painting."
    ],
    [
      "n. 大型会议",
      "The annual convention attracts thousands of visitors."
    ],
    [
      "n. 公约",
      "The convention sets standards for protecting wetlands."
    ]
  ],
  "conversion": [
    [
      "n. 转换；改造",
      "The project involves the conversion of a warehouse into flats."
    ],
    [
      "n. 改宗",
      "The book describes her conversion to Buddhism."
    ],
    [
      "n. 客户转化",
      "The new website design increased customer conversions."
    ]
  ],
  "convert": [
    [
      "v. 转换",
      "The device can convert sunlight into electricity."
    ],
    [
      "v. 换算",
      "Convert the measurements from inches to centimetres."
    ],
    [
      "n. 新信奉者",
      "He became a convert to vegetarian cooking."
    ]
  ],
  "convey": [
    [
      "vt. 传达",
      "The diagram helps convey the main idea."
    ],
    [
      "vt. 运送",
      "The channels convey water to the fields."
    ]
  ],
  "convict": [
    [
      "vt. 判定有罪",
      "The jury needed stronger evidence to convict him."
    ],
    [
      "n. 服刑囚犯",
      "The former convict described his years in prison."
    ]
  ],
  "conviction": [
    [
      "n. 定罪",
      "New evidence led to the reversal of the conviction."
    ],
    [
      "n. 信念",
      "She expressed a firm conviction that the project would succeed."
    ],
    [
      "n. 确信；坚定语气",
      "His answer lacked conviction."
    ]
  ],
  "cooperative": [
    [
      "adj. 愿意配合的",
      "The staff were friendly and cooperative."
    ],
    [
      "n. 合作社",
      "The farmers formed a cooperative to market their produce."
    ]
  ],
  "coordinate": [
    [
      "v. 协调",
      "A central office will coordinate the relief effort."
    ],
    [
      "n. 坐标",
      "Record the coordinates of each sampling site."
    ],
    [
      "vi. 颜色相配（英国）",
      "The curtains coordinate with the cushions."
    ]
  ],
  "copy": [
    [
      "n. 复制品",
      "The museum displays a copy of the original sculpture."
    ],
    [
      "n. 一本；一份",
      "She bought a copy of the new field guide."
    ],
    [
      "n. 文案",
      "The editor revised the advertising copy."
    ],
    [
      "v. 模仿",
      "Young birds may copy the songs of adults."
    ],
    [
      "v. 听到无线电信息",
      "Control, do you copy?"
    ]
  ],
  "cord": [
    [
      "n. 绳",
      "Tie the bundle with a length of cord."
    ],
    [
      "n. 电线",
      "The lamp needs a new power cord."
    ],
    [
      "n. 索状组织",
      "The spinal cord carries signals between the brain and body."
    ],
    [
      "n. 灯芯绒裤（cords）",
      "He wore a wool sweater and brown cords."
    ],
    [
      "vt. 用绳捆扎",
      "The workers cord the bundles before transport."
    ]
  ]
};
const phPages=new Set("company considerably consist constitution conversation cooperative compound conduct conflict construct content contract convict coordinate concrete complex".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-17",batch:"018",file:"js/lexicon-review-018.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性及英美音；中文释义为归纳，例句为原创，专业、地区或语域差异另作说明。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
for(const w of ['complex','compound','concerning','consumer','contain','contemplate','cord']) get(w).sources=[get(w).source,'https://www.collinsdictionary.com/dictionary/english/'+w];
get('consist').sources=[get('consist').source,'https://dictionary.cambridge.org/dictionary/english/consist-of','https://dictionary.cambridge.org/dictionary/english/consist-in'];
get('concert').sources=[get('concert').source,'https://dictionary.cambridge.org/dictionary/english/in-concert'];
get('concede').sources=[get('concede').source,'https://dictionary.cambridge.org/dictionary/english/concede-a-goal-point'];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"018",checkedOn:"2026-11-17",words:records.map(r=>r.w),note:"托福高频接续批次；核对多词性、多义及同形异音，并保留来源与语域说明。",deferred:[]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
