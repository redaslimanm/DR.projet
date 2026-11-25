// Section « Avis de nos patients » (accueil FR / AR) — avis Google lus au build
// depuis src/data/reviews.json (règles : src/data/reviews.js). Carrousel contrôlé par
// l'utilisateur (flèches, points, glisser, molette, clavier), sans défilement
// automatique : src/js/reviews.js. Sans JS : bande défilante (scroll-snap) seule.
import { loadReviews } from '../data/reviews.js';
import { maps } from '../data/site.js';

// Textes d'interface. AR : TODO AR — traductions proposées, à valider par la doctoresse
// (liste dans ar-a-faire.md). Le texte des avis reste dans sa langue d'origine.
// « Google » dans le titre, aux couleurs d'origine du logo (G bleu, o rouge, o jaune, g bleu,
// l vert, e rouge). Lettres dans des <span> : le mot reste lu « Google » par les lecteurs d'écran.
const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335'];
const GOOGLE_WORD = `<span class="rv-title__google">${[...'Google']
  .map((c, i) => `<span style="color:${GOOGLE_COLORS[i]}">${c}</span>`)
  .join('')}</span>`;

const T = {
  fr: {
    h2a: `Avis ${GOOGLE_WORD}`,
    h2b: 'Vérifiés',
    title: 'Ce que disent nos patients',
    meta: (n) => `Plus de ${n} avis sur Google`,
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
    h2a: `آراء <bdi>${GOOGLE_WORD}</bdi>`,
    h2b: 'موثّقة',
    title: 'ماذا يقول مرضانا',
    // <bdi> : isole « Google » et le nombre, sinon le RTL les regroupe et inverse l'ordre
    meta: (n) => `أكثر من <bdi>${n}</bdi> ${n >= 3 && n <= 10 ? 'آراء' : 'رأياً'} على <bdi>Google</bdi>`,
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

// Titre « Avis Google 100% Vérifiés » (demande du 25/11/2026) : « 100% » en vert émeraude,
// arc tracé à la main sous « Vérifiés » (animé à l'apparition de la section, sauf
// prefers-reduced-motion), coche dans un cercle en contour. SVG décoratifs : aria-hidden.
const ARC = '<svg class="rv-title__arc" viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M3 16 C 48 23, 120 22, 197 6" pathLength="1"/></svg>';
// Logo G de Google (couleurs officielles), avant le titre
const GOOGLE_G = '<svg class="rv-title__g" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/></svg>';
const CHECK = '<svg class="rv-title__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><path d="m7.8 12.4 2.9 2.9 5.5-5.6"/></svg>';

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
          <h2 class="rv-title" id="reviews-title">${GOOGLE_G}${t.h2a} <span class="rv-title__accent">100%</span> <span class="rv-title__word">${t.h2b}${ARC}</span>${CHECK}</h2>
          <p class="rv-subtitle">${t.title}</p>
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
