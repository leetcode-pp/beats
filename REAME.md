# beats anybody

目前是随机击败 90% - 100%。

## 使用

- 下载仓库代码。可以选择 git clone 或者 下载压缩包
- 打开 chrome 扩展 chrome://extensions/。
- 加载未打包程序，并选择你刚刚下载的文件夹
- 打开力扣网站开始提交！

## 开发指南

本插件原理是：

- 使用 MutationOberserver 检测 DOM 变化
- 当出现 "提交中击败了" 字样的时候，我会提取里面的 % 前面的数字，并将其替换
- 第一个%是时间击败百分数，第二个是空间击败百分数。

## 问题点

- 只有第一次提交会有效果，后续提交会报错。目测是和 react 16 不兼容