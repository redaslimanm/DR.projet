// Modale « Réserver RDV » : 2 étapes (prénom, nom, jour → récap) puis message WhatsApp
// pré-rempli. Comportement : src/js/rdv.js.
import { contact, rdv as rdvConfig } from '../data/site.js';
import { icon } from './icons.js';

// Textes de la modale. AR : traductions proposées, non validées par la doctoresse
// (TODO AR — liste dans ar-a-faire.md).
const RDV_UI_RAW = {
  fr: {
    title: 'Demande de rendez-vous',
    stepOf: 'Étape {n} sur 2',
    steps: ['Vos informations', 'Récap'],
    close: 'Fermer',
    urgent: 'Urgence ? Appelez directement le cabinet',
    dayLegend: 'Quel jour vous conviendrait ?',
    confirmNote: 'Le cabinet vous confirmera l’heure exacte du rendez-vous.',
    firstName: 'Prénom',
    lastName: 'Nom',
    recapTitle: 'Vérifiez votre demande',
    edit: 'Modifier',
    recap: { firstName: 'Prénom', lastName: 'Nom', day: 'Jour' },
    recapNote: 'Le message s’ouvrira dans WhatsApp : il vous suffira de l’envoyer.',
    back: 'Retour',
    next: 'Suivant',
    send: 'Envoyer sur WhatsApp',
    successTitle: 'Votre message est prêt dans WhatsApp',
    successText: 'Envoyez-le : le cabinet vous répondra pour confirmer le jour et l’heure du rendez-vous.',
    retry: 'WhatsApp ne s’est pas ouvert ? Réessayer',
    errors: {
      day: 'Choisissez un jour.',
      firstNameRequired: 'Indiquez votre prénom.',
      lastNameRequired: 'Indiquez votre nom.',
    },
    wa: {
      hello: 'Bonjour, je souhaite demander un rendez-vous au cabinet du Dr Elaouni Rajae.',
      thanks: 'Merci de me confirmer l’heure du rendez-vous.',
    },
  },
  // TODO AR : traductions à faire valider (ar-a-faire.md)
  ar: {
    title: 'طلب موعد',
    stepOf: 'الخطوة {n} من 2',
    steps: ['معلوماتكم', 'الملخص'],
    close: 'إغلاق',
    urgent: 'حالة مستعجلة؟ اتصلوا مباشرة بالعيادة',
    dayLegend: 'أي يوم يناسبكم؟',
    confirmNote: 'ستؤكد لكم العيادة الساعة المحددة للموعد.',
    firstName: 'الاسم الشخصي',
    lastName: 'الاسم العائلي',
    recapTitle: 'تحققوا من طلبكم',
    edit: 'تعديل',
    recap: { firstName: 'الاسم الشخصي', lastName: 'الاسم العائلي', day: 'اليوم' },
    recapNote: 'ستُفتح الرسالة في واتساب: يكفي أن ترسلوها.',
    back: 'رجوع',
    next: 'التالي',
    send: 'إرسال عبر واتساب',
    successTitle: 'رسالتكم جاهزة في واتساب',
    successText: 'أرسلوها، وستتواصل معكم العيادة لتأكيد يوم وساعة الموعد.',
    retry: 'لم يُفتح واتساب؟ أعيدوا المحاولة',
    errors: {
      day: 'اختاروا يوماً.',
      firstNameRequired: 'أدخلوا الاسم الشخصي.',
      lastNameRequired: 'أدخلوا الاسم العائلي.',
    },
    wa: {
      hello: 'السلام عليكم، أود طلب موعد في عيادة الدكتورة العوني رجاء.',
      thanks: 'المرجو تأكيد ساعة الموعد. شكراً.',
    },
  },
};


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
    ui: { stepOf: u.stepOf, steps: u.steps, errors: u.errors, wa: u.wa, recap: u.recap, edit: u.edit },
  };

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
      <div class="rdv-step" data-step="1">
        <p class="rdv-step__title">${u.steps[0]}</p>
        <a class="rdv-urgent" href="${contact.phoneHref}">${icon('phone', { size: 18, stroke: 2 })}<span>${u.urgent}</span><bdi dir="ltr" class="rdv-urgent__num">${contact.phone}</bdi></a>
        <div class="rdv-names">
          <div class="rdv-field">
            <label class="rdv-field__label" for="rdv-first-name">${u.firstName}</label>
            <input class="rdv-input" id="rdv-first-name" name="firstName" type="text" autocomplete="given-name" autocapitalize="words" maxlength="40" required aria-describedby="rdv-err-first-name">
            ${error('rdv-err-first-name')}
          </div>
          <div class="rdv-field">
            <label class="rdv-field__label" for="rdv-last-name">${u.lastName}</label>
            <input class="rdv-input" id="rdv-last-name" name="lastName" type="text" autocomplete="family-name" autocapitalize="words" maxlength="40" required aria-describedby="rdv-err-last-name">
            ${error('rdv-err-last-name')}
          </div>
        </div>
        <fieldset class="rdv-sub" aria-describedby="rdv-err-day">
          <legend class="rdv-field__label">${u.dayLegend}</legend>
          ${error('rdv-err-day')}
          <ul class="rdv-days" role="list" data-rdv-days></ul>
        </fieldset>
        <p class="rdv-info">${icon('clock', { size: 18 })}<span>${u.confirmNote}</span></p>
      </div>
      <div class="rdv-step" data-step="2" hidden>
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

