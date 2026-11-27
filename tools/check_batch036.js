// Batch036: 100 TOEFL f2 words, OALD evidence and real card merges.
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
const research=JSON.parse(read('docs/batch036-research.json'));
const batch=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id==='036');
assert.equal(batch.words.length,100);assert.equal(new Set(batch.words).size,100);
assert.deepEqual(Array.from(batch.words),research.entries.map(e=>e.w));
const f2=new Set(ctx.window.EXT_WORDS.split('\n').filter(l=>l.split('\t')[4]==='f2').map(l=>l.split('\t')[0]));
const OALD='https://www.oxfordlearnersdictionaries.com/definition/english/';
const examples=new Set();let senses=0;
for(const e of research.entries){
 assert(f2.has(e.w),'not f2: '+e.w);assert.equal(e.checkedOn,'2026-11-25');
 assert.equal(e.source,OALD+e.w.toLowerCase());assert(e.sources.includes(e.source));
 assert.deepEqual(e.sourceRecords.map(r=>r.url),e.sources);
 for(const r of e.sourceRecords){assert(r.url.startsWith(OALD));assert(['browser-dom-fetch','canonical-entry-link'].includes(r.access));}
 assert(e.sourceRecords.some(r=>r.access==='browser-dom-fetch'));
 const d=ctx.window.DEFINITION_REVIEWS.find(r=>r.w===e.w),p=ctx.window.PRONUNCIATION_REVIEWS.find(r=>r.w===e.w),card=ctx.words[e.w];
 assert.equal(d.batch,'036');assert.equal(card.definitionReview,d);assert.equal(card.pronunciationReview,p);
 assert.equal(card.cn,d.cn);assert.equal(card.pos,d.pos);assert.equal(e.semanticNote,d.cn);
 for(const reading of p.readings)assert(e.readingEvidence.some(r=>r.label===reading.label&&r.uk===reading.uk&&r.us===reading.us&&r.rawUk==='/'+reading.uk+'/'&&r.rawUs==='/'+reading.us+'/'),'IPA evidence: '+e.w);
 for(const pos of d.pos.split('/')){assert(d.senses.some(s=>s[0].startsWith(pos)),'sense pos: '+e.w+' '+pos);assert(p.readings.some(r=>r.label.includes(pos)),'reading pos: '+e.w+' '+pos);}
 for(const [label,example] of d.senses){
  assert(card.senses.some(s=>s[0]===label&&s[1]===example),'sense merge: '+e.w);
  assert(e.senseEvidence.some(s=>s.sense===label&&s.sources.length));
  assert(!examples.has(example),'duplicate example: '+example);examples.add(example);senses++;
 }
}
assert.equal(senses,research.counts.senses);assert.equal(research.counts.completed,100);
const readings=w=>ctx.words[w].pronunciationReview.readings;
for(const [w,uk,us] of [['deterrent','dɪˈterənt','dɪˈtɜːrənt'],['diversion','daɪˈvɜːʃn','daɪˈvɜːrʒn'],['disastrous','dɪˈzɑːstrəs','dɪˈzæstrəs'],['dual','ˈdjuːəl','ˈduːəl'],['dodge','dɒdʒ','dɑːdʒ']])
 assert(readings(w).some(r=>r.uk===uk&&r.us===us),w);
for(const [w,uks] of [['delegate',['ˈdelɪɡət','ˈdelɪɡeɪt']],['deliberate',['dɪˈlɪbərət','dɪˈlɪbəreɪt']],['designate',['ˈdezɪɡneɪt','ˈdezɪɡnət']],['digest',['daɪˈdʒest','ˈdaɪdʒest']],['discharge',['dɪsˈtʃɑːdʒ','ˈdɪstʃɑːdʒ']],['disconnect',['ˌdɪskəˈnekt','ˈdɪskənekt']]])
 assert.deepEqual(Array.from(readings(w),r=>r.uk),uks,w);
const progress=JSON.parse(read('docs/lexicon-progress.json'));
for(const w of batch.words)assert(!progress.queue.includes(w));
assert.deepEqual(Array.from(batch.deferred,d=>d.w),['destine']);
for(const d of batch.deferred){const later=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id>batch.id&&b.words.includes(d.w));if(later)continue;assert(progress.queue.includes(d.w));assert(!ctx.words[d.w].definitionReview);}
assert.equal((html.match(/src="js\/lexicon-review-036\.js/g)||[]).length,1);
assert(html.indexOf('js/lexicon-review-033.js')<html.indexOf('js/lexicon-review-036.js'));
assert(html.indexOf('js/lexicon-review-036.js')<html.indexOf('js/pronunciation.js'));
console.log(`Batch036: 100 TOEFL f2 words, ${senses} original sense examples, OALD DOM evidence, card merges, heteronym readings and deferred destine passed.`);
