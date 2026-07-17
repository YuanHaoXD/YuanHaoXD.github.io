# YuanHao's Space

基于 Astro + Tailwind 的静态个人博客，用于记录技术笔记、研究心得和项目经验。

[![Visit Live Site](https://img.shields.io/badge/Visit-Live%20Site-0f766e?style=for-the-badge&logo=github&logoColor=white)](https://yuanhaoxd.github.io/)
[![View GitHub Repository](https://img.shields.io/badge/GitHub-Repository-111827?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YuanHaoXD/YuanHaoXD.github.io)

## Features

- 基于 Astro Content Collections 的静态博客（`.md` + `.mdx`）
- 结构化页面：首页、博客、标签、友链、关于
- 文章目录系统：桌面端 sticky 侧边栏 + 移动端抽屉
- 中英文配对文章的语言切换支持
- 亮/暗主题切换
- GitHub Pages 自动部署（GitHub Actions）
- 404 页面

## Project Structure

```text
.
├─ public/
│  ├─ image/                    # Static images
│  └─ fonts/                    # Custom fonts
├─ src/
│  ├─ components/               # UI components
│  ├─ content/
│  │  └─ blog/                  # Markdown/MDX posts
│  ├─ data/
│  │  ├─ links.ts               # Friend links
│  │  ├─ navLinks.ts            # Navigation items
│  │  └─ quotes.json            # Terminal quotes
│  ├─ layouts/
│  │  └─ BlogPost.astro         # Article layout + TOC
│  ├─ pages/
│  │  ├─ index.astro            # Home
│  │  ├─ blog/                  # Blog list + posts
│  │  ├─ tags/                  # Tag pages
│  │  ├─ links/                 # Friend links
│  │  └─ about.astro            # About
│  ├─ styles/
│  │  └─ global.css             # Global styles
│  └─ consts.ts                 # Site constants
├─ astro.config.mjs
├─ tailwind.config.mjs
└─ package.json
```

## Development

```bash
npm install
npm run dev      # dev server at localhost:4321
npm run build    # production build to dist/
npm run preview  # preview build locally
```

## Writing

在 `src/content/blog/` 下创建 `.md` / `.mdx` 文件：

```yaml
---
title: "Your Title"
description: "Short summary"
pubDate: 2026-07-16
tags: ["tag-a", "tag-b"]
---
```

## Deployment

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

站点地址：https://yuanhaoxd.github.io/

## Credits

本站基于 [DansBlog](https://github.com/Dancncn/DansBlog) 模板，由 [Dan Arnoux](https://github.com/Dancncn) 设计。
