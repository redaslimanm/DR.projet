// Template page service (maquette 03) — rendu à partir de src/data/services-content.js.
// Les marqueurs @picture / @icon produits ici sont traités ensuite par le plugin.
import { servicesContent, localizedService } from '../data/services-content.js';
import { contact } from '../data/site.js';

// Textes d'interface du template
export const UI = {
  fr: {
    home: 'Accueil', services: 'Services', crumb: 'Fil d’Ariane', rdv: 'Prendre rendez-vous',
    doctorAria: 'Le médecin', doctorName: 'Dr Elaouni Rajae', faq: 'Questions fréquentes',
    faqTodo: '[À VALIDER : réponse à rédiger par le Dr Elaouni]',
    ctaText: 'Le secrétariat vous répond du lundi au vendredi de 9h à 17h et le samedi de 9h à 13h.',
    call: 'Appeler le', wa: 'Écrire sur WhatsApp', related: 'Services liés',
    equip: 'Examens complémentaires (OCT, échographie)', more: 'En savoir plus',
  },
  ar: {
    home: 'الرئيسية', services: 'الخدمات', crumb: 'مسار التنقل', rdv: 'احجز موعدك',
    doctorAria: 'الطبيبة', doctorName: 'الدكتورة العوني رجاء', faq: 'أسئلة شائعة',
    faqTodo: '[À VALIDER : réponse à rédiger par le Dr Elaouni]',
    ctaText: 'تجيبكم الكتابة من الإثنين إلى الجمعة من 9:00 إلى 17:00، ويوم السبت من 9:00 إلى 13:00.',
    call: 'اتصلوا على', wa: 'راسلونا عبر واتساب', related: 'خدمات ذات صلة',
    equip: 'فحوصات تكميلية (OCT، الإكوغرافيا)', more: 'اكتشف',
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
// (AR) affiché avec la réponse placeholder. { schema: false } = exclue du JSON-LD.
function faqItem(item, u) {
  if (typeof item === 'string') {
    return `<details class="faq__item">
            <summary>${item}<span class="faq__icon"><!-- @icon plus 18 --></span></summary>
            <p><span class="placeholder">${u.faqTodo}</span></p>
          </details>`;
  }
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
  const s = localizedService(key, lang);
  if (!s) throw new Error(`[service] service lié inconnu : ${key}`);
  return `<li><a href="/${lang}/services/${s.slug}/">${s.name} <!-- @icon arrowRight 16 --></a></li>`;
}

// Section FAQ : seulement les questions publiées (pas de draft) ; aucune → pas de section
function faqSection(s, u) {
  const items = s.faq.filter((q) => typeof q === 'string' || !q.draft);
  if (!items.length) return '';
  return `<section class="svc-section" aria-labelledby="svc-faq">
      <div class="container svc-container">
        <h2 id="svc-faq">${u.faq}</h2>
        <div class="faq faq--bordered">
          ${items.map((q) => faqItem(q, u)).join('\n          ')}
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

  return `
  <main id="main">

    <section class="svc-hero" aria-labelledby="svc-title">
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
        <p class="svc-hero__intro">${todo(s, 'intro')}${ph(s.intro)}</p>
        <a class="btn btn--gold" href="#rdv">${u.rdv}</a>
      </div>
    </section>

    ${
      s.photoFit === 'full'
        ? `<!-- @picture name="${s.photo}" alt="${s.photoAlt}" sizes="(min-width: 64em) 560px, 100vw" class="svc-photo svc-photo--full" eager -->`
        : `<!-- @picture name="${s.photo}" alt="${s.photoAlt}" sizes="(min-width: 64em) 1152px, 100vw" class="svc-photo" eager -->`
    }

    <section class="svc-section" aria-labelledby="svc-what">
      <div class="container svc-container">
        <h2 id="svc-what">${s.whatTitle}</h2>
        ${paras(s.what).map((t, i) => `<p class="svc-text">${i === 0 ? todo(s, 'what') : ''}${ph(t)}</p>`).join('\n        ')}
      </div>
    </section>

    <section class="svc-section" aria-labelledby="svc-signs">
      <div class="container svc-container">
        <h2 id="svc-signs">${s.signsTitle}</h2>
        ${todo(s, 'signs') && `<p class="svc-note">${TODO}</p>`}
        <ul class="sign-grid" role="list">
          ${s.signs.map(([icon, text]) => `<li class="sign-card"><!-- @icon ${icon} 22 1.6 --><span>${ph(text)}</span></li>`).join('\n          ')}
        </ul>
        ${(s.callouts || []).map(callout).join('\n        ')}
      </div>
    </section>

    <section class="svc-section" aria-labelledby="svc-steps">
      <div class="container svc-container">
        <h2 id="svc-steps">${s.stepsTitle}</h2>
        ${todo(s, 'steps') && `<p class="svc-note">${TODO}</p>`}
        <ol class="steps" role="list">
          ${s.steps
            .map(
              ([t, d], i) =>
                `<li class="step"><span class="step__num" aria-hidden="true">${i + 1}</span><div><h3>${t}</h3><p>${ph(d)}</p></div></li>`,
            )
            .join('\n          ')}
        </ol>
      </div>
    </section>

    <section class="svc-section svc-section--tight" aria-label="${u.doctorAria}">
      <div class="container svc-container">
        <div class="doctor-box">
          <!-- @picture name="dr-oct" alt="" sizes="96px" class="doctor-box__photo" -->
          <p><strong>${u.doctorName}</strong>${s.doctor}</p>
        </div>
      </div>
    </section>

    ${faqSection(s, u)}

    <section class="svc-section" id="rdv" aria-labelledby="svc-cta">
      <div class="container svc-container">
        <div class="cta-box">
          <h2 id="svc-cta">${s.ctaTitle}</h2>
          <p>${u.ctaText}</p>
          <div class="cta-box__actions">
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
