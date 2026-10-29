/* 剑桥雅思真题答题卡：对照自己手上的《剑桥雅思》做题，在这里计时填写答案、录入书上的答案后自动判分。
   本站不收录也不分发书中的任何文章、录音、题目或答案（版权属于剑桥大学出版社与评估中心）；
   用户录入的答案只保存在自己的浏览器里，不会随分享链接或网站发布。 */
(function(){
const { $, esc } = App;
const Q = App.iq;
const BOOKS = 21, TESTS = 4, N = 40;
const SECTIONS = {
  L:{ cn:"听力", mins:30, band:"listening", groups:[[1,10],[11,20],[21,30],[31,40]], gname:"Part" },
  R:{ cn:"阅读（学术类）", mins:60, band:"reading", groups:[[1,13],[14,26],[27,40]], gname:"Passage" },
  G:{ cn:"阅读（培训类）", mins:60, band:null, groups:[[1,14],[15,27],[28,40]], gname:"Section" }
};
const TYPES = {
  L:{ gap:"填空（表格/笔记/句子）", mcq:"单选", multi:"多选", match:"配对", map:"地图/平面图", short:"简答" },
  R:{ tfng:"判断 T/F/NG", ynng:"观点 Y/N/NG", headings:"段落标题", info:"段落信息配对", features:"特征配对", endings:"句子结尾配对", gap:"摘要/笔记/句子填空", mcq:"单选/多选", short:"简答", diagram:"图表标注" }
};
TYPES.G = TYPES.R;
const REASONS = { spell:"拼写或单复数", limit:"超出字数", syn:"没听出 / 没认出同义替换", locate:"没定位到", misread:"理解错题意", distract:"被干扰项迷惑", time:"时间不够没做完", guess:"不会，蒙的", other:"其他" };

/* ---------- 记录 ---------- */
// keys：书上的答案 { "17-2-L": { a:[40 个答案，可用 / 分隔多个可接受答案], t:[40 个题型] } }
// records：做题记录 { "17-2-L": [{ t, ans, ok, c, mins, reasons:{ 题号:错因 } }] }
function normalize(d){ d = d || {}; return { keys:d.keys || {}, records:d.records || {}, timed:d.timed!==false } }
let data = normalize(App.store.get(App.KEYS.cambridge, null));
const save = () => App.store.set(App.KEYS.cambridge, data);
App.cambridgeData = () => data;
App.loadCambridgeData = d => { data = normalize(d); save(); if(App.route==="cambridge" && !C) renderHome() };
const keyOf = (b,t,s) => `${b}-${t}-${s}`;
const last = k => { const r = data.records[k]; return r && r.length ? r[r.length-1] : null };

/* ---------- 判分 ---------- */
const ALIAS = { t:"true", f:"false", ng:"not given", y:"yes", n:"no", "notgiven":"not given" };
const norm = s => { let v = String(s || "").toLowerCase().replace(/[’‘]/g, "'").replace(/^[\s"'(]+|[\s"'.,;:!?)]+$/g, "").replace(/\s+/g, " "); return ALIAS[v.replace(/\s/g,"")] || ALIAS[v] || v };
function check(given, key){
  if(!key || !String(key).trim()) return null;   // 没录这题的答案
  const g = norm(given); if(!g) return false;
  return String(key).split("/").some(k => norm(k)===g);
}
const bandText = (s, c) => SECTIONS[s].band ? Q.band(SECTIONS[s].band, c) : "培训类阅读的分数线不同，这里只给答对题数";

/* ---------- 会话 ---------- */
// C：{ b, t, s, phase:"sheet"|"key"|"result", ans:[], started, deadline, rec }
let C = null, timer = 0;
const view = html => { $("#view-cambridge").innerHTML = html };
const fmt = ms => { const sec = Math.max(0, Math.round(Math.abs(ms)/1000)); return `${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}` };
function stopTimer(){ clearInterval(timer); timer = 0 }
function startSheet(b, t, s){
  C = { b, t, s, phase:"sheet", ans:Array(N).fill(""), started:Date.now(), deadline: data.timed ? Date.now() + SECTIONS[s].mins*60000 : 0 };
  render(); stopTimer(); timer = setInterval(tick, 500);
}
function tick(){
  const el = $("#cbTime"); if(!C || C.phase!=="sheet") return stopTimer();
  if(C.deadline){ const left = C.deadline - Date.now(); if(el){ el.textContent = fmt(left); el.parentElement.classList.toggle("warn", left<5*60000) } if(left<=0){ App.toast("时间到。答案已保留，可以继续填完，但请记下超时情况。", 5000); C.deadline = 0; C.overtime = true } }
  else if(el) el.textContent = fmt(Date.now() - C.started);
}
function submitSheet(){
  stopTimer();
  C.mins = Math.max(1, Math.round((Date.now()-C.started)/60000));
  const k = keyOf(C.b, C.t, C.s), key = data.keys[k];
  if(key && key.a.some(x => x && x.trim())) gradeNow();   // 录过答案（哪怕不全）就直接判分，结果页可以补全
  else{ C.phase = "key"; C.keyDraft = key ? { a:key.a.slice(), t:key.t.slice() } : { a:Array(N).fill(""), t:Array(N).fill("") }; render() }
}
function gradeNow(){
  const k = keyOf(C.b, C.t, C.s), key = data.keys[k];
  const ok = C.ans.map((a,i) => check(a, key.a[i]));
  const rec = { t:Date.now(), ans:C.ans.slice(), ok, c:ok.filter(x => x===true).length, mins:C.mins, overtime:!!C.overtime, reasons:{} };
  (data.records[k] || (data.records[k] = [])).push(rec);
  save();
  C.rec = rec; C.phase = "result"; render();
}

/* ---------- 界面 ---------- */
const title = () => `剑桥雅思 ${C.b} · Test ${C.t} · ${SECTIONS[C.s].cn}`;
function bar(extra){
  return `<header class="ix-bar"><div class="ix-brand"><b>真题答题卡</b><span>${esc(title())}</span></div>${extra || ""}
    <div class="ix-tools">${C.phase==="sheet" ? `<button data-cb="submit" class="pri">交卷</button>` : ""}<button data-cb="quit" class="quit">${C.phase==="result" ? "返回" : "退出"}</button></div></header>`;
}
function sheetHTML(){
  const sec = SECTIONS[C.s];
  return `<div class="xm ix">${bar(`<div class="ix-time"><span id="cbTime">${C.deadline ? fmt(C.deadline-Date.now()) : "0:00"}</span><span class="ix-left">${C.deadline ? "剩余" : "用时"}</span></div>`)}
    <main class="ix-body"><div class="ix-scroll"><div class="cb-sheet">
      <p class="note">打开你的书或正版电子版，翻到${esc(title())}。${C.s==="L" ? "播放书中的录音，边听边在这里填写。" : "在书上读文章，在这里填写答案。"}判断题可以写 T / F / NG、Y / N / NG；单选写字母。按回车跳到下一题。</p>
      ${sec.groups.map(([a,b],gi) => `<section class="cb-group"><h3>${sec.gname} ${gi+1}<span class="note">Questions ${a}–${b}</span></h3>
        <div class="cb-grid">${Array.from({ length:b-a+1 }, (_,j) => { const n = a+j; return `<label class="cb-cell"><span>${n}</span><input data-cbn="${n}" value="${esc(C.ans[n-1])}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="第 ${n} 题"></label>` }).join("")}</div></section>`).join("")}
      <p class="note">共 ${N} 题，已填 <b id="cbFilled">${C.ans.filter(x => x.trim()).length}</b> 题。</p>
    </div></div></main></div>`;
}
function keyHTML(){
  const types = TYPES[C.s], d = C.keyDraft;
  return `<div class="xm ix">${bar()}
    <main class="ix-body"><div class="ix-scroll"><div class="cb-sheet">
      <h2 style="margin:0">录入书上的答案</h2>
      <p class="note">对照书后的答案（Answer Key）填写。一道题有多个可接受答案时用 / 分开，比如 <code>15/fifteen</code>；括号里可省略的词，把两种写法都写上，比如 <code>pond/the pond</code>。题型可以不填，填了会按题型统计正确率。答案只保存在这台电脑的浏览器里，下次做同一套题会自动判分。请不要把录入的答案传给别人。</p>
      <details class="panel"><summary>一次粘贴全部答案</summary><div class="body">
        <textarea id="cbPaste" rows="8" placeholder="每行一个答案，按题号顺序；也可以写成「1 Thursday」或「1. TRUE」"></textarea>
        <div class="row"><button class="btn alt" data-cb="paste">填入</button><span class="note" id="cbPasteMsg"></span></div>
        <p class="note" style="margin:0">题型可以按范围批量设置：</p>
        <div class="row"><input id="cbFrom" type="number" min="1" max="40" placeholder="从" style="width:70px"><input id="cbTo" type="number" min="1" max="40" placeholder="到" style="width:70px">
          <select id="cbType">${Object.entries(types).map(([k,v]) => `<option value="${k}">${v}</option>`).join("")}</select><button class="btn alt" data-cb="settype">设置题型</button></div>
      </div></details>
      <div class="tablewrap"><table class="cb-keytab"><thead><tr><th>#</th><th>答案</th><th>题型（可选）</th><th>你的答案</th></tr></thead><tbody>
        ${d.a.map((v,i) => `<tr><td class="note">${i+1}</td><td><input data-cbk="${i}" value="${esc(v)}" autocomplete="off" spellcheck="false" aria-label="第 ${i+1} 题答案"></td>
          <td><select data-cbt="${i}"><option value="">—</option>${Object.entries(types).map(([k,t]) => `<option value="${k}" ${d.t[i]===k ? "selected" : ""}>${t}</option>`).join("")}</select></td><td class="note">${esc(C.ans[i]) || "（空）"}</td></tr>`).join("")}
      </tbody></table></div>
      <div class="row"><button class="btn" data-cb="savekey">保存答案并判分</button><span class="note">没填答案的题不计分。</span></div>
    </div></div></main></div>`;
}
function resultHTML(){
  const r = C.rec, k = keyOf(C.b, C.t, C.s), key = data.keys[k], types = TYPES[C.s];
  const counted = r.ok.filter(x => x!==null).length;
  const byType = {};
  r.ok.forEach((ok,i) => { const ty = key.t[i]; if(!ty || ok===null) return; const e = byType[ty] || (byType[ty] = [0,0]); e[1]++; if(ok) e[0]++ });
  const wrong = r.ok.map((ok,i) => ok===false ? i : -1).filter(i => i>=0);
  return `<div class="xm ix">${bar()}
    <main class="ix-body"><div class="ix-scroll"><div class="cb-sheet">
      <div class="row" style="align-items:baseline;gap:16px"><div class="score">${r.c}<span style="font-size:24px;color:var(--muted)"> / ${counted}</span></div>
        <div class="note">${counted<N ? `有 ${N-counted} 题没录答案，没有计分。` : ""}按参考分数线：<b>${counted===N ? bandText(C.s, r.c) : "录全 40 题答案后才能换算"}</b>。用时 ${r.mins} 分钟${r.overtime ? "（超时）" : ""}。</div></div>
      ${Object.keys(byType).length ? `<div class="cb-types">${Object.entries(byType).map(([ty,[c,n]]) => { const p = Math.round(c/n*100), col = p>=80 ? "var(--good)" : p>=60 ? "var(--warn)" : "var(--bad)"; return `<div class="tstat wide"><span>${types[ty]}</span><div class="bar"><i style="width:${p}%;background:${col}"></i></div><b>${c}/${n}</b></div>` }).join("")}</div>` : ""}
      ${wrong.length ? `<p class="section-label" style="margin:0">错题（选一个错因，会汇总到「真题」首页）</p>` : `<div class="fb ok">全部答对。</div>`}
      <div class="tablewrap"><table><thead><tr><th>#</th><th>你的答案</th><th>正确答案</th><th>题型</th><th>错因</th></tr></thead><tbody>
        ${r.ok.map((ok,i) => `<tr class="${ok===false ? "cb-wrong" : ""}"><td>${i+1}</td><td>${esc(r.ans[i]) || '<span class="note">空</span>'}</td><td>${ok===null ? '<span class="note">未录入</span>' : esc(key.a[i])}</td>
          <td class="note">${types[key.t[i]] || ""}</td><td>${ok===false ? `<select data-cbr="${i}"><option value="">—</option>${Object.entries(REASONS).map(([k2,v]) => `<option value="${k2}" ${r.reasons[i+1]===k2 ? "selected" : ""}>${v}</option>`).join("")}</select>` : ok ? '<span class="chip done">正确</span>' : ""}</td></tr>`).join("")}
      </tbody></table></div>
      <div class="row"><button class="btn" data-cb="again">再做一遍</button><button class="btn alt" data-cb="editkey">修改答案</button><button class="btn alt" data-cb="quit">返回</button></div>
    </div></div></main></div>`;
}
function render(){
  if(!C) return renderHome();
  view(C.phase==="sheet" ? sheetHTML() : C.phase==="key" ? keyHTML() : resultHTML());
  if(C.phase==="sheet"){ tick(); const f = document.querySelector("#view-cambridge [data-cbn]"); if(f && !C.ans.some(x => x)) f.focus() }
}

/* ---------- 首页 ---------- */
function summary(){
  const reasons = {}, types = {};
  Object.entries(data.records).forEach(([k,list]) => {
    const s = k.split("-")[2], key = data.keys[k];
    list.forEach(r => {
      Object.values(r.reasons || {}).forEach(v => { if(v) reasons[v] = (reasons[v]||0) + 1 });
      if(key) r.ok.forEach((ok,i) => { const ty = key.t[i]; if(!ty || ok===null) return; const id = `${s==="L" ? "L" : "R"}:${ty}`, e = types[id] || (types[id] = [0,0]); e[1]++; if(ok) e[0]++ });
    });
  });
  return { reasons, types };
}
function renderHome(){
  stopTimer();
  const sm = summary();
  const cell = (b,t) => ["L","R","G"].map(s => { const r = last(keyOf(b,t,s)); return r ? `<span class="cb-score ${s}" title="${SECTIONS[s].cn}：${r.c}/40">${s==="L" ? "听" : s==="R" ? "读" : "培"} ${r.c}</span>` : "" }).join("");
  const reasonRows = Object.entries(sm.reasons).sort((a,b) => b[1]-a[1]);
  const typeRows = Object.entries(sm.types).sort((a,b) => a[1][0]/a[1][1] - b[1][0]/b[1][1]);
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>剑桥真题</h2><div class="date">答题卡 · 计时 · 判分 · 错题统计</div></div>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <label class="field">书<select id="cbBook">${Array.from({ length:BOOKS }, (_,i) => `<option value="${BOOKS-i}">剑桥雅思 ${BOOKS-i}</option>`).join("")}</select></label>
        <label class="field">套题<select id="cbTest">${Array.from({ length:TESTS }, (_,i) => `<option value="${i+1}">Test ${i+1}</option>`).join("")}</select></label>
        <label class="field">部分<select id="cbSec">${Object.entries(SECTIONS).map(([k,v]) => `<option value="${k}">${v.cn}（${v.mins} 分钟）</option>`).join("")}</select></label>
        <label class="check"><input type="checkbox" id="cbTimed" ${data.timed ? "checked" : ""}> 按考试时间倒计时</label>
        <button class="btn" data-cb="start">开始答题</button>
      </section>
      <div class="tip"><b>版权说明</b><br>本站不提供书中的文章、录音、题目或答案，需要你自己有《剑桥雅思》的纸质书或正版电子版。录入的答案只保存在你的浏览器里，请不要转发给别人。</div>
    </aside>
    <section class="desk">
      <p class="section-label">做题进度（点格子直接开始）</p>
      <div class="tablewrap"><table class="cb-progress"><thead><tr><th>书</th>${Array.from({ length:TESTS }, (_,i) => `<th>Test ${i+1}</th>`).join("")}</tr></thead><tbody>
        ${Array.from({ length:BOOKS }, (_,i) => BOOKS-i).map(b => `<tr><td><b>${b}</b></td>${Array.from({ length:TESTS }, (_,j) => `<td><button class="cb-cellbtn" data-cbgo="${b}-${j+1}">${cell(b,j+1) || '<span class="note">—</span>'}</button></td>`).join("")}</tr>`).join("")}
      </tbody></table></div>
      <div class="tasks">
        <article class="task"><h3>常见错因</h3>${reasonRows.length ? reasonRows.map(([k,n]) => `<div class="tstat wide"><span>${REASONS[k]}</span><div class="bar"><i style="width:${Math.round(n/reasonRows[0][1]*100)}%;background:var(--warn)"></i></div><b>${n} 次</b></div>`).join("") : `<p class="note" style="margin:0">判分后给错题选错因，这里会汇总，帮你找到最常见的失分原因。</p>`}</article>
        <article class="task"><h3>各题型正确率</h3>${typeRows.length ? typeRows.map(([id,[c,n]]) => { const [s,ty] = id.split(":"), p = Math.round(c/n*100), col = p>=80 ? "var(--good)" : p>=60 ? "var(--warn)" : "var(--bad)"; return `<div class="tstat wide"><span>${s==="L" ? "听" : "读"} · ${TYPES[s==="L" ? "L" : "R"][ty]}</span><div class="bar"><i style="width:${p}%;background:${col}"></i></div><b>${c}/${n}</b></div>` }).join("") : `<p class="note" style="margin:0">录入答案时标上题型，这里会按题型统计正确率，从低到高排列。</p>`}</article>
      </div>
    </section>
  </div>`);
}
// 雅思模考首页上的入口卡片
App.cambridge = { home(el){ if(!el) return; const n = Object.values(data.records).reduce((a,l) => a + l.length, 0);
  el.innerHTML = `<article class="task" style="margin-top:14px"><div class="en">Cambridge IELTS Answer Sheet</div><h3>剑桥真题答题卡</h3>
    <p class="note" style="margin:0">对照自己的《剑桥雅思》1–21 做题：计时填写答案，录入书上的答案后自动判分、换算分数段，统计错因和题型正确率。本站不提供书中内容。${n ? `已记录 ${n} 次。` : ""}</p>
    <div class="row"><a class="btn alt" href="#ielts/cambridge">打开答题卡</a></div></article>` } };

/* ---------- 事件 ---------- */
function onClick(e){
  const t = e.target.closest("button"); if(!t) return;
  const d = t.dataset;
  if(d.cbgo){ const [b,ts] = d.cbgo.split("-"); startSheet(+b, +ts, $("#cbSec").value); return }
  if(d.cb==="start"){ startSheet(+$("#cbBook").value, +$("#cbTest").value, $("#cbSec").value); return }
  if(!C) return;
  if(d.cb==="quit"){
    if(C.phase==="sheet" && C.ans.some(x => x.trim()) && !d.armed){ d.armed = "1"; t.textContent = "答案不会保存，再点一次退出"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "退出" } }, 4000); return }
    stopTimer(); C = null; renderHome(); return;
  }
  if(d.cb==="submit"){
    const empty = C.ans.filter(x => !x.trim()).length;
    if(empty && !d.armed){ d.armed = "1"; t.textContent = `还有 ${empty} 题没填，再点一次交卷`; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "交卷" } }, 4000); return }
    submitSheet(); return;
  }
  if(d.cb==="paste"){
    const lines = $("#cbPaste").value.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    let n = 0, seq = 0;
    lines.forEach(l => { const m = l.match(/^(\d{1,2})\s*[.、:)）-]?\s+(.+)$/); const i = m ? +m[1]-1 : seq; const v = m ? m[2] : l; if(i>=0 && i<N){ C.keyDraft.a[i] = v.trim(); n++; seq = i+1 } });
    const msg = `已填入 ${n} 个答案。`; render(); const el = $("#cbPasteMsg"); if(el) el.textContent = msg; return;
  }
  if(d.cb==="settype"){
    const a = +$("#cbFrom").value, b = +$("#cbTo").value, ty = $("#cbType").value;
    if(a>=1 && b>=a && b<=N){ for(let i=a-1;i<b;i++) C.keyDraft.t[i] = ty; render() } else App.toast("请填写 1–40 之间的题号范围。", 2500);
    return;
  }
  if(d.cb==="savekey"){
    const k = keyOf(C.b, C.t, C.s);
    if(!C.keyDraft.a.some(x => x.trim())){ App.toast("还没有填写任何答案。", 2500); return }
    data.keys[k] = { a:C.keyDraft.a.map(x => x.trim()), t:C.keyDraft.t.slice() }; save();
    if(C.rec){ const list = data.records[k]; if(list && list[list.length-1]===C.rec) list.pop() }   // 修改答案后重新判这一次
    gradeNow(); return;
  }
  if(d.cb==="editkey"){ const key = data.keys[keyOf(C.b, C.t, C.s)]; C.keyDraft = { a:key.a.slice(), t:key.t.slice() }; C.phase = "key"; render(); return }
  if(d.cb==="again"){ startSheet(C.b, C.t, C.s); return }
}
function onInput(e){
  const t = e.target; if(!C) { if(t.id==="cbTimed"){ data.timed = t.checked; save() } return }
  if(t.dataset.cbn!==undefined){ C.ans[+t.dataset.cbn-1] = t.value; const f = $("#cbFilled"); if(f) f.textContent = C.ans.filter(x => x.trim()).length; return }
  if(t.dataset.cbk!==undefined){ C.keyDraft.a[+t.dataset.cbk] = t.value; return }
  if(t.dataset.cbt!==undefined){ C.keyDraft.t[+t.dataset.cbt] = t.value; return }
  if(t.dataset.cbr!==undefined && C.rec){ C.rec.reasons[+t.dataset.cbr+1] = t.value; save(); return }
}
function onKey(e){
  if(App.route!=="cambridge" || !C || e.key!=="Enter") return;
  const t = e.target; if(t.dataset.cbn===undefined && t.dataset.cbk===undefined) return;
  e.preventDefault();
  const sel = t.dataset.cbn!==undefined ? "[data-cbn]" : "[data-cbk]", all = [...document.querySelectorAll("#view-cambridge " + sel)], i = all.indexOf(t);
  if(all[i+1]) all[i+1].focus();
}

App.routes.cambridge = {
  exams:["ielts"],
  init(){
    const root = $("#view-cambridge");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
    root.addEventListener("keydown", onKey);
  },
  enter(){ if(!C) renderHome(); else{ render(); if(C.phase==="sheet"){ stopTimer(); timer = setInterval(tick, 500) } } },
  leave(){ stopTimer() }
};
})();
