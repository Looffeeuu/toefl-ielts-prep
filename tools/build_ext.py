"""Build js/words-ext.js from ECDICT (MIT) TOEFL-tagged entries.
用法：从 https://github.com/skywind3000/ECDICT 下载 ecdict.csv，然后运行
   python tools/build_ext.py <ecdict.csv 路径> . <候选词输出文件>
"""
import csv, json, re, sys

src, proj, cand_out = sys.argv[1], sys.argv[2], sys.argv[3]

# core words already hand-written in js/words.js
core = []
with open(proj + "/js/words.js", encoding="utf-8") as f:
    for line in f:
        if "|" in line and not line.lstrip().startswith(("/*", "{")):
            core.append(line.split("|")[0].strip())
core_set = set(core)

POS_RE = re.compile(r"^(n|v|vt|vi|adj|a|adv|ad|prep|conj|pron|num|art|int|interj|abbr|aux|pl|suf|pref)\.\s*", re.I)
POS_MAP = {"a": "adj", "ad": "adv", "interj": "int"}

def clean_cn(tr):
    lines = [l.strip() for l in tr.replace("\\n", "\n").split("\n") if l.strip()]
    poss, parts = [], []
    for l in lines:
        if l.startswith("["):  # [网络] [计] [医] 等释义跳过
            continue
        m = POS_RE.match(l)
        pos = ""
        if m:
            pos = POS_MAP.get(m.group(1).lower(), m.group(1).lower())
            l = l[m.end():]
        senses = [re.sub(r"\s+", " ", s.strip()) for s in re.split(r"[；;,，]", l) if s.strip()]
        senses = [s for s in senses if len(s) <= 12][:4] or senses[:1]
        if not senses:
            continue
        if pos and pos not in poss:
            poss.append(pos)
        parts.append((pos, "，".join(senses)))
        if len(parts) >= 2:
            break
    if not parts:
        return "", ""
    if len(parts) == 1 or len({p for p, _ in parts}) == 1:
        cn = "；".join(s for _, s in parts)
    else:
        cn = "　".join((p + ". " if p else "") + s for p, s in parts)
    pos = "/".join(p + "." for p in poss[:2])
    return pos, cn[:40]

def rank(r):
    for k in ("frq", "bnc"):
        try:
            v = int(r[k] or 0)
            if v > 0:
                return v
        except ValueError:
            pass
    return 999999

ext, core_phon = [], {}
with open(src, encoding="utf-8", newline="") as f:
    for r in csv.DictReader(f):
        w = r["word"].strip()
        if w in core_set and r["phonetic"].strip():
            core_phon.setdefault(w, r["phonetic"].strip())
        tags = (r["tag"] or "").split()
        if "toefl" not in tags or w in core_set:
            continue
        if not re.fullmatch(r"[A-Za-z][A-Za-z' -]*", w):
            continue
        pos, cn = clean_cn(r["translation"])
        if not cn:
            continue
        flag = "z" if "zk" in tags else "g" if "gk" in tags else ""
        try:
            collins = int(r["collins"] or 0)
        except ValueError:
            collins = 0
        ext.append({"w": w, "ph": r["phonetic"].strip(), "pos": pos, "cn": cn, "rank": rank(r), "flag": flag, "collins": collins})

ext.sort(key=lambda e: (e["rank"], e["w"].lower()))
def tier(rk):
    return "f1" if rk <= 5000 else "f2" if rk <= 10000 else "f3" if rk <= 20000 else "f4"

lines = []
for e in ext:
    for k in ("ph", "pos", "cn"):
        e[k] = e[k].replace("\t", " ").replace("\n", " ")
    lines.append("\t".join([e["w"], e["ph"], e["pos"], e["cn"], tier(e["rank"]), e["flag"]]))

with open(proj + "/js/words-ext.js", "w", encoding="utf-8", newline="\n") as f:
    f.write("/* 扩展词库：来自开源英汉词典 ECDICT（MIT 许可，https://github.com/skywind3000/ECDICT）中标注为托福的词条，\n")
    f.write("   按词频排序。每行：单词 \\t 音标 \\t 词性 \\t 中文 \\t 频率分层(f1 最高频…f4 低频) \\t 基础词标记(z 中考 / g 高考) */\n")
    f.write("window.CORE_PHON = " + json.dumps(core_phon, ensure_ascii=False, separators=(",", ":")) + ";\n")
    f.write("window.EXT_WORDS = " + json.dumps("\n".join(lines), ensure_ascii=False) + ";\n")

# candidates for hand-written enrichment: not basic, higher frequency, Collins >= 1
cands = [e for e in ext if not e["flag"] and e["collins"] >= 1][:900]
with open(cand_out, "w", encoding="utf-8") as f:
    f.write(" ".join(e["w"] for e in cands))

from collections import Counter
print("core:", len(core), "core phon:", len(core_phon))
print("ext:", len(ext), Counter(tier(e["rank"]) for e in ext), Counter(e["flag"] for e in ext))
print("candidates:", len(cands))
