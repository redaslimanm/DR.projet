// Carte Google Maps chargée au clic (voir src/partials/map.js)
export function initMaps() {
  document.querySelectorAll('[data-map-embed]').forEach((box) => {
    const btn = box.querySelector('.map-embed__btn');
    btn.hidden = false; // le bouton n'a de sens qu'avec JS
    btn.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = box.dataset.mapEmbed;
      iframe.title = box.dataset.mapTitle;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.allowFullscreen = true;
      box.classList.add('is-loaded');
      box.replaceChildren(iframe);
      iframe.focus({ preventScroll: true });
    });
  });
}
