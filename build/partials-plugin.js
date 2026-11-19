// Plugin Vite maison (zéro dépendance) : remplace <!-- @partial nom -->
// par le HTML généré au build → header/footer présents dans le HTML final
// (SEO + pas de JS requis), une seule source pour FR et AR.
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const MARKER = /<!--\s*@partial\s+([\w-]+)\s*-->/g;
const ENTRY = '/src/partials/index.js';

// '/fr/services/cataracte/index.html' → { lang: 'fr', path: 'services/cataracte/', altHref: '/ar/services/cataracte/' }
function pageInfo(urlPath) {
  const clean = urlPath.split('?')[0].replace(/^\//, '').replace(/index\.html$/, '');
  const [lang, ...rest] = clean.split('/');
  const path = rest.join('/');
  const other = lang === 'ar' ? 'fr' : 'ar';
  return { lang, path, altHref: `/${other}/${path}` };
}

export default function partialsPlugin({ root }) {
  let server;

  async function loadRenderer() {
    if (server) return server.ssrLoadModule(ENTRY);
    return import(pathToFileURL(resolve(root, '.' + ENTRY)).href);
  }

  return {
    name: 'site-partials',

    configureServer(s) {
      server = s;
    },

    // Modif d'un partial ou des données → rechargement complet
    handleHotUpdate({ file, server: s }) {
      if (/[\\/]src[\\/](partials|data)[\\/]/.test(file)) {
        s.moduleGraph.invalidateAll();
        s.ws.send({ type: 'full-reload' });
        return [];
      }
    },

    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        if (!html.includes('@partial')) return html;
        const page = pageInfo(ctx.path);
        if (page.lang !== 'fr' && page.lang !== 'ar') return html;
        const { render } = await loadRenderer();
        return html.replace(MARKER, (_, name) => render(name, page));
      },
    },
  };
}
