/* 雅思写作（学术类）：Task 1 图表描述（20 分钟、至少 150 词）、Task 2 议论文（40 分钟、至少 250 词），以及两篇连写的 60 分钟完整模拟 */
(function(){
const { $, esc, shuffle } = App;
const D = window.IELTS_WRITING;
const BY = {}; D.task1.forEach(t => { t.task = 1; BY[t.id] = t }); D.task2.forEach(t => { t.task = 2; BY[t.id] = t });
const MIN_WORDS = { 1:150, 2:250 }, MINUTES = { 1:20, 2:40, full:60 };
const KIND = { line:"折线图", bar:"柱状图", pie:"饼图", table:"表格", process:"流程图" };
const TYPE2 = { opinion:"同意与否", discuss:"讨论双方观点", problem:"原因与对策", advantage:"利弊比较", twopart:"双问题" };
const DRAFT_KEY = "toefl.iwriting.unsent";

/* ---------- 记录 ---------- */
function normalize(d){ d = d || {}; return { done:d.done || {}, history:Array.isArray(d.history) ? d.history : [], settings:Object.assign({ timed:true }, d.settings || {}) } }
let data = normalize(App.store.get(App.KEYS.iwriting, null));
const save = () => App.store.set(App.KEYS.iwriting, data);
App.ieltsWritingData = () => data;
App.loadIeltsWritingData = d => { data = normalize(d); save(); if(App.route==="iwriting" && !S) renderHome() };

/* ---------- 图表（SVG）：颜色用 style.css 里的 --s1… 变量，深色模式自动切换 ---------- */
const NS = 'xmlns="http://www.w3.org/2000/svg"';
const fmtN = v => Number.isInteger(v) ? String(v) : String(v);
function legendHTML(names){ return names.length<2 ? "" : `<div class="ch-legend">${names.map((n,i) => `<span><i class="sw s${i+1}"></i>${esc(n)}</span>`).join("")}</div>` }
function axes(W, H, m, yMax, unit){
  const ph = H-m.t-m.b, steps = 5, out = [];
  for(let k=0;k<=steps;k++){
    const v = yMax/steps*k, y = m.t + ph - ph*v/yMax;
    out.push(`<line x1="${m.l}" x2="${W-m.r}" y1="${y}" y2="${y}" class="ch-grid${k===0 ? " base" : ""}"/><text x="${m.l-8}" y="${y+4}" class="ch-tick" text-anchor="end">${fmtN(+v.toFixed(1))}</text>`);
  }
  return out.join("") + `<text x="${m.l-40}" y="${m.t-13}" class="ch-unit" text-anchor="start">${esc(unit)}</text>`;
}
function lineSVG(c){
  const W = 640, H = 300, m = { l:48, r:150, t:30, b:34 }, pw = W-m.l-m.r, ph = H-m.t-m.b;
  const X = i => m.l + pw*i/(c.x.length-1), Y = v => m.t + ph - ph*v/c.yMax;
  let s = axes(W, H, m, c.yMax, c.unit);
  s += c.x.map((x,i) => `<text x="${X(i)}" y="${H-m.b+18}" class="ch-tick" text-anchor="middle">${esc(x)}</text>`).join("");
  c.series.forEach((se,k) => {
    s += `<path d="${se.values.map((v,i) => (i ? "L" : "M") + X(i) + "," + Y(v)).join("")}" class="ch-line s${k+1}"/>`;
    s += se.values.map((v,i) => `<circle cx="${X(i)}" cy="${Y(v)}" r="4" class="ch-dot s${k+1}"><title>${esc(se.name)}, ${esc(c.x[i])}: ${v} ${esc(c.unit)}</title></circle>`).join("");
  });
  // 线尾直接标出系列名，相互之间至少隔 15px
  const ends = c.series.map((se,k) => ({ k, name:se.name, y:Y(se.values[se.values.length-1]) })).sort((a,b) => a.y-b.y);
  ends.forEach((e,i) => { if(i && e.y - ends[i-1].y < 15) e.y = ends[i-1].y + 15 });
  s += ends.map(e => `<line x1="${W-m.r+10}" x2="${W-m.r+22}" y1="${e.y}" y2="${e.y}" class="ch-key s${e.k+1}"/><text x="${W-m.r+27}" y="${e.y+4}" class="ch-lab">${esc(e.name)}</text>`).join("");
  return `<svg ${NS} viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="Line graph">${s}</svg>`;
}
function barSVG(c){
  const W = 640, H = 300, m = { l:48, r:16, t:30, b:34 }, pw = W-m.l-m.r, ph = H-m.t-m.b;
  const band = pw/c.x.length, n = c.series.length, bw = Math.min(40, (band*0.62 - (n-1)*2)/n), Y = v => m.t + ph - ph*v/c.yMax;
  let s = axes(W, H, m, c.yMax, c.unit);
  c.x.forEach((x,i) => {
    const gx = m.l + band*i + (band - (bw*n + 2*(n-1)))/2;
    s += `<text x="${m.l + band*i + band/2}" y="${H-m.b+18}" class="ch-tick" text-anchor="middle">${esc(x)}</text>`;
    c.series.forEach((se,k) => {
      const v = se.values[i], x0 = gx + k*(bw+2), y0 = Y(v), base = Y(0), r = Math.min(4, (base-y0)/2);
      // 只把远离基线的一端做成圆角
      s += `<path d="M${x0},${base}V${y0+r}Q${x0},${y0} ${x0+r},${y0}H${x0+bw-r}Q${x0+bw},${y0} ${x0+bw},${y0+r}V${base}Z" class="ch-bar s${k+1}"><title>${esc(x)}, ${esc(se.name)}: ${v} ${esc(c.unit)}</title></path>`;
    });
  });
  return `<svg ${NS} viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="Bar chart">${s}</svg>`;
}
function pieSVG(c){
  const W = 640, H = 270, r = 92;
  let s = "";
  c.pies.forEach((p,pi) => {
    const cx = W/4 + pi*W/2, cy = 128, tot = p.values.reduce((a,b) => a+b, 0);
    let a0 = -Math.PI/2;
    p.values.forEach((v,k) => {
      const a1 = a0 + v/tot*Math.PI*2, large = a1-a0 > Math.PI ? 1 : 0;
      const P = a => [cx + r*Math.cos(a), cy + r*Math.sin(a)];
      const [x0,y0] = P(a0), [x1,y1] = P(a1), mid = (a0+a1)/2;
      s += `<path d="M${cx},${cy}L${x0},${y0}A${r},${r} 0 ${large} 1 ${x1},${y1}Z" class="ch-slice s${k+1}"><title>${esc(p.title)}, ${esc(c.labels[k])}: ${v}%</title></path>`;
      const lx = cx + (r+18)*Math.cos(mid), ly = cy + (r+18)*Math.sin(mid);
      s += `<text x="${lx}" y="${ly+4}" class="ch-lab" text-anchor="${Math.cos(mid)>0.2 ? "start" : Math.cos(mid)<-0.2 ? "end" : "middle"}">${v}%</text>`;
      a0 = a1;
    });
    s += `<text x="${cx}" y="${H-6}" class="ch-title" text-anchor="middle">${esc(p.title)}</text>`;
  });
  return `<svg ${NS} viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="Pie charts">${s}</svg>`;
}
function dataTable(c, kind){
  if(kind==="pie") return `<table><thead><tr><th></th>${c.pies.map(p => `<th>${esc(p.title)}</th>`).join("")}</tr></thead><tbody>${c.labels.map((l,k) => `<tr><td>${esc(l)}</td>${c.pies.map(p => `<td>${p.values[k]}%</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  return `<table><thead><tr><th></th>${c.x.map(x => `<th>${esc(x)}</th>`).join("")}</tr></thead><tbody>${c.series.map(se => `<tr><td>${esc(se.name)}</td>${se.values.map(v => `<td>${v}</td>`).join("")}</tr>`).join("")}</tbody></table><p class="note" style="margin:4px 0 0">单位：${esc(c.unit)}</p>`;
}
function chartHTML(it){
  const c = it.chart;
  if(it.kind==="table") return `<div class="tablewrap ch-table"><table><thead><tr>${c.cols.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${c.rows.map(r => `<tr>${r.map((v,i) => `<td${i ? ' class="num"' : ""}>${esc(typeof v==="number" && !Number.isInteger(v) ? v.toFixed(1) : v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  if(it.kind==="process") return `<ol class="ch-flow">${c.steps.map(st => `<li>${esc(st)}</li>`).join("")}</ol>`;
  const names = it.kind==="pie" ? c.labels : c.series.map(s => s.name);
  const svg = it.kind==="line" ? lineSVG(c) : it.kind==="bar" ? barSVG(c) : pieSVG(c);
  return `<figure class="ch-fig">${legendHTML(names)}${svg}<details class="ch-data"><summary class="note">查看数据表</summary><div class="tablewrap">${dataTable(c, it.kind)}</div></details></figure>`;
}
// 给 AI 用的图表文字版
function chartText(it){
  const c = it.chart;
  if(it.kind==="table") return [c.cols.join(" | "), ...c.rows.map(r => r.join(" | "))].join("\n");
  if(it.kind==="process") return c.steps.map((s,i) => `${i+1}. ${s}`).join("\n");
  if(it.kind==="pie") return c.pies.map(p => `${p.title}: ` + c.labels.map((l,k) => `${l} ${p.values[k]}%`).join(", ")).join("\n");
  return `Unit: ${c.unit}\n` + c.series.map(se => `${se.name}: ` + c.x.map((x,i) => `${x} ${se.values[i]}`).join(", ")).join("\n");
}
function promptHTML(it){
  if(it.task===1) return `<div class="iw-prompt"><p class="note">You should spend about 20 minutes on this task.</p>
    <p class="iw-q">${esc(it.prompt)}</p><p class="iw-q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
    <p class="note">Write at least 150 words.</p></div>${chartHTML(it)}`;
  return `<div class="iw-prompt"><p class="note">You should spend about 40 minutes on this task. Write about the following topic:</p>
    <p class="iw-q iw-topic">${esc(it.prompt)}</p>
    <p class="iw-q">Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
    <p class="note">Write at least 250 words.</p></div>`;
}

/* ---------- 自动检查 ---------- */
const wordsOf = t => (t.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*|\d+(?:[.,]\d+)*%?/g) || []);
const LINKERS = ["however","in addition","moreover","furthermore","therefore","as a result","in contrast","by contrast","by comparison","on the other hand","although","while","whereas","for example","for instance","such as","firstly","secondly","thirdly","finally","in conclusion","overall","meanwhile","nevertheless","consequently","similarly","respectively","followed by","compared with","over the same period","first,","next,","then","after this","after that","in the final stages","admittedly","instead","as well as","also"];
const STOP = new Set("the a an and or but to of in on for with at by from as is are was were be been it this that these those i you he she we they my your our their his her its not do does did have has had will would can could should may might also very so than then there here which who what when where why how about into more most some any all one two just if".split(" "));
function analyze(text, it){
  const words = wordsOf(text), n = words.length, lower = text.toLowerCase(), min = MIN_WORDS[it.task];
  const paras = text.split(/\n\s*\n|\n/).map(p => p.trim()).filter(p => wordsOf(p).length>3);
  const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).filter(s => wordsOf(s).length>1);
  const linkers = LINKERS.filter(l => new RegExp("\\b" + l + "\\b").test(lower));
  // 题目和图表里的话题词（如 transport、landfill、wind）反复出现是正常的，不算重复用词
  const topic = new Set(wordsOf(it.prompt + " " + (it.task===1 ? chartText(it) : "")).map(w => w.toLowerCase()));
  const counts = {}; words.forEach(w => { const k = w.toLowerCase(); if(k.length>=4 && !STOP.has(k) && !topic.has(k) && !/\d/.test(k)) counts[k] = (counts[k]||0)+1 });
  const repeated = Object.entries(counts).filter(([,c]) => c>=(it.task===1 ? 6 : 8)).sort((a,b) => b[1]-a[1]).slice(0,4);
  const longS = sentences.filter(s => wordsOf(s).length>40).length;
  // 照抄题目：题目里连续 5 个词的片段在作文中出现
  const pw = wordsOf(it.prompt).map(w => w.toLowerCase()), tw = " " + words.map(w => w.toLowerCase()).join(" ") + " ";
  let copied = 0; for(let i=0;i+5<=pw.length;i++){ if(tw.includes(" " + pw.slice(i,i+5).join(" ") + " ")){ copied++; i += 4 } }
  const checks = [[n>=min, `字数 ${n} / ${min}`, `少于 ${min} 词会影响「任务完成」一项的分数。`]];
  if(it.task===1){
    const ov = /\b(overall|in general|it is clear that|it can be seen that|generally speaking|in summary)\b/.test(lower);
    checks.push([ov, ov ? "有概述" : "没有概述（Overall …）", "Task 1 需要一段概述，写出最主要的趋势或特征，这是拿 6 分以上的关键。"]);
    const nums = (text.match(/\d/g) || []).length>=6;
    if(it.kind!=="process") checks.push([nums, nums ? "引用了具体数据" : "数据引用太少", "选取关键数据支持描述，不需要每个数字都写。"]);
    const op = /\b(i think|i believe|in my opinion|in my view)\b/.test(lower);
    checks.push([!op, op ? "加入了个人观点" : "没有加入个人观点", "Task 1 只描述图表信息，不要写个人观点或推测原因。"]);
    checks.push([paras.length>=3, `分了 ${paras.length} 段`, "建议分 3–4 段：改写题目、概述、一到两段细节。"]);
  }else{
    const needView = it.type!=="problem";
    const stance = /\b(i (strongly |partly |completely )?(agree|disagree|believe|think|feel)|in my (view|opinion)|from my perspective|i would argue)\b/.test(lower);
    if(needView) checks.push([stance, stance ? "明确表达了自己的观点" : "没有找到明确的观点表达", "这类题要求给出你的立场，开头和结尾都要写清楚。"]);
    const concl = /\b(in conclusion|to conclude|to sum up|in summary|overall,)/.test(lower);
    checks.push([concl, concl ? "有结论段" : "没有找到结论段", "用 In conclusion 等开头写一段结论，总结立场或要点。"]);
    const ex = /\b(for example|for instance|such as|a case in point|including|in particular|especially|particularly)\b/.test(lower);
    checks.push([ex, ex ? "有举例" : "没有举例", "论点后面跟一个具体例子，论证会更有说服力。"]);
    checks.push([paras.length>=4, `分了 ${paras.length} 段`, "建议分 4–5 段：引言、两到三个主体段、结论。"]);
  }
  checks.push([copied<2, copied>=2 ? `有 ${copied} 处照抄了题目原句` : "没有大段照抄题目", "开头要用自己的话改写题目（paraphrase），照抄的部分不计入有效字数。"]);
  checks.push([linkers.length>=(it.task===1 ? 3 : 4), `连接词 ${linkers.length} 个${linkers.length ? "：" + linkers.slice(0,6).join(", ") : ""}`, "适当使用 however、in contrast、as a result 等连接词，但不要每句都用。"]);
  checks.push([longS===0, longS ? `${longS} 个句子超过 40 词` : "没有过长的句子", "超长句容易出语法错误，可以拆成两句。"]);
  checks.push([repeated.length===0, repeated.length ? "重复用词：" + repeated.map(([w,c]) => `${w}×${c}`).join("，") : "没有明显的重复用词", "同一个词反复出现时，换成同义词或代词，「词汇丰富度」一项会更好。"]);
  return { n, min, paras:paras.length, checks };
}

/* ---------- 会话 ---------- */
// S：{ mode:"t1"|"t2"|"full", tasks:[{ it, text }], cur, started, deadline, phase:"write"|"review" }
let S = null, timer = 0;
const view = html => { $("#view-iwriting").innerHTML = html };
const fmt = s => `${Math.floor(s/60)}:${String(Math.max(0,s)%60).padStart(2,"0")}`;
function stopTimer(){ clearInterval(timer); timer = 0 }
function startTimer(){ stopTimer(); timer = setInterval(tick, 1000); tick() }
function tick(){
  const el = $("#iwTimer"); if(!S || S.phase!=="write") return stopTimer();
  if(!S.deadline){ if(el) el.textContent = "用时 " + fmt(Math.round((Date.now()-S.started)/1000)); return }
  const left = Math.round((S.deadline - Date.now())/1000);
  if(el){ el.textContent = "剩余 " + fmt(left); el.classList.toggle("warn", left<180) }
  if(left<=0) submit(true);
}
const draftKey = () => S.tasks.map(x => x.it.id).join("+");
function start(mode, id){
  let tasks;
  if(mode==="full"){
    const least = list => shuffle(list.slice()).sort((a,b) => ((data.done[a.id]||{}).cnt||0) - ((data.done[b.id]||{}).cnt||0))[0];
    tasks = [least(D.task1), least(D.task2)];
  }else tasks = [BY[id]];
  S = { mode, tasks:tasks.map(it => ({ it, text:"" })), cur:0, started:Date.now(), phase:"write" };
  S.deadline = data.settings.timed ? Date.now() + MINUTES[mode==="full" ? "full" : tasks[0].task]*60000 : 0;
  const saved = App.store.get(DRAFT_KEY, null);
  if(saved && saved.key===draftKey()){ S.tasks.forEach((x,i) => x.text = saved.texts[i] || ""); S.restored = true }
  renderWrite(); startTimer(); window.scrollTo(0,0);
}
function submit(timeUp){
  if(!S || S.phase!=="write") return;
  stopTimer();
  const t = $("#iwText"); if(t) S.tasks[S.cur].text = t.value;
  S.tasks.forEach(x => {
    x.a = analyze(x.text, x.it);
    const prev = data.done[x.it.id] || { cnt:0 };
    data.done[x.it.id] = { t:Date.now(), words:x.a.n, cnt:prev.cnt+1, text:x.text };
  });
  data.history.push({ t:Date.now(), mode:S.mode, ids:S.tasks.map(x => x.it.id), words:S.tasks.map(x => x.a.n), mins:Math.round((Date.now()-S.started)/60000) });
  if(data.history.length>100) data.history = data.history.slice(-100);
  save();
  try{ localStorage.removeItem(DRAFT_KEY) }catch(e){}
  S.phase = "review"; S.timeUp = timeUp; S.cur = 0;
  renderReview(); window.scrollTo(0,0);
}
function exit(){ stopTimer(); S = null; renderHome() }

/* ---------- 首页 ---------- */
function renderHome(){
  stopTimer();
  const hist = data.history.slice(-6).reverse();
  const row1 = it => { const d = data.done[it.id]; return `<button class="setrow" data-start="t1" data-id="${it.id}"><b>${esc(it.name)}</b><span class="chip learn">${KIND[it.kind]}</span><small>${d ? `写过 ${d.cnt} 次 · 上次 ${d.words} 词` : ""}</small></button>` };
  const row2 = it => { const d = data.done[it.id]; return `<button class="setrow" data-start="t2" data-id="${it.id}"><b>${esc(it.name)}</b><span class="chip learn">${TYPE2[it.type]}</span><small>${d ? `写过 ${d.cnt} 次 · 上次 ${d.words} 词` : ""}</small></button>` };
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>雅思写作</h2><div class="date">学术类 · 两篇 · 60 分钟</div></div>
      <section class="panel" style="padding:14px;display:flex;flex-direction:column;gap:8px">
        <label class="check"><input type="checkbox" id="iwTimed" ${data.settings.timed ? "checked" : ""}> 限时（Task 1 二十分钟、Task 2 四十分钟、完整模拟六十分钟，到时自动交卷）</label>
        <p class="note" style="margin:0">写到一半离开，草稿会保存在本机，下次打开同一题时自动恢复。</p>
      </section>
      <div class="tip"><b>评分看四项</b><br>任务完成（Task 1）或任务回应（Task 2）、连贯与衔接、词汇丰富度、语法多样性与准确性，各占四分之一。Task 2 的分值是 Task 1 的两倍，建议先写 Task 2 也可以。</div>
    </aside>
    <section class="desk">
      <article class="task" style="margin-bottom:14px">
        <div class="en">Full Academic Writing Test</div>
        <h3>完整模拟</h3>
        <div class="spec"><span>Task 1 + Task 2</span><span>60 分钟</span><span>可以在两篇之间切换</span></div>
        <p class="note" style="margin:0">随机抽一道图表题和一道议论文题，自己分配时间。交卷后逐篇给出自动检查、范文和常用句型；填写 API Key 后可以让 AI 按雅思评分标准估分。</p>
        <div class="row"><button class="btn" data-start="full">开始模拟</button></div>
      </article>
      <div class="tasks">
        <article class="task">
          <div class="en">Task 1 · Report</div><h3>图表描述</h3>
          <div class="spec"><span>至少 150 词</span><span>20 分钟</span></div>
          <p class="note" style="margin:0">描述折线图、柱状图、饼图、表格或流程图中的主要信息并做比较，不写个人观点。图表数据是虚构的。</p>
          <div class="setlist">${D.task1.map(row1).join("")}</div>
        </article>
        <article class="task">
          <div class="en">Task 2 · Essay</div><h3>议论文</h3>
          <div class="spec"><span>至少 250 词</span><span>40 分钟</span></div>
          <p class="note" style="margin:0">就一个社会话题表达并论证观点。涵盖同意与否、讨论双方、原因与对策、利弊比较、双问题五种常见题型。</p>
          <div class="setlist">${D.task2.map(row2).join("")}</div>
        </article>
      </div>
      <p class="section-label">最近练习</p>
      ${hist.length ? `<div class="tablewrap history"><table><thead><tr><th>时间</th><th>题目</th><th>字数</th><th>用时</th></tr></thead><tbody>${hist.map(h => `<tr><td>${new Date(h.t).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}</td><td>${h.ids.map(id => BY[id] ? esc(BY[id].name) : id).join(" + ")}</td><td>${h.words.join(" + ")}</td><td>${h.mins} 分钟</td></tr>`).join("")}</tbody></table></div>`
        : `<p class="note">还没有练习记录。</p>`}
    </section>
  </div>`);
}

/* ---------- 写作界面 ---------- */
function tabsHTML(review){
  if(S.tasks.length<2) return "";
  return `<div class="tabs ir-tabs">${S.tasks.map((x,i) => `<button class="tab" data-tab="${i}" aria-selected="${i===S.cur}">Task ${x.it.task}<span class="n" id="iwTab${i}">${review ? x.a.n : wordsOf(x.text).length} 词</span></button>`).join("")}</div>`;
}
function renderWrite(){
  const x = S.tasks[S.cur], it = x.it, min = MIN_WORDS[it.task];
  view(`<div class="stage reading">
    <div class="meta"><span class="chip learn">雅思写作</span><span>${S.mode==="full" ? "完整模拟" : `Task ${it.task} · ${esc(it.name)}`}</span>
      <span class="left" id="iwCount"></span><span class="timer" id="iwTimer"></span><button class="btn alt" data-quit style="margin-left:8px">退出</button></div>
    ${tabsHTML(false)}
    <div class="rgrid"><article class="pane-text">${promptHTML(it)}</article>
      <section class="pane-q">
        <textarea id="iwText" class="w-editor iw-editor" spellcheck="false" autocomplete="off" placeholder="${it.task===1 ? "The graph shows ..." : "In recent years, ..."}">${esc(x.text)}</textarea>
        <div class="row"><button class="btn" data-submit>交卷</button><span class="note">${S.deadline ? "时间到会自动交卷。" : "不限时模式。"}${S.restored ? "已恢复上次没交的草稿。" : ""}段落之间空一行。</span></div>
      </section></div>
  </div>`);
  updateCount(); tick();
  const t = $("#iwText"); if(t) t.focus();
}
function updateCount(){
  const t = $("#iwText"); if(!t || !S) return;
  const x = S.tasks[S.cur]; x.text = t.value;
  const n = wordsOf(x.text).length, min = MIN_WORDS[x.it.task], el = $("#iwCount");
  if(el){ el.textContent = `${n} / ${min} 词`; el.classList.toggle("ok", n>=min) }
  const tab = $("#iwTab" + S.cur); if(tab) tab.textContent = `${n} 词`;
  clearTimeout(updateCount.t);
  updateCount.t = setTimeout(() => { if(S && S.phase==="write") App.store.set(DRAFT_KEY, { key:draftKey(), texts:S.tasks.map(y => y.text) }) }, 600);
}

/* ---------- 解析 ---------- */
function renderReview(){
  const x = S.tasks[S.cur], it = x.it, a = x.a;
  const self = it.task===1
    ? ["开头用自己的话改写了题目","概述写出了最主要的趋势或特征","选取了关键数据并做了比较","没有逐个罗列所有数字"]
    : ["回答了题目的所有部分","立场在引言和结论中一致","每个主体段有一个中心论点","论点有解释和具体例子"];
  view(`<div class="stage">
    <div class="meta"><span class="chip done">已交卷</span><span>${S.mode==="full" ? "完整模拟" : `Task ${it.task} · ${esc(it.name)}`}</span><span class="left">${a.n} 词 · ${a.paras} 段</span></div>
    ${S.timeUp ? `<div class="fb no">时间到，已自动交卷。</div>` : ""}
    ${tabsHTML(true)}
    <div class="rgrid">
      <article class="pane-text">
        <details><summary class="section-label" style="cursor:pointer">题目</summary>${promptHTML(it)}</details>
        <p class="section-label">你的作文</p>
        <div class="w-answer">${esc(x.text) || '<span class="note">（没有写内容）</span>'}</div>
        <p class="section-label" style="margin-top:16px">自动检查</p>
        <div class="status-list">${a.checks.map(([ok,label,hint]) => `<div><span class="dot ${ok ? "ok" : "no"}"></span><span><b>${esc(label)}</b>${ok ? "" : `<br><span class="note">${esc(hint)}</span>`}</span></div>`).join("")}</div>
        <p class="section-label" style="margin-top:16px">自查</p>
        <div class="selfcheck" style="flex-direction:column;align-items:flex-start">${self.map(s => `<label><input type="checkbox"> ${esc(s)}</label>`).join("")}</div>
      </article>
      <section class="pane-q">
        <div class="tip"><b>${it.task===1 ? "写作要点" : "题型：" + TYPE2[it.type]}</b><br>${esc(it.hint)}</div>
        <details open><summary class="section-label" style="cursor:pointer">范文（${wordsOf(it.model).length} 词）</summary><div class="w-answer model">${App.vocab ? App.vocab.linkify(it.model) : esc(it.model)}</div></details>
        <div><p class="section-label">常用句型</p><ul class="wbul">${it.phrases.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
        <div class="ritem"><b>AI 估分与修改建议</b>
          ${App.hasAI() ? `<p class="note" style="margin:0">把题目和你的作文发给 Claude，按雅思写作的四项评分标准粗略估分，指出语法和用词问题，并给出修改版。${S.tasks.length>1 ? "两篇会一起点评。" : ""}</p>
            <div class="row"><button class="btn" id="iwAI">生成点评</button></div><div class="ai-out" id="iwAIout" ${S.ai ? "" : "hidden"}>${esc(S.ai || "")}</div>`
          : `<p class="note" style="margin:0">在 <a href="#settings">设置</a> 里填写 Claude API Key 后，这里可以生成估分、逐句改错和修改版。</p>`}
        </div>
      </section>
    </div>
    <div class="row">${S.mode==="full" ? `<button class="btn" data-start="full">再模拟一次</button>` : `<button class="btn" data-start="${S.mode}" data-id="${it.id}">重写这一题</button>`}<button class="btn alt" data-home>返回</button></div>
  </div>`);
}
async function aiFeedback(btn){
  const out = $("#iwAIout"); out.hidden = false; btn.disabled = true; out.textContent = "正在生成点评，大约需要一分钟…";
  const parts = S.tasks.map(x => {
    const it = x.it;
    const task = it.task===1 ? `Task 1（学术类图表描述，至少 150 词）\n题目：${it.prompt} Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n图表数据：\n${chartText(it)}`
      : `Task 2（议论文，至少 250 词）\n题目：${it.prompt}`;
    return `${task}\n\n学生作文（${x.a.n} 词）：\n${x.text || "（空白）"}`;
  }).join("\n\n————————\n\n");
  const prompt = `你是一位经验丰富的雅思写作考官和老师。下面是一名中国学生的雅思学术类写作练习。

${parts}

请用中文输出，纯文本，不要使用 Markdown 符号（不要 #、*、**）。${S.tasks.length>1 ? "两篇分别点评，最后按 Task 2 占三分之二的权重给一个写作总分估计。" : ""}每篇包括：
【估分】按雅思写作评分标准，分别给 ${S.tasks.some(x => x.it.task===1) ? "Task Achievement（Task 1）或 Task Response（Task 2）" : "Task Response"}、Coherence and Cohesion、Lexical Resource、Grammatical Range and Accuracy 四项各一个估计分（0–9，可以是 .5），各用一句话说明依据，再给该篇的整体估分。字数不足要指出对分数的影响。提醒这只是粗略估计。
【任务完成】${S.tasks.some(x => x.it.task===1) ? "Task 1：是否有概述、是否选取并比较了关键数据、数据是否准确；" : ""}Task 2：是否回答了题目的所有部分、立场是否清楚一致、论证和例子是否充分。
【语言问题】列出 4–6 处语法或用词错误，每条写出原句和改正后的句子，并简单说明原因。
【修改版】在保留学生原意和结构的前提下，给出改进版（英文，Task 1 约 170–190 词，Task 2 约 270–300 词）。
【下一步建议】两三条具体可做的练习建议。`;
  try{ S.ai = await App.askClaude(prompt, { maxTokens:16000, effort:"medium" }); out.textContent = S.ai }
  catch(e){ out.textContent = e.message || "生成失败，可以再试一次。" }
  btn.disabled = false;
}

/* ---------- 事件 ---------- */
function onClick(e){
  const t = e.target.closest("button"); if(!t) return;
  const d = t.dataset;
  if(d.start){ start(d.start, d.id); return }
  if(d.tab!==undefined){
    if(S.phase==="write"){ const ta = $("#iwText"); if(ta) S.tasks[S.cur].text = ta.value; S.cur = +d.tab; renderWrite() }
    else{ S.cur = +d.tab; renderReview() }
    return;
  }
  if(d.home!==undefined){ exit(); return }
  if(t.id==="iwAI"){ aiFeedback(t); return }
  if(d.submit!==undefined){
    const ta = $("#iwText"); if(ta) S.tasks[S.cur].text = ta.value;
    const short = S.tasks.some(x => wordsOf(x.text).length < MIN_WORDS[x.it.task]);
    if(short && !d.armed){ d.armed = "1"; t.textContent = "字数还没达到要求，再点一次交卷"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "交卷" } }, 4000); return }
    submit(false); return;
  }
  if(d.quit!==undefined){
    if(!d.armed){ d.armed = "1"; t.textContent = "再点一次退出（草稿会保留）"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "退出" } }, 4000); return }
    exit(); return;
  }
}
function onInput(e){
  if(e.target.id==="iwText") updateCount();
  if(e.target.id==="iwTimed"){ data.settings.timed = e.target.checked; save() }
}

App.routes.iwriting = {
  exams:["ielts"],
  init(){
    const root = $("#view-iwriting");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
  },
  enter(){ if(!S) return renderHome(); if(S.phase==="write"){ renderWrite(); startTimer() } else renderReview() },
  leave(){ stopTimer() }
};
})();
