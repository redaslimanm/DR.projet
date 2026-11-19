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

// Iris doré (Three.js) : après le chargement complet + temps libre du navigateur,
// pour ne jamais retarder l'affichage du hero (LCP)
const iris = document.querySelector('[data-iris]');
if (iris) {
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
  const boot = () => idle(() => import('./iris/index.js').then((m) => m.initIris(iris)), { timeout: 2000 });
  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot, { once: true });
}
