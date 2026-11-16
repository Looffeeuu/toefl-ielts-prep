# 全库音标与释义核对进度

更新：2026-11-16。总计 9075 词。

| 项目 | 已核对 | 尚待核对 |
| --- | ---: | ---: |
| 释义与词性 | 35 | 9040 |
| 英美音与主要分读 | 52 | 9023 |
| 两项均完成 | 26 | 9049 |

每词分别保存来源和日期，不能用核对音标代替核对释义。完整状态和接续队列见 [lexicon-progress.json](lexicon-progress.json)。优先处理缺失、截断、词性矛盾和用法标记，再按字母顺序推进。未找到可靠来源的条目保持待核对，不推测填充。

## 批次 001

24 词：abnormal、AIDS、bend、blonde、blur、bound、brief、clear、close、counter、cross、cut、cutting、desert、double、draw、equal、even、executive、fair、fancy、fit、flat、frequent。逐词依据、修订原因和音标在 js/lexicon-review-001.js。英文例句为原创，不是词典引文。

本轮核对常用现代学习义，不是专业义项的穷尽收录。现有搭配、同义替换和记忆线索不因本轮核对自动获得词典背书。

复查命令：

```text
node tools/audit_definitions.js --write
node tools/check_pronunciations.js --write
node tools/lexicon_progress.js
```

下一批队列前 30 词：accidents、accommodations、accompanying、account for、accountants、actions、activities、adults、advantages、adversely、advertisements、affairs、agencies、aggressiveness、animals、antibiotics、approaches、approaching、areas、articles、assignments、astonished、asymmetrical、attacks、attempts、automated、avocational、awkwardly、axe、baby-sitter。
