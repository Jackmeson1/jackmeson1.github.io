---
layout: page
title: "Research Log"
permalink: /blog/
subtitle: "Long-form signals on markets, technology, and risk"
---

<div class="blog-rss">
  <a href="{{ '/feed.xml' | relative_url }}" rel="noopener" target="_blank" class="blog-rss__link">
    <span>📡</span>
    <span>Subscribe via RSS</span>
  </a>
</div>

## Featured Posts

<div class="posts-list blog-featured-list">
  {% assign featured_posts = site.posts | where: 'featured', true %}
  {% if featured_posts.size == 0 %}
    {% assign featured_posts = site.posts | sort: 'date' | reverse | limit: 3 %}
  {% endif %}

  {% for post in featured_posts %}
  <article class="blog-featured-card">
    <div class="blog-post-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
      {% if post.categories.size > 0 %}
        <span>•</span>
        {% for cat in post.categories limit:1 %}
          <span class="chip blog-category-chip">
            {{ site.data.categories[cat].name | default: cat | capitalize }}
          </span>
        {% endfor %}
      {% endif %}
    </div>

    <h3 class="blog-post-title">
      <a href="{{ post.url | relative_url }}" class="blog-post-link">{{ post.title }}</a>
    </h3>

    {% if post.description %}
      <p class="blog-post-excerpt">{{ post.description | truncate: 150 }}</p>
    {% elsif post.excerpt %}
      <p class="blog-post-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
    {% endif %}

    {% if post.tags.size > 0 %}
      <div class="blog-tags">
        {% for tag in post.tags limit:4 %}
          <span class="tag-chip">#{{ tag }}</span>
        {% endfor %}
      </div>
    {% endif %}
  </article>
  {% endfor %}
</div>

## All Posts

<div class="category-filter blog-filter">
  <div class="blog-filter__chips" data-category-chips>
    <button type="button" class="chip blog-filter__button is-active" data-category="all">All</button>
    {% for category_data in site.data.categories %}
      {% assign category_key = category_data[0] %}
      {% assign category = category_data[1] %}
      <button type="button" class="chip blog-filter__button" data-category="{{ category_key }}">{{ category.name }}</button>
    {% endfor %}
  </div>
</div>

<div class="posts-list blog-posts-list">
  {% assign all_posts = site.posts | sort: 'date' | reverse %}
  {% for post in all_posts %}
  <article class="post-item blog-post-card" data-categories="{{ post.categories | join: ' ' }}">
    <div class="blog-post-card__meta">
      <time datetime="{{ post.date | date_to_xmlschema }}" class="blog-post-card__date">{{ post.date | date: "%B %d, %Y" }}</time>
      {% if post.categories.size > 0 %}
        <div class="blog-post-card__categories">
          {% for cat in post.categories %}
            <span class="chip blog-category-chip">
              {{ site.data.categories[cat].name | default: cat | capitalize }}
            </span>
          {% endfor %}
        </div>
      {% endif %}
    </div>

    <h3 class="blog-post-card__title">
      <a href="{{ post.url | relative_url }}" class="blog-post-link">{{ post.title }}</a>
    </h3>

    {% if post.description %}
      <p class="blog-post-card__excerpt">{{ post.description | truncate: 120 }}</p>
    {% elsif post.excerpt %}
      <p class="blog-post-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    {% endif %}
  </article>
  {% endfor %}
</div>

<script src="{{ '/assets/js/blog-filter.js' | relative_url }}"></script>
