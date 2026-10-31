# THE MADONNA ARCHIVE

一个基于 Joanne Garde-Hansen《Media and Memory》第七章 “The Madonna Archive: Celebrity, Ageing and Fan Nostalgia” 的交互式编辑档案网站。

## 技术栈

- Next.js + React + TypeScript
- Tailwind CSS（PostCSS）与自定义设计令牌
- Motion for React
- 数据驱动的内容与档案卡片

## 本地运行

```bash
npm install
npm run dev
```

然后在浏览器打开 [http://localhost:3000](http://localhost:3000)。

生产构建：

```bash
npm run build
npm start
```

## 项目结构

```text
src/
  app/                  Next.js 页面、元数据与全局样式
  components/
    common/             来源标记、章节标签
    layout/             导航、页脚
    sections/           各内容模块与互动模块
  content/              章节、时间轴、档案及来源数据
```

## 内容维护

学术内容集中在 `src/content/archive.ts`。每条档案记录包含 `sourceId` 与 `page`，方便核对原文。当前正文只使用原对话中已根据上传章节核对过的概述；未加入无法验证的直接引语。

## 视觉规范

- Retro Editorial × Digital Archive
- 最大内容宽度 1360px，桌面 12 栏语义网格
- 米白纸张背景、深墨色正文、酒红强调色
- 正文保持高可读性，复古感由标题、档案编号、规则线与模拟媒介图形表达
- 所有互动均支持键盘焦点，并尊重 `prefers-reduced-motion`

## GitHub 同步

项目已经初始化 Git。连接你自己的 GitHub 仓库后运行：

```bash
git remote add origin https://github.com/<YOUR-NAME>/<YOUR-REPO>.git
git branch -M main
git push -u origin main
```

如果使用 GitHub CLI，也可以在登录后运行：

```bash
gh repo create the-madonna-archive --source=. --private --push
```

## 内容与版权说明

该项目是课程研究原型。实际公开发布前，请确认所有后续加入的历史照片、音乐、视频、封面或粉丝材料拥有适当的使用许可与来源标注。
