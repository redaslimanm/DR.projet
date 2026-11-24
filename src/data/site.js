// =========================================================
// Données partagées (header, footer, et plus tard SEO/schema).
// Une seule source : modifier ici met à jour toutes les pages.
// =========================================================

// Domaine du site (sans / final) : utilisé pour canonical, hreflang, Open Graph,
// sitemap.xml et robots.txt. [À COMPLÉTER : domaine définitif]
export const SITE_URL_PLACEHOLDER = 'https://www.domaine-a-definir.ma';
export const SITE_URL = (process.env.SITE_URL || SITE_URL_PLACEHOLDER).replace(/\/$/, '');

export const contact = {
  phone: '05 32 39 18 18',
  phoneHref: 'tel:+212532391818',
  whatsapp: '07 62 97 08 15',
  whatsappHref: 'https://wa.me/212762970815',
  email: 'dr.elaouni.rajae@gmail.com',
};

// Prise de rendez-vous (modale « Réserver RDV ») : demande envoyée sur WhatsApp,
// le cabinet confirme ensuite l'heure exacte. Numéros : ceux de `contact` ci-dessus.
// Jours : 0 = dimanche … 6 = samedi (horaires : lun – ven 9h – 17h, sam 9h – 13h).
export const rdv = {
  whatsappNumber: '212762970815', // pour wa.me (sans + ni 0)
  daysAhead: 14, // nombre de jours OUVERTS proposés, à partir de demain
  closedDays: [0], // dimanche fermé
  morningOnlyDays: [6], // samedi : matin uniquement
  // Heures des créneaux : null = non affichées. Exemple : { from: '9h', to: '13h' }
  // [À COMPLÉTER : heures exactes si la doctoresse souhaite les afficher]
  slots: {
    morning: null,
    afternoon: null,
  },
};

// Réseaux sociaux (fournis par le client)
export const socials = {
  instagram: 'https://www.instagram.com/dr.rajaeelaouni/',
  facebook: 'https://www.facebook.com/profile.php?id=61591732495481',
};

// Fiche Google Maps du cabinet (fournie par le client) + carte intégrée.
// La carte n'est chargée qu'au clic (performance + données envoyées à Google).
// Intégration SANS clé API : `maps.google.com/maps?cid=…&output=embed` (CID = identifiant de la
// fiche, extrait du place_id ChIJiZbDE0-Lnw0RafsoVqjYiZ8). Testé le 23/11/2026 : affiche la fiche
// du cabinet avec son repère. Le format `?q=place_id:…&output=embed` affiche une carte du monde,
// et l'ancienne recherche par nom ne montrait pas de repère → ne pas les réutiliser.
const PLACE_ID = 'ChIJiZbDE0-Lnw0RafsoVqjYiZ8';
const CID = '11495957741351533417';
export const maps = {
  placeId: PLACE_ID,
  place: 'https://maps.app.goo.gl/p44UvxS9aQ613Bay7',
  // Carte intégrée, dans la langue de la page
  embed: (lang) => `https://maps.google.com/maps?cid=${CID}&hl=${lang}&output=embed`,
  // Itinéraire vers le cabinet (s'ouvre dans Google Maps)
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Cabinet d'ophtalmologie Dr. Elaouni Rajae")}&destination_place_id=${PLACE_ID}`,
  // Avis Google : tous les avis / laisser un avis
  reviews: `https://search.google.com/local/reviews?placeid=${PLACE_ID}`,
  writeReview: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
};

// Pages du site (slug identique en FR et AR → le switch de langue garde la page)
export const pages = {
  home: '',
  about: 'dr-elaouni/',
  services: 'services/',
  equipment: 'equipements/',
  clinic: 'cabinet/',
  blog: 'conseils/',
  faq: 'faq/',
  contact: 'contact/',
  legal: 'mentions-legales/',
  privacy: 'confidentialite/',
};

