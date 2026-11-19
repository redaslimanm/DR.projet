// Chargeur de « l'iris doré » (accueil uniquement).
// Décide entre l'animation WebGL (Three.js, chargé à la demande) et
// l'image statique (prefers-reduced-motion, appareil faible, pas de WebGL).
// Appelé après l'événement load : n'entre jamais en concurrence avec le LCP.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktop = window.matchMedia('(min-width: 64em)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

function isWeakDevice() {
  const c = navigator.connection;
  if (c && (c.saveData || /(^|-)2g|3g/.test(c.effectiveType || ''))) return true;
  if (navigator.deviceMemory && navigator.deviceMemory < 4) return true;
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true;
  return false;
}

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

function showStatic(el) {
  el.classList.add('is-static');
}

export async function initIris(el) {
  if (!el) return;
  if (reduceMotion.matches || isWeakDevice() || !hasWebGL()) {
    showStatic(el);
    return;
  }

  const { createIris } = await import('./scene.js');
  const iris = createIris(el, {
    count: desktop.matches ? 3200 : 1100,
    fps: desktop.matches ? 60 : 30,
    pointer: finePointer.matches,
  });

  // Pause quand le hero n'est pas à l'écran ou que l'onglet est caché
  let visible = true;
  const update = () => (visible && !document.hidden ? iris.start() : iris.stop());
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    update();
  }).observe(el.closest('.hero') || el);
  document.addEventListener('visibilitychange', update);

  // Fondu d'apparition (CSS) une fois la 1re image rendue
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-ready')));

  // « Réduire les animations » activé en cours de route → image statique
  reduceMotion.addEventListener('change', (e) => {
    if (!e.matches) return;
    document.removeEventListener('visibilitychange', update);
    iris.destroy();
    showStatic(el);
  });
}
