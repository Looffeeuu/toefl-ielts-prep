// Run audit_definitions.js --write and check_pronunciations.js --write first.
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert/strict');
const root = path.join(__dirname,'..'), docs = path.join(root,'docs');
const definitions = JSON.parse(fs.readFileSync(path.join(docs,'definition-audit.json'),'utf8'));
const pronunciations = JSON.parse(fs.readFileSync(path.join(docs,'pronunciation-audit.json'),'utf8'));
const policy=JSON.parse(fs.readFileSync(path.join(docs,'review-release-policy.json'),'utf8'));
const ctx={window:{}};vm.createContext(ctx);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const m of html.matchAll(/src="js\/([^"?]+)(?:\?[^" ]*)?"/g)){
  if(/^(definition-reviews|pronunciation-reviews|lexicon-review-\d+)\.js$/.test(m[1])) vm.runInContext(fs.readFileSync(path.join(root,'js',m[1]),'utf8'),ctx);
}
const batches=ctx.window.LEXICON_REVIEW_BATCHES||[];
const ph = new Map(pronunciations.entries.map(e=>[e.word,e]));
const entries = definitions.entries.map(d=>{
  const p = ph.get(d.word); assert(p, `missing pronunciation inventory: ${d.word}`);
  return {word:d.word,definitionChecked:d.origin==='dictionary-reviewed',pronunciationChecked:p.status==='dictionary-reviewed',definitionSource:d.dictionary,...(d.dictionaries?{definitionSources:d.dictionaries}:{}),pronunciationSource:p.review?.source||null,...(p.review?.sources?{pronunciationSources:p.review.sources}:{}),definitionCheckedOn:d.checkedOn,pronunciationCheckedOn:p.review?.checkedOn||null,flags:d.flags.concat(p.flags)};
});
// User priority: finish core, then TOEFL high-frequency only.
const lists={window:{}};vm.createContext(lists);
for(const f of ['words.js','words-ext.js','words-ielts.js']) vm.runInContext(fs.readFileSync(path.join(root,'js',f),'utf8'),lists);
const coreWords=new Set(lists.window.TOPICS.flatMap(t=>t.raw.trim().split(/\r?\n/).map(l=>l.split('|')[0].trim())));
const highWords=new Set();
for(const [key,tier] of [['EXT_WORDS','f1']])
 for(const line of lists.window[key].split('\n')){const cols=line.split('\t');if(cols[4]===tier)highWords.add(cols[0]);}
