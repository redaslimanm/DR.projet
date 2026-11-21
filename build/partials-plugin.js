// Plugin Vite maison (zéro dépendance), exécuté au build et en dev :
//   <!-- @partial header -->                    → header/footer (src/partials)
//   <!-- @icon phone 18 -->                     → icône SVG inline (Lucide)
//   <!-- @picture name="dr-hero" alt="…" … -->  → <picture> AVIF + WebP responsive
// Tout est écrit dans le HTML final (SEO, pas de JS requis).
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const PARTIAL = /<!--\s*@partial\s+([\w-]+)\s*-->/g;
const ICON = /<!--\s*@icon\s+([\w-]+)(?:\s+(\d+))?(?:\s+([\d.]+))?\s*-->/g;
const PICTURE = /<!--\s*@picture\s+([\s\S]*?)-->/g;
const PRELOAD = /<!--\s*@preload-image\s+([\s\S]*?)-->/g;
const ENTRY = '/src/partials/index.js';
const IMG_DIR = '/src/assets/images';

// '/fr/services/cataracte/index.html' → { lang: 'fr', path: 'services/cataracte/', altHref: '/ar/services/cataracte/' }
function pageInfo(urlPath) {
  const clean = urlPath.split('?')[0].replace(/^\//, '').replace(/index\.html$/, '');
  const [lang, ...rest] = clean.split('/');
  const path = rest.join('/');
  const other = lang === 'ar' ? 'fr' : 'ar';
  return { lang, path, altHref: `/${other}/${path}` };
}

// name="x" alt="y" eager → { name: 'x', alt: 'y', eager: true }
function parseAttrs(str) {
  const attrs = {};
  for (const m of str.matchAll(/([\w-]+)(?:="([^"]*)")?/g)) attrs[m[1]] = m[2] ?? true;
  return attrs;
}

function picture(a, manifest) {
  const meta = manifest[a.name];
  if (!meta) throw new Error(`[picture] image inconnue : "${a.name}" (lance scripts/optimize-images.py)`);
  if (a.alt === undefined) throw new Error(`[picture] alt manquant pour "${a.name}"`);
  const set = (ext) => meta.widths.map((w) => `${IMG_DIR}/${a.name}-${w}.${ext} ${w}w`).join(', ');
  const fallbackW = meta.widths.find((w) => w >= 800) ?? meta.widths.at(-1);
  const sizes = a.sizes || '100vw';
  // Image LCP : chargement immédiat, priorité haute, décodage par défaut (pas async)
  const loading = a.eager ? 'eager" fetchpriority="high' : 'lazy" decoding="async';
  return (
    `<picture${a.class ? ` class="${a.class}"` : ''}>` +
    `<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">` +
    `<img src="${IMG_DIR}/${a.name}-${fallbackW}.webp" srcset="${set('webp')}" sizes="${sizes}"` +
    ` alt="${a.alt}" width="${meta.width}" height="${meta.height}" loading="${loading}"` +
    `${a['img-class'] ? ` class="${a['img-class']}"` : ''}>` +
    `</picture>`
  );
}

// Preload de l'image LCP (même srcset/sizes que le <picture>, format AVIF)
function preloadImage(a, manifest) {
  const meta = manifest[a.name];
  if (!meta) throw new Error(`[preload-image] image inconnue : "${a.name}"`);
  const set = meta.widths.map((w) => `${IMG_DIR}/${a.name}-${w}.avif ${w}w`).join(', ');
  return `<link rel="preload" as="image" type="image/avif" imagesrcset="${set}" imagesizes="${a.sizes || '100vw'}" fetchpriority="high">`;
}

// FAQPage JSON-LD : construit à partir des <details class="faq__item"> de la page.
// Exclus : réponses placeholder, items data-schema="off", et questions déjà
// présentes dans `exclude` (questions de /fr/faq/, pour éviter les doublons).
// Le texte est celui affiché (balises retirées, blocs séparés par une espace).
const FAQ_ITEM = /<details class="faq__item"([^>]*)>\s*<summary>([\s\S]*?)<span class="faq__icon">[\s\S]*?<\/summary>([\s\S]*?)<\/details>/g;
const stripHtml = (x) =>
  x.replace(/<!--[\s\S]*?-->/g, '').replace(/<\/(p|li)>/g, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const faqQuestions = (html) => [...html.matchAll(FAQ_ITEM)].map((m) => stripHtml(m[2]));

function faqJsonLd(html, exclude = new Set()) {
  const items = [...html.matchAll(FAQ_ITEM)]
    .filter((m) => !m[3].includes('placeholder') && !m[1].includes('data-schema="off"'))
    .filter((m) => !exclude.has(stripHtml(m[2]).toLowerCase()))
    .map((m) => ({ '@type': 'Question', name: stripHtml(m[2]), acceptedAnswer: { '@type': 'Answer', text: stripHtml(m[3]) } }));
  if (!items.length) return '';
  const json = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items }).replace(/</g, '\\u003c');
  return `  <script type="application/ld+json">${json}</script>\n`;
}

// sitemap.xml (avec alternates hreflang FR/AR) + robots.txt, écrits dans dist/
function writeSeoFiles(outDir, pageKeys, siteUrl) {
  const today = new Date().toISOString().slice(0, 10);
  const paths = [...new Set(pageKeys
    .filter((k) => /^(fr|ar)\//.test(k))
    .map((k) => k.replace(/^(fr|ar)\//, '').replace(/index$/, '')))].sort();
  const url = (lang, path) => `${siteUrl}/${lang}/${path}`;
  const has = (lang, path) => pageKeys.includes(`${lang}/${path}index`);
  const entries = [];
  for (const path of paths) {
    for (const lang of ['fr', 'ar']) {
      if (!has(lang, path)) continue;
      const alts = ['fr', 'ar'].filter((l) => has(l, path))
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, path)}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('fr', path)}"/>`);
      const priority = path === '' ? '1.0' : path.startsWith('services/') || path === 'contact/' ? '0.8' : /mentions|confidentialite/.test(path) ? '0.2' : '0.6';
      entries.push(
        `  <url>\n    <loc>${url(lang, path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n${alts.join('\n')}\n  </url>`,
      );
    }
  }
  writeFileSync(
    resolve(outDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`,
  );
  writeFileSync(resolve(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  return entries.length;
}

// Badges de travail [À VALIDER …] et [À COMPLÉTER …] (FR et AR).
// SHOW_DRAFT_BADGES=true → affichés ; =false → retirés. Sans variable : affichés
// en dev (npm run dev), retirés au build (production). Les textes restent dans le
// code et dans textes-a-valider.md.
const DRAFT_BADGE = /[ \t]?<span class="placeholder">\[À (?:VALIDER|COMPLÉTER)\b[^\]]*\]<\/span>[ \t]?/g;
function stripDraftBadges(html) {
  return html
    // blocs qui ne contiennent qu'un placeholder (titre + texte à compléter) : retirés en entier
    .replace(/[ \t]*<(div|p)\b[^>]*\sdata-draft\b[^>]*>[\s\S]*?<\/\1>[ \t]*\n?/g, '')
    .replace(DRAFT_BADGE, (m) => (/^\s/.test(m) && /\s$/.test(m) ? ' ' : ''))
    .replace(/<p class="svc-note">\s*<\/p>\s*/g, '') // note de section devenue vide
    .replace(/<p>\s*<\/p>/g, ''); // paragraphe dont le seul contenu était le badge
}

export default function partialsPlugin({ root, pages = [] }) {
  let server;
  let outDir;
  const showDraftBadges = () =>
    process.env.SHOW_DRAFT_BADGES ? process.env.SHOW_DRAFT_BADGES === 'true' : Boolean(server);

  async function load(entry) {
    if (server) return server.ssrLoadModule(entry);
    return import(pathToFileURL(resolve(root, '.' + entry)).href);
  }

  return {
    name: 'site-partials',

    configureServer(s) {
      server = s;
    },

    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },

    async closeBundle() {
      if (server || !outDir) return;
      const { SITE_URL, SITE_URL_PLACEHOLDER } = await load('/src/data/site.js');
      const n = writeSeoFiles(outDir, pages, SITE_URL);
      console.log(`\n  [seo] sitemap.xml (${n} URL) + robots.txt écrits pour ${SITE_URL}`);
      if (SITE_URL === SITE_URL_PLACEHOLDER) {
        console.warn('  [seo] ⚠ domaine provisoire : définir SITE_URL (src/data/site.js ou variable d’environnement) avant la mise en ligne\n');
      }
    },

    // Modif d'un partial, des données ou des images → rechargement complet
    handleHotUpdate({ file, server: s }) {
      if (/[\\/]src[\\/](partials|data)[\\/]|manifest\.json$/.test(file)) {
        s.moduleGraph.invalidateAll();
        s.ws.send({ type: 'full-reload' });
        return [];
      }
    },

    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        // Notes internes (« <!-- TODO … --> ») : gardées dans les sources, jamais publiées
        html = html.replace(/[ \t]*<!--\s*TODO[\s\S]*?-->[ \t]*\n?/g, '');
        if (!html.includes('<!-- @')) return showDraftBadges() ? html : stripDraftBadges(html);
        const page = pageInfo(ctx.path);

        if (html.includes('@partial') &&(page.lang === 'fr' || page.lang === 'ar')) {
          const { render } = await load(ENTRY);
          html = html.replace(PARTIAL, (_, name) => render(name, page));
        }

        if (html.includes('@icon')) {
          const { icon } = await load('/src/partials/icons.js');
          html = html.replace(ICON, (_, name, size, stroke) =>
            icon(name, { size: Number(size) || 18, stroke: Number(stroke) || 1.8 }),
          );
        }

        if (html.includes('@picture') || html.includes('@preload-image')) {
          const manifest = JSON.parse(readFileSync(resolve(root, '.' + IMG_DIR, 'manifest.json'), 'utf8'));
          html = html.replace(PICTURE, (_, attrs) => picture(parseAttrs(attrs), manifest));
          html = html.replace(PRELOAD, (_, attrs) => preloadImage(parseAttrs(attrs), manifest));
        }

        const rel = ctx.path.replace(/^\//, '');
        if (/^(fr|ar)\/faq\/(index\.html)?$/.test(rel) && html.includes('faq__item')) {
          html = html.replace('</head>', `${faqJsonLd(html)}</head>`);
        } else if (/^fr\/services\/[\w-]+\/(index\.html)?$/.test(rel) && html.includes('faq__item')) {
          // Pages services : FR uniquement, sans doublon avec /fr/faq/
          const faqPage = readFileSync(resolve(root, 'fr/faq/index.html'), 'utf8');
          const exclude = new Set(faqQuestions(faqPage).map((q) => q.toLowerCase()));
          html = html.replace('</head>', `${faqJsonLd(html, exclude)}</head>`);
        }

        return showDraftBadges() ? html : stripDraftBadges(html);
      },
    },
  };
}
