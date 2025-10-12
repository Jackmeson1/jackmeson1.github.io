---
layout: page
title: Archive
permalink: /archive/
description: "Browse every publication with quick jump links by category and year."
---

<p class="text-muted">{{ site.posts | size }} posts in total</p>

<nav class="chip-group" aria-label="Filter by category">
  <a class="chip" href="#all">All</a>
  {% assign sorted_categories = site.categories | sort %}
  {% for category in sorted_categories %}
    {% assign name = category[0] %}
    <a class="chip" href="#{{ name | slugify }}">{{ name | replace: '-', ' ' | capitalize }}</a>
  {% endfor %}
</nav>

<section id="all" class="stack gap-2 mt-4">
  {% assign posts = site.posts | sort: 'date' | reverse %}
  {% for p in posts %}
    <article class="surface-card stack gap-1 p-3">
      <h3 class="m-0"><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>
      <p class="text-xs text-muted">{{ p.date | date: "%Y-%m-%d" }} · {{ p.categories | join: ', ' }}</p>
      {% if p.description %}
        <p class="text-sm text-muted">{{ p.description }}</p>
      {% else %}
        <p class="text-sm text-muted">{{ p.excerpt | strip_html | truncate: 160 }}</p>
      {% endif %}
    </article>
  {% endfor %}
</section>

{% for category in sorted_categories %}
  {% assign name = category[0] %}
  {% assign entries = category[1] | sort: 'date' | reverse %}
  <section id="{{ name | slugify }}" class="stack gap-2 mt-6">
    <h2>{{ name | replace: '-', ' ' | capitalize }}</h2>
    {% for p in entries %}
      <article class="surface-card stack gap-1 p-3">
        <h3 class="m-0"><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>
        <p class="text-xs text-muted">{{ p.date | date: "%Y-%m-%d" }}</p>
        {% if p.description %}
          <p class="text-sm text-muted">{{ p.description }}</p>
        {% else %}
          <p class="text-sm text-muted">{{ p.excerpt | strip_html | truncate: 160 }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </section>
{% endfor %}
