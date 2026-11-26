// <head> commun à toutes les pages : meta, icônes, polices, script.
// Le titre et la description viennent de src/data/meta.js (ou des données
// d'un service pour les pages service). Une page sans meta = erreur de build.
import { meta } from '../data/meta.js';
import { localizedService } from '../data/services-content.js';
import { seoTags } from './seo.js';

const FONTS = {
  fr: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Montserrat:wght@400;500;600&display=swap',
  ar: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Montserrat:wght@400;600&display=swap',
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function pageMeta(lang, path) {
  const m = meta[lang]?.[path];
  if (m) return m;
  const svc = path.match(/^services\/([\w-]+)\/$/);
  if (svc) {
    const s = localizedService(svc[1], lang);
    if (s?.meta) return s.meta;
  }
  throw new Error(`[head] pas de meta pour /${lang}/${path} (src/data/meta.js)`);
}

export function head(page) {
  const { lang, path } = page;
  const m = pageMeta(lang, path);
  const fonts = FONTS[lang];
  return `<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(m.title)}</title>
  <meta name="description" content="${esc(m.description)}">
  ${seoTags(page, m)}
  <meta name="theme-color" content="#2F4F3A">
  <!-- Favicons : fichiers fixes à la racine (public/), sans hash -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Google Fonts non bloquant (polices de secours ajustées : src/styles/fonts.css) -->
  <link rel="preload" as="style" href="${fonts}" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="${fonts}"></noscript>
  <script type="module" src="/src/js/main.js"></script>`;
}
