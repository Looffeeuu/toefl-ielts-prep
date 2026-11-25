/* 听力题库（原创练习题，按 2026 新版托福听力题型编写）
   选择题的 opts 第一项为正确答案，显示时会打乱顺序；level：1 基础 / 2 标准 / 3 提高
   音频由浏览器朗读生成；对话中 W 为女声、M 为男声
   type：response 选回应 / main 主旨 / detail 细节 / purpose 目的 / function 说话意图 / infer 推断 / attitude 态度 / organization 组织结构 */
window.LISTENING = {

/* ---------- 听后选回应 Listen and Choose a Response：每行 = 听到的话 | 正确回应 | 干扰项1 | 干扰项2 | 干扰项3 | 解析 ---------- */
responseSets: [
  { id:"r-campus", level:1, name:"校园日常", items:`
Where can I buy a parking permit?|At the campus security office.|It costs fifty dollars.|I parked near the library.|Yes, you need a permit.|问 Where，要回答地点。注意不能用 Yes 回答特殊疑问句。
When does the library close tonight?|At midnight, as usual.|It's near the dining hall.|I closed the window.|I borrowed three books.|问 When，回答时间。close 的发音陷阱：closed the window。
Would you like to join our study group?|Sure, when do you usually meet?|I studied all night.|The group is very large this semester.|No, it was yesterday.|邀请类问题，用 Sure 接受并追问细节最自然。
Have you seen my blue notebook?|I think you left it in the lab.|Yes, the sky is blue.|I bought a new notebook.|No, I haven't seen that new movie yet.|间接回答：没有直接说 Yes/No，而是告诉对方东西可能在哪。
How long is the drive to the museum?|About forty minutes without traffic.|It's a long story.|The road is very long.|The museum opens at nine on weekdays.|How long 问时长，回答 About forty minutes。long 出现在干扰项里是重复用词陷阱。
Who's teaching the biology lab this semester?|Professor Adams, I think.|It's in Room 201.|I took biology last year.|The lab starts on Monday.|问 Who，回答人名。
Why was the meeting canceled?|The manager is sick today.|In the conference room.|Yes, it was canceled.|At three o'clock.|问 Why，回答原因。
Could you help me carry these boxes?|Of course. Where do they go?|They're very heavy boxes.|I helped him yesterday.|No, I didn't carry anything.|请求帮忙，答应并问放哪儿。
Is the cafeteria open on weekends?|Only on Saturdays.|I usually eat at noon.|Yes, the food is good.|It opened last year.|一般疑问句不一定用 Yes/No 回答，Only on Saturdays 给出了更准确的信息。
What did you think of the guest speaker?|She was really inspiring.|I'll think about it.|The talk is in the main hall.|Yes, I'm the speaker.|问看法，回答评价。think 出现在干扰项里是重复用词陷阱。
`},
  { id:"r-indirect", level:2, name:"间接回答", items:`
Did you finish the reading for Professor Lee's class?|I'm about halfway through.|Professor Lee is very strict.|Yes, I read the newspaper.|The class is on Tuesday.|没有说 No，但「读了一半」就是没读完。新版听力常考这种间接回答。
Are you coming to the concert tonight?|I wish I could, but I have to work.|The concert was great.|I play the piano.|It's at the student center, near the main gate.|I wish I could 表示委婉拒绝。
Do you know if the bookstore sells calculators?|You'd better ask at the front desk.|I know a lot about books.|I calculated it twice.|Yes, I bought a book there for my history class.|不知道答案时，建议对方去问别人，也是自然的回应。
Shouldn't we leave for the airport soon?|Our flight isn't until eight.|The airport is very crowded on holidays.|I left my bag there.|We should have flown.|否定疑问句表示「我觉得该走了」，回答「航班八点才起飞」，意思是还不用急。
Why don't we take a break?|Good idea. I'm getting tired.|Because the break was short.|Nothing is broken.|We took it yesterday.|Why don't we ... 是提建议，不是问原因，所以不能用 Because 回答。
I can't figure out how to use this printer.|Let me show you.|The printer is new.|I figured it out last week.|It prints in color.|对方遇到困难，主动提供帮助。
Isn't the assignment due tomorrow?|No, the professor gave us an extra week.|I'll sign it tomorrow.|I assigned it to Tom.|Tomorrow is the first day of the spring festival.|否定疑问句是在确认信息，直接纠正对方即可。
How was your job interview?|Better than I expected.|It's at ten tomorrow.|I interviewed a manager.|The job pays well.|问过去的经历如何，回答感受。It's at ten tomorrow 与问句的时态矛盾。
Would you mind closing the window?|Not at all. It is getting cold.|I don't mind the rain.|The window is closed on Sundays.|Yes, I'm close to the window.|Would you mind ...? 回答 Not at all 表示「不介意，愿意做」。
The lab results aren't what we expected.|Maybe we should repeat the experiment.|I expected you at noon.|The lab is on the second floor of the science building.|Yes, they're exactly right.|对陈述句的自然回应是提出下一步做法。
`},
  { id:"r-service", level:2, name:"学习与服务", items:`
Excuse me, is this seat taken?|No, go ahead.|I took the bus.|The seat is comfortable.|Yes, please sit down.|No 表示座位没人，go ahead 请对方坐。Yes, please sit down 前后矛盾。
Which bus goes to the train station?|Number 12 stops right outside.|The train leaves at noon and arrives at three.|I usually walk to school.|It's a big station.|问 Which bus，回答具体线路。
How often do you go to the gym?|Three times a week, if I can.|For about an hour.|It's next to the pool.|I went yesterday.|How often 问频率；For about an hour 回答的是时长。
What time should we meet tomorrow?|How about nine thirty?|We met last week.|At the library, near the front entrance.|It took two hours.|问时间，可以用 How about ... 提出建议。
Can I pay for this with a credit card?|Sorry, we only accept cash.|My credit card is in my other wallet.|It costs twenty dollars.|Yes, I paid yesterday.|直接回答能否刷卡。
Where did you put the report?|It's on your desk.|I wrote it last night.|It's a long report.|I'll report it to the manager.|问 Where，回答位置。report 作动词是重复用词陷阱。
Do you want to get lunch after class?|Sure, I'm starving.|I had class this morning.|Lunch is the main meal.|No, the class isn't over.|接受邀请并说明理由。
Who should I talk to about changing my major?|Your academic adviser can help.|I changed my mind.|Biology is the most popular major here.|We talked for an hour.|问 Who，回答应该找的人。
Why is the hallway so crowded?|Classes just let out.|Yes, it's very crowded.|The hallway is long.|I'm not in a hurry.|问 Why，解释原因：刚下课。
Have you registered for next semester yet?|Not yet. The system was down all day.|Next semester starts in January.|I registered the car.|Yes, I'm in the first semester.|回答没有注册并说明原因。
`},
  { id:"r-subtle", level:3, name:"语气与意图", items:`
I heard the field trip might be canceled.|Really? Who told you that?|The field is very wide.|We took a trip last summer.|Yes, it was canceled last year.|对听来的消息表示惊讶并追问来源。
You've been working on that paper for hours.|I know, but it's almost done.|The paper is very thin.|It's been an hour since lunch.|I work at the café on weekends.|对方在关心你，回应自己的进度。paper 的另一个意思（纸）是陷阱。
Wasn't Professor Kim supposed to give a talk today?|It was moved to next Thursday.|Professor Kim talks very fast.|Today is a busy day.|Yes, I'm supposed to go.|回答讲座改期，解释为什么今天没有。
I'm thinking about dropping chemistry.|Have you talked to the instructor first?|Chemistry is a science.|I dropped my phone.|I'm thinking about having pizza for lunch today.|对方说出打算，给出建议。drop 的另一个意思（掉落）是陷阱。
The new schedule should make things easier.|Let's hope so. The old one was confusing.|The schedule is on the wall.|Things are getting more expensive every single year.|I scheduled a meeting.|对对方的预期表示认同。
Do you happen to have a pen I could borrow?|Will a pencil do?|I happened to see her.|I borrowed a book.|It happens all the time.|没有笔，提出用铅笔代替，是间接回答。
Why didn't you sign up for the writing workshop?|I didn't know first-year students could join.|I signed the form yesterday.|Writing has always been my favorite subject at school.|The workshop is in Room 5.|解释没报名的原因。
It looks like it's going to rain.|Then we'd better move the picnic indoors.|It rained a lot last spring.|Look at the train.|I like the way it looks.|对天气的判断作出相应的计划。rain 和 train 发音相近。
The professor said we can choose our own topic.|That gives us a lot more freedom.|The topic was chosen last week.|The professor is choosing a new car.|I said it too.|对消息作出评价。
Should I print the handouts or send them by email?|Email is fine. It saves paper.|Yes, you should.|I sent a letter to my professor yesterday.|Hand me the paper, please.|选择疑问句（A or B）不能用 Yes 回答，要选一个。
`},
  { id:"r-dorm", level:1, name:"宿舍与生活", items:`
Where is the laundry room in this building?|It's in the basement, next to the stairs.|I washed my clothes yesterday.|The room is very clean and quiet this week.|Yes, it has a laundry room.|问 Where，回答位置。不能用 Yes 回答特殊疑问句。
How much does a meal plan cost?|About two thousand dollars a semester.|I usually plan my meals on Sunday nights.|At the dining hall.|Yes, it costs a lot.|问 How much，回答价钱。plan 一词重复出现是干扰。
Can you help me move this desk?|Sure, which side should I lift?|I moved here last year.|The desk is made of wood.|No, I didn't help him with anything last night.|请求帮忙，用 Sure 接受并问细节最自然。
What time does the bookstore open on Saturdays?|At ten, I think.|I bought two books there.|The store is across the street from the main library.|It was open yesterday.|问 What time，回答时间。
Are you going home for the holiday?|No, I'm staying on campus this year.|I went home by train.|Yes, the holiday was great, thank you for asking.|My home is in Ohio.|一般疑问句，用 No 加原因回答；注意时态，C 说的是过去。
Who's in charge of the room assignments?|You should ask the housing office.|The room is on the second floor.|I charged my phone before class.|Yes, he's in charge of everything in the building.|问 Who，回答负责的人或部门；charge 有发音陷阱。
My roommate keeps leaving the lights on.|Have you talked to her about it?|The lights are very bright in the hall.|I left early.|She is a very good friend of mine from high school.|对方抱怨，回应给出建议。
Which bus goes to the shopping center?|The number seven, I believe.|It's a big shopping center with a cinema and a lot of stores.|I went shopping.|Yes, the bus is late.|问 Which，回答具体哪一路。
Would you rather cook tonight or order pizza?|Let's order. I'm too tired to cook.|I ordered a new phone online.|Yes, I would.|Pizza is popular in many countries around the world.|选择疑问句（A or B）不能用 Yes 回答，要选一个。
I can't find my room key anywhere.|Did you check your coat pocket?|The key to success is hard work.|My room is on the third floor of the building.|I found a nice restaurant.|对方找不到钥匙，提出建议。key 的另一个意思是干扰。
`},
  { id:"r-implied", level:3, name:"言外之意", items:`
Did you enjoy the guest lecture this afternoon?|Let's just say I've heard better.|I'll enjoy the lecture very much.|The guest arrived at noon.|Yes, the lecture hall was very full this afternoon.|委婉表达不满意：I've heard better 意思是讲得一般。
Are you coming to the review session tonight?|I wouldn't miss it, with the final on Monday.|The session was reviewed last week.|I came here by bus.|No, the exam on Monday is not going to be reviewed by anyone.|wouldn't miss it 表示一定会去，并给出理由。
Could you look over my essay before I submit it?|I'm swamped today, but I could do it first thing tomorrow.|The essay was submitted online.|I looked over the hill.|Yes, it is a very long essay about the history of science.|先说明今天太忙，再提出替代时间，是委婉的有条件同意。
The printer in the lab is broken again.|That's the third time this month.|I printed my paper.|The lab is open late tonight for students who need to finish their projects.|It was broken into pieces.|对消息作出评价，暗示问题反复出现。
Shouldn't you be at work by now?|My shift was moved to the afternoon.|Yes, I should work harder.|Work is very important to me and to my family.|I worked last week.|对方暗示你迟到了，回答解释原因，属于间接回答。
I heard the chemistry exam was really difficult.|It wasn't as bad as people said.|I heard it too.|Chemistry is one of the hardest subjects for many students in my year.|The exam room is cold.|对传闻作出部分否定的回应。
Do you think the café will still be open?|Not at this hour, I'm afraid.|I think it's a nice café with good coffee and comfortable chairs.|It opened last year.|Yes, I think so too.|委婉地否定：Not at this hour。D 没有回答问题本身的判断依据。
Why don't we take a short break?|Good idea. I can't focus anymore.|Because it's broken.|We took the bus to the science building after the break.|I don't know why.|Why don't we 是提建议，不是问原因，B 和 E 都误解了意图。
I'm not sure this data supports our conclusion.|Maybe we should run the experiment again.|The data was collected.|I'm sure it will be a sunny day tomorrow afternoon.|Our conclusion is on page five.|对方表示怀疑，回应提出下一步做法。
You've been working on that problem for hours.|I know, but I'm almost there.|The problem was solved yesterday.|Hours of the library are posted near the front entrance.|I worked at a bank.|对方暗示该休息了，回答承认并表示快好了。
`}
],

/* ---------- 对话 Listen to a Conversation ---------- */
conversations: [
  { id:"c-renew", level:1, title:"在图书馆续借", script:`W: Hi, I'd like to renew these two books. They're due today.
M: Sure. Can I see your student card? Okay, this one can be renewed for two more weeks, but the other one has a hold on it. Another student requested it.
W: Oh, so I have to return it today?
M: Yes. But you could put your name on the waiting list and borrow it again later.`,
    qs:[
      { type:"detail", q:"Why can't the woman renew one of the books?", opts:["Another student has requested it.","It is already overdue.","She forgot her student card.","Books can only be renewed once."], why:"男士说 the other one has a hold on it. Another student requested it，有人预约了。" },
      { type:"infer", q:"What will the woman probably do?", opts:["Return the book and join the waiting list.","Buy her own copy of the book.","Keep both books for two more weeks without paying a fine.","Ask her professor for help."], why:"男士建议她今天还书后登记等候名单，她接下来最可能这样做。" }
    ]},
  { id:"c-dining", level:1, title:"去食堂吃饭", script:`M: Are you going to the dining hall for dinner?
W: I was, but I just remembered it closes early on Fridays.
M: Really? What time?
W: Six thirty. It's already six fifteen.
M: Then let's hurry. Or we could try the new pizza place on Main Street.
W: Let's hurry. I'm trying to save money this month.`,
    qs:[
      { type:"detail", q:"What time does the dining hall close on Fridays?", opts:["6:30","6:15","7:00","6:00"], why:"女士说 Six thirty。6:15 是当前时间，是干扰项。" },
      { type:"infer", q:"Why does the woman prefer the dining hall?", opts:["She wants to save money.","The pizza place is closed.","The food there is better.","It is closer to her room."], why:"女士最后说 I'm trying to save money this month，所以不去新开的披萨店。" }
    ]},
  { id:"c-pkg", level:1, title:"领取包裹", script:`W: Hi, I got an email saying a package arrived for me.
M: Sure. What's your room number?
W: Two oh five, Maple Hall.
M: Here it is. Just sign here, please. By the way, packages are only kept for seven days, so it's good you came quickly.
W: Thanks for letting me know.`,
    qs:[
      { type:"purpose", q:"Why does the woman go to the office?", opts:["To pick up a package.","To ask about changing to a different room.","To send a letter.","To pay a fee."], why:"开头她就说收到邮件，有她的包裹到了。" },
      { type:"detail", q:"How long does the office keep packages?", opts:["Seven days","Two days","Ten days","Until the end of the semester"], why:"男士说 packages are only kept for seven days。" }
    ]},
  { id:"c-topic", level:2, title:"向教授请教论文选题", script:`W: Professor Chen, do you have a minute? I wanted to ask about my research paper.
M: Of course. What's your topic?
W: I'm planning to write about the history of public libraries, but I'm finding too many sources.
M: That's actually a good problem to have. You might narrow it down. For example, you could focus on libraries in one city, or on one time period.
W: Maybe I could look at libraries in this city during the nineteenth century. The local archive has old records.
M: That sounds manageable, and quite original.`,
    qs:[
      { type:"purpose", q:"Why does the student go to see the professor?", opts:["To get advice about narrowing her topic.","To ask for more time to finish her paper.","To change her topic to a different subject.","To borrow books from the professor."], why:"她的问题是资料太多，教授建议缩小范围，这是对话的核心。" },
      { type:"detail", q:"What does the professor suggest?", opts:["Focusing on one city or one time period.","Finding more sources online.","Choosing a different subject.","Visiting a public library."], why:"教授说 you could focus on libraries in one city, or on one time period。" }
    ]},
  { id:"c-roommate", level:2, title:"室友之间的请求", script:`M: Hey, Sara, can I talk to you about something?
W: Sure, what's up?
M: I have an eight o'clock class this semester, so I'm going to bed around eleven. Would you mind keeping the music down after that?
W: Oh, I didn't realize. I usually study late with music on. I'll use headphones from now on.
M: Thanks. I really appreciate it.`,
    qs:[
      { type:"purpose", q:"Why does the man start the conversation?", opts:["To ask the woman to be quieter at night.","To complain that she invites friends over too often.","To borrow her headphones.","To ask about changing rooms."], why:"他早上八点有课，请对方十一点后把音乐关小。" },
      { type:"detail", q:"What does the woman agree to do?", opts:["Use headphones.","Go to bed earlier.","Study in the library.","Take an earlier class."], why:"女士说 I'll use headphones from now on。" }
    ]},
  { id:"c-refund", level:2, title:"退教材", script:`W: I bought this textbook last week, but my professor changed the reading list. Can I return it?
M: Do you have your receipt?
W: Yes, here it is.
M: Okay. Since it's been less than two weeks and the book is still in its plastic wrapping, you can get a full refund.
W: Great. Can the money go back on my card?
M: Yes. It'll take three to five business days.`,
    qs:[
      { type:"detail", q:"Why does the woman want to return the book?", opts:["Her professor changed the reading list.","The book was damaged.","She bought two copies.","It was more expensive than the same book online."], why:"开头她说 my professor changed the reading list。" },
      { type:"infer", q:"What can be inferred about the bookstore's return policy?", opts:["Unopened books returned within two weeks get a full refund.","Refunds are only given in cash.","Books cannot be returned without a student ID.","Used books can be returned at any time."], why:"店员说因为不到两周、书还没拆封，所以可以全额退款，可见这是退款条件。" }
    ]},
  { id:"c-resume", level:2, title:"修改简历", script:`M: I'd like some help with my internship applications. I've sent out ten and haven't heard back.
W: Let's look at your résumé. Hmm, it's well organized, but you list your duties instead of your achievements.
M: What do you mean?
W: Instead of "worked at a bookstore," you could write "trained five new employees." Employers want to see results.
M: That makes sense. I'll revise it tonight.`,
    qs:[
      { type:"main", q:"What is the conversation mainly about?", opts:["Improving the man's résumé.","Finding a job at a bookstore.","Training new employees.","Where to send applications."], why:"整段对话围绕怎样修改简历，书店只是例子。" },
      { type:"function", q:"Why does the woman mention \"trained five new employees\"?", opts:["To show how to describe an achievement.","To suggest he apply to a bookstore.","To describe her own experience.","To criticize his work at the bookstore."], why:"这是把「职责」改写成「成果」的示范，说明雇主想看结果。" }
    ]},
  { id:"c-abroad", level:2, title:"出国交换的顾虑", script:`M: Are you still thinking about studying in Spain next year?
W: I am, but I'm not sure my Spanish is good enough.
M: The program offers a summer language course before classes start. My cousin took it and said it helped a lot.
W: Really? That would make me feel more confident. Do you know how long it lasts?
M: Six weeks, I think. You should check the program website.`,
    qs:[
      { type:"detail", q:"What is the woman worried about?", opts:["Her Spanish ability.","The cost of the program.","Leaving her family.","Finding housing in Spain."], why:"她说 I'm not sure my Spanish is good enough。" },
      { type:"detail", q:"What does the man suggest?", opts:["Taking a summer language course.","Studying in a different country.","Asking his cousin for lessons.","Waiting another year."], why:"他提到项目开课前有暑期语言课，表姐上过觉得很有帮助。" }
    ]},
  { id:"c-swim", level:2, title:"报名游泳课", script:`M: Hi, I'd like to sign up for the swimming class.
W: Sorry, the morning class is full. There's still space in the evening class on Wednesdays.
M: Wednesday evening works for me. Do I need to bring anything?
W: Just a swimsuit and a towel. We provide the goggles.`,
    qs:[
      { type:"detail", q:"Why can't the man join the morning class?", opts:["It is already full.","It starts too early.","It has been canceled.","It is only for beginners."], why:"女士说 the morning class is full。" },
      { type:"detail", q:"What does the gym provide?", opts:["Goggles","A swimsuit","A towel","A locker key"], why:"We provide the goggles；泳衣和毛巾要自己带。" }
    ]},
  { id:"c-survey", level:3, title:"小组问卷的分歧", script:`W: I looked at the survey questions you wrote for our project. They're good, but I'm worried they're too long.
M: Too long? I wanted to get as much information as possible.
W: I understand, but people tend to quit long surveys halfway through. Then we'd end up with fewer complete answers.
M: So you think we should cut some questions?
W: Maybe keep the ten most important ones. We can always do follow-up interviews if we need more detail.
M: All right. Let's go through them together this afternoon.`,
    qs:[
      { type:"detail", q:"What is the woman's main concern?", opts:["People may not finish a long survey.","The questions are hard to understand.","Too few people will see the survey.","The project is behind schedule."], why:"她说 people tend to quit long surveys halfway through。" },
      { type:"infer", q:"What will the speakers probably do this afternoon?", opts:["Decide which questions to keep.","Conduct follow-up interviews with the participants.","Send out the survey.","Write new questions."], why:"男士最后提议下午一起把问题过一遍，也就是挑出要保留的十个。" }
    ]},
  { id:"c-makeup", level:3, title:"补做实验", script:`M: Professor Diaz, I missed the lab on Tuesday because I had a fever. Is there any way to make it up?
W: I'm sorry to hear that. Normally labs can't be repeated, because we have to prepare special materials. But there's another section on Thursday morning.
M: I have a calculus class then.
W: Hmm. Then you could watch the recorded demonstration and write a short report instead. It won't be exactly the same, but it'll count toward your grade.
M: That would be great. Thank you.`,
    qs:[
      { type:"detail", q:"Why can't the man attend the Thursday section?", opts:["He has another class at that time.","He is still sick.","The section is full.","The materials for that section are not ready yet."], why:"他说 I have a calculus class then。" },
      { type:"detail", q:"What does the professor offer?", opts:["Writing a report based on a recorded demonstration.","Repeating the lab next Tuesday.","Skipping the lab without any penalty.","Joining another professor's lab."], why:"教授说可以看录像演示并写一份短报告，也计入成绩。" }
    ]},
  { id:"c-midterm", level:3, title:"期中成绩", script:`W: I wanted to ask about my grade on the midterm. I thought my essay answer was pretty strong.
M: Let me see. Your ideas were good, but the question asked you to compare two theories, and you only discussed one in detail.
W: Oh. I guess I spent too much time on the first one.
M: It happens. On the final, try making a quick outline before you write, so you can plan your time.`,
    qs:[
      { type:"detail", q:"Why did the woman lose points?", opts:["She did not fully compare the two theories.","Her ideas were not clear.","Her answer was too short.","She misunderstood the main argument of the reading."], why:"题目要求比较两种理论，她只详细讨论了一种。" },
      { type:"detail", q:"What does the man advise her to do?", opts:["Make an outline before writing.","Study more theories.","Write longer answers.","Visit his office hours every week until the final."], why:"try making a quick outline before you write。" }
    ]},
  { id:"c-locker", level:1, title:"体育馆储物柜", script:`M: Hi, I'd like to rent a locker for the semester.
W: Sure. The small ones are twenty dollars, and the large ones are thirty-five.
M: I just need space for my shoes and a towel.
W: Then a small one is fine. You'll need to bring your own lock, though. We don't provide them.
M: Okay. I'll buy one at the bookstore and come back this afternoon.`,
    qs:[
      { type:"detail", q:"Why does the man choose a small locker?", opts:["He only needs to store a few things.","The large lockers are all taken.","He will only use it for one month.","The small ones come with a lock."], why:"I just need space for my shoes and a towel，东西不多。" },
      { type:"infer", q:"What will the man probably do next?", opts:["Buy a lock at the bookstore.","Pay thirty-five dollars for a locker.","Ask the woman for a free lock.","Leave his shoes with the woman."], why:"I'll buy one at the bookstore and come back this afternoon。" }
    ]},
  { id:"c-extension", level:2, title:"申请论文延期", script:`W: Professor Lin, do you have a minute? It's about the history paper due Friday.
M: Of course. Is there a problem?
W: I've been sick most of this week, and I haven't been able to finish my research. I was wondering if I could have a few extra days.
M: I'm sorry to hear that. I can give you until Tuesday, but I'll need a note from the health center.
W: That's no problem. I saw a doctor there on Monday.
M: Good. Just email it to me, and in the meantime, focus on getting better.`,
    qs:[
      { type:"purpose", q:"Why does the woman go to see the professor?", opts:["To ask for more time to finish a paper.","To find out what topic she should write about.","To return a book she borrowed for her research.","To explain why she missed a test on Monday."], why:"I was wondering if I could have a few extra days，来请求延期。" },
      { type:"detail", q:"What does the professor ask the woman to do?", opts:["Send him a note from the health center.","Finish the paper by Friday.","Change the topic of her paper to something easier.","Meet him again on Tuesday."], why:"I'll need a note from the health center ... Just email it to me。" }
    ]},
  { id:"c-fieldtrip", level:3, title:"地质野外考察", script:`M: Professor, I have a question about Saturday's field trip. The syllabus says it's required, but I have a job on Saturdays. I've already asked to switch shifts, and my manager said no.
W: I see. Well, the trip is required because the rock formations we'll study aren't something I can show you in class. But the graduate assistant is leading a smaller trip to the same site two weeks later, on a Sunday.
M: Oh, that would work much better.
W: Just keep in mind that the written report is still due on the original date. You'll have to work from the photos we post online.`,
    qs:[
      { type:"function", q:"Why does the man mention that he already asked to switch shifts?", opts:["To show that he has tried to solve the problem himself.","To complain that his manager is unfair.","To ask the professor to call his manager.","To explain why he was late for class."], why:"他强调已经尝试换班但被拒绝，说明自己不是不想去，而是确实没有办法。" },
      { type:"infer", q:"What will the man probably find difficult about attending the later trip?", opts:["Writing the report before he has visited the site.","Getting to the site without a car.","Finding someone to lead the Sunday trip.","Taking photos of the rock formations."], why:"报告仍然按原来的日期交，他只能先看网上的照片写，而那时他还没去过现场。" }
    ]}
],

/* ---------- 通知 Listen to an Announcement ---------- */
announcements: [
  { id:"a-library", level:1, title:"图书馆考试周开放时间", speaker:"W", script:`Attention, students. Beginning Monday, the main library will stay open twenty-four hours a day until the end of final exams. From midnight to seven a.m., only the first and second floors will be open, and you will need to show your student ID at the entrance. Group study rooms can still be reserved online.`,
    qs:[
      { type:"detail", q:"What will change beginning Monday?", opts:["The library will be open twenty-four hours a day.","The library will close at midnight.","Study rooms will no longer be available.","Final exams will be held in the library."], why:"stay open twenty-four hours a day until the end of final exams。" },
      { type:"detail", q:"What must students do to enter the library at night?", opts:["Show their student ID.","Reserve a room online.","Use the side entrance.","Sign a visitor list."], why:"you will need to show your student ID at the entrance。" }
    ]},
  { id:"a-dining", level:1, title:"食堂临时关闭", speaker:"M", script:`Good morning. Because of a water pipe repair, the North Dining Hall will be closed today from eleven a.m. to three p.m. Lunch will be served in the South Dining Hall instead, and meal plans will work there as usual. We expect the North Dining Hall to reopen in time for dinner. We apologize for any inconvenience.`,
    qs:[
      { type:"purpose", q:"What is the main purpose of the announcement?", opts:["To announce a temporary closing of a dining hall.","To announce new meal plan prices.","To introduce a new dining hall.","To ask students to report water problems in their dorms."], why:"通知的核心是北食堂今天中午临时关闭。" },
      { type:"detail", q:"Where can students eat lunch today?", opts:["In the South Dining Hall","In the North Dining Hall","At the student center","Only off campus"], why:"Lunch will be served in the South Dining Hall instead。" }
    ]},
  { id:"a-gym", level:1, title:"游泳池清洁", speaker:"W", script:`Attention, gym members. The swimming pool will be closed this weekend for cleaning. All other areas of the gym, including the weight room and the basketball courts, will be open as usual. Swimming classes scheduled for this Saturday will be moved to next Saturday.`,
    qs:[
      { type:"detail", q:"What will be closed this weekend?", opts:["The swimming pool","The weight room","The basketball courts","The whole gym"], why:"只有游泳池关闭，其他区域照常开放。" },
      { type:"detail", q:"What will happen to this Saturday's swimming classes?", opts:["They will be moved to next Saturday.","They will be canceled for the semester.","They will be held in the evening.","They will take place in another pool."], why:"will be moved to next Saturday。" }
    ]},
  { id:"a-trip", level:2, title:"野外考察提醒", speaker:"W", script:`Before we finish today, a reminder about Saturday's field trip to Pine Creek. The bus leaves from the science building at eight sharp, so please arrive by seven forty-five. Wear boots, because the trail near the creek is often muddy. I'll provide containers for the water samples. You just need to bring a notebook and a pencil, not a pen, since ink runs when it gets wet.`,
    qs:[
      { type:"detail", q:"What time should students arrive at the science building?", opts:["7:45","8:00","7:30","8:15"], why:"车八点准时出发，请在 7:45 前到。8:00 是发车时间。" },
      { type:"infer", q:"Why does the professor tell students to bring a pencil?", opts:["Ink may run if the paper gets wet.","Pens are not allowed on the bus.","Pencils are easier to share.","The containers must be labeled in pencil."], why:"since ink runs when it gets wet，在溪边纸可能被打湿。" }
    ]},
  { id:"a-shuttle", level:2, title:"校车路线调整", speaker:"M", script:`Attention, riders. Starting next week, the campus shuttle will no longer stop at the Arts Center, because of construction on Elm Street. Instead, there will be a temporary stop on Oak Avenue, about two blocks away. Shuttles will also run every fifteen minutes instead of every ten, so please plan for a little extra travel time.`,
    qs:[
      { type:"detail", q:"Why will the shuttle stop going to the Arts Center?", opts:["There is construction on the street.","The Arts Center is closing.","Too few people use that stop.","The shuttle company is changing all of its routes."], why:"because of construction on Elm Street。" },
      { type:"infer", q:"What should riders expect next week?", opts:["Longer waits between shuttles.","Free rides on weekends.","A new stop inside the Arts Center.","Shuttles running more often."], why:"班次从十分钟一班改为十五分钟一班，等车时间变长。" }
    ]},
  { id:"a-career", level:2, title:"招聘会", speaker:"W", script:`The annual career fair will be held next Thursday in the student center, from ten to four. More than fifty companies will attend, including several that hire international students. Bring printed copies of your résumé, and dress as you would for an interview. If you'd like feedback on your résumé before the fair, the career office is offering drop-in reviews this Monday and Tuesday.`,
    qs:[
      { type:"detail", q:"What does the speaker recommend students bring to the fair?", opts:["Printed copies of their résumé","A letter from a professor","Their student ID","A list of companies"], why:"Bring printed copies of your résumé。" },
      { type:"detail", q:"What is offered on Monday and Tuesday?", opts:["Résumé reviews","Interview practice","A company tour","A workshop on dressing for interviews"], why:"the career office is offering drop-in reviews this Monday and Tuesday。" }
    ]},
  { id:"a-workshop", level:2, title:"图书馆讲座", speaker:"M", script:`Are you writing a research paper this semester? The library is offering a free workshop on finding and evaluating online sources. You'll learn how to search academic databases and how to tell whether a website is reliable. The workshop takes place on Wednesday at four in Room 210. Space is limited to twenty students, so sign up at the front desk.`,
    qs:[
      { type:"main", q:"What is the announcement mainly about?", opts:["A free workshop on finding sources.","New rules for using library computers.","A change in library hours.","A research paper competition."], why:"通知介绍一场关于查找和评估网络资料的免费讲座。" },
      { type:"detail", q:"How can students take part in the workshop?", opts:["By signing up at the front desk.","By emailing the librarian.","By registering online.","By arriving early on Wednesday afternoon."], why:"sign up at the front desk；名额只有二十人。" }
    ]},
  { id:"a-project", level:3, title:"期末项目规则变化", speaker:"M", script:`I want to clarify something about the final project. Several of you asked whether you could work in groups. After thinking about it, I've decided to allow groups of up to three people. However, each person will also submit a one-page reflection describing his or her own contribution. The due date remains the same. If you prefer to work alone, that's still perfectly fine.`,
    qs:[
      { type:"purpose", q:"Why does the professor make this announcement?", opts:["To explain a change in the project rules.","To move the due date of the final project.","To require all students to work in groups.","To cancel the final project."], why:"教授宣布允许最多三人一组，这是规则的变化；截止日期不变，也不强制分组。" },
      { type:"detail", q:"What must each group member submit?", opts:["A one-page reflection on their own contribution.","A separate final project.","A list of group meeting times.","A report evaluating the work of the other group members."], why:"each person will also submit a one-page reflection describing his or her own contribution。" }
    ]},
  { id:"a-museum", level:3, title:"博物馆导览", speaker:"W", script:`Welcome to the university museum. Today's guided tour will begin in about five minutes in the main hall. The tour lasts forty-five minutes and focuses on our new exhibit of ancient pottery. Please note that photography is allowed in the permanent galleries, but not in the special exhibit, because some of the objects are sensitive to light. Lockers for bags are available near the entrance.`,
    qs:[
      { type:"detail", q:"What is the focus of today's tour?", opts:["A new exhibit of ancient pottery","The history of the university","The museum's permanent paintings","Modern photography"], why:"focuses on our new exhibit of ancient pottery。" },
      { type:"infer", q:"Why is photography not allowed in the special exhibit?", opts:["Light could damage some objects.","The objects are on loan from another museum.","The exhibit is very crowded.","Visitors must buy a special ticket."], why:"some of the objects are sensitive to light，相机闪光等光线可能造成损害。" }
    ]},
  { id:"a-housing", level:3, title:"宿舍申请截止", speaker:"M", script:`This is a reminder that applications for next year's on-campus housing are due this Friday at five p.m. Room assignments will be made by lottery, and students who submit late applications will be placed at the end of the list. If you plan to live with a specific roommate, both of you must list each other on your applications. Otherwise, roommates will be assigned randomly.`,
    qs:[
      { type:"detail", q:"What will happen to late applications?", opts:["They will be placed at the end of the list.","They will not be accepted.","They will be charged a fee.","They will be reviewed first."], why:"students who submit late applications will be placed at the end of the list。" },
      { type:"infer", q:"What must two friends do if they want to live together?", opts:["List each other on their applications.","Apply together on one form.","Visit the housing office together before Friday.","Submit their applications early."], why:"both of you must list each other on your applications，否则随机分配。" }
    ]},
  { id:"a-gym-floor", level:1, title:"健身房地板清洁", speaker:"M", script:`Hello, everyone. This is a reminder that the campus gym will be closed this Thursday for floor cleaning. It will reopen on Friday morning at six a.m. During the closure, students can use the fitness room in Baker Hall, which is open from seven a.m. to ten p.m. Please bring your student ID.`,
    qs:[
      { type:"detail", q:"Why will the gym be closed on Thursday?", opts:["The floors will be cleaned.","There will be a sports event.","The equipment will be replaced.","It is a national holiday."], why:"closed this Thursday for floor cleaning。" },
      { type:"detail", q:"Where can students exercise on Thursday?", opts:["In the fitness room in Baker Hall.","In the main gym after six p.m.","At a city sports center.","In the student center."], why:"students can use the fitness room in Baker Hall。" }
    ]},
  { id:"a-concert", level:2, title:"音乐会改地点", speaker:"W", script:`Attention, please. Tonight's student orchestra concert has been moved from the outdoor stage to Hartman Hall because of the strong winds expected this evening. The start time has not changed. It will still begin at seven thirty. Since Hartman Hall has fewer seats than the outdoor area, we recommend arriving at least twenty minutes early. Tickets already purchased will be accepted at the door.`,
    qs:[
      { type:"purpose", q:"What is the main purpose of the announcement?", opts:["To tell listeners about a change of location for a concert.","To announce that a concert has been canceled because of the weather.","To advertise tickets for a new orchestra.","To explain how to buy tickets online."], why:"通知的核心是音乐会因大风从户外舞台改到 Hartman Hall。" },
      { type:"infer", q:"Why does the speaker recommend arriving early?", opts:["There may not be enough seats for everyone.","The concert will start earlier than planned.","Tickets must be exchanged before the show.","The doors will close at seven thirty."], why:"Since Hartman Hall has fewer seats than the outdoor area，座位变少，可能坐不下。B 与 start time has not changed 矛盾。" }
    ]},
  { id:"a-chem", level:3, title:"化学课实验安排变动", speaker:"M", script:`Before we start today, a quick change to the lab schedule. Next week's experiment on reaction rates was supposed to use the new equipment in Room 310, but the installation has been delayed. So, instead of moving to the next experiment, we'll repeat last week's titration, which several of you found difficult. Those of you who already got accurate results can use the time to begin your final lab report. The reaction-rate experiment will now be held in the last week of the term.`,
    qs:[
      { type:"detail", q:"Why is the lab schedule changing?", opts:["New equipment has not been installed yet.","Room 310 is being used for an exam.","The professor will be away next week.","Too many students failed last week's experiment."], why:"the installation has been delayed，新设备还没装好。" },
      { type:"infer", q:"What will a student who got accurate titration results most likely do next week?", opts:["Start writing the final lab report.","Do the reaction-rate experiment early.","Help other students in Room 310.","Repeat the titration to check the results."], why:"Those of you who already got accurate results can use the time to begin your final lab report。" }
    ]}
],

/* ---------- 学术讲座 Listen to an Academic Talk ---------- */
talks: [
  { id:"t-moon", level:1, title:"月相的成因", topic:"Astronomy", speaker:"W", script:`Today let's talk about why the Moon seems to change shape during the month. Many people think the Earth's shadow causes these changes, but that's not correct. The Moon doesn't make its own light. It reflects light from the Sun, and half of the Moon is always lit. What changes is how much of that lit half we can see from Earth.

When the Moon is between the Earth and the Sun, the lit side faces away from us, so we see almost nothing. We call this the new moon. As the Moon moves along its orbit, we see more and more of the bright side, until about two weeks later, when the Earth is between the Sun and the Moon. Then we see the whole lit half, a full moon. After that, the visible part gets smaller again.

So what about the Earth's shadow? It does fall on the Moon sometimes, but that's a different event, a lunar eclipse. Eclipses are much rarer than full moons, because the Moon's orbit is slightly tilted, so the Sun, Earth, and Moon usually don't line up exactly.`,
    qs:[
      { type:"main", q:"What is the talk mainly about?", opts:["Why the Moon appears to change shape.","How eclipses are predicted.","Why the Moon has no light of its own.","How the Moon formed."], why:"开头就提出主题：为什么月亮在一个月中看起来会变形。" },
      { type:"detail", q:"According to the professor, what causes the phases of the Moon?", opts:["How much of the Moon's lit half can be seen from Earth.","The Earth's shadow falling on the Moon.","Changes in the amount of light that the Moon itself produces.","The Moon moving closer to the Sun."], why:"What changes is how much of that lit half we can see from Earth。" },
      { type:"function", q:"Why does the professor mention the Earth's shadow at the beginning?", opts:["To correct a common misunderstanding.","To explain how a new moon forms.","To describe a full moon.","To show that eclipses happen every month."], why:"Many people think ... but that's not correct，先指出常见误解再纠正。" },
      { type:"detail", q:"Why are lunar eclipses rarer than full moons?", opts:["The Moon's orbit is slightly tilted.","The Earth's shadow is very small.","Eclipses only happen in winter.","The Moon moves too fast."], why:"because the Moon's orbit is slightly tilted, so the Sun, Earth, and Moon usually don't line up exactly。" }
    ]},
  { id:"t-roofs", level:1, title:"城市绿色屋顶", topic:"Environmental Science", speaker:"M", script:`In cities, a lot of rainwater falls on hard surfaces like roofs and roads. Instead of soaking into the ground, it runs off quickly into drains, and during heavy storms the drains can overflow. One solution that more cities are trying is the green roof, a roof covered with soil and plants.

Green roofs help in several ways. First, the plants and soil hold rainwater, releasing it slowly, so drains are less likely to flood. Second, they keep buildings cooler in summer. A normal dark roof can get extremely hot in the sun, but plants shade the roof and release water into the air. This means people use less air conditioning. Third, green roofs provide small habitats for insects and birds in areas that have very little nature.

Of course, there are challenges. Soil full of water is heavy, so older buildings may need to be strengthened before a green roof can be added. And the plants need care, especially in the first few years. Still, many cities now offer money to building owners who install them, because the benefits for the whole community are so large.`,
    qs:[
      { type:"main", q:"What is the talk mainly about?", opts:["The benefits and challenges of green roofs.","Why city drains often overflow.","How to grow vegetables on the rooftops of city buildings.","The history of air conditioning."], why:"讲座介绍绿色屋顶的几点好处和面临的困难。" },
      { type:"detail", q:"How do green roofs reduce flooding?", opts:["They hold rainwater and release it slowly.","They send rainwater directly into nearby rivers and lakes.","They make roofs drier.","They replace city drains."], why:"the plants and soil hold rainwater, releasing it slowly。" },
      { type:"detail", q:"What is one challenge mentioned by the professor?", opts:["Older buildings may need to be strengthened.","Green roofs make buildings hotter.","Plants attract too many insects.","Green roofs are not allowed in most cities."], why:"Soil full of water is heavy, so older buildings may need to be strengthened。" },
      { type:"infer", q:"Why do many cities offer money to building owners who install green roofs?", opts:["Green roofs benefit the whole community.","Green roofs are cheap to build.","Building owners require payment for repairs.","Cities want to sell more plants."], why:"because the benefits for the whole community are so large。" }
    ]},
  { id:"t-winter", level:2, title:"动物如何过冬", topic:"Biology", speaker:"W", script:`Winter is a difficult time for animals. Food becomes scarce, and staying warm takes a lot of energy. Animals have developed three main strategies for surviving it.

The first is migration. Many birds, for example, fly south to warmer places where food is still available. Migration is expensive in terms of energy, but it allows the animals to stay active all year.

The second strategy is hibernation. Some animals, like certain bats and ground squirrels, enter a deep sleep. Their heart rate and body temperature drop dramatically, so they use very little energy and can survive on fat stored during the summer. Bears are an interesting case. They sleep through much of the winter, but their body temperature drops only a few degrees, so many scientists don't consider them true hibernators.

The third strategy is simply to stay active and adapt. Snowshoe hares grow thicker fur that turns white, which keeps them warm and hides them in the snow. Some birds that stay north, like chickadees, can even lower their body temperature at night to save energy. Each strategy has costs and benefits, and which one an animal uses depends on its body size, its diet, and where it lives.`,
    qs:[
      { type:"organization", q:"How does the professor organize the information?", opts:["By describing three different survival strategies.","By comparing animals from different continents.","By following a single animal through all four seasons.","By explaining one experiment in detail."], why:"开头说 three main strategies，然后依次讲迁徙、冬眠和保持活动。" },
      { type:"detail", q:"What happens to animals during true hibernation?", opts:["Their heart rate and body temperature drop dramatically.","They eat more food than usual.","They grow thicker fur.","They travel to warmer places where food is still available."], why:"Their heart rate and body temperature drop dramatically。" },
      { type:"function", q:"Why does the professor mention bears?", opts:["To give an example that does not fully fit the definition.","To show that large animals usually migrate.","To explain why hibernation saves energy.","To describe an animal that changes color in winter."], why:"熊整个冬天大多在睡觉，但体温只降几度，所以很多科学家不认为它们是真正的冬眠动物。" },
      { type:"infer", q:"What can be inferred about chickadees?", opts:["They save energy without leaving the north or hibernating.","They migrate south every winter.","They hibernate in groups.","Their feathers turn white in winter to hide them from predators."], why:"山雀留在北方、保持活动，并靠夜间降低体温来节省能量。" }
    ]},
  { id:"t-perspective", level:2, title:"文艺复兴的线性透视", topic:"Art History", speaker:"M", script:`If you look at European paintings from before the fifteenth century, you'll often notice that the space looks a bit flat. Buildings seem to tilt in strange directions, and people in the background can be the same size as people in the front. That changed during the Renaissance with the development of linear perspective.

Linear perspective is a mathematical system for showing depth on a flat surface. The basic idea is that parallel lines, like the edges of a road, appear to meet at a single point on the horizon, called the vanishing point. Objects also get smaller as they move toward that point. The architect Filippo Brunelleschi is usually credited with demonstrating this system in Florence in the early 1400s, and soon painters began using it.

Why did it spread so quickly? Partly because it fit the values of the time. Renaissance thinkers were very interested in studying the natural world through observation and measurement, and perspective made paintings look like accurate views of real space. It also allowed artists to guide the viewer's eye. Painters often placed the most important figure, such as Christ in a religious scene, right at the vanishing point, so all the lines in the painting lead the eye directly to it.`,
    qs:[
      { type:"main", q:"What is the main topic of the talk?", opts:["The development and appeal of linear perspective.","The life of Filippo Brunelleschi.","Why most medieval paintings showed religious scenes and figures.","How to paint roads and buildings."], why:"讲座介绍线性透视是什么、谁推广了它、为什么流行。" },
      { type:"detail", q:"According to the professor, what is a vanishing point?", opts:["The point where parallel lines appear to meet.","The largest object in a painting.","The edge of a painting.","The place where the artist stands."], why:"parallel lines ... appear to meet at a single point on the horizon, called the vanishing point。" },
      { type:"function", q:"Why does the professor describe paintings from before the fifteenth century?", opts:["To show the problem that perspective helped solve.","To argue that earlier art was more beautiful.","To explain how Brunelleschi learned to paint in Florence.","To describe a famous religious painting."], why:"先描述早期画作空间扁平，引出文艺复兴时期透视法带来的改变。" },
      { type:"infer", q:"Why might a painter place an important figure at the vanishing point?", opts:["To draw the viewer's attention to that figure.","To make the figure look smaller.","To hide the figure from the viewer.","To follow a rule that the church set for religious paintings."], why:"all the lines in the painting lead the eye directly to it，可以引导观者的视线。" }
    ]},
  { id:"t-coffee", level:2, title:"从咖啡价格看供求", topic:"Economics", speaker:"W", script:`Let's apply supply and demand to a real example: coffee. A few years ago, a severe drought in Brazil, the world's largest coffee producer, damaged a large part of the harvest. So what happened to prices?

With less coffee available, the supply curve shifted to the left. But people's desire for coffee didn't change much. Coffee is something many people drink every day, so demand is fairly inelastic. That means people keep buying it even when the price rises. When supply falls and demand stays about the same, the result is a sharp increase in price, and that's exactly what we saw. Wholesale coffee prices rose by more than fifty percent within a few months.

Now, here's an interesting part. Higher prices also changed the behavior of producers in other countries. Farmers in Vietnam and Colombia, seeing the high prices, planted more coffee trees. But coffee trees take three to four years to produce beans, so this new supply arrived much later. By the time it reached the market, Brazil's harvest had recovered, and prices fell again, in some cases below their original level. Economists call this kind of delayed reaction a lag, and it explains why prices for many crops rise and fall in cycles.`,
    qs:[
      { type:"main", q:"What is the talk mainly about?", opts:["How supply and demand explain changes in coffee prices.","Why Brazil grows so much coffee.","How to start a coffee farm.","Why people drink coffee every day."], why:"讲座用巴西干旱的例子说明供求如何影响咖啡价格。" },
      { type:"detail", q:"Why did coffee prices rise sharply after the drought?", opts:["Supply fell while demand stayed about the same.","Demand for coffee increased quickly.","Farmers in Vietnam and Colombia stopped growing coffee.","The government raised taxes on coffee."], why:"When supply falls and demand stays about the same, the result is a sharp increase in price。" },
      { type:"detail", q:"What does the professor mean by inelastic demand?", opts:["People keep buying a product even when its price rises.","People quickly stop buying a product as soon as its price rises.","Demand changes every season.","Demand depends only on supply."], why:"demand is fairly inelastic. That means people keep buying it even when the price rises。" },
      { type:"infer", q:"Why did coffee prices eventually fall below their original level?", opts:["New supply arrived after Brazil's harvest had already recovered.","People stopped drinking coffee.","Brazil had another drought.","Coffee trees grew faster than expected."], why:"新种的咖啡树三四年后才结果，那时巴西已经恢复，供给过剩导致价格下跌。" }
    ]},
  { id:"t-spacing", level:3, title:"记忆的间隔效应", topic:"Psychology", speaker:"M", script:`Imagine two students preparing for a vocabulary test. Both study for three hours in total. The first student studies for three hours the night before the test. The second studies for one hour on three different days. Who remembers more a month later? Research says the second student, often by a wide margin. This is called the spacing effect.

The spacing effect was first described in the 1880s by the German psychologist Hermann Ebbinghaus, who tested his own memory using lists of nonsense syllables. Since then, it has been found again and again, with children and adults, and with all kinds of material, from foreign words to medical facts.

Why does spacing work? One explanation is that when you return to material after a gap, you have partly forgotten it, so your brain has to work harder to retrieve it. That effort strengthens the memory. When you study everything at once, the information feels familiar, which can make you think you've learned it well, when in fact the memory is weak.

That last point matters, because students often prefer cramming. It feels productive, and it can even produce good results on a test the next morning. The problem is that most of that knowledge disappears quickly. If the goal is long-term learning, spreading study sessions out is far more effective.`,
    qs:[
      { type:"main", q:"What is the main idea of the talk?", opts:["Spreading out study sessions improves long-term memory.","Nonsense syllables are useful for learning languages.","Students should study for three hours a day.","Memory gets weaker as people grow older, no matter how they study."], why:"讲座的中心是间隔效应：分散学习对长期记忆更有效。" },
      { type:"function", q:"Why does the professor begin by describing two students?", opts:["To introduce the spacing effect with a concrete example.","To show that some students study harder than others.","To describe an experiment that Ebbinghaus did with nonsense syllables.","To explain how vocabulary tests are graded."], why:"用两个学生的对比引出间隔效应这一概念。" },
      { type:"detail", q:"According to one explanation, why does spacing strengthen memory?", opts:["Retrieving partly forgotten information takes effort.","The brain needs more sleep to learn.","Information studied once feels unfamiliar.","Short sessions are less boring."], why:"your brain has to work harder to retrieve it. That effort strengthens the memory。" },
      { type:"attitude", q:"What is the professor's attitude toward cramming?", opts:["It can help in the short term but not in the long term.","It is the most effective method for most students before a test.","It should be used together with spacing every day.","It has no effect at all on test results."], why:"他承认临时抱佛脚可能让第二天考得不错，但知识很快遗忘，不利于长期学习。" }
    ]},
  { id:"t-caves", level:3, title:"石灰岩洞穴的形成", topic:"Geology", speaker:"W", script:`Most of the world's large caves form in limestone, and the key ingredient is surprisingly ordinary: rainwater. As rain falls through the air and then soaks through soil, it picks up carbon dioxide and becomes a weak acid, carbonic acid. Limestone is made mostly of calcium carbonate, which this acid can slowly dissolve.

The process usually begins along cracks in the rock. Water flows through these cracks and gradually widens them. Over thousands of years, small channels become passages, and passages can become huge chambers. Caves often form near the water table, the level below which the ground is full of water, because that's where the acid has the most contact with the rock.

Then something interesting happens. If the water table drops, perhaps because a nearby river cuts deeper into its valley, the cave fills with air. Now the process partly reverses. Water dripping from the ceiling releases carbon dioxide into the cave air, and as it does, it can no longer hold as much dissolved calcium carbonate. The mineral is deposited again, forming stalactites hanging from the ceiling and stalagmites rising from the floor. So the same chemistry that hollows out a cave also decorates it.`,
    qs:[
      { type:"main", q:"What is the talk mainly about?", opts:["How limestone caves and their formations develop.","Why rivers cut deep valleys.","How to find caves by using maps of the local water table.","The difference between limestone and other rocks."], why:"讲座讲洞穴如何在石灰岩中形成，以及钟乳石和石笋如何形成。" },
      { type:"detail", q:"What makes rainwater able to dissolve limestone?", opts:["It picks up carbon dioxide and becomes a weak acid.","It contains large amounts of salt.","It is warmed by the soil.","It mixes with calcium carbonate."], why:"it picks up carbon dioxide and becomes a weak acid, carbonic acid。" },
      { type:"detail", q:"Why do caves often form near the water table?", opts:["The acid has the most contact with the rock there.","The rock there is softer than elsewhere.","Air can reach the rock more easily near the water table.","Rivers flow on top of the water table."], why:"because that's where the acid has the most contact with the rock。" },
      { type:"infer", q:"What does the professor mean when she says the same chemistry also decorates the cave?", opts:["The same process in reverse forms stalactites and stalagmites.","Acid in the water stains the cave walls in many different colors.","Rainwater cleans the cave after it forms.","Visitors add decorations to caves."], why:"水释放二氧化碳后，碳酸钙重新沉积，形成钟乳石和石笋，就像是「装饰」了洞穴。" }
    ]},
  { id:"t-creole", level:3, title:"皮钦语与克里奥尔语", topic:"Linguistics", speaker:"M", script:`When people who don't share a language need to communicate regularly, for example in trade, they often develop a simplified language called a pidgin. A pidgin usually takes most of its words from one language, often the language of the more powerful group, but its grammar is very reduced. There may be no verb endings, few words for time, and a small vocabulary. Importantly, a pidgin has no native speakers. Everyone who uses it has another first language.

Now, something remarkable happens when children grow up hearing a pidgin as their main language. Within a generation or two, it becomes a full language with consistent grammar, ways to show past and future, and a much larger vocabulary. At this point we call it a creole. Haitian Creole, which developed from French and several West African languages, is a well-known example and today has millions of native speakers.

Linguists find creoles especially interesting because they seem to show how children build grammar. Different creoles around the world, which developed from very different languages, often share similar grammatical features. Some researchers argue that this reflects a basic human ability to create structure in language, although others think the similarities can be explained by the languages that originally came into contact.`,
    qs:[
      { type:"main", q:"What is the talk mainly about?", opts:["How pidgins develop into creoles.","The history of the French language.","Why trade requires a common language.","How children learn to read."], why:"讲座从皮钦语讲到它如何在下一代变成克里奥尔语。" },
      { type:"detail", q:"What is one feature of a pidgin?", opts:["It has no native speakers.","It has a very large vocabulary.","It has complex verb endings.","It is learned by children as a first language."], why:"a pidgin has no native speakers。" },
      { type:"function", q:"Why does the professor mention Haitian Creole?", opts:["To give an example of a creole with many native speakers.","To show that creoles only come from French.","To compare it with a pidgin used in trade.","To explain why creoles disappear."], why:"is a well-known example and today has millions of native speakers，用来举例。" },
      { type:"attitude", q:"What does the professor suggest about the explanation for similarities among creoles?", opts:["Researchers do not fully agree about it.","It has been proven by recent experiments.","It is not important to linguists.","It shows that all creoles come from one language."], why:"Some researchers argue ..., although others think ...，说明学者之间存在争议。" }
    ]},
  { id:"t-tea", level:1, title:"茶叶的加工", topic:"Agriculture", speaker:"W", script:`Today I want to talk about tea. Here's something that surprises a lot of people: green tea, black tea, and oolong tea all come from the same plant. The difference is not the plant but what happens to the leaves after they're picked.

The key process is called oxidation. When a fresh tea leaf is cut or crushed, chemicals inside it react with oxygen in the air, and the leaf slowly turns brown. It's similar to what happens when you cut an apple and leave it on the table.

For black tea, producers roll the leaves to break them and then let them oxidize fully, which gives the tea its dark color and strong flavor. For green tea, they do the opposite. They heat the leaves soon after picking, either by steaming or by pan-frying, and the heat stops oxidation. That's why green tea stays green and tastes lighter. Oolong is in between. The leaves are allowed to oxidize only partly before they're heated.

So when you choose a tea, you're really choosing how much the leaves were allowed to oxidize.`,
    qs:[
      { type:"main", q:"What is the talk mainly about?", opts:["How processing creates different types of tea.","Where the best tea plants are grown.","Why tea is healthier than coffee.","How tea became popular around the world."], why:"讲座说明三种茶来自同一种植物，区别在于采摘后的加工，尤其是氧化程度。" },
      { type:"function", q:"Why does the professor mention a cut apple?", opts:["To give a familiar example of oxidation.","To compare the flavor of apples and tea.","To explain how tea leaves are cut.","To suggest a way to store tea."], why:"It's similar to what happens when you cut an apple，用日常现象解释氧化。" },
      { type:"detail", q:"How do producers stop oxidation in green tea?", opts:["By heating the leaves soon after picking.","By rolling the leaves for a long time.","By keeping the leaves in a cold room.","By picking the leaves at night."], why:"They heat the leaves soon after picking ... and the heat stops oxidation。" },
      { type:"infer", q:"What can be inferred about oolong tea?", opts:["Its color and flavor are between those of green and black tea.","It is made from a different plant.","It is not heated at any stage.","It oxidizes more than black tea."], why:"Oolong is in between，部分氧化后再加热，所以颜色和味道介于两者之间。" }
    ]},
  { id:"t-trust", level:2, title:"陌生人之间的信任", topic:"Economics", speaker:"M", script:`Last time we talked about markets between people who know each other, like neighbors in a village. Today I want to ask a harder question: how do strangers learn to trust each other enough to trade?

Think about buying something online from a seller you've never met. You send money first and hope the item arrives. Why would anyone take that risk? One answer is reputation systems, the ratings and reviews that buyers leave. A seller with hundreds of positive reviews has a strong reason to stay honest, because one bad experience can damage future sales.

Now, this idea isn't new. In the eleventh century, a group of Mediterranean traders, known as the Maghribi traders, faced the same problem. They sent goods to agents in distant ports and couldn't watch what those agents did. So they shared information through letters. If an agent cheated one merchant, word spread, and no one in the group would hire him again.

What's interesting is that both systems depend on the same thing. Not on laws or courts, but on information flowing between people. Of course, reputation systems have weaknesses. Reviews can be faked, and new sellers find it hard to get started. We'll look at some solutions next week.`,
    qs:[
      { type:"main", q:"What is the talk mainly about?", opts:["How reputation helps strangers trust each other in trade.","Why online shopping has become more popular than shopping in stores.","The history of trade in the Mediterranean.","How courts settle disputes between traders."], why:"讲座的问题是陌生人如何建立信任，答案是声誉机制，古今两例都在说明这一点。" },
      { type:"organization", q:"How does the professor develop his point about reputation?", opts:["He connects a modern example with a historical one.","He lists the advantages of several types of laws.","He describes an experiment and its results.","He compares two online companies."], why:"先讲网购评价，再讲十一世纪地中海商人，说明两者依赖同一机制。" },
      { type:"detail", q:"What happened to an agent who cheated a Maghribi trader?", opts:["Other members of the group refused to hire him.","He was taken to court in a distant port.","He had to pay back twice the value of the goods.","He lost his letters of introduction."], why:"word spread, and no one in the group would hire him again。" },
      { type:"attitude", q:"What is the professor's attitude toward reputation systems?", opts:["He thinks they are useful but have limitations.","He believes they have replaced the need for laws completely.","He thinks they are too new to evaluate.","He believes they work better online than offline."], why:"Of course, reputation systems have weaknesses，指出伪造评价和新卖家起步难的问题，态度是肯定但有保留。" }
    ]},
  { id:"t-sleep", level:3, title:"鸟类的单半球睡眠", topic:"Biology", speaker:"W", script:`We usually think of sleep as an all-or-nothing state. Either your brain is asleep or it's awake. But some animals have found a way around that, through what's called unihemispheric sleep, sleeping with one half of the brain at a time.

This has been well documented in dolphins. A dolphin has to come to the surface to breathe, so it can't simply become unconscious for hours. Instead, one hemisphere of its brain sleeps while the other stays alert, and the eye connected to the waking side stays open.

Birds do this too, and one study of ducks showed something remarkable. Researchers placed ducks in a row and found that the ducks at the ends of the row slept with one eye open more often than the ducks in the middle. And the open eye tended to face outward, away from the group, toward where a predator would come from. So the birds seemed to adjust how much of their brain was sleeping depending on how risky their position was.

More recently, scientists have recorded frigate birds sleeping in flight, mostly one hemisphere at a time, for only about forty minutes a day. Now, whether humans have any version of this is still debated. There's some evidence that on the first night in a new place, one side of our brain sleeps less deeply, which might explain why people often sleep poorly in hotels.`,
    qs:[
      { type:"main", q:"What is the talk mainly about?", opts:["Animals that can sleep with one half of the brain at a time.","Why dolphins need to breathe air.","How predators hunt ducks at night.","Why people sleep poorly when they travel."], why:"讲座围绕单半球睡眠展开，举了海豚、鸭子和军舰鸟的例子。" },
      { type:"detail", q:"What did the study of ducks show?", opts:["Ducks at the ends of a row kept one eye open more often.","Ducks in the middle of a row slept less than the others.","Ducks closed both eyes when predators were near.","Ducks slept only while flying."], why:"the ducks at the ends of the row slept with one eye open more often，而且睁着的眼睛朝外。" },
      { type:"infer", q:"What does the duck study suggest about unihemispheric sleep?", opts:["Animals can control it depending on the level of danger.","It happens only in water birds.","It is caused by being in a group.","It makes animals sleep more deeply."], why:"the birds seemed to adjust how much of their brain was sleeping depending on how risky their position was。" },
      { type:"attitude", q:"What is the professor's view of the evidence about humans?", opts:["It is interesting, but the question is not settled.","It clearly proves that humans have unihemispheric sleep.","It is based on experiments that were done incorrectly.","It shows that hotels should be made quieter."], why:"whether humans have any version of this is still debated ... might explain，用词谨慎，说明尚无定论。" }
    ]}
]
};
