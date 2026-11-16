/* Batch 012: checks against linked dictionary entries dated 2026-11-16.
   Glosses are summaries; examples are original. Optional-schwa spacing is flattened. */
(function(){
const raw=`
cabinet|n.|内阁；储藏柜；陈列柜|ˈkæb.ɪ.nət|ˈkæb.ən.ət
cabinetmaker|n.|制作或修理优质家具的工匠；细木家具工|ˈkæb.ɪ.nətˌmeɪ.kəʳ|ˈkæb.ən.ətˌmeɪ.kɚ
cable|n./v.|n. 电缆；缆绳；有线电视；电报（旧时）；v. 发电报|ˈkeɪ.bəl|ˈkeɪ.bəl
cadence|n.|语调的抑扬节奏；乐曲终止式；跑步步频；骑车踏频|ˈkeɪ.dəns|ˈkeɪ.dəns
cafe|n.|咖啡馆；小餐馆；小商店（南非英语）；亦作 café|ˈkæf.eɪ|kæfˈeɪ
cafeteria|n.|自助式餐厅；自助食堂|ˌkæf.əˈtɪə.ri.ə|ˌkæf.əˈtɪr.i.ə
calamity|n.|灾难；严重不幸事件|kəˈlæm.ə.ti|kəˈlæm.ə.t̬i
calcium|n.|钙（化学元素）|ˈkæl.si.əm|ˈkæl.si.əm
calculate|vt.|计算；估计；推算|ˈkæl.kjə.leɪt|ˈkæl.kjə.leɪt
calculation|n.|计算；计算结果；算计（通常贬义）|ˌkæl.kjəˈleɪ.ʃən|ˌkæl.kjəˈleɪ.ʃən
calculator|n.|计算器；用于特定计算的软件或网页工具|ˈkæl.kjə.leɪ.təʳ|ˈkæl.kjə.leɪ.t̬ɚ
calendar|n./vt.|n. 日历；记事日程本（美）；历法；活动日程表；vt. 把活动排定日期（美）|ˈkæl.ən.dəʳ|ˈkæl.ən.dɚ
caliber|n.|质量；水准；才干；（枪管等的）口径；子弹直径（美式拼写，英式 calibre）|ˈkæl.ɪ.bəʳ|ˈkæl.ə.bɚ
calibration|n.|（仪器上的）刻度；校准；标定（工程、科学）|ˌkæl.ɪˈbreɪ.ʃən|ˌkæl.əˈbreɪ.ʃən
calibre|n.|质量；水准；才干；（枪管等的）口径；子弹直径（英式拼写，美式 caliber）|ˈkæl.ɪ.bəʳ|ˈkæl.ə.bɚ
call|v./n.|v. 称呼；打电话；呼喊；召来；认为；召集；要求；n. 电话；呼喊；鸟兽叫声；要求；短暂拜访或出诊；决定|kɔːl|kɑːl
callous|adj.|冷酷无情的；麻木不仁的|ˈkæl.əs|ˈkæl.əs
calm|adj./v./n.|adj. 平静的；镇定的；风平浪静的；v.（使）平静；n. 宁静；镇定|kɑːm|kɑːm
calorie|n.|卡路里（能量、热量单位，常用于表示食物提供的能量）|ˈkæl.ər.i|ˈkæl.ɚ.i
Cambridge|n.|剑桥（英格兰东部大学城）|ˈkeɪm.brɪdʒ|ˈkeɪm.brɪdʒ
camel|n.|骆驼；驼色毛呢|ˈkæm.əl|ˈkæm.əl
camera|n.|照相机；摄影机；摄像机|ˈkæm.rə|ˈkæm.rə
camouflage|n./vt.|n. 伪装；保护色；掩饰；vt. 伪装；掩盖|ˈkæm.ə.flɑːʒ|ˈkæm.ə.flɑːʒ
camp|n./vi./adj.|n. 营地；营房；营；阵营；vi. 露营；扎营；adj. 夸张做作的；戏谑浮夸的（主要英非正式）|kæmp|kæmp
campaign|n./v.|n. 有组织的活动；竞选；战役；vi. 开展活动；参加竞选；vt. 使（马、船等）参加比赛|kæmˈpeɪn|kæmˈpeɪn
campus|n.|校园；（大型机构的）园区|ˈkæm.pəs|ˈkæm.pəs
can|v./n.|情态动词：能；会；可以；可能；n. 罐；一罐；监狱或厕所（美非正式）；耳机（cans，俚语）；vt. 装罐保存；解雇或取消（非正式）|kæn|kæn
Canadian|adj./n.|adj. 加拿大的；加拿大人的；n. 加拿大人|kəˈneɪ.di.ən|kəˈneɪ.di.ən
canal|n.|运河；灌溉渠；（体内）管道|kəˈnæl|kəˈnæl
cancel|v.|取消；撤销；停播；注销（邮票）；停止支持、抵制某人（非正式）|ˈkæn.səl|ˈkæn.səl
cancellation|n.|取消；撤销；退订；退回的预订票位；停播；停止支持某人|ˌkæn.səlˈeɪ.ʃən|ˌkæn.səlˈeɪ.ʃən
candid|adj.|坦率的；直言不讳的；公正无偏见的；（照片）非摆拍的|ˈkæn.dɪd|ˈkæn.dɪd
candidate|n.|候选人；求职者；可能接受某事的人或物；考生（英）|ˈkæn.dɪ.dət|ˈkæn.dɪ.dət
candle|n.|蜡烛|ˈkæn.dəl|ˈkæn.dəl
cane|n./vt.|n. 藤条；竹竿等植物茎；手杖；体罚用藤条；vt. 用藤条责打|keɪn|keɪn
cannibalism|n.|食人行为；（动物）同类相食|ˈkæn.ɪ.bəl.ɪ.zəm|ˈkæn.ə.bəl.ɪ.zəm
cannon|n.|大炮；机炮；（英台球）连碰两球的一击；强劲的投球臂（美非正式）|ˈkæn.ən|ˈkæn.ən
canny|adj.|精明的；善于算计的；好的、令人愉快的（英格兰北部方言）|ˈkæn.i|ˈkæn.i
canoe|n./vi.|n. 独木舟；轻便窄划艇；vi. 划独木舟|kəˈnuː|kəˈnuː
canopy|n.|遮篷；床篷；林冠；飞机座舱透明罩；降落伞伞衣|ˈkæn.ə.pi|ˈkæn.ə.pi
canteen|n.|食堂（主要英式）；军人俱乐部或小卖部（美）；水壶；成套餐具盒（英）|kænˈtiːn|kænˈtiːn
canter|vi./n.|vi.（马或骑手）慢跑；n.（马的）慢跑步态；慢跑骑乘|ˈkæn.təʳ|ˈkæn.t̬ɚ
canvas|n.|帆布；画布；油画；拳击或摔跤台地面（the canvas）|ˈkæn.vəs|ˈkæn.vəs
canyon|n.|峡谷|ˈkæn.jən|ˈkæn.jən
cap|n./v.|n. 帽子；盖；牙冠；菌盖；上限；国家队出场记录（英）；谎话（俚语）；v. 限额；覆盖顶部；代表国家队出场（英）；说谎（俚语）|kæp|kæp
capability|n.|能力；性能；（军事）作战能力或装备实力|ˌkeɪ.pəˈbɪl.ə.ti|ˌkeɪ.pəˈbɪl.ə.t̬i
capable|adj.|有能力的；能干的；能够…的（capable of）|ˈkeɪ.pə.bəl|ˈkeɪ.pə.bəl
capacious|adj.|宽敞的；容量大的；包容广泛事物的（正式）|kəˈpeɪ.ʃəs|kəˈpeɪ.ʃəs
capacity|n.|容量；容纳人数；产能；能力；身份；职务（正式）|kəˈpæs.ə.ti|kəˈpæs.ə.t̬i
cape|n./vi.|n. 海角；岬；披肩；斗篷；vi. 为…辩护或声援（美非正式，常接 for）|keɪp|keɪp
capillary|n./adj.|n. 毛细血管；毛细管；adj. 毛细管的；毛细血管的；毛细现象的|kəˈpɪl.ər.i|ˈkæp.ə.ler.i
capital|n./adj.|n. 首都；首府；中心；大写字母；资本；资金；adj. 大写的；死刑的或可判死刑的|ˈkæp.ɪ.təl|ˈkæp.ə.t̬əl
capricious|adj.|反复无常的；变化莫测的（文学）|kəˈprɪʃ.əs|kəˈprɪʃ.əs
capsize|v.|（使船）倾覆；翻覆|kæpˈsaɪz|kæpˈsaɪz
capsule|n.|胶囊；太空舱；（器官或关节的）囊、被膜|ˈkæp.sjuːl|ˈkæp.səl
caption|n./vt.|n. 图片说明文字；字幕；vt. 添加说明文字或字幕|ˈkæp.ʃən|ˈkæp.ʃən
captious|adj.|吹毛求疵的；爱挑小毛病的（正式）|ˈkæp.ʃəs|ˈkæp.ʃəs
captivate|vt.|迷住；吸引住|ˈkæp.tɪ.veɪt|ˈkæp.tə.veɪt
captive|n./adj.|n. 俘虏；被囚禁的人或动物；adj. 被囚禁的；无法离开的；别无选择的（消费者等）|ˈkæp.tɪv|ˈkæp.tɪv
captivity|n.|囚禁；被俘状态；圈养|kæpˈtɪv.ə.ti|kæpˈtɪv.ə.t̬i
capture|vt./n.|vt. 俘获；夺取；准确描绘；拍摄；记录；吸引（注意）；n. 捕获；夺取；记录过程或所得图像信息|ˈkæp.tʃəʳ|ˈkæp.tʃɚ
carapace|n.|（蟹、龟等的）甲壳；背甲（生物学）|ˈkær.ə.peɪs|ˈker.ə.peɪs
carat|n.|克拉（宝石重量单位）；开、K（金纯度单位，英式，美式通常 karat）|ˈkær.ət|ˈker.ət
carbohydrate|n.|碳水化合物；富含碳水化合物的食物|ˌkɑː.bəʊˈhaɪ.dreɪt|ˌkɑːr.boʊˈhaɪ.dreɪt
carbon|n.|碳；二氧化碳（环境语境中的简称）；复写件|ˈkɑː.bən|ˈkɑːr.bən
carcase|n.|动物尸体；残骸或骨架（英式变体，通常作 carcass）|ˈkɑː.kəs|ˈkɑːr.kəs
carcass|n.|动物尸体；（旧车、船等的）残骸或骨架；躯体（俚语）|ˈkɑː.kəs|ˈkɑːr.kəs
card|n./vt.|n. 卡片；银行卡或证件；纸牌；贺卡；名片；厚纸；电脑板卡；古怪有趣的人（旧式非正式）；vt. 查验证件年龄（美非正式）|kɑːd|kɑːrd
cardiac|adj.|心脏的；心脏病的|ˈkɑː.di.æk|ˈkɑːr.di.æk
cardinal|n./adj.|n. 红衣主教；基数词；北美红雀；adj. 极重要的；主要的|ˈkɑː.dɪ.nəl|ˈkɑːr.dɪ.nəl
care|n./vi.|n. 照料；护理；小心；认真；忧虑；vi. 在意；关心；想要（正式礼貌用语）|keəʳ|ker
career|n./adj./vi.|n. 职业；职业生涯；adj. 职业的；长期从事的；vi. 猛冲；失控地疾驰|kəˈrɪəʳ|kəˈrɪr
cash|n./vt.|n. 现金；现款；可即时使用的资金；vt. 把支票等兑现|kæʃ|kæʃ
careful|adj.|小心的；仔细的；谨慎的|ˈkeə.fəl|ˈker.fəl
careless|adj.|粗心的；不谨慎的；无忧无虑的（文学）|ˈkeə.ləs|ˈker.ləs
carelessly|adv.|粗心地；不谨慎地|ˈkeə.ləs.li|ˈker.ləs.li
caress|v./n.|v. 爱抚；轻吻；n. 温柔的抚摸或亲吻|kəˈres|kəˈres
cargo|n.|（船、飞机等运输的）货物|ˈkɑː.ɡəʊ|ˈkɑːr.ɡoʊ
caricature|n./vt.|n. 夸张讽刺画或描述；漫画手法；vt. 夸张讽刺地描绘|ˈkær.ɪ.kə.tʃʊəʳ|ˈker.ə.kə.tʃʊr
carnage|n.|大屠杀；大量伤亡（尤指战争中的）|ˈkɑː.nɪdʒ|ˈkɑːr.nɪdʒ
carnal|adj.|肉体的；肉欲的（正式）|ˈkɑː.nəl|ˈkɑːr.nəl
carnival|n.|狂欢节；嘉年华；游乐场（美）；筹款游园会（美）|ˈkɑː.nɪ.vəl|ˈkɑːr.nə.vəl
carnivore|n.|食肉动物；吃肉的人（诙谐）|ˈkɑː.nɪ.vɔːʳ|ˈkɑːr.nə.vɔːr
carnivorous|adj.|食肉的；以肉为食的|kɑːˈnɪv.ər.əs|kɑːrˈnɪv.ɚ.əs
carpenter|n.|木匠|ˈkɑː.pɪn.təʳ|ˈkɑːr.pɪn.t̬ɚ
carpet|n./vt.|n. 地毯；覆盖地面的厚层；vt. 铺地毯；厚厚覆盖；严厉斥责（英非正式）|ˈkɑː.pɪt|ˈkɑːr.pət
carping|n.|吹毛求疵；不断挑小毛病（贬义）；另为 carp 的现在分词|ˈkɑː.pɪŋ|ˈkɑːr.pɪŋ
carriage|n.|马车；火车车厢（英）；运输或运费（英）；体态、仪态（正式）；婴儿车（美）|ˈkær.ɪdʒ|ˈker.ɪdʒ
carrier|n.|运送者；运输工具；航空公司；移动通信运营商；手提购物袋（英）；病原或致病基因携带者；航空母舰（非正式）|ˈkær.i.əʳ|ˈker.i.ɚ
carrion|n.|动物尸肉；腐肉|ˈkær.i.ən|ˈker.i.ən
carrot|n.|胡萝卜；诱因；激励（比喻）|ˈkær.ət|ˈker.ət
carry|v.|搬运；携带；承载；传播；具有；销售某商品；传送；刊载；赢得支持；（声音等）传得远；（加法）进位|ˈkær.i|ˈker.i
cart|n./vt.|n. 运货马车；手推车（美）；网购购物车；餐车（美）；vt. 搬运；费力运送|kɑːt|kɑːrt
carton|n.|纸板箱；装牛奶或果汁等的纸盒、塑料容器；一盒的量|ˈkɑː.tən|ˈkɑːr.t̬ən
cartoon|n.|漫画；讽刺画；动画片；绘画底稿（美术）|kɑːˈtuːn|kɑːrˈtuːn
carve|v.|雕刻；刻；把熟肉切片|kɑːv|kɑːrv
carver|n.|雕刻师；切肉者；切肉刀（主要英式）；餐桌扶手椅|ˈkɑː.vəʳ|ˈkɑːr.vɚ
carving|n.|雕刻品；雕刻图案；雕刻技艺|ˈkɑː.vɪŋ|ˈkɑːr.vɪŋ
cascade|n./v.|n. 小瀑布；瀑布状垂落物；vi. 大量倾泻；v. 逐级传递（信息）|kæsˈkeɪd|kæsˈkeɪd
case|n./vt.|n. 情况；事例；病例；案件；论据；箱盒；一箱；（语法）格；字母大小写；vt. 为行窃而察看（俚语，case the joint）|keɪs|keɪs
`;
const readings={
  "can": [
    {
      "label": "modal strong",
      "uk": "kæn",
      "us": "kæn"
    },
    {
      "label": "modal weak",
      "uk": "kən",
      "us": "kən"
    },
    {
      "label": "n./vt.",
      "uk": "kæn",
      "us": "kæn"
    }
  ],
  "candidate": [
    {
      "label": "n.",
      "uk": "ˈkæn.dɪ.dət",
      "us": "ˈkæn.dɪ.dət"
    },
    {
      "label": "n.（另一读音）",
      "uk": "ˈkæn.dɪ.deɪt",
      "us": "ˈkæn.dɪ.deɪt"
    }
  ]
};
const notes={
  "can": "情态动词按 strong/weak 分列 /kæn/ 与 /kən/；名词、实义动词保持 /kæn/，不把弱读套到罐头义。",
  "candidate": "保留词典明确列出的 /dət/ 与 /deɪt/ 两种尾音，补考生和潜在对象义。",
  "capillary": "采用 Cambridge 的英美分读：英音第二音节重读，美音第一音节重读；另据 Collins 补毛细管、毛细血管及毛细现象相关的形容词义。",
  "carcase": "Cambridge carcass 条目明确标为 UK also carcase；释义据该变体说明，音标来自 carcase 独立发音页。",
  "candid": "坦率义据 Cambridge；非摆拍与公正义补查 Collins，未收其过时白色义。",
  "caption": "图片说明义据 Cambridge；字幕义及相应动词据 Collins，避免漏掉影音常用义。",
  "carat": "区分宝石重量和黄金纯度，黄金纯度义美式通常拼 karat。",
  "camp": "区分营地、阵营、露营与风格夸张的 camp 形容词；风格义不泛化为性取向标签。",
  "canvas": "仅收帆布、画布油画及台面等名词义，避免与 canvass 拉票混淆。",
  "capsize": "照录 Cambridge 英美 /kæpˈsaɪz/，不按拼写猜重音。"
};
const senses={
  "cabinet": [
    [
      "n. 储藏柜",
      "The documents are in the cabinet."
    ],
    [
      "n. 内阁",
      "The cabinet approved the proposal."
    ]
  ],
  "cable": [
    [
      "n. 电缆",
      "The cable carries electricity to the house."
    ],
    [
      "n. 缆绳",
      "A steel cable supports the bridge."
    ],
    [
      "n. 有线电视",
      "The channel is available on cable."
    ],
    [
      "n. 电报（旧时）",
      "The office received a cable from the expedition."
    ]
  ],
  "cadence": [
    [
      "n. 语调节奏",
      "Her speech had a gentle cadence."
    ],
    [
      "n. 乐曲终止式",
      "The final cadence resolves the tension."
    ],
    [
      "n. 踏频",
      "The cyclist maintained a steady cadence."
    ]
  ],
  "cafe": [
    [
      "n. 咖啡馆",
      "We met at a cafe near the station."
    ],
    [
      "n. 小商店（南非）",
      "The family bought bread at the local cafe."
    ]
  ],
  "calculation": [
    [
      "n. 计算",
      "Check the calculation before submitting the total."
    ],
    [
      "n. 算计",
      "There was an element of calculation in his generosity."
    ]
  ],
  "calendar": [
    [
      "n. 日历",
      "Mark the date on the calendar."
    ],
    [
      "n. 历法",
      "The festival follows the lunar calendar."
    ],
    [
      "n. 日程表",
      "The event is part of the school's annual calendar."
    ],
    [
      "vt. 排定日期（美）",
      "Please calendar the meeting for next Tuesday."
    ]
  ],
  "caliber": [
    [
      "n. 水准",
      "We need applicants of a high caliber."
    ],
    [
      "n. 口径",
      "The report lists the caliber of each weapon."
    ]
  ],
  "calibration": [
    [
      "n. 校准",
      "The instrument needs regular calibration."
    ],
    [
      "n. 刻度",
      "Each calibration on the dial represents one degree."
    ]
  ],
  "calibre": [
    [
      "n. 才干",
      "Her work shows the calibre of her research."
    ],
    [
      "n. 口径",
      "The catalogue gives the calibre of the barrel."
    ]
  ],
  "call": [
    [
      "vt. 称呼",
      "They call the dog Pepper."
    ],
    [
      "v. 打电话",
      "Please call me tomorrow."
    ],
    [
      "v. 呼喊",
      "We heard someone call for help."
    ],
    [
      "vt. 召集",
      "The chair will call a meeting."
    ],
    [
      "n. 鸟兽叫声",
      "We heard the call of an owl."
    ],
    [
      "n. 决定（非正式）",
      "It is your call whether we continue."
    ],
    [
      "n. 短暂拜访或出诊",
      "The doctor is out on a call."
    ]
  ],
  "calm": [
    [
      "adj. 镇定的",
      "Remain calm during the exercise."
    ],
    [
      "adj. 风平浪静的",
      "The sea was calm at dawn."
    ],
    [
      "vt. 使平静",
      "Her voice helped calm the child."
    ],
    [
      "n. 宁静",
      "We enjoyed the calm of the countryside."
    ]
  ],
  "camel": [
    [
      "n. 骆驼",
      "A camel crossed the dunes."
    ],
    [
      "n. 驼色毛呢",
      "She wore a coat made of camel."
    ]
  ],
  "camouflage": [
    [
      "n. 保护色",
      "The insect's camouflage makes it hard to see."
    ],
    [
      "n. 掩饰",
      "His cheerful manner was camouflage for his anxiety."
    ],
    [
      "vt. 伪装",
      "The soldiers camouflage the equipment with branches."
    ]
  ],
  "camp": [
    [
      "n. 营地",
      "We reached the camp before sunset."
    ],
    [
      "n. 阵营",
      "The proposal divided the party into two camps."
    ],
    [
      "vi. 露营",
      "They camp beside the lake each summer."
    ],
    [
      "adj. 夸张浮华的",
      "The show was deliberately camp and theatrical."
    ]
  ],
  "campaign": [
    [
      "n. 宣传或竞选活动",
      "The campaign encourages people to save water."
    ],
    [
      "n. 战役",
      "The campaign lasted several months."
    ],
    [
      "vi. 开展活动",
      "Residents campaign for safer roads."
    ],
    [
      "vt. 使参加比赛",
      "The stable plans to campaign its youngest horse next season."
    ]
  ],
  "can": [
    [
      "v. 能；会（情态动词）",
      "She can read music."
    ],
    [
      "v. 可以（许可）",
      "You can use this desk."
    ],
    [
      "v. 可能（情态动词）",
      "The roads can be icy in winter."
    ],
    [
      "n. 罐",
      "He opened a can of soup."
    ],
    [
      "vt. 装罐保存",
      "They can fruit after the harvest."
    ],
    [
      "vt. 解雇（非正式）",
      "The firm may can workers who repeatedly ignore safety rules."
    ]
  ],
  "Canadian": [
    [
      "adj. 加拿大的",
      "He works for a Canadian company."
    ],
    [
      "n. 加拿大人",
      "A Canadian joined the research team."
    ]
  ],
  "canal": [
    [
      "n. 运河",
      "The canal links the two rivers."
    ],
    [
      "n. 体内管道",
      "The doctor examined the ear canal."
    ]
  ],
  "cancel": [
    [
      "v. 取消",
      "We may have to cancel the trip."
    ],
    [
      "vt. 注销邮票",
      "The machine will cancel the stamp."
    ],
    [
      "vt. 停止支持（非正式）",
      "Some fans wanted to cancel the performer after the offensive remarks."
    ]
  ],
  "candid": [
    [
      "adj. 坦率的",
      "She gave a candid account of the difficulties."
    ],
    [
      "adj. 非摆拍的",
      "The album contains candid photographs of the family."
    ]
  ],
  "candidate": [
    [
      "n. 候选人",
      "The candidate answered questions from voters."
    ],
    [
      "n. 考生（英）",
      "Each candidate must show identification."
    ],
    [
      "n. 可能接受某事的人或物",
      "This building is a candidate for renovation."
    ]
  ],
  "cane": [
    [
      "n. 藤条或竹茎",
      "The chair has a woven cane seat."
    ],
    [
      "n. 手杖",
      "He walks with a cane."
    ],
    [
      "vt. 用藤条责打",
      "The old rules allowed teachers to cane pupils."
    ]
  ],
  "cannibalism": [
    [
      "n. 食人行为",
      "The historian investigated reports of cannibalism."
    ],
    [
      "n. 同类相食",
      "Food shortages can lead to cannibalism among these insects."
    ]
  ],
  "cannon": [
    [
      "n. 大炮",
      "The cannon stood outside the fortress."
    ],
    [
      "n. 连碰两球（英台球）",
      "He scored with a carefully judged cannon."
    ],
    [
      "n. 强劲投球臂（美非正式）",
      "The catcher has a cannon for an arm."
    ]
  ],
  "canny": [
    [
      "adj. 精明的",
      "It was a canny investment."
    ],
    [
      "adj. 好的（英格兰北部方言）",
      "They described the helpful neighbour as a canny lad."
    ]
  ],
  "canoe": [
    [
      "n. 独木舟",
      "They carried the canoe to the water."
    ],
    [
      "vi. 划独木舟",
      "We canoe across the lake at weekends."
    ]
  ],
  "canopy": [
    [
      "n. 遮篷",
      "A canopy shaded the entrance."
    ],
    [
      "n. 林冠",
      "Birds moved through the forest canopy."
    ],
    [
      "n. 座舱罩",
      "The pilot closed the canopy."
    ],
    [
      "n. 降落伞伞衣",
      "The canopy opened above the parachutist."
    ]
  ],
  "canteen": [
    [
      "n. 食堂",
      "We had lunch in the staff canteen."
    ],
    [
      "n. 水壶",
      "Fill your canteen before the walk."
    ],
    [
      "n. 成套餐具盒（英）",
      "They received a canteen of cutlery as a wedding gift."
    ]
  ],
  "canvas": [
    [
      "n. 帆布",
      "The bag is made of canvas."
    ],
    [
      "n. 油画",
      "The gallery displayed a large canvas by a local artist."
    ],
    [
      "n. 拳击台地面",
      "The boxer fell to the canvas."
    ]
  ],
  "cap": [
    [
      "n. 帽子",
      "He wore a blue cap."
    ],
    [
      "n. 盖",
      "Replace the cap on the bottle."
    ],
    [
      "n. 上限",
      "The policy sets a cap on annual fees."
    ],
    [
      "n. 国家队出场记录（英）",
      "She earned her first cap at nineteen."
    ],
    [
      "vt. 限额",
      "The council will cap parking charges."
    ],
    [
      "vt. 覆盖顶部",
      "Snow will cap the mountain by morning."
    ],
    [
      "n. 谎话（俚语）",
      "His claim was pure cap."
    ]
  ],
  "capability": [
    [
      "n. 能力",
      "The system has the capability to detect faults."
    ],
    [
      "n. 军事实力",
      "The agreement limits nuclear capability."
    ]
  ],
  "capacious": [
    [
      "adj. 宽敞的",
      "She packed everything into a capacious bag."
    ],
    [
      "adj. 包容广泛事物的",
      "His capacious imagination embraced many different traditions."
    ]
  ],
  "capacity": [
    [
      "n. 容量",
      "The tank has a capacity of fifty litres."
    ],
    [
      "n. 产能",
      "The factory operates at full capacity."
    ],
    [
      "n. 能力",
      "The task is beyond our present capacity."
    ],
    [
      "n. 身份；职务",
      "She spoke in her capacity as chair."
    ]
  ],
  "cape": [
    [
      "n. 海角",
      "The ship rounded the cape."
    ],
    [
      "n. 斗篷",
      "A woollen cape covered her shoulders."
    ],
    [
      "vi. 声援（美非正式）",
      "Why cape for a company that ignores its customers?"
    ]
  ],
  "capillary": [
    [
      "n. 毛细血管",
      "Blood flows through each tiny capillary."
    ],
    [
      "n. 毛细管",
      "The liquid rises inside the capillary."
    ],
    [
      "adj. 毛细管的",
      "The experiment demonstrates capillary action."
    ]
  ],
  "capital": [
    [
      "n. 首都",
      "The capital attracts visitors from around the world."
    ],
    [
      "n. 大写字母",
      "Begin the name with a capital."
    ],
    [
      "n. 资本",
      "The founders invested their own capital."
    ],
    [
      "adj. 死刑的",
      "The law classifies it as a capital offence."
    ]
  ],
  "capsule": [
    [
      "n. 胶囊",
      "Take one capsule with water."
    ],
    [
      "n. 太空舱",
      "The capsule returned safely to Earth."
    ],
    [
      "n. 被膜（医学）",
      "The surgeon examined the joint capsule."
    ]
  ],
  "caption": [
    [
      "n. 图片说明",
      "The caption identifies everyone in the photograph."
    ],
    [
      "n. 字幕",
      "A caption appeared at the bottom of the screen."
    ],
    [
      "vt. 加说明文字",
      "Please caption each picture before uploading it."
    ]
  ],
  "captive": [
    [
      "n. 俘虏",
      "The captive was released after negotiations."
    ],
    [
      "adj. 被囚禁的",
      "The birds were bred from captive parents."
    ],
    [
      "adj. 别无选择的",
      "The airport shop serves a captive market."
    ]
  ],
  "capture": [
    [
      "vt. 俘获",
      "The patrol tried to capture the intruder."
    ],
    [
      "vt. 准确描绘",
      "The photograph does not capture the colours accurately."
    ],
    [
      "vt. 吸引",
      "The opening scene will capture your attention."
    ],
    [
      "n. 捕获",
      "The animal escaped capture."
    ],
    [
      "n. 数据或图像记录",
      "The software supports video capture."
    ]
  ],
  "carat": [
    [
      "n. 克拉（宝石重量）",
      "The stone weighs one carat."
    ],
    [
      "n. 金纯度单位（英）",
      "The bracelet is made of eighteen-carat gold."
    ]
  ],
  "carbon": [
    [
      "n. 碳",
      "Diamond is a form of carbon."
    ],
    [
      "n. 二氧化碳的简称（环境）",
      "The plan aims to reduce carbon emissions."
    ],
    [
      "n. 复写件",
      "Keep the original and send a carbon to the office."
    ]
  ],
  "carcase": [
    [
      "n. 动物尸体（英式变体）",
      "The farmer found a deer carcase beside the track."
    ],
    [
      "n. 骨架；残骸",
      "They removed the rusted carcase of the vehicle."
    ]
  ],
  "carcass": [
    [
      "n. 动物尸体",
      "Vultures gathered around the carcass."
    ],
    [
      "n. 残骸",
      "The burnt-out carcass of a bus blocked the road."
    ]
  ],
  "card": [
    [
      "n. 证件或银行卡",
      "Please show your membership card."
    ],
    [
      "n. 纸牌",
      "She placed a card on the table."
    ],
    [
      "n. 贺卡",
      "We sent him a birthday card."
    ],
    [
      "n. 厚纸",
      "Cut a circle from the card."
    ],
    [
      "n. 电脑板卡",
      "The computer needs a new graphics card."
    ],
    [
      "vt. 查验年龄证件（美非正式）",
      "The staff must card anyone who looks under twenty-five."
    ]
  ],
  "cardinal": [
    [
      "n. 红衣主教",
      "The cardinal attended the ceremony."
    ],
    [
      "n. 基数词",
      "Three is a cardinal number."
    ],
    [
      "n. 北美红雀",
      "A cardinal perched on the fence."
    ],
    [
      "adj. 极重要的",
      "Accuracy is a cardinal requirement."
    ]
  ],
  "care": [
    [
      "n. 照料",
      "The patient needs constant care."
    ],
    [
      "n. 小心",
      "Handle the glass with care."
    ],
    [
      "n. 忧虑",
      "He seemed to have no care in the world."
    ],
    [
      "vi. 在意",
      "I care about the result."
    ],
    [
      "vi. 想要（正式）",
      "Would you care to join us?"
    ]
  ],
  "career": [
    [
      "n. 职业生涯",
      "She began her career as a teacher."
    ],
    [
      "adj. 职业的",
      "The talks were led by a career diplomat."
    ],
    [
      "vi. 失控疾驰",
      "Vehicles can career off the road in icy conditions."
    ]
  ],
  "cash": [
    [
      "n. 现金",
      "She paid in cash."
    ],
    [
      "vt. 兑现",
      "You can cash the cheque at the bank."
    ]
  ],
  "careless": [
    [
      "adj. 粗心的",
      "A careless mistake changed the total."
    ],
    [
      "adj. 无忧无虑的（文学）",
      "They remembered the careless days of summer."
    ]
  ],
  "caress": [
    [
      "v. 爱抚",
      "She would gently caress the sleeping child's hair."
    ],
    [
      "n. 抚摸",
      "He reassured her with a caress of the hand."
    ]
  ],
  "caricature": [
    [
      "n. 夸张讽刺画",
      "The artist drew a caricature of the mayor."
    ],
    [
      "vt. 夸张讽刺地描绘",
      "The sketch tries to caricature the minister's mannerisms."
    ]
  ],
  "carnival": [
    [
      "n. 狂欢节",
      "The carnival filled the streets with music."
    ],
    [
      "n. 游乐场（美）",
      "The children rode the Ferris wheel at the carnival."
    ]
  ],
  "carnivore": [
    [
      "n. 食肉动物",
      "A lion is a carnivore."
    ],
    [
      "n. 吃肉的人（诙谐）",
      "The vegetarian host cooked a separate dish for the carnivore in the group."
    ]
  ],
  "carpet": [
    [
      "n. 地毯",
      "A thick carpet covered the floor."
    ],
    [
      "n. 覆盖层",
      "A carpet of leaves lay beneath the trees."
    ],
    [
      "vt. 铺地毯",
      "They plan to carpet the stairs."
    ],
    [
      "vt. 严厉斥责（英非正式）",
      "The manager will carpet anyone who ignores the safety rules."
    ]
  ],
  "carriage": [
    [
      "n. 马车",
      "The carriage waited outside the house."
    ],
    [
      "n. 车厢（英）",
      "Our seats are in the rear carriage."
    ],
    [
      "n. 运费（英）",
      "The price includes carriage."
    ],
    [
      "n. 仪态（正式）",
      "Her upright carriage suggested confidence."
    ]
  ],
  "carrier": [
    [
      "n. 航空公司",
      "The carrier operates daily flights."
    ],
    [
      "n. 通信运营商",
      "She changed her mobile carrier."
    ],
    [
      "n. 病原携带者",
      "A carrier may show no symptoms."
    ],
    [
      "n. 购物袋（英）",
      "He put the groceries in a carrier."
    ],
    [
      "n. 航空母舰（非正式）",
      "The aircraft landed on the carrier."
    ]
  ],
  "carrot": [
    [
      "n. 胡萝卜",
      "She grated a carrot into the salad."
    ],
    [
      "n. 激励",
      "The bonus is a carrot to encourage early completion."
    ]
  ],
  "carry": [
    [
      "vt. 搬运",
      "Can you carry this box upstairs?"
    ],
    [
      "vt. 销售",
      "The shop does not carry that brand."
    ],
    [
      "vt. 刊载",
      "Several newspapers carry the story today."
    ],
    [
      "vi. 传得远",
      "Her voice can carry across the hall."
    ],
    [
      "vt. 赢得支持",
      "The proposal may carry the committee."
    ],
    [
      "vt. 进位",
      "Add the digits and carry the one."
    ]
  ],
  "cart": [
    [
      "n. 运货马车",
      "A horse pulled the cart."
    ],
    [
      "n. 网购购物车",
      "Add the item to your cart."
    ],
    [
      "vt. 费力运送",
      "We had to cart the furniture up three flights of stairs."
    ]
  ],
  "cartoon": [
    [
      "n. 漫画",
      "The newspaper printed a political cartoon."
    ],
    [
      "n. 动画片",
      "The children watched a cartoon."
    ],
    [
      "n. 绘画底稿（美术）",
      "The museum displayed a cartoon for the mural."
    ]
  ],
  "carve": [
    [
      "v. 雕刻",
      "She can carve delicate patterns in wood."
    ],
    [
      "v. 切熟肉",
      "Would you like to carve the turkey?"
    ]
  ],
  "carver": [
    [
      "n. 雕刻师",
      "The carver shaped the mask from oak."
    ],
    [
      "n. 切肉刀",
      "Use the carver to slice the roast."
    ],
    [
      "n. 扶手餐椅",
      "A carver stood at the head of the table."
    ]
  ],
  "carving": [
    [
      "n. 雕刻品",
      "The carving depicts a small bird."
    ],
    [
      "n. 雕刻技艺",
      "He studied stone carving."
    ]
  ],
  "cascade": [
    [
      "n. 小瀑布",
      "We stopped beside a cascade."
    ],
    [
      "vi. 倾泻",
      "Water began to cascade down the steps."
    ],
    [
      "v. 逐级传递",
      "Managers will cascade the information to their teams."
    ]
  ],
  "case": [
    [
      "n. 情况",
      "We review each case separately."
    ],
    [
      "n. 病例",
      "The doctor diagnosed a mild case of flu."
    ],
    [
      "n. 案件",
      "The judge dismissed the case."
    ],
    [
      "n. 论据",
      "She made a strong case for reform."
    ],
    [
      "n. 箱盒",
      "Put the violin in its case."
    ],
    [
      "n. 字母大小写",
      "The password is case sensitive."
    ],
    [
      "n. 语法格",
      "The noun is in the accusative case."
    ],
    [
      "vt. 为行窃而察看（俚语）",
      "The thieves began to case the joint."
    ]
  ]
};
const phPages=new Set('calibre candidate can captive carbon carcase careful carton carve capital case'.split(' '));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"012",file:"js/lexicon-review-012.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性、英美音和主要变体；注明专业、地区或语域限制，不穷尽历史及专业义项。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
for(const w of ['candid','caption','capillary']) get(w).sources=[get(w).source,`https://www.collinsdictionary.com/dictionary/english/${w}`];
get('carcase').source="https://dictionary.cambridge.org/dictionary/english/carcass";
get('carcase').sources=[get('carcase').source,get('carcase').pronunciationSource];
get('case').sources=[get('case').source,"https://dictionary.cambridge.org/dictionary/learner-english/case"];
get('caliber').sources=[get('caliber').source,get('calibre').source];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"012",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[{w:"careerism",reason:"已查到 Collins 释义和美音，但尚未找到可照录的完整英美 IPA；保留待核对，不计入完成。",source:"https://www.collinsdictionary.com/dictionary/english/careerism"}]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();

