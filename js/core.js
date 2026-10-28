/* 公共工具：存储、朗读、提示音、Claude API、页面路由 */
(function(){
const App = window.App = {};

App.$ = s => document.querySelector(s);
App.$$ = s => Array.from(document.querySelectorAll(s));
App.esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
App.shuffle = a => { for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a };

/* ---------- 本地存储 ---------- */
App.store = {
  get(key, fallback){ try{ const s=localStorage.getItem(key); return s?JSON.parse(s):fallback }catch(e){ return fallback } },
  set(key, value){ try{ localStorage.setItem(key, JSON.stringify(value)); return true }catch(e){ return false } }
};
App.KEYS = { vocab:"toefl.vocab.v1", speaking:"toefl.speaking.v1", reading:"toefl.reading.v1", listening:"toefl.listening.v1", ispeaking:"toefl.ispeaking.v1", ireading:"toefl.ireading.v1", ilistening:"toefl.ilistening.v1", iwriting:"toefl.iwriting.v1", writing:"toefl.writing.v1", settings:"toefl.settings.v1" };

const defaults = { voiceURI:"", rate:1, apiKey:"", apiBase:"" };
App.settings = Object.assign({}, defaults, App.store.get(App.KEYS.settings, {}));
App.saveSettings = () => App.store.set(App.KEYS.settings, App.settings);

/* ---------- 日期 ---------- */
App.DAY = 864e5;
App.today = () => { const d=new Date(); return Math.floor((d.getTime()-d.getTimezoneOffset()*6e4)/App.DAY) };
App.keyOf = n => new Date(n*App.DAY).toISOString().slice(0,10);

/* ---------- 朗读 ---------- */
App.canSpeak = "speechSynthesis" in window;
App.voices = () => App.canSpeak ? speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang)) : [];
function pickVoice(){
  const vs = App.voices();
  return vs.find(v => v.voiceURI === App.settings.voiceURI)
      || vs.find(v => /en[-_]US/i.test(v.lang) && /natural|online/i.test(v.name))
      || vs.find(v => /en[-_]US/i.test(v.lang))
      || vs[0] || null;
}
// 朗读一段英文，返回在读完时结束的 Promise（onend 不触发时按长度估算兜底）
App.speak = (text, opts={}) => new Promise(resolve => {
  if(!App.canSpeak){ resolve(false); return }
  let done = false, timer = null;
  const finish = ok => { if(!done){ done=true; clearTimeout(timer); resolve(ok) } };
  try{
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = opts.voice || pickVoice();
    if(v){ u.voice=v; u.lang=v.lang } else u.lang="en-US";
    u.rate = opts.rate || +App.settings.rate || 1;
    if(opts.pitch) u.pitch = opts.pitch;
    u.onend = () => finish(true);
    u.onerror = () => finish(false);
    speechSynthesis.speak(u);
  }catch(e){ finish(false); return }
  const words = text.split(/\s+/).length;
  timer = setTimeout(() => finish(true), 2500 + words*520/(+App.settings.rate||1));
});
if(App.canSpeak) speechSynthesis.onvoiceschanged = () => document.dispatchEvent(new Event("voices-ready"));

/* ---------- 提示音 ---------- */
let actx = null;
App.audioCtx = () => { if(!actx){ const C=window.AudioContext||window.webkitAudioContext; if(C) actx=new C() } if(actx&&actx.state==="suspended") actx.resume(); return actx };
App.beep = (freq=880, ms=260) => new Promise(resolve => {
  const ctx = App.audioCtx(); if(!ctx){ resolve(); return }
  const o=ctx.createOscillator(), g=ctx.createGain();
  o.frequency.value=freq; o.type="sine";
  g.gain.setValueAtTime(0.0001, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime+0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+ms/1000);
  o.connect(g).connect(ctx.destination); o.start(); o.stop(ctx.currentTime+ms/1000+0.02);
  setTimeout(resolve, ms+60);
});

/* ---------- Claude API（可选） ---------- */
App.hasAI = () => !!App.settings.apiKey;
App.askClaude = async (prompt, { maxTokens=8000, effort="low" } = {}) => {
  if(!App.settings.apiKey) throw { code:"no_key", message:"还没有在「设置」里填写 API Key。" };
  const base = (App.settings.apiBase || "https://api.anthropic.com").replace(/\/+$/,"");
  let res, data;
  try{
    res = await fetch(base + "/v1/messages", {
      method:"POST",
      headers:{
        "content-type":"application/json",
        "x-api-key":App.settings.apiKey,
        "anthropic-version":"2023-06-01",
        "anthropic-beta":"server-side-fallback-2026-07-01",
        "anthropic-dangerous-direct-browser-access":"true"
      },
      body: JSON.stringify({
        model:"claude-opus-5-5",
        max_tokens:maxTokens,
        output_config:{ effort },
        fallbacks:"default",
        messages:[{ role:"user", content:prompt }]
      })
    });
    data = await res.json();
  }catch(e){
    throw { code:"network", message:"连不上 API 地址。检查网络，或在「设置」里确认 API 地址是否正确。" };
  }
  if(!res.ok){
    const msg = (data && data.error && data.error.message) || ("HTTP " + res.status);
    const hint = res.status===401 ? "API Key 无效。" : res.status===429 ? "请求太频繁或额度不足，稍后再试。" : res.status===403 ? "当前地区或账号无权访问。" : "";
    throw { code:"http", status:res.status, message:(hint?hint+" ":"") + msg };
  }
  if(data.stop_reason === "refusal") throw { code:"refusal", message:"这次请求没有得到回答，换个说法再试。" };
  const text = (data.content||[]).filter(b => b.type==="text").map(b => b.text).join("").trim();
  if(!text) throw { code:"empty", message:"没有收到回答内容，请再试一次。" };
  return text + (data.stop_reason==="max_tokens" ? "\n\n（回答过长，已截断）" : "");
};

