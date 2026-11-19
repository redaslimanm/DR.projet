// Pages intérieures : fade-up simple au scroll (plan d'animations : « Autres »).
// L'en-tête de page (hero) n'est jamais animé → LCP intact. Sans GSAP :
// IntersectionObserver + CSS (voir src/js/reveal.js).
import { initReveal } from '../reveal.js';

const TARGETS = [
  '.section-head', '.group-title', '.card-grid > li', '.equip-row', '.timeline li', '.gallery-page li',
  '.faq__item', '.svc-section h2', '.svc-text', '.sign-card', '.step', '.doctor-box', '.cta-box',
  '.related li', '.prose > *', '.contact-item', '.hours-card', '.about__media', '.about__content > *',
].join(', ');

export function initPageAnimations() {
  initReveal(TARGETS, { exclude: '.page-hero, .svc-hero' });
}
