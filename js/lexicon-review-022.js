/* Batch 022: 100 TOEFL high-frequency words, checked 2026-11-17. Glosses summarized; examples original. */
(function(){
const raw=`
flag|n./v.|n. 旗帜；警示标记；铺路石板（英）；vt. 标记；vi. 衰弱、疲乏|flæɡ|flæɡ
flash|n./v./adj.|n. 闪光；闪光灯；短暂显现；v. 闪耀；迅速移动、传递；短暂显露；想法闪现；adj. 炫耀昂贵的（英，非正式）|flæʃ|flæʃ
flavor|n./vt.|n. 味道、风味；特色；vt. 给食物调味（美式拼写，英式 flavour）|ˈfleɪ.vəʳ|ˈfleɪ.vɚ
flee|v.|逃跑；逃离（过去式、过去分词 fled）|fliː|fliː
flexibility|n.|灵活性；适应变化的能力；柔韧性|ˌflek.səˈbɪl.ə.ti|ˌflek.səˈbɪl.ə.t̬i
flip|v./n./adj.|v. 翻转；快速拨动、翻动；翻新后转卖（主要美）；失控、大发脾气（非正式）；n. 快速翻转、翻动；adj. 轻率的（英，非正式）|flɪp|flɪp
float|v./n.|v. 漂浮、漂移；提出想法；使货币浮动；发行股票上市；n. 浮标、浮板；游行彩车；备用零钱（英）；加冰淇淋的饮料|fləʊt|floʊt
flood|n./v.|n. 洪水；大量涌入；v. 淹没、泛滥；涌入；大量寄送、充斥；使发动机供油过多|flʌd|flʌd
flour|n./vt.|n. 面粉；植物磨成的粉；vt. 撒上面粉|flaʊəʳ|ˈflaʊ.ɚ
fluid|n./adj.|n. 流体（液体或气体）；adj. 流动的；流畅的；易变的、不固定的|ˈfluː.ɪd|ˈfluː.ɪd
focus|n./v.|n. 焦点；中心；注意力；清晰度；v. 聚焦、调焦；集中注意力|ˈfəʊ.kəs|ˈfoʊ.kəs
fog|n./v.|n. 雾；迷惘；v. 起雾；使蒙上雾气、使模糊|fɒɡ|fɑːɡ
fold|v./n.|v. 折叠；包裹；交叉双臂；倒闭；n. 折痕、褶皱；地质褶皱；羊栏；归属群体（the fold）|fəʊld|foʊld
folk|n./adj.|n. 人们（美式常用 folks）；父母、家人（folks）；民谣；adj. 民间传统的|fəʊk|foʊk
forbid|vt.|禁止；使不可能、妨碍|fəˈbɪd|fɚˈbɪd
formal|adj./n.|adj. 正式的、官方的；名义上的；正规的；布局规整的；n. 正式舞会|ˈfɔː.məl|ˈfɔːr.məl
format|n./vt.|n. 形式、安排；计算机文件格式；vt. 编排格式；格式化|ˈfɔː.mæt|ˈfɔːr.mæt
formation|n.|形成、成立；构造；队形、阵型|fɔːˈmeɪ.ʃən|fɔːrˈmeɪ.ʃən
former|adj./n.|adj. 以前的、前任的；n. 前者（the former）|ˈfɔː.məʳ|ˈfɔːr.mɚ
formerly|adv.|以前、从前（正式）|ˈfɔː.mə.li|ˈfɔːr.mɚ.li
formula|n.|公式；配方；婴儿配方奶；方法、方案|ˈfɔː.mjə.lə|ˈfɔːr.mjə.lə
forth|adv.|向外；向前；从某时起（正式或文学用语）|fɔːθ|fɔːrθ
fortune|n.|大笔财富；运气；命运、未来；兴衰（常用复数 fortunes）|ˈfɔː.tʃuːn|ˈfɔːr.tʃuːn
foster|v./adj.|v. 寄养、照顾；促进、培养；adj. 寄养的|ˈfɒs.təʳ|ˈfɑː.stɚ
founder|n./vi.|n. 创办人、创建者；vi. 沉没；失败、受挫|ˈfaʊn.dəʳ|ˈfaʊn.dɚ
fraction|n.|分数；一小部分|ˈfræk.ʃən|ˈfræk.ʃən
fragile|adj.|易碎的；脆弱的；健康虚弱的；宿醉不适的（英，非正式）|ˈfrædʒ.aɪl|ˈfrædʒ.əl
fragment|n./v.|n. 碎片、片段；v. 破碎、分裂；使破碎、使分裂|ˈfræɡ.mənt|ˈfræɡ.mənt
frame|n./vt.|n. 框架、画框；体格；电影或影像的一帧；vt. 给…装框；拟定、表达；陷害（非正式）|freɪm|freɪm
fraud|n.|诈骗、欺诈；骗子；冒牌货|frɔːd|frɑːd
frontier|n.|边境、国界；开拓边疆；探索的界限|ˈfrʌn.tɪəʳ|frʌnˈtɪr
frown|vi./n.|vi. 皱眉；n. 皱眉、蹙额的表情|fraʊn|fraʊn
frustration|n.|挫败、沮丧；令人沮丧的事；阻挠|frʌsˈtreɪ.ʃən|frʌsˈtreɪ.ʃən
fuel|n./vt.|n. 燃料；刺激、助长事态的因素；vt. 供给燃料；助长|ˈfjuː.əl|ˈfjuː.əl
functional|adj.|实用的；正常运行的；与职能或功能有关的|ˈfʌŋk.ʃən.əl|ˈfʌŋk.ʃən.əl
fund|n./vt.|n. 基金、专款；资金（funds）；储备（a fund of，英）；vt. 资助|fʌnd|fʌnd
fur|n./v.|n. 毛皮、皮毛；水垢；舌苔；v. 结垢；动脉堵塞（fur up，英）|fɜːʳ|fɝː
furniture|n.|家具（不可数名词）|ˈfɜː.nɪ.tʃəʳ|ˈfɝː.nɪ.tʃɚ
gallery|n.|画廊、美术馆；展厅；剧院楼座、看台；相册、图库|ˈɡæl.ər.i|ˈɡæl.ɚ.i
gap|n.|空隙、缺口；知识或信息的不足；差距；时间间隔|ɡæp|ɡæp
garbage|n.|垃圾（美）；废话、无价值的东西（不可数）|ˈɡɑː.bɪdʒ|ˈɡɑːr.bɪdʒ
gasoline|n.|汽油（美，口语常用 gas；英式 petrol）|ˈɡæs.əl.iːn|ˈɡæs.əl.iːn
gaze|vi./n.|vi. 凝视、注视；n. 凝视；观察的视角|ɡeɪz|ɡeɪz
gear|n./vt.|n. 齿轮、挡位；装备、衣物；速度、节奏；毒品（英，俚语）；vt. 使适合某种用途（gear to/towards）|ɡɪəʳ|ɡɪr
general|adj./n.|adj. 一般的、普遍的；整体的；非专门的；n. 将军|ˈdʒen.ər.əl|ˈdʒen.ər.əl
generally|adv.|总体而言；通常；普遍地|ˈdʒen.ər.əl.i|ˈdʒen.ər.əl.i
generate|vt.|产生、引起；发电|ˈdʒen.ə.reɪt|ˈdʒen.ə.reɪt
generous|adj.|慷慨的、大方的；宽厚的；数量充足的、比一般多的|ˈdʒen.ər.əs|ˈdʒen.ər.əs
genetic|adj.|基因的；遗传的|dʒəˈnet.ɪk|dʒəˈnet̬.ɪk
genius|n.|天才；非凡才智、天赋|ˈdʒiː.ni.əs|ˈdʒiː.ni.əs
gentle|adj.|温柔的；柔和的；轻微的；平缓的|ˈdʒen.təl|ˈdʒen.t̬əl
genuine|adj.|真的、非伪造的；真诚的|ˈdʒen.ju.ɪn|ˈdʒen.ju.ɪn
giant|n./adj.|n. 巨人；巨头、杰出人物；巨星（天文）；adj. 巨大的|ˈdʒaɪ.ənt|ˈdʒaɪ.ənt
gifted|adj.|有天赋的；聪明的|ˈɡɪf.tɪd|ˈɡɪf.t̬ɪd
glimpse|n./vt.|n. 一瞥；初步了解；vt. 瞥见|ɡlɪmps|ɡlɪmps
global|adj.|全球的；整体的、全面的|ˈɡləʊ.bəl|ˈɡloʊ.bəl
goal|n.|目标；球门；进球、得分|ɡəʊl|ɡoʊl
govern|v.|治理、统治；支配、影响|ˈɡʌv.ən|ˈɡʌv.ɚn
governor|n.|州长、地区长官；机构负责人；理事、校董（英）|ˈɡʌv.ən.əʳ|ˈɡʌv.ɚ.nɚ
grab|v./n.|v. 猛然抓住；迅速获取、抓住机会；吸引注意；n. 突然一抓、夺取|ɡræb|ɡræb
graduate|n./v./adj.|n. 毕业生（英通常指大学毕业生）；v. 毕业；使毕业（美）；逐步进展；adj. 研究生的（美）|ˈɡrædʒ.u.ət|ˈɡrædʒ.u.ət
grain|n.|谷物、谷粒；颗粒；少量；木材等的纹理|ɡreɪn|ɡreɪn
grand|adj./n.|adj. 宏伟的；重要的；大规模的；极好的（非正式）；n. 一千英镑或美元（非正式，复数不变）；三角钢琴|ɡrænd|ɡrænd
graphics|n.|图形、计算机图像；书刊等的配图（复数）；制图学（作单数）|ˈɡræfɪks|ˈɡræfɪks
grasp|vt./n.|vt. 抓住；理解；把握机会；n. 紧握；控制能力；理解|ɡrɑːsp|ɡræsp
grateful|adj.|感激的、感谢的|ˈɡreɪt.fəl|ˈɡreɪt.fəl
grip|v./n.|v. 紧握；抓地；吸引；强烈感情控制；n. 紧握；控制；旅行包（旧式）|ɡrɪp|ɡrɪp
guarantee|n./vt.|n. 保证、承诺；保修；担保；vt. 保证；保修；担保|ˌɡær.ənˈtiː|ˌɡer.ənˈtiː
hall|n.|门厅（主要英式）；走廊；大厅、礼堂；大学宿舍（英）|hɔːl|hɑːl
hallway|n.|门厅；走廊|ˈhɔːl.weɪ|ˈhɑːl.weɪ
handful|n.|一把；少数、少量；难管的人或事|ˈhænd.fʊl|ˈhænd.fʊl
handle|n./v.|n. 把手、柄；名字、绰号、社媒用户名；v. 处理；负责；触摸；操纵；车辆操控表现；买卖商品|ˈhæn.dəl|ˈhæn.dəl
hang|v./n.|v. 悬挂、垂下；绞死；逗留、闲待（非正式）；计算机卡住；转弯（美，非正式）；n. 垂挂的样子；诀窍（get the hang of）|hæŋ|hæŋ
hardly|adv.|几乎不；刚刚、才；绝不、并不|ˈhɑːd.li|ˈhɑːrd.li
hardware|n.|计算机硬件；五金工具、器材；军事装备；奖杯、奖牌（非正式）|ˈhɑːd.weəʳ|ˈhɑːrd.wer
harm|n./vt.|n. 伤害、损害；vt. 伤害、损害|hɑːm|hɑːrm
harmony|n.|和声；和睦、融洽；协调、和谐|ˈhɑː.mə.ni|ˈhɑːr.mə.ni
harsh|adj.|严厉的、残酷的；刺耳、刺眼或刺激性强的；恶劣的|hɑːʃ|hɑːrʃ
harvest|n./v.|n. 收获、收成；收获季节；v. 收割、采集；收集可用资源|ˈhɑː.vɪst|ˈhɑːr.vəst
haul|vt./n.|vt. 用力拖拉；长途运输；强迫某人到场；n. 一批所得物、赃物或渔获；艰难旅程|hɔːl|hɑːl
hazard|n./vt.|n. 危险因素、隐患；高尔夫障碍区；vt. 冒险提出猜测、建议等|ˈhæz.əd|ˈhæz.ɚd
head|n./v./adj.|n. 头；头脑；负责人；顶端、前部；人或牲畜的计数单位；v. 朝某方向前进；领导；居于前列；用头顶球；adj. 主要的、首席的|hed|hed
headquarters|n.|总部；总指挥部；总部管理层（单复数同形）|ˌhedˈkwɔː.təz|ˈhedˌkwɔːr.t̬ɚz
heal|v.|使康复、愈合；缓和创伤、修复关系|hiːl|hiːl
heaven|n.|天堂；极乐；天空（the heavens）|ˈhev.ən|ˈhev.ən
heel|n./vt.|n. 脚后跟；鞋跟；手掌根部；面包端头；卑鄙的人（旧式，非正式）；vt. 修理鞋跟；用脚跟向后踢球（橄榄球）|hiːl|hiːl
height|n.|高度、身高；离地高度；高处（heights）；顶峰、最盛时期（the height of）|haɪt|haɪt
helpful|adj.|有帮助的、有用的；乐于助人的|ˈhelp.fəl|ˈhelp.fəl
herb|n.|香草；药草；烹饪或药用植物|hɜːb|ɝːb
hesitate|vi.|犹豫、迟疑；因不安或不确定而停顿|ˈhez.ɪ.teɪt|ˈhez.ə.teɪt
hide|v./n.|v. 躲藏；隐藏、遮掩；隐瞒；n. 兽皮；观鸟或观察野生动物的隐蔽处（英）|haɪd|haɪd
highlight|vt./n.|vt. 强调、突出；用颜色标记；n. 最精彩或最重要部分；挑染发束；画面高光部分|ˈhaɪ.laɪt|ˈhaɪ.laɪt
hike|n./v.|n. 徒步远足；价格等的大幅上涨；vi. 远足；vt. 提高价格等|haɪk|haɪk
hint|n./v.|n. 暗示；提示、窍门；少许、迹象；v. 暗示|hɪnt|hɪnt
Hispanic|adj./n.|adj. 西班牙语国家的、与其文化或居民有关的（尤指拉美）；n. 西班牙语国家的人或其后裔（尤指拉美裔）|hɪˈspæn.ɪk|hɪˈspæn.ɪk
honor|n./vt.|n. 荣誉、尊敬；荣幸；正直、名誉；vt. 向…表示敬意；履行承诺；兑现票据（美式拼写，英式 honour）|ˈɒn.əʳ|ˈɑː.nɚ
hook|n./v.|n. 钩；钩拳；歌曲的抓耳片段；吸引顾客的卖点；v. 钩住、挂住；钓到；吸引|hʊk|hʊk
horizon|n.|地平线；视野、见识（horizons）；土层、岩层（地质）；考古学文化层|həˈraɪ.zən|həˈraɪ.zən
hormone|n.|激素、荷尔蒙|ˈhɔː.məʊn|ˈhɔːr.moʊn
horn|n.|动物的角、角质；汽车喇叭；号、圆号|hɔːn|hɔːrn
`;
const readings={
  "fragment": [
    {
      "label": "n. 碎片、片段",
      "uk": "ˈfræɡ.mənt",
      "us": "ˈfræɡ.mənt"
    },
    {
      "label": "v. 分裂、使破碎",
      "uk": "fræɡˈment",
      "us": "fræɡˈment"
    }
  ],
  "graduate": [
    {
      "label": "n. 毕业生",
      "uk": "ˈɡrædʒ.u.ət",
      "us": "ˈɡrædʒ.u.ət"
    },
    {
      "label": "v. 毕业",
      "uk": "ˈɡrædʒ.u.eɪt",
      "us": "ˈɡrædʒ.u.eɪt"
    }
  ],
  "frontier": [
    {
      "label": "n. 边境、边疆",
      "uk": "ˈfrʌn.tɪəʳ",
      "us": "frʌnˈtɪr"
    },
    {
      "label": "n. 英音另一读法",
      "uk": "frʌnˈtɪəʳ",
      "us": "frʌnˈtɪr"
    }
  ]
};
const notes={
  "hang": "悬挂等通常用 hung/hung；绞死义用 hanged/hanged。计算机卡住不是悬挂义；原有变形显示保留区别。",
  "graduate": "区分名词末尾 /ət/ 与动词 /eɪt/；美式 Academic 另列名词及研究生形容词 /ˈɡrædʒ.u.ɪt/，不据此推导英音。",
  "herb": "剑桥主条英音有 /h/、美音无 /h/；不将两种地区读法混为一项。",
  "graphics": "剑桥条目未显示美音，改用 Collins 明列的英美音 /ˈɡræfɪks/；补充其制图学义。",
  "fragment": "名词首音节重读，动词末音节重读，分别保留。",
  "Hispanic": "指西班牙语国家（尤指拉美）的人、后裔和相关文化，不等同于所有拉美人。",
  "foster": "寄养不等于法律意义的收养；同时保留促进、培养义。"
};
const senses={
  "flag": [
    [
      "n. 旗帜",
      "A red flag marks the entrance to the camp."
    ],
    [
      "vt. 标记",
      "Please flag any figures that need checking."
    ],
    [
      "vi. 衰弱",
      "Her energy began to flag after the long climb."
    ]
  ],
  "flash": [
    [
      "n. 闪光灯",
      "The museum does not allow flash photography."
    ],
    [
      "v. 闪耀",
      "Blue lights flash above the emergency exit."
    ]
  ],
  "float": [
    [
      "vi. 漂浮",
      "Small leaves float on the pond."
    ],
    [
      "vt. 提出想法",
      "May I float a different proposal?"
    ],
    [
      "n. 游行彩车",
      "The parade's final float carried a huge paper dragon."
    ]
  ],
  "fluid": [
    [
      "n. 流体",
      "The pipe carries fluid into the tank."
    ],
    [
      "adj. 易变的",
      "Our travel plans remain fluid."
    ],
    [
      "adj. 流畅的",
      "The dancer moved with a fluid grace."
    ]
  ],
  "fold": [
    [
      "vt. 折叠",
      "Fold the map along the dotted line."
    ],
    [
      "vi. 倒闭",
      "The small business may fold without new orders."
    ],
    [
      "n. 褶皱",
      "Dust collected in every fold of the curtain."
    ]
  ],
  "former": [
    [
      "adj. 前任的",
      "The former director now teaches economics."
    ],
    [
      "n. 前者",
      "Of tea and coffee, I prefer the former."
    ]
  ],
  "formula": [
    [
      "n. 公式",
      "This formula gives the area of a circle."
    ],
    [
      "n. 婴儿配方奶",
      "The shop sells several brands of infant formula."
    ]
  ],
  "fortune": [
    [
      "n. 财富",
      "Restoring the house cost a fortune."
    ],
    [
      "n. 运气",
      "Good fortune brought the missing dog home."
    ]
  ],
  "foster": [
    [
      "v. 寄养",
      "They foster children who need a temporary home."
    ],
    [
      "vt. 促进",
      "Shared projects can foster trust between teams."
    ]
  ],
  "founder": [
    [
      "n. 创办人",
      "The founder donated her shares to a charity."
    ],
    [
      "vi. 沉没",
      "A damaged ship can founder in rough seas."
    ],
    [
      "vi. 失败",
      "The talks may founder over the funding question."
    ]
  ],
  "fragment": [
    [
      "n. 碎片",
      "A fragment of pottery lay beneath the floor."
    ],
    [
      "v. 分裂",
      "Political disputes can fragment a movement."
    ]
  ],
  "frame": [
    [
      "n. 画框",
      "The photograph needs a wider frame."
    ],
    [
      "vt. 陷害",
      "They tried to frame the guard for the theft."
    ],
    [
      "vt. 表达",
      "How would you frame that question more clearly?"
    ]
  ],
  "fraud": [
    [
      "n. 诈骗",
      "The accountant discovered evidence of fraud."
    ],
    [
      "n. 骗子",
      "The supposed expert turned out to be a fraud."
    ]
  ],
  "fuel": [
    [
      "n. 燃料",
      "The station has enough fuel for another week."
    ],
    [
      "vt. 助长",
      "Unanswered questions can fuel public suspicion."
    ]
  ],
  "fund": [
    [
      "n. 基金",
      "The fund supports research into clean energy."
    ],
    [
      "vt. 资助",
      "Local donations fund the reading programme."
    ]
  ],
  "gallery": [
    [
      "n. 美术馆",
      "The gallery exhibits work by local painters."
    ],
    [
      "n. 图库",
      "Open the image gallery to choose a photograph."
    ]
  ],
  "gap": [
    [
      "n. 空隙",
      "Water flowed through a gap in the wall."
    ],
    [
      "n. 差距",
      "The report examines the income gap between regions."
    ]
  ],
  "gear": [
    [
      "n. 挡位",
      "The car struggled uphill in third gear."
    ],
    [
      "n. 装备",
      "Store your climbing gear in a dry place."
    ]
  ],
  "general": [
    [
      "adj. 总体的",
      "The survey gives a general picture of local needs."
    ],
    [
      "n. 将军",
      "The general inspected the training camp."
    ]
  ],
  "generous": [
    [
      "adj. 慷慨的",
      "A generous donor paid for the new library."
    ],
    [
      "adj. 充足的",
      "The cafe serves generous portions of soup."
    ]
  ],
  "gentle": [
    [
      "adj. 温柔的",
      "The nurse spoke in a gentle voice."
    ],
    [
      "adj. 平缓的",
      "A gentle slope leads down to the beach."
    ]
  ],
  "giant": [
    [
      "n. 巨头",
      "The company became a giant in the software industry."
    ],
    [
      "adj. 巨大的",
      "A giant screen showed the final score."
    ]
  ],
  "glimpse": [
    [
      "n. 一瞥",
      "We caught a glimpse of the deer through the trees."
    ],
    [
      "vt. 瞥见",
      "You may glimpse the lake between the buildings."
    ]
  ],
  "global": [
    [
      "adj. 全球的",
      "Global trade depends on reliable transport."
    ],
    [
      "adj. 全面的",
      "The report takes a global view of the problem."
    ]
  ],
  "goal": [
    [
      "n. 目标",
      "Our goal is to reduce waste."
    ],
    [
      "n. 进球",
      "Her late goal secured the team's victory."
    ]
  ],
  "govern": [
    [
      "v. 治理",
      "Elected representatives govern the region."
    ],
    [
      "vt. 支配",
      "Safety rules govern every stage of the experiment."
    ]
  ],
  "grab": [
    [
      "vt. 猛然抓住",
      "Grab the rail before the boat moves."
    ],
    [
      "vt. 吸引注意",
      "A striking photograph can grab the reader's attention."
    ]
  ],
  "graduate": [
    [
      "n. 毕业生",
      "The company hired a recent engineering graduate."
    ],
    [
      "vi. 毕业",
      "She hopes to graduate next summer."
    ],
    [
      "adj. 研究生的（美）",
      "He applied to three graduate programmes."
    ]
  ],
  "grain": [
    [
      "n. 谷物",
      "The farm stores grain in a large silo."
    ],
    [
      "n. 少量",
      "There is a grain of truth in the rumour."
    ],
    [
      "n. 纹理",
      "The wood has a fine, even grain."
    ]
  ],
  "grand": [
    [
      "adj. 宏伟的",
      "A grand staircase leads to the ballroom."
    ],
    [
      "n. 一千英镑或美元",
      "The repairs cost nearly three grand."
    ]
  ],
  "grasp": [
    [
      "vt. 抓住",
      "Grasp the handle with both hands."
    ],
    [
      "vt. 理解",
      "I could not grasp the reasoning behind the decision."
    ]
  ],
  "grip": [
    [
      "vt. 紧握",
      "Grip the rope firmly before stepping down."
    ],
    [
      "vt. 吸引",
      "The mystery will grip readers from the opening page."
    ]
  ],
  "handful": [
    [
      "n. 一把",
      "She scattered a handful of seeds on the soil."
    ],
    [
      "n. 少数",
      "Only a handful of visitors stayed until closing."
    ],
    [
      "n. 难管的人",
      "The energetic puppy is quite a handful."
    ]
  ],
  "handle": [
    [
      "n. 把手",
      "The handle came loose from the drawer."
    ],
    [
      "vt. 处理",
      "Our team can handle the remaining requests."
    ],
    [
      "n. 用户名",
      "Her online handle appears below each photograph."
    ]
  ],
  "hang": [
    [
      "v. 悬挂",
      "Hang the towel beside the sink."
    ],
    [
      "v. 绞死",
      "The old law allowed the state to hang convicted murderers."
    ],
    [
      "vi. 计算机卡住",
      "The application may hang when opening a damaged file."
    ]
  ],
  "hardware": [
    [
      "n. 计算机硬件",
      "The upgrade requires no additional hardware."
    ],
    [
      "n. 五金工具",
      "A nearby shop sells hardware and garden tools."
    ]
  ],
  "harmony": [
    [
      "n. 和声",
      "The singers added a delicate harmony to the melody."
    ],
    [
      "n. 和睦",
      "The neighbours have lived in harmony for decades."
    ]
  ],
  "harvest": [
    [
      "n. 收成",
      "This year's harvest filled every storage shed."
    ],
    [
      "vt. 采集资源",
      "The system can harvest rainwater from the roof."
    ]
  ],
  "haul": [
    [
      "vt. 用力拖拉",
      "Two workers haul the heavy cable across the yard."
    ],
    [
      "n. 渔获",
      "The crew returned with a modest haul of fish."
    ]
  ],
  "hazard": [
    [
      "n. 危险因素",
      "The loose wire presents a serious fire hazard."
    ],
    [
      "vt. 冒险提出",
      "I would not hazard a guess without more evidence."
    ]
  ],
  "head": [
    [
      "n. 负责人",
      "The head of the department approved the proposal."
    ],
    [
      "vi. 前进",
      "We should head north before sunset."
    ],
    [
      "vt. 用头顶球",
      "He tried to head the ball past the goalkeeper."
    ]
  ],
  "heal": [
    [
      "v. 愈合",
      "Small cuts usually heal quickly."
    ],
    [
      "vt. 修复关系",
      "Honest discussion may help heal the divisions."
    ]
  ],
  "heaven": [
    [
      "n. 天堂",
      "The painting depicts angels in heaven."
    ],
    [
      "n. 极乐",
      "A quiet afternoon by the lake was heaven."
    ]
  ],
  "heel": [
    [
      "n. 脚后跟",
      "The new boot rubbed against my heel."
    ],
    [
      "n. 手掌根部",
      "Press gently with the heel of your hand."
    ]
  ],
  "height": [
    [
      "n. 高度",
      "The platform's height can be adjusted."
    ],
    [
      "n. 最盛时期",
      "The festival takes place at the height of summer."
    ]
  ],
  "hide": [
    [
      "vt. 隐藏",
      "The children hide their gifts in a cupboard."
    ],
    [
      "n. 兽皮",
      "The bag is made from a single animal hide."
    ],
    [
      "n. 观鸟隐蔽处（英）",
      "We watched the ducks from a wooden hide."
    ]
  ],
  "highlight": [
    [
      "vt. 强调",
      "These findings highlight the need for further study."
    ],
    [
      "n. 最精彩部分",
      "The night walk was the highlight of our trip."
    ]
  ],
  "hike": [
    [
      "n. 徒步远足",
      "We planned a short hike through the forest."
    ],
    [
      "n. 大幅上涨",
      "The latest rent hike surprised the tenants."
    ],
    [
      "vt. 提高价格",
      "The supplier plans to hike its delivery charges."
    ]
  ],
  "hint": [
    [
      "n. 提示",
      "The final hint helped me solve the puzzle."
    ],
    [
      "n. 少许",
      "The sauce has a hint of lemon."
    ],
    [
      "v. 暗示",
      "Her comments hint at a change of policy."
    ]
  ],
  "honor": [
    [
      "n. 荣幸",
      "It is an honor to represent our school."
    ],
    [
      "vt. 履行",
      "The firm promised to honor the agreement."
    ]
  ],
  "hook": [
    [
      "n. 钩",
      "Hang the bag on the hook beside the door."
    ],
    [
      "n. 歌曲抓耳片段",
      "The song has an unforgettable hook."
    ],
    [
      "vt. 吸引",
      "The opening scene should hook the audience."
    ]
  ],
  "horizon": [
    [
      "n. 地平线",
      "A dark shape appeared on the horizon."
    ],
    [
      "n. 视野",
      "Learning another language can broaden your horizons."
    ]
  ],
  "horn": [
    [
      "n. 角",
      "The carving was made from animal horn."
    ],
    [
      "n. 喇叭",
      "The driver sounded the horn at the crossing."
    ],
    [
      "n. 圆号",
      "She plays the horn in the school orchestra."
    ]
  ]
};
const phPages=new Set("formula fuel frame fraud frown furniture general grain guarantee graduate".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-17",batch:"022",file:"js/lexicon-review-022.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性及英美音；中文释义为归纳，例句为原创，专业、地区或语域差异另作说明。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('graphics').sources=[get('graphics').source,'https://www.collinsdictionary.com/dictionary/english/graphics'];
get('graphics').pronunciationSource='https://www.collinsdictionary.com/dictionary/english/graphics';
get('flip').sources=[get('flip').source,'https://dictionary.cambridge.org/dictionary/learner-english/flip'];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"022",checkedOn:"2026-11-17",words:records.map(r=>r.w),note:"托福高频接续批次；核对多义、多词性、同形异音及地区用法，保留逐词来源与原创例句。",deferred:[]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();

