/* 雅思听力题库（原创练习题，按雅思听力四个部分的形式编写，不是考试真题）
   每套 4 个部分、每部分 10 题，共 40 题。录音由浏览器朗读；speakers 指定每个说话人的声音：W 女声、M 男声，W2 / M2 为同性别的第二个人。
   script 每行「说话人: 内容」。题组格式与雅思阅读相同（gap 填空 · mcq 单选 · match 配对），label 是表格或笔记里的小标题。 */
window.IELTS_LISTENING = [

{ id:"l-t1", name:"练习一", parts:[

{ part:1, title:"游泳课报名", intro:"You will hear a telephone conversation between a receptionist at a leisure centre and a man who wants to join a swimming course.",
  speakers:{ Amy:"W", Daniel:"M" },
  script:`Amy: Good morning, Riverside Leisure Centre, Amy speaking. How can I help you?
Daniel: Hello. I'm calling about the adult swimming courses. I picked up a leaflet about them at the library last week.
Amy: Of course. Are you interested in the beginners' course or the improvers' course?
Daniel: Improvers, I think. I can swim, but not very well. I can manage about two lengths of the pool before I need a rest.
Amy: Then the improvers' course would suit you. Let me check the day. It runs on Tuesday evenings. Oh, sorry, I'm looking at last term's timetable. This term it's on Thursdays, from seven to eight.
Daniel: Thursday is fine for me.
Amy: Good. Can I take some details? What's your name, please?
Daniel: Daniel Harwood.
Amy: Could you spell your surname for me?
Daniel: Yes, it's H, A, R, W, O, O, D.
Amy: Thank you. And your address?
Daniel: It's forty-two Mill Lane. Oh, wait, sorry, I've just moved. It's fourteen Station Road now.
Amy: Fourteen Station Road. And how did you hear about the course? You said a leaflet?
Daniel: That's right. I found it in the library.
Amy: Lovely. Now, the course lasts ten weeks. Last year it was only eight, but we found that people needed a bit more time.
Daniel: Ten weeks sounds good. How much does it cost?
Amy: The full price is ninety-five pounds, but members of the centre get ten pounds off. Are you a member?
Daniel: Yes, I joined the gym in March.
Amy: Then it's eighty-five pounds for you.
Daniel: Great. Is there anything I need to bring?
Amy: You'll need a swimming cap, and you'll also need a padlock for the lockers in the changing room. We used to lend them out, but too many went missing.
Daniel: OK, a padlock. Should I arrive early on the first day?
Amy: Yes, please come fifteen minutes before the start. The instructor will want to see everyone swim a short distance so that she can check your level.
Daniel: Fine. And where's the best place to park? The car park at the front is always full in the evening.
Amy: That's true. I'd suggest the car park behind the cinema. It's free after six o'clock, and it's only a two-minute walk.
Daniel: Behind the cinema, OK. And who's the instructor?
Amy: Her name's Rosa Keller. That's K, E, L, L, E, R. She's been teaching here for years, and she's very patient.
Daniel: That's reassuring. Thanks very much for your help.
Amy: You're welcome, Daniel. See you on Thursday.`,
  groups:[
    { type:"gap", instr:"Complete the form below.", limit:"Write ONE WORD AND/OR A NUMBER for each answer.", maxWords:1, heading:"Riverside Leisure Centre: course booking", items:[
      { q:"Course: Improvers' swimming, every ___ evening", a:["Thursday","Thursdays"], why:"先说 Tuesday，随即更正：This term it's on Thursdays。" },
      { q:"Name: Daniel ___", a:["Harwood"], why:"拼写 H-A-R-W-O-O-D。" },
      { q:"Address: ___ Station Road", a:["14","fourteen"], why:"先说 42 Mill Lane，又更正为刚搬到的 fourteen Station Road。" },
      { q:"Heard about the course from: a leaflet in the ___", a:["library"], why:"I picked up a leaflet ... at the library。" },
      { q:"Length of course: ___ weeks", a:["10","ten"], why:"the course lasts ten weeks，去年才是 8 周。" },
      { q:"Cost for members: £___", a:["85","eighty-five","eighty five"], why:"原价 95 镑，会员减 10 镑，所以是 85 镑。" },
      { label:"Other information" },
      { q:"Bring a swimming cap and a ___ for the lockers", a:["padlock"], why:"you'll also need a padlock for the lockers。" },
      { q:"Arrive ___ minutes early on the first day", a:["15","fifteen"], why:"please come fifteen minutes before the start。" },
      { q:"Parking: use the car park behind the ___", a:["cinema"], why:"I'd suggest the car park behind the cinema。门口的停车场晚上总是满的。" },
      { q:"Instructor: Rosa ___", a:["Keller"], why:"拼写 K-E-L-L-E-R。" }
    ]}
  ]},

{ part:2, title:"自然保护区开放日", intro:"You will hear a ranger giving information to visitors at a nature reserve open day.",
  speakers:{ Tom:"M" },
  script:`Tom: Good morning, everyone, and welcome to the Greenfield Nature Reserve open day. My name's Tom, and I'm one of the rangers here. Before you set off, I'd like to give you some information about the reserve and about today's activities.
Tom: The reserve was created in 1985 on land that used to be a gravel quarry. When the quarrying stopped, the pits filled with water and gradually became lakes, which is why we have so many water birds today. The land is owned by the local council, but the reserve is managed by a charity, the Greenfield Trust, and most of the work is done by volunteers.
Tom: We've had a busy year. Last winter we planted over two thousand trees along the northern boundary, and in the spring we finished a new boardwalk across the wet meadow, so that visitors can now walk through it without damaging the plants. Our biggest project, though, has been repairing the main bird hide, which was damaged by storms two years ago. It reopened last month.
Tom: Now, a few rules. Dogs are welcome on the main paths, but they must be kept on a lead at all times, because many birds nest on the ground. Cycling is allowed only on the outer track. And please don't feed the ducks. Bread is actually bad for them.
Tom: Let me tell you what's happening around the reserve today. If you start here at the Visitor Centre, you'll find a children's quiz. Children collect a sheet here, answer the questions as they walk around, and get a badge when they bring it back. At the Lake Hide, one of our volunteers will be helping people to identify the birds. There are telescopes you can borrow, so you don't need your own binoculars.
Tom: Along the Woodland Trail, there's a guided walk at eleven and again at two, where you can learn how to recognise different trees from their leaves and bark. Down by the pond in the Meadow, we'll be doing pond dipping, so if you'd like to see what lives under the water, head down there. Nets and trays are provided. And finally, at the Picnic Area, our local beekeepers are offering free tea and coffee.
Tom: Unfortunately, the talk about bats, which was advertised in the newspaper, has had to be cancelled because the speaker is ill. We hope to arrange it for September instead. The reserve closes at five, and the café shuts half an hour earlier. Enjoy your day.`,
  groups:[
    { type:"mcq", instr:"Choose the correct letter, A, B or C.", items:[
      { q:"Before it became a reserve, the land was", opts:["farmland.","a quarry.","a forest."], a:1, why:"land that used to be a gravel quarry。" },
      { q:"Who manages the reserve?", opts:["the local council","a private company","a charity"], a:2, why:"土地属于市议会，但 the reserve is managed by a charity。" },
      { q:"Which project was completed most recently?", opts:["the tree planting","the new boardwalk","the repairs to the bird hide"], a:2, why:"植树在去年冬天，木栈道在春天完成，观鸟屋 reopened last month。" },
      { q:"Visitors with dogs must", opts:["keep them on a lead.","stay on the outer track.","leave them at the Visitor Centre."], a:0, why:"they must be kept on a lead at all times。外圈小路是给骑车的。" },
      { q:"Visitors are asked not to", opts:["pick any flowers.","feed the ducks.","bring bicycles."], a:1, why:"please don't feed the ducks。骑车可以在外圈小路上。" }
    ]},
    { type:"match", instr:"What activity is available at each of the following places today? Choose FIVE answers from the box and write the correct letter, A–F.",
      options:[["A","help with identifying birds"],["B","a quiz for children"],["C","a walk to learn about trees"],["D","pond dipping"],["E","free drinks"],["F","a talk about bats"]], items:[
      { q:"Visitor Centre", a:"B", why:"start here at the Visitor Centre, you'll find a children's quiz。" },
      { q:"Lake Hide", a:"A", why:"one of our volunteers will be helping people to identify the birds。" },
      { q:"Woodland Trail", a:"C", why:"guided walk ... learn how to recognise different trees。" },
      { q:"Meadow", a:"D", why:"Down by the pond in the Meadow, we'll be doing pond dipping。" },
      { q:"Picnic Area", a:"E", why:"beekeepers are offering free tea and coffee。F 蝙蝠讲座已经取消。" }
    ]}
  ]},

{ part:3, title:"城市噪音调查项目", intro:"You will hear two students, Hannah and Jake, talking to their tutor about a project on noise in cities.",
  speakers:{ "Dr Morris":"W2", Hannah:"W", Jake:"M" },
  script:`Dr Morris: So, Hannah and Jake, how's your project on urban noise going?
Hannah: Quite well, I think. We've collected most of our data now. We measured noise levels at twelve locations around the city centre, at three different times of day.
Dr Morris: Twelve? I thought you were planning twenty.
Jake: We were, but it took much longer than we expected. Each measurement had to last fifteen minutes to be reliable, so we reduced the number.
Dr Morris: That's sensible. Quality matters more than quantity. What equipment did you use in the end?
Hannah: We'd planned to use a phone app, but when we tested it against the department's sound meter, the readings were quite different. So we borrowed the sound meter instead.
Dr Morris: Good decision. And what did you find?
Jake: Well, the noisiest place was the bus station, which wasn't surprising. What did surprise us was that the shopping street was almost as loud, even though traffic isn't allowed there. Most of the noise came from music played by shops and street performers.
Dr Morris: Interesting. Did you also do the survey of residents?
Hannah: Yes. We got eighty responses. The main complaint wasn't traffic, as we'd expected. It was noise from delivery lorries early in the morning.
Dr Morris: That's a useful finding. Now, let's think about your report. How are you going to organise it?
Jake: We thought we'd start with the literature review, then the methods, results and recommendations.
Dr Morris: Fine. For the literature review, keep it short. Two pages is enough. Focus on studies about the effects of noise on health.
Hannah: OK. In the methods section, should we include photos of the locations?
Dr Morris: I'd put the photos in an appendix. They take up too much space in the main text. But do include a map in the methods section, showing where you took the measurements.
Jake: Right. For the results, we were going to present everything in tables.
Dr Morris: Tables are fine for the exact figures, but a graph would show the pattern through the day much more clearly. Use both.
Hannah: And the recommendations? We had quite a lot of ideas.
Dr Morris: Choose the three strongest and explain them properly, rather than listing ten briefly. And make sure each one is linked to your own data.
Jake: That makes sense. When do you need the draft?
Dr Morris: By the end of next week, please. Then I can give you feedback before the final deadline.`,
  groups:[
    { type:"mcq", instr:"Choose the correct letter, A, B or C.", items:[
      { q:"Why did the students measure noise at fewer locations than planned?", opts:["The equipment was not always available.","Each measurement took a long time.","Some locations were unsafe."], a:1, why:"Each measurement had to last fifteen minutes to be reliable, so we reduced the number。" },
      { q:"Why did they decide not to use a phone app?", opts:["Its readings were different from the sound meter's.","It was too expensive.","It was difficult to use."], a:0, why:"when we tested it against the department's sound meter, the readings were quite different。" },
      { q:"What surprised the students about the shopping street?", opts:["It was quieter than they expected.","It had more traffic than they thought.","It was nearly as noisy as the bus station."], a:2, why:"the shopping street was almost as loud, even though traffic isn't allowed there。" },
      { q:"What did residents complain about most?", opts:["traffic noise","early morning deliveries","music from shops"], a:1, why:"The main complaint wasn't traffic ... It was noise from delivery lorries early in the morning。" },
      { q:"What does the tutor say about the literature review?", opts:["It should focus on effects on health.","It should be at least five pages long.","It should include studies from other countries."], a:0, why:"Focus on studies about the effects of noise on health；长度两页就够。" }
    ]},
    { type:"match", instr:"What does the tutor advise about each of the following? Choose FIVE answers from the box and write the correct letter, A–F.",
      options:[["A","put it in an appendix"],["B","use both tables and a graph"],["C","limit it to two pages"],["D","include a map"],["E","select the three best"],["F","ask residents to check it"]], items:[
      { q:"the literature review", a:"C", why:"keep it short. Two pages is enough。" },
      { q:"the photos of the locations", a:"A", why:"I'd put the photos in an appendix。" },
      { q:"the methods section", a:"D", why:"do include a map in the methods section。" },
      { q:"the results", a:"B", why:"Tables are fine ... but a graph would show the pattern ... Use both。" },
      { q:"the recommendations", a:"E", why:"Choose the three strongest and explain them properly。" }
    ]}
  ]},

{ part:4, title:"海洋生物发光", intro:"You will hear part of a lecture about bioluminescence.",
  speakers:{ Lecturer:"W" },
  script:`Lecturer: Today I'm going to talk about bioluminescence, which is the ability of living things to produce their own light. You may have seen fireflies on a summer evening, but in fact the great majority of bioluminescent species live in the sea. In the deep ocean, where sunlight never reaches, it has been estimated that most animals are able to produce light in some way.
Lecturer: So how is the light made? In almost all cases it comes from a chemical reaction. A substance usually called luciferin reacts with oxygen, and this reaction is speeded up by an enzyme. The energy released appears as light rather than heat, which is why it is sometimes described as cold light. Some animals produce these chemicals themselves, while others rely on bacteria that live inside special organs in their bodies.
Lecturer: The colour of the light is also interesting. Most marine bioluminescence is blue or blue-green. This is because blue light travels furthest through seawater, and in fact many deep-sea animals can only see blue light. There are exceptions, though. A few species of fish produce red light, which most other animals cannot detect. This allows them to see their prey without being noticed, a little like using a hidden torch.
Lecturer: Now, why do animals produce light? Scientists have identified several functions. The first is defence. Some small shrimps, when attacked, release a cloud of glowing liquid into the water, which confuses the predator while the shrimp escapes. Certain jellyfish seem to use flashes of light in a different way. The light may attract larger animals that will eat whatever is attacking the jellyfish.
Lecturer: A second function is camouflage. This might sound strange, but many animals living in the middle depths have light organs on their undersides. When a predator looks up from below, the animal's dark shape would normally stand out against the faint light from the surface. By producing light that matches the brightness above, the animal effectively disappears. This is known as counter-illumination.
Lecturer: A third function is finding food. The best-known example is the anglerfish, which has a glowing lure hanging in front of its mouth. Small fish swim towards the light and are swallowed. Finally, light is used for communication, particularly in finding a mate. Some species flash in particular patterns, rather like a code, so that they can recognise members of their own species.
Lecturer: Bioluminescence also has practical uses for humans. The genes responsible for producing light have been inserted into other organisms so that researchers can follow biological processes, for example to see where a particular gene is active. Bioluminescent bacteria have also been used to detect pollution in water, because their light becomes weaker when toxic substances are present.
Lecturer: Finally, it's worth mentioning that bioluminescence is still poorly understood. Because deep-sea animals are so difficult to observe in their natural environment, many species have only been seen a handful of times. New underwater cameras that are sensitive to very low light levels are now helping researchers to record behaviour that has never been filmed before.`,
  groups:[
    { type:"gap", instr:"Complete the notes below.", limit:"Write ONE WORD ONLY for each answer.", maxWords:1, heading:"Bioluminescence", items:[
      { q:"Most bioluminescent species live in the ___", a:["sea","ocean","oceans"], why:"the great majority of bioluminescent species live in the sea。萤火虫只是开头的例子。" },
      { label:"How the light is produced" },
      { q:"luciferin reacts with ___, helped by an enzyme", a:["oxygen"], why:"luciferin reacts with oxygen, and this reaction is speeded up by an enzyme。" },
      { q:"energy is released as light rather than ___", a:["heat"], why:"The energy released appears as light rather than heat。" },
      { q:"some animals rely on ___ living in special organs", a:["bacteria"], why:"others rely on bacteria that live inside special organs。" },
      { q:"a few fish use ___ light to see prey without being noticed", a:["red"], why:"A few species of fish produce red light, which most other animals cannot detect。" },
      { label:"Functions" },
      { q:"defence: some shrimps release a glowing ___ to confuse predators", a:["liquid","cloud"], why:"release a cloud of glowing liquid into the water。" },
      { q:"camouflage: light organs on animals' ___ (counter-illumination)", a:["undersides","underside"], why:"many animals ... have light organs on their undersides。" },
      { q:"food: the anglerfish uses a glowing ___", a:["lure"], why:"a glowing lure hanging in front of its mouth。" },
      { q:"communication: flashing patterns help animals find a ___", a:["mate"], why:"light is used for communication, particularly in finding a mate。" },
      { label:"Uses for humans" },
      { q:"bacteria can detect ___ in water because their light becomes weaker", a:["pollution"], why:"Bioluminescent bacteria have also been used to detect pollution in water。" }
    ]}
  ]}
]},

{ id:"l-t2", name:"练习二", parts:[

{ part:1, title:"租自行车", intro:"You will hear a telephone conversation between a woman and an employee at a bike hire shop.",
  speakers:{ Sam:"M", Lucy:"W" },
  script:`Sam: Good afternoon, Coastline Bike Hire, Sam speaking.
Lucy: Hi. I'd like to hire some bikes for next weekend, please.
Sam: Sure. How many bikes do you need?
Lucy: There are four of us, but my brother is bringing his own bike, so three, please.
Sam: Three bikes. Are they all for adults?
Lucy: Two adults and one child. My daughter is nine.
Sam: OK, we have children's bikes for ages seven to twelve, so that's fine. Which days would you like them for?
Lucy: Saturday and Sunday. Could we pick them up on Friday evening?
Sam: I'm afraid we close at five on Fridays, so the earliest would be Saturday at eight thirty.
Lucy: That's fine.
Sam: Can I have your name, please?
Lucy: Lucy Brennan. That's B, R, E, double N, A, N.
Sam: Thank you. Now, adult bikes are eighteen pounds a day and children's bikes are twelve, so for two days that would come to ninety-six pounds. But if you hire for the whole weekend, we have a weekend rate, which is eighty pounds altogether.
Lucy: Oh, that's good.
Sam: Would you like helmets? They're included in the price.
Lucy: Yes, please. Three helmets.
Sam: And would you like a lock for each bike? Those are two pounds each for the weekend.
Lucy: Just one lock, please. We'll keep the bikes together.
Sam: OK. We also need a deposit, which is fifty pounds, and you'll need to show some identification when you collect the bikes, such as a passport or a driving licence.
Lucy: I'll bring my driving licence. Could you recommend a route? We're not very experienced, and with my daughter, I'd like something easy.
Sam: The most popular route for families is the coast path to Sandy Bay. It's flat, it's about twelve miles there and back, and there's a café at the end. Some people try the forest route, but that's quite hilly.
Lucy: The coast path sounds perfect. And where exactly is your shop?
Sam: We're on Harbour Street, opposite the post office. Not the main post office in the square, the small one near the lighthouse.
Lucy: Great. Thank you very much.
Sam: You're welcome. See you on Saturday.`,
  groups:[
    { type:"gap", instr:"Complete the notes below.", limit:"Write ONE WORD AND/OR A NUMBER for each answer.", maxWords:1, heading:"Coastline Bike Hire: booking", items:[
      { q:"Number of bikes: ___", a:["3","three"], why:"四个人，但哥哥自带自行车，所以租三辆。" },
      { q:"Collection: Saturday at ___ am", a:["8.30","8:30","830"], why:"周五五点关门，最早周六 eight thirty。" },
      { q:"Customer name: Lucy ___", a:["Brennan"], why:"拼写 B-R-E-double N-A-N。" },
      { q:"Age of child: ___", a:["9","nine"], why:"My daughter is nine。7 到 12 岁是童车适用的年龄。" },
      { q:"Weekend price: £___", a:["80","eighty"], why:"按天算是 96 镑，周末价 eighty pounds altogether。" },
      { q:"Extras: three helmets (free) and one ___ (£2)", a:["lock"], why:"Just one lock, please。" },
      { q:"Deposit: £___", a:["50","fifty"], why:"a deposit, which is fifty pounds。" },
      { q:"Identification: passport or ___ licence", a:["driving"], why:"such as a passport or a driving licence。" },
      { q:"Recommended route: coast path to Sandy Bay, about ___ miles there and back", a:["12","twelve"], why:"about twelve miles there and back。" },
      { q:"Shop: Harbour Street, opposite the small post office near the ___", a:["lighthouse"], why:"Not the main post office in the square, the small one near the lighthouse。" }
    ]}
  ]},

{ part:2, title:"新图书馆与艺术中心", intro:"You will hear the manager of a new library and arts centre talking to a group of visitors.",
  speakers:{ Claire:"W" },
  script:`Claire: Hello, and thank you for coming to this preview of the new Westbridge Library and Arts Hub, which opens to the public next Monday. I'm Claire Dunn, the manager, and I'd like to tell you a little about the building and what you'll find inside.
Claire: The project began six years ago, when the old library was found to need major repairs. At the same time, the arts centre across the road was also in poor condition. Rather than repairing both, the council decided to bring them together in one new building. Building work started three years ago and, I'm pleased to say, finished almost on schedule, just two weeks late.
Claire: The building is designed to use as little energy as possible. The roof is covered with solar panels, and rainwater is collected and used in the toilets. The most noticeable feature, though, is the large windows on the north side, which provide natural light without making the rooms too hot.
Claire: Membership is free for everyone who lives, works or studies in the area, as it was at the old library. You can borrow up to fifteen items at a time, and for the first time you'll be able to return books at any hour of the day or night, using the machine by the main entrance.
Claire: Let me guide you through the building. On the ground floor, as you come in, you'll find the café on your left. It's run by a local social enterprise that trains young people. The children's library is also on the ground floor, at the back, with direct access to the garden.
Claire: On the first floor you'll find the main adult library and the quiet study area. We've also put the computer room on this floor, next to the help desk, so that staff can assist people who are less confident with technology.
Claire: The second floor is mostly for the arts. There's a small cinema, which will show films three evenings a week, and two rehearsal rooms that local groups can book. The exhibition space is on this floor too. Our first exhibition shows photographs of Westbridge from the past hundred years.
Claire: The local history collection, which many of you have asked about, has been moved to the first floor, next to the study area, so it's easier for researchers to use. Finally, the lecture theatre is on the ground floor, beside the café, so that it can be used for evening events even when the rest of the building is closed.`,
  groups:[
    { type:"mcq", instr:"Choose the correct letter, A, B or C.", items:[
      { q:"Why was the new building constructed?", opts:["The old library was too small.","Two old buildings needed repairs.","The council received a large donation."], a:1, why:"旧图书馆需要大修，对面的艺术中心也状况不佳，于是合并新建。" },
      { q:"The building work", opts:["finished ahead of schedule.","finished slightly late.","has not yet finished."], a:1, why:"finished almost on schedule, just two weeks late。" },
      { q:"Which feature of the building does the speaker say is the most noticeable?", opts:["the solar panels","the rainwater system","the windows on the north side"], a:2, why:"The most noticeable feature, though, is the large windows on the north side。" },
      { q:"What is new for library users?", opts:["Books can be returned at any time.","Membership is free.","Fifteen items can be borrowed."], a:0, why:"for the first time you'll be able to return books at any hour。会员免费和以前一样。" }
    ]},
    { type:"match", instr:"Which floor is each of the following on? Write the correct letter, A, B or C.",
      options:[["A","ground floor"],["B","first floor"],["C","second floor"]], items:[
      { q:"children's library", a:"A", why:"The children's library is also on the ground floor, at the back。" },
      { q:"computer room", a:"B", why:"put the computer room on this floor (first floor), next to the help desk。" },
      { q:"cinema", a:"C", why:"The second floor ... There's a small cinema。" },
      { q:"exhibition space", a:"C", why:"The exhibition space is on this floor too（二楼）。" },
      { q:"local history collection", a:"B", why:"has been moved to the first floor, next to the study area。" },
      { q:"lecture theatre", a:"A", why:"the lecture theatre is on the ground floor, beside the café。" }
    ]}
  ]},

{ part:3, title:"食堂浪费调查报告", intro:"You will hear two students, Priya and Owen, discussing a presentation about food waste in their university canteen.",
  speakers:{ Owen:"M", Priya:"W" },
  script:`Owen: Hi, Priya. Have you had a chance to look at the canteen data?
Priya: Yes, I went through it last night. The figures are quite shocking. The main canteen throws away about a third of the food it prepares.
Owen: A third? I'd assumed most of the waste would come from students leaving food on their plates.
Priya: That's what I thought too, but actually plate waste is only about a quarter of the total. Most of it is food that's cooked but never served, because the kitchen prepares too much.
Owen: So the problem is mainly planning, not students.
Priya: Exactly. The manager told me they prepare the same amount every day, even though far fewer students eat there on Fridays.
Owen: That seems an easy thing to change. What about the survey? How many students replied?
Priya: Two hundred and ten. The most common reason for leaving food was that the portions were too big. Taste came second.
Owen: Interesting. So should we recommend smaller portions?
Priya: Maybe we should suggest offering two sizes. Some students, especially the ones who do a lot of sport, said they'd be unhappy with less food.
Owen: Good point. Now, how should we structure the presentation? We've got fifteen minutes.
Priya: I think we should begin with a striking image, maybe a photo of a whole day's waste from the canteen.
Owen: I like that. But we'd need permission from the manager to take it.
Priya: I'll ask her tomorrow. Then you could explain the methods, since you designed the survey.
Owen: Fine. Should we show all the survey results?
Priya: No, there isn't time. Let's choose the three most important findings and put them on one slide.
Owen: OK. And I think the recommendations should come from both of us. You could present the ones about the kitchen, and I'll do the ones about students.
Priya: Good. What about the comparison with other universities? I found a report about a university in Denmark that reduced its food waste by forty per cent.
Owen: That's impressive, but I'm worried it would make the presentation too long. Maybe we could mention it briefly at the end.
Priya: Or we could include it in the handout instead. People can read it afterwards.
Owen: Yes, let's do that. Then we can finish with questions.`,
  groups:[
    { type:"mcq", instr:"Choose the correct letter, A, B or C.", items:[
      { q:"What proportion of the food prepared by the canteen is thrown away?", opts:["about a quarter","about a third","about forty per cent"], a:1, why:"throws away about a third of the food it prepares。四分之一是剩在盘子里的部分，40% 是丹麦大学减少的比例。" },
      { q:"According to Priya, most of the waste", opts:["is left on students' plates.","has gone past its use-by date.","is cooked but never served."], a:2, why:"Most of it is food that's cooked but never served。" },
      { q:"What was the most common reason students gave for leaving food?", opts:["The portions were too big.","The food did not taste good.","They did not have enough time."], a:0, why:"The most common reason ... was that the portions were too big. Taste came second。" },
      { q:"Why does Priya suggest offering two portion sizes?", opts:["The manager recommended it.","Some students want larger meals.","It would reduce the canteen's costs."], a:1, why:"students who do a lot of sport said they'd be unhappy with less food。" },
      { q:"What will Priya do tomorrow?", opts:["take a photo of the waste","ask the manager for permission","finish designing the survey"], a:1, why:"we'd need permission from the manager ... I'll ask her tomorrow。" }
    ]},
    { type:"match", instr:"What do the students decide about each part of the presentation? Choose FIVE answers from the box and write the correct letter, A–F.",
      options:[["A","use it to open the presentation"],["B","Owen will present it"],["C","show it on a single slide"],["D","put it in the handout"],["E","present it together"],["F","leave it out completely"]], items:[
      { q:"a photo of the canteen's waste", a:"A", why:"we should begin with a striking image, maybe a photo。" },
      { q:"the methods", a:"B", why:"you (Owen) could explain the methods, since you designed the survey。" },
      { q:"the survey findings", a:"C", why:"choose the three most important findings and put them on one slide。" },
      { q:"the recommendations", a:"E", why:"the recommendations should come from both of us。" },
      { q:"the report about a university in Denmark", a:"D", why:"Or we could include it in the handout instead ... Yes, let's do that。" }
    ]}
  ]},

{ part:4, title:"红树林", intro:"You will hear part of a lecture about mangrove forests.",
  speakers:{ Lecturer:"M" },
  script:`Lecturer: In this lecture I'll be looking at mangrove forests: what they are, why they matter, and the threats they face. Mangroves are trees and shrubs that grow along tropical and subtropical coastlines, in the zone between the land and the sea. Twice a day, as the tide comes in, their roots are covered by salt water, conditions that would kill most other trees.
Lecturer: How do they survive? The first challenge is salt. Some species of mangrove prevent most of the salt from entering at the roots, filtering the water as it is absorbed. Others take in salt but get rid of it through special glands in their leaves. If you look closely at these leaves, you can sometimes see small crystals on the surface.
Lecturer: The second challenge is oxygen. The mud in which mangroves grow contains very little oxygen, so the roots cannot breathe in the normal way. Many species solve this problem with roots that reach into the air. Some have roots that grow upwards out of the mud, like pencils, and take in air at low tide. Others have arching prop roots, which also give the tree support in soft ground.
Lecturer: Mangroves also have an unusual method of reproduction. In several species, the seed begins to grow while it is still attached to the parent tree. When it finally drops, it may float on the water for weeks, or even months, before settling in a suitable place and putting down roots.
Lecturer: Why are mangrove forests important? First, they protect coastlines. The dense network of roots slows down waves and reduces erosion, and studies of past storms have suggested that areas with healthy mangroves suffered less damage than those without. Second, they act as nurseries for fish. Many species of fish and shellfish spend the early part of their lives sheltering among the roots before moving out to the open sea, so mangroves support fishing communities far beyond the forest itself.
Lecturer: Third, mangroves are extremely effective at storing carbon. Most of this carbon is not in the trees themselves but in the waterlogged soil beneath them, where it can remain for centuries. When mangroves are cleared, this carbon can be released into the atmosphere.
Lecturer: Unfortunately, mangroves have been lost at an alarming rate. Large areas were cleared in the late twentieth century, especially to create ponds for shrimp farming, and others have been lost to coastal development. The rate of loss has slowed in recent years, but it hasn't stopped.
Lecturer: Restoration efforts have had mixed results. In the past, many projects simply planted large numbers of seedlings, often in places where mangroves had never grown, such as mudflats that are too low. Many of these seedlings died. More successful projects now focus on restoring the natural flow of water, so that mangroves can return by themselves. Involving local communities, who depend on the forests, has also proved important for long-term success.`,
  groups:[
    { type:"gap", instr:"Complete the notes below.", limit:"Write ONE WORD ONLY for each answer.", maxWords:1, heading:"Mangrove forests", items:[
      { q:"grow between the land and the sea; roots are covered by salt water when the ___ comes in", a:["tide"], why:"as the tide comes in, their roots are covered by salt water。" },
      { label:"How mangroves survive" },
      { q:"some species get rid of salt through ___ in their leaves", a:["glands"], why:"get rid of it through special glands in their leaves。" },
      { q:"the mud contains very little ___", a:["oxygen"], why:"The mud in which mangroves grow contains very little oxygen。" },
      { q:"some roots grow upwards like ___", a:["pencils"], why:"roots that grow upwards out of the mud, like pencils。" },
      { q:"prop roots also give the tree ___ in soft ground", a:["support"], why:"arching prop roots, which also give the tree support in soft ground。" },
      { q:"seeds may ___ on the water for weeks or months", a:["float"], why:"it may float on the water for weeks, or even months。" },
      { label:"Why mangroves are important" },
      { q:"roots slow down waves and reduce ___", a:["erosion"], why:"slows down waves and reduces erosion。" },
      { q:"young fish shelter among the roots, so mangroves act as ___", a:["nurseries"], why:"they act as nurseries for fish。" },
      { q:"most carbon is stored in the ___ beneath the trees", a:["soil"], why:"in the waterlogged soil beneath them。" },
      { label:"Threats" },
      { q:"large areas were cleared to create ponds for ___ farming", a:["shrimp","shrimps"], why:"especially to create ponds for shrimp farming。" }
    ]}
  ]}
]}
];
