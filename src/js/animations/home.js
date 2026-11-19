// Animations de l'accueil (plan d'animations de CLAUDE.md).
// - Chargé seulement si html.anim (JS ok + pas de prefers-reduced-motion).
// - gsap.matchMedia : tout est annulé proprement si le média change
//   (passage mobile ↔ desktop, ou « réduire les animations » activé).
// - Mobile : distances plus courtes, pas de parallax ni de section pinnée.
import { gsap, ScrollTrigger, dirX } from '../motion.js';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const DESKTOP = '(min-width: 64em)';
const MOBILE = '(max-width: 63.99em)';
const REDUCE = '(prefers-reduced-motion: reduce)';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------------------------------------------------------
   Hero : H1 ligne par ligne + cercle doré (photo : zoom CSS)
   --------------------------------------------------------- */
function heroIntro(delay) {
  const hero = $('.hero');
  if (!hero) return;

  const title = $('.hero__title', hero);
  const others = $$('.hero__content > :not(.hero__title)', hero);
  const circle = $('.hero__circle', hero);

  gsap.set(title, { autoAlpha: 1 });
  SplitText.create(title, {
    type: 'lines',
    mask: 'lines',
    linesClass: 'split-line',
    autoSplit: true, // re-découpe si la police change ou si la largeur change
    onSplit: (self) =>
      gsap.from(self.lines, { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.12, delay }),
  });

  gsap
    .timeline({ delay, defaults: { ease: 'power3.out', duration: 0.8 } })
    .fromTo(others, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, 0.25)
    // La photo (LCP) n'est jamais masquée : son zoom est en CSS (motion.css)
    .fromTo(circle, { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 1.2 }, 0.3);
}

/* ---------------------------------------------------------
   Apparition simple au scroll (fade-up), par lots
   --------------------------------------------------------- */
function fadeUp(targets, { y = 32, stagger = 0.08, start = 'top 88%' } = {}) {
  const els = typeof targets === 'string' ? $$(targets) : targets;
  if (!els.length) return;
  gsap.set(els, { autoAlpha: 0, y });
  ScrollTrigger.batch(els, {
    start,
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger, overwrite: true }),
  });
}

/* ---------------------------------------------------------
   Bande de confiance : compteur 0 → 12
   --------------------------------------------------------- */
function trustCounter() {
  const num = $('.trust__number');
  if (!num) return;
  const end = parseInt(num.textContent, 10);
  const counter = { v: 0 };
  num.textContent = '0';
  gsap.to(counter, {
    v: end,
    duration: 1.6,
    ease: 'power2.out',
    snap: { v: 1 },
    onUpdate: () => (num.textContent = String(counter.v)),
    scrollTrigger: { trigger: '.trust', start: 'top bottom', once: true },
  });
  fadeUp('.trust__item', { y: 16, stagger: 0.1, start: 'top 95%' });
  // si le contexte est annulé, on remet la vraie valeur
  return () => (num.textContent = String(end));
}

/* ---------------------------------------------------------
   À propos : parallax léger + diplômes ligne par ligne
   --------------------------------------------------------- */
function about(isDesktop) {
  const img = $('.about__photo img');
  if (img) {
    const amount = isDesktop ? 7 : 3;
    gsap.fromTo(
      img,
      { yPercent: -amount, scale: 1 + amount / 50 },
      {
        yPercent: amount,
        ease: 'none',
        scrollTrigger: { trigger: '.about__media', start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  }

  const items = $$('.about .check-list li');
  gsap.set(items, { autoAlpha: 0, x: -24 * dirX() });
  gsap.to(items, {
    autoAlpha: 1,
    x: 0,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '.about .check-list', start: 'top 85%', once: true },
  });
  fadeUp($$('.about__content > :not(.check-list)'), { y: 24 });
}

/* ---------------------------------------------------------
   Plateau technique : section pinnée + défilement horizontal (desktop)
   --------------------------------------------------------- */
function equipmentPinned() {
  const section = $('#equipements');
  const track = $('.equip-track', section);
  if (!section || !track) return;

  section.classList.add('equip-pin-wrap');
  track.classList.add('is-pinned');

  const frame = track.parentElement;
  const distance = () => {
    const style = getComputedStyle(frame);
    const inner = frame.clientWidth - parseFloat(style.paddingInlineStart) - parseFloat(style.paddingInlineEnd);
    return Math.max(0, track.scrollWidth - inner);
  };

  gsap.to(track, {
    x: () => -distance() * dirX(),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  return () => {
    section.classList.remove('equip-pin-wrap');
    track.classList.remove('is-pinned');
  };
}

/* ---------------------------------------------------------
   Le cabinet : reveal des photos en clip-path
   --------------------------------------------------------- */
function gallery() {
  const items = $$('.gallery__item');
  if (!items.length) return;
  gsap
    .timeline({ scrollTrigger: { trigger: '.gallery', start: 'top 80%', once: true } })
    .fromTo(
      items,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'expo.inOut', stagger: 0.12, clearProps: 'clipPath' },
    )
    .fromTo(
      items.map((el) => $('img', el)),
      { scale: 1.2 },
      { scale: 1, duration: 1.4, ease: 'expo.out', stagger: 0.12 },
      0.15,
    );
}

/* ---------------------------------------------------------
   Citation : les mots s'éclairent au scroll
   --------------------------------------------------------- */
function quote() {
  const text = $('.quote blockquote p');
  if (!text) return;
  SplitText.create(text, {
    type: 'words',
    wordsClass: 'word',
    autoSplit: true,
    onSplit: (self) =>
      gsap.fromTo(
        self.words,
        { opacity: 0.15 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: { trigger: '.quote', start: 'top 75%', end: 'bottom 60%', scrub: true },
        },
      ),
  });
  fadeUp('.quote__icon, .quote figcaption', { y: 12, start: 'top 85%' });
}

/* ---------------------------------------------------------
   Point d'entrée
   --------------------------------------------------------- */
export function initHomeAnimations() {
  // Pas de preloader : le hero démarre tout de suite
  const heroDelay = () => 0;

  // On attend les polices (max 300 ms) pour découper le H1 sur les bonnes lignes
  // (autoSplit re-découpe de toute façon si elles arrivent plus tard)
  const fontsReady = Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 300))]);
  fontsReady.then(() => heroIntro(heroDelay()));

  const mm = gsap.matchMedia();
  mm.add({ isDesktop: DESKTOP, isMobile: MOBILE, reduce: REDUCE }, (ctx) => {
    const { isDesktop, reduce } = ctx.conditions;
    if (reduce) return;

    const cleanups = [];
    const y = isDesktop ? 40 : 24;

    cleanups.push(trustCounter());

    fadeUp('.section-head', { y });
    fadeUp('.services-grid > li', { y, stagger: 0.08 });
    fadeUp('#services .btn--block', { y: 16 });

    about(isDesktop);

    if (isDesktop) cleanups.push(equipmentPinned());
    else fadeUp('.equip-card', { y: 0, stagger: 0.1 });

    gallery();
    quote();

    fadeUp('.review-card', { y, stagger: 0.1 });
    fadeUp('.info-card, .faq__item', { y: y / 2, stagger: 0.06 });
    fadeUp('.contact-item, .contact__map > *', { y: y / 2, stagger: 0.08 });

    return () => cleanups.forEach((fn) => fn?.());
  });

  // Les images lazy peuvent changer la hauteur de la page → recalcul
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
