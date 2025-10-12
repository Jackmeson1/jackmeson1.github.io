---
layout: page
permalink: /blog/
title: "Research Log"
subtitle: "Long-form signals on markets, technology, and risk"
lede: "A living feed of essays, research briefs, and operator notes from the Financial Analysis Lab."
---

{% assign posts = site.posts | sort: 'date' | reverse %}
{% if posts.size > 0 %}
<div class="blog-roll">
  {% for post in posts limit: 8 %}
    <article>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="blog-meta">
        <span>{{ post.date | date: "%b %d, %Y" }}</span>
        {% if post.categories and post.categories.size > 0 %}
          · <span>{{ post.categories | join: ", " }}</span>
        {% endif %}
      </p>
      {% if post.description %}
        <p>{{ post.description }}</p>
      {% else %}
        <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
      {% endif %}
      <p><a class="blog-cta" href="{{ post.url }}">Read the note →</a></p>
    </article>
  {% endfor %}
</div>
{% else %}
<p class="empty-state">No posts yet. Subscribe to the feed to get notified when research drops.</p>
{% endif %}

<style>
.blog-roll {
  display: grid;
  gap: 2rem;
}

.blog-roll article {
  padding: 1.5rem;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 1rem;
  background: var(--card-bg, rgba(255, 255, 255, 0.7));
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
}

.blog-roll h3 {
  margin-top: 0;
}

.blog-meta {
  font-size: 0.9rem;
  color: var(--text-color-secondary, #666);
}

.blog-cta {
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}

.blog-cta:hover,
.blog-cta:focus {
  color: #4f46e5;
}
</style>
