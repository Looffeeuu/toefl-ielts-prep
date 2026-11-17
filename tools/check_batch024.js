// Batch024 provenance, scope and actual card integration regressions.
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
const research=JSON.parse(read('docs/batch024-research.json'));
const batch=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id==='024');
assert.equal(batch.words.length,100);assert.equal(new Set(batch.words).size,100);
assert.deepEqual(Array.from(batch.words),research.entries.map(e=>e.w));
assert.equal(research.entries[0].w,'isolation');assert.equal(research.entries.at(-1).w,'mention');
const f1=new Set(ctx.window.EXT_WORDS.split('\n').filter(l=>l.split('\t')[4]==='f1').map(l=>l.split('\t')[0]));
const normalize=s=>s.replace(/\s/g,'');
for(const e of research.entries){
 assert(f1.has(e.w),'outside TOEFL f1: '+e.w);
 assert.equal(e.checkedOn,'2026-11-17');assert(e.semanticNote&&e.pos);
 assert(e.sources.includes(e.source));
 for(const source of e.sources)assert.equal(new URL(source).hostname,'dictionary.cambridge.org');
 const d=ctx.window.DEFINITION_REVIEWS.find(r=>r.w===e.w);
 const p=ctx.window.PRONUNCIATION_REVIEWS.find(r=>r.w===e.w);
 assert.equal(d.batch,'024');assert.equal(d.checkedOn,e.checkedOn);assert.equal(p.checkedOn,e.checkedOn);
 assert.equal(d.source,e.source.split('?')[0]);
 assert.equal(ctx.words[e.w].definitionReview,d);assert.equal(ctx.words[e.w].pronunciationReview,p);
 assert.equal(ctx.words[e.w].cn,d.cn);assert.equal(ctx.words[e.w].pos,d.pos);
 for(const reading of p.readings)for(const region of ['uk','us']){
  assert(!/\s/.test(reading[region]));
  assert(e.readingEvidence.some(raw=>normalize(raw[region])===reading[region]),'IPA lacks transcription evidence: '+e.w+' '+region);
 }
 for(const pos of d.pos.match(/[a-z]+\./g)){
  assert(d.senses.some(s=>s[0].startsWith(pos)),'POS lacks original sense example: '+e.w+' '+pos);
  assert(p.readings.some(r=>r.label.includes(pos)),'POS lacks pronunciation: '+e.w+' '+pos);
 }
 for(const sense of d.senses)assert(ctx.words[e.w].senses.some(s=>s[0]===sense[0]&&s[1]===sense[1]),'sense not merged: '+e.w);
}
const reading=w=>ctx.words[w].pronunciationReview.readings;
assert(reading('lead').some(r=>r.label.includes('铅')&&r.uk==='led'&&r.us==='led'));
assert(reading('lead').some(r=>r.label.includes('v.')&&r.uk==='liːd'));
assert(reading('leading').some(r=>r.label.startsWith('n.')&&r.uk==='ˈled.ɪŋ'));
assert(reading('leading').some(r=>r.label==='adj.'&&r.uk==='ˈliː.dɪŋ'));
assert(reading('issue').some(r=>r.uk==='ˈɪs.juː'));
assert(reading('lawsuit').some(r=>r.uk==='ˈlɔː.sjuːt'));
assert(reading('jewelry').some(r=>r.us==='ˈdʒuː.əl.ri'));
assert(reading('medicine').some(r=>r.uk==='ˈmed.sən'));
assert(reading('mathematics').some(r=>r.us==='ˌmæθ.əˈmæt̬.ɪks'));
assert.equal(reading('laboratory')[0].uk,'ləˈbɒr.ə.tər.i');
assert.equal(reading('laboratory')[0].us,'ˈlæb.rə.tɔːr.i');
for(const w of ['journal','juice','join','loan','lobby','map','loose','loop'])assert(ctx.words[w].pos.includes('v.'),w);
assert(ctx.words.landscape.pos.includes('adj.'));
assert(ctx.words.ken.cn.includes('苏格兰'));assert(ctx.words.lift.cn.includes('英'));
assert(ctx.words.means.cn.includes('单复数同形'));assert(ctx.words.media.cn.includes('medium'));
const progress=JSON.parse(read('docs/lexicon-progress.json'));
for(const w of batch.words)assert(!progress.queue.includes(w));
if(progress.batches.at(-1).id==='024'){
 const priority=JSON.parse(read('docs/review-priority.json'));
 assert.equal(priority.scopes[1].completed,1105);assert.equal(priority.scopes[1].remaining,841);
 assert.equal(progress.summary.bothChecked,2335);
 assert.equal(progress.publication.completedSinceLastPublish,300);assert.equal(progress.publication.readyToPublish,false);
}
assert.equal((html.match(/src="js\/lexicon-review-024\.js/g)||[]).length,1);
assert(html.indexOf('js/lexicon-review-024.js')<html.indexOf('js/vocab.js'));
assert(html.includes('vocab.js?v=20261117-b024'));
console.log('Batch024: 100 f1 words, source transcriptions, POS/sense merges, heteronyms and publication counts passed.');
