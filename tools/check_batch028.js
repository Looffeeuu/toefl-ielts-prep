// Batch028: exact queued words, dictionary evidence, real cards and release counts.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const root=path.join(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const ctx={window:{},App:{}};vm.createContext(ctx);
const html=read('index.html');
for(const m of html.matchAll(/src="js\/([^"?]+)(?:\?[^" ]*)?"/g)){
 const f=m[1];if(f==='vocab.js')break;
 if(/^words.*\.js$/.test(f)||/^(definition-reviews|pronunciation-reviews|lexicon-review-\d+)\.js$/.test(f))vm.runInContext(read('js/'+f),ctx,{filename:f});
}
const vocab=read('js/vocab.js');
vm.runInContext(vocab.slice(0,vocab.indexOf('const BASE_N = WORDS.length;'))+'globalThis.words=BY;})();',ctx);
const research=JSON.parse(read('docs/batch028-research.json'));
const batch=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id==='028');
assert.equal(batch.words.length,100);assert.equal(new Set(batch.words).size,100);
assert.deepEqual(Array.from(batch.words),research.entries.map(e=>e.w));
assert.equal(batch.words[0],'realm');assert.equal(batch.words.at(-1),'rid');
const baseline=JSON.parse(require('child_process').execFileSync('git',['show','764adb28bd43d199a26ba27e9e5833af8bd30d79:docs/lexicon-progress.json'],{cwd:root,encoding:'utf8',maxBuffer:16*1024*1024}));
assert.deepEqual(Array.from(batch.words),baseline.queue.slice(0,100));
const f1=new Set(ctx.window.EXT_WORDS.split('\n').filter(l=>l.split('\t')[4]==='f1').map(l=>l.split('\t')[0]));
const examples=new Set();let senseCount=0;
for(const e of research.entries){
 assert(f1.has(e.w));assert.equal(e.checkedOn,'2026-11-17');assert(e.sources.includes(e.source));
 assert.deepEqual(e.sourceRecords.map(r=>r.url),e.sources);
 for(const record of e.sourceRecords){
  assert(['dictionary.cambridge.org','www.collinsdictionary.com'].includes(new URL(record.url).hostname));
  assert(['indexed-web-search','canonical-entry-link'].includes(record.access));assert.equal(record.checkedOn,e.checkedOn);
 }
 assert(e.sourceRecords.some(s=>s.access==='indexed-web-search'));
 const d=ctx.window.DEFINITION_REVIEWS.find(r=>r.w===e.w),p=ctx.window.PRONUNCIATION_REVIEWS.find(r=>r.w===e.w),card=ctx.words[e.w];
 assert.equal(d.batch,'028');assert.equal(d.checkedOn,e.checkedOn);assert.equal(p.checkedOn,e.checkedOn);
 assert.equal(card.definitionReview,d);assert.equal(card.pronunciationReview,p);assert.equal(card.cn,d.cn);assert.equal(card.pos,d.pos);assert.equal(e.pos,d.pos);assert.equal(e.semanticNote,d.cn);
 for(const reading of p.readings)for(const region of ['uk','us']){
  const evidence=e.readingEvidence.find(r=>r.label===reading.label&&r[region].replace(/\s/g,'')===reading[region]);
  assert(evidence,'IPA evidence: '+e.w+' '+reading.label);
  assert(e.sourceRecords.some(s=>s.url===evidence.sources[region]&&s.access==='indexed-web-search'&&s.pronunciationEvidence.some(v=>v.label===reading.label&&v.region===region&&v.ipa===evidence[region])),'observed pronunciation source: '+e.w);
 }
 for(const pos of d.pos.split('/')){assert(d.senses.some(s=>s[0].startsWith(pos)));assert(p.readings.some(r=>r.label.includes(pos)));}
 for(const [label,example] of d.senses){
  assert(card.senses.some(s=>s[0]===label&&s[1]===example),'sense merge: '+e.w);
  assert(e.senseEvidence.some(s=>s.sense===label&&s.sources.length&&s.sources.every(u=>e.sources.includes(u))));
  assert(!examples.has(example),'duplicate example: '+example);examples.add(example);senseCount++;
  assert.match(example,/[.!?]$/);assert(!/[\u3400-\u9fff]/.test(example));
 }
}
assert.equal(senseCount,330);
const readings=w=>ctx.words[w].pronunciationReview.readings;
for(const [w,label,uk,us] of [
 ['rebel','n./adj.','ˈreb.əl','ˈreb.əl'],['rebel','v.','rɪˈbel','rɪˈbel'],
 ['refuse','v.','rɪˈfjuːz','rɪˈfjuːz'],['refuse','n.','ˈref.juːs','ˈref.juːs'],
 ['reject','v.','rɪˈdʒekt','rɪˈdʒekt'],['reject','n.','ˈriː.dʒekt','ˈriː.dʒekt'],
 ['resume','v.','rɪˈzjuːm','rɪˈzuːm'],['resume','n.（résumé）','ˈrez.juː.meɪ','ˈrez.ə.meɪ'],
 ['retail','n./adj./adv./v.（零售）','ˈriː.teɪl','ˈriː.teɪl'],['retail','v.（转述消息）','rɪˈteɪl','rɪˈteɪl']
])assert(readings(w).some(r=>r.label===label&&r.uk===uk&&r.us===us),w+' '+label);
for(const [w,uk,us] of [
 ['recover','rɪˈkʌv.ər','rɪˈkʌv.ɚ'],['rely','rɪˈlaɪ','rɪˈlaɪ'],['refer','rɪˈfɜːr','rɪˈfɝː'],
 ['resource','rɪˈzɔːs','ˈriː.sɔːrs'],['regulatory','ˌreɡ.jəˈleɪ.tər.i','ˈreɡ.jə.lə.tɔːr.i'],
 ['republic','rɪˈpʌb.lɪk','rəˈpʌb.lɪk'],['representative','ˌrep.rɪˈzen.tə.tɪv','ˌrep.rɪˈzen.t̬ə.t̬ɪv'],
 ['rhetoric','ˈret.ər.ɪk','ˈret̬.ɚ.ɪk'],['rhythm','ˈrɪð.əm','ˈrɪð.əm']
])assert(readings(w).some(r=>r.uk===uk&&r.us===us),w);
for(const [w,pos] of [['rear','adj.'],['rear','v.'],['reason','v.'],['rebel','adj.'],['recruit','n.'],['register','n.'],['regular','n.'],['regulation','adj.'],['reject','n.'],['remote','n.'],['remove','n.'],['rental','adj.'],['repair','n.'],['representative','adj.'],['rescue','adj.'],['reserve','n.'],['resident','adj.'],['resolve','n.'],['resort','v.'],['resource','v.'],['resume','n.'],['retail','adv.'],['reverse','adj.'],['revolutionary','n.'],['rid','adj.']])assert(ctx.words[w].pos.split('/').includes(pos),w+' '+pos);
for(const w of ['rebel','recommend','reduce','reduction','reflection','relief','relieve','remove','retail','retire','retrieve'])assert(ctx.words[w].definitionReview.sources.some(u=>u.includes('collinsdictionary.com')));
assert(ctx.words.rely.definitionReview.sources.some(u=>u.includes('/rely-on-upon')));
assert(ctx.words.refer.definitionReview.sources.some(u=>u.includes('/refer-to')));
assert(ctx.words.resort.definitionReview.sources.some(u=>u.includes('/resort-to')));
assert(ctx.words.rent.cn.includes('rend'));assert(ctx.words.reserve.cn.includes('不可数'));assert(ctx.words.resume.cn.includes('résumé'));
const progress=JSON.parse(read('docs/lexicon-progress.json')),priority=JSON.parse(read('docs/review-priority.json'));
for(const w of batch.words)assert(!progress.queue.includes(w));
if(progress.batches.at(-1).id==='028'){
 assert.equal(priority.scopes[1].completed,1505);assert.equal(priority.scopes[1].remaining,441);
 assert.equal(progress.summary.bothChecked,2735);assert.equal(progress.summary.definitionsChecked,2743);assert.equal(progress.summary.pronunciationsChecked,2743);
 const previouslyPronounced=baseline.entries.filter(e=>batch.words.includes(e.word)&&e.pronunciationChecked).map(e=>e.word);
 assert.deepEqual(previouslyPronounced,['refuse']);assert.equal(progress.summary.pronunciationsChecked-baseline.summary.pronunciationsChecked,99);
 assert.equal(progress.publication.completedSinceLastPublish,700);assert.equal(progress.publication.remainingUntilPublish,300);assert.equal(progress.publication.readyToPublish,false);
 assert.deepEqual(progress.queue,baseline.queue.slice(100));assert.equal(progress.queue[0],'ridge');assert(html.includes('vocab.js?v=20261117-b028'));
 assert(read('README.md').includes('1,505'));assert(read('README.md').includes('441'));
}
assert.equal((html.match(/src="js\/lexicon-review-028\.js/g)||[]).length,1);
assert(html.indexOf('js/lexicon-review-027.js')<html.indexOf('js/lexicon-review-028.js'));
assert(html.indexOf('js/lexicon-review-028.js')<html.indexOf('js/pronunciation.js'));
console.log('Batch028: 100 exact queued f1 words, 330 original sense examples, dictionary evidence, actual card merges, heteronyms, 99 newly checked pronunciations and pending700 passed.');
