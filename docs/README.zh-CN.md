# YuanHao's Space

基于 Astro + Tailwind 的静态个人博客，用于记录技术笔记、研究心得和项目经验。

[![访问在线站点](https://img.shields.io/badge/访问-在线站点-0f766e?style=for-the-badge&logo=github&logoColor=white)](https://yuanhaoxd.github.io/)
[![查看 GitHub 仓库](https://img.shields.io/badge/GitHub-仓库-111827?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YuanHaoXD/YuanHaoXD.github.io)

> **English Version**: [View English Documentation](../README.md)

## 特性

- 基于 Astro Content Collections 的静态博客（`.md` + `.mdx`）
- 结构化页面：首页、博客、标签、友链、关于
- 文章目录系统：桌面端 sticky 侧边栏 + 移动端抽屉
- 中英文配对文章的语言切换支持
- 亮/暗主题切换
- GitHub Pages 自动部署（GitHub Actions）
- 404 页面

## 项目结构

```text
.
├─ public/
│  ├─ image/                    # 静态图片
│  └─ fonts/                    # 自定义字体
├─ src/
│  ├─ components/               # UI 组件
│  ├─ content/
│  │  └─ blog/                  # Markdown/MDX 文章
│  ├─ data/
│  │  ├─ links.ts               # 友链数据
│  │  ├─ navLinks.ts            # 导航项
│  │  └─ quotes.json            # 终端语录
│  ├─ layouts/
│  │  └─ BlogPost.astro         # 文章布局 + 目录
│  ├─ pages/
│  │  ├─ index.astro            # 首页
│  │  ├─ blog/                  # 博客列表 + 文章
│  │  ├─ tags/                  # 标签页
│  │  ├─ links/                 # 友链
│  │  └─ about.astro            # 关于
│  ├─ styles/
│  │  └─ global.css             # 全局样式
│  └─ consts.ts                 # 站点常量
├─ astro.config.mjs
├─ tailwind.config.mjs
└─ package.json
```

## 开发

```bash
npm install
npm run dev      # 开发服务器 localhost:4321
npm run build    # 生产构建到 dist/
npm run preview  # 本地预览构建
```

## 写作

在 `src/content/blog/` 下创建 `.md` / `.mdx` 文件：

```yaml
---
title: "文章标题"
description: "简短描述"
pubDate: 2026-07-16
tags: ["标签1", "标签2"]
---
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

站点地址：https://yuanhaoxd.github.io/

## 致谢

本站基于 [DansBlog](https://github.com/Dancncn/DansBlog) 模板，由 [Dan Arnoux](https://github.com/Dancncn) 设计。
