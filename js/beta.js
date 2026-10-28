/* 内测相关：版本号、页面顶部提醒（在微信等应用内打开、备份提醒）、「这题有问题」反馈、复制环境信息 */
(function(){
const { $, esc } = App;

// 发布新版本时改这里；反馈时会附上版本号，方便对照是哪一版的问题
App.VERSION = "2026.10.30";
// 内测反馈链接（问卷、邮箱 mailto: 等）。留空时只提供「复制问题信息」，由测试者粘贴到微信发给邀请人
App.FEEDBACK_URL = "";

/* ---------- 浏览器与环境 ---------- */
const UA = navigator.userAgent;
const INAPP = [[/MicroMessenger/i,"微信"],[/\bQQ\//i,"QQ"],[/Weibo/i,"微博"],[/AlipayClient/i,"支付宝"],[/DingTalk/i,"钉钉"],[/Lark|Feishu/i,"飞书"]];
App.inApp = (INAPP.find(([re]) => re.test(UA)) || [])[1] || "";
App.isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(UA);
function browserName(){
  const m = UA.match(/Edg\/(\d+)/) ? ["Edge", UA.match(/Edg\/(\d+)/)[1]] : UA.match(/Firefox\/(\d+)/) ? ["Firefox", UA.match(/Firefox\/(\d+)/)[1]]
    : UA.match(/Chrome\/(\d+)/) ? ["Chrome", UA.match(/Chrome\/(\d+)/)[1]] : UA.match(/Version\/(\d+).*Safari/) ? ["Safari", UA.match(/Version\/(\d+)/)[1]] : ["其他浏览器", ""];
  const os = /Windows/.test(UA) ? "Windows" : /iPhone|iPad|iPod/.test(UA) ? "iOS" : /Android/.test(UA) ? "Android" : /Mac OS X/.test(UA) ? "macOS" : /Linux/.test(UA) ? "Linux" : "未知系统";
  return `${App.inApp ? App.inApp + "内置浏览器" : m[0] + (m[1] ? " " + m[1] : "")} · ${os}`;
}
App.envInfo = () => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  return [
    `版本 ${App.VERSION}`,
    `页面 ${App.exam || "未选考试"}/${App.route || "首页"}`,
    `浏览器 ${browserName()}`,
    `屏幕 ${window.innerWidth}×${window.innerHeight}`,
    `朗读声音 ${App.canSpeak ? App.voices().length + " 个" : "不支持"} · 语音识别 ${SR ? "支持" : "不支持"} · 录音 ${navigator.mediaDevices && window.MediaRecorder ? "支持" : "不支持"}`
  ].join("\n");
};

/* ---------- 复制与提示 ---------- */
App.copy = text => {
  const fallback = () => {
    const ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select(); let ok = false; try{ ok = document.execCommand("copy") }catch(e){} ta.remove(); return ok;
  };
  if(navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(() => true, () => fallback());
  return Promise.resolve(fallback());
};
let toastTimer = 0;
App.toast = (html, ms=5000) => {
  let el = $("#toast");
  if(!el){ el = document.createElement("div"); el.id = "toast"; el.className = "toast"; el.setAttribute("role","status"); document.body.appendChild(el) }
  el.innerHTML = html; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true }, ms);
};
const feedbackLink = () => App.FEEDBACK_URL ? ` <a href="${esc(App.FEEDBACK_URL)}" target="_blank" rel="noopener">打开反馈页</a>` : "";

// 「这题有问题」：按钮上带 data-report="题目信息"，点击后把题目信息和环境信息一起复制
App.reportBtn = (info, label="这题有问题") => `<button type="button" class="rep" data-report="${esc(info)}" title="复制这道题的信息，发给邀请你内测的人">${label}</button>`;
function report(info){
  const text = `【内测反馈】\n${info}\n问题描述：（请写哪里不对，比如答案错了、解析看不懂、页面显示异常）\n——\n${App.envInfo()}`;
  App.copy(text).then(ok => App.toast(ok
    ? `已复制题目信息。粘贴到微信发给邀请你内测的人，并写上哪里不对。${feedbackLink()}`
    : `复制失败，请截图这道题发给邀请你内测的人。${feedbackLink()}`));
}
document.addEventListener("click", e => { const b = e.target.closest("[data-report]"); if(b){ e.preventDefault(); e.stopPropagation(); report(b.dataset.report) } }, true);

/* ---------- 页面顶部提醒 ---------- */
const DAY = 864e5, BACKUP_DAYS = 7;
const sessionClosed = new Set();
function hasData(){ return Object.entries(App.KEYS).some(([k,key]) => k!=="settings" && (localStorage.getItem(key) || "").length > 300) }
function notices(){
  const out = [];
  if(App.inApp && !sessionClosed.has("inapp")) out.push({ id:"inapp", tone:"warn",
    html:`你正在<b>${App.inApp}</b>里打开本站。应用内置的浏览器不支持朗读和录音，听力、口语练习用不了，清理缓存时学习记录也可能丢失。请点右上角的「…」，选择<b>在浏览器中打开</b>；推荐用电脑上的 Edge 浏览器。` });
  const now = Date.now(), last = App.settings.lastBackup || App.settings.firstSeen || now;
  if(hasData() && now - last > BACKUP_DAYS*DAY && now > (App.settings.backupSnooze || 0) && !sessionClosed.has("backup")){
    const days = Math.floor((now - last)/DAY);
    out.push({ id:"backup", tone:"info",
      html:`${App.settings.lastBackup ? `已经 ${days} 天没有备份学习记录了。` : "还没有备份过学习记录。"}记录只存在这个浏览器里，清理浏览器数据、换设备都会丢失。`,
      actions:`<button class="btn" data-nexport>立即导出备份</button><button class="btn-ghost" data-nsnooze>7 天后再提醒</button>` });
  }
  return out;
}
function renderNotices(){
  const box = $("#notices"); if(!box) return;
  const list = notices();
  box.innerHTML = list.map(n => `<div class="notice ${n.tone}" data-nid="${n.id}"><div class="notice-text">${n.html}</div><div class="notice-acts">${n.actions || ""}<button class="notice-x" data-nclose="${n.id}" aria-label="关闭提醒">×</button></div></div>`).join("");
  box.hidden = !list.length;
}
document.addEventListener("click", e => {
  const t = e.target.closest("[data-nclose],[data-nexport],[data-nsnooze],[data-copyenv]"); if(!t) return;
  if(t.dataset.nclose){ sessionClosed.add(t.dataset.nclose); renderNotices() }
  else if(t.dataset.nexport!==undefined){ App.exportData(); renderNotices() }
  else if(t.dataset.nsnooze!==undefined){ App.settings.backupSnooze = Date.now() + BACKUP_DAYS*DAY; App.saveSettings(); renderNotices() }
  else if(t.dataset.copyenv!==undefined){ App.copy(App.envInfo()).then(ok => App.toast(ok ? "已复制环境信息。" : "复制失败，请截图设置页。")) }
});
App.renderNotices = renderNotices;

/* ---------- 设置页：使用说明与反馈 ---------- */
function renderBetaPanel(){
  const el = $("#betaPanel"); if(!el) return;
  el.innerHTML = `<h3>使用说明与反馈</h3>
    <ul class="wbul guide-list">${$("#welcomeTips") ? $("#welcomeTips").innerHTML : ""}</ul>
    <p class="note" style="margin:0">遇到题目或解析有错：在解析页点「这题有问题」，会自动复制题目信息，粘贴到微信发给邀请你内测的人即可。其他问题可以点下面的按钮复制环境信息，一起发过去。${App.FEEDBACK_URL ? `也可以直接<a href="${esc(App.FEEDBACK_URL)}" target="_blank" rel="noopener">打开反馈页</a>。` : ""}</p>
    <div class="row"><button class="btn alt" data-copyenv>复制环境信息</button><span class="note">当前版本 ${App.VERSION} · ${esc(browserName())}</span></div>`;
}

App.onStart = App.onStart || [];
App.onStart.push(() => {
  if(!App.settings.firstSeen){ App.settings.firstSeen = Date.now(); App.saveSettings() }
  renderNotices(); renderBetaPanel();
  if(App.isMobile){ const m = $("#welcomeMobile"); if(m) m.hidden = false }
});
})();
