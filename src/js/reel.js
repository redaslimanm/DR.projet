// Lecteur du reel chalazion (khota A) : la vidéo hébergée sur le site n'est chargée
// qu'au clic sur le poster (preload="none", aucune lecture automatique). Le clic sur
// l'avertissement « images opératoires » retire la couverture et lance la lecture sur
// place, en muet (le son s'active avec les contrôles de la vidéo).
export function initReel(root) {
  const cover = root.querySelector('[data-reel-play]');
  const video = root.querySelector('[data-reel-video]');
  if (!cover || !video) return;
  cover.addEventListener('click', () => {
    cover.hidden = true;
    video.focus({ preventScroll: true });
    const p = video.play();
    // Lecture refusée par le navigateur : la vidéo reste affichée avec ses contrôles
    if (p && typeof p.catch === 'function') p.catch(() => {});
  });
}
