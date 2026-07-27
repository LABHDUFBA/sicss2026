(() => {
  'use strict';

  const deck = document.querySelector('#deck');
  const overview = document.querySelector('#overview');
  const counter = document.querySelector('#counter');
  const progress = document.querySelector('#progressBar');
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const STORAGE_KEY = 'sicss2026-current-slide';
  let current = 0;

  const pad = n => String(n).padStart(2, '0');

  function slideTemplate(slide, index) {
    return `
      <article class="slide ${slide.className || ''}" id="${slide.id}" data-index="${index}" data-source="${slide.source || 'SICSS 2026'}" aria-label="Slide ${index + 1}: ${slide.title}">
        <div class="slide-grid" aria-hidden="true"></div>
        <header class="slide-head">
          <p class="eyebrow">${slide.kicker || ''}</p>
          <p class="source-tag">${slide.source || ''}</p>
        </header>
        <div class="slide-body">${slide.html}</div>
        <footer class="slide-foot">
          <span>SICSS Brasil · 28 jul 2026</span>
          <span class="section-name">${slide.section || ''}</span>
          <span>${pad(index + 1)} / ${pad(window.SLIDES.length)}</span>
        </footer>
      </article>`;
  }

  function render() {
    deck.innerHTML = window.SLIDES.map(slideTemplate).join('');
    overview.innerHTML = window.SLIDES.map((slide, i) => `
      <button class="overview-item" type="button" data-go="${i}">
        <span>${pad(i + 1)}</span><b>${slide.title}</b>
      </button>`).join('');
    overview.addEventListener('click', event => {
      const item = event.target.closest('[data-go]');
      if (!item) return;
      overview.hidden = true;
      go(Number(item.dataset.go));
    });
  }

  function getInitial() {
    const hash = Number(location.hash.replace('#slide-', ''));
    if (Number.isInteger(hash) && hash >= 1 && hash <= window.SLIDES.length) return hash - 1;
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isInteger(saved) && saved >= 0 && saved < window.SLIDES.length ? saved : 0;
  }

  function go(index, updateHash = true) {
    current = Math.max(0, Math.min(index, window.SLIDES.length - 1));
    document.querySelectorAll('.slide').forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });
    counter.textContent = `${pad(current + 1)} / ${pad(window.SLIDES.length)}`;
    progress.style.width = `${((current + 1) / window.SLIDES.length) * 100}%`;
    prev.disabled = current === 0;
    next.disabled = current === window.SLIDES.length - 1;
    localStorage.setItem(STORAGE_KEY, String(current));
    if (updateHash) history.replaceState(null, '', `#slide-${current + 1}`);
  }

  function toggleOverview() {
    overview.hidden = !overview.hidden;
    if (!overview.hidden) overview.querySelector(`[data-go="${current}"]`)?.focus();
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }

  prev.addEventListener('click', () => go(current - 1));
  next.addEventListener('click', () => go(current + 1));
  window.addEventListener('hashchange', () => go(getInitial(), false));
  window.addEventListener('keydown', event => {
    if (!overview.hidden && event.key === 'Escape') { overview.hidden = true; return; }
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); go(current + 1); }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); go(current - 1); }
    if (event.key === 'Home') go(0);
    if (event.key === 'End') go(window.SLIDES.length - 1);
    if (event.key.toLowerCase() === 'f') toggleFullscreen();
    if (event.key.toLowerCase() === 'o' || event.key === 'Escape') toggleOverview();
  });

  render();
  go(getInitial(), false);
})();
