/* Batch 014: core vocabulary, checked 2026-11-17. Glosses summarized; examples original. */
(function(){
const raw=`
predominantly|adv.|主要地；大多|prɪˈdɒm.ɪ.nənt.li|prɪˈdɑː.mə.nənt.li
ambiguous|adj.|有歧义的；含糊不清的|æmˈbɪɡ.ju.əs|æmˈbɪɡ.ju.əs
chronological|adj.|按时间顺序的|ˌkrɒn.əˈlɒdʒ.ɪ.kəl|ˌkrɑː.nəˈlɑː.dʒɪ.kəl
civilization|n.|文明；特定社会的文明或文化；文明化过程；有舒适生活条件的地方（常为幽默用法）；英式通常作 civilisation|ˌsɪv.əl.aɪˈzeɪ.ʃən|ˌsɪv.əl.əˈzeɪ.ʃən
classify|vt.|分类；归类；把信息列为机密|ˈklæs.ɪ.faɪ|ˈklæs.ə.faɪ
cognitive|adj.|认知的；与思考或意识活动有关的|ˈkɒɡ.nə.tɪv|ˈkɑːɡ.nə.t̬ɪv
coincide|vi.|同时或近乎同时发生；一致；相符|ˌkəʊ.ɪnˈsaɪd|ˌkoʊ.ɪnˈsaɪd
collide|vi.|碰撞；相撞|kəˈlaɪd|kəˈlaɪd
colony|n.|殖民地；殖民地居民；聚居群体；（动植物的）群体；菌落；住宅区（印度英语）|ˈkɒl.ə.ni|ˈkɑː.lə.ni
comet|n.|彗星|ˈkɒm.ɪt|ˈkɑː.mɪt
commerce|n.|商业；贸易|ˈkɒm.ɜːs|ˈkɑː.mɝːs
commission|n./vt.|n. 委员会；佣金；委托任务；犯罪行为（正式）；军官任命；vt. 委托创作或工作；任命为军官|kəˈmɪʃ.ən|kəˈmɪʃ.ən
commodity|n.|商品；大宗商品；有用或有价值的事物、素质|kəˈmɒd.ə.ti|kəˈmɑː.də.t̬i
compensate|v.|赔偿；支付报酬；弥补（常接 for）|ˈkɒm.pən.seɪt|ˈkɑːm.pən.seɪt
component|n.|组成部分；零部件；（向量的）分量|kəmˈpəʊ.nənt|kəmˈpoʊ.nənt
composition|n.|组成；构成；作曲；乐曲；构图；作文（旧时）；复合材料；债务和解协议（法律）|ˌkɒm.pəˈzɪʃ.ən|ˌkɑːm.pəˈzɪʃ.ən
comprehensive|adj./n.|adj. 全面的；综合性的；（保险）涵盖多数风险的；综合学校的（英）；n. 综合中学（英）|ˌkɒm.prɪˈhen.sɪv|ˌkɑːm.prəˈhen.sɪv
compress|vt./n.|vt. 压缩；精简；压缩电脑文件；n. 敷布|kəmˈpres|kəmˈpres
comprise|v.|由…组成；包括；构成（正式，通常不用进行时）|kəmˈpraɪz|kəmˈpraɪz
condense|v.|浓缩；精简；（使气体）凝结|kənˈdens|kənˈdens
conformity|n.|遵从；随俗；符合设计或要求|kənˈfɔː.mə.ti|kənˈfɔːr.mə.t̬i
conquest|n.|征服；攻克；被征服的恋爱或性伴侣（幽默用法）|ˈkɒŋ.kwest|ˈkɑːŋ.kwest
conscious|adj.|意识到的；清醒的；有意的；重视或关注…的（常用于复合词）|ˈkɒn.ʃəs|ˈkɑːn.ʃəs
consensus|n.|共识；普遍一致的意见或决定|kənˈsen.səs|kənˈsen.səs
consequence|n.|结果；后果；重要性|ˈkɒn.sɪ.kwəns|ˈkɑːn.sə.kwəns
considerable|adj.|相当大的；显著的；重要的|kənˈsɪd.ər.ə.bəl|kənˈsɪd.ɚ.ə.bəl
constitute|v.|构成；被视为；依法设立或组成|ˈkɒn.stɪ.tʃuːt|ˈkɑːn.stə.tuːt
constraint|n.|限制；约束；拘束不自然（正式）；强制（under constraint）|kənˈstreɪnt|kənˈstreɪnt
consumption|n.|消耗；消费；食用；用量；供某群体阅读或了解；肺结核（旧称）|kənˈsʌmp.ʃən|kənˈsʌmp.ʃən
contour|n./v.|n. 轮廓；外形；等高线；v. 塑造表面形状；沿轮廓行进或贴合；修容；绘制等高线|ˈkɒn.tɔːʳ|ˈkɑːn.tʊr
contribute|v.|捐助；贡献；投稿；促成或导致（contribute to）|kənˈtrɪb.juːt|kənˈtrɪb.juːt
controversy|n.|争议；争论|ˈkɒn.trə.vɜː.si|ˈkɑːn.trə.vɝː.si
conventional|adj.|传统的；惯常的；常规的；非核的（武器或战争）|kənˈven.ʃən.əl|kənˈven.ʃən.əl
cooperate|vi.|合作；协作；配合；英式也作 co-operate|kəʊˈɒp.ər.eɪt|koʊˈɑː.pə.reɪt
cosmic|adj.|宇宙的；极大的（非正式）|ˈkɒz.mɪk|ˈkɑːz.mɪk
criterion|n.|标准；准则；复数 criteria|kraɪˈtɪə.ri.ən|kraɪˈtɪr.i.ən
crucial|adj.|至关重要的；关键的|ˈkruː.ʃəl|ˈkruː.ʃəl
crude|adj./n.|adj. 粗制的；简陋的；粗略的；粗俗的；未加工的；n. 原油|kruːd|kruːd
crust|n.|面包外皮；披萨饼底或边；馅饼酥皮；食物脆皮；地壳；干结或冻结的硬层|krʌst|krʌst
cue|n./vt.|n. 提示；信号；球杆；vt. 给…提示或信号|kjuː|kjuː
currency|n.|货币；通货；流行；普遍接受（正式）|ˈkʌr.ən.si|ˈkɝː.ən.si
curriculum|n.|课程体系；课程内容；复数 curricula 或 curriculums|kəˈrɪk.jə.ləm|kəˈrɪk.jə.ləm
decline|v./n.|v. 下降；衰退；婉拒（正式）；向下倾斜；（使词语）变格或列出变格形式；n. 下降；衰退；衰弱|dɪˈklaɪn|dɪˈklaɪn
decompose|v.|（使）腐烂；（使）分解|ˌdiː.kəmˈpəʊz|ˌdiː.kəmˈpoʊz
demographic|adj./n.|adj. 人口统计学的；人口特征的；n. 具有相似人口特征的群体|ˌdem.əˈɡræf.ɪk|ˌdem.əˈɡræf.ɪk
dense|adj.|稠密的；浓密的；密度大的；愚笨的（非正式）|dens|dens
density|n.|密度；密集程度；稠密度|ˈden.sɪ.ti|ˈden.sə.t̬i
depict|vt.|描绘；描述；刻画|dɪˈpɪkt|dɪˈpɪkt
deposit|vt./n.|vt. 放置；沉积；存放；存款；支付订金或押金；n. 沉积物；矿藏；存款；订金；押金|dɪˈpɒz.ɪt|dɪˈpɑː.zɪt
deprive|vt.|剥夺；使不能拥有或享用（常用 deprive someone of something）|dɪˈpraɪv|dɪˈpraɪv
derive|v.|获得（derive something from）；源自（derive from）；追溯词语来源|dɪˈraɪv|dɪˈraɪv
diameter|n.|直径；直径长度|daɪˈæm.ɪ.təʳ|daɪˈæm.ə.t̬ɚ
dilemma|n.|两难处境；难以抉择的局面|daɪˈlem.ə|dɪˈlem.ə
diminish|v.|（使）减少；降低重要性或价值；贬低|dɪˈmɪn.ɪʃ|dɪˈmɪn.ɪʃ
disperse|v.|（使）分散；散开；散播|dɪˈspɜːs|dɪˈspɝːs
distinct|adj.|明显的；确实存在的；截然不同的|dɪˈstɪŋkt|dɪˈstɪŋkt
distinguish|v.|区别；辨别；使具有特色；使出众（distinguish oneself）|dɪˈstɪŋ.ɡwɪʃ|dɪˈstɪŋ.ɡwɪʃ
distribute|vt.|分发；分配；散布；供应销售|dɪˈstrɪb.juːt|dɪˈstrɪb.juːt
diverse|adj.|多种多样的；彼此不同的|daɪˈvɜːs|dɪˈvɝːs
diversity|n.|多样性；多样化；多样的人或事物|daɪˈvɜː.sə.ti|dɪˈvɝː.sə.t̬i
document|n./vt.|n. 文件；证件；电脑文档；vt. 记录；用资料证明|ˈdɒk.jə.mənt|ˈdɑː.kjə.mənt
domesticate|vt.|驯养动物；驯化植物|dəˈmes.tɪ.keɪt|dəˈmes.tɪ.keɪt
dominate|v.|支配；控制；占优势；在…中最显著或最重要|ˈdɒm.ɪ.neɪt|ˈdɑː.mə.neɪt
dormant|adj.|休眠的；暂不活动但仍可能恢复的|ˈdɔː.mənt|ˈdɔːr.mənt
drought|n.|干旱；旱灾|draʊt|draʊt
dynasty|n.|王朝；朝代；世代掌权的家族|ˈdɪn.ə.sti|ˈdaɪ.nə.sti
eclipse|n./vt.|n. 日食；月食；黯然失色或衰落（文学）；vt. 遮蔽形成食；使相形见绌|ɪˈklɪps|ɪˈklɪps
ecosystem|n.|生态系统；相互影响的复杂体系（尤指技术领域）|ˈiː.kəʊˌsɪs.təm|ˈiː.koʊˌsɪs.təm
elaborate|adj./vi.|adj. 精心制作的；复杂详尽的；vi. 详述；进一步说明（正式，常接 on）|iˈlæb.ər.ət|iˈlæb.ɚ.ət
emergence|n.|出现；兴起；露出；出苗；昆虫羽化或孵出；摆脱困难；涌现（科学）|ɪˈmɜː.dʒəns|ɪˈmɝː.dʒəns
emit|vt.|发出（光、声音、气味等）；排放（气体等）|ɪˈmɪt|ɪˈmɪt
empathy|n.|共情；同理心；设身处地理解他人感受的能力|ˈem.pə.θi|ˈem.pə.θi
emphasize|vt.|强调；使突出或明显；英式通常作 emphasise|ˈem.fə.saɪz|ˈem.fə.saɪz
empire|n.|帝国；庞大企业或组织|ˈem.paɪəʳ|ˈem.paɪr
enhance|vt.|提高；增强；改善|ɪnˈhɑːns|ɪnˈhæns
entrepreneur|n.|创业者；企业家|ˌɒn.trə.prəˈnɜːʳ|ˌɑːn.trə.prəˈnɝː
equator|n.|赤道|ɪˈkweɪ.təʳ|ɪˈkweɪ.t̬ɚ
era|n.|时代；时期；代（地质年代单位）|ˈɪə.rə|ˈer.ə
erosion|n.|侵蚀；冲蚀；逐渐削弱或丧失|ɪˈrəʊ.ʒən|ɪˈroʊ.ʒən
eruption|n.|火山喷发；突然爆发；发疹；牙齿萌出|ɪˈrʌp.ʃən|ɪˈrʌp.ʃən
essential|adj./n.|adj. 必不可少的；本质的；n. 必需品；要点（通常用复数）|ɪˈsen.ʃəl|ɪˈsen.ʃəl
estimate|vt./n.|vt. 估计；估算；n. 估计；估价；报价单|ˈes.tɪ.meɪt|ˈes.tə.meɪt
evidence|n./vt.|n. 证据；根据；vt. 证明；显示|ˈev.ɪ.dəns|ˈev.ə.dəns
evoke|vt.|唤起回忆；引起情感|ɪˈvəʊk|ɪˈvoʊk
evolve|v.|（使）逐渐发展；进化|ɪˈvɒlv|ɪˈvɑːlv
excavate|v.|挖掘；发掘遗物或遗址；开凿|ˈek.skə.veɪt|ˈek.skə.veɪt
explicit|adj.|清楚明确的；详尽直白的；露骨描述性或暴力的|ɪkˈsplɪs.ɪt|ɪkˈsplɪs.ɪt
exploit|vt./n.|vt. 开发；利用；剥削；不公平地利用；n. 英勇、不寻常或有趣的事迹（通常用复数）|ɪkˈsplɔɪt|ɪkˈsplɔɪt
extensive|adj.|广阔的；广泛的；大量的；详尽的|ɪkˈsten.sɪv|ɪkˈsten.sɪv
extinct|adj.|灭绝的；不复存在的；（火山）不再活动的|ɪkˈstɪŋkt|ɪkˈstɪŋkt
facade|n.|建筑物正面；虚假的外表；表象；亦作 façade|fəˈsɑːd|fəˈsɑːd
facilitate|vt.|促进；使容易；协助讨论或流程顺利进行（正式）|fəˈsɪl.ɪ.teɪt|fəˈsɪl.ə.teɪt
factor|n./vt.|n. 因素；因数；倍数；债款代收商；经销代理；vt. 转让应收账款或债权|ˈfæk.təʳ|ˈfæk.tɚ
feasible|adj.|可行的；能实现的|ˈfiː.zə.bəl|ˈfiː.zə.bəl
feedback|n.|反馈意见；系统反馈；声反馈啸叫|ˈfiːd.bæk|ˈfiːd.bæk
fertile|adj.|肥沃的；有生殖能力的；（头脑、想象力）富于创造力的|ˈfɜː.taɪl|ˈfɝː.t̬əl
flexible|adj.|灵活的；可变通的；易弯曲的；柔韧的|ˈflek.sə.bəl|ˈflek.sə.bəl
flourish|v./n.|vi. 茁壮成长；繁荣；vt. 挥动以引人注意；n. 花体装饰笔画；引人注目的大动作|ˈflʌr.ɪʃ|ˈflɝː.ɪʃ
fluctuate|vi.|波动；起伏不定|ˈflʌk.tʃu.eɪt|ˈflʌk.tʃu.eɪt
forage|v./n.|v. 觅食；搜寻；采集野生食物；n. 饲草；饲料|ˈfɒr.ɪdʒ|ˈfɔːr.ɪdʒ`;
const readings={
  "compress": [
    {
      "label": "vt.",
      "uk": "kəmˈpres",
      "us": "kəmˈpres"
    },
    {
      "label": "n. 敷布",
      "uk": "ˈkɒm.pres",
      "us": "ˈkɑːm.pres"
    }
  ],
  "document": [
    {
      "label": "n.",
      "uk": "ˈdɒk.jə.mənt",
      "us": "ˈdɑː.kjə.mənt"
    },
    {
      "label": "vt.",
      "uk": "ˈdɒk.jə.ment",
      "us": "ˈdɑː.kjə.ment"
    }
  ],
  "elaborate": [
    {
      "label": "adj.",
      "uk": "iˈlæb.ər.ət",
      "us": "iˈlæb.ɚ.ət"
    },
    {
      "label": "vi.",
      "uk": "iˈlæb.ə.reɪt",
      "us": "iˈlæb.ə.reɪt"
    }
  ],
  "estimate": [
    {
      "label": "vt.",
      "uk": "ˈes.tɪ.meɪt",
      "us": "ˈes.tə.meɪt"
    },
    {
      "label": "n.",
      "uk": "ˈes.tɪ.mət",
      "us": "ˈes.tə.mət"
    }
  ],
  "exploit": [
    {
      "label": "vt.",
      "uk": "ɪkˈsplɔɪt",
      "us": "ɪkˈsplɔɪt"
    },
    {
      "label": "n.",
      "uk": "ˈek.splɔɪt",
      "us": "ˈek.splɔɪt"
    }
  ],
  "contribute": [
    {
      "label": "v. 第一读音",
      "uk": "kənˈtrɪb.juːt",
      "us": "kənˈtrɪb.juːt"
    },
    {
      "label": "v. 英音变体",
      "uk": "ˈkɒn.trɪ.bjuːt",
      "us": "kənˈtrɪb.juːt"
    }
  ],
  "controversy": [
    {
      "label": "n. 第一读音",
      "uk": "ˈkɒn.trə.vɜː.si",
      "us": "ˈkɑːn.trə.vɝː.si"
    },
    {
      "label": "n. 英音变体",
      "uk": "kənˈtrɒv.ə.si",
      "us": "ˈkɑːn.trə.vɝː.si"
    }
  ],
  "distribute": [
    {
      "label": "vt. 第一读音",
      "uk": "dɪˈstrɪb.juːt",
      "us": "dɪˈstrɪb.juːt"
    },
    {
      "label": "vt. 英音变体",
      "uk": "ˈdɪs.trɪ.bjuːt",
      "us": "dɪˈstrɪb.juːt"
    }
  ],
  "dilemma": [
    {
      "label": "n. 第一读音",
      "uk": "daɪˈlem.ə",
      "us": "dɪˈlem.ə"
    },
    {
      "label": "n. 另一读音",
      "uk": "dɪˈlem.ə",
      "us": "daɪˈlem.ə"
    }
  ],
  "era": [
    {
      "label": "n. 第一读音",
      "uk": "ˈɪə.rə",
      "us": "ˈer.ə"
    },
    {
      "label": "n. 美音变体",
      "uk": "ˈɪə.rə",
      "us": "ˈɪr.ə"
    }
  ],
  "ecosystem": [
    {
      "label": "n. 第一读音",
      "uk": "ˈiː.kəʊˌsɪs.təm",
      "us": "ˈiː.koʊˌsɪs.təm"
    },
    {
      "label": "n. 美音变体",
      "uk": "ˈiː.kəʊˌsɪs.təm",
      "us": "ˈe.koʊˌsɪs.təm"
    }
  ]
};
const notes={};
const senses={
  "classify": [
    [
      "vt. 分类",
      "Researchers classify the samples by size."
    ],
    [
      "vt. 列为机密",
      "The agency may classify sensitive records."
    ]
  ],
  "colony": [
    [
      "n. 殖民地",
      "The colony gained independence in the twentieth century."
    ],
    [
      "n. 动物群体",
      "A colony of bats occupies the cave."
    ],
    [
      "n. 聚居群体",
      "The village became an artists' colony."
    ]
  ],
  "commission": [
    [
      "n. 委员会",
      "An independent commission examined the complaint."
    ],
    [
      "n. 佣金",
      "She earns a commission on each sale."
    ],
    [
      "n. 委托任务",
      "The painter accepted a commission for a family portrait."
    ],
    [
      "vt. 委托",
      "The museum will commission a new sculpture."
    ]
  ],
  "compensate": [
    [
      "vt. 赔偿",
      "The company agreed to compensate the residents."
    ],
    [
      "vi. 弥补",
      "Better lighting can compensate for the small windows."
    ]
  ],
  "composition": [
    [
      "n. 组成",
      "The chemical composition of the sample remains unknown."
    ],
    [
      "n. 乐曲",
      "The orchestra performed a new composition."
    ],
    [
      "n. 构图",
      "The photograph has a balanced composition."
    ],
    [
      "n. 作文",
      "Our teacher asked for a short composition."
    ]
  ],
  "compress": [
    [
      "vt. 压缩",
      "This tool can compress large files."
    ],
    [
      "n. 敷布",
      "She placed a cold compress on her forehead."
    ]
  ],
  "condense": [
    [
      "vt. 精简",
      "Please condense the report into one page."
    ],
    [
      "vi. 凝结",
      "Water vapour can condense on a cold window."
    ]
  ],
  "conscious": [
    [
      "adj. 清醒的",
      "The injured driver remained conscious."
    ],
    [
      "adj. 意识到的",
      "We are conscious of the risks."
    ],
    [
      "adj. 有意的",
      "It was a conscious decision to change direction."
    ]
  ],
  "consequence": [
    [
      "n. 后果",
      "A power failure was an unexpected consequence of the storm."
    ],
    [
      "n. 重要性",
      "The spelling error is of little consequence."
    ]
  ],
  "consumption": [
    [
      "n. 消耗",
      "The new lamps reduce electricity consumption."
    ],
    [
      "n. 食用",
      "The water is safe for human consumption."
    ],
    [
      "n. 供某群体了解",
      "The summary was intended for public consumption."
    ]
  ],
  "contour": [
    [
      "n. 轮廓",
      "The contour of the coastline is clearly visible."
    ],
    [
      "n. 等高线",
      "Each contour on the map represents a different elevation."
    ],
    [
      "vt. 塑造地形",
      "Workers will contour the ground before planting."
    ]
  ],
  "contribute": [
    [
      "v. 捐助",
      "Many residents contribute money to the shelter."
    ],
    [
      "v. 投稿",
      "She hopes to contribute an article to the journal."
    ],
    [
      "vi. 促成",
      "Several factors contribute to the decline."
    ]
  ],
  "crude": [
    [
      "adj. 简陋的",
      "They built a crude shelter from branches."
    ],
    [
      "adj. 未加工的",
      "The refinery processes crude oil."
    ],
    [
      "adj. 粗俗的",
      "His crude remarks offended the guests."
    ],
    [
      "n. 原油",
      "The port handles large shipments of crude."
    ]
  ],
  "cue": [
    [
      "n. 提示",
      "The raised hand was our cue to stop."
    ],
    [
      "n. 球杆",
      "He selected a cue before the game."
    ],
    [
      "vt. 给提示",
      "The director will cue the musicians."
    ]
  ],
  "currency": [
    [
      "n. 货币",
      "Visitors can exchange foreign currency here."
    ],
    [
      "n. 普遍接受",
      "The idea gained currency among researchers."
    ]
  ],
  "decline": [
    [
      "vi. 下降",
      "Sales may decline during the winter."
    ],
    [
      "vt. 婉拒",
      "She decided to decline the invitation."
    ],
    [
      "n. 衰退",
      "The town experienced a long economic decline."
    ]
  ],
  "demographic": [
    [
      "adj. 人口统计的",
      "The survey tracks demographic changes."
    ],
    [
      "n. 特定人口群体",
      "The campaign targets a younger demographic."
    ]
  ],
  "dense": [
    [
      "adj. 浓密的",
      "A dense forest covers the hillside."
    ],
    [
      "adj. 密度大的",
      "The sample contains a dense metal."
    ],
    [
      "adj. 愚笨的（非正式）",
      "He felt dense when he missed the obvious joke."
    ]
  ],
  "deposit": [
    [
      "n. 押金",
      "The landlord returned the deposit."
    ],
    [
      "n. 矿藏",
      "The survey identified a large copper deposit."
    ],
    [
      "vt. 存款",
      "You can deposit cash at the machine."
    ],
    [
      "vt. 沉积",
      "Rivers deposit sediment near their mouths."
    ]
  ],
  "document": [
    [
      "n. 文件",
      "Please sign the document."
    ],
    [
      "vt. 记录",
      "Researchers document changes in the coastline."
    ]
  ],
  "eclipse": [
    [
      "n. 日食",
      "We watched the solar eclipse through protective filters."
    ],
    [
      "vt. 使相形见绌",
      "Her latest achievement may eclipse her earlier successes."
    ]
  ],
  "elaborate": [
    [
      "adj. 复杂精细的",
      "The ceiling has an elaborate pattern."
    ],
    [
      "vi. 详述",
      "Could you elaborate on your proposal?"
    ]
  ],
  "emergence": [
    [
      "n. 兴起",
      "The emergence of new technology transformed the industry."
    ],
    [
      "n. 出苗",
      "Cold weather can delay seedling emergence."
    ]
  ],
  "empire": [
    [
      "n. 帝国",
      "The empire controlled a large territory."
    ],
    [
      "n. 庞大企业",
      "She built a publishing empire."
    ]
  ],
  "eruption": [
    [
      "n. 火山喷发",
      "The eruption covered the town in ash."
    ],
    [
      "n. 突然爆发",
      "His announcement caused an eruption of applause."
    ]
  ],
  "estimate": [
    [
      "vt. 估计",
      "We estimate that repairs will take two weeks."
    ],
    [
      "n. 估价",
      "The builder provided a written estimate."
    ]
  ],
  "evidence": [
    [
      "n. 证据",
      "The evidence supports the new theory."
    ],
    [
      "vt. 证明",
      "The survey results evidence a change in public attitudes."
    ]
  ],
  "exploit": [
    [
      "vt. 开发；利用",
      "The company plans to exploit the region's oil reserves."
    ],
    [
      "vt. 剥削",
      "Laws prevent employers from trying to exploit workers."
    ],
    [
      "n. 不寻常或英勇的事迹",
      "The memoir recounts her exploits during the expedition."
    ]
  ],
  "facade": [
    [
      "n. 建筑物正面",
      "Workers restored the stone facade."
    ],
    [
      "n. 虚假的外表",
      "His confidence was only a facade."
    ]
  ],
  "factor": [
    [
      "n. 因素",
      "Cost is an important factor in our decision."
    ],
    [
      "n. 因数",
      "Three is a factor of twelve."
    ]
  ],
  "feedback": [
    [
      "n. 反馈意见",
      "The team welcomed feedback from users."
    ],
    [
      "n. 声反馈啸叫",
      "The microphone produced a burst of feedback."
    ]
  ],
  "fertile": [
    [
      "adj. 肥沃的",
      "The river valley has fertile soil."
    ],
    [
      "adj. 富于创造力的",
      "The novelist has a fertile imagination."
    ],
    [
      "adj. 有生殖能力的",
      "The study compared fertile and infertile animals."
    ]
  ],
  "flexible": [
    [
      "adj. 易弯曲的",
      "The cable has a flexible outer cover."
    ],
    [
      "adj. 可变通的",
      "Our working hours are flexible."
    ]
  ],
  "flourish": [
    [
      "vi. 繁荣",
      "Small businesses can flourish in this district."
    ],
    [
      "vt. 挥动",
      "The actor began to flourish a bright red scarf."
    ],
    [
      "n. 装饰笔画",
      "Her signature ends with a flourish."
    ]
  ],
  "forage": [
    [
      "vi. 觅食",
      "Deer forage near the woodland edge."
    ],
    [
      "n. 饲草",
      "The farmer stores forage for winter."
    ]
  ]
};
const phPages=new Set("predominantly consequence document estimate elaborate exploit".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-17",batch:"014",file:"js/lexicon-review-014.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性、英美音和主要变体；注明专业、地区或语域限制，不穷尽历史及专业义项。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"014",checkedOn:"2026-11-17",words:records.map(r=>r.w),deferred:[{w:"ruins",reason:"已找到 ruin 的释义与原形音标，尚未取得 ruins 自身完整英美 IPA，保留待核对。",source:"https://dictionary.cambridge.org/dictionary/english/ruin"}]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();

