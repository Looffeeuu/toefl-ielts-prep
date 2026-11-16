// Actual index.html load order and vocab merge, plus source/renderer checks.
// --write emits a complete inventory, not a claim of dictionary verification.
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert/strict');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ctx = {window:{}, App:{esc}}; vm.createContext(ctx);
for(const m of html.matchAll(/src="js\/([^"?]+)(?:\?[^" ]*)?"/g)){
  const f = m[1]; if(f === 'vocab.js') break;
  if(/^words.*\.js$/.test(f) || /^lexicon-review-\d+\.js$/.test(f) || /^(definition-reviews|pronunciation-reviews|pronunciation)\.js$/.test(f))
    vm.runInContext(fs.readFileSync(path.join(root, 'js', f), 'utf8'), ctx, {filename:f});
}
const vocab = fs.readFileSync(path.join(root,'js/vocab.js'),'utf8');
vm.runInContext(vocab.slice(0,vocab.indexOf('const BASE_N = WORDS.length;'))+'globalThis.words = BY;})();',ctx);
const reviews = ctx.window.PRONUNCIATION_REVIEWS, seen = new Set();
for(const r of reviews){
  assert(!seen.has(r.w), `duplicate ${r.w}`); seen.add(r.w);
  if(ctx.words[r.w]) assert.equal(ctx.words[r.w].pronunciationReview, r, `not applied: ${r.w}`);
  assert.match(r.source, new RegExp('^https://dictionary\\.cambridge\\.org/(us/)?(?:pronunciation|dictionary)/english/'+r.w.toLowerCase()+'$'));
  assert.match(r.checkedOn, /^\d{4}-\d{2}-\d{2}$/);
  for(const p of r.readings){
    assert(p.label && p.uk && p.us);
    for(const ph of [p.uk,p.us]) assert(!/[\u3400-\u9fff\u0400-\u04ff/'":]/.test(ph), `legacy symbol in ${r.w}: ${ph}`);
  }
  const rendered = ctx.App.pronunciationHTML({w:r.w, pronunciationReview:r});
  for(const p of r.readings) for(const ph of [p.uk,p.us]) assert(rendered.includes('/'+esc(ph)+'/'));
  assert(rendered.includes(r.source));
  assert(!rendered.includes('尚未核对'));
}
const reading = w => reviews.find(r => r.w===w).readings;
assert.equal(reading('read')[1].uk, 'red');
assert.equal(reading('lead')[1].uk, 'led');
assert.notEqual(reading('record')[0].uk, reading('record')[1].uk);
assert.equal(reading('exploit')[0].uk, 'ɪkˈsplɔɪt');
assert(!ctx.App.pronunciationHTML(ctx.words.lead, false).includes('铅'), 'study front leaks definition');
assert(ctx.App.pronunciationHTML({w:'unreviewed',ph:'old'}).includes('尚未核对'));
assert(ctx.App.pronunciationHTML({w:'<test>',ph:'<bad>',custom:true}).includes('&lt;bad&gt;'));
assert(!ctx.App.pronunciationHTML({w:'<test>',ph:'<bad>'}).includes('<bad>'));
assert(!vocab.includes('esc(o.ph)'), 'a vocab surface still renders legacy IPA directly');
const entries = Object.values(ctx.words).map(o => ({
  word:o.w, legacyPhonetic:o.ph||null,
  status:o.pronunciationReview ? 'dictionary-reviewed' : 'unverified',
  review:o.pronunciationReview || null,
  // These are notation candidates, not proven pronunciation errors.
  flags:o.pronunciationReview ? [] : [!o.ph?'missing-phonetic':null, /[\u0400-\u04ff]/.test(o.ph||'')?'cyrillic-symbol':null, /['":]/.test(o.ph||'')?'legacy-notation':null].filter(Boolean)
}));
const reviewed = entries.filter(e=>e.status==='dictionary-reviewed').length;
const summary = {total:entries.length, reviewed, unverified:entries.length-reviewed, referenceWords:seen.size, flags:{}};
for(const e of entries) for(const f of e.flags) summary.flags[f] = (summary.flags[f]||0)+1;
if(process.argv.includes('--write')) fs.writeFileSync(path.join(root,'docs/pronunciation-audit.json'),JSON.stringify({checkedOn:'2026-11-16',summary,entries},null,2)+'\n');
console.log(JSON.stringify(summary));
console.log('Pronunciation source, merge, heteronym and renderer checks passed.');
