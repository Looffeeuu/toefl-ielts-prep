/* Batch 002: 100 entries checked against linked dictionaries, 2026-11-16.
   Chinese glosses are summaries, not quotations. Original examples below.
   Primary IPA follows Cambridge's learner pronunciation conventions; optional
   schwa typography is flattened. Multiple pronunciations are explicit.
   acoustical was investigated but deferred; action replaces it in this batch. */
(function(){
const raw = `
abandon|vt./n.|vt. 遗弃；离开；放弃；中止　n. 放纵；尽情（文学，常用于 with abandon）|əˈbæn.dən|əˈbæn.dən
abandonment|n.|遗弃；离弃；放弃；中止|əˈbæn.dən.mənt|əˈbæn.dən.mənt
abate|v.|（使）减弱；减轻；减少（正式）|əˈbeɪt|əˈbeɪt
abbreviate|vt.|缩写；把词语简写为|əˈbriː.vi.eɪt|əˈbriː.vi.eɪt
abbreviation|n.|缩写；缩略形式|əˌbriː.viˈeɪ.ʃən|əˌbriː.viˈeɪ.ʃən
abdicate|v.|退位；正式放弃王位；放弃职责（abdicate responsibility）|ˈæb.dɪ.keɪt|ˈæb.də.keɪt
abduct|vt.|绑架；劫持；使（身体部位）外展（医学）|æbˈdʌkt|æbˈdʌkt
abhor|vt.|憎恶；厌恶（正式，尤指认为不道德的行为或想法）|əˈbhɔːʳ|æbˈhɔːr
abhorrent|adj.|令人憎恶的；道德上恶劣的（正式）|əˈbɒr.ənt|æbˈhɔːr.ənt
abide|v.|容忍（常用于 can't abide）；居住；停留（古义）；遵守（abide by）|əˈbaɪd|əˈbaɪd
ability|n.|能力；本领；才能|əˈbɪl.ə.ti|əˈbɪl.ə.t̬i
abject|adj.|（贫困、失败等）极度的；绝望的；卑躬屈膝的（正式）|ˈæb.dʒekt|ˈæb.dʒekt
ablaze|adj.|燃烧着的；灯火通明的；色彩鲜艳的；充满（情感）的（通常作表语）|əˈbleɪz|əˈbleɪz
ablution|n.|洗涤身体；沐浴；（常用复数 ablutions）日常洗漱（正式或幽默）|əˈbluː.ʃən|əˈbluː.ʃən
aboard|adv./prep.|在（船、飞机、公共汽车、火车）上；上（船等）|əˈbɔːd|əˈbɔːrd
abolish|vt.|正式废除；废止（制度、习俗等）|əˈbɒl.ɪʃ|əˈbɑː.lɪʃ
abolition|n.|废除；废止|ˌæb.əˈlɪʃ.ən|ˌæb.əˈlɪʃ.ən
abolitionist|n.|主张废除某制度的人；（尤指）废奴主义者|ˌæb.əˈlɪʃ.ən.ɪst|ˌæb.əˈlɪʃ.ən.ɪst
aboriginal|adj./n.|adj. 原住民的；与原住民有关的　n. 原住民；土著居民|ˌæb.əˈrɪdʒ.ən.əl|ˌæb.əˈrɪdʒ.ən.əl
abort|v.|（使）中止；（使）终止妊娠；流产|əˈbɔːt|əˈbɔːrt
abortion|n.|人工流产；终止妊娠；自然流产（医学）|əˈbɔː.ʃən|əˈbɔːr.ʃən
abortive|adj.|失败而中止的；无结果的；夭折的（正式）|əˈbɔː.tɪv|əˈbɔːr.t̬ɪv
abound|vi.|大量存在；有很多|əˈbaʊnd|əˈbaʊnd
abrasion|n.|磨损；磨蚀；擦伤（专业用语）|əˈbreɪ.ʒən|əˈbreɪ.ʒən
abrasive|adj./n.|adj. 粗鲁生硬的；有磨蚀作用的　n. 研磨剂；磨料|əˈbreɪ.sɪv|əˈbreɪ.sɪv
abridge|vt.|删节；节略（书、文章等）；限制（权利、自由）|əˈbrɪdʒ|əˈbrɪdʒ
abroad|adv.|在国外；到国外；在外面（文学或古义）；广为流传（正式）|əˈbrɔːd|əˈbrɑːd
abrupt|adj.|突然的；出乎意料的；陡然的；生硬唐突的|əˈbrʌpt|əˈbrʌpt
absence|n.|缺席；不在；缺乏；不存在|ˈæb.səns|ˈæb.səns
absent|adj./prep./v.|adj. 缺席的；不存在的；心不在焉的　prep. 没有；缺乏（美）　v. 缺席；离开（正式，absent oneself）|ˈæb.sənt|ˈæb.sənt
absentee|n./adv.|n. 缺席者　adv. 不到场地（美，vote absentee 指不亲自到投票站投票）|ˌæb.sənˈtiː|ˌæb.sənˈtiː
absenteeism|n.|缺勤；缺课；旷工；旷课|ˌæb.sənˈtiː.ɪ.zəm|ˌæb.sənˈtiː.ɪ.zəm
absolute|adj.|完全的；十足的；绝对的；不受限制的；专制的|ˈæb.sə.luːt|ˈæb.sə.luːt
absolutely|adv.|完全地；绝对地；（强调赞同）当然；确实|ˌæb.səˈluːt.li|ˌæb.səˈluːt.li
absolve|vt.|免除（罪责、责任）；赦免（正式，尤指宗教或法律）|əbˈzɒlv|əbˈzɑːlv
absorb|vt.|吸收；吸纳；理解；使全神贯注；承担（费用）；吞并|əbˈzɔːb|əbˈsɔːrb
absorption|n.|吸收；全神贯注；承担（费用）；兼并|əbˈzɔːp.ʃən|əbˈzɔːrp.ʃən
abstain|vi.|戒除；克制不做；投票弃权；缺勤（印度英语）|æbˈsteɪn|æbˈsteɪn
abstinence|n.|戒除；禁绝（通常指酒、药物或性行为）|ˈæb.stɪ.nəns|ˈæb.stə.nəns
abstract|adj./n./vt.|adj. 抽象的；理论性的；（艺术）抽象派的　n. 摘要；抽象画　vt. 提取；抽取；写…的摘要|ˈæb.strækt|ˈæb.strækt
abstraction|n.|抽象；抽象概念；概括；抽取；提取|æbˈstræk.ʃən|æbˈstræk.ʃən
abstruse|adj.|深奥难懂的（正式）|æbˈstruːs|æbˈstruːs
absurd|adj./n.|adj. 荒谬的；不合理的；可笑的　n. 荒诞的事物（the absurd）|əbˈsɜːd|əbˈsɝːd
abundance|n.|大量；充足；丰裕|əˈbʌn.dəns|əˈbʌn.dəns
abundant|adj.|大量的；充足的；丰富的（正式）|əˈbʌn.dənt|əˈbʌn.dənt
abundantly|adv.|大量地；充足地；极其（正式）|əˈbʌn.dənt.li|əˈbʌn.dənt.li
abuse|vt./n.|vt. 滥用；虐待；辱骂　n. 滥用；虐待；辱骂|əˈbjuːz|əˈbjuːz
abut|v.|邻接；毗连（正式，常接 on 或 onto）|əˈbʌt|əˈbʌt
academic|adj./n.|adj. 学校的；学术的；理论性的；不切实际的　n. 大学教师；学者|ˌæk.əˈdem.ɪk|ˌæk.əˈdem.ɪk
academician|n.|学会会员；院士；大学教师或学者（美或印度英语）|əˌkæd.əˈmɪʃ.ən|əˌkæd.əˈmɪʃ.ən
academy|n.|专门学校；学院；学会；（体育俱乐部的）青训机构|əˈkæd.ə.mi|əˈkæd.ə.mi
accelerate|v.|（使）加速；（使）加快|əkˈsel.ə.reɪt|ekˈsel.ɚ.eɪt
acceleration|n.|加速；加快；加速度（物理）|əkˌsel.əˈreɪ.ʃən|ekˌsel.əˈreɪ.ʃən
accentuate|vt.|强调；突出；使更明显|əkˈsen.tʃu.eɪt|əkˈsen.tʃu.eɪt
accessibility|n.|可达性；可获得性；无障碍使用性；易懂程度|əkˌses.əˈbɪl.ə.ti|əkˌses.əˈbɪl.ə.t̬i
accessible|adj.|可到达的；可进入或使用的；无障碍的；易懂的；（人）易接近的|əkˈses.ə.bəl|əkˈses.ə.bəl
accessory|n.|附件；配饰；从犯|əkˈses.əʳ.i|əkˈses.əʳ.i
accident|n.|事故；意外事件；偶然的事|ˈæk.sɪ.dənt|ˈæk.sə.dənt
accidental|adj./n.|adj. 偶然的；意外的；非故意的　n. 临时变音记号（音乐）；迷鸟（鸟类学）|ˌæk.sɪˈden.təl|ˌæk.səˈden.t̬əl
accidentally|adv.|偶然地；意外地；无意中|ˌæk.sɪˈden.təl.i|ˌæk.səˈden.t̬əl.i
acclaim|n./vt.|n. 公开赞扬；称誉　vt. 公开赞扬；称颂|əˈkleɪm|əˈkleɪm
accommodate|vt.|容纳；为…提供住宿；满足（需要）；迁就；调适（正式）；调节焦距（眼睛）|əˈkɒm.ə.deɪt|əˈkɑː.mə.deɪt
accommodation|n.|住处；住宿（英，通常不可数）；和解；调和；（眼睛的）调节|əˌkɒm.əˈdeɪ.ʃən|əˌkɑː.məˈdeɪ.ʃən
accompaniment|n.|伴奏；伴随物；佐餐物；配菜|əˈkʌm.pən.ɪ.mənt|əˈkʌm.pən.ɪ.mənt
accompany|vt.|陪同；伴随；伴有；为…伴奏|əˈkʌm.pə.ni|əˈkʌm.pə.ni
accomplice|n.|共犯；同谋；帮凶|əˈkʌm.plɪs|əˈkɑːm.plɪs
accomplish|vt.|成功完成；实现；达到|əˈkʌm.plɪʃ|əˈkɑːm.plɪʃ
accomplishment|n.|成就；成功完成；才艺；技能|əˈkʌm.plɪʃ.mənt|əˈkɑːm.plɪʃ.mənt
accord|n./vt.|n. 协议；一致　vt. 给予（礼遇、尊重等，正式）|əˈkɔːd|əˈkɔːrd
accordion|n.|手风琴|əˈkɔː.di.ən|əˈkɔːr.di.ən
accost|vt.|上前拦住并搭话（常带威胁或冒犯意味，正式）|əˈkɒst|əˈkɑːst
account|n./v.|n. 账户；账号；账目；赊账安排；记述；报告　v. 认为（正式）；占；解释（account for）|əˈkaʊnt|əˈkaʊnt
accountant|n.|会计；会计师|əˈkaʊn.tənt|əˈkaʊn.t̬ənt
accredit|vt.|正式认可；授权；认证|əˈkred.ɪt|əˈkred.ɪt
accumulate|v.|（使）积累；（使）积聚；积攒|əˈkjuː.mjə.leɪt|əˈkjuː.mjə.leɪt
accumulation|n.|积累；积聚；积累物；积累量|əˌkjuː.mjəˈleɪ.ʃən|əˌkjuː.mjəˈleɪ.ʃən
accuracy|n.|准确性；精确性；命中精度|ˈæk.jə.rə.si|ˈæk.jɚ.ə.si
accurate|adj.|准确的；精确的；无误的|ˈæk.jə.rət|ˈæk.jɚ.ət
accusation|n.|指责；指控；控告|ˌæk.jəˈzeɪ.ʃən|ˌæk.jəˈzeɪ.ʃən
accuse|vt.|指责；控告；指控（accuse someone of something）|əˈkjuːz|əˈkjuːz
accuser|n.|指责者；控告者|əˈkjuː.zəʳ|əˈkjuː.zɚ
accustom|vt.|使习惯于（accustom someone/oneself to）|əˈkʌs.təm|əˈkʌs.təm
achieve|vt.|实现；达到；取得（通过努力）|əˈtʃiːv|əˈtʃiːv
achievement|n.|成就；成绩；成功达到；实现|əˈtʃiːv.mənt|əˈtʃiːv.mənt
acid|n./adj.|n. 酸；酸性物质　adj. 酸的；酸性的|ˈæs.ɪd|ˈæs.ɪd
acidic|adj.|含酸的；酸性的；很酸的|əˈsɪd.ɪk|əˈsɪd.ɪk
acidity|n.|酸性；酸度；（胃内的）酸含量|əˈsɪd.ə.ti|əˈsɪd.ə.t̬i
acknowledge|vt.|承认；认可；确认收到；致意；鸣谢|əkˈnɒl.ɪdʒ|əkˈnɑː.lɪdʒ
acme|n.|顶峰；最高成就；极致（文学）|ˈæk.mi|ˈæk.mi
acquaint|vt.|使熟悉；使了解；告知（正式）|əˈkweɪnt|əˈkweɪnt
acquaintance|n.|认识但不熟悉的人；相识；（对某事的）了解|əˈkweɪn.təns|əˈkweɪn.təns
acquire|vt.|获得；取得；学会；习得；收购|əˈkwaɪəʳ|əˈkwaɪɚ
acquisition|n.|获得；习得；获得物；收购；收购的公司或资产|ˌæk.wɪˈzɪʃ.ən|ˌæk.wəˈzɪʃ.ən
acquisitive|adj.|贪求财物的；热衷收购的（公司）|əˈkwɪz.ɪ.tɪv|əˈkwɪz.ə.t̬ɪv
acquit|vt.|宣判无罪；表现（acquit oneself，正式）|əˈkwɪt|əˈkwɪt
acre|n.|英亩（面积单位，约 4,047 平方米）|ˈeɪ.kəʳ|ˈeɪ.kɚ
acrid|adj.|（气味或味道）刺鼻的；苦辣的；呛人的|ˈæk.rɪd|ˈæk.rɪd
acrimony|n.|激烈争执；怨愤；恶言相向（正式）|ˈæk.rɪ.mə.ni|ˈæk.rəˌmoʊ.ni
acronym|n.|首字母缩略词（作为一个完整单词发音）|ˈæk.rə.nɪm|ˈæk.rə.nɪm
action|n./vt.|n. 行动；行为；作用；战斗；运作方式；诉讼　vt. 处理；落实（工作用语）|ˈæk.ʃən|ˈæk.ʃən
`;
const notes = {
  aboard:"限定为交通工具上的在、登上，不泛化为在任何物体上。",
  abroad:"所查词典标注副词；室外和流传义补充语域。",
  ablaze:"所查词典标注作表语的形容词，不再混列副词。",
  aboriginal:"用原住民表述，移除原始、土生生物的无语境泛化。",
  academic:"名词指大学教师、研究学者，不直接等于大学生。",
  academician:"移除大学生、学究，区分学会会员与美、印英语的学者用法。",
  accost:"补上通常带威胁或冒犯意味，避免误记为普通打招呼。",
  account:"补齐账户、账号及记述等常用义，区分本词和 account for。",
  accessory:"补齐常用法律名词从犯。",
  accidental:"补充词典收录的音乐、鸟类学名词并标记领域。",
  acknowledge:"区分承认、收悉、致意、鸣谢，移除报偿的泛化。",
  acronym:"明确需作为一个词发音，区别于逐字母读出的 initialism。",
  acoustical:"未计入本批：英美 IPA 尚缺完整直接依据。"
};
const readings = {
  absent:[{label:"adj./prep.",uk:"ˈæb.sənt",us:"ˈæb.sənt"},{label:"v. absent oneself",uk:"æbˈsent",us:"æbˈsent"}],
  abstract:[{label:"adj./n.",uk:"ˈæb.strækt",us:"ˈæb.strækt"},{label:"vt.",uk:"æbˈstrækt",us:"æbˈstrækt"}],
  abuse:[{label:"vt.",uk:"əˈbjuːz",us:"əˈbjuːz"},{label:"n.",uk:"əˈbjuːs",us:"əˈbjuːs"}],
  abhor:[{label:"vt.（英音变体一）",uk:"əˈbhɔːʳ",us:"æbˈhɔːr"},{label:"vt.（英音变体二）",uk:"əˈbɔːʳ",us:"æbˈhɔːr"}],
  absorb:[{label:"vt.（英音变体一；美音变体一）",uk:"əbˈzɔːb",us:"əbˈsɔːrb"},{label:"vt.（英音变体二；美音变体二）",uk:"əbˈsɔːb",us:"əbˈzɔːrb"}]
};
// These original examples replace older unverified per-sense labels where needed.
const senses = {
  abandon:[["vt. 遗弃；放弃", "They refused to abandon the injured dog."],["n. 尽情（with abandon）", "The children danced with abandon in the garden."]],
  abduct:[["vt. 绑架", "The gang planned to abduct the diplomat."],["vt. 使外展（医学）", "The therapist asked her to abduct the arm slowly."]],
  abrasive:[["adj. 粗鲁生硬的", "His abrasive manner made cooperation difficult."],["adj. 有磨蚀作用的", "Do not use an abrasive cleaner on this surface."],["n. 磨料", "The workshop uses sand as an abrasive."]],
  abridge:[["vt. 删节", "The publisher plans to abridge the novel for young readers."],["vt. 限制（权利）", "These rules must not abridge our freedom of expression."]],
  absent:[["adj. 缺席的", "Two students were absent from class."],["adj. 心不在焉的", "She gave an absent nod while reading."],["prep. 没有（美）", "Absent further evidence, we cannot draw a conclusion."],["v. 缺席（absent oneself）", "He chose to absent himself from the discussion."]],
  absorb:[["vt. 吸收", "These towels absorb water quickly."],["vt. 理解", "It takes time to absorb new information."],["vt. 承担（费用）", "The company will absorb the extra cost."]],
  abstract:[["adj. 抽象的", "Justice is an abstract concept."],["n. 摘要", "The abstract summarizes the purpose of the study."],["vt. 提取", "They abstract water from the river for irrigation."]],
  abuse:[["vt. 滥用", "Officials must not abuse their authority."],["vt. 虐待", "People who abuse animals should be reported."],["n. 辱骂", "The referee faced verbal abuse from spectators."]],
  academic:[["adj. 学术的", "The journal publishes academic research."],["adj. 理论性的", "The debate has become purely academic."],["n. 大学教师；学者", "The academic studies ancient languages."]],
  accessory:[["n. 配饰", "A scarf is a useful winter accessory."],["n. 从犯", "He was charged as an accessory to the robbery."]],
  accidental:[["adj. 意外的", "The fire was caused by accidental damage to a cable."],["n. 临时变音记号", "The accidental changes the pitch of the note."],["n. 迷鸟", "The bird is an accidental in this region."]],
  accommodate:[["vt. 容纳；提供住宿", "The hostel can accommodate forty guests."],["vt. 满足（需要）；迁就", "We can accommodate your request for a later appointment."]],
  accommodation:[["n. 住宿", "The course fee does not include accommodation."],["n. 和解；调和", "Both sides hope to reach an accommodation."]],
  accompaniment:[["n. 伴奏", "The singer performed with piano accompaniment."],["n. 佐餐物", "Rice is a useful accompaniment to this dish."]],
  accompany:[["vt. 陪同", "A teacher will accompany the group."],["vt. 为…伴奏", "She will accompany the violinist on the piano."]],
  account:[["n. 账户", "She opened a savings account."],["n. 记述", "His account of the journey filled three pages."],["v. 占（account for）", "Exports account for half of the firm's revenue."]],
  acquaintance:[["n. 认识但不熟悉的人", "He is an acquaintance rather than a close friend."],["n. 了解", "Her acquaintance with the subject is limited."]],
  acquire:[["vt. 获得；习得", "Children acquire language through interaction."],["vt. 收购", "The company hopes to acquire a smaller rival."]],
  acquit:[["vt. 宣判无罪", "The jury may acquit the defendant."],["vt. 表现（acquit oneself）", "She managed to acquit herself well in the debate."]]
};
const pronunciationPages = new Set('accelerate accessible accident accidental accuracy accumulate accustom achieve acquisition action'.split(' '));
const batch = raw.trim().split('\n').map(line=>{
  const [w,pos,cn,uk,us]=line.split('|');
  const source=`https://dictionary.cambridge.org/dictionary/english/${w}`;
  return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"002",file:"js/lexicon-review-002.js",
    reason:notes[w]||"核对常用学习释义、词性与英美音；整理无语境泛化，非历史及专业义项的穷尽收录。",
    senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
    pronunciationSource:pronunciationPages.has(w)?`https://dictionary.cambridge.org/pronunciation/english/${w}`:source};
});
// A separate Oxford source is needed for abstract's verb meanings.
batch.find(r=>r.w==='abstract').sources = [batch.find(r=>r.w==='abstract').source,"https://www.oxfordlearnersdictionaries.com/definition/english/abstract_3"];
batch.find(r=>r.w==='abstract').pronunciationSource="https://dictionary.cambridge.org/pronunciation/english/abstract";
batch.find(r=>r.w==='acquaint').source="https://dictionary.cambridge.org/dictionary/english/acquaint-with";
batch.find(r=>r.w==='acquaint').pronunciationSource="https://dictionary.cambridge.org/pronunciation/english/acquaint";
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"002",checkedOn:"2026-11-16",words:batch.map(r=>r.w),deferred:[{w:"acoustical",reason:"查到 Collins 释义与美音，但未找到可同时照录的英美 IPA；保留待复核。",source:"https://www.collinsdictionary.com/dictionary/english/acoustical"}]}]);
for(const r of batch){
  window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
