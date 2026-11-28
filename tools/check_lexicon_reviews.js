const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const root=path.join(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const m of html.matchAll(/src="js\/([^"?]+)(?:\?[^" ]*)?"/g)){
  if(/^(definition-reviews|pronunciation-reviews|lexicon-review-\d+)\.js$/.test(m[1])) vm.runInContext(fs.readFileSync(path.join(root,'js',m[1]),'utf8'),ctx);
}
const defs=JSON.parse(fs.readFileSync(path.join(root,'docs/definition-audit.json'),'utf8'));
const phon=JSON.parse(fs.readFileSync(path.join(root,'docs/pronunciation-audit.json'),'utf8'));
const progress=JSON.parse(fs.readFileSync(path.join(root,'docs/lexicon-progress.json'),'utf8'));
const checked=new Set();
vm.runInContext(fs.readFileSync(path.join(root,'js/irregular-verbs.js'),'utf8'),ctx);
const irregular=new Map(ctx.window.IRREGULAR_VERBS.trim().split(/\r?\n/).map(l=>{const [base,past,pp]=l.split('|');return [base,[past,pp].join(' ').split(/[^a-z-]+/i).filter(Boolean)];}));
for(const batch of ctx.window.LEXICON_REVIEW_BATCHES){
  // User explicitly requested the final 109 core words together in batch 016.
  // Batch033 completes the final 41 TOEFL high-frequency words.
  // User approved batch071 as the final 95 reviewable TOEFL f4 words; the rest are deferred.
  // User approved batch091 as the final 53 spelling variants and OALD-listed irregular forms (2026-11-28).
  if(batch.id!=='001') assert.equal(batch.words.length,batch.id==='016'?109:batch.id==='033'?41:batch.id==='071'?95:batch.id==='091'?53:100,`unexpected batch size: ${batch.id}`);
  for(const w of batch.words){
    assert(!checked.has(w),`duplicate batch word: ${w}`);checked.add(w);
    const d=ctx.window.DEFINITION_REVIEWS.find(r=>r.w===w);
    const p=ctx.window.PRONUNCIATION_REVIEWS.find(r=>r.w===w);
    assert(d&&p&&d.source&&p.source&&d.reason&&d.pos&&d.cn);
    assert.equal(defs.entries.find(e=>e.word===w)?.definition,d.cn,`definition not applied: ${w}`);
    assert.equal(phon.entries.find(e=>e.word===w)?.status,'dictionary-reviewed');
    assert(progress.entries.find(e=>e.word===w)?.definitionChecked);
    assert(!progress.queue.includes(w));
    for(const [label,example] of d.senses){
      assert.match(label,/^(?:(n|v|vt|vi|adj|adv|prep|conj|pron|det|int)\.|短语 [a-z])/);
      assert.match(example,/[.!?]$/);
      assert(!/[\u3400-\u9fff]/.test(example));
      const stem=w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      // Sibilant plurals such as rush -> rushes are valid headword examples.
      const forms=stem+'(?:s|ed|ing)?'+(/y$/.test(w)?'|'+stem.slice(0,-1)+'i(?:es|ed)':'')+(/(?:s|sh|ch|x|z)$/.test(w)?'|'+stem+'es':'');
      const inflected=[...irregular.get(w)||[]];
      if(/e$/.test(w))inflected.push(w+'d',w.slice(0,-1)+'ing');
      if(/c$/.test(w))inflected.push(w+'ked',w+'king');
      if(/[aeiou][bcdfghjklmnpqrstvwxyz]$/.test(w))inflected.push(w+w.at(-1)+'ed',w+w.at(-1)+'ing');
      const alternatives=[forms,...inflected.map(f=>f.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'))];
      assert(new RegExp('\\b(?:'+alternatives.join('|')+')\\b','i').test(example),`word absent: ${example}`);
    }
  }
}
assert.equal(new Set(progress.entries.map(e=>e.word)).size,9075);
assert.equal(progress.summary.bothChecked+progress.summary.remainingBoth,9075);
assert.equal(progress.queue.length,progress.summary.remainingBoth);
for(const batch of ctx.window.LEXICON_REVIEW_BATCHES) for(const d of batch.deferred||[]){
  assert(!batch.words.includes(d.w));
  const resolved=ctx.window.LEXICON_REVIEW_BATCHES.find(b=>b.id>batch.id&&b.words.includes(d.w));
  assert(resolved || progress.queue.includes(d.w),`deferred word disappeared without a later review: ${d.w}`);
}
const core=JSON.parse(fs.readFileSync(path.join(root,'docs/review-priority.json'),'utf8')).scopes.find(s=>s.name==='核心精编');
assert.equal(core.total,350);
assert.equal(core.completed,350);
assert.equal(core.remaining,0);
assert.equal(progress.publication.completedSinceLastPublish,progress.summary.bothChecked-progress.publication.bothCheckedAtLastPublish);
assert.equal(progress.publication.readyToPublish,progress.publication.completedSinceLastPublish>=1000);
console.log(`Batch definitions, pronunciation integration and complete queue passed: ${checked.size} words.`);
