const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert/strict'),cp=require('child_process');
const root=path.join(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const baseline=JSON.parse(cp.execFileSync('git',['show','38a94de:docs/lexicon-progress.json'],{cwd:root,encoding:'utf8',maxBuffer:20000000}));
const ctx={window:{}};vm.createContext(ctx);
const html=read('index.html');
for(const m of html.matchAll(/src="js\/([^"?]+)(?:\?[^" ]*)?"/g))if(/^(definition-reviews|pronunciation-reviews|lexicon-review-\d+)\.js$/.test(m[1]))vm.runInContext(read('js/'+m[1]),ctx);
const batches=ctx.window.LEXICON_REVIEW_BATCHES.filter(b=>['030','031','032','033'].includes(b.id));
const words=Array.from(batches.flatMap(b=>Array.from(b.words)));
assert.equal(batches.length,4);assert.equal(words.length,341);assert.equal(new Set(words).size,341);
assert.deepEqual(words,baseline.queue.slice(0,341));
for(const w of words){
 const d=ctx.window.DEFINITION_REVIEWS.find(e=>e.w===w),p=ctx.window.PRONUNCIATION_REVIEWS.find(e=>e.w===w);
 assert(d&&p&&d.source&&d.senses.length,`missing reviewed senses: ${w}`);
 assert.equal(d.checkedOn,'2026-11-22');assert.equal(p.checkedOn,'2026-11-22');
 for(const r of p.readings)assert(r.uk&&r.us&&r.label,`missing pronunciation: ${w}`);
}
const scopes=JSON.parse(read('docs/review-priority.json')).scopes;
assert.equal(scopes[0].completed,350);assert.equal(scopes[1].completed,1946);assert.equal(scopes[1].remaining,0);
const progress=JSON.parse(read('docs/lexicon-progress.json'));
// Later batches (034+) keep adding reviewed words beyond this 341-word milestone.
if(progress.batches.at(-1).id==='033')assert.equal(progress.summary.bothChecked,baseline.summary.bothChecked+341);
else assert(progress.summary.bothChecked>baseline.summary.bothChecked+341);
for(const w of words)assert(!progress.queue.includes(w));
console.log('All remaining 341 TOEFL words integrated exactly once; core350 and TOEFL1946 complete.');
