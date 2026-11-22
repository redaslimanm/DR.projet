// Point d'entrée JS commun à toutes les pages.
import '../styles/main.css';
import { initLenis } from './lenis.js';
import { initHeader } from './header.js';
import { initCarousels } from './carousel.js';
import { initFab } from './fab.js';
import { initRdv } from './rdv.js';

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

// Fond du hero (accueil) : photos du cabinet en fondu, chargées après la page (hors LCP)
const heroBg = document.querySelector('[data-hero-bg]');
if (heroBg) {
  const startBg = () => import('./hero-bg.js').then((m) => m.initHeroBg(heroBg));
  if (document.readyState === 'complete') startBg();
  else window.addEventListener('load', startBg, { once: true });
}

// Galerie (page Le cabinet) : GLightbox chargé à la demande
const gallery = document.querySelector('[data-gallery]');
if (gallery) import('./gallery.js').then((m) => m.initGallery(gallery));

// Carte Google Maps au clic (accueil, contact)
if (document.querySelector('[data-map-embed]')) import('./map.js').then((m) => m.initMaps());
