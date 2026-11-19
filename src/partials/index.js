import { header } from './header.js';
import { footer } from './footer.js';
import { head } from './head.js';
import { service } from './service.js';
import { servicesIndex } from './services-index.js';

const partials = { head, header, footer, service, 'services-index': servicesIndex };

export function render(name, page) {
  const fn = partials[name];
  if (!fn) throw new Error(`[partials] partial inconnu : "${name}"`);
  return fn(page);
}
