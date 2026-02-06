(() => {
  const chipContainer = document.querySelector('[data-category-chips]');
  const posts = Array.from(document.querySelectorAll('.post-item'));

  if (!chipContainer || posts.length === 0) {
    return;
  }

  chipContainer.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-category]');
    if (!button) {
      return;
    }

    const category = button.getAttribute('data-category');

    chipContainer.querySelectorAll('button').forEach((btn) => {
      btn.classList.remove('is-active');
    });
    button.classList.add('is-active');

    posts.forEach((post) => {
      const categories = post.getAttribute('data-categories') || '';
      const shouldShow = category === 'all' || categories.split(' ').includes(category);
      post.classList.toggle('is-hidden', !shouldShow);
    });
  });
})();
