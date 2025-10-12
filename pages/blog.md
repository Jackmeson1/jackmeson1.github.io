---
layout: default
title: Research Log
permalink: /blog/
---

<div class="blog-page">
  <header class="blog-hero">
    <p class="hero-kicker">Insights</p>
    <h1>{{ page.title }}</h1>
    <p class="hero-lede">A living notebook of research memos, power-market breakdowns, and systems thinking tools—updated as experiments unfold.</p>
    <div class="blog-hero-actions">
      <a class="rss-link" href="{{ '/feed.xml' | relative_url }}" rel="noopener" target="_blank">📡 Subscribe via RSS</a>
    </div>
  </header>

  {% assign featured_posts = site.posts | where: 'featured', true %}
  {% if featured_posts == empty %}
    {% assign featured_posts = site.posts | sort: 'date' | reverse | slice: 0, 3 %}
  {% endif %}

  {% if featured_posts and featured_posts.size > 0 %}
    <section class="featured-section" aria-label="Featured posts">
      <div class="section-heading">
        <h2>Featured Insights</h2>
        <p>Start here for the latest deep dives that tie together capital, technology, and operator workflows.</p>
      </div>
      <div class="featured-carousel" data-carousel>
        <button class="carousel-control prev" type="button" aria-label="Previous featured post">‹</button>
        <div class="carousel-track" data-carousel-track>
          {% for post in featured_posts %}
            <article class="featured-card" data-index="{{ forloop.index0 }}">
              <a class="featured-card-link" href="{{ post.url | relative_url }}">
                {% assign image_path = post.image | default: '/assets/images/posts/default-feature.svg' %}
                <div class="featured-image" role="presentation">
                  <img src="{{ image_path | relative_url }}" alt="{{ post.title }} cover art" loading="lazy">
                </div>
                <div class="featured-content">
                  <p class="featured-meta">{{ post.date | date: "%b %d, %Y" }}</p>
                  <h3>{{ post.title }}</h3>
                  <p class="featured-description">{{ post.description | default: post.excerpt | strip_html | truncatewords: 30 }}</p>
                  <div class="featured-categories">
                    {% for cat in post.categories %}
                      <span class="chip">{{ site.data.categories[cat].name | default: cat | replace: '-', ' ' | capitalize }}</span>
                    {% endfor %}
                  </div>
                </div>
              </a>
            </article>
          {% endfor %}
        </div>
        <button class="carousel-control next" type="button" aria-label="Next featured post">›</button>
      </div>
    </section>
  {% endif %}

  <section class="filter-section" aria-label="Filter posts by category">
    <div class="section-heading">
      <h2>Browse by Category</h2>
      <p>Tap a chip to zero in on the category that matches your current research sprint.</p>
    </div>
    <div class="category-chips" data-category-chips>
      <button type="button" class="chip is-active" data-category="all">All</button>
      {% for key in site.data.categories %}
        {% assign category = key[1] %}
        <button type="button" class="chip" data-category="{{ key[0] }}">{{ category.name }}</button>
      {% endfor %}
    </div>
  </section>

  <section class="post-feed" aria-live="polite">
    <h2 class="sr-only">All posts</h2>
    <div class="post-feed-list">
      {% assign ordered_posts = site.posts | sort: 'date' | reverse %}
      {% for post in ordered_posts %}
        <article class="post-feed-card" data-categories="{{ post.categories | join: ' ' }}">
          <header class="post-feed-header">
            <p class="post-feed-date">{{ post.date | date: "%B %d, %Y" }}</p>
            <div class="post-feed-categories">
              {% for cat in post.categories %}
                <span class="chip">{{ site.data.categories[cat].name | default: cat | replace: '-', ' ' | capitalize }}</span>
              {% endfor %}
            </div>
          </header>
          <div class="post-feed-body">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p>{{ post.description | default: post.excerpt | strip_html | truncatewords: 36 }}</p>
            {% if post.tags %}
              <ul class="post-feed-tags">
                {% for tag in post.tags %}
                  <li>#{{ tag }}</li>
                {% endfor %}
              </ul>
            {% endif %}
          </div>
          <footer class="post-feed-footer">
            <a class="read-more" href="{{ post.url | relative_url }}">Read the full story →</a>
          </footer>
        </article>
      {% endfor %}
    </div>
  </section>
</div>

