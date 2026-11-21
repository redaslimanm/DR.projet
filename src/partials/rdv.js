// Modale « Réserver RDV » (4 étapes → message WhatsApp pré-rempli).
// Motifs = services du site (src/data/services-content.js, groupes `serviceGroups`) :
// un service ajouté là apparaît automatiquement ici. Comportement : src/js/rdv.js.
import { contact, rdv as rdvConfig } from '../data/site.js';
import { localizedService, serviceAvailable, serviceGroups } from '../data/services-content.js';
import { serviceGroupsAr } from '../data/services-content.ar.js';
import { icon } from './icons.js';

// Textes de la modale. AR : traductions proposées, non validées par la doctoresse
// (TODO AR — liste dans ar-a-faire.md).
const RDV_UI_RAW = {
  fr: {
    title: 'Demande de rendez-vous',
    stepOf: 'Étape {n} sur 4',
    steps: ['Motif', 'Date', 'Coordonnées', 'Récap'],
    close: 'Fermer',
    motifLegend: 'Quel est le motif de votre consultation ?',
    urgent: 'Urgence ? Appelez directement le cabinet',
    other: 'Autre / je ne sais pas',
    otherHelp: 'Le cabinet vous orientera.',
    dayLegend: 'Quel jour vous conviendrait ?',
    slotLegend: 'À quel moment de la journée ?',
    morning: 'Matin',
    afternoon: 'Après-midi',
    saturdayNote: 'Le samedi, le cabinet est ouvert le matin uniquement.',
    confirmNote: 'Le cabinet vous confirmera l’heure exacte du rendez-vous.',
    name: 'Nom et prénom',
    phone: 'Téléphone',
    phoneHint: 'Ex. : {a} ou {b}',
    firstLegend: 'Est-ce votre première visite au cabinet ?',
    firstYes: 'Oui',
    firstNo: 'Déjà patient(e)',
    message: 'Message',
    optional: '(facultatif)',
    messageHint: 'Une précision utile pour le cabinet.',
    recapTitle: 'Vérifiez votre demande',
    edit: 'Modifier',
    recap: { motif: 'Motif', day: 'Jour', slot: 'Moment', name: 'Nom', phone: 'Téléphone', first: 'Première visite', message: 'Message' },
    recapNote: 'Le message s’ouvrira dans WhatsApp : il vous suffira de l’envoyer.',
    back: 'Retour',
    next: 'Suivant',
    send: 'Envoyer sur WhatsApp',
    successTitle: 'Votre message est prêt dans WhatsApp',
    successText: 'Envoyez-le : le cabinet vous répondra pour confirmer le jour et l’heure du rendez-vous.',
    retry: 'WhatsApp ne s’est pas ouvert ? Réessayer',
    errors: {
      motif: 'Choisissez un motif.',
      day: 'Choisissez un jour.',
      slot: 'Choisissez un moment de la journée.',
      nameRequired: 'Indiquez votre nom et prénom.',
      phoneRequired: 'Indiquez votre numéro de téléphone.',
      phoneInvalid: 'Numéro marocain attendu : 05, 06 ou 07 suivi de 8 chiffres, ou +212.',
      first: 'Indiquez s’il s’agit de votre première visite.',
    },
    wa: {
      hello: 'Bonjour, je souhaite demander un rendez-vous au cabinet du Dr Elaouni Rajae.',
      thanks: 'Merci de me confirmer l’heure du rendez-vous.',
    },
  },
  // TODO AR : traductions à faire valider (ar-a-faire.md)
  ar: {
    title: 'طلب موعد',
    stepOf: 'الخطوة {n} من 4',
    steps: ['السبب', 'التاريخ', 'معلوماتكم', 'الملخص'],
    close: 'إغلاق',
    motifLegend: 'ما سبب الاستشارة؟',
    urgent: 'حالة مستعجلة؟ اتصلوا مباشرة بالعيادة',
    other: 'أخرى / لا أعرف',
    otherHelp: 'ستوجّهكم العيادة.',
    dayLegend: 'أي يوم يناسبكم؟',
    slotLegend: 'في أي فترة من اليوم؟',
    morning: 'صباحاً',
    afternoon: 'بعد الزوال',
    saturdayNote: 'يوم السبت، العيادة مفتوحة في الصباح فقط.',
    confirmNote: 'ستؤكد لكم العيادة الساعة المحددة للموعد.',
    name: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    phoneHint: 'مثال: {a} أو {b}',
    firstLegend: 'هل هذه زيارتكم الأولى للعيادة؟',
    firstYes: 'نعم',
    firstNo: 'مريض(ة) سابق(ة)',
    message: 'رسالة',
    optional: '(اختياري)',
    messageHint: 'معلومة مفيدة للعيادة.',
    recapTitle: 'تحققوا من طلبكم',
    edit: 'تعديل',
    recap: { motif: 'السبب', day: 'اليوم', slot: 'الفترة', name: 'الاسم', phone: 'الهاتف', first: 'الزيارة الأولى', message: 'الرسالة' },
    recapNote: 'ستُفتح الرسالة في واتساب: يكفي أن ترسلوها.',
    back: 'رجوع',
    next: 'التالي',
    send: 'إرسال عبر واتساب',
    successTitle: 'رسالتكم جاهزة في واتساب',
    successText: 'أرسلوها، وستتواصل معكم العيادة لتأكيد يوم وساعة الموعد.',
    retry: 'لم يُفتح واتساب؟ أعيدوا المحاولة',
    errors: {
      motif: 'اختاروا سبب الاستشارة.',
      day: 'اختاروا يوماً.',
      slot: 'اختاروا فترة من اليوم.',
      nameRequired: 'أدخلوا الاسم الكامل.',
      phoneRequired: 'أدخلوا رقم الهاتف.',
      phoneInvalid: 'رقم مغربي: 05 أو 06 أو 07 متبوعاً بـ 8 أرقام، أو 212+.',
      first: 'حددوا إن كانت هذه زيارتكم الأولى.',
    },
    wa: {
      hello: 'السلام عليكم، أود طلب موعد في عيادة الدكتورة العوني رجاء.',
      thanks: 'المرجو تأكيد ساعة الموعد. شكراً.',
    },
  },
};


