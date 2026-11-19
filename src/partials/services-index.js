// Page /fr/services/ : cartes groupées, générées depuis src/data/services-content.js
import { serviceBySlug, serviceGroups } from '../data/services-content.js';
import { ph } from './service.js';

const VALIDATED_CARDS = new Set([
  // textes déjà présents sur l'accueil (maquette validée), affichés sans badge
  'consultation-depistage', 'ophtalmologie-pediatrique', 'cataracte', 'chirurgie-refractive',
  'keratocone', 'glaucome', 'retine', 'lentilles-de-contact',
]);

export function servicesIndex() {
  let n = 0;
  const groups = serviceGroups
    .map(({ title, slugs }) => {
      const cards = slugs
        .map((slug) => {
          const s = serviceBySlug(slug);
          n += 1;
          const badge = VALIDATED_CARDS.has(slug) ? '' : '<span class="placeholder">[À VALIDER]</span> ';
          return `<li>
              <a class="service-card" href="/fr/services/${s.slug}/">
                <span class="service-card__num" aria-hidden="true">${String(n).padStart(2, '0')}</span>
                <h3 class="service-card__title">${s.name}</h3>
                <p class="service-card__text">${badge}${ph(s.card)}</p>
                <span class="service-card__more">En savoir plus <!-- @icon arrowRight 14 --></span>
              </a>
            </li>`;
        })
        .join('\n            ');
      return `<h2 class="group-title">${title}</h2>
          <ul class="card-grid" role="list">
            ${cards}
          </ul>`;
    })
    .join('\n          ');
  return `<div class="services-index">
          ${groups}
        </div>`;
}
