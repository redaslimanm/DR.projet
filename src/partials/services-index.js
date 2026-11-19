// Page /fr/services/ : cartes groupées, générées depuis src/data/services-content.js
import { localizedService, serviceGroups } from '../data/services-content.js';
import { serviceGroupsAr } from '../data/services-content.ar.js';
import { ph, UI } from './service.js';

const VALIDATED_CARDS = new Set([
  // textes déjà présents sur l'accueil (maquette validée), affichés sans badge
  'consultation-depistage', 'ophtalmologie-pediatrique', 'cataracte', 'chirurgie-refractive',
  'keratocone', 'glaucome', 'retine', 'lentilles-de-contact',
]);

export function servicesIndex(page) {
  const { lang } = page;
  let n = 0;
  const groups = serviceGroups
    .map(({ title: titleFr, slugs }, gi) => {
      const title = lang === 'ar' ? serviceGroupsAr[gi] : titleFr;
      const cards = slugs
        .map((slug) => {
          const s = localizedService(slug, lang);
          n += 1;
          const badge = lang === 'fr' && VALIDATED_CARDS.has(slug) ? '' : '<span class="placeholder">[À VALIDER]</span> ';
          return `<li>
              <a class="service-card" href="/${lang}/services/${s.slug}/">
                <span class="service-card__num" aria-hidden="true">${String(n).padStart(2, '0')}</span>
                <h3 class="service-card__title">${s.name}</h3>
                <p class="service-card__text">${badge}${ph(s.card)}</p>
                <span class="service-card__more">${UI[lang].more} <!-- @icon arrowRight 14 --></span>
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
