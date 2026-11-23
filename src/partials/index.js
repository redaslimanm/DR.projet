import { header } from './header.js';
import { footer } from './footer.js';
import { head } from './head.js';
import { service } from './service.js';
import { servicesIndex } from './services-index.js';
import { map } from './map.js';
import { servicesCount } from '../data/site.js';

// services-count : nombre de services du menu dans la langue de la page (accueil)
const partials = {
  head, header, footer, service, 'services-index': servicesIndex, map,
  'services-count': (page) => String(servicesCount(page.lang)),
};

export function render(name, page) {
  const fn = partials[name];
  if (!fn) throw new Error(`[partials] partial inconnu : "${name}"`);
  return fn(page);
}
