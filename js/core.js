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
App.KEYS = { vocab:"toefl.vocab.v1", speaking:"toefl.speaking.v1", reading:"toefl.reading.v1", writing:"toefl.writing.v1", settings:"toefl.settings.v1" };

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
    const v = pickVoice();
    if(v){ u.voice=v; u.lang=v.lang } else u.lang="en-US";
    u.rate = opts.rate || +App.settings.rate || 1;
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

/* ---------- 路由 ---------- */
App.routes = {};
App.route = "";
function go(){
  const name = (location.hash||"").replace("#","") || "vocab";
  const route = App.routes[name] ? name : "vocab";
  if(App.route && App.route!==route && App.routes[App.route].leave) App.routes[App.route].leave();
  App.route = route;
  Object.keys(App.routes).forEach(k => App.$("#view-"+k).hidden = k!==route);
  App.$$(".mod[data-route]").forEach(a => { if(a.dataset.route===route) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current") });
  App.routes[route].enter();
}
App.start = () => {
  Object.values(App.routes).forEach(r => r.init && r.init());
  window.addEventListener("hashchange", go);
  go();
};
})();
