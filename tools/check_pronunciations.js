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
  // A spelling variant may cite a dictionary's explicitly documented headword.
  if(r.sourceHeadword) assert.equal({'baby-sitter':'babysitter','bowlegged':'bow-legged'}[r.w],r.sourceHeadword,`undocumented spelling alias: ${r.w}`);
  if(r.source.startsWith('https://www.collinsdictionary.com/')) assert.equal(r.source,'https://www.collinsdictionary.com/dictionary/english/'+(r.sourceHeadword||r.w));
  else if(r.source.startsWith('https://www.oxfordlearnersdictionaries.com/')) assert.equal(r.source,'https://www.oxfordlearnersdictionaries.com/definition/english/'+r.w.toLowerCase());
  else assert.match(r.source, new RegExp('^https://dictionary\\.cambridge\\.org/(us/)?(?:pronunciation|dictionary)/english/'+(r.sourceHeadword||r.w.toLowerCase())+'$'));
  assert.match(r.checkedOn, /^\d{4}-\d{2}-\d{2}$/);
  for(const p of r.readings){
    assert(p.label && p.uk && p.us);
    for(const ph of [p.uk,p.us]) assert(!/[\u3400-\u9fff\u0400-\u04ff/'":]/.test(ph), `legacy symbol in ${r.w}: ${ph}`);
  }
  const rendered = ctx.App.pronunciationHTML({w:r.w, pronunciationReview:r});
  for(const p of r.readings) for(const ph of [p.uk,p.us]) assert(rendered.includes('/'+esc(ph)+'/'));
  assert(rendered.includes(r.source));
  for(const source of r.sources||[]) assert(rendered.includes(source),`missing pronunciation source: ${r.w}`);
  assert(!rendered.includes('尚未核对'));
}
const reading = w => reviews.find(r => r.w===w).readings;
assert.equal(reading('read')[1].uk, 'red');
assert.equal(reading('lead')[1].uk, 'led');
assert.notEqual(reading('record')[0].uk, reading('record')[1].uk);
assert.equal(reading('exploit')[0].uk, 'ɪkˈsplɔɪt');
assert.equal(reading('advocate')[1].uk,'ˈæd.və.kət');
assert.equal(reading('affect')[1].uk,'ˈæf.ekt');
assert.equal(reading('affix')[1].uk,'ˈæf.ɪks');
assert.equal(reading('adept')[1].uk,'ˈædept');
assert.equal(ctx.words.agenda.pos,'n.');
if(reviews.some(r=>r.w==='annex')){
  assert.equal(reading('annex')[0].uk,'ˈæn.ɪks');
  assert.equal(reading('annex')[1].uk,'ænˈeks');
  assert.equal(reading('appropriate')[0].uk,'əˈprəʊ.pri.ət');
  assert.equal(reading('appropriate')[1].uk,'əˈprəʊ.pri.eɪt');
  assert.equal(reading('antedate')[0].uk,'ˌæn.tiˈdeɪt');
  assert.equal(reading('antedate')[0].us,'ˈæn.t̬i.deɪt');
  assert(ctx.words.apparent.senses.some(s=>s[0].includes('表面')));
  assert(ctx.words.apprehension.senses.some(s=>s[0].includes('理解')));
  assert(ctx.words.anesthetic.definitionReview.sources.some(s=>s.includes('collinsdictionary.com')));
}
assert(!ctx.words.affection.cn.includes('影响'));
if(reviews.some(r=>r.w==='approximate')){
  assert.equal(reading('approximate')[0].uk,'əˈprɒk.sɪ.mət');
  assert.equal(reading('approximate')[1].uk,'əˈprɒk.sɪ.meɪt');
  assert.equal(reading('articulate')[1].us,'ɑːrˈtɪk.jə.leɪt');
  assert.equal(reading('arithmetic')[1].us,'ˌærɪθˈmetɪk');
  assert(reviews.find(r=>r.w==='arithmetic').sources.some(s=>s.includes('arithmetic_2')));
  assert.equal(reading('as')[1].uk,'əz');
  assert(ctx.App.pronunciationHTML(ctx.words.as,false).includes('weak'));
  assert(ctx.words.array.cn.includes('数组'));
  assert(ctx.words.assist.senses.some(s=>s[0].includes('助攻')));
  assert(ctx.words.as.pos.includes('conj.'));
}
assert(!ctx.App.pronunciationHTML(ctx.words.lead, false).includes('铅'), 'study front leaks definition');
if(reviews.some(r=>r.w==='august')){
  assert.equal(reading('august')[0].uk,'ˈɔː.ɡəst');
  assert.equal(reading('august')[1].uk,'ɔːˈɡʌst');
  assert.equal(reading('associate')[0].uk,'əˈsəʊ.si.eɪt');
  assert.equal(reading('associate')[1].uk,'əˈsəʊ.ʃi.ət');
  assert.equal(reading('attribute')[1].uk,'əˈtrɪb.juːt');
  assert.equal(reading('austerity')[0].us,'ɔːˈsterəti');
  assert(ctx.App.pronunciationHTML(ctx.words.austerity).includes('牛津词典'));
  assert(ctx.words.assumption.cn.includes('承担'));
  assert(ctx.words.attendant.pos.includes('adj.'));
  assert(ctx.words.auditor.cn.includes('旁听生'));
  assert.equal(reviews.find(r=>r.w==='atomization').source,'https://dictionary.cambridge.org/pronunciation/english/atomization');
}
assert(ctx.App.pronunciationHTML({w:'unreviewed',ph:'old'}).includes('尚未核对'));
if(reviews.some(r=>r.w==='avouch')){
  assert.equal(reading('avouch')[0].uk,'əˈvaʊtʃ');
  assert.equal(reading('ballet')[0].uk,'ˈbæl.eɪ');
  assert.equal(reading('ballet')[0].us,'bælˈeɪ');
  assert.equal(reading('balk')[0].uk,'bɔːk');
  assert.equal(reading('balk')[0].us,'bɑːlk');
  const sitter=reviews.find(r=>r.w==='baby-sitter');
  assert.equal(sitter.sourceHeadword,'babysitter');
  assert.equal(sitter.source,'https://www.collinsdictionary.com/dictionary/english/babysitter');
  assert(ctx.words['baby-sitter'].definitionReview.sources.includes(sitter.source));
  assert(ctx.words.bachelor.cn.includes('学士'));
  assert(ctx.words.baffle.pos.includes('n.'));
  assert(ctx.words.bank.cn.includes('bank on'));
  assert(ctx.words.backward.cn.includes('冒犯'));
}
if(reviews.some(r=>r.w==='beloved')){
  const beloved=reading('beloved');
  assert.equal(beloved.length,3);
  assert.equal(beloved.find(r=>r.label==='n.').us,'bɪˈlʌv.ɪd');
  assert.equal(beloved.find(r=>r.label==='adj.').us,'bɪˈlʌvd');
  assert(ctx.App.pronunciationHTML(ctx.words.beloved).includes('bɪˈlʌv.ɪd'));
  assert.equal(reading('bear')[0].uk,'beəʳ');
  assert.equal(reading('beard')[0].uk,'bɪəd');
  assert.equal(reading('bedroom').length,2);
  assert(ctx.words.battery.cn.includes('法律'));
  assert(ctx.words.bearing.senses.some(s=>s[0].includes('轴承')));
  assert(ctx.words.becoming.cn.includes('旧式'));
  assert(ctx.words.bellows.cn.includes('复数'));
  assert(ctx.words.bill.senses.some(s=>s[0].includes('鸟喙')));
}
if(reviews.some(r=>r.w==='bitumen')){
  assert.equal(reading('bitumen')[0].uk,'ˈbɪtʃ.ə.mən');
  assert.equal(reading('bitumen')[0].us,'baɪˈtuː.mən');
  assert.equal(reading('booth')[0].uk,'buːð');
  assert.equal(reading('booth')[0].us,'buːθ');
  assert.equal(reading('blouse')[0].uk,'blaʊz');
  assert.equal(reading('blouse')[0].us,'blaʊs');
  assert.equal(reading('bow')[0].uk,'baʊ');
  assert.equal(reading('bow')[1].uk,'bəʊ');
  assert(ctx.words.bore.senses.some(s=>s[0].includes('涌潮')));
  assert(ctx.words.botanical.pos.includes('n.'));
  assert(ctx.words.bowls.cn.includes('作单数'));
  const leg=reviews.find(r=>r.w==='bowlegged');
  assert.equal(leg.sourceHeadword,'bow-legged');
  assert(ctx.words.bowlegged.definitionReview.sources.includes(leg.source));
  assert.equal(reading('bowlegged').length,2);
}
if(reviews.some(r=>r.w==='buffet')){
  assert.equal(reading('breath')[0].uk,'breθ');
  assert.equal(reading('breathe')[0].uk,'briːð');
  assert.equal(reading('buffet').length,2);
  assert.equal(reading('buffet')[0].uk,'ˈbʊf.eɪ');
  assert.equal(reading('buffet')[0].us,'bəˈfeɪ');
  assert.equal(reading('buffet')[1].uk,'ˈbʌf.ɪt');
  assert(ctx.App.pronunciationHTML(ctx.words.buffet).includes('反复猛击'));
  assert.equal(reading('brochure')[0].uk,'ˈbrəʊ.ʃəʳ');
  assert.equal(reading('brochure')[0].us,'broʊˈʃʊr');
  assert(ctx.words.brook.senses.some(s=>s[0].includes('容忍')));
  assert(ctx.words.bulb.cn.includes('鳞茎'));
  assert(ctx.words.Britain.cn.includes('并非严格同义'));
  assert(ctx.words.budget.pos.includes('adj.'));
}
if(reviews.some(r=>r.w==='capillary')){
  const can=reading('can');
  assert.equal(can.find(r=>r.label==='modal strong').uk,'kæn');
  assert.equal(can.find(r=>r.label==='modal weak').uk,'kən');
  assert.equal(can.find(r=>r.label==='n./vt.').us,'kæn');
  assert(ctx.App.pronunciationHTML(ctx.words.can,{hideMeaning:true}).includes('weak'));
  assert.equal(reading('capillary')[0].uk,'kəˈpɪl.ər.i');
  assert.equal(reading('capillary')[0].us,'ˈkæp.ə.ler.i');
  assert.equal(reading('candidate').length,2);
  assert.equal(reading('candidate')[1].us,'ˈkæn.dɪ.deɪt');
  assert(ctx.words.caption.cn.includes('字幕'));
  assert(ctx.words.candid.cn.includes('非摆拍'));
  assert(ctx.words.cardinal.senses.some(s=>s[0].includes('基数')));
  assert(ctx.words.case.senses.some(s=>s[0].includes('病例')));
  assert(ctx.words.carcase.definitionReview.sources.includes('https://dictionary.cambridge.org/dictionary/english/carcass'));
}
if(reviews.some(r=>r.w==='certificate')){
  assert.equal(reading('certificate').length,2);
  assert.equal(reading('certificate')[0].uk,'səˈtɪf.ɪ.kət');
  assert.equal(reading('certificate')[1].us,'sɚˈtɪf.ɪ.keɪt');
  assert.equal(reading('centenary').length,2);
  assert.equal(reading('category')[0].uk,'ˈkæt.ə.ɡri');
  assert(ctx.words.censor.cn.includes('审查'));
  assert(ctx.words.censure.cn.includes('谴责'));
  assert(ctx.words.catholic.cn.includes('大写 Catholic'));
  assert(ctx.words.cast.senses.some(s=>s[0].includes('石膏')));
}
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
