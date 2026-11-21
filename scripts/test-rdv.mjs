// Test automatisé de la modale « Réserver RDV » (Chrome DevTools Protocol, sans dépendance).
//
// 1. npm run build && npx vite preview --port 4173
// 2. Chrome en mode headless avec le port de débogage :
//    chrome --headless=new --remote-debugging-port=9333 --user-data-dir=<dossier temporaire> about:blank
// 3. node scripts/test-rdv.mjs <largeur> <fr|ar>      (ex. : 390 fr, 1280 ar)
//
// Captures : dossier SHOTS_DIR (par défaut <tmp>/rdv-shots). Code de sortie 1 si un contrôle échoue.
// Les captures de référence sont dans docs/captures/rdv/.
import { writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
const OUT_DIR = process.env.SHOTS_DIR || join(tmpdir(), 'rdv-shots');
mkdirSync(OUT_DIR, { recursive: true });
const OUT = pathToFileURL(OUT_DIR + '/');
const BASE = 'http://localhost:4173';
const [width, lang] = [Number(process.argv[2] || 390), process.argv[3] || 'fr'];
const mobile = width < 600;

const targets = await (await fetch('http://127.0.0.1:9333/json/list')).json();
const page = targets.find((t) => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
};
const send = (method, params = {}) =>
  new Promise((res, rej) => {
    const i = ++id;
    pending.set(i, (d) => (d.error ? rej(new Error(method + ': ' + d.error.message)) : res(d.result)));
    ws.send(JSON.stringify({ id: i, method, params }));
  });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const js = async (expr) => {
  const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(expr + '\n' + JSON.stringify(r.exceptionDetails.exception?.description));
  return r.result.value;
};
const shot = async (name) => {
  await wait(350);
  const fit = await js(`(() => { const m = document.querySelector('[data-rdv]'); if (m.hidden) return null; const r = document.querySelector('.rdv__dialog').getBoundingClientRect(); return r.top >= -1 && r.bottom <= innerHeight + 1 ? true : [Math.round(r.top), Math.round(r.bottom), innerHeight]; })()`);
  if (fit !== null) check(fit === true, `[${name}] la modale tient dans l’écran${fit === true ? '' : ' ' + JSON.stringify(fit)}`);
  const { data } = await send('Page.captureScreenshot', { format: 'png' });
  writeFileSync(new URL(`${lang}-${width}-${name}.png`, OUT), Buffer.from(data, 'base64'));
};
const key = async (k, code, shift = false) => {
  const mods = shift ? 8 : 0;
  const kc = { Tab: 9, Escape: 27 }[k];
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: k, code, modifiers: mods, windowsVirtualKeyCode: kc });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: k, code, modifiers: mods, windowsVirtualKeyCode: kc });
};
const click = (sel) => js(`document.querySelector(${JSON.stringify(sel)}).click()`);
const log = (...a) => console.log(`[${lang} ${width}]`, ...a);
const check = (cond, msg) => { console.log(`[${lang} ${width}] ${cond ? 'OK  ' : 'FAIL'} ${msg}`); if (!cond) process.exitCode = 1; };

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width, height: mobile ? 844 : 800, deviceScaleFactor: mobile ? 2 : 1, mobile });
if (mobile) await send('Emulation.setTouchEmulationEnabled', { enabled: true });
await send('Page.navigate', { url: `${BASE}/${lang}/` });
await wait(1800);
// window.open intercepté : on garde l'URL
await js(`window.__opened = []; window.open = (u) => { window.__opened.push(u); return { opener: 1 }; }; true`);

// 1. FAB
await click('.fab__toggle');
check(await js(`document.querySelector('.fab__toggle').getAttribute('aria-expanded') === 'true'`), 'FAB ouvert, aria-expanded=true');
await shot('01-fab');
await click('.fab__action--rdv');
await wait(400);
check(await js(`!document.querySelector('[data-rdv]').hidden && document.activeElement.classList.contains('rdv__dialog')`), 'modale ouverte, focus dans le dialog');
check(await js(`document.documentElement.classList.contains('rdv-open') && document.querySelector('main').inert`), 'scroll bloqué + fond inert');
check(await js(`document.querySelectorAll('input[name=motif]').length`) === 14, '14 motifs (13 services + Autre)');
await shot('02-motif');

