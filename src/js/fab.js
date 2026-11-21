// Bouton flottant (FAB) « speed dial » : Réserver RDV / WhatsApp / Appeler.
// Ouverture au clic ; fermeture au clic sur le fond, sur une action ou avec Échap.
export function initFab() {
  const root = document.querySelector('[data-fab]');
  if (!root) return;
  const toggle = root.querySelector('.fab__toggle');
  const menu = root.querySelector('.fab__menu');
  const backdrop = root.querySelector('[data-fab-backdrop]');

  const setOpen = (open, { focus = false } = {}) => {
    root.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? toggle.dataset.labelClose : toggle.dataset.labelOpen);
    menu.setAttribute('aria-hidden', String(!open));
    menu.inert = !open; // liens hors tabulation quand le menu est fermé
    backdrop.hidden = !open;
    if (focus) toggle.focus();
  };

  toggle.addEventListener('click', () => setOpen(!root.classList.contains('is-open')));
  backdrop.addEventListener('click', () => setOpen(false));
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('is-open')) setOpen(false, { focus: true });
  });
}
