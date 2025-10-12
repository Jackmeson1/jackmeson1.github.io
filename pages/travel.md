---
layout: page
permalink: /travel/
title: "Travel Atlas"
subtitle: "Mapping research residencies and fieldwork routes"
lede: "A living log of the cities and communities that shape my research practice."
---

{% assign places_data = site.data.places %}
{% assign places_sorted = nil %}
{% assign leg_count = 0 %}
{% assign country_count = 0 %}
{% assign city_count = 0 %}
{% if places_data and places_data != empty %}
  {% assign places_sorted = places_data | sort: 'sequence' %}
  {% assign country_array = places_sorted | map: 'country' | compact | uniq %}
  {% assign city_array = places_sorted | map: 'city' | compact | uniq %}
  {% assign country_count = country_array | size %}
  {% assign city_count = city_array | size %}
  {% if places_sorted.size > 1 %}
    {% assign leg_count = places_sorted.size | minus: 1 %}
  {% endif %}
{% endif %}

<section class="travel-stats" aria-label="Travel summary statistics">
  <div>
    <h3>{{ country_count }}</h3>
    <p>Countries</p>
  </div>
  <div>
    <h3>{{ city_count }}</h3>
    <p>Cities</p>
  </div>
  <div>
    <h3>{{ leg_count }}</h3>
    <p>Travel legs</p>
  </div>
</section>

<div id="travel-map" aria-label="Travel map"></div>

{% if places_sorted and places_sorted != empty %}
<section class="travel-itinerary" aria-label="Recent fieldwork stops">
  <h2>Field Notes</h2>
  <ol>
    {% for place in places_sorted %}
      <li>
        <h3>{{ place.city }}, {{ place.country }}</h3>
        {% if place.years %}<p class="travel-meta">{{ place.years }}</p>{% endif %}
        {% if place.summary %}<p>{{ place.summary }}</p>{% endif %}
        {% if place.highlights and place.highlights.size > 0 %}
          <ul>
            {% for highlight in place.highlights %}
              <li>{{ highlight }}</li>
            {% endfor %}
          </ul>
        {% endif %}
        {% if place.tags and place.tags.size > 0 %}
          <p class="travel-tags">
            {% for tag in place.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </p>
        {% endif %}
      </li>
    {% endfor %}
  </ol>
</section>
{% else %}
  <p class="empty-state">Travel logs are being compiled. Check back soon for new coordinates.</p>
{% endif %}

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var places = {{ places_sorted | jsonify }};
    if (!Array.isArray(places)) {
      places = [];
    }
    var map = L.map('travel-map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if (places.length === 0) {
      map.setView([0, 0], 2);
      return;
    }

    var bounds = [];
    places.forEach(function (place) {
      if (place.lat && place.lng) {
        var marker = L.marker([place.lat, place.lng]).addTo(map);
        var popup = '<strong>' + place.city + ', ' + place.country + '</strong>';
        if (place.summary) {
          popup += '<p>' + place.summary + '</p>';
        }
        marker.bindPopup(popup);
        bounds.push([place.lat, place.lng]);
      }
    });

    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [40, 40] });
    } else {
      map.setView([0, 0], 2);
    }
  });
</script>

<style>
.travel-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.travel-stats div {
  padding: 1.5rem;
  text-align: center;
  border-radius: 1rem;
  background: rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.2);
}

.travel-stats h3 {
  margin: 0;
  font-size: 2.25rem;
}

#travel-map {
  height: 420px;
  border-radius: 1rem;
  border: 1px solid var(--border-color, #e5e7eb);
  margin-bottom: 3rem;
  overflow: hidden;
}

.travel-itinerary ol {
  margin: 0;
  padding-left: 1.25rem;
  display: grid;
  gap: 1.5rem;
}

.travel-itinerary li {
  padding: 1.25rem;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 0.75rem;
  background: var(--card-bg, rgba(255, 255, 255, 0.7));
}

.travel-meta {
  font-size: 0.9rem;
  color: var(--text-color-secondary, #666);
}

.travel-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0 0;
}

.travel-tags span {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(15, 118, 110, 0.1);
  color: #0f766e;
  font-size: 0.85rem;
}
</style>
