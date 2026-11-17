# Batch026 验证记录

日期：2026-11-17。核对基线：`103ae8a7a603129e56e67843a758997e2311dfac`。

本批严格采用基线队列的前 100 个 TOEFL f1 词，从 opposite 到 practitioner；未跳词、未重复计数。新增 341 条原创义项例句，逐词保存中文义项、词性、英美音和词典来源。研究记录含 340 条来源记录，明确区分实际返回内容的索引检索与规范入口链接；全部 100 词均有已检索来源。未将规范入口链接冒充成功抓取。

逐词转录复核中，展示音标均能对应已检索页面中的标音；仅移除音标排版空白。perfect、permit、overlook、patent 和 overall 保留词性或义项分读；pillow 动词另用 Collins 英美标音。overall 名词美音 `/ˈoʊvərˌɒl/` 保留 Collins 词条的原始转录。passage 未误取 passageway 的音标，patience 未误取 patient 的音标，Pole 区分波兰人与小写 pole 的义项。逐句比较本批例句与本次检索返回文本，未发现完整例句相同的情况。

以下命令均已运行并通过：

```text
node tools/audit_definitions.js --write
node tools/check_pronunciations.js --write
node tools/lexicon_progress.js
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

batch026 回归按实际 index.html 加载顺序构建卡片，验证全部义项、词性和英美音证据的合并，并断言剩余队列恰好等于基线队列去掉前 100 词。全库既有未核查词仍保留其原状态。

| 项目 | 完成 | 剩余 |
| --- | ---: | ---: |
| 核心精编 | 350 | 0 |
| TOEFL f1 | 1305 | 641 |
| 全库释义与词性 | 2543 | 6532 |
| 全库发音 | 2548 | 6527 |
| 全库两项均完成 | 2535 | 6540 |

发布基线保持不变。本地累计待发布 500 词，距发布门槛还差 500 词，本批不推送、不部署。下一批从 praise 开始。
