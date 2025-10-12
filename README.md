# 金融分析研究室

一个专注于深度金融分析的个人博客，使用 Jekyll 构建并托管在 GitHub Pages。

## 🚀 快速开始

### 访问博客
博客地址：[https://jackmeson1.github.io](https://jackmeson1.github.io)

### 本地运行

1. **安装依赖**
```bash
bundle install
```

2. **启动本地服务器**
```bash
bundle exec jekyll serve
```

3. **访问**
打开浏览器访问 `http://localhost:4000`

## 📝 写新文章

### 创建文章

在 `_posts` 目录下创建新文件，文件名格式：`YYYY-MM-DD-title.md`

例如：`2025-10-11-my-new-post.md`

### 文章模板

```markdown
---
layout: post
title: "你的文章标题"
date: 2025-10-11 10:00:00 +0800
categories: [行业研究, 公司分析]
tags: [标签1, 标签2]
author: Jackmeson
---

## 正文内容

在这里写你的文章内容...

### 添加图表

可以使用 Markdown 表格：

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 数据1 | 数据2 | 数据3 |

### 添加代码

\```python
# Python 代码示例
import pandas as pd
df = pd.read_csv('data.csv')
\```
```

## 📂 目录结构

```
jackmeson1.github.io/
├── _posts/              # 博客文章
│   ├── 2025-10-11-ai-power-industry-analysis.md
│   └── 2025-10-10-nev-industry-chain-analysis.md
├── _config.yml         # Jekyll 配置文件
├── index.md            # 首页
├── about.md            # 关于页面
├── archive.md          # 归档页面
├── Gemfile             # Ruby 依赖
└── README.md           # 说明文档
```

## 🎨 自定义

### 修改网站信息

编辑 `_config.yml` 文件：

```yaml
title: 你的博客名称
description: 博客描述
author: 你的名字
email: your-email@example.com
```

### 修改样式

可以在每个页面底部的 `<style>` 标签中自定义CSS样式。

### 添加导航菜单

在 `_config.yml` 中修改 `header_pages`：

```yaml
header_pages:
  - index.md
  - about.md
  - archive.md
  - your-new-page.md
```

## 📊 文章分类建议

- **行业研究**：深度行业分析报告
- **公司分析**：个股基本面研究
- **市场观察**：宏观市场评论
- **量化分析**：数据建模与回测
- **投资笔记**：学习心得与思考

## 🔧 常用技巧

### 插入图片

```markdown
![图片描述](图片URL)
```

### 创建表格

```markdown
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 内容1 | 内容2 | 内容3 |
```

### 添加引用

```markdown
> 这是一段引用文字
```

### 创建列表

```markdown
- 项目1
- 项目2
- 项目3
```

## 📈 数据可视化

可以使用以下工具嵌入图表：

1. **Chart.js** - 在文章中嵌入交互式图表
2. **Google Charts** - 丰富的图表类型
3. **Plotly** - 专业的数据可视化
4. **TradingView** - 金融图表

## 🔗 相关资源

- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Markdown 语法](https://www.markdownguide.org/basic-syntax/)
- [Jekyll 主题](https://jekyllthemes.io/)

## 📮 联系方式

- GitHub: [@jackmeson1](https://github.com/jackmeson1)
- Email: your-email@example.com

## ⚠️ 免责声明

本博客所有内容仅供学习和研究使用，不构成任何投资建议。投资有风险，决策需谨慎。

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

---

**开始写作，分享你的洞察！** 🚀
