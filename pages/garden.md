---
layout: page
permalink: /garden/
title: "Digital Garden"
subtitle: "Interlinked notes exploring strategy, systems, and frontier tech"
lede: "A graph of working notes—expect half-built ideas, operator checklists, and connective tissue between research domains."
---

{% assign notes_collection = site.notes %}
{% if notes_collection and notes_collection != empty %}
  {% assign notes = notes_collection | sort: 'title' %}
  {% assign tag_buffer = '' %}
  {% for note in notes %}
    {% if note.tags %}
      {% for tag in note.tags %}
        {% capture tag_buffer %}{{ tag_buffer }}{{ tag }}|{% endcapture %}
      {% endfor %}
    {% endif %}
  {% endfor %}
  {% assign tag_array = tag_buffer | split: '|' | compact %}
  {% assign tag_array = tag_array | where_exp: 'item', 'item != ""' %}
  {% assign unique_tags = tag_array | uniq %}

  <section class="garden-tags" aria-label="Tag cloud">
    <h2>Tag Cloud</h2>
    {% if unique_tags.size > 0 %}
      <ul>
        {% for tag in unique_tags %}
          {% assign count = 0 %}
          {% for entry in tag_array %}
            {% if entry == tag %}
              {% assign count = count | plus: 1 %}
            {% endif %}
          {% endfor %}
          <li><span>{{ tag }}</span><strong>{{ count }}</strong></li>
        {% endfor %}
      </ul>
    {% else %}
      <p class="empty-state">Tags will appear once notes include them.</p>
    {% endif %}
  </section>

  <section class="garden-notes" aria-label="Garden notes">
    {% for note in notes %}
      {% assign backlinks = notes_collection | where_exp: 'candidate', 'candidate.links contains note.slug' %}
      <article>
        <h3><a href="{{ note.url }}">{{ note.title }}</a></h3>
        {% if note.summary %}
          <p>{{ note.summary }}</p>
        {% else %}
          <p>{{ note.excerpt | strip_html | truncate: 180 }}</p>
        {% endif %}
        {% if note.links and note.links != empty %}
          <p class="garden-links"><strong>Outbound:</strong>
            {% for link in note.links %}
              {% assign target = site.notes | where: 'slug', link | first %}
              {% if target %}
                <a href="{{ target.url }}">{{ target.title }}</a>{% unless forloop.last %}, {% endunless %}
              {% else %}
                {{ link }}{% unless forloop.last %}, {% endunless %}
              {% endif %}
            {% endfor %}
          </p>
        {% endif %}
        {% if backlinks and backlinks != empty %}
          <p class="garden-links"><strong>Backlinks:</strong>
            {% for back in backlinks %}
              <a href="{{ back.url }}">{{ back.title }}</a>{% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </p>
        {% endif %}
        {% if note.tags and note.tags.size > 0 %}
          <p class="garden-tags-inline">
            {% for tag in note.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </p>
        {% endif %}
      </article>
    {% endfor %}
  </section>
{% else %}
  <p class="empty-state">No garden notes yet. The knowledge graph is sprouting soon.</p>
{% endif %}

<style>
.garden-tags {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 1rem;
  background: var(--card-bg, rgba(255, 255, 255, 0.7));
}

.garden-tags ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.garden-tags li {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.12);
  color: #1d4ed8;
  font-weight: 600;
}

.garden-notes {
  display: grid;
  gap: 2rem;
}

.garden-notes article {
  padding: 1.5rem;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 1rem;
  background: var(--card-bg, rgba(255, 255, 255, 0.7));
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.garden-links {
  margin: 0.75rem 0 0;
}

.garden-tags-inline {
  margin: 1rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.garden-tags-inline span {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
  font-size: 0.85rem;
}
</style>
