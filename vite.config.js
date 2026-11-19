import { defineConfig } from 'vite';
import { readdirSync, statSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';
import partialsPlugin from './build/partials-plugin.js';

const root = import.meta.dirname;

// Ramasse automatiquement toutes les pages .html de /fr et /ar (+ index racine)
// → pas besoin de toucher la config quand on ajoute une page.
function collectPages(dir, pages = {}) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collectPages(full, pages);
    else if (entry.endsWith('.html')) {
      const name = relative(root, full).replace(/\\/g, '/').replace(/\.html$/, '');
      pages[name] = full;
    }
  }
  return pages;
}

const input = {
  index: resolve(root, 'index.html'),
  ...collectPages(resolve(root, 'fr')),
  ...collectPages(resolve(root, 'ar')),
};

export default defineConfig({
  plugins: [partialsPlugin({ root })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: { input },
  },
  server: {
    open: '/fr/',
  },
});
