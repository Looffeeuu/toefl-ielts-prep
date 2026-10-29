/* 设置页：朗读声音、Claude API、数据备份 */
(function(){
const { $, esc } = App;

function renderVoices(){
  const sel = $("#voiceSel"), vs = App.voices();
  if(!vs.length){ sel.innerHTML = `<option value="">${App.canSpeak ? "没有找到英文声音" : "这个浏览器不支持朗读"}</option>`; return }
  sel.innerHTML = `<option value="">自动选择（优先美式）</option>` + vs.map(v => `<option value="${esc(v.voiceURI)}">${esc(v.name)} · ${esc(v.lang)}</option>`).join("");
  sel.value = vs.some(v => v.voiceURI===App.settings.voiceURI) ? App.settings.voiceURI : "";
}
function renderEnv(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const items = [
    [App.canSpeak && App.voices().length, "朗读", App.canSpeak ? `${App.voices().length} 个英文声音。Edge 浏览器自带的 “Online (Natural)” 声音最接近真人。` : "不支持"],
    [!!(navigator.mediaDevices && window.MediaRecorder), "录音", navigator.mediaDevices ? "支持" : "需要通过 https 或 localhost 打开页面"],
    [!!SR, "语音识别", SR ? "浏览器支持。Chrome 的识别需要访问 Google；在国内建议用 Edge。" : "不支持，建议用 Edge 或 Chrome"]
  ];
  $("#envStatus").innerHTML = items.map(([ok,k,v]) => `<div><span class="dot ${ok ? "ok" : "no"}"></span><span><b>${k}</b>：${v}</span></div>`).join("");
}

function exportData(){
  const settings = Object.assign({}, App.settings); delete settings.apiKey;
  const payload = { app:"toefl-prep", version:1, exportedAt:new Date().toISOString(), vocab:App.vocabData(), speaking:App.speakingData(), reading:App.readingData(), listening:App.listeningData(), ieltsSpeaking:App.ieltsSpeakingData(), ieltsReading:App.ieltsReadingData(), ieltsListening:App.ieltsListeningData(), ieltsWriting:App.ieltsWritingData(), exam:App.examData(), ieltsExam:App.ieltsExamData(), cambridge:App.cambridgeData(), writing:App.writingData(), settings };
  const blob = new Blob([JSON.stringify(payload, null, 1)], { type:"application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `toefl-ielts-prep-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  $("#dataMsg").textContent = "已导出。";
  App.settings.lastBackup = Date.now(); App.saveSettings();
  if(App.renderNotices) App.renderNotices();
}
App.exportData = exportData;
function importData(file){
  const fr = new FileReader();
  fr.onload = () => {
    try{
      const d = JSON.parse(fr.result);
      if(d.app!=="toefl-prep") throw new Error("不是本网站导出的备份文件");
      if(d.vocab) App.loadVocabData(d.vocab);
      if(d.speaking) App.loadSpeakingData(d.speaking);
      if(d.reading) App.loadReadingData(d.reading);
      if(d.listening) App.loadListeningData(d.listening);
      if(d.ieltsSpeaking) App.loadIeltsSpeakingData(d.ieltsSpeaking);
      if(d.ieltsReading) App.loadIeltsReadingData(d.ieltsReading);
      if(d.ieltsListening) App.loadIeltsListeningData(d.ieltsListening);
      if(d.ieltsWriting) App.loadIeltsWritingData(d.ieltsWriting);
      if(d.exam) App.loadExamData(d.exam);
      if(d.ieltsExam) App.loadIeltsExamData(d.ieltsExam);
      if(d.cambridge) App.loadCambridgeData(d.cambridge);
      if(d.writing) App.loadWritingData(d.writing);
      if(d.settings){ Object.assign(App.settings, d.settings, { apiKey:App.settings.apiKey }); App.saveSettings(); renderVoices(); App.setTheme(App.settings.theme) }
      $("#dataMsg").textContent = "导入完成，进度已恢复。";
    }catch(e){ $("#dataMsg").textContent = "导入失败：" + (e.message || "文件格式不对"); }
  };
  fr.readAsText(file);
}

App.routes.settings = {
  init(){
    $("#voiceSel").addEventListener("change", e => { App.settings.voiceURI = e.target.value; App.saveSettings() });
    $("#rateSel").addEventListener("change", e => { App.settings.rate = +e.target.value; App.saveSettings() });
    $("#voiceTest").addEventListener("click", () => App.speak("Welcome to the main library. The front desk is open until midnight."));
    $("#apiSave").addEventListener("click", () => {
      App.settings.apiKey = $("#apiKey").value.trim();
      App.settings.apiBase = $("#apiBase").value.trim();
      App.saveSettings();
      $("#apiMsg").textContent = App.settings.apiKey ? "已保存。" : "已清除 API Key。";
    });
    $("#apiTest").addEventListener("click", async e => {
      App.settings.apiKey = $("#apiKey").value.trim(); App.settings.apiBase = $("#apiBase").value.trim(); App.saveSettings();
      e.target.disabled = true; $("#apiMsg").textContent = "正在测试…";
      try{ await App.askClaude("Reply with the single word: OK", { maxTokens:1000, effort:"low" }); $("#apiMsg").textContent = "连接成功，AI 功能可以用了。" }
      catch(err){ $("#apiMsg").textContent = err.message }
      e.target.disabled = false;
    });
    $("#exportBtn").addEventListener("click", exportData);
    $("#importIn").addEventListener("change", e => { if(e.target.files[0]) importData(e.target.files[0]); e.target.value = "" });
    document.addEventListener("voices-ready", () => { renderVoices(); renderEnv() });
  },
  enter(){
    renderVoices(); renderEnv();
    $("#rateSel").value = String(App.settings.rate || 1);
    $("#apiKey").value = App.settings.apiKey || "";
    $("#apiBase").value = App.settings.apiBase || "";
    $("#apiMsg").textContent = ""; $("#dataMsg").textContent = "";
  }
};
})();
