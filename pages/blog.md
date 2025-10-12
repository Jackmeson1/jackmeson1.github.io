---
layout: page
title: "Research Log"
permalink: /blog/
subtitle: "Long-form signals on markets, technology, and risk"
---

<div style="margin-bottom: 2rem;">
  <a href="{{ '/feed.xml' | relative_url }}" rel="noopener" target="_blank" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.25rem; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 999px; text-decoration: none; font-weight: 600; color: #4338ca; transition: all 0.3s ease;">
    <span>📡</span>
    <span>Subscribe via RSS</span>
  </a>
</div>

## Featured Posts

<div class="posts-list" style="display: grid; gap: 2rem; margin-bottom: 3rem;">
  {% assign featured_posts = site.posts | where: 'featured', true %}
  {% if featured_posts.size == 0 %}
    {% assign featured_posts = site.posts | sort: 'date' | reverse | limit: 3 %}
  {% endif %}

  {% for post in featured_posts %}
  <article style="padding: 1.75rem; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 1rem; background: white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); transition: all 0.3s ease;">
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; font-size: 0.9rem; color: #6b7280;">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d, %Y" }}</time>
      {% if post.categories.size > 0 %}
        <span>•</span>
        {% for cat in post.categories limit:1 %}
          <span style="padding: 0.25rem 0.75rem; border-radius: 999px; background: rgba(99, 102, 241, 0.1); color: #4338ca; font-weight: 600;">
            {{ site.data.categories[cat].name | default: cat | capitalize }}
          </span>
        {% endfor %}
      {% endif %}
    </div>

    <h3 style="margin: 0 0 0.75rem 0; font-size: 1.5rem;">
      <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ post.title }}</a>
    </h3>

    {% if post.description %}
      <p style="color: #4b5563; line-height: 1.6; margin: 0 0 1rem 0;">{{ post.description | truncate: 150 }}</p>
    {% elsif post.excerpt %}
      <p style="color: #4b5563; line-height: 1.6; margin: 0 0 1rem 0;">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
    {% endif %}

    {% if post.tags.size > 0 %}
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
        {% for tag in post.tags limit:4 %}
          <span style="font-size: 0.85rem; color: #6366f1;">#{{ tag }}</span>
        {% endfor %}
      </div>
    {% endif %}
  </article>
  {% endfor %}
</div>

## All Posts

<div class="category-filter" style="margin-bottom: 2rem;">
  <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;" data-category-chips>
    <button type="button" style="padding: 0.5rem 1rem; border-radius: 999px; border: 1px solid #d1d5db; background: #4338ca; color: white; font-size: 0.9rem; cursor: pointer; font-weight: 600; transition: all 0.3s;" data-category="all" class="is-active">All</button>
    {% for category_data in site.data.categories %}
      {% assign category_key = category_data[0] %}
      {% assign category = category_data[1] %}
      <button type="button" style="padding: 0.5rem 1rem; border-radius: 999px; border: 1px solid #d1d5db; background: white; color: #1f2937; font-size: 0.9rem; cursor: pointer; font-weight: 600; transition: all 0.3s;" data-category="{{ category_key }}">{{ category.name }}</button>
    {% endfor %}
  </div>
</div>

<div class="posts-list" style="display: grid; gap: 1.5rem;">
  {% assign all_posts = site.posts | sort: 'date' | reverse %}
  {% for post in all_posts %}
  <article class="post-item" data-categories="{{ post.categories | join: ' ' }}" style="padding: 1.5rem; border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 0.75rem; background: white; transition: all 0.3s ease;">
    <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem; margin-bottom: 0.75rem;">
      <time datetime="{{ post.date | date_to_xmlschema }}" style="font-size: 0.9rem; color: #6b7280;">{{ post.date | date: "%B %d, %Y" }}</time>
      {% if post.categories.size > 0 %}
        <div style="display: flex; gap: 0.5rem;">
          {% for cat in post.categories %}
            <span style="padding: 0.25rem 0.75rem; border-radius: 999px; background: rgba(99, 102, 241, 0.1); color: #4338ca; font-size: 0.85rem; font-weight: 600;">
              {{ site.data.categories[cat].name | default: cat | capitalize }}
            </span>
          {% endfor %}
        </div>
      {% endif %}
    </div>

    <h3 style="margin: 0 0 0.5rem 0; font-size: 1.25rem;">
      <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none; transition: color 0.3s;">{{ post.title }}</a>
    </h3>

    {% if post.description %}
      <p style="color: #4b5563; line-height: 1.6; margin: 0;">{{ post.description | truncate: 120 }}</p>
    {% elsif post.excerpt %}
      <p style="color: #4b5563; line-height: 1.6; margin: 0;">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    {% endif %}
  </article>
  {% endfor %}
</div>

<script>
(function() {
  const chipContainer = document.querySelector('[data-category-chips]');
  const posts = Array.from(document.querySelectorAll('.post-item'));

  if (chipContainer && posts.length) {
    chipContainer.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-category]');
      if (!button) return;

      const category = button.getAttribute('data-category');

      // Update active state
      chipContainer.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('is-active');
        btn.style.background = 'white';
        btn.style.color = '#1f2937';
        btn.style.borderColor = '#d1d5db';
      });
      button.classList.add('is-active');
      button.style.background = '#4338ca';
      button.style.color = 'white';
      button.style.borderColor = '#4338ca';

      // Filter posts
      posts.forEach((post) => {
        const categories = post.getAttribute('data-categories') || '';
        const shouldShow = category === 'all' || categories.split(' ').includes(category);
        post.style.display = shouldShow ? '' : 'none';
      });
    });

    // Add hover effects
    chipContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        if (!this.classList.contains('is-active')) {
          this.style.borderColor = '#4338ca';
          this.style.background = 'rgba(67, 56, 202, 0.05)';
        }
      });
      btn.addEventListener('mouseleave', function() {
        if (!this.classList.contains('is-active')) {
          this.style.borderColor = '#d1d5db';
          this.style.background = 'white';
        }
      });
    });
  }
})();
</script>

<style>
article h3 a:hover {
  color: #4338ca !important;
}

article:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08) !important;
  border-color: rgba(99, 102, 241, 0.2) !important;
}
</style>
