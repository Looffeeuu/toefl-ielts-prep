/* Batch 020: 100 TOEFL high-frequency words, checked 2026-11-17. Glosses summarized; examples original. */
(function(){
const raw=`
diagnosis|n.|诊断；对疾病或问题性质的判断；复数 diagnoses|ˌdaɪ.əɡˈnəʊ.sɪs|ˌdaɪ.əɡˈnoʊ.sɪs
dialogue|n.|对话；戏剧、电影或小说中的对白；双方的正式对话、意见交流（美式也拼作 dialog）|ˈdaɪ.ə.lɒɡ|ˈdaɪ.ə.lɑːɡ
dictate|v./n.|v. 口述让人记录；命令、规定；决定、支配；n. 命令、准则（正式，常用 dictates）|dɪkˈteɪt|ˈdɪk.teɪt
diet|n./vi./adj.|n. 日常饮食；为减重或医疗目的制定的饮食方案；经常接触的一类内容；vi. 节食；adj. 低糖或低脂的|ˈdaɪ.ət|ˈdaɪ.ət
dignity|n.|尊严；自尊；庄重、端庄|ˈdɪɡ.nə.ti|ˈdɪɡ.nə.t̬i
dimension|n.|尺寸；维度；规模（常用 dimensions）；方面、特点|ˌdaɪˈmen.ʃən|ˌdɪˈmen.ʃən
diplomatic|adj.|外交的；处理人际关系圆融得体的|ˌdɪp.ləˈmæt.ɪk|ˌdɪp.ləˈmæt̬.ɪk
direct|adj./adv./v.|adj. 直接的；直达的；直系的；直率的；完全的；adv. 直接地、径直；v. 指挥；管理；导演；指路；把…对准；正式命令|daɪˈrekt|dɪˈrekt
disappointment|n.|失望；令人失望的人或事物|ˌdɪs.əˈpɔɪnt.mənt|ˌdɪs.əˈpɔɪnt.mənt
disaster|n.|灾难；灾祸；彻底的失败|dɪˈzɑː.stəʳ|dɪˈzæs.tɚ
discipline|n./vt.|n. 纪律；训练；自制力；学科；vt. 惩戒；训练、管教；约束自己|ˈdɪs.ə.plɪn|ˈdɪs.ə.plɪn
discount|n./vt./adj.|n. 折扣；贴现额；vt. 打折；不予重视、不相信；贴现票据（金融）；adj. 折价的、廉价的|ˈdɪs.kaʊnt|ˈdɪs.kaʊnt
discourage|vt.|使泄气、使失去信心；劝阻；阻碍或减少某事发生的可能|dɪˈskʌr.ɪdʒ|dɪˈskɝː.ɪdʒ
discourse|n./vi.|n. 话语、语篇（语言学）；讨论、辩论；正式演说或论述；vi. 谈论、论述；交谈（正式）|ˈdɪs.kɔːs|ˈdɪs.kɔːrs
discrimination|n.|歧视；差别对待；辨别能力（正式）|dɪˌskrɪm.ɪˈneɪ.ʃən|dɪˌskrɪm.əˈneɪ.ʃən
dismiss|vt.|不予考虑；不把…当回事；解雇；让…离开、解散；驳回案件或指控|dɪˈsmɪs|dɪˈsmɪs
display|vt./n.|vt. 展示、陈列；表露感情；显示文字或图像；n. 展览；表演；感情的流露；电子显示|dɪˈspleɪ|dɪˈspleɪ
dispute|n./v.|n. 争论；争端；争执；v. 对…提出异议；质疑；争论|dɪˈspjuːt|dɪˈspjuːt
dissolve|v.|溶解、使溶解；解散组织；解除法律关系；消失、消散|dɪˈzɒlv|dɪˈzɑːlv
distance|n./vt.|n. 距离；远处；疏远、冷淡；vt. 使疏远、撇清关系（distance oneself from）|ˈdɪs.təns|ˈdɪs.təns
distant|adj.|遥远的；久远的；远亲的；疏远冷淡的|ˈdɪs.tənt|ˈdɪs.tənt
distinction|n.|区别；差异；卓越、优秀；荣誉；优秀等级（英式）；独特之处|dɪˈstɪŋk.ʃən|dɪˈstɪŋk.ʃən
distinctive|adj.|独特的；有鲜明特征、易于辨认的|dɪˈstɪŋk.tɪv|dɪˈstɪŋk.tɪv
distract|vt.|分散注意力；使分心；转移注意力|dɪˈstrækt|dɪˈstrækt
distribution|n.|分发；配送；分配；分布；统计分布；股息或股份分派（金融）|ˌdɪs.trɪˈbjuː.ʃən|ˌdɪs.trɪˈbjuː.ʃən
district|n.|行政区；地区；有某种特点的城区|ˈdɪs.trɪkt|ˈdɪs.trɪkt
disturb|vt.|打扰；使不安；弄乱；改变原有状态|dɪˈstɜːb|dɪˈstɝːb
divide|v./n.|v. 分开；分配；分隔；分摊；使产生分歧；除以、除得尽；分组表决（英国议会）；n. 差异；分歧；隔阂|dɪˈvaɪd|dɪˈvaɪd
division|n.|划分；分配；部门；师（军队编制）；比赛级别或分区；除法；分歧、分裂|dɪˈvɪʒ.ən|dɪˈvɪʒ.ən
divorce|n./v.|n. 离婚；分离、脱节（正式）；v. 离婚；使分离|dɪˈvɔːs|dɪˈvɔːrs
doctrine|n.|教义；学说；信条；一套原则，尤指政治、宗教或军事原则|ˈdɒk.trɪn|ˈdɑːk.trɪn
documentary|n./adj.|n. 纪录片；纪实广播或电视节目；adj. 文件的、书面材料的|ˌdɒk.jəˈmen.tər.i|ˌdɑː.kjəˈmen.t̬ɚ.i
doll|n.|玩偶；洋娃娃；可爱或讨人喜欢的人（非正式）|dɒl|dɑːl
domain|n.|领域；管辖范围；互联网域；定义域（数学）|dəˈmeɪn|doʊˈmeɪn
domestic|adj./n.|adj. 家庭的；家务的；国内的；家养的；n. 家佣（旧式）；家庭纠纷或家庭内的暴力事件（主要英式非正式）|dəˈmes.tɪk|dəˈmes.tɪk
dominant|adj./n.|adj. 占主导地位的；最显著的；显性的（遗传学）；n. 属音、音阶第五音（音乐）|ˈdɒm.ɪ.nənt|ˈdɑː.mə.nənt
donate|v.|捐赠；捐款；献血；捐献器官|dəʊˈneɪt|ˈdoʊ.neɪt
donation|n.|捐赠；捐款、捐赠物|dəʊˈneɪ.ʃən|doʊˈneɪ.ʃən
donor|n.|捐赠者；捐赠机构；献血者；器官捐献者|ˈdəʊ.nəʳ|ˈdoʊ.nɚ
dot|n./vt.|n. 小圆点；网址或文件名中点号的读法；摩尔斯电码的短音或短闪光；附点（音乐）；vt. 加点；散布、点缀|dɒt|dɑːt
doubt|n./vt.|n. 怀疑；疑问；不确定；vt. 怀疑；不相信；认为不太可能（b 不发音）|daʊt|daʊt
down|adv./prep./adj./n./vt.|adv. 向下；降低；写下来；首付；prep. 沿着、向下；adj. 沮丧的；失灵的；处于较低位置或落后的；n. 绒羽、绒毛；vt. 迅速吃喝；击落|daʊn|daʊn
downtown|adj./adv./n.|adj. 市中心的；adv. 在市中心、往市中心；n. 市中心（主要美式）|ˌdaʊnˈtaʊn|ˌdaʊnˈtaʊn
draft|n./vt./adj.|n. 草稿；草案；汇票；征兵、选秀（主要美式）；穿堂风、船的吃水深度（美式，英式为 draught）；vt. 起草；绘制初步图纸；征召；选秀选中；adj. 草拟的、未定稿的；桶装的（饮料，美式）；拉重物的（牲畜，美式）|drɑːft|dræft
drag|v./n.|v. 拖、拉；强拉硬拽；拖动屏幕对象；拖沓地进行；用网或钩搜索水底；n. 麻烦乏味的事；阻力；吸一口烟；异装表演或其服饰（非正式）|dræɡ|dræɡ
drain|v./n.|v. 排出液体；沥干；喝光；使疲惫；耗尽资源；脸色变苍白；n. 排水管、排水沟；排水孔（美式）；消耗精力或钱财的事物|dreɪn|dreɪn
drama|n.|戏剧；戏剧创作或表演；剧情片、正剧；戏剧性事件及其紧张刺激|ˈdrɑː.mə|ˈdrɑː.mə
dramatic|adj.|戏剧的、表演的；突然而显著的；激动人心的；夸张做作的|drəˈmæt.ɪk|drəˈmæt̬.ɪk
dramatically|adv.|急剧地、显著地；戏剧性地；夸张做作地|drəˈmæt.ɪ.kəl.i|drəˈmæt̬.ɪ.kəl.i
drawer|n.|抽屉；内裤（旧式，drawers）；支票或汇票的出票人|drɔːʳ|drɔːr
drawing|n.|绘画；素描、图画；图纸；抽签（主要美式）|ˈdrɔː.ɪŋ|ˈdrɑː.ɪŋ
drift|vi./n.|vi. 漂流；缓慢移动；不由自主地逐渐变化；n. 漂移；渐变、趋势；大意；风吹积成的雪堆或沙堆|drɪft|drɪft
drill|n./v.|n. 钻头、钻机；反复练习；操练、演习；drill 说唱音乐；v. 钻孔；钻探；操练；反复灌输|drɪl|drɪl
due|adj./n./adv.|adj. 预定的、预计到来的；到期应付的；应得的；适当的、必要的；due to 表示由于；n. 应得之物（one's due）；会费等定期款项（dues）；adv. 正向、正对某方向|djuː|duː
dumb|adj.|愚蠢的（主要美式非正式）；惊呆说不出话的；不能联网或独立运算的（设备）；不能说话的（旧式，冒犯性）|dʌm|dʌm
dump|v./n.|v. 倾倒、丢弃；抛弃、停止支持；倾销商品；大量抛售；转储数据；n. 垃圾场；脏乱低劣的地方（非正式）；储藏场；数据转储|dʌmp|dʌmp
dynamic|adj./n.|adj. 有活力、有干劲的；不断变化发展的；动态生成的（网页）；动力的（物理）；力度变化的（音乐）；n. 相互影响的力量或关系模式（常用 dynamics）|daɪˈnæm.ɪk|daɪˈnæm.ɪk
dynamics|n.|动力学（学科名通常作单数）；系统或群体中相互影响的力量、关系模式；音乐的力度变化及标记|daɪˈnæmɪks|daɪˈnæmɪks
eager|adj.|热切的；渴望的；急于做某事的|ˈiː.ɡəʳ|ˈiː.ɡɚ
earthquake|n.|地震|ˈɜːθ.kweɪk|ˈɝːθ.kweɪk
echo|n./vi./vt.|n. 回声；使人联想到另一事物的相似之处；vi. 回响；vt. 重复、附和；与…相似、呼应|ˈek.əʊ|ˈek.oʊ
ecological|adj.|生态的；生态学的；与环境有关的|ˌiː.kəˈlɒdʒ.ɪ.kəl|ˌiː.kəˈlɑː.dʒɪ.kəl
economic|adj.|经济的；经济活动的；可盈利的、经济上合算的；节约成本或燃料的（商务用法）|ˌiː.kəˈnɒm.ɪk|ˌiː.kəˈnɑː.mɪk
economics|n.|经济学（学科名作单数）；经济因素或经济可行性（the economics of…，复数用法）|ˌiː.kəˈnɒm.ɪks|ˌiː.kəˈnɑː.mɪks
edge|n./v.|n. 边缘；刀刃；临界点；优势；on edge 指紧张不安；v. 缓慢移动；小幅上升或下降|edʒ|edʒ
education|n.|教育；所受的教育、获得的知识；教育学|ˌedʒ.ʊˈkeɪ.ʃən|ˌedʒ.əˈkeɪ.ʃən
effect|n./vt.|n. 影响；结果；效力；效果；特效（effects）；个人财物（personal effects）；vt. 实现、使发生（正式）|ɪˈfekt|əˈfekt
effective|adj.|有效的；能产生预期效果的；生效的；实际上的|ɪˈfek.tɪv|əˈfek.tɪv
effectiveness|n.|有效性；奏效程度；实际使用条件下的治疗效果（医学，与受控试验中的 efficacy 区别）|ɪˈfek.tɪv.nəs|əˈfek.tɪv.nəs
efficiency|n.|效率；效能；能量转换效率；提高资源利用率的办法（常用 efficiencies）|ɪˈfɪʃ.ən.si|ɪˈfɪʃ.ən.si
efficient|adj.|高效的；能干的；节约资源的、少浪费的|ɪˈfɪʃ.ənt|ɪˈfɪʃ.ənt
elbow|n./vt.|n. 肘；衣袖的肘部；vt. 用肘推挤；用肘碰触|ˈel.bəʊ|ˈel.boʊ
election|n.|选举；当选|ɪˈlek.ʃən|ɪˈlek.ʃən
elegant|adj.|优雅的；雅致的；巧妙简洁的（想法、方案等）|ˈel.ɪ.ɡənt|ˈel.ə.ɡənt
element|n.|要素；组成部分；少量、几分；元素（化学）；基本原理（the elements）；电热元件、炉头|ˈel.ɪ.mənt|ˈel.ə.mənt
elementary|adj.|基本的；初级的；简单的；小学的（美式，elementary school）；元素的、基本粒子的（科学）|ˌel.ɪˈmen.tər.i|ˌel.əˈmen.t̬ɚ.i
elevator|n.|电梯（美式，英式为 lift）；输送机、升运机|ˈel.ɪ.veɪ.təʳ|ˈel.ə.veɪ.t̬ɚ
eligible|adj.|符合条件的；有资格的；适合做结婚对象的、单身且条件优越的|ˈel.ɪ.dʒə.bəl|ˈel.ə.dʒə.bəl
eliminate|vt.|消除；排除；淘汰；杀死（俚语）|iˈlɪm.ɪ.neɪt|iˈlɪm.ə.neɪt
elite|n./adj.|n. 精英；最有权势、财富、教育或技能的群体；adj. 精英的；最优秀的|iˈliːt|iˈliːt
embrace|v./n.|v. 拥抱；热情接受；包含（正式）；n. 拥抱|ɪmˈbreɪs|ɪmˈbreɪs
emerge|vi.|出现；显露；为人所知；逐渐形成；从困境中走出|ɪˈmɜːdʒ|ɪˈmɝːdʒ
emission|n.|排放；发出气体、热或光等；排放物（常用 emissions）|iˈmɪʃ.ən|iˈmɪʃ.ən
emotion|n.|情绪；情感；强烈的感情|ɪˈməʊ.ʃən|ɪˈmoʊ.ʃən
emotional|adj.|情绪的；情感的；感情强烈的、情绪激动的|ɪˈməʊ.ʃən.əl|ɪˈmoʊ.ʃən.əl
emphasis|n.|强调；重视；重读、重音；复数 emphases|ˈem.fə.sɪs|ˈem.fə.sɪs
employ|vt./n.|vt. 雇用；使用、运用（正式）；使忙于（be employed in）；n. 雇用、受雇（in someone's employ）|ɪmˈplɔɪ|ɪmˈplɔɪ
employee|n.|雇员；员工|ɪmˈplɔɪ.iː|ɪmˈplɔɪ.iː
employer|n.|雇主；雇用员工的公司或机构|ɪmˈplɔɪ.əʳ|ɪmˈplɔɪ.ɚ
empty|adj./v./n.|adj. 空的；无人的；空洞无意义的；v. 倒空；喝光；变空；流入（empty into）；n. 空瓶、空容器（常用 empties）|ˈemp.ti|ˈemp.ti
enable|vt.|使能够；使成为可能；启用功能；使某人的有害行为得以继续（心理学）|ɪˈneɪ.bəl|ɪˈneɪ.bəl
enact|vt.|制定、通过法律；使实施；表演、演出故事（正式）|ɪˈnækt|ɪˈnækt
encounter|vt./n.|vt. 偶遇；遇到、遭遇；n. 相遇；偶遇；比赛交锋；性接触|ɪnˈkaʊn.təʳ|ɪnˈkaʊn.t̬ɚ
encourage|vt.|鼓励；给予信心；促进；使某事更可能发生|ɪnˈkʌr.ɪdʒ|ɪnˈkɝː.ɪdʒ
endless|adj.|无尽的；不断的；似乎永无休止的|ˈend.ləs|ˈend.ləs
endorse|vt.|公开支持、赞同；为产品代言；背书签字；在驾驶执照上记违章（英式）；在保险合同上批注条件|ɪnˈdɔːs|ɪnˈdɔːrs
endure|vt./vi.|vt. 忍受、承受；vi. 持续存在、经久不衰|ɪnˈdʒʊəʳ|ɪnˈdʊr
engage|v.|吸引、使感兴趣；参与、接触（engage with/in）；雇用（主要英式正式）；使机械部件啮合；交战；授课或使忙碌（印度英语）|ɪnˈɡeɪdʒ|ɪnˈɡeɪdʒ
enormous|adj.|巨大的；极大的|ɪˈnɔː.məs|əˈnɔːr.məs
enroll|v.|登记；注册；报名入学；招收成员（美式拼写，英式为 enrol）|ɪnˈrəʊl|ɪnˈroʊl
`;
const readings={
  "diagnosis": [
    {
      "label": "n. 单数",
      "uk": "ˌdaɪ.əɡˈnəʊ.sɪs",
      "us": "ˌdaɪ.əɡˈnoʊ.sɪs"
    },
    {
      "label": "n. 复数 diagnoses",
      "uk": "ˌdaɪ.əɡˈnəʊ.siːz",
      "us": "ˌdaɪ.əɡˈnoʊ.siːz"
    }
  ],
  "dictate": [
    {
      "label": "v.",
      "uk": "dɪkˈteɪt",
      "us": "ˈdɪk.teɪt"
    },
    {
      "label": "n.（常用 dictates）",
      "uk": "ˈdɪk.teɪt",
      "us": "ˈdɪk.teɪt"
    }
  ],
  "dimension": [
    {
      "label": "n.",
      "uk": "ˌdaɪˈmen.ʃən",
      "us": "ˌdɪˈmen.ʃən"
    },
    {
      "label": "n. 另一读音",
      "uk": "ˌdɪˈmen.ʃən",
      "us": "ˌdaɪˈmen.ʃən"
    }
  ],
  "direct": [
    {
      "label": "adj./adv./v.",
      "uk": "daɪˈrekt",
      "us": "dɪˈrekt"
    },
    {
      "label": "adj./adv./v. 另一读音",
      "uk": "dɪˈrekt",
      "us": "daɪˈrekt"
    }
  ],
  "discount": [
    {
      "label": "n./adj.",
      "uk": "ˈdɪs.kaʊnt",
      "us": "ˈdɪs.kaʊnt"
    },
    {
      "label": "vt.",
      "uk": "dɪˈskaʊnt",
      "us": "dɪˈskaʊnt"
    },
    {
      "label": "vt. 美式另一读音",
      "uk": "dɪˈskaʊnt",
      "us": "ˈdɪskaʊnt"
    }
  ],
  "dispute": [
    {
      "label": "n./v.",
      "uk": "dɪˈspjuːt",
      "us": "dɪˈspjuːt"
    },
    {
      "label": "n. 另一读音",
      "uk": "ˈdɪs.pjuːt",
      "us": "ˈdɪs.pjuːt"
    }
  ],
  "drama": [
    {
      "label": "n.",
      "uk": "ˈdrɑː.mə",
      "us": "ˈdrɑː.mə"
    },
    {
      "label": "n. 美式另一读音",
      "uk": "ˈdrɑː.mə",
      "us": "ˈdræm.ə"
    }
  ],
  "ecological": [
    {
      "label": "adj.",
      "uk": "ˌiː.kəˈlɒdʒ.ɪ.kəl",
      "us": "ˌiː.kəˈlɑː.dʒɪ.kəl"
    },
    {
      "label": "adj. 美式另一读音",
      "uk": "ˌiː.kəˈlɒdʒ.ɪ.kəl",
      "us": "ˌe.kəˈlɑː.dʒɪ.kəl"
    }
  ],
  "economic": [
    {
      "label": "adj.",
      "uk": "ˌiː.kəˈnɒm.ɪk",
      "us": "ˌiː.kəˈnɑː.mɪk"
    },
    {
      "label": "adj. 另一读音",
      "uk": "ˌek.əˈnɒm.ɪk",
      "us": "ˌek.əˈnɑː.mɪk"
    }
  ],
  "economics": [
    {
      "label": "n.",
      "uk": "ˌiː.kəˈnɒm.ɪks",
      "us": "ˌiː.kəˈnɑː.mɪks"
    },
    {
      "label": "n. 另一读音",
      "uk": "ˌek.əˈnɒm.ɪks",
      "us": "ˌek.əˈnɑː.mɪks"
    }
  ],
  "emphasis": [
    {
      "label": "n. 单数",
      "uk": "ˈem.fə.sɪs",
      "us": "ˈem.fə.sɪs"
    },
    {
      "label": "n. 复数 emphases",
      "uk": "ˈem.fə.siːz",
      "us": "ˈem.fə.siːz"
    }
  ],
  "employee": [
    {
      "label": "n.",
      "uk": "ɪmˈplɔɪ.iː",
      "us": "ɪmˈplɔɪ.iː"
    },
    {
      "label": "n. 另一读音",
      "uk": "ˌem.plɔɪˈiː",
      "us": "ˌem.plɔɪˈiː"
    }
  ]
};
const notes={
  "diagnosis": "单复数音标均由词典明示，diagnoses 尾音 /siːz/ 不照单数 /sɪs/ 读。",
  "dictate": "英美动词主重音不同；名词前重音，不与动词英式主读混为一项。",
  "dimension": "保留词典列出的 /daɪ/ 和 /dɪ/ 两种起音；尺寸与方面两义分列。",
  "direct": "三个词性均可见 /daɪ/ 和 /dɪ/ 两种起音，不能错误地按词性硬分。",
  "discipline": "补学科、自制力与惩戒；不只保留纪律。",
  "discount": "区分名词、形容词前重音与动词主读后重音；保留剑桥商务及美语词典明示的美式动词前重音变体。",
  "discourse": "按剑桥主条保留名词、动词相同的前重音，不按常见名动词规律推造后重音。",
  "discrimination": "歧视与辨别能力分开；后者为正式用法。",
  "dispute": "名词有两种重音，动词主读后重音；不能把名词另一读音套到动词。",
  "distance": "补疏远义及 distance oneself from 的动词用法。",
  "distinction": "差别、卓越、荣誉和英式成绩等级分别处理。",
  "domestic": "补家养动物义，另据 Collins 核实；名词家佣为旧式用法，家庭纠纷为主要英式非正式用法。",
  "dominant": "保留占主导、显性及音乐属音三种语境，不把名词删掉。",
  "down": "区分介副词、形容词、名词绒羽及动词迅速吃喝、击落；不能只列向下。",
  "draft": "区分草稿、银行、征兵或选秀、气流、船只与桶装饮品等义；若干美式用法对应英式 draught。",
  "drawing": "按 Collins 补抽签义；英美主音仍按剑桥主条记录，不由 draw 自行拼出。",
  "drawer": "主条的家具抽屉读作英 /drɔːʳ/、美 /drɔːr/，不是按 draw 与 -er 机械合成；出票人另由商务释义核实。",
  "due": "区分预期时间、到期应付、应得、适当及正向方位；由于限 due to 结构，不把 due 单独当介词。",
  "dumb": "不能说话为旧式且带冒犯性的用法；保留非智能设备义，b 不发音。",
  "dynamic": "形容词不断变化、动力及音乐力度用法与名词关系模式分开。",
  "dynamics": "英美音均直接采用 Collins 对本词的明示记录；学科名动力学作单数，群体关系及音乐力度另分义。",
  "economic": "不只解释经济的；主条有可盈利、经济合算义，商务词典另有节约资源义。",
  "economics": "学科名作单数；the economics of… 描述活动的财务状况或经济可行性，用复数结构。",
  "effect": "正式动词意为使实现，不等于 affect 的影响；effects 可指特效或财物。",
  "effective": "有效、生效、实际上的三义保留，与 efficient 的资源利用效率区别。",
  "effectiveness": "医学实际使用条件下的效果与受控条件下 efficacy 区别，不能不加条件当完全同义。",
  "elementary": "小学义联系 elementary school；基本、初级与科学中的元素、基本粒子用法分开。",
  "eliminate": "主音按剑桥学习词典起音 /i/ 记录；不要因其他词条或派生词而自行改成 /ɪ/。",
  "emission": "剑桥发音页的英美起音均为 /i/；与商务释义页所用 /ɪ/ 不混抄，单列实际采用的发音出处。",
  "emphasis": "单复数音标均来自主词条明示；强调与重音义区别。",
  "employee": "保留词典明示的中间重音和末尾重音两读，不混同 employer。",
  "enable": "补计算机功能启用及心理学的纵容有害行为用法；前者另据 Collins 核实。",
  "endorse": "支持、广告代言、金融背书与驾驶执照记违章分别标注，不泛译为签署。",
  "endure": "及物忍受与不及物持续存在分开；后者另据 Collins 核实。",
  "engage": "吸引、参与、雇用、啮合和交战分别核实；engagé 为另一词，不把其法语式发音并入 engage。",
  "enroll": "美式拼写，英式 enrol；报名和为他人登记均可，音标来自 enroll 本词。"
};
const senses={
  "diagnosis": [
    [
      "n. 诊断",
      "An early diagnosis can change the treatment plan."
    ],
    [
      "n. 对问题的判断",
      "The engineer's diagnosis of the fault proved correct."
    ]
  ],
  "dialogue": [
    [
      "n. 对白、对话",
      "The film's dialogue sounds natural."
    ],
    [
      "n. 正式对话",
      "The two groups resumed dialogue after the meeting."
    ]
  ],
  "dictate": [
    [
      "v. 口述",
      "She will dictate the reply to her assistant."
    ],
    [
      "vt. 决定、支配",
      "Available funds dictate the size of the project."
    ],
    [
      "n. 准则（dictates）",
      "He acted according to the dictates of his conscience."
    ]
  ],
  "diet": [
    [
      "n. 日常饮食",
      "Fresh vegetables are an important part of her diet."
    ],
    [
      "n. 特定饮食方案",
      "The doctor recommended a low-salt diet."
    ],
    [
      "vi. 节食",
      "She chose to exercise rather than diet."
    ],
    [
      "adj. 低糖的",
      "He ordered a diet cola."
    ]
  ],
  "dimension": [
    [
      "n. 尺寸",
      "Measure each dimension of the box before shipping it."
    ],
    [
      "n. 方面",
      "The interviews added a personal dimension to the report."
    ]
  ],
  "diplomatic": [
    [
      "adj. 外交的",
      "The countries restored diplomatic relations."
    ],
    [
      "adj. 圆融得体的",
      "She gave a diplomatic reply to the awkward question."
    ]
  ],
  "direct": [
    [
      "adj. 直接的",
      "There is a direct connection between the two stations."
    ],
    [
      "adj. 直率的",
      "His direct manner can surprise new colleagues."
    ],
    [
      "adv. 径直",
      "The bus goes direct to the terminal."
    ],
    [
      "vt. 导演",
      "She will direct the school's next play."
    ],
    [
      "vt. 指路",
      "Could you direct us to the museum?"
    ]
  ],
  "disappointment": [
    [
      "n. 失望",
      "She tried to hide her disappointment."
    ],
    [
      "n. 令人失望的事物",
      "The exhibition was a disappointment after all the publicity."
    ]
  ],
  "disaster": [
    [
      "n. 灾难",
      "The earthquake was the region's worst disaster in decades."
    ],
    [
      "n. 彻底的失败",
      "Our first attempt at making bread was a disaster."
    ]
  ],
  "discipline": [
    [
      "n. 纪律",
      "The team maintained strict discipline throughout training."
    ],
    [
      "n. 学科",
      "Anthropology is a diverse academic discipline."
    ],
    [
      "n. 自制力",
      "Working from home requires discipline."
    ],
    [
      "vt. 惩戒",
      "The board may discipline staff who break the rules."
    ]
  ],
  "discount": [
    [
      "n. 折扣",
      "Students receive a discount on museum tickets."
    ],
    [
      "vt. 不予重视",
      "We should not discount the witnesses' concerns."
    ],
    [
      "vt. 打折",
      "The shop will discount the remaining stock."
    ],
    [
      "adj. 廉价的",
      "They booked seats on a discount airline."
    ]
  ],
  "discourage": [
    [
      "vt. 使泄气",
      "One poor result should not discourage you."
    ],
    [
      "vt. 劝阻",
      "The signs discourage visitors from feeding the birds."
    ]
  ],
  "discourse": [
    [
      "n. 语篇",
      "Spoken discourse often contains unfinished sentences."
    ],
    [
      "n. 公共讨论",
      "The issue has shaped public discourse for years."
    ],
    [
      "vi. 论述",
      "The guests discourse on art until late at night."
    ]
  ],
  "discrimination": [
    [
      "n. 歧视",
      "The policy aims to prevent age discrimination."
    ],
    [
      "n. 辨别能力",
      "The task tests visual discrimination between similar shapes."
    ]
  ],
  "dismiss": [
    [
      "vt. 不予考虑",
      "Do not dismiss the idea before examining the evidence."
    ],
    [
      "vt. 解雇",
      "The company may dismiss employees for serious misconduct."
    ],
    [
      "vt. 让离开",
      "The teacher will dismiss the class at noon."
    ],
    [
      "vt. 驳回",
      "The judge agreed to dismiss the case."
    ]
  ],
  "display": [
    [
      "vt. 陈列",
      "The museum will display the newly restored paintings."
    ],
    [
      "vt. 表露",
      "The players display remarkable confidence."
    ],
    [
      "n. 电子显示",
      "The device has a clear digital display."
    ]
  ],
  "dispute": [
    [
      "n. 争端",
      "The neighbours settled their boundary dispute."
    ],
    [
      "vt. 质疑",
      "Several researchers dispute the report's conclusion."
    ]
  ],
  "dissolve": [
    [
      "vi. 溶解",
      "The salt will dissolve in warm water."
    ],
    [
      "vt. 解散",
      "The partners agreed to dissolve the company."
    ],
    [
      "vi. 消散",
      "The tension began to dissolve as they talked."
    ]
  ],
  "distance": [
    [
      "n. 距离",
      "The distance between the villages is eight kilometres."
    ],
    [
      "n. 疏远",
      "She sensed a growing distance between them."
    ],
    [
      "vt. 撇清关系",
      "The senator tried to distance herself from the proposal."
    ]
  ],
  "distant": [
    [
      "adj. 遥远的",
      "They could see a distant mountain range."
    ],
    [
      "adj. 远亲的",
      "A distant cousin sent us the photograph."
    ],
    [
      "adj. 冷淡的",
      "He seemed distant during the conversation."
    ]
  ],
  "distinction": [
    [
      "n. 区别",
      "The distinction between the two methods is important."
    ],
    [
      "n. 卓越",
      "She is a scientist of great distinction."
    ],
    [
      "n. 优秀等级（英式）",
      "He passed the course with distinction."
    ]
  ],
  "distribution": [
    [
      "n. 分发",
      "Volunteers organized the distribution of blankets."
    ],
    [
      "n. 分布",
      "The map shows the distribution of coastal settlements."
    ],
    [
      "n. 统计分布",
      "The scores follow a roughly normal distribution."
    ]
  ],
  "disturb": [
    [
      "vt. 打扰",
      "Please do not disturb the students during the test."
    ],
    [
      "vt. 使不安",
      "The disturbing account may disturb younger readers."
    ],
    [
      "vt. 弄乱、改变原状",
      "Do not disturb the soil around the roots."
    ]
  ],
  "divide": [
    [
      "vt. 分开",
      "Divide the class into four groups."
    ],
    [
      "vt. 除以",
      "Divide the total by the number of samples."
    ],
    [
      "n. 隔阂",
      "The new bridge helped close the divide between the communities."
    ]
  ],
  "division": [
    [
      "n. 部门",
      "She leads the company's research division."
    ],
    [
      "n. 除法",
      "The children practised multiplication and division."
    ],
    [
      "n. 分歧",
      "The vote revealed a deep division within the party."
    ],
    [
      "n. 师（军队）",
      "The division advanced toward the border."
    ]
  ],
  "divorce": [
    [
      "n. 离婚",
      "They agreed to a divorce after a year apart."
    ],
    [
      "n. 脱节",
      "The report exposes a divorce between policy and practice."
    ],
    [
      "vt. 使分离",
      "We cannot divorce the results from their historical context."
    ]
  ],
  "documentary": [
    [
      "n. 纪录片",
      "The documentary follows a team of ocean researchers."
    ],
    [
      "adj. 书面材料的",
      "The claim requires documentary evidence."
    ]
  ],
  "domain": [
    [
      "n. 领域",
      "This question falls within the domain of public health."
    ],
    [
      "n. 互联网域",
      "The university manages its own internet domain."
    ],
    [
      "n. 定义域",
      "The function's domain contains only positive numbers."
    ]
  ],
  "domestic": [
    [
      "adj. 国内的",
      "Domestic demand grew during the summer."
    ],
    [
      "adj. 家务的",
      "They share the domestic chores equally."
    ],
    [
      "adj. 家养的",
      "The domestic cat waited by the kitchen door."
    ],
    [
      "n. 家佣（旧式）",
      "The household once employed a live-in domestic."
    ]
  ],
  "dominant": [
    [
      "adj. 占主导地位的",
      "One species became dominant in the restored habitat."
    ],
    [
      "adj. 显性的",
      "The trait is controlled by a dominant allele."
    ],
    [
      "n. 属音（音乐）",
      "In C major, G is the dominant."
    ]
  ],
  "donor": [
    [
      "n. 捐赠者",
      "An anonymous donor paid for the new equipment."
    ],
    [
      "n. 器官捐献者",
      "The patient received a kidney from a living donor."
    ]
  ],
  "dot": [
    [
      "n. 小圆点",
      "Mark each location with a red dot."
    ],
    [
      "vt. 加点",
      "Remember to dot the letter i."
    ],
    [
      "vt. 散布、点缀",
      "Small farms dot the valley."
    ]
  ],
  "doubt": [
    [
      "n. 怀疑",
      "The new evidence raised doubt about the claim."
    ],
    [
      "vt. 认为不太可能",
      "I doubt that the repairs will finish today."
    ]
  ],
  "down": [
    [
      "adv. 向下",
      "The lift is going down."
    ],
    [
      "prep. 沿着",
      "Walk down the lane toward the river."
    ],
    [
      "adj. 沮丧的",
      "She felt down after saying goodbye."
    ],
    [
      "adj. 暂停运作的",
      "The network is down for maintenance."
    ],
    [
      "n. 绒羽",
      "The jacket is filled with goose down."
    ],
    [
      "vt. 迅速喝下",
      "He can down a glass of water in seconds."
    ]
  ],
  "downtown": [
    [
      "adv. 在市中心",
      "She works downtown near the old station."
    ],
    [
      "adj. 市中心的",
      "The downtown streets are busy at lunchtime."
    ],
    [
      "n. 市中心",
      "The river separates downtown from the northern suburbs."
    ]
  ],
  "draft": [
    [
      "n. 草稿",
      "The first draft needs a clearer conclusion."
    ],
    [
      "n. 穿堂风（美式）",
      "A cold draft came through the window."
    ],
    [
      "n. 汇票",
      "The buyer paid with a bank draft."
    ],
    [
      "n. 征兵（主要美式）",
      "The draft brought thousands into military service."
    ],
    [
      "vt. 起草",
      "We need to draft a response before noon."
    ],
    [
      "adj. 桶装的（美式）",
      "The restaurant serves draft beer from local breweries."
    ],
    [
      "adj. 拉重物的（美式）",
      "A draft horse pulled the loaded cart."
    ]
  ],
  "drag": [
    [
      "vt. 拖拉",
      "Do not drag the chair across the wooden floor."
    ],
    [
      "vt. 拖动屏幕对象",
      "Drag the file into the folder."
    ],
    [
      "vi. 拖沓地进行",
      "The meeting began to drag after lunch."
    ],
    [
      "n. 阻力",
      "The streamlined shape reduces drag."
    ],
    [
      "n. 麻烦乏味的事",
      "Filling out all these forms is a drag."
    ],
    [
      "n. 异装表演",
      "The theatre hosts a drag show on Fridays."
    ]
  ],
  "drain": [
    [
      "vt. 沥干",
      "Drain the beans before adding them to the soup."
    ],
    [
      "vt. 使疲惫",
      "The long commute can drain your energy."
    ],
    [
      "n. 排水管",
      "Leaves have blocked the drain."
    ],
    [
      "n. 消耗资源的事物",
      "Repeated repairs are a drain on our budget."
    ]
  ],
  "drama": [
    [
      "n. 戏剧艺术",
      "She studied drama at college."
    ],
    [
      "n. 剧情作品",
      "The new drama follows a family over three decades."
    ],
    [
      "n. 紧张刺激",
      "Nothing matched the drama of the final race."
    ]
  ],
  "dramatic": [
    [
      "adj. 显著的",
      "The region has seen a dramatic rise in rainfall."
    ],
    [
      "adj. 戏剧表演的",
      "The students joined a dramatic society."
    ],
    [
      "adj. 夸张做作的",
      "His dramatic reaction surprised everyone."
    ]
  ],
  "dramatically": [
    [
      "adv. 显著地",
      "The cost fell dramatically after production expanded."
    ],
    [
      "adv. 夸张地",
      "She paused dramatically before revealing the answer."
    ]
  ],
  "drawer": [
    [
      "n. 抽屉",
      "The spare keys are in the top drawer."
    ],
    [
      "n. 出票人",
      "The cheque names the drawer and the payee."
    ]
  ],
  "drawing": [
    [
      "n. 图画",
      "Her drawing shows the valley in winter."
    ],
    [
      "n. 抽签（主要美式）",
      "The prize drawing will take place on Saturday."
    ]
  ],
  "drift": [
    [
      "vi. 漂流",
      "The boat began to drift toward the reeds."
    ],
    [
      "n. 大意",
      "I understood the general drift of his argument."
    ],
    [
      "n. 雪堆",
      "The road disappeared beneath a deep snow drift."
    ],
    [
      "n. 渐变趋势",
      "The survey revealed a drift toward remote working."
    ]
  ],
  "drill": [
    [
      "n. 钻机",
      "The workers used a drill to make the holes."
    ],
    [
      "n. 演习",
      "The school held a fire drill yesterday."
    ],
    [
      "vt. 钻孔",
      "Drill a small hole near each corner."
    ],
    [
      "vt. 反复训练",
      "The instructor will drill the team on emergency procedures."
    ]
  ],
  "due": [
    [
      "adj. 预计到来的",
      "The next train is due at six."
    ],
    [
      "adj. 到期应付的",
      "The final payment is due tomorrow."
    ],
    [
      "adv. 正向某方向",
      "The cabin stands due north of the lake."
    ],
    [
      "n. 会费（dues）",
      "Members pay their annual dues in January."
    ]
  ],
  "dumb": [
    [
      "adj. 愚蠢的（非正式）",
      "That was a dumb mistake, but we can fix it."
    ],
    [
      "adj. 惊呆的",
      "The unexpected announcement struck him dumb."
    ],
    [
      "adj. 非智能的（设备）",
      "The system can control a dumb terminal."
    ]
  ],
  "dump": [
    [
      "vt. 倾倒",
      "Do not dump waste into the river."
    ],
    [
      "vt. 抛售",
      "Investors began to dump their shares."
    ],
    [
      "vt. 转储数据",
      "The program will dump the results to a file."
    ],
    [
      "n. 垃圾场",
      "The old dump is being converted into a park."
    ]
  ],
  "dynamic": [
    [
      "adj. 有活力的",
      "She is a dynamic leader with plenty of new ideas."
    ],
    [
      "adj. 不断变化的",
      "Language is a dynamic system."
    ],
    [
      "n. 相互影响的关系模式",
      "The appointment changed the dynamic within the team."
    ]
  ],
  "dynamics": [
    [
      "n. 动力学",
      "The course introduces the dynamics of moving bodies."
    ],
    [
      "n. 群体关系模式",
      "The study explores the dynamics of small teams."
    ],
    [
      "n. 音乐力度变化",
      "The conductor asked for clearer dynamics in the final passage."
    ]
  ],
  "echo": [
    [
      "n. 回声",
      "An echo returned from the far wall of the cave."
    ],
    [
      "vi. 回响",
      "Their footsteps echo through the empty hall."
    ],
    [
      "vt. 附和",
      "Several speakers echo the chairman's concerns."
    ]
  ],
  "economic": [
    [
      "adj. 经济的",
      "The report examines economic growth in coastal regions."
    ],
    [
      "adj. 经济上合算的",
      "At that price, extraction is no longer economic."
    ]
  ],
  "economics": [
    [
      "n. 经济学",
      "She plans to study economics at university."
    ],
    [
      "n. 经济可行性",
      "The economics of the project depend on lower transport costs."
    ]
  ],
  "edge": [
    [
      "n. 边缘",
      "Stay away from the edge of the platform."
    ],
    [
      "n. 刀刃",
      "The knife has a sharp edge."
    ],
    [
      "n. 优势",
      "Her experience gave her an edge over other candidates."
    ],
    [
      "vi. 缓慢移动",
      "The boat began to edge away from the shore."
    ]
  ],
  "education": [
    [
      "n. 教育",
      "Every child should have access to education."
    ],
    [
      "n. 教育学",
      "She earned a degree in education."
    ]
  ],
  "effect": [
    [
      "n. 影响",
      "The new timetable had little effect on attendance."
    ],
    [
      "n. 个人财物（effects）",
      "He collected his personal effects before leaving."
    ],
    [
      "vt. 实现",
      "The reforms aim to effect lasting change."
    ]
  ],
  "effective": [
    [
      "adj. 有效的",
      "The new filter is effective against fine dust."
    ],
    [
      "adj. 生效的",
      "The revised rules are effective from Monday."
    ],
    [
      "adj. 实际上的",
      "The investors gained effective control of the company."
    ]
  ],
  "efficiency": [
    [
      "n. 工作效率",
      "The new system improved office efficiency."
    ],
    [
      "n. 能量转换效率",
      "The engine has a higher thermal efficiency."
    ]
  ],
  "elbow": [
    [
      "n. 肘",
      "She rested her elbow on the desk."
    ],
    [
      "vt. 用肘推挤",
      "He tried to elbow his way through the crowd."
    ]
  ],
  "elegant": [
    [
      "adj. 优雅的",
      "She wore an elegant blue jacket."
    ],
    [
      "adj. 巧妙简洁的",
      "The mathematician found an elegant solution."
    ]
  ],
  "element": [
    [
      "n. 要素",
      "Trust is an essential element of teamwork."
    ],
    [
      "n. 元素",
      "Oxygen is a chemical element."
    ],
    [
      "n. 少量、几分",
      "There was an element of doubt in his reply."
    ],
    [
      "n. 电热元件",
      "The heating element needs replacing."
    ]
  ],
  "elementary": [
    [
      "adj. 基本的",
      "The textbook assumes elementary knowledge of algebra."
    ],
    [
      "adj. 小学的（美式）",
      "She teaches at an elementary school."
    ]
  ],
  "elevator": [
    [
      "n. 电梯（美式）",
      "Take the elevator to the fifth floor."
    ],
    [
      "n. 输送机",
      "The elevator carries grain into the storage building."
    ]
  ],
  "eligible": [
    [
      "adj. 有资格的",
      "Final-year students are eligible for the scholarship."
    ],
    [
      "adj. 条件优越的结婚对象",
      "The magazine described him as an eligible bachelor."
    ]
  ],
  "eliminate": [
    [
      "vt. 排除",
      "The tests can eliminate several possible causes."
    ],
    [
      "vt. 淘汰",
      "The next round will eliminate half the teams."
    ]
  ],
  "elite": [
    [
      "n. 精英群体",
      "The policy mainly benefited the financial elite."
    ],
    [
      "adj. 最优秀的",
      "The centre trains elite athletes."
    ]
  ],
  "embrace": [
    [
      "v. 拥抱",
      "The sisters embrace when they meet at the station."
    ],
    [
      "vt. 热情接受",
      "The team is ready to embrace new methods."
    ],
    [
      "vt. 包含",
      "The programme will embrace several related disciplines."
    ]
  ],
  "emerge": [
    [
      "vi. 出现",
      "New shoots emerge from the soil in spring."
    ],
    [
      "vi. 为人所知",
      "The full facts may emerge during the inquiry."
    ],
    [
      "vi. 走出困境",
      "The company hopes to emerge from bankruptcy next year."
    ]
  ],
  "emission": [
    [
      "n. 排放",
      "The process involves the emission of heat."
    ],
    [
      "n. 排放物",
      "The factory has reduced its emissions."
    ]
  ],
  "emphasis": [
    [
      "n. 重视",
      "The course puts emphasis on practical skills."
    ],
    [
      "n. 重读",
      "She placed extra emphasis on the final word."
    ]
  ],
  "employ": [
    [
      "vt. 雇用",
      "The laboratory plans to employ two technicians."
    ],
    [
      "vt. 运用",
      "The researchers employ several methods to check the results."
    ],
    [
      "n. 受雇关系",
      "He remained in their employ for twenty years."
    ]
  ],
  "empty": [
    [
      "adj. 空的",
      "The box is completely empty."
    ],
    [
      "adj. 空洞的",
      "The workers were tired of empty promises."
    ],
    [
      "vt. 倒空",
      "Please empty the bin before you leave."
    ],
    [
      "vi. 流入",
      "The river will empty into the bay."
    ],
    [
      "n. 空瓶（empties）",
      "Bring the empties back for recycling."
    ]
  ],
  "enable": [
    [
      "vt. 使能够",
      "The grant will enable her to finish the project."
    ],
    [
      "vt. 启用",
      "Enable the backup feature before you edit the files."
    ]
  ],
  "enact": [
    [
      "vt. 制定法律",
      "The government plans to enact stricter safety laws."
    ],
    [
      "vt. 表演",
      "The children will enact a traditional story."
    ]
  ],
  "encounter": [
    [
      "vt. 偶遇",
      "Visitors may encounter deer along the path."
    ],
    [
      "vt. 遭遇",
      "The project could encounter funding problems."
    ],
    [
      "n. 比赛交锋",
      "Their last encounter ended in a draw."
    ]
  ],
  "encourage": [
    [
      "vt. 给予信心",
      "Her teachers encourage her to keep writing."
    ],
    [
      "vt. 促进",
      "Lower fares encourage public transport use."
    ]
  ],
  "endorse": [
    [
      "vt. 公开支持",
      "The committee will endorse the proposal."
    ],
    [
      "vt. 代言",
      "The athlete agreed to endorse the new shoes."
    ],
    [
      "vt. 背书签字",
      "Please endorse the cheque before depositing it."
    ]
  ],
  "endure": [
    [
      "vt. 忍受",
      "The crew had to endure several days without fresh food."
    ],
    [
      "vi. 持续存在",
      "Their friendship may endure for decades."
    ]
  ],
  "engage": [
    [
      "vt. 吸引",
      "The opening scene should engage the audience."
    ],
    [
      "vt. 雇用（正式）",
      "We will engage a specialist to inspect the roof."
    ],
    [
      "vi. 啮合",
      "The gears engage when the lever moves forward."
    ],
    [
      "vi. 参与",
      "Students engage in small-group discussions."
    ]
  ],
  "enroll": [
    [
      "vi. 报名",
      "You can enroll in the course online."
    ],
    [
      "vt. 招收、登记",
      "The school will enroll thirty new pupils."
    ]
  ]
};
const phPages=new Set("disaster discount distance distinction division district donation drag drill drift economics efficiency emission employee".split(" "));
const records=raw.trim().split('\n').map(line=>{
 const [w,pos,cn,uk,us]=line.split('|'),head=w.toLowerCase(),source=`https://dictionary.cambridge.org/dictionary/english/${head}`;
 return {w,pos,cn,source,checkedOn:"2026-11-17",batch:"020",file:"js/lexicon-review-020.js",
 reason:notes[w]||"依据所链词典核对现代常用学习义、词性及英美音；中文释义为归纳，例句为原创，专业、地区或语域差异另作说明。",
 senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
 pronunciationSource:phPages.has(head)?`https://dictionary.cambridge.org/pronunciation/english/${head}`:source};
});
const get=w=>records.find(r=>r.w===w);
for(const w of ['drawing','domestic','down','enable','endure','dynamics']) get(w).sources=[get(w).source,'https://www.collinsdictionary.com/dictionary/english/'+w];
get('dynamics').pronunciationSource='https://www.collinsdictionary.com/dictionary/english/dynamics';
get('elementary').sources=[get('elementary').source,'https://dictionary.cambridge.org/dictionary/english/elementary-school'];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"020",checkedOn:"2026-11-17",words:records.map(r=>r.w),note:"托福高频接续批次；核对多词性、多义、主要分读和地区用法，保留逐词来源。",deferred:[]}]);
for(const r of records){
 window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
 window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
