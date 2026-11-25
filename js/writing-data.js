/* 写作题库（原创练习题，按 2026 新版托福写作题型编写）
   组句 Build a Sentence：每行 = A 说的话 | B 的回答（词块用 " / " 分隔，[方括号] 表示固定好的词块，句末标点写在最后） | 干扰词块 | 语法提示
   写邮件 Write an Email、学术讨论 Academic Discussion：每题附范文和常用句型 */
window.WRITING = {

/* 组句题的语法考点（按每套 10 题的顺序，逗号分隔） */
grammarTags: {
  indirect:"间接疑问句语序", modal:"助动词、情态动词后接原形", tense:"时态", nonfinite:"不定式与动名词",
  compare:"比较结构", relative:"从句与关系词", passive:"被动语态", agreement:"主谓一致",
  collocation:"固定搭配", pronoun:"代词"
},
sentenceTags: {
  "s-campus":"indirect,indirect,relative,nonfinite,compare,indirect,tense,modal,modal,modal",
  "s-class":"indirect,indirect,modal,compare,pronoun,collocation,indirect,agreement,tense,indirect",
  "s-library":"nonfinite,collocation,indirect,modal,relative,agreement,passive,passive,indirect,tense",
  "s-work":"tense,nonfinite,compare,collocation,indirect,tense,collocation,nonfinite,tense,relative",
  "s-travel":"indirect,indirect,agreement,tense,nonfinite,modal,tense,modal,agreement,tense",
  "s-science":"relative,indirect,modal,collocation,passive,tense,indirect,nonfinite,agreement,modal",
  "s-housing":"nonfinite,indirect,modal,compare,relative,passive,agreement,tense,collocation,modal",
  "s-research":"modal,indirect,tense,nonfinite,passive,compare,relative,tense,modal,agreement"
},

sentenceSets: [
  { id:"s-campus", name:"校园生活", items:`
I'm looking for the new computer lab.|[Do you know] / which floor / it / is / on?|does|间接疑问句用陈述语序：which floor it is on，不用 which floor is it on。
The professor moved the exam to Friday.|Did / she / say / why / she / changed / [the date]?|does|Did 后接动词原形 say；why 引导的从句用陈述语序 she changed。
I can't find my student ID card.|[When was] / the last time / you / used / it?|did|the last time 后接从句 you used it，构成 When was the last time...?
The library is so crowded today.|[Would] / you / like / to study / in my room / [instead]?|studying|would like 后接不定式 to do。
How was the orientation?|[It was] / more useful / than / I / had expected.|most|比较级 more useful 与 than 搭配；had expected 表示「之前预想的」。
Are you going to the career fair?|[I haven't] / decided / whether / I / will go / [yet].|going|decided 后接 whether 引导的宾语从句；yet 用在否定句句末。
This dining hall food is getting boring.|[Have you] / tried / the new café / near / [the gym]?|try|现在完成时疑问句：Have you + 过去分词 tried。
I need someone to check my essay.|[The writing center] / can / help / you / [with that].|helps|情态动词 can 后接动词原形 help。
Why is the bookstore closed?|[The sign says] / it / will / reopen / after / [the holiday].|has|will 后接动词原形 reopen；after the holiday 作时间状语。
I missed the bus again this morning.|[How often] / does / the bus / come / [in the morning]?|comes|助动词 does 后面的动词用原形 come。
`},
  { id:"s-class", name:"课堂与学习", items:`
I didn't understand today's lecture.|[Could you] / tell me / which part / was / confusing?|did|间接疑问句 which part was confusing 中，which part 本身作主语，语序不变。
Our group project is due next week.|[Have you] / decided / who / will present / [the results]?|presenting|who 在从句中作主语，后接谓语 will present。
The reading list for this course is very long.|[You] / don't have to / read / every book / [on it].|must|don't have to 表示「不必」；must 意思相反，是干扰项。
Is the statistics class difficult?|[It is] / harder / than / the class / I took / [last year].|hardest|与 than 搭配用比较级 harder；I took last year 是修饰 the class 的定语从句。
I forgot to bring my lab notes.|[You can] / borrow / mine / if / you / [need them].|me|mine 是名词性物主代词，相当于 my notes。
Why was the seminar canceled?|[The speaker] / was not able / to travel / because of / [the storm].|because|because of 后接名词 the storm；because 后要接从句。
I think the essay is due soon.|[Do you] / remember / when / the essay / is due?|does|间接疑问句语序：when the essay is due。
I want to improve my academic writing.|[Reading] / published articles / is / a good way / [to start].|are|动名词短语 Reading published articles 作主语，谓语用单数 is。
Did you finish the chemistry homework?|[Not yet,] / the last problem / is / taking / longer than / [I expected].|take|现在进行时 is taking；longer than I expected 表示「比预想的更久」。
The professor recommended a new textbook.|[Do you know] / where / I can / buy / [a used copy]?|can I|间接疑问句用陈述语序 where I can buy，不用 where can I buy。
`},
  { id:"s-library", name:"图书馆与研究", items:`
I need sources for my history paper.|[The librarian] / can show / you / how to / search / [the database].|what|how to do 表示「如何做」；what to 后面通常接 do 之类的动词，这里不通。
This book is overdue.|[How much] / is / the fine / for / [a late book]?|does|How much is ...? 询问金额，用 be 动词。
I can't find the journal article online.|[Have you] / asked / whether / the library / has / [a print copy]?|does|whether 引导的从句用陈述语序 the library has。
My survey only got twenty responses.|[You] / might / need / a larger sample / for / [reliable results].|needing|情态动词 might 后接动词原形 need。
The study room is booked all week.|[Is there] / another place / where / we / can meet?|which|where 引导定语从句修饰地点 another place，在从句中作地点状语。
What did the experiment show?|[The results] / suggest / that / sleep / improves / [memory].|improving|that 从句需要完整的谓语 improves。
I'm not sure how to cite this website.|[The style guide] / explains / how / online sources / should be / [cited].|should|被动语态 should be cited 表示「应该被引用」。
Who wrote the report on climate change?|[It] / was written / by / a team / of / [scientists].|wrote|被动语态 was written by，表示「由……写成」。
The data you sent look strange.|[Can you] / tell me / what / looks / wrong / [with them]?|does|what 在从句中作主语，直接接谓语 looks。
I finally finished my research paper.|[When] / are you / going to / submit / it / [to the journal]?|do|be going to do 表示计划，疑问句把 are 提前。
`},
  { id:"s-work", name:"工作与实习", items:`
I just got an internship offer.|[Which company] / are / you / going to / work for?|do|be going to 的疑问句：Which company are you going to work for?
The manager wants the report by Monday.|[Would] / you / mind / helping me / with / [the last section]?|help me|Would you mind 后接动名词 doing。
How was your first day at the job?|[It was] / busier / than / I / thought / [it would be].|busiest|比较级 busier 与 than 搭配。
I'm nervous about my interview tomorrow.|[Make sure] / you / arrive / at least / ten minutes / [early].|arriving|Make sure 后接完整从句 you arrive。
Our team meeting was moved.|[Do you know] / what time / the meeting / starts / [now]?|does|间接疑问句陈述语序：what time the meeting starts。
The printer in our office is broken again.|[Has anyone] / called / the technician / to / [fix it]?|calling|现在完成时 Has anyone called；to fix it 表示目的。
I want to ask for a day off next week.|[You] / should / send / your manager / an email / [first].|sending|send sb. sth. 双宾语结构；should 后接动词原形。
The new software is hard to use.|[The company] / is planning / to offer / a training session / [next month].|offering|plan to do 表示「计划做」。
How long have you worked here?|[I have] / been working / here / since / I / [graduated].|for|since 后接时间点或从句；for 后接时间段，这里是干扰项。
Did the client like our proposal?|[She said] / it / was / exactly / what / [she needed].|that|what 引导表语从句，相当于 the thing that。
`},
  { id:"s-travel", name:"旅行与日常", items:`
I'm visiting the museum this weekend.|[Do you know] / if / it / is / open / [on Sundays]?|does|if 引导的间接疑问句用陈述语序 it is open。
My flight was delayed for three hours.|[Did] / the airline / tell you / why / it / [was delayed]?|does|Did 后接动词原形 tell；why it was delayed 为陈述语序。
I want to try some local food.|[The market] / near / the station / has / the best / [street food].|have|主语 The market 是单数，谓语用 has。
This hotel is more expensive than I expected.|[Have you] / looked / for / a cheaper place / [nearby]?|looking|现在完成时 Have you looked for。
How do I get to the national park?|[The easiest way] / is / to take / the bus / [from downtown].|takes|is to take 中不定式作表语；takes 不能直接跟在 is 后面。
I lost my umbrella on the train.|[You] / should / check / the lost and found / [at the station].|checking|should 后接动词原形 check。
We're planning a hiking trip next month.|[How many days] / are / you / planning / [to stay]?|do|现在进行时疑问句 are you planning。
The weather forecast says it will rain all week.|[Maybe] / we should / change / our plans / for / [the weekend].|changing|should 后接动词原形 change。
I just moved into a new apartment.|[What] / do you like / most / about / [your neighborhood]?|does|主语是 you，助动词用 do。
The concert tickets sold out in an hour.|[I wish] / I / had bought / mine / [earlier].|have bought|I wish 表示对过去的遗憾，用过去完成时 had bought。
`},
  { id:"s-science", name:"科学与社会", items:`
Why do some birds migrate so far?|[They] / travel / to places / where / food / is easier / [to find].|which|where 引导定语从句修饰 places，在从句中作地点状语。
Our city is planting more trees.|[Do you know] / how many / trees / they / plan to / [plant]?|do|间接疑问句陈述语序：how many trees they plan to plant。
The documentary about whales was amazing.|[I didn't know] / that / whales / could / communicate / [over long distances].|communicating|could 后接动词原形 communicate。
Electric cars are becoming popular.|[The main reason] / is / that / they / are / [cheaper to run].|because|The reason is that... 是固定搭配，不说 the reason is because。
Scientists found a new species of frog.|[Where] / was / the new species / first / [discovered]?|did|被动语态疑问句 Where was ... discovered?
The town's population has doubled.|[Many people] / have moved / here / since / the factory / [opened].|moved|since 引导的时间状语与现在完成时 have moved 连用。
I read that bees are disappearing.|[Has] / anyone / figured out / what / is causing / [the decline]?|does|what 在从句中作主语，接 is causing。
The old bridge is going to be replaced.|[The new one] / will be / strong enough / to survive / [an earthquake].|surviving|adj. + enough to do 表示「足够……以做某事」。
Why is the river so polluted?|[Waste] / from / nearby factories / has been / flowing / [into it].|have been|主语 Waste 是不可数名词，用 has been。
I'm writing a report on renewable energy.|[You] / could / compare / solar power / with / [wind power].|comparing|could 后接动词原形 compare；compare A with B。
`},
  { id:"s-housing", name:"宿舍与住房", items:`
My roommate plays music late at night.|[Have you] / asked / him / to turn / it / [down]?|turning|ask sb. to do sth.，ask 后接不定式 to turn。
I'm thinking about moving off campus next year.|[Do you know] / how much / the rent / is / [near campus]?|is the rent|间接疑问句用陈述语序 how much the rent is；干扰块 is the rent 是疑问语序。
The heater in my room isn't working.|[You should] / report / it / to / [the housing office].|reporting|情态动词 should 后接动词原形 report。
Is the new dormitory nice?|[It is] / much / bigger / than / [the old one].|biggest|与 than 搭配用比较级 bigger，much 修饰比较级。
Where did you leave the key?|[I left] / it / with / the student / who / [lives next door].|which|先行词 the student 指人，关系代词用 who。
Did they fix the elevator yet?|[It] / was / repaired / [this morning].|repairing|电梯是被修的，用被动语态 was repaired。
Everyone on our floor is complaining about the noise.|[Each of] / the students / has / signed / [the letter].|have|each of 作主语时谓语用单数 has。
How long have you lived in this building?|[I have] / lived / here / since / [last August].|for|since 接时间点 last August；for 接一段时间。
I need to buy some furniture for my apartment.|[You could] / look / for / used items / [online].|looking|could 后接动词原形 look；look for 是固定搭配。
Can I borrow your vacuum cleaner?|[Sure, but] / please / return / it / to me / [by Friday].|returning|祈使句 please return，动词用原形。
`},
  { id:"s-research", name:"研究与实验室", items:`
I can't decide on a topic for my research paper.|[Why don't you] / ask / the professor / for / [some suggestions]?|asking|Why don't you 后接动词原形 ask，用来提建议。
The lab results don't look right.|[Could you] / tell me / when / the samples / were / [collected]?|were the samples|间接疑问句用陈述语序 when the samples were collected。
Have you finished the literature review?|[Not yet. I am] / still / reading / the articles / [you sent].|read|am still reading 是现在进行时，be 后接 doing。
The experiment took longer than we planned.|[We need] / to / leave / more time / [for the next one].|leaving|need 后接不定式 to leave。
Who is analyzing the survey data?|[The data] / is being / analyzed / by / [two graduate students].|analyzing|数据是被分析的，用现在进行时的被动语态 is being analyzed。
This article is very hard to understand.|[It is] / more / technical / than / [the one we read last week].|most|与 than 搭配用比较级 more technical。
Should we include all the charts in our report?|[I think] / we / should / only include / the ones / [that support our argument].|including|should 后接动词原形 include；that 引导的定语从句修饰 the ones。
Did you hear back from the journal?|[They] / said / they / would / make / [a decision next month].|will|主句是过去时 said，从句中 will 变成 would。
I'm worried we won't get enough participants.|[We could] / offer / a small payment / to / [anyone who joins].|offering|could 后接动词原形 offer；offer sth. to sb.。
Where are the safety goggles kept?|[They are] / kept / in / the cabinet / [next to the sink].|keep|goggles 是复数，be 动词用 are；被动语态 are kept。
`}
],

emails: [
  { id:"e-library", title:"丢失图书馆的书", to:"Ms. Rivera, Library Services",
    scenario:"You borrowed a book from the university library for a class project, but you have lost it. Write an email to Ms. Rivera, the librarian in charge of book loans.",
    bullets:["Explain what happened to the book.","Ask whether you can replace the book instead of paying a fine.","Ask how and when you should pay or return the replacement."],
    model:`Dear Ms. Rivera,

I am writing about a book I borrowed from the library last month, "Climate and Civilization" by J. Harper. Unfortunately, I lost it on the bus while traveling home from campus last Friday. I contacted the bus company's lost and found office, but no one has turned it in.

I would like to take responsibility for the loss. Would it be possible for me to buy a new copy of the same edition and give it to the library instead of paying the fine?

If that is acceptable, could you let me know where I should bring the new copy and whether there is a deadline? If I need to pay instead, please tell me how to make the payment.

Thank you for your help, and I apologize for the trouble.

Best regards,
Daniel Chen`,
    phrases:["I am writing about / regarding ...","Unfortunately, ...","I would like to take responsibility for ...","Would it be possible for me to ...?","Could you let me know ...?","I apologize for the inconvenience."] },
  { id:"e-professor", title:"病假后向教授询问", to:"Professor Green",
    scenario:"You were sick and missed two classes of Professor Green's economics course, including a class where an assignment was explained. Write an email to Professor Green.",
    bullets:["Explain why you missed the classes.","Ask how you can get the materials you missed.","Request more time to finish the assignment and say how much time you need."],
    model:`Dear Professor Green,

I am a student in your Introduction to Economics class on Tuesdays and Thursdays. I am sorry that I missed class last week. I had a bad case of the flu and my doctor told me to stay home for several days.

I understand that you explained the market analysis assignment in one of the classes I missed. Could you tell me whether the lecture slides are posted online, or should I ask a classmate for their notes?

Because I lost several days of work, I would also like to ask for a short extension on the assignment. Would it be possible to submit it three days after the original deadline? I will make sure the quality of my work is not affected.

Thank you very much for your understanding.

Sincerely,
Maria Lopez`,
    phrases:["I am a student in your ... class.","I am sorry that I missed ...","I understand that ...","Would it be possible to ...?","I would like to ask for an extension on ...","Thank you very much for your understanding."] },
  { id:"e-housing", title:"宿舍暖气故障", to:"Housing Maintenance Office",
    scenario:"The heater in your dormitory room has stopped working, and the weather has turned cold. Write an email to the housing maintenance office.",
    bullets:["Describe the problem with the heater.","Explain how the problem is affecting you.","Ask when someone can come to repair it and say when you are available."],
    model:`Dear Maintenance Office,

I am writing to report a problem with the heater in my room, 314 in Maple Hall. Since Sunday night, the heater has been making a loud clicking noise, and it no longer produces any warm air, even when I turn it to the highest setting.

The temperature has dropped below freezing this week, so my room is very cold, especially at night. I have had trouble sleeping, and it is difficult to study at my desk for long periods.

Could you please tell me when a technician can come to repair the heater? I am usually in my room after 3 p.m. on weekdays and all day on Saturday. If another time works better, I can try to adjust my schedule.

Thank you for your help.

Best,
Kevin Park`,
    phrases:["I am writing to report a problem with ...","Since ..., the ... has been ...","As a result, ...","Could you please tell me when ...?","I am usually available ...","If another time works better, ..."] },
  { id:"e-friend", title:"婉拒朋友的邀请", to:"Your friend Sam",
    scenario:"Your friend Sam has invited you to a birthday dinner this Saturday, but you cannot go. Write an email to Sam.",
    bullets:["Thank Sam for the invitation.","Explain why you cannot attend.","Suggest another way or time to celebrate together."],
    model:`Hi Sam,

Thank you so much for inviting me to your birthday dinner on Saturday. It was really kind of you to think of me, and I know it will be a great evening.

Unfortunately, I won't be able to come. My cousin is getting married this weekend, and my whole family is traveling to another city for the wedding. We are leaving on Friday afternoon and won't be back until Sunday night.

I'm really sorry to miss your celebration. Would you like to have lunch together next week instead? I would love to treat you to a meal at that new Thai restaurant you mentioned. Let me know which day works best for you.

Happy early birthday!

Take care,
Lily`,
    phrases:["Thank you so much for inviting me to ...","Unfortunately, I won't be able to ...","I'm really sorry to miss ...","Would you like to ... instead?","Let me know which day works best for you.","Take care,"] },
  { id:"e-club", title:"向社团提议新活动", to:"Alex, President of the Photography Club",
    scenario:"You are a member of the university photography club. You have an idea for a new club activity. Write an email to Alex, the club president.",
    bullets:["Describe your idea for the new activity.","Explain how members would benefit from it.","Offer to help organize the activity."],
    model:`Dear Alex,

I have really enjoyed being part of the photography club this semester, and I would like to suggest a new activity for next month. My idea is to hold a one-day photo walk in the old town, followed by a small exhibition of the best photos in the student center.

I think this would benefit members in several ways. The walk would give beginners a chance to practice outdoors with more experienced members, and the exhibition would let us share our work with the rest of the university. It could also help the club attract new members.

I would be happy to help organize the event. For example, I could plan the walking route, contact the student center about the exhibition space, and design a poster.

Please let me know what you think.

Best regards,
Emma`,
    phrases:["I would like to suggest ...","My idea is to ...","I think this would benefit members in several ways.","It could also help ...","I would be happy to help ...","Please let me know what you think."] },
  { id:"e-job", title:"申请校园咖啡馆兼职", to:"Mr. Collins, Manager of the Campus Café",
    scenario:"The campus café is hiring part-time workers. Write an email to Mr. Collins, the café manager, to apply for the job.",
    bullets:["Introduce yourself and say which position you are interested in.","Describe any relevant experience or skills.","Explain when you are available to work."],
    model:`Dear Mr. Collins,

My name is Ahmed Hassan, and I am a second-year biology student. I saw the notice on the student job board that the campus café is hiring, and I would like to apply for the part-time barista position.

Last summer, I worked for three months at a coffee shop in my hometown, where I learned how to prepare different kinds of coffee and handle cash. I enjoy working with people, and I am used to staying calm and polite when the shop is busy.

My class schedule allows me to work on Monday and Wednesday afternoons from 1 p.m. to 6 p.m., as well as on Saturday mornings. I could also take extra shifts during exam weeks if needed.

Thank you for considering my application. I look forward to hearing from you.

Sincerely,
Ahmed Hassan`,
    phrases:["My name is ..., and I am ...","I would like to apply for ...","I have experience in ...","I am used to ...","My schedule allows me to ...","I look forward to hearing from you."] },
  { id:"e-group", title:"小组合作出现问题", to:"Members of your project group",
    scenario:"You are working on a group project for your sociology class. One part of the project is behind schedule, and the deadline is in two weeks. Write an email to the other members of your group.",
    bullets:["Explain your concern about the project.","Suggest how the remaining tasks could be divided.","Propose a time for the group to meet."],
    model:`Hi everyone,

I wanted to check in about our sociology project. I'm a little worried because the survey section is behind schedule. We planned to finish collecting responses last week, but we only have about thirty so far, and the presentation is due in two weeks.

To catch up, maybe we could divide the remaining work more clearly. Jenny and I could post the survey in more online groups, Marcus could start analyzing the responses we already have, and Tom could begin designing the slides.

I think it would help to meet in person to agree on the plan. Would Thursday at 4 p.m. in the library work for everyone? If not, please suggest another time.

Thanks, and I'm sure we can finish on time if we work together.

Best,
Sara`,
    phrases:["I wanted to check in about ...","I'm a little worried because ...","To catch up, maybe we could ...","I think it would help to ...","Would ... work for everyone?","If not, please suggest another time."] },
  { id:"e-park", title:"反对关闭社区公园", to:"The City Council",
    scenario:"The city council plans to close a small park near your home to build a parking lot. Write an email to the city council.",
    bullets:["Express your opinion about the plan.","Explain why the park is important to the community.","Suggest an alternative solution."],
    model:`Dear Members of the City Council,

I am writing to express my concern about the plan to close Riverside Park and replace it with a parking lot. As a resident of the neighborhood for six years, I strongly believe this would be a mistake.

The park is one of the few green spaces in our area. Every day, parents bring their children to the playground, older residents walk there in the morning, and local schools use it for science lessons about plants and birds. Losing it would make the neighborhood less healthy and less friendly.

I understand that parking is a real problem downtown. However, perhaps the city could build a multi-level parking garage on the empty lot behind the shopping center instead. This would add more spaces without taking away the park.

Thank you for considering my views.

Sincerely,
Laura Kim`,
    phrases:["I am writing to express my concern about ...","I strongly believe ...","... is one of the few ...","I understand that ... However, ...","perhaps the city could ... instead.","Thank you for considering my views."] },
  { id:"e-roommate", title:"请宿舍管理员协调室友问题", to:"Mr. Patel, Residence Hall Director",
    scenario:"You live in a university residence hall. For several weeks, your roommate has had friends visiting late at night, and you have had trouble sleeping before your morning classes. Write an email to Mr. Patel, the residence hall director.",
    bullets:["Describe the problem and how it is affecting you.","Explain what you have already tried to do about it.","Ask for a specific kind of help."],
    model:`Dear Mr. Patel,

I am writing to ask for your advice about a problem with my roommate in Room 318. For the past three weeks, she has had friends visiting until after 1 a.m. on most weeknights. Because I have classes at 8 a.m., I have been very tired, and last week I fell asleep during a lab session.

I have already spoken to her twice. She apologized; however, the visits have continued. In addition, I suggested that her friends meet in the study lounge, but that has not worked either.

Would it be possible to arrange a meeting with the three of us to agree on some quiet hours? If that does not help, I would like to know whether I could move to another room next semester.

Thank you for your time.

Best regards,
Lina Moreno`,
    phrases:["I am writing to ask for your advice about ...","For the past three weeks, ...","Because ..., I have been ...","I have already spoken to ...","Would it be possible to arrange ...?","If that does not help, I would like to know whether ..."] },
  { id:"e-internship", title:"向实习主管请假参加考试", to:"Ms. Grant, Internship Supervisor",
    scenario:"You are doing a part-time internship at a local company. You have just learned that one of your final exams is scheduled on a day when you are supposed to work. Write an email to Ms. Grant, your internship supervisor.",
    bullets:["Explain the scheduling conflict.","Suggest a way to make up the missed hours.","Ask whether your plan is acceptable."],
    model:`Dear Ms. Grant,

I hope you are well. I am writing because I have a scheduling conflict next month. The university has just announced that my statistics final exam will be held on Thursday, December 11, from 9 a.m. to noon, which is one of my regular workdays at the office.

I do not want my absence to cause problems for the team. Therefore, I would like to suggest a solution. First, I could work an extra four hours on Monday and Tuesday of that week, Second, I could come in on Saturday morning if the office is open. In addition, I will make sure the weekly sales report is finished before the exam.

Would either of these options work for you? Please let me know if you would prefer a different arrangement.

Thank you for understanding.

Sincerely,
Kevin Liu`,
    phrases:["I am writing because I have a scheduling conflict ...","which is one of my regular workdays","I do not want my absence to cause problems for ...","I would like to suggest a solution.","Would either of these options work for you?","Please let me know if you would prefer ..."] },
  { id:"e-speaker", title:"邀请教授到社团做讲座", to:"Professor Adams, Department of Environmental Science",
    scenario:"You are the president of a student environmental club. You would like Professor Adams, who teaches a popular course on climate science, to give a talk at one of your club meetings. Write an email to Professor Adams.",
    bullets:["Introduce yourself and the club.","Explain why you are inviting the professor and what the talk could be about.","Give details about the time and place, and ask about the professor's availability."],
    model:`Dear Professor Adams,

My name is Sara Kim, and I am a third-year biology student and the president of the Green Campus Club. Our club has about forty members, and we organize projects such as tree planting and recycling campaigns on campus.

I am writing because several of our members took your climate science course last year and found it inspiring. Therefore, we would be honored if you could give a short talk at one of our meetings. A topic that many members are interested in is how individual students can reduce their carbon footprint in practical ways.

Our meetings are held on Wednesdays from 6 to 7 p.m. in Room 120 of the Student Center. The talk could be about thirty minutes; however, we would be happy to adjust the length. Would any Wednesday in February be convenient for you?

Thank you for considering our invitation.

Best regards,
Sara Kim`,
    phrases:["My name is ..., and I am ...","Our club has about ... members, and we ...","We would be honored if you could ...","A topic that many members are interested in is ...","Our meetings are held on ...","Would any ... be convenient for you?"] }
],

discussions: [
  { id:"d-courses", title:"大学是否应要求跨专业选课", topic:"Education",
    professor:{ name:"Dr. Martin", post:"Many universities require students to take courses outside their major, such as science students taking art or history classes. Supporters say these courses produce well-rounded graduates. Critics say students should focus on the skills they need for their careers. What do you think? Should universities require students to take courses outside their major? Why or why not?" },
    students:[
      { name:"Claire", post:"I think these requirements are valuable. When I took a philosophy class last year, it taught me how to build an argument, and that has helped me in my engineering reports. Employers want people who can think in different ways, not just people with technical skills." },
      { name:"Andrew", post:"I disagree. College is expensive, and every course costs time and money. If I want to become a nurse, I should spend my time learning medicine. Students who are interested in other subjects can always take extra classes on their own." }
    ],
    model:`I agree with Claire that courses outside a student's major are worth requiring, although Andrew makes a fair point about cost. In my view, the biggest benefit is that these classes teach students to communicate with people from different fields. For example, a computer science student who takes a psychology course learns how real users think and behave, which can lead to better software design. Many modern problems, such as climate change, also require experts from different areas to work together. However, to address Andrew's concern, universities could limit these requirements to two or three courses and allow students to choose subjects that connect to their career goals. That way, students gain a broader perspective without wasting time or money.`,
    phrases:["I agree with ... that ..., although ... makes a fair point about ...","In my view, the biggest benefit is that ...","For example, ...","However, to address ...'s concern, ...","That way, ..."] },
  { id:"d-transport", title:"城市应投资公共交通还是道路", topic:"Urban Planning",
    professor:{ name:"Dr. Wilson", post:"Our cities are growing quickly, and traffic is getting worse. Some people believe the government should spend more money on public transportation, such as buses and subways. Others think building and widening roads is a better investment. Which approach do you think is better, and why?" },
    students:[
      { name:"Mei", post:"Public transportation is clearly better. One bus can carry fifty people, while a car usually carries one or two. If more people took the subway, there would be less traffic and less air pollution. Wider roads just encourage more people to drive." },
      { name:"Jason", post:"I think roads are more practical. Not everyone lives near a bus stop or subway station, especially people in the suburbs. Delivery trucks and emergency vehicles also need good roads. Public transportation is expensive to build and takes many years." }
    ],
    model:`Although Jason is right that roads are necessary for trucks and emergency vehicles, I believe public transportation is the better long-term investment. As Mei points out, a single subway train can move hundreds of people using much less space than cars do. My hometown is a good example. After the city opened a new subway line ten years ago, traffic on the main highway dropped noticeably, and the air quality improved. In contrast, when another city widened its roads, the new lanes filled with cars within a few years. To solve Jason's concern about people in the suburbs, cities could add express buses and park-and-ride lots near suburban stations. This combination would reduce traffic without leaving anyone behind.`,
    phrases:["Although ... is right that ..., I believe ...","As ... points out, ...","... is a good example.","In contrast, ...","To solve ...'s concern about ..., ..."] },
  { id:"d-pollution", title:"个人行动还是政府监管更能减少污染", topic:"Environmental Science",
    professor:{ name:"Dr. Ortiz", post:"This week we discussed different strategies for reducing pollution. Some people argue that the most effective approach is for individuals to change their behavior, for example by recycling or driving less. Others argue that only government regulations on industry can make a real difference. Which approach do you think is more effective? Explain your reasons." },
    students:[
      { name:"Hannah", post:"I believe government regulation matters most. Factories and power plants produce far more pollution than any single person. When the government set limits on factory emissions in my country, the rivers became much cleaner within a few years." },
      { name:"Omar", post:"I think individual action is more important. Governments only make new laws when citizens demand them. If people start recycling and using less plastic, companies will also change because they want to keep their customers happy." }
    ],
    model:`I mostly agree with Hannah that government regulation is the more effective approach, but Omar's point about public pressure is also important. The main reason I support regulation is scale. A single factory can release more pollution in a day than a family produces in years, so changing personal habits alone cannot solve the problem. For instance, many cities had serious smog until laws required cars to use cleaner fuel; individual drivers would never have made that change on their own. At the same time, Omar is right that these laws often begin with citizens. Therefore, I think individual action is most useful when it pushes governments to act, for example through voting and supporting environmental groups.`,
    phrases:["I mostly agree with ... that ..., but ...'s point about ... is also important.","The main reason I support ... is ...","For instance, ...","At the same time, ... is right that ...","Therefore, I think ..."] },
  { id:"d-remote", title:"远程办公对公司是否更好", topic:"Business",
    professor:{ name:"Dr. Lee", post:"Since 2020, many companies have allowed employees to work from home. Some managers say remote work makes employees more productive and saves money. Others believe that working in the same office leads to better teamwork and creativity. In your opinion, is remote work better for companies than office work? Why?" },
    students:[
      { name:"Lucas", post:"Remote work is better. Employees don't waste hours commuting, so they have more energy for their work. Companies can also save a lot of money on office rent. My sister's company closed half its office and became more profitable." },
      { name:"Priya", post:"I prefer office work. When I did my internship online, it was hard to ask quick questions, and I felt isolated. In an office, people share ideas naturally during lunch or in the hallway, and that is where many good ideas come from." }
    ],
    model:`Lucas makes a good point about saving time and money, but I agree with Priya that office work is better for most companies, especially for new employees. Learning a job requires constant feedback, and it is much easier to get help when you can simply walk over to a colleague's desk. When I worked part-time at a design company, I learned more from listening to conversations around me than from any formal training. However, I don't think companies have to choose only one option. A hybrid system, in which employees come to the office two or three days a week, could give workers some of the flexibility Lucas describes while keeping the teamwork that Priya values.`,
    phrases:["... makes a good point about ..., but I agree with ... that ...","Learning ... requires ...","When I ..., I learned ...","However, I don't think ... have to choose only one option.","A hybrid system, in which ..., could ..."] },
  { id:"d-museums", title:"博物馆是否应该免费", topic:"Culture and Society",
    professor:{ name:"Dr. Hughes", post:"In some countries, national museums are free for everyone, while in others visitors must buy tickets. Supporters of free museums say culture should be available to all. Others argue that ticket income is needed to protect collections and pay staff. Should museums be free? Explain your view." },
    students:[
      { name:"Sofia", post:"Museums should be free. Many families cannot afford tickets, especially for several children. When museums in my city stopped charging, the number of student visitors doubled. Culture should not be only for people with money." },
      { name:"Daniel", post:"I think a reasonable ticket price is fair. Taking care of old paintings and artifacts is very expensive. If museums are free, the government must pay for everything, and that money could be used for hospitals or schools instead." }
    ],
    model:`I understand Daniel's concern about costs, but I side with Sofia that museums should be free, at least for children and students. Museums are not just places of entertainment; they are part of education. A school trip to a history museum can make a textbook chapter come alive in a way that a lecture cannot. Sofia's example of student visitors doubling shows that ticket prices really do keep some people away. To protect the collections, museums could raise money in other ways, such as charging for special exhibitions, running gift shops, or asking visitors for voluntary donations. In this way, museums can stay open to everyone while still earning the money they need.`,
    phrases:["I understand ...'s concern about ..., but I side with ... that ...","... are not just ...; they are ...","...'s example of ... shows that ...","To ..., museums could ..., such as ...","In this way, ..."] },
  { id:"d-tablets", title:"学校是否应以平板电脑取代课本", topic:"Education Technology",
    professor:{ name:"Dr. Brown", post:"Some schools have replaced printed textbooks with tablets that contain digital books, videos, and interactive exercises. Supporters say tablets make learning more engaging and up to date. Critics worry about cost, distraction, and screen time. Should schools replace printed textbooks with tablets? Why or why not?" },
    students:[
      { name:"Ethan", post:"Yes, tablets are the future. A single tablet can hold all of a student's books, so students don't have to carry heavy bags. Digital books can also be updated immediately when new information appears, while printed books quickly become outdated." },
      { name:"Grace", post:"I'm not convinced. When I study on a screen, I am easily distracted by messages and games. Research also shows that people remember more when they read on paper. Tablets are expensive, and they break easily." }
    ],
    model:`Ethan's point about updating information is convincing, yet I share Grace's worry that tablets can distract students. In my experience, focus is the most important factor in learning. When I prepared for exams with printed notes, I could concentrate for hours, but on my laptop I kept checking messages without even noticing. That said, I don't think schools should reject technology completely. A better solution would be to keep printed textbooks for core subjects like reading and mathematics, and use tablets for activities that really need them, such as science simulations or language listening practice. Schools could also install software that blocks games and social media during class time.`,
    phrases:["...'s point about ... is convincing, yet I share ...'s worry that ...","In my experience, ...","That said, I don't think ...","A better solution would be to ...","Schools could also ..."] },
  { id:"d-space", title:"政府是否应资助太空探索", topic:"Science Policy",
    professor:{ name:"Dr. Nakamura", post:"Governments spend billions of dollars on space exploration every year. Some people believe this money would be better spent solving problems on Earth, such as poverty and disease. Others argue that space research brings important benefits. Should governments continue to fund space exploration? Why or why not?" },
    students:[
      { name:"Rachel", post:"We should focus on Earth first. Millions of people still lack clean water and basic health care. It is hard to justify sending rockets to Mars when children are hungry. The money could save many lives right now." },
      { name:"Kenji", post:"Space research helps people on Earth too. Satellites give us weather forecasts and GPS, and many medical tools were first developed for astronauts. If we stop funding space programs, we lose these discoveries." }
    ],
    model:`I agree with Kenji that governments should continue to fund space exploration, even though Rachel raises an important moral question. The key point is that space research and solving problems on Earth are not really in competition. Space programs usually receive only a small part of a national budget, and they produce benefits that help ordinary people. Satellites, for example, allow scientists to monitor droughts and warn farmers before crops fail, which directly reduces hunger. Water purification systems designed for space stations are now used in poor communities as well. Rather than cutting space programs, governments should make sure that the technology developed for space is shared widely and used to address problems like the ones Rachel mentions.`,
    phrases:["I agree with ... that ..., even though ... raises an important ...","The key point is that ...","..., for example, allow(s) ...","... as well.","Rather than ..., governments should ..."] },
  { id:"d-buildings", title:"城市应保护老建筑还是改建", topic:"History and Architecture",
    professor:{ name:"Dr. Carter", post:"As cities grow, they must decide what to do with old buildings. Some people want to preserve historic buildings because they show a city's history and character. Others believe old buildings should be replaced with modern ones that are safer and more efficient. What do you think cities should do with their old buildings?" },
    students:[
      { name:"Noah", post:"Old buildings should be protected. They tell the story of a city, and once they are destroyed, they are gone forever. Tourists come to my hometown mainly to see the old streets, and that brings money to local businesses." },
      { name:"Ava", post:"Cities need to think about the future. Many old buildings are unsafe in earthquakes and use a lot of energy. Modern buildings can house more people, which is important because housing is so expensive in big cities." }
    ],
    model:`Both Noah and Ava make strong arguments, but I believe cities should preserve their most important old buildings while modernizing them on the inside. Noah is right that historic buildings give a city its identity, and that this identity has economic value through tourism. However, Ava's safety concerns cannot be ignored. Fortunately, cities do not have to choose between the two. In Paris, for instance, many nineteenth-century apartment buildings have kept their original walls but received new heating systems, insulation, and earthquake supports. This approach protects the city's history and makes the buildings safe and efficient. Buildings that have little historical value, on the other hand, could be replaced to create more housing.`,
    phrases:["Both ... and ... make strong arguments, but I believe ...","... is right that ...","However, ...'s ... cannot be ignored.","Fortunately, ... do not have to choose between the two.","..., on the other hand, could ..."] },
  { id:"d-ai", title:"学生是否应该用 AI 工具完成作业", topic:"Education Technology",
    professor:{ name:"Dr. Hughes", post:"Artificial intelligence tools can now summarize readings, check grammar, and even write entire essays. Some instructors ban these tools completely, while others encourage students to use them as long as they explain how. What is your opinion? Should students be allowed to use AI tools for their coursework? Why or why not?" },
    students:[
      { name:"Priya", post:"I think AI tools should be allowed. Professionals in almost every field already use them at work, so students need to learn how to use them well. Banning them is like banning calculators in a math class." },
      { name:"Marcus", post:"I'm worried that students will stop thinking for themselves. If an AI writes your essay, you never practice organizing your own ideas. Assignments are supposed to help us learn, not just produce a finished product." }
    ],
    model:`I understand Marcus's concern, but I agree with Priya that AI tools should be allowed, as long as there are clear rules. The key is to separate tasks where AI supports learning from tasks where it replaces learning. For example, in my economics class last semester, our professor let us use AI to explain difficult terms in the readings, but we had to write our essays ourselves and submit our outlines first. As a result, I understood the material faster without skipping the hard part of developing my own argument. In addition, instructors could require students to describe exactly how they used AI in each assignment. That way, students would learn to use these tools responsibly, which is a skill they will definitely need after graduation.`,
    phrases:["I understand ...'s concern, but I agree with ... that ...","The key is to separate ... from ...","For example, in my ... class last semester, ...","Instructors could also require ...","That way, ..."] },
  { id:"d-tourism", title:"热门城市是否应限制游客数量", topic:"Tourism and Society",
    professor:{ name:"Dr. Reyes", post:"Some popular cities, such as Venice and Barcelona, receive millions of tourists every year. Tourism brings money and jobs, but residents complain about crowds, noise, and rising rents. A few cities have started limiting the number of visitors or charging entry fees. Should popular cities limit the number of tourists? Explain your view." },
    students:[
      { name:"Hannah", post:"Yes, I think limits are necessary. When a city becomes too crowded, it stops being a nice place to live. Local people are forced to move out because apartments are rented to tourists instead." },
      { name:"Omar", post:"I disagree. Many families depend on tourism for their income, especially restaurant and hotel workers. Limiting visitors would hurt these people. Cities should spread tourists out instead of turning them away." }
    ],
    model:`I agree with Hannah that some limits are needed, although Omar is right that tourism supports many jobs. In my opinion, the main problem is not the total number of visitors but the fact that they all arrive at the same places at the same time. For example, when I visited a famous old town two summers ago, the main square was so crowded that I could barely walk, while quieter neighborhoods nearby were almost empty. Therefore, a small daily entry fee for the busiest areas could reduce crowds, and the money could fund affordable housing for residents. In addition, cities could follow Omar's suggestion and promote less famous attractions. This combination would protect local communities without destroying the income that tourism provides.`,
    phrases:["I agree with ... that ..., although ... is right that ...","In my opinion, the main problem is not ... but ...","For example, when I visited ...","Therefore, ...","In addition, cities could follow ...'s suggestion and ..."] },
  { id:"d-grades", title:"大学是否应取消字母评分", topic:"Education",
    professor:{ name:"Dr. Kim", post:"Some universities are experimenting with replacing letter grades such as A, B, and C with a simple pass or fail system, especially in the first year. Supporters say this reduces stress and encourages students to take challenging courses. Opponents argue that grades motivate students and help employers compare applicants. Do you think universities should replace letter grades with pass or fail? Why?" },
    students:[
      { name:"Elena", post:"A pass or fail system would be great for first-year students. Many of us are adjusting to a new environment, and the pressure of grades makes it hard to explore new subjects. I would have taken a physics class if I hadn't been worried about my GPA." },
      { name:"Tyler", post:"Without grades, I think a lot of students would just do the minimum. Grades show who worked hard. Also, graduate schools and employers need a way to tell students apart." }
    ],
    model:`Although Tyler makes a fair point about motivation, I believe Elena's idea is better, at least for the first year of university. Students arrive from very different high schools, and their first semester is often more about adjusting than about showing their true ability. A pass or fail system would let them focus on learning study skills instead of worrying about every point. For example, my cousin's university uses this system for first-year courses, and she told me it encouraged her to try a computer science class, which later became her major. To address Tyler's concern, universities could return to letter grades from the second year, so graduate schools and employers would still have plenty of information to compare applicants.`,
    phrases:["Although ... makes a fair point about ..., I believe ...'s idea is better","at least for ...","A pass or fail system would let them ...","For example, my cousin's university ...","To address ...'s concern, universities could ..."] }
]
};
