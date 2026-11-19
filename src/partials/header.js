import { contact, pages, services, t as dict } from '../data/site.js';
import { icon } from './icons.js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const LOGO = '/src/assets/logos/logo-dr-elaouni-couleur.svg';

// Logo en SVG inline (accueil uniquement) : permet de tracer l'œil au trait.
// Les 3 premiers éléments (cercle, iris, paupière dorée) forment l'œil ;
// les 2 derniers chemins sont le texte du logo, qui reste affiché tel quel.
let inlineLogoCache;
function inlineLogo(label) {
  if (!inlineLogoCache) {
    const raw = readFileSync(resolve(process.cwd(), 'src/assets/logos/logo-dr-elaouni-couleur.svg'), 'utf8');
    let n = 0;
    inlineLogoCache = raw
      .replace(/<title>[\s\S]*?<\/title>/, '')
      .replace(/id="gold"/g, 'id="hl-gold"')
      .replace(/url\(#gold\)/g, 'url(#hl-gold)')
      .replace(/id="iris"/g, 'id="hl-iris"')
      .replace(/url\(#iris\)/g, 'url(#hl-iris)')
      .replace(/<(circle|path) /g, (m, tag) => (n++ < 3 ? `<${tag} class="logo-eye" pathLength="1" ` : m));
  }
  return inlineLogoCache.replace(
    '<svg ',
    `<svg class="site-header__logo-svg" role="img" aria-label="${label}" width="112" height="62" `,
  );
}

// Script inline (exécuté avant la 1re peinture) :
// - html.anim  : animations autorisées (JS ok + pas de prefers-reduced-motion)
// - html.intro : tracé de l'œil du logo, 1re visite de l'accueil dans la session
const INLINE = (isHome) =>
  `(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('anim');${
    isHome ? "try{if(sessionStorage.getItem('intro'))return;sessionStorage.setItem('intro','1')}catch(e){return}d.classList.add('intro')" : ''
  }})();`;

// Item de menu actif : accueil = égalité stricte, autres = préfixe
function current(page, slug) {
  const active = slug === '' ? page.path === '' : page.path.startsWith(slug);
  return active ? ' aria-current="page"' : '';
}

export function header(page) {
  const { lang, path, altHref } = page;
  const t = dict[lang];
  const base = `/${lang}/`;
  const href = (key) => base + pages[key];

  const navLink = (key) =>
    `<li class="site-nav__item"><a class="site-nav__link" href="${href(key)}"${current(page, pages[key])}>${t.nav[key]}</a></li>`;

  const serviceLinks = services
    .map(
      (s) =>
        `<li><a class="site-nav__sublink" href="${href('services')}${s.slug}/"${current(page, `${pages.services}${s.slug}/`)}>${s[lang]}</a></li>`,
    )
    .join('');

  const langSwitch = `<a href="${altHref}" lang="${t.otherLang}" hreflang="${t.otherLang}">${t.otherLangName}</a>`;

  const isHome = path === '';
  const logo = isHome
    ? inlineLogo(t.logoAlt)
    : `<img src="${LOGO}" alt="${t.logoAlt}" width="112" height="62">`;

  return `
<script>${INLINE(isHome)}</script>
<a class="skip-link" href="#main">${t.skip}</a>
<div class="topbar">
  <div class="container topbar__inner">
    <ul class="topbar__info" role="list">
      <li>${icon('clock', { size: 15, stroke: 1.6 })}<span>${t.hoursShort}</span></li>
      <li>${icon('pin', { size: 15, stroke: 1.6 })}<span>${t.addressShort}</span></li>
    </ul>
    <p class="topbar__lang"><span aria-current="true">${lang === 'fr' ? 'FR' : t.langName}</span><span aria-hidden="true">|</span>${langSwitch}</p>
  </div>
</div>

<header class="site-header" data-header>
  <div class="container site-header__inner">
    <a class="site-header__logo" href="${base}">
      ${logo}
    </a>

    <nav class="site-nav" id="site-nav" aria-label="${t.navLabel}" data-nav data-lenis-prevent>
      <ul class="site-nav__list" role="list">
        ${navLink('home')}
        ${navLink('about')}
        <li class="site-nav__item site-nav__item--has-sub" data-sub>
          <div class="site-nav__split">
            <a class="site-nav__link" href="${href('services')}"${current(page, pages.services)}>${t.nav.services}</a>
            <button class="site-nav__sub-toggle" type="button" aria-expanded="false" aria-controls="sub-services" aria-label="${t.subToggle}" data-sub-toggle>${icon('chevronDown', { size: 16 })}</button>
          </div>
          <ul class="site-nav__sub" id="sub-services" role="list">
            <li><a class="site-nav__sublink site-nav__sublink--all" href="${href('services')}">${t.allServices}</a></li>
            ${serviceLinks}
          </ul>
        </li>
        ${navLink('equipment')}
        ${navLink('clinic')}
        ${navLink('blog')}
        ${navLink('contact')}
      </ul>

      <div class="site-nav__mobile-extra">
        <a class="btn btn--primary" href="${contact.phoneHref}">${icon('phone')}<span>${t.call}</span><span class="ltr">${contact.phone}</span></a>
        <a class="btn btn--whatsapp" href="${contact.whatsappHref}" target="_blank" rel="noopener">${icon('whatsapp', { stroke: 2 })}${t.whatsapp}</a>
        <p class="site-nav__hours">${icon('clock', { size: 15, stroke: 1.6 })}<span>${t.hoursShort}</span></p>
      </div>
    </nav>

    <div class="site-header__actions">
      <a class="site-header__lang" href="${altHref}" lang="${t.otherLang}" hreflang="${t.otherLang}" aria-label="${t.otherLangShort} – ${t.otherLangLabel}">${t.otherLangShort}</a>
      <a class="btn btn--primary site-header__rdv" href="${href('contact')}">${icon('calendar', { size: 16 })}${t.rdv}</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="${t.openMenu}" data-label-open="${t.openMenu}" data-label-close="${t.closeMenu}" data-burger>
        <span class="burger__open">${icon('menu', { size: 20 })}</span>
        <span class="burger__close">${icon('close', { size: 20 })}</span>
      </button>
    </div>
  </div>
</header>`;
}
