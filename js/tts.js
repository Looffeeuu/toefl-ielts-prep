/* 多人朗读：按句播放，男女说话人用不同的声音。托福听力和雅思听力共用 */
(function(){
const T = App.tts = {};
// 浏览器不提供声音的性别，只能按常见声音名判断（Edge、Windows、Chrome、macOS）
const FEMALE = /\b(aria|jenny|michelle|ana|emma|ava|sonia|libby|maisie|natasha|clara|zira|hazel|susan|samantha|karen|moira|tessa|victoria|allison|fiona|serena|joanna|salli|kimberly|ivy|kendra|female|woman)\b/i;
const MALE = /\b(guy|christopher|eric|roger|steffan|andrew|brian|davis|tony|jason|ryan|thomas|william|liam|david|mark|george|james|alex|daniel|fred|oliver|male|man)\b/i;
const genderOf = v => FEMALE.test(v.name) ? "W" : MALE.test(v.name) ? "M" : "";
// who："W" / "M" 为女声 / 男声；"W2" / "M2" 为同性别的第二个人，尽量换一个声音，没有的话改变音高
T.voiceFor = who => {
  const vs = App.voices(); if(!vs.length) return {};
  const g = (who || "W")[0], second = /2$/.test(who || "");
  const score = v => (genderOf(v)===g ? 100 : 0) + (v.voiceURI===App.settings.voiceURI ? 20 : 0) + (/natural|online/i.test(v.name) ? 10 : 0) + (/en[-_]US/i.test(v.lang) ? 5 : 0);
  const ranked = vs.slice().sort((a,b) => score(b)-score(a));
  const same = ranked.filter(v => genderOf(v)===g);
  if(second && same.length>1) return { voice:same[1] };
  if(same.length) return second ? { voice:same[0], pitch: g==="W" ? 1.15 : 0.88 } : { voice:same[0] };
  // 找不到对应性别的声音时，用音高区分说话人
  return { voice:ranked[0], pitch: g==="W" ? (second ? 1.4 : 1.25) : (second ? 0.7 : 0.8) };
};
T.sentences = t => t.trim().split(/(?<=[.!?])\s+(?=[A-Z"])/);
let token = 0;
const wait = ms => new Promise(r => setTimeout(r, ms));
T.stop = () => { token++; if(App.canSpeak) speechSynthesis.cancel() };
// segs：[{ who, text, gap }]；onStep(i, n) 每句开始时调用；播完返回 true，被打断返回 false
T.play = async (segs, onStep) => {
  const tok = ++token;
  for(let i=0;i<segs.length;i++){
    if(tok!==token) return false;
    if(onStep) onStep(i, segs.length);
    await App.speak(segs[i].text, T.voiceFor(segs[i].who));
    if(tok!==token) return false;
    if(segs[i].gap) await wait(segs[i].gap);
  }
  return tok===token;
};
T.canPlay = () => App.canSpeak && App.voices().length>0;
})();
