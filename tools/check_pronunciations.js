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
if(reviews.some(r=>r.w==='graduate')){
  assert.equal(reading('graduate')[0].uk,'ˈɡrædʒ.u.ət');
  assert.equal(reading('graduate')[1].us,'ˈɡrædʒ.u.eɪt');
  assert.equal(reading('fragment')[1].uk,'fræɡˈment');
  assert.equal(reading('herb')[0].uk,'hɜːb');
  assert.equal(reading('herb')[0].us,'ɝːb');
  assert(ctx.words.founder.senses.some(s=>s[0].includes('沉没')));
  assert(ctx.words.hang.cn.includes('绞死'));
}
if(reviews.some(r=>r.w==='coordinate')){
  assert.equal(reading('conduct')[0].uk,'kənˈdʌkt');
  assert.equal(reading('conduct')[1].uk,'ˈkɒn.dʌkt');
  assert.equal(reading('content')[0].uk,'kənˈtent');
  assert.equal(reading('content')[1].uk,'ˈkɒn.tent');
  assert.equal(reading('contract')[1].us,'kənˈtrækt');
  assert.equal(reading('contractor')[0].uk,'kənˈtræk.təʳ');
  assert.equal(reading('contractor')[0].us,'ˈkɑːn.træk.tɚ');
  assert.equal(reading('coordinate')[0].uk,'kəʊˈɔː.dɪ.neɪt');
  assert.equal(reading('coordinate')[1].uk,'kəʊˈɔː.dɪ.nət');
  assert.equal(reading('convict')[1].us,'ˈkɑːn.vɪkt');
  assert.equal(reading('comparable').length,2);
  assert.equal(reading('complex').length,3);
  assert.equal(reading('conversion').length,2);
  assert(ctx.words.consistency.senses.some(s=>s[0].includes('稠度')));
  assert(ctx.words.concerning.pos.includes('adj.'));
  assert(ctx.words.consumer.definitionReview.sources.some(s=>s.includes('collinsdictionary.com')));
}
if(reviews.some(r=>r.w==='mate')){
  assert.equal(reading('mate')[0].uk,'meɪt');
  assert.equal(reading('mate')[1].uk,'ˈmæt.eɪ');
  assert.equal(reading('mate')[1].us,'ˈmɑː.teɪ');
  assert.equal(reading('process')[1].uk,'prəˈses');
  assert.equal(reading('suspect')[0].uk,'səˈspekt');
  assert.equal(reading('suspect')[1].uk,'ˈsʌs.pekt');
  assert.equal(reading('upset')[1].us,'ˈʌp.set');
  assert.equal(reading('address')[0].us,'ˈæd.res');
  assert.equal(reading('address')[1].us,'əˈdres');
  assert.equal(reading('combine')[1].uk,'ˈkɒm.baɪn');
  assert.equal(reading('chef')[0].uk,'ʃef');
  assert.equal(reading('clerk')[0].uk,'klɑːk');
  assert.equal(reading('clerk')[0].us,'klɝːk');
  assert(ctx.words.chip.cn.includes('薯条（英国）'));
  assert(ctx.words.chip.cn.includes('薯片（美国）'));
  assert(ctx.words.clothing.cn.includes('不可数'));
}
if(reviews.some(r=>r.w==='ruins')){
  assert.equal(reading('ruins')[0].uk,'ˈruːɪnz');
  assert.equal(reading('ruins')[0].us,'ɹu.ɪnz');
  const ruins=reviews.find(r=>r.w==='ruins');
  assert(ruins.sources.includes('https://www.spanishdict.com/pronunciation/ruins'));
  assert(ctx.App.pronunciationHTML(ctx.words.ruins).includes('SpanishDictionary.com'));
  assert.equal(reading('recall')[1].uk,'ˈriː.kɔːl');
  assert.equal(reading('rotate')[0].uk,'rəʊˈteɪt');
  assert.equal(reading('rotate')[0].us,'ˈroʊ.teɪt');
  assert.equal(reading('saturate')[1].us,'ˈsætʃ.ə.rət');
  assert.equal(reading('strata').length,2);
  assert(ctx.words.wage.senses.some(s=>s[0].includes('发动')));
}
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
if(reviews.some(r=>r.w==='cognitive')){
 assert.equal(reading('compress')[0].uk,'kəmˈpres');
 assert.equal(reading('compress')[1].uk,'ˈkɒm.pres');
 assert.equal(reading('document')[1].us,'ˈdɑː.kjə.ment');
 assert.equal(reading('estimate')[1].us,'ˈes.tə.mət');
 assert.equal(reading('elaborate')[1].us,'iˈlæb.ə.reɪt');
 assert.equal(reading('dynasty')[0].uk,'ˈdɪn.ə.sti');
 assert.equal(reading('fertile')[0].us,'ˈfɝː.t̬əl');
 assert.equal(reading('contribute').length,2);
 assert.equal(reading('controversy').length,2);
 assert(ctx.words.commission.senses.some(s=>s[0].includes('佣金')));
 assert(ctx.words.currency.senses.some(s=>s[0].includes('普遍接受')));
}
if(reviews.some(r=>r.w==='habituation')){
 assert.equal(reading('ornament')[0].uk,'ˈɔː.nə.mənt');
 assert.equal(reading('ornament')[1].uk,'ˈɔː.nə.ment');
 assert.equal(reading('hinder')[1].us,'ˈhaɪndər');
 assert.equal(reading('instinct')[1].uk,'ɪnˈstɪŋkt');
 assert.equal(reading('glacier').length,2);
 assert.equal(reading('genre')[0].uk,'ˈʒɑ̃ː.rə');
 assert.equal(reading('migrate')[0].us,'ˈmaɪ.ɡreɪt');
 assert.equal(reading('perception')[0].us,'pərˈsepʃn');
 assert(ctx.words.offspring.cn.includes('单复数同形'));
 assert(ctx.words.implicit.senses.some(s=>s[0].includes('毫无保留')));
 assert(ctx.words.maintain.senses.some(s=>s[0].includes('供养')));
}
if(reviews.some(r=>r.w==='diagnose')){
 assert.equal(reading('diagnose')[0].uk,'ˌdaɪ.əɡˈnəʊz');
 assert.equal(reading('diagnose')[0].us,'ˌdaɪ.əɡˈnoʊs');
 assert.equal(reading('decrease').length,3);
 assert.equal(reading('decrease')[1].label,'v. 另一读音');
 assert.equal(reading('decrease')[2].uk,'ˈdiː.kriːs');
 assert.equal(reading('debris')[0].us,'dəˈbriː');
 assert.equal(reading('debris')[1].uk,'ˈdeɪ.briː');
 assert.equal(reading('costume')[0].uk,'ˈkɒs.tʃuːm');
 assert.equal(reading('costume')[0].us,'ˈkɑː.stuːm');
 assert.equal(reading('device')[0].us,'dɪˈvaɪs');
 assert.equal(reading('devise')[0].us,'dɪˈvaɪz');
 assert(ctx.words.date.senses.some(s=>s[0].includes('椰枣')));
 assert(ctx.words.counsel.senses.some(s=>s[0].includes('律师')));
 assert(ctx.words.custom.senses.some(s=>s[0].includes('光顾')));
 assert(ctx.words.craft.cn.includes('单复数同形'));
 assert(ctx.words.dependent.cn.includes('dependant'));
 assert(ctx.words.devote.definitionReview.sources.includes('https://dictionary.cambridge.org/dictionary/english/devote-to'));
}
if(reviews.some(r=>r.w==='diagnosis')){
 assert.equal(reading('diagnosis')[1].us,'ˌdaɪ.əɡˈnoʊ.siːz');
 assert.equal(reading('dictate')[0].uk,'dɪkˈteɪt');
 assert.equal(reading('dictate')[0].us,'ˈdɪk.teɪt');
 assert.equal(reading('dictate')[1].uk,'ˈdɪk.teɪt');
 assert.equal(reading('discount')[0].uk,'ˈdɪs.kaʊnt');
 assert.equal(reading('discount')[1].uk,'dɪˈskaʊnt');
 assert.equal(reading('dispute')[1].label,'n. 另一读音');
 assert.equal(reading('drawer')[0].uk,'drɔːʳ');
 assert.equal(reading('emission')[0].uk,'iˈmɪʃ.ən');
 assert.equal(reading('employee')[1].us,'ˌem.plɔɪˈiː');
 assert.equal(reviews.find(r=>r.w==='dynamics').source,'https://www.collinsdictionary.com/dictionary/english/dynamics');
 assert(ctx.words.discipline.senses.some(s=>s[0].includes('学科')));
 assert(ctx.words.discrimination.senses.some(s=>s[0].includes('辨别')));
 assert(ctx.words.drawing.senses.some(s=>s[0].includes('抽签')));
 assert(ctx.words.draft.senses.some(s=>s[0].includes('桶装')));
 assert(ctx.words.endure.senses.some(s=>s[0].startsWith('vi.')));
}
if(reviews.some(r=>r.w==='entrance')){
 assert.equal(reading('entrance')[0].uk,'ˈen.trəns');
 assert.equal(reading('entrance')[1].uk,'ɪnˈtrɑːns');
 assert.equal(reading('entrance')[1].us,'ɪnˈtræns');
 assert.equal(reading('excuse')[0].us,'ɪkˈskjuːz');
 assert.equal(reading('excuse')[1].us,'ɪkˈskjuːs');
 assert.equal(reading('extract')[0].uk,'ɪkˈstrækt');
 assert.equal(reading('extract')[1].uk,'ˈek.strækt');
 assert.equal(reading('expose')[1].us,'ˌekspəʊˈzeɪ');
 assert.equal(reading('financial')[1].uk,'fɪˈnæn.ʃəl');
 assert.equal(reading('financial')[1].us,'fəˈnæn.ʃəl');
 assert.equal(reviews.find(r=>r.w==='ethics').source,'https://www.collinsdictionary.com/dictionary/english/ethics');
 assert(reviews.find(r=>r.w==='finance').sources.includes('https://www.collinsdictionary.com/dictionary/english/finance'));
 assert(ctx.words.entertain.senses.some(s=>s[0].includes('考虑')));
 assert(ctx.words.faculty.senses.some(s=>s[0].includes('全体教师')));
 assert(ctx.words.facility.senses.some(s=>s[0].includes('信贷')));
 assert(ctx.words.file.senses.some(s=>s[0].includes('锉刀')));
 assert(ctx.words.fixed.senses.some(s=>s[0].includes('绝育')));
}
// Batch 023: preserve part-of-speech pronunciation contrasts through the merge.
if(reviews.some(r=>r.w==='isolated')){
 const expected={house:['haʊs','haʊz'],impact:['ˈɪm.pækt','ɪmˈpækt'],implement:['ˈɪm.plɪ.ment','ˈɪm.plɪ.mənt'],import:['ɪmˈpɔːt','ˈɪm.pɔːt'],initiate:['ɪˈnɪʃ.i.eɪt','ɪˈnɪʃ.i.ət'],insert:['ɪnˈsɜːt','ˈɪn.sɜːt'],intimate:['ˈɪn.tɪ.mət','ˈɪn.tɪ.mət','ˈɪn.tɪ.meɪt'],isolate:['ˈaɪ.sə.leɪt','ˈaɪ.sə.lət']};
 for(const [w,uk] of Object.entries(expected)) assert.deepEqual(Array.from(reading(w),r=>r.uk),uk,`lost POS contrast: ${w}`);
 assert.equal(reading('hostile')[0].us,'ˈhɑː.stəl');
 assert.equal(reading('inherent')[0].us,'ɪnˈhɪə.rənt');
 assert.equal(reading('inquiry')[0].us,'ˈɪn.kwɚ.i');
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
if(process.argv.includes('--write')) fs.writeFileSync(path.join(root,'docs/pronunciation-audit.json'),JSON.stringify({checkedOn:'2026-11-18',summary,entries},null,2)+'\n');
console.log(JSON.stringify(summary));
console.log('Pronunciation source, merge, heteronym and renderer checks passed.');
