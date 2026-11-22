// Animations de l'accueil (plan d'animations de CLAUDE.md).
// - Chargé seulement si html.anim (JS ok + pas de prefers-reduced-motion).
// - Les apparitions simples (fade-up) passent par IntersectionObserver + CSS
//   (src/js/reveal.js) : léger pour le mobile, rien de caché aux lecteurs d'écran.
// - GSAP ne sert qu'aux effets qui en ont besoin : titre ligne par ligne,
//   compteur, galerie, citation, et sur desktop seulement parallax + section pinnée.
import { gsap, ScrollTrigger, dirX } from '../motion.js';
import { SplitText } from 'gsap/SplitText';
import { initReveal } from '../reveal.js';
import { initLogosMarquee } from '../logos-marquee.js';

gsap.registerPlugin(SplitText);

const DESKTOP = '(min-width: 64em)';
const REDUCE = '(prefers-reduced-motion: reduce)';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------------------------------------------------------
   Hero : H1 ligne par ligne, puis le reste du texte
   --------------------------------------------------------- */
function heroIntro() {
  const hero = $('.hero');
  if (!hero) return;

  const title = $('.hero__title', hero);
  const others = $$('.hero__content > :not(.hero__title)', hero);

  gsap.set(title, { autoAlpha: 1 });
  SplitText.create(title, {
    type: 'lines',
    mask: 'lines',
    linesClass: 'split-line',
    autoSplit: true, // re-découpe si la police change ou si la largeur change
    onSplit: (self) => gsap.from(self.lines, { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.12 }),
  });

  gsap
    .timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
    .fromTo(others, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, 0.25);
}

/* ---------------------------------------------------------
   Bande de confiance : compteur 0 → 12 (au premier affichage)
   --------------------------------------------------------- */
function trustCounter() {
  const num = $('.trust__number');
  if (!num) return;
  const end = parseInt(num.textContent, 10);
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    const counter = { v: 0 };
    gsap.to(counter, {
      v: end,
      duration: 1.6,
      ease: 'power2.out',
      snap: { v: 1 },
      onUpdate: () => (num.textContent = String(counter.v)),
    });
  });
  io.observe(num);
}

/* ---------------------------------------------------------
   Le cabinet en chiffres : compteurs 0 → valeur finale, une seule fois.
   Le HTML ne contient qu'UN seul nombre (SEO, sans JS, copier-coller,
   traduction : jamais de « 1212 »). Pendant l'animation seulement, le
   chiffre animé est aria-hidden et une copie .visually-hidden donne la
   valeur finale au lecteur d'écran ; les deux sont retirées à la fin.
   Le placeholder [X] n'a pas data-count.
   --------------------------------------------------------- */
function statsCounters() {
  const nums = $$('.stats [data-count]');
  if (!nums.length) return;
  const targets = nums.map((el) => {
    const end = parseInt(el.textContent, 10);
    const sr = document.createElement('span');
    sr.className = 'visually-hidden';
    sr.textContent = String(end);
    el.after(sr);
    el.setAttribute('aria-hidden', 'true');
    el.textContent = '0';
    return { el, sr, end, v: 0 };
  });
  const done = (t) => {
    t.el.textContent = String(t.end);
    t.el.removeAttribute('aria-hidden');
    t.sr.remove();
  };
  const run = () =>
    targets.forEach((t, i) =>
      gsap.to(t, {
        v: t.end,
        duration: 1.2,
        delay: i * 0.1,
        ease: 'power2.out',
        snap: { v: 1 },
        onUpdate: () => (t.el.textContent = String(t.v)),
        onComplete: () => done(t),
      }),
    );
  ScrollTrigger.create({ trigger: '.stats', start: 'top 80%', once: true, onEnter: run });
}

/* ---------------------------------------------------------
   À propos (desktop) : parallax léger sur la photo
   --------------------------------------------------------- */
function aboutParallax() {
  const img = $('.about__photo img');
  if (!img) return;
  gsap.fromTo(
    img,
    { yPercent: -7, scale: 1.14 },
    {
      yPercent: 7,
      ease: 'none',
      scrollTrigger: { trigger: '.about__media', start: 'top bottom', end: 'bottom top', scrub: true },
    },
  );
}

/* ---------------------------------------------------------
   Plateau technique (desktop) : section pinnée + défilement horizontal
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
   Le cabinet : reveal des photos en clip-path (un seul déclencheur)
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
   (départ à 0.55 d'opacité : contraste ≥ 3:1 respecté pour ce grand texte)
   --------------------------------------------------------- */
function quote() {
  const text = $('.quote blockquote p');
  if (!text) return;
  SplitText.create(text, {
    type: 'words',
    wordsClass: 'word',
    aria: 'none', // pas d'aria-label sur <p> (interdit) : les mots restent lisibles tels quels
    autoSplit: true,
    onSplit: (self) =>
      gsap.fromTo(
        self.words,
        { opacity: 0.55 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: { trigger: '.quote', start: 'top 75%', end: 'bottom 60%', scrub: true },
        },
      ),
  });
}

/* ---------------------------------------------------------
   Point d'entrée
   --------------------------------------------------------- */
export function initHomeAnimations() {
  // On attend les polices (max 300 ms) pour découper le H1 sur les bonnes lignes
  // (autoSplit re-découpe de toute façon si elles arrivent plus tard)
  const fontsReady = Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 300))]);
  fontsReady.then(heroIntro);

  // Apparitions simples (CSS + IntersectionObserver)
  initReveal(
    [
      '.trust__item', '.section-head', '.services-grid > li', '#services .btn--block',
      '.about__content > *', '.equip-card', '.review-card', '.info-card', '.faq__item',
      '.contact-item', '.contact__map > *', '.quote__icon', '.quote figcaption', '.logos-band__title',
    ].join(', '),
    { exclude: '.hero' },
  );

  trustCounter();
  // hors matchMedia : ne doit pas repartir de 0 quand on change de breakpoint
  if (!window.matchMedia(REDUCE).matches) statsCounters();
  initLogosMarquee();

  const mm = gsap.matchMedia();
  mm.add({ isDesktop: DESKTOP, reduce: REDUCE }, ({ conditions }) => {
    if (conditions.reduce) return;
    const cleanups = [];
    if (conditions.isDesktop) {
      aboutParallax();
      cleanups.push(equipmentPinned());
    }
    gallery();
    quote();
    return () => cleanups.forEach((fn) => fn?.());
  });
}
