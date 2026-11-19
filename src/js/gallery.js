// Galerie du cabinet : lightbox GLightbox (chargée seulement sur cette page).
// Amélioration progressive : sans JS, les photos restent affichées normalement.
// Le JS ajoute sur chaque photo un vrai <button> (clavier + lecteur d'écran).
export async function initGallery(list) {
  const [{ default: GLightbox }] = await Promise.all([
    import('glightbox'),
    import('glightbox/dist/css/glightbox.min.css'),
  ]);

  const figures = [...list.querySelectorAll('figure')];
  const elements = figures.map((fig) => {
    const img = fig.querySelector('img');
    // plus grande version WebP du srcset (déjà réécrite par Vite au build)
    const largest = img.srcset.split(',').map((s) => s.trim().split(/\s+/)[0]).at(-1) || img.src;
    return { href: largest, type: 'image', alt: img.alt, description: fig.querySelector('figcaption')?.textContent || '' };
  });

  const lightbox = GLightbox({ elements, loop: true, touchNavigation: true, openEffect: 'fade', closeEffect: 'fade' });

  figures.forEach((fig, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gallery-page__open';
    btn.setAttribute('aria-label', `Agrandir la photo : ${elements[i].description || elements[i].alt}`);
    btn.addEventListener('click', () => lightbox.openAt(i));
    fig.append(btn);
  });
}
