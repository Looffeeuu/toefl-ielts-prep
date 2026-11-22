// node tools/audit_definitions.js --write
// 全库来源与一致性审计。启发式候选不是已证实的语义错误。
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), dir = path.join(root, 'js');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const ctx = { window:{}, App:{} }; vm.createContext(ctx);
const scripts = [...html.matchAll(/src="js\/([^"?]+)(?:\?[^" ]*)?"/g)].map(m=>m[1]);
for(const f of scripts){
  if(f==='vocab.js') break;
  if(/^words.*\.js$/.test(f)||/^lexicon-review-\d+\.js$/.test(f)||f==='definition-reviews.js'||f==='pronunciation-reviews.js') vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'),ctx,{filename:f});
}
const vocab = fs.readFileSync(path.join(dir,'vocab.js'),'utf8');
vm.runInContext(vocab.slice(0,vocab.indexOf('const BASE_N = WORDS.length;'))+'globalThis.auditWords = BY;})();',ctx);
const sources = {}, raw = {};
const add = (w,p,cn,file,kind) => { if(!w)return; (raw[w] ||= []).push({pos:p,cn,file,kind}); };
for(const t of ctx.window.TOPICS) for(const l of t.raw.trim().split(/\r?\n/)){const [w,p,cn]=l.split('|').map(s=>s.trim());add(w,p,cn,'js/words.js','editorial-unverified');}
for(const f of scripts.filter(f=>/^words-rich.*\.js$|^words-pos-.*\.js$/.test(f))){
  const text = fs.readFileSync(path.join(dir,f),'utf8');
  const key = text.match(/window\.(\w+)\s*=/)?.[1];
  for(const l of (ctx.window[key]||'').trim().split(/\r?\n/)){const [w,p,cn]=l.split('|').map(s=>s.trim());add(w,p,cn,'js/'+f,'editorial-unverified');}
}
for(const [key,file] of [['EXT_WORDS','js/words-ext.js'],['IELTS_WORDS','js/words-ielts.js']])
  for(const l of ctx.window[key].split('\n')){const [w,,p,cn]=l.split('\t');add(w,p,cn,file,'ecdict-derived');}
const entries = Object.values(ctx.auditWords).map(o=>{
  const candidates=raw[o.w]||raw[o.w.toLowerCase()]||[];
  const exact=candidates.filter(r=>r.cn===o.cn&&r.pos===o.pos);
  const review=o.definitionReview;
  const origin=review?'dictionary-reviewed':exact.some(r=>r.kind==='editorial-unverified')?'editorial-unverified':exact.length?'ecdict-derived':'unresolved';
  sources[origin]=(sources[origin]||0)+1;
  const flags=[];
  if(!o.pos)flags.push('missing-pos');
  if(!o.cn)flags.push('missing-definition');
  if(/[，；、：]$|(?:，使|；使)$/.test(o.cn)||(!review&&o.cn.length===40))flags.push('possible-truncation');
  if(/白痴|笨蛋|懒胖|变态|性欲反常/.test(o.cn))flags.push('usage-label-review');
  const expected=new Set([...o.pos.matchAll(/(vt|vi|v|n|adj|adv|prep|conj|pron|num)\./g)].map(m=>m[1]));
  const missing=new Set();
  for(const [s] of o.senses||[]){const p=s.match(/^(vt|vi|v|n|adj|adv|prep|conj)\./)?.[1];if(p&&!expected.has(p)&&!(['vt','vi'].includes(p)&&expected.has('v'))&&!(p==='v'&&(expected.has('vt')||expected.has('vi'))))missing.add(p);}
  if(missing.size)flags.push('sense-pos-mismatch:'+Array.from(missing).join('/'));
  return {word:o.w,pos:o.pos,definition:o.cn,origin,sourceFiles:review?[review.file||'js/definition-reviews.js']:exact.map(r=>r.file),dictionary:review?.source||null,...(review?.sources ? {dictionaries:review.sources} : {}),checkedOn:review?.checkedOn||null,flags};
}).sort((a,b)=>a.word.localeCompare(b.word));
const flagCounts={}; for(const e of entries)for(const f of e.flags)flagCounts[f.split(':')[0]]=(flagCounts[f.split(':')[0]]||0)+1;
const report={date:'2026-11-22',scope:'全部内置词条的来源和结构一致性；仅 dictionary-reviewed 条目经过本轮外部词典核对。其他候选不能据此判定为虚假或正确。',total:entries.length,sources,flagCounts,entries};
if(process.argv.includes('--write')){fs.mkdirSync(path.join(root,'docs'),{recursive:true});fs.writeFileSync(path.join(root,'docs/definition-audit.json'),JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify({total:report.total,sources,flagCounts},null,2));
if(sources.unresolved)process.exitCode=1;
