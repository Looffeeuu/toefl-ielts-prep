/* Batch 017: 100 TOEFL high-frequency words, checked 2026-11-17. Glosses summarized; examples original. */
(function(){
const raw=`
consistently|adv.|始终如一地；一贯地|kənˈsɪs.tənt.li|kənˈsɪs.tənt.li
flame|n./v.|n. 火焰；强烈的感情（文学）；愤怒或侮辱性的网络信息；vi. 燃烧；气得脸红；v. 发送侮辱性网络信息（俚语）|fleɪm|fleɪm
flavour|n./vt.|n. 味道；风味；特色；某事的初步体验；vt. 给…调味；美式拼写 flavor|ˈfleɪ.vəʳ|ˈfleɪ.vɚ
innocent|adj./n.|adj. 无罪的；无辜的；天真的；无恶意的；n. 天真、缺乏世故的人|ˈɪn.ə.sənt|ˈɪn.ə.sənt
lean|v./adj.|v.（使）倾斜；倚靠；adj. 瘦而健康的；（肉）脂肪少的；（时期）收入或食物不足的；精简高效的|liːn|liːn
major|adj./n./vi.|adj. 主要的；重大的；大调的（音乐）；n. 少校；主修科目或主修学生（美国）；重大体育赛事；vi. 主修（major in，美国）|ˈmeɪ.dʒəʳ|ˈmeɪ.dʒɚ
mate|n./v.|n. 伙伴；朋友（英国，非正式）；动物的交配伴侣；配偶；一对物品中的另一个；技工助手；商船船副；马黛茶（另读）；v. 交配；使动物交配|meɪt|meɪt
mean|v./adj./n.|v. 意思是；意味着；打算；对某人很重要；adj. 不友善的；吝啬的（主要为英国）；凶恶的（主要为美国）；破旧的；出色的（非正式）；平均的；n. 平均数；折中办法|miːn|miːn
narrator|n.|叙述者；讲述故事的人；解说员|nəˈreɪ.təʳ|ˈner.eɪ.t̬ɚ
pet|n./v./adj.|n. 宠物；宠儿；讨人喜欢的人（非正式）；vt. 抚摸；vi. 亲吻爱抚（非正式）；adj. 特别喜爱的或在意的|pet|pet
pilot|n./adj./vt.|n. 飞行员；领航员；引火小火苗；试播节目；试点；adj. 试验性的；vt. 驾驶飞机；领航；试行；引导法案等通过|ˈpaɪ.lət|ˈpaɪ.lət
plain|adj./n./adv.|adj. 朴素无装饰的；不加配料的；清楚易懂的；明显的；十足的；相貌平常的；n. 平原；平针（编织）；adv. 完全地（非正式）|pleɪn|pleɪn
plate|n./vt.|n. 盘子；一盘食物；板；印版；书中插图；地壳板块；假牙托板；金银器皿；镀层金属；本垒板（美国棒球）；vt. 给金属物体镀层|pleɪt|pleɪt
poll|n./vt.|n. 民意调查；投票；投票站（the polls）；vt. 对…进行民意调查；在选举中获得票数|pəʊl|poʊl
preserve|vt./n.|vt. 保护；保存；保持；对食物进行防腐处理；n. 果酱或蜜饯；某类人专属的活动或领域；自然保护区（美国）|prɪˈzɜːv|prɪˈzɝːv
process|n./v.|n. 过程；步骤；工序；（身体部位的）突起；vt. 办理；处理数据；加工；逐渐理解、接受经历；冲洗胶片；vi. 缓慢列队行进（主要为英国，正式，另读）|ˈprəʊ.ses|ˈprɑː.ses
pull|v./n.|v. 拉；拖；拔出；撤下；驶向某方向；吸引；拉伤肌肉；n. 拉；拉力；吸引力；影响力（非正式）|pʊl|pʊl
rank|n./v./adj.|n. 等级；军衔；地位；名次；横排；出租车候客处；v. 排名；给…评级；adj. 十足的（尤指坏事）；恶臭的；（植物）丛生过密的|ræŋk|ræŋk
rough|adj./adv./n./v.|adj. 粗糙的；崎岖的；粗略的；未完成的；粗暴的；风浪大的；艰难的；身体不适的（英国）；adv. 粗暴地；n. 草图；粗野的人；高尔夫长草区；v. 过简陋生活（rough it）|rʌf|rʌf
routinely|adv.|例行地；常规地；经常，通常|ruːˈtiːn.li|ruːˈtiːn.li
schedule|n./vt.|n. 日程表；时间表（美国）；清单；法律或保险文件中的附表；vt. 安排；预定时间|ˈʃedʒ.uːl|ˈskedʒ.uːl
smart|adj./adv./vi.|adj. 聪明的；机敏的；整洁时髦的；高档的；智能的；自作聪明或出言不敬的；adv. 聪明有效地；vi. 刺痛；因失败或批评而难过恼怒|smɑːt|smɑːrt
snap|v./n./adj./interj.|v.（使）啪地折断；突然失控；厉声说；猛咬；快速拍照；用摁扣扣上（美国）；n. 啪嗒声；摁扣；快照（英国）；简单的事（美国）；一种纸牌游戏；美式橄榄球开球传球；adj. 仓促的；interj. 一样！（游戏或口语）|snæp|snæp
spare|adj./vt./n.|adj. 备用的；空闲的；多余的；瘦长的（文学）；简朴的（文学）；vt. 饶恕；使免于不愉快；抽出时间、金钱等；n. 备用物；零备件|speəʳ|sper
split|v./n.|v.（使）分裂；分开；分担；裂开；告密（英国，旧式）；离开（旧式）；n. 裂缝；分歧；分配比例；劈叉（the splits）；比赛分段时间|splɪt|splɪt
spot|n./vt.|n. 斑点；污点；粉刺（英国）；少量（主要为英国）；地点；职位；节目或广播时段；广告短片；vt. 看见；发现；注意到|spɒt|spɑːt
steep|adj./v.|adj. 陡峭的；急剧升降的；（费用）过高的；v. 浸泡；使浸透；be steeped in 指深受影响或充满某种传统等|stiːp|stiːp
still|adv./adj./vt./n.|adv. 仍然；尽管如此；还要，更（与比较级连用）；adj. 静止的；平静的；不含气的（饮料）；vt. 使静止；使安静；n. 电影剧照；寂静（文学）；蒸馏器|stɪl|stɪl
surface|n./v./adj.|n. 表面；外层；台面；表面现象；vi. 浮出水面；显露、出现；起床（非正式）；vt. 给路面等铺硬面；adj. 地面或水面的；表面上的|ˈsɜː.fɪs|ˈsɝː.fɪs
suspect|vt./n./adj.|vt. 怀疑某事属实；怀疑某人有罪；不信任；n. 嫌疑人；adj. 可疑的；不可靠的|səˈspekt|səˈspekt
swell|v./n./adj./adv.|v. 肿胀；（使）增大；增强；声音变响；n. 涌浪；渐强的声音；有钱的时髦人物（旧式）；adj. 极好的（美国，旧式）；adv. 很好地（美国，旧式）|swel|swel
tail|n./vt.|n. 尾巴；尾状部分；跟踪者（非正式）；硬币反面（tails）；燕尾服（tails）；臀部（美国）；句末补充语（语法）；vt. 秘密跟踪|teɪl|teɪl
till|prep./conj./n./vt.|prep./conj. 直到；到…为止；n. 收银机；钱柜；收银处（主要为英国）；vt. 耕作，耕种土地|tɪl|tɪl
traditionally|adv.|传统上；按照传统方式|trəˈdɪʃ.ən.əl.i|trəˈdɪʃ.ən.əl.i
upset|vt./adj./n.|vt. 使难过或恼怒；打乱；打翻；使肠胃不适；adj. 难过的；不安的；（肠胃）不舒服的；n. 混乱；爆冷门的胜利；轻微肠胃不适|ʌpˈset|ʌpˈset
weather|n./v.|n. 天气；气象状况；vt. 安然渡过困难；v.（使）风化；因风吹日晒而改变|ˈweð.əʳ|ˈweð.ɚ
well|adv./adj./interj./n./vi.|adv. 好地；充分地；相当；远远地；有充分理由地；as well 表示也；adj. 健康的；interj. 嗯；那么；好吧；n. 井；油井；气井；vi. 涌出，涌上（常接 up）|wel|wel
access|n./vt.|n. 通道；进入的途径、机会或权利；使用权；接触机会；探视权；vt. 进入；获取、使用资料或服务|ˈæk.ses|ˈæk.ses
accounting|n.|会计；会计工作；记账；财务核算|əˈkaʊn.tɪŋ|əˈkaʊn.t̬ɪŋ
address|n./vt.|n. 地址；电子邮件或网址；正式演说；内存地址；vt. 在信件等上写地址；向…讲话；称呼；处理问题或需求|əˈdres|ˈæd.res
advanced|adj.|先进的；高级的；高深的；进展到后期的；晚期的；年迈的（advanced age）|ədˈvɑːnst|ədˈvænst
amazing|adj.|令人惊讶的；极好的（非正式，褒义）|əˈmeɪ.zɪŋ|əˈmeɪ.zɪŋ
ambitious|adj.|有抱负的；渴望成功的；（计划）宏大的，需付出巨大努力的|æmˈbɪʃ.əs|æmˈbɪʃ.əs
analysis|n.|分析；分析结果或意见；精神分析（psychoanalysis 的简称）；复数 analyses|əˈnæl.ə.sɪs|əˈnæl.ə.sɪs
chart|n./v.|n. 图表；海图；唱片排行榜（the charts）；vt. 用图表表示；详细记录；规划；vi. 进入唱片排行榜（非正式）|tʃɑːt|tʃɑːrt
charter|n./vt.|n. 宪章；权利宣言；组织章程；特许状；包租；vt. 包租飞机、船等；特许成立组织|ˈtʃɑː.təʳ|ˈtʃɑːr.t̬ɚ
check|v./n.|v. 检查；核实；制止；抑制；寄存；托运行李；打勾（美国）；n. 检查；制约；支票（美国，英国拼 cheque）；餐馆账单（美国）；勾号；格纹；将军（国际象棋）|tʃek|tʃek
chef|n.|厨师；主厨；厨师长（尤指餐馆或酒店中受过专业训练的厨师）|ʃef|ʃef
chest|n.|胸部；胸腔；大箱子|tʃest|tʃest
chief|adj./n.|adj. 主要的；最重要的；最高级别的；n. 首领；主管；酋长|tʃiːf|tʃiːf
chill|v./n./adj.|v.（使）冷却；冷藏；放松或冷静下来（非正式）；n. 寒意；受凉；寒战；恐惧感；adj. 寒冷的（文学）；轻松随和的（非正式）|tʃɪl|tʃɪl
chip|n./v.|n. 碎片；缺口；芯片；筹码；薯条（英国）；薯片（美国）；挑球；v.（使）掉小块或产生缺口；挑球|tʃɪp|tʃɪp
choice|n./adj.|n. 选择；选择权；可选择的范围；被选中的人或物；adj. 优质的；精选的|tʃɔɪs|tʃɔɪs
choose|v.|选择；挑选；决定，愿意做（choose to do）|tʃuːz|tʃuːz
chop|vt./n.|vt. 砍；切碎；削减或停止；向下击球；n. 带骨肉块；砍、切的动作；解雇或取消（the chop，主要为英国）；嘴部（chops，非正式）；技巧、本领（chops，非正式）|tʃɒp|tʃɑːp
Christian|adj./n.|adj. 基督教的；基督徒的；仁慈友善的；n. 基督徒|ˈkrɪs.tʃən|ˈkrɪs.tʃən
chronic|adj.|（疾病）慢性的；长期存在的；极差的（英国，非正式）|ˈkrɒn.ɪk|ˈkrɑː.nɪk
chunk|n./vt.|n. 厚块；大块；相当大的部分（非正式）；语块；vt. 切成大块；编组成组；打球时先击中球后方地面（高尔夫）|tʃʌŋk|tʃʌŋk
circle|n./v.|n. 圆；圆圈；圈子；集团；剧场楼座（英国）；v. 盘旋；绕行；圈出；摆成圈|ˈsɜː.kəl|ˈsɝː.kəl
circuit|n./v.|n. 环行路线；赛道；一圈；电路或回路；巡回活动；巡回审判区；v. 环行；绕行|ˈsɜː.kɪt|ˈsɝː.kɪt
circumstance|n.|情况；环境；境况（通常用复数）；无法控制的客观情势；经济状况（circumstances）|ˈsɜː.kəm.stɑːns|ˈsɝː.kəm.stæns
cite|vt.|引用；引证；列举作为依据；传唤；在法律程序中提及；公开表彰|saɪt|saɪt
citizenship|n.|公民身份；国籍；公民义务与责任；作为群体成员的责任表现|ˈsɪt.ɪ.zən.ʃɪp|ˈsɪt̬.ə.zən.ʃɪp
civic|adj.|城市的；市民的；公民责任或行为的|ˈsɪv.ɪk|ˈsɪv.ɪk
civil|adj.|平民的；非军事或非宗教的；公民的；民事的；有礼貌的|ˈsɪv.əl|ˈsɪv.əl
civilian|n./adj.|n. 平民；非军警人员；圈外普通人（常为幽默用法）；adj. 平民的；非军警的|sɪˈvɪl.jən|səˈvɪl.jən
claim|v./n.|v. 声称（真实性未证实或有争议）；断言；要求或认领；索赔；夺去生命；n. 声称；主张；索赔要求；应得权利|kleɪm|kleɪm
clay|n.|黏土；陶土；网球红土场地面|kleɪ|kleɪ
clean|adj./v./n./adv.|adj. 干净的；无污染的；清白、公正的；健康文明的；无色情内容的；已戒毒的；整齐利落的；未用过的；彻底的；v. 清洁；打扫；除去鱼或动物内脏；n. 清洁，打扫；adv. 完全地（非正式）|kliːn|kliːn
clerk|n./vi.|n. 办事员；文书；店员、酒店前台或法官助理（美国）；vi. 做文书、店员等工作|klɑːk|klɝːk
cliff|n.|悬崖；峭壁|klɪf|klɪf
climate|n.|气候；气候区；（社会、政治等）环境或氛围|ˈklaɪ.mət|ˈklaɪ.mət
cling|vi.|紧紧抓住；依附；黏附；紧贴；不愿放弃（cling to）|klɪŋ|klɪŋ
clinic|n.|诊所；门诊部；专题指导班或训练班（尤指体育）|ˈklɪn.ɪk|ˈklɪn.ɪk
clinical|adj.|临床的；冷静客观的；冷漠的；缺少温暖或个性的|ˈklɪn.ɪ.kəl|ˈklɪn.ɪ.kəl
clip|n./v.|n. 夹子；电影或视频片段；修剪；弹夹；速度（at a good clip，美国，非正式）；拍击；vt. 修剪；剪下；削减；碰撞；挑球；v. 用夹子夹住|klɪp|klɪp
clothing|n.|衣服；服装（不可数总称）|ˈkləʊ.ðɪŋ|ˈkloʊ.ðɪŋ
clue|n./v.|n. 线索；提示；v. 为谜题编写提示；给人提供信息（美国，非正式）|kluː|kluː
cluster|n./v.|n. 簇；群；聚集；辅音群；计算机集群；v. 聚集；成群集中|ˈklʌs.təʳ|ˈklʌs.tɚ
coach|n./v./adv.|n. 教练；辅导员；长途客车（主要为英国）；马车；火车客车厢；经济舱（美国）；v. 训练；辅导；adv. 乘经济舱（美国）|kəʊtʃ|koʊtʃ
coalition|n.|联盟；联合；联合政府|kəʊ.əˈlɪʃ.ən|koʊ.əˈlɪʃ.ən
coat|n./vt.|n. 外套；上衣；动物皮毛；一层覆盖物或涂层；vt. 给…涂一层；覆盖|kəʊt|koʊt
coin|n./vt.|n. 硬币；硬币货币；vt. 创造新词或表达；铸币|kɔɪn|kɔɪn
collaboration|n.|合作；协作；合作成果；与占领者勾结、通敌（贬义）|kəˌlæb.əˈreɪ.ʃən|kəˌlæb.əˈreɪ.ʃən
collapse|v./n.|v. 倒塌；昏倒；崩溃；失败；价格暴跌；（使）折叠；n. 倒塌；突然衰弱或昏倒；崩溃；垮台|kəˈlæps|kəˈlæps
colleague|n.|同事；同僚|ˈkɒl.iːɡ|ˈkɑː.liːɡ
collective|adj./n.|adj. 集体的；共同的；n. 由成员共同拥有和管理的组织或企业|kəˈlek.tɪv|kəˈlek.tɪv
colonial|adj.|殖民地的；殖民主义的；殖民时期风格的|kəˈləʊ.ni.əl|kəˈloʊ.ni.əl
combination|n.|结合；组合；混合体；排列组合；密码锁的号码组合|ˌkɒm.bɪˈneɪ.ʃən|ˌkɑːm.bəˈneɪ.ʃən
combine|v./n.|v.（使）结合；兼有；兼顾；n. 联合企业或集团；联合收割机|kəmˈbaɪn|kəmˈbaɪn
comedy|n.|喜剧；喜剧作品；滑稽或令人发笑之处|ˈkɒm.ə.di|ˈkɑː.mə.di
commander|n.|指挥官；司令官；海军军衔之一（具体级别因国家而异）|kəˈmɑːn.dəʳ|kəˈmæn.dɚ
comment|n./v.|n. 评论；意见；评语；v. 发表评论；表达意见（常接 on）|ˈkɒm.ent|ˈkɑː.ment
commercial|adj./n.|adj. 商业的；营利的；商用的；面向公众销售或服务的；靠广告收入运营的；以牟利为主、缺少艺术价值的（贬义）；n. 广播或电视广告|kəˈmɜː.ʃəl|kəˈmɝː.ʃəl
commissioner|n.|政府部门或组织的主管官员；委员会委员；体育联盟总裁（美国）|kəˈmɪʃ.ən.əʳ|kəˈmɪʃ.ən.ɚ
commit|v.|犯下罪行或错误；承诺；投入时间、金钱等；表态；把人送入监狱或精神病院（正式）；交付审判；记住或写下（commit to memory/paper）|kəˈmɪt|kəˈmɪt
commitment|n.|承诺；投入；奉献；必须履行的责任或约定；承诺支付的款项|kəˈmɪt.mənt|kəˈmɪt.mənt
committee|n.|委员会|kəˈmɪt.i|kəˈmɪt̬.i
communicate|v.|交流；沟通；传达；传播疾病；房间相通（正式）|kəˈmjuː.nɪ.keɪt|kəˈmjuː.nə.keɪt
communication|n.|交流；沟通；传达；消息、信件或通告（正式）；通信系统（communications）；交通联系（communications）|kəˌmjuː.nɪˈkeɪ.ʃən|kəˌmjuː.nəˈkeɪ.ʃən
`;
const readings={
  "mate": [
    {
      "label": "n./v. 伙伴、伴侣；交配",
      "uk": "meɪt",
      "us": "meɪt"
    },
    {
      "label": "n. 马黛茶",
      "uk": "ˈmæt.eɪ",
      "us": "ˈmɑː.teɪ"
    }
  ],
  "process": [
    {
      "label": "n./vt. 过程；处理",
      "uk": "ˈprəʊ.ses",
      "us": "ˈprɑː.ses"
    },
    {
      "label": "vi. 缓慢列队行进",
      "uk": "prəˈses",
      "us": "prəˈses"
    }
  ],
  "poll": [
    {
      "label": "n./vt.",
      "uk": "pəʊl",
      "us": "poʊl"
    },
    {
      "label": "n. 英音变体",
      "uk": "pɒl",
      "us": "poʊl"
    }
  ],
  "suspect": [
    {
      "label": "vt.",
      "uk": "səˈspekt",
      "us": "səˈspekt"
    },
    {
      "label": "n./adj.",
      "uk": "ˈsʌs.pekt",
      "us": "ˈsʌs.pekt"
    },
    {
      "label": "adj. 美音变体",
      "uk": "ˈsʌs.pekt",
      "us": "səˈspekt"
    }
  ],
  "upset": [
    {
      "label": "vt./adj.",
      "uk": "ʌpˈset",
      "us": "ʌpˈset"
    },
    {
      "label": "n.",
      "uk": "ˈʌp.set",
      "us": "ˈʌp.set"
    }
  ],
  "address": [
    {
      "label": "n.",
      "uk": "əˈdres",
      "us": "ˈæd.res"
    },
    {
      "label": "vt.",
      "uk": "əˈdres",
      "us": "əˈdres"
    }
  ],
  "Christian": [
    {
      "label": "adj./n.",
      "uk": "ˈkrɪs.tʃən",
      "us": "ˈkrɪs.tʃən"
    },
    {
      "label": "adj./n. 变体",
      "uk": "ˈkrɪs.ti.ən",
      "us": "ˈkrɪs.ti.ən"
    }
  ],
  "combine": [
    {
      "label": "v.",
      "uk": "kəmˈbaɪn",
      "us": "kəmˈbaɪn"
    },
    {
      "label": "n.",
      "uk": "ˈkɒm.baɪn",
      "us": "ˈkɑːm.baɪn"
    }
  ]
};
const notes={
  "mate": "伙伴、伴侣和交配读 meɪt；马黛茶是同形异音词，分别抄录剑桥英音 ˈmæt.eɪ、美音 ˈmɑː.teɪ，不混入伙伴义。另保留一对物品中的另一件及船副、技工助手义。",
  "major": "保留重要的、大调的、少校、主修科目或学生及重大赛事等义；主修动词常与 in 连用，主要为美式用法。",
  "mean": "区分表示意义、打算和结果的动词，与吝啬、不友善、出色、平均等形容词及平均数、折中办法名词；不能用单一中文替换全部用法。",
  "pet": "小写 pet 的名词、动词和形容词按同一读音收录。大写缩略语 PET 的塑料或医学用法不当作小写 pet 的异读。",
  "plain": "区分朴素、清楚、相貌平常、十足与平原、平针；外貌评价义按词典保留，不作为描述人的推荐表达。",
  "plate": "补充盘子以外的板、地壳板块、书中插图、假牙托板、金银器皿和镀层动词义，避免学术例句中的 plate 与主释义脱节。",
  "poll": "保留剑桥列出的两个名词英音，投票站通常用复数 the polls；调查和得票数为及物动词义。",
  "preserve": "区分保存、食物防腐与果酱、专属领域、美国自然保护区名词义。",
  "process": "过程及处理义第一音节重读；缓慢列队行进的正式不及物义第二音节重读，分开标注。",
  "rank": "等级和排名以外，保留恶臭、过密丛生、十足等形容词义，不将形容词误归名词。",
  "schedule": "英音以 ʃ 起首，美音以 sk 起首；日程名词和安排动词均需显示。",
  "spare": "保留备用、空闲、瘦长和简朴的形容词义，动词分为不伤害、使免于不快和抽出资源。",
  "suspect": "动词第二音节重读，名词和形容词通常第一音节重读；剑桥美国词典另列形容词第二音节重读变体。",
  "upset": "动词和形容词末尾重读，名词首音节重读；名词包含爆冷门胜利和肠胃不适，不只等同于难过。",
  "weather": "天气是不可数名词；补充渡过困难及风化的动词义。",
  "well": "副词、健康形容词、语气词、井名词及涌出的不及物动词并列，避免例句与单一好地释义冲突。",
  "access": "名词常用 access to，及物动词直接接宾语；不把动词机械写成 access to something。",
  "address": "英式名词和动词同为后重读；美式名词前重读、动词后重读；补充演说、称呼和处理问题义。",
  "advanced": "只按形容词核对本词，包括先进、高级、后期和年迈义；不把 advance 的所有动词义重复给 advanced。",
  "analysis": "保留分析过程、分析意见和精神分析简称；复数 analyses 不误写为 analysises。",
  "chef": "职业厨师，尤指受训练的餐馆或酒店厨师；不可与 chief 首领混淆。首辅音是 ʃ，不是 tʃ。",
  "chip": "区分英式薯条与美式薯片；保留碎片、缺口、芯片、筹码和挑球，不把 chips 仅当作食物。",
  "Christian": "首字母大写；宗教名词、形容词与仁慈友善的形容词义区分，保留两种词典发音。",
  "chunk": "语块名词及高尔夫误击义据剑桥，切成大块、编组成组的动词义另据柯林斯；不把所有块相关中文都当成独立义项。",
  "civil": "区分非军非宗教的平民义、法律民事义与礼貌义，不将 civil 只等同文明的。",
  "clerk": "英音 klɑːk 与美音 klɝːk 显著不同；美式店员、酒店前台、法官助理义均保留。",
  "cling": "不及物动词，紧抓、黏附与坚持不放常用 to；不写成直接带宾语的及物词。",
  "clothing": "服装的不可数总称；用 item/article of clothing 表示一件，不用 a clothing。",
  "coach": "区分教练、客车、车厢、马车与美国经济舱，以及训练动词和乘经济舱副词。",
  "collaboration": "除合作、协作，还指与占领者通敌，后者含贬义。",
  "combine": "动词后重读；联合企业或联合收割机名词前重读，英美首元音也不同。",
  "commander": "海军军衔等级因国家而异，不无条件把所有 commander 固定译为同一个中文军衔。",
  "commit": "承诺、投入、犯罪、送入机构和 commit to memory/paper 分开说明；to 后若为动作常用动名词。",
  "communication": "区分交流、正式信件消息，复数 communications 还可指通信系统或交通联系。"
};
const senses={
  "flame": [
    [
      "n. 火焰",
      "A blue flame burned beneath the kettle."
    ],
    [
      "n. 强烈感情（文学）",
      "The discovery rekindled a flame of hope."
    ],
    [
      "v. 发送侮辱性网络信息",
      "Please discuss the evidence rather than flame other contributors."
    ]
  ],
  "flavour": [
    [
      "n. 味道",
      "The herbs give the soup a distinctive flavour."
    ],
    [
      "n. 初步体验",
      "The short film offers a flavour of village life."
    ],
    [
      "vt. 调味",
      "Use lemon juice to flavour the sauce."
    ]
  ],
  "innocent": [
    [
      "adj. 无罪的",
      "New evidence showed that the prisoner was innocent."
    ],
    [
      "adj. 无恶意的",
      "She intended the comment as an innocent joke."
    ],
    [
      "n. 天真缺乏世故的人",
      "The novel follows an innocent who trusts everyone he meets."
    ]
  ],
  "lean": [
    [
      "v. 倾斜；倚靠",
      "Do not lean against the temporary fence."
    ],
    [
      "adj. 脂肪少的",
      "The meal contains lean meat and fresh vegetables."
    ],
    [
      "adj. 精简高效的",
      "The firm operates with a lean management structure."
    ],
    [
      "adj. 收入不足的",
      "The museum faces another lean year."
    ]
  ],
  "major": [
    [
      "adj. 主要的",
      "Transport is a major source of local pollution."
    ],
    [
      "adj. 大调的",
      "The piece ends with a major chord."
    ],
    [
      "n. 主修科目",
      "Biology is her major."
    ],
    [
      "n. 少校",
      "The major briefed the officers before the exercise."
    ],
    [
      "vi. 主修",
      "She plans to major in environmental science."
    ]
  ],
  "mate": [
    [
      "n. 朋友（英国）",
      "He invited an old school mate to dinner."
    ],
    [
      "n. 交配伴侣",
      "The bird displays its feathers to attract a mate."
    ],
    [
      "n. 船副",
      "The mate checked the cargo before departure."
    ],
    [
      "n. 一对物品中的另一个",
      "I found the mate to the missing glove."
    ],
    [
      "v. 交配",
      "The animals usually mate in early spring."
    ],
    [
      "n. 马黛茶",
      "They offered us hot mate after the walk."
    ]
  ],
  "mean": [
    [
      "v. 意思是",
      "What does this symbol mean on the map?"
    ],
    [
      "v. 打算",
      "I did not mean to interrupt the discussion."
    ],
    [
      "v. 意味着",
      "Lower rainfall may mean smaller harvests."
    ],
    [
      "adj. 不友善的",
      "It was mean to laugh at his mistake."
    ],
    [
      "adj. 吝啬的",
      "He is too mean to leave a tip."
    ],
    [
      "adj. 出色的（非正式）",
      "She plays a mean game of chess."
    ],
    [
      "adj. 平均的",
      "The mean temperature increased during the study."
    ],
    [
      "n. 平均数",
      "Calculate the mean of the five measurements."
    ],
    [
      "n. 折中办法",
      "They sought a mean between strict rules and complete freedom."
    ]
  ],
  "pet": [
    [
      "n. 宠物",
      "The family keeps a rabbit as a pet."
    ],
    [
      "vt. 抚摸",
      "Ask the owner before you pet a strange dog."
    ],
    [
      "adj. 特别喜爱的",
      "The garden is the director's pet project."
    ]
  ],
  "pilot": [
    [
      "n. 飞行员",
      "The pilot checked the instruments before takeoff."
    ],
    [
      "n. 领航员",
      "A local pilot guided the ship into the harbour."
    ],
    [
      "adj. 试验性的",
      "The school launched a pilot programme for new students."
    ],
    [
      "vt. 试行",
      "The council will pilot the service in two districts."
    ]
  ],
  "plain": [
    [
      "adj. 朴素的",
      "The room had plain walls and simple furniture."
    ],
    [
      "adj. 清楚易懂的",
      "Explain the procedure in plain language."
    ],
    [
      "adj. 不加配料的",
      "She ordered plain yoghurt with no added sugar."
    ],
    [
      "n. 平原",
      "The river crosses a broad coastal plain."
    ],
    [
      "adv. 完全地",
      "Ignoring those warnings was just plain foolish."
    ]
  ],
  "plate": [
    [
      "n. 盘子",
      "Place the bread on a clean plate."
    ],
    [
      "n. 地壳板块",
      "The oceanic plate moves beneath the continent."
    ],
    [
      "n. 书中插图",
      "Plate six shows the excavated bronze tools."
    ],
    [
      "vt. 镀层",
      "The workshop can plate the fittings with nickel."
    ]
  ],
  "poll": [
    [
      "n. 民意调查",
      "The latest poll asked residents about public transport."
    ],
    [
      "n. 投票站（the polls）",
      "Voters queued outside the polls before dawn."
    ],
    [
      "vt. 调查意见",
      "The researchers will poll a representative sample of students."
    ],
    [
      "vt. 获得选票",
      "The candidate polled more votes than expected."
    ]
  ],
  "preserve": [
    [
      "vt. 保护；保存",
      "The project aims to preserve the historic waterfront."
    ],
    [
      "vt. 对食物防腐",
      "Salt can preserve fish for long journeys."
    ],
    [
      "n. 果酱",
      "The shop sells a locally made plum preserve."
    ],
    [
      "n. 专属领域",
      "Such expensive equipment was once the preserve of large laboratories."
    ],
    [
      "n. 自然保护区（美国）",
      "The birds breed in a protected wildlife preserve."
    ]
  ],
  "process": [
    [
      "n. 过程",
      "The process takes several weeks to complete."
    ],
    [
      "vt. 加工",
      "The factory can process locally grown fruit."
    ],
    [
      "vt. 处理信息",
      "The software will process the survey results."
    ],
    [
      "vi. 缓慢列队行进",
      "The musicians process through the hall before the ceremony."
    ]
  ],
  "pull": [
    [
      "v. 拉",
      "Pull the handle gently to open the door."
    ],
    [
      "vt. 拉伤",
      "Athletes can pull a muscle without a proper warm-up."
    ],
    [
      "n. 吸引力",
      "She felt the pull of her hometown."
    ],
    [
      "n. 影响力（非正式）",
      "The committee has considerable political pull."
    ]
  ],
  "rank": [
    [
      "n. 军衔",
      "He retired with the rank of captain."
    ],
    [
      "n. 横排",
      "A second rank of chairs stood behind the first."
    ],
    [
      "v. 排名",
      "The universities rank highly for engineering."
    ],
    [
      "adj. 恶臭的",
      "A rank smell came from the blocked drain."
    ],
    [
      "adj. 十足的",
      "Driving without lights in that fog was rank stupidity."
    ]
  ],
  "rough": [
    [
      "adj. 粗糙的",
      "The rough surface damaged the cloth."
    ],
    [
      "adj. 粗略的",
      "We need a rough estimate of the total cost."
    ],
    [
      "adj. 艰难的",
      "The business had a rough winter."
    ],
    [
      "adj. 风浪大的",
      "The boats remained in port because of the rough sea."
    ],
    [
      "n. 草图",
      "The designer sent us a rough of the new layout."
    ],
    [
      "v. 过简陋生活",
      "We will rough it in tents during the survey."
    ]
  ],
  "schedule": [
    [
      "n. 日程表",
      "The revised schedule allows more time for discussion."
    ],
    [
      "vt. 安排",
      "We should schedule the inspection for next week."
    ]
  ],
  "smart": [
    [
      "adj. 聪明的",
      "The team found a smart solution to the problem."
    ],
    [
      "adj. 整洁时髦的",
      "He wore a smart jacket to the interview."
    ],
    [
      "adj. 智能的",
      "A smart sensor controls the heating."
    ],
    [
      "vi. 刺痛",
      "The smoke made my eyes smart."
    ],
    [
      "vi. 因失败而恼怒",
      "They still smart from their unexpected defeat."
    ]
  ],
  "snap": [
    [
      "v. 折断",
      "The dry branch may snap under your weight."
    ],
    [
      "v. 厉声说",
      "Please do not snap at the volunteers."
    ],
    [
      "v. 快速拍照",
      "Visitors stopped to snap photographs of the bridge."
    ],
    [
      "n. 啪嗒声",
      "The lid closed with a loud snap."
    ],
    [
      "n. 简单的事（美国）",
      "Installing the update was a snap."
    ],
    [
      "adj. 仓促的",
      "The board avoided making a snap decision."
    ]
  ],
  "spare": [
    [
      "adj. 备用的",
      "Keep a spare key in a safe place."
    ],
    [
      "adj. 空闲的",
      "She reads research papers in her spare time."
    ],
    [
      "vt. 抽出",
      "Can you spare an hour to review the draft?"
    ],
    [
      "vt. 饶恕；不伤害",
      "The army was ordered to spare the village."
    ],
    [
      "vt. 使免于不快",
      "This simple check can spare you considerable trouble."
    ],
    [
      "n. 备用物",
      "The broken pump was replaced with a spare."
    ]
  ],
  "split": [
    [
      "v. 分开；分担",
      "The group will split the cost equally."
    ],
    [
      "v. 裂开",
      "The wooden handle may split in dry weather."
    ],
    [
      "n. 分歧",
      "The proposal caused a split within the committee."
    ],
    [
      "n. 劈叉",
      "The gymnast can do the splits easily."
    ]
  ],
  "spot": [
    [
      "n. 斑点；污点",
      "There was a dark spot on the lens."
    ],
    [
      "n. 地点",
      "We found a quiet spot beside the river."
    ],
    [
      "n. 广告短片",
      "The station broadcast a short advertising spot."
    ],
    [
      "vt. 发现",
      "Can you spot the error in this calculation?"
    ]
  ],
  "steep": [
    [
      "adj. 陡峭的",
      "A steep path leads to the ruined tower."
    ],
    [
      "adj. 急剧的",
      "The figures show a steep decline in sales."
    ],
    [
      "adj. 价格过高的",
      "The restaurant's prices are rather steep."
    ],
    [
      "v. 浸泡",
      "Let the leaves steep in hot water for a few minutes."
    ]
  ],
  "still": [
    [
      "adv. 仍然",
      "The researchers are still collecting data."
    ],
    [
      "adv. 更",
      "The second experiment produced still better results."
    ],
    [
      "adj. 静止的",
      "Keep the camera still while taking the photograph."
    ],
    [
      "adj. 不含气的",
      "She asked for still water."
    ],
    [
      "vt. 使安静",
      "The familiar music helped to still the child's cries."
    ],
    [
      "n. 电影剧照",
      "The archive contains a still from the original film."
    ],
    [
      "n. 蒸馏器",
      "The liquid is heated in a copper still."
    ]
  ],
  "surface": [
    [
      "n. 表面",
      "The surface of the lake was covered with ice."
    ],
    [
      "vi. 浮出水面",
      "The divers will surface near the boat."
    ],
    [
      "vi. 显露",
      "More details may surface during the investigation."
    ],
    [
      "vt. 铺硬面",
      "The council plans to surface the path with gravel."
    ]
  ],
  "suspect": [
    [
      "vt. 怀疑属实",
      "The engineers suspect a fault in the power supply."
    ],
    [
      "vt. 怀疑有罪",
      "Police suspect him of stealing the documents."
    ],
    [
      "n. 嫌疑人",
      "The suspect was interviewed by detectives."
    ],
    [
      "adj. 可疑的",
      "The laboratory rejected the suspect sample."
    ]
  ],
  "swell": [
    [
      "v. 肿胀",
      "An injured joint may swell quickly."
    ],
    [
      "vt. 使增加",
      "The new arrivals swell the town's population each summer."
    ],
    [
      "n. 涌浪",
      "The boat rose and fell on the ocean swell."
    ],
    [
      "adj. 极好的（美国，旧式）",
      "They thought the outing was a swell idea."
    ]
  ],
  "tail": [
    [
      "n. 尾巴",
      "The fox disappeared with a flick of its tail."
    ],
    [
      "n. 跟踪者",
      "The detective put a tail on the suspect."
    ],
    [
      "vt. 秘密跟踪",
      "The officers were told to tail the van."
    ],
    [
      "n. 硬币反面（tails）",
      "The coin landed tails up."
    ]
  ],
  "till": [
    [
      "prep. 直到",
      "The library remains open till midnight."
    ],
    [
      "n. 收银机（英国）",
      "The cashier placed the notes in the till."
    ],
    [
      "vt. 耕作",
      "The farmers till the soil before planting."
    ]
  ],
  "upset": [
    [
      "vt. 使难过",
      "The unexpected news may upset the family."
    ],
    [
      "vt. 打乱",
      "A delay could upset the entire schedule."
    ],
    [
      "vt. 打翻",
      "A sudden movement can upset the tray."
    ],
    [
      "adj. 不安的",
      "The children were upset by the noise."
    ],
    [
      "n. 爆冷门胜利",
      "The final ended in a major upset."
    ]
  ],
  "weather": [
    [
      "n. 天气",
      "The weather changed rapidly in the mountains."
    ],
    [
      "vt. 渡过困难",
      "The business managed to weather the recession."
    ],
    [
      "v. 风化",
      "Exposed stones weather at different rates."
    ]
  ],
  "well": [
    [
      "adv. 好地",
      "The new system works well under pressure."
    ],
    [
      "adj. 健康的",
      "She feels well enough to return to work."
    ],
    [
      "n. 井",
      "The village draws water from a deep well."
    ],
    [
      "vi. 涌出",
      "Tears began to well up in his eyes."
    ]
  ],
  "access": [
    [
      "n. 使用权；接触机会",
      "Students have access to the digital archive."
    ],
    [
      "n. 通道",
      "The only access to the island is by boat."
    ],
    [
      "vt. 获取；使用",
      "Researchers can access the records online."
    ]
  ],
  "address": [
    [
      "n. 地址",
      "Write the delivery address clearly."
    ],
    [
      "n. 正式演说",
      "The president gave an address to the assembly."
    ],
    [
      "vt. 处理问题",
      "The new policy must address the shortage of housing."
    ],
    [
      "vt. 称呼",
      "Please address the chair as Professor Lee."
    ]
  ],
  "advanced": [
    [
      "adj. 先进的",
      "The laboratory uses advanced imaging equipment."
    ],
    [
      "adj. 高级的",
      "The course is intended for advanced learners."
    ],
    [
      "adj. 后期的；晚期的",
      "The negotiations are at an advanced stage."
    ]
  ],
  "amazing": [
    [
      "adj. 令人惊讶的",
      "The telescope revealed an amazing number of distant galaxies."
    ],
    [
      "adj. 极好的（非正式）",
      "The musicians gave an amazing performance."
    ]
  ],
  "chart": [
    [
      "n. 图表",
      "The chart compares rainfall in the two regions."
    ],
    [
      "n. 海图",
      "The captain checked the chart before entering the channel."
    ],
    [
      "vt. 详细记录",
      "The study will chart changes in local vegetation."
    ],
    [
      "vt. 规划",
      "The committee will chart a course for future development."
    ]
  ],
  "charter": [
    [
      "n. 宪章",
      "The charter sets out the rights of each member."
    ],
    [
      "vt. 包租",
      "The team will charter a boat for the expedition."
    ],
    [
      "vt. 特许成立",
      "The government agreed to charter the new institution."
    ]
  ],
  "check": [
    [
      "v. 检查",
      "Check the measurements before submitting the report."
    ],
    [
      "vt. 抑制",
      "Better drainage can check the spread of the disease."
    ],
    [
      "vt. 托运",
      "Passengers must check large bags at the counter."
    ],
    [
      "n. 支票（美国）",
      "The buyer paid by check."
    ],
    [
      "n. 餐馆账单（美国）",
      "We asked the waiter for the check."
    ],
    [
      "n. 格纹",
      "The fabric has a red and white check."
    ]
  ],
  "chest": [
    [
      "n. 胸部",
      "The doctor listened to his chest."
    ],
    [
      "n. 大箱子",
      "The documents were stored in a wooden chest."
    ]
  ],
  "chief": [
    [
      "adj. 主要的",
      "The chief concern is the quality of the water."
    ],
    [
      "n. 主管",
      "The fire chief inspected the building."
    ]
  ],
  "chill": [
    [
      "v. 冷藏",
      "Chill the dessert before serving."
    ],
    [
      "vi. 放松（非正式）",
      "We can chill at home after the trip."
    ],
    [
      "n. 寒意",
      "There was a chill in the morning air."
    ],
    [
      "n. 恐惧感",
      "The warning sent a chill through the crowd."
    ]
  ],
  "chip": [
    [
      "n. 碎片",
      "A chip of stone broke away from the wall."
    ],
    [
      "n. 芯片",
      "The chip stores data from the sensor."
    ],
    [
      "n. 薯条（英国）",
      "We ordered fish and chips at the harbour."
    ],
    [
      "n. 筹码",
      "Each player placed a chip on the table."
    ],
    [
      "v. 产生缺口",
      "Do not chip the edge of the glass."
    ]
  ],
  "choice": [
    [
      "n. 选择权",
      "Residents should have a choice about how they travel."
    ],
    [
      "n. 被选中的人或物",
      "She was the committee's first choice for the position."
    ],
    [
      "adj. 优质的",
      "The restaurant serves choice cuts of beef."
    ]
  ],
  "chop": [
    [
      "vt. 切碎",
      "Chop the vegetables into small pieces."
    ],
    [
      "vt. 削减",
      "The company plans to chop its advertising budget."
    ],
    [
      "n. 带骨肉块",
      "He ordered a pork chop with rice."
    ]
  ],
  "chronic": [
    [
      "adj. 慢性的",
      "The clinic treats patients with chronic pain."
    ],
    [
      "adj. 长期存在的",
      "The region has a chronic shortage of nurses."
    ],
    [
      "adj. 极差的（英国，非正式）",
      "The acting in the final scene was chronic."
    ]
  ],
  "chunk": [
    [
      "n. 厚块",
      "A chunk of ice floated past the boat."
    ],
    [
      "n. 相当大的部分",
      "Rent takes a large chunk of her income."
    ],
    [
      "vt. 切成大块",
      "Chunk the cheese before adding it to the salad."
    ]
  ],
  "circle": [
    [
      "n. 圆",
      "Draw a circle around the central point."
    ],
    [
      "n. 圈子",
      "The discovery was widely discussed in scientific circles."
    ],
    [
      "v. 盘旋",
      "The aircraft had to circle above the airport."
    ],
    [
      "vt. 圈出",
      "Circle the correct answer on the sheet."
    ]
  ],
  "circuit": [
    [
      "n. 电路",
      "The switch opens the electrical circuit."
    ],
    [
      "n. 环行路线",
      "The walk follows a circuit around the lake."
    ],
    [
      "n. 巡回活动",
      "The author is well known on the lecture circuit."
    ]
  ],
  "circumstance": [
    [
      "n. 情况；情势",
      "The decision depends on the circumstances of each case."
    ],
    [
      "n. 经济状况",
      "The grant is assessed according to the applicant's financial circumstances."
    ]
  ],
  "cite": [
    [
      "vt. 引用；列举依据",
      "Please cite the original study in your report."
    ],
    [
      "vt. 传唤",
      "The court may cite the witness to appear."
    ],
    [
      "vt. 表彰",
      "The commander decided to cite the team for bravery."
    ]
  ],
  "civil": [
    [
      "adj. 平民的；非军事的",
      "The airport handles both civil and military flights."
    ],
    [
      "adj. 民事的",
      "The dispute will be heard in a civil court."
    ],
    [
      "adj. 有礼貌的",
      "They remained civil despite their disagreement."
    ]
  ],
  "clay": [
    [
      "n. 黏土",
      "The potter shaped the wet clay by hand."
    ],
    [
      "n. 网球红土场地面",
      "She prefers playing on clay."
    ]
  ],
  "clean": [
    [
      "adj. 干净的",
      "The village needs a reliable supply of clean water."
    ],
    [
      "adj. 清白的",
      "The applicant has a clean driving record."
    ],
    [
      "adj. 利落的",
      "A sharp blade produces a clean cut."
    ],
    [
      "v. 清洁",
      "Please clean the equipment after use."
    ],
    [
      "adv. 完全地（非正式）",
      "The sudden noise drove the thought clean out of my mind."
    ]
  ],
  "clerk": [
    [
      "n. 办事员",
      "The clerk entered the figures into the ledger."
    ],
    [
      "n. 店员（美国）",
      "The clerk helped us find the right size."
    ],
    [
      "vi. 做文书等工作",
      "She will clerk in the office during the summer."
    ]
  ],
  "climate": [
    [
      "n. 气候",
      "The region has a warm, dry climate."
    ],
    [
      "n. 环境；氛围",
      "The reforms created a climate of greater trust."
    ]
  ],
  "clinic": [
    [
      "n. 诊所",
      "The clinic provides care for local families."
    ],
    [
      "n. 指导或训练班",
      "The club held a weekend tennis clinic."
    ]
  ],
  "clinical": [
    [
      "adj. 临床的",
      "The medicine is undergoing clinical trials."
    ],
    [
      "adj. 冷漠的",
      "His clinical response offered little comfort to the family."
    ]
  ],
  "clip": [
    [
      "n. 夹子",
      "A metal clip holds the papers together."
    ],
    [
      "n. 视频片段",
      "We watched a short clip from the documentary."
    ],
    [
      "vt. 修剪",
      "Clip the hedge before new growth begins."
    ],
    [
      "v. 夹住",
      "Clip the microphone to your collar."
    ],
    [
      "vt. 擦碰",
      "The van may clip the gate if it turns too sharply."
    ]
  ],
  "clue": [
    [
      "n. 线索",
      "The fragment provided a clue to the building's age."
    ],
    [
      "v. 编写谜题提示",
      "The editor must clue each entry in the crossword."
    ]
  ],
  "coach": [
    [
      "n. 教练",
      "The coach reviewed the team's performance."
    ],
    [
      "n. 长途客车（英国）",
      "A coach took the visitors to the museum."
    ],
    [
      "n. 经济舱（美国）",
      "We booked seats in coach."
    ],
    [
      "v. 辅导",
      "She will coach the students for their interviews."
    ]
  ],
  "coat": [
    [
      "n. 外套",
      "He hung his coat beside the door."
    ],
    [
      "n. 动物皮毛",
      "The dog's coat was thick and glossy."
    ],
    [
      "n. 涂层",
      "Apply a second coat of paint after the first dries."
    ],
    [
      "vt. 覆盖",
      "Fine dust can coat every exposed surface."
    ]
  ],
  "coin": [
    [
      "n. 硬币",
      "A Roman coin was found near the wall."
    ],
    [
      "vt. 创造新词",
      "Researchers sometimes coin new terms for unfamiliar phenomena."
    ],
    [
      "vt. 铸币",
      "The mint will coin a commemorative silver piece."
    ]
  ],
  "collaboration": [
    [
      "n. 合作",
      "The research depends on close collaboration between the teams."
    ],
    [
      "n. 通敌（贬义）",
      "He was accused of collaboration with the occupying army."
    ]
  ],
  "collapse": [
    [
      "v. 倒塌",
      "The damaged roof could collapse at any moment."
    ],
    [
      "v. 昏倒",
      "Heat can cause an exhausted runner to collapse."
    ],
    [
      "v. 失败；崩溃",
      "Without funding, the project may collapse."
    ],
    [
      "v. 折叠",
      "The chairs collapse for easy storage."
    ]
  ],
  "collective": [
    [
      "adj. 共同的",
      "Protecting the wetland is a collective responsibility."
    ],
    [
      "n. 合作组织",
      "The artists formed a collective to share equipment."
    ]
  ],
  "combination": [
    [
      "n. 组合；结合",
      "Success requires a combination of skill and patience."
    ],
    [
      "n. 密码锁号码组合",
      "She forgot the combination to the lock."
    ]
  ],
  "combine": [
    [
      "v. 结合",
      "The course will combine fieldwork with laboratory training."
    ],
    [
      "n. 联合收割机",
      "A combine moved slowly across the wheat field."
    ],
    [
      "n. 联合企业",
      "The businesses formed a large industrial combine."
    ]
  ],
  "commercial": [
    [
      "adj. 商业的",
      "The research has several commercial applications."
    ],
    [
      "n. 广播或电视广告",
      "The commercial was broadcast during the evening news."
    ]
  ],
  "commit": [
    [
      "v. 犯下罪行",
      "The court must establish whether he did commit the offence."
    ],
    [
      "v. 承诺；投入",
      "The partners will commit more resources to the project."
    ],
    [
      "v. 写下",
      "Please commit your suggestions to paper before the meeting."
    ]
  ],
  "commitment": [
    [
      "n. 承诺",
      "The company made a commitment to reduce emissions."
    ],
    [
      "n. 投入；奉献",
      "The work requires patience and commitment."
    ],
    [
      "n. 必须履行的责任或约定",
      "Family commitments prevent him from attending evening classes."
    ]
  ],
  "communicate": [
    [
      "v. 交流；传达",
      "The team must communicate its findings clearly."
    ],
    [
      "vt. 传播疾病",
      "Some insects can communicate disease between animals."
    ],
    [
      "vi. 房间相通",
      "The two rooms communicate through a connecting door."
    ]
  ],
  "communication": [
    [
      "n. 交流",
      "Clear communication is essential during an emergency."
    ],
    [
      "n. 正式消息或信件",
      "We received a communication from the conference organisers."
    ],
    [
      "n. 交通联系（复数）",
      "Improved road communications helped the town develop."
    ]
  ]
};
const phPages=new Set("access advanced ambitious analysis choose coat clip claim commitment spare suspect address".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-17",batch:"017",file:"js/lexicon-review-017.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性及英美音；中文释义为归纳，例句为原创，专业或地区义注明语境。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('chunk').sources=[get('chunk').source,'https://www.collinsdictionary.com/dictionary/english/chunk'];
get('major').sources=[get('major').source,'https://dictionary.cambridge.org/dictionary/english/major-in'];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"017",checkedOn:"2026-11-17",words:records.map(r=>r.w),note:"核心精编完成后，转入托福高频；优先核对结构标记异常及多词性条目。",deferred:[]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