const priorityRank=w=>coreWords.has(w)?0:highWords.has(w)?1:2;
const scopeStats=(name,set)=>{const selected=entries.filter(e=>set.has(e.word));return {name,total:selected.length,completed:selected.filter(e=>e.definitionChecked&&e.pronunciationChecked).length,remaining:selected.filter(e=>!e.definitionChecked||!e.pronunciationChecked).length};};
const priorityScopes=[scopeStats('核心精编',coreWords),scopeStats('托福高频',highWords)];
fs.writeFileSync(path.join(docs,'review-priority.json'),JSON.stringify({instructionDate:'2026-11-17',order:['核心精编全部','托福高频全部'],note:'本轮只核对核心精编和托福高频；重叠词只计一次。雅思独有词及其他词库不属于本轮目标。',scopes:priorityScopes},null,2)+'\n');
console.log(JSON.stringify(priorityScopes));
const count = predicate => entries.filter(predicate).length;
const summary = {total:entries.length,definitionsChecked:count(e=>e.definitionChecked),pronunciationsChecked:count(e=>e.pronunciationChecked),bothChecked:count(e=>e.definitionChecked&&e.pronunciationChecked)};
summary.remainingBoth = summary.total-summary.bothChecked;
const queue = entries.filter(e=>!e.definitionChecked||!e.pronunciationChecked).sort((a,b)=>{
  const priority = e => e.flags.some(f=>!['legacy-notation','cyrillic-symbol'].includes(f)) ? 0 : 1;
  return priorityRank(a.word)-priorityRank(b.word)||priority(a)-priority(b)||a.word.localeCompare(b.word,'en');
});
const publication={...policy,completedSinceLastPublish:summary.bothChecked-policy.bothCheckedAtLastPublish};
publication.remainingUntilPublish=Math.max(0,policy.publishEveryCompletedWords-publication.completedSinceLastPublish);
publication.readyToPublish=publication.remainingUntilPublish===0;
const report = {updatedOn:definitions.date,scope:'核对现代学习常用义及词性、英美音和主要同形异音；不是历史或所有专业义项的穷尽词典。仅两项都核对才计入完成。',summary,publication,batches,entries,queue:queue.map(e=>e.word)};
fs.writeFileSync(path.join(docs,'lexicon-progress.json'),JSON.stringify(report,null,2)+'\n');
const md = `# 全库音标与释义核对进度\n\n更新：${report.updatedOn}。总计 ${summary.total} 词。\n\n| 项目 | 已核对 | 尚待核对 |\n| --- | ---: | ---: |\n| 释义与词性 | ${summary.definitionsChecked} | ${summary.total-summary.definitionsChecked} |\n| 英美音与主要分读 | ${summary.pronunciationsChecked} | ${summary.total-summary.pronunciationsChecked} |\n| 两项均完成 | ${summary.bothChecked} | ${summary.remainingBoth} |\n\n每词分别保存来源和日期，不能用核对音标代替核对释义。完整状态和接续队列见 [lexicon-progress.json](lexicon-progress.json)。优先处理缺失、截断、词性矛盾和用法标记，再按字母顺序推进。未找到可靠来源的条目保持待核对，不推测填充。\n\n## 批次 001\n\n24 词：abnormal、AIDS、bend、blonde、blur、bound、brief、clear、close、counter、cross、cut、cutting、desert、double、draw、equal、even、executive、fair、fancy、fit、flat、frequent。逐词依据、修订原因和音标在 js/lexicon-review-001.js。英文例句为原创，不是词典引文。\n\n本轮核对常用现代学习义，不是专业义项的穷尽收录。现有搭配、同义替换和记忆线索不因本轮核对自动获得词典背书。\n\n复查命令：\n\n\`\`\`text\nnode tools/audit_definitions.js --write\nnode tools/check_pronunciations.js --write\nnode tools/lexicon_progress.js\n\`\`\`\n\n下一批队列前 30 词：${queue.slice(0,30).map(e=>e.word).join('、')}。\n`;
const batchNotes=batches.filter(b=>b.id!=='001').map(b=>`\n## 批次 ${b.id}\n\n完成 ${b.words.length} 词：${b.words.join('、')}。${b.note||''}\n\n${(b.deferred||[]).map(d=>{const resolved=batches.find(later=>later.id>b.id&&later.words.includes(d.w));return resolved?`历史待复核：${d.w}，已在批次 ${resolved.id} 完成核对。原记录：${d.reason} [此前资料](${d.source})。`:`待复核：${d.w}。${d.reason} [已查资料](${d.source})。不计入完成数。`;}).join('\n')}\n`).join('');
const publicationNotes=`\n## 发布节奏\n\n每批 ${policy.batchSize} 词，累计 ${policy.publishEveryCompletedWords} 词后统一推送 GitHub 和网站。本轮已在本地完成 ${publication.completedSinceLastPublish} 词，距下次发布还差 ${publication.remainingUntilPublish} 词。发布基线为 ${policy.lastPublishedCommit}，当时两项均核对 ${policy.bothCheckedAtLastPublish} 词；当前页面显示本地核对进度，不表示已上线。\n`;
fs.writeFileSync(path.join(docs,'lexicon-progress.md'),md+batchNotes+publicationNotes);
console.log(JSON.stringify(summary));
