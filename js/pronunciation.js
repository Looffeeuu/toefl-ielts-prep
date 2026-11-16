/* Shared by study cards, word details and the word bank. */
(function(){
  const esc = App.esc;
  App.pronunciationHTML = function(o, withMeaning = true){
    const r = o.pronunciationReview;
    if(r){
      const rows = r.readings.map(p => {
        const label = withMeaning ? p.label : p.label.replace(/[\u3400-\u9fff].*$/, "").trim();
        return `<span class="pron-row"><small class="pron-label">${esc(label)}</small><span>英 /${esc(p.uk)}/</span><span>美 /${esc(p.us)}/</span></span>`;
      }).join("");
      const sources=(r.sources||[r.source]).map(url=>{
        const name=url.includes('oxfordlearnersdictionaries.com')?'牛津词典':url.includes('collinsdictionary.com')?'柯林斯词典':'剑桥词典';
        return `<a class="pron-source" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${name} · 音标出处</a>`;
      }).join(' · ');
      return `<span class="pronunciations">${rows}<span>${sources}</span></span>`;
    }
    const link = `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(o.w)}`;
    return `<span class="pronunciations">${o.ph ? `<span class="ph">/${esc(o.ph)}/</span>` : ""}<small class="pron-source">${o.custom ? "自定义词表音标" : "原词库音标 · 尚未核对"} · <a href="${esc(link)}" target="_blank" rel="noopener noreferrer">查词典</a></small></span>`;
  };
})();
