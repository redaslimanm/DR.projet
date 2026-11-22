// Fond du hero (accueil) : 2 photos du cabinet en fondu enchaîné, une nouvelle toutes les 3 s.
// - Dessinées dans des <canvas> APRÈS le chargement de la page : un canvas n'est jamais
//   candidat LCP, la photo de la doctora reste l'élément LCP (règle LCP de CLAUDE.md).
// - prefers-reduced-motion : une seule photo, pas de rotation.
// - Pause quand le hero sort de l'écran ou que l'onglet est masqué.
import attente800 from '../assets/images/attente-800.webp?url';
import attente1200 from '../assets/images/attente-1200.webp?url';
import salon800 from '../assets/images/coin-salon-800.webp?url';
import salon1200 from '../assets/images/coin-salon-1200.webp?url';

const INTERVAL = 3000; // ms entre deux changements
const PHOTOS = [
  { small: attente800, large: attente1200 }, // grande salle d'attente (MYXJ_20260624233802233_save.jpg)
  { small: salon800, large: salon1200 }, // coin salon (coin-salon-2.jpg)
];

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

// Équivalent de background-size: cover
function drawCover(canvas, img, box) {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  canvas.width = Math.round(box.width * dpr);
  canvas.height = Math.round(box.height * dpr);
  const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  canvas.getContext('2d').drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
}

export async function initHeroBg(root) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const large = root.clientWidth * Math.min(window.devicePixelRatio || 1, 1.5) > 900;
  const list = reduced ? PHOTOS.slice(0, 1) : PHOTOS;

  let images;
  try {
    images = await Promise.all(list.map((p) => loadImage(large ? p.large : p.small)));
  } catch {
    return; // fond uni du hero si une image manque
  }

  const canvases = images.map(() => {
    const c = document.createElement('canvas');
    root.append(c);
    return c;
  });
  const draw = () => {
    const box = root.getBoundingClientRect();
    canvases.forEach((c, i) => drawCover(c, images[i], box));
  };
  draw();

  let resizeTimer = 0;
  new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(draw, 150);
  }).observe(root);

  let current = 0;
  requestAnimationFrame(() => canvases[0].classList.add('is-active'));
  if (canvases.length < 2) return;

  let timer = 0;
  let visible = true;
  const next = () => {
    canvases[current].classList.remove('is-active');
    current = (current + 1) % canvases.length;
    canvases[current].classList.add('is-active');
  };
  const sync = () => {
    clearInterval(timer);
    timer = 0;
    if (visible && !document.hidden) timer = setInterval(next, INTERVAL);
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  }).observe(root);
  document.addEventListener('visibilitychange', sync);
  sync();
}
