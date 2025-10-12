(function () {
  const mapContainer = document.querySelector('[data-map]');
  if (!mapContainer) return;

  const leafletCdn = {
    css: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    js: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
  };

  const loadStylesheet = (href) => {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`link[href="${href}"]`);
      if (existing) return resolve();
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  };

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.addEventListener('load', resolve, { once: true });
        if (window.L) return resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const initialiseMap = () => {
    if (!window.L) return;
    const lat = parseFloat(mapContainer.dataset.lat) || 31.2304;
    const lng = parseFloat(mapContainer.dataset.lng) || 121.4737;
    const zoom = parseInt(mapContainer.dataset.zoom || '11', 10);
    const map = L.map(mapContainer).setView([lat, lng], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const markerText = mapContainer.dataset.marker;
    if (markerText) {
      L.marker([lat, lng]).addTo(map).bindPopup(markerText);
    }
  };

  const setup = async () => {
    try {
      await Promise.all([loadStylesheet(leafletCdn.css), loadScript(leafletCdn.js)]);
      initialiseMap();
    } catch (error) {
      console.error('Map failed to load', error);
      mapContainer.innerHTML = '<p class="text-muted">Map failed to load. Please try again later.</p>';
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        setup();
      }
    });
  }, {
    rootMargin: '150px'
  });

  observer.observe(mapContainer);
})();
