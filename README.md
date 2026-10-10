# Yuanhao Wang · Personal Site

[![Live](https://img.shields.io/badge/Visit-yuanhaoxd.github.io-686e87?style=for-the-badge)](https://yuanhaoxd.github.io/)

我的个人网站：学术主页 + 博客。Astro 静态站，部署在 GitHub Pages。

## 页面

| 路径 | 内容 |
|---|---|
| `/` | 学术主页（简介、论文、经历、荣誉） |
| `/home/` | 插画首页 |
| `/blog/` | 博客（最新 / 精选 / 归档、标签、RSS） |

## 本地运行

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 写文章

在 `src/content/blog/` 新建 `.md` / `.mdx`：

```yaml
---
title: '标题'
description: '一句话简介'
pubDate: 2026-10-10
tags: ['tag']
lang: 'cn'      # cn / en
draft: false    # true 时不会发布
---
```

## 部署

推送到 `main` 后，GitHub Actions 自动构建并发布（`.github/workflows/deploy.yml`）。

## 技术

Astro 5 · Tailwind CSS 4 · GSAP。改动记录见 [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md)。

## License

MIT
