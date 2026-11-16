/* Batch 008: dictionary checks dated 2026-11-16. Glosses are summaries;
   examples are original. Optional-schwa typography is flattened in IPA. */
(function(){
const raw=`
averse|adj.|强烈反对的；不愿意的；厌恶的（常接 to，通常作表语）|əˈvɜːs|əˈvɝːs
aversion|n.|强烈反感；厌恶；令人厌恶的事物（常接 to）|əˈvɜː.ʃən|əˈvɝː.ʒən
avert|vt.|避免；防止（坏事）；移开（目光或思绪）|əˈvɜːt|əˈvɝːt
aviation|n.|航空；飞行；飞机设计、制造、维护及航空运输业|ˌeɪ.viˈeɪ.ʃən|ˌeɪ.viˈeɪ.ʃən
aviator|n.|飞行员（旧式用语）|ˈeɪ.vi.eɪ.təʳ|ˈeɪ.vi.eɪ.t̬ɚ
avid|adj.|热切的；热衷的；兴趣浓厚的|ˈæv.ɪd|ˈæv.ɪd
avocation|n.|业余爱好；主业之外出于兴趣从事的活动|ˌæv.əˈkeɪ.ʃən|ˌæv.oʊˈkeɪ.ʃən
avocational|adj.|业余爱好的；主业之外出于兴趣从事的|ˌæv.əˈkeɪ.ʃən.əl|ˌæv.əˈkeɪ.ʃən.əl
avoid|vt.|避开；回避；避免；防止（接动词时用 -ing）|əˈvɔɪd|əˈvɔɪd
avoidable|adj.|可以避免的|əˈvɔɪ.də.bəl|əˈvɔɪ.də.bəl
avoidance|n.|避免；回避；因恐惧而躲避（心理学）|əˈvɔɪ.dəns|əˈvɔɪ.dəns
avouch|vt.|保证；担保；承认；断言（古旧用语）|əˈvaʊtʃ|əˈvaʊtʃ
avow|vt.|公开承认；公开声明（正式）|əˈvaʊ|əˈvaʊ
award|n./vt.|n. 奖；奖金；判定的赔偿金　vt. 授予；颁发；判给|əˈwɔːd|əˈwɔːrd
aware|adj.|意识到的；知道的；了解的（作表语）|əˈweəʳ|əˈwer
awareness|n.|意识；认识；知晓；了解|əˈweə.nəs|əˈwer.nəs
awe|n./vt.|n. 敬畏；惊叹　vt. 使敬畏；使惊叹|ɔː|ɑː
awful|adj.|糟糕的；极坏的；令人不快的；极大的（如 an awful lot）|ˈɔː.fəl|ˈɑː.fəl
awkward|adj.|难处理的；不便的；令人尴尬的；局促的；故意不合作的（尤英）；动作笨拙的|ˈɔː.kwəd|ˈɑː.kwɚd
awkwardly|adv.|尴尬地；笨拙地；造成不便地；难处理地；故意不合作地|ˈɔː.kwəd.li|ˈɑː.kwɚd.li
axe|n./vt.|n. 斧；解雇或取消（the axe）；吉他等乐器（俚语）　vt. 裁撤；取消；大幅削减（美式亦拼 ax）|æks|æks
axis|n.|轴；轴线；坐标轴；枢椎（医学）；政治联盟；复数 axes|ˈæk.sɪs|ˈæk.sɪs
azure|adj./n.|adj. 天蓝色的；蔚蓝的　n. 天蓝色；蔚蓝色|ˈæʒ.əʳ|ˈæʒ.ɚ
baboon|n.|狒狒|bəˈbuːn|bəˈbuːn
baby-sitter|n.|临时照看孩子的人（父母外出时；亦拼 babysitter）|ˈbeɪbɪsɪtə|ˈbeɪbiˌsɪtər
bachelor|n.|未婚男子；学士；学士学位获得者；学士学位；单身公寓（加拿大）|ˈbætʃ.əl.əʳ|ˈbætʃ.əl.ɚ
back|adv./n./adj./v.|adv. 回去；回来；向后；作为回应；追溯到过去　n. 背部；后面；背面；靠背　adj. 后面的；背面的　v. 支持；资助；（使）后退|bæk|bæk
backbone|n.|脊柱；骨干；支柱；勇气；骨气|ˈbæk.bəʊn|ˈbæk.boʊn
backdrop|n.|舞台背景幕；背景景物；事件的背景形势|ˈbæk.drɒp|ˈbæk.drɑːp
background|n.|背景；底色；背景声；事情的来龙去脉；家庭或教育背景；经历|ˈbæk.ɡraʊnd|ˈbæk.ɡraʊnd
backpack|n./v.|n. 背包　v. 背包旅行；背包徒步露营（美）|ˈbæk.pæk|ˈbæk.pæk
backward|adj./adv.|adj. 向后的；落后的（有时含冒犯意味）；迟疑不前的（英）；学习困难的（旧式冒犯用语）　adv. 向后；倒着；向过去|ˈbæk.wəd|ˈbæk.wɚd
bacon|n.|培根；咸猪肉|ˈbeɪ.kən|ˈbeɪ.kən
bacteria|n.|细菌（bacterium 的复数）|bækˈtɪə.ri.ə|bækˈtɪr.i.ə
bacterium|n.|细菌（单数；复数 bacteria）|bækˈtɪə.ri.əm|bækˈtɪr.i.əm
badge|n./vt.|n. 徽章；标志；身份牌；警徽；臂章　vt. 给…加标记或徽章|bædʒ|bædʒ
badger|n./vt.|n. 獾　vt. 纠缠；反复催问或要求|ˈbædʒ.əʳ|ˈbædʒ.ɚ
badminton|n.|羽毛球运动|ˈbæd.mɪn.tən|ˈbæd.mɪn.tən
baffle|vt./n.|vt. 使困惑；使受挫；阻挡或调节流体、声音、光线　n. 挡板；导流板；障音板（工程）|ˈbæf.əl|ˈbæf.əl
baggage|n.|行李；影响思想或行为的经历、观念及情绪包袱|ˈbæɡ.ɪdʒ|ˈbæɡ.ɪdʒ
bait|n./vt.|n. 饵；诱饵；诱惑物　vt. 故意激怒；放饵于；纵犬攻击动物以取乐|beɪt|beɪt
bake|v./n.|v. 烘烤；焙；烧硬（陶土等）；热得难受（非正式）　n. 烤制的菜肴；烘焙食品|beɪk|beɪk
balance|n./v.|n. 平衡；均衡；余额；余款；剩余部分；天平　v. （使）平衡；权衡；使收支相抵|ˈbæl.əns|ˈbæl.əns
balanced|adj.|公正全面的；平衡的；比例适当的；收支平衡的|ˈbæl.ənst|ˈbæl.ənst
balcony|n.|阳台；剧院楼座|ˈbæl.kə.ni|ˈbæl.kə.ni
bald|adj.|秃顶的；无毛发的；不加修饰的；磨光的（轮胎）|bɔːld|bɑːld
baldness|n.|秃顶；脱发；不加修饰的直率|ˈbɔːld.nəs|ˈbɑːld.nəs
balk|vi./n.|vi. 不愿意；拒绝；投球犯规（棒球）　n. 粗木梁；投球犯规（棒球；英式亦拼 baulk）|bɔːk|bɑːlk
ballet|n.|芭蕾舞；芭蕾舞剧；芭蕾舞曲|ˈbæl.eɪ|bælˈeɪ
balloon|n./vi.|n. 气球；热气球；漫画中的对话或思想框　vi. 迅速膨胀或增长；乘热气球旅行|bəˈluːn|bəˈluːn
balloonist|n.|热气球运动者；乘气球旅行的人|bəˈluː.nɪst|bəˈluː.nɪst
ballot|n./vt.|n. 无记名投票；选票　vt. 组织…进行无记名投票|ˈbæl.ət|ˈbæl.ət
ballroom|n.|舞厅；交谊舞|ˈbɔːl.ruːm|ˈbɑːl.ruːm
balmy|adj.|（天气）温暖宜人的|ˈbɑː.mi|ˈbɑː.mi
bamboo|n.|竹；竹子；竹竿；竹材；竹纤维织物|bæmˈbuː|bæmˈbuː
ban|vt./n.|vt. 禁止；取缔　n. 禁令；禁止|bæn|bæn
band|n./v.|n. 乐队；带；条纹；范围；群体　vt. 给动物套识别环（美）　vi. 联合（band together）|bænd|bænd
bandage|n./vt.|n. 绷带；创可贴（美）　vt. 用绷带包扎|ˈbæn.dɪdʒ|ˈbæn.dɪdʒ
bandanna|n.|扎在头上或颈部的彩色方巾（尤美；英式通常拼 bandana）|bænˈdæn.ə|bænˈdæn.ə
bandit|n.|持械劫匪；强盗；匪徒|ˈbæn.dɪt|ˈbæn.dɪt
bandleader|n.|乐队领队；常兼演奏的乐队指挥（旧式）|ˈbændˌliː.dəʳ|ˈbændˌliː.dɚ
bandmaster|n.|军乐队或铜管乐队指挥|ˈbændˌmɑː.stəʳ|ˈbændˌmæs.tɚ
bang|v./n./adv.|v. 砰地撞击；猛敲；使发出巨响　n. 砰的一声；撞击　adv. 正好；直接；完全（非正式）|bæŋ|bæŋ
banish|vt.|放逐；驱逐；消除；摒除|ˈbæn.ɪʃ|ˈbæn.ɪʃ
bank|n./v.|n. 银行；河岸；土堆或云团；一排设备；储存库　v. 存款；在银行开户；倾斜转弯（飞机）；堆积；打板投篮；指望或依靠（bank on）|bæŋk|bæŋk
banker|n.|银行家；银行高级职员；游戏中管理钱款的人|ˈbæŋ.kəʳ|ˈbæŋ.kɚ
banking|n.|银行业；银行业务；办理个人账户事务；亦为 bank 的现在分词|ˈbæŋ.kɪŋ|ˈbæŋ.kɪŋ
bankrupt|adj./n./vt.|adj. 破产的；没钱的（非正式）；丧失良好品质的（贬义）　n. 破产者　vt. 使破产|ˈbæŋ.krʌpt|ˈbæŋ.krʌpt
bankruptcy|n.|破产；良好品质的完全缺失（如 moral bankruptcy）|ˈbæŋ.krəpt.si|ˈbæŋ.krəpt.si
banner|n.|横幅；旗帜；横幅广告；鲜明主张或口号|ˈbæn.əʳ|ˈbæn.ɚ
banquet|n.|正式宴会；盛宴；使人获得丰富享受的事物|ˈbæŋ.kwɪt|ˈbæŋ.kwət
bar|n./vt./prep.|n. 酒吧；吧台；长条；块；门闩；障碍；标准；小节（音乐）；律师界；巴（压强单位）　vt. 阻止；禁止；用横木封住　prep. 除…之外|bɑːʳ|bɑːr
barb|n.|倒钩；倒刺；带刺的讥讽话|bɑːb|bɑːrb
barbarian|n.|被称作蛮族的人（历史或带偏见的称呼）；粗野或无教养的人（贬义）|bɑːˈbeə.ri.ən|bɑːrˈber.i.ən
barbecue|n./v.|n. 烧烤架；户外烧烤餐会；烧烤食物　v. 烧烤|ˈbɑː.bɪ.kjuː|ˈbɑːr.bə.kjuː
barber|n./v.|n. 理发师（主要理男发及修面）　v. 从事理发；给…理发或修面|ˈbɑː.bəʳ|ˈbɑːr.bɚ
bare|adj./vt./adv./det.|adj. 赤裸的；无遮盖的；最基本的；空的　vt. 露出　adv. 很；完全（英俚语）　det. 大量的（英俚语）|beəʳ|ber
barely|adv.|勉强；仅仅；几乎不|ˈbeə.li|ˈber.li
bargain|n./v./adj.|n. 便宜货；划算的买卖；协议　v. 讨价还价；洽谈条件　adj. 廉价的；低于通常价格的|ˈbɑː.ɡɪn|ˈbɑːr.ɡɪn
barge|n./vi.|n. 驳船；平底货船　vi. 莽撞地冲入；挤撞；冒失地闯行|bɑːdʒ|bɑːrdʒ
bark|n./v.|n. 树皮；犬吠声；薄片巧克力甜食　vi. 吠叫　vt. 厉声说出|bɑːk|bɑːrk
barn|n.|谷仓；农场存放干草、谷物或饲养牲畜的大建筑|bɑːn|bɑːrn
barometer|n.|气压计；反映变化或趋势的指标|bəˈrɒm.ɪ.təʳ|bəˈrɑː.mə.t̬ɚ
baroque|adj./n.|adj. 巴洛克风格的；过分繁复的　n. 巴洛克风格；巴洛克时期|bəˈrɒk|bəˈroʊk
barrel|n./vi.|n. 大桶；桶（容量单位，石油桶约159升）；枪管　vi. 飞快行进（非正式）|ˈbær.əl|ˈber.əl
barren|adj.|不毛的；贫瘠的；不能生育的（正式）；无成果或无创意的|ˈbær.ən|ˈber.ən
barrenness|n.|贫瘠；不毛；不育；空乏；缺乏创意或成果|ˈbær.ən.nəs|ˈber.ən.nəs
barricade|n./vt.|n. 路障；临时障碍物　vt. 设置路障封住；把…封堵起来|ˈbær.ɪˌkeɪd|ˈber.əˌkeɪd
barrier|n.|屏障；栅栏；阻碍；隔阂；车站检票闸口（英）|ˈbær.i.əʳ|ˈber.i.ɚ
barter|v./n.|v. 以物易物；交换；议价　n. 以物易物；实物交换制|ˈbɑː.təʳ|ˈbɑːr.t̬ɚ
baseball|n.|棒球运动；棒球|ˈbeɪs.bɔːl|ˈbeɪs.bɑːl
basement|n.|地下室；半地下层|ˈbeɪs.mənt|ˈbeɪs.mənt
bashful|adj.|害羞的；腼腆的；容易难为情的|ˈbæʃ.fəl|ˈbæʃ.fəl
basic|adj.|基本的；基础的；最必要的；简单的；碱性的（化学）|ˈbeɪ.sɪk|ˈbeɪ.sɪk
basin|n.|盆；洗脸盆；一盆的量；流域；盆地；港池|ˈbeɪ.sən|ˈbeɪ.sən
basis|n.|基础；根据；基准；方式；复数 bases|ˈbeɪ.sɪs|ˈbeɪ.sɪs
bask|vi.|晒太阳；取暖；享受赞美等（bask in）|bɑːsk|bæsk
baste|vt.|烤制时往肉上浇油汁；用长针脚暂缝（尤美）|beɪst|beɪst
batch|n.|一批；一组；同批生产的东西；同届学生（印度英语）|bætʃ|bætʃ
bath|n./v.|n. 浴缸（英）；洗澡；浴室（美，房屋描述）；浴疗；盛液体的容器；公共浴场或泳池（复数 baths）　v. 洗澡；给…洗澡（英）|bɑːθ|bæθ
`;
const readings={
  aversion:[{label:"n.（ʃ 读法）",uk:"əˈvɜː.ʃən",us:"əˈvɝː.ʃən"},{label:"n.（ʒ 读法）",uk:"əˈvɜː.ʒən",us:"əˈvɝː.ʒən"}],
  azure:[{label:"adj./n.（英音读法一）",uk:"ˈæʒ.əʳ",us:"ˈæʒ.ɚ"},{label:"adj./n.（英音读法二）",uk:"ˈæz.jʊəʳ",us:"ˈæʒ.ɚ"}],
  ballroom:[{label:"n.（读法一）",uk:"ˈbɔːl.ruːm",us:"ˈbɑːl.ruːm"},{label:"n.（读法二）",uk:"ˈbɔːl.rʊm",us:"ˈbɑːl.rʊm"}],
  barricade:[{label:"n.（英音读法一）",uk:"ˈbær.ɪˌkeɪd",us:"ˈber.əˌkeɪd"},{label:"vt.（英音读法一）",uk:"ˈbær.ɪ.keɪd",us:"ˈber.əˌkeɪd"},{label:"n./vt.（英音读法二）",uk:"bær.ɪˈkeɪd",us:"ˈber.əˌkeɪd"}]
};
const notes={
  avocation:"与 vocation 区分，主学习义为主业之外的兴趣爱好，不泛化为主要职业。",
  avocational:"核对本词独立条目及英美音，含义为业余爱好的，不误作职业性的。",
  avouch:"柯林斯本词明确列出英美 IPA 及古旧语域，不能把它当作普通现代书面用词。",
  'baby-sitter':"柯林斯 baby-sitter 条目核对释义；babysitter 条目明确列出 baby-sitter 拼写变体，音标照录该条英美标注，保留 sourceHeadword 对应。",
  bachelor:"牛津、柯林斯补齐学士、学位及加拿大单身公寓用法，不只保留未婚男子。",
  bacteria:"明确是 bacterium 的复数，不把复数再当单数词干。",
  axis:"复数 axes 为 /ˈæk.siːz/，与 axe 的复数 axes 不同；不作为另一种单数音标显示。",
  baffle:"柯林斯补查工程名词和调节流体等动词用法；所查学习义不列不及物徒作挣扎。",
  backward:"保留方向和落后等用法，并注明描述学习困难者的用法属旧式且冒犯。",
  barbarian:"释义反映说话者的历史或文化评价，不把其他文化客观定义为野蛮。",
  basic:"核对常用形容词及化学义；基本原理通常为 basics，不把复数词义无标记地塞给 basic。",
  barricade:"保留所查词典对英音名词、动词以及重音变体的原标注，不统一成一个转写。"
};
const senses={
  avert:[["vt. 防止","The agreement helped avert a strike."],["vt. 移开目光","She tried to avert her eyes from the scene."]],
  avoid:[["vt. 避开","We avoid the busy road during rush hour."],["vt. 防止","The new procedure helps avoid mistakes."]],
  award:[["n. 奖","The film won an international award."],["vt. 授予","The committee will award a prize for the best design."],["vt. 判给","The court may award damages to the injured worker."]],
  awe:[["n. 敬畏","They watched the waterfall in awe."],["vt. 使惊叹","The scale of the building can awe even experienced visitors."]],
  awful:[["adj. 糟糕的","We had awful weather on the journey."],["adj. 极大的","The work requires an awful lot of patience."]],
  awkward:[["adj. 难处理的","The parcel is an awkward shape to carry."],["adj. 令人尴尬的","There was an awkward silence."],["adj. 笨拙的","His movements were awkward after the injury."]],
  axe:[["n. 斧","He used an axe to split the log."],["vt. 裁撤；取消","The company plans to axe several unprofitable services."]],
  axis:[["n. 轴","The planet rotates around its axis."],["n. 坐标轴","Label the horizontal axis with time."],["n. 枢椎（医学）","The axis is the second cervical vertebra."]],
  bachelor:[["n. 未婚男子","He remained a bachelor for many years."],["n. 学士","She graduated as a Bachelor of Science."],["n. 单身公寓（加拿大）","He rented a small bachelor near the university."]],
  back:[["n. 背部","The heavy bag hurt her back."],["n. 背面","Write your name on the back of the card."],["adj. 后面的","Please use the back door."],["adv. 回来","She will be back tomorrow."],["vt. 支持","Several investors agreed to back the project."],["v. 后退","Back the car slowly into the space."]],
  backbone:[["n. 脊柱","The backbone supports the upper body."],["n. 支柱","Small farms are the backbone of the local economy."],["n. 骨气","She showed backbone by refusing the unfair demand."]],
  backdrop:[["n. 舞台背景幕","The painted backdrop showed a forest."],["n. 背景形势","The talks began against a backdrop of economic uncertainty."]],
  background:[["n. 背景","A mountain is visible in the background."],["n. 经历","She has a background in engineering."],["n. 背景声","Soft music played in the background."]],
  backpack:[["n. 背包","His backpack contained a tent and a blanket."],["v. 背包旅行","They plan to backpack across the country."]],
  badge:[["n. 徽章；身份牌","Each visitor must wear a badge."],["vt. 加标记","The manufacturer will badge the cars differently for each market."]],
  badger:[["n. 獾","A badger emerged from the hedge."],["vt. 纠缠","Please do not badger her with repeated questions."]],
  baffle:[["vt. 使困惑","The unexpected result continues to baffle the researchers."],["n. 挡板（工程）","A metal baffle directs the airflow inside the machine."]],
  baggage:[["n. 行李","The airline allows one piece of checked baggage."],["n. 情绪包袱","Past disappointments can become emotional baggage."]],
  bait:[["n. 饵","The fisherman put bait on the hook."],["n. 诱惑物","The discount was bait to attract new customers."],["vt. 故意激怒","Ignore people who try to bait you online."],["vt. 放饵","Bait the trap before setting it down."]],
  bake:[["v. 烘烤","Bake the bread until the crust is golden."],["vi. 热得难受","We began to bake in the afternoon sun."],["n. 烤菜","She served a vegetable bake for dinner."]],
  balance:[["n. 平衡","The cyclist lost his balance."],["n. 余额","Check the balance in your account."],["n. 余款","The balance is payable on delivery."],["vt. 权衡","We must balance cost against quality."],["v. 保持平衡","She can balance on one foot."]],
  balanced:[["adj. 公正全面的","The article gives a balanced account of the debate."],["adj. 比例适当的","A balanced diet includes different types of food."]],
  balcony:[["n. 阳台","The apartment has a small balcony."],["n. 剧院楼座","Our seats are in the balcony."]],
  bald:[["adj. 秃顶的","He began to go bald in his twenties."],["adj. 不加修饰的","The letter contained a bald statement of the facts."],["adj. 磨光的","The mechanic replaced a bald tyre."]],
  baldness:[["n. 秃顶","He inherited a tendency towards baldness."],["n. 直率","The baldness of the question surprised her."]],
  balk:[["vi. 不愿意","Investors may balk at the high cost."],["n. 投球犯规（棒球）","The umpire called a balk."]],
  balloon:[["n. 气球","A red balloon floated above the table."],["n. 对话框","The cartoon uses a balloon for each speaker's words."],["vi. 迅速增长","Costs can balloon if the work is delayed."]],
  ballot:[["n. 无记名投票","The members voted by secret ballot."],["n. 选票","She placed her ballot in the box."],["vt. 组织投票","The union will ballot its members next week."]],
  band:[["n. 乐队","The band performed three new songs."],["n. 条带","A narrow band of light crossed the wall."],["n. 范围","The survey covers people in each age band."],["vi. 联合（band together）","The neighbours decided to band together to repair the bridge."]],
  bandage:[["n. 绷带","The nurse removed the bandage."],["vt. 包扎","They will bandage the injured ankle."]],
  bang:[["n. 巨响","The door closed with a bang."],["v. 猛敲","Please do not bang on the window."],["adv. 正好（非正式）","The train arrived bang on time."]],
  banish:[["vt. 放逐","The ruler threatened to banish his rival."],["vt. 消除","The good news helped banish her fears."]],
  bank:[["n. 银行","The bank opens at nine."],["n. 河岸","We sat on the bank of the river."],["n. 云团","A dark bank of cloud covered the hills."],["n. 储存库","The blood bank needs more donors."],["vi. 开户；办理银行业务","We bank with a local credit union."],["vi. 倾斜转弯","The aircraft began to bank to the left."]],
  banker:[["n. 银行高级职员","The banker explained the loan terms."],["n. 游戏中管钱的人","She acted as the banker during the game."]],
  bankrupt:[["adj. 破产的","The business went bankrupt."],["adj. 品质缺失的（贬义）","The critic called the policy morally bankrupt."],["vt. 使破产","The legal costs could bankrupt the firm."]],
  banner:[["n. 横幅","The crowd carried a banner asking for change."],["n. 广告横幅","A banner appeared at the top of the page."],["n. 主张","They campaigned under the banner of equal opportunity."]],
  bar:[["n. 酒吧","They met at a quiet bar."],["n. 长条；块","She bought a bar of soap."],["n. 障碍","Age is no bar to learning."],["n. 小节（音乐）","Play the first four bars again."],["vt. 禁止","The rules bar visitors from entering the laboratory."],["prep. 除…之外","Everyone bar one accepted the offer."]],
  barb:[["n. 倒钩","The hook has a sharp barb."],["n. 讥讽话","He ignored the barb about his clothes."]],
  barbecue:[["n. 烧烤架","The barbecue stood in the garden."],["n. 烧烤餐会","We invited our neighbours to a barbecue."],["v. 烧烤","They like to barbecue vegetables outdoors."]],
  barber:[["n. 理发师","The barber trimmed his beard."],["vi. 从事理发","He learned to barber after leaving school."]],
  bare:[["adj. 裸露的","The children walked on the grass with bare feet."],["adj. 最基本的","Take only the bare essentials."],["vt. 露出","The dog began to bare its teeth."],["det. 大量的（英俚语）","There were bare people outside the club."]],
  bargain:[["n. 便宜货","The second-hand desk was a bargain."],["n. 协议","Both sides kept their part of the bargain."],["v. 议价","You can bargain with the seller."],["adj. 廉价的","The shop offers bargain prices."]],
  barge:[["n. 驳船","The barge carried grain along the canal."],["vi. 莽撞地闯入","Do not barge into the room without knocking."]],
  bark:[["n. 树皮","The tree has thick bark."],["n. 犬吠声","We heard a loud bark outside."],["vi. 吠叫","Dogs often bark at unfamiliar sounds."],["vt. 厉声说出","The officer began to bark orders."],["n. 薄片巧克力甜食","She broke the chocolate bark into pieces."]],
  barometer:[["n. 气压计","The barometer showed a fall in pressure."],["n. 趋势指标","The survey is a barometer of consumer confidence."]],
  baroque:[["adj. 巴洛克风格的","The palace has a baroque facade."],["adj. 过分繁复的","The novel's baroque plot was hard to follow."]],
  barrel:[["n. 大桶","The barrel contains rainwater."],["n. 枪管","The barrel of the rifle was damaged."],["vi. 飞快行进","The truck began to barrel down the hill."]],
  barren:[["adj. 不毛的","Little grows on the barren land."],["adj. 无成果的","The author endured several barren years."]],
  barricade:[["n. 路障","The road was blocked by a barricade."],["vt. 封堵","The residents decided to barricade the entrance."]],
  barrier:[["n. 屏障","A fence formed a barrier along the road."],["n. 障碍；隔阂","Language need not be a barrier to friendship."]],
  barter:[["v. 以物易物","The traders barter grain for tools."],["n. 实物交换","The village economy relied partly on barter."]],
  basic:[["adj. 基础的","The course teaches basic computer skills."],["adj. 碱性的（化学）","The solution is basic rather than acidic."]],
  basin:[["n. 洗脸盆","He washed his hands in the basin."],["n. 流域","The river basin covers a large area."],["n. 盆地","Sediment accumulated in the basin."]],
  basis:[["n. 根据","The claim has no scientific basis."],["n. 方式","They work on a voluntary basis."]],
  bask:[["vi. 晒太阳","Seals bask on the warm rocks."],["vi. 享受（bask in）","She was happy to bask in the audience's praise."]],
  baste:[["vt. 浇油汁","Baste the chicken with its juices."],["vt. 暂缝（尤美）","Baste the seam before sewing it by machine."]],
  bath:[["n. 浴缸（英）","The bath is next to the shower."],["n. 洗澡","A warm bath helped him relax."],["v. 给…洗澡（英）","She usually baths the baby in the evening."]]
};
const phPages=new Set('aviation award bang bake barge baroque'.split(' '));
const records=raw.trim().split('\n').map(line=>{
  const [w,pos,cn,uk,us]=line.split('|'),source=`https://dictionary.cambridge.org/dictionary/english/${w}`;
  return {w,pos,cn,source,checkedOn:"2026-11-16",batch:"008",file:"js/lexicon-review-008.js",
    reason:notes[w]||"依据所链词典核对常用学习义、词性、英美音及主要变体，注明专业或语域限制。",
    senses:senses[w]||[],readings:readings[w]||[{label:pos,uk,us}],
    pronunciationSource:phPages.has(w)?`https://dictionary.cambridge.org/pronunciation/english/${w}`:source};
});
const get=w=>records.find(r=>r.w===w);
get('avouch').source="https://www.collinsdictionary.com/dictionary/english/avouch";
get('avouch').pronunciationSource=get('avouch').source;
get('baby-sitter').source="https://www.collinsdictionary.com/dictionary/english/baby-sitter";
get('baby-sitter').sources=[get('baby-sitter').source,"https://www.collinsdictionary.com/dictionary/english/babysitter"];
get('baby-sitter').pronunciationSource=get('baby-sitter').sources[1];
get('baby-sitter').sourceHeadword="babysitter";
get('baby-sitter').readings[0].label="n.（亦作 babysitter）";
get('bachelor').sources=[get('bachelor').source,"https://www.oxfordlearnersdictionaries.com/definition/english/bachelor","https://www.collinsdictionary.com/dictionary/english/bachelor"];
get('baffle').sources=[get('baffle').source,"https://www.collinsdictionary.com/dictionary/english/baffle"];
get('azure').sources=[get('azure').source,"https://www.collinsdictionary.com/dictionary/english/azure"];
get('backward').sources=[get('backward').source,"https://dictionary.cambridge.org/dictionary/english/backwards"];
get('bank').sources=[get('bank').source,"https://dictionary.cambridge.org/dictionary/english/bank-on"];
get('balance').sources=[get('balance').source,"https://www.oxfordlearnersdictionaries.com/definition/english/balance_1"];
get('basin').sources=[get('basin').source,"https://www.oxfordlearnersdictionaries.com/definition/english/basin"];
window.LEXICON_REVIEW_BATCHES=(window.LEXICON_REVIEW_BATCHES||[]).concat([{id:"008",checkedOn:"2026-11-16",words:records.map(r=>r.w),deferred:[]}]);
for(const r of records){
  window.DEFINITION_REVIEWS=window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS=window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.pronunciationSource,...(r.sourceHeadword?{sourceHeadword:r.sourceHeadword}:{}),checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