// Erreur étape 1
await click('[data-rdv-next]');
check(await js(`!document.querySelector('#rdv-err-motif').hidden`), 'erreur « choisissez un motif »');
check(await js(`document.activeElement.name === 'motif'`), 'focus sur le premier motif');
await js(`document.querySelector('.rdv__body').scrollTop = 0`);
await shot('03-motif-erreur');
await js(`document.querySelector('input[name=motif][value=consultation-depistage]').click()`);
check(await js(`document.querySelector('#rdv-err-motif').hidden`), 'erreur effacée au choix');
await click('[data-rdv-next]');
check(await js(`document.querySelector('[data-rdv-count]').textContent`) === (lang === 'fr' ? 'Étape 2 sur 4' : 'الخطوة 2 من 4'), 'compteur « Étape 2 sur 4 »');
log('live:', await js(`document.querySelector('[data-rdv-live]').textContent`));
const days = await js(`[...document.querySelectorAll('input[name=day]')].map(i => i.value + '/' + i.dataset.dow)`);
check(days.length === 14 && !days.some((d) => d.endsWith('/0')), `14 jours ouverts sans dimanche (${days[0]} → ${days.at(-1)})`);
// Samedi → après-midi désactivé
await js(`document.querySelector('input[name=day][data-dow="6"]').click()`);
check(await js(`document.querySelector('input[name=slot][value=afternoon]').disabled && !document.querySelector('[data-rdv-satnote]').hidden`), 'samedi : après-midi désactivé + note');
await js(`document.querySelector('.rdv-sub:nth-of-type(2)').scrollIntoView()`);
await shot('04-date-samedi');
await click('[data-rdv-next]');
check(await js(`!document.querySelector('#rdv-err-slot').hidden`), 'erreur créneau manquant');
await js(`document.querySelector('input[name=day][data-dow="2"]').click()`);
check(await js(`!document.querySelector('input[name=slot][value=afternoon]').disabled`), 'mardi : après-midi actif');
await js(`document.querySelector('input[name=slot][value=afternoon]').click()`);
await js(`document.querySelector('.rdv__body').scrollTop = 0`);
await shot('05-date');
await click('[data-rdv-next]');

// Étape 3 : erreurs
await click('[data-rdv-next]');
check(await js(`['rdv-err-name','rdv-err-phone','rdv-err-first'].every(i => !document.getElementById(i).hidden)`), '3 erreurs affichées (nom, tél, première visite)');
check(await js(`document.activeElement.id === 'rdv-name'`), 'focus sur le premier champ en erreur');
check(await js(`document.getElementById('rdv-phone').getAttribute('aria-describedby').includes('rdv-err-phone') && document.getElementById('rdv-phone').getAttribute('aria-invalid') === 'true'`), 'aria-describedby + aria-invalid sur le téléphone');
// Validation au blur : numéro invalide
await js(`const p = document.getElementById('rdv-name'); p.value = 'Amina Benali'; p.dispatchEvent(new Event('input')); const t = document.getElementById('rdv-phone'); t.focus(); t.value = '08 12 34'; t.dispatchEvent(new Event('input')); t.blur(); true`);
const errPhone = await js(`document.getElementById('rdv-err-phone').textContent`);
check(/05|212/.test(errPhone), 'blur : numéro invalide → ' + errPhone);
check(await js(`document.getElementById('rdv-err-name').hidden`), 'erreur du nom effacée en saisie');
await js(`document.querySelector('.rdv__body').scrollTop = 0`);
await shot('06-coordonnees-erreurs');
// Validation des formats marocains (fonction exposée par le module : on reteste via le champ)
for (const [v, ok] of [['0612345678', true], ['06 12 34 56 78', true], ['+212 6 12 34 56 78', true], ['00212712345678', true], ['0532391818', true], ['0812345678', false], ['061234567', false], ['+33612345678', false]]) {
  const r = await js(`(() => { const t = document.getElementById('rdv-phone'); t.value = ${JSON.stringify(v)}; t.dispatchEvent(new Event('blur')); return document.getElementById('rdv-err-phone').hidden; })()`);
  check(r === ok, `téléphone « ${v} » ${ok ? 'accepté' : 'refusé'}`);
}
await js(`document.getElementById('rdv-phone').value = '06 12 34 56 78'; document.getElementById('rdv-phone').dispatchEvent(new Event('blur')); document.querySelector('input[name=first][value=yes]').click(); document.getElementById('rdv-message').value = ${JSON.stringify(lang === 'fr' ? 'Contrôle annuel, je porte des lunettes.' : 'فحص سنوي.')}; true`);
await shot('07-coordonnees');
await click('[data-rdv-next]');
check(await js(`document.querySelectorAll('.rdv-recap__row').length`) === 6, 'récapitulatif : 6 lignes');
await shot('08-recap');

// Focus trap : Tab depuis le dernier élément → retour au premier
await js(`document.querySelector('[data-rdv-send]').focus()`);
await key('Tab', 'Tab');
check(await js(`document.activeElement.classList.contains('rdv__close')`), 'Tab sur le dernier → premier (bouton Fermer)');
await key('Tab', 'Tab', true);
check(await js(`document.activeElement.matches('[data-rdv-send]')`), 'Maj+Tab sur le premier → dernier');

// Envoi
await click('[data-rdv-send]');
const url = (await js(`window.__opened`))[0] || '';
check(url.startsWith('https://wa.me/212762970815?text='), 'window.open(wa.me) appelé dans le clic');
log('message WhatsApp :\n' + decodeURIComponent(url.split('text=')[1] || ''));
check(await js(`!document.querySelector('[data-step=success]').hidden && document.activeElement.matches('[data-rdv-success-title]')`), 'écran de succès + focus sur le titre');
check(await js(`document.querySelector('[data-rdv-retry]').href.startsWith('https://wa.me/')`), 'lien « Réessayer » = wa.me');
await shot('09-succes');

