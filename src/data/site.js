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

// Réseaux sociaux (fournis par le client)
export const socials = {
  instagram: 'https://www.instagram.com/dr.rajaeelaouni/',
  facebook: 'https://www.facebook.com/profile.php?id=61591732495481',
};

// Fiche Google Maps du cabinet (fournie par le client) + carte intégrée.
// La carte n'est chargée qu'au clic (performance + données envoyées à Google).
export const maps = {
  place: 'https://maps.app.goo.gl/p44UvxS9aQ613Bay7',
  embed:
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sCabinet+d%27ophtalmologie+Dr.+Elaouni+Rajae,+69+Av.+des+Forces+Arm%C3%A9es+Royales,+F%C3%A8s+30000!6i17',
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

// Services (12) : FR + AR (carte de visite). Angiographie et Topographie remplacées
// par Rétinographie et OCT (cahier de modifications, étape 16). `ar: null` = pas encore
// traduit : le service n'apparaît pas dans le menu AR.
export const services = [
  { slug: 'cataracte', fr: 'Chirurgie de la cataracte', ar: 'جراحة الجلالة' },
  { slug: 'chirurgie-refractive', fr: 'Chirurgie réfractive', ar: 'الجراحة الانكسارية' },
  { slug: 'strabisme', fr: 'Chirurgie du strabisme', ar: 'جراحة الحَوَل' },
  { slug: 'lentilles-de-contact', fr: 'Adaptation en lentilles de contact', ar: 'العدسات اللاصقة' },
  { slug: 'keratocone', fr: 'Kératocône et maladies de la cornée', ar: 'القرنيّة المخروطية وأمراض القرنيّة' },
  { slug: 'retine', fr: 'Maladies de la rétine', ar: 'أمراض الشبكية' },
  { slug: 'glaucome', fr: 'Glaucome', ar: 'الزرق' },
  { slug: 'ophtalmologie-pediatrique', fr: 'Ophtalmologie pédiatrique', ar: 'طب العيون عند الأطفال' },
  { slug: 'echographie-oculaire', fr: 'Échographie oculaire', ar: 'الإكوغرافيا' },
  { slug: 'retinographie', fr: 'Rétinographie', ar: 'تصوير الشبكية' },
  { slug: 'oct', fr: 'OCT', ar: 'التصوير المقطعي البصري (OCT)' },
  { slug: 'laser', fr: 'Laser', ar: 'الليزر' },
];

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
