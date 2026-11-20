import { contact, pages, socials, t as dict } from '../data/site.js';
import { icon, brandIcon } from './icons.js';

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

<nav class="mobile-bar" aria-label="${t.quickActions}">
  <a class="mobile-bar__btn mobile-bar__btn--call" href="${contact.phoneHref}">${icon('phone', { size: 17 })}${t.call}</a>
  <a class="mobile-bar__btn mobile-bar__btn--wa" href="${contact.whatsappHref}" target="_blank" rel="noopener">${icon('whatsapp', { size: 17, stroke: 2 })}${t.whatsapp}</a>
</nav>`;
}
