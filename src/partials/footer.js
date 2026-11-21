import { contact, pages, socials, t as dict } from '../data/site.js';
import { icon, brandIcon } from './icons.js';
import { rdvModal } from './rdv.js';

const LOGO_WHITE = '/src/assets/logos/logo-dr-elaouni-blanc.svg';

function social(name, url, key) {
  return `<li><a class="social-link" href="${url}" target="_blank" rel="noopener" aria-label="${name}" title="${name}">${brandIcon(key)}</a></li>`;
}

export function footer(page) {
  const { lang } = page;
  const t = dict[lang];
  const href = (key) => `/${lang}/${pages[key]}`;
  const year = new Date().getFullYear();

  return `
<footer class="site-footer">
  <div class="container site-footer__grid">
    <div class="site-footer__brand">
      <img src="${LOGO_WHITE}" alt="${t.logoAlt}" width="126" height="70" loading="lazy">
      <p>${t.footerTagline}</p>
    </div>

    <nav class="site-footer__col site-footer__col--nav" aria-label="${t.footerNavLabel}">
      <p class="site-footer__title">${t.footerCabinet}</p>
      <ul role="list">
        <li><a href="${href('about')}">${t.nav.about}</a></li>
        <li><a href="${href('services')}">${t.nav.services}</a></li>
        <li><a href="${href('equipment')}">${t.nav.equipment}</a></li>
        <li><a href="${href('blog')}">${t.footerBlog}</a></li>
      </ul>
    </nav>

    <div class="site-footer__col site-footer__col--hours">
      <p class="site-footer__title">${t.footerHours}</p>
      <dl class="site-footer__hours">
        ${t.hours.map(([d, h]) => `<div><dt>${d}</dt><dd>${h}</dd></div>`).join('')}
      </dl>
    </div>

    <div class="site-footer__col site-footer__col--social">
      <p class="site-footer__title">${t.footerFollow}</p>
      <ul class="social-list" role="list">
        ${social('Instagram', socials.instagram, 'instagram')}
        ${social('Facebook', socials.facebook, 'facebook')}
        ${social(t.whatsapp, contact.whatsappHref, 'whatsapp')}
      </ul>
    </div>
  </div>

  <div class="container site-footer__bottom">
    <p>© ${year} ${t.copyright}</p>
    <p><a href="${href('legal')}">${t.legal}</a> · <a href="${href('privacy')}">${t.privacy}</a></p>
  </div>
</footer>

<div class="fab" data-fab>
  <div class="fab__backdrop" data-fab-backdrop hidden></div>
  <nav class="fab__menu" id="fab-menu" aria-label="${t.quickActions}" aria-hidden="true" inert>
    <a class="fab__action fab__action--rdv" href="${href('contact')}" data-open-rdv aria-haspopup="dialog"><span class="fab__label">${t.fabRdv}</span><span class="fab__mini">${icon('calendar', { size: 22, stroke: 2 })}</span></a>
    <a class="fab__action fab__action--wa" href="${contact.whatsappHref}" target="_blank" rel="noopener"><span class="fab__label">${t.fabWa}</span><span class="fab__mini">${icon('whatsapp', { size: 24 })}</span></a>
    <a class="fab__action fab__action--call" href="${contact.phoneHref}"><span class="fab__label">${t.fabCall}</span><span class="fab__mini">${icon('phone', { size: 22, stroke: 2 })}</span></a>
  </nav>
  <button class="fab__toggle" type="button" aria-expanded="false" aria-controls="fab-menu" aria-label="${t.fabOpen}" data-label-open="${t.fabOpen}" data-label-close="${t.fabClose}">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
  </button>
</div>
${rdvModal(page)}`;
}
