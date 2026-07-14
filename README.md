<p align="center">
  <img src="docs/images/avatar.jpg" width="120" height="120" style="border-radius: 50%" alt="avatar">
</p>

<h1 align="center">start.luck</h1>
<p align="center">
  DL.TS 的个人技术博客 — 基于 <a href="https://hexo.io/">Hexo</a> + <a href="https://github.com/theme-particlex/hexo-theme-particlex">Particlex</a> 构建
</p>

<p align="center">
  <a href="https://hexo.io/"><img src="https://img.shields.io/badge/Hexo-7.3.0-0E83CD?logo=hexo" alt="Hexo"></a>
  <a href="https://github.com/theme-particlex/hexo-theme-particlex"><img src="https://img.shields.io/badge/Theme-Particlex-blueviolet" alt="Theme"></a>
  <a href="https://errorlook.github.io/boke/"><img src="https://img.shields.io/badge/Live-blog-success?logo=github" alt="Live"></a>
  <a href="https://github.com/errorlook/boke/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow" alt="License"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff" alt="Python">
  <img src="https://img.shields.io/badge/SQL-4479A1?logo=mysql&logoColor=fff" alt="SQL">
  <img src="https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=fff" alt="C++">
  <img src="https://img.shields.io/badge/UE-0E1128?logo=unrealengine&logoColor=fff" alt="UE">
  <img src="https://img.shields.io/badge/Lua-2C2D72?logo=lua&logoColor=fff" alt="Lua">
  <img src="https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=fff" alt="OpenAI">
  <img src="https://img.shields.io/badge/Gemini-8E75B2?logo=googlegemini&logoColor=fff" alt="Gemini">
  <img src="https://img.shields.io/badge/Deepseek-4D6BFE?logo=deepseek&logoColor=fff" alt="Deepseek">
  <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff" alt="Git">
</p>

---

## 项目简介

个人博客，用于记录游戏开发学习、AI 探索、动画壁纸收藏和旅行见闻。

- **作者**: DL.TS
- **站点地址**: [https://errorlook.github.io/boke/](https://errorlook.github.io/boke/](https://lordfulilian.github.io/Mypersonalwebsite)
- **框架**: Hexo 7.3.0
- **主题**: Particlex
- **评论**: Twikoo
- **部署**: GitHub Pages（`docs/` 目录）

## 目录结构

```
boke/
├── source/                  # Markdown 源文件
│   ├── _posts/              # 博客文章
│   ├── about/               # 关于页面
│   ├── Knowledge Base/      # 知识库（UE 客户端开发面试题库）
│   └── wallpaper/           # 壁纸收藏页
├── themes/particlex/        # Particlex 主题
├── scaffolds/               # 文章脚手架模板
├── docs/                    # 构建产物（GitHub Pages 部署目录）
├── public/                  # 本地构建产物
├── _config.yml              # Hexo 站点配置
├── update.bat               # 一键构建 + 部署脚本
└── package.json             # 项目依赖
```

## 技术栈

| 类别 | 技术 |
|------|------|
| 静态站点生成器 | Hexo 7.3.0 |
| 主题 | Particlex |
| 模板引擎 | EJS |
| CSS 预处理器 | Stylus |
| Markdown 渲染 | hexo-renderer-marked |
| 代码高亮 | PrismJS |
| 评论系统 | Twikoo（Vercel 部署） |
| 图标 | Font Awesome 6 |
| 部署 | GitHub Pages |

## 快速开始

### 环境要求

- Node.js >= 18
- Git
- npm 或 yarn

### 本地开发

```bash
# 克隆项目
git clone https://github.com/errorlook/boke.git
cd boke

# 安装依赖
npm install

# 启动本地开发服务器（默认 http://localhost:4000/boke/）
npm run server
```

### 创建新文章

```bash
# 使用 hexo 命令创建新文章
npx hexo new "文章标题"
```

文章 Markdown 文件将生成在 `source/_posts/` 目录下，编辑后刷新浏览器即可预览。

### 构建与部署

```bash
# 清理并构建到 docs/ 目录
npm run clean
npm run build

# 或使用一键脚本
update.bat
```

构建产物输出到 `docs/` 目录，推送至 `main` 分支后，GitHub Pages 将自动部署。

## 文章约定

所有文章位于 `source/_posts/`，使用 YAML Front Matter 声明元数据：

```yaml
---
title: 文章标题
date: 2024-05-20 09:41:41
tags:
  - 标签
categories:
  - 分类
description: 文章描述
pinned: 10         # 可选：置顶权重（越大越靠前）
---
```

## 配置文件

| 文件 | 说明 |
|------|------|
| `_config.yml` | Hexo 站点级配置（URL、部署、分页等） |
| `themes/particlex/_config.yml` | 主题配置（菜单、头像、评论、插件等） |

在主题配置中可启用/配置：
- 头像与加载动画
- 导航菜单与图标
- 侧边栏个人信息卡片
- Twikoo / Gitalk / Waline 评论
- Highlight.js 代码高亮
- KaTeX 数学公式
- 图片预览
- 搜索功能

## 开源协议

MIT License

## 联系方式

- **GitHub**: [github.com/errorlook](https://github.com/errorlook)
- **邮箱**: start.luck@qq.com
- **博客**: [errorlook.github.io/boke](https://errorlook.github.io/boke)