function motifOption(value, label, iconName, { featured = false, help = '' } = {}) {
  const helpId = help ? ` aria-describedby="rdv-motif-${value}-help"` : '';
  return `<li>
              <label class="rdv-choice rdv-choice--motif${featured ? ' rdv-choice--featured' : ''}">
                <input type="radio" name="motif" value="${value}"${helpId}>
                <span class="rdv-choice__icon">${icon(iconName, { size: 20, stroke: 1.8 })}</span>
                <span class="rdv-choice__text"><span class="rdv-choice__label">${label}</span>${
                  help ? `<span class="rdv-choice__help" id="rdv-motif-${value}-help">${help}</span>` : ''
                }</span>
                <span class="rdv-choice__radio" aria-hidden="true"></span>
              </label>
            </li>`;
}

function motifGroups(lang, u) {
  const groups = serviceGroups
    .map(({ title: titleFr, slugs }, gi) => {
      const title = lang === 'ar' ? serviceGroupsAr[gi] : titleFr;
      const items = slugs
        .filter((slug) => serviceAvailable(slug, lang))
        .map((slug) => {
          const s = localizedService(slug, lang);
          return motifOption(s.slug, s.name, s.icon || 'eye', { featured: s.slug === 'consultation-depistage' });
        });
      if (!items.length) return '';
      return `<div class="rdv-group" role="group" aria-labelledby="rdv-g${gi}">
            <p class="rdv-group__title" id="rdv-g${gi}">${title}</p>
            <ul class="rdv-list" role="list">
            ${items.join('\n            ')}
            </ul>
          </div>`;
    })
    .join('\n          ');
  const other = `<ul class="rdv-list rdv-list--other" role="list">
            ${motifOption('autre', u.other, 'circleHelp', { help: u.otherHelp })}
          </ul>`;
  return groups + '\n          ' + other;
}

// Typographie française : espace insécable avant ? ! : ;
const nbsp = (v) =>
  typeof v === 'string' ? v.replace(/ ([?!:;])/g, '\u00a0$1') : Array.isArray(v) ? v.map(nbsp) : Object.fromEntries(Object.entries(v).map(([k, x]) => [k, nbsp(x)]));
