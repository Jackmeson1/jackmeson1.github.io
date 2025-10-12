---
layout: page
permalink: /library/
title: "Library"
subtitle: "Reading loops across finance, climate, and systems thinking"
lede: "A rotating shelf of books fueling current research, long-term worldview upgrades, and future experiment design."
---

{% assign library = site.data.books %}
{% assign reading = library.currently_reading %}
{% assign completed = library.completed %}
{% assign wishlist = library.wishlist %}

<section class="library-section">
  <h2>Currently Reading</h2>
  {% if reading and reading != empty %}
    <ul>
      {% for book in reading %}
        <li>
          <h3>{{ book.title }}</h3>
          <p class="library-meta">{{ book.author }}{% if book.started %} · Started {{ book.started }}{% endif %}</p>
          {% if book.summary %}<p>{{ book.summary }}</p>{% endif %}
          {% if book.notes %}
            <details>
              <summary>Notes &amp; highlights</summary>
              <p>{{ book.notes }}</p>
            </details>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p class="empty-state">No books on the desk right now. Recommendations welcome!</p>
  {% endif %}
</section>

<section class="library-section">
  <h2>Completed</h2>
  {% if completed and completed != empty %}
    <ul>
      {% for book in completed %}
        <li>
          <h3>{{ book.title }}</h3>
          <p class="library-meta">{{ book.author }}{% if book.finished %} · Finished {{ book.finished }}{% endif %}{% if book.rating %} · Rated {{ book.rating }}/5{% endif %}</p>
          {% if book.summary %}<p>{{ book.summary }}</p>{% endif %}
          {% if book.notes %}
            <details>
              <summary>Notes &amp; highlights</summary>
              <p>{{ book.notes }}</p>
            </details>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p class="empty-state">The shelf is being catalogued. Check back soon for reading logs.</p>
  {% endif %}
</section>

<section class="library-section">
  <h2>Wishlist</h2>
  {% if wishlist and wishlist != empty %}
    <ul>
      {% for book in wishlist %}
        <li>
          <h3>{{ book.title }}</h3>
          <p class="library-meta">{{ book.author }}{% if book.reason %} · {{ book.reason }}{% endif %}</p>
          {% if book.notes %}
            <details>
              <summary>Why it matters</summary>
              <p>{{ book.notes }}</p>
            </details>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p class="empty-state">Wishlist is empty—time to scout new ideas.</p>
  {% endif %}
</section>

<style>
.library-section {
  margin-bottom: 3rem;
}

.library-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.75rem;
}

.library-section li {
  padding: 1.5rem;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 1rem;
  background: var(--card-bg, rgba(255, 255, 255, 0.7));
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
}

.library-meta {
  font-size: 0.9rem;
  color: var(--text-color-secondary, #666);
}

details {
  margin-top: 1rem;
  background: rgba(79, 70, 229, 0.08);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
}

details[open] {
  border: 1px solid rgba(79, 70, 229, 0.2);
}

details summary {
  cursor: pointer;
  font-weight: 600;
}
</style>
