# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Jekyll-based personal blog and digital garden hosted on GitHub Pages. The site uses the **So Simple Theme** (remote theme) and focuses on technical writing, finance analysis, travel notes, and mindfulness content.

**Author:** Jiajun Liang (former QA engineer)
**Live URL:** https://jackmeson1.github.io
**Theme:** mmistakes/so-simple-theme@3.2.0

## Commands

### Development

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build the site (GitHub Pages does this automatically)
bundle exec jekyll build
```

The site will be available at `http://localhost:4000` when running locally.

### Deployment

Deployment is automatic via GitHub Pages. Simply push to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will automatically build and deploy within 1-5 minutes.

## Architecture & Structure

### Content Organization

**Four main content categories** (defined in `_data/categories.yml`):
- `tech` - QA, DevOps, tooling notes
- `finance` - Capital allocation, market analysis
- `travel` - City routines, field notes
- `mind` - Mindfulness, reflective essays

**Content types:**
- `_posts/` - Blog posts (filename format: `YYYY-MM-DD-title.md`)
- `_notes/` - Evergreen notes for the digital garden
- `pages/` - Static pages (about, contact, library, etc.)

### Custom Components

The site uses custom HTML includes in `_includes/`:
- `post-card.html` - Card component for post listings
- `hero.html` - Hero section with gradient background
- `chip.html` - Tag/category chip component
- `tabs.html` - Tab navigation component
- `timeline.html` - Timeline visualization

### Data Files

`_data/` contains structured data:
- `navigation.yml` - Main navigation menu
- `categories.yml` - Category definitions with descriptions and permalinks
- `books.yml` - Reading list data
- `places.yml` - Travel location data
- `updates.yml` - Recent updates/changelog

### Styling

- `assets/css/main.scss` - Main stylesheet (theme overrides)
- `assets/css/design-system.css` - Design tokens and utility classes
- `assets/css/custom.css` - Custom styles and component CSS
- `assets/css/visual-enhancements.css` - Advanced visual effects (glass morphism, gradients, animations)

### Configuration

**Key `_config.yml` settings:**
- `remote_theme: "mmistakes/so-simple-theme@3.2.0"` - Uses remote theme, no local `_layouts/` directory
- `permalink: /:categories/:year/:month/:day/:title/` - URL structure for posts
- `paginate: 8` - Posts per page
- `timezone: "America/Vancouver"` - Important for post date rendering
- `search: true` - Enables site-wide search

## Writing New Content

### Blog Posts

Create files in `_posts/` with format `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-10-12 14:00:00 +0800
categories: [tech]  # Or finance, travel, mind
tags: [tag1, tag2]
author: Jiajun Liang
description: "Brief description for SEO and previews"
image: /assets/images/posts/featured-image.jpg  # Optional
toc: true  # Enables table of contents
featured: false  # Set to true for homepage highlight
---

Your content here...
```

**Important:** Post dates cannot be in the future or they won't display.

### Pages

Static pages go in `pages/` or root directory. Use `layout: page` and set `permalink:` for custom URLs.

### Notes (Digital Garden)

Evergreen content goes in `_notes/`. These are typically cross-linked, evolving documents rather than time-stamped posts.

## Theme Customization

This site uses a **remote theme**, meaning layouts are inherited from the So Simple Theme repository. To override:

1. Create `_layouts/` directory and copy the layout file from the theme
2. Modify the copied layout as needed
3. Jekyll will use your local version instead of the remote one

**Custom includes** are already present in `_includes/` and override theme defaults.

## Post Features

The site supports advanced front matter:

- `tldr:` - Array of key points (displayed at top of post)
- `key_takeaways:` - Actionable takeaways
- `faqs:` - Frequently asked questions with answers
- `redirect_from:` - Array of old URLs to redirect from
- `lang:` - Language code (defaults to `en`)
- `last_modified_at:` - Update timestamp

## Search & Discovery

- **Search:** Powered by `search.json` and `assets/js/search.js`
- **Tags page:** Auto-generated at `/tags/`
- **Categories page:** Auto-generated at `/categories/`
- **Archive:** Shows all posts chronologically

## Important Patterns

### Post URLs

Due to the permalink structure, posts are accessible at:
```
/[category]/[year]/[month]/[day]/[title]/
```

Example: `/tech/2025/10/12/my-post-title/`

### Image Paths

Store images in `assets/images/` or `assets/images/posts/`. Reference them with absolute paths:
```markdown
![Alt text](/assets/images/posts/my-image.jpg)
```

### Category Pages

Category landing pages are in `categories/[category].md` and use data from `_data/categories.yml` to display descriptions and filtered post lists.

## Site Navigation

Navigation is defined in `_data/navigation.yml`. The main menu includes:
- Posts
- Categories
- Tags
- About
- Search

## Plugins

The site uses these Jekyll plugins (via `github-pages` gem):
- `jekyll-remote-theme` - Enables remote theme support
- `jekyll-seo-tag` - SEO meta tags
- `jekyll-sitemap` - Auto-generates sitemap.xml
- `jekyll-feed` - RSS feed generation
- `jekyll-redirect-from` - URL redirects

## LLM Integration

The site includes `/llms.txt` following the llms.txt standard for AI crawlers. This file specifies priority pages and attribution guidelines.

## Common Tasks

### Adding a new category
1. Add definition to `_data/categories.yml`
2. Create landing page in `categories/[name].md`
3. Use category in post front matter

### Adding a new navigation item
1. Edit `_data/navigation.yml`
2. Add title and URL

### Updating author bio
Edit `_config.yml` under the `author:` section

### Customizing design
- Design tokens: `assets/css/design-system.css`
- Component styles: `assets/css/custom.css`
- Visual enhancements: `assets/css/visual-enhancements.css`
- Theme overrides: `assets/css/main.scss`

See `VISUAL-ENHANCEMENTS.md` for detailed documentation on the modern visual effects including glass morphism, gradients, animations, and hover effects.
