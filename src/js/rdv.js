// Modale « Réserver RDV » (markup : src/partials/rdv.js, config : src/data/site.js → rdv).
// Ouverture : tout élément [data-open-rdv] (valeur facultative = motif présélectionné)
// ou l'URL #rdv. 4 étapes → message WhatsApp pré-rempli (wa.me), puis écran de succès.
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
  const satNote = $('[data-rdv-satnote]');
  const recap = $('[data-rdv-recap]');
  const retry = $('[data-rdv-retry]');
  const afternoon = form.querySelector('input[name="slot"][value="afternoon"]');
  const nameInput = form.elements.name;
  const phoneInput = form.elements.phone;

  let current = 1; // 1–4 ou 'success'
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
    syncSaturday();
  }

  // Samedi (jours « matin uniquement ») : après-midi désactivé
  function syncSaturday() {
    const day = form.querySelector('input[name="day"]:checked');
    const morningOnly = day ? data.morningOnlyDays.includes(Number(day.dataset.dow)) : false;
    afternoon.disabled = morningOnly;
    if (morningOnly && afternoon.checked) afternoon.checked = false;
    afternoon.closest('.rdv-choice').classList.toggle('is-disabled', morningOnly);
    satNote.hidden = !morningOnly;
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

  function checkName() {
    const ok = nameInput.value.trim().length >= 2;
    setError('rdv-err-name', ok ? '' : ui.errors.nameRequired, [nameInput]);
    return ok;
  }
  function checkPhone() {
    const v = phoneInput.value.trim();
    const msg = !v ? ui.errors.phoneRequired : normalizePhone(v) ? '' : ui.errors.phoneInvalid;
    setError('rdv-err-phone', msg, [phoneInput]);
    return !msg;
  }
  function checkRadio(name, errId, msg) {
    const ok = Boolean(checked(name));
    setError(errId, ok ? '' : msg);
    return ok;
  }

  // Valide l'étape ; en cas d'erreur, focus sur le premier champ en erreur
  function validate(n) {
    const bad = [];
    if (n === 1 && !checkRadio('motif', 'rdv-err-motif', ui.errors.motif)) bad.push(radios('motif')[0]);
    if (n === 2) {
      if (!checkRadio('day', 'rdv-err-day', ui.errors.day)) bad.push(radios('day')[0]);
      if (!checkRadio('slot', 'rdv-err-slot', ui.errors.slot)) bad.push(radios('slot')[0]);
    }
    if (n === 3) {
      if (!checkName()) bad.push(nameInput);
      if (!checkPhone()) bad.push(phoneInput);
      if (!checkRadio('first', 'rdv-err-first', ui.errors.first)) bad.push(radios('first')[0]);
    }
    if (bad.length) {
      bad[0].focus();
      bad[0].scrollIntoView({ block: 'center', behavior: reduced() ? 'auto' : 'smooth' });
    }
    return !bad.length;
  }

  // Validation au blur (champs texte), puis en direct une fois l'erreur affichée
  nameInput.addEventListener('blur', () => nameInput.value && checkName());
  phoneInput.addEventListener('blur', () => phoneInput.value && checkPhone());
  nameInput.addEventListener('input', () => nameInput.hasAttribute('aria-invalid') && checkName());
  phoneInput.addEventListener('input', () => phoneInput.hasAttribute('aria-invalid') && checkPhone());
  form.addEventListener('change', (e) => {
    const { name } = e.target;
    if (name === 'motif') setError('rdv-err-motif', '');
    if (name === 'day') { setError('rdv-err-day', ''); syncSaturday(); }
    if (name === 'slot') setError('rdv-err-slot', '');
    if (name === 'first') setError('rdv-err-first', '');
  });
  form.addEventListener('submit', (e) => { e.preventDefault(); next(); });

  // ---------- Récapitulatif + message WhatsApp ----------
  const labelOf = (input) => input?.closest('label').querySelector('.rdv-choice__label, span:not([class])')?.firstChild?.textContent.trim() ?? '';
  function values() {
    const day = checked('day');
    return {
      motif: labelOf(checked('motif')),
      day: day?.dataset.full ?? '',
      slot: checked('slot')?.value === 'afternoon' ? ui.afternoon : ui.morning,
      name: nameInput.value.trim().replace(/\s+/g, ' '),
      phone: normalizePhone(phoneInput.value) ?? phoneInput.value.trim(),
      first: checked('first')?.value === 'yes' ? ui.firstYes : ui.firstNo,
      message: form.elements.message.value.trim(),
    };
  }

  function waUrl() {
    const v = values();
    const r = ui.recap;
    const sep = lang === 'ar' ? ': ' : ' : ';
    const lines = [
      ui.wa.hello,
      '',
      `• ${r.motif}${sep}${v.motif}`,
      `• ${r.day}${sep}${v.day} (${v.slot})`,
      `• ${r.name}${sep}${v.name}`,
      `• ${r.phone}${sep}${v.phone}`,
      `• ${r.first}${sep}${v.first}`,
    ];
    if (v.message) lines.push(`• ${r.message}${sep}${v.message}`);
    lines.push('', ui.wa.thanks);
    return `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  function renderRecap() {
    const v = values();
    const r = ui.recap;
    const rows = [
      [r.motif, v.motif, 1],
      [r.day, [v.day, v.slot], 2],
      [r.name, v.name, 3],
      [r.phone, v.phone, 3, true],
      [r.first, v.first, 3],
    ];
    if (v.message) rows.push([r.message, v.message, 3]);
    recap.replaceChildren(
      ...rows.map(([label, value, step, ltr]) => {
        const row = document.createElement('div');
        row.className = 'rdv-recap__row';
        const dt = document.createElement('dt');
        dt.textContent = label;
        const dd = document.createElement('dd');
        const val = document.createElement(ltr ? 'bdi' : 'span');
        if (ltr) val.dir = 'ltr';
        if (Array.isArray(value)) {
          // « jour · moment » : le moment ne se coupe pas (« Après-midi »)
          const slot = document.createElement('span');
          slot.className = 'rdv-recap__nowrap';
          slot.textContent = value[1];
          val.append(`${value[0]} · `, slot);
        } else val.textContent = value;
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.className = 'rdv-recap__edit';
        edit.dataset.goto = step;
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
    if (b) go(Number(b.dataset.goto));
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
      live.textContent = `${text} : ${ui.steps[n - 1]}`;
    }
    btnBack.hidden = success || n === 1;
    btnNext.hidden = success || n === 4;
    btnSend.hidden = n !== 4;
    btnDone.hidden = !success;
    if (n === 4) renderRecap();
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
    if (typeof current === 'number' && current < 4 && validate(current)) go(current + 1);
  }
  btnNext.addEventListener('click', next);
  btnBack.addEventListener('click', () => current > 1 && go(current - 1));

  // window.open appelé directement dans le clic (sinon bloqué par iOS Safari)
  btnSend.addEventListener('click', () => {
    // Sécurité : une étape modifiée entre-temps et devenue invalide → on y retourne
    const complete = {
      1: () => checked('motif'),
      2: () => checked('day') && checked('slot'),
      3: () => nameInput.value.trim().length >= 2 && normalizePhone(phoneInput.value) && checked('first'),
    };
    const bad = [1, 2, 3].find((n) => !complete[n]());
    if (bad) {
      go(bad, { focus: false });
      validate(bad);
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

  function open(from = null, motif = '') {
    if (isOpen) return;
    clearTimeout(closeTimer);
    isOpen = true;
    trigger = from || (document.activeElement !== document.body ? document.activeElement : null);
    if (current === 'success') reset();
    if (motif && current === 1 && !checked('motif')) {
      const r = form.querySelector(`input[name="motif"][value="${CSS.escape(motif)}"]`);
      if (r) r.checked = true;
    }
    buildDays();
    root.hidden = false;
    root.classList.remove('is-closing');
    lockPage(true);
    void dialog.offsetWidth; // départ de la transition d'entrée
    root.classList.add('is-open');
    dialog.focus({ preventScroll: true });
    live.textContent = `${ui.stepOf.replace('{n}', current === 'success' ? 4 : current)} : ${ui.steps[(current === 'success' ? 4 : current) - 1]}`;
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
    open(t, t.dataset.openRdv);
  });

  // URL #rdv
  const fromHash = () => location.hash === '#rdv' && open();
  window.addEventListener('hashchange', fromHash);
  fromHash();

  // ---------- Bottom sheet : glisser la poignée vers le bas pour fermer ----------
  const handle = $('[data-rdv-handle]');
  let startY = null;
  handle.addEventListener('pointerdown', (e) => {
    if (!window.matchMedia(SHEET).matches) return;
    startY = e.clientY;
    handle.setPointerCapture(e.pointerId);
    dialog.style.transition = 'none';
  });
  handle.addEventListener('pointermove', (e) => {
    if (startY === null) return;
    dialog.style.transform = `translateY(${Math.max(0, e.clientY - startY)}px)`;
  });
  const endDrag = (e) => {
    if (startY === null) return;
    const dy = e.clientY - startY;
    startY = null;
    dialog.style.transition = '';
    if (dy > 90) close();
    else dialog.style.transform = '';
  };
  handle.addEventListener('pointerup', endDrag);
  handle.addEventListener('pointercancel', endDrag);
}
