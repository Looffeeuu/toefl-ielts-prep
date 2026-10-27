/* 录音公共部分：麦克风、音量条、录音、浏览器语音识别、英文分词。托福口语和雅思口语共用 */
(function(){
const R = App.rec = {};

/* ---------- 分词（数字转成英文单词，便于和识别结果比对、统计词数） ---------- */
const ONES = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const TENS = ",,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety".split(",");
function numWords(n){
  if(n<20) return ONES[n];
  if(n<100) return TENS[Math.floor(n/10)] + (n%10 ? " "+ONES[n%10] : "");
  if(n<1000) return ONES[Math.floor(n/100)] + " hundred" + (n%100 ? " "+numWords(n%100) : "");
  if(n<1e6) return numWords(Math.floor(n/1000)) + " thousand" + (n%1000 ? " "+numWords(n%1000) : "");
  return String(n);
}
function tokens(s){
  return String(s||"").toLowerCase().replace(/[’‘]/g,"'")
    .replace(/(\d+):00/g, "$1 o'clock")
    .replace(/(\d[\d,]*)(st|nd|rd|th)?/g, (m,d) => " " + numWords(+d.replace(/,/g,"")) + " ")
    .replace(/-/g," ").replace(/[^a-z' ]+/g," ")
    .split(/\s+/).map(w => w.replace(/^'+|'+$/g,"")).filter(Boolean);
}
R.tokens = tokens;
R.FILLER = /\b(um+|uh+|erm*|ah+|hmm+)\b/gi;

/* ---------- 麦克风、录音、语音识别 ---------- */
let stream = null, meterRAF = 0;
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let recogBroken = "";
const MIC_ERR = {
  NotAllowedError:"麦克风权限被拒绝了。点地址栏左侧的锁形图标，把麦克风改成「允许」，然后刷新页面。",
  NotFoundError:"没有检测到麦克风。插上耳机麦克风或检查系统声音设置后再试。",
  NotReadableError:"麦克风正被其他程序占用（比如会议软件），关掉它再试。",
  insecure:"浏览器只允许在 https 网页里使用麦克风。请用 GitHub Pages 的网址打开，或用本地服务器打开（见 README）。"
};
const RECOG_ERR = {
  unsupported:"这个浏览器不支持语音识别，建议用 Edge 或 Chrome。录音和回放照常可用，复述题可以自己对照原句打分。",
  network:"语音识别服务连不上。Chrome 的识别服务要访问 Google，在国内通常用不了，可以换 Edge 浏览器试试。录音不受影响。",
  "not-allowed":"浏览器拒绝了语音识别。检查麦克风权限后刷新页面。",
  "service-not-allowed":"浏览器拒绝了语音识别服务。换 Edge 或 Chrome 试试。",
  "audio-capture":"语音识别拿不到麦克风声音。"
};
async function ensureMic(){
  if(stream && stream.active) return stream;
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw { name:"insecure" };
  stream = await navigator.mediaDevices.getUserMedia({ audio:{ echoCancellation:true, noiseSuppression:true } });
  startMeter();
  return stream;
}
function startMeter(){
  const ctx = App.audioCtx(); if(!ctx || !stream) return;
  const an = ctx.createAnalyser(); an.fftSize = 512;
  ctx.createMediaStreamSource(stream).connect(an);
  const buf = new Uint8Array(an.fftSize);
  cancelAnimationFrame(meterRAF);
  const loop = () => {
    an.getByteTimeDomainData(buf);
    let peak = 0; for(const v of buf) peak = Math.max(peak, Math.abs(v-128));
    const el = document.querySelector("main:not([hidden]) .level i"); if(el) el.style.width = Math.min(100, peak/64*100) + "%";
    meterRAF = requestAnimationFrame(loop);
  };
  loop();
}
function startRecognition(onText){
  if(!SR) return { finish:() => Promise.resolve({ text:"", error:"unsupported" }) };
  let finals = [], interim = "", error = null, active = true, rec = null, endWait = null;
  const make = () => {
    rec = new SR(); rec.lang = "en-US"; rec.continuous = true; rec.interimResults = true;
    rec.onresult = e => {
      interim = "";
      for(let i=e.resultIndex;i<e.results.length;i++){ const r = e.results[i]; if(r.isFinal) finals.push(r[0].transcript.trim()); else interim += r[0].transcript }
      onText && onText((finals.join(" ") + " " + interim).trim());
    };
    rec.onerror = e => { if(e.error!=="no-speech" && e.error!=="aborted") error = e.error };
    rec.onend = () => {
      if(active && !error){ try{ make(); rec.start() }catch(_){ } }
      else if(endWait) endWait();
    };
    try{ rec.start() }catch(_){ }
  };
  make();
  return {
    finish(){
      active = false;
      return new Promise(resolve => {
        const done = () => { resolve({ text:(finals.join(" ") + " " + interim).trim(), error }); if(error) recogBroken = error };
        endWait = done;
        try{ rec.stop() }catch(_){ done() }
        setTimeout(done, 1500);
      });
    }
  };
}
let current = null; // 正在进行的录音，可提前结束
function record(maxSec, ui){
  return new Promise(resolve => {
    const chunks = [];
    const types = ["audio/webm;codecs=opus","audio/webm","audio/mp4","audio/ogg"];
    const mime = window.MediaRecorder && MediaRecorder.isTypeSupported ? types.find(t => MediaRecorder.isTypeSupported(t)) : "";
    let mr = null;
    try{ mr = new MediaRecorder(stream, mime ? { mimeType:mime } : undefined) }catch(e){ try{ mr = new MediaRecorder(stream) }catch(_){ mr = null } }
    const recog = startRecognition(ui.onText);
    const t0 = performance.now(); let stopped = false;
    const tick = setInterval(() => { const el = (performance.now()-t0)/1000; ui.onTick(el); if(el>=maxSec) stop() }, 100);
    function stop(){
      if(stopped) return; stopped = true; clearInterval(tick); current = null;
      const duration = Math.min(maxSec, (performance.now()-t0)/1000);
      const finish = async () => {
        const tr = await recog.finish();
        const blob = chunks.length ? new Blob(chunks, { type:(mr && mr.mimeType) || "audio/webm" }) : null;
        resolve({ url: blob ? URL.createObjectURL(blob) : "", duration, transcript:tr.text, recogError:tr.error });
      };
      if(mr && mr.state!=="inactive"){ mr.onstop = finish; try{ mr.stop() }catch(_){ finish() } } else finish();
    }
    if(mr){ mr.ondataavailable = e => { if(e.data && e.data.size) chunks.push(e.data) }; try{ mr.start(250) }catch(_){ } }
    current = { stop };
  });
}

R.SR = SR; R.MIC_ERR = MIC_ERR; R.RECOG_ERR = RECOG_ERR;
R.ensureMic = ensureMic; R.record = record;
R.stop = () => { if(current) current.stop() };
R.busy = () => !!current;
R.hasStream = () => !!(stream && stream.active);
R.recogBroken = () => recogBroken;
})();
