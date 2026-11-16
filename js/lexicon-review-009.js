/* Batch 009: checked 2026-11-16 against linked dictionary entries.
   Chinese glosses are summaries; examples are original.
   Optional-schwa spacing is flattened; superscript r marks linking r. */
(function(){
const raw=`
bathe|v./n.|洗澡；给…洗澡；用液体洗敷；（光线）洒满；游泳（英）；n. 一次游泳（英正式）|beɪð|beɪð
bathroom|n.|浴室；洗手间；厕所（尤美）|ˈbɑːθ.ruːm|ˈbæθ.ruːm
batter|v./n.|v. 连续猛击；虐待；n. 面糊；击球手|ˈbæt.əʳ|ˈbæt̬.ɚ
battery|n./adj.|电池；电池组；一系列（battery of）；炮组；殴打（法律）；投手和接手的组合（棒球）；adj. 密集笼养的（英）|ˈbæt.ər.i|ˈbæt̬.ɚ.i
battle|n./vi.|n. 战斗；斗争；争执；vi. 奋战；搏斗；努力克服|ˈbæt.əl|ˈbæt̬.əl
bay|n./vi.|n. 海湾；划定的区域或隔间；月桂树；棕色马；vi.（犬、狼）长声吠叫|beɪ|beɪ
beach|n./vt.|n. 海滩；湖滨沙滩；vt. 把船拖上岸；使搁浅|biːtʃ|biːtʃ
beacon|n.|灯塔；信号灯或烽火；无线电导航信标；带来希望的榜样|ˈbiː.kən|ˈbiː.kən
bead|n.|珠子；（液体的）小滴|biːd|biːd
beaded|adj.|用珠子装饰的；布满小滴的|ˈbiː.dɪd|ˈbiː.dɪd
beak|n.|鸟喙；大鼻子（非正式）；法官（英旧式俚语）|biːk|biːk
beam|n./v.|n. 光束；射束；梁；平衡木；v. 笑容满面；发射或传送（光线、信号等）|biːm|biːm
bean|n./vt.|n. 豆；豆荚；脑袋（美旧式非正式）；vt. 击中头部（美非正式）|biːn|biːn
bear|n./v.|n. 熊；v. 忍受；承担；携带；支撑；具有；生育；结（果实）；向某方向转弯|beəʳ|ber
beard|n./vt.|n. 胡须；（贻贝的）足丝；vt. 勇敢面对（令人畏惧的人）；去除（贻贝的）足丝|bɪəd|bɪrd
bearing|n.|轴承；方位；方向；关系；影响（have a bearing on）；举止；风度|ˈbeə.rɪŋ|ˈber.ɪŋ
beast|n.|动物；野兽；凶残或讨厌的人（旧式）|biːst|biːst
beat|v./n./adj.|v. 击败；胜过；反复敲打；搅打；有节奏地跳动或拍动；避开；n. 节拍；敲击声；巡逻或采访区域；adj. 筋疲力尽的（非正式）|biːt|biːt
beautiful|adj.|美丽的；漂亮的；美好的|ˈbjuː.tɪ.fəl|ˈbjuː.t̬ə.fəl
beauty|n.|美；美丽；美人；美好的事物；优点（the beauty of）|ˈbjuː.ti|ˈbjuː.t̬i
beaver|n.|河狸；勤奋工作的人（非正式）|ˈbiː.vəʳ|ˈbiː.vɚ
become|v.|成为；变得（连系动词）；适合；使显得好看（及物，旧式）|bɪˈkʌm|bɪˈkʌm
becoming|adj.|相称的；使人显得好看的（旧式）；另为 become 的现在分词|bɪˈkʌm.ɪŋ|bɪˈkʌm.ɪŋ
bedeck|vt.|装饰；点缀（文学用语，常用被动）|bɪˈdek|bɪˈdek
bedrock|n.|基岩；牢固基础；基本原则|ˈbed.rɒk|ˈbed.rɑːk
bedroom|n.|卧室|ˈbed.ruːm|ˈbed.ruːm
bedsit|n.|兼作起居室和厨房的出租卧室（英）|ˈbed.sɪt|ˈbed.sɪt
beforehand|adv.|预先；事先|bɪˈfɔː.hænd|bɪˈfɔːr.hænd
befuddle|vt.|使迷惑；使糊涂|bɪˈfʌd.əl|bɪˈfʌd.əl
beg|v.|恳求；乞求；乞讨|beɡ|beɡ
beget|vt.|导致；引起（正式）；生育；为…之父（旧式）|bɪˈɡet|bɪˈɡet
beginning|n.|开始；开端；初期；另为 begin 的现在分词|bɪˈɡɪn.ɪŋ|bɪˈɡɪn.ɪŋ
begrudge|vt.|嫉妒（他人所得）；不情愿给予；吝惜（时间或金钱）|bɪˈɡrʌdʒ|bɪˈɡrʌdʒ
beguile|vt.|吸引；迷住；哄骗；诱使（文学用语）|bɪˈɡaɪl|bɪˈɡaɪl
behalf|n.|代表；为了…的利益（主要用于 on behalf of 等短语）|bɪˈhɑːf|bɪˈhæf
behave|vi.|行为；表现；表现得体；（事物在特定条件下）发生作用|bɪˈheɪv|bɪˈheɪv
behavior|n.|行为；举止；表现；（事物的）运行方式（美式拼写，英式 behaviour）|bɪˈheɪ.vjəʳ|bɪˈheɪ.vjɚ
behaviour|n.|行为；举止；表现；（事物的）运行方式（英式拼写，美式 behavior）|bɪˈheɪ.vjəʳ|bɪˈheɪ.vjɚ
belie|vt.|与…不符；造成假象而掩饰；显示…不真实|bɪˈlaɪ|bɪˈlaɪ
belief|n.|相信；信任；信念；看法；信仰|bɪˈliːf|bɪˈliːf
believer|n.|信徒；相信某事正确或有效的人|bɪˈliː.vəʳ|bɪˈliː.vɚ
belittle|vt.|贬低；轻视|bɪˈlɪt.əl|bɪˈlɪt̬.əl
belligerent|adj./n.|adj. 好斗的；好争吵的（贬义）；交战的（正式）；n. 交战国、团体或个人（正式）|bəˈlɪdʒ.ər.ənt|bəˈlɪdʒ.ɚ.ənt
bellows|n.|风箱（复数形式名词）|ˈbel.əʊz|ˈbel.oʊz
belly|n.|肚子；腹部（非正式）；物体圆鼓的部分；机腹|ˈbel.i|ˈbel.i
belong|vi.|应在（某处）；感到归属；属于；是…的成员（belong to）|bɪˈlɒŋ|bɪˈlɑːŋ
beloved|adj./n.|adj. 深爱的；心爱的（正式）；n. 爱人；心爱的人（正式）|bɪˈlʌv.ɪd|bɪˈlʌvd
below|adv./prep.|在…下面；低于（数量、温度、地位等）；在下文|bɪˈləʊ|bɪˈloʊ
belt|n./v.|n. 腰带；传动带；地带；重击（非正式）；v. 系带；猛击；飞奔（非正式）|belt|belt
beneath|prep./adv.|在…下面；在下方；不值得；有失…身份|bɪˈniːθ|bɪˈniːθ
benefactor|n.|捐助者；资助人|ˈben.ɪ.fæk.təʳ|ˈben.ə.fæk.tɚ
beneficial|adj.|有益的；有利的|ˌben.ɪˈfɪʃ.əl|ˌben.əˈfɪʃ.əl
beneficiary|n.|受益人；受惠者；遗产受益人|ˌben.əˈfɪʃ.ər.i|ˌben.əˈfɪʃ.i.er.i
benefit|n./v.|n. 益处；福利；补助金；义演或义卖；v. 使受益；得益于（benefit from）|ˈben.ɪ.fɪt|ˈben.ə.fɪt
benevolent|adj.|仁慈的；乐善好施的；慈善的|bəˈnev.əl.ənt|bəˈnev.əl.ənt
benign|adj.|温和的；和善的；无害的；良性的（医学）|bɪˈnaɪn|bɪˈnaɪn
bent|adj./n.|adj. 弯曲的；不诚实的（英俚语）；决意做某事的（bent on）；n. 天赋；倾向；另为 bend 的过去式及过去分词|bent|bent
bequest|n.|遗赠的财产；遗产|bɪˈkwest|bɪˈkwest
berate|vt.|严厉斥责（正式）|bɪˈreɪt|bɪˈreɪt
bereave|vt.|使丧失亲友；使丧亲（常用被动）|bɪˈriːv|bɪˈriːv
Berlin|n.|柏林（德国首都）|bɜːˈlɪn|bɝːˈlɪn
berth|n./v.|n.（船、火车上的）卧铺；船舶泊位；参赛资格；v.（使船）停泊|bɜːθ|bɝːθ
beset|vt./adj.|vt. 困扰；使遭遇困难；adj. 饱受困扰的（常作表语）|bɪˈset|bɪˈset
besides|adv./prep.|adv. 而且；此外；prep. 除…之外（还）|bɪˈsaɪdz|bɪˈsaɪdz
besiege|vt.|围攻；围住；使应接不暇（请求、投诉等）|bɪˈsiːdʒ|bɪˈsiːdʒ
bespeak|vt.|显示；表明（正式）|bɪˈspiːk|bɪˈspiːk
best|adj./adv./n./vt.|adj. 最好的；adv. 最好地；最；n. 最优秀的人或事物；最佳表现；vt. 击败（正式）|best|best
bestow|vt.|授予；赠予（荣誉或礼物，正式，常接 on/upon）|bɪˈstəʊ|bɪˈstoʊ
bet|v./n.|v. 打赌；下注；敢肯定（非正式）；n. 赌注；打赌；猜测；最佳选择（best bet）|bet|bet
betoken|vt.|预示；表明（旧式）|bɪˈtəʊ.kən|bɪˈtoʊ.kən
betray|vt.|背叛；出卖；违背（承诺）；无意中显露（感情等）|bɪˈtreɪ|bɪˈtreɪ
better|adj./adv./n./vt.|adj. 更好的；好转的；adv. 更好地；更；n. 改善（for the better）；vt. 改善|ˈbet.əʳ|ˈbet̬.ɚ
beverage|n.|饮料（正式）|ˈbev.ər.ɪdʒ|ˈbev.ɚ.ɪdʒ
bewilder|vt.|使迷惑；使不知所措|bɪˈwɪl.dəʳ|bɪˈwɪl.dɚ
bias|n./vt.|n. 偏见；偏好；偏差（统计等）；斜纹方向（纺织）；vt. 使有偏见；使产生偏差|ˈbaɪ.əs|ˈbaɪ.əs
bible|n.|圣经（通常大写 Bible）；某领域的权威参考书|ˈbaɪ.bəl|ˈbaɪ.bəl
bibliography|n.|参考文献目录；专题或作者书目；书目学|ˌbɪb.liˈɒɡ.rə.fi|ˌbɪb.liˈɑː.ɡrə.fi
bicameral|adj.|两院制的（议会、国会等）|ˌbaɪˈkæm.ər.əl|ˌbaɪˈkæm.ɚ.əl
bicker|vi.|为小事争吵；斗嘴（贬义）|ˈbɪk.əʳ|ˈbɪk.ɚ
bicycle|n./vi.|n. 自行车；vi. 骑自行车|ˈbaɪ.sɪ.kəl|ˈbaɪ.sə.kəl
bid|v./n.|v. 出价；投标；争取；叫牌；问候或吩咐（旧式）；n. 出价；投标；努力争取|bɪd|bɪd
bidding|n.|竞价；投标；叫牌；命令或要求（at someone's bidding，旧式）|ˈbɪd.ɪŋ|ˈbɪd.ɪŋ
bigoted|adj.|偏执的；心胸狭隘而排斥异己的（贬义）|ˈbɪɡ.ə.tɪd|ˈbɪɡ.ə.t̬ɪd
bigotry|n.|偏执；偏狭；对不同信仰或生活方式的排斥（贬义）|ˈbɪɡ.ə.tri|ˈbɪɡ.ə.tri
bilateral|adj.|双方的；双边的|ˌbaɪˈlæt.ər.əl|ˌbaɪˈlæt̬.ɚ.əl
bilingual|adj.|熟练使用两种语言的；双语的|baɪˈlɪŋ.ɡwəl|baɪˈlɪŋ.ɡwəl
bill|n./vt.|n. 账单；钞票（美）；法案；鸟喙；vt. 给…开账单；要求付款|bɪl|bɪl
billion|num./n.|十亿；大量（billions of，非正式）；旧英式曾指万亿，现代通常不用此义|ˈbɪl.jən|ˈbɪl.jən
bind|v./n.|v. 捆绑；包扎；装订；结合；凝合；约束；使团结；n. 困境；麻烦差事（非正式）|baɪnd|baɪnd
biochemistry|n.|生物化学；某个生物体的化学组成和过程|ˌbaɪ.əʊˈkem.ɪ.stri|ˌbaɪ.oʊˈkem.ə.stri
biographer|n.|传记作者|baɪˈɒɡ.rə.fəʳ|baɪˈɑː.ɡrə.fɚ
biography|n.|传记；传记写作|baɪˈɒɡ.rə.fi|baɪˈɑː.ɡrə.fi
biological|adj.|生物的；生物学的；生物过程的；亲生的|ˌbaɪ.əˈlɒdʒ.ɪ.kəl|ˌbaɪ.əˈlɑː.dʒɪ.kəl
biologist|n.|生物学家|baɪˈɒl.ə.dʒɪst|baɪˈɑː.lə.dʒɪst
biology|n.|生物学；生物的生命过程和特性|baɪˈɒl.ə.dʒi|baɪˈɑː.lə.dʒi
Birmingham|n.|伯明翰（英国英格兰中部城市；美国阿拉巴马州城市）|ˈbɜː.mɪŋ.əm|ˈbɜ˞ː.mɪŋ.hæm
birth|n.|出生；分娩；出身；起源；诞生|bɜːθ|bɝːθ
bison|n.|野牛（欧洲或北美的大型牛科动物，复数同形）|ˈbaɪ.sən|ˈbaɪ.sən
bite|v./n.|v. 咬；叮；上钩；产生不良影响；表现兴趣；n. 咬；咬伤；一口食物；小餐；刺激的味道；强烈效果|baɪt|baɪt
bitter|adj./adv./n.|adj. 苦的；痛苦的；愤恨的；激烈的；严寒的；adv. 极其（bitter cold）；n. 苦啤酒（英）；苦味酒（bitters）|ˈbɪt.əʳ|ˈbɪt̬.ɚ
`;
const readings={
  "bathroom": [
    {
      "label": "n.",
      "uk": "ˈbɑːθ.ruːm",
      "us": "ˈbæθ.ruːm"
    },
    {
      "label": "n.（另一读音）",
      "uk": "ˈbɑːθ.rʊm",
      "us": "ˈbæθ.rʊm"
    }
  ],
  "bedroom": [
    {
      "label": "n.",
      "uk": "ˈbed.ruːm",
      "us": "ˈbed.ruːm"
    },
    {
      "label": "n.（另一读音）",
      "uk": "ˈbed.rʊm",
      "us": "ˈbed.rʊm"
    }
  ],
  "beloved": [
    {
      "label": "adj.",
      "uk": "bɪˈlʌv.ɪd",
      "us": "bɪˈlʌvd"
    },
    {
      "label": "adj.（另一读音）",
      "uk": "bɪˈlʌvd",
      "us": "bɪˈlʌv.ɪd"
    },
    {
      "label": "n.",
      "uk": "bɪˈlʌv.ɪd",
      "us": "bɪˈlʌv.ɪd"
    }
  ]
};
const notes={
  "beloved": "分别核对名词和形容词：形容词允许两种读音，名词的 -ed 读作 /ɪd/。",
  "becoming": "区分 become 的现在分词与独立形容词；形容词义注明旧式用法。",
  "bear": "补齐承担、忍受、支撑、携带、生育和转向等常用动词义，避免只显示熊。",
  "battery": "区分电池、炮组、系列、棒球组合与法律义；法律义不要求造成身体伤害，另补英式笼养形容词。",
  "bearing": "区分轴承、方位、关系影响与风度四组义项。",
  "billion": "现代通用义为十亿；万亿仅作为旧英式历史用法提示。",
  "Birmingham": "保留词典所列英美读音，城市名分别可指英格兰和美国阿拉巴马州的伯明翰。",
  "bellows": "风箱是复数形式名词，不能由 bellow 的动词义机械推导。",
  "bereave": "主要用于亲友死亡造成的丧失，并常用被动；不泛译为普通剥夺。",
  "bid": "区分竞价、投标、叫牌与旧式问候、吩咐；不同义项的变形需随语境区分。"
};
const senses={
  "bathe": [
    [
      "v. 洗澡；给…洗澡",
      "The nurse helped him bathe."
    ],
    [
      "vt. 洗敷",
      "Bathe the sore area with clean water."
    ],
    [
      "vt. 洒满（光线）",
      "Morning sunshine bathes the valley in gold."
    ],
    [
      "vi. 游泳（英）",
      "Visitors can bathe in the lake."
    ],
    [
      "n. 游泳（英正式）",
      "They went for a bathe before breakfast."
    ]
  ],
  "batter": [
    [
      "vt. 连续猛击",
      "Strong waves batter the harbour wall."
    ],
    [
      "n. 面糊",
      "Dip the vegetables in batter before frying."
    ],
    [
      "n. 击球手",
      "The batter watched the ball carefully."
    ]
  ],
  "battery": [
    [
      "n. 电池",
      "The remote control needs a new battery."
    ],
    [
      "n. 一系列",
      "The device passed a battery of safety tests."
    ],
    [
      "n. 炮组",
      "A coastal battery guarded the entrance to the harbour."
    ],
    [
      "n. 殴打（法律）",
      "The defendant faced a charge of battery."
    ],
    [
      "n. 投手与接手组合（棒球）",
      "The new pitcher and catcher formed an effective battery."
    ],
    [
      "adj. 密集笼养的（英）",
      "The farm has stopped using battery cages."
    ]
  ],
  "bay": [
    [
      "n. 海湾",
      "Fishing boats sheltered in the bay."
    ],
    [
      "n. 划定的区域",
      "Keep the loading bay clear."
    ],
    [
      "n. 月桂树",
      "A bay grows beside the kitchen door."
    ],
    [
      "n. 棕色马",
      "She rode a bay across the field."
    ],
    [
      "vi. 长声吠叫",
      "The hounds began to bay at dusk."
    ]
  ],
  "beach": [
    [
      "n. 海滩",
      "We walked along the beach at sunrise."
    ],
    [
      "vt. 把船拖上岸",
      "The crew decided to beach the boat for repairs."
    ]
  ],
  "beacon": [
    [
      "n. 信号灯",
      "A flashing beacon marked the entrance."
    ],
    [
      "n. 无线电信标",
      "The aircraft followed the radio beacon."
    ],
    [
      "n. 带来希望的榜样",
      "The school became a beacon of hope for the community."
    ]
  ],
  "bead": [
    [
      "n. 珠子",
      "A blue bead fell from her bracelet."
    ],
    [
      "n. 小滴",
      "A bead of sweat ran down his cheek."
    ]
  ],
  "beaded": [
    [
      "adj. 用珠子装饰的",
      "She carried a beaded bag."
    ],
    [
      "adj. 布满小滴的",
      "His forehead was beaded with sweat."
    ]
  ],
  "beam": [
    [
      "n. 光束",
      "A narrow beam of light crossed the room."
    ],
    [
      "n. 梁",
      "The roof rests on a wooden beam."
    ],
    [
      "n. 平衡木",
      "She practised her routine on the beam."
    ],
    [
      "vi. 笑容满面",
      "The proud parents beam at their daughter."
    ],
    [
      "vt. 传送信号",
      "The satellite will beam images back to Earth."
    ]
  ],
  "bean": [
    [
      "n. 豆",
      "A single bean lay on the plate."
    ],
    [
      "vt. 击中头部（美非正式）",
      "The stray ball could bean an unwary spectator."
    ]
  ],
  "bear": [
    [
      "n. 熊",
      "A bear crossed the forest path."
    ],
    [
      "vt. 忍受",
      "I cannot bear the noise."
    ],
    [
      "vt. 承担",
      "The supplier will bear the cost of replacement."
    ],
    [
      "vt. 支撑",
      "These columns bear the weight of the roof."
    ],
    [
      "vt. 携带",
      "The visitors bear gifts for their hosts."
    ],
    [
      "vt. 具有",
      "The two reports bear a striking resemblance."
    ],
    [
      "vt. 生育；结实",
      "These trees bear fruit in autumn."
    ],
    [
      "vi. 转向",
      "At the fork, bear right towards the village."
    ]
  ],
  "beard": [
    [
      "n. 胡须",
      "He keeps his beard neatly trimmed."
    ],
    [
      "n. 贻贝足丝",
      "Remove the beard from each mussel."
    ],
    [
      "vt. 勇敢面对",
      "Few employees would beard the director in his office."
    ],
    [
      "vt. 去除贻贝足丝",
      "Rinse and beard the mussels before cooking."
    ]
  ],
  "bearing": [
    [
      "n. 轴承",
      "The mechanic replaced a worn bearing."
    ],
    [
      "n. 方位",
      "The navigator recorded a bearing of 090 degrees."
    ],
    [
      "n. 关系；影响",
      "The delay has no bearing on the final result."
    ],
    [
      "n. 举止；风度",
      "Her calm bearing reassured the passengers."
    ]
  ],
  "beat": [
    [
      "vt. 击败",
      "Our team hopes to beat the league leaders."
    ],
    [
      "vt. 反复敲打",
      "Do not beat the table with your spoon."
    ],
    [
      "vt. 搅打",
      "Beat the cream until it thickens."
    ],
    [
      "vi. 跳动",
      "I could feel my heart beat faster."
    ],
    [
      "n. 节拍",
      "The dancers moved to a steady beat."
    ],
    [
      "n. 巡逻区域",
      "The officer knows everyone on her beat."
    ],
    [
      "adj. 筋疲力尽的（非正式）",
      "After the long walk, we were completely beat."
    ]
  ],
  "beauty": [
    [
      "n. 美",
      "We admired the beauty of the landscape."
    ],
    [
      "n. 优点",
      "The beauty of this plan is its simplicity."
    ]
  ],
  "become": [
    [
      "v. 变得",
      "The evenings become cooler in September."
    ],
    [
      "vt. 适合；使显得好看（旧式）",
      "Dark colours become her."
    ]
  ],
  "bedrock": [
    [
      "n. 基岩",
      "The tunnel reaches solid bedrock."
    ],
    [
      "n. 牢固基础",
      "Trust is the bedrock of their partnership."
    ]
  ],
  "beg": [
    [
      "v. 恳求",
      "I beg you to reconsider."
    ],
    [
      "vi. 乞讨",
      "The charity helps people who have to beg for food."
    ]
  ],
  "beget": [
    [
      "vt. 引起（正式）",
      "Such restrictions can beget further resentment."
    ],
    [
      "vt. 为…之父（旧式）",
      "The old account says that kings beget heirs to continue their line."
    ]
  ],
  "begrudge": [
    [
      "vt. 嫉妒他人所得",
      "I do not begrudge her success."
    ],
    [
      "vt. 吝惜",
      "He would not begrudge a few minutes to help a neighbour."
    ]
  ],
  "beguile": [
    [
      "vt. 迷住",
      "The singer's gentle voice can beguile an audience."
    ],
    [
      "vt. 哄骗；诱使",
      "The caller tried to beguile him into revealing his password."
    ]
  ],
  "behave": [
    [
      "vi. 举止得体",
      "The children promised to behave during the ceremony."
    ],
    [
      "vi. 在特定条件下表现",
      "Metals behave differently at very low temperatures."
    ]
  ],
  "belligerent": [
    [
      "adj. 好斗的",
      "His belligerent tone ended the discussion."
    ],
    [
      "adj. 交战的",
      "Both belligerent states agreed to a ceasefire."
    ],
    [
      "n. 交战方（正式）",
      "Each belligerent sent a representative to the talks."
    ]
  ],
  "beloved": [
    [
      "adj. 心爱的",
      "She returned to her beloved hometown."
    ],
    [
      "n. 爱人",
      "He wrote a letter to his beloved."
    ]
  ],
  "belt": [
    [
      "n. 腰带",
      "He tightened his belt."
    ],
    [
      "n. 传动带",
      "The machine stopped when the drive belt broke."
    ],
    [
      "n. 地带",
      "The city lies in the tropical belt."
    ],
    [
      "vt. 猛击（非正式）",
      "He threatened to belt the man."
    ],
    [
      "vi. 飞奔（非正式）",
      "The cyclists belt down the hill."
    ]
  ],
  "beneath": [
    [
      "prep. 在…下面",
      "A stream runs beneath the bridge."
    ],
    [
      "prep. 有失身份",
      "She thought the task beneath her."
    ]
  ],
  "benefit": [
    [
      "n. 益处",
      "The main benefit is lower energy use."
    ],
    [
      "n. 福利",
      "Health insurance is an important employee benefit."
    ],
    [
      "n. 义演",
      "The musicians organised a benefit for the shelter."
    ],
    [
      "vt. 使受益",
      "The new bus route will benefit local residents."
    ],
    [
      "vi. 得益",
      "Students benefit from regular feedback."
    ]
  ],
  "benign": [
    [
      "adj. 和善的",
      "She greeted us with a benign smile."
    ],
    [
      "adj. 良性的（医学）",
      "Tests showed that the tumour was benign."
    ]
  ],
  "bent": [
    [
      "adj. 弯曲的",
      "The bent key would not fit the lock."
    ],
    [
      "adj. 决意做",
      "They were bent on completing the journey."
    ],
    [
      "n. 天赋；倾向",
      "She has a natural bent for mathematics."
    ]
  ],
  "berth": [
    [
      "n. 卧铺",
      "I reserved a berth on the overnight train."
    ],
    [
      "n. 泊位",
      "The ferry left its berth at noon."
    ],
    [
      "n. 参赛资格",
      "The team secured a berth in the final."
    ],
    [
      "v. 停泊",
      "Large ships berth at the outer dock."
    ]
  ],
  "besiege": [
    [
      "vt. 围攻",
      "The army prepared to besiege the fortress."
    ],
    [
      "vt. 使应接不暇",
      "Residents besiege the council with complaints about the noise."
    ]
  ],
  "best": [
    [
      "adj. 最好的",
      "This is the best route to the station."
    ],
    [
      "adv. 最好地",
      "She works best in the morning."
    ],
    [
      "n. 最优秀者",
      "We selected the best of the entries."
    ],
    [
      "vt. 击败（正式）",
      "Few players can best her at chess."
    ]
  ],
  "bet": [
    [
      "v. 打赌",
      "They bet on the outcome of the match."
    ],
    [
      "vt. 敢肯定（非正式）",
      "I bet the shop is still open."
    ],
    [
      "n. 猜测",
      "My bet is that the train will be late."
    ],
    [
      "n. 最佳选择（best bet）",
      "Walking is your best bet during the strike."
    ]
  ],
  "betray": [
    [
      "vt. 背叛",
      "She refused to betray her colleagues."
    ],
    [
      "vt. 无意中显露",
      "His shaking hands betray his anxiety."
    ]
  ],
  "better": [
    [
      "adj. 更好的",
      "We need a better solution."
    ],
    [
      "adj. 好转的",
      "I feel much better today."
    ],
    [
      "adv. 更好地",
      "She can explain it better than I can."
    ],
    [
      "vt. 改善",
      "They hope to better conditions in the village."
    ]
  ],
  "bias": [
    [
      "n. 偏见",
      "The report shows a clear political bias."
    ],
    [
      "n. 统计偏差",
      "The sampling method introduced bias into the results."
    ],
    [
      "n. 斜纹方向（纺织）",
      "Cut the fabric on the bias."
    ],
    [
      "vt. 使有偏见",
      "The publicity could bias the jury."
    ]
  ],
  "bible": [
    [
      "n. 圣经",
      "A Bible stood on the shelf."
    ],
    [
      "n. 权威参考书",
      "This handbook is the gardener's bible."
    ]
  ],
  "bibliography": [
    [
      "n. 参考文献目录",
      "Include every cited source in the bibliography."
    ],
    [
      "n. 书目学",
      "She specialises in bibliography and the history of printing."
    ]
  ],
  "bicycle": [
    [
      "n. 自行车",
      "He locked his bicycle outside."
    ],
    [
      "vi. 骑自行车",
      "They bicycle to work every day."
    ]
  ],
  "bid": [
    [
      "v. 出价",
      "Several collectors bid for the painting."
    ],
    [
      "v. 投标",
      "Local firms can bid for the contract."
    ],
    [
      "v. 叫牌",
      "She chose to bid three hearts."
    ],
    [
      "vt. 道别等（旧式）",
      "We bid our guests farewell."
    ],
    [
      "n. 努力争取",
      "His bid for the presidency attracted little support."
    ]
  ],
  "bidding": [
    [
      "n. 竞价",
      "Bidding started at fifty pounds."
    ],
    [
      "n. 叫牌",
      "The partners discussed their bidding system."
    ],
    [
      "n. 命令（旧式）",
      "He returned at his employer's bidding."
    ]
  ],
  "bill": [
    [
      "n. 账单",
      "The electricity bill arrived today."
    ],
    [
      "n. 钞票（美）",
      "She paid with a twenty-dollar bill."
    ],
    [
      "n. 法案",
      "Parliament debated the new bill."
    ],
    [
      "n. 鸟喙",
      "The duck has a broad bill."
    ],
    [
      "vt. 开账单",
      "The hotel will bill you for the extra night."
    ]
  ],
  "bind": [
    [
      "vt. 捆绑",
      "Use string to bind the branches together."
    ],
    [
      "vt. 装订",
      "The printer will bind the pages into a book."
    ],
    [
      "v. 凝合",
      "Add an egg to bind the mixture."
    ],
    [
      "vt. 约束",
      "The agreement will bind both parties."
    ],
    [
      "n. 困境",
      "The unexpected expense put us in a bind."
    ]
  ],
  "biochemistry": [
    [
      "n. 生物化学",
      "She studies biochemistry at university."
    ],
    [
      "n. 生物体的化学过程",
      "The treatment alters the patient's biochemistry."
    ]
  ],
  "biological": [
    [
      "adj. 生物的",
      "The laboratory studies biological processes."
    ],
    [
      "adj. 亲生的",
      "He met his biological father as an adult."
    ]
  ],
  "birth": [
    [
      "n. 出生",
      "The baby's weight was recorded at birth."
    ],
    [
      "n. 出身",
      "She is Canadian by birth."
    ],
    [
      "n. 诞生；起源",
      "The invention marked the birth of a new industry."
    ]
  ],
  "bite": [
    [
      "v. 咬",
      "The dog may bite if frightened."
    ],
    [
      "vi. 产生不良影响",
      "Higher food prices are beginning to bite."
    ],
    [
      "vi. 表现兴趣",
      "We lowered the price, but buyers still would not bite."
    ],
    [
      "n. 咬伤",
      "The insect bite was itchy."
    ],
    [
      "n. 小餐",
      "We stopped for a quick bite."
    ],
    [
      "n. 强烈效果",
      "The satire has real bite."
    ]
  ],
  "bitter": [
    [
      "adj. 苦的",
      "The medicine tastes bitter."
    ],
    [
      "adj. 愤恨的",
      "He remained bitter about the decision."
    ],
    [
      "adj. 激烈的",
      "A bitter dispute divided the committee."
    ],
    [
      "adj. 严寒的",
      "A bitter wind swept across the field."
    ],
    [
      "n. 苦啤酒（英）",
      "He ordered a pint of bitter."
    ]
  ]
};
const phPages=new Set('bear beard bearing beauty becoming bedroom belong beloved bestow bet bid bind biology'.split(' '));
const records=raw.trim().split('\n').map(line=>{
  const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
  return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"009",file:"js/lexicon-review-009.js",
    reason:notes[w]||"依据所链词典核对现代常用学习义、词性和英美音；注明语域及专业限制，释义不穷尽历史或专业用法。",
    senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
    pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('behavior').sources=[get('behavior').source,get('behaviour').source];
get('beard').sources=[get('beard').source,"https://dictionary.cambridge.org/dictionary/english/bearding"];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"009",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[]}]);
for(const r of records){
  window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();

