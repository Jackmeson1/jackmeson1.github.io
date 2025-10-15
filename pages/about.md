---
layout: page
permalink: /about/
title: "About Jiajun"
excerpt: "QA engineer and systems thinker using AI copilots to explore markets, energy, and infrastructure."
---

{% include page-author.html %}

{% capture about_content %}
{% include about-content.md %}
{% endcapture %}
{{ about_content | markdownify }}
