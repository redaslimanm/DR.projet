// Pages intérieures : fade-up simple au scroll (plan d'animations : « Autres »).
// L'en-tête de page (hero) n'est jamais animé → LCP intact.
import { gsap, ScrollTrigger } from '../motion.js';

const TARGETS = [
  '.section-head', '.group-title', '.card-grid > li', '.equip-row', '.timeline li', '.gallery-page li',
  '.faq__item', '.svc-section h2', '.svc-text', '.sign-card', '.step', '.doctor-box', '.cta-box',
  '.related li', '.prose > *', '.contact-item', '.hours-card', '.about__media', '.about__content > *',
].join(', ');

export function initPageAnimations() {
  const mm = gsap.matchMedia();
  mm.add({ isDesktop: '(min-width: 64em)', reduce: '(prefers-reduced-motion: reduce)' }, ({ conditions }) => {
    if (conditions.reduce) return;
    const els = gsap.utils.toArray(TARGETS).filter((el) => !el.closest('.page-hero, .svc-hero'));
    const y = conditions.isDesktop ? 32 : 20;
    gsap.set(els, { autoAlpha: 0, y });
    ScrollTrigger.batch(els, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06, overwrite: true }),
    });
  });
}
