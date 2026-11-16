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
for(const batch of ctx.window.LEXICON_REVIEW_BATCHES){
  if(batch.id!=='001') assert.equal(batch.words.length,100,`batch ${batch.id} must have 100 completed words`);
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
      assert.match(label,/^(n|v|vt|vi|adj|adv|prep|conj|pron)\./);
      assert.match(example,/[.!?]$/);
      assert(!/[\u3400-\u9fff]/.test(example));
      const stem=w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      const forms=stem+'(?:s|ed|ing)?'+(/y$/.test(w)?'|'+stem.slice(0,-1)+'i(?:es|ed)':'');
      assert(new RegExp('\\b(?:'+forms+')\\b','i').test(example),`word absent: ${example}`);
    }
  }
}
assert.equal(new Set(progress.entries.map(e=>e.word)).size,9075);
assert.equal(progress.summary.bothChecked+progress.summary.remainingBoth,9075);
assert.equal(progress.queue.length,progress.summary.remainingBoth);
for(const batch of ctx.window.LEXICON_REVIEW_BATCHES) for(const d of batch.deferred||[]){
  assert(!batch.words.includes(d.w));
  assert(progress.queue.includes(d.w),`deferred word disappeared: ${d.w}`);
}
assert.equal(progress.publication.completedSinceLastPublish,progress.summary.bothChecked-progress.publication.bothCheckedAtLastPublish);
assert.equal(progress.publication.readyToPublish,progress.publication.completedSinceLastPublish>=1000);
console.log(`Batch definitions, pronunciation integration and complete queue passed: ${checked.size} words.`);
