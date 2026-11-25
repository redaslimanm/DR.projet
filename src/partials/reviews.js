// Section « Avis de nos patients » (accueil FR / AR) — avis Google lus au build
// depuis src/data/reviews.json (règles : src/data/reviews.js). Carrousel contrôlé par
// l'utilisateur (flèches, points, glisser, molette, clavier), sans défilement
// automatique : src/js/reviews.js. Sans JS : bande défilante (scroll-snap) seule.
import { loadReviews } from '../data/reviews.js';
import { maps } from '../data/site.js';

// Textes d'interface. AR : TODO AR — traductions proposées, à valider par la doctoresse
// (liste dans ar-a-faire.md). Le texte des avis reste dans sa langue d'origine.
const T = {
  fr: {
    label: 'Avis Google vérifiés',
    title: 'Ce que disent nos patients',
    meta: (n) => `Avis Google + ${n} avis`,
    avg: (x) => x.toFixed(1).replace('.', ','),
    avgLabel: (x) => `Note moyenne : ${x} sur 5`,
    starsLabel: (n) => `${n} étoile${n > 1 ? 's' : ''} sur 5`,
    track: 'Avis de nos patients : utilisez les flèches du clavier pour faire défiler',
    profile: (name) => `Profil Google de ${name} (nouvel onglet)`,
    prev: 'Avis précédent',
    next: 'Avis suivant',
    dots: 'Pagination des avis',
    dot: 'Aller à l’avis {n}',
    newTab: ' (nouvel onglet)',
    all: 'Voir tous les avis sur Google',
    write: 'Laisser un avis',
  },
  ar: {
    // TODO AR : libellé et titre changés le 25/11/2026, traduction à valider
    label: 'آراء Google موثّقة',
    title: 'ماذا يقول مرضانا',
    // <bdi> : isole « Google » et le nombre, sinon le RTL les regroupe et inverse l'ordre
    meta: (n) => `آراء <bdi>Google</bdi> + <bdi>${n}</bdi> ${n >= 3 && n <= 10 ? 'آراء' : 'رأياً'}`,
    avg: (x) => x.toFixed(1),
    avgLabel: (x) => `التقييم المتوسط: ${x} من 5`,
    starsLabel: (n) => `${n} من 5 نجوم`,
    track: 'آراء مرضانا: استعملوا أسهم لوحة المفاتيح للتمرير',
    profile: (name) => `حساب ${name} على Google (نافذة جديدة)`,
    prev: 'الرأي السابق',
    next: 'الرأي التالي',
    dots: 'التنقل بين الآراء',
    dot: 'الانتقال إلى الرأي {n}',
    newTab: ' (نافذة جديدة)',
    all: 'عرض جميع الآراء على Google',
    write: 'أضيفوا رأيكم',
  },
};

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.6l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.2l-5.9 3.2 1.3-6.5-4.9-4.5 6.6-.8z"/></svg>';
const stars5 = STAR.repeat(5);

// Étoiles : rangée grise + rangée dorée coupée à la note (gère les notes non entières)
const stars = (value, label, cls = '') =>
  `<span class="stars${cls}" role="img" aria-label="${label}"><span class="stars__base">${stars5}</span><span class="stars__fill" style="inline-size:${(value / 5) * 100}%">${stars5}</span></span>`;

// Initiale du prénom (1re lettre du nom affiché)
const initial = (name) => [...name.trim()][0]?.toLocaleUpperCase('fr') ?? '?';

export function reviews({ lang }) {
  const t = T[lang];
  const { average, count, reviews: list } = loadReviews();
  const avgText = t.avg(average);
  const fr = lang === 'ar' ? ' lang="fr" dir="ltr"' : ''; // avis en français sur la page AR

  const cards = list
    .map((r, i) => {
      const name = esc(r.author);
      const nameHtml = r.url
        ? `<a class="review-card__name" href="${esc(r.url)}" target="_blank" rel="noopener nofollow" aria-label="${esc(t.profile(r.author))}"><bdi>${name}</bdi></a>`
        : `<span class="review-card__name"><bdi>${name}</bdi></span>`;
      return `<li class="review-card">
            <div class="review-card__head">
              <span class="review-card__avatar review-card__avatar--${i % 4}" aria-hidden="true">${esc(initial(r.author))}</span>
              <div class="review-card__who">
                ${nameHtml}
                ${stars(r.rating, t.starsLabel(r.rating), ' stars--sm')}
              </div>
            </div>
            <p class="review-card__text"${fr}>${esc(r.text).replace(/\n+/g, '<br>')}</p>
          </li>`;
    })
    .join('\n          ');

  return `<section class="section reviews" id="avis" aria-labelledby="reviews-title" data-reviews>
      <div class="container">
        <div class="section-head section-head--center">
          <p class="label label--plain">${t.label}</p>
          <h2 id="reviews-title">${t.title}</h2>
        </div>
        <div class="reviews-bar">
          <div class="reviews-score">
            <p class="reviews-score__avg" aria-hidden="true">${avgText}</p>
            <div class="reviews-score__side">
              ${stars(average, t.avgLabel(avgText))}
              <p class="reviews-score__meta">${t.meta(count)}</p>
            </div>
          </div>
          <div class="reviews-nav" data-reviews-nav hidden>
            <button class="reviews-nav__btn" type="button" aria-label="${t.prev}" aria-controls="reviews-track" data-reviews-prev><!-- @icon chevronLeft 18 2 --></button>
            <button class="reviews-nav__btn" type="button" aria-label="${t.next}" aria-controls="reviews-track" data-reviews-next><!-- @icon chevronRight 18 2 --></button>
          </div>
        </div>
      </div>

      <div class="container container--bleed-mobile">
        <ul class="reviews-track" id="reviews-track" role="list" tabindex="0" aria-label="${t.track}" data-reviews-track>
          ${cards}
        </ul>
        <div class="reviews-dots" role="group" aria-label="${t.dots}" data-reviews-dots data-dot-label="${t.dot}"></div>
      </div>

      <div class="container reviews-actions">
        <a class="btn btn--secondary" href="${maps.reviews}" target="_blank" rel="noopener" aria-label="${t.all}${t.newTab}">${t.all}<!-- @icon externalLink 16 --></a>
        <a class="btn btn--secondary" href="${maps.writeReview}" target="_blank" rel="noopener" aria-label="${t.write}${t.newTab}">${t.write}<!-- @icon externalLink 16 --></a>
      </div>
    </section>`;
}
