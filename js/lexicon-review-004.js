/* Batch 004: 100 new entries, checked against linked dictionaries 2026-11-16.
   Glosses summarize learner meanings; examples are original, not quotations.
   Optional-schwa typography flattened. Source-specific differences are retained. */
(function(){
const raw=`
agility|n.|动作敏捷；思维敏锐；灵活应变能力；敏捷性（管理）|əˈdʒɪl.ə.ti|əˈdʒɪl.ə.t̬i
agitate|v.|使不安；使生气；鼓动争取；搅动（液体）|ˈædʒ.ɪ.teɪt|ˈædʒ.ə.teɪt
agitation|n.|焦虑不安；鼓动；抗议活动；搅动（专业）|ˌædʒ.ɪˈteɪ.ʃən|ˌædʒ.əˈteɪ.ʃən
aglow|adj.|发光的；色彩明亮的；容光焕发的（文学，作表语）|əˈɡləʊ|əˈɡloʊ
agonize|vi.|苦苦思索；因难以决定而苦恼（常接 over/about；英式常拼 agonise）|ˈæɡ.ə.naɪz|ˈæɡ.ə.naɪz
agony|n.|极度的身体或精神痛苦|ˈæɡ.ə.ni|ˈæɡ.ə.ni
agrarian|adj.|土地的；农业的；以农业为主的（专业或正式）|əˈɡreə.ri.ən|əˈɡrer.i.ən
agreeable|adj.|令人愉快的；可接受的；愿意同意或接受的|əˈɡriː.ə.bəl|əˈɡriː.ə.bəl
agreement|n.|同意；意见一致；协议；协定|əˈɡriː.mənt|əˈɡriː.mənt
agriculture|n.|农业；农耕|ˈæɡ.rɪ.kʌl.tʃəʳ|ˈæɡ.rə.kʌl.tʃɚ
ailment|n.|疾病；健康问题（常指小病）|ˈeɪl.mənt|ˈeɪl.mənt
aim|n./v.|n. 目的；目标；瞄准；准头　v. 瞄准；对准；旨在；打算|eɪm|eɪm
air|n./v.|n. 空气；空中；神态；气氛；曲调　v. 公开表达；播出；通风；晾晒|eəʳ|er
airborne|adj.|在空中的；由空气传播的；由飞机运送的|ˈeə.bɔːn|ˈer.bɔːrn
aircraft|n.|航空器；飞机（单复数同形）|ˈeə.krɑːft|ˈer.kræft
airport|n.|机场；航空站|ˈeə.pɔːt|ˈer.pɔːrt
aisle|n.|（座位或货架之间的）过道；通道；（教堂）侧廊|aɪl|aɪl
ajar|adj.|（门等）微开的；半开的（作表语）|əˈdʒɑːʳ|əˈdʒɑːr
akin|adj.|相似的；类似的（作表语，常接 to）|əˈkɪn|əˈkɪn
alarm|n./vt.|n. 惊恐；警报；报警器　vt. 使惊恐；使担忧|əˈlɑːm|əˈlɑːrm
albeit|conj.|虽然；尽管（正式）|ɔːlˈbiː.ɪt|ɑːlˈbiː.ɪt
album|n.|音乐专辑；相册；集邮册|ˈæl.bəm|ˈæl.bəm
alchemy|n.|炼金术；如魔法般有效的转变（文学）|ˈæl.kə.mi|ˈæl.kə.mi
alder|n.|桤木；桤木树|ˈɔːl.dəʳ|ˈɔːl.dɚ
alert|adj./vt./n.|adj. 警觉的；机敏的　vt. 提醒；使意识到危险　n. 警报；警戒|əˈlɜːt|əˈlɝːt
algae|n.|藻类（复数；单数 alga）|ˈæl.ɡiː|ˈæl.dʒiː
algebra|n.|代数；代数学|ˈæl.dʒə.brə|ˈæl.dʒə.brə
alien|adj./n.|adj. 陌生的；外国的；外星的　n. 外星生物；非本国公民（法律用语）|ˈeɪ.li.ən|ˈeɪ.li.ən
alienate|vt.|使疏远；使不再支持；使感到被排斥|ˈeɪ.li.ə.neɪt|ˈeɪ.li.ə.neɪt
alight|adj./vi.|adj. 燃烧着的；明亮的；兴奋的　vi. 下车；降落；停落|əˈlaɪt|əˈlaɪt
alignment|n.|排成直线；对齐；结盟；一致；人工智能对齐（计算机）|əˈlaɪn.mənt|əˈlaɪn.mənt
alike|adj./adv.|adj. 相似的（作表语）　adv. 相似地；同样地；两者都|əˈlaɪk|əˈlaɪk
alkali|n.|碱（化学）|ˈæl.kəl.aɪ|ˈæl.kəl.aɪ
all|det./pron./adv.|det./pron. 所有；全部；唯一的事物　adv. 完全；全然|ɔːl|ɑːl
allegation|n.|未经证实的指控或指称（通常涉及违法或不当行为）|ˌæl.əˈɡeɪ.ʃən|ˌæl.əˈɡeɪ.ʃən
allege|vt.|声称；指控（尚未给出证据）|əˈledʒ|əˈledʒ
allegiance|n.|忠诚；效忠；拥护（正式）|əˈliː.dʒəns|əˈliː.dʒəns
allegory|n.|寓言；寓意作品；讽喻|ˈæl.ə.ɡə.ri|ˈæl.ə.ɡɔːr.i
allergic|adj.|过敏的；过敏引起的；极反感的（幽默）|əˈlɜː.dʒɪk|əˈlɝː.dʒɪk
allergy|n.|过敏；过敏症|ˈæl.ə.dʒi|ˈæl.ɚ.dʒi
alleviate|vt.|减轻；缓解（疼痛、问题等，正式）|əˈliː.vi.eɪt|əˈliː.vi.eɪt
alley|n.|巷；小径；（保龄球）球道；（网球）边线外侧长条区域|ˈæl.i|ˈæl.i
alliance|n.|联盟；同盟；结盟；合作协议|əˈlaɪ.əns|əˈlaɪ.əns
alligator|n.|短吻鳄|ˈæl.ɪ.ɡeɪ.təʳ|ˈæl.ə.ɡeɪ.t̬ɚ
alliteration|n.|头韵（相邻词语开头的相同语音重复）|əˌlɪt.əˈreɪ.ʃən|əˌlɪt̬.əˈreɪ.ʃən
allocate|vt.|分配；拨出；分派|ˈæl.ə.keɪt|ˈæl.ə.keɪt
allot|vt.|分配；拨给；分派|əˈlɒt|əˈlɑːt
allowance|n.|津贴；零用钱；限额；预留量；酌情考虑；体谅（make allowances for）|əˈlaʊ.əns|əˈlaʊ.əns
alloy|n./vt.|n. 合金　vt. 使（金属）合成合金；掺合|ˈæl.ɔɪ|ˈæl.ɔɪ
allude|vi.|暗指；间接提到（正式，allude to）|əˈluːd|əˈluːd
allure|n.|吸引力；魅力；诱惑力|əˈljʊəʳ|əˈlʊr
allusion|n.|暗指；间接提及；典故|əˈluː.ʒən|əˈluː.ʒən
ally|n./v.|n. 盟国；盟友；支持者　v. （使）结盟；（使）联合|ˈæl.aɪ|ˈæl.aɪ
aloft|adv.|在空中；在高处；向高处（正式）|əˈlɒft|əˈlɑːft
alone|adj./adv.|单独的；独自地；仅仅；只有（不必然表示孤独）|əˈləʊn|əˈloʊn
alongside|prep./adv.|在…旁边；在旁边；与…一起；同时|əˌlɒŋˈsaɪd|əˈlɑːŋ.saɪd
aloof|adj.|冷淡的；疏远的；不参与的|əˈluːf|əˈluːf
alphabetical|adj.|按字母顺序排列的|ˌæl.fəˈbet.ɪ.kəl|ˌæl.fəˈbet̬.ɪ.kəl
alter|v.|（使）改变；修改；改衣服；给动物绝育（美，委婉语）|ˈɒl.təʳ|ˈɑːl.tɚ
alteration|n.|改变；修改；（衣服的）改制|ˌɒl.təˈreɪ.ʃən|ˌɑːl.t̬əˈreɪ.ʃən
alternate|v./adj./n.|v. 交替；轮流；使交替　adj. 交替的；每隔一个的；替代的（尤美）　n. 替补者；代理人（美）|ˈɒl.tə.neɪt|ˈɑːl.tɚ.neɪt
alternately|adv.|交替地；轮流地|ɒlˈtɜː.nət.li|ɑːlˈtɝː.nət.li
alternation|n.|交替；轮流|ˌɒl.təˈneɪ.ʃən|ˌɑːl.tɚˈneɪ.ʃən
alternative|adj./n.|adj. 可替代的；供选择的；非传统的　n. 可供选择的事物；替代方案|ɒlˈtɜː.nə.tɪv|ɑːlˈtɝː.nə.t̬ɪv
altitude|n.|海拔；高度；（三角形等的）高（几何）|ˈæl.tɪ.tʃuːd|ˈæl.tə.tuːd
altruism|n.|利他主义；无私助人的精神|ˈæl.tru.ɪ.zəm|ˈæl.tru.ɪ.zəm
aluminium|n.|铝（主要用于英式英语的拼写）|ˌæl.jəˈmɪn.i.əm|ˌæl.jəˈmɪn.i.əm
aluminum|n.|铝（主要用于美式英语的拼写）|əˈluː.mə.nəm|əˈluː.mə.nəm
amalgamate|v.|（使机构、团体等）合并；联合|əˈmæl.ɡə.meɪt|əˈmæl.ɡə.meɪt
amateur|adj./n.|adj. 业余的；非职业的　n. 业余爱好者；外行（贬义）|ˈæm.ə.təʳ|ˈæm.ə.tʃɚ
amaze|vt.|使大为惊奇；使惊叹|əˈmeɪz|əˈmeɪz
amazement|n.|惊奇；惊诧|əˈmeɪz.mənt|əˈmeɪz.mənt
ambassador|n.|大使；代表；形象代言人|æmˈbæs.ə.dəʳ|æmˈbæs.ə.dɚ
ambience|n.|（场所的）氛围；情调（也作 ambiance）|ˈæm.bi.əns|ˌɑːm.biˈɑːns
ambiguity|n.|含糊；歧义；有多种解释的表述|ˌæm.bɪˈɡjuː.ə.ti|ˌæm.bɪˈɡjuː.ə.t̬i
ambition|n.|志向；抱负；雄心；野心|æmˈbɪʃ.ən|æmˈbɪʃ.ən
ambivalence|n.|矛盾心理；同时持有相反感受；态度不确定|æmˈbɪv.ə.ləns|æmˈbɪv.ə.ləns
ambivalent|adj.|心情矛盾的；同时有相反感受的；态度不确定的|æmˈbɪv.ə.lənt|æmˈbɪv.ə.lənt
amble|vi./n.|vi. 缓步行走；漫步　n. 悠闲的散步|ˈæm.bəl|ˈæm.bəl
ambulance|n.|救护车|ˈæm.bjə.ləns|ˈæm.bjə.ləns
ambush|vt./n.|vt. 伏击　n. 埋伏；伏击|ˈæm.bʊʃ|ˈæm.bʊʃ
amenable|adj.|愿意接受建议的；易于说服的；乐于合作的|əˈmiː.nə.bəl|əˈmiː.nə.bəl
amend|vt.|修改；修订（文本，尤指法律或法律文件）|əˈmend|əˈmend
amendment|n.|修改；修订；修正案|əˈmend.mənt|əˈmend.mənt
amenity|n.|便利设施；生活配套设施（常用复数 amenities）|əˈmiː.nə.ti|əˈmen.ə.t̬i
amiable|adj.|亲切友好的；和蔼可亲的|ˈeɪ.mi.ə.bəl|ˈeɪ.mi.ə.bəl
amicable|adj.|友好的；（协议、决定等）和睦达成的|ˈæm.ɪ.kə.bəl|ˈæm.ɪ.kə.bəl
amid|prep.|在…中间；在…之中；被…围绕（正式）|əˈmɪd|əˈmɪd
amidst|prep.|在…中间；在…之中（正式，同 amid）|əˈmɪdst|əˈmɪdst
ammunition|n.|弹药；论据；攻击或反驳的材料|ˌæm.jəˈnɪʃ.ən|ˌæm.jəˈnɪʃ.ən
amnesia|n.|失忆；遗忘症（医学）|æmˈniː.zi.ə|æmˈniː.ʒə
amnesty|n.|大赦；特赦；免予起诉期或宽限期|ˈæm.nə.sti|ˈæm.nə.sti
amount|n./vi.|n. 数量；数额；总额　vi. 总计；等同于（amount to）|əˈmaʊnt|əˈmaʊnt
amphibian|adj./n.|adj. 两栖动物的；水陆两用的　n. 两栖动物；水陆两用车辆或飞机|æmˈfɪb.i.ən|æmˈfɪb.i.ən
ample|adj.|充足的；绰绰有余的；（体形）丰满的（文学）|ˈæm.pəl|ˈæm.pəl
amplification|n.|（声音的）放大；扩音；补充说明；进一步阐述（正式）|ˌæm.plɪ.fɪˈkeɪ.ʃən|ˌæm.plə.fəˈkeɪ.ʃən
amplify|vt.|放大（声音、信号）；增强（效果）；扩大（信息传播或影响）|ˈæm.plɪ.faɪ|ˈæm.plə.faɪ
amuse|v.|使发笑；逗乐；使开心；使消遣|əˈmjuːz|əˈmjuːz
analogy|n.|类比；类推；相似之处的比较|əˈnæl.ə.dʒi|əˈnæl.ə.dʒi
analytical|adj.|分析的；善于分析的；注重细致分析的|ˌæn.əˈlɪt.ɪ.kəl|ˌæn.əˈlɪt̬.ɪ.kəl
`;
const notes={
  album:"补齐常用音乐专辑义，不再只写唱片套或粘贴簿。",
  allegation:"明确未证实的指控，不把申辩、一般主张当作无标记常用释义。",
  aglow:"依据学习词典标注作表语的形容词，补充文学语域。",
  ajar:"主学习义为门等微开，移除无上下文的不和谐；所查词典标注形容词。",
  alone:"区分客观独自一人与情绪上的孤独，补齐只有、仅仅。",
  ambivalent:"强调同时具有相反感受，不泛化为表述模棱两可。",
  alphabetical:"限定按字母顺序排列，不泛化成所有与字母有关的。",
  amphibian:"移除未获当前词典支持的水旱两生植物，区分动物与车辆用法。",
  aircraft:"明确航空器包括飞机等，单复数同形。",
  alliteration:"指开头的语音重复，不等于仅仅首字母相同。",
  agonize:"补齐常见的因决定而反复思索、苦恼义；所查现代学习词典为不及物用法。",
  allowance:"按所查学习词典整理名词义和 make allowances for，未将定量供应作无标记常用动词义。"
};
const readings={
  alloy:[{label:"n. 合金",uk:"ˈæl.ɔɪ",us:"ˈæl.ɔɪ"},{label:"vt. 使成合金",uk:"əˈlɔɪ",us:"əˈlɔɪ"},{label:"n.（美音另有后重音变体）",uk:"ˈæl.ɔɪ",us:"əˈlɔɪ"}],
  ally:[{label:"n. 盟友",uk:"ˈæl.aɪ",us:"ˈæl.aɪ"},{label:"v. 结盟",uk:"əˈlaɪ",us:"əˈlaɪ"}],
  alternate:[{label:"v. 交替",uk:"ˈɒl.tə.neɪt",us:"ˈɑːl.tɚ.neɪt"},{label:"adj. 交替的；替代的",uk:"ɒlˈtɜː.nət",us:"ˈɑːl.tɝː.nət"},{label:"n. 替补者",uk:"ˈɒl.tə.nət",us:"ˈɑːl.tɝː.nət"}],
  alternately:[{label:"adv.（剑桥）",uk:"ɒlˈtɜː.nət.li",us:"ɑːlˈtɝː.nət.li"},{label:"adv.（牛津）",uk:"ɔːlˈtɜːnətli",us:"ˈɔːltərnətli"}],
  allure:[{label:"n.（英音读法一）",uk:"əˈljʊəʳ",us:"əˈlʊr"},{label:"n.（英音读法二）",uk:"əˈlʊəʳ",us:"əˈlʊr"}],
  amnesia:[{label:"n.（读法一）",uk:"æmˈniː.zi.ə",us:"æmˈniː.zi.ə"},{label:"n.（读法二）",uk:"æmˈniː.ʒə",us:"æmˈniː.ʒə"}]
};
const senses={
  agility:[["n. 动作敏捷", "The dancer showed remarkable agility."],["n. 思维敏锐", "The task requires mental agility."]],
  agitate:[["vt. 使不安", "The news may agitate the patient."],["vi. 鼓动争取", "The workers continue to agitate for better pay."],["vt. 搅动", "Agitate the liquid before adding the powder."]],
  agitation:[["n. 焦虑不安", "She tried to hide her agitation."],["n. 鼓动；抗议活动", "The proposal sparked agitation for reform."],["n. 搅动（专业）", "The mixture needs constant agitation."]],
  agreeable:[["adj. 令人愉快的", "We spent an agreeable afternoon by the lake."],["adj. 愿意接受的", "She is agreeable to a change of plan."]],
  aim:[["n. 目标", "Our aim is to improve access to education."],["n. 瞄准；准头", "His aim improved with practice."],["v. 打算；旨在", "We aim to finish by Friday."],["v. 瞄准", "Aim at the centre of the target."]],
  air:[["n. 空气", "Open the window to let in fresh air."],["n. 神态；气氛", "He spoke with an air of confidence."],["n. 曲调", "She played a familiar air on the violin."],["vt. 公开表达", "The meeting allows residents to air their concerns."],["v. 播出", "The documentary will air tomorrow night."]],
  alarm:[["n. 惊恐", "The smoke filled them with alarm."],["n. 警报；报警器", "The alarm sounded at midnight."],["vt. 使担忧", "The sudden noise may alarm the animals."]],
  album:[["n. 音乐专辑", "The band released a new album."],["n. 相册", "She keeps the photographs in an album."]],
  alchemy:[["n. 炼金术", "The manuscript describes medieval alchemy."],["n. 如魔法般的转变", "The chef's alchemy turns simple vegetables into a feast."]],
  alien:[["adj. 陌生的", "The customs felt alien to her."],["n. 外星生物", "The story follows an alien visiting Earth."],["n. 非本国公民（法律）", "The statute defines the term alien."]],
  alight:[["adj. 燃烧着的", "The lantern was still alight."],["vi. 下车", "Passengers should alight at the next stop."],["vi. 降落；停落", "Birds often alight on the fence."]],
  alignment:[["n. 对齐", "Check the alignment of the wheels."],["n. 一致", "The plan is in alignment with our goals."]],
  all:[["det. 所有", "All students must attend the meeting."],["pron. 全部", "She collected the letters and read them all."],["adv. 完全", "The children were all wet after the storm."]],
  allergic:[["adj. 过敏的", "She is allergic to peanuts."],["adj. 极反感的（幽默）", "He jokes that he is allergic to housework."]],
  alley:[["n. 巷", "The cafe is hidden in a narrow alley."],["n. 保龄球球道", "The ball rolled down the alley."]],
  allowance:[["n. 津贴", "The job includes a travel allowance."],["n. 限额", "The ticket includes a generous baggage allowance."],["n. 体谅；考虑到", "We should make allowance for her lack of experience."]],
  alloy:[["n. 合金", "The frame is made from a light alloy."],["vt. 使成合金", "Manufacturers alloy copper with other metals."]],
  ally:[["n. 盟友", "The minister has found an ally in the mayor."],["v. 结盟", "The parties decided to ally with each other."]],
  alone:[["adj./adv. 独自", "She prefers to work alone."],["adj./adv. 只有；仅仅", "The repairs alone cost a thousand pounds."]],
  alter:[["v. 改变", "We need to alter the design."],["vt. 改衣服", "The tailor can alter the jacket for you."]],
  alternate:[["v. 交替", "The lights alternate between red and green."],["adj. 每隔一个的", "We meet on alternate Fridays."],["n. 替补者（美）", "They appointed an alternate to attend the meeting."]],
  alternative:[["n. 替代方案", "We need an alternative to driving."],["adj. 可替代的", "The council proposed an alternative route."],["adj. 非传统的", "The festival features alternative music."]],
  altitude:[["n. 海拔；高度", "The aircraft maintained a constant altitude."],["n. 三角形的高（几何）", "Draw the altitude from the vertex to the opposite side."]],
  amateur:[["n. 业余爱好者", "The competition is open to any amateur."],["adj. 业余的", "She plays in an amateur orchestra."],["n. 外行（贬义）", "The repair was clearly the work of an amateur."]],
  ambassador:[["n. 大使", "The ambassador met the foreign minister."],["n. 代表；形象代言人", "She serves as an ambassador for the charity."]],
  ambush:[["vt. 伏击", "The soldiers planned to ambush the convoy."],["n. 埋伏；伏击", "The patrol escaped the ambush."]],
  ammunition:[["n. 弹药", "The unit was running short of ammunition."],["n. 反驳或攻击的材料", "The mistake gave his critics fresh ammunition."]],
  amount:[["n. 数量；数额", "Please check the amount on the invoice."],["vi. 总计（amount to）", "The charges amount to fifty pounds."],["vi. 等同于", "Their refusal may amount to a breach of contract."]],
  amphibian:[["n. 两栖动物", "The frog is an amphibian."],["n. 水陆两用飞机", "The amphibian landed safely on the lake."]],
  ample:[["adj. 充足的", "We have ample time to prepare."],["adj. 丰满的（文学）", "The novelist describes his ample figure in detail."]],
  amplification:[["n. 扩音", "The hall needs better sound amplification."],["n. 补充说明", "The point requires further amplification."]],
  amplify:[["vt. 放大声音或信号", "The device can amplify a weak signal."],["vt. 增强效果或影响", "Social media can amplify misleading claims."]]
};
const phPages=new Set('aim alarm alert all allegation allocate ally alternate allude amidst'.split(' '));
const records=raw.trim().split('\n').map(line=>{
  const [w,pos,cn,uk,us]=line.split('|'),source=`https://dictionary.cambridge.org/dictionary/english/${w}`;
  return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"004",file:"js/lexicon-review-004.js",
    reason:notes[w]||"核对常用学习义、词性和英美音；保留适用语域，非历史与专业义项的穷尽收录。",
    senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
    pronunciationSource:phPages.has(w)?`https://dictionary.cambridge.org/pronunciation/english/${w}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('agitation').sources=[get('agitation').source,"https://www.oxfordlearnersdictionaries.com/us/definition/english/agitation"];
get('allude').source="https://dictionary.cambridge.org/dictionary/english/allude-to";
get('amidst').source="https://dictionary.cambridge.org/dictionary/english/amid";
get('amount').sources=[get('amount').source,"https://dictionary.cambridge.org/dictionary/english/amount-to"];
get('alternate').sources=[get('alternate').source,"https://www.oxfordlearnersdictionaries.com/definition/english/alternate_1","https://www.oxfordlearnersdictionaries.com/definition/english/alternate_3"];
get('alternately').sources=[get('alternately').source,"https://www.oxfordlearnersdictionaries.com/definition/english/alternately"];
get('alternately').pronunciationSources=get('alternately').sources;
get('alternately').reason="剑桥、牛津的美音重音标注不同，分来源保留；不把一方直接判错。";
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"004",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[]}]);
for(const r of records){
  window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,...(r.pronunciationSources?{sources:r.pronunciationSources}:{}),checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
