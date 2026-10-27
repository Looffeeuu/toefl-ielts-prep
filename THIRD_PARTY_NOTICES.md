# 第三方数据声明

`js/words-ext.js` 中的扩展词库（单词、音标、中文释义、词频分层、中考/高考标记）整理自开源英汉词典 **ECDICT**：
https://github.com/skywind3000/ECDICT

整理方式：筛选标注为 `toefl` 的词条，精简中文释义，按词频排序分组。生成脚本见 `tools/build_ext.py`。

`js/words-ielts.js`（雅思词库，标注为 `ielts` 的词条）和 `js/dict-lookup.js`（导入自定义词表时补全释义用的查词表，收录带考试标签、牛津 3000 标记或柯林斯星级的词条）同样整理自 ECDICT，生成脚本见 `tools/build_ielts.py`。

ECDICT 的许可协议如下：

```
MIT License

Copyright (c) 2025 Linwei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
