// Vidéo YouTube « façade » : miniature hébergée sur le site, l'iframe YouTube (youtube-nocookie)
// n'est créée qu'au clic sur Lecture → aucun appel à YouTube avant l'action du visiteur,
// page plus légère. Sans JS : le lien ouvre la vidéo sur YouTube.
export function initVideos() {
  document.querySelectorAll('[data-yt]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${link.dataset.yt}?autoplay=1&rel=0&playsinline=1`;
      iframe.title = link.dataset.ytTitle || 'Vidéo YouTube';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      const box = link.parentElement;
      box.classList.add('is-playing');
      link.replaceWith(iframe);
      iframe.focus({ preventScroll: true });
    });
  });
}

// Reel Instagram « façade » : carte hébergée sur le site, l'iframe Instagram n'est
// créée qu'au clic → aucun appel à Instagram avant l'action du visiteur.
// Sans JS : le lien ouvre le reel sur Instagram.
export function initReels() {
  document.querySelectorAll('[data-ig]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.instagram.com/reel/${link.dataset.ig}/embed/`;
      iframe.title = link.dataset.igTitle || 'Reel Instagram';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      link.replaceWith(iframe);
      iframe.focus({ preventScroll: true });
    });
  });
}
