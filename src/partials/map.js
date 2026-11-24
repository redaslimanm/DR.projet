// Carte Google Maps « au clic » : rien n'est chargé depuis Google tant que le
// visiteur ne clique pas (performance + protection des données, loi 09-08).
// Sans JS : lien direct vers la fiche Google Maps.
import { maps } from '../data/site.js';

const T = {
  fr: {
    title: 'Carte Google Maps',
    btn: 'Afficher la carte',
    note: 'La carte est fournie par Google : l’afficher transmet des données de navigation à Google.',
    open: 'Ouvrir la fiche dans Google Maps',
    iframe: 'Carte Google Maps du cabinet du Dr Elaouni Rajae',
  },
  ar: {
    title: 'خريطة Google Maps',
    btn: 'عرض الخريطة',
    note: 'الخريطة مقدمة من Google: عرضها ينقل معطيات التصفح إلى Google.',
    open: 'فتح البطاقة في Google Maps',
    iframe: 'خريطة Google Maps لعيادة الدكتورة العوني رجاء',
  },
};

export function map({ lang }) {
  const t = T[lang];
  return `<div class="map-embed" data-map-embed="${maps.embed(lang).replace(/&/g, '&amp;')}" data-map-title="${t.iframe}">
            <!-- @icon map 28 1.6 -->
            <p class="map-embed__title">${t.title}</p>
            <button class="btn btn--outline map-embed__btn" type="button" hidden>${t.btn}</button>
            <a class="map-embed__link" href="${maps.place}" target="_blank" rel="noopener">${t.open}</a>
            <p class="map-embed__note">${t.note}</p>
          </div>`;
}
