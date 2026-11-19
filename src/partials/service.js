// Template page service (maquette 03) — rendu à partir de src/data/services-content.js.
// Les marqueurs @picture / @icon produits ici sont traités ensuite par le plugin.
import { servicesContent, serviceBySlug, CTA_DEFAULT_TEXT } from '../data/services-content.js';
import { contact } from '../data/site.js';

// Texte proposé (non validé) : badge [À VALIDER] ; tout « [ … ] » devient un placeholder visible
export const ph = (text) => text.replace(/\[[^\]]+\]/g, (m) => `<span class="placeholder">${m}</span>`);
const TODO = '<span class="placeholder">[À VALIDER]</span> ';

function relatedLink(key) {
  if (key === '@equipements') {
    return `<li><a href="/fr/equipements/">Examens complémentaires (OCT, échographie) <!-- @icon arrowRight 16 --></a></li>`;
  }
  const s = serviceBySlug(key);
  if (!s) throw new Error(`[service] service lié inconnu : ${key}`);
  return `<li><a href="/fr/services/${s.slug}/">${s.name} <!-- @icon arrowRight 16 --></a></li>`;
}

export function service(page) {
  const slug = page.path.match(/^services\/([\w-]+)\/$/)?.[1];
  const s = slug && serviceBySlug(slug);
  if (!s) throw new Error(`[service] aucun contenu pour /${page.lang}/${page.path}`);

  return `
  <main id="main">

    <section class="svc-hero" aria-labelledby="svc-title">
      <div class="container svc-container">
        <nav class="breadcrumb" aria-label="Fil d’Ariane">
          <ol role="list">
            <li><a href="/fr/">Accueil</a></li>
            <li><a href="/fr/services/">Services</a></li>
            <li><span aria-current="page">${s.name}</span></li>
          </ol>
        </nav>
        <p class="label label--plain svc-hero__label">${s.label}</p>
        <h1 id="svc-title">${s.name}</h1>
        <p class="svc-hero__intro">${TODO}${ph(s.intro)}</p>
        <a class="btn btn--gold" href="#rdv">Prendre rendez-vous</a>
      </div>
    </section>

    <!-- @picture name="${s.photo}" alt="${s.photoAlt}" sizes="(min-width: 64em) 1152px, 100vw" class="svc-photo" eager -->

    <section class="svc-section" aria-labelledby="svc-what">
      <div class="container svc-container">
        <h2 id="svc-what">${s.whatTitle}</h2>
        <p class="svc-text">${TODO}${ph(s.what)}</p>
      </div>
    </section>

    <section class="svc-section" aria-labelledby="svc-signs">
      <div class="container svc-container">
        <h2 id="svc-signs">${s.signsTitle}</h2>
        <p class="svc-note">${TODO}</p>
        <ul class="sign-grid" role="list">
          ${s.signs.map(([icon, text]) => `<li class="sign-card"><!-- @icon ${icon} 22 1.6 --><span>${ph(text)}</span></li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <section class="svc-section" aria-labelledby="svc-steps">
      <div class="container svc-container">
        <h2 id="svc-steps">${s.stepsTitle}</h2>
        <p class="svc-note">${TODO}</p>
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

    <section class="svc-section svc-section--tight" aria-label="Le médecin">
      <div class="container svc-container">
        <div class="doctor-box">
          <!-- @picture name="dr-oct" alt="" sizes="96px" class="doctor-box__photo" -->
          <p><strong>Dr Elaouni Rajae</strong>${s.doctor}</p>
        </div>
      </div>
    </section>

    <section class="svc-section" aria-labelledby="svc-faq">
      <div class="container svc-container">
        <h2 id="svc-faq">Questions fréquentes</h2>
        <div class="faq faq--bordered">
          ${s.faq
            .map(
              (q) => `<details class="faq__item">
            <summary>${q}<span class="faq__icon"><!-- @icon plus 18 --></span></summary>
            <p><span class="placeholder">[À VALIDER : réponse à rédiger par le Dr Elaouni]</span></p>
          </details>`,
            )
            .join('\n          ')}
        </div>
      </div>
    </section>

    <section class="svc-section" id="rdv" aria-labelledby="svc-cta">
      <div class="container svc-container">
        <div class="cta-box">
          <h2 id="svc-cta">${s.ctaTitle}</h2>
          <p>${CTA_DEFAULT_TEXT}</p>
          <div class="cta-box__actions">
            <a class="btn btn--white" href="${contact.phoneHref}"><!-- @icon phone 18 -->Appeler le ${contact.phone}</a>
            <a class="btn btn--whatsapp-solid" href="${contact.whatsappHref}" target="_blank" rel="noopener"><!-- @icon whatsapp 18 2 -->Écrire sur WhatsApp</a>
          </div>
        </div>
      </div>
    </section>

    <section class="svc-section svc-section--last" aria-labelledby="svc-related">
      <div class="container svc-container">
        <h2 id="svc-related" class="related__title">Services liés</h2>
        <ul class="related" role="list">
          ${s.related.map(relatedLink).join('\n          ')}
        </ul>
      </div>
    </section>

  </main>`;
}

export { servicesContent };
