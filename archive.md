---
layout: page
title: Archive
permalink: /archive/
---

<div class="archive">
  <p class="archive-intro">{{ site.posts | size }} posts in total</p>

  {% assign category_names = site.categories | map: "first" | sort_natural %}

  {% for category_name in category_names %}
    {% assign category_posts = site.categories[category_name] | sort: "date" | reverse %}
    {% assign category_data = site.data.categories[category_name] %}
    {% assign category_label = category_data.name | default: category_name | replace: '-', ' ' | capitalize %}

    <section class="archive-category-group">
      <h2 id="{{ category_name | slugify }}" class="category-header">{{ category_label }}</h2>
      <ul class="archive-list">
        {% for post in category_posts %}
          <li class="archive-item">
            <span class="archive-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>

<style>
  .archive-intro {
    color: #657786;
    margin-bottom: 30px;
    font-style: italic;
  }

  .category-header {
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 10px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .archive-category-group + .archive-category-group {
    margin-top: 40px;
  }

  .archive-list {
    list-style: none;
    padding: 0;
  }

  .archive-item {
    padding: 12px 0;
    border-bottom: 1px dashed #e1e8ed;
    display: flex;
    align-items: center;
  }

  .archive-date {
    color: #657786;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 0.9em;
    margin-right: 20px;
    min-width: 50px;
  }

  .archive-item a {
    color: #1a1a1a;
    text-decoration: none;
    flex: 1;
  }

  .archive-item a:hover {
    color: #667eea;
  }
  </style>
