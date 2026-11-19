// Carrousels mobiles en CSS scroll-snap (pas de Swiper).
// JS = amélioration progressive uniquement :
// - points (indicateurs) synchronisés avec le scroll via IntersectionObserver ;
// - clic / Entrée sur un point → la carte correspondante ;
// - tabindex du track retiré quand il n'y a rien à faire défiler (desktop).
// Sans JS : le scroll tactile, la molette et les flèches du clavier (track focusable) marchent.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function setupCarousel(root) {
  const track = root.querySelector('ul');
  const dotsBox = root.querySelector('[data-dots]');
  if (!track || !dotsBox) return;

  const cards = [...track.children];
  const total = cards.length;

  const dots = cards.map((card, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'carousel-dots__dot';
    b.setAttribute('aria-label', `Carte ${i + 1} sur ${total}`);
    b.addEventListener('click', () => {
      card.scrollIntoView({
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    });
    dotsBox.append(b);
    return b;
  });

  let current = -1;
  const setActive = (i) => {
    if (i === current) return;
    current = i;
    dots.forEach((d, k) => d.toggleAttribute('aria-current', k === i));
  };
  setActive(0);

  // Carte la plus visible dans le track = point actif
  const ratios = new Map();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => ratios.set(e.target, e.intersectionRatio));
      let best = 0;
      let bestRatio = -1;
      cards.forEach((c, i) => {
        const r = ratios.get(c) ?? 0;
        if (r > bestRatio + 0.01) {
          best = i;
          bestRatio = r;
        }
      });
      setActive(best);
    },
    { root: track, threshold: [0, 0.25, 0.5, 0.75, 1] },
  );
  cards.forEach((c) => io.observe(c));

  // Rien à faire défiler (grille desktop, ou tout tient à l'écran) :
  // pas de tab stop inutile, pas de points
  const update = () => {
    const scrollable = track.scrollWidth > track.clientWidth + 4;
    if (scrollable) track.setAttribute('tabindex', '0');
    else track.removeAttribute('tabindex');
    dotsBox.hidden = !scrollable;
  };
  new ResizeObserver(update).observe(track);
  update();
}

export function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(setupCarousel);
}
