// Header : ombre au scroll, menu burger (mobile), sous-menu Services.
import { stopScroll, startScroll } from './lenis.js';

const desktop = window.matchMedia('(min-width: 64em)');

export function initHeader() {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const burger = document.querySelector('[data-burger]');
  if (!header || !nav || !burger) return;

  /* ---------- Ombre quand on a scrollé ---------- */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  const setNavTop = () => {
    // Le panneau commence sous le header (barre haute masquée en mobile)
    const bottom = header.getBoundingClientRect().bottom;
    nav.style.setProperty('--nav-top', `${Math.max(bottom, 0)}px`);
  };

  const isOpen = () => burger.getAttribute('aria-expanded') === 'true';

  function openMenu() {
    setNavTop();
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', burger.dataset.labelClose);
    nav.classList.add('is-open');
    stopScroll();
    nav.querySelector('a, button')?.focus({ preventScroll: true });
  }

  function closeMenu({ focusBurger = true } = {}) {
    if (!isOpen()) return;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', burger.dataset.labelOpen);
    nav.classList.remove('is-open');
    startScroll();
    if (focusBurger) burger.focus({ preventScroll: true });
  }

  burger.addEventListener('click', () => (isOpen() ? closeMenu() : openMenu()));

  // Clic sur un lien → fermer (utile pour les ancres)
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a') && !desktop.matches) closeMenu({ focusBurger: false });
  });

  // Focus piégé dans le menu ouvert (burger inclus) + Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isOpen()) closeMenu();
      closeAllSubs();
      return;
    }
    if (e.key !== 'Tab' || !isOpen()) return;
    const focusables = [burger, ...nav.querySelectorAll('a[href], button:not([disabled])')].filter(
      (el) => el.offsetParent !== null,
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Passage en desktop → on referme proprement
  desktop.addEventListener('change', (e) => {
    if (e.matches) closeMenu({ focusBurger: false });
    closeAllSubs();
  });

  /* ---------- Sous-menu Services ---------- */
  const subs = [...nav.querySelectorAll('[data-sub]')];

  function setSub(item, open) {
    item.classList.toggle('is-open', open);
    item.querySelector('[data-sub-toggle]').setAttribute('aria-expanded', String(open));
  }
  function closeAllSubs() {
    subs.forEach((item) => setSub(item, false));
  }

  subs.forEach((item) => {
    const toggle = item.querySelector('[data-sub-toggle]');
    toggle.addEventListener('click', () => setSub(item, !item.classList.contains('is-open')));

    // Desktop : fermer quand le focus quitte le sous-menu
    item.addEventListener('focusout', (e) => {
      if (desktop.matches && !item.contains(e.relatedTarget)) setSub(item, false);
    });
  });

  // Desktop : clic en dehors → fermer
  document.addEventListener('click', (e) => {
    if (!desktop.matches) return;
    subs.forEach((item) => {
      if (!item.contains(e.target)) setSub(item, false);
    });
  });
}
