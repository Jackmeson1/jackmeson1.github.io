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

<section id="backlog" class="surface-card stack gap-3 p-4 mt-8">
  <div class="stack gap-1">
    <h2 class="m-0">Writing Backlog</h2>
    <p class="text-sm text-muted">Topics surfaced from recent conversations that would broaden coverage across finance, technology, travel, and systems thinking.</p>
  </div>

  <div class="stack gap-2">
    <div class="stack gap-1">
      <h3 class="m-0">Finance</h3>
      <ul class="text-sm m-0">
        <li><strong>Options Strategies for AI/Semiconductor Volatility</strong> &mdash; Walk through ZEBRA and call spread constructions, illustrate why they fit NVDA/AMD volatility regimes, and show Kelly-informed risk controls.</li>
        <li><strong>Why I'm Long AI Infrastructure</strong> &mdash; Document the thesis for NVDA, AMD, and MSFT across supply chains, geopolitics, and capital allocation.</li>
        <li><strong>Markets as Physical Systems</strong> &mdash; Apply information theory, entropy, and L&eacute;vy processes to explain where classical efficient market assumptions break.</li>
      </ul>
    </div>

    <div class="stack gap-1">
      <h3 class="m-0">Tech</h3>
      <ul class="text-sm m-0">
        <li><strong>Debugging Kerberos AES256 Keytab Salt Issues</strong> &mdash; Recount the Fortinet incident response, from packet captures to the long-term fix.</li>
        <li><strong>Building a Scalable Auth Testing Framework</strong> &mdash; Share how Ansible, PyTest, and GitLab CI handled 5k user / 20k group scenarios.</li>
        <li><strong>Testing HTTP/2 and HTTP/3 in Production</strong> &mdash; Detail the ALPN session reuse bug, Chrome behaviour, and the shipped workaround.</li>
      </ul>
    </div>

    <div class="stack gap-1">
      <h3 class="m-0">Travel</h3>
      <ul class="text-sm m-0">
        <li><strong>Digital Nomad Gear for Deep Work</strong> &mdash; Outline minimalist packing heuristics and how routines transfer across cities.</li>
        <li><strong>Vancouver Cost of Living Breakdown</strong> &mdash; Publish real numbers on rent, food, transport, and discretionary spending.</li>
        <li><strong>Planning a Slow Month in Otaru</strong> &mdash; Log the research process, budget scaffolding, and expectations ahead of the trip.</li>
      </ul>
    </div>

    <div class="stack gap-1">
      <h3 class="m-0">Mind</h3>
      <ul class="text-sm m-0">
        <li><strong>Meditation for Engineers</strong> &mdash; Explain how mindfulness practices improve code review focus and decision-making.</li>
        <li><strong>Learning Across Disciplines</strong> &mdash; Compare QA, quant research, and travel systems to codify cross-domain mental models.</li>
        <li><strong>Sabbatical One-Year Retrospective</strong> &mdash; Reflect honestly on goals, finances, and mental health after a year away from full-time work.</li>
      </ul>
    </div>

    <div class="stack gap-1">
      <h3 class="m-0">Systems Thinking</h3>
      <ul class="text-sm m-0">
        <li><strong>Applying the Kelly Criterion Beyond Markets</strong> &mdash; Translate Kelly sizing into frameworks for career bets, learning focus, and time allocation.</li>
      </ul>
    </div>
  </div>
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
