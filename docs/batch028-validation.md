# Batch028 验证记录

日期：2026-11-17。核对基线：`764adb28bd43d199a26ba27e9e5833af8bd30d79`（batch027）。

本批严格采用基线队列前 100 个 TOEFL f1 词，从 realm 到 rid；未跳词、未重复计数。100 词均保存中文义项、词性、英美音、来源和日期，新增 330 条原创义项例句。研究记录包含 375 条来源记录，区分实际返回正文的索引检索与仅作稳定入口的规范链接。全部 100 词均有已检索词典来源，全部展示音标均已逐项匹配到检索返回的区域标音。

研究采用 Cambridge 索引定义和发音页，缺失内容补查地区页、主题义项页或 Collins。rebel、recommend、reduce、reduction、reflection、relief、relieve、remove、retail、retire、retrieve 补核 Collins。refer to、rely on/upon、resort to 的用法另查 Cambridge 短语词条。未把规范入口链接冒充成功抓取正文。

rebel、refuse、reject 按词性分读；resume 另列 résumé 名词读音，retail 区分零售与转述消息义。保留 rent 作为 rend 过去式和过去分词的用法、rid 的形容词与动词、regular 等词的名词义、register 的通风口义、relief 的地形与换班人员义。音标仅移除排版空白，不按拼写推导。中文释义为归纳，330 条英文义项例句均为原创；逐句对照本次检索文本，未发现完整例句相同的情况。

以下命令均已运行并通过：

```text
node tools/audit_definitions.js --write
node tools/check_pronunciations.js --write
node tools/lexicon_progress.js
node tools/check_batch028.js
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

batch028 回归按 index.html 的实际加载顺序构建词卡，检查全部义项、词性和发音记录的合并、来源记录与音标转录的对应、词性分读和发布计数。剩余队列必须恰好等于基线队列去掉本批 100 词。

| 项目 | 完成 | 剩余 |
| --- | ---: | ---: |
| 核心精编 | 350 | 0 |
| TOEFL f1 | 1505 | 441 |
| 全库释义与词性 | 2743 | 6332 |
| 全库发音 | 2743 | 6332 |
| 全库两项均完成 | 2735 | 6340 |

refuse 在基线中已核发音，所以本批发音完成数净增 99；释义完成数和两项均完成数各增加 100。

发布基线保持不变。本地累计待发布 700 词，距 1000 词发布门槛还差 300 词。本批仅本地提交，不推送、不部署。下一批从 ridge 开始。未创建研究草稿、Python 缓存或临时构建文件。