// Services du menu « Services ▾ » : FR + AR (carte de visite). `group` = intertitre du
// menu FR (voir serviceMenuGroups). `ar: null` = pas encore traduit : le service
// n'apparaît pas dans le menu AR. Menu groupé sous des intertitres en FR et en AR.
// Le nombre de services affiché sur l'accueil (bande de confiance, compteur, bouton)
// est calculé à partir de cette liste (partial « services-count »).
// Historique : Angiographie et Topographie avaient été remplacées par Rétinographie et
// OCT (cahier de modifications, étape 16) ; elles reviennent en nov. 2026 avec les
// 8 nouvelles pages (Instructions_nouvelles_pages_site.pdf), les 4 restent en ligne.
export const services = [
  { slug: 'cataracte', group: 'chirurgie', fr: 'Chirurgie de la cataracte', ar: 'جراحة الجلالة' },
  { slug: 'chirurgie-refractive', group: 'chirurgie', fr: 'Chirurgie réfractive', ar: 'الجراحة الانكسارية' },
  { slug: 'strabisme', group: 'chirurgie', fr: 'Chirurgie du strabisme', ar: 'جراحة الحَوَل' },
  { slug: 'lentilles-de-contact', group: 'suivi', fr: 'Adaptation en lentilles de contact', ar: 'العدسات اللاصقة' },
  { slug: 'keratocone', group: 'suivi', fr: 'Kératocône et maladies de la cornée', ar: 'القرنيّة المخروطية وأمراض القرنيّة' },
  { slug: 'retine', group: 'suivi', fr: 'Maladies de la rétine', ar: 'أمراض الشبكية' },
  { slug: 'glaucome', group: 'suivi', fr: 'Glaucome', ar: 'الزرق' },
  { slug: 'ophtalmologie-pediatrique', group: 'suivi', fr: 'Ophtalmologie pédiatrique', ar: 'طب العيون عند الأطفال' },
  { slug: 'echographie-oculaire', group: 'explorations', fr: 'Échographie oculaire', ar: 'الإكوغرافيا' },
  { slug: 'retinographie', group: 'explorations', fr: 'Rétinographie', ar: 'تصوير الشبكية' },
  { slug: 'oct', group: 'explorations', fr: 'OCT', ar: 'التصوير المقطعي البصري (OCT)' },
  { slug: 'laser', group: 'chirurgie', fr: 'Laser', ar: 'الليزر' },
  // Nouvelles pages (nov. 2026) — TODO AR : noms arabes publiés, en attente de validation (ar-a-faire.md)
  { slug: 'implant-icl', group: 'chirurgie', fr: 'Chirurgie réfractive par implant ICL', ar: 'الجراحة الانكسارية بزرع عدسة ICL' },
  { slug: 'pterygion', group: 'chirurgie', fr: 'Chirurgie de ptérygion', ar: 'جراحة الظفرة (Ptérygion)' },
  { slug: 'chalazion', group: 'chirurgie', fr: 'Chirurgie de chalazion', ar: 'جراحة البَرَدة (Chalazion)' },
  { slug: 'injections-intravitreennes', group: 'chirurgie', fr: 'Injections intravitréennes (IVT)', ar: 'الحقن داخل الجسم الزجاجي (IVT)' },
  { slug: 'angiographie-retinienne', group: 'explorations', fr: 'Angiographie rétinienne', ar: 'تصوير أوعية الشبكية (Angiographie)' },
  { slug: 'topographie-corneenne', group: 'explorations', fr: 'Topographie cornéenne', ar: 'طبوغرافيا القرنية' },
  { slug: 'biometrie-oculaire', group: 'explorations', fr: 'Biométrie oculaire', ar: 'القياس الحيوي للعين (Biométrie)' },
  { slug: 'microscopie-speculaire', group: 'explorations', fr: 'Microscopie spéculaire', ar: 'الفحص بالمجهر المرآوي للقرنية' },
];

// Intertitres du menu « Services ▾ » (FR). Ordre des liens dans un groupe :
// celui de `menuOrder` (les autres services du groupe suivent, dans l'ordre de la liste).
// AR : intertitres proposés (TODO AR, à valider) — menu AR groupé comme le FR depuis le 23/11/2026.
export const serviceMenuGroups = [
  {
    key: 'chirurgie',
    fr: 'Chirurgie',
    ar: 'الجراحة', // TODO AR : à valider
    menuOrder: ['cataracte', 'chirurgie-refractive', 'implant-icl', 'strabisme', 'pterygion', 'chalazion', 'injections-intravitreennes', 'laser'],
  },
  {
    key: 'explorations',
    fr: 'Explorations',
    ar: 'الفحوصات', // TODO AR : à valider
    menuOrder: ['oct', 'retinographie', 'angiographie-retinienne', 'topographie-corneenne', 'biometrie-oculaire', 'microscopie-speculaire', 'echographie-oculaire'],
  },
  {
    key: 'suivi',
    fr: 'Consultation et suivi',
    ar: 'الاستشارة والمتابعة', // TODO AR : à valider (choisi pour ne pas ressembler à « الفحوصات »)
    menuOrder: ['ophtalmologie-pediatrique', 'glaucome', 'retine', 'keratocone', 'lentilles-de-contact'],
  },
];

