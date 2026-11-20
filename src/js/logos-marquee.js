// Bande « Formation et affiliations » : défilement continu sur mobile.
// - Les logos sont dupliqués (copie aria-hidden) pour une boucle sans saut.
// - Doigt posé (ou souris enfoncée) sur la bande → pause ; relâché → reprise.
// - Actif seulement si html.anim (pas de prefers-reduced-motion) ; sur desktop
//   (≥ 64em) la copie est masquée en CSS et la rangée reste fixe.
export function initLogosMarquee() {
  const list = document.querySelector('.logos-band__list');
  if (!list || !document.documentElement.classList.contains('anim')) return;

  for (const li of [...list.children]) {
    const clone = li.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.classList.add('is-clone');
    clone.querySelector('img')?.setAttribute('alt', '');
    list.append(clone);
  }
  list.classList.add('is-marquee');

  const pause = () => list.classList.add('is-paused');
  const play = () => list.classList.remove('is-paused');
  list.addEventListener('pointerdown', pause);
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) => list.addEventListener(t, play));
  // appui long sur une image : pas de menu « enregistrer l'image » qui bloquerait la reprise
  list.addEventListener('contextmenu', (e) => e.preventDefault());
}
