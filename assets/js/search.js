(function () {
  const searchInput = document.querySelector('[data-search-input]');
  const resultsContainer = document.querySelector('[data-search-results]');
  if (!searchInput || !resultsContainer) return;

  let index;
  let documents = [];

  const renderResults = (items) => {
    resultsContainer.innerHTML = '';
    if (!items.length) {
      resultsContainer.innerHTML = '<p class="text-muted">No matches yet. Try a different keyword.</p>';
      return;
    }

    const fragment = document.createDocumentFragment();
    items.slice(0, 8).forEach((item) => {
      const doc = documents[item.ref];
      if (!doc) return;
      const article = document.createElement('article');
      article.className = 'post-card surface-card';
      article.innerHTML = `
        <a class="post-card__link" href="${doc.url}">
          <div class="post-card__meta flex align-center gap-1 text-xs text-muted">
            <time datetime="${doc.date}">${doc.date_formatted || doc.date}</time>
            ${doc.categories ? `<span class="chip chip-muted">${doc.categories}</span>` : ''}
          </div>
          <h3 class="post-card__title">${doc.title}</h3>
          <p class="post-card__excerpt text-muted">${doc.excerpt}</p>
        </a>`;
      fragment.appendChild(article);
    });
    resultsContainer.appendChild(fragment);
  };

  const ensureIndex = async () => {
    if (index) return index;
    try {
      const response = await fetch('/search.json');
      if (!response.ok) throw new Error('Network response was not ok');
      documents = await response.json();
      index = lunr(function () {
        this.ref('id');
        this.field('title');
        this.field('excerpt');
        this.field('content');
        documents.forEach((doc, idx) => {
          doc.id = idx;
          this.add(doc);
        });
      });
      return index;
    } catch (error) {
      console.error('Search initialisation failed', error);
      resultsContainer.innerHTML = '<p class="text-muted">Search is currently unavailable.</p>';
      throw error;
    }
  };

  const handleInput = async (event) => {
    const term = event.target.value.trim();
    if (!term) {
      resultsContainer.innerHTML = '';
      return;
    }
    const idx = await ensureIndex();
    const matches = idx.search(term + '*');
    renderResults(matches);
  };

  searchInput.addEventListener('input', handleInput, { passive: true });
})();