// Nombre de services proposés dans une langue (accueil : « 20 spécialités et examens »…)
export const servicesCount = (lang) => services.filter((s) => s[lang]).length;

// Textes d'interface
export const t = {
  fr: {
    langName: 'Français',
    otherLang: 'ar',
    otherLangName: 'العربية',
    otherLangShort: 'ع',
    otherLangLabel: 'Version arabe',
    skip: 'Aller au contenu',
    logoAlt: 'Dr Elaouni Rajae, ophtalmologue',
    hoursShort: 'Lun – Ven 9h – 17h · Sam 9h – 13h',
    addressShort: '69, Avenue des FAR, Résidence Oumnia, Fès 30000',
    navLabel: 'Menu principal',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    subToggle: 'Afficher la liste des services',
    allServices: 'Tous les services',
    nav: {
      home: 'Accueil',
      about: 'Dr Elaouni',
      services: 'Services',
      equipment: 'Équipements',
      clinic: 'Le cabinet',
      blog: 'Conseils',
      contact: 'Contact',
    },
    rdv: 'Prendre rendez-vous',
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    quickActions: 'Actions rapides',
    fabRdv: 'Réserver RDV',
    fabWa: 'WhatsApp',
    fabCall: 'Appeler',
    fabOpen: 'Ouvrir le menu de contact',
    fabClose: 'Fermer le menu de contact',
    footerTagline: 'Cabinet d’ophtalmologie à Fès. Consultations, dépistage et chirurgie oculaire.',
    footerCabinet: 'Le cabinet',
    footerBlog: 'Conseils santé',
    footerHours: 'Horaires',
    hours: [
      ['Lun – Ven', '9h – 17h'],
      ['Samedi', '9h – 13h'],
      ['Dimanche', 'fermé'],
    ],
    footerFollow: 'Suivez-nous',
    copyright: 'Cabinet d’ophtalmologie Dr Elaouni Rajae',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    footerNavLabel: 'Liens du pied de page',
  },
  ar: {
    langName: 'العربية',
    otherLang: 'fr',
    otherLangName: 'Français',
    otherLangShort: 'FR',
    otherLangLabel: 'Version française',
    skip: 'الانتقال إلى المحتوى',
    logoAlt: 'الدكتورة العوني رجاء، اختصاصية في طب و جراحة العيون',
    hoursShort: 'الإثنين – الجمعة 9:00 – 17:00 · السبت 9:00 – 13:00',
    addressShort: '69، شارع الجيش الملكي، إقامة أمنية، فاس 30000',
    navLabel: 'القائمة الرئيسية',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    subToggle: 'عرض قائمة الخدمات',
    allServices: 'جميع الخدمات',
    nav: {
      home: 'الرئيسية',
      about: 'الدكتورة العوني',
      services: 'الخدمات',
      equipment: 'التجهيزات',
      clinic: 'العيادة',
      blog: 'نصائح صحية',
      contact: 'التواصل',
    },
    rdv: 'احجز موعدك',
    call: 'اتصل بنا',
    whatsapp: 'واتساب',
    quickActions: 'إجراءات سريعة',
    fabRdv: 'حجز موعد',
    fabWa: 'واتساب',
    fabCall: 'اتصل',
    fabOpen: 'فتح قائمة التواصل',
    fabClose: 'إغلاق قائمة التواصل',
    footerTagline: 'عيادة طب وجراحة العيون — فاس',
    footerCabinet: 'العيادة',
    footerBlog: 'نصائح صحية',
    footerHours: 'مواعيد العمل',
    hours: [
      ['الإثنين – الجمعة', '9:00 – 17:00'],
      ['السبت', '9:00 – 13:00'],
      ['الأحد', 'مغلق'],
    ],
    footerFollow: 'تابعونا',
    copyright: 'عيادة طب العيون الدكتورة العوني رجاء',
    legal: 'الإشعار القانوني',
    privacy: 'سياسة الخصوصية',
    footerNavLabel: 'روابط أسفل الصفحة',
  },
};
