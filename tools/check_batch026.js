// Batch026: exact queued words, dictionary evidence, real cards and release counts.
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
const research=JSON.parse(read('docs/batch026-research.json'));
const batch=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id==='026');
assert.equal(batch.words.length,100);assert.equal(new Set(batch.words).size,100);
assert.deepEqual(Array.from(batch.words),research.entries.map(e=>e.w));
assert.equal(batch.words[0],'opposite');assert.equal(batch.words.at(-1),'practitioner');
const baseline=JSON.parse(require('child_process').execFileSync('git',['show','103ae8a7a603129e56e67843a758997e2311dfac:docs/lexicon-progress.json'],{cwd:root,encoding:'utf8',maxBuffer:16*1024*1024}));
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
 assert.equal(d.batch,'026');assert.equal(d.checkedOn,e.checkedOn);assert.equal(p.checkedOn,e.checkedOn);
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
assert.equal(senseCount,341);
const readings=w=>ctx.words[w].pronunciationReview.readings;
for(const [w,label,uk,us] of [
 ['perfect','adj./n.','ˈpɜː.fekt','ˈpɝː.fekt'],['perfect','v.','pəˈfekt','pɝːˈfekt'],
 ['permit','v.','pəˈmɪt','pɚˈmɪt'],['permit','n.','ˈpɜː.mɪt','ˈpɝː.mɪt'],
 ['overlook','v.','ˌəʊ.vəˈlʊk','ˌoʊ.vɚˈlʊk'],['overlook','n.','ˈəʊ.və.lʊk','ˈoʊ.vɚ.lʊk'],
 ['patent','n./v./adj.（专利）','ˈpeɪ.tənt','ˈpæt.ənt'],['patent','adj.（明显的）','ˈpeɪ.tənt','ˈpeɪ.tənt'],
 ['overall','adj./adv.','ˌəʊ.vəˈrɔːl','ˌoʊ.vɚˈɑːl'],['overall','n.（Collins 罩衣）','ˈəʊvərˌɔːl','ˈoʊvərˌɒl'],
 ['pillow','v.','ˈpɪləʊ','ˈpɪloʊ']
])assert(readings(w).some(r=>r.label===label&&r.uk===uk&&r.us===us),w+' '+label);
assert(readings('path').some(r=>r.uk==='pɑːθ'&&r.us==='pæθ'));
assert(readings('passage').some(r=>r.uk==='ˈpæs.ɪdʒ'&&r.us==='ˈpæs.ɪdʒ'));
assert(readings('painting').some(r=>r.uk==='ˈpeɪn.tɪŋ'&&r.us==='ˈpeɪn.t̬ɪŋ'));
assert(readings('patience').some(r=>r.uk==='ˈpeɪ.ʃəns'&&r.us==='ˈpeɪ.ʃəns'));
for(const [w,pos] of [['opposite','prep.'],['opposite','adv.'],['option','v.'],['oral','n.'],['output','v.'],['overall','n.'],['panel','v.'],['partial','n.'],['period','adj.'],['period','adv.'],['permanent','n.'],['phase','v.'],['pill','v.'],['pioneer','adj.'],['platform','adj.'],['portion','v.']])assert(ctx.words[w].pos.split('/').includes(pos),w+' '+pos);
assert(ctx.words.Pole.cn.includes('波兰人'));assert(ctx.words.Pole.cn.includes('小写 pole'));
for(const w of ['option','overall','pillow','pit'])assert(ctx.words[w].definitionReview.sources.some(u=>u.includes('collinsdictionary.com')));
assert(ctx.words.permission.cn.includes('不可数'));assert(ctx.words.permit.cn.includes('可数'));
const progress=JSON.parse(read('docs/lexicon-progress.json')),priority=JSON.parse(read('docs/review-priority.json'));
for(const w of batch.words)assert(!progress.queue.includes(w));
if(progress.batches.at(-1).id==='026'){
 assert.equal(priority.scopes[1].completed,1305);assert.equal(priority.scopes[1].remaining,641);
 assert.equal(progress.summary.bothChecked,2535);assert.equal(progress.summary.definitionsChecked,2543);assert.equal(progress.summary.pronunciationsChecked,2548);
 assert.equal(progress.publication.completedSinceLastPublish,500);assert.equal(progress.publication.remainingUntilPublish,500);assert.equal(progress.publication.readyToPublish,false);
 assert.deepEqual(progress.queue,baseline.queue.slice(100));assert(html.includes('vocab.js?v=20261117-b026'));
 assert(read('README.md').includes('1,305'));assert(read('README.md').includes('641'));
}
assert.equal((html.match(/src="js\/lexicon-review-026\.js/g)||[]).length,1);
assert(html.indexOf('js/lexicon-review-025.js')<html.indexOf('js/lexicon-review-026.js'));
assert(html.indexOf('js/lexicon-review-026.js')<html.indexOf('js/pronunciation.js'));
console.log('Batch026: 100 exact queued f1 words, 341 original sense examples, dictionary source records, actual card merges, regional IPA, heteronyms and pending500 passed.');