<style>
  .blog-page {
    max-width: 1040px;
    margin: 0 auto;
    padding: 40px 20px 80px;
  }

  .hero-kicker {
    text-transform: uppercase;
    letter-spacing: 0.35em;
    font-size: 0.75em;
    color: #6366f1;
    margin-bottom: 8px;
  }

  .blog-hero h1 {
    font-size: 2.75rem;
    margin-bottom: 16px;
  }

  .hero-lede {
    color: #4b5563;
    max-width: 640px;
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .blog-hero-actions {
    margin-top: 12px;
  }

  .rss-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 16px;
    border-radius: 999px;
    background: #eef2ff;
    color: #4338ca;
    text-decoration: none;
    font-weight: 600;
  }

  .rss-link:hover {
    background: #c7d2fe;
  }

  .section-heading h2 {
    margin-bottom: 8px;
  }

  .section-heading p {
    color: #6b7280;
    max-width: 640px;
    margin: 0 0 16px;
  }

  .featured-section {
    margin-top: 48px;
  }

  .featured-carousel {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .carousel-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(280px, 1fr);
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 8px;
  }

  .featured-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    overflow: hidden;
    scroll-snap-align: start;
    min-height: 100%;
    box-shadow: 0 12px 28px rgba(99, 102, 241, 0.12);
  }

  .featured-card-link {
    display: flex;
    flex-direction: column;
    color: inherit;
    text-decoration: none;
    height: 100%;
  }

  .featured-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: linear-gradient(135deg, #eef2ff, #e0e7ff);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .featured-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .featured-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .featured-meta {
    font-size: 0.85em;
    color: #6b7280;
  }

  .featured-content h3 {
    margin: 0;
    font-size: 1.3em;
  }

  .featured-description {
    color: #374151;
    line-height: 1.6;
  }

  .featured-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .carousel-control {
    border: none;
    background: #4338ca;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .carousel-control:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .filter-section {
    margin-top: 64px;
  }

  .category-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 999px;
    border: 1px solid #d1d5db;
    background: #fff;
    color: #1f2937;
    font-size: 0.9em;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .chip:hover,
  .chip.is-active {
    background: #4338ca;
    border-color: #4338ca;
    color: #fff;
  }

  .post-feed {
    margin-top: 48px;
  }

  .post-feed-list {
    display: grid;
    gap: 24px;
  }

  .post-feed-card {
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 24px;
    background: #fff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .post-feed-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px rgba(79, 70, 229, 0.12);
  }

  .post-feed-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }

  .post-feed-date {
    font-size: 0.9em;
    color: #6b7280;
  }

  .post-feed-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .post-feed-body h3 {
    margin-top: 0;
    margin-bottom: 8px;
  }

  .post-feed-body h3 a {
    color: #111827;
    text-decoration: none;
  }

  .post-feed-body h3 a:hover {
    color: #4338ca;
  }

  .post-feed-body p {
    color: #374151;
    line-height: 1.7;
    margin-bottom: 12px;
  }

  .post-feed-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    color: #6366f1;
  }

  .post-feed-footer {
    margin-top: 12px;
  }

  .read-more {
    color: #4338ca;
    text-decoration: none;
    font-weight: 600;
  }

  .read-more:hover {
    text-decoration: underline;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @media (max-width: 768px) {
    .blog-page {
      padding: 32px 16px 64px;
    }

    .blog-hero h1 {
      font-size: 2.2rem;
    }

    .featured-carousel {
      flex-direction: column;
    }

    .carousel-control {
      position: static;
      width: 36px;
      height: 36px;
    }
  }
</style>

<script>
  (function() {
    const chipContainer = document.querySelector('[data-category-chips]');
    const posts = Array.from(document.querySelectorAll('.post-feed-card'));

    if (chipContainer && posts.length) {
      chipContainer.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-category]');
        if (!button) return;

        const category = button.getAttribute('data-category');
        chipContainer.querySelectorAll('.chip').forEach(chip => chip.classList.remove('is-active'));
        button.classList.add('is-active');

        posts.forEach((post) => {
          const categories = post.getAttribute('data-categories') || '';
          const shouldShow = category === 'all' || categories.split(' ').includes(category);
          post.style.display = shouldShow ? '' : 'none';
        });
      });
    }

    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('[data-carousel-track]');
    const prevButton = carousel.querySelector('.carousel-control.prev');
    const nextButton = carousel.querySelector('.carousel-control.next');

    if (!track) return;

    const cards = Array.from(track.children);
    let currentIndex = 0;

    const updateControls = () => {
      if (!prevButton || !nextButton) return;
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= cards.length - 1;
    };

    const scrollToIndex = (index) => {
      if (!cards[index]) return;
      currentIndex = index;
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      updateControls();
    };

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => scrollToIndex(Math.max(0, currentIndex - 1)));
      nextButton.addEventListener('click', () => scrollToIndex(Math.min(cards.length - 1, currentIndex + 1)));
      updateControls();
    }
  })();
</script>
