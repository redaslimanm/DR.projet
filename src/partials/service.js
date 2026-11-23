// Template page service (maquette 03) — rendu à partir de src/data/services-content.js.
// Les marqueurs @picture / @icon produits ici sont traités ensuite par le plugin.
import { servicesContent, localizedService, serviceAvailable, serviceBySlug } from '../data/services-content.js';
import { contact } from '../data/site.js';
import { brandIcon } from './icons.js';

// Textes d'interface du template
export const UI = {
  fr: {
    home: 'Accueil', services: 'Services', crumb: 'Fil d’Ariane', rdv: 'Prendre rendez-vous',
    doctorAria: 'Le médecin', doctorName: 'Dr Elaouni Rajae', faq: 'Questions fréquentes',
    ctaText: 'Le secrétariat vous répond du lundi au vendredi de 9h à 17h et le samedi de 9h à 13h.',
    call: 'Appeler le', wa: 'Écrire sur WhatsApp', related: 'Services liés',
    equip: 'Examens complémentaires (OCT, échographie)', more: 'En savoir plus',
    reel: 'Voir le reel sur Instagram',
    reelNote: 'Vidéo publiée par le Dr Elaouni Rajae sur Instagram. Lecture via Instagram.',
    reelFrame: 'Reel Instagram du Dr Elaouni Rajae',
  },
  ar: {
    home: 'الرئيسية', services: 'الخدمات', crumb: 'مسار التنقل', rdv: 'احجز موعدك',
    doctorAria: 'الطبيبة', doctorName: 'الدكتورة العوني رجاء', faq: 'أسئلة شائعة',
    ctaText: 'تجيبكم الكتابة من الإثنين إلى الجمعة من 9:00 إلى 17:00، ويوم السبت من 9:00 إلى 13:00.',
    call: 'اتصلوا على', wa: 'راسلونا عبر واتساب', related: 'خدمات ذات صلة',
    equip: 'فحوصات تكميلية (OCT، الإكوغرافيا)', more: 'اكتشف',
    // TODO AR : textes du bloc reel Instagram (page Chalazion), à valider par la doctoresse
    reel: 'شاهدوا الفيديو على إنستغرام',
    reelNote: 'فيديو نشرته الدكتورة العوني رجاء على إنستغرام. التشغيل عبر إنستغرام.',
    reelFrame: 'فيديو إنستغرام للدكتورة العوني رجاء',
  },
};

// Texte proposé (non validé) : badge [À VALIDER] ; tout « [ … ] » devient un placeholder visible
export const ph = (text) => text.replace(/\[[^\]]+\]/g, (m) => `<span class="placeholder">${m}</span>`);
const TODO = '<span class="placeholder">[À VALIDER]</span> ';

// Badge [À VALIDER] par section : retiré des sections dont le texte a été
// fourni par la doctoresse (champ FR `validated`). En AR : toujours affiché.
const todo = (s, key) => (s.validated?.includes(key) ? '' : TODO);

// Un texte = une chaîne ou un tableau de paragraphes
const paras = (text) => (Array.isArray(text) ? text : [text]);

// FAQ : { q, a } = question avec réponse ; { q, draft: true } = question sans
// réponse, NON affichée (en attente de la doctoresse) ; chaîne = ancien format
// AR (question sans réponse) : NON affichée non plus. { schema: false } = exclue du JSON-LD.
const isPublished = (q) => typeof q !== 'string' && !q.draft;

function faqItem(item) {
  const attr = item.schema === false ? ' data-schema="off"' : '';
  // réponse : chaîne, ou tableau de paragraphes (un sous-tableau = liste à puces)
  const body = paras(item.a)
    .map((x) =>
      Array.isArray(x)
        ? `<ul class="faq__list" role="list">${x.map((li) => `<li>${li}</li>`).join('')}</ul>`
        : `<p>${x}</p>`,
    )
    .join('\n            ');
  return `<details class="faq__item"${attr}>
            <summary>${item.q}<span class="faq__icon"><!-- @icon plus 18 --></span></summary>
            ${body}
          </details>`;
}