/* ---------- 考试 ---------- */
// 页面级切换：网址形如 #toefl/reading、#ielts/vocab；导航只显示当前考试已有的部分
App.EXAMS = { toefl:{ name:"托福", sub:"TOEFL iBT 2026 · prep desk" }, ielts:{ name:"雅思", sub:"IELTS Academic · prep desk" } };
// 老用户（本机已有学习记录）默认托福，或沿用之前在词汇页选的考试；新用户先看选择页
if(!App.EXAMS[App.settings.exam]){
  const had = Object.entries(App.KEYS).some(([k,key]) => k!=="settings" && localStorage.getItem(key));
  const v = App.store.get(App.KEYS.vocab, null);
  App.settings.exam = had ? (v && v.settings && v.settings.exam==="ielts" ? "ielts" : "toefl") : "";
  if(had) App.saveSettings();
}
App.exam = App.settings.exam;
App.href = name => `#${App.exam || "toefl"}/${name}`;

/* ---------- 路由 ---------- */
// 每个页面用 exams 声明属于哪些考试，不写表示两门都有
App.routes = {};
App.route = "";
const examsOf = name => App.routes[name].exams || Object.keys(App.EXAMS);
const available = (name, exam) => !!App.routes[name] && examsOf(name).includes(exam);
function parseHash(){
  const h = (location.hash || "").replace(/^#\/?/, "");
  const m = h.match(/^(toefl|ielts)(?:\/(.*))?$/);
  return m ? { exam:m[1], name:m[2] || "" } : { exam:"", name:h };
}
function setExam(exam){
  if(exam===App.exam) return;
  App.exam = exam; App.settings.exam = exam; App.saveSettings();
  document.dispatchEvent(new Event("exam-change"));
}
function renderNav(){
  const e = App.exam;
  document.documentElement.dataset.exam = e || "";
  App.$$(".mod[data-route]").forEach(a => {
    const r = a.dataset.route;
    a.hidden = !e || !available(r, e);
    a.href = `#${e}/${r}`;
    if(r===App.route) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
  });
  App.$$(".exam-switch [data-exam]").forEach(a => {
    const x = a.dataset.exam;
    a.href = `#${x}/${App.route && available(App.route, x) ? App.route : "vocab"}`;
    if(x===e) a.setAttribute("aria-current","true"); else a.removeAttribute("aria-current");
  });
  const brand = App.$(".brand"); if(brand) brand.href = App.href("vocab");
  const sub = App.$("#brandSub"); if(sub) sub.textContent = e ? App.EXAMS[e].sub : "TOEFL · IELTS · prep desk";
}
function show(route){
  if(App.route && App.route!==route && App.routes[App.route] && App.routes[App.route].leave) App.routes[App.route].leave();
  App.route = route;
  Object.keys(App.routes).forEach(k => App.$("#view-"+k).hidden = k!==route);
  App.$("#view-welcome").hidden = route!=="";
  renderNav();
  if(route) App.routes[route].enter();
}
function go(){
  let { exam, name } = parseHash();
  if(!exam){
    // 旧网址和站内链接（#reading、#settings）：沿用当前考试；当前考试没有这个页面时换到有它的考试
    exam = name && App.routes[name] && App.exam && !available(name, App.exam) ? examsOf(name)[0]
         : App.exam || (name && App.routes[name] && examsOf(name).length===1 ? examsOf(name)[0] : "");
  }
  if(!exam){ show(""); return }
  if(!available(name, exam)) name = "vocab";
  const canon = `#${exam}/${name}`;
  if(location.hash!==canon) history.replaceState(null, "", location.pathname + location.search + canon);
  setExam(exam);
  show(name);
}
App.onStart = App.onStart || [];
App.start = () => {
  Object.values(App.routes).forEach(r => r.init && r.init());
  window.addEventListener("hashchange", go);
  go();
  App.started = true;
  const boot = document.getElementById("boot"); if(boot) boot.remove();
  App.onStart.forEach(f => { try{ f() }catch(e){ console.error(e) } });
};
})();
