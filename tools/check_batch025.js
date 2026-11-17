// Batch025: real card integration, source evidence, heteronyms, and publication regressions.
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
const research=JSON.parse(read('docs/batch025-research.json'));
const batch=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id==='025');
assert.equal(batch.words.length,100);assert.equal(new Set(batch.words).size,100);
assert.deepEqual(Array.from(batch.words),research.entries.map(e=>e.w));
assert.equal(batch.words[0],'mentor');assert.equal(batch.words.at(-1),'opposed');
const baseline=JSON.parse(require('child_process').execFileSync('git',['show','35a55a3:docs/lexicon-progress.json'],{cwd:root,encoding:'utf8',maxBuffer:16*1024*1024}));
assert.deepEqual(Array.from(batch.words),baseline.queue.slice(0,100));
const f1=new Set(ctx.window.EXT_WORDS.split('\n').filter(l=>l.split('\t')[4]==='f1').map(l=>l.split('\t')[0]));
for(const e of research.entries){
 assert(f1.has(e.w));assert.equal(e.checkedOn,'2026-11-17');assert(e.sources.includes(e.source));
 for(const source of e.sources)assert(['dictionary.cambridge.org','www.collinsdictionary.com'].includes(new URL(source).hostname));
 const d=ctx.window.DEFINITION_REVIEWS.find(r=>r.w===e.w),p=ctx.window.PRONUNCIATION_REVIEWS.find(r=>r.w===e.w),card=ctx.words[e.w];
 assert.equal(d.batch,'025');assert.equal(d.checkedOn,e.checkedOn);assert.equal(p.checkedOn,e.checkedOn);
 assert.equal(card.definitionReview,d);assert.equal(card.pronunciationReview,p);assert.equal(card.cn,d.cn);assert.equal(card.pos,d.pos);
 assert(e.sourceRecords.length>0);
 for(const reading of p.readings)for(const region of ['uk','us'])assert(e.readingEvidence.some(r=>r.label===reading.label&&r[region].replace(/\s/g,'')===reading[region]&&e.sources.includes(r.sources[region])),'IPA evidence: '+e.w);
 for(const pos of d.pos.split('/')){assert(d.senses.some(s=>s[0].startsWith(pos)));assert(p.readings.some(r=>r.label.includes(pos)));}
 for(const sense of d.senses)assert(card.senses.some(s=>s[0]===sense[0]&&s[1]===sense[1]),'sense merge: '+e.w);
}
const readings=w=>ctx.words[w].pronunciationReview.readings;
for(const [w,label,uk,us] of [
 ['minute','n./v.','ˈmɪn.ɪt','ˈmɪn.ɪt'],['minute','adj.','maɪˈnjuːt','maɪˈnuːt'],
 ['moderate','adj./n.','ˈmɒd.ər.ət','ˈmɑː.dɚ.ət'],['moderate','v.','ˈmɒd.ər.eɪt','ˈmɑː.də.reɪt'],
 ['mouth','n.','maʊθ','maʊθ'],['mouth','v.','maʊð','maʊð'],
 ['mutual','adj.','ˈmjuː.tju.əl','ˈmjuː.tʃu.əl'],['mutual','n.','ˈmjuː.tʃu.əl','ˈmjuː.tʃu.əl']
])assert(readings(w).some(r=>r.label===label&&r.uk===uk&&r.us===us),w+' '+label);
assert(readings('mobile').some(r=>r.label.includes('饰物')&&r.us==='ˈmoʊ·bil'));
assert(readings('mushroom').some(r=>r.uk==='ˈmʌʃ.rʊm'&&r.us==='ˈmʌʃ.rʊm'));
assert(readings('occasional').some(r=>r.uk==='əˈkeɪʒ.nəl'));
assert(readings('occasionally').some(r=>r.us==='əˈkeɪʒ.nəl.i'));
assert(readings('ongoing').some(r=>r.uk==='ˌɒŋˈɡəʊ.ɪŋ'));
assert(readings('opera').some(r=>r.uk==='ˈɒp.rə'));
for(const [w,pos] of [['mine','pron.'],['minimum','adv.'],['minority','adj.'],['neighbor','v.'],['municipal','n.'],['mushroom','adj.'],['net','adv.'],['neck','v.'],['negative','v.'],['natural','n.'],['neutral','n.'],['occasion','v.']])assert(ctx.words[w].pos.split('/').includes(pos),w);
assert(ctx.words.negative.definitionReview.sources.some(s=>s.includes('collinsdictionary.com')));
assert(ctx.words.odds.cn.includes('复数'));assert(ctx.words.neighbor.cn.includes('neighbour'));
const progress=JSON.parse(read('docs/lexicon-progress.json')),priority=JSON.parse(read('docs/review-priority.json'));
for(const w of batch.words)assert(!progress.queue.includes(w));
if(progress.batches.at(-1).id==='025'){
 assert.equal(priority.scopes[1].completed,1205);assert.equal(priority.scopes[1].remaining,741);
 assert.equal(progress.summary.bothChecked,2435);assert.equal(progress.summary.definitionsChecked,2443);assert.equal(progress.summary.pronunciationsChecked,2448);
 assert.equal(progress.publication.completedSinceLastPublish,400);assert.equal(progress.publication.remainingUntilPublish,600);assert.equal(progress.publication.readyToPublish,false);
 assert(html.includes('vocab.js?v=20261117-b025'));
}
assert.equal((html.match(/src="js\/lexicon-review-025\.js/g)||[]).length,1);
assert(html.indexOf('js/lexicon-review-025.js')<html.indexOf('js/vocab.js'));
console.log('Batch025: 100 exact queued f1 words, dictionary provenance, actual card senses/POS, regional IPA, heteronyms and pending400 passed.');
