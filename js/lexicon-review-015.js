/* Batch 015: core vocabulary, checked 2026-11-17. Glosses summarized; examples original. */
(function(){
const raw=`
fossil|n.|化石；守旧的老人（非正式，幽默用法）|ˈfɒs.əl|ˈfɑː.səl
fracture|v./n.|v.（使）骨折或断裂；（使组织、社会）分裂（正式）；n. 骨折；裂缝；断裂|ˈfræk.tʃəʳ|ˈfræk.tʃɚ
framework|n.|支撑框架；构架；规则、思想等的体系或框架|ˈfreɪm.wɜːk|ˈfreɪm.wɝːk
fresco|n.|湿壁画；湿壁画技法；复数 frescoes 或 frescos|ˈfres.kəʊ|ˈfres.koʊ
friction|n.|摩擦；摩擦力；分歧；不和|ˈfrɪk.ʃən|ˈfrɪk.ʃən
frustrate|vt.|使沮丧或懊恼；阻挠；挫败计划或努力|frʌsˈtreɪt|ˈfrʌs.treɪt
fundamental|adj./n.|adj. 基础的；根本的；最重要的；n. 基本原则（通常用复数）；基音（音乐）|ˌfʌn.dəˈmen.təl|ˌfʌn.dəˈmen.t̬əl
fusion|n.|融合；结合；核聚变|ˈfjuː.ʒən|ˈfjuː.ʒən
galaxy|n.|星系；银河系（the Galaxy）；一群名人（a galaxy of）|ˈɡæl.ək.si|ˈɡæl.ək.si
genre|n./adj.|n.（文艺作品的）类型；体裁；adj. 按某种类型或模式创作的|ˈʒɑ̃ː.rə|ˈʒɑːn.rə
glacier|n.|冰川|ˈɡlæs.i.əʳ|ˈɡleɪ.ʃɚ
gradual|adj.|逐渐的；渐进的|ˈɡrædʒ.u.əl|ˈɡrædʒ.u.əl
gravity|n.|重力；引力；严重性|ˈɡræv.ə.ti|ˈɡræv.ə.t̬i
habitat|n.|（动植物的）自然栖息地；生境|ˈhæb.ɪ.tæt|ˈhæb.ə.tæt
habituation|n.|习惯化；对反复出现的事物逐渐适应的过程|həˌbɪtʃ.uˈeɪ.ʃən|həˌbɪtʃ.uˈeɪ.ʃən
hence|adv.|因此；由此；从现在起（用于时间之后，正式）|hens|hens
heritage|n.|文化遗产；传统；个人的族裔、宗教或文化背景|ˈher.ɪ.tɪdʒ|ˈher.ɪ.t̬ɪdʒ
hibernate|vi.|冬眠|ˈhaɪ.bə.neɪt|ˈhaɪ.bɚ.neɪt
hierarchy|n.|等级制度；层级体系；组织高层|ˈhaɪə.rɑː.ki|ˈhaɪ.rɑːr.ki
hinder|vt./adj.|vt. 阻碍；妨碍；adj. 后面的；靠后的（置于名词前）|ˈhɪn.dəʳ|ˈhɪn.dɚ
humid|adj.|（空气或天气）潮湿的；湿热的|ˈhjuː.mɪd|ˈhjuː.mɪd
hypothesis|n.|假说；假设；复数 hypotheses|haɪˈpɒθ.ə.sɪs|haɪˈpɑː.θə.sɪs
illustrate|vt.|为…画插图；用例子或图解说明；显示|ˈɪl.ə.streɪt|ˈɪl.ə.streɪt
immigrant|n.|移入他国定居的人；移民|ˈɪm.ɪ.ɡrənt|ˈɪm.ə.ɡrənt
impede|vt.|阻碍；妨碍（正式）|ɪmˈpiːd|ɪmˈpiːd
implicit|adj.|含蓄的；未明说的；无意识的；（信任、信仰等）完全的；毫无保留的|ɪmˈplɪs.ɪt|ɪmˈplɪs.ɪt
improvise|v.|即兴创作或表演；临时凑成；临时应变|ˈɪm.prə.vaɪz|ˈɪm.prə.vaɪz
incentive|n.|激励；刺激；鼓励行动的奖励或因素|ɪnˈsen.tɪv|ɪnˈsen.t̬ɪv
indicate|v.|表明；指出；示意；显示数值；打转向信号（英）；显示适宜采用某疗法（医学）|ˈɪn.dɪ.keɪt|ˈɪn.də.keɪt
indigenous|adj.|原住民的；本土的；土生土长的；非外来的|ɪnˈdɪdʒ.ɪ.nəs|ɪnˈdɪdʒ.ə.nəs
industrialization|n.|工业化（英式通常作 industrialisation）|ɪnˌdʌs.tri.ə.laɪˈzeɪ.ʃən|ɪnˌdʌs.tri.ə.ləˈzeɪ.ʃən
inevitable|adj.|不可避免的；必然发生的|ɪˈnev.ɪ.tə.bəl|ˌɪnˈev.ə.t̬ə.bəl
infer|vt.|推断；推论（正式）|ɪnˈfɜːʳ|ɪnˈfɝː
inflation|n.|通货膨胀；持续增长；夸大；充气；膨胀|ɪnˈfleɪ.ʃən|ɪnˈfleɪ.ʃən
infrastructure|n.|基础设施；基本系统或服务|ˈɪn.frəˌstrʌk.tʃəʳ|ˈɪn.frəˌstrʌk.tʃɚ
inhabit|vt.|居住于；栖息于|ɪnˈhæb.ɪt|ɪnˈhæb.ɪt
inhibit|vt.|使拘束；使不敢行动；抑制；减缓|ɪnˈhɪb.ɪt|ɪnˈhɪb.ɪt
innate|adj.|天生的；与生俱来的|ɪˈneɪt|ɪˈneɪt
innovative|adj.|采用新方法或新观念的；创新的|ˈɪn.ə.və.tɪv|ˈɪn.ə.veɪ.t̬ɪv
inscription|n.|铭文；题词；刻写的文字|ɪnˈskrɪp.ʃən|ɪnˈskrɪp.ʃən
instinct|n./adj.|n. 本能；直觉；天赋；adj. 充满…的；受…驱动的（罕用，常后接 with）|ˈɪn.stɪŋkt|ˈɪn.stɪŋkt
intense|adj.|强烈的；极度的；（人）严肃认真且感情强烈的|ɪnˈtens|ɪnˈtens
intricate|adj.|错综复杂的；精细复杂的；难以理解的|ˈɪn.trɪ.kət|ˈɪn.trə.kət
intuition|n.|直觉；凭感觉立即理解或知道某事的能力|ˌɪn.tʃuːˈɪʃ.ən|ˌɪn.tuːˈɪʃ.ən
irrigation|n.|灌溉|ˌɪr.ɪˈɡeɪ.ʃən|ˌɪr.əˈɡeɪ.ʃən
labor|n./v.|n. 劳动；劳工；分娩；v. 辛勤工作；费力进行（美式拼写，英式 labour）；Labor 指澳大利亚工党|ˈleɪ.bəʳ|ˈleɪ.bɚ
landform|n.|地形；地貌|ˈlænd.fɔːm|ˈlænd.fɔːrm
larva|n.|幼虫；幼体；复数 larvae|ˈlɑː.və|ˈlɑːr.və
layer|n./vt.|n. 层；组织层级；层次发型（layers）；vt. 分层铺放；把头发剪成层次|ˈleɪ.əʳ|ˈleɪ.ɚ
legislation|n.|法律；法规；立法|ˌledʒ.ɪˈsleɪ.ʃən|ˌledʒ.əˈsleɪ.ʃən
literacy|n.|读写能力；某领域的基本知识或素养|ˈlɪt.ər.ə.si|ˈlɪt̬.ɚ.ə.si
luminous|adj.|发光的；反光的；与光有关的|ˈluː.mɪ.nəs|ˈluː.mə.nəs
magnitude|n.|巨大；重要性；大小；震级；星等|ˈmæɡ.nɪ.tʃuːd|ˈmæɡ.nə.tuːd
maintain|vt.|维持；保持；维修保养；坚称；供养；资助|meɪnˈteɪn|meɪnˈteɪn
manuscript|n.|出版前的原稿；古代手抄本|ˈmæn.jə.skrɪpt|ˈmæn.jə.skrɪpt
masterpiece|n.|杰作；技艺精湛或令人赞叹的范例|ˈmɑː.stə.piːs|ˈmæs.tɚ.piːs
meander|vi./n.|vi. 蜿蜒；漫步；漫无目的地进行或叙述；n. 河曲；漫游|miˈæn.dəʳ|miˈæn.dɚ
mechanism|n.|机械装置；机构；机制；应对困难的心理方式|ˈmek.ə.nɪ.zəm|ˈmek.ə.nɪ.zəm
mechanize|vt.|使机械化；用机器代替手工（英式通常作 mechanise）|ˈmek.ə.naɪz|ˈmek.ə.naɪz
medieval|adj.|中世纪的；亦作 mediaeval|ˌmed.iˈiː.vəl|med.ˈiː.vəl
medium|adj./n.|adj. 中等的；（肉）中等熟度的；n. 表达或传播媒介；介质；培养基；自称能与亡灵沟通的灵媒|ˈmiː.di.əm|ˈmiː.di.əm
memorize|vt.|记住；熟记（英式通常作 memorise）|ˈmem.ə.raɪz|ˈmem.ə.raɪz
merchant|n.|批发商；贸易商；零售商；爱做某种令人讨厌的事的人（英，非正式贬义）|ˈmɜː.tʃənt|ˈmɝː.tʃənt
merely|adv.|仅仅；只不过|ˈmɪə.li|ˈmɪr.li
meteorite|n.|陨石；落到地面的天外物质|ˈmiː.ti.ə.raɪt|ˈmiː.t̬i.ə.raɪt
migrate|v.|迁徙；移居；转移；迁移电脑系统或数据|maɪˈɡreɪt|ˈmaɪ.ɡreɪt
mimic|vt./n.|vt. 模仿；具有相似作用；n. 善于模仿他人声音或动作的人|ˈmɪm.ɪk|ˈmɪm.ɪk
mineral|n./adj.|n. 矿物；矿物质；汽水（minerals，英，旧时）；adj. 矿物的；矿物质的|ˈmɪn.ər.əl|ˈmɪn.ər.əl
modify|vt.|稍作修改；调整；修饰（语法）|ˈmɒd.ɪ.faɪ|ˈmɑː.də.faɪ
molten|adj.|熔融的；（金属、岩石等）高温熔化的|ˈməʊl.tən|ˈmoʊl.tən
momentum|n.|动量；动力；势头|məˈmen.təm|məˈmen.t̬əm
monopoly|n.|垄断；独占；垄断企业或组织|məˈnɒp.əl.i|məˈnɑː.pəl.i
monument|n.|纪念碑；纪念建筑；历史遗迹；体现某人努力或品质的事物（monument to）|ˈmɒn.jə.mənt|ˈmɑːn.jə.mənt
moreover|adv.|而且；此外；更重要的是（正式）|ˌmɔːˈrəʊ.vəʳ|ˌmɔːrˈoʊ.vɚ
motif|n.|装饰图案；文艺作品中反复出现的主题或动机|məʊˈtiːf|moʊˈtiːf
motivation|n.|积极性；动力；动机；原因|ˌməʊ.tɪˈveɪ.ʃən|ˌmoʊ.t̬əˈveɪ.ʃən
mural|n.|壁画|ˈmjʊə.rəl|ˈmjʊr.əl
mutation|n.|基因突变；突变过程；突变体|mjuːˈteɪ.ʃən|mjuːˈteɪ.ʃən
narrative|n./adj.|n. 叙述；故事；解释或理解事件的方式；adj. 叙事的（正式）|ˈnær.ə.tɪv|ˈner.ə.t̬ɪv
nebula|n.|星云；复数 nebulae 或 nebulas|ˈneb.jə.lə|ˈneb.jə.lə
nevertheless|adv.|然而；尽管如此|ˌnev.ə.ðəˈles|ˌnev.ɚ.ðəˈles
nocturnal|adj.|夜行性的；夜间活动或发生的|nɒkˈtɜː.nəl|nɑːkˈtɝː.nəl
nomadic|adj.|游牧的；不断迁移的|nəʊˈmæd.ɪk|noʊˈmæd.ɪk
notably|adv.|尤其；特别是；显著地|ˈnəʊ.tə.bli|ˈnoʊ.t̬ə.bli
nurture|vt./n.|vt. 养育；培育；扶持；长期怀有某种感情、想法或计划；n. 后天养育；成长环境的影响|ˈnɜː.tʃəʳ|ˈnɝː.tʃɚ
nutrient|n.|营养物；养分|ˈnjuː.tri.ənt|ˈnuː.tri.ənt
obstacle|n.|障碍物；阻碍；困难|ˈɒb.stə.kəl|ˈɑːb.stə.kəl
offspring|n.|后代；幼崽；子女（用于人时常为正式或幽默用语）；单复数同形|ˈɒf.sprɪŋ|ˈɑːf.sprɪŋ
orbit|n./v.|n. 天体运行轨道；眼眶；v. 绕天体轨道运行|ˈɔː.bɪt|ˈɔːr.bɪt
organism|n.|生物；有机体|ˈɔː.ɡən.ɪ.zəm|ˈɔːr.ɡən.ɪ.zəm
origin|n.|起源；来源；出身；原产地；原点（数学）|ˈɒr.ɪ.dʒɪn|ˈɔːr.ə.dʒɪn
ornament|n./vt.|n. 装饰品；装饰；装饰音（音乐）；vt. 装饰（正式）|ˈɔː.nə.mənt|ˈɔːr.nə.mənt
paradox|n.|悖论；看似矛盾的情况或说法|ˈpær.ə.dɒks|ˈper.ə.dɑːks
parasite|n.|寄生生物；靠他人养活而不付出的人（贬义）|ˈpær.ə.saɪt|ˈper.ə.saɪt
particle|n.|微粒；极少量；粒子（物理）；小品词（语法）|ˈpɑː.tɪ.kəl|ˈpɑːr.t̬ə.kəl
patron|n.|资助者；赞助人；顾客（正式，尤指常客）|ˈpeɪ.trən|ˈpeɪ.trən
peasant|n.|农民（通常指旧时或贫穷国家的小农）；没教养的人（非正式，贬义）|ˈpez.ənt|ˈpez.ənt
peer|vi./n.|vi. 仔细看；费力地看；n. 同龄人；同等地位或能力的人；英国贵族|pɪəʳ|pɪr
perceive|vt.|认为；把…看作；察觉；感知|pəˈsiːv|pɚˈsiːv
perception|n.|看法；认识；感知；洞察力|pəˈsepʃn|pərˈsepʃn`;
const readings={
  "genre": [
    {
      "label": "n./adj. 第一读音",
      "uk": "ˈʒɑ̃ː.rə",
      "us": "ˈʒɑːn.rə"
    },
    {
      "label": "n./adj. 英音变体",
      "uk": "ˈʒɒn.rə",
      "us": "ˈʒɑːn.rə"
    }
  ],
  "glacier": [
    {
      "label": "n. 第一读音",
      "uk": "ˈɡlæs.i.əʳ",
      "us": "ˈɡleɪ.ʃɚ"
    },
    {
      "label": "n. 美音变体",
      "uk": "ˈɡlæs.i.əʳ",
      "us": "ˈɡleɪ.si.ɚ"
    }
  ],
  "hinder": [
    {
      "label": "vt.",
      "uk": "ˈhɪn.dəʳ",
      "us": "ˈhɪn.dɚ"
    },
    {
      "label": "adj. 后面的",
      "uk": "ˈhaɪndə",
      "us": "ˈhaɪndər"
    }
  ],
  "instinct": [
    {
      "label": "n.",
      "uk": "ˈɪn.stɪŋkt",
      "us": "ˈɪn.stɪŋkt"
    },
    {
      "label": "adj. 充满…的（罕用）",
      "uk": "ɪnˈstɪŋkt",
      "us": "ɪnˈstɪŋkt"
    }
  ],
  "medieval": [
    {
      "label": "adj. 第一读音",
      "uk": "ˌmed.iˈiː.vəl",
      "us": "med.ˈiː.vəl"
    },
    {
      "label": "adj. 美音变体",
      "uk": "ˌmed.iˈiː.vəl",
      "us": "mɪd.ˈiː.vəl"
    }
  ],
  "ornament": [
    {
      "label": "n.",
      "uk": "ˈɔː.nə.mənt",
      "us": "ˈɔːr.nə.mənt"
    },
    {
      "label": "vt.",
      "uk": "ˈɔː.nə.ment",
      "us": "ˈɔːr.nə.ment"
    }
  ],
  "migrate": [
    {
      "label": "v. 第一读音",
      "uk": "maɪˈɡreɪt",
      "us": "ˈmaɪ.ɡreɪt"
    },
    {
      "label": "v. 美音变体",
      "uk": "maɪˈɡreɪt",
      "us": "maɪˈɡreɪt"
    }
  ]
};
const notes={
  "hinder": "动词 /ˈhɪn-/ 与形容词 /ˈhaɪn-/ 分读；形容词音标照录 Collins，动词照录 Cambridge。",
  "instinct": "常用名词与罕用后置形容词分读；形容词依据 Collins，并注明语域。",
  "perception": "Cambridge 的美音页只显示缩写，英美音改按 Oxford 的完整 IPA 照录。",
  "inevitable": "照录 Cambridge 发音页给出的英美音，包括美音中的次重音符号。"
};
const senses={
  "fossil": [
    [
      "n. 化石",
      "The fossil preserves the outline of a leaf."
    ],
    [
      "n. 守旧的老人（幽默用法）",
      "He jokingly calls himself an old fossil."
    ]
  ],
  "fracture": [
    [
      "n. 骨折",
      "The scan revealed a small fracture."
    ],
    [
      "vi. 分裂",
      "The coalition may fracture over the budget."
    ]
  ],
  "framework": [
    [
      "n. 构架",
      "The steel framework supports the roof."
    ],
    [
      "n. 体系框架",
      "The report proposes a framework for future research."
    ]
  ],
  "friction": [
    [
      "n. 摩擦力",
      "Friction slows the moving block."
    ],
    [
      "n. 不和",
      "The new policy caused friction between departments."
    ]
  ],
  "frustrate": [
    [
      "vt. 使沮丧",
      "Repeated delays frustrate the passengers."
    ],
    [
      "vt. 挫败",
      "The defenders managed to frustrate every attack."
    ]
  ],
  "fundamental": [
    [
      "adj. 根本的",
      "Trust is fundamental to their relationship."
    ],
    [
      "n. 基本原则（复数）",
      "The course covers the fundamentals of programming."
    ],
    [
      "n. 基音",
      "The fundamental is lower than its overtones."
    ]
  ],
  "gravity": [
    [
      "n. 重力",
      "Gravity pulls the object toward the ground."
    ],
    [
      "n. 严重性",
      "She understood the gravity of the mistake."
    ]
  ],
  "hence": [
    [
      "adv. 因此",
      "The road is flooded, hence the delay."
    ],
    [
      "adv. 从现在起",
      "The project should finish three months hence."
    ]
  ],
  "hinder": [
    [
      "vt. 妨碍",
      "Heavy snow can hinder rescue work."
    ],
    [
      "adj. 后面的",
      "The animal's hinder legs are unusually strong."
    ]
  ],
  "illustrate": [
    [
      "vt. 画插图",
      "She will illustrate a book for young readers."
    ],
    [
      "vt. 说明",
      "These examples illustrate the difference."
    ]
  ],
  "implicit": [
    [
      "adj. 未明说的",
      "The warning contained an implicit threat."
    ],
    [
      "adj. 毫无保留的",
      "They have implicit trust in her judgment."
    ]
  ],
  "improvise": [
    [
      "vi. 即兴演奏",
      "The musicians began to improvise."
    ],
    [
      "vt. 临时凑成",
      "We can improvise a shelter from these sheets."
    ]
  ],
  "inflation": [
    [
      "n. 通货膨胀",
      "Inflation reduced the value of their savings."
    ],
    [
      "n. 充气",
      "Check the balloon during inflation."
    ],
    [
      "n. 夸大",
      "The review detected inflation of the reported figures."
    ]
  ],
  "inhibit": [
    [
      "vt. 使拘束",
      "Fear of criticism can inhibit young writers."
    ],
    [
      "vt. 抑制",
      "Low temperatures inhibit bacterial growth."
    ]
  ],
  "instinct": [
    [
      "n. 本能",
      "The bird builds its nest by instinct."
    ],
    [
      "adj. 充满…的（罕用）",
      "The poem is instinct with hope."
    ]
  ],
  "labor": [
    [
      "n. 劳动",
      "The harvest requires considerable manual labor."
    ],
    [
      "n. 分娩",
      "She went into labor that evening."
    ],
    [
      "vi. 费力工作",
      "The volunteers labor to restore the damaged building."
    ]
  ],
  "layer": [
    [
      "n. 层",
      "A layer of dust covered the shelf."
    ],
    [
      "vt. 分层铺放",
      "Layer the vegetables in a baking dish."
    ]
  ],
  "literacy": [
    [
      "n. 读写能力",
      "The programme improves adult literacy."
    ],
    [
      "n. 领域素养",
      "Financial literacy helps people compare borrowing costs."
    ]
  ],
  "magnitude": [
    [
      "n. 巨大；重要性",
      "We underestimated the magnitude of the task."
    ],
    [
      "n. 震级",
      "The earthquake had a magnitude of six."
    ],
    [
      "n. 星等",
      "The star has an apparent magnitude of two."
    ]
  ],
  "maintain": [
    [
      "vt. 维持",
      "The workers maintain a steady pace."
    ],
    [
      "vt. 维修保养",
      "It is expensive to maintain the old bridge."
    ],
    [
      "vt. 坚称",
      "The witnesses maintain that the door was locked."
    ],
    [
      "vt. 供养",
      "He works two jobs to maintain his family."
    ]
  ],
  "manuscript": [
    [
      "n. 原稿",
      "The author sent her manuscript to the editor."
    ],
    [
      "n. 古代手抄本",
      "The library displays a medieval manuscript."
    ]
  ],
  "meander": [
    [
      "vi. 蜿蜒",
      "The river begins to meander across the plain."
    ],
    [
      "vi. 漫步",
      "We can meander through the market."
    ],
    [
      "n. 河曲",
      "A broad meander surrounds the village."
    ]
  ],
  "mechanism": [
    [
      "n. 机械装置",
      "The clock's mechanism needs repair."
    ],
    [
      "n. 机制",
      "We need a mechanism for resolving complaints."
    ]
  ],
  "medium": [
    [
      "adj. 中等的",
      "Choose a medium size."
    ],
    [
      "n. 媒介",
      "Radio remains an important medium of communication."
    ],
    [
      "n. 培养基",
      "The bacteria grow in a liquid medium."
    ],
    [
      "n. 灵媒",
      "The medium claimed to communicate with the dead."
    ]
  ],
  "migrate": [
    [
      "vi. 迁徙",
      "These birds migrate south in winter."
    ],
    [
      "vt. 迁移数据",
      "The team will migrate the records to a new database."
    ]
  ],
  "mimic": [
    [
      "vt. 模仿",
      "Parrots can mimic human speech."
    ],
    [
      "vt. 具有相似作用",
      "The material can mimic natural cartilage."
    ],
    [
      "n. 善于模仿的人",
      "She is a gifted mimic."
    ]
  ],
  "modify": [
    [
      "vt. 修改",
      "We need to modify the design."
    ],
    [
      "vt. 修饰（语法）",
      "Adjectives often modify nouns."
    ]
  ],
  "momentum": [
    [
      "n. 动量",
      "The moving cart has momentum."
    ],
    [
      "n. 势头",
      "The campaign is gaining momentum."
    ]
  ],
  "motif": [
    [
      "n. 图案",
      "The fabric has a leaf motif."
    ],
    [
      "n. 反复出现的主题",
      "Exile is a recurring motif in the novel."
    ]
  ],
  "motivation": [
    [
      "n. 积极性",
      "The pupils showed strong motivation to learn."
    ],
    [
      "n. 动机",
      "What was the motivation behind the decision?"
    ]
  ],
  "nurture": [
    [
      "vt. 培育",
      "Good teachers nurture curiosity."
    ],
    [
      "vt. 长期怀有",
      "She continues to nurture a dream of travelling."
    ],
    [
      "n. 后天养育",
      "The study examines the influence of nurture."
    ]
  ],
  "orbit": [
    [
      "n. 天体运行轨道",
      "The satellite entered a stable orbit."
    ],
    [
      "n. 眼眶",
      "The scan showed damage to the left orbit."
    ],
    [
      "vt. 绕轨道运行",
      "Several moons orbit the planet."
    ]
  ],
  "origin": [
    [
      "n. 来源",
      "The origin of the custom is uncertain."
    ],
    [
      "n. 出身",
      "The survey asked about each participant's country of origin."
    ],
    [
      "n. 原点",
      "The two axes meet at the origin."
    ]
  ],
  "ornament": [
    [
      "n. 装饰品",
      "A glass ornament stood on the shelf."
    ],
    [
      "vt. 装饰",
      "Small carvings ornament the wooden panels."
    ],
    [
      "n. 装饰音",
      "The player added an ornament to the melody."
    ]
  ],
  "particle": [
    [
      "n. 微粒",
      "A particle of dust floated in the beam."
    ],
    [
      "n. 小品词",
      "In this phrasal verb, up is a particle."
    ]
  ],
  "patron": [
    [
      "n. 赞助人",
      "She became a patron of the local orchestra."
    ],
    [
      "n. 顾客",
      "He is a regular patron of the cafe."
    ]
  ],
  "peer": [
    [
      "n. 同辈",
      "Each student receives feedback from a peer."
    ],
    [
      "n. 英国贵族",
      "The peer took his seat in the upper house."
    ],
    [
      "vi. 仔细看",
      "We had to peer through the mist."
    ]
  ],
  "perceive": [
    [
      "vt. 认为",
      "Customers perceive the new service as reliable."
    ],
    [
      "vt. 察觉",
      "She could perceive a faint smell of smoke."
    ]
  ],
  "perception": [
    [
      "n. 看法",
      "The campaign changed public perception of the product."
    ],
    [
      "n. 感知",
      "The experiment tested visual perception."
    ],
    [
      "n. 洞察力",
      "Her assessment showed remarkable perception."
    ]
  ]
};
const phPages=new Set("origin ornament medieval inevitable".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-17",batch:"015",file:"js/lexicon-review-015.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性、英美音和主要变体；注明专业、地区或语域限制，不穷尽历史及专业义项。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('perception').pronunciationSource='https://www.oxfordlearnersdictionaries.com/definition/english/perception';
for(const w of ['hinder','instinct']) get(w).sources=[get(w).source,'https://www.collinsdictionary.com/dictionary/english/'+w];
get('maintain').sources=[get('maintain').source,'https://www.oxfordlearnersdictionaries.com/definition/english/maintain'];
get('fundamental').sources=[get('fundamental').source,'https://dictionary.cambridge.org/dictionary/english/fundamentals'];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"015",checkedOn:"2026-11-17",words:records.map(r=>r.w),deferred:[{w:"ruins",reason:"已找到 ruin 的释义与原形音标，尚未取得 ruins 自身完整英美 IPA，保留待核对。",source:"https://dictionary.cambridge.org/dictionary/english/ruin"}]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings,...(["hinder","instinct"].includes(r.w)?{sources:[r.pronunciationSource,"https://www.collinsdictionary.com/dictionary/english/"+r.w]}:{})}]);
}
})();


