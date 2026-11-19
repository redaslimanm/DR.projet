// <head> commun à toutes les pages : meta, icônes, polices, script.
// Le titre et la description viennent de src/data/meta.js (ou des données
// d'un service pour les pages service). Une page sans meta = erreur de build.
import { meta } from '../data/meta.js';
import { serviceBySlug } from '../data/services-content.js';

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
    const s = serviceBySlug(svc[1]);
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
  <meta name="theme-color" content="#2F4F3A">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/favicon-512.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Google Fonts non bloquant (polices de secours ajustées : src/styles/fonts.css) -->
  <link rel="preload" as="style" href="${fonts}" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="${fonts}"></noscript>
  <script type="module" src="/src/js/main.js"></script>`;
}