// Encadrés beiges (section « Quand consulter ? » / « Pour qui ? »)
function callout(c) {
  if (c.type === 'alert') {
    return `<div class="svc-callout svc-callout--alert" role="note">
          <span class="svc-callout__icon"><!-- @icon triangleAlert 22 1.6 --></span>
          <p>${c.lead ? `<strong>${c.lead}</strong> ` : ''}${c.text}</p>
        </div>`;
  }
  return `<div class="svc-callout">
          <p class="svc-callout__title">${c.title}</p>
          <ul class="svc-callout__grid" role="list">
            ${c.items
              .map(
                ([icon, title, text]) =>
                  `<li><span class="svc-callout__icon"><!-- @icon ${icon} 22 1.6 --></span><div><strong>${title}</strong><span>${text}</span></div></li>`,
              )
              .join('\n            ')}
          </ul>
        </div>`;
}

function relatedLink(key, lang) {
  if (key === '@equipements') {
    return `<li><a href="/${lang}/equipements/">${UI[lang].equip} <!-- @icon arrowRight 16 --></a></li>`;
  }
  if (!serviceBySlug(key)) throw new Error(`[service] service lié inconnu : ${key}`);
  if (!serviceAvailable(key, lang)) return ''; // service pas encore traduit dans cette langue
  const s = localizedService(key, lang);
  return `<li><a href="/${lang}/services/${s.slug}/">${s.name} <!-- @icon arrowRight 16 --></a></li>`;
}

// Liste numérotée (déroulement, ou situations détaillées) : [titre, texte, images?]
// images (optionnel) : [{ name, alt, natural? }] affichées sous le texte de l'étape
// natural: true → image entière (sans recadrage), 420 px au plus
function stepsList(items) {
  const media = (imgs) =>
    imgs?.length
      ? `<div class="step__media${imgs.some((p) => p.natural) ? ' step__media--natural' : ''}">${imgs
          .map((p) =>
            p.natural
              ? `<!-- @picture name="${p.name}" alt="${p.alt}" sizes="(min-width: 64em) 420px, calc(100vw - 94px)" -->`
              : `<!-- @picture name="${p.name}" alt="${p.alt}" sizes="(min-width: 64em) 260px, 45vw" -->`,
          )
          .join('')}</div>`
      : '';
  return `<ol class="steps" role="list">
          ${items
            .map(
              ([t, d, imgs], i) =>
                `<li class="step"><span class="step__num" aria-hidden="true">${i + 1}</span><div><h3>${t}</h3><p>${ph(d)}</p>${media(imgs)}</div></li>`,
            )
            .join('\n          ')}
        </ol>`;
}

// Schéma illustrant « Qu'est-ce que… ? » : { src, alt, width, height } — fichier SVG de
// src/assets/images/, affiché tel quel (vectoriel : net à toutes les tailles)
const figure = (f) =>
  f
    ? `<figure class="svc-figure"><img src="/src/assets/images/${f.src}" alt="${f.alt}" width="${f.width}" height="${f.height}" loading="lazy" decoding="async"></figure>`
    : '';

// Photo / illustration d'une section (pages ajoutées en nov. 2026) :
// { name, alt, caption? } — image de src/assets/images/ (AVIF + WebP), légende facultative
const media = (m, cls, sizes) =>
  m
    ? `<figure class="svc-media ${cls}">
          <!-- @picture name="${m.name}" alt="${m.alt}" sizes="${sizes}" -->${m.caption ? `<figcaption>${m.caption}</figcaption>` : ''}
        </figure>`
    : '';

// Reel Instagram (« façade » : l'iframe Instagram n'est créée qu'au clic, cf. src/js/video.js).
// `reel` absent → rien ; `reel: null` → emplacement prévu mais lien pas encore fourni :
// placeholder visible en dev seulement (retiré au build) ; `reel: 'https://…/reel/ID/'` → bloc.
// Logo Instagram (le marqueur @icon ne gère que les icônes au trait) ; dégradé renommé
// pour ne pas dupliquer l'id « ig-grad » du logo du footer
const IG_ICON = brandIcon('instagram', { size: 26 }).replace(/ig-grad/g, 'ig-grad-reel');

