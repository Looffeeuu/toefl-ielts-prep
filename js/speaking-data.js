/* 口语题库（原创练习题，按 2026 新版托福口语题型编写）
   听后复述 Listen and Repeat：每套 7 句，由短到长
   模拟面试 Take an Interview：每套 4 题，从个人经历逐步过渡到观点与社会话题 */
window.REPEAT_SETS = [
  { id:"campus", name:"校园图书馆导览", en:"Campus Library Tour",
    intro:"You are training to work at the campus library. Listen to the library manager and repeat what she says.",
    items:[
      "Welcome to the main library.",
      "The front desk is open until midnight.",
      "You can borrow up to ten books at a time.",
      "Study rooms on the third floor can be reserved online.",
      "Please remember to scan your student card when you enter the building.",
      "The quiet zone is on the top floor, so phone calls are not allowed there.",
      "If you need help finding research materials, the reference librarians offer free workshops every Tuesday afternoon."
    ]},
  { id:"museum", name:"自然历史博物馆", en:"Natural History Museum",
    intro:"You are volunteering at a natural history museum. Listen to the tour guide and repeat what he says.",
    items:[
      "This hall is about ancient oceans.",
      "These fossils are over two million years old.",
      "Please don't touch the glass cases in this room.",
      "The skeleton in the center belonged to a giant sea turtle.",
      "Scientists discovered it in a desert that was once covered by water.",
      "Our guided tour continues in the next gallery, where you can see early land plants.",
      "Before you leave, be sure to visit the gift shop, which sells copies of many of the fossils on display."
    ]},
  { id:"zoo", name:"城市动物园", en:"City Zoo",
    intro:"You are a new staff member at the city zoo. Listen to the senior keeper and repeat what she says.",
    items:[
      "The penguins are fed at noon.",
      "Our giraffes came here from a park in Kenya.",
      "Visitors can watch the keepers prepare food for the elephants.",
      "The reptile house is kept warm because snakes cannot control their body temperature.",
      "Please stay on the marked paths and keep your voice low near the sleeping animals.",
      "The red pandas are most active early in the morning, so that is the best time to see them.",
      "Our conservation program has helped return more than two hundred endangered frogs to their natural habitat in the mountains."
    ]},
  { id:"dorm", name:"新生宿舍入住", en:"Residence Hall Orientation",
    intro:"You are helping new students move into their residence hall. Listen to the hall director and repeat what he says.",
    items:[
      "Your room key is in this envelope.",
      "Laundry machines are in the basement.",
      "Quiet hours begin at ten o'clock on weeknights.",
      "Each floor has a shared kitchen with a refrigerator and a microwave.",
      "If something in your room is broken, you can submit a repair request on the housing website.",
      "Fire alarms are tested on the first Monday of every month, so don't be surprised if you hear one.",
      "Residents who want to change rooms should speak with their resident adviser before the end of the second week of classes."
    ]},
  { id:"lab", name:"化学实验室安全", en:"Lab Safety Briefing",
    intro:"You are a new teaching assistant in a chemistry lab. Listen to the lab supervisor and repeat what she says.",
    items:[
      "Please put on your safety glasses.",
      "Long hair must be tied back at all times.",
      "Never taste or smell any of the chemicals.",
      "The emergency shower is located next to the back door.",
      "Report any broken glass to the teaching assistant right away.",
      "When you finish an experiment, wash your equipment and return it to the correct shelf.",
      "Students who arrive more than ten minutes late may not be allowed to take part in that day's experiment."
    ]},
  { id:"park", name:"国家公园游客中心", en:"Park Visitor Center",
    intro:"You are working at a park visitor center. Listen to the park ranger and repeat what he says.",
    items:[
      "The trail map is on the wall.",
      "The lake trail takes about an hour.",
      "Bicycles can be rented at the north entrance.",
      "Please carry out all of your trash when you leave.",
      "During the summer, rangers lead free bird watching walks every Saturday morning.",
      "The waterfall is a short walk from here, but the path can be slippery after it rains.",
      "Visitors who plan to camp overnight need a permit, which they can get from the front desk until five o'clock."
    ]}
];

