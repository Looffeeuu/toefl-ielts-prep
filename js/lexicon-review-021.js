/* Batch 021: 100 TOEFL high-frequency words, checked 2026-11-17. Glosses summarized; examples original. */
(function(){
const raw=`
enterprise|n.|企业、公司；重要而有难度的事业或计划；创业精神、进取心|ˈen.tə.praɪz|ˈen.t̬ɚ.praɪz
entertain|v.|使感兴趣、使快乐；招待、款待；考虑或接受某种想法、怀有某种看法（正式）|en.təˈteɪn|en.t̬ɚˈteɪn
entertainment|n.|娱乐；娱乐活动、表演；娱乐业；商务招待、应酬|en.təˈteɪn.mənt|en.t̬ɚˈteɪn.mənt
enthusiasm|n.|热情；热忱；极感兴趣的活动或事物|ɪnˈθjuː.zi.æz.əm|ɪnˈθuː.zi.æz.əm
entitle|vt.|使有权做或享有；给书、电影等命名|ɪnˈtaɪ.təl|ɪnˈtaɪ.t̬əl
entitled|adj./v.|adj. 自认为理应享有特权的（贬义）；有权享有的（be entitled to）；v. entitle 的过去式及过去分词，也用于表示题名为|ɪnˈtaɪ.təld|ɪnˈtaɪ.t̬əld
entity|n.|实体；独立存在的事物；有独立法律或财务地位的组织（正式）|ˈen.tɪ.ti|ˈen.t̬ə.t̬i
entrance|n./vt.|n. 入口；进入；登场；进入或入学的权利；vt. 使入迷|ˈen.trəns|ˈen.trəns
entry|n.|进入；加入；入口；记录、条目；参赛、参赛作品或选手；数据录入|ˈen.tri|ˈen.tri
envision|vt.|想象；设想；展望（美式，英式常用 envisage）|ɪnˈvɪʒ.ən|ɪnˈvɪʒ.ən
epidemic|n./adj.|n. 疾病的流行；同时广泛出现的问题；adj. 流行的、广泛发生的|ˌep.ɪˈdem.ɪk|ˌep.əˈdem.ɪk
episode|n.|事件；一段经历；疾病的一次发作；连续剧或广播节目的一集|ˈep.ɪ.səʊd|ˈep.ə.soʊd
equality|n.|平等；同等地位或待遇；相等|iˈkwɒl.ə.ti|iˈkwɑː.lə.t̬i
equation|n.|等式、方程式；化学反应式；需综合权衡的复杂局面；把两事物等同起来|ɪˈkweɪ.ʒən|ɪˈkweɪ.ʒən
equip|vt.|配备；装备；使具备所需知识或技能|ɪˈkwɪp|ɪˈkwɪp
equipment|n.|设备；装备；器材；配备装备的行为（正式）；不可数，单件用 a piece of equipment|ɪˈkwɪp.mənt|ɪˈkwɪp.mənt
equivalent|adj./n.|adj. 等量的；等值的；相当的；n. 等值物；对应的人或事物|ɪˈkwɪv.əl.ənt|ɪˈkwɪv.əl.ənt
error|n.|错误；差错；计算机程序异常或报错|ˈer.əʳ|ˈer.ɚ
escape|v./n.|v. 逃脱；逃避；避免；漏出；未被注意到；被忘记、一时想不起（escape someone）；n. 逃脱；泄漏；暂避现实的消遣或去处；退出键（Escape）|ɪˈskeɪp|ɪˈskeɪp
essence|n.|本质；实质；精髓；香精、精油或提取物|ˈes.əns|ˈes.əns
estate|n.|庄园；大片私有土地；遗产；住宅区或工业区（英式）；旅行车（英式）；状态（旧用法）|ɪˈsteɪt|ɪˈsteɪt
ethics|n.|伦理学（学科名作单数）；道德准则、职业规范；行为的道德正当性|ˈɛθɪks|ˈɛθɪks
ethnic|adj.|族群的；民族文化的；具有非西方文化特色的（有时带冒犯性）|ˈeθ.nɪk|ˈeθ.nɪk
evaluate|vt.|评价；评估；估算质量、重要性、数量或价值|ɪˈvæl.ju.eɪt|ɪˈvæl.ju.eɪt
eventually|adv.|最终；终于（尤指经过较长时间、努力或困难）|ɪˈven.tʃu.ə.li|ɪˈven.tʃu.ə.li
evident|adj.|明显的；显而易见的|ˈev.ɪ.dənt|ˈev.ə.dənt
evolution|n.|生物进化；逐渐演变、发展|ˌiː.vəˈluː.ʃən|ˌev.əˈluː.ʃən
exact|adj./vt.|adj. 准确的；精确的；完全相同的；vt. 索取、强求并取得；造成某种代价或损失（exact a toll）；实施报复（exact revenge）|ɪɡˈzækt|ɪɡˈzækt
exceed|vt.|超过数量或限度；超出允许范围；胜过|ɪkˈsiːd|ɪkˈsiːd
excellent|adj.|极好的；优秀的；卓越的|ˈek.səl.ənt|ˈek.səl.ənt
exception|n.|例外；除外；异议或不悦（take exception to）；程序异常（计算机）；保险不承保的风险|ɪkˈsep.ʃən|ɪkˈsep.ʃən
excessive|adj.|过多的；过度的|ekˈses.ɪv|ekˈses.ɪv
exchange|n./vt.|n. 交换；交流；交谈或争论；互访交流；证券交易所；vt. 交换；兑换；调换商品|ɪksˈtʃeɪndʒ|ɪksˈtʃeɪndʒ
excitement|n.|兴奋；激动；刺激；令人兴奋的事件|ɪkˈsaɪt.mənt|ɪkˈsaɪt.mənt
exciting|adj.|令人兴奋的；令人激动的；刺激的|ɪkˈsaɪ.tɪŋ|ɪkˈsaɪ.t̬ɪŋ
exclude|vt.|不包括；排除；阻止进入或参加|ɪksˈkluːd|ɪksˈkluːd
exclusive|adj./n.|adj. 专用的、独家的；仅限某人或群体的；高档而排外的；不包括（exclusive of）；互斥的（mutually exclusive）；n. 独家报道|ɪksˈkluː.sɪv|ɪksˈkluː.sɪv
exclusively|adv.|仅仅；专门地；独家地|ɪksˈkluː.sɪv.li|ɪksˈkluː.sɪv.li
excuse|vt./n.|vt. 原谅；为…开脱；免除出席或某项义务；n. 借口；理由；由头|ɪkˈskjuːz|ɪkˈskjuːz
execute|vt./vi.|vt. 执行；实施；完成动作或演出；运行程序或指令；处决；执行遗嘱；vi. 成功落实业务计划（商务）|ˈek.sɪ.kjuːt|ˈek.sə.kjuːt
execution|n.|执行；实施；表演或动作的完成；处决；证券交易的成交执行|ˌek.sɪˈkjuː.ʃən|ˌek.səˈkjuː.ʃən
exhaust|vt./n.|vt. 使筋疲力尽；耗尽；穷尽某种话题或可能性；n. 发动机废气；排气管|ɪɡˈzɔːst|ɪɡˈzɑːst
exhibit|v./n.|v. 展出；展示；表现某种品质；n. 展品；展览（美式）；法庭上的物证|ɪɡˈzɪb.ɪt|ɪɡˈzɪb.ɪt
exhibition|n.|展览；展出；技能或品质的展示|ˌek.sɪˈbɪʃ.ən|ˌek.səˈbɪʃ.ən
exist|vi.|存在；实有；生存；在艰难条件下维持生活|ɪɡˈzɪst|ɪɡˈzɪst
exit|n./v.|n. 出口；离开；退场；公路出口；v. 离开；退场；退出程序|ˈek.sɪt|ˈek.sɪt
exotic|adj.|异国情调的；来自远方而新奇的；奇异而吸引人的（形容人有时带冒犯性）|ɪɡˈzɒt.ɪk|ɪɡˈzɑː.t̬ɪk
expand|v.|扩大；扩展；膨胀；详述（expand on）|ɪkˈspænd|ɪkˈspænd
expansion|n.|扩大；扩张；膨胀；扩展|ɪkˈspæn.ʃən|ɪkˈspæn.ʃən
expedition|n.|有特定目的的远征、考察或出行；远征队；迅速办理（正式）|ˌek.spəˈdɪʃ.ən|ˌek.spəˈdɪʃ.ən
experienced|adj.|有经验的；熟练的|ɪkˈspɪə.ri.ənst|ɪkˈspɪr.i.ənst
expertise|n.|专门知识；专业技能；专长（不可数）|ˌek.spɜːˈtiːz|ˌek.spɝːˈtiːz
explode|v.|爆炸、使爆炸；突然发怒或爆发强烈感情；急剧增加；推翻谬论、证明错误|ɪkˈspləʊd|ɪkˈsploʊd
exploration|n.|探索；探险；勘探；对问题的探究或探讨作品|ˌek.spləˈreɪ.ʃən|ˌek.spləˈreɪ.ʃən
explore|v.|探索；考察；探究；探讨可能性或方案|ɪkˈsplɔːʳ|ɪkˈsplɔːr
expose|vt./n.|vt. 露出；揭露；使接触或遭受；使有机会接触新事物；使胶片曝光；n. 揭露性报道（亦拼 exposé，读音与动词不同）|ɪkˈspəʊz|ɪkˈspoʊz
exposure|n.|接触、遭受；揭露；媒体关注；受寒失温；曝光时间或一张底片；房屋朝向；金融风险敞口或投资配置|ɪkˈspəʊ.ʒəʳ|ɪkˈspoʊ.ʒɚ
extend|v.|延长；扩大；延伸；伸出；给予、提供；扩大适用范围|ɪkˈstend|ɪkˈstend
extended|adj.|延长的；持续较久的；比通常更长的|ɪkˈsten.dɪd|ɪkˈsten.dɪd
extension|n.|延长；扩展；增建部分（主要英式）；电话分机；文件扩展名；接发或假睫毛；伸展动作|ɪkˈsten.ʃən|ɪkˈsten.ʃən
extent|n.|范围；面积、长度；数量；程度|ɪkˈstent|ɪkˈstent
external|adj.|外部的；外来的；对外的；外用的；外接的（设备）|ɪkˈstɜː.nəl|ɪkˈstɝː.nəl
extract|vt./n.|vt. 取出、提取；拔出；索取并获得；摘录信息；n. 提取物；节选、摘录|ɪkˈstrækt|ɪkˈstrækt
extraordinary|adj.|不寻常的；非凡的；令人意外的；临时召开的（会议，主要英式）|ɪkˈstrɔː.dɪn.ər.i|ɪkˈstrɔːr.dən.er.i
fabric|n.|织物；布料；结构、基本组成（the fabric of…）|ˈfæb.rɪk|ˈfæb.rɪk
face|n./v.|n. 脸；面容、表情；表面、正面；钟表盘；尊严、面子；v. 面对、正视；面向；给建筑表面覆层|feɪs|feɪs
facility|n.|设施、场所；设备及服务（facilities）；公共厕所（the facilities，委婉语）；天赋、熟练能力；软件或机器的功能；信贷安排或额度|fəˈsɪl.ə.ti|fəˈsɪl.ə.t̬i
faculty|n.|官能、心智能力（常用 faculties）；特殊才能；全体教师（主要美式）；大学的学院或系科群（主要英式）|ˈfæk.əl.ti|ˈfæk.əl.t̬i
fade|v./n.|v. 褪色；逐渐变弱、消失；使褪色；n. 渐隐、淡出；逐渐衰退；渐层短发发型|feɪd|feɪd
faint|adj./vi.|adj. 微弱的；模糊的；轻微的；虚弱得将要昏倒的；vi. 昏厥、晕倒|feɪnt|feɪnt
fairly|adv.|相当、颇（程度低于 very）；公平地、合理地；简直（英式文学强调用法）|ˈfeə.li|ˈfer.li
faith|n.|信任；信心；宗教；宗教信仰|feɪθ|feɪθ
fame|n.|名声；名气；声望|feɪm|feɪm
fantastic|adj.|极好的（非正式）；幻想中的；怪诞的；令人难以置信的；数量巨大的|fænˈtæs.tɪk|fænˈtæs.tɪk
fantasy|n.|幻想；想象；不切实际的愿望；奇幻文学|ˈfæn.tə.si|ˈfæn.tə.si
fascinating|adj.|极有趣的；引人入胜的|ˈfæs.ən.eɪ.tɪŋ|ˈfæs.ən.eɪ.tɪŋ
fashion|n./vt.|n. 时尚；流行款式；时装业；方式、方法；vt. 制作；塑造；构想创造|ˈfæʃ.ən|ˈfæʃ.ən
fatal|adj.|致命的；造成严重后果或失败的|ˈfeɪ.təl|ˈfeɪ.t̬əl
fatigue|n./vt.|n. 极度疲劳；材料疲劳（工程）；军用工作服、杂役（fatigues）；vt. 使极度疲劳（正式）|fəˈtiːɡ|fəˈtiːɡ
fault|n./v.|n. 过错、责任；缺点；故障；发球失误；断层（地质）；vt. 批评、指责；vi. 发球失误|fɒlt|fɑːlt
favorable|adj.|赞同的；正面的；有利的；条件适宜的（美式拼写，英式为 favourable）|ˈfeɪ.vər.ə.bəl|ˈfeɪ.vər.ə.bəl
federal|adj.|联邦中央政府的；联邦制的|ˈfed.ər.əl|ˈfed.ɚ.əl
feed|v./n.|v. 喂养；进食；供养；施肥；向机器或系统输入；提供信息、燃料或传球；n. 饲料；喂食（英式）；机器进料装置；信息流、音视频信号源|fiːd|fiːd
feminist|n./adj.|n. 女权主义者、主张女性获得平等机会和待遇的人；adj. 女权主义的|ˈfem.ɪ.nɪst|ˈfem.ə.nɪst
festival|n.|节日；庆典；音乐节、电影节等一系列活动|ˈfes.tɪ.vəl|ˈfes.tə.vəl
fiber|n.|纤维；纤维组织；膳食纤维；道德品性、意志力（美式拼写，英式为 fibre）|ˈfaɪ.bəʳ|ˈfaɪ.bɚ
fiction|n.|虚构文学；小说；虚构的说法、编造的事|ˈfɪk.ʃən|ˈfɪk.ʃən
fierce|adj.|凶猛的；激烈的；强烈的；困难的（美式非正式）；自信有气场的（非正式）|fɪəs|fɪrs
figure|n./v.|n. 数字、数据；人物；身影；身材；人物画像或塑像；图表；几何图形；v. 认为、估计（非正式）；计算；出现、占有地位（figure in）；合乎情理（it figures）；弄清楚（figure out）|ˈfɪɡ.əʳ|ˈfɪɡ.jɚ
file|n./v.|n. 文件夹；档案；计算机文件；纵队；锉刀；v. 归档；提交申报或诉讼文件；发送新闻稿；排成纵队行进；锉平|faɪl|faɪl
filter|n./v.|n. 过滤器；滤光镜；信息过滤工具；图像滤镜；说话前的自我约束；转向指示灯（英式）；v. 过滤；筛选信息；逐渐透入、传开|ˈfɪl.təʳ|ˈfɪl.tɚ
final|adj./n./vi.|adj. 最后的；最终的；不可更改的；n. 决赛；期末考试（美式）；毕业考试（英式 finals）；vi. 进入决赛（非正式）|ˈfaɪ.nəl|ˈfaɪ.nəl
finance|n./vt.|n. 财务、金融；资金管理；融资、资金；可用资金及财务状况（finances）；vt. 提供资金、资助|ˈfaɪ.næns|ˈfaɪ.næns
financial|adj.|财务的；金融的；与资金管理有关的|faɪˈnæn.ʃəl|faɪˈnæn.ʃəl
fine|adj./adv./n./vt.|adj. 可以接受的、身体好的；优秀的；纤细的、颗粒细的；精细的；晴朗的（主要英式）；糟糕的（反讽）；adv. 很好地；n. 罚款；vt. 处以罚款|faɪn|faɪn
finish|v./n.|v. 完成；结束；吃光、喝光、用完；涂最后一道漆或饰面；n. 结束、终点；表面光洁度；最后一层涂料|ˈfɪn.ɪʃ|ˈfɪn.ɪʃ
firm|adj./adv./n./v.|adj. 结实的、较硬的；稳固的；坚定的；确定的；严格的；adv. 坚定地；n. 公司、事务所；v. 压实；价格趋稳|fɜːm|fɝːm
fist|n.|拳；拳头|fɪst|fɪst
fitness|n.|身体健康、体能；健身；适合性、胜任程度|ˈfɪt.nəs|ˈfɪt.nəs
fixed|adj.|固定不动的；已确定不可变的；固执的；目不转睛的；修好的；已绝育的（美式）；被操纵结果的（比赛）|fɪkst|fɪkst
`;
const readings={
  "entrance": [
    {
      "label": "n.",
      "uk": "ˈen.trəns",
      "us": "ˈen.trəns"
    },
    {
      "label": "vt. 使入迷",
      "uk": "ɪnˈtrɑːns",
      "us": "ɪnˈtræns"
    }
  ],
  "evolution": [
    {
      "label": "n.",
      "uk": "ˌiː.vəˈluː.ʃən",
      "us": "ˌev.əˈluː.ʃən"
    },
    {
      "label": "n. 另一读音",
      "uk": "ˌev.əˈluː.ʃən",
      "us": "ˌiː.vəˈluː.ʃən"
    }
  ],
  "exclusive": [
    {
      "label": "adj.",
      "uk": "ɪksˈkluː.sɪv",
      "us": "ɪksˈkluː.sɪv"
    },
    {
      "label": "n. 独家报道",
      "uk": "ɪkˈskluː.sɪv",
      "us": "ɪkˈskluː.sɪv"
    }
  ],
  "excuse": [
    {
      "label": "vt.",
      "uk": "ɪkˈskjuːz",
      "us": "ɪkˈskjuːz"
    },
    {
      "label": "n.",
      "uk": "ɪkˈskjuːs",
      "us": "ɪkˈskjuːs"
    }
  ],
  "exit": [
    {
      "label": "n./v.",
      "uk": "ˈek.sɪt",
      "us": "ˈek.sɪt"
    },
    {
      "label": "n./v. 另一读音",
      "uk": "ˈeɡ.zɪt",
      "us": "ˈeɡ.zɪt"
    }
  ],
  "expose": [
    {
      "label": "vt.",
      "uk": "ɪkˈspəʊz",
      "us": "ɪkˈspoʊz"
    },
    {
      "label": "n. 揭露性报道（亦拼 exposé）",
      "uk": "ekˈspəʊzeɪ",
      "us": "ˌekspəʊˈzeɪ"
    }
  ],
  "extract": [
    {
      "label": "vt.",
      "uk": "ɪkˈstrækt",
      "us": "ɪkˈstrækt"
    },
    {
      "label": "n.",
      "uk": "ˈek.strækt",
      "us": "ˈek.strækt"
    }
  ],
  "fault": [
    {
      "label": "n./v. 剑桥学习词典",
      "uk": "fɒlt",
      "us": "fɑːlt"
    },
    {
      "label": "n./v. 英式另一读音（剑桥商务词典）",
      "uk": "fɔːlt",
      "us": "fɑːlt"
    }
  ],
  "finance": [
    {
      "label": "n./vt. 剑桥主读音",
      "uk": "ˈfaɪ.næns",
      "us": "ˈfaɪ.næns"
    },
    {
      "label": "n./vt. 另一读音（Collins）",
      "uk": "fɪˈnæns",
      "us": "fəˈnæns"
    }
  ],
  "financial": [
    {
      "label": "adj.",
      "uk": "faɪˈnæn.ʃəl",
      "us": "faɪˈnæn.ʃəl"
    },
    {
      "label": "adj. 另一读音",
      "uk": "fɪˈnæn.ʃəl",
      "us": "fəˈnæn.ʃəl"
    }
  ]
};
const notes={
  "enterprise": "公司、事业计划与进取心分开，不把进取精神误当企业实体。",
  "entertain": "保留招待与正式的考虑、怀有想法义，不限娱乐。",
  "entitled": "贬义形容词自认为理应享有特权，与 be entitled to 的正当权利、entitle 的分词区别；后两者另链 entitle。",
  "entrance": "名词入口前重音；动词使入迷后重音，英 /ɑː/、美 /æ/ 分列。",
  "equipment": "不可数，不能按中文设备的数量直接加 -s；单件用 a piece of equipment。",
  "equality": "社会平等据剑桥，相等的一般义另据 Collins 核对。",
  "ethics": "英美音均直接采用 Collins 本词条的明示记录 /ˈɛθɪks/，不从 ethic 加尾音推填；伦理学与道德规范分别处理。",
  "ethnic": "族群共享文化、语言、历史等，不简单等同于生物种族；非西方文化特色用法有时带冒犯性。",
  "eventually": "最终、终于，不是 possibly 的也许或偶然；音标来自独立发音页。",
  "evolution": "生物种群进化与一般逐渐演变分开；保留两种词典明示起音。",
  "exact": "补强求并取得、造成代价等动词用法，不只列形容词。",
  "exclude": "不包括与阻止参加分开；采用剑桥发音页本词的音节划分。",
  "exclusive": "形容词与名词按剑桥主词条各自的音节分界记录；区别属于词典标注，不据此推断为不同音素。",
  "excuse": "动词尾音 /z/、名词 /s/ 分列；原谅、免除义务与借口区别。",
  "exhaust": "动词耗尽与使疲惫分开，名词包括废气及排气管。",
  "expose": "商务词典明示 exposé 亦可拼 expose；揭露性报道的名词与动词曝光、揭露分读，未把所有 exposé 义项无条件套给动词。",
  "exposure": "接触、媒体关注、受寒失温、摄影及金融义分列，不能一律译为暴露。",
  "extract": "动词后重音、名词前重音分别据发音页；提取物与节选分义。",
  "extraordinary": "主音照剑桥本词记录，不将 extra 和 ordinary 的独立读音机械拼接。",
  "expedition": "除考察和考察队外保留正式的迅速办理义。",
  "faculty": "主要美式全体教师与主要英式学院或系科群区分；另有官能和才能。",
  "facility": "设施、能力、软件功能与信贷安排分别标注；the facilities 可委婉指公共厕所。",
  "faint": "微弱、将晕倒与不及物动词昏厥分开。",
  "fairly": "相当低于 very 的程度；另有公平地与文学强调用法。",
  "fashion": "除时尚外补方式，以及制作、塑造的动词用法。",
  "fault": "英美主音据剑桥学习词典；英式 /fɔːlt/ 另由同页商务词典明示，未擅自统一。地质断层与过错、故障分义。",
  "favorable": "美式拼写；有利、适宜义另链 favourable，不将 favorable 误判为不存在。",
  "fiber": "美式拼写，英式 fibre；材料、膳食纤维、道德品性分别核实。",
  "figure": "数字、人物、身影、图表与认为、计算等动词分别核实；多义细目参照 Collins，figure out 另链。",
  "file": "文件、纵队、锉刀及归档、提交、列队行进、锉平分义；读音不随词性改变。",
  "finance": "保留剑桥主读前重音及 Collins 明示的后重音变体；后重音并非动词专用。",
  "financial": "两组词典明示起音分列，英式 /fɪ/ 与美式 /fə/ 不互换。",
  "fine": "可以接受、优秀、精细与罚款分开；糟糕义为反讽，不能无条件当普通负面形容词。",
  "firm": "公司与结实、坚定等形容词分开，补动词压实和价格趋稳。",
  "fitness": "体能、健身与适合性、胜任程度区分。",
  "fixed": "固定、修好、绝育及比赛结果被操纵分开；形容词 /fɪkst/ 不因固定凝视义而误写成 fixedly 的读音。"
};
const senses={
  "enterprise": [
    [
      "n. 企业",
      "The enterprise employs fifty engineers."
    ],
    [
      "n. 事业或计划",
      "Mapping the entire coastline was a difficult enterprise."
    ],
    [
      "n. 进取心",
      "She showed great enterprise in finding new customers."
    ]
  ],
  "entertain": [
    [
      "vt. 使快乐",
      "The puppets entertain children of all ages."
    ],
    [
      "vt. 招待",
      "They often entertain colleagues at home."
    ],
    [
      "vt. 考虑",
      "The committee would not entertain a request without evidence."
    ]
  ],
  "entertainment": [
    [
      "n. 娱乐",
      "The town offers plenty of evening entertainment."
    ],
    [
      "n. 商务招待",
      "The manager reduced the corporate entertainment budget."
    ]
  ],
  "enthusiasm": [
    [
      "n. 热情",
      "Her enthusiasm encouraged the whole group."
    ],
    [
      "n. 极感兴趣的事物",
      "Birdwatching is one of his lifelong enthusiasms."
    ]
  ],
  "entitle": [
    [
      "vt. 使有权享有",
      "These tickets entitle visitors to free parking."
    ],
    [
      "vt. 给作品命名",
      "She chose to entitle the collection Winter Light."
    ]
  ],
  "entitled": [
    [
      "adj. 有权享有的",
      "All members are entitled to a free copy."
    ],
    [
      "adj. 自认为应享特权的",
      "His entitled attitude annoyed the volunteers."
    ]
  ],
  "entrance": [
    [
      "n. 入口",
      "The entrance is on the north side of the building."
    ],
    [
      "n. 登场",
      "The actor made a dramatic entrance."
    ],
    [
      "vt. 使入迷",
      "The shifting colours entrance the young visitors."
    ]
  ],
  "entry": [
    [
      "n. 进入",
      "The guard refused entry after closing time."
    ],
    [
      "n. 条目",
      "Each dictionary entry includes a pronunciation."
    ],
    [
      "n. 参赛作品",
      "Her photograph was the winning entry."
    ]
  ],
  "epidemic": [
    [
      "n. 疾病流行",
      "The epidemic spread rapidly through the region."
    ],
    [
      "n. 广泛出现的问题",
      "The city faced an epidemic of bicycle theft."
    ],
    [
      "adj. 广泛发生的",
      "The shortage has reached epidemic proportions."
    ]
  ],
  "episode": [
    [
      "n. 事件、经历",
      "That episode changed her view of the project."
    ],
    [
      "n. 一集",
      "The final episode will air next week."
    ],
    [
      "n. 一次发作",
      "He described an episode of severe dizziness."
    ]
  ],
  "equation": [
    [
      "n. 方程式",
      "The students solved the equation without a calculator."
    ],
    [
      "n. 化学反应式",
      "Write a balanced chemical equation for the reaction."
    ],
    [
      "n. 等同",
      "The essay challenges the equation of wealth with happiness."
    ]
  ],
  "equip": [
    [
      "vt. 配备",
      "The grant will equip the laboratory with new sensors."
    ],
    [
      "vt. 使具备技能",
      "The course will equip graduates for fieldwork."
    ]
  ],
  "equivalent": [
    [
      "adj. 等值的",
      "The grant provides an equivalent amount in local currency."
    ],
    [
      "n. 对应物",
      "This term has no exact equivalent in English."
    ]
  ],
  "error": [
    [
      "n. 错误",
      "A typing error changed the meaning of the sentence."
    ],
    [
      "n. 程序报错",
      "The application displayed an error when the file was missing."
    ]
  ],
  "escape": [
    [
      "vi. 逃脱",
      "The bird managed to escape through an open window."
    ],
    [
      "vt. 避免",
      "The driver was lucky to escape serious injury."
    ],
    [
      "vi. 漏出",
      "Hot air can escape through gaps in the roof."
    ],
    [
      "vt. 一时想不起",
      "The speaker's name escapes me at the moment."
    ],
    [
      "n. 暂避现实的消遣",
      "Gardening provides an escape from daily worries."
    ]
  ],
  "essence": [
    [
      "n. 本质",
      "The diagram captures the essence of the method."
    ],
    [
      "n. 香精",
      "Add a little vanilla essence to the mixture."
    ]
  ],
  "estate": [
    [
      "n. 庄园",
      "The family opened part of the estate to visitors."
    ],
    [
      "n. 遗产",
      "Her estate was divided between her children."
    ],
    [
      "n. 住宅区（英式）",
      "They moved to a new housing estate."
    ],
    [
      "n. 旅行车（英式）",
      "The estate has enough room for all our camping gear."
    ]
  ],
  "ethics": [
    [
      "n. 伦理学",
      "Ethics is part of the philosophy curriculum."
    ],
    [
      "n. 职业道德规范",
      "The committee reviewed the ethics of the trial."
    ]
  ],
  "evolution": [
    [
      "n. 生物进化",
      "The fossils provide evidence of evolution."
    ],
    [
      "n. 演变",
      "The book traces the evolution of public transport."
    ]
  ],
  "exact": [
    [
      "adj. 精确的",
      "The exact time of arrival is still unknown."
    ],
    [
      "vt. 强求并取得",
      "The ruler could exact payment from every household."
    ],
    [
      "vt. 造成代价",
      "Long working hours exact a heavy toll on family life."
    ]
  ],
  "exception": [
    [
      "n. 例外",
      "The rule applies to everyone without exception."
    ],
    [
      "n. 程序异常",
      "The program raises an exception when the input is invalid."
    ]
  ],
  "exchange": [
    [
      "vt. 交换",
      "The students exchange notes after each lecture."
    ],
    [
      "vt. 调换",
      "You can exchange the jacket for a larger size."
    ],
    [
      "n. 交谈",
      "The interview began with a brief exchange about the weather."
    ],
    [
      "n. 互访交流",
      "She spent a term abroad on a student exchange."
    ],
    [
      "n. 交易所",
      "The company listed its shares on the exchange."
    ]
  ],
  "exclusive": [
    [
      "adj. 专用的",
      "The room is for the exclusive use of researchers."
    ],
    [
      "adj. 高档而排外的",
      "The hotel belongs to an exclusive private club."
    ],
    [
      "n. 独家报道",
      "The newspaper published an exclusive about the discovery."
    ]
  ],
  "excuse": [
    [
      "vt. 原谅",
      "Please excuse my late reply."
    ],
    [
      "vt. 免除义务",
      "The teacher may excuse her from the exercise."
    ],
    [
      "n. 借口",
      "The broken printer was only an excuse for the delay."
    ]
  ],
  "execute": [
    [
      "vt. 执行",
      "The team is ready to execute the rescue plan."
    ],
    [
      "vt. 运行指令",
      "The processor can execute several instructions at once."
    ],
    [
      "vt. 处决",
      "The court ordered the state to execute the prisoner."
    ]
  ],
  "execution": [
    [
      "n. 实施",
      "The idea was promising, but its execution was poor."
    ],
    [
      "n. 表演的完成",
      "The pianist's execution of the difficult passage was precise."
    ],
    [
      "n. 处决",
      "The sentence called for execution."
    ]
  ],
  "exhaust": [
    [
      "vt. 使疲惫",
      "The steep climb can exhaust inexperienced walkers."
    ],
    [
      "vt. 耗尽",
      "Repeated repairs may exhaust our savings."
    ],
    [
      "n. 发动机废气",
      "The tunnel filled with vehicle exhaust."
    ]
  ],
  "exhibit": [
    [
      "vt. 展出",
      "The gallery will exhibit her photographs next month."
    ],
    [
      "vt. 表现品质",
      "The children exhibit remarkable patience."
    ],
    [
      "n. 展品",
      "The oldest exhibit is a stone tool."
    ],
    [
      "n. 法庭物证",
      "The letter was marked as an exhibit at the trial."
    ]
  ],
  "exhibition": [
    [
      "n. 展览",
      "The museum is preparing an exhibition of early maps."
    ],
    [
      "n. 技能展示",
      "The rescue was an exhibition of courage and teamwork."
    ]
  ],
  "exist": [
    [
      "vi. 存在",
      "These records no longer exist."
    ],
    [
      "vi. 维持生活",
      "Few families can exist on such a small income."
    ]
  ],
  "exit": [
    [
      "n. 出口",
      "Keep the emergency exit clear."
    ],
    [
      "n. 公路出口",
      "Take the next exit for the airport."
    ],
    [
      "v. 退出程序",
      "Save your work before you exit."
    ]
  ],
  "expedition": [
    [
      "n. 考察",
      "The expedition explored a remote volcanic island."
    ],
    [
      "n. 考察队",
      "The expedition returned with hundreds of samples."
    ],
    [
      "n. 迅速办理（正式）",
      "The office processed the request with remarkable expedition."
    ]
  ],
  "explode": [
    [
      "vi. 爆炸",
      "The damaged tank could explode."
    ],
    [
      "vi. 急剧增加",
      "Demand began to explode after the product launch."
    ],
    [
      "vt. 推翻谬论",
      "The new evidence may explode the myth."
    ]
  ],
  "exploration": [
    [
      "n. 探险",
      "The vessel was built for polar exploration."
    ],
    [
      "n. 勘探",
      "The company suspended oil exploration."
    ],
    [
      "n. 探讨",
      "The film offers an exploration of family loyalty."
    ]
  ],
  "explore": [
    [
      "vt. 探索",
      "The team will explore the cave system."
    ],
    [
      "vt. 探讨",
      "We need to explore several possible explanations."
    ]
  ],
  "expose": [
    [
      "vt. 露出",
      "The excavation will expose the original floor."
    ],
    [
      "vt. 揭露",
      "The investigation may expose further corruption."
    ],
    [
      "vt. 使接触",
      "The workshops expose students to new techniques."
    ],
    [
      "vt. 使胶片曝光",
      "Do not expose the film before development."
    ],
    [
      "n. 揭露性报道（亦作 exposé）",
      "The magazine published an expose of the company's practices."
    ]
  ],
  "exposure": [
    [
      "n. 接触",
      "The students gained exposure to different research methods."
    ],
    [
      "n. 揭露",
      "The exposure of the fraud shocked investors."
    ],
    [
      "n. 媒体关注",
      "The award brought the artist wider exposure."
    ],
    [
      "n. 受寒失温",
      "The lost hikers needed treatment for exposure."
    ],
    [
      "n. 摄影曝光",
      "The photograph required a long exposure."
    ],
    [
      "n. 金融风险敞口",
      "The bank reduced its exposure to unstable markets."
    ]
  ],
  "extend": [
    [
      "vt. 延长",
      "The college agreed to extend the deadline."
    ],
    [
      "vi. 延伸",
      "The forest extends beyond the northern ridge."
    ],
    [
      "vt. 伸出",
      "Please extend your arm toward the wall."
    ],
    [
      "vt. 给予",
      "We would like to extend our thanks to every volunteer."
    ]
  ],
  "extension": [
    [
      "n. 延期",
      "She requested an extension of the deadline."
    ],
    [
      "n. 电话分机",
      "Ask for extension 204 when you call."
    ],
    [
      "n. 文件扩展名",
      "The file has a different extension."
    ],
    [
      "n. 增建部分",
      "The house needs a small kitchen extension."
    ]
  ],
  "extract": [
    [
      "vt. 提取",
      "The process can extract oil from the seeds."
    ],
    [
      "vt. 索取并获得",
      "The lawyer tried to extract a clear answer."
    ],
    [
      "n. 节选",
      "We read an extract from the report."
    ],
    [
      "n. 提取物",
      "The recipe uses almond extract."
    ]
  ],
  "fabric": [
    [
      "n. 织物",
      "The fabric is made from recycled cotton."
    ],
    [
      "n. 基本结构",
      "Trust is part of the fabric of the community."
    ]
  ],
  "face": [
    [
      "n. 脸",
      "Rain ran down her face."
    ],
    [
      "n. 钟表盘",
      "The watch has a plain white face."
    ],
    [
      "n. 面子",
      "He changed the subject to save face."
    ],
    [
      "vt. 面对",
      "The team must face several difficult decisions."
    ],
    [
      "vi. 面向",
      "The windows face south."
    ]
  ],
  "facility": [
    [
      "n. 设施、场所",
      "The new research facility opens next spring."
    ],
    [
      "n. 天赋或熟练能力",
      "She has a remarkable facility for languages."
    ],
    [
      "n. 软件功能",
      "The application includes a search facility."
    ],
    [
      "n. 信贷额度",
      "The bank approved a new credit facility."
    ]
  ],
  "faculty": [
    [
      "n. 全体教师（主要美式）",
      "The faculty voted to revise the curriculum."
    ],
    [
      "n. 学院（主要英式）",
      "She joined the Faculty of Engineering."
    ],
    [
      "n. 官能",
      "The illness did not affect his mental faculties."
    ]
  ],
  "fade": [
    [
      "vi. 褪色",
      "The curtains may fade in direct sunlight."
    ],
    [
      "vi. 逐渐消失",
      "The noise began to fade as the train left."
    ],
    [
      "n. 渐隐",
      "The scene ends with a slow fade to black."
    ],
    [
      "n. 渐层短发",
      "He asked the barber for a fade."
    ]
  ],
  "faint": [
    [
      "adj. 微弱的",
      "We heard a faint sound behind the wall."
    ],
    [
      "adj. 虚弱将要昏倒的",
      "She felt faint after standing in the heat."
    ],
    [
      "vi. 昏厥",
      "He may faint at the sight of blood."
    ]
  ],
  "fairly": [
    [
      "adv. 相当",
      "The instructions are fairly easy to follow."
    ],
    [
      "adv. 公平地",
      "The judges treated every applicant fairly."
    ]
  ],
  "faith": [
    [
      "n. 信任",
      "She has faith in the team's ability."
    ],
    [
      "n. 宗教信仰",
      "The centre welcomes people of every faith."
    ]
  ],
  "fantastic": [
    [
      "adj. 极好的",
      "The children had a fantastic day at the museum."
    ],
    [
      "adj. 幻想中的",
      "The book is full of fantastic creatures."
    ],
    [
      "adj. 数量巨大的",
      "The painting sold for a fantastic sum."
    ]
  ],
  "fashion": [
    [
      "n. 时尚",
      "Fashion changes quickly in large cities."
    ],
    [
      "n. 方式",
      "They handled the complaint in a professional fashion."
    ],
    [
      "vt. 制作",
      "The children fashion small boats from pieces of wood."
    ]
  ],
  "fatal": [
    [
      "adj. 致命的",
      "The infection can be fatal without treatment."
    ],
    [
      "adj. 导致严重失败的",
      "The plan contained a fatal flaw."
    ]
  ],
  "fatigue": [
    [
      "n. 极度疲劳",
      "The crew showed signs of fatigue."
    ],
    [
      "n. 材料疲劳",
      "Repeated stress caused metal fatigue."
    ],
    [
      "n. 军用工作服（fatigues）",
      "The soldiers wore green fatigues."
    ]
  ],
  "fault": [
    [
      "n. 过错",
      "The delay was not her fault."
    ],
    [
      "n. 故障",
      "The technician found a wiring fault."
    ],
    [
      "n. 断层",
      "The road crosses an active fault."
    ],
    [
      "vt. 指责",
      "We cannot fault their commitment."
    ]
  ],
  "favorable": [
    [
      "adj. 正面的",
      "The proposal received favorable reviews."
    ],
    [
      "adj. 有利的",
      "We waited for favorable weather conditions."
    ]
  ],
  "feed": [
    [
      "vt. 喂养",
      "Please feed the fish before you leave."
    ],
    [
      "vt. 输入",
      "Feed the paper into the slot."
    ],
    [
      "n. 饲料",
      "The farmer ordered more cattle feed."
    ],
    [
      "n. 信息流",
      "The app updates its news feed every minute."
    ]
  ],
  "feminist": [
    [
      "n. 女权主义者",
      "The writer described herself as a feminist."
    ],
    [
      "adj. 女权主义的",
      "The course examines feminist literature."
    ]
  ],
  "fiber": [
    [
      "n. 纤维",
      "A single fiber remained on the microscope slide."
    ],
    [
      "n. 膳食纤维",
      "Beans are a good source of fiber."
    ],
    [
      "n. 道德品性",
      "The crisis tested his moral fiber."
    ]
  ],
  "fiction": [
    [
      "n. 虚构文学",
      "She writes historical fiction."
    ],
    [
      "n. 虚构说法",
      "The story about the missing money was pure fiction."
    ]
  ],
  "fierce": [
    [
      "adj. 凶猛的",
      "The dog gave a fierce growl."
    ],
    [
      "adj. 强烈的",
      "The walkers struggled against a fierce wind."
    ],
    [
      "adj. 激烈的",
      "There is fierce competition for the scholarships."
    ]
  ],
  "figure": [
    [
      "n. 数字",
      "Check each figure in the table."
    ],
    [
      "n. 身影",
      "A dark figure stood at the window."
    ],
    [
      "n. 重要人物",
      "She became a leading figure in the movement."
    ],
    [
      "n. 图表",
      "The results are shown in Figure 2."
    ],
    [
      "n. 几何图形",
      "Draw a four-sided figure on the grid."
    ],
    [
      "vt. 认为（非正式）",
      "I figure that the repairs will take a week."
    ],
    [
      "v. 弄清楚（figure out）",
      "We must figure out why the sensor failed."
    ]
  ],
  "file": [
    [
      "n. 计算机文件",
      "Save the file before closing the program."
    ],
    [
      "n. 锉刀",
      "The carpenter used a file to smooth the edge."
    ],
    [
      "n. 纵队",
      "The hikers walked in single file."
    ],
    [
      "vt. 申报、提交",
      "You must file the application by Friday."
    ],
    [
      "vt. 归档",
      "Please file the invoices by date."
    ],
    [
      "vi. 排成纵队行进",
      "The pupils file into the hall quietly."
    ]
  ],
  "filter": [
    [
      "n. 过滤器",
      "The water passes through a carbon filter."
    ],
    [
      "n. 图像滤镜",
      "The filter gives the photograph a warmer tone."
    ],
    [
      "vt. 筛选",
      "You can filter the results by year."
    ],
    [
      "vi. 逐渐透入",
      "Sunlight began to filter through the leaves."
    ]
  ],
  "final": [
    [
      "adj. 最后的",
      "This is the final chapter of the book."
    ],
    [
      "adj. 不可更改的",
      "The committee's decision is final."
    ],
    [
      "n. 决赛",
      "The team reached the final."
    ],
    [
      "n. 期末考试（美式）",
      "Her chemistry final is next Tuesday."
    ]
  ],
  "finance": [
    [
      "n. 金融",
      "He studied finance before joining the bank."
    ],
    [
      "n. 可用资金（finances）",
      "The charity keeps a close watch on its finances."
    ],
    [
      "vt. 资助",
      "The grant will finance the laboratory upgrade."
    ]
  ],
  "fine": [
    [
      "adj. 身体好的",
      "She feels fine after a good night's sleep."
    ],
    [
      "adj. 优秀的",
      "He is a fine violinist."
    ],
    [
      "adj. 颗粒细的",
      "A layer of fine dust covered the shelf."
    ],
    [
      "adj. 晴朗的（主要英式）",
      "Tomorrow should be fine and dry."
    ],
    [
      "n. 罚款",
      "He paid a fine for parking illegally."
    ],
    [
      "vt. 处以罚款",
      "The council can fine companies that dump waste."
    ]
  ],
  "finish": [
    [
      "v. 完成",
      "We hope to finish the repairs today."
    ],
    [
      "vt. 吃光",
      "Please finish your lunch before we leave."
    ],
    [
      "n. 表面光洁度",
      "The table has a smooth glossy finish."
    ],
    [
      "n. 终点",
      "Both runners reached the finish together."
    ]
  ],
  "firm": [
    [
      "n. 公司",
      "The firm supplies medical equipment."
    ],
    [
      "adj. 结实较硬的",
      "The mattress is firm but comfortable."
    ],
    [
      "adj. 坚定的",
      "She remained firm in her decision."
    ],
    [
      "vt. 压实",
      "Firm the soil gently around the roots."
    ]
  ],
  "fitness": [
    [
      "n. 体能",
      "Regular walking improved her fitness."
    ],
    [
      "n. 胜任程度",
      "The assessment tests fitness for the role."
    ]
  ],
  "fixed": [
    [
      "adj. 固定不可变的",
      "The loan has a fixed interest rate."
    ],
    [
      "adj. 修好的",
      "The broken latch is finally fixed."
    ],
    [
      "adj. 已绝育的（美式）",
      "Both cats are fixed."
    ],
    [
      "adj. 被操纵结果的",
      "Investigators suspected that the match was fixed."
    ]
  ]
};
const phPages=new Set("entrance essence eventually exceed exclude excuse extract fantasy fine fist finance".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-17",batch:"021",file:"js/lexicon-review-021.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性及英美音；中文释义为归纳，例句为原创，专业、地区或语域差异另作说明。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
for(const w of ['ethics','equality','figure','finance','exceed','escape','excuse']) get(w).sources=[get(w).source,'https://www.collinsdictionary.com/dictionary/english/'+w];
get('ethics').pronunciationSource='https://www.collinsdictionary.com/dictionary/english/ethics';
get('finance').pronunciationSources=[get('finance').pronunciationSource,'https://www.collinsdictionary.com/dictionary/english/finance'];
get('entitled').sources=[get('entitled').source,'https://dictionary.cambridge.org/dictionary/english/entitle'];
get('favorable').sources=[get('favorable').source,'https://dictionary.cambridge.org/dictionary/english/favourable'];
get('figure').sources.push('https://dictionary.cambridge.org/dictionary/english/figure-out');
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"021",checkedOn:"2026-11-17",words:records.map(r=>r.w),note:"托福高频接续批次；核对多义、多词性、同形异音和地区用法，保留逐词来源与原创例句。",deferred:[]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,...(r.pronunciationSources?{sources:r.pronunciationSources}:{}),checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
