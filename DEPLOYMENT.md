# 📦 部署指南

本指南将教你如何将博客文件上传到 GitHub 并启用 GitHub Pages。

## 方法一：通过 GitHub 网页界面上传（推荐新手）

### 步骤 1：准备文件

你需要上传以下文件到你的 `jackmeson1.github.io` 仓库：

```
必需文件：
├── _config.yml          ← Jekyll 配置
├── index.md             ← 首页
├── about.md             ← 关于页面
├── archive.md           ← 归档页面
├── Gemfile              ← 依赖管理
└── _posts/              ← 文章目录
    ├── 2025-10-11-ai-power-industry-analysis.md
    └── 2025-10-10-nev-industry-chain-analysis.md
```

### 步骤 2：上传文件

1. **打开你的仓库页面**
   - 访问：https://github.com/jackmeson1/jackmeson1.github.io

2. **上传根目录文件**
   - 点击 `Add file` → `Upload files`
   - 拖拽这些文件到上传区：
     - `_config.yml`
     - `index.md`
     - `about.md`
     - `archive.md`
     - `Gemfile`
     - `README.md`
   - 输入提交信息：`Add blog files`
   - 点击 `Commit changes`

3. **创建 _posts 文件夹并上传文章**
   - 点击 `Add file` → `Create new file`
   - 在文件名输入框输入：`_posts/placeholder.txt`（先创建文件夹）
   - 输入任意内容，点击 `Commit changes`
   - 然后进入 `_posts` 文件夹
   - 点击 `Add file` → `Upload files`
   - 上传两篇示例文章：
     - `2025-10-11-ai-power-industry-analysis.md`
     - `2025-10-10-nev-industry-chain-analysis.md`
   - 提交

### 步骤 3：等待部署

- GitHub Pages 会自动构建你的网站
- 通常需要 1-5 分钟
- 访问 https://jackmeson1.github.io 查看效果

---

## 方法二：使用 Git 命令行（推荐进阶用户）

### 前置要求

1. 安装 Git
2. 配置 GitHub 身份验证

### 操作步骤

```bash
# 1. 克隆仓库到本地
git clone https://github.com/jackmeson1/jackmeson1.github.io.git
cd jackmeson1.github.io

# 2. 将所有博客文件复制到这个目录

# 3. 添加所有文件
git add .

# 4. 提交更改
git commit -m "Initial blog setup with sample posts"

# 5. 推送到 GitHub
git push origin main

# 6. 等待 GitHub Pages 自动部署（1-5分钟）
```

---

## 检查部署状态

### 方法 1：通过 Actions 页面

1. 访问：https://github.com/jackmeson1/jackmeson1.github.io/actions
2. 查看最新的 workflow 运行状态
3. 绿色✓表示部署成功

### 方法 2：通过 Settings

1. 进入仓库的 `Settings` → `Pages`
2. 看到 "Your site is live at https://jackmeson1.github.io" 表示成功

---

## 常见问题

### Q1: 上传后网站显示 404

**解决方案：**
- 确认 `index.md` 或 `index.html` 存在于根目录
- 检查 GitHub Pages 设置中 Source 是否选择了 `main` 分支
- 等待 3-5 分钟让 GitHub 完成构建

### Q2: 网站样式不正常

**解决方案：**
- 检查 `_config.yml` 中的 `baseurl` 和 `url` 配置
- 确保所有文件编码为 UTF-8
- 查看浏览器控制台是否有错误

### Q3: 文章不显示

**解决方案：**
- 确认文件在 `_posts` 目录下
- 检查文件名格式：`YYYY-MM-DD-title.md`
- 确认文章开头有正确的 Front Matter（`---` 包围的元数据）
- 检查文章的日期不能是未来日期

### Q4: 本地预览与线上不一致

**解决方案：**
```bash
# 本地运行时使用与 GitHub Pages 相同的环境
bundle exec jekyll serve --config _config.yml
```

---

## 写新文章的流程

### 使用网页界面

1. 访问仓库页面
2. 进入 `_posts` 文件夹
3. 点击 `Add file` → `Create new file`
4. 文件名输入：`2025-10-12-your-article-title.md`
5. 粘贴文章内容（包含 Front Matter）
6. 点击 `Commit changes`
7. 等待 1-2 分钟，刷新博客页面

### 使用 Git

```bash
# 1. 创建新文章
cd _posts
touch 2025-10-12-your-article-title.md

# 2. 编辑文章（使用你喜欢的编辑器）

# 3. 提交并推送
git add .
git commit -m "Add new post: Your Article Title"
git push origin main
```

---

## 优化建议

### 1. 添加 Google Analytics（可选）

在 `_config.yml` 中添加：
```yaml
google_analytics: UA-XXXXXXXXX-X
```

### 2. 启用评论功能（可选）

可以集成以下评论系统：
- Disqus
- Giscus (GitHub Discussions)
- Utterances (GitHub Issues)

### 3. 添加自定义域名（可选）

如果你有自己的域名：

1. 在域名服务商处添加 DNS 记录：
   ```
   类型: CNAME
   名称: www
   值: jackmeson1.github.io
   ```

2. 在仓库根目录创建 `CNAME` 文件：
   ```
   www.yourdomain.com
   ```

3. 在 GitHub Settings → Pages → Custom domain 输入你的域名

---

## 下一步

✅ 上传所有文件到 GitHub
✅ 等待 GitHub Pages 部署完成
✅ 访问 https://jackmeson1.github.io 查看效果
✅ 开始写作新文章
✅ 定期更新和维护

---

## 获取帮助

遇到问题？可以：
1. 查看 [GitHub Pages 文档](https://docs.github.com/en/pages)
2. 查看 [Jekyll 文档](https://jekyllrb.com/docs/)
3. 在仓库中提 Issue

---

**祝你的博客顺利上线！** 🎉
