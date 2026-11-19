// Smooth scroll (Lenis).
// - Désactivé si prefers-reduced-motion → scroll natif.
// - Ancres (#contact…) gérées par Lenis avec un décalage = hauteur du header sticky.
// - Étape 4 : on branchera Lenis sur gsap.ticker + ScrollTrigger
//   (lenis.on('scroll', ScrollTrigger.update), gsap.ticker.add(...), lagSmoothing(0)).
import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function headerOffset() {
  const header = document.querySelector('[data-header]');
  return header ? -header.offsetHeight - 8 : 0;
}

export let lenis = null;

export function initLenis() {
  if (reduceMotion.matches) return null;

  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    // le doigt garde le scroll natif sur mobile (plus fiable, moins de JS)
    syncTouch: false,
    anchors: { offset: headerOffset() },
  });

  // Boucle rAF native — sera remplacée par gsap.ticker à l'étape 4
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Si l'utilisateur active « réduire les animations » en cours de route
  reduceMotion.addEventListener('change', (e) => {
    if (e.matches && lenis) {
      lenis.destroy();
      lenis = null;
    }
  });

  return lenis;
}

export function stopScroll() {
  lenis?.stop();
  document.documentElement.classList.add('menu-open');
}

export function startScroll() {
  lenis?.start();
  document.documentElement.classList.remove('menu-open');
}
