// Plugin Vite maison (zéro dépendance), exécuté au build et en dev :
//   <!-- @partial header -->                    → header/footer (src/partials)
//   <!-- @icon phone 18 -->                     → icône SVG inline (Lucide)
//   <!-- @picture name="dr-hero" alt="…" … -->  → <picture> AVIF + WebP responsive
// Tout est écrit dans le HTML final (SEO, pas de JS requis).
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const PARTIAL = /<!--\s*@partial\s+([\w-]+)\s*-->/g;
const ICON = /<!--\s*@icon\s+([\w-]+)(?:\s+(\d+))?(?:\s+([\d.]+))?\s*-->/g;
const PICTURE = /<!--\s*@picture\s+([\s\S]*?)-->/g;
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
  const loading = a.eager ? 'eager" fetchpriority="high' : 'lazy';
  return (
    `<picture${a.class ? ` class="${a.class}"` : ''}>` +
    `<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">` +
    `<img src="${IMG_DIR}/${a.name}-${fallbackW}.webp" srcset="${set('webp')}" sizes="${sizes}"` +
    ` alt="${a.alt}" width="${meta.width}" height="${meta.height}" loading="${loading}" decoding="async"` +
    `${a['img-class'] ? ` class="${a['img-class']}"` : ''}>` +
    `</picture>`
  );
}

export default function partialsPlugin({ root }) {
  let server;

  async function load(entry) {
    if (server) return server.ssrLoadModule(entry);
    return import(pathToFileURL(resolve(root, '.' + entry)).href);
  }

  return {
    name: 'site-partials',

    configureServer(s) {
      server = s;
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
        if (!html.includes('<!-- @')) return html;
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

        if (html.includes('@picture')) {
          const manifest = JSON.parse(readFileSync(resolve(root, '.' + IMG_DIR, 'manifest.json'), 'utf8'));
          html = html.replace(PICTURE, (_, attrs) => picture(parseAttrs(attrs), manifest));
        }

        return html;
      },
    },
  };
}
