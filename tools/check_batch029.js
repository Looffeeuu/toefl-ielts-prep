// Batch029: exact queued words, dictionary evidence, real cards and release counts.
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
const research=JSON.parse(read('docs/batch029-research.json'));
const batch=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id==='029');
assert.equal(batch.words.length,100);assert.equal(new Set(batch.words).size,100);
assert.deepEqual(Array.from(batch.words),research.entries.map(e=>e.w));
assert.equal(batch.words[0],'ridge');assert.equal(batch.words.at(-1),'shy');
const baseline=JSON.parse(require('child_process').execFileSync('git',['show','067ce7494d50c9000760f39d61a07072b7acf7ee:docs/lexicon-progress.json'],{cwd:root,encoding:'utf8',maxBuffer:16*1024*1024}));
assert.deepEqual(Array.from(batch.words),baseline.queue.slice(0,100));
const f1=new Set(ctx.window.EXT_WORDS.split('\n').filter(l=>l.split('\t')[4]==='f1').map(l=>l.split('\t')[0]));
const examples=new Set();let senseCount=0;
for(const e of research.entries){
 assert(f1.has(e.w));assert.equal(e.checkedOn,'2026-11-18');assert(e.sources.includes(e.source));
 assert.deepEqual(e.sourceRecords.map(r=>r.url),e.sources);
 for(const record of e.sourceRecords){
  assert(['dictionary.cambridge.org','www.collinsdictionary.com'].includes(new URL(record.url).hostname));
  assert(['indexed-web-search','canonical-entry-link'].includes(record.access));assert.equal(record.checkedOn,e.checkedOn);
 }
 assert(e.sourceRecords.some(s=>s.access==='indexed-web-search'));
 const d=ctx.window.DEFINITION_REVIEWS.find(r=>r.w===e.w),p=ctx.window.PRONUNCIATION_REVIEWS.find(r=>r.w===e.w),card=ctx.words[e.w];
 assert.equal(d.batch,'029');assert.equal(d.checkedOn,e.checkedOn);assert.equal(p.checkedOn,e.checkedOn);
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
assert.equal(senseCount,444);
const readings=w=>ctx.words[w].pronunciationReview.readings;
for(const [w,label,uk,us] of [
 ['row','n./v.（一排、划船）','rəʊ','roʊ'],['row','n./v.（争吵）','raʊ','raʊ'],
 ['sake','n.（缘故、利益、强调）','seɪk','seɪk'],['sake','n.（清酒）','ˈsɑː.ki','ˈsɑː.ki'],
 ['segment','n.','ˈseɡ.mənt','ˈseɡ.mənt'],['segment','v.','seɡˈment','ˈseɡ.ment']
])assert(readings(w).some(r=>r.label===label&&r.uk===uk&&r.us===us),w+' '+label);
for(const [w,uk,us] of [
 ['sample','ˈsɑːm.pəl','ˈsæm.pəl'],['scope','skəʊp','skoʊp'],
 ['scrutiny','ˈskruː.tɪ.ni','ˈskruː.t̬ən.i'],['secondary','ˈsek.ən.dri','ˈsek.ən.der.i'],
 ['secure','sɪˈkjʊər','səˈkjʊr'],['sensitivity','ˌsen.sɪˈtɪv.ə.ti','ˌsen.səˈtɪv.ə.t̬i'],
 ['setting','ˈset.ɪŋ','ˈset̬.ɪŋ'],['shower','ʃaʊər','ˈʃaʊ.ɚ']
])assert(readings(w).some(r=>r.uk===uk&&r.us===us),w);
for(const [w,pos] of [['rifle','v.'],['rim','v.'],['rival','adj.'],['romance','v.'],['roof','v.'],['rope','v.'],['routine','adj.'],['rumor','v.'],['save','prep.'],['scale','v.'],['scope','v.'],['scratch','adj.'],['section','v.'],['secure','v.'],['select','adj.'],['sentence','v.'],['shallow','n.'],['sharp','adv.'],['sharp','n.'],['sheer','adv.'],['sheer','v.'],['sheet','v.'],['shell','adj.'],['shock','adj.'],['shot','adj.'],['shot','v.'],['shrink','n.'],['shut','adj.'],['shuttle','v.'],['shy','v.']])assert(ctx.words[w].pos.split('/').includes(pos),w+' '+pos);
for(const w of ['romance','rumor','rule','scan','score','scratch','screw','season','secular','setting','sheer','shock'])assert(ctx.words[w].definitionReview.sources.some(u=>u.includes('collinsdictionary.com')));
for(const meaning of ['正式批准','制裁'])assert(ctx.words.sanction.cn.includes(meaning));
assert(ctx.words.shore.definitionReview.sources.some(u=>u.includes('/shore-up')));
assert(ctx.words.seize.definitionReview.sources.some(u=>u.includes('/seize-up')));
assert(ctx.words.shot.cn.includes('shoot'));assert(ctx.words.screw.cn.includes('粗俗'));assert(ctx.words.rumor.cn.includes('rumour'));
const progress=JSON.parse(read('docs/lexicon-progress.json')),priority=JSON.parse(read('docs/review-priority.json'));
for(const w of batch.words)assert(!progress.queue.includes(w));
if(progress.batches.at(-1).id==='029'){
 assert.equal(priority.scopes[1].completed,1605);assert.equal(priority.scopes[1].remaining,341);
 assert.equal(progress.summary.bothChecked,2835);assert.equal(progress.summary.definitionsChecked,2843);assert.equal(progress.summary.pronunciationsChecked,2842);
 const previouslyPronounced=baseline.entries.filter(e=>batch.words.includes(e.word)&&e.pronunciationChecked).map(e=>e.word);
 assert.deepEqual(previouslyPronounced,['row']);assert.equal(progress.summary.pronunciationsChecked-baseline.summary.pronunciationsChecked,99);
 assert.equal(progress.publication.completedSinceLastPublish,800);assert.equal(progress.publication.remainingUntilPublish,200);assert.equal(progress.publication.readyToPublish,false);
 assert.deepEqual(progress.queue,baseline.queue.slice(100));assert.equal(progress.queue[0],'sick');assert(html.includes('vocab.js?v=20261118-b029'));
 assert.equal(progress.updatedOn,'2026-11-18');assert.equal(JSON.parse(read('docs/definition-audit.json')).date,'2026-11-18');assert.equal(JSON.parse(read('docs/pronunciation-audit.json')).checkedOn,'2026-11-18');
 assert(read('README.md').includes('1,605'));assert(read('README.md').includes('341'));
}
assert.equal((html.match(/src="js\/lexicon-review-029\.js/g)||[]).length,1);
assert(html.indexOf('js/lexicon-review-028.js')<html.indexOf('js/lexicon-review-029.js'));
assert(html.indexOf('js/lexicon-review-029.js')<html.indexOf('js/pronunciation.js'));
console.log('Batch029: 100 exact queued f1 words, 444 original sense examples, dictionary evidence, actual card merges, row/sake/segment readings, actual review date, 99 newly checked pronunciations and pending800 passed.');
