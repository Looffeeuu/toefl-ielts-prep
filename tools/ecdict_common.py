"""ECDICT 整理的公共函数：精简中文释义、取词频排名、频率分层。build_ext.py 和 build_ielts.py 共用。"""
import re

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

def tier(rk, prefix="f"):
    return prefix + ("1" if rk <= 5000 else "2" if rk <= 10000 else "3" if rk <= 20000 else "4")

WORD_RE = re.compile(r"[A-Za-z][A-Za-z' -]*")
