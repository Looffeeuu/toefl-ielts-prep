/* 雅思题组：编号、作答界面、判分和解析。雅思阅读和雅思听力共用
   题组格式见 ielts-reading-data.js 文件开头的说明；作答记录 ans 以题号为键 */
(function(){
const { esc } = App;
const Q = App.iq = {};
Q.TYPE = { tfng:"判断 T/F/NG", ynng:"观点 Y/N/NG", headings:"段落标题", match:"配对", gap:"填空", mcq:"单选" };
const ROMAN = ["i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii"];
const TF = { tfng:["TRUE","FALSE","NOT GIVEN"], ynng:["YES","NO","NOT GIVEN"] };
const BLANK = "___";

// 给题目编号：start 为第一题的题号；返回 { groups:[{ g, first, last, rows:[{ it, n } | { label }] }], list:[{ n, it, g }] }
Q.build = (groups, start, ctx) => {
  let n = start; const list = [];
  const out = groups.map(g => {
    const first = n;
    const rows = g.items.map(it => { if(it.label) return { label:it.label }; const r = { it, n:n++ }; list.push({ n:r.n, it, g }); return r });
    return { g, first, last:n-1, rows };
  });
  return { groups:out, list, ctx:ctx || {} };
};
const optLetters = (g, ctx) => g.options==="paras" ? (ctx.paras || []).map(p => [p, ""]) : g.type==="headings" ? g.options.map((t,i) => [ROMAN[i], t]) : g.options;

/* ---------- 判分 ---------- */
const norm = s => String(s || "").toLowerCase().replace(/[’‘]/g, "'").replace(/^[\s"'(]+|[\s"'.,;:!?)]+$/g, "").replace(/\s+/g, " ");
const words = s => norm(s) ? norm(s).split(" ").length : 0;
function check(it, g, given){
  if(g.type==="gap"){
    if(!norm(given)) return { ok:false };
    if(g.maxWords && words(given) > g.maxWords) return { ok:false, note:`超出字数限制（最多 ${g.maxWords} 个词）` };
    return { ok: it.a.some(x => norm(x)===norm(given)) };
  }
  if(g.type==="mcq") return { ok: given===it.a };
  return { ok: given!=null && given===it.a };
}
const correctText = (it, g, ctx) => {
  if(g.type==="gap") return it.a[0];
  if(g.type==="mcq") return `${"ABCD"[it.a]}  ${it.opts[it.a]}`;
  if(TF[g.type]) return it.a;
  const o = optLetters(g, ctx).find(x => x[0]===it.a);
  return o && o[1] ? `${it.a}  ${o[1]}` : it.a;
};
const givenText = (it, g, v, ctx) => {
  if(v==null || v==="") return "未作答";
  if(g.type==="mcq") return `${"ABCD"[v]}  ${it.opts[v]}`;
  if(g.type==="gap" || TF[g.type]) return v;
  const o = optLetters(g, ctx).find(x => x[0]===v);
  return o && o[1] ? `${v}  ${o[1]}` : v;
};
// 返回 { c, n, per:{ 题号:{ ok, note } }, types:{ 类型:[对, 总] } }
Q.grade = (built, ans) => {
  const per = {}, types = {}; let c = 0;
  built.list.forEach(({ n, it, g }) => {
    const r = check(it, g, ans[n]); per[n] = r; if(r.ok) c++;
    const t = types[g.type] || (types[g.type] = [0,0]); t[1]++; if(r.ok) t[0]++;
  });
  return { c, n:built.list.length, per, types };
};

/* ---------- 作答界面 ---------- */
function header(b){
  const g = b.g;
  return `<p class="iq-range">Questions ${b.first}${b.last>b.first ? "–" + b.last : ""}</p><p class="iq-instr">${esc(g.instr)}</p>
    ${g.limit ? `<p class="iq-limit">${esc(g.limit)}</p>` : ""}
    ${TF[g.type] ? `<div class="iq-key">${TF[g.type].map((k,i) => `<div><b>${k}</b> ${esc(g.type==="tfng" ? ["if the statement agrees with the information","if the statement contradicts the information","if there is no information on this"][i] : ["if the statement agrees with the claims of the writer","if the statement contradicts the claims of the writer","if it is impossible to say what the writer thinks about this"][i])}</div>`).join("")}</div>` : ""}`;
}
function selectHTML(n, opts, v){
  return `<select class="iq-sel" data-iqn="${n}" aria-label="第 ${n} 题"><option value="">${n}</option>${opts.map(([k]) => `<option value="${esc(k)}" ${v===k ? "selected" : ""}>${esc(k)}</option>`).join("")}</select>`;
}
function inputHTML(n, v){ return `<input class="iq-in" data-iqn="${n}" value="${esc(v || "")}" placeholder="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="第 ${n} 题">` }
function withBlank(q, field){ return q.includes(BLANK) ? q.split(BLANK).map(esc).join(field) : `${esc(q)} ${field}` }
function groupHTML(b, ans, ctx){
  const g = b.g; let body = "";
  const opts = g.type==="headings" || g.type==="match" ? optLetters(g, ctx) : null;
  if(TF[g.type]){
    body = b.rows.map(r => `<div class="iq-item"><span class="iq-n">${r.n}</span><div class="iq-body"><div>${esc(r.it.q)}</div>
      <div class="iq-seg">${TF[g.type].map(k => `<button type="button" data-iqn="${r.n}" data-iqv="${k}" class="${ans[r.n]===k ? "on" : ""}">${k}</button>`).join("")}</div></div></div>`).join("");
  }else if(g.type==="mcq"){
    body = b.rows.map(r => `<div class="iq-item"><span class="iq-n">${r.n}</span><div class="iq-body"><div>${esc(r.it.q)}</div>
      <div class="opts">${r.it.opts.map((o,i) => `<button type="button" class="opt${ans[r.n]===i ? " sel" : ""}" data-iqn="${r.n}" data-iqv="${i}"><span class="l">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div></div></div>`).join("");
  }else if(g.flow){
    // 摘要填空：各题连成一段，空格处是输入框或下拉框
    body = `<div class="iq-box">${g.heading ? `<p class="iq-head">${esc(g.heading)}</p>` : ""}<p class="iq-flow">${b.rows.map(r => r.label ? "" : withBlank(r.it.q, g.type==="gap" ? inputHTML(r.n, ans[r.n]) : selectHTML(r.n, opts, ans[r.n]))).join(" ")}</p></div>`;
  }else if(g.type==="gap"){
    body = `<div class="iq-box">${g.heading ? `<p class="iq-head">${esc(g.heading)}</p>` : ""}${b.rows.map(r => r.label ? `<p class="iq-sub">${esc(r.label)}</p>`
      : `<div class="iq-line"><span class="iq-n">${r.n}</span><span>${withBlank(r.it.q, inputHTML(r.n, ans[r.n]))}</span></div>`).join("")}</div>`;
  }else{
    body = b.rows.map(r => `<div class="iq-item"><span class="iq-n">${r.n}</span><div class="iq-body iq-row"><span>${esc(r.it.q)}</span>${selectHTML(r.n, opts, ans[r.n])}</div></div>`).join("");
  }
  const optBox = opts && g.options!=="paras" ? `<div class="iq-opts">${g.type==="headings" ? `<p class="iq-head">List of Headings</p>` : ""}${opts.map(([k,t]) => `<div><b>${esc(k)}</b> ${esc(t)}</div>`).join("")}</div>` : "";
  const example = g.example ? `<p class="note" style="margin:0">Example: ${esc(g.example)}</p>` : "";
  return `<section class="iq-group">${header(b)}${g.flow ? optBox + body : optBox + example + body}</section>`;
}
Q.render = (built, ans) => built.groups.map(b => groupHTML(b, ans, built.ctx)).join("");

/* ---------- 解析 ---------- */
Q.review = (built, ans, res) => built.groups.map(b => {
  const g = b.g, ctx = built.ctx;
  const opts = g.type==="headings" || (g.type==="match" && g.options!=="paras") ? optLetters(g, ctx) : null;
  return `<section class="iq-group">${header(b)}
    ${opts ? `<details class="iq-opts-d"><summary class="note">${g.type==="headings" ? "List of Headings" : "选项"}</summary><div class="iq-opts">${opts.map(([k,t]) => `<div><b>${esc(k)}</b> ${esc(t)}</div>`).join("")}</div></details>` : ""}
    ${b.rows.map(r => {
      if(r.label) return `<p class="iq-sub">${esc(r.label)}</p>`;
      const it = r.it, p = res.per[r.n], v = ans[r.n];
      const q = it.q.includes(BLANK) ? esc(it.q).replace(BLANK, `<span class="iq-gap">${r.n}</span>`) : esc(it.q);
      return `<div class="iq-item rv ${p.ok ? "ok" : "no"}"><span class="iq-n">${r.n}</span><div class="iq-body">
        <div>${q}</div>
        ${g.type==="mcq" ? `<div class="note">${it.opts.map((o,i) => `${"ABCD"[i]}. ${esc(o)}`).join("　")}</div>` : ""}
        <div class="iq-ans"><span class="chip ${p.ok ? "done" : "bad"}">${p.ok ? "正确" : v==null || v==="" ? "未作答" : "错误"}</span>
          ${p.ok ? "" : `<span>你的答案：<b>${esc(givenText(it, g, v, ctx))}</b></span>`}<span>正确答案：<b>${esc(correctText(it, g, ctx))}</b>${g.type==="gap" && it.a.length>1 ? `<span class="note">（也可以写 ${it.a.slice(1).map(esc).join(" / ")}）</span>` : ""}</span></div>
        ${p.note ? `<div class="note" style="color:var(--bad)">${esc(p.note)}</div>` : ""}
        <div class="exp"><b>解析</b>　${esc(it.why)}</div>
        ${App.reportBtn ? `<div class="rep-row">${App.reportBtn(`${ctx.label || "雅思"} 第 ${r.n} 题：${it.q}｜你的答案：${givenText(it, g, v, ctx)}｜正确答案：${correctText(it, g, ctx)}`)}</div>` : ""}
      </div></div>`;
    }).join("")}
  </section>`;
}).join("");

/* ---------- 事件：把作答写进 ans ---------- */
Q.bind = (root, getAns, onChange) => {
  root.addEventListener("click", e => {
    const b = e.target.closest("[data-iqv]"); if(!b || b.disabled) return;
    const ans = getAns(); if(!ans) return;
    const n = +b.dataset.iqn, v = /^\d+$/.test(b.dataset.iqv) ? +b.dataset.iqv : b.dataset.iqv;
    ans[n] = v;
    b.parentElement.querySelectorAll("[data-iqv]").forEach(x => x.classList.toggle(x.classList.contains("opt") ? "sel" : "on", x===b));
    if(onChange) onChange(n);
  });
  const set = e => {
    const t = e.target; if(!t.dataset || t.dataset.iqn===undefined || t.dataset.iqv!==undefined) return;
    const ans = getAns(); if(!ans) return;
    ans[+t.dataset.iqn] = t.value; if(onChange) onChange(+t.dataset.iqn);
  };
  root.addEventListener("input", set); root.addEventListener("change", set);
};
Q.answered = (built, ans) => built.list.filter(({ n }) => ans[n]!=null && ans[n]!=="").length;

/* ---------- 估分：British Council 公布的参考分数线（40 题中答对的题数），不同场次会略有浮动 ---------- */
const ANCHORS = { listening:[[35,"8 分及以上"],[30,"约 7–7.5 分"],[23,"约 6–6.5 分"],[16,"约 5–5.5 分"],[0,"5 分以下"]],
                  reading:[[35,"8 分及以上"],[30,"约 7–7.5 分"],[23,"约 6–6.5 分"],[15,"约 5–5.5 分"],[0,"5 分以下"]] };
Q.band = (kind, raw) => ANCHORS[kind].find(([min]) => raw>=min)[1];
})();