// Échap → fermeture + retour du focus (déclencheur dans le FAB fermé → bouton FAB)
await key('Escape', 'Escape');
await wait(300);
check(await js(`document.querySelector('[data-rdv]').hidden && !document.documentElement.classList.contains('rdv-open') && !document.querySelector('main').inert`), 'Échap ferme, page débloquée');
check(await js(`document.activeElement.classList.contains('fab__toggle')`), 'focus rendu au bouton FAB');

// Réouverture via un déclencheur VISIBLE : bouton du header s'il est affiché, sinon le FAB
const headerVisible = await js(`document.querySelector('.site-header__rdv').getClientRects().length > 0`);
if (headerVisible) {
  await click('.site-header__rdv');
} else {
  await click('.fab__toggle');
  await wait(300);
  await click('.fab__action--rdv');
}
await wait(400);
const via = headerVisible ? 'header' : 'FAB';
check(await js(`document.querySelector('[data-rdv-count]').textContent.includes('1') && !document.querySelector('input[name=motif]:checked')`), via + ' : modale réouverte à l’étape 1, formulaire vidé');
check(await js(`document.querySelector('.rdv').style.height === innerHeight + 'px'`), 'hauteur calée sur la zone visible (visualViewport)');
await click('.rdv__backdrop');
await wait(300);
const expected = headerVisible ? 'site-header__rdv' : 'fab__toggle';
check(await js(`document.querySelector('[data-rdv]').hidden && document.activeElement.classList.contains('${expected}')`), 'clic extérieur ferme, focus rendu au déclencheur (' + via + ')');

// URL #rdv
await send('Page.navigate', { url: `${BASE}/${lang}/contact/#rdv` });
await wait(1500);
check(await js(`!document.querySelector('[data-rdv]').hidden`), 'URL #rdv ouvre la modale');
await key('Escape', 'Escape');
await wait(300);
check(await js(`location.hash === ''`), '#rdv retiré de l’URL à la fermeture');

// Page service : motif présélectionné
await send('Page.navigate', { url: `${BASE}/${lang}/services/glaucome/` });
await wait(1500);
await click('.svc-hero [data-open-rdv]');
await wait(400);
check(await js(`document.querySelector('input[name=motif]:checked')?.value`) === 'glaucome', 'page Glaucome : motif présélectionné');
await js(`document.querySelector('input[name=motif]:checked').scrollIntoView({block:'center'})`);
await shot('10-service-preselection');

if (mobile) {
  const isOpen = () => js(`!document.querySelector('[data-rdv]').hidden && document.querySelector('.rdv').classList.contains('is-open')`);
  const at = (sel) => js(`(() => { const r = document.querySelector(${JSON.stringify(sel)}).getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; })()`);
  const touch = (type, x, y) => send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y }] });
  const swipe = async (sel, dy, steps, ms) => {
    const [x, y] = await at(sel);
    await touch('touchStart', x, y);
    for (let i = 1; i <= steps; i++) { await touch('touchMove', x, y + (dy * i) / steps); if (ms) await wait(ms); }
    await touch('touchEnd', x, y + dy);
  };
  const reopen = async () => { await click('.svc-hero [data-open-rdv]'); await wait(450); };
  const h = await js(`document.querySelector('.rdv__dialog').offsetHeight`);

  await swipe('.rdv__handle', 80, 8, 40);
  await wait(450);
  check(await isOpen() && (await js(`document.querySelector('.rdv__dialog').style.transform`)) === '', 'swipe court et lent (80 px) : retour élastique, reste ouverte');

  await swipe('.rdv-choice--featured', 300, 10, 30);
  await wait(450);
  check(await isOpen(), 'glisser dans le contenu scrollable : la modale ne se ferme pas');

  await swipe('.rdv__handle', Math.round(h * 0.35), 10, 40);
  await wait(450);
  check(!(await isOpen()), `swipe lent au-delà de 25 % (${Math.round(h * 0.35)} px / ${h}) : fermée`);

  await reopen();
  await swipe('.rdv__title', 90, 3, 0);
  await wait(450);
  check(!(await isOpen()), 'swipe rapide (90 px, geste vif) depuis l’en-tête : fermée');

  await reopen();
  await swipe('.rdv__close', 300, 6, 30);
  await wait(450);
  check(await isOpen(), 'glisser depuis le bouton Fermer : pas de swipe (le bouton garde son rôle)');

  // prefers-reduced-motion
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  if (!(await isOpen())) await reopen();
  await swipe('.rdv__handle', 60, 4, 30);
  check((await js(`document.querySelector('.rdv__dialog').style.transform`)) === '' && (await js(`document.querySelector('.rdv__dialog').style.transition`)) === 'none', 'réduire les animations : retour instantané (sans ressort)');
  await swipe('.rdv__handle', Math.round(h * 0.4), 6, 30);
  await wait(60);
  check(await js(`document.querySelector('[data-rdv]').hidden`), 'réduire les animations : fermeture immédiate après swipe');
  await send('Emulation.setEmulatedMedia', { features: [] });
}

ws.close();
