# Batch027 验证记录

日期：2026-11-17。核对基线：`6248df7cbb6fd50de923a726cad49a0ce3affce5`（batch026）。

本批严格采用基线队列的前 100 个 TOEFL f1 词，从 praise 到 realize；未跳词、未重复计数。100 词均保存中文义项、词性、英美音、来源和核对日期，新增 348 条原创义项例句。研究记录保存 353 条来源记录，区分实际返回正文的索引检索与仅作稳定入口的规范链接。全部 100 词均有已检索词典来源，全部展示音标均已与检索返回的词典转录逐项匹配。

研究使用 Cambridge 定义及发音页的索引内容，缺项补查地区页、义项页或 Collins。premium、presence、principal、productive、proceeding、pump、ranch、raw、ready 补查 Collins。中文义项为归纳，英文例句均为原创；逐句对照本次检索返回文本，未发现完整例句相同的情况。

premise 保存名词与两种动词读音，premises 的场所义及复数读音另列。produce、progress、project、protest 按词性分读。proceeding 单数名词保存 Collins 的英美标音和美音变体，proceedings 的复数义及读音另查 Cambridge；未把 proceed 原形音标当作 proceeding 的发音。转录仅移除排版空白，未按拼写推导音标，也未转换 Collins 的元音长度标记。

以下命令均已运行并通过：

```text
node tools/audit_definitions.js --write
node tools/check_pronunciations.js --write
node tools/lexicon_progress.js
node tools/check_batch027.js
node tools/check_batch026.js
node tools/check_batch025.js
node tools/check_batch024.js
node tools/check_lexicon_reviews.js
node tools/check_examples.js
node tools/check_sentence_gen.js
node tools/check_memo.js
node tools/check_phrases.js
node tools/check_wordlist.js
git diff --check
```

batch027 回归按 index.html 的实际加载顺序构建词卡，检查 348 条义项例句、全部词性与发音记录的合并、词典来源、词性分读、复数专用义和发布计数。剩余队列必须恰好等于基线队列去掉本批 100 词。

| 项目 | 完成 | 剩余 |
| --- | ---: | ---: |
| 核心精编 | 350 | 0 |
| TOEFL f1 | 1405 | 541 |
| 全库释义与词性 | 2643 | 6432 |
| 全库发音 | 2644 | 6431 |
| 全库两项均完成 | 2635 | 6440 |

produce、progress、project、protest 在基线中已核发音，因此本批发音完成数净增 96；释义完成数和两项均完成数各增加 100。

发布基线保持不变。本地累计待发布 600 词，距 1000 词发布门槛还差 400 词。本批仅本地提交，不推送、不部署。下一批从 realm 开始。未创建研究草稿、Python 缓存或临时构建文件。
