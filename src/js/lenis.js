// Smooth scroll (Lenis), synchronisé avec GSAP / ScrollTrigger.
// - Désactivé si prefers-reduced-motion → scroll natif.
// - Ancres (#contact…) gérées par Lenis avec un décalage = hauteur du header sticky.
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion, reduceMotionQuery } from './motion.js';

function headerOffset() {
  const header = document.querySelector('[data-header]');
  return header ? -header.offsetHeight - 8 : 0;
}

export let lenis = null;

const raf = (time) => lenis?.raf(time * 1000);

export function initLenis() {
  if (prefersReducedMotion()) return null;
  // Écrans tactiles : scroll natif (plus fluide et sans coût CPU) ; Lenis = souris/trackpad
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return null;

  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    // le doigt garde le scroll natif sur mobile (plus fiable, moins de JS)
    syncTouch: false,
    anchors: { offset: headerOffset() },
  });

  // Intégration Lenis + ScrollTrigger (cf. CLAUDE.md)
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  // « Réduire les animations » activé en cours de route → scroll natif
  window.matchMedia(reduceMotionQuery).addEventListener('change', (e) => {
    if (e.matches && lenis) {
      gsap.ticker.remove(raf);
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
