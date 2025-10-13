# Agent Guide

## Project Overview
- This repository hosts a Jekyll site deployed with GitHub Pages.
- The site uses the remote theme `mmistakes/so-simple-theme@3.2.0`; only override layouts or includes when necessary.

## Local Development
1. Install Ruby dependencies with `bundle install`.
2. Start the local server using `bundle exec jekyll serve` and visit http://localhost:4000.
3. Run `bundle exec jekyll build` if you need a production build preview.

## Content Structure
- Long-form posts live in `_posts/` (named `YYYY-MM-DD-title.md`).
- Evergreen notes belong in `_notes/`.
- Standalone pages live in `pages/` or the project root with the appropriate `layout` front matter.
- Data that feeds navigation and listings is stored under `_data/` (e.g., `navigation.yml`, `categories.yml`).

## Design Guidance
- Favor the theme's clean, content-first aesthetic; avoid adding busy visual treatments or heavy animations.
- Reuse existing utility classes in `assets/css` instead of introducing new one-off styles when possible.
- Ensure pages remain readable on mobile and desktop breakpoints.

## General Practices
- Keep documentation concise and relevant to current workflows.
- Follow Markdown linting basics (ATX headings, code fences, spacing) for new or edited docs.
- Prefer incremental improvements over sweeping redesigns unless explicitly requested.
