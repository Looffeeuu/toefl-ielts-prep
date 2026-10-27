"""从 ECDICT（MIT）生成雅思词库和导入词表用的离线查词表。
用法：从 https://github.com/skywind3000/ECDICT 下载 ecdict.csv，然后运行
   python tools/build_ielts.py <ecdict.csv 路径> .
输出：
   js/words-ielts.js   标注为 ielts 的词条，按词频排序（和托福词库重复的词在页面里共用同一张卡片）
   js/dict-lookup.js   导入自定义词表时自动补全释义用的查词表（有考试标签、牛津 3000 或柯林斯星级的词），打开导入窗口时才加载
"""
import csv, json, sys
from collections import Counter
from ecdict_common import clean_cn, rank, tier, WORD_RE

src, proj = sys.argv[1], sys.argv[2]

ielts, lookup = [], []
with open(src, encoding="utf-8", newline="") as f:
    for r in csv.DictReader(f):
        w = r["word"].strip()
        if not WORD_RE.fullmatch(w):
            continue
        tags = (r["tag"] or "").split()
        try:
            collins = int(r["collins"] or 0)
        except ValueError:
            collins = 0
        if not (tags or r["oxford"] == "1" or collins >= 1):
            continue
        pos, cn = clean_cn(r["translation"])
        if not cn:
            continue
        ph = r["phonetic"].strip()
        row = [w, ph, pos, cn]
        lookup.append(row)
        if "ielts" in tags:
            flag = "z" if "zk" in tags else "g" if "gk" in tags else ""
            ielts.append((rank(r), w, row, flag))

clean = lambda s: s.replace("\t", " ").replace("\n", " ")
ielts.sort(key=lambda e: (e[0], e[1].lower()))
lines = ["\t".join([clean(x) for x in row] + [tier(rk, "i"), flag]) for rk, w, row, flag in ielts]
with open(proj + "/js/words-ielts.js", "w", encoding="utf-8", newline="\n") as f:
    f.write("/* 雅思词库：来自开源英汉词典 ECDICT（MIT 许可，https://github.com/skywind3000/ECDICT）中标注为雅思的词条，\n")
    f.write("   按词频排序。每行：单词 \\t 音标 \\t 词性 \\t 中文 \\t 频率分层(i1 最高频…i4 低频) \\t 基础词标记(z 中考 / g 高考) */\n")
    f.write("window.IELTS_WORDS = " + json.dumps("\n".join(lines), ensure_ascii=False) + ";\n")

lookup.sort(key=lambda r: r[0].lower())
with open(proj + "/js/dict-lookup.js", "w", encoding="utf-8", newline="\n") as f:
    f.write("/* 导入词表时的离线查词表：来自 ECDICT（MIT 许可）。每行：单词 \\t 音标 \\t 词性 \\t 中文 */\n")
    f.write("window.DICT_LOOKUP = " + json.dumps("\n".join("\t".join(clean(x) for x in r) for r in lookup), ensure_ascii=False) + ";\n")

print("ielts:", len(ielts), Counter(tier(rk, "i") for rk, *_ in ielts), Counter(fl for *_, fl in ielts))
print("lookup:", len(lookup))
