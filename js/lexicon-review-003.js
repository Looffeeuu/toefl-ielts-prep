/* Batch 003: 100 new entries, checked 2026-11-16 against linked dictionaries.
   Chinese glosses are learner summaries; example sentences are original.
   Optional-schwa typography flattened; lexical stress and IPA retained.
   This batch includes adept's Oxford noun reading as a new reviewed entry. */
(function(){
const raw=`
activate|vt.|启动；激活；使起作用；活化（化学）|ˈæk.tɪ.veɪt|ˈæk.tə.veɪt
active|adj./n.|adj. 活跃的；积极参与的；起作用的；（火山）活的；主动语态的　n. 主动语态（the active）|ˈæk.tɪv|ˈæk.tɪv
actively|adv.|积极地；主动地；活跃地|ˈæk.tɪv.li|ˈæk.tɪv.li
activity|n.|活动；活跃；活动状况；工作；娱乐活动|ækˈtɪv.ə.ti|ækˈtɪv.ə.t̬i
actor|n.|演员（不限定性别）；行动者；参与者|ˈæk.təʳ|ˈæk.tɚ
actual|adj.|实际的；真实的；确实存在的|ˈæk.tʃu.əl|ˈæk.tʃu.əl
actually|adv.|实际上；事实上；其实（用于纠正、补充或缓和语气）|ˈæk.tʃu.ə.li|ˈæk.tʃu.ə.li
actuate|vt.|使（机器）运转；驱动；促使（人）行动（正式或专业用语）|ˈæk.tʃu.eɪt|ˈæk.tʃu.eɪt
acumen|n.|敏锐的判断力；精明（正式）|ˈæk.jə.mən|əˈkjuː.mən
acupuncture|n.|针刺疗法；针灸|ˈæk.jə.pʌŋk.tʃəʳ|ˈæk.jə.pʌŋk.tʃɚ
acute|adj./n.|adj. 严重的；急性的；敏锐的；锐角的　n. 尖音符；锐音符（如 é 上的符号）|əˈkjuːt|əˈkjuːt
adage|n.|格言；谚语|ˈæd.ɪdʒ|ˈæd.ɪdʒ
adamant|adj.|坚决的；不肯改变主意的|ˈæd.ə.mənt|ˈæd.ə.mənt
adapt|v.|（使）适应；调整；改编|əˈdæpt|əˈdæpt
adaptable|adj.|适应性强的；能或愿意调整的|əˈdæp.tə.bəl|əˈdæp.tə.bəl
adaptation|n.|适应；适应性变化（生物）；改编作品|ˌæd.əpˈteɪ.ʃən|ˌæd.əpˈteɪ.ʃən
adaptive|adj.|适应性强的；适应性的；适应环境变化的（生物）|əˈdæp.tɪv|əˈdæp.tɪv
addict|n./vt.|n. 成瘾者；沉迷某事的人　vt. 使成瘾；使沉迷（常用被动或反身形式）|ˈæd.ɪkt|ˈæd.ɪkt
addictive|adj.|使人成瘾的；令人着迷难以停止的|əˈdɪk.tɪv|əˈdɪk.tɪv
addition|n.|加法；增加；添加；新增的人或物；扩建部分（美）|əˈdɪʃ.ən|əˈdɪʃ.ən
additional|adj.|额外的；附加的|əˈdɪʃ.ən.əl|əˈdɪʃ.ən.əl
additive|n./adj.|n. 添加剂（尤指食品添加剂）　adj. 加法的（数学）；相加的；累加的|ˈæd.ɪ.tɪv|ˈæd.ə.t̬ɪv
addle|vt.|使困惑；使头脑不清（多带幽默意味）|ˈæd.əl|ˈæd.əl
adept|adj./n.|adj. 熟练的；擅长的　n. 行家；能手|əˈdept|əˈdept
adequate|adj.|足够的；足以满足需要的；尚可的|ˈæd.ə.kwət|ˈæd.ə.kwət
adhere|vi.|黏附；附着；遵守；坚持（adhere to）|ədˈhɪəʳ|ədˈhɪr
adherence|n.|遵守；坚持（规则、信念等，正式）|ədˈhɪə.rəns|ədˈhɪr.əns
adhesive|n./adj.|n. 黏合剂　adj. 有黏性的；能黏附的|ədˈhiː.sɪv|ədˈhiː.sɪv
adjacent|adj.|邻近的；紧挨着的；相接的（正式）|əˈdʒeɪ.sənt|əˈdʒeɪ.sənt
adjoin|v.|邻接；毗连；与…相接（正式）|əˈdʒɔɪn|əˈdʒɔɪn
adjourn|v.|（使会议、审判等）暂停；休会；移至别处（adjourn to，正式）|əˈdʒɜːn|əˈdʒɝːn
adjunct|n.|附加物；附属物；状语（语法）；临时或兼职大学教师（美）|ˈædʒ.ʌŋkt|ˈædʒ.ʌŋkt
adjust|v.|调整；调节；整理（衣物）；适应|əˈdʒʌst|əˈdʒʌst
adjustment|n.|调整；调节；小幅改变；适应|əˈdʒʌst.mənt|əˈdʒʌst.mənt
administer|vt.|管理；治理；给予；施用（药物）；实施（测试等）|ədˈmɪn.ɪ.stəʳ|ədˈmɪn.ə.stɚ
administrate|vt.|管理；行政管理（同 administer）|ədˈmɪn.ɪ.streɪt|ədˈmɪn.ə.streɪt
administration|n.|行政管理；管理层；政府；任期；施用（药物等）；破产管理（英）|ədˌmɪn.ɪˈstreɪ.ʃən|ədˌmɪn.əˈstreɪ.ʃən
administrative|adj.|行政的；管理的；行政事务的|ədˈmɪn.ɪ.strə.tɪv|ædˈmɪn.ɪˌstreɪ.t̬ɪv
administrator|n.|管理人员；行政人员；（计算机系统、网站等的）管理员|ədˈmɪn.ɪ.streɪ.təʳ|ədˈmɪn.ə.streɪ.t̬ɚ
admirable|adj.|令人钦佩的；值得赞赏的|ˈæd.mər.ə.bəl|ˈæd.mə.rə.bəl
admiration|n.|钦佩；赞赏；欣赏|ˌæd.mɪˈreɪ.ʃən|ˌæd.məˈreɪ.ʃən
admire|vt.|欣赏；钦佩；赞赏|ədˈmaɪəʳ|ədˈmaɪr
admission|n.|承认；入场许可；入场费；入学；收治入院|ədˈmɪʃ.ən|ədˈmɪʃ.ən
admit|v.|承认；准许进入；收治入院；接收（入学等）；容许（admit of，正式）|ədˈmɪt|ədˈmɪt
admittedly|adv.|诚然；不可否认地（用于让步承认）|ədˈmɪt.ɪd.li|ədˈmɪt̬.ɪd.li
admonish|vt.|责备；告诫；劝诫（正式）|ədˈmɒn.ɪʃ|ədˈmɑː.nɪʃ
adobe|n.|土坯；制土坯用的泥土和稻草混合物|əˈdəʊ.bi|əˈdoʊ.bi
adolescence|n.|青春期；从儿童成长为成人的阶段|ˌæd.əˈles.əns|ˌæd.əˈles.əns
adolescent|n./adj.|n. 青少年　adj. 青春期的；幼稚的（指成人的行为）|ˌæd.əˈles.ənt|ˌæd.əˈles.ənt
adopt|v.|收养；领养；采用；采取；选定；正式通过|əˈdɒpt|əˈdɑːpt
adoption|n.|收养；采用；采纳；选定|əˈdɒp.ʃən|əˈdɑːp.ʃən
adore|vt.|深爱；非常喜欢；崇拜（宗教，正式）|əˈdɔːʳ|əˈdɔːr
adorn|vt.|装饰；使生色（文学）|əˈdɔːn|əˈdɔːrn
adornment|n.|装饰；装饰品|əˈdɔːn.mənt|əˈdɔːrn.mənt
adroit|adj.|熟练灵巧的；机敏的|əˈdrɔɪt|əˈdrɔɪt
adult|n./adj.|n. 成年人；成年动物　adj. 成年的；成熟的；成人的；仅适合成人的（涉及性内容）|ˈæd.ʌlt|əˈdʌlt
adulteration|n.|掺假；掺杂使质量降低（尤指食品、药品）|əˌdʌl.təˈreɪ.ʃən|əˌdʌl.təˈreɪ.ʃən
advance|v./n./adj.|v. 前进；推进；进展；提出（观点等）；预付　n. 前进；进步；预付款；追求示好（常用复数）　adj. 预先的；事先的|ədˈvɑːns|ədˈvæns
advancement|n.|进步；发展；晋升；提升|ədˈvɑːns.mənt|ədˈvæns.mənt
advent|n.|出现；到来；（Advent）基督教降临期|ˈæd.vent|ˈæd.vent
adventure|n.|冒险；冒险经历；刺激的体验|ədˈven.tʃəʳ|ədˈven.tʃɚ
adventurer|n.|冒险者；冒险家；投机钻营者（贬义）|ədˈven.tʃə.rəʳ|ədˈven.tʃɚ.ɚ
adverse|adj.|不利的；有害的；造成问题的|ˈæd.vɜːs|ædˈvɝːs
adversely|adv.|不利地；有害地|ˈæd.vɜːs.li|ædˈvɝːs.li
adversity|n.|逆境；不幸；困境；不幸事件|ədˈvɜː.sə.ti|ədˈvɝː.sə.t̬i
advertise|v.|做广告；登广告；公布；使广为人知|ˈæd.və.taɪz|ˈæd.vɚ.taɪz
advertisement|n.|广告；招聘等启事；体现某事物优点的例子|ədˈvɜː.tɪs.mənt|ˌæd.vɚˈtaɪz.mənt
advice|n.|建议；劝告；忠告（通常不可数）|ədˈvaɪs|ədˈvaɪs
advisable|adj.|明智的；可取的；值得采用的（通常作表语）|ədˈvaɪ.zə.bəl|ədˈvaɪ.zə.bəl
advise|v.|建议；劝告；提供咨询；通知；告知（正式）|ədˈvaɪz|ədˈvaɪz
advocate|v./n.|v. 提倡；主张；支持；为…辩护　n. 提倡者；支持者；权益维护者；辩护律师|ˈæd.və.keɪt|ˈæd.və.keɪt
aerial|adj./n.|adj. 空中的；从空中进行的　n. 天线；空中特技动作（体育）|ˈeə.ri.əl|ˈer.i.əl
aesthetic|adj./n.|adj. 审美的；美学的；美观的；美容的　n. 审美风格；美学原则；（aesthetics）美学|esˈθet.ɪk|esˈθet̬.ɪk
aesthetical|adj.|美学的；审美的；艺术的（aesthetic 的变体）|iːsˈθɛtɪkəl|esˈθetɪkəl
affable|adj.|友善的；和蔼可亲的；易于交谈的|ˈæf.ə.bəl|ˈæf.ə.bəl
affair|n.|事情；事务；事件；私情；婚外情；活动或场合|əˈfeəʳ|əˈfer
affect|vt./n.|vt. 影响；使感动；假装；故作　n. 情感；情绪及其外在表现（心理学）|əˈfekt|əˈfekt
affection|n.|喜爱；感情；爱意|əˈfek.ʃən|əˈfek.ʃən
affectionate|adj.|深情的；表示喜爱的；亲切的|əˈfek.ʃən.ət|əˈfek.ʃən.ət
affective|adj.|情感的；与情绪有关的（心理学）|əˈfek.tɪv|əˈfek.tɪv
affiliate|v./n.|v. （使）隶属；（使）加入；（使）建立联系　n. 附属机构；分支机构；成员组织|əˈfɪl.i.eɪt|əˈfɪl.i.eɪt
affinity|n.|亲近感；喜爱；密切关系；相似之处|əˈfɪn.ə.ti|əˈfɪn.ə.t̬i
affirm|vt.|肯定；断言；公开表示支持（正式）|əˈfɜːm|əˈfɝːm
affix|vt./n.|vt. 附上；粘贴；固定；加词缀　n. 词缀（语言学）|əˈfɪks|əˈfɪks
afflict|vt.|使遭受痛苦；折磨；困扰|əˈflɪkt|əˈflɪkt
affliction|n.|苦难；痛苦；造成痛苦的疾病或问题（正式）|əˈflɪk.ʃən|əˈflɪk.ʃən
affluence|n.|富裕；富足|ˈæf.lu.əns|ˈæf.lu.əns
affluent|adj.|富裕的；富足的|ˈæf.lu.ənt|ˈæf.lu.ənt
afford|v.|买得起；有时间做；承担得起（后果）；提供；给予（正式）|əˈfɔːd|əˈfɔːrd
age|n./v.|n. 年龄；年代；时期；老年；很长时间（ages）　v. （使）变老；（使）成熟或陈化|eɪdʒ|eɪdʒ
agency|n.|代理机构；中介；政府机构；自主行动能力；作用（through the agency of）|ˈeɪ.dʒən.si|ˈeɪ.dʒən.si
agenda|n.|议程；待办事项；目标或计划；隐秘目的（可数，复数 agendas）|əˈdʒen.də|əˈdʒen.də
agent|n.|代理人；经纪人；特工；起作用的人或物；制剂；智能体（计算机）|ˈeɪ.dʒənt|ˈeɪ.dʒənt
aggravate|vt.|使恶化；加重；激怒；使烦恼（非正式）|ˈæɡ.rə.veɪt|ˈæɡ.rə.veɪt
aggregate|n./adj./vt.|n. 总数；集合体；骨料（建筑）　adj. 总计的　vt. 合计；聚集；汇总|ˈæɡ.rɪ.ɡət|ˈæɡ.rə.ɡət
aggregation|n.|聚集；聚合；汇总；聚合体；汇总结果|ˌæɡ.rɪˈɡeɪ.ʃən|ˌæɡ.rəˈɡeɪ.ʃən
aggression|n.|攻击性；侵略；侵犯；（体育）强势进攻|əˈɡreʃ.ən|əˈɡreʃ.ən
aggressive|adj.|好斗的；有攻击性的；强势的；积极进取的|əˈɡres.ɪv|əˈɡres.ɪv
aghast|adj.|惊骇的；大为震惊的（通常作表语）|əˈɡɑːst|əˈɡæst
agile|adj.|（动作）敏捷的；（思维）敏锐的；能灵活应变的；敏捷式的（管理）|ˈædʒ.aɪl|ˈædʒ.əl
`;
const notes={
  actor:"演员义不限定男性；补充参与者或行动者。",
  actual:"不直接当作现行的；学习义聚焦事实存在的。",
  affection:"移除无语境的影响、病，明确当代常用喜爱、感情义。",
  agenda:"原词性 pl. 错误，现代英语 agenda 为可数单数，复数 agendas。",
  active:"补足主动语态标签，未把无上下文的积极分子当作常用义。",
  aerial:"移除空想的等无语境泛化，区分天线及空中特技义。",
  adobe:"区分建筑材料和建筑物，不将土坯建筑直接作为所查词典的主释义。",
  admit:"移除无上下文的开向，区分承认与准入、收治。",
  advice:"明确常用建议义及不可数用法，不将报道作为无标记常用义。",
  affix:"以附上、粘贴与语言学词缀区分词性和重音。"
};
const readings={
  actuate:[{label:"vt.（英音读法一）",uk:"ˈæk.tʃu.eɪt",us:"ˈæk.tʃu.eɪt"},{label:"vt.（英音读法二）",uk:"ˈæk.tju.eɪt",us:"ˈæk.tʃu.eɪt"}],
  addict:[{label:"n. 成瘾者；沉迷者",uk:"ˈæd.ɪkt",us:"ˈæd.ɪkt"},{label:"vt. 使成瘾（柯林斯）",uk:"əˈdɪkt",us:"əˈdɪkt"}],
  adept:[{label:"adj. 熟练的",uk:"əˈdept",us:"əˈdept"},{label:"n. 行家（牛津）",uk:"ˈædept",us:"ˈædept"}],
  admirable:[{label:"adj.（英音读法一）",uk:"ˈæd.mər.ə.bəl",us:"ˈæd.mə.rə.bəl"},{label:"adj.（英音读法二）",uk:"ˈæd.mɪ.rə.bəl",us:"ˈæd.mə.rə.bəl"}],
  adult:[{label:"n./adj.（读法一）",uk:"ˈæd.ʌlt",us:"ˈæd.ʌlt"},{label:"n./adj.（读法二）",uk:"əˈdʌlt",us:"əˈdʌlt"}],
  advent:[{label:"n.（读法一）",uk:"ˈæd.vent",us:"ˈæd.vent"},{label:"n.（读法二）",uk:"ˈæd.vənt",us:"ˈæd.vənt"}],
  adverse:[{label:"adj.（英音读法一）",uk:"ˈæd.vɜːs",us:"ædˈvɝːs"},{label:"adj.（英音读法二）",uk:"ədˈvɜːs",us:"ædˈvɝːs"}],
  adversely:[{label:"adv.（英音读法一）",uk:"ˈæd.vɜːs.li",us:"ædˈvɝːs.li"},{label:"adv.（英音读法二）",uk:"ədˈvɜːs.li",us:"ædˈvɝːs.li"}],
  advocate:[{label:"v. 提倡；支持",uk:"ˈæd.və.keɪt",us:"ˈæd.və.keɪt"},{label:"n. 提倡者；律师",uk:"ˈæd.və.kət",us:"ˈæd.və.kət"}],
  aesthetic:[{label:"adj./n.（英音读法一）",uk:"esˈθet.ɪk",us:"esˈθet̬.ɪk"},{label:"adj./n.（英音读法二）",uk:"iːsˈθet.ɪk",us:"esˈθet̬.ɪk"}],
  aesthetical:[{label:"adj.（柯林斯英美标注）",uk:"iːsˈθɛtɪkəl",us:"esˈθetɪkəl"},{label:"adj.（英音读法二）",uk:"ɪsˈθɛtɪkəl",us:"esˈθetɪkəl"}],
  affect:[{label:"vt. 影响；假装",uk:"əˈfekt",us:"əˈfekt"},{label:"n. 情感（心理学）",uk:"ˈæf.ekt",us:"ˈæf.ekt"}],
  affiliate:[{label:"v. （使）隶属",uk:"əˈfɪl.i.eɪt",us:"əˈfɪl.i.eɪt"},{label:"n. 附属机构",uk:"əˈfɪl.i.ət",us:"əˈfɪl.i.ət"}],
  affix:[{label:"vt. 附上；粘贴",uk:"əˈfɪks",us:"əˈfɪks"},{label:"n. 词缀",uk:"ˈæf.ɪks",us:"ˈæf.ɪks"}],
  aggregate:[{label:"n./adj.",uk:"ˈæɡ.rɪ.ɡət",us:"ˈæɡ.rə.ɡət"},{label:"vt. 汇总；聚集",uk:"ˈæɡ.rɪ.ɡeɪt",us:"ˈæɡ.rə.ɡeɪt"}]
};
const senses={
  actor:[["n. 演员", "The actor rehearsed the scene before filming."],["n. 行动者；参与者", "The state is a major actor in the negotiations."]],
  acute:[["adj. 严重的；急性的", "The region faces an acute shortage of water."],["adj. 敏锐的", "The owl has acute hearing."],["adj. 锐角的", "This triangle has three acute angles."],["n. 尖音符", "Place an acute over the final letter."]],
  adapt:[["v. 适应", "It takes time to adapt to a new climate."],["vt. 改编", "They plan to adapt the novel for television."]],
  addict:[["n. 成瘾者；沉迷者", "He describes himself as a coffee addict."],["vt. 使成瘾", "These substances can addict users very quickly."]],
  adept:[["adj. 熟练的", "She is adept at solving difficult puzzles."],["n. 行家", "He is an adept at handling delicate negotiations."]],
  addition:[["n. 加法", "The children are practising addition."],["n. 新增的人或物", "The library is a welcome addition to the town."],["n. 扩建部分（美）", "They built an addition at the back of the house."]],
  additive:[["n. 添加剂", "The drink contains no artificial additive."],["adj. 累加的", "The two treatments may have an additive effect."]],
  adhesive:[["n. 黏合剂", "Use a strong adhesive to repair the chair."],["adj. 有黏性的", "The label has an adhesive backing."]],
  adjunct:[["n. 附加物", "The workshop is a useful adjunct to the course."],["n. 状语（语法）", "The phrase functions as an adjunct in this sentence."],["n. 兼职大学教师（美）", "The college hired an adjunct to teach the evening course."]],
  administer:[["vt. 管理", "The council will administer the new programme."],["vt. 施用（药物）", "Only trained staff may administer this medicine."],["vt. 实施（测试）", "The teacher will administer the test on Friday."]],
  administration:[["n. 行政管理", "The job involves both teaching and administration."],["n. 政府；管理层", "The new administration announced its priorities."],["n. 施用（药物）", "The nurse recorded the administration of the drug."],["n. 破产管理（英）", "The company went into administration last month."]],
  admission:[["n. 承认", "His statement was taken as an admission of guilt."],["n. 入场费", "Admission costs five pounds."],["n. 入院", "Her condition required immediate admission to hospital."]],
  admit:[["v. 承认", "I admit that the plan needs improvement."],["vt. 准许进入", "The ticket will admit two visitors."],["vt. 收治入院", "The hospital will admit the patient tonight."]],
  adolescent:[["n. 青少年", "The adolescent found support in a local youth group."],["adj. 青春期的", "She studies adolescent development."],["adj. 幼稚的", "His adolescent jokes annoyed the other guests."]],
  adopt:[["v. 收养", "They hope to adopt a child."],["vt. 采用", "The committee will adopt a new approach."]],
  adult:[["n. 成年人", "Each child must travel with an adult."],["adj. 成年的", "The course is designed for adult learners."]],
  advance:[["v. 推进", "The discovery could advance our understanding of the disease."],["n. 预付款", "The writer received an advance from the publisher."],["adj. 事先的", "Please give us advance notice of any change."]],
  advent:[["n. 出现；到来", "The advent of printing changed how knowledge spread."],["n. 降临期（Advent）", "The choir will sing throughout Advent."]],
  adventurer:[["n. 冒险家", "The adventurer crossed the desert alone."],["n. 投机钻营者（贬义）", "The novel portrays him as a ruthless political adventurer."]],
  advocate:[["v. 提倡；支持", "Many teachers advocate smaller classes."],["n. 支持者", "She is a strong advocate of public transport."],["n. 辩护律师", "The advocate presented the evidence to the court."]],
  aerial:[["adj. 空中的", "The team used aerial photographs to map the coast."],["n. 天线", "The storm damaged the television aerial."]],
  aesthetic:[["adj. 审美的；美观的", "The design has both practical and aesthetic value."],["n. 审美风格", "The room has a minimalist aesthetic."]],
  affair:[["n. 事情；事务", "The minister refused to discuss the affair."],["n. 私情；婚外情", "The novel centres on a secret affair."],["n. 活动或场合", "The wedding was a small family affair."]],
  affect:[["vt. 影响", "Changes in rainfall affect crop yields."],["vt. 假装；故作", "He tried to affect an air of confidence."],["n. 情感表现（心理学）", "The report describes the patient's flat affect."]],
  affiliate:[["v. （使）隶属", "The groups plan to affiliate with a national organization."],["n. 附属机构", "The college is an affiliate of the university."]],
  affinity:[["n. 喜爱；亲近感", "She feels a natural affinity with animals."],["n. 相似之处", "The two styles have a clear affinity."]],
  affix:[["vt. 粘贴；附上", "Affix a label to each box."],["n. 词缀", "The suffix is one type of affix."]],
  afford:[["v. 买得起；有条件做", "We cannot afford a new car this year."],["vt. 提供；给予", "The trees afford some protection from the wind."]],
  age:[["n. 年龄", "Please state your age on the form."],["n. 时代", "The invention helped usher in a new age."],["v. 变老；陈化", "These cheeses age in a cool cellar."]],
  agency:[["n. 代理机构", "The travel agency arranged our flights."],["n. 自主行动能力", "The project gave residents a greater sense of agency."]],
  agenda:[["n. 议程", "The first item on the agenda is the budget."],["n. 隐秘目的", "She suspected that the group had a hidden agenda."]],
  agent:[["n. 代理人", "Her agent negotiated the publishing contract."],["n. 特工", "The agent worked undercover for several years."],["n. 制剂；起作用的物质", "The mixture contains a powerful cleaning agent."],["n. 智能体", "The software agent can schedule appointments."]],
  aggravate:[["vt. 使恶化", "Heavy rain will aggravate the flooding."],["vt. 激怒；使烦恼", "The constant noise began to aggravate her."]],
  aggregate:[["n. 总数；集合体", "The aggregate of the payments exceeded our estimate."],["n. 骨料", "The concrete contains coarse aggregate."],["vt. 汇总", "The system can aggregate data from several sources."]],
  aggressive:[["adj. 有攻击性的", "The dog became aggressive when cornered."],["adj. 强势的；积极进取的", "The company launched an aggressive expansion strategy."]],
  agile:[["adj. 动作敏捷的", "The agile climber reached the ledge quickly."],["adj. 思维敏锐的", "The puzzle requires an agile mind."],["adj. 敏捷式的（管理）", "The team uses an agile approach to development."]]
};
const pronunciationPages=new Set('adequate administrate advance adverse aggravate aggressive affair adjustment'.split(' '));
const records=raw.trim().split('\n').map(line=>{
  const [w,pos,cn,uk,us]=line.split('|'),source=`https://dictionary.cambridge.org/dictionary/english/${w}`;
  return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"003",file:"js/lexicon-review-003.js",
    reason:notes[w]||"核对现代常用学习义、词性和英美音；专业义标明领域，非历史义项的穷尽收录。",
    senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
    pronunciationSource:pronunciationPages.has(w)?`https://dictionary.cambridge.org/pronunciation/english/${w}`:source};
});
const addict=records.find(r=>r.w==='addict');
addict.sources=[addict.source,"https://www.collinsdictionary.com/dictionary/english/addict"];
addict.pronunciationSources=addict.sources;
const aesthetical=records.find(r=>r.w==='aesthetical');
aesthetical.source="https://www.collinsdictionary.com/dictionary/english/aesthetical";
aesthetical.pronunciationSource=aesthetical.source;
aesthetical.reason="补查柯林斯，直接核对本词英美标注；不照搬 aesthetic，也不把不同词典的 e/ɛ 标注擅自互换。";
const adept=records.find(r=>r.w==='adept');
adept.sources=[adept.source,"https://www.oxfordlearnersdictionaries.com/definition/english/adept_2"];
adept.pronunciationSources=adept.sources;
adept.reason="依据牛津补充名词行家及首音节重读；与形容词分开标注，本批新增核对。";
const newWords=records.map(r=>r.w);
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"003",checkedOn:"2026-11-16",words:newWords,amendments:[],deferred:[]}]);
for(const r of records){
  window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,...(r.pronunciationSources?{sources:r.pronunciationSources}:{}),checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
