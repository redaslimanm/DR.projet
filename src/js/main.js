// Point d'entrée JS commun à toutes les pages.
import '../styles/main.css';
import { initLenis } from './lenis.js';
import { initHeader } from './header.js';
import { initCarousels } from './carousel.js';

initLenis();
initHeader();
initCarousels();

// Animations de l'accueil : chargées uniquement sur l'accueil (chunk séparé)
if (document.querySelector('.hero') && document.documentElement.classList.contains('anim')) {
  import('./animations/home.js').then((m) => m.initHomeAnimations());
}
