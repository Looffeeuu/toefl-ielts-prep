/* 雅思写作题库（学术类，原创练习题，不是考试真题）
   Task 1：描述图表或流程图，至少 150 词，建议 20 分钟；图表数据都是虚构的，只用于练习
   Task 2：议论文，至少 250 词，建议 40 分钟；分值是 Task 1 的两倍
   chart 格式：line / bar { x, unit, series:[{ name, values }] } · pie { labels, pies:[{ title, values }] } · table { cols, rows } · process { steps } */
window.IELTS_WRITING = {

task1: [
  { id:"w1-leisure", name:"三种休闲活动的时间", kind:"line",
    prompt:"The graph below shows the average number of hours per week that people in one country spent on three leisure activities between 2000 and 2020.",
    chart:{ x:["2000","2005","2010","2015","2020"], unit:"hours per week", yMax:25,
      series:[{ name:"Watching TV", values:[20,19,17,14,12] },{ name:"Using the internet", values:[3,7,12,17,21] },{ name:"Reading", values:[6,5.5,5,4.5,4] }] },
    hint:"概述段写两个最主要的趋势：上网时间大幅上升并超过看电视，看电视和阅读都在下降。主体段按「起点 → 变化 → 终点」写，选关键年份的数字，不用每年都写；指出两条线在 2010–2015 年之间交叉。",
    phrases:["The line graph illustrates how ... changed between ... and ...","Overall, ... rose dramatically, while ... declined.","... fell steadily, dropping to ... by 2020.","... followed the opposite pattern.","... overtook ... at some point between 2010 and 2015."],
    model:`The line graph illustrates how many hours per week people in one country spent on average watching television, using the internet and reading between 2000 and 2020.

Overall, time spent online rose dramatically, while television viewing and reading both declined. By the end of the period, the internet had replaced television as the most time-consuming of the three activities.

In 2000, people spent around 20 hours a week watching TV, far more than the 6 hours they spent reading and the 3 hours they spent on the internet. Over the following two decades, television viewing fell steadily, dropping to 17 hours in 2010 and to just 12 hours by 2020.

Internet use followed the opposite pattern. It increased rapidly, from 3 hours in 2000 to 12 hours in 2010, and it overtook television at some point between 2010 and 2015. By 2020, people spent 21 hours a week online, seven times the figure for 2000.

Reading, meanwhile, showed a small but consistent decline, falling gradually from 6 hours to 4 hours a week over the period.` },

  { id:"w1-travel", name:"学生上学的交通方式", kind:"bar",
    prompt:"The chart below shows the percentage of students at a university who used four different ways of travelling to campus in 2010 and 2020.",
    chart:{ x:["Car","Bus","Bicycle","Walking"], unit:"% of students", yMax:50,
      series:[{ name:"2010", values:[42,30,10,18] },{ name:"2020", values:[25,33,24,18] }] },
    hint:"概述：开车的比例大幅下降，骑车明显增加，公交成为最常用的方式。按年份写或按交通方式写都可以；注意「百分点」（percentage points）和「百分比」的区别，步行两年不变也要提到。",
    phrases:["The bar chart compares the proportion of ... in 2010 and 2020.","... lost its position as the most popular means of transport.","a drop of 17 percentage points","the figure for cycling more than doubled","remained unchanged at 18% in both years"],
    model:`The bar chart compares the proportion of students at a university who travelled to campus by car, bus, bicycle and on foot in 2010 and 2020.

Overall, the car lost its position as the most popular means of transport, while cycling grew substantially. By 2020, the bus had become the most common way of getting to campus.

In 2010, 42% of students drove to the university, considerably more than the 30% who took the bus. Walking accounted for 18% of students, whereas only one in ten cycled.

By contrast, the picture ten years later was very different. The percentage of students travelling by car fell to 25%, a drop of 17 percentage points, while the figure for cycling more than doubled, rising from 10% to 24%. Bus use increased slightly to 33%, making it the most popular option, so the car, which had been 12 percentage points ahead of the bus in 2010, was 8 points behind it by 2020. The proportion of students who walked to campus remained unchanged at 18% in both years.` },

  { id:"w1-waste", name:"城市生活垃圾的处理方式", kind:"pie",
    prompt:"The pie charts show how household waste in one city was disposed of in 1995 and 2015.",
    chart:{ labels:["Landfill","Recycling","Incineration","Composting"], pies:[{ title:"1995", values:[64,12,18,6] },{ title:"2015", values:[28,38,24,10] }] },
    hint:"两个饼图要做比较：填埋从将近三分之二降到 28%，回收增长到原来的三倍多，成为最大的类别。可以用分数（almost two thirds、just over a third）替换百分数，避免整篇都是数字。",
    phrases:["The two pie charts show the proportions of ... in 1995 and 2015.","Overall, the city moved away from ... towards ...","almost two thirds of ... was ...","accounting for 18%","more than tripled to 38%"],
    model:`The two pie charts show the proportions of household waste in a city that were sent to landfill, recycled, incinerated and composted in 1995 and 2015.

Overall, the city moved away from landfill towards recycling over the twenty-year period, and by 2015 recycling had become the main method of disposal.

In 1995, almost two thirds of household waste (64%) was buried in landfill sites. Incineration was the second most common method, accounting for 18%, while recycling and composting made up only 12% and 6% respectively.

By 2015, the share of waste going to landfill had fallen dramatically to 28%, less than half the earlier figure. Over the same period, the proportion recycled more than tripled to 38%, making it the largest category. Incineration also rose, although more modestly, to 24%, and composting increased from 6% to 10%. As a result, around 72% of the city's waste was dealt with by methods other than landfill in 2015, compared with just over a third in 1995.` },

  { id:"w1-library", name:"四个城镇的公共图书馆", kind:"table",
    prompt:"The table below gives information about public libraries in four towns in 2023.",
    chart:{ cols:["Town","Number of libraries","Visits per year (thousands)","Books borrowed per person","Opening hours per week"],
      rows:[["Ashford",5,320,4.2,48],["Brenton",2,150,6.1,55],["Carlow",8,410,2.9,40],["Dunmore",3,260,5.0,62]] },
    hint:"表格题不要逐格复述。先找出对比最明显的地方：Carlow 图书馆最多、访问量最大，但人均借书最少、开放时间最短；Brenton 和 Dunmore 规模小，但借书和开放时间表现更好。按「规模」和「使用情况」两组写主体段。",
    phrases:["The table provides information about ...","Overall, ... had the most ..., but ...","In contrast, ...","followed by ..., with ...","Borrowing figures show a different pattern."],
    model:`The table provides information about the public libraries in four towns in 2023, including the number of libraries, annual visits, borrowing per person and weekly opening hours.

Overall, Carlow had the most libraries and the highest number of visits, but its residents borrowed the fewest books and its libraries opened for the shortest time. In contrast, the smaller library services in Brenton and Dunmore performed well in terms of borrowing and opening hours.

Carlow had eight libraries, which received 410,000 visits during the year, followed by Ashford, with five libraries and 320,000 visits. Brenton had only two libraries and the lowest number of visits, at 150,000, while Dunmore's three libraries attracted 260,000 visitors.

However, the borrowing figures show a different pattern. People in Brenton borrowed 6.1 books each on average, the highest figure of the four towns, compared with just 2.9 in Carlow. Dunmore and Ashford were in between, at 5.0 and 4.2 books respectively. Dunmore's libraries were open for the longest time, 62 hours a week, while those in Carlow opened for only 40 hours.` },

  { id:"w1-paper", name:"再生纸的生产流程", kind:"process",
    prompt:"The diagram below shows how recycled paper is produced.",
    chart:{ steps:["Used paper is collected from homes and offices","It is sorted into different types and grades","The paper is mixed with water and chemicals to make pulp","The pulp is screened to remove plastic, staples and other materials","Ink is removed in a de-inking stage using air bubbles","The clean pulp is pressed between rollers to remove water","It is dried and wound onto large reels of new paper"] },
    hint:"流程图没有数字，概述段写有几个步骤、从哪里开始到哪里结束。主体段多用被动语态（is collected、is mixed）和顺序词（first、next、after this、finally），把步骤分成两三段，不要逐条照抄图上的文字。",
    phrases:["The diagram illustrates the stages involved in ...","Overall, the process consists of seven main stages, beginning with ... and ending with ...","First, ... is collected and taken to ...","After this, ... so that ... can be removed.","In the final stages, ..."],
    model:`The diagram illustrates the stages involved in turning used paper into new paper.

Overall, the process consists of seven main stages, beginning with the collection of waste paper and ending with the production of reels of recycled paper. Most of the stages involve cleaning the material and removing water from it.

First, used paper is collected from homes and offices and taken to a recycling plant, where it is sorted into different types and grades. The sorted paper is then mixed with water and chemicals, which break it down into a soft mixture known as pulp.

Next, the pulp is passed through screens so that plastic, staples and other unwanted materials can be removed. After this, the ink is separated from the fibres in a de-inking stage, in which air bubbles carry the ink particles to the surface.

In the final stages, the clean pulp is pressed between rollers to squeeze out most of the water. Finally, it is dried and wound onto large reels, ready to be used as new paper.` },

  { id:"w1-energy", name:"可再生能源发电量", kind:"line",
    prompt:"The graph below shows the amount of electricity generated from three renewable sources in one country between 2014 and 2022.",
    chart:{ x:["2014","2016","2018","2020","2022"], unit:"terawatt-hours (TWh)", yMax:50,
      series:[{ name:"Wind", values:[12,18,26,35,44] },{ name:"Solar", values:[2,5,10,18,30] },{ name:"Hydro", values:[20,21,19,20,18] }] },
    hint:"概述：风能和太阳能快速增长，水电基本稳定；风能超过水电成为最大来源。可以用倍数描述增长（more than three and a half times、fifteen times），注意水电「小幅波动」的写法。",
    phrases:["measured in terawatt-hours (TWh)","remained broadly stable","fluctuated only slightly, between ... and ...","passed hydropower between 2016 and 2018","started from a very low base but increased at an even faster rate"],
    model:`The line graph compares how much electricity a country produced from wind, solar and hydroelectric power over the eight years from 2014 to 2022, measured in terawatt-hours (TWh).

Overall, electricity from wind and solar power grew rapidly over the period, whereas hydroelectric output remained broadly stable. Wind overtook hydropower to become the largest of the three sources.

In 2014, hydropower was the leading source, producing 20 TWh, compared with 12 TWh from wind and just 2 TWh from solar. Over the following eight years, hydroelectric generation fluctuated only slightly, between 18 and 21 TWh, and ended the period at 18 TWh.

Wind power, by contrast, rose steadily throughout the period. It passed hydropower between 2016 and 2018 and reached 44 TWh in 2022, more than three and a half times its 2014 level. Solar power started from a very low base but increased at an even faster rate, multiplying fifteen times to 30 TWh by 2022. In that year, solar also generated considerably more electricity than hydropower for the first time.` }
],

task2: [
  { id:"w2-tuition", name:"大学是否应该免费", type:"opinion",
    prompt:"Some people believe that university education should be free for all students. To what extent do you agree or disagree?",
    hint:"「To what extent」要明确表态，可以完全同意、完全反对或部分同意，但全文立场要一致。范文采用部分同意：承认免费的好处，再说明全面免费的问题，最后给出折中方案（按家庭收入资助）。",
    phrases:["While I accept that ..., I believe ...","The strongest argument for ... is that ...","regardless of their family background","However, making ... free for every student would be ...","For these reasons, I think a better approach is to ..."],
    model:`In many countries, students must pay high fees to attend university, and some people argue that higher education should be free for everyone. While I accept that free tuition would have important benefits, I believe it should be targeted at those who need it most rather than offered to all students.

The strongest argument for free university education is that it would give talented young people an equal chance, regardless of their family background. When fees are high, students from low-income families may decide not to apply, or may leave university with debts that limit their choices for years. Society as a whole also benefits when more people are well educated, because graduates tend to earn more, pay more tax and contribute to research and innovation.

However, making university free for every student would be extremely expensive, and the money would have to come from taxes paid by the whole population, including many people who never attended university. In addition, a large share of the benefit would go to students from wealthy families, who could easily afford to pay. If governments spend heavily on free tuition, they may have less money for primary schools or vocational training, which often do more to reduce inequality.

For these reasons, I think a better approach is to provide free or heavily reduced tuition for students from lower-income households, along with grants to cover living costs, while asking those who can afford it to contribute. Such a system would protect equal opportunity without placing an unreasonable burden on public finances.

In conclusion, although free university education for all is an attractive idea, I believe support should be directed at the students who genuinely need it.` },

  { id:"w2-language", name:"外语从小学还是中学开始学", type:"discuss",
    prompt:"Some people think that children should start learning a foreign language at primary school, while others believe it is better to begin in secondary school. Discuss both views and give your own opinion.",
    hint:"「Discuss both views」两边都要写充分，各一段；自己的观点可以在开头和结尾说明，也可以单独一段。不要只写自己支持的一方。",
    phrases:["Opinions differ on ...","Those who prefer ... make several reasonable points.","On the other hand, there are strong arguments for ...","Overall, I believe the benefits of ... outweigh the drawbacks.","provided that it is well taught"],
    model:`Opinions differ on when children should begin learning a foreign language at school. Some believe it should start in primary school, while others argue that secondary school is a more suitable stage. In my view, an early start is generally better, provided that it is well taught.

Those who prefer a later start make several reasonable points. Primary school pupils already have a great deal to learn, especially in reading, writing and mathematics in their own language, and adding another language may put them under pressure. Moreover, older students can understand grammar rules more easily and are able to study in a more focused way, so they may make faster progress in a shorter time. There is also the practical problem that many primary schools do not have teachers who speak a foreign language well.

On the other hand, there are strong arguments for beginning earlier. Young children are usually less afraid of making mistakes, and they are often better at imitating new sounds, which can help them develop more natural pronunciation. Starting early also means that students have more years of study in total, so the language becomes a familiar part of their lives rather than just another exam subject. Lessons for young learners can be based on songs, games and stories, which make the experience enjoyable rather than stressful.

In conclusion, I believe the benefits of starting in primary school outweigh the drawbacks. However, schools need properly trained teachers and should keep lessons short and playful at this age. If these conditions are met, an early start can give children a solid foundation and a positive attitude towards learning languages.` },

  { id:"w2-traffic", name:"城市交通拥堵的原因与对策", type:"problem",
    prompt:"In many cities, traffic congestion is becoming a serious problem. What are the main causes of this problem, and what measures could be taken to reduce it?",
    hint:"两个问题各写一段：原因段给两三个原因，对策段的对策最好和原因对应（私家车多 → 改善公共交通、收拥堵费；城市规划 → 弹性工作）。这类题不需要表达同意或反对。",
    phrases:["This essay will examine the main causes of ... and suggest some measures that could ...","The most obvious cause is ...","A second cause is ...","Several measures could help to address these problems.","would go a long way towards solving it"],
    model:`Traffic congestion has become a daily problem in many cities, wasting time and increasing air pollution. This essay will examine the main causes of this situation and suggest some measures that could reduce it.

The most obvious cause is the rapid growth in the number of private cars. As incomes rise, more families can afford a car, and many people regard driving as more comfortable and convenient than other forms of transport. A second cause is the way many cities have developed. When homes are built far from workplaces, schools and shops, people have little choice but to travel long distances every day, often at the same times in the morning and evening. Finally, in some cities public transport is unreliable, crowded or does not reach the areas where people live, which encourages even more people to drive.

Several measures could help to address these problems. Firstly, governments should invest in fast, frequent and affordable public transport, such as metro lines and dedicated bus lanes, so that it becomes a genuine alternative to the car. Secondly, cities could discourage unnecessary driving by introducing charges for entering the busiest areas at peak times, as some major cities have already done. The money raised could then be used to improve public transport. Thirdly, employers could allow flexible working hours or working from home on some days, which would spread journeys more evenly throughout the day.

In conclusion, traffic congestion is mainly caused by rising car ownership, poor urban planning and inadequate public transport. A combination of better public transport, congestion charges and more flexible working arrangements would go a long way towards solving it.` },

  { id:"w2-remote", name:"居家办公利大于弊吗", type:"advantage",
    prompt:"More and more people are working from home rather than in an office. Do the advantages of this development outweigh the disadvantages?",
    hint:"「Do the advantages outweigh the disadvantages」必须给出明确判断。好处和坏处各一段，再说明为什么你认为一方更重要（范文用「坏处可以通过混合办公减轻」来支持结论）。",
    phrases:["Although this trend has some drawbacks, I believe its advantages are more significant.","The main benefit of ... is ...","Nevertheless, ... also has disadvantages.","However, these problems can largely be reduced.","While ..., these drawbacks can be managed, and I believe ..."],
    model:`In recent years, a growing number of people have started working from home instead of travelling to an office every day. Although this trend has some drawbacks, I believe its advantages are more significant.

The main benefit of working from home is the time and money it saves. Employees who no longer commute can spend an extra hour or more each day with their families or on exercise and rest, and they also save on transport costs. In addition, many people find that they can concentrate better at home, away from the noise and interruptions of a busy office. For employers, there are savings too, since they may need smaller and cheaper office space.

Nevertheless, working from home also has disadvantages. Some employees feel isolated because they have fewer opportunities to talk to colleagues, and this can affect both their mood and their sense of belonging to a team. Young workers in particular may learn more slowly when they cannot watch more experienced staff and ask them questions. Furthermore, the boundary between work and private life can become unclear, and some people end up working longer hours than before.

However, these problems can largely be reduced. Many companies now use a mixed approach, in which staff work in the office on some days and at home on others. This allows teams to meet regularly while still giving employees greater flexibility. Clear rules about working hours can also help people to switch off at the end of the day.

In conclusion, while working from home can lead to isolation and longer working hours, these drawbacks can be managed, and I believe the benefits of saved time, greater flexibility and lower costs outweigh them.` },

  { id:"w2-social", name:"社交媒体：原因与影响", type:"twopart",
    prompt:"Many people today spend a large amount of time on social media. Why is this the case? Is this a positive or negative development?",
    hint:"两个问题都要回答，各写一段。第一问是解释原因，不需要表态；第二问要给出明确判断。最常见的失分是第二问只写了一两句。",
    phrases:["This essay will explain why ... and argue that ...","There are several reasons for the popularity of ...","Most importantly, ...","Social media clearly has positive aspects.","However, when ..., the disadvantages become more serious."],
    model:`Today many people, especially young adults, spend several hours a day on social media platforms. This essay will explain why this is the case and argue that, although social media has some benefits, the amount of time people spend on it is a largely negative development.

There are several reasons for the popularity of social media. First, these platforms make it extremely easy to stay in touch with friends and family, including those who live in other cities or countries. Second, they provide a constant supply of news, entertainment and information that is available at any moment on a mobile phone. Most importantly, the platforms are designed to hold users' attention. Features such as endless scrolling, notifications and personalised recommendations encourage people to keep checking their accounts, often without realising how much time has passed.

Social media clearly has positive aspects. It helps people maintain relationships, allows small businesses to reach customers cheaply, and can spread useful information quickly during emergencies. However, when people spend hours on these platforms every day, the disadvantages become more serious. Time on social media often replaces sleep, physical activity and face-to-face conversation. Many users also compare themselves with carefully selected images of other people's lives, which can lower their self-esteem. In addition, false information can spread rapidly, making it harder for people to judge what is true.

In conclusion, people spend so much time on social media because it is convenient, entertaining and deliberately designed to be hard to put down. Although it offers real benefits, I believe the current level of use is a negative development, and individuals should be encouraged to use it in a more limited and conscious way.` },

  { id:"w2-transport", name:"公共交通还是修新路", type:"opinion",
    prompt:"Governments should spend more money on public transport than on building new roads. To what extent do you agree or disagree?",
    hint:"范文完全同意，用三个理由各写一段（效率、公平、环保），再用一段承认反方的合理之处（农村地区、货运），最后说明这不改变结论。让步段能体现论证的全面。",
    phrases:["I strongly agree with this view, because ...","Firstly, building new roads often fails to ...","By contrast, ...","Admittedly, ... remain necessary, particularly ...","However, this does not justify ..."],
    model:`Some people argue that governments should spend more on public transport than on building new roads. I strongly agree with this view, because investment in public transport benefits more people and helps to solve long-term problems.

Firstly, building new roads often fails to reduce traffic for long. When a new road opens, journeys become easier at first, but this encourages more people to drive, and within a few years the road can become just as crowded as before. By contrast, a good railway or bus network can carry far more people using the same amount of space. A single bus can replace dozens of cars, and a metro line can move tens of thousands of passengers an hour.

Secondly, public transport is fairer. Not everyone can drive or afford a car, including many young people, elderly people and those on low incomes. If governments mainly invest in roads, these groups are left with fewer options for reaching work, education and healthcare. Better public transport gives them independence and access to opportunities.

Thirdly, there are clear environmental benefits. Transport is a major source of air pollution and greenhouse gas emissions, and encouraging people to use trains and buses instead of cars is one of the most effective ways of reducing both.

Admittedly, roads remain necessary, particularly in rural areas where public transport is difficult to provide, and for transporting goods. Existing roads must also be properly maintained. However, this does not justify spending more on new roads than on public transport.

In conclusion, I believe that governments should give priority to public transport, as it is more efficient, more inclusive and better for the environment.` },

  { id:"w2-museum", name:"博物馆应该免费吗", type:"discuss",
    prompt:"Some people believe that museums should be free to enter, while others think visitors should pay. Discuss both views and give your own opinion.",
    hint:"两种观点各写一段，每段两三个理由。自己的观点可以是折中的（常设展免费、特展收费），但要说清楚为什么。",
    phrases:["There is disagreement about whether ...","Supporters of ... argue that ...","On the other hand, there are good reasons for ...","In my view, the best solution combines both approaches.","regardless of income"],
    model:`There is disagreement about whether museums should charge visitors for entry. Some people believe that museums should be free, while others think that visitors ought to pay. In my opinion, permanent collections should generally be free, but charging for special exhibitions is reasonable.

Supporters of entrance fees argue that museums are expensive to run. Buildings must be maintained, valuable objects need to be protected, and staff have to be paid. If visitors pay, less of this cost falls on taxpayers, many of whom never visit museums. Fees can also help museums to organise new exhibitions and educational activities, such as workshops for schools. Furthermore, some people believe that visitors value an experience more when they have paid for it.

On the other hand, there are good reasons for free entry. Museums hold the cultural heritage of a country, and many people feel that everyone should have the right to see it, regardless of income. When entry is free, families with limited budgets, students and schools are more likely to visit, and people can make short, repeated visits instead of feeling that they must see everything in one day. Free museums can also attract tourists who then spend money in nearby shops and restaurants, which benefits the local economy.

In my view, the best solution combines both approaches. The main collections should remain free so that everyone has access to them, while museums can charge for temporary exhibitions, guided tours and special events. Donations and cafés can provide additional income.

In conclusion, although entrance fees help museums to cover their costs, I believe access to permanent collections should be free, with charges limited to special exhibitions.` },

  { id:"w2-exercise", name:"年轻人缺乏运动", type:"problem",
    prompt:"Many young people today do not get enough physical exercise. What are the causes of this, and what can be done to solve the problem?",
    hint:"原因段可以从「个人习惯、学业压力、环境」三个角度写；对策段按「学校、政府、家庭」分别给办法，和原因一一对应会显得很有条理。",
    phrases:["This essay will discuss the main reasons for this problem and suggest some possible solutions.","One important cause is ...","There are several ways to tackle this problem.","Parents also have an important role to play.","If ... work together, it should be possible to ..."],
    model:`It is often said that many young people today do not take enough physical exercise. This essay will discuss the main reasons for this problem and suggest some possible solutions.

One important cause is the growing role of screens in young people's lives. Smartphones, computer games and streaming services offer entertainment at any time, so many teenagers spend their free time sitting indoors rather than playing outside. A second reason is academic pressure. In many countries, students spend long hours at school and on homework or extra classes, leaving little time or energy for sport. Finally, the environment in which young people live can make exercise more difficult. In some cities there are few safe parks or sports facilities, and parents may be unwilling to let children walk or cycle on busy roads.

There are several ways to tackle this problem. Schools could make physical activity a regular part of every day, not only in physical education lessons but also through active breaks and after-school clubs that are free to join. Local governments could invest in parks, sports fields and safe cycle routes, making it easier and more attractive for young people to be active. Parents also have an important role to play: they can set limits on screen time and take part in physical activities with their children, for example by walking or cycling together at weekends.

In conclusion, a lack of exercise among young people is mainly the result of screen-based entertainment, academic pressure and unsuitable environments. If schools, local authorities and families work together, it should be possible to encourage young people to lead more active lives.` }
]
};