window.INTERVIEW_SETS = [
  { id:"study", name:"学习方式", en:"How Students Learn",
    intro:"Thank you for taking part in our study about how students learn. I'd like to ask you a few questions.",
    items:[
      { q:"Where do you usually prefer to study, and why?",
        hint:"先说一个具体地点（图书馆、宿舍、咖啡馆），再给两个理由，比如安静、资料方便、不容易分心，最后用一次具体的经历收尾。" },
      { q:"Can you describe a time when you had to learn something difficult? What did you do?",
        hint:"按「时间背景 → 难在哪里 → 你用了什么方法 → 结果和收获」讲一件真事，细节越具体越好。" },
      { q:"Some people say studying in groups is more effective than studying alone. What do you think?",
        hint:"先明确立场。可以先承认另一方的一个优点，再用理由和例子说明为什么你仍然这样认为。" },
      { q:"How do you think technology will change the way students learn in the future?",
        hint:"说一到两个具体变化（AI 辅导、个性化课程、远程实验），各配一个好处，最后提一个可能的担忧。" }
    ]},
  { id:"tech", name:"科技与日常生活", en:"Technology in Daily Life",
    intro:"We're researching how people use technology in their daily lives. I have a few questions for you.",
    items:[
      { q:"What kind of technology do you use most often during the day?",
        hint:"选一样（手机、笔记本电脑、某个应用），说清你用它做什么、一天大概用多久。" },
      { q:"Tell me about an app or a device that has made your life easier.",
        hint:"说出名字和用途，再对比没有它之前有多麻烦，用一个具体场景展示它怎么帮了你。" },
      { q:"Some people think young people spend too much time on their phones. Do you agree?",
        hint:"可以部分同意：时间确实长，但要区分学习、社交和娱乐用途。给理由和身边的例子。" },
      { q:"Should schools limit students' use of smartphones? Why or why not?",
        hint:"明确支持或反对，说清「怎么限制」（上课时间、考试时），并讲一个可能的副作用。" }
    ]},
  { id:"community", name:"城市与社区", en:"Places We Live",
    intro:"Our team is studying how people feel about the places where they live. Let's begin.",
    items:[
      { q:"What do you like most about the neighborhood where you live?",
        hint:"挑一个点（交通、公园、小吃、邻里关系），用具体的地点或人物说明。" },
      { q:"Describe a public place in your town that you enjoy visiting.",
        hint:"地点是什么样的、你通常在那里做什么、为什么喜欢。用感官细节让描述更生动。" },
      { q:"Would you rather live in a big city or a small town? Explain why.",
        hint:"选一个，给两个理由（机会、节奏、生活成本），可以用自己或朋友的经历做例子。" },
      { q:"What is one thing local governments could do to make communities better places to live?",
        hint:"提一个具体措施（更多公园、改善公交、社区活动中心），说明它解决什么问题、谁会受益。" }
    ]},
  { id:"environment", name:"环境保护", en:"Attitudes Toward the Environment",
    intro:"We are conducting a study about people's attitudes toward the environment. Here is my first question.",
    items:[
      { q:"What do you personally do to protect the environment?",
        hint:"说一到两个日常习惯（垃圾分类、少用塑料、骑车），配一个具体的例子。" },
      { q:"Have you ever taken part in an activity that helped the environment? Tell me about it.",
        hint:"讲一件具体的事：什么时间、和谁、做了什么、结果如何、你的感受。" },
      { q:"Some people believe individuals can't make much difference, and that only governments can solve environmental problems. What's your opinion?",
        hint:"可以说两者都需要，但要有侧重：个人行为累积起来的影响，加上政府政策的作用。" },
      { q:"Do you think companies should be required to use environmentally friendly packaging, even if it raises prices?",
        hint:"表明立场，讨论价格上涨的代价和长期环境收益，最好给一个现实中的例子。" }
    ]},
  { id:"career", name:"职业规划", en:"Plans for the Future",
    intro:"We're interviewing students about their plans for the future. I'd like to hear your thoughts.",
    items:[
      { q:"What kind of job would you like to have after you finish your studies?",
        hint:"说出具体职业，给出兴趣和能力两方面的理由，提一件让你产生这个想法的经历。" },
      { q:"Tell me about a person whose career you admire.",
        hint:"可以是名人或身边的人。说明对方做什么、你欣赏的具体品质，以及对你的影响。" },
      { q:"Is it better to choose a job you enjoy or a job that pays well?",
        hint:"选一边，但可以说「在满足基本生活的前提下」。用一个对比的例子支撑观点。" },
      { q:"How do you think the workplace will be different in twenty years?",
        hint:"谈一到两个变化（远程办公、AI 工具、终身学习），说明对员工意味着什么。" }
    ]},
  { id:"health", name:"健康与运动", en:"Staying Healthy",
    intro:"Our study looks at how people stay healthy. Thanks for joining us.",
    items:[
      { q:"What do you usually do to stay healthy?",
        hint:"说一到两个习惯（跑步、规律作息、饮食），说明频率和效果。" },
      { q:"Describe a sport or physical activity you enjoy.",
        hint:"运动是什么、你怎么开始的、喜欢它的原因，加一个印象深刻的瞬间。" },
      { q:"Some people say it's hard to eat healthy food when you're busy. What do you think?",
        hint:"可以同意难，但给出可行办法（提前准备、选择简单的健康食物），用自己的例子说明。" },
      { q:"Should universities require all students to take physical education classes?",
        hint:"表明立场：健康收益、减压、时间成本。提一个折中方案会显得思考更全面。" }
    ]},
  { id:"travel", name:"旅行与文化", en:"Travel and Culture",
    intro:"We're doing research on travel and cultural experiences. Let's get started.",
    items:[
      { q:"Tell me about a place you have traveled to that you remember well.",
        hint:"地点、时间、同行的人，选一个最难忘的细节或小插曲来讲。" },
      { q:"Do you prefer traveling with a group or on your own? Why?",
        hint:"选一种，给两个理由（安全、自由度、费用、分享），配一个真实经历。" },
      { q:"Some people think it's important to learn about a country's culture before visiting it. Do you agree?",
        hint:"同意的话，说明提前了解能避免误会、看得更深，举一个具体文化差异的例子。" },
      { q:"How can international travel help people understand each other better?",
        hint:"从打破刻板印象、亲身交流、语言学习等角度说，配一个例子。" }
    ]},
  { id:"media", name:"新闻与媒体", en:"News and Media",
    intro:"We're interested in how people get information and entertainment. Here's my first question.",
    items:[
      { q:"How do you usually get news about what's happening in the world?",
        hint:"说出具体渠道（新闻应用、社交媒体、播客），并说明为什么选它。" },
      { q:"Tell me about a book, film, or show that made a strong impression on you.",
        hint:"简单介绍内容，重点讲哪个部分打动你、让你改变了什么想法。" },
      { q:"Do you think people today read fewer books than in the past? Why might that be?",
        hint:"给出判断，再从短视频、时间碎片化、阅读形式变化等角度分析原因。" },
      { q:"Should social media companies be responsible for removing false information?",
        hint:"表明立场，同时讨论言论自由和判断标准的问题，给一个现实中的例子。" }
    ]}
];
