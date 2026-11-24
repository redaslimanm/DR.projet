// Carrousel des avis patients — contrôlé uniquement par l'utilisateur (aucun
// défilement automatique, aucune boucle). La bande défile nativement (scroll-snap :
// doigt, molette / trackpad) ; ce script ajoute :
//   - flèches ‹ › : une carte à la fois, atténuées et désactivées au début / à la fin ;
//   - points de pagination cliquables, mis à jour pendant le défilement ;
//   - flèches du clavier quand la bande a le focus ;
//   - sens inversé en RTL (pages AR).
// Sans JS : bande défilante seule (flèches masquées, pas de points).
export function initReviews(root) {
  const track = root.querySelector('[data-reviews-track]');
  const nav = root.querySelector('[data-reviews-nav]');
  const prev = root.querySelector('[data-reviews-prev]');
  const next = root.querySelector('[data-reviews-next]');
  const dotsBox = root.querySelector('[data-reviews-dots]');
  const cards = [...track.children];
  if (!cards.length) return;

  const rtl = getComputedStyle(track).direction === 'rtl';
  const sign = rtl ? -1 : 1; // en RTL, scrollLeft est négatif (Chrome, Firefox, Safari)
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const behavior = () => (reduce.matches ? 'auto' : 'smooth');

  // Pas entre deux cartes (largeur + espacement), position et défilement maximal
  const step = () =>
    cards[1] ? Math.abs(cards[1].offsetLeft - cards[0].offsetLeft) : cards[0].offsetWidth;
  const pos = () => Math.abs(track.scrollLeft);
  const max = () => Math.max(0, track.scrollWidth - track.clientWidth);
  // Nombre de positions d'arrêt : la dernière correspond à la fin de la bande
  const stops = () => (max() <= 2 ? 1 : Math.ceil(max() / step() - 0.05) + 1);
  const index = () => (pos() >= max() - 2 ? stops() - 1 : Math.round(pos() / step()));
  const goTo = (i) => {
    const n = Math.min(Math.max(i, 0), stops() - 1);
    track.scrollTo({ left: sign * Math.min(n * step(), max()), behavior: behavior() });
  };

  let dots = [];
  const buildDots = () => {
    const n = stops();
    if (n === dots.length) return;
    dotsBox.replaceChildren();
    dots = Array.from({ length: n }, (_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'reviews-dot';
      b.setAttribute('aria-label', dotsBox.dataset.dotLabel.replace('{n}', i + 1));
      b.addEventListener('click', () => goTo(i));
      dotsBox.append(b);
      return b;
    });
    dotsBox.hidden = n < 2;
  };

  const update = () => {
    const i = index();
    dots.forEach((d, k) => d.toggleAttribute('aria-current', k === i));
    prev.disabled = pos() <= 2;
    next.disabled = pos() >= max() - 2;
    nav.hidden = max() <= 2; // tout tient à l'écran : pas de flèches
  };

  let raf = 0;
  const schedule = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(update);
  };

  prev.addEventListener('click', () => goTo(index() - 1));
  next.addEventListener('click', () => goTo(index() + 1));
  track.addEventListener('scroll', schedule, { passive: true });
  track.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const forward = (e.key === 'ArrowRight') !== rtl; // en RTL, ← avance
    goTo(index() + (forward ? 1 : -1));
  });
  new ResizeObserver(() => {
    buildDots();
    schedule();
  }).observe(track);

  nav.hidden = false;
  buildDots();
  update();
}
