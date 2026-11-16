/* Batch 007: checked 2026-11-16. Chinese glosses summarize linked dictionaries.
   Examples are original. Optional-schwa typography is flattened in IPA. */
(function(){
const raw=`
assistance|n.|帮助；协助；援助|əˈsɪs.təns|əˈsɪs.təns
assistant|n./adj.|n. 助手；助理；店员（尤英）　adj. 助理的；副职的（用于职称前）|əˈsɪs.tənt|əˈsɪs.tənt
assistantship|n.|研究生助教或助研的有薪职位（美）|əˈsɪs.tənt.ʃɪp|əˈsɪs.tənt.ʃɪp
associate|v./n./adj.|v. 联想；联系；交往　n. 同事；伙伴；持副学士学位者（美）　adj. 副的；准的；非正式成员的|əˈsəʊ.si.eɪt|əˈsoʊ.ʃi.eɪt
association|n.|协会；社团；联系；交往；联想|əˌsəʊ.siˈeɪ.ʃən|əˌsoʊ.siˈeɪ.ʃən
assorted|adj.|各种各样混在一起的；什锦的|əˈsɔː.tɪd|əˈsɔːr.t̬ɪd
assortment|n.|各种各样的混合；一组不同种类的东西|əˈsɔːt.mənt|əˈsɔːrt.mənt
assuage|vt.|减轻；缓和（不愉快的感受，正式）|əˈsweɪdʒ|əˈsweɪdʒ
assume|vt.|假定；认为；承担；取得（权力等）；呈现某特征；假装；冒用身份|əˈsjuːm|əˈsuːm
assumption|n.|假定；未经证实的看法；承担；取得（权力等，正式）|əˈsʌmp.ʃən|əˈsʌmp.ʃən
assurance|n.|保证；承诺；自信；人寿保险等保障（英）|əˈʃɔː.rəns|əˈʃʊr.əns
assure|vt.|向…保证；使放心；确保；为…保险（英）|əˈʃɔːʳ|əˈʃʊr
assuredly|adv.|自信地；肯定地；确实地|əˈʃɔː.rɪd.li|əˈʃʊr.ɪd.li
asteroid|n.|小行星|ˈæs.tər.ɔɪd|ˈæs.tə.rɔɪd
astonish|vt.|使十分惊讶；使惊异|əˈstɒn.ɪʃ|əˈstɑː.nɪʃ
astonished|adj.|十分惊讶的；惊异的（亦为 astonish 的过去式和过去分词）|əˈstɒn.ɪʃt|əˈstɑː.nɪʃt
astonishing|adj.|令人十分惊讶的；惊人的|əˈstɒn.ɪ.ʃɪŋ|əˈstɑː.nɪ.ʃɪŋ
astound|vt.|使大为惊讶；使震惊|əˈstaʊnd|əˈstaʊnd
astounding|adj.|令人十分惊讶的；令人震惊的；惊人的|əˈstaʊn.dɪŋ|əˈstaʊn.dɪŋ
astronomer|n.|天文学家；天文学研究者|əˈstrɒn.ə.məʳ|əˈstrɑː.nə.mɚ
astronomical|adj.|天文学的；由地球绕日位置界定的（季节）；极其巨大的（非正式）|ˌæs.trəˈnɒm.ɪ.kəl|ˌæs.trəˈnɑː.mɪ.kəl
astronomy|n.|天文学|əˈstrɒn.ə.mi|əˈstrɑː.nə.mi
astute|adj.|精明的；敏锐而善于把握形势的|əˈstʃuːt|əˈstuːt
asylum|n.|庇护；政治避难；精神病院（旧称）|əˈsaɪ.ləm|əˈsaɪ.ləm
asymmetrical|adj.|不对称的；两侧形状或大小不相同的|ˌeɪ.sɪˈmet.rɪk.əl|ˌeɪ.sɪˈmet.rɪk.əl
atheism|n.|无神论；不信神|ˈeɪ.θi.ɪ.zəm|ˈeɪ.θi.ɪ.zəm
atheist|n.|无神论者；不信神的人|ˈeɪ.θi.ɪst|ˈeɪ.θi.ɪst
Athens|n.|雅典（希腊首都）|ˈæθ.ənz|ˈæθ.ənz
athlete|n.|运动员；体育运动或身体锻炼的能手|ˈæθ.liːt|ˈæθ.liːt
atlas|n.|地图集；分布图集；寰椎（第一颈椎，医学）|ˈæt.ləs|ˈæt.ləs
atmosphere|n.|大气；大气层；空气；气氛；氛围；大气压（压强单位）|ˈæt.mə.sfɪəʳ|ˈæt.mə.sfɪr
atmospheric|adj.|大气的；空气的；富有特殊氛围的（常指神秘或浪漫氛围，褒义）|ˌæt.məsˈfer.ɪk|ˌæt.məsˈfɪr.ɪk
atom|n.|原子；极少量（比喻）|ˈæt.əm|ˈæt̬.əm
atomic|adj.|原子的；原子能的；核武器或核战争的|əˈtɒm.ɪk|əˈtɑː.mɪk
atomization|n.|雾化；分解为微粒或原子；分裂为细小部分（英式亦拼 atomisation）|ˌæt.ə.maɪˈzeɪ.ʃən|ˌæt̬.ə.məˈzeɪ.ʃən
atrophy|vi./n.|vi. 萎缩；衰退；退化　n. 萎缩；衰退|ˈæt.rə.fi|ˈæt.rə.fi
attach|v.|连接；附上；附加；赋予（意义等）；派遣或隶属；与…有关联|əˈtætʃ|əˈtætʃ
attached|adj.|依恋的；喜爱的（be attached to）；也为 attach 的过去式和过去分词，表示连接、附上等|əˈtætʃt|əˈtætʃt
attachment|n.|机器配件；电子邮件附件；依恋；附属关系；短期派驻；扣押财产或拘捕（英，法律）|əˈtætʃ.mənt|əˈtætʃ.mənt
attack|v./n.|v. 攻击；抨击；侵害；进攻；着手处理　n. 袭击；抨击；疾病发作；进攻；起音（音乐）|əˈtæk|əˈtæk
attain|vt.|达到；获得；实现（正式）|əˈteɪn|əˈteɪn
attainment|n.|达到；实现；成就；所学技能（后两义常用复数，正式）|əˈteɪn.mənt|əˈteɪn.mənt
attempt|vt./n.|vt. 尝试；试图　n. 尝试；努力；射门或传球尝试（体育）|əˈtempt|əˈtempt
attend|v.|出席；参加；上学或定期到场；注意听（正式）；照料；伴随发生（正式）|əˈtend|əˈtend
attendance|n.|出席；上学；出勤；到场人数；陪同照料（in attendance）|əˈten.dəns|əˈten.dəns
attendant|n./adj.|n. 服务员；侍从；婚礼傧相　adj. 伴随的；随之而来的；在场陪同的（正式）|əˈten.dənt|əˈten.dənt
attention|n.|注意；关注；照料；处理；立正；殷勤或追求（attentions）|əˈten.ʃən|əˈten.ʃən
attentive|adj.|专心的；留意的；体贴照料的|əˈten.tɪv|əˈten.t̬ɪv
attire|n./vt.|n. 服装；衣着（正式）　vt. 给…穿衣；打扮（尤指盛装）|əˈtaɪəʳ|əˈtaɪr
attorney|n.|律师（尤美）；有权代表他人办事的法律代理人|əˈtɜː.ni|əˈtɝː.ni
attract|vt.|吸引；引起兴趣或注意；招引；引力吸引|əˈtrækt|əˈtrækt
attraction|n.|吸引人的事物；旅游景点；吸引力；爱慕；引力（物理）|əˈtræk.ʃən|əˈtræk.ʃən
attractive|adj.|好看的；悦耳的；吸引人的；有吸引力的；产生吸引力的（物理）|əˈtræk.tɪv|əˈtræk.tɪv
attribute|n./vt.|n. 属性；特征；特质　vt. 把…归因于；认为是某人所创作或所说（attribute…to）|ˈæt.rɪ.bjuːt|ˈæt.rɪ.bjuːt
attrition|n.|消耗；逐步削弱；自然减员（美）；中途退出课程的人员流失（美）|əˈtrɪʃ.ən|əˈtrɪʃ.ən
auction|n./vt.|n. 拍卖　vt. 拍卖；将…拍卖|ˈɔːk.ʃən|ˈɑːk.ʃən
audacious|adj.|大胆的；敢于冒险的；放肆的|ɔːˈdeɪ.ʃəs|ɑːˈdeɪ.ʃəs
audible|adj./n./vi.|adj. 听得见的　n. 临场改变战术的口令（美式橄榄球）　vi. 喊口令临场改变战术（美式橄榄球）|ˈɔː.də.bəl|ˈɑː.də.bəl
audience|n.|观众；听众；读者群；正式会见；觐见|ˈɔː.di.əns|ˈɑː.di.əns
audio|adj./n.|adj. 声音的；录音的；音频的　n. 录音；录制的声音；音频|ˈɔː.di.əʊ|ˈɑː.di.oʊ
audit|n./vt.|n. 审计；正式检查　vt. 审计；检查；旁听课程（尤美）|ˈɔː.dɪt|ˈɑː.dɪt
audition|n./v.|n. 试演；试唱；试奏　v. 参加试演；让…试演|ɔːˈdɪʃ.ən|ɑːˈdɪʃ.ən
auditor|n.|审计员；旁听生（北美）；听者（正式）|ˈɔː.dɪt.əʳ|ˈɑː.də.t̬ɚ
auditorium|n.|观众席；听众席；礼堂；会堂（尤美）|ˌɔː.dɪˈtɔː.ri.əm|ˌɑː.dəˈtɔːr.i.əm
auditory|adj.|听觉的；与听觉有关的（生物学）|ˈɔː.dɪ.tər.i|ˈɑː.də.tɔːr.i
auger|n.|螺旋钻；钻木或钻地的大孔钻具|ˈɔː.ɡəʳ|ˈɑː.ɡɚ
augment|vt.|增加；增大；增强（通过添加，正式）|ɔːɡˈment|ɑːɡˈment
august|n./adj.|n. 八月（August，首字母大写）　adj. 威严的；尊贵的；地位崇高的（正式，小写）|ˈɔː.ɡəst|ˈɑː.ɡəst
aura|n.|气氛；气质；魅力（俚语）；光晕；据称可见的人体光环；偏头痛或癫痫的先兆（医学）|ˈɔː.rə|ˈɔːr.ə
aurora|n.|极光|ɔːˈrɔː.rə|ɔːˈrɔːr.ə
auspices|n.|支持；保护；主持或赞助（正式复数，under the auspices of）|ˈɔː.spɪ.sɪz|ˈɑː.spɪ.sɪz
auspicious|adj.|预示成功的；吉利的；吉兆的（正式）|ɔːˈspɪʃ.əs|ɑːˈspɪʃ.əs
austerity|n.|财政紧缩；紧缩政策；简朴；清苦；严肃；严苛的生活习惯|ɔːˈsterəti|ɔːˈsterəti
Australia|n.|澳大利亚|ɒsˈtreɪ.li.ə|ɑːˈstreɪl.jə
Australian|adj./n.|adj. 澳大利亚的；澳大利亚人的　n. 澳大利亚人|ɒsˈtreɪ.li.ən|ɑːˈstreɪl.jən
authentic|adj.|真正的；真实的；正宗的；确实可信的|ɔːˈθen.tɪk|ɑːˈθen.t̬ɪk
authenticate|vt.|证明真实；鉴定真伪；验证身份或支付权限|ɔːˈθen.tɪ.keɪt|ɑːˈθen.t̬ə.keɪt
author|n./vt.|n. 作者；作家；创始人；发起者　vt. 撰写；创作；提出（法案等）|ˈɔː.θəʳ|ˈɑː.θɚ
authoritative|adj.|有威信的；显得有权威的；信息可靠而权威的|ɔːˈθɒr.ɪ.tə.tɪv|əˈθɔːr.ə.t̬ə.t̬ɪv
authority|n.|权力；职权；授权；管理机构；当局；某领域的权威或专家|ɔːˈθɒr.ə.ti|əˈθɔːr.ə.t̬i
authorize|vt.|授权；正式批准（英式通常拼 authorise）|ˈɔː.θər.aɪz|ˈɑː.θɚ.aɪz
autobiographical|adj.|自传的；以作者自身经历为基础的|ˌɔː.təˌbaɪ.əˈɡræf.ɪ.kəl|ˌɑː.t̬əˌbaɪ.əˈɡræf.ɪ.kəl
autobiography|n.|自传；自传文学|ˌɔː.tə.baɪˈɒɡ.rə.fi|ˌɑː.t̬ə.baɪˈɑː.ɡrə.fi
autocrat|n.|独裁者；专制统治者；要求绝对服从的人|ˈɔː.tə.kræt|ˈɑː.t̬ə.kræt
automatic|adj./n.|adj. 自动的；无意识的；按规则必然发生的　n. 自动挡汽车；自动枪械|ˌɔː.təˈmæt.ɪk|ˌɑː.t̬əˈmæt̬.ɪk
automation|n.|自动化|ˌɔː.təˈmeɪ.ʃən|ˌɑː.t̬əˈmeɪ.ʃən
automobile|n.|汽车（美式用语）|ˈɔː.tə.mə.biːl|ˈɑː.t̬ə.moʊ.biːl
automotive|adj.|机动车的；汽车业的（常置于名词前）|ˌɔː.təˈməʊ.tɪv|ˌɑː.t̬əˈmoʊ.t̬ɪv
autonomous|adj.|自治的；独立自主的；能自主运行的（机器或系统）|ɔːˈtɒn.ə.məs|ɑːˈtɑː.nə.məs
autonomy|n.|自治；自治权；自主；自主决定能力|ɔːˈtɒn.ə.mi|ɑːˈtɑː.nə.mi
autopsy|n.|尸体解剖；验尸|ˈɔː.tɒp.si|ˈɑː.tɑːp.si
auxiliary|adj./n.|adj. 辅助的；支援的　n. 辅助人员；外籍辅助士兵；助动词|ɔːɡˈzɪl.i.ə.ri|ɑːɡˈzɪl.i.er.i
avail|n./vt.|n. 用处；效益（常见 to no avail 徒劳）　vt. 有助于（旧用）；利用（avail oneself of，正式；直接接宾语的利用义属印度英语）|əˈveɪl|əˈveɪl
available|adj.|可获得的；可用的；可买到的；有空的；可提供帮助的|əˈveɪ.lə.bəl|əˈveɪ.lə.bəl
avalanche|n.|雪崩；山体冰雪或岩石的崩落；突然涌来的大量事物|ˈæv.əl.ɑːntʃ|ˈæv.əl.æntʃ
avant-garde|n./adj.|n. 先锋派；前卫艺术家及其作品　adj. 前卫的；先锋派的|ˌæv.ɑ̃ːˈɡɑːd|ˌæv.ɑ̃ːˈɡɑːrd
avarice|n.|贪财；贪婪（正式）|ˈæv.ər.ɪs|ˈæv.ɚ.ɪs
avaricious|adj.|贪财的；贪婪的（正式，贬义）|ˌæv.əˈrɪʃ.əs|ˌæv.əˈrɪʃ.əs
avenue|n.|大街；林荫道；通向大宅的道路（英）；途径；方法|ˈæv.ə.njuː|ˈæv.ə.nuː
average|n./adj./vt.|n. 平均数；平均水平；运动员的平均成绩　adj. 平均的；普通的；中等的　vt. 平均达到；平均为|ˈæv.ər.ɪdʒ|ˈæv.ɚ.ɪdʒ
`;
const readings={
  associate:[{label:"v. 联系；交往",uk:"əˈsəʊ.si.eɪt",us:"əˈsoʊ.ʃi.eɪt"},{label:"n. 伙伴；同事",uk:"əˈsəʊ.ʃi.ət",us:"əˈsoʊ.ʃi.ət"},{label:"adj. 副的；准的",uk:"əˈsəʊ.si.ət",us:"əˈsoʊ.ʃi.ət"}],
  attribute:[{label:"n. 属性",uk:"ˈæt.rɪ.bjuːt",us:"ˈæt.rɪ.bjuːt"},{label:"vt. 归因于",uk:"əˈtrɪb.juːt",us:"əˈtrɪb.juːt"}],
  august:[{label:"n. August 八月",uk:"ˈɔː.ɡəst",us:"ˈɑː.ɡəst"},{label:"adj. august 威严的",uk:"ɔːˈɡʌst",us:"ɑːˈɡʌst"}],
  austerity:[{label:"n.（牛津）",uk:"ɔːˈsterəti",us:"ɔːˈsterəti"},{label:"n.（牛津英音另一读法）",uk:"ɒˈsterəti",us:"ɔːˈsterəti"}]
};
const notes={
  associate:"分别照录动词、名词、形容词；保留所查剑桥英音 si/ʃi 差别，不统一改写。",
  attribute:"名词与动词重音不同，另查本词发音页；动词依据归因于及归属作者等用法。",
  august:"大写 August 为月份，小写 august 为形容词；分开释义和重音。",
  austerity:"释义交叉核对牛津。剑桥网页的美音重音与牛津及其自身 American Dictionary 标注不一致；本条音标采用牛津，明确列出出处。",
  atomization:"柯林斯 atomize 条目明确收录派生名词 atomization；结合剑桥 atomize 核对雾化、分解义；音标查本词独立发音页，不从动词推导。",
  assumption:"依据牛津补齐承担或取得权力义，不因剑桥简略页主要列假定义就删除。",
  auditor:"牛津补查旁听生和正式语域的听者，避免把真实义项误判成无来源。",
  asylum:"区分庇护与旧称精神病院，避免用宽泛收容所概括全部用法。",
  aura:"将灵性语境中的光环明确写成据称可见，不作已确证的物理事实；另列医学先兆。",
  assistantship:"限定美国高校研究生的有薪助教或助研岗位，不泛化为任何助理职位。",
  attached:"区分词汇化的依恋义与 attach 的规则分词身份。",
  automatic:"柯林斯补查名词自动挡汽车、自动枪械，保留形容词的无意识与按规则发生义。",
  attendant:"补齐形容词伴随的、随之而来的，不只保留服务员名词义。"
};
const senses={
  assistant:[["n. 助手","The assistant prepared the documents."],["n. 店员（尤英）","The assistant helped me find a larger size."],["adj. 助理的","She became assistant director last year."]],
  associate:[["vt. 联想","People associate the town with fine pottery."],["vi. 交往","He prefers to associate with other musicians."],["n. 伙伴；同事","A business associate introduced us."],["adj. 副的","She works as an associate editor."]],
  association:[["n. 协会","The association represents local artists."],["n. 联系","The study found an association between sleep and memory."],["n. 联想","The song has a pleasant association for her."]],
  assume:[["vt. 假定","We assume that the figures are accurate."],["vt. 承担","She will assume responsibility for the project."],["vt. 呈现特征","The dispute began to assume greater importance."],["vt. 冒用身份","The detective had to assume a false identity."]],
  assumption:[["n. 假定","The plan rests on a questionable assumption."],["n. 取得权力（正式）","The king's assumption of power changed the government."]],
  assurance:[["n. 保证","We received an assurance that the work would finish on time."],["n. 自信","She answered with quiet assurance."],["n. 保险（英）","He compared several life assurance policies."]],
  assure:[["vt. 向…保证","I can assure you that your information is safe."],["vt. 确保","The new agreement should assure continued funding."]],
  assuredly:[["adv. 自信地","The young pianist played assuredly."],["adv. 肯定地","The delay will assuredly affect the schedule."]],
  astronomical:[["adj. 天文学的","The team collected astronomical observations."],["adj. 极其巨大的（非正式）","The repairs came with an astronomical price tag."]],
  asylum:[["n. 庇护","The family applied for asylum."],["n. 精神病院（旧称）","The historian examined records from a Victorian asylum."]],
  atlas:[["n. 地图集","We checked the route in an atlas."],["n. 寰椎（医学）","The atlas supports the skull."]],
  atmosphere:[["n. 大气层","The probe entered the planet's atmosphere."],["n. 气氛","The cafe has a relaxed atmosphere."],["n. 大气压（单位）","The pressure was close to one atmosphere."]],
  atmospheric:[["adj. 大气的","The sensors measure atmospheric pressure."],["adj. 富有氛围的","The film uses atmospheric lighting."]],
  atom:[["n. 原子","Each atom has a nucleus."],["n. 极少量（比喻）","There is not an atom of truth in the rumour."]],
  atomization:[["n. 雾化","Fine atomization helps the fuel mix with air."],["n. 分裂为细小部分","The essay examines the atomization of modern society."]],
  atrophy:[["vi. 萎缩","Unused muscles may atrophy."],["vi. 衰退","Skills can atrophy without practice."],["n. 萎缩","The scan showed muscle atrophy."]],
  attach:[["vt. 连接","Attach the handle to the lid."],["vt. 附上","Please attach the file to your message."],["vt. 赋予重要性","We attach great importance to accuracy."]],
  attachment:[["n. 机器配件","The vacuum cleaner has a brush attachment."],["n. 邮件附件","I sent the report as an attachment."],["n. 依恋","She felt a strong attachment to her hometown."]],
  attack:[["v. 袭击","The animals rarely attack people."],["vt. 抨击","Critics attack the proposal as unfair."],["vt. 着手处理","We need to attack the problem from a different angle."],["n. 疾病发作","He recovered from an asthma attack."]],
  attend:[["v. 出席","All members may attend the meeting."],["vi. 注意听（正式）","Please attend to what the speaker is saying."],["vt. 照料","A nurse will attend the patient."],["vt. 伴随（正式）","Risks attend every major investment."]],
  attendance:[["n. 出席","Attendance at the seminar is compulsory."],["n. 到场人数","The final match had a record attendance."],["n. 陪同照料（in attendance）","A doctor was in attendance throughout the event."]],
  attendant:[["n. 服务员","The museum attendant answered our questions."],["n. 婚礼傧相","The bride thanked each attendant."],["adj. 伴随的","They discussed the plan and its attendant risks."]],
  attention:[["n. 注意","Please give the instructions your full attention."],["n. 照料","The injured bird needs medical attention."],["n. 立正","The soldiers stood at attention."]],
  attentive:[["adj. 专心的","The audience remained attentive throughout the lecture."],["adj. 体贴照料的","The staff were attentive to every guest's needs."]],
  attire:[["n. 衣着","Formal attire is required for the ceremony."],["vt. 给…穿衣","Costume assistants attire the actors in period clothing."]],
  attraction:[["n. 景点","The museum is the town's main attraction."],["n. 吸引力","The job's chief attraction is its flexible schedule."],["n. 引力（物理）","The experiment measured the attraction between the objects."]],
  attractive:[["adj. 好看的","The room has an attractive colour scheme."],["adj. 有吸引力的","The company made an attractive offer."],["adj. 产生吸引力的（物理）","Gravity is an attractive force."]],
  attribute:[["n. 特质","Patience is a useful attribute for a teacher."],["vt. 归因于","They attribute the improvement to regular practice."],["vt. 认为是某人的作品","Scholars attribute the painting to a local artist."]],
  attrition:[["n. 消耗","The conflict became a war of attrition."],["n. 自然减员（美）","The firm reduced staff numbers through attrition."]],
  auction:[["n. 拍卖","The painting was sold at auction."],["vt. 拍卖","They will auction the collection next month."]],
  audible:[["adj. 听得见的","Her voice was barely audible."],["n. 临场变更战术口令（美式橄榄球）","The quarterback called an audible before the snap."]],
  audience:[["n. 观众","The audience applauded the performance."],["n. 正式会见","The ambassador had a private audience with the king."]],
  audio:[["adj. 音频的","The device records an audio signal."],["n. 录制的声音","The audio was clearer than the video."]],
  audit:[["n. 审计","The company commissioned an independent audit."],["vt. 审计","An outside firm will audit the accounts."],["vt. 旁听课程","Students may audit the course without receiving credit."]],
  audition:[["n. 试演","Her audition lasted ten minutes."],["vi. 参加试演","She will audition for the leading role."],["vt. 让…试演","The director plans to audition twenty singers."]],
  auditor:[["n. 审计员","The auditor examined the financial records."],["n. 旁听生（北美）","He attended the course as an auditor."],["n. 听者（正式）","The speaker asked each auditor to listen carefully."]],
  august:[["n. August 八月","The festival takes place in August."],["adj. august 威严的","The ceremony was held in the august hall."]],
  aura:[["n. 气氛；气质","The old house has an aura of mystery."],["n. 光晕","A pale aura surrounded the light in the photograph."],["n. 医学先兆","She sometimes experiences an aura before a migraine."]],
  austerity:[["n. 财政紧缩","The government announced a period of austerity."],["n. 简朴","The room's austerity suited the quiet monastery."]],
  authenticate:[["vt. 鉴定真伪","Experts will authenticate the painting."],["vt. 验证身份","The system asks users to authenticate their identity."]],
  author:[["n. 作者","The author signed copies of her novel."],["vt. 撰写","She will author the final report."]],
  authoritative:[["adj. 有威信的","She spoke in an authoritative voice."],["adj. 信息可靠而权威的","The handbook provides an authoritative account of the subject."]],
  authority:[["n. 权力","The manager has authority to approve the payment."],["n. 管理机构","The local authority maintains the road."],["n. 专家","She is an authority on medieval history."]],
  automatic:[["adj. 自动的","The building has automatic doors."],["adj. 无意识的","His response was almost automatic."],["adj. 按规则必然发生的","Membership renewal is automatic."],["n. 自动挡汽车","She prefers driving an automatic."]],
  autonomous:[["adj. 自治的","The region has an autonomous government."],["adj. 自主运行的","The team is testing an autonomous vehicle."]],
  auxiliary:[["adj. 辅助的","The hospital hired auxiliary staff."],["n. 助动词","In this sentence, have is an auxiliary."]],
  avail:[["n. 用处（to no avail）","We searched for the missing file to no avail."],["vt. 利用（avail oneself of）","Students should avail themselves of the library's resources."]],
  available:[["adj. 可获得的","The report is available online."],["adj. 有空的","The doctor is available this afternoon."]],
  avalanche:[["n. 雪崩","The avalanche blocked the mountain road."],["n. 突然涌来的大量事物","The announcement brought an avalanche of questions."]],
  avenue:[["n. 大街","Trees line the avenue."],["n. 途径","The team explored every avenue of research."]],
  average:[["n. 平均数","The average of four and six is five."],["adj. 普通的","The survey asked the average household about energy costs."],["vt. 平均达到","The trains average ninety kilometres an hour."]]
};
const phPages=new Set('associate asymmetrical atom atomization atmosphere attach attract attractive attribute audit author august Australian'.toLowerCase().split(' '));
const records=raw.trim().split('\n').map(line=>{
  const [w,pos,cn,uk,us]=line.split('|'),source=`https://dictionary.cambridge.org/dictionary/english/${w.toLowerCase()}`;
  return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"007",file:"js/lexicon-review-007.js",
    reason:notes[w]||"依据所链词典核对现代常用学习义、词性和英美音；专业义及使用限制另作标注。",
    senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
    pronunciationSource:phPages.has(w.toLowerCase())?`https://dictionary.cambridge.org/pronunciation/english/${w.toLowerCase()}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('assumption').sources=[get('assumption').source,"https://www.oxfordlearnersdictionaries.com/definition/english/assumption"];
get('atomization').source="https://www.collinsdictionary.com/us/dictionary/english/atomize";
get('atomization').sources=[get('atomization').source,"https://dictionary.cambridge.org/dictionary/english/atomize"];
get('attire').sources=[get('attire').source,"https://www.collinsdictionary.com/dictionary/english/attire"];
get('auditor').sources=[get('auditor').source,"https://www.oxfordlearnersdictionaries.com/us/definition/english/auditor"];
get('automatic').sources=[get('automatic').source,"https://www.collinsdictionary.com/dictionary/english/automatic"];
get('avail').sources=[get('avail').source,"https://dictionary.cambridge.org/dictionary/english/avail-of"];
get('austerity').sources=[get('austerity').source,"https://www.oxfordlearnersdictionaries.com/definition/english/austerity"];
get('austerity').pronunciationSource=get('austerity').sources[1];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"007",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[]}]);
for(const r of records){
  window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
