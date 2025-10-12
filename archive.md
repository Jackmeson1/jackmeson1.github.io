---
layout: page
title: Archive
permalink: /archive/
---

<div class="archive">
  <p class="archive-intro">{{ site.posts | size }} posts in total</p>

  {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

  {% for year in postsByYear %}
    <h2 class="year-header">{{ year.name }}</h2>
    <ul class="archive-list">
      {% for post in year.items %}
        <li class="archive-item">
          <span class="archive-date">{{ post.date | date: "%m-%d" }}</span>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.categories %}
            <span class="archive-category">{{ post.categories | join: ', ' }}</span>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>

<style>
  .archive-intro {
    color: #657786;
    margin-bottom: 30px;
    font-style: italic;
  }

  .year-header {
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 10px;
    margin-top: 40px;
    margin-bottom: 20px;
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

  .archive-category {
    background: #f0f0f0;
    color: #555;
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 0.85em;
    margin-left: 10px;
  }
</style>
