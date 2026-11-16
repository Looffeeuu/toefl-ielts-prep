/* Batch 013: dictionary checks dated 2026-11-16. Glosses are summaries; examples are original. */
(function(){
const raw=`
cashier|n./vt.|n. 收银员；出纳员；vt. 开除军籍（尤指剥夺荣誉）|kæʃˈɪəʳ|kæʃˈɪr
cassette|n.|盒式录音带；盒式录像带|kəˈset|kəˈset
cast|v./n.|v. 投；抛；选派角色；投票；铸造；投屏；投以目光或笑容；使产生怀疑；施魔法；蜕皮；n. 演员阵容；铸件；模型；石膏固定；投屏|kɑːst|kæst
cast-iron|adj./n.|adj. 铸铁的；确凿可靠的；坚强的；n. 铸铁（名词通常写作 cast iron）|ˌkɑːstˈaɪən|ˌkæstˈaɪrn
caste|n.|种姓；社会阶层；种姓制度|kɑːst|kæst
castigate|vt.|严厉批评；斥责（正式）|ˈkæs.tɪ.ɡeɪt|ˈkæs.tə.ɡeɪt
casting|n.|选角；试镜选拔；铸造；铸件；投票；投屏|ˈkɑː.stɪŋ|ˈkæs.tɪŋ
castle|n./vi.|n. 城堡；（国际象棋的）车（非正式）；vi. 王车易位|ˈkɑː.səl|ˈkæs.əl
casual|adj.|随意的；休闲的；漫不经心的；不固定的；临时的；偶然的|ˈkæʒ.ju.əl|ˈkæʒ.uː.əl
casualty|n.|伤亡者；受害者；受损事物；急诊室（英）|ˈkæʒ.ju.əl.ti|ˈkæʒ.uː.əl.ti
cataclysm|n.|大灾难；剧变（文学用语）|ˈkæt.ə.klɪ.zəm|ˈkæt̬.ə.klɪ.zəm
catalog|n./vt.|n. 目录；一连串坏事；vt. 编目；记录（美式拼写，英式 catalogue）|ˈkæt.əl.ɒɡ|ˈkæt̬.əl.ɑːɡ
catalogue|n./vt.|n. 目录；一连串坏事；vt. 编目；记录（英式拼写，美式 catalog）|ˈkæt.əl.ɒɡ|ˈkæt̬.əl.ɑːɡ
catalyst|n.|催化剂；促成变化的人或事|ˈkæt.əl.ɪst|ˈkæt̬.əl.ɪst
catalyze|vt.|催化；促成；推动（美式拼写，英式 catalyse）|ˈkæt.əl.aɪz|ˈkæt̬.əl.aɪz
catastrophe|n.|大灾难；糟糕的局面|kəˈtæs.trə.fi|kəˈtæs.trə.fi
catch|v./n.|v. 抓住；接住；捕获；当场发现；赶上；听清；看见；感染；卡住；n. 接球；捕获；暗藏的缺陷；搭扣|kætʃ|kætʃ
catching|adj.|传染性的（非正式，通常作表语）；另为 catch 的现在分词|ˈkætʃ.ɪŋ|ˈkætʃ.ɪŋ
categorical|adj.|明确断然的；不容置疑的；类别的；分类的（统计学）|ˌkæt.əˈɡɒr.ɪ.kəl|ˌkæt̬.əˈɡɔːr.ɪ.kəl
categorize|vt.|把…分类；归类（英式通常作 categorise）|ˈkæt.ə.ɡər.aɪz|ˈkæt̬.ə.ɡɚ.aɪz
category|n.|类别；种类|ˈkæt.ə.ɡri|ˈkæt̬.ə.ɡɔːr.i
cater|v.|提供餐饮服务；满足需求（cater for 或 cater to）；迎合不合理的欲望（cater to，常含贬义）|ˈkeɪ.təʳ|ˈkeɪ.t̬ɚ
catering|n.|餐饮供应；餐饮服务；餐饮业|ˈkeɪ.tər.ɪŋ|ˈkeɪ.t̬ɚ.ɪŋ
caterpillar|n.|毛毛虫（蝶、蛾的幼虫）|ˈkæt.ə.pɪl.əʳ|ˈkæt̬.ɚ.pɪl.ɚ
cathedral|n.|主教座堂；教区大教堂|kəˈθiː.drəl|kəˈθiː.drəl
catholic|adj./n.|adj. 广泛的；兼收并蓄的（正式，小写）；天主教的（大写 Catholic）；n. 天主教徒（大写 Catholic）|ˈkæθ.əl.ɪk|ˈkæθ.əl.ɪk
cattle|n.|牛；牛群（复数名词）|ˈkæt.əl|ˈkæt̬.əl
cause|n./vt.|n. 原因；理由；事业；理想；vt. 引起；导致|kɔːz|kɑːz
caustic|adj.|腐蚀性的；尖刻讽刺的|ˈkɔː.stɪk|ˈkɑː.stɪk
caution|n./vt.|n. 谨慎；警告；警方正式警告（英）；足球黄牌警告；vt. 告诫；给予警方正式警告（英）|ˈkɔː.ʃən|ˈkɑː.ʃən
cautious|adj.|谨慎的；小心的|ˈkɔː.ʃəs|ˈkɑː.ʃəs
cautiously|adv.|谨慎地；小心地|ˈkɔː.ʃəs.li|ˈkɑː.ʃəs.li
cave|n./vi.|n. 洞穴；vi. 屈服；认输（非正式，也用 cave in）|keɪv|keɪv
cavern|n.|大洞穴|ˈkæv.ən|ˈkæv.ɚn
cavity|n.|空洞；龋洞；体腔|ˈkæv.ə.ti|ˈkæv.ə.t̬i
CD|n.|激光唱片；光盘（compact disc 的缩写）|ˌsiːˈdiː|ˌsiːˈdiː
CD-ROM|n.|只读光盘（compact disc read-only memory 的缩写）|ˌsiː.diːˈrɒm|ˌsiː.diːˈrɑːm
cease|v./n.|v. 停止；终止（正式）；n. 停止（用于 without cease，意为不停地）|siːs|siːs
ceaseless|adj.|不停的；持续不断的（正式）|ˈsiːs.ləs|ˈsiːs.ləs
cedar|n.|雪松；雪松木|ˈsiː.dəʳ|ˈsiː.dɚ
ceiling|n.|天花板；上限|ˈsiː.lɪŋ|ˈsiː.lɪŋ
celebrate|v.|庆祝；赞颂（正式）；主持宗教仪式|ˈsel.ə.breɪt|ˈsel.ə.breɪt
celebrated|adj.|著名的；享誉的；另为 celebrate 的过去式和过去分词|ˈsel.ə.breɪ.tɪd|ˈsel.ə.breɪ.t̬ɪd
celebrity|n.|名人；名声；名气|səˈleb.rə.ti|səˈleb.rə.t̬i
celestial|adj.|天空的；天体的；天堂的（正式）|sɪˈles.ti.əl|sɪˈles.tʃəl
cell|n.|细胞；牢房；修道院小室；单体电池；手机（美，非正式）；蜂房等小格；秘密小组|sel|sel
cellar|n.|地下室；地窖；酒窖|ˈsel.əʳ|ˈsel.ɚ
cellist|n.|大提琴演奏者|ˈtʃel.ɪst|ˈtʃel.ɪst
cello|n.|大提琴|ˈtʃel.əʊ|ˈtʃel.oʊ
cellular|adj.|细胞的；由小单元组成的；蜂窝通信的|ˈsel.jə.ləʳ|ˈsel.jə.lɚ
cellulose|n.|纤维素|ˈsel.jə.ləʊs|ˈsel.jə.loʊs
celsius|n./adj.|摄氏温度；摄氏的（通常大写 Celsius）|ˈsel.si.əs|ˈsel.si.əs
cement|n./vt.|n. 水泥；胶合剂；牙科粘固剂；vt. 用水泥铺或粘接；巩固|sɪˈment|səˈment
cemetery|n.|公墓；墓地|ˈsem.ə.tri|ˈsem.ə.ter.i
censor|n./vt.|n. 审查员；内容过滤工具；vt. 审查；删改|ˈsen.səʳ|ˈsen.sɚ
censure|n./vt.|谴责；严厉批评（正式）|ˈsen.ʃəʳ|ˈsen.ʃɚ
census|n.|官方普查；人口普查|ˈsen.səs|ˈsen.səs
centenary|n.|百周年；百周年纪念（英式常用，美式常用 centennial）|senˈtiː.nər.i|ˈsen.ten.er.i
centennial|n.|百周年；百周年纪念（美式常用，英式常用 centenary）|senˈten.i.əl|senˈten.i.əl
center|n./v.|n. 中心；活动中心；政治中间派；中锋；v. 使居中；集中（美式拼写，英式 centre）|ˈsen.təʳ|ˈsen.t̬ɚ
centigrade|n./adj.|摄氏温度；摄氏的|ˈsen.tɪ.ɡreɪd|ˈsen.t̬ə.ɡreɪd
central|adj.|中心的；主要的；关键的；中央集中的|ˈsen.trəl|ˈsen.trəl
centre|n./v.|n. 中心；活动中心；政治中间派；中锋；v. 使居中；集中（英式拼写，美式 center）|ˈsen.təʳ|ˈsen.t̬ɚ
century|n.|世纪；一百年|ˈsen.tʃər.i|ˈsen.tʃər.i
ceramic|adj.|陶瓷的|səˈræm.ɪk|səˈræm.ɪk
ceramics|n.|陶艺；陶瓷制品|səˈræm.ɪks|səˈræm.ɪks
cereal|n.|谷物；谷类作物；早餐麦片|ˈsɪə.ri.əl|ˈsɪr.i.əl
ceremonial|adj.|仪式的；礼仪的|ˌser.ɪˈməʊ.ni.əl|ˌser.əˈmoʊ.ni.əl
ceremonious|adj.|礼节隆重的；过分客套的|ˌser.ɪˈməʊ.ni.əs|ˌser.əˈmoʊ.ni.əs
ceremony|n.|仪式；礼节；客套|ˈser.ɪ.mə.ni|ˈser.ə.moʊ.ni
certainty|n.|确信；确定；确实的事实；极可能发生的事|ˈsɜː.tən.ti|ˈsɝː.tən.ti
certificate|n./vt.|n. 证明文件；证书；文凭；vt. 出具官方证明（英）|səˈtɪf.ɪ.kət|sɚˈtɪf.ə.kət
certify|v.|正式证明；认证；确认合格；正式认定患精神疾病|ˈsɜː.tɪ.faɪ|ˈsɝː.t̬ə.faɪ
cession|n.|割让；让与；所割让的土地（正式）|ˈseʃ.ən|ˈseʃ.ən
chafe|v.|擦痛；磨伤；摩擦取暖（旧时）；因限制而恼怒（常接 at 或 under）|tʃeɪf|tʃeɪf
chagrin|n.|失望；懊恼（正式）|ˈʃæɡ.rɪn|ˈʃæɡ.rɪn
chair|n./vt.|n. 椅子；主席或主持人的职位；大学教授职位；vt. 主持会议|tʃeəʳ|tʃer
chalk|n./v.|n. 白垩；粉笔；v. 用粉笔写|tʃɔːk|tʃɑːk
challenge|n./vt.|n. 挑战；质疑；邀请比试；vt. 向…挑战；质疑；盘问；激励…提高能力|ˈtʃæl.ɪndʒ|ˈtʃæl.ɪndʒ
challenging|adj.|有挑战性的；艰巨的|ˈtʃæl.ɪn.dʒɪŋ|ˈtʃæl.ɪn.dʒɪŋ
chamber|n.|议事厅；议院；房间；法官办公室（chambers）；腔室；卧房（旧时）|ˈtʃeɪm.bəʳ|ˈtʃeɪm.bɚ
champagne|n.|香槟（法国香槟地区出产的起泡酒）|ʃæmˈpeɪn|ʃæmˈpeɪn
champion|n./vt.|n. 冠军；拥护者；vt. 拥护；捍卫|ˈtʃæm.pi.ən|ˈtʃæm.pi.ən
championship|n.|锦标赛；冠军地位；拥护；支持|ˈtʃæm.pi.ən.ʃɪp|ˈtʃæm.pi.ən.ʃɪp
chance|n./v.|n. 机会；可能性；风险；偶然；vt. 冒险；vi. 碰巧（旧时或文学用语）|tʃɑːns|tʃæns
chancellor|n.|总理（德国等）；大学校长；英国财政大臣|ˈtʃɑːn.səl.əʳ|ˈtʃæn.səl.ɚ
channel|n./vt.|n. 电视频道；频段；通道；航道；海峡；水渠；渠道；声道；vt. 引导；输送；模仿某人的风格|ˈtʃæn.əl|ˈtʃæn.əl
chant|v./n.|v. 有节奏地反复喊；吟唱；n. 口号；吟唱曲|tʃɑːnt|tʃænt
chaos|n.|混乱；无秩序|ˈkeɪ.ɒs|ˈkeɪ.ɑːs
chaotic|adj.|混乱的；无序的|keɪˈɒt.ɪk|keɪˈɑː.t̬ɪk
chapel|n.|小礼拜堂；（建筑内的）礼拜场所；（英国非国教、非天主教的）礼拜堂|ˈtʃæp.əl|ˈtʃæp.əl
chapter|n.|章；历史或人生阶段；分会；教士团|ˈtʃæp.təʳ|ˈtʃæp.tɚ
character|n.|性格；特色；品格；角色；人物；怪人；字符|ˈkær.ək.təʳ|ˈker.ək.tɚ
characteristic|n./adj.|n. 特征；特点；adj. 典型的；特有的|ˌkær.ək.təˈrɪs.tɪk|ˌker.ək.təˈrɪs.tɪk
characterize|vt.|是…的特征；使具有特点；描述主要特点（英式常用 characterise）|ˈkær.ək.tər.aɪz|ˈker.ək.tə.raɪz
charcoal|n.|木炭；炭笔；深灰色|ˈtʃɑː.kəʊl|ˈtʃɑːr.koʊl
charge|n./v.|n. 收费；指控；掌管；装药；冲锋；电量；电荷；命令（正式）；v. 收费；记账；控告；冲锋；充电；赋予职责|tʃɑːdʒ|tʃɑːrdʒ
charisma|n.|感召力；个人魅力|kəˈrɪz.mə|kəˈrɪz.mə
charitable|adj.|慈善的；宽厚的；不苛责他人的|ˈtʃær.ə.tə.bəl|ˈtʃer.ə.t̬ə.bəl
charity|n.|慈善机构；慈善救济；捐助；宽厚；仁爱（正式）|ˈtʃær.ə.ti|ˈtʃer.ə.t̬i`;
const readings={
  "certificate": [
    {
      "label": "n.",
      "uk": "səˈtɪf.ɪ.kət",
      "us": "sɚˈtɪf.ə.kət"
    },
    {
      "label": "vt.",
      "uk": "səˈtɪf.ɪ.keɪt",
      "us": "sɚˈtɪf.ɪ.keɪt"
    }
  ],
  "centenary": [
    {
      "label": "n. 第一读音",
      "uk": "senˈtiː.nər.i",
      "us": "ˈsen.ten.er.i"
    },
    {
      "label": "n. 另一读音",
      "uk": "senˈten.ər.i",
      "us": "senˈten.er.i"
    }
  ]
};
const notes={
  "catholic": "区分小写 catholic 的广泛、兼收并蓄义与大写 Catholic 的天主教义；两者读音相同。",
  "certificate": "按词性分别照录名词 -kət 和动词 -keɪt；动词为英式，指出具官方证明。",
  "centenary": "保留 Cambridge 列出的英美主要读音变体；去除网页排版空格。",
  "censor": "审查删改，不与 censure（谴责）混同。",
  "category": "英音 /ˈkæt.ə.ɡri/ 与美音 /ˈkæt̬.ə.ɡɔːr.i/ 分别按词典照录。"
};
const senses={
  "cast": [
    [
      "n. 演员阵容",
      "The cast assembled for a final rehearsal."
    ],
    [
      "n. 石膏固定",
      "Her wrist remained in a cast for six weeks."
    ],
    [
      "vt. 铸造",
      "They cast the statue in bronze."
    ],
    [
      "vt. 选派角色",
      "The director will cast a newcomer as the detective."
    ],
    [
      "vt. 投票",
      "Residents can cast their votes online."
    ],
    [
      "vt. 使产生怀疑",
      "The missing files cast doubt on his account."
    ]
  ],
  "cast-iron": [
    [
      "adj. 铸铁的",
      "A cast-iron pan stood on the stove."
    ],
    [
      "adj. 确凿可靠的",
      "They demanded a cast-iron guarantee."
    ]
  ],
  "casual": [
    [
      "adj. 休闲的",
      "Casual clothes are allowed on Fridays."
    ],
    [
      "adj. 临时的",
      "The farm employs casual workers during the harvest."
    ],
    [
      "adj. 漫不经心的",
      "His casual attitude worried the team."
    ]
  ],
  "casualty": [
    [
      "n. 伤亡者",
      "Every casualty received immediate medical attention."
    ],
    [
      "n. 受损事物",
      "The library was an early casualty of the budget cuts."
    ]
  ],
  "catalyst": [
    [
      "n. 催化剂",
      "The catalyst speeds up the reaction."
    ],
    [
      "n. 促成变化的事物",
      "The report became a catalyst for reform."
    ]
  ],
  "catch": [
    [
      "vt. 接住",
      "Can you catch the ball?"
    ],
    [
      "vt. 赶上",
      "We must hurry to catch the train."
    ],
    [
      "vt. 听清",
      "I could not catch her name."
    ],
    [
      "n. 暗藏的缺陷",
      "The offer sounds generous, but there is a catch."
    ],
    [
      "n. 搭扣",
      "The catch on the case is broken."
    ]
  ],
  "catholic": [
    [
      "adj. 广泛的（小写）",
      "Her catholic tastes include jazz, opera, and folk music."
    ],
    [
      "adj. 天主教的（大写）",
      "He attended a Catholic school."
    ],
    [
      "n. 天主教徒（大写）",
      "She is a Catholic."
    ]
  ],
  "cause": [
    [
      "n. 原因",
      "Investigators identified the cause of the fire."
    ],
    [
      "n. 事业；理想",
      "They raised money for a worthy cause."
    ],
    [
      "vt. 导致",
      "Heavy rain may cause delays."
    ]
  ],
  "caustic": [
    [
      "adj. 腐蚀性的",
      "Wear gloves when handling caustic chemicals."
    ],
    [
      "adj. 尖刻讽刺的",
      "Her caustic comments silenced the room."
    ]
  ],
  "caution": [
    [
      "n. 谨慎",
      "Proceed with caution on the icy steps."
    ],
    [
      "n. 警告",
      "The officer issued a caution."
    ],
    [
      "vt. 告诫",
      "Experts caution against relying on a single measurement."
    ]
  ],
  "cave": [
    [
      "n. 洞穴",
      "Bats live in the cave."
    ],
    [
      "vi. 屈服",
      "We refused to cave in to their demands."
    ]
  ],
  "cavity": [
    [
      "n. 龋洞",
      "The dentist found a cavity in a back tooth."
    ],
    [
      "n. 体腔",
      "Fluid accumulated in the chest cavity."
    ]
  ],
  "ceiling": [
    [
      "n. 天花板",
      "A lamp hangs from the ceiling."
    ],
    [
      "n. 上限",
      "The council imposed a ceiling on annual spending."
    ]
  ],
  "celebrate": [
    [
      "v. 庆祝",
      "We will celebrate our graduation next month."
    ],
    [
      "vt. 赞颂",
      "The poems celebrate ordinary working lives."
    ]
  ],
  "cell": [
    [
      "n. 细胞",
      "Each cell contains genetic material."
    ],
    [
      "n. 牢房",
      "The prisoner returned to his cell."
    ],
    [
      "n. 单体电池",
      "A damaged cell reduced the battery's capacity."
    ],
    [
      "n. 秘密小组",
      "The group operated as an independent cell."
    ]
  ],
  "cellular": [
    [
      "adj. 细胞的",
      "The study examines cellular growth."
    ],
    [
      "adj. 蜂窝通信的",
      "Cellular coverage is poor in the valley."
    ]
  ],
  "cement": [
    [
      "n. 水泥",
      "The workers mixed cement with sand."
    ],
    [
      "vt. 巩固",
      "The agreement will cement their partnership."
    ]
  ],
  "censor": [
    [
      "n. 审查员",
      "The censor removed several scenes."
    ],
    [
      "vt. 审查删改",
      "The authorities tried to censor the newspaper."
    ]
  ],
  "censure": [
    [
      "n. 谴责",
      "The decision attracted public censure."
    ],
    [
      "vt. 严厉批评",
      "The committee voted to censure its chair."
    ]
  ],
  "cereal": [
    [
      "n. 谷类作物",
      "Wheat is an important cereal crop."
    ],
    [
      "n. 早餐麦片",
      "She poured milk over her cereal."
    ]
  ],
  "ceremony": [
    [
      "n. 仪式",
      "The ceremony begins at noon."
    ],
    [
      "n. 客套",
      "They welcomed us without ceremony."
    ]
  ],
  "certificate": [
    [
      "n. 证书",
      "Keep your birth certificate in a safe place."
    ],
    [
      "vt. 出具官方证明（英）",
      "The authority can certificate the completion of the work."
    ]
  ],
  "chafe": [
    [
      "vt. 磨伤",
      "Rough seams can chafe the skin."
    ],
    [
      "vi. 因限制而恼怒",
      "Young recruits often chafe under strict rules."
    ]
  ],
  "chair": [
    [
      "n. 椅子",
      "Please pull up a chair."
    ],
    [
      "n. 大学教授职位",
      "She holds a chair in chemistry."
    ],
    [
      "vt. 主持会议",
      "Will you chair the meeting tomorrow?"
    ]
  ],
  "challenge": [
    [
      "n. 挑战",
      "The steep climb presented a serious challenge."
    ],
    [
      "vt. 质疑",
      "New evidence may challenge the accepted theory."
    ],
    [
      "vt. 邀请比试",
      "I challenge you to a game of chess."
    ]
  ],
  "chamber": [
    [
      "n. 议事厅",
      "Members gathered in the chamber."
    ],
    [
      "n. 腔室",
      "The instrument has a sealed chamber."
    ]
  ],
  "champion": [
    [
      "n. 冠军",
      "The champion retained her title."
    ],
    [
      "n. 拥护者",
      "He became a champion of public libraries."
    ],
    [
      "vt. 捍卫",
      "The group continues to champion equal access."
    ]
  ],
  "chance": [
    [
      "n. 机会",
      "This is your chance to ask questions."
    ],
    [
      "n. 可能性",
      "There is a chance of rain tonight."
    ],
    [
      "n. 偶然",
      "They met entirely by chance."
    ],
    [
      "vt. 冒险",
      "I would not chance another delay."
    ]
  ],
  "channel": [
    [
      "n. 电视频道",
      "Switch to the news channel."
    ],
    [
      "n. 水渠",
      "Water flows through a narrow channel."
    ],
    [
      "n. 渠道",
      "The website provides a channel for feedback."
    ],
    [
      "vt. 引导",
      "We should channel our energy into solving the problem."
    ]
  ],
  "chapter": [
    [
      "n. 章",
      "Read the final chapter before class."
    ],
    [
      "n. 人生阶段",
      "Retirement marked a new chapter in her life."
    ],
    [
      "n. 分会",
      "The local chapter meets every month."
    ]
  ],
  "character": [
    [
      "n. 性格",
      "Patience is part of her character."
    ],
    [
      "n. 角色",
      "The main character is a young doctor."
    ],
    [
      "n. 字符",
      "Enter one character in each box."
    ],
    [
      "n. 品格",
      "The inquiry raised questions about his character."
    ]
  ],
  "characteristic": [
    [
      "n. 特征",
      "Flexibility is a useful characteristic of this material."
    ],
    [
      "adj. 特有的",
      "The bird has a characteristic call."
    ]
  ],
  "charge": [
    [
      "n. 收费",
      "There is no charge for delivery."
    ],
    [
      "n. 指控",
      "He denied the charge of theft."
    ],
    [
      "n. 电荷",
      "The particle carries a positive charge."
    ],
    [
      "vt. 收费",
      "They charge extra for breakfast."
    ],
    [
      "vt. 充电",
      "Please charge the battery before use."
    ],
    [
      "vi. 冲锋",
      "The soldiers began to charge across the field."
    ]
  ],
  "charitable": [
    [
      "adj. 慈善的",
      "The concert supports charitable organizations."
    ],
    [
      "adj. 宽厚的",
      "She offered a charitable interpretation of his mistake."
    ]
  ],
  "charity": [
    [
      "n. 慈善机构",
      "The charity provides shelter for families."
    ],
    [
      "n. 慈善救济",
      "The event raised money for charity."
    ],
    [
      "n. 宽厚仁爱",
      "We should treat his errors with charity."
    ]
  ]
};
const phPages=new Set("certificate centenary charitable".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"013",file:"js/lexicon-review-013.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性、英美音和主要变体；注明专业、地区或语域限制，不穷尽历史及专业义项。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
records.find(r=>r.w==='cater').sources=['https://dictionary.cambridge.org/dictionary/english/cater','https://dictionary.cambridge.org/dictionary/english/cater-for','https://dictionary.cambridge.org/dictionary/english/cater-to'];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"013",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