export const RDV_UI = { fr: nbsp(RDV_UI_RAW.fr), ar: RDV_UI_RAW.ar };

const error = (id) => `<p class="rdv-error" id="${id}" data-rdv-error hidden></p>`;

export function rdvModal(page) {
  const { lang } = page;
  const u = RDV_UI[lang];

  // Données pour src/js/rdv.js (une seule source : site.js + textes ci-dessus)
  const data = {
    lang,
    whatsappNumber: rdvConfig.whatsappNumber,
    daysAhead: rdvConfig.daysAhead,
    closedDays: rdvConfig.closedDays,
    morningOnlyDays: rdvConfig.morningOnlyDays,
    slots: rdvConfig.slots,
    ui: { stepOf: u.stepOf, steps: u.steps, morning: u.morning, afternoon: u.afternoon, errors: u.errors, wa: u.wa, recap: u.recap, edit: u.edit, firstYes: u.firstYes, firstNo: u.firstNo },
  };

  const slotHours = (k) => (rdvConfig.slots[k] ? ` <span class="rdv-slot__hours">${rdvConfig.slots[k].from} – ${rdvConfig.slots[k].to}</span>` : '');

  return `
<div class="rdv" id="rdv-modal" data-rdv data-lenis-prevent hidden>
  <div class="rdv__backdrop" data-rdv-close></div>
  <div class="rdv__dialog" role="dialog" aria-modal="true" aria-labelledby="rdv-title" aria-describedby="rdv-count" tabindex="-1">
    <div class="rdv__handle" data-rdv-handle aria-hidden="true"><span></span></div>
    <div class="rdv__head">
      <div>
        <h2 class="rdv__title" id="rdv-title">${u.title}</h2>
        <p class="rdv__count" id="rdv-count" data-rdv-count>${u.stepOf.replace('{n}', '1')}</p>
      </div>
      <button class="rdv__close" type="button" data-rdv-close aria-label="${u.close}">${icon('close', { size: 22, stroke: 2 })}</button>
    </div>
    <ol class="rdv-stepper" role="list" data-rdv-stepper>
      ${u.steps.map((s, i) => `<li class="rdv-stepper__item${i === 0 ? ' is-current" aria-current="step' : ''}"><span class="rdv-stepper__dot" aria-hidden="true">${icon('check', { size: 12, stroke: 3 })}</span><span class="rdv-stepper__label">${s}</span></li>`).join('\n      ')}
    </ol>
    <p class="visually-hidden" aria-live="polite" data-rdv-live></p>

    <form class="rdv__body" data-rdv-form novalidate>
      <fieldset class="rdv-step" data-step="1" aria-describedby="rdv-err-motif">
        <legend class="rdv-step__title">${u.motifLegend}</legend>
        <a class="rdv-urgent" href="${contact.phoneHref}">${icon('phone', { size: 18, stroke: 2 })}<span>${u.urgent}</span><bdi dir="ltr" class="rdv-urgent__num">${contact.phone}</bdi></a>
        ${error('rdv-err-motif')}
        <div class="rdv-groups">
          ${motifGroups(lang, u)}
        </div>
      </fieldset>
      <div class="rdv-step" data-step="2" hidden>
        <fieldset class="rdv-sub" aria-describedby="rdv-err-day">
          <legend class="rdv-step__title">${u.dayLegend}</legend>
          ${error('rdv-err-day')}
          <ul class="rdv-days" role="list" data-rdv-days></ul>
        </fieldset>
        <fieldset class="rdv-sub" aria-describedby="rdv-slot-note rdv-err-slot">
          <legend class="rdv-step__title rdv-step__title--sm">${u.slotLegend}</legend>
          ${error('rdv-err-slot')}
          <div class="rdv-slots">
            <label class="rdv-choice rdv-choice--slot"><input type="radio" name="slot" value="morning"><span class="rdv-choice__icon">${icon('sunrise', { size: 20 })}</span><span class="rdv-choice__label">${u.morning}${slotHours('morning')}</span></label>
            <label class="rdv-choice rdv-choice--slot"><input type="radio" name="slot" value="afternoon"><span class="rdv-choice__icon">${icon('sun', { size: 20 })}</span><span class="rdv-choice__label">${u.afternoon}${slotHours('afternoon')}</span></label>
          </div>
          <p class="rdv-note" id="rdv-slot-note" data-rdv-satnote hidden>${u.saturdayNote}</p>
        </fieldset>
        <p class="rdv-info">${icon('clock', { size: 18 })}<span>${u.confirmNote}</span></p>
      </div>
      <div class="rdv-step" data-step="3" hidden>
        <div class="rdv-field">
          <label class="rdv-field__label" for="rdv-name">${u.name}</label>
          <input class="rdv-input" id="rdv-name" name="name" type="text" autocomplete="name" autocapitalize="words" maxlength="80" required aria-describedby="rdv-err-name">
          ${error('rdv-err-name')}
        </div>
        <div class="rdv-field">
          <label class="rdv-field__label" for="rdv-phone">${u.phone}</label>
          <input class="rdv-input rdv-input--ltr" id="rdv-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" maxlength="20" required aria-describedby="rdv-phone-hint rdv-err-phone">
          <p class="rdv-field__hint" id="rdv-phone-hint">${u.phoneHint.replace('{a}', '<bdi dir="ltr">06 12 34 56 78</bdi>').replace('{b}', '<bdi dir="ltr">+212 6 12 34 56 78</bdi>')}</p>
          ${error('rdv-err-phone')}
        </div>
        <fieldset class="rdv-field" aria-describedby="rdv-err-first">
          <legend class="rdv-field__label">${u.firstLegend}</legend>
          <div class="rdv-seg">
            <label class="rdv-seg__opt"><input type="radio" name="first" value="yes"><span>${u.firstYes}</span></label>
            <label class="rdv-seg__opt"><input type="radio" name="first" value="no"><span>${u.firstNo}</span></label>
          </div>
          ${error('rdv-err-first')}
        </fieldset>
        <div class="rdv-field">
          <label class="rdv-field__label" for="rdv-message">${u.message} <span class="rdv-field__opt">${u.optional}</span></label>
          <textarea class="rdv-input rdv-input--area" id="rdv-message" name="message" rows="3" maxlength="300" aria-describedby="rdv-message-hint"></textarea>
          <p class="rdv-field__hint" id="rdv-message-hint">${u.messageHint}</p>
        </div>
      </div>
      <div class="rdv-step" data-step="4" hidden>
        <p class="rdv-step__title">${u.recapTitle}</p>
        <dl class="rdv-recap" data-rdv-recap></dl>
        <p class="rdv-info">${icon('whatsapp', { size: 18 })}<span>${u.recapNote}</span></p>
      </div>
      <div class="rdv-step rdv-success" data-step="success" hidden>
        <span class="rdv-success__icon">${icon('circleCheck', { size: 40, stroke: 1.6 })}</span>
        <p class="rdv-success__title" tabindex="-1" data-rdv-success-title>${u.successTitle}</p>
        <p>${u.successText}</p>
        <a class="rdv-success__retry" href="https://wa.me/${rdvConfig.whatsappNumber}" target="_blank" rel="noopener" data-rdv-retry>${icon('rotateCcw', { size: 16, stroke: 2 })}<span>${u.retry}</span></a>
      </div>
    </form>

    <div class="rdv__foot" data-rdv-foot>
      <button class="rdv-btn rdv-btn--ghost" type="button" data-rdv-back hidden>${icon('chevronLeft', { size: 18, stroke: 2, className: 'rdv-flip' })}<span class="rdv-btn__text">${u.back}</span></button>
      <button class="rdv-btn rdv-btn--primary" type="button" data-rdv-next>${u.next}${icon('chevronRight', { size: 18, stroke: 2, className: 'rdv-flip' })}</button>
      <button class="rdv-btn rdv-btn--wa" type="button" data-rdv-send hidden>${icon('whatsapp', { size: 18 })}${u.send}</button>
      <button class="rdv-btn rdv-btn--primary" type="button" data-rdv-close data-rdv-done hidden>${u.close}</button>
    </div>
    <script type="application/json" data-rdv-data>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
  </div>
</div>`;
}

