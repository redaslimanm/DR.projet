// Modale « Réserver RDV » (markup : src/partials/rdv.js, config : src/data/site.js → rdv).
// Ouverture : tout élément [data-open-rdv] ou l'URL #rdv.
// 2 étapes (prénom, nom, jour → récap) → message WhatsApp pré-rempli (wa.me), puis écran de succès.
import { lenis } from './lenis.js';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const SHEET = '(max-width: 599.98px)';
const visible = (el) => el.getClientRects().length > 0;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Numéros marocains : 05/06/07 + 8 chiffres, ou +212 / 00212 / 212 + 9 chiffres (5, 6 ou 7)
export function normalizePhone(value) {
  const v = value.replace(/[\s.\-()/]/g, '');
  const m = v.match(/^(?:\+212|00212|212|0)([5-7]\d{8})$/);
  return m ? `+212 ${m[1][0]} ${m[1].slice(1).replace(/(\d{2})(?=\d)/g, '$1 ')}` : null;
}

export function initRdv() {
  const root = document.querySelector('[data-rdv]');
  if (!root) return;
  const $ = (sel) => root.querySelector(sel);
  const data = JSON.parse($('[data-rdv-data]').textContent);
  const { ui, lang } = data;
  const locale = lang === 'ar' ? 'ar-MA-u-nu-latn' : 'fr-FR';
  const colon = lang === 'ar' ? ': ' : ' : ';

  const dialog = $('.rdv__dialog');
  const form = $('[data-rdv-form]');
  const live = $('[data-rdv-live]');
  const count = $('[data-rdv-count]');
  const stepperItems = [...root.querySelectorAll('.rdv-stepper__item')];
  const steps = [...root.querySelectorAll('.rdv-step')];
  const btnBack = $('[data-rdv-back]');
  const btnNext = $('[data-rdv-next]');
  const btnSend = $('[data-rdv-send]');
  const btnDone = $('[data-rdv-done]');
  const daysList = $('[data-rdv-days]');
  const recap = $('[data-rdv-recap]');
  const retry = $('[data-rdv-retry]');
  const firstInput = form.elements.firstName;
  const lastInput = form.elements.lastName;
  const LAST = 2; // dernière étape (récap)

  let current = 1; // 1–2 ou 'success'
  let trigger = null;
  let isOpen = false;
  let closeTimer = 0;
  let inerted = [];

  // ---------- Jours proposés (N jours ouverts à partir de demain) ----------
  const fmt = (opts) => new Intl.DateTimeFormat(locale, opts);
  const fWeek = fmt({ weekday: 'short' });
  const fDay = fmt({ day: 'numeric' });
  const fMonth = fmt({ month: 'short' });
  const fFull = fmt({ weekday: 'long', day: 'numeric', month: 'long' });
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  function buildDays() {
    const selected = form.querySelector('input[name="day"]:checked')?.value ?? '';
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    const items = [];
    while (items.length < data.daysAhead) {
      d.setDate(d.getDate() + 1);
      if (data.closedDays.includes(d.getDay())) continue;
      const value = iso(d);
      items.push(`<li><label class="rdv-day">
        <input type="radio" name="day" value="${value}" data-dow="${d.getDay()}" data-full="${fFull.format(d)}" aria-label="${fFull.format(d)}"${value === selected ? ' checked' : ''}>
        <span class="rdv-day__wd" aria-hidden="true">${fWeek.format(d).replace('.', '')}</span>
        <span class="rdv-day__num" aria-hidden="true">${fDay.format(d)}</span>
        <span class="rdv-day__mo" aria-hidden="true">${fMonth.format(d).replace('.', '')}</span>
      </label></li>`);
    }
    daysList.innerHTML = items.join('');
  }

  // ---------- Erreurs ----------
  function setError(id, msg, fields = []) {
    const p = root.querySelector(`#${id}`);
    p.textContent = msg || '';
    p.hidden = !msg;
    fields.forEach((f) => (msg ? f.setAttribute('aria-invalid', 'true') : f.removeAttribute('aria-invalid')));
  }
  const radios = (name) => [...form.querySelectorAll(`input[name="${name}"]`)];
  const checked = (name) => form.querySelector(`input[name="${name}"]:checked`);

  const clean = (input) => input.value.trim().replace(/\s+/g, ' ');
  function checkText(input, errId, msg) {
    const ok = clean(input).length >= 2;
    setError(errId, ok ? '' : msg, [input]);
    return ok;
  }
  const checkFirst = () => checkText(firstInput, 'rdv-err-first-name', ui.errors.firstNameRequired);
  const checkLast = () => checkText(lastInput, 'rdv-err-last-name', ui.errors.lastNameRequired);
  function checkDay() {
    const ok = Boolean(checked('day'));
    setError('rdv-err-day', ok ? '' : ui.errors.day);
    return ok;
  }

  // Valide l'étape 1 ; en cas d'erreur, focus sur le premier champ en erreur
  function validate() {
    const bad = [];
    if (!checkFirst()) bad.push(firstInput);
    if (!checkLast()) bad.push(lastInput);
    if (!checkDay()) bad.push(radios('day')[0]);
    if (bad.length) {
      bad[0].focus();
      bad[0].scrollIntoView({ block: 'center', behavior: reduced() ? 'auto' : 'smooth' });
    }
    return !bad.length;
  }
  const complete = () => clean(firstInput).length >= 2 && clean(lastInput).length >= 2 && Boolean(checked('day'));

  // Validation au blur, puis en direct une fois l'erreur affichée
  for (const [input, check] of [[firstInput, checkFirst], [lastInput, checkLast]]) {
    input.addEventListener('blur', () => input.value && check());
    input.addEventListener('input', () => input.hasAttribute('aria-invalid') && check());
  }
  form.addEventListener('change', (e) => {
    if (e.target.name === 'day') setError('rdv-err-day', '');
  });
  form.addEventListener('submit', (e) => { e.preventDefault(); next(); });

  // ---------- Récapitulatif + message WhatsApp ----------
  function values() {
    return {
      firstName: clean(firstInput),
      lastName: clean(lastInput),
      day: checked('day')?.dataset.full ?? '',
    };
  }

  function waUrl() {
    const v = values();
    const r = ui.recap;
    const lines = [
      ui.wa.hello,
      '',
      `• ${r.firstName}${colon}${v.firstName}`,
      `• ${r.lastName}${colon}${v.lastName}`,
      `• ${r.day}${colon}${v.day}`,
      '',
      ui.wa.thanks,
    ];
    return `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  function renderRecap() {
    const v = values();
    const r = ui.recap;
    const rows = [
      [r.firstName, v.firstName, firstInput],
      [r.lastName, v.lastName, lastInput],
      [r.day, v.day, null],
    ];
    recap.replaceChildren(
      ...rows.map(([label, value, field]) => {
        const row = document.createElement('div');
        row.className = 'rdv-recap__row';
        const dt = document.createElement('dt');
        dt.textContent = label;
        const dd = document.createElement('dd');
        const val = document.createElement('span');
        val.textContent = value;
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.className = 'rdv-recap__edit';
        edit.dataset.goto = field ? field.name : 'day';
        edit.textContent = ui.edit;
        edit.setAttribute('aria-label', `${ui.edit} : ${label}`);
        dd.append(val, edit);
        row.append(dt, dd);
        return row;
      }),
    );
  }
  recap.addEventListener('click', (e) => {
    const b = e.target.closest('[data-goto]');
    if (!b) return;
    // « Modifier » : retour à l'étape 1, focus sur le champ concerné
    go(1, { focus: false });
    const target = b.dataset.goto === 'day' ? checked('day') || radios('day')[0] : form.elements[b.dataset.goto];
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ block: 'center', behavior: 'auto' });
  });

  // ---------- Navigation entre étapes ----------
  function go(n, { focus = true } = {}) {
    current = n;
    const success = n === 'success';
    steps.forEach((s) => (s.hidden = s.dataset.step !== String(n)));
    stepperItems.forEach((li, i) => {
      const done = success || i + 1 < n;
      li.classList.toggle('is-done', done);
      li.classList.toggle('is-current', i + 1 === n);
      if (i + 1 === n) li.setAttribute('aria-current', 'step');
      else li.removeAttribute('aria-current');
    });
    root.classList.toggle('is-success', success);
    if (!success) {
      const text = ui.stepOf.replace('{n}', n);
      count.textContent = text;
      live.textContent = `${text}${colon}${ui.steps[n - 1]}`;
    }
    btnBack.hidden = success || n === 1;
    btnNext.hidden = success || n === LAST;
    btnSend.hidden = n !== LAST;
    btnDone.hidden = !success;
    if (n === LAST) renderRecap();
    form.scrollTop = 0;
    if (!focus) return;
    const target = success
      ? $('[data-rdv-success-title]')
      : root.querySelector(`.rdv-step[data-step="${n}"] .rdv-step__title`);
    if (target) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  }

  function next() {
    if (current === 1 && validate()) go(LAST);
  }
  btnNext.addEventListener('click', next);
  btnBack.addEventListener('click', () => current > 1 && go(current - 1));

  // window.open appelé directement dans le clic (sinon bloqué par iOS Safari)
  btnSend.addEventListener('click', () => {
    // Sécurité : données devenues invalides entre-temps → retour à l'étape 1
    if (!complete()) {
      go(1, { focus: false });
      validate();
      return;
    }
    const url = waUrl();
    const w = window.open(url, '_blank');
    if (w) {
      try { w.opener = null; } catch { /* rien */ }
    } else {
      window.location.href = url;
    }
    retry.href = url;
    go('success');
  });

  function reset() {
    form.reset();
    root.querySelectorAll('[data-rdv-error]').forEach((p) => { p.hidden = true; p.textContent = ''; });
    form.querySelectorAll('[aria-invalid]').forEach((f) => f.removeAttribute('aria-invalid'));
    go(1, { focus: false });
  }

  // ---------- Ouverture / fermeture ----------
  function lockPage(lock) {
    const html = document.documentElement;
    if (lock) {
      html.style.setProperty('--rdv-sbw', `${window.innerWidth - html.clientWidth}px`);
      html.classList.add('rdv-open');
      lenis?.stop();
      inerted = [...document.body.children].filter((el) => el !== root && !el.inert && el.tagName !== 'SCRIPT');
      inerted.forEach((el) => (el.inert = true));
    } else {
      html.classList.remove('rdv-open');
      lenis?.start();
      inerted.forEach((el) => (el.inert = false));
      inerted = [];
    }
  }

  function open(from = null) {
    if (isOpen) return;
    clearTimeout(closeTimer);
    isOpen = true;
    trigger = from || (document.activeElement !== document.body ? document.activeElement : null);
    if (current === 'success') reset();
    buildDays();
    root.hidden = false;
    root.classList.remove('is-closing');
    lockPage(true);
    fitViewport();
    void dialog.offsetWidth; // départ de la transition d'entrée
    root.classList.add('is-open');
    dialog.focus({ preventScroll: true });
    const n = current === 'success' ? LAST : current;
    live.textContent = `${ui.stepOf.replace('{n}', n)}${colon}${ui.steps[n - 1]}`;
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('is-open');
    root.classList.add('is-closing');
    dialog.style.transform = '';
    lockPage(false);
    if (location.hash === '#rdv') history.replaceState(null, '', location.pathname + location.search);
    const back = trigger && trigger.isConnected && visible(trigger) && !trigger.closest('[inert]') ? trigger : document.querySelector('.fab__toggle');
    back?.focus({ preventScroll: true });
    closeTimer = setTimeout(() => {
      root.hidden = true;
      root.classList.remove('is-closing');
      root.style.height = '';
      root.style.top = '';
      if (current === 'success') reset();
    }, reduced() ? 0 : 180);
  }

  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-rdv-close]')) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key !== 'Tab') return;
    const items = [...dialog.querySelectorAll(FOCUSABLE)].filter(visible);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    // Les radios d'un même groupe ne comptent qu'une fois : on se fie au DOM
    if (e.shiftKey && (active === first || active === dialog || !dialog.contains(active))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
      e.preventDefault();
      first.focus();
    }
  });

  // Déclencheurs : [data-open-rdv] (lien de secours vers /contact/ sans JS)
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-open-rdv]');
    if (!t || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    e.stopPropagation(); // pas de défilement d'ancre par Lenis
    open(t);
  });

  // URL #rdv
  const fromHash = () => location.hash === '#rdv' && open();
  window.addEventListener('hashchange', fromHash);
  fromHash();

  // ---------- Clavier mobile : la modale suit la zone visible (visualViewport) ----------
  // Sur iOS, le clavier réduit la zone visible sans redimensionner un élément fixe :
  // on cale la modale sur cette zone, puis on garde le champ actif (et son erreur) visible.
  // (déclaration de fonction : appelée par open(), qui peut s'exécuter plus haut via #rdv)
  function fitViewport() {
    const vv = window.visualViewport;
    if (!vv || !isOpen) return;
    root.style.height = `${vv.height}px`;
    root.style.top = `${vv.offsetTop}px`;
  }
  window.visualViewport?.addEventListener('resize', fitViewport);
  window.visualViewport?.addEventListener('scroll', fitViewport);
  form.addEventListener('focusin', (e) => {
    const field = e.target.closest('.rdv-field');
    if (!field || !e.target.matches('input:not([type=radio]), textarea')) return;
    setTimeout(() => field.scrollIntoView({ block: 'nearest', behavior: reduced() ? 'auto' : 'smooth' }), 300);
  });

  // ---------- Bottom sheet : glisser vers le bas pour fermer (Pointer Events) ----------
  // Zone de saisie : poignée + en-tête + stepper (partie fixe du sheet, jamais scrollée).
  // Le contenu scrollable ne déclenche jamais le geste : pas de conflit avec le défilement.
  // Fermeture si on dépasse 25 % de la hauteur ou si le geste est assez rapide ;
  // sinon retour élastique. Alternatives clavier/clic : bouton Fermer, Échap, fond.
  const backdrop = $('.rdv__backdrop');
  const DRAG_ZONE = '.rdv__handle, .rdv__head, .rdv-stepper';
  const CLOSE_RATIO = 0.25;
  const FLING = 0.5; // px/ms
  let drag = null;

  dialog.addEventListener('pointerdown', (e) => {
    if (!isOpen || drag || !window.matchMedia(SHEET).matches) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const zone = e.target.closest(DRAG_ZONE);
    if (!zone || e.target.closest('button, a, input, label')) return;
    drag = { id: e.pointerId, zone, y0: e.clientY, dy: 0, h: dialog.offsetHeight, samples: [[e.clientY, e.timeStamp]] };
    zone.setPointerCapture(e.pointerId);
    dialog.style.transition = 'none';
    backdrop.style.transition = 'none';
  });

  dialog.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dy = e.clientY - drag.y0;
    drag.dy = dy;
    // vers le haut : légère résistance (le sheet ne monte que de quelques px)
    const offset = dy >= 0 ? dy : -Math.min(16, Math.sqrt(-dy) * 2);
    dialog.style.transform = `translateY(${offset}px)`;
    backdrop.style.opacity = String(1 - Math.min(1, Math.max(0, dy) / drag.h));
    drag.samples.push([e.clientY, e.timeStamp]);
    while (drag.samples.length > 2 && e.timeStamp - drag.samples[0][1] > 100) drag.samples.shift();
  });

  const endDrag = (e, cancelled = false) => {
    if (!drag || e.pointerId !== drag.id) return;
    const { dy, h, samples, zone } = drag;
    drag = null;
    if (zone.hasPointerCapture?.(e.pointerId)) zone.releasePointerCapture(e.pointerId);
    const [y1, t1] = samples[0];
    const velocity = (e.clientY - y1) / Math.max(1, e.timeStamp - t1); // px/ms, > 0 = vers le bas
    backdrop.style.transition = '';
    backdrop.style.opacity = '';
    if (!cancelled && (dy > h * CLOSE_RATIO || (velocity > FLING && dy > 24))) {
      dialog.style.transition = '';
      close(); // part de la position actuelle (transition de sortie)
      return;
    }
    // Retour élastique (instantané si « réduire les animations »)
    dialog.style.transition = reduced() ? 'none' : 'transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    dialog.style.transform = '';
    setTimeout(() => { if (!drag) dialog.style.transition = ''; }, reduced() ? 0 : 340);
  };
  dialog.addEventListener('pointerup', (e) => endDrag(e));
  dialog.addEventListener('pointercancel', (e) => endDrag(e, true));
}
