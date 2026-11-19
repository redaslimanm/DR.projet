// Apparition au scroll (fade-up) : IntersectionObserver + transitions CSS.
// Beaucoup plus léger que des dizaines de ScrollTrigger (pas de lecture de
// layout au chargement), et n'utilise que opacity/transform : les éléments
// restent dans l'arbre d'accessibilité (titres trouvables au lecteur d'écran).
// Actif seulement si html.anim (JS ok + pas de prefers-reduced-motion).

export function initReveal(selector, { exclude = '', step = 0.07, maxDelay = 0.35 } = {}) {
  if (!document.documentElement.classList.contains('anim')) return;
  const els = [...document.querySelectorAll(selector)].filter((el) => !(exclude && el.closest(exclude)));
  if (!els.length) return;

  // Décalage en cascade entre éléments frères (cartes d'une même grille…)
  const counters = new Map();
  for (const el of els) {
    const n = counters.get(el.parentElement) ?? 0;
    counters.set(el.parentElement, n + 1);
    el.style.setProperty('--reveal-delay', `${Math.min(n * step, maxDelay)}s`);
    el.classList.add('reveal');
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
}
