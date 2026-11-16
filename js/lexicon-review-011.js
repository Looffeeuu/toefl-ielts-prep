/* Batch 011: linked dictionary checks dated 2026-11-16.
   Chinese glosses are summaries; examples are original. Optional-schwa spacing is flattened. */
(function(){
const raw=`
break|v./n.|v.（使）破碎；损坏；中断；结束；违反；突破；公布；n. 休息；间歇；中断；机会|breɪk|breɪk
breakdown|n.|故障；失败；关系破裂；分类明细；分解；精神崩溃；（橄榄球）擒抱后的争球阶段|ˈbreɪk.daʊn|ˈbreɪk.daʊn
breakfast|n./vi.|n. 早餐；vi. 吃早餐（正式）|ˈbrek.fəst|ˈbrek.fəst
breakthrough|n./adj.|n. 突破；重大进展；adj. 突破性的（用在名词前）|ˈbreɪk.θruː|ˈbreɪk.θruː
breakup|n.|分裂；解体；关系结束；分手|ˈbreɪk.ʌp|ˈbreɪk.ʌp
breath|n.|呼吸的空气；气息；一次呼吸；一丝（风等）|breθ|breθ
breathe|v.|呼吸；吸入或呼出；低声说（文学）；（葡萄酒）透气醒酒|briːð|briːð
breathing|n.|呼吸；另为 breathe 的现在分词|ˈbriː.ðɪŋ|ˈbriː.ðɪŋ
breathless|adj.|气喘吁吁的；喘不过气的；激动得屏息的|ˈbreθ.ləs|ˈbreθ.ləs
breathtaking|adj.|激动人心的；美得惊人的；令人惊叹的|ˈbreθˌteɪ.kɪŋ|ˈbreθˌteɪ.kɪŋ
breed|v./n.|v. 繁殖；饲养；培育；引起；导致；n. 品种；类型|briːd|briːd
breeding|n.|饲养；育种；繁殖；教养（旧式）|ˈbriː.dɪŋ|ˈbriː.dɪŋ
breeze|n./vi.|n. 微风；轻而易举的事（非正式）；vi. 轻快自信地走；轻松完成（breeze through）|briːz|briːz
brew|v./n.|v. 酿（啤酒）；冲泡；浸泡；（风暴或麻烦）酝酿；n. 一种啤酒；茶或啤酒（英非正式）；混合物|bruː|bruː
bribe|vt./n.|vt. 贿赂；收买；n. 贿赂物；用来诱使他人做事的好处|braɪb|braɪb
brick|n./v.|n. 砖；积木；投得很差的球（篮球等，非正式）；v.（使电子设备）变砖、无法使用（非正式）|brɪk|brɪk
bridge|n./vt.|n. 桥；联系或过渡的纽带；鼻梁；琴码；齿桥；船桥；桥牌；vt. 在…上架桥；弥合|brɪdʒ|brɪdʒ
briefcase|n.|公文包|ˈbriːf.keɪs|ˈbriːf.keɪs
brighten|v.|（使）变明亮；（使天气）放晴；（使）愉快或充满希望|ˈbraɪ.tən|ˈbraɪ.t̬ən
brilliance|n.|卓越才华；高超技巧；光辉；鲜明|ˈbrɪl.jəns|ˈbrɪl.jəns
brilliant|adj.|极聪明的；技艺高超的；光辉灿烂的；鲜艳的；极好的（英非正式）|ˈbrɪl.jənt|ˈbrɪl.jənt
brilliantly|adv.|出色地；才华横溢地；光彩夺目地|ˈbrɪl.jənt.li|ˈbrɪl.jənt.li
brim|n./vi.|n. 帽檐；容器上沿；vi. 盛满；充溢|brɪm|brɪm
bring|vt.|带来；带到；造成；导致|brɪŋ|brɪŋ
brink|n.|（某事即将发生的）边缘；悬崖等的边缘（文学）|brɪŋk|brɪŋk
briny|adj./n.|adj. 含大量盐的；咸的；n. 大海（the briny，英旧式诙谐用法）|ˈbraɪ.ni|ˈbraɪ.ni
brisk|adj.|轻快的；精力充沛的；利落的；（生意）兴隆的|brɪsk|brɪsk
briskness|n.|轻快；活跃；生气勃勃|ˈbrɪsk.nəs|ˈbrɪsk.nəs
Bristol|n.|布里斯托尔（英格兰西南部城市）|ˈbrɪs.təl|ˈbrɪs.təl
Britain|n.|大不列颠（包括英格兰、苏格兰和威尔士的岛）；也常用来指英国，但并非严格同义|ˈbrɪt.ən|ˈbrɪt.ən
British|adj./n.|adj. 英国的；英国人的；大不列颠的；n. 英国人（the British，集合用法）|ˈbrɪt.ɪʃ|ˈbrɪt̬.ɪʃ
brittle|adj.|易碎的；脆的；表面自信却内心脆弱或情绪易变的|ˈbrɪt.əl|ˈbrɪt̬.əl
broad-brimmed|adj.|（帽子）宽檐的|ˌbrɔːdˈbrɪmd|ˌbrɑːdˈbrɪmd
broadcast|v./n.|v. 广播；播送；传播消息；撒播（种子等）；n. 广播或电视节目|ˈbrɔːd.kɑːst|ˈbrɑːd.kæst
broaden|v.|（使）变宽；扩大（范围）；开阔（眼界等）|ˈbrɔː.dən|ˈbrɑː.dən
brochure|n.|宣传册；产品或公司介绍手册|ˈbrəʊ.ʃəʳ|broʊˈʃʊr
bronze|n.|青铜；青铜色；青铜雕像；铜牌|brɒnz|brɑːnz
brood|n./vi.|n. 一窝雏鸟；一家的孩子（诙谐）；vi. 忧思；闷闷不乐地想（常接 over/on）|bruːd|bruːd
brook|n./vt.|n. 小溪；vt. 容忍；容许（正式，常用于否定）|brʊk|brʊk
brown|n./adj./v.|n. 棕色；褐色；adj. 棕色的；（面包等）全麦或未精制的；v.（使食物）变成棕色；煎炒至褐色|braʊn|braʊn
brownish|adj.|略带棕色的；褐色的|ˈbraʊ.nɪʃ|ˈbraʊ.nɪʃ
browse|v./n.|v. 随意翻阅；逛商店；浏览网页；（动物）悠闲地吃草叶；n. 浏览；随意逛看（主要英式）|braʊz|braʊz
bruise|n./v.|n. 瘀青；挫伤；（水果的）碰伤处；v.（使）出现瘀伤；碰伤|bruːz|bruːz
brutal|adj.|残暴的；野蛮的；冷酷直率的|ˈbruː.təl|ˈbruː.t̬əl
bubble|n./v.|n. 气泡；泡沫；经济泡沫；封闭的小圈子；v. 冒泡；充满（热情等）；形成接触有限的社交圈|ˈbʌb.əl|ˈbʌb.əl
buck|n./v.|n. 美元（美、澳非正式）；卢比（印度非正式）；兰特（南非非正式）；雄鹿、雄兔等；跳马器械；v.（马）尥蹶子；反对；逆势而行|bʌk|bʌk
bucket|n.|桶；一桶的量|ˈbʌk.ɪt|ˈbʌk.ɪt
buckle|n./v.|n. 扣环；搭扣；水果酥顶蛋糕（美）；v.（用搭扣）扣紧；（使）弯曲变形；屈服（buckle under）|ˈbʌk.əl|ˈbʌk.əl
bud|n./vi.|n. 芽；花蕾；老兄、伙伴（美非正式）；大麻（俚语）；vi. 发芽；长出花蕾|bʌd|bʌd
buddy|n.|朋友；伙伴（非正式）|ˈbʌd.i|ˈbʌd.i
budge|v.|（使）稍微移动；（使）改变主意|bʌdʒ|bʌdʒ
budget|n./adj./v.|n. 预算；可用经费；分配限额（时间等）；adj. 廉价的；经济型的；v. 做预算；计划分配|ˈbʌdʒ.ɪt|ˈbʌdʒ.ɪt
buffet|n./vt.|n. 自助餐；车站餐馆（英）；vt.（风雨等）反复猛击|ˈbʊf.eɪ|bəˈfeɪ
bug|n./vt.|n. 小虫；小病或病菌（非正式）；程序错误；窃听器；强烈兴趣（非正式）；vt. 烦扰（非正式）；安装窃听器|bʌɡ|bʌɡ
buggy|n./adj.|n. 小型敞篷车；婴儿推车（英）；轻便单马车；adj. 程序错误多的；虫子多的|ˈbʌɡ.i|ˈbʌɡ.i
bugle|n.|军号；筋骨草属的一种植物|ˈbjuː.ɡəl|ˈbjuː.ɡəl
building|n.|建筑物；建筑；建筑业|ˈbɪl.dɪŋ|ˈbɪl.dɪŋ
bulb|n.|鳞茎；灯泡；温度计等的球状部分|bʌlb|bʌlb
bulge|vi./n.|vi. 鼓起；凸出；n. 凸起部分；短暂激增|bʌldʒ|bʌldʒ
bulk|n.|庞大体积；大块头；主体；大部分（the bulk of）；大批量（in bulk）|bʌlk|bʌlk
bulky|adj.|体积大的；笨重难搬的|ˈbʌl.ki|ˈbʌl.ki
bull|n.|公牛；雄象、雄鲸等；看涨投资者；胡说（非正式）；教皇诏书（宗教）|bʊl|bʊl
bulletin|n.|新闻简报；公告；机构出版的简讯|ˈbʊl.ə.tɪn|ˈbʊl.ə.t̬ɪn
bully|n./vt.|n. 欺凌弱者的人；vt. 欺凌；恐吓；胁迫|ˈbʊl.i|ˈbʊl.i
bumblebee|n.|熊蜂|ˈbʌm.bəl.biː|ˈbʌm.bəl.biː
bump|v./n.|v. 碰撞；颠簸前行；调离或挤掉（美非正式）；提高（美非正式）；n. 凸起；肿块；碰撞；小幅增长|bʌmp|bʌmp
bumper|n./adj.|n. 保险杠；弹向击球手头部的短球（板球）；adj. 超常的大量的；丰收的|ˈbʌm.pəʳ|ˈbʌm.pɚ
bunch|n./v.|n. 束；串；群；大量（非正式）；双马尾辫（bunches，英）；v.（使）聚拢；挤在一起|bʌntʃ|bʌntʃ
bundle|n./v.|n. 捆；束；包；一组产品；大量钱（非正式）；v. 捆扎；匆忙推送；捆绑销售|ˈbʌn.dəl|ˈbʌn.dəl
bungalow|n.|通常为单层的平房（有时屋顶内带较小阁楼层）|ˈbʌŋ.ɡəl.əʊ|ˈbʌŋ.ɡəl.oʊ
bunk|n.|上下铺床位；（船、火车等的）狭窄铺位；胡说（旧式非正式）；加油站（印度英语）|bʌŋk|bʌŋk
buoyant|adj.|有浮力的；能浮起的；乐观自信的；（经济、生意）繁荣活跃的|ˈbɔɪ.ənt|ˈbɔɪ.ənt
burden|n./vt.|n. 负担；重担；负荷；vt. 使负担；使担忧（常接 with）|ˈbɜː.dən|ˈbɝː.dən
burdensome|adj.|繁重的；造成困难的（正式）|ˈbɜː.dən.səm|ˈbɝː.dən.səm
bureaucracy|n.|官僚体制；官僚机构或人员；繁文缛节（通常贬义）|bjʊəˈrɒk.rə.si|bjʊˈrɑː.krə.si
burgeon|vi.|迅速生长；蓬勃发展（文学或商业用语）|ˈbɜː.dʒən|ˈbɝː.dʒən
burger|n.|汉堡肉饼或其他扁圆饼；汉堡包|ˈbɜː.ɡəʳ|ˈbɝː.ɡɚ
burglar|n.|入室盗窃者|ˈbɜː.ɡləʳ|ˈbɝː.ɡlɚ
burial|n.|埋葬；葬礼|ˈber.i.əl|ˈber.i.əl
burning|adj.|燃烧的；炽热的；灼痛的；强烈的；迫切的（问题等）|ˈbɜː.nɪŋ|ˈbɝː.nɪŋ
burnish|vt.|擦亮（金属，文学）；改善；增色（形象等）|ˈbɜː.nɪʃ|ˈbɝː.nɪʃ
burrow|n./v.|n.（动物挖的）洞穴；v. 挖洞；钻入；翻找|ˈbʌr.əʊ|ˈbɝː.oʊ
burst|v./n.|v.（使）爆裂；突然打开；猛冲；突然爆发（burst into/out）；n. 短暂爆发；一阵|bɜːst|bɝːst
bus|n./vt.|n. 公共汽车；（计算机）总线；vt. 用公共汽车运送；收拾餐桌上的餐具（美）|bʌs|bʌs
bush|n.|灌木；（尤澳大利亚、非洲的）荒野；一丛浓密的毛发（非正式）|bʊʃ|bʊʃ
business|n.|商业；生意；企业；业务；工作；事务；私事|ˈbɪz.nɪs|ˈbɪz.nɪs
bust|n./vt./adj.|n. 胸部；胸围；半身像；逮捕行动（非正式）；vt. 打坏；逮捕；降职；猛击（非正式）；adj. 破产的；坏了的（英非正式）|bʌst|bʌst
bustle|vi./n.|vi. 忙碌奔走；n. 熙攘；忙乱；（旧时女裙内的）裙撑|ˈbʌs.əl|ˈbʌs.əl
butcher|n./vt.|n. 肉贩；肉店；屠夫；残杀者；vt. 宰杀；分割肉；屠杀；糟蹋（非正式）|ˈbʊtʃ.əʳ|ˈbʊtʃ.ɚ
butt|n./v.|n. 烟蒂；屁股（主要美俚语）；枪托；嘲笑对象；大水桶（英）；v. 用头或角猛撞|bʌt|bʌt
butter|n./vt.|n. 黄油；坚果或种子制成的脂性酱；水果酱（美）；vt. 涂黄油或类似酱料|ˈbʌt.əʳ|ˈbʌt̬.ɚ
butterfly|n.|蝴蝶；蝶泳；（紧张时的）心慌（butterflies in your stomach）|ˈbʌt.ə.flaɪ|ˈbʌt̬.ɚ.flaɪ
buzz|v./n.|v. 嗡嗡响；按蜂鸣器呼叫；忙碌活动；低空掠过；用推子剪短发（非正式）；n. 嗡嗡声；兴奋感；热议|bʌz|bʌz
buzzer|n.|蜂鸣器；发出嗡嗡声的信号装置|ˈbʌz.əʳ|ˈbʌz.ɚ
by-product|n.|副产品；附带产生的结果|ˈbaɪˌprɒd.ʌkt|ˈbaɪˌprɑː.dəkt
bypass|vt./n.|vt. 绕过；避开；不理会（规则、程序或权威）；n. 绕城道路；心脏搭桥手术|ˈbaɪ.pɑːs|ˈbaɪ.pæs
byword|n.|（某种品质的）典型代表；代名词（常接 for）|ˈbaɪ.wɜːd|ˈbaɪ.wɝːd
cab|n.|出租车；（卡车、公共汽车、火车等的）驾驶室；旧时马拉出租车|kæb|kæb
cabal|n.|秘密结党；秘密策划政治行动的小集团（贬义）|kəˈbæl|kəˈbɑːl
cabin|n.|小木屋；船舱；飞机客舱；大办公室内的独立小办公间（印度英语）|ˈkæb.ɪn|ˈkæb.ɪn
`;
const readings={
  "buffet": [
    {
      "label": "n. 自助餐；车站餐馆",
      "uk": "ˈbʊf.eɪ",
      "us": "bəˈfeɪ"
    },
    {
      "label": "vt. 反复猛击",
      "uk": "ˈbʌf.ɪt",
      "us": "ˈbʌf.ɪt"
    }
  ]
};
const notes={
  "breath": "名词 breath /breθ/ 与动词 breathe /briːð/ 的元音长度和词尾清浊均不同；不可共用音标。",
  "breathe": "核对呼吸、文学用语低声说和葡萄酒透气醒酒；与 breath 区分。",
  "buffet": "按词性义项分别记录：自助餐英 /ˈbʊf.eɪ/ 美 /bəˈfeɪ/，连续猛击英美均 /ˈbʌf.ɪt/。",
  "brochure": "Cambridge 英音首音节重读，美音第二音节重读，照录而非从英音推导美音。",
  "broad-brimmed": "释义采用 Collins 同词头；英美音采用 Cambridge 发音页，采用该页重音，不混用 Collins 的另一重音记录。",
  "Britain": "区分大不列颠岛与日常用来指英国的用法，避免把岛名与包含北爱尔兰的联合王国完全等同。",
  "bugle": "植物义限筋骨草属的一种植物，不从词形猜测为任意喇叭形植物。",
  "bulb": "植物义为鳞茎；不照搬学习词典简化描述中的 root 而误译为根。",
  "byword": "现代常用义是某种品质的典型代表，常接 for，不泛译为所有谚语。",
  "bunk": "床位、胡说和印度英语加油站分别标注，避免无地区标记地混用。",
  "brook": "保留小溪与正式语域的容忍两义，后者常用于否定表达。"
};
const senses={
  "break": [
    [
      "v. 打碎；损坏",
      "Be careful not to break the glass."
    ],
    [
      "vt. 违反",
      "Do not break your promise."
    ],
    [
      "vt. 打破纪录",
      "She hopes to break the school record."
    ],
    [
      "vt. 公布",
      "The newspaper was first to break the story."
    ],
    [
      "n. 休息",
      "We took a short break."
    ],
    [
      "n. 机会",
      "The role gave him his first big break."
    ]
  ],
  "breakdown": [
    [
      "n. 故障",
      "A breakdown delayed the bus."
    ],
    [
      "n. 失败；破裂",
      "The dispute led to a breakdown in communication."
    ],
    [
      "n. 分类明细",
      "Please provide a breakdown of the costs."
    ],
    [
      "n. 分解",
      "Heat speeds up the breakdown of this compound."
    ]
  ],
  "breakfast": [
    [
      "n. 早餐",
      "Breakfast is served at seven."
    ],
    [
      "vi. 吃早餐（正式）",
      "We usually breakfast on fruit and toast."
    ]
  ],
  "breakthrough": [
    [
      "n. 突破",
      "The experiment produced a major breakthrough."
    ],
    [
      "adj. 突破性的",
      "The team announced a breakthrough discovery."
    ]
  ],
  "breakup": [
    [
      "n. 分手",
      "The breakup was difficult for both of them."
    ],
    [
      "n. 解体",
      "The breakup of the ice opened a route for ships."
    ]
  ],
  "breathe": [
    [
      "v. 呼吸",
      "Breathe slowly through your nose."
    ],
    [
      "vi. 透气醒酒",
      "Let the wine breathe before serving it."
    ],
    [
      "v. 低声说（文学）",
      "He could only breathe a few words of thanks."
    ]
  ],
  "breed": [
    [
      "v. 繁殖",
      "These birds breed on remote islands."
    ],
    [
      "vt. 培育；饲养",
      "They breed horses on the farm."
    ],
    [
      "vt. 引起",
      "Unfair treatment can breed resentment."
    ],
    [
      "n. 品种",
      "This breed tolerates cold weather."
    ]
  ],
  "breeding": [
    [
      "n. 繁殖",
      "The breeding season begins in spring."
    ],
    [
      "n. 教养（旧式）",
      "Her courtesy was regarded as a sign of good breeding."
    ]
  ],
  "breeze": [
    [
      "n. 微风",
      "A cool breeze moved the curtains."
    ],
    [
      "n. 轻而易举的事",
      "The test was a breeze."
    ],
    [
      "vi. 轻松完成（breeze through）",
      "She should breeze through the interview."
    ]
  ],
  "brew": [
    [
      "vt. 酿造",
      "The factory will brew a new beer."
    ],
    [
      "v. 冲泡；浸泡",
      "Let the tea brew for a few minutes."
    ],
    [
      "vi. 酝酿",
      "Trouble may brew if the complaint is ignored."
    ],
    [
      "n. 混合物",
      "The novel is a strange brew of history and fantasy."
    ]
  ],
  "bribe": [
    [
      "vt. 贿赂",
      "They tried to bribe the official."
    ],
    [
      "n. 贿赂物",
      "He refused to accept a bribe."
    ]
  ],
  "brick": [
    [
      "n. 砖",
      "The wall is made of brick."
    ],
    [
      "v. 使设备变砖（非正式）",
      "An interrupted update can brick the device."
    ]
  ],
  "bridge": [
    [
      "n. 桥",
      "The bridge spans the canal."
    ],
    [
      "n. 纽带",
      "The course provides a bridge between study and employment."
    ],
    [
      "n. 鼻梁",
      "Her glasses rested on the bridge of her nose."
    ],
    [
      "n. 琴码",
      "The violin needs a new bridge."
    ],
    [
      "n. 齿桥",
      "The dentist fitted a bridge to replace the missing teeth."
    ],
    [
      "n. 船桥",
      "The captain returned to the bridge."
    ],
    [
      "n. 桥牌",
      "They play bridge every Sunday."
    ],
    [
      "vt. 弥合",
      "The scheme aims to bridge the gap between the two groups."
    ]
  ],
  "brighten": [
    [
      "v. 变明亮",
      "The sky should brighten by noon."
    ],
    [
      "vt. 使愉快",
      "Your letter will brighten her day."
    ]
  ],
  "brilliance": [
    [
      "n. 卓越才华",
      "The solution revealed her mathematical brilliance."
    ],
    [
      "n. 光辉",
      "We admired the brilliance of the stars."
    ]
  ],
  "brilliant": [
    [
      "adj. 才华出众的",
      "She is a brilliant engineer."
    ],
    [
      "adj. 明亮的",
      "A brilliant light filled the room."
    ],
    [
      "adj. 极好的（英非正式）",
      "We had a brilliant holiday."
    ]
  ],
  "brilliantly": [
    [
      "adv. 出色地",
      "The plan worked brilliantly."
    ],
    [
      "adv. 光彩夺目地",
      "The ballroom was brilliantly lit."
    ]
  ],
  "brim": [
    [
      "n. 帽檐",
      "The brim shaded her eyes."
    ],
    [
      "n. 容器上沿",
      "He filled the cup to the brim."
    ],
    [
      "vi. 充溢",
      "Her eyes brim with tears."
    ]
  ],
  "bring": [
    [
      "vt. 带来",
      "Please bring your notes to class."
    ],
    [
      "vt. 造成",
      "The changes may bring new opportunities."
    ]
  ],
  "brink": [
    [
      "n. 即将发生的边缘",
      "The firm was on the brink of collapse."
    ],
    [
      "n. 悬崖边缘（文学）",
      "They stopped at the brink of the ravine."
    ]
  ],
  "briny": [
    [
      "adj. 咸的",
      "The pool contained briny water."
    ],
    [
      "n. 大海（英旧式诙谐）",
      "The narrator longs for a swim in the briny."
    ]
  ],
  "brisk": [
    [
      "adj. 轻快的",
      "We set off at a brisk pace."
    ],
    [
      "adj. 生意兴隆的",
      "The shop reported brisk sales."
    ]
  ],
  "British": [
    [
      "adj. 英国的",
      "She holds a British passport."
    ],
    [
      "n. 英国人（集合）",
      "The exhibition explores how the British travelled in the nineteenth century."
    ]
  ],
  "brittle": [
    [
      "adj. 易碎的",
      "The old plastic has become brittle."
    ],
    [
      "adj. 情绪脆弱的",
      "Her brittle confidence disappeared after the criticism."
    ]
  ],
  "broadcast": [
    [
      "v. 播送",
      "They will broadcast the concert live."
    ],
    [
      "vt. 传播消息",
      "Please do not broadcast my private affairs."
    ],
    [
      "vt. 撒播",
      "Farmers broadcast the seed over the prepared soil."
    ],
    [
      "n. 广播节目",
      "We listened to the evening broadcast."
    ]
  ],
  "broaden": [
    [
      "v. 变宽",
      "The path begins to broaden here."
    ],
    [
      "vt. 扩大；开阔",
      "Travel can broaden your understanding of other cultures."
    ]
  ],
  "bronze": [
    [
      "n. 青铜",
      "The bell was cast in bronze."
    ],
    [
      "n. 青铜雕像",
      "A small bronze stood on the table."
    ],
    [
      "n. 铜牌",
      "The athlete won bronze in the final."
    ]
  ],
  "brood": [
    [
      "n. 一窝雏鸟",
      "The bird returned to feed its brood."
    ],
    [
      "vi. 忧思",
      "Do not brood over one disappointing result."
    ]
  ],
  "brook": [
    [
      "n. 小溪",
      "A brook flows behind the cottage."
    ],
    [
      "vt. 容忍（正式）",
      "The director will brook no interference."
    ]
  ],
  "brown": [
    [
      "adj. 棕色的",
      "He wore a brown jacket."
    ],
    [
      "adj. 未精制的",
      "The recipe calls for brown rice."
    ],
    [
      "v. 煎炒至褐色",
      "Brown the mushrooms before adding the stock."
    ]
  ],
  "browse": [
    [
      "v. 随意逛看",
      "We had time to browse in the bookshop."
    ],
    [
      "v. 浏览网页",
      "You can browse the catalogue online."
    ],
    [
      "vi. 吃草叶",
      "Deer browse on the young leaves."
    ]
  ],
  "bruise": [
    [
      "n. 瘀青",
      "A bruise appeared on his arm."
    ],
    [
      "v. 碰伤",
      "Handle the peaches gently so they do not bruise."
    ]
  ],
  "brutal": [
    [
      "adj. 残暴的",
      "The ruler was known for his brutal methods."
    ],
    [
      "adj. 冷酷直率的",
      "She gave a brutal assessment of the plan."
    ]
  ],
  "bubble": [
    [
      "n. 气泡",
      "A bubble rose to the surface."
    ],
    [
      "n. 经济泡沫",
      "The property bubble eventually burst."
    ],
    [
      "n. 封闭的小圈子",
      "The campaign took him outside his social bubble."
    ],
    [
      "vi. 冒泡",
      "The soup began to bubble."
    ],
    [
      "vi. 充满热情",
      "The children bubble with excitement."
    ]
  ],
  "buck": [
    [
      "n. 美元（非正式）",
      "It costs a buck to enter."
    ],
    [
      "n. 雄鹿",
      "A buck emerged from the trees."
    ],
    [
      "vi. 尥蹶子",
      "A frightened horse may buck."
    ],
    [
      "vt. 逆势而行",
      "This company managed to buck the trend."
    ]
  ],
  "buckle": [
    [
      "n. 搭扣",
      "The belt has a silver buckle."
    ],
    [
      "n. 水果酥顶蛋糕（美）",
      "She served a blueberry buckle."
    ],
    [
      "v. 扣紧",
      "Buckle your seat belt."
    ],
    [
      "v. 弯曲变形",
      "The beams may buckle under the load."
    ],
    [
      "vi. 屈服",
      "They refused to buckle under pressure."
    ]
  ],
  "bud": [
    [
      "n. 花蕾",
      "A pink bud appeared on the stem."
    ],
    [
      "vi. 发芽",
      "The trees begin to bud in spring."
    ],
    [
      "n. 老兄（美非正式）",
      "Thanks for your help, bud."
    ]
  ],
  "budge": [
    [
      "v. 移动",
      "The heavy box would not budge."
    ],
    [
      "v. 改变主意",
      "She would not budge on the deadline."
    ]
  ],
  "budget": [
    [
      "n. 预算",
      "The project stayed within budget."
    ],
    [
      "adj. 经济型的",
      "They booked a budget hotel."
    ],
    [
      "v. 计划分配",
      "We must budget enough time for revision."
    ]
  ],
  "buffet": [
    [
      "n. 自助餐（英 /ˈbʊf.eɪ/，美 /bəˈfeɪ/）",
      "The hotel serves a buffet at lunch."
    ],
    [
      "vt. 反复猛击（/ˈbʌf.ɪt/）",
      "Strong winds buffet the coastal buildings."
    ]
  ],
  "bug": [
    [
      "n. 小虫",
      "A bug crawled across the leaf."
    ],
    [
      "n. 小病（非正式）",
      "She caught a stomach bug."
    ],
    [
      "n. 程序错误",
      "The update fixed a serious bug."
    ],
    [
      "n. 窃听器",
      "Investigators found a bug under the desk."
    ],
    [
      "n. 强烈兴趣（非正式）",
      "He caught the travel bug at university."
    ],
    [
      "vt. 烦扰（非正式）",
      "Please do not bug me while I am working."
    ]
  ],
  "buggy": [
    [
      "n. 小型敞篷车",
      "They crossed the dunes in a buggy."
    ],
    [
      "n. 婴儿推车（英）",
      "She folded the buggy before boarding."
    ],
    [
      "n. 单马车",
      "The family travelled by horse and buggy."
    ],
    [
      "adj. 程序错误多的",
      "The first release was buggy."
    ],
    [
      "adj. 虫子多的",
      "It was too buggy to eat outside."
    ]
  ],
  "bugle": [
    [
      "n. 军号",
      "A bugle sounded across the camp."
    ],
    [
      "n. 筋骨草类植物",
      "The bugle spread beneath the trees."
    ]
  ],
  "building": [
    [
      "n. 建筑物",
      "The building has three entrances."
    ],
    [
      "n. 建筑业",
      "He works in the building trade."
    ]
  ],
  "bulb": [
    [
      "n. 灯泡",
      "Replace the broken bulb."
    ],
    [
      "n. 鳞茎",
      "Each bulb produced several leaves."
    ],
    [
      "n. 球状部分",
      "The thermometer's bulb holds the liquid."
    ]
  ],
  "bulge": [
    [
      "vi. 鼓起",
      "The bags bulge with groceries."
    ],
    [
      "n. 凸起",
      "A bulge appeared in the tyre."
    ],
    [
      "n. 短暂激增",
      "The chart shows a bulge in demand."
    ]
  ],
  "bulk": [
    [
      "n. 庞大体积",
      "Its bulk makes the sofa difficult to move."
    ],
    [
      "n. 大部分",
      "The bulk of the work is complete."
    ],
    [
      "n. 大批量（in bulk）",
      "The shop buys rice in bulk."
    ]
  ],
  "bull": [
    [
      "n. 公牛",
      "The bull stood beside the gate."
    ],
    [
      "n. 看涨投资者",
      "The market bull expects prices to rise."
    ],
    [
      "n. 胡说（非正式）",
      "That story is complete bull."
    ],
    [
      "n. 教皇诏书",
      "The archive contains a papal bull from the medieval period."
    ]
  ],
  "bump": [
    [
      "v. 碰撞",
      "Mind that you do not bump your head."
    ],
    [
      "n. 凸起",
      "The car hit a bump in the road."
    ],
    [
      "n. 增长",
      "Sales received a small bump after the advert."
    ],
    [
      "vt. 调离（美非正式）",
      "The new schedule may bump her from the evening shift."
    ]
  ],
  "bumper": [
    [
      "n. 保险杠",
      "The rear bumper was damaged."
    ],
    [
      "adj. 丰收的",
      "Farmers expect a bumper harvest."
    ],
    [
      "n. 弹向头部的短球（板球）",
      "The batter ducked under the bumper."
    ]
  ],
  "bunch": [
    [
      "n. 束",
      "He carried a bunch of flowers."
    ],
    [
      "n. 一群",
      "They are a friendly bunch."
    ],
    [
      "v. 聚拢",
      "Do not let the fabric bunch around the zip."
    ]
  ],
  "bundle": [
    [
      "n. 捆",
      "She tied the papers into a bundle."
    ],
    [
      "n. 一大笔钱（非正式）",
      "The repairs cost a bundle."
    ],
    [
      "vt. 捆绑销售",
      "The company will bundle the software with its laptops."
    ],
    [
      "v. 匆忙推送",
      "They bundle the children into the car."
    ]
  ],
  "bunk": [
    [
      "n. 床位",
      "He slept in the lower bunk."
    ],
    [
      "n. 胡说（旧式非正式）",
      "The report dismissed that claim as bunk."
    ]
  ],
  "buoyant": [
    [
      "adj. 能浮起的",
      "The material is light and buoyant."
    ],
    [
      "adj. 乐观的",
      "The team remained buoyant after the setback."
    ],
    [
      "adj. 繁荣的",
      "Demand remains buoyant."
    ]
  ],
  "burden": [
    [
      "n. 重担；负担",
      "The costs placed a burden on the family."
    ],
    [
      "vt. 使负担",
      "Do not burden yourself with unnecessary duties."
    ]
  ],
  "bureaucracy": [
    [
      "n. 官僚机构",
      "The reform reduced the size of the bureaucracy."
    ],
    [
      "n. 繁文缛节",
      "Applicants face months of bureaucracy."
    ]
  ],
  "burning": [
    [
      "adj. 燃烧的",
      "Smoke rose from the burning shed."
    ],
    [
      "adj. 灼痛的",
      "He felt a burning sensation in his throat."
    ],
    [
      "adj. 迫切的",
      "Housing has become a burning issue."
    ]
  ],
  "burnish": [
    [
      "vt. 擦亮",
      "Burnish the metal with a soft cloth."
    ],
    [
      "vt. 改善形象",
      "The campaign aims to burnish the company's reputation."
    ]
  ],
  "burrow": [
    [
      "n. 洞穴",
      "A rabbit disappeared into its burrow."
    ],
    [
      "v. 挖洞",
      "Moles burrow beneath the lawn."
    ],
    [
      "vi. 翻找",
      "She began to burrow through the papers."
    ]
  ],
  "burst": [
    [
      "v. 爆裂",
      "The pipe may burst in freezing weather."
    ],
    [
      "vi. 突然爆发",
      "The audience burst into laughter."
    ],
    [
      "n. 一阵",
      "A sudden burst of rain sent us indoors."
    ]
  ],
  "bus": [
    [
      "n. 公共汽车",
      "We waited for the bus."
    ],
    [
      "n. 总线",
      "The data travels along the bus."
    ],
    [
      "vt. 用公共汽车运送",
      "They bus the pupils to the sports centre."
    ],
    [
      "vt. 收拾餐具（美）",
      "He helps bus tables during the lunch rush."
    ]
  ],
  "bush": [
    [
      "n. 灌木",
      "A bird nested in the bush."
    ],
    [
      "n. 荒野",
      "They spent a week camping in the bush."
    ]
  ],
  "business": [
    [
      "n. 企业",
      "She runs a small business."
    ],
    [
      "n. 生意",
      "Business improved during the summer."
    ],
    [
      "n. 工作",
      "He is away on business."
    ],
    [
      "n. 私事",
      "That is none of your business."
    ]
  ],
  "bust": [
    [
      "n. 半身像",
      "A marble bust stood in the hall."
    ],
    [
      "n. 胸围",
      "The pattern gives measurements for waist and bust."
    ],
    [
      "n. 逮捕行动（非正式）",
      "The bust followed a lengthy investigation."
    ],
    [
      "vt. 打坏（非正式）",
      "Do not bust the lock."
    ],
    [
      "adj. 破产的",
      "The company went bust."
    ],
    [
      "adj. 坏了的（英非正式）",
      "My old radio is bust."
    ]
  ],
  "bustle": [
    [
      "vi. 忙碌奔走",
      "The staff bustle around the kitchen."
    ],
    [
      "n. 熙攘",
      "We escaped the bustle of the city."
    ],
    [
      "n. 裙撑",
      "The museum displayed a dress with a bustle."
    ]
  ],
  "butcher": [
    [
      "n. 肉贩",
      "The butcher prepared the meat."
    ],
    [
      "vt. 宰杀",
      "The farmers butcher their own livestock."
    ],
    [
      "vt. 糟蹋（非正式）",
      "A poor adaptation can butcher a good novel."
    ]
  ],
  "butt": [
    [
      "n. 烟蒂",
      "He dropped a cigarette butt in the bin."
    ],
    [
      "n. 枪托",
      "The rifle's butt was made of wood."
    ],
    [
      "n. 嘲笑对象",
      "He disliked being the butt of their jokes."
    ],
    [
      "n. 大水桶（英）",
      "Rainwater collects in a butt."
    ],
    [
      "v. 用角撞",
      "The goat tried to butt the fence."
    ]
  ],
  "butter": [
    [
      "n. 黄油",
      "Melt the butter gently."
    ],
    [
      "n. 坚果酱",
      "She spread almond butter on the toast."
    ],
    [
      "n. 水果酱（美）",
      "The shop sells apple butter."
    ],
    [
      "vt. 涂黄油",
      "Butter the dish before adding the mixture."
    ]
  ],
  "butterfly": [
    [
      "n. 蝴蝶",
      "A butterfly settled on the flower."
    ],
    [
      "n. 蝶泳",
      "She swims butterfly in the relay."
    ]
  ],
  "buzz": [
    [
      "vi. 嗡嗡响",
      "Bees buzz around the lavender."
    ],
    [
      "n. 兴奋感",
      "Performing live gives her a buzz."
    ],
    [
      "n. 热议",
      "The launch generated a buzz online."
    ],
    [
      "vt. 低空掠过",
      "The aircraft will buzz the airfield."
    ]
  ],
  "by-product": [
    [
      "n. 副产品",
      "The material is a by-product of steel production."
    ],
    [
      "n. 附带结果",
      "Greater confidence was a welcome by-product of the course."
    ]
  ],
  "bypass": [
    [
      "vt. 绕过",
      "The road will bypass the village."
    ],
    [
      "vt. 不理会程序",
      "They chose to bypass the normal approval process."
    ],
    [
      "n. 绕城道路",
      "The new bypass reduced traffic in town."
    ],
    [
      "n. 搭桥手术",
      "He recovered well after a heart bypass."
    ]
  ],
  "cab": [
    [
      "n. 出租车",
      "We took a cab to the station."
    ],
    [
      "n. 驾驶室",
      "The driver climbed into the cab."
    ]
  ],
  "cabin": [
    [
      "n. 小木屋",
      "They rented a cabin beside the lake."
    ],
    [
      "n. 船舱",
      "Our cabin had two bunks."
    ],
    [
      "n. 飞机客舱",
      "The cabin lights dimmed after takeoff."
    ]
  ]
};
const phPages=new Set('breakfast breakthrough brilliant brilliantly broad-brimmed buffet bull bully burden burgeon butterfly cab'.split(' '));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"011",file:"js/lexicon-review-011.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性、英美音和主要分读；注明语域或专业限制，不穷尽历史与专业义项。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('broad-brimmed').source="https://www.collinsdictionary.com/dictionary/english/broad-brimmed";
get('broad-brimmed').sources=[get('broad-brimmed').source,"https://dictionary.cambridge.org/dictionary/english/brimmed"];
get('brown').sources=[get('brown').source,"https://www.collinsdictionary.com/dictionary/english/brown"];
get('brutal').cn+="；恶劣难熬的（天气等）";
get('bulb').sources=[get('bulb').source,"https://dictionary.cambridge.org/dictionary/learner-english/bulb"];
get('burden').sources=[get('burden').source,"https://dictionary.cambridge.org/dictionary/learner-english/burden"];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"011",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();

