// Batch027: exact queued words, dictionary evidence, real cards and release counts.
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
const research=JSON.parse(read('docs/batch027-research.json'));
const batch=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id==='027');
assert.equal(batch.words.length,100);assert.equal(new Set(batch.words).size,100);
assert.deepEqual(Array.from(batch.words),research.entries.map(e=>e.w));
assert.equal(batch.words[0],'praise');assert.equal(batch.words.at(-1),'realize');
const baseline=JSON.parse(require('child_process').execFileSync('git',['show','6248df7cbb6fd50de923a726cad49a0ce3affce5:docs/lexicon-progress.json'],{cwd:root,encoding:'utf8',maxBuffer:16*1024*1024}));
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
 assert.equal(d.batch,'027');assert.equal(d.checkedOn,e.checkedOn);assert.equal(p.checkedOn,e.checkedOn);
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
assert.equal(senseCount,348);
const readings=w=>ctx.words[w].pronunciationReview.readings;
for(const [w,label,uk,us] of [
 ['premise','n./v.（动词变体）','ˈprem.ɪs','ˈprem.ɪs'],['premise','v.','prɪˈmaɪz','prɪˈmaɪz'],
 ['premise','n.（复数 premises，场所）','ˈprem.ɪ.sɪz','ˈprem.ɪ.sɪz'],
 ['produce','v.','prəˈdʒuːs','prəˈduːs'],['produce','n.','ˈprɒdʒ.uːs','ˈproʊ.duːs'],
 ['produce','v.（Cambridge Business）','prəˈdjuːs','prəˈduːs'],
 ['progress','n.','ˈprəʊ.ɡres','ˈprɑː.ɡres'],['progress','v.','prəˈɡres','prəˈɡres'],
 ['project','n.','ˈprɒdʒ.ekt','ˈprɑː.dʒekt'],['project','v.','prəˈdʒekt','prəˈdʒekt'],
 ['protest','n.','ˈprəʊ.test','ˈproʊ.test'],['protest','v.','prəˈtest','proʊˈtest'],
 ['proceeding','n.（单数 proceeding）','prəˈsiːdɪŋ','proʊˈsidɪŋ'],
 ['proceeding','n.（Collins 美音变体）','prəˈsiːdɪŋ','prəˈsidɪŋ'],
 ['proceeding','n.（复数 proceedings）','prəˈsiː.dɪŋz','proʊˈsiː.dɪŋz']
])assert(readings(w).some(r=>r.label===label&&r.uk===uk&&r.us===us),w+' '+label);
for(const r of readings('proceeding'))assert(r.uk.includes('dɪŋ')&&r.us.includes('dɪŋ'),'do not use proceed IPA for proceeding');
for(const [w,uk,us] of [['precise','prɪˈsaɪs','prəˈsaɪs'],['presumably','prɪˈzjuː.mə.bli','prɪˈzuː.mə.bli'],['proceed','prəˈsiːd','proʊˈsiːd'],['quantity','ˈkwɒn.tə.ti','ˈkwɑːn.t̬ə.t̬i'],['ranch','rɑːntʃ','ræntʃ'],['realize','ˈrɪə.laɪz','ˈriː.ə.laɪz']])assert(readings(w).some(r=>r.uk===uk&&r.us===us),w);
for(const [w,pos] of [['precious','adv.'],['preference','adj.'],['preliminary','n.'],['premise','v.'],['prescription','adj.'],['previous','n.'],['pride','v.'],['primary','n.'],['prior','n.'],['private','n.'],['privilege','v.'],['progressive','n.'],['prompt','adv.'],['proof','v.'],['proper','adv.'],['provision','v.'],['quality','adj.'],['quest','v.'],['raise','n.'],['ranch','v.'],['random','n.'],['rat','v.'],['ready','n.'],['ready','v.']])assert(ctx.words[w].pos.split('/').includes(pos),w+' '+pos);
for(const w of ['premium','presence','principal','productive','proceeding','pump','ranch','raw','ready'])assert(ctx.words[w].definitionReview.sources.some(u=>u.includes('collinsdictionary.com')));
assert(ctx.words.premise.cn.includes('只用 premises'));assert(ctx.words.proceeding.cn.includes('只用复数 proceedings'));
const progress=JSON.parse(read('docs/lexicon-progress.json')),priority=JSON.parse(read('docs/review-priority.json'));
for(const w of batch.words)assert(!progress.queue.includes(w));
if(progress.batches.at(-1).id==='027'){
 assert.equal(priority.scopes[1].completed,1405);assert.equal(priority.scopes[1].remaining,541);
 assert.equal(progress.summary.bothChecked,2635);assert.equal(progress.summary.definitionsChecked,2643);assert.equal(progress.summary.pronunciationsChecked,2644);
 const previouslyPronounced=baseline.entries.filter(e=>batch.words.includes(e.word)&&e.pronunciationChecked).map(e=>e.word);
 assert.deepEqual(previouslyPronounced,['produce','progress','project','protest']);
 assert.equal(progress.summary.pronunciationsChecked-baseline.summary.pronunciationsChecked,96);
 assert.equal(progress.publication.completedSinceLastPublish,600);assert.equal(progress.publication.remainingUntilPublish,400);assert.equal(progress.publication.readyToPublish,false);
 assert.deepEqual(progress.queue,baseline.queue.slice(100));assert.equal(progress.queue[0],'realm');assert(html.includes('vocab.js?v=20261117-b027'));
 assert(read('README.md').includes('1,405'));assert(read('README.md').includes('541'));
}
assert.equal((html.match(/src="js\/lexicon-review-027\.js/g)||[]).length,1);
assert(html.indexOf('js/lexicon-review-026.js')<html.indexOf('js/lexicon-review-027.js'));
assert(html.indexOf('js/lexicon-review-027.js')<html.indexOf('js/pronunciation.js'));
console.log('Batch027: 100 exact queued f1 words, 348 original sense examples, dictionary evidence, actual card merges, heteronyms, 96 newly checked pronunciations and pending600 passed.');
