/* 人工核对记录。中文释义为依据链接概括，例句为原创，不是词典原文。
   仅这些条目完成了本轮词典核对；其他精编释义不能据此视为已核验。 */
window.DEFINITION_REVIEWS = [
  { w:"hard-working", pos:"adj.", cn:"勤奋的；努力工作的", source:"https://dictionary.cambridge.org/dictionary/english/hard-working", reason:"原数据把形容词误作繁重的工作。" },
  { w:"hats", pos:"n.", cn:"帽子（hat 的复数）", source:"https://dictionary.cambridge.org/dictionary/english/hat", reason:"日常复数词错误匹配到大写缩略语。" },
  { w:"topics", pos:"n.", cn:"话题；主题（topic 的复数）", source:"https://dictionary.cambridge.org/dictionary/english/topic", reason:"日常复数词错误匹配到大写缩略语。" },
  { w:"performance", pos:"n.", cn:"表现；成绩；表演；性能；履行", source:"https://dictionary.cambridge.org/dictionary/english/performance", reason:"原导入释义漏掉表现、表演、性能等常用义，且与例句不一致。", senses:[
    ["n. 表现；成绩", "Her performance in the interview impressed the team."],
    ["n. 表演；演出", "The audience enjoyed the orchestra's performance."],
    ["n. 性能", "The update improves the computer's performance."],
    ["n. 履行；执行", "The contract requires timely performance of all duties."]
  ] },
  { w:"rack", pos:"n./vt.", cn:"n. 架子；搁物架　vt. 使痛苦不堪；折磨", source:"https://dictionary.cambridge.org/dictionary/english/rack", reason:"精编覆盖时漏掉及物动词；补齐搭配所用义项。", senses:[
    ["n. 架子", "Put the wet plates on the rack."],
    ["vt. 使痛苦不堪；折磨", "She was racked with guilt after the accident."],
    ["vt. 绞尽脑汁（rack one's brains）", "I racked my brains to remember his name."]
  ] },
  { w:"cola", pos:"n.", cn:"可乐", source:"https://dictionary.cambridge.org/dictionary/english/cola", reason:"原条目误把 colon 的复数等释义当作日常饮料释义；改为本词常用义。" },
  { w:"osprey", pos:"n.", cn:"鹗（以鱼为食的猛禽）", source:"https://dictionary.cambridge.org/dictionary/english/osprey", reason:"保留现代鸟名，移除会误导学习者的羽毛释义。" },
  { w:"stressful", pos:"adj.", cn:"令人紧张的；压力大的", source:"https://dictionary.cambridge.org/dictionary/english/stressful", reason:"原释义串入 stress 的动词义。" },
  { w:"natural", pos:"adj./n.", cn:"adj. 自然的；天然的；天生的　n. 有天赋的人", source:"https://dictionary.cambridge.org/dictionary/english/natural", reason:"移除未标记的陈旧贬义，保留现代学习常用义。" },
  { w:"harrow", pos:"n./vt.", cn:"n. 耙　vt. 耙地", source:"https://dictionary.cambridge.org/dictionary/english/harrow", reason:"去掉大写专名 Harrow 混入的学校义；不将 harrowing 当作原词的形容词词性。", senses:[
    ["n. 耙", "The farmer pulled a harrow across the field."],
    ["vt. 耙地", "Farmers harrow the soil before sowing seeds."]
  ] },
  { w:"instrumentalist", pos:"n.", cn:"器乐演奏者", source:"https://dictionary.cambridge.org/dictionary/english/instrumentalist", reason:"补充优先学习的音乐义；哲学专门义不作为本词学习释义。" }
].map(r => ({ ...r, checkedOn:"2026-11-16" }));
