import { header } from './header.js';
import { footer } from './footer.js';

const partials = { header, footer };

export function render(name, page) {
  const fn = partials[name];
  if (!fn) throw new Error(`[partials] partial inconnu : "${name}"`);
  return fn(page);
}
