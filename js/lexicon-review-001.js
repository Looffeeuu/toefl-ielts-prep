/* Batch 001: checked against the linked Cambridge entries, 2026-11-16.
   Chinese definitions are summaries; all example sentences below are original.
   Coverage: contemporary learner meanings, not every historical/technical use.
   IPA syllable dots/stress retained; optional-schwa typography flattened. */
(function(){
const rows = [
  ["abnormal", "adj.", "异常的；反常的（通常指不好的情况）", "æbˈnɔː.məl", "æbˈnɔːr.məl", "移除未获所查词典支持的名词词性及以人作标签的旧释义。", [
    ["adj. 异常的", "The test revealed abnormal levels of protein."]]],
  ["AIDS", "n.", "艾滋病；获得性免疫缺陷综合征", "eɪdz", "eɪdz", "移除其他机构和系统缩写混入的截断解释。", [
    ["n. 艾滋病", "The charity supports people living with AIDS."]]],
  ["bend", "v./n.", "v. （使）弯曲；弯腰；变通（规则）　n. 弯道；弯曲处", "bend", "bend", "补齐名词；将规则变通与物理弯曲分开。", [
    ["v. （使）弯曲；弯腰", "Bend your knees before lifting the box."],
    ["v. 变通（规则）", "The manager refused to bend the rules for us."],
    ["n. 弯道", "A sharp bend lies just beyond the bridge."]]],
  ["blonde", "adj./n.", "adj. 浅黄色的；金发的　n. 金发的人（尤指女子）", "blɒnd", "blɑːnd", "修复截断，去除肤色和眼睛颜色的无根据捆绑。", [
    ["adj. 金发的", "Her blonde hair shone in the sunlight."],
    ["n. 金发的人", "The blonde standing by the door is my cousin."]]],
  ["blur", "n./v.", "n. 模糊的影像；模糊的记忆　v. （使）变模糊；使界限不清", "blɜːʳ", "blɝː", "补齐名词；移除误导性的弄脏释义。", [
    ["n. 模糊的影像", "Without my glasses, the sign is a blur."],
    ["n. 模糊的记忆", "The first week after the move is a blur."],
    ["v. （使）模糊", "Heavy rain can blur the view through the window."],
    ["v. 使界限不清", "These roles blur the distinction between work and leisure."]]],
  ["bound", "adj./v./n.", "adj. 必定的；有义务的；被捆绑的；装订的；前往…的　v. 跳跃；形成边界；bind 的过去式和过去分词　n. 跳跃；界限（常用复数 bounds）", "baʊnd", "baʊnd", "补齐动词及必定、前往等常用义，区分 bound 本词与 bind 的变形。", [
    ["adj. 必定的", "You are bound to improve with regular practice."],
    ["adj. 有义务的", "Both parties are bound by the agreement."],
    ["adj. 前往…的", "The train is bound for Edinburgh."],
    ["adj. 装订的", "The notes were collected in a bound volume."],
    ["v. 跳跃", "The puppies bound across the lawn."],
    ["v. 形成边界", "Mountains bound the valley on three sides."],
    ["n. 跳跃", "The deer cleared the stream in one bound."],
    ["n. 界限（bounds）", "The discussion remained within reasonable bounds."]]],
  ["brief", "adj./v./n.", "adj. 简短的；短暂的　v. 向…介绍情况；布置任务　n. 任务说明；案情摘要；三角内裤（briefs）", "briːf", "briːf", "补齐常用动词及名词的具体含义。", [
    ["adj. 简短的；短暂的", "We had a brief conversation before class."],
    ["v. 介绍情况；布置任务", "The coordinator will brief the volunteers tomorrow."],
    ["n. 任务说明", "The designer followed the client's brief."],
    ["n. 案情摘要", "The lawyer filed a brief with the court."],
    ["n. 三角内裤（briefs）", "He packed two pairs of briefs for the trip."]]],
  ["clear", "adj./adv./v.", "adj. 清楚的；明显的；透明的；无障碍的；晴朗的　adv. 不接触地；避开地　v. 清除；证明无罪；批准；越过；（支票）兑现", "klɪəʳ", "klɪr", "补齐动词；副词以远离、不接触为主要学习义。", [
    ["adj. 清楚的", "The guide gave clear instructions."],
    ["adj. 透明的", "We could see fish through the clear water."],
    ["adv. 避开地", "Stand clear of the moving doors."],
    ["v. 清除", "Workers will clear the road before noon."],
    ["v. 证明无罪", "The evidence helped clear her of the accusation."],
    ["v. 批准", "Officials must clear the flight for departure."],
    ["v. 越过", "The horse can clear the fence easily."],
    ["v. （支票）兑现", "The cheque should clear within three days."]]],
  ["close", "v./n./adj./adv.", "v. 关闭；结束；完成（交易）　n. 结束；住宅区道路（英）　adj. 近的；亲密的；相似的；闷热的　adv. 靠近地", null, null, "补齐动词和副词，保留名词两义的不同读音。", [
    ["v. 关闭", "Please close the window before you leave."],
    ["v. 完成（交易）", "They hope to close the deal on Friday."],
    ["n. 结束", "The announcement came at the close of the meeting."],
    ["adj. 近的；亲密的", "She remains a close friend of mine."],
    ["adj. 相似的；差距小的", "It was a close contest between the two teams."],
    ["adj. 闷热的", "The air felt close in the crowded room."],
    ["adv. 靠近地", "Please stay close while we cross the station."]]],
  ["counter", "n./v./adv.", "n. 柜台；操作台；棋子　v. 反驳；抵制；抵消　adv. 相反地（常用于 run counter to）", "ˈkaʊn.təʳ", "ˈkaʊn.t̬ɚ", "补齐反驳、抵消及副词；移除缺少依据的形容词泛化。", [
    ["n. 柜台", "Leave the form on the counter."],
    ["n. 棋子", "Move your counter forward two spaces."],
    ["v. 反驳", "She used the report to counter his argument."],
    ["v. 抵消", "Trees can help counter the effects of urban heat."],
    ["adv. 相反地", "The proposal runs counter to our original aims."]]],
  ["cross", "v./n./adj.", "v. 穿过；交叉；杂交　n. 十字形；十字架；杂交品种；（体育）横传　adj. 生气的（主要用于英式英语）", "krɒs", "krɑːs", "补齐动词，区分十字形、杂交品种与生气。", [
    ["v. 穿过", "We cross the bridge on our way to school."],
    ["v. 杂交", "Breeders cross these plants to develop hardier varieties."],
    ["n. 十字形", "Mark the correct box with a cross."],
    ["n. 杂交品种", "The dog is a cross between two breeds."],
    ["n. 横传", "The striker scored from a cross."],
    ["adj. 生气的", "He sounded cross when I called him."]]],
  ["cut", "v./n./adj.", "v. 切；割伤；剪；削减；删去　n. 切口；伤口；削减；份额；剪裁　adj. 剪下的（如鲜切花）", "kʌt", "kʌt", "补齐作为主要词性的动词；保留有来源的名词及形容词。", [
    ["v. 切；剪", "Cut the paper into four squares."],
    ["v. 削减", "We need to cut spending this month."],
    ["v. 删去", "The editor will cut this paragraph."],
    ["n. 伤口", "The cut on his hand healed quickly."],
    ["n. 削减", "The budget includes a cut in travel expenses."],
    ["n. 份额", "Each partner receives a cut of the profits."],
    ["adj. 剪下的", "She arranged the cut flowers in a vase."]]],
  ["cutting", "n./adj.", "n. 剪报；插条；路堑　adj. 尖刻的；伤人感情的", "ˈkʌt.ɪŋ", "ˈkʌt̬.ɪŋ", "补齐形容词，明确剪报、植物插条和路堑三种名词义。", [
    ["n. 剪报", "She kept a newspaper cutting about the concert."],
    ["n. 插条", "This cutting should develop roots in a few weeks."],
    ["n. 路堑", "The railway runs through a deep cutting."],
    ["adj. 尖刻的", "His cutting remark ended the conversation."]]],
  ["desert", "n./v.", "n. 沙漠；荒漠　v. 抛弃；离弃；擅离军队", null, null, "补齐动词；不将复数习语 just deserts 的应得惩罚混作沙漠的释义。", [
    ["n. 沙漠", "Rain is rare in this desert."],
    ["v. 抛弃", "He would never desert his family."],
    ["v. 擅离军队", "The soldier decided to desert during the retreat."]]],
  ["double", "adj./adv./n./v.", "adj. 两倍的；双的　adv. 成双地；折成两层地　n. 两倍；酷似的人；双份酒　v. （使）加倍；兼作", "ˈdʌb.əl", "ˈdʌb.əl", "补齐动词及副词；补充酷似的人和兼作。", [
    ["adj. 两倍的；双的", "The room has a double bed."],
    ["adv. 折成两层地", "Fold the blanket double for extra warmth."],
    ["n. 两倍", "The larger bag costs double."],
    ["n. 酷似的人", "From a distance, he could be my brother's double."],
    ["v. （使）加倍", "The new machine should double our output."],
    ["v. 兼作", "The sofa can double as a bed."]]],
  ["draw", "v./n.", "v. 画；拉；吸引；抽取；提取；得出（结论）；打成平局　n. 平局；抽签；有吸引力的人或事物", "drɔː", "drɑː", "补齐画、吸引和名词等常用义。", [
    ["v. 画", "Draw a circle around the correct answer."],
    ["v. 拉", "Draw the curtains before switching on the light."],
    ["v. 吸引", "The exhibition will draw visitors from across the region."],
    ["v. 得出（结论）", "We cannot draw conclusions from one experiment."],
    ["v. 提取", "You can draw money from this account."],
    ["n. 平局", "The game ended in a draw."],
    ["n. 抽签", "The prize draw will take place tomorrow."],
    ["n. 有吸引力的人或事物", "The new gallery is a major draw for tourists."]]],
  ["equal", "adj./n./v.", "adj. 相等的；平等的；能胜任的　n. 同等的人或事物；匹敌者　v. 等于；比得上；导致", "ˈiː.kwəl", "ˈiː.kwəl", "补齐动词及能胜任的形容词用法。", [
    ["adj. 相等的；平等的", "Everyone should have an equal chance to speak."],
    ["adj. 能胜任的", "She proved equal to the difficult task."],
    ["n. 匹敌者", "As a pianist, he has few equals."],
    ["v. 等于；比得上", "Our sales may equal last year's total."],
    ["v. 导致", "More spending does not always equal better results."]]],
  ["even", "adv./adj./v.", "adv. 甚至；连…都；更加　adj. 平坦的；均匀的；相等的；偶数的　v. 使相等；使均衡", "ˈiː.vən", "ˈiː.vən", "补回最常用的副词，明确偶数和均衡等义。", [
    ["adv. 甚至；连…都", "Even the youngest students understood the rule."],
    ["adv. 更加", "The second test was even harder."],
    ["adj. 平坦的", "The floor must be even before we lay the tiles."],
    ["adj. 偶数的", "Eight is an even number."],
    ["adj. 均匀的", "Keep the engine running at an even speed."],
    ["v. 使相等；使均衡", "The final goal helped even the score."]]],
  ["executive", "n./adj.", "n. 高级管理人员；执行委员会；政府行政部门　adj. 决策的；管理的；供高级管理人员使用的", "ɪɡˈzek.jə.tɪv", "ɪɡˈzek.jə.t̬ɪv", "修复截断，明确企业主管和行政部门。", [
    ["n. 高级管理人员", "The executive approved the new training programme."],
    ["n. 政府行政部门", "The constitution limits the power of the executive."],
    ["adj. 决策的；管理的", "The board delegated executive authority to her."]]],
  ["fair", "adj./n./adv.", "adj. 公平的；合理的；尚可的；相当多的；晴朗的；浅色的　n. 集市；展销会；游乐会　adv. 公平地（如 play fair）", "feəʳ", "fer", "修复截断；区分公平、尚可、浅色、展会等常用义。", [
    ["adj. 公平的；合理的", "The committee reached a fair decision."],
    ["adj. 尚可的", "Her reading is excellent but her spelling is only fair."],
    ["adj. 相当多的", "There is still a fair amount of work to do."],
    ["adj. 浅色的", "His fair skin burns easily in the sun."],
    ["adj. 晴朗的", "We expect fair weather for the weekend."],
    ["n. 展销会", "We met the publisher at a book fair."],
    ["adv. 公平地", "Everyone must play fair during the competition."]]],
  ["fancy", "v./adj./n.", "v. 想要（英）；爱慕（英，非正式）；想象；认为　adj. 花哨的；精致昂贵的　n. 喜好；一时的念头；想象力（文学）", "ˈfæn.si", "ˈfæn.si", "补齐动词并保留语域，移除把形容词直接解释为想象的泛化。", [
    ["v. 想要（英）", "Do you fancy a walk after lunch?"],
    ["v. 爱慕（英，非正式）", "She admitted that she fancied her classmate."],
    ["v. 想象；认为", "He fancies himself an expert on music."],
    ["adj. 花哨的", "The invitation had fancy lettering."],
    ["adj. 精致昂贵的", "They booked a table at a fancy restaurant."],
    ["n. 喜好；一时的念头", "Her interest in sailing was more than a passing fancy."]]],
  ["fit", "v./adj./n.", "v. 合身；适合；容纳；安装　adj. 健康强壮的；适合的　n. 合身程度；（疾病）发作；一阵（情绪或活动）", "fɪt", "fɪt", "补回主要动词和健康义，不再把准备好的作为通用解释。", [
    ["v. 合身；适合", "These shoes fit me perfectly."],
    ["v. 容纳", "We can fit another chair beside the desk."],
    ["v. 安装", "The mechanic will fit new tyres tomorrow."],
    ["adj. 健康强壮的", "She swims every morning to stay fit."],
    ["adj. 适合的", "The old bridge is no longer fit for heavy traffic."],
    ["n. 合身程度", "The jacket is a perfect fit."],
    ["n. 一阵（情绪或活动）", "A coughing fit interrupted his speech."]]],
  ["flat", "adj./adv./n.", "adj. 平坦的；乏味的；没气的；没电的（英）；固定的；断然的；（饮料）走气的　adv. 平躺地；完全；整整　n. 公寓（英）；低平地；瘪胎；降音符", "flæt", "flæt", "补齐公寓等名词，去除浅的等脱离语境的泛化。", [
    ["adj. 平坦的", "We need a flat surface for the experiment."],
    ["adj. 没气的", "A flat tyre delayed our journey."],
    ["adj. （饮料）走气的", "The lemonade has gone flat."],
    ["adj. 固定的", "The service charges a flat monthly fee."],
    ["adj. 断然的", "The request received a flat refusal."],
    ["adv. 平躺地", "Lie flat on your back."],
    ["adv. 整整", "She finished the race in ten minutes flat."],
    ["n. 公寓（英）", "They rent a small flat near the station."],
    ["n. 降音符", "This melody begins on B flat."]]],
  ["frequent", "adj./vt.", "adj. 频繁的；经常发生的　vt. 常去；常到（正式）", null, null, "修复截断，去除快速的等无依据泛化；区分形容词和动词重音。", [
    ["adj. 频繁的", "Frequent delays have made the route unpopular."],
    ["vt. 常去；常到", "Local artists frequent this cafe."]]]
];
const batch = rows.map(([w,pos,cn,uk,us,reason,senses]) => ({
  w,pos,cn,reason,senses,checkedOn:"2026-11-16",batch:"001",file:"js/lexicon-review-001.js",
  source:`https://dictionary.cambridge.org/dictionary/english/${w.toLowerCase()}`,
  readings:uk ? [{label:pos,uk,us}] : null
}));
// The dictionary confirms two pronunciations for each of these words.
batch.find(r=>r.w==='close').readings = [
  {label:"v. 关闭；n. 结束",uk:"kləʊz",us:"kloʊz"},
  {label:"adj./adv. 靠近；n. 住宅区道路",uk:"kləʊs",us:"kloʊs"}
];
batch.find(r=>r.w==='desert').readings = [
  {label:"n. 沙漠",uk:"ˈdez.ət",us:"ˈdez.ɚt"},
  {label:"v. 抛弃；擅离军队",uk:"dɪˈzɜːt",us:"dɪˈzɝːt"}
];
batch.find(r=>r.w==='frequent').readings = [
  {label:"adj. 频繁的",uk:"ˈfriː.kwənt",us:"ˈfriː.kwənt"},
  {label:"vt. 常去（美音另有首音节重读变体）",uk:"frɪˈkwent",us:"friːˈkwent"}
];
window.LEXICON_REVIEW_BATCHES = (window.LEXICON_REVIEW_BATCHES || []).concat([{id:"001",checkedOn:"2026-11-16",words:batch.map(r=>r.w)}]);
for(const r of batch){
  window.DEFINITION_REVIEWS = window.DEFINITION_REVIEWS.filter(p=>p.w!==r.w).concat([r]);
  window.PRONUNCIATION_REVIEWS = window.PRONUNCIATION_REVIEWS.filter(p=>p.w!==r.w).concat([{w:r.w,source:r.source,checkedOn:r.checkedOn,readings:r.readings}]);
}
})();
