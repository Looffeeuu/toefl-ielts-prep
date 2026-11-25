/* 雅思阅读题库（原创练习文章，按雅思学术类阅读的题型编写，不是考试真题）
   文中出现的研究者姓名是虚构的；其他背景知识尽量与公开资料一致。每篇约 450–560 词，比真题（每篇约 700–900 词）短。
   level：1、2、3 对应考试中由易到难的第 1、2、3 篇；完整模拟各取一篇，共 40 题。
   题组 type：tfng 判断（TRUE/FALSE/NOT GIVEN）· ynng 观点判断（YES/NO/NOT GIVEN）· headings 段落标题 ·
   match 配对（options 为 [字母, 内容]；"paras" 表示用文章段落字母）· gap 填空（a 为可接受答案列表，maxWords 为字数上限；flow 表示连成一段的摘要）· mcq 单选（a 为正确选项序号） */
window.IELTS_READING = [

{ id:"r-bees", level:1, title:"City Bees", topic:"Ecology",
  paras:[
    ["A","In the past two decades, beehives have appeared in some unexpected places: on the roofs of hotels, office towers and even opera houses. Urban beekeeping, once regarded as an eccentric hobby, has become fashionable in cities such as London, Paris, New York and Tokyo. Some companies keep hives as part of their environmental programmes, and a number of restaurants now serve honey produced only a few floors above the dining room."],
    ["B","Supporters of the trend point out that cities can be surprisingly good places for bees. Parks, private gardens, street trees and balconies offer a wide variety of flowers, and because these plants bloom at different times, food is often available for a longer period than in the countryside. Farmland, by contrast, is frequently planted with a single crop that flowers for only a few weeks. Urban gardens are also less likely to be sprayed with the chemicals used in large-scale agriculture, although they are not entirely free of them."],
    ["C","Honey from city hives has its own character. Because bees collect nectar from many different plants, the flavour can change from month to month and from one neighbourhood to the next. Some beekeepers sell honey labelled by district, and laboratory analyses of city honey have generally found levels of pollutants low enough to be considered safe. Bees appear to filter out many contaminants before they reach the honey, although scientists continue to monitor the question."],
    ["D","However, not everyone welcomes the rapid growth in hive numbers. The honeybee is only one of many bee species, and most of the others live alone rather than in colonies. These wild bees are often more effective pollinators of certain plants, yet they receive far less public attention. Ecologists warn that when too many honeybee colonies are placed in a small area, they may compete with wild bees for the same limited supply of pollen and nectar. In some European cities, researchers have suggested that the number of hives has already grown faster than the supply of flowers."],
    ["E","Disease is another concern. Honeybees kept close together can pass parasites and infections from colony to colony, and inexperienced keepers may not recognise the early signs of a problem. For this reason, many beekeeping associations now ask new members to complete a training course and to spend a season working alongside an experienced keeper before they set up hives of their own."],
    ["F","For those who want to help pollinators, experts increasingly recommend a different approach: planting rather than keeping. Choosing flowering plants that bloom from early spring to late autumn, leaving some areas of grass uncut, and providing nesting sites such as patches of bare soil or bundles of hollow stems can benefit a wide range of insects. As one city ecologist put it, a rooftop hive may be a pleasant symbol, but a street full of flowers does more for bees as a whole."]
  ],
  groups:[
    { type:"tfng", instr:"Do the following statements agree with the information given in the passage?", items:[
      { q:"Urban beekeeping was once considered an unusual pastime.", a:"TRUE", why:"A 段：once regarded as an eccentric hobby，eccentric hobby = unusual pastime。" },
      { q:"Restaurants that serve their own honey charge higher prices for their meals.", a:"NOT GIVEN", why:"A 段只说一些餐厅供应楼顶自产的蜂蜜，没有提到价格。" },
      { q:"In cities, flowers are often available to bees for a longer part of the year than on farmland.", a:"TRUE", why:"B 段：food is often available for a longer period than in the countryside，农田往往只开花几周。" },
      { q:"City gardens are never treated with agricultural chemicals.", a:"FALSE", why:"B 段最后：although they are not entirely free of them，说明并非从不使用。" },
      { q:"Some beekeepers sell honey according to the area where it was produced.", a:"TRUE", why:"C 段：Some beekeepers sell honey labelled by district。" },
      { q:"Tokyo has more rooftop hives than any other city.", a:"NOT GIVEN", why:"A 段只把东京列为城市养蜂流行的城市之一，没有比较数量。" }
    ]},
    { type:"gap", instr:"Complete the summary below.", limit:"Choose ONE WORD ONLY from the passage for each answer.", maxWords:1, flow:true, heading:"Concerns about urban beekeeping", items:[
      { q:"Ecologists warn that large numbers of honeybee colonies may compete with wild bees for pollen and ___.", a:["nectar"], why:"D 段：compete with wild bees for the same limited supply of pollen and nectar。" },
      { q:"Honeybees kept close together can spread ___ and infections between colonies.", a:["parasites"], why:"E 段：can pass parasites and infections from colony to colony。" },
      { q:"For this reason, many associations ask new members to complete a ___ course", a:["training"], why:"E 段：ask new members to complete a training course。" },
      { q:"and to work with an experienced keeper for a ___ before keeping their own bees.", a:["season"], why:"E 段：spend a season working alongside an experienced keeper。" }
    ]},
    { type:"mcq", instr:"Choose the correct letter, A, B, C or D.", items:[
      { q:"According to paragraph C, laboratory tests of city honey have shown that", opts:["it contains dangerous levels of pollutants.","pollutant levels are generally low enough to be safe.","it is healthier than honey from the countryside.","bees are unable to filter out contaminants."], a:1, why:"C 段：levels of pollutants low enough to be considered safe。C 项文中没有比较；D 项与 bees appear to filter out many contaminants 相反。" },
      { q:"What does the writer say about wild bees in paragraph D?", opts:["They are attracting increasing public interest.","Most of them do not live in colonies.","They tend to avoid city centres.","They produce more honey than honeybees."], a:1, why:"D 段：most of the others live alone rather than in colonies。A 项与 receive far less public attention 相反。" },
      { q:"What is the main recommendation in paragraph F?", opts:["People should set up more hives on rooftops.","Cities should limit the number of beekeeping associations.","People should grow suitable plants and provide places for insects to nest.","Gardens should be kept neat and well cut."], a:2, why:"F 段：planting rather than keeping，种全年开花的植物、留出不修剪的草地、提供筑巢地点。D 项与 leaving some areas of grass uncut 相反。" }
    ]}
  ]},

{ id:"r-salt", level:1, title:"Salt and Civilisation", topic:"History",
  paras:[
    ["A","Today salt is so cheap that it is easy to forget how valuable it once was. For most of human history, however, salt was essential not only for flavour but for survival. Before refrigeration, it was one of the few reliable ways of preserving meat and fish, allowing communities to store food through the winter and to carry it on long journeys."],
    ["B","The earliest methods of producing salt were simple. In coastal regions, people let seawater evaporate in shallow pools under the sun, leaving crystals behind. Inland, where this was impossible, they boiled water from salt springs over fires, a process that required large amounts of fuel. In some places, salt was dug directly from underground deposits left behind by ancient seas, and a few of these mines have been worked for many centuries."],
    ["C","Because salt was both necessary and unevenly distributed, it became a valuable trade good. Caravans crossed the Sahara carrying blocks of salt southwards, where it was exchanged for gold and other goods. In Europe, cities that controlled salt routes grew rich; Venice, for example, gained much of its early wealth from the salt trade in the Adriatic."],
    ["D","Governments quickly recognised that a product everyone needed was easy to tax. In China, the state took control of salt production more than two thousand years ago, and income from salt remained an important part of government revenue for centuries. In France, a salt tax known as the gabelle became one of the most hated taxes of the old regime, partly because the rate varied greatly from one region to another, which encouraged widespread smuggling."],
    ["E","Salt has also played a part in political protest. In 1930, Mahatma Gandhi led a march of nearly 400 kilometres to the sea, where he and his followers made salt in defiance of a British law that taxed it. The march attracted international attention and became one of the defining moments of the Indian independence movement."],
    ["F","A popular story claims that Roman soldiers were paid in salt and that the English word 'salary' comes from this practice. While the word does come from the Latin for salt, historians have found little evidence that soldiers actually received their wages in salt, and the true origin of the term remains uncertain."],
    ["G","In the modern world, the problem is no longer scarcity but excess. Health authorities in many countries advise people to reduce the amount of salt they eat, because high intake is linked to raised blood pressure. Much of the salt in modern diets comes not from the salt shaker but from processed foods such as bread, sauces and ready meals, which makes it harder for consumers to control how much they consume."]
  ],
  groups:[
    { type:"headings", instr:"The passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–F from the list of headings below.", example:"Paragraph A: viii",
      options:["An unreliable explanation of a word's origin","Different ways of obtaining salt","A source of income for rulers","The health risks of eating too little salt","Salt as a symbol of resistance","How salt created wealth along trade routes","The decline of salt mining","Why salt was once so important"],
      items:[
        { q:"Paragraph B", a:"ii", why:"B 段介绍晒海盐、煮盐泉水、开采地下盐矿三种制盐方法。" },
        { q:"Paragraph C", a:"vi", why:"C 段讲撒哈拉商队以盐换金、威尼斯靠盐的贸易致富。" },
        { q:"Paragraph D", a:"iii", why:"D 段讲中国和法国政府把盐作为税收和财政收入来源。" },
        { q:"Paragraph E", a:"v", why:"E 段讲甘地的食盐进军，是政治抗议的象征。" },
        { q:"Paragraph F", a:"i", why:"F 段说 salary 来自士兵领盐的说法缺乏证据。注意 iv 说的是盐太少的风险，G 段讲的是盐太多。" }
      ]},
    { type:"gap", instr:"Complete the sentences below.", limit:"Choose NO MORE THAN TWO WORDS from the passage for each answer.", maxWords:2, items:[
      { q:"Before refrigeration, salt allowed people to keep food through the ___ and on long journeys.", a:["winter"], why:"A 段：store food through the winter and to carry it on long journeys。" },
      { q:"Inland producers boiled water from salt springs, which used a lot of ___.", a:["fuel"], why:"B 段：a process that required large amounts of fuel。" },
      { q:"Salt carried across the Sahara was exchanged for ___ and other goods.", a:["gold"], why:"C 段：it was exchanged for gold and other goods。" },
      { q:"Because the gabelle varied between regions, it led to a great deal of ___.", a:["smuggling","widespread smuggling"], why:"D 段：which encouraged widespread smuggling。" }
    ]},
    { type:"match", instr:"Which paragraph contains the following information? You may use any letter more than once.", options:"paras", items:[
      { q:"a reason why it is difficult for people to control their salt intake", a:"G", why:"G 段：盐大多来自加工食品，消费者难以控制摄入量。" },
      { q:"an example of a city that became rich through salt", a:"C", why:"C 段：Venice gained much of its early wealth from the salt trade。" },
      { q:"a description of salt being taken from the ground", a:"B", why:"B 段：salt was dug directly from underground deposits。" },
      { q:"a reference to an event that attracted attention in other countries", a:"E", why:"E 段：The march attracted international attention。" }
    ]}
  ]},

{ id:"r-sleep", level:2, title:"Why Teenagers Can't Get Up", topic:"Psychology",
  paras:[
    ["A","Parents of teenagers have long complained that their children stay up late and are almost impossible to wake in the morning. For many years this behaviour was put down to laziness or to the distractions of television and, more recently, smartphones. Research over the past three decades, however, suggests that biology plays a central role."],
    ["B","Human sleep is regulated partly by the circadian rhythm, an internal clock that runs on a cycle of roughly 24 hours. One of the signals this clock sends is the release of melatonin, a hormone that helps to prepare the body for sleep. During adolescence, the timing of melatonin release shifts later in the evening, often by one to two hours. As a result, a typical teenager simply does not feel sleepy at the time that was natural a few years earlier."],
    ["C","At the same time, the amount of sleep that adolescents need does not decrease. Most sleep scientists estimate that teenagers require between eight and ten hours a night. When school begins early in the morning, a student who cannot fall asleep before midnight has little chance of getting enough rest. Surveys in several countries suggest that a large proportion of secondary school students regularly sleep less than eight hours on school nights."],
    ["D","Dr Lena Ortiz, a sleep researcher, argues that the consequences go beyond tiredness. In her studies, students who slept less performed worse on tests of memory and attention, and they were more likely to report low mood. Professor Daniel Reeve, an education specialist, takes a more cautious view. He accepts that teenagers are short of sleep but points out that many factors affect school performance, and he warns against expecting a single change to solve complex problems."],
    ["E","One proposed solution is to start the school day later. Some schools that have moved their start time by 30 to 60 minutes have reported improvements in attendance and fewer students falling asleep in class. Dr Marcus Bell, who has studied such schools, found that students did not simply go to bed later in response; on average, they gained extra sleep. Critics note, however, that later start times can create difficulties for families, bus services and after-school activities, and that the benefits may vary between communities."],
    ["F","Technology adds a further complication. Light from screens, particularly in the blue part of the spectrum, can delay the release of melatonin even further. Dr Ortiz recommends that teenagers stop using phones and computers at least an hour before bed, although she admits that this advice is often ignored. Professor Reeve believes that schools should teach students about sleep in the same way that they teach about diet and exercise, so that young people understand why rest matters."],
    ["G","In my view, the evidence is now strong enough that schools should take adolescent sleep seriously. Changing timetables is not easy, and it will not suit every community. But continuing to treat sleepy teenagers as lazy ignores what we know about how their bodies work. At the very least, parents and teachers should recognise that a teenager who cannot sleep at ten o'clock is not necessarily being difficult."]
  ],
  groups:[
    { type:"ynng", instr:"Do the following statements agree with the claims of the writer?", items:[
      { q:"Biology is an important reason why teenagers go to sleep late.", a:"YES", why:"A 段：research suggests that biology plays a central role；G 段作者也说要尊重身体规律。" },
      { q:"Teenagers need less sleep than they did when they were younger.", a:"NO", why:"C 段：the amount of sleep that adolescents need does not decrease。" },
      { q:"Starting school later would suit every community equally well.", a:"NO", why:"G 段：it will not suit every community。" },
      { q:"Schools should pay more attention to the sleep of their students.", a:"YES", why:"G 段：schools should take adolescent sleep seriously。" },
      { q:"Parents should limit the amount of homework teenagers do in the evening.", a:"NOT GIVEN", why:"文章没有讨论作业量。" }
    ]},
    { type:"match", instr:"Look at the following statements and the list of people below. Match each statement with the correct person, A, B or C. You may use any letter more than once.",
      options:[["A","Dr Lena Ortiz"],["B","Professor Daniel Reeve"],["C","Dr Marcus Bell"]], items:[
      { q:"Sleep should be one of the subjects that students learn about at school.", a:"B", why:"F 段：Professor Reeve believes that schools should teach students about sleep。" },
      { q:"Lack of sleep is connected with poorer memory and attention.", a:"A", why:"D 段：in her (Ortiz) studies, students who slept less performed worse on tests of memory and attention。" },
      { q:"One change on its own is unlikely to solve problems with school performance.", a:"B", why:"D 段：Reeve warns against expecting a single change to solve complex problems。" },
      { q:"Students at schools that began later slept more overall.", a:"C", why:"E 段：Bell found that on average, they gained extra sleep。" }
    ]},
    { type:"match", instr:"Complete the summary using the list of words, A–H, below.", flow:true, heading:"Adolescent sleep",
      options:[["A","earlier"],["B","later"],["C","unchanged"],["D","lower"],["E","worse"],["F","attendance"],["G","grades"],["H","appetite"]], items:[
      { q:"During adolescence, melatonin is released ___ in the evening than before.", a:"B", why:"B 段：the timing of melatonin release shifts later in the evening。" },
      { q:"However, the amount of sleep teenagers need remains ___.", a:"C", why:"C 段：the amount of sleep that adolescents need does not decrease。" },
      { q:"Light from screens can make the problem ___,", a:"E", why:"F 段：屏幕光会进一步推迟褪黑素分泌，使问题更严重。" },
      { q:"while later start times have been linked to better ___.", a:"F", why:"E 段：reported improvements in attendance。G（成绩）文中没有提到。" }
    ]}
  ]},

{ id:"r-coral", level:2, title:"Gardening the Reef", topic:"Marine Science",
  paras:[
    ["A","Coral reefs cover less than one per cent of the ocean floor, yet they support around a quarter of all known marine species. They also protect coastlines from waves and storms and provide food and income for hundreds of millions of people. Over recent decades, however, reefs around the world have declined sharply, damaged by rising sea temperatures, pollution, overfishing and coastal development."],
    ["B","The most dramatic threat is coral bleaching. Corals depend on tiny algae that live inside their tissues and provide them with most of their food through photosynthesis. When the water becomes too warm for an extended period, this partnership breaks down and the corals expel the algae, losing their colour. Bleached corals are not immediately dead, and they can recover if temperatures return to normal quickly enough. If the heat persists, however, many of them starve."],
    ["C","Faced with these losses, scientists and conservation groups have begun to actively restore damaged reefs. One of the most widely used methods is known as coral gardening. Small fragments are cut from healthy corals and grown in underwater nurseries, often hanging from frames that look like trees made of plastic pipe. After several months, when the fragments have grown large enough, divers attach them to the damaged reef."],
    ["D","A more recent technique takes advantage of a surprising discovery. When certain slow-growing corals are cut into very small pieces, only a centimetre or two across, each piece grows much faster than it would as part of a larger colony. If these micro-fragments are placed close together on a dead surface, they eventually grow into one another and fuse, covering the area far more quickly than a single colony could. This approach, called micro-fragmentation, has allowed restoration teams to produce in a few years coral cover that would naturally take decades."],
    ["E","Other researchers are trying to make corals more resistant to heat. In laboratory experiments, corals have been exposed to gradually rising temperatures to see whether they can adapt, and some teams are selecting and breeding individual corals that survived previous bleaching events. The aim is to produce populations better able to cope with the warmer oceans of the future. This work is still at an early stage, and some scientists are concerned about unintended effects on reef ecosystems."],
    ["F","Restoration is expensive and labour-intensive, and even its supporters admit that it can only be carried out over relatively small areas. A single project may restore a few hectares, while the world's reefs cover hundreds of thousands of square kilometres. Most experts therefore agree that restoration cannot replace efforts to reduce the causes of reef decline, above all the rise in ocean temperatures linked to climate change."],
    ["G","Nevertheless, restoration projects have value beyond the corals they replant. They train local divers, attract visitors, and give communities a direct role in protecting the reefs on which they depend. In some places, former fishermen now earn a living by tending coral nurseries. Restoration, in other words, may be most useful not as a solution in itself but as a way of buying time while the larger problem is addressed."]
  ],
  groups:[
    { type:"match", instr:"Which paragraph contains the following information? You may use any letter more than once.", options:"paras", items:[
      { q:"a description of the structures used to grow coral before it is placed on a reef", a:"C", why:"C 段：frames that look like trees made of plastic pipe。" },
      { q:"a comparison between the size of restored areas and the total area of reefs", a:"F", why:"F 段：一个项目修复几公顷，而珊瑚礁总面积有几十万平方公里。" },
      { q:"an explanation of why bleached coral does not always die", a:"B", why:"B 段：Bleached corals are not immediately dead, and they can recover。" },
      { q:"an example of a new way of earning money created by restoration", a:"G", why:"G 段：former fishermen now earn a living by tending coral nurseries。" }
    ]},
    { type:"tfng", instr:"Do the following statements agree with the information given in the passage?", items:[
      { q:"Coral reefs support about a quarter of all known marine species.", a:"TRUE", why:"A 段：they support around a quarter of all known marine species。" },
      { q:"Corals produce most of their food without help from other organisms.", a:"FALSE", why:"B 段：体内的藻类通过光合作用为珊瑚提供大部分食物。" },
      { q:"The effect behind micro-fragmentation was discovered by accident.", a:"NOT GIVEN", why:"D 段只说是 a surprising discovery，没有说是偶然发现的。" },
      { q:"Very small coral pieces placed close together can join to form a single area of coral.", a:"TRUE", why:"D 段：they eventually grow into one another and fuse。" },
      { q:"All scientists support the breeding of heat-resistant corals.", a:"FALSE", why:"E 段：some scientists are concerned about unintended effects。" }
    ]},
    { type:"gap", instr:"Answer the questions below.", limit:"Choose NO MORE THAN TWO WORDS from the passage for each answer.", maxWords:2, items:[
      { q:"What do corals lose when they expel the algae?", a:["colour","color","their colour","their color"], why:"B 段：the corals expel the algae, losing their colour。" },
      { q:"What do the frames in coral nurseries look like?", a:["trees"], why:"C 段：frames that look like trees made of plastic pipe。" },
      { q:"Apart from training local divers, what do restoration projects attract?", a:["visitors"], why:"G 段：They train local divers, attract visitors。" },
      { q:"What may restoration help to buy while the larger problem is dealt with?", a:["time"], why:"G 段：a way of buying time while the larger problem is addressed。" }
    ]}
  ]},

{ id:"r-choice", level:3, title:"Too Much of a Good Thing? The Choice Overload Debate", topic:"Behavioural Science",
  paras:[
    ["A","It seems obvious that having more options is better than having fewer. If a shop offers ten varieties of a product rather than three, customers are more likely to find something that suits them exactly. Economists have traditionally assumed that rational consumers benefit from additional choices, since they can always ignore the options they do not want."],
    ["B","Around the turn of the century, however, a series of studies challenged this assumption. In one widely reported experiment, shoppers in a supermarket encountered a tasting table offering either six or twenty-four varieties of jam. The larger display attracted more visitors, but those who saw the smaller selection were far more likely to go on to buy a jar. The researchers concluded that too much choice could discourage people from choosing at all, an effect that became known as choice overload."],
    ["C","Psychologists proposed several explanations. Comparing many options requires time and mental effort, and people may postpone a decision that feels too demanding. A larger range also raises expectations: if there are dozens of alternatives, it seems that one of them must be perfect, so whatever is chosen may feel disappointing by comparison. Finally, when people have many alternatives, they are more likely to blame themselves if the outcome is poor, since they could have chosen differently."],
    ["D","The idea proved enormously popular. It was discussed in business books, applied to retirement savings plans and dating websites, and used to argue that modern life offers more freedom than people can comfortably manage. Some companies reduced the number of products they sold, citing choice overload as their reason."],
    ["E","Yet as more researchers attempted to repeat the original findings, the picture became less clear. A major review that combined the results of dozens of experiments found that, on average, the effect of the number of options on people's satisfaction and willingness to choose was close to zero. Some studies found that more choice discouraged decisions; others found that it encouraged them; many found no difference at all."],
    ["F","This does not mean that choice overload is imaginary. Instead, later research suggests that it appears only under certain conditions. People are more likely to struggle when the options are hard to compare, when they do not have clear preferences, or when they are under time pressure. When people know exactly what they want, or when the options are organised into clear categories, a large range causes few problems and may even be welcomed."],
    ["G","These findings have practical consequences. Rather than simply cutting the number of options, organisations can help people to choose by grouping products, providing clear comparisons, or offering a sensible default option. Several governments have used this approach in pension schemes, automatically enrolling workers in a standard plan while allowing them to select another if they prefer."],
    ["H","The story of choice overload also illustrates a wider lesson about how science works. A striking result that matches popular intuition can spread far beyond the evidence that supports it. It is only through repeated testing, often less widely reported than the original study, that researchers can discover when an effect is real, how large it is, and for whom it matters."]
  ],
  groups:[
    { type:"headings", instr:"The passage has eight paragraphs, A–H. Choose the correct heading for paragraphs B–F and H from the list of headings below.",
      options:["Reasons why many options may cause difficulty","Mixed results when experiments were repeated","The conditions in which the problem appears","A finding that challenged an established view","Ways of making choices easier","The rapid spread of an idea","What the case shows about research in general","Why shoppers prefer smaller stores","Evidence that choice always reduces satisfaction"],
      items:[
        { q:"Paragraph B", a:"iv", why:"B 段的果酱实验挑战了「选择越多越好」的传统假设（challenged this assumption）。" },
        { q:"Paragraph C", a:"i", why:"C 段给出几种解释：比较费力、期望过高、容易自责。" },
        { q:"Paragraph D", a:"vi", why:"D 段：The idea proved enormously popular，被应用到很多领域。" },
        { q:"Paragraph E", a:"ii", why:"E 段：重复实验后结果不一，平均效应接近零。注意 ix 与此相反。" },
        { q:"Paragraph F", a:"iii", why:"F 段：it appears only under certain conditions，并列出这些条件。" },
        { q:"Paragraph H", a:"vii", why:"H 段：a wider lesson about how science works。v（让选择更容易）对应的是 G 段，本题没有考。" }
      ]},
    { type:"mcq", instr:"Choose the correct letter, A, B, C or D.", items:[
      { q:"In the jam experiment, the display with twenty-four varieties", opts:["led to more jars being sold.","was recommended by shop staff.","attracted a larger number of shoppers.","was shown for a longer period."], a:2, why:"B 段：The larger display attracted more visitors，但买的人反而少，所以 A 错。" },
      { q:"According to paragraph C, people with many options may be disappointed because", opts:["the products are often of lower quality.","they expect that one of the options will be ideal.","they are not able to try every product.","they receive poor advice from others."], a:1, why:"C 段：if there are dozens of alternatives, it seems that one of them must be perfect。" },
      { q:"The review described in paragraph E found that", opts:["choice overload is an extremely common effect.","larger ranges always encourage people to buy.","most earlier studies had been carried out incorrectly.","on average, the number of options made little difference."], a:3, why:"E 段：the effect ... was close to zero。B 项与 some studies found that more choice discouraged decisions 矛盾；C 项文中没有说。" },
      { q:"Pension schemes are mentioned as an example of", opts:["a default option that people are free to change.","an organisation reducing the number of options.","workers refusing to make a choice.","a government ignoring research findings."], a:0, why:"G 段：automatically enrolling workers in a standard plan while allowing them to select another。" }
    ]},
    { type:"match", instr:"Complete each sentence with the correct ending, A–F, below.",
      options:[["A","are more likely to put off making a decision."],["B","makes a large range less of a problem."],["C","lose nothing when extra choices are added."],["D","has often received less attention than the original study."],["E","should be removed from most shops."],["F","tend to praise themselves for good results."]], items:[
      { q:"Traditional economists believed that consumers", a:"C", why:"A 段：rational consumers benefit from additional choices, since they can always ignore the options they do not want。" },
      { q:"People who find a comparison too demanding", a:"A", why:"C 段：people may postpone a decision that feels too demanding。postpone = put off。" },
      { q:"Having clear preferences", a:"B", why:"F 段：When people know exactly what they want ... a large range causes few problems。" },
      { q:"The repeated testing of a striking result", a:"D", why:"H 段：repeated testing, often less widely reported than the original study。" }
    ]}
  ]},

{ id:"r-wind", level:3, title:"Catching the Wind", topic:"Architecture",
  paras:[
    ["A","Long before electric air conditioning, people living in hot climates found ways to keep buildings cool without using any energy at all. Some of the most ingenious of these solutions can be found in the Middle East, where tall towers known as wind catchers have been used for centuries to ventilate homes, markets and water storage buildings. In the Iranian city of Yazd, dozens of these towers still rise above the rooftops, and the city's historic centre is a UNESCO World Heritage Site."],
    ["B","A wind catcher works in two main ways. When the wind blows, an opening at the top of the tower faces the breeze and directs air down into the building, while warm air leaves through openings on the other side. Even when the air is still, the tower can act like a chimney: warm air inside the building rises and escapes through the top, drawing cooler air in from shaded courtyards or underground spaces. Some designs added a further element by passing incoming air over water, which cools the air as some of the water evaporates."],
    ["C","The effectiveness of these systems depends heavily on their surroundings. Wind catchers were usually built as part of a wider design that included thick walls of mud brick, which absorb heat during the day and release it slowly at night; narrow streets that remain shaded for much of the day; and courtyards with trees and pools. Taken out of this context, a wind catcher on its own provides only limited cooling."],
    ["D","For much of the twentieth century, such traditional techniques were largely abandoned. Mechanical air conditioning was cheaper to build into new buildings and gave occupants precise control over indoor temperature. As a result, many modern buildings in hot regions were designed with large glass surfaces and lightweight walls, relying entirely on electricity to remain comfortable."],
    ["E","Rising energy costs and concern about climate change have revived interest in what architects now call passive cooling. Buildings that use natural ventilation, shading and thermal mass, the ability of heavy materials to store heat, can need far less energy for cooling. Engineers have adapted the principle of the wind catcher for modern use, for example in roof-mounted ventilation towers on schools and offices in Europe, which bring in fresh air without fans for much of the year."],
    ["F","Architect Samira Haddad, who has designed several passively cooled buildings, stresses that the aim is not to copy historic forms but to understand the principles behind them. She notes that the climate of a city, including its typical wind directions and humidity, must be studied carefully before a design is chosen. Engineer Tom Garrick, by contrast, believes that the greatest gains will come from combining passive techniques with efficient mechanical systems that operate only when natural methods are insufficient. Urban planner Mei Lin emphasises the role of the city as a whole, arguing that shaded streets and green spaces can lower air temperatures for entire neighbourhoods."],
    ["G","Passive cooling has its limits. In very humid climates, cooling by evaporation is far less effective, and natural ventilation may bring in noise and pollution in busy cities. Rising global temperatures may also push some regions beyond the conditions in which passive methods alone can keep people comfortable. Nevertheless, the traditional builders of the desert offer a valuable reminder that comfort can be achieved by working with the climate rather than against it."]
  ],
  groups:[
    { type:"tfng", instr:"Do the following statements agree with the information given in the passage?", items:[
      { q:"The wind catchers in Yazd are no longer used to cool buildings.", a:"NOT GIVEN", why:"A 段只说这些塔仍然矗立在屋顶上，没有说现在是否还在使用。" },
      { q:"A wind catcher can ventilate a building even when there is no wind.", a:"TRUE", why:"B 段：Even when the air is still, the tower can act like a chimney。" },
      { q:"Mud brick walls release the heat they have absorbed quickly at night.", a:"FALSE", why:"C 段：release it slowly at night。" },
      { q:"In the twentieth century, air conditioning cost more to install in new buildings than traditional methods.", a:"FALSE", why:"D 段：Mechanical air conditioning was cheaper to build into new buildings。" },
      { q:"Ventilation towers on European schools have reduced the number of days students are absent.", a:"NOT GIVEN", why:"E 段只说这些通风塔不用风扇就能引入新鲜空气，没有提到学生缺勤。" }
    ]},
    { type:"match", instr:"Look at the following statements and the list of people below. Match each statement with the correct person, A, B or C. You may use any letter more than once.",
      options:[["A","Samira Haddad"],["B","Tom Garrick"],["C","Mei Lin"]], items:[
      { q:"Natural and mechanical cooling methods should be used together.", a:"B", why:"F 段：Garrick believes the greatest gains will come from combining passive techniques with efficient mechanical systems。" },
      { q:"Local weather conditions should be analysed before a building is designed.", a:"A", why:"F 段：Haddad notes that the climate of a city ... must be studied carefully before a design is chosen。" },
      { q:"The layout of a city can affect the temperature of a whole district.", a:"C", why:"F 段：Mei Lin: shaded streets and green spaces can lower air temperatures for entire neighbourhoods。" },
      { q:"Traditional building forms should not simply be reproduced.", a:"A", why:"F 段：Haddad stresses that the aim is not to copy historic forms。" }
    ]},
    { type:"gap", instr:"Complete the notes below.", limit:"Choose ONE WORD ONLY from the passage for each answer.", maxWords:1, items:[
      { label:"How wind catchers work" },
      { q:"an opening at the top faces the ___", a:["breeze","wind"], why:"B 段：an opening at the top of the tower faces the breeze。" },
      { q:"when the air is still, the tower works like a ___", a:["chimney"], why:"B 段：the tower can act like a chimney。" },
      { q:"some designs cool incoming air by passing it over ___", a:["water"], why:"B 段：passing incoming air over water。" },
      { label:"Limits of passive cooling" },
      { q:"evaporation cools far less well in ___ climates", a:["humid"], why:"G 段：In very humid climates, cooling by evaporation is far less effective。" },
      { q:"in busy cities, natural ventilation may let in noise and ___", a:["pollution"], why:"G 段：may bring in noise and pollution in busy cities。" }
    ]}
  ]},
{ id:"r-libraries", level:1, title:"The Changing Public Library", topic:"Society",
  paras:[
    ["A","For more than a century, the public library was a quiet building filled with shelves of books, where visitors were expected to speak in whispers. Its main purpose was simple: to lend books free of charge to anyone who lived in the area. In many countries, the library movement of the nineteenth century was driven by the belief that access to reading would improve the lives of working people, who could not afford to buy books of their own."],
    ["B","Today, many libraries look very different. In cities such as Helsinki, Aarhus and Singapore, new library buildings include recording studios, sewing machines, 3D printers and kitchens where cooking classes are held. Some lend tools, musical instruments and even fishing rods. Librarians describe these buildings as community spaces rather than simply places to store books. In Helsinki, the central library even has a terrace and a small cinema, and it attracts tourists as well as local residents."],
    ["C","One reason for the change is the internet. As more information became available online, the number of people visiting libraries to look up facts fell sharply. Book loans also declined in many places, although less than some experts had predicted. Library managers realised that if they wanted to survive, they would need to give people reasons to visit other than borrowing. Many began by offering free internet access and computer courses, since a significant number of people, particularly older residents, still had no computer at home."],
    ["D","A second reason is social. Libraries are among the few indoor public spaces where people can stay as long as they like without being expected to spend money. For students who have no quiet place to study at home, for older people living alone and for families with young children, this makes the library extremely valuable. In winter, some libraries also serve as warm places for people who cannot afford to heat their homes."],
    ["E","Not everyone welcomes the new direction. Some long-time users complain that noise from events and classes makes it difficult to read or work. Others worry that money spent on new technology is money taken away from book collections. In response, many modern libraries are designed with separate zones: lively areas near the entrance and silent reading rooms on the upper floors."],
    ["F","Funding remains the biggest challenge. In some countries, local governments have reduced library budgets, and hundreds of small branches have closed. Where libraries have stayed open, they often rely on volunteers to run activities. Supporters argue that libraries save public money in the long run, because they help people find jobs, learn new skills and stay connected to their communities. Critics reply that such benefits are difficult to measure, and that councils facing urgent demands, such as care for the elderly, cannot always justify keeping every branch open."]
  ],
  groups:[
    { type:"tfng", instr:"Do the following statements agree with the information given in the passage?", items:[
      { q:"The early library movement aimed to help people who could not afford books.", a:"TRUE", why:"A 段：improve the lives of working people, who could not afford to buy books of their own。" },
      { q:"The library in Helsinki was the first to offer cooking classes.", a:"NOT GIVEN", why:"B 段只说一些新图书馆有厨房开烹饪课，没有说哪家是第一个。" },
      { q:"Book loans fell more than experts had expected.", a:"FALSE", why:"C 段：although less than some experts had predicted，下降幅度比预计的小。" },
      { q:"Library users are not expected to buy anything.", a:"TRUE", why:"D 段：without being expected to spend money。" },
      { q:"Most modern libraries have banned events in their reading rooms.", a:"NOT GIVEN", why:"E 段只说很多图书馆分区设计，没有说禁止活动。" }
    ]},
    { type:"gap", instr:"Complete the notes below.", limit:"Choose ONE WORD ONLY from the passage for each answer.", maxWords:1, heading:"Reasons for and responses to change", items:[
      { q:"Fewer people now visit libraries to look up ___", a:["facts"], why:"C 段：the number of people visiting libraries to look up facts fell sharply。" },
      { q:"Libraries offer a quiet place to study for ___ who lack one at home", a:["students"], why:"D 段：For students who have no quiet place to study at home。" },
      { q:"Some long-time users say that ___ from events makes reading difficult", a:["noise"], why:"E 段：noise from events and classes makes it difficult to read or work。" },
      { q:"Many libraries now depend on ___ to organise activities", a:["volunteers"], why:"F 段：they often rely on volunteers to run activities。" }
    ]},
    { type:"match", instr:"Which paragraph contains the following information? You may use any letter more than once.", options:"paras", items:[
      { q:"examples of objects other than books that can be borrowed", a:"B", why:"B 段：Some lend tools, musical instruments and even fishing rods。" },
      { q:"a claim that libraries reduce costs for governments over time", a:"F", why:"F 段：libraries save public money in the long run。" },
      { q:"a description of how buildings are divided to suit different users", a:"E", why:"E 段：separate zones: lively areas near the entrance and silent reading rooms on the upper floors。" },
      { q:"a reference to libraries being used to keep warm", a:"D", why:"D 段：some libraries also serve as warm places for people who cannot afford to heat their homes。" }
    ]}
  ]},

{ id:"r-glass", level:2, title:"The Science of Glass", topic:"Materials Science",
  paras:[
    ["A","Glass is so common in modern life that it is easy to forget how unusual a material it is. Windows, bottles, smartphone screens and the optical fibres that carry internet data across oceans are all made of it. Yet scientists still debate exactly how glass should be classified. It is hard and brittle like a solid, but its atoms are arranged in the disordered way typical of a liquid."],
    ["B","Most solids, such as metals and salt, are crystalline: their atoms are packed in regular, repeating patterns. When ordinary window glass is made, sand, which is mostly silica, is melted together with soda and lime at temperatures above 1,500°C. If the molten mixture were cooled slowly, its atoms would have time to arrange themselves into crystals. Instead, it is cooled quickly, and the atoms become locked in place before they can form any regular pattern. The result is an amorphous solid, one without a crystal structure."],
    ["C","A popular story claims that the windows of old European churches are thicker at the bottom because glass flows slowly downwards over the centuries. Physicists have tested this claim and rejected it. Calculations suggest that at room temperature, medieval glass would take far longer than the age of the universe to flow noticeably. The uneven thickness is instead explained by the way glass was produced at the time: panes were made by spinning molten glass into a disc, which was never perfectly even, and builders generally placed the heavier edge at the bottom."],
    ["D","Humans have made glass for at least 4,000 years. The earliest objects, found in Mesopotamia, were beads rather than containers. Glassblowing, the technique of inflating molten glass with a tube, was developed around the first century BCE, probably on the eastern coast of the Mediterranean, and it made glass vessels cheap enough for everyday use throughout the Roman Empire."],
    ["E","The flat, clear windows found in modern buildings are a much more recent achievement. In the 1950s, the British engineer Alastair Pilkington introduced the float process, in which molten glass is poured onto a bath of liquid tin. The glass spreads out and floats on the metal, producing a sheet with a perfectly smooth surface on both sides. Before this, flat glass had to be ground and polished, an expensive and slow process. Today, the vast majority of the world's flat glass is still produced in this way."],
    ["F","Research on glass continues. Engineers have developed chemically strengthened glass, in which small sodium atoms near the surface are exchanged for larger potassium atoms. Squeezed into spaces meant for smaller atoms, these create a layer of compression that makes the surface much harder to crack. This kind of glass is now used for most phone screens. Other researchers are working on glass that can bend without breaking, which could be used in folding devices."]
  ],
  groups:[
    { type:"headings", instr:"The passage has six paragraphs, A–F. Choose the correct heading for paragraphs B–F from the list of headings below.", example:"Paragraph A: v",
      options:["A method that made smooth windows affordable","Why glass lacks a regular structure","The dangers of producing glass at home","A widely believed myth","A material that is difficult to classify","The early history of glassmaking","Changing the surface to improve strength","Why glass is becoming less popular"],
      items:[
        { q:"Paragraph B", a:"ii", why:"B 段解释玻璃快速冷却，原子来不及排列成晶体，所以没有规则结构。" },
        { q:"Paragraph C", a:"iv", why:"C 段讲「老教堂玻璃向下流动」的说法被物理学家否定。" },
        { q:"Paragraph D", a:"vi", why:"D 段讲最早的玻璃珠和吹制玻璃的发明。" },
        { q:"Paragraph E", a:"i", why:"E 段讲浮法工艺让平板玻璃两面光滑，取代昂贵的研磨抛光。" },
        { q:"Paragraph F", a:"vii", why:"F 段讲用钾原子替换表面的钠原子，形成压缩层，提高强度。" }
      ]},
    { type:"tfng", instr:"Do the following statements agree with the information given in the passage?", items:[
      { q:"Window glass is made mainly from silica.", a:"TRUE", why:"B 段：sand, which is mostly silica, is melted together with soda and lime。" },
      { q:"Medieval glassmakers deliberately made panes thicker at one edge.", a:"FALSE", why:"C 段：the disc was never perfectly even，厚度不均是工艺造成的，并不是故意做厚。" },
      { q:"Glassblowing was first developed in Mesopotamia.", a:"FALSE", why:"D 段：吹制技术 probably on the eastern coast of the Mediterranean，美索不达米亚出土的是最早的玻璃珠。" },
      { q:"Pilkington's float process was quickly adopted in the United States.", a:"NOT GIVEN", why:"E 段只说今天绝大多数平板玻璃仍用这种方法生产，没有提到美国。" }
    ]},
    { type:"gap", instr:"Complete the sentences below.", limit:"Choose NO MORE THAN TWO WORDS from the passage for each answer.", maxWords:2, items:[
      { q:"In the float process, molten glass is poured onto a bath of ___.", a:["liquid tin","tin"], why:"E 段：molten glass is poured onto a bath of liquid tin。" },
      { q:"In strengthened glass, sodium atoms are replaced by ___ atoms.", a:["potassium","larger potassium"], why:"F 段：small sodium atoms near the surface are exchanged for larger potassium atoms。" },
      { q:"The replacement atoms create a layer of ___ at the surface.", a:["compression"], why:"F 段：these create a layer of compression。" },
      { q:"Some researchers are developing glass for use in ___.", a:["folding devices"], why:"F 段：glass that can bend without breaking, which could be used in folding devices。" }
    ]}
  ]},

{ id:"r-nudge", level:3, title:"Nudging Behaviour: Promise and Limits", topic:"Behavioural Economics",
  paras:[
    ["A","Governments have traditionally relied on two main tools to change behaviour: rules, which forbid or require certain actions, and financial incentives, such as taxes and subsidies. Over the past two decades, a third approach has attracted considerable attention. Known as 'nudging', it involves altering the way choices are presented so that people are more likely to choose options that benefit them, without removing any options or significantly changing their costs."],
    ["B","The best-known example concerns pension savings. In many workplaces, employees once had to sign up actively for a retirement plan, and a large proportion never did. When some employers made enrolment automatic, so that workers were included unless they chose to leave, participation rose dramatically. Economist Ruth Calder argues that this result demonstrates the remarkable power of default options: 'People rarely object to the plan itself; what stops them is the small effort required to begin.'"],
    ["C","Supporters claim that nudges are cheap, easy to test and respectful of freedom. Because no option is forbidden, a person who strongly prefers a different choice can still make it. Many governments have set up specialist units to design and evaluate such interventions, from rewording tax reminder letters to placing healthier food at eye level in school canteens. Some reported successes were impressive: in one trial, simply telling late taxpayers that most people in their town had already paid increased the payment rate by several percentage points."],
    ["D","More recently, however, the evidence has been examined more critically. A large analysis led by statistician Paul Mendes compared the results of nudges published in academic journals with those of trials carried out by government units, which are required to report all their findings. The average effect in the government trials was roughly one-sixth of that in the published studies. Mendes suggests that this gap arises largely because journals are more likely to publish striking results than disappointing ones, so the published literature presents an overly optimistic picture."],
    ["E","Mendes does not conclude that nudges are worthless. Even a small effect, he points out, can be worthwhile if an intervention costs almost nothing and reaches millions of people. A letter that increases tax payments by one per cent may still return far more than it costs to send. His concern is rather that policymakers who expect large changes may choose nudges in situations where stronger measures are needed."],
    ["F","Others raise ethical objections. Philosopher Hannah Okafor accepts that defaults can be helpful but warns that nudges often work precisely because people do not notice them. 'An intervention that would fail if it were openly explained,' she writes, 'should make us uncomfortable.' She proposes that any nudge used by a government should be one that officials would be willing to announce publicly. Calder, by contrast, considers this test unnecessary, noting that every way of presenting a choice influences people somehow, so there is no neutral option to return to."],
    ["G","What seems clear is that nudges are neither the revolutionary solution that early enthusiasts imagined nor a fashionable mistake. They appear to work best for decisions people already wish to make but tend to postpone, and least well where people's habits or interests strongly oppose the desired behaviour. For problems such as climate change or obesity, most researchers now agree that nudges can only complement, not replace, traditional policies."]
  ],
  groups:[
    { type:"ynng", instr:"Do the following statements agree with the claims of the writer?", items:[
      { q:"Nudges work by making some choices unavailable.", a:"NO", why:"A 段：without removing any options，作者明确说助推不取消任何选项。" },
      { q:"Early supporters of nudges overestimated what they could achieve.", a:"YES", why:"G 段：neither the revolutionary solution that early enthusiasts imagined，说明早期支持者期望过高。" },
      { q:"Nudges are more effective in wealthy countries than in poorer ones.", a:"NOT GIVEN", why:"文章没有比较不同国家。" },
      { q:"Nudges are least effective when they conflict with strong habits.", a:"YES", why:"G 段：least well where people's habits or interests strongly oppose the desired behaviour。" }
    ]},
    { type:"match", instr:"Look at the following statements and the list of people below. Match each statement with the correct person, A, B or C. You may use any letter more than once.",
      options:[["A","Ruth Calder"],["B","Paul Mendes"],["C","Hannah Okafor"]], items:[
      { q:"It is impossible to present a choice without affecting people's decisions.", a:"A", why:"F 段：Calder ... noting that every way of presenting a choice influences people somehow。" },
      { q:"An intervention with a small effect may still be good value.", a:"B", why:"E 段：Even a small effect, he points out, can be worthwhile。" },
      { q:"Governments should only use nudges they would be prepared to make public.", a:"C", why:"F 段：Okafor proposes that any nudge ... should be one that officials would be willing to announce publicly。" },
      { q:"Effort, rather than disagreement, often prevents people from acting.", a:"A", why:"B 段 Calder 的引语：People rarely object to the plan itself; what stops them is the small effort required to begin。" },
      { q:"The way research is published has made nudges appear more effective than they are.", a:"B", why:"D 段：journals are more likely to publish striking results ... overly optimistic picture。" }
    ]},
    { type:"gap", instr:"Complete the summary below.", limit:"Choose ONE WORD ONLY from the passage for each answer.", maxWords:1, flow:true, heading:"Evidence about nudges", items:[
      { q:"Government units must ___ all of their findings,", a:["report"], why:"D 段：which are required to report all their findings。" },
      { q:"and their trials showed an average effect about one-sixth of that found in ___ studies.", a:["published"], why:"D 段：roughly one-sixth of that in the published studies。" },
      { q:"According to Mendes, the danger is that policymakers will use nudges when ___ measures are needed.", a:["stronger"], why:"E 段：in situations where stronger measures are needed。" }
    ]},
    { type:"mcq", instr:"Choose the correct letter, A, B, C or D.", items:[
      { q:"What is the writer's main purpose in paragraph C?", opts:["to criticise the cost of specialist government units","to outline the reasons why nudges became popular","to explain how tax reminder letters are written","to compare nudges with financial incentives"], a:1, why:"C 段列出支持者的理由（便宜、易测试、尊重自由）和成功案例，说明助推为何受欢迎。" },
      { q:"What is the writer's overall conclusion about nudges?", opts:["They should be abandoned in favour of rules.","They are useful in some situations but cannot solve major problems alone.","They are ethically unacceptable in most cases.","They have proved more effective than expected."], a:1, why:"G 段：nudges can only complement, not replace, traditional policies。" }
    ]}
  ]},
{ id:"r-tea", level:1, title:"The Journey of Tea", topic:"History",
  paras:[
    ["A","Tea is the second most widely consumed drink in the world after water. Yet for most of its history, it was known only in one part of the world. The tea plant is native to the region where southern China, northern Myanmar and north-eastern India meet, and people there are thought to have chewed or boiled its leaves for thousands of years, at first mainly as a medicine rather than as an everyday drink."],
    ["B","By the time of the Tang dynasty, which began in the seventh century, tea drinking had become popular throughout China. A writer named Lu Yu produced the first known book devoted entirely to tea, describing how it should be grown, prepared and served. At this time, tea leaves were usually pressed into hard cakes, which were easier to transport and could be traded over long distances. Pieces were broken off the cake and boiled, sometimes with salt or spices."],
    ["C","From China, tea spread to Japan and Korea, often carried by Buddhist monks, who valued it because it helped them stay awake during long periods of meditation. In Japan, the preparation of powdered green tea gradually developed into a formal ceremony, in which every movement of the host follows a set pattern. The ceremony was intended to encourage calm and respect, and it remains an important part of Japanese culture today."],
    ["D","Tea did not reach Europe until the early seventeenth century, when Dutch traders began shipping it from Asia. At first it was extremely expensive and was sold in pharmacies. In Britain, it became fashionable after the marriage of King Charles II to a Portuguese princess who was already fond of the drink. However, high taxes kept prices so high that a large illegal trade developed, and by some estimates more tea was smuggled into the country than was imported legally."],
    ["E","In the nineteenth century, Britain wanted to reduce its dependence on China for tea. The British East India Company began growing tea on a large scale in Assam, in north-eastern India, and later in Ceylon, now Sri Lanka. These plantations relied on large numbers of poorly paid workers, and conditions were often very harsh. Nevertheless, by the end of the century India had overtaken China as Britain's main supplier."],
    ["F","Today, tea is grown in more than sixty countries, and the most recent innovations concern how it is sold rather than how it is grown. The tea bag, reportedly invented by accident when an American merchant sent samples in small silk bags, now accounts for the vast majority of tea sold in Britain. Meanwhile, newer drinks such as bubble tea, which first appeared in Taiwan in the 1980s, have introduced tea to a younger generation of consumers around the world."]
  ],
  groups:[
    { type:"tfng", instr:"Do the following statements agree with the information given in the passage?", items:[
      { q:"Tea was first used mainly for medical purposes.", a:"TRUE", why:"A 段：at first mainly as a medicine rather than as an everyday drink。" },
      { q:"Lu Yu was a tea farmer before he became a writer.", a:"NOT GIVEN", why:"B 段只说他写了第一本关于茶的书，没有提到他之前的职业。" },
      { q:"Tea cakes were made because they were easier to move and trade.", a:"TRUE", why:"B 段：hard cakes, which were easier to transport and could be traded over long distances。" },
      { q:"Tea was cheap when it first arrived in Europe.", a:"FALSE", why:"D 段：At first it was extremely expensive and was sold in pharmacies。" },
      { q:"Working conditions on the Assam plantations were generally good.", a:"FALSE", why:"E 段：poorly paid workers, and conditions were often very harsh。" }
    ]},
    { type:"gap", instr:"Complete the notes below.", limit:"Choose ONE WORD ONLY from the passage for each answer.", maxWords:1, heading:"The spread of tea", items:[
      { q:"Japan and Korea: tea was brought by Buddhist ___", a:["monks"], why:"C 段：often carried by Buddhist monks。" },
      { q:"monks drank it to stay awake during ___", a:["meditation"], why:"C 段：helped them stay awake during long periods of meditation。" },
      { q:"Europe: first shipped by ___ traders", a:["Dutch"], why:"D 段：when Dutch traders began shipping it from Asia。" },
      { q:"Britain: high taxes led to a large amount of tea being ___", a:["smuggled"], why:"D 段：more tea was smuggled into the country than was imported legally。" }
    ]},
    { type:"match", instr:"Which paragraph contains the following information? You may use any letter more than once.", options:"paras", items:[
      { q:"a reason why a political event made tea popular", a:"D", why:"D 段：Charles II 与喜爱喝茶的葡萄牙公主结婚后，喝茶在英国流行起来。" },
      { q:"a description of an accidental invention", a:"F", why:"F 段：the tea bag, reportedly invented by accident。" },
      { q:"a reference to a country changing its source of supply", a:"E", why:"E 段：Britain wanted to reduce its dependence on China ... India had overtaken China as Britain's main supplier。" },
      { q:"an explanation of where the tea plant originally grew", a:"A", why:"A 段：The tea plant is native to the region where southern China, northern Myanmar and north-eastern India meet。" }
    ]}
  ]},

{ id:"r-lightpollution", level:2, title:"Light Pollution and Wildlife", topic:"Ecology",
  paras:[
    ["A","For most of the history of life on Earth, nights were dark, lit only by the moon and stars. In little more than a century, that has changed. Satellite images show that artificial light now brightens the night sky over most of the world's populated land, and some estimates suggest that the area affected is growing by around two per cent each year. While the effects of light pollution on astronomy have long been recognised, biologists are increasingly concerned about its impact on wildlife, since many animals rely on natural cycles of light and darkness."],
    ["B","Some of the clearest evidence comes from sea turtles. Female turtles come ashore at night to lay their eggs on beaches, and when the young hatch, they find the sea by moving towards the brightest horizon, which on a natural beach is the moonlit water. On beaches near hotels and roads, however, hatchlings are often drawn inland towards artificial lights, where many die from exhaustion or are caught by predators."],
    ["C","Birds are also affected. Many species migrate at night and use the stars to navigate. Brightly lit buildings and towers can disorient them, causing them to circle until they are exhausted or to collide with windows. In North America alone, collisions with buildings are estimated to kill several hundred million birds every year, although not all of these deaths are linked to lighting. Some cities now dim the lights of tall buildings during the main migration periods."],
    ["D","The effects on insects may be even more significant. Moths and many other night-flying insects are attracted to lights, where they may die from heat or be eaten. A study in the Netherlands, led by ecologist Kamiel Spoelstra, found that moth populations near illuminated roadsides declined compared with those in dark areas. Because moths pollinate many plants and are an important food source for birds and bats, such losses can affect entire ecosystems."],
    ["E","Fortunately, light pollution is easier to reverse than many other environmental problems: once a light is switched off, its effect disappears immediately. Several practical measures can reduce the harm. Lights can be shielded so that they point downwards rather than into the sky, and they can be switched off or dimmed when they are not needed. The colour of light also matters. Research suggests that many insects are less attracted to warm, orange-coloured light than to the bright white or blue light produced by many modern LEDs."],
    ["F","Some places have gone further. A number of towns and national parks have been certified as 'dark sky' areas, where lighting is strictly controlled. In parts of Florida, regulations require beachfront properties to turn off or cover lights visible from the beach during the turtle nesting season. Such rules show that it is possible to balance human needs for safety and convenience with the needs of other species."]
  ],
  groups:[
    { type:"headings", instr:"The passage has six paragraphs, A–F. Choose the correct heading for paragraphs B–F from the list of headings below.", example:"Paragraph A: vi",
      options:["Simple changes that make a difference","Young animals heading the wrong way","The economic cost of lighting cities","Places with strict rules on lighting","Losses that spread through food chains","A growing problem beyond astronomy","Dangers for travellers in the night sky","Why some animals prefer artificial light"],
      items:[
        { q:"Paragraph B", a:"ii", why:"B 段讲刚孵出的小海龟被人造光吸引，往内陆方向爬。" },
        { q:"Paragraph C", a:"vii", why:"C 段讲夜间迁徙的鸟类被灯光迷惑、撞上建筑。" },
        { q:"Paragraph D", a:"v", why:"D 段讲飞蛾数量减少会影响授粉，也会影响以飞蛾为食的鸟和蝙蝠。" },
        { q:"Paragraph E", a:"i", why:"E 段讲给灯加罩、关灯调暗、改用暖色光等简单措施。" },
        { q:"Paragraph F", a:"iv", why:"F 段讲「暗夜保护区」和佛罗里达海滩的灯光规定。" }
      ]},
    { type:"mcq", instr:"Choose the correct letter, A, B, C or D.", items:[
      { q:"How do newly hatched turtles normally find the sea?", opts:["They follow the sound of the waves.","They move towards the brightest horizon.","They follow their mothers.","They use the position of the stars."], a:1, why:"B 段：they find the sea by moving towards the brightest horizon。" },
      { q:"What does the writer say about the bird deaths in North America?", opts:["They are all caused by artificial lights.","They have fallen in recent years.","Not all of them are related to lighting.","They mainly affect birds that do not migrate."], a:2, why:"C 段：although not all of these deaths are linked to lighting。" },
      { q:"According to paragraph E, why is light pollution easier to deal with than some other environmental problems?", opts:["Its effects stop as soon as the light is turned off.","Modern lights use very little energy.","Most animals quickly adapt to it.","It only affects a small area of land."], a:0, why:"E 段：once a light is switched off, its effect disappears immediately。" }
    ]},
    { type:"gap", instr:"Complete the sentences below.", limit:"Choose NO MORE THAN TWO WORDS from the passage for each answer.", maxWords:2, items:[
      { q:"Spoelstra's study found that moth populations fell near ___.", a:["illuminated roadsides","roadsides"], why:"D 段：moth populations near illuminated roadsides declined。" },
      { q:"Insects appear to be less attracted to light that is warm and ___ in colour.", a:["orange-coloured","orange"], why:"E 段：less attracted to warm, orange-coloured light。" },
      { q:"Some towns and parks have been officially recognised as ___ areas.", a:["dark sky"], why:"F 段：certified as 'dark sky' areas。" },
      { q:"In parts of Florida, lights near beaches must be turned off or covered during the turtle ___.", a:["nesting season"], why:"F 段：during the turtle nesting season。" },
      { q:"Moths are an important food source for birds and ___.", a:["bats"], why:"D 段：an important food source for birds and bats。" }
    ]}
  ]},

{ id:"r-cities", level:3, title:"Should Cities Keep Growing?", topic:"Urban Studies",
  paras:[
    ["A","More than half of the world's population now lives in cities, and the United Nations expects this proportion to reach around two thirds by 2050. For much of the twentieth century, rapid urban growth was regarded with alarm. Planners spoke of overcrowding, slums and the loss of farmland, and many governments tried to slow migration from the countryside. In recent decades, however, a more positive view of the city has become influential among economists."],
    ["B","Economist Margaret Holloway is among the most prominent supporters of this view. She argues that cities are humanity's most effective engines of prosperity because they bring people together. 'When workers, firms and ideas are concentrated in one place,' she writes, 'knowledge spreads faster, specialised businesses can find customers and workers can find jobs that match their skills.' Studies have found that workers in large cities tend to earn more, even after differences in education are taken into account, which Holloway interprets as evidence that density itself increases productivity."],
    ["C","Holloway also challenges the assumption that cities are bad for the environment. Per person, she points out, residents of dense cities typically use less energy than people in suburbs or rural areas, because they live in smaller homes, share walls with neighbours and are more likely to walk or use public transport. From this perspective, the greenest thing a government could do is make it easier for people to live in cities, chiefly by allowing more housing to be built."],
    ["D","Not all researchers accept this optimistic account. Geographer Samuel Okoye argues that the benefits of urban growth are unevenly distributed. In many rapidly expanding cities, he notes, housing costs have risen far faster than wages, pushing lower-income residents into overcrowded accommodation or long commutes from the edges of the city. 'The productivity gains are real,' Okoye accepts, 'but if they are captured mainly by property owners, growth can increase inequality rather than reduce it.'"],
    ["E","A different concern is raised by public health researcher Clara Mendes, who studies cities in low-income countries. Much of the most rapid urban growth now takes place not in wealthy cities with established infrastructure but in places where water supply, sanitation and transport have not kept pace. In such settings, she argues, density can spread disease and expose people to dangerous levels of air pollution. Mendes does not oppose urbanisation, which she regards as inevitable, but insists that investment in basic services must come first."],
    ["F","Despite their differences, these researchers agree on more than might be expected. None believes that urban growth can or should be stopped, and all accept that the way cities are managed matters as much as their size. Holloway's call for more housing would, if successful, address part of Okoye's concern about rents, while Mendes's emphasis on infrastructure reflects the fact that the advantages of density depend on conditions that cannot be taken for granted."],
    ["G","The debate has practical consequences. Decisions about zoning rules, transport investment and the location of new housing are made by local authorities every day, often with little reference to the wider evidence. Whether the cities of 2050 become engines of shared prosperity or concentrations of poverty may depend less on how large they grow than on the quality of these everyday choices."]
  ],
  groups:[
    { type:"match", instr:"Look at the following statements and the list of people below. Match each statement with the correct person, A, B or C. You may use any letter more than once.",
      options:[["A","Margaret Holloway"],["B","Samuel Okoye"],["C","Clara Mendes"]], items:[
      { q:"Basic services should be provided before cities become more crowded.", a:"C", why:"E 段：investment in basic services must come first。" },
      { q:"People living close together tend to use less energy.", a:"A", why:"C 段：residents of dense cities typically use less energy。" },
      { q:"The financial benefits of growth may go mostly to those who own property.", a:"B", why:"D 段：if they are captured mainly by property owners, growth can increase inequality。" },
      { q:"Higher wages in cities show that density makes workers more productive.", a:"A", why:"B 段：Holloway interprets as evidence that density itself increases productivity。" },
      { q:"The movement of people into cities cannot be avoided.", a:"C", why:"E 段：urbanisation, which she regards as inevitable。" }
    ]},
    { type:"ynng", instr:"Do the following statements agree with the claims of the writer?", items:[
      { q:"Governments in the twentieth century generally welcomed rapid urban growth.", a:"NO", why:"A 段：rapid urban growth was regarded with alarm ... many governments tried to slow migration。" },
      { q:"The researchers discussed have more in common than their disagreements might suggest.", a:"YES", why:"F 段：these researchers agree on more than might be expected。" },
      { q:"Local authorities usually consult academic research before making planning decisions.", a:"NO", why:"G 段：often with little reference to the wider evidence。" },
      { q:"Cities in wealthy countries will stop growing before 2050.", a:"NOT GIVEN", why:"文章只给出全球城市人口比例的预测，没有谈富裕国家城市是否会停止增长。" }
    ]},
    { type:"gap", instr:"Complete the summary below.", limit:"Choose ONE WORD ONLY from the passage for each answer.", maxWords:1, flow:true, heading:"Arguments about urban growth", items:[
      { q:"Holloway believes the most environmentally friendly policy is to allow more ___ to be built in cities.", a:["housing"], why:"C 段：chiefly by allowing more housing to be built。" },
      { q:"Okoye notes that in many cities housing costs have risen faster than ___,", a:["wages"], why:"D 段：housing costs have risen far faster than wages。" },
      { q:"forcing poorer residents into overcrowded homes or long ___.", a:["commutes"], why:"D 段：pushing lower-income residents into overcrowded accommodation or long commutes。" }
    ]},
    { type:"mcq", instr:"Choose the correct letter, A, B, C or D.", items:[
      { q:"What is the writer's main point in paragraph G?", opts:["Cities should stop growing before 2050.","Everyday local decisions will strongly influence the future of cities.","Local authorities have too much power over housing.","The size of cities is the most important factor in their success."], a:1, why:"G 段：may depend less on how large they grow than on the quality of these everyday choices。" },
      { q:"Which of the following best describes the passage as a whole?", opts:["a history of city planning in the twentieth century","a presentation of different views on the effects of urban growth","an argument that cities are harmful to the environment","a comparison of cities in rich and poor countries"], a:1, why:"文章介绍了三位学者对城市增长的不同观点，最后指出共识和实际影响。" }
    ]}
  ]}
];
