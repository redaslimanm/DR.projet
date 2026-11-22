// Composant « avant / après » (affiche cataracte, accueil).
// Le poster est un <picture> normal (net, lisible sans JS). Ce script ajoute, sur la seule
// zone des yeux, un calque flou découpé par clip-path + une ligne déplaçable.
// - Souris : la ligne suit le curseur ; elle revient à REST % quand la souris sort.
// - Doigt : glisser (pointer capture, touch-action: pan-y → le scroll vertical reste libre).
// - Clavier : role="slider", flèches gauche/droite = ±STEP %.
const REST = 93; // position de repos (%)
const STEP = 5; // pas clavier (%)

export function initBeforeAfter(root) {
  const poster = root.querySelector('img');
  if (!poster) return;
  const help = root.dataset.baLabel || 'Avant / après';

  const build = () => {
    const src = poster.currentSrc || poster.src;
    const zone = document.createElement('div');
    zone.className = 'ba__zone';
    zone.tabIndex = 0;
    zone.setAttribute('role', 'slider');
    zone.setAttribute('aria-label', help);
    zone.setAttribute('aria-valuemin', '0');
    zone.setAttribute('aria-valuemax', '100');
    zone.setAttribute('aria-orientation', 'horizontal');
    zone.innerHTML =
      `<img class="ba__sharp" src="${src}" alt="" aria-hidden="true" decoding="async">` +
      `<div class="ba__blur" aria-hidden="true"><img src="${src}" alt="" decoding="async"></div>` +
      '<div class="ba__line" aria-hidden="true"><span class="ba__handle"></span></div>';
    root.querySelector('.ba__frame').append(zone);

    let pos = REST;
    let dragging = false;
    const set = (v, live = false) => {
      pos = Math.max(0, Math.min(100, v));
      zone.classList.toggle('is-live', live);
      zone.style.setProperty('--pos', `${pos}%`);
      zone.setAttribute('aria-valuenow', String(Math.round(pos)));
    };
    const fromEvent = (e) => {
      const r = zone.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100, true);
    };
    const rest = () => set(REST);

    zone.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse' || dragging) fromEvent(e);
    });
    zone.addEventListener('pointerdown', (e) => {
      dragging = true;
      zone.setPointerCapture(e.pointerId);
      fromEvent(e);
    });
    const end = (e) => {
      dragging = false;
      if (e.pointerType !== 'mouse') rest();
    };
    zone.addEventListener('pointerup', end);
    zone.addEventListener('pointercancel', end);
    zone.addEventListener('pointerleave', (e) => {
      if (e.pointerType === 'mouse' && !dragging) rest();
    });
    zone.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        set(pos + (e.key === 'ArrowRight' ? STEP : -STEP));
      } else if (e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        set(e.key === 'End' ? 100 : 0);
      }
    });
    rest();
    root.classList.add('is-ready');
  };

  if (poster.complete && poster.naturalWidth) build();
  else poster.addEventListener('load', build, { once: true });
}
