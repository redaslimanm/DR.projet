// Point d'entrée JS commun à toutes les pages.
import '../styles/main.css';
import { initLenis } from './lenis.js';
import { initHeader } from './header.js';
import { initCarousels } from './carousel.js';
import { initFab } from './fab.js';
import { initRdv } from './rdv.js';
import irisStaticUrl from '../assets/images/iris-static.webp?url';

initLenis();
initHeader();
initCarousels();
initFab();
initRdv();

// Animations de l'accueil : chargées uniquement sur l'accueil (chunk séparé)
const animOk = document.documentElement.classList.contains('anim');
if (animOk && document.querySelector('.hero')) {
  import('./animations/home.js').then((m) => m.initHomeAnimations());
} else if (animOk) {
  // Pages intérieures : fade-up simple
  import('./animations/page.js').then((m) => m.initPageAnimations());
}

// Iris doré (Three.js) : l'image statique s'affiche après le chargement ;
// l'animation WebGL arrive ensuite — en temps libre sur desktop, à la première
// interaction sur mobile (évite ~1 s de travail CPU pendant le chargement).
const iris = document.querySelector('[data-iris]');
if (iris) {
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
  const start = () => import('./iris/index.js').then((m) => m.initIris(iris));
  // Image statique dessinée dans un canvas 2D (pas candidat LCP)
  const drawStatic = () => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      const c = document.createElement('canvas');
      c.className = 'hero__iris-static';
      c.setAttribute('aria-hidden', 'true');
      const size = iris.clientWidth * Math.min(window.devicePixelRatio, 1.5);
      c.width = c.height = Math.round(size);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      iris.prepend(c);
      requestAnimationFrame(() => iris.classList.add('is-static'));
    };
    img.src = irisStaticUrl;
  };
  const onLoad = () => {
    drawStatic();
    if (!document.documentElement.classList.contains('anim')) return; // reduced motion : image seule
    if (window.matchMedia('(min-width: 64em)').matches) {
      idle(start, { timeout: 2500 });
    } else {
      const events = ['pointerdown', 'touchstart', 'scroll', 'keydown'];
      const go = () => {
        events.forEach((e) => window.removeEventListener(e, go));
        idle(start, { timeout: 1000 });
      };
      events.forEach((e) => window.addEventListener(e, go, { passive: true, once: true }));
    }
  };
  if (document.readyState === 'complete') onLoad();
  else window.addEventListener('load', onLoad, { once: true });
}

// Fond du hero (accueil) : photos du cabinet en fondu, chargées après la page (hors LCP)
const heroBg = document.querySelector('[data-hero-bg]');
if (heroBg) {
  const startBg = () => import('./hero-bg.js').then((m) => m.initHeroBg(heroBg));
  if (document.readyState === 'complete') startBg();
  else window.addEventListener('load', startBg, { once: true });
}

// Avant / après cataracte (accueil) : chargé seulement si le composant est présent
const beforeAfter = document.querySelector('[data-ba]');
if (beforeAfter) import('./before-after.js').then((m) => m.initBeforeAfter(beforeAfter));

// Vidéo YouTube (accueil) : iframe créée au clic seulement
if (document.querySelector('[data-yt]')) import('./video.js').then((m) => m.initVideos());
// Reel Instagram (page Chalazion) : même principe
if (document.querySelector('[data-ig]')) import('./video.js').then((m) => m.initReels());

// Galerie (page Le cabinet) : GLightbox chargé à la demande
const gallery = document.querySelector('[data-gallery]');
if (gallery) import('./gallery.js').then((m) => m.initGallery(gallery));

// Carte Google Maps au clic (accueil, contact)
if (document.querySelector('[data-map-embed]')) import('./map.js').then((m) => m.initMaps());
