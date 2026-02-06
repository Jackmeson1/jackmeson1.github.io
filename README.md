# Jiajun's Digital Garden 🌱

A personal blog and digital garden exploring **tech**, **finance**, **travel**, and **mindfulness**. Built with Jekyll and hosted on GitHub Pages.

**Live Site:** [jackmeson1.github.io](https://jackmeson1.github.io)

---

## 📚 Content Overview

### Recent Articles

**Tech & Career:**
- [QA to DevOps Transition 2025](https://jackmeson1.github.io/tech/2025/10/13/qa-to-devops-2025-market-analysis/) — Market analysis with salary data & roadmap (10k+ words)
- [Five Paradigms of Quality](https://jackmeson1.github.io/tech/2025/10/12/five-paradigms-quality/) — Complete testing philosophy
- [AI Power Infrastructure Series](https://jackmeson1.github.io/tech/2025/10/12/ai-datacenter-power-revolution/) — 5-part investment analysis (Constellation, Vertiv, Eaton, Bloom)

**Finance & Investment:**
- [Taleb Barbell Strategy](https://jackmeson1.github.io/finance/2025/10/11/taleb-barbell-strategy/) — Anti-fragile portfolio design

**Travel & Life:**
- [Vancouver Life Guide](https://jackmeson1.github.io/travel/2024/12/05/vancouver-life-guide/)
- [Sabbatical Journey](https://jackmeson1.github.io/mind/2024/12/14/sabbatical-announcement/)

### Content Categories

| Category | Focus | Count |
|----------|-------|-------|
| **Tech** | QA, DevOps, Cloud Native, AI Infrastructure | 10+ |
| **Finance** | Portfolio strategy, AI datacenter investments | 5+ |
| **Travel** | Vancouver guides, city routines | 3+ |
| **Mind** | Mindfulness, career reflection | 2+ |

---

## 🚀 Quick Start

### View the Site
Visit: **[jackmeson1.github.io](https://jackmeson1.github.io)**

### Run Locally

```bash
# 1. Install dependencies
bundle install

# 2. Start development server
bundle exec jekyll serve

# 3. Open browser
# Navigate to http://localhost:4000
```

**Requirements:**
- Ruby 2.7+
- Bundler
- Jekyll 4.3+

---

## 🏗️ Architecture

```
Site Structure:
┌─────────────────────────────────────────┐
│  Remote Theme: So Simple 3.2.0         │
│  (mmistakes/so-simple-theme)           │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Content Layer                          │
├─────────────────────────────────────────┤
│  _posts/        Blog articles           │
│  _notes/        Evergreen notes         │
│  pages/         Static pages            │
│  _data/         Structured data         │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Visual Layer                           │
├─────────────────────────────────────────┤
│  assets/css/    Custom styles + themes  │
│  assets/images/ SVG infographics        │
│  _includes/     Custom components       │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  Deployment                             │
├─────────────────────────────────────────┤
│  GitHub Pages   Auto-deploy on push    │
│  Build time:    1-5 minutes            │
└─────────────────────────────────────────┘
```

---

## 📂 Repository Structure

```
jackmeson1.github.io/
├── _posts/                  # Blog articles (date-prefixed)
│   ├── 2025-10-13-qa-to-devops-2025-market-analysis.md
│   ├── 2025-10-12-ai-datacenter-power-revolution.md
│   ├── 2025-10-11-taleb-barbell-strategy.md
│   └── ...
│
├── _data/                   # Structured data (YAML)
│   ├── navigation.yml       # Site navigation menu
│   ├── categories.yml       # Category definitions
│   └── books.yml            # Reading list
│
├── assets/
│   ├── css/                 # Stylesheets
│   │   ├── main.scss        # Theme overrides
│   │   ├── visual-enhancements.css  # Glass morphism, animations
│   │   └── design-system.css        # Design tokens
│   │
│   └── images/posts/        # Article visuals (SVG)
│       ├── qa-devops-transition-2025.svg
│       ├── ai-power-value-chain.svg
│       ├── taleb-barbell-analysis.svg
│       └── ...
│
├── _includes/               # Custom HTML components
│   ├── post-card.html       # Card component
│   ├── hero.html            # Hero section
│   └── timeline.html        # Timeline visualization
│
├── pages/                   # Static pages
│   ├── about.md             # About page
│   ├── blog.md              # Blog index
│   ├── library.md           # Reading list
│   └── travel.md            # Travel notes
│
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── CLAUDE.md                # AI assistant instructions
└── README.md                # This file
```

---

## 📝 Documentation Notes

- [README update summary (Oct 13, 2025)](docs/README-UPDATE-SUMMARY.md)

## ✍️ Writing New Content

### Create a Blog Post

```bash
# 1. Create file in _posts/
touch _posts/YYYY-MM-DD-your-title.md

# 2. Add front matter
```

**Template:**

```yaml
---
layout: post
title: "Your Article Title"
date: 2025-10-13 09:00:00 -0700
categories: [tech]  # tech, finance, travel, mind
tags: [tag1, tag2, tag3]
author: Jiajun Liang
description: "Brief description for SEO (150-160 chars)"
image: /assets/images/posts/your-image.svg  # Optional
toc: true           # Enable table of contents
featured: false     # Highlight on homepage
---

Your content here...
```

### Advanced Front Matter (Optional)

```yaml
tldr:
  - "Key point 1"
  - "Key point 2"
  - "Key point 3"

key_takeaways:
  - "Actionable takeaway 1"
  - "Actionable takeaway 2"

faqs:
  - question: "Common question?"
    answer: "Detailed answer..."
```

### Add Custom SVG Infographic

1. Create SVG in `assets/images/posts/`
2. Reference in front matter: `image: /assets/images/posts/your-diagram.svg`
3. Use in article: `![Alt text](/assets/images/posts/your-diagram.svg)`

**Example SVGs:**
- Market data visualizations
- Architecture diagrams
- Comparison charts
- Roadmap timelines

---

## 🎨 Design System

### Visual Enhancements

The site uses modern design patterns:

**Glass Morphism:**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

**Gradients (6 presets):**
- `gradient-purple` — Tech/Career content
- `gradient-blue` — Finance/Investment
- `gradient-green` — Travel/Life
- `gradient-pink` — Mindfulness
- `gradient-sunset` — Featured content
- `gradient-ocean` — Default

**Animations:**
- `float` — Gentle hover lift
- `pulse` — Attention grabber
- `shimmer` — Loading states
- `drift` — Background movement

### Category-Specific Themes

Each category has unique visual identity:

| Category | Primary Color | Accent | Icon |
|----------|--------------|--------|------|
| Tech | `#667eea` (Purple) | `#764ba2` | 💻 |
| Finance | `#f093fb` (Pink) | `#f5576c` | 💰 |
| Travel | `#4facfe` (Blue) | `#00f2fe` | ✈️ |
| Mind | `#43e97b` (Green) | `#38f9d7` | 🧘 |

---

## 📊 Analytics & SEO

### Built-in Features

- ✅ **jekyll-seo-tag** — Auto-generates meta tags
- ✅ **jekyll-sitemap** — XML sitemap for search engines
- ✅ **jekyll-feed** — RSS feed generation
- ✅ **Search functionality** — Client-side search with Lunr.js

### SEO Best Practices

**Every article includes:**
- Optimized meta title (<60 chars)
- Meta description (150-160 chars)
- Target keywords in H1, H2, first paragraph
- Internal linking to related articles
- External authority links with sources
- Featured images (Open Graph tags)
- Structured data (TL;DR, FAQs)

**Example SEO Front Matter:**
```yaml
seo_title: "Optimized Title for Google (50-60 chars)"
keywords: [keyword1, keyword2, keyword3, keyword4]
description: "Compelling meta description with target keywords."
```

---

## 🔧 Customization

### Modify Site Info

Edit `_config.yml`:

```yaml
title: Your Site Name
description: Your site description
author: Your Name
email: your-email@example.com
url: "https://yourusername.github.io"
timezone: "America/Vancouver"  # Your timezone
```

### Update Navigation

Edit `_data/navigation.yml`:

```yaml
- title: Posts
  url: /blog/
- title: Categories
  url: /categories/
- title: About
  url: /about/
- title: Your New Page
  url: /your-page/
```

### Add New Category

1. Add definition to `_data/categories.yml`:
```yaml
- slug: your-category
  name: Your Category
  description: "Category description"
  permalink: /categories/your-category/
```

2. Create landing page: `categories/your-category.md`

3. Use in post front matter: `categories: [your-category]`

---

## 🛠️ Development Workflow

### Local Development

```bash
# Start server with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build

# Check build errors
bundle exec jekyll doctor
```

### Git Workflow

```bash
# 1. Create feature branch
git checkout -b feature/your-feature

# 2. Make changes and commit
git add .
git commit -m "Your descriptive commit message"

# 3. Push to GitHub
git push origin feature/your-feature

# 4. Merge to main (triggers auto-deploy)
git checkout main
git merge feature/your-feature
git push origin main
```

**Deployment:** GitHub Pages auto-builds within 1-5 minutes after pushing to `main`.

---

## 📈 Content Strategy

### Article Types

**Deep Dives (5,000-15,000 words):**
- Market analysis with data sources
- Technical guides with roadmaps
- Investment research with valuation models
- Example: [QA to DevOps Market Analysis](https://jackmeson1.github.io/tech/2025/10/13/qa-to-devops-2025-market-analysis/)

**Framework Articles (3,000-5,000 words):**
- Mental models and philosophies
- Testing methodologies
- Portfolio strategies
- Example: [Five Paradigms of Quality](https://jackmeson1.github.io/tech/2025/10/12/five-paradigms-quality/)

**Series (5+ articles):**
- Multi-part explorations
- Investment theses with parts
- Example: [AI Power Infrastructure Series](https://jackmeson1.github.io/tech/2025/10/12/ai-datacenter-power-revolution/)

**Short Notes (500-1,500 words):**
- Quick reflections
- Travel observations
- Career updates

### Publishing Cadence

- **Tech/Finance:** 1-2 per month (research-heavy)
- **Travel/Mind:** As inspiration strikes
- **Updates:** Quarterly refreshes of evergreen content

---

## 🎓 Learning Resources

### Jekyll Documentation
- [Jekyll Official Docs](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [So Simple Theme Docs](https://github.com/mmistakes/so-simple-theme)

### Markdown & Writing
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

### Design & Visuals
- [SVG Tutorial (MDN)](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [CSS Gradient Generator](https://cssgradient.io/)
- [Coolors (Color Palettes)](https://coolors.co/)

---

## 🤝 Contributing

This is a personal blog, but suggestions welcome!

**Found an issue?**
- Typos, broken links, or bugs → [Open an issue](https://github.com/Jackmeson1/jackmeson1.github.io/issues)

**Have a suggestion?**
- Content ideas, design improvements → Create a GitHub issue or reach out

---

## 📬 Contact

- **GitHub:** [@Jackmeson1](https://github.com/Jackmeson1)
- **LinkedIn:** [linkedin.com/in/jiajun-liang](https://linkedin.com/in/jiajun-liang)
- **Email:** jli785330@gmail.com
- **Blog:** [jackmeson1.github.io](https://jackmeson1.github.io)

---

## 📄 License

Content © 2024-2025 Jiajun Liang. All rights reserved.

Code (site structure, styles, components) licensed under [MIT License](LICENSE).

Third-party assets (So Simple Theme, etc.) retain their original licenses.

---

## 🙏 Acknowledgments

**Built with:**
- [Jekyll](https://jekyllrb.com/) — Static site generator
- [So Simple Theme](https://github.com/mmistakes/so-simple-theme) by Michael Rose
- [GitHub Pages](https://pages.github.com/) — Free hosting
- [Claude Code](https://claude.com/code) — AI pair programming assistant

**Inspired by:**
- [Derek Sivers' Blog](https://sive.rs/) — Simplicity and clarity
- [Paul Graham's Essays](http://www.paulgraham.com/articles.html) — Long-form thinking
- [Gwern.net](https://gwern.net/) — Digital garden philosophy

---

**Start exploring:** [jackmeson1.github.io](https://jackmeson1.github.io) 🚀