function reelBlock(s, u) {
  if (!('reel' in s)) return '';
  if (!s.reel) {
    return `<p class="svc-note svc-reel-todo" data-draft><span class="placeholder">[À COMPLÉTER : reel Instagram sur le chalazion — lien à fournir par la doctoresse]</span></p>`;
  }
  const id = s.reel.match(/instagram\.com\/(?:reels?|p)\/([\w-]+)/)?.[1];
  if (!id) throw new Error(`[service] lien de reel Instagram invalide : ${s.reel}`);
  return `<div class="reel-box">
          <a class="reel-box__link" href="${s.reel}" data-ig="${id}" data-ig-title="${u.reelFrame}" target="_blank" rel="noopener">
            <span class="reel-box__icon" aria-hidden="true">${IG_ICON}</span>
            <span class="reel-box__title">${u.reel}</span>
            <span class="reel-box__play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z"/></svg></span>
          </a>
          <p class="reel-box__note">${u.reelNote}</p>
        </div>`;
}

// Rubrique de mise en garde : cartes numérotées + encadré « À retenir »
// w = { title, items: [[titre, texte]], note: { lead, text } }
function warningsSection(w) {
  if (!w) return '';
  return `<section class="svc-section" aria-labelledby="svc-warnings">
      <div class="container svc-container">
        <h2 id="svc-warnings">${w.title}</h2>
        <ol class="warn-grid" role="list">
          ${w.items
            .map(
              ([t, d], i) =>
                `<li class="warn-card"><span class="step__num" aria-hidden="true">${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`,
            )
            .join('\n          ')}
        </ol>
        ${callout({ type: 'alert', ...w.note })}
      </div>
    </section>`;
}

// Section FAQ : seulement les questions publiées (pas de draft) ; aucune → pas de section
function faqSection(s, u) {
  const items = s.faq.filter(isPublished);
  if (!items.length) return '';
  return `<section class="svc-section" aria-labelledby="svc-faq">
      <div class="container svc-container">
        <h2 id="svc-faq">${u.faq}</h2>
        <div class="faq faq--bordered">
          ${items.map(faqItem).join('\n          ')}
        </div>
      </div>
    </section>`;
}

export function service(page) {
  const { lang } = page;
  const u = UI[lang];
  const slug = page.path.match(/^services\/([\w-]+)\/$/)?.[1];
  const s = slug && localizedService(slug, lang);
  if (!s) throw new Error(`[service] aucun contenu pour /${lang}/${page.path}`);
  // Photo en tête facultative (pages ajoutées en nov. 2026 : images dans les sections)
  const hasPhoto = Boolean(s.photos || s.photo);

  return `
  <main id="main">

    <section class="svc-hero${hasPhoto ? '' : ' svc-hero--flat'}" aria-labelledby="svc-title">
      <div class="container svc-container">
        <nav class="breadcrumb" aria-label="${u.crumb}">
          <ol role="list">
            <li><a href="/${lang}/">${u.home}</a></li>
            <li><a href="/${lang}/services/">${u.services}</a></li>
            <li><span aria-current="page">${s.name}</span></li>
          </ol>
        </nav>
        <p class="label label--plain svc-hero__label">${s.label}</p>
        <h1 id="svc-title">${s.name}</h1>
        ${s.intro ? `<p class="svc-hero__intro">${todo(s, 'intro')}${ph(s.intro)}</p>` : ''}
        <a class="btn btn--gold" href="#contact-rdv" data-open-rdv="${s.slug}" aria-haspopup="dialog">${u.rdv}</a>
      </div>
    </section>

    ${
      !hasPhoto
        ? ''
        : s.photos
        ? `<div class="svc-photos${s.photosLayout === 'equal' ? ' svc-photos--equal' : ''}">
      ${s.photos
        .map(
          (p, i) =>
            `<!-- @picture name="${p.name}" alt="${p.alt}" sizes="${
              s.photosLayout === 'equal'
                ? '(min-width: 64em) 570px, 50vw'
                : i === 0
                  ? '(min-width: 64em) 680px, 60vw'
                  : '(min-width: 64em) 460px, 40vw'
            }" class="svc-photos__item"${i === 0 ? ' eager' : ''} -->`,
        )
        .join('\n      ')}
    </div>`
        : s.photoFit === 'full'
        ? `<!-- @picture name="${s.photo}" alt="${s.photoAlt}" sizes="(min-width: 64em) 560px, 100vw" class="svc-photo svc-photo--full" eager -->`
        : `<!-- @picture name="${s.photo}" alt="${s.photoAlt}" sizes="(min-width: 64em) 1152px, 100vw" class="svc-photo" eager -->`
    }

    <section class="svc-section" aria-labelledby="svc-what">
      <div class="container svc-container">
        <h2 id="svc-what">${s.whatTitle}</h2>
        ${s.whatImage ? '<div class="svc-what"><div class="svc-what__text">' : ''}
        ${paras(s.what).map((t, i) => `<p class="svc-text">${i === 0 ? todo(s, 'what') : ''}${ph(t)}</p>`).join('\n        ')}
        ${s.whatImage ? `</div>${media(s.whatImage, 'svc-what__media', '(min-width: 64em) 340px, calc(100vw - 40px)')}</div>` : ''}
        ${figure(s.whatFigure)}
      </div>
    </section>

    <section class="svc-section" aria-labelledby="svc-signs">
      <div class="container svc-container">
        <h2 id="svc-signs">${s.signsTitle}</h2>
        ${todo(s, 'signs') && `<p class="svc-note">${TODO}</p>`}
        ${
          s.situations
            ? stepsList(s.situations)
            : s.signCards
            ? `<ul class="sign-grid sign-grid--3" role="list">
          ${s.signCards
            .map(([icon, title, text]) => `<li class="sign-card"><!-- @icon ${icon} 22 1.6 --><strong>${title}</strong><span>${text}</span></li>`)
            .join('\n          ')}
        </ul>`
            : `<ul class="sign-grid" role="list">
          ${s.signs.map(([icon, text]) => `<li class="sign-card"><!-- @icon ${icon} 22 1.6 --><span>${ph(text)}</span></li>`).join('\n          ')}
        </ul>`
        }
        ${(s.callouts || []).map(callout).join('\n        ')}
      </div>
    </section>

    <section class="svc-section" aria-labelledby="svc-steps">
      <div class="container svc-container">
        <h2 id="svc-steps">${s.stepsTitle}</h2>
        ${todo(s, 'steps') && `<p class="svc-note">${TODO}</p>`}
        ${stepsList(s.steps)}
        ${media(s.stepsImage, 'svc-media--steps', '(min-width: 64em) 560px, calc(100vw - 40px)')}
        ${reelBlock(s, u)}
      </div>
    </section>

    ${warningsSection(s.warnings)}

    <section class="svc-section svc-section--tight" aria-label="${u.doctorAria}">
      <div class="container svc-container">
        <div class="doctor-box">
          <!-- @picture name="dr-oct" alt="" sizes="96px" class="doctor-box__photo" -->
          <p><strong>${u.doctorName}</strong>${s.doctor}</p>
        </div>
      </div>
    </section>

    ${faqSection(s, u)}

    <section class="svc-section" id="contact-rdv" aria-labelledby="svc-cta">
      <div class="container svc-container">
        <div class="cta-box">
          <h2 id="svc-cta">${s.ctaTitle}</h2>
          <p>${s.ctaText || u.ctaText}</p>
          <div class="cta-box__actions">
            ${s.ctaText ? `<a class="btn btn--gold" href="#contact-rdv" data-open-rdv="${s.slug}" aria-haspopup="dialog"><!-- @icon calendar 18 -->${u.rdv}</a>` : ''}
            <a class="btn btn--white" href="${contact.phoneHref}"><!-- @icon phone 18 -->${u.call} <bdi dir="ltr">${contact.phone}</bdi></a>
            <a class="btn btn--whatsapp-solid" href="${contact.whatsappHref}" target="_blank" rel="noopener"><!-- @icon whatsapp 18 2 -->${u.wa}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="svc-section svc-section--last" aria-labelledby="svc-related">
      <div class="container svc-container">
        <h2 id="svc-related" class="related__title">${u.related}</h2>
        <ul class="related" role="list">
          ${s.related.map((k) => relatedLink(k, lang)).join('\n          ')}
        </ul>
      </div>
    </section>

  </main>`;
}

export { servicesContent };
