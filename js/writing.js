/* 写作模块：组句（Build a Sentence）、写邮件（Write an Email）、学术讨论（Academic Discussion） */
(function(){
const { $, esc, shuffle } = App;
const W = window.WRITING;
const SET_SECONDS = 410;          // 组句一套 10 题：6 分 50 秒（备考机构给出的时长）
const EMAIL_SECONDS = 7 * 60;
const DISC_SECONDS = 10 * 60;

/* ---------- 题目解析 ---------- */
function parseItem(line){
  const [ctx, ans, dis, tip] = line.split("|").map(s => (s||"").trim());
  const m = ans.match(/[.?!]$/), punct = m ? m[0] : "";
  const chunks = (punct ? ans.slice(0,-1) : ans).split(" / ").map(c => /^\[.*\]$/.test(c) ? { text:c.slice(1,-1), fixed:true } : { text:c, fixed:false });
  const distractors = (dis||"").split(";").map(s => s.trim()).filter(Boolean);
  return { ctx, chunks, punct, distractors, tip, sentence: chunks.map(c => c.text).join(" ") + punct };
}
W.sentenceSets.forEach(s => {
  const tags = (W.sentenceTags[s.id] || "").split(",");
  s.list = s.items.trim().split(/\r?\n/).map((line,i) => Object.assign(parseItem(line), { tag:tags[i] || "" }));
});
const tagChip = it => it.tag && W.grammarTags[it.tag] ? `<span class="chip learn" style="margin-right:6px">考点：${esc(W.grammarTags[it.tag])}</span>` : "";
const EMAIL = {}, DISC = {};
W.emails.forEach(e => EMAIL[e.id] = e);
W.discussions.forEach(d => DISC[d.id] = d);

/* ---------- 记录 ---------- */
const wblank = () => ({ sets:{}, drafts:{}, tags:{}, settings:{ timed:true } });
function normalize(d){ const b = wblank(); d = d || {}; return { sets:d.sets||{}, drafts:d.drafts||{}, tags:d.tags||{}, settings:Object.assign(b.settings, d.settings||{}) } }
let data = normalize(App.store.get(App.KEYS.writing, null));
const save = () => App.store.set(App.KEYS.writing, data);
App.writingData = () => data;
App.loadWritingData = d => { data = normalize(d); save(); if(App.route==="writing" && !S) renderHome() };
const DRAFT_KEY = "toefl.writing.unsent";   // 未交卷的草稿，只是本机的便利功能

/* ---------- 文本分析 ---------- */
const wordsOf = t => (t.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) || []);
const TRANSITIONS = ["however","for example","for instance","in addition","moreover","therefore","as a result","in contrast","on the other hand","although","because","first","second","finally","in my view","in my opinion","that said","such as","instead","furthermore","consequently","while"];
const STOP = new Set("the a an and or but to of in on for with at by from as is are was were be been it this that these those i you he she we they my your our their his her its not do does did have has had will would can could should may might also very so than then there here which who what when where why how about into more most some any all one two just if".split(" "));
function analyze(text, kind, item){
  const words = wordsOf(text), n = words.length;
  const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).map(s => s.trim()).filter(s => wordsOf(s).length > 1);
  const avg = sentences.length ? Math.round(n / sentences.length) : 0;
  const lower = text.toLowerCase();
  const usedT = TRANSITIONS.filter(t => new RegExp("\\b" + t + "\\b").test(lower));
  const counts = {};
  words.forEach(w => { const k = w.toLowerCase(); if(k.length>=4 && !STOP.has(k)) counts[k] = (counts[k]||0)+1 });
  const repeated = Object.entries(counts).filter(([,c]) => c>=4).sort((a,b) => b[1]-a[1]).slice(0,4);
  const longS = sentences.filter(s => wordsOf(s).length > 35).length;
  const checks = [];
  if(kind==="email"){
    checks.push([n>=100 && n<=170, `字数 ${n}`, "邮件建议写 100–150 词：三个要点都要写到，又不至于写不完。"]);
    checks.push([/^\s*(dear|hi|hello|good (morning|afternoon|evening))\b/i.test(text), "有称呼（Dear … / Hi …）", "开头用 Dear + 称呼；写给朋友可以用 Hi。"]);
    checks.push([/(sincerely|regards|best|thank you|thanks|take care|cheers)[\s\S]{0,60}$/i.test(text.trim()), "有结尾敬语和署名", "结尾写 Best regards / Sincerely，下一行签名。"]);
    checks.push([/\b(i am writing|i'm writing|i would like|i wanted to|thank you (so much )?for)\b/i.test(text), "开头说明写信目的", "第一段用 I am writing to / about ... 交代写信原因。"]);
  }else{
    checks.push([n>=100, `字数 ${n}${n<100 ? "（少于 100）" : ""}`, "学术讨论至少 100 词，120–150 词比较理想。"]);
    const named = item.students.filter(s => new RegExp("\\b" + s.name + "\\b").test(text)).map(s => s.name);
    checks.push([named.length>0, named.length ? `回应了同学（${named.join("、")}）` : "没有提到同学的名字", "点名回应同学的观点，比如 I agree with Claire that ...，能让评分者看到你在参与讨论。"]);
    checks.push([/\b(i (think|believe|agree|disagree)|in my (view|opinion)|i side with)\b/i.test(text), "明确表明了观点", "第一句就亮出立场：I believe ... / I agree with ... that ..."]);
    checks.push([/\b(for example|for instance|such as|when i|in my experience)\b/i.test(text), "有具体例子", "用 For example / When I ... 举一个具体例子支撑理由。"]);
  }
  checks.push([usedT.length>=3, `连接词 ${usedT.length} 个${usedT.length ? "：" + usedT.slice(0,6).join(", ") : ""}`, "适当使用 however、for example、as a result 等连接词，让逻辑更清楚。"]);
  checks.push([longS===0, longS ? `${longS} 个句子超过 35 词` : "没有过长的句子", "超长句容易出语法错误，可以拆成两句。"]);
  checks.push([repeated.length===0, repeated.length ? "重复用词：" + repeated.map(([w,c]) => `${w}×${c}`).join("，") : "没有明显的重复用词", "同一个词反复出现时，可以换成同义词或代词。"]);
  return { n, sentences:sentences.length, avg, checks };
}

// 给「模考」用：自动检查、语法考点统计和写作记录
App.writingKit = { W, SET_SECONDS, EMAIL_SECONDS, DISC_SECONDS, analyze, wordsOf,
  tag: (tag, ok) => { if(!tag) return; const t = data.tags[tag] || (data.tags[tag] = [0,0]); t[1]++; if(ok) t[0]++; save() },
  draft: (id, text, secs) => { const prev = data.drafts[id] || { cnt:0 }; data.drafts[id] = { text, words:wordsOf(text).length, t:Date.now(), cnt:prev.cnt+1, secs }; save() } };

/* ---------- 会话 ---------- */
let S = null, timer = 0;
function stopTimer(){ clearInterval(timer); timer = 0 }
const fmt = s => `${Math.floor(s/60)}:${String(Math.max(0,s)%60).padStart(2,"0")}`;
function tick(){
  if(!S) return stopTimer();
  const el = $("#wtimer"); if(!el) return;
  if(S.deadline){
    const left = Math.round((S.deadline - Date.now())/1000);
    el.textContent = "剩余 " + fmt(left); el.classList.toggle("warn", left<60);
    if(left<=0){ stopTimer(); if(S.kind==="sentence") finishSet(true); else submitWriting(true) }
  }else el.textContent = "用时 " + fmt(Math.round((Date.now()-S.started)/1000));
}
function startTimer(){ stopTimer(); timer = setInterval(tick, 1000); tick() }
function view(html){ $("#view-writing").innerHTML = html }
function exitSession(){ stopTimer(); S = null; renderHome() }

/* ---------- 首页 ---------- */
function renderHome(){
  const setsDone = Object.values(data.sets);
  const correct = setsDone.reduce((a,s) => a + s.lastScore, 0), total = setsDone.length*10;
  const emails = W.emails.filter(e => data.drafts[e.id]).length, discs = W.discussions.filter(d => data.drafts[d.id]).length;
  const row = (attr, id, title, sub, right) => `<button class="setrow" ${attr}="${id}"><b>${esc(title)}</b><span class="note">${esc(sub)}</span><small>${right}</small></button>`;
  const draftNote = id => { const d = data.drafts[id]; return d ? `上次 ${d.words} 词` : "" };
  view(`<div class="grid">
    <aside class="rail">
      <div><h2>写作练习</h2><div class="date">新版托福 · 12 题 · 约 23 分钟</div></div>
      <div class="stats">
        <div class="stat"><div class="k">组句正确率</div><div class="v">${total ? Math.round(correct/total*100) + "<small>%</small>" : "—"}</div></div>
        <div class="stat"><div class="k">组句套数</div><div class="v">${setsDone.length}<small> / ${W.sentenceSets.length}</small></div></div>
        <div class="stat"><div class="k">邮件</div><div class="v">${emails}<small> / ${W.emails.length}</small></div></div>
        <div class="stat"><div class="k">学术讨论</div><div class="v">${discs}<small> / ${W.discussions.length}</small></div></div>
      </div>
      <section class="panel" style="padding:14px">
        <label class="check"><input type="checkbox" id="optTimed" ${data.settings.timed ? "checked" : ""}> 限时模式（时间到自动交卷）</label>
        <p class="note" style="margin:6px 0 0">编辑框关闭了拼写检查，和考试一样，需要自己注意拼写。</p>
      </section>
      <div class="tip"><b>两篇作文的骨架</b><br>邮件：称呼 → 写信目的 → 三个要点各写 1–2 句 → 礼貌结尾 → 署名。<br>讨论：表明立场 → 回应一位同学 → 理由 + 具体例子 → 一句收尾。</div>
    </aside>
    <section class="desk">
      <div class="tasks">
        <article class="task">
          <div class="en">Task 1 · Build a Sentence</div><h3>组句</h3>
          <div class="spec"><span>每套 10 题</span><span>约 7 分钟</span><span>全对才得分</span></div>
          <p class="note" style="margin:0">先读 A 说的话，再用下面的词块拼出 B 的回答。词块里可能混有干扰项，灰色的是已固定的部分。</p>
          <div class="setlist">${W.sentenceSets.map(s => { const r = data.sets[s.id]; return row("data-sset", s.id, s.name, "10 题", r ? `最好 ${r.best}/10` : "") }).join("")}</div>
        </article>
        <article class="task">
          <div class="en">Task 2 · Write an Email</div><h3>写邮件</h3>
          <div class="spec"><span>7 分钟</span><span>建议 100–150 词</span><span>3 个要点</span></div>
          <p class="note" style="margin:0">根据情境给指定的人写邮件，三个要点都要写到，语气要符合对象。</p>
          <div class="setlist">${W.emails.map(e => row("data-email", e.id, e.title, e.to, draftNote(e.id))).join("")}</div>
        </article>
        <article class="task">
          <div class="en">Task 3 · Academic Discussion</div><h3>学术讨论</h3>
          <div class="spec"><span>10 分钟</span><span>至少 100 词</span><span>回应同学</span></div>
          <p class="note" style="margin:0">教授在课程论坛上提问，两位同学已经回复。你要发表自己的观点，并与同学的观点互动。</p>
          <div class="setlist">${W.discussions.map(d => row("data-disc", d.id, d.title, d.topic, draftNote(d.id))).join("")}</div>
        </article>
      </div>
    </section>
  </div>`);
}

/* ---------- 组句 ---------- */
function startSet(id){
  const set = W.sentenceSets.find(s => s.id===id);
  S = { kind:"sentence", set, idx:0, results:[], started:Date.now(), deadline: data.settings.timed ? Date.now()+SET_SECONDS*1000 : 0 };
  loadItem(); startTimer();
}
function loadItem(){
  const it = S.set.list[S.idx];
  let uid = 0;
  S.bank = shuffle([...it.chunks.filter(c => !c.fixed).map(c => ({ id:uid++, text:c.text })), ...it.distractors.map(d => ({ id:uid++, text:d }))]);
  S.slots = it.chunks.map(c => c.fixed ? { fixed:true, text:c.text } : { fixed:false, chip:null });
  S.checked = null;
  renderItem();
}
function renderItem(){
  const it = S.set.list[S.idx], done = S.checked;
  const chip = id => S.bank.find(b => b.id===id);
  const used = new Set(S.slots.filter(s => s.chip!=null).map(s => s.chip));
  const slots = S.slots.map((s,i) => s.fixed ? `<span class="slot fixed">${esc(s.text)}</span>`
    : `<button class="slot${s.chip!=null ? " filled" : ""}${done ? (done.ok ? " ok" : " no") : ""}" data-slot="${i}" ${done ? "disabled" : ""}>${s.chip!=null ? esc(chip(s.chip).text) : "&nbsp;"}</button>`).join("");
  const bank = S.bank.map(b => `<button class="bchip" data-chip="${b.id}" ${used.has(b.id) || done ? "disabled" : ""}>${esc(b.text)}</button>`).join("");
  const full = S.slots.every(s => s.fixed || s.chip!=null);
  view(`<div class="stage">
    <div class="meta"><span class="chip learn">组句</span><span>${esc(S.set.name)}</span><span class="left">${S.idx+1} / ${S.set.list.length}</span><span class="timer" id="wtimer"></span><button class="btn alt" data-wquit style="margin-left:8px">退出</button></div>
    <div class="steps">${S.set.list.map((_,i) => `<i class="${i<S.idx ? "on" : i===S.idx ? "cur" : ""}"></i>`).join("")}</div>
    <div class="sb">
      <div class="sb-turn"><span class="sb-who">A</span><p class="sb-ctx">${esc(it.ctx)}</p></div>
      <div class="sb-turn"><span class="sb-who b">B</span><div class="sb-line">${slots}<span class="sb-punct">${esc(it.punct)}</span></div></div>
      <div class="sb-bank">${bank}</div>
      <p class="note" style="margin:0">点击词块填入下一个空；点已填的空可以撤回。${it.distractors.length ? "有一个词块用不上。" : ""}</p>
    </div>
    ${done ? `<div class="fb ${done.ok ? "ok" : "no"}">${done.ok ? "正确。" : "不对。正确答案："}<b>${esc(it.sentence)}</b><br>${tagChip(it)}<span class="note">${esc(it.tip)}</span></div>` : ""}
    <div class="row">${done
      ? `<button class="btn" data-wnext>${S.idx+1<S.set.list.length ? "下一题" : "查看结果"}<kbd>Enter</kbd></button>`
      : `<button class="btn" data-wcheck ${full ? "" : "disabled"}>检查<kbd>Enter</kbd></button><button class="btn alt" data-wclear>清空</button>`}</div>
  </div>`);
  tick();
}
function checkItem(){
  const it = S.set.list[S.idx];
  const built = S.slots.map(s => s.fixed ? s.text : (S.bank.find(b => b.id===s.chip) || {}).text);
  const ok = built.every((t,i) => t===it.chunks[i].text);
  S.checked = { ok }; S.results[S.idx] = { ok, built: built.join(" ") + it.punct };
  if(it.tag){ const t = data.tags[it.tag] || (data.tags[it.tag] = [0,0]); t[1]++; if(ok) t[0]++; save() }
  renderItem();
}
function finishSet(timeUp){
  stopTimer();
  const score = S.results.filter(r => r && r.ok).length;
  const prev = data.sets[S.set.id] || { best:0, cnt:0 };
  data.sets[S.set.id] = { best:Math.max(prev.best, score), lastScore:score, cnt:prev.cnt+1, t:Date.now() };
  save();
  S.screen = "result";
  view(`<div class="stage">
    <div class="meta"><span class="chip done">组句完成</span><span>${esc(S.set.name)}</span><span class="left">用时 ${fmt(Math.round((Date.now()-S.started)/1000))}</span></div>
    ${timeUp ? `<div class="fb no">时间到，未完成的题按错误计。</div>` : ""}
    <div class="row" style="align-items:baseline;gap:14px"><div class="score">${score}<span style="font-size:24px;color:var(--muted)"> / ${S.set.list.length}</span></div><div class="note">组句每题全对才得分。错题看一下语法提示，常见考点是间接疑问句的语序和助动词后接原形。</div></div>
    <div class="review">${S.set.list.map((it,i) => { const r = S.results[i];
      return `<div class="ritem"><div class="meta"><span>第 ${i+1} 题</span><span class="chip ${r && r.ok ? "done" : "bad"}">${r ? (r.ok ? "正确" : "错误") : "未作答"}</span>${tagChip(it)}</div>
        <div class="note">A：${esc(it.ctx)}</div>
        <div><b>${esc(it.sentence)}</b></div>
        ${r && !r.ok ? `<div class="said">你的答案：${esc(r.built)}</div>` : ""}
        <div class="exp">${esc(it.tip)}</div></div>` }).join("")}</div>
    <div class="row"><button class="btn" data-sset="${S.set.id}">再做一遍</button><button class="btn alt" data-whome>返回写作首页</button></div>
  </div>`);
}

/* ---------- 写邮件 / 学术讨论 ---------- */
function promptHTML(kind, it){
  if(kind==="email") return `<div class="doc"><div class="doc-kind">Write an Email</div>
    <div class="ptext"><p>${esc(it.scenario)}</p><p><b>In your email, do the following:</b></p>
    <ul class="wbul">${it.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>
    <p class="note">Write as much as you can and in complete sentences.</p></div></div>`;
  return `<div class="ptext"><p class="note" style="font-family:var(--f-ui);font-size:14px">Your professor is teaching a class on ${esc(it.topic.toLowerCase())}. Write a post responding to the professor's question. In your response, you should express and support your opinion and make a contribution to the discussion in your own words. An effective response will contain at least 100 words.</p></div>
    <div class="post prof"><div class="who">${esc(it.professor.name)}</div><p>${esc(it.professor.post)}</p></div>
    ${it.students.map(s => `<div class="post"><div class="who">${esc(s.name)}</div><p>${esc(s.post)}</p></div>`).join("")}`;
}
function startWriting(kind, id){
  const it = kind==="email" ? EMAIL[id] : DISC[id];
  const secs = kind==="email" ? EMAIL_SECONDS : DISC_SECONDS;
  const saved = App.store.get(DRAFT_KEY, null);
  S = { kind, item:it, started:Date.now(), deadline: data.settings.timed ? Date.now()+secs*1000 : 0,
        text: saved && saved.id===id ? saved.text : "" };
  view(`<div class="stage reading">
    <div class="meta"><span class="chip learn">${kind==="email" ? "写邮件" : "学术讨论"}</span><span>${esc(it.title)}</span>
      <span class="left" id="wcount">0 词</span><span class="timer" id="wtimer"></span><button class="btn alt" data-wquit style="margin-left:8px">退出</button></div>
    <div class="rgrid"><article class="pane-text">${promptHTML(kind, it)}</article>
      <section class="pane-q">
        ${kind==="email" ? `<div class="doc-head" style="border:1px solid var(--line);border-radius:8px 8px 0 0;border-bottom:0"><div><span>To</span>${esc(it.to)}</div><div><span>Subject</span>${esc(it.title)}</div></div>` : ""}
        <textarea id="wText" class="w-editor${kind==="email" ? " mail" : ""}" spellcheck="false" autocomplete="off" placeholder="${kind==="email" ? "Dear ..." : "Write your post here..."}">${esc(S.text)}</textarea>
        <div class="row"><button class="btn" data-wsubmit>交卷</button><span class="note">${data.settings.timed ? `时间到会自动交卷。` : "不限时模式。"}${S.text ? "已恢复上次没交的草稿。" : ""}</span></div>
      </section></div>
  </div>`);
  updateCount(); startTimer(); $("#wText").focus();
}
function updateCount(){
  const t = $("#wText"); if(!t || !S) return;
  S.text = t.value;
  const n = wordsOf(S.text).length, el = $("#wcount");
  if(el) el.textContent = `${n} 词`;
  clearTimeout(updateCount.t);
  updateCount.t = setTimeout(() => App.store.set(DRAFT_KEY, { id:S.item.id, text:S.text }), 600);
}
function submitWriting(timeUp){
  if(!S || S.screen==="review") return;
  stopTimer();
  const t = $("#wText"); if(t) S.text = t.value;
  const a = analyze(S.text, S.kind, S.item);
  const prev = data.drafts[S.item.id] || { cnt:0 };
  data.drafts[S.item.id] = { text:S.text, words:a.n, t:Date.now(), cnt:prev.cnt+1, secs:Math.round((Date.now()-S.started)/1000) };
  save();
  try{ localStorage.removeItem(DRAFT_KEY) }catch(e){}
  S.screen = "review"; S.timeUp = timeUp; S.analysis = a;
  renderReview();
}
function renderReview(){
  const it = S.item, a = S.analysis, isEmail = S.kind==="email";
  const self = isEmail ? it.bullets.map(b => "写到了：" + b) : ["第一句就表明了立场","回应了至少一位同学的观点","给出了理由和具体例子","提出了同学没说过的新观点"];
  view(`<div class="stage">
    <div class="meta"><span class="chip done">已交卷</span><span>${esc(it.title)}</span><span class="left">${a.n} 词 · ${a.sentences} 句 · 平均每句 ${a.avg} 词</span></div>
    ${S.timeUp ? `<div class="fb no">时间到，已自动交卷。</div>` : ""}
    <div class="rgrid">
      <article class="pane-text">
        <p class="section-label">你的${isEmail ? "邮件" : "回复"}</p>
        <div class="w-answer">${esc(S.text) || '<span class="note">（没有写内容）</span>'}</div>
        <p class="section-label" style="margin-top:16px">自动检查</p>
        <div class="status-list">${a.checks.map(([ok,label,hint]) => `<div><span class="dot ${ok ? "ok" : "no"}"></span><span><b>${esc(label)}</b>${ok ? "" : `<br><span class="note">${esc(hint)}</span>`}</span></div>`).join("")}</div>
        <p class="section-label" style="margin-top:16px">自查（对照题目逐项打勾）</p>
        <div class="selfcheck" style="flex-direction:column;align-items:flex-start">${self.map(s => `<label><input type="checkbox"> ${esc(s)}</label>`).join("")}</div>
      </article>
      <section class="pane-q">
        <details open><summary class="section-label" style="cursor:pointer">范文（${wordsOf(it.model).length} 词）</summary><div class="w-answer model">${App.vocab ? App.vocab.linkify(it.model) : esc(it.model)}</div></details>
        <div><p class="section-label">常用句型</p><ul class="wbul">${it.phrases.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
        <div class="ritem"><b>AI 估分与修改建议</b>
          ${App.hasAI() ? `<p class="note" style="margin:0">把题目和你的${isEmail ? "邮件" : "回复"}发给 Claude，参照 ETS 0–5 分的任务评分标准粗略估分，指出语法和用词问题，并给出修改版。</p>
            <div class="row"><button class="btn" id="wAI">生成点评</button></div><div class="ai-out" id="wAIout" hidden></div>`
          : `<p class="note" style="margin:0">在 <a href="#settings">设置</a> 里填写 Claude API Key 后，这里可以生成估分、逐句改错和修改版。</p>`}
        </div>
      </section>
    </div>
    <div class="row"><button class="btn" data-${isEmail ? "email" : "disc"}="${it.id}">重写这一题</button><button class="btn alt" data-whome>返回写作首页</button>${App.reportBtn ? App.reportBtn(`托福写作 ${it.id}（${it.title}）：题目、范文或自动检查有问题`, "题目或范文有问题") : ""}</div>
  </div>`);
  window.scrollTo(0,0);
}
async function aiFeedback(btn){
  const out = $("#wAIout"), it = S.item, isEmail = S.kind==="email";
  out.hidden = false; btn.disabled = true; out.textContent = "正在生成点评，大约需要半分钟…";
  const task = isEmail
    ? `题型：Write an Email（7 分钟）\n情境：${it.scenario}\n收件人：${it.to}\n要求：\n- ${it.bullets.join("\n- ")}`
    : `题型：Academic Discussion（10 分钟，至少 100 词）\n教授 ${it.professor.name}：${it.professor.post}\n${it.students.map(s => `学生 ${s.name}：${s.post}`).join("\n")}`;
  const prompt = `你是一位经验丰富的托福写作老师。下面是一名中国学生在 2026 新版托福写作中的作答。

${task}

学生的作答（${wordsOf(S.text).length} 词）：
${S.text || "（空白）"}

请用中文输出，纯文本，不要使用 Markdown 符号（不要 #、*、**）：
【粗略估分】参照 ETS 该任务 0–5 分的评分标准给一个估分（可以是 .5），一句话说明依据。
【任务完成度】${isEmail ? "三个要点是否都写到；语气、称呼和结尾是否适合收件人" : "是否表明观点；是否回应了同学；理由和例子是否充分；是否提出了新的内容"}。
【语言问题】列出 3–5 处语法或用词错误，每条写出原句和改正后的句子，并简单说明原因。
【修改版】在保留学生原意和结构的前提下，给出一篇改进版（英文，${isEmail ? "110–140" : "120–150"} 词）。
【下一步建议】两三条具体可做的练习建议。`;
  try{ out.textContent = await App.askClaude(prompt, { maxTokens:12000, effort:"medium" }) }
  catch(e){ out.textContent = e.message || "生成失败，可以再试一次。" }
  btn.disabled = false;
}

/* ---------- 事件 ---------- */
function onClick(e){
  const t = e.target.closest("button"); if(!t) return;
  const d = t.dataset;
  if(d.sset){ startSet(d.sset); return }
  if(d.email){ startWriting("email", d.email); return }
  if(d.disc){ startWriting("discussion", d.disc); return }
  if(d.chip!==undefined){ const i = S.slots.findIndex(s => !s.fixed && s.chip==null); if(i>=0){ S.slots[i].chip = +d.chip; renderItem() } return }
  if(d.slot!==undefined){ S.slots[+d.slot].chip = null; renderItem(); return }
  if(d.wclear!==undefined){ S.slots.forEach(s => { if(!s.fixed) s.chip = null }); renderItem(); return }
  if(d.wcheck!==undefined){ checkItem(); return }
  if(d.wnext!==undefined){ nextItem(); return }
  if(d.wsubmit!==undefined){ submitWriting(false); return }
  if(t.id==="wAI"){ aiFeedback(t); return }
  if(d.whome!==undefined){ exitSession(); return }
  if(d.wquit!==undefined){
    if(!d.armed){ d.armed = "1"; t.textContent = "再点一次退出"; setTimeout(() => { if(t.isConnected){ delete t.dataset.armed; t.textContent = "退出" } }, 4000); return }
    exitSession(); return;
  }
}
function nextItem(){ S.idx++; if(S.idx>=S.set.list.length) finishSet(false); else loadItem() }
function onInput(e){
  if(e.target.id==="wText") updateCount();
  if(e.target.id==="optTimed"){ data.settings.timed = e.target.checked; save() }
}
function onKey(e){
  if(App.route!=="writing" || !S || S.kind!=="sentence" || S.screen==="result") return;
  if(e.key==="Enter"){
    e.preventDefault();
    if(S.checked) nextItem();
    else if(S.slots.every(s => s.fixed || s.chip!=null)) checkItem();
  }
  if(e.key==="Backspace" && !S.checked){
    const filled = S.slots.map((s,i) => [s,i]).filter(([s]) => !s.fixed && s.chip!=null);
    if(filled.length){ e.preventDefault(); filled[filled.length-1][0].chip = null; renderItem() }
  }
}

App.routes.writing = {
  exams:["toefl"],
  init(){
    const root = $("#view-writing");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
    document.addEventListener("keydown", onKey);
  },
  enter(){ if(!S) renderHome() }
};
})();
