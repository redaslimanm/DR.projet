// SEO commun à toutes les pages (rendu dans <head> par head.js) :
// canonical, hreflang, Open Graph / Twitter, JSON-LD (cabinet + médecin + fil d'Ariane).
// Toutes les infos viennent de CLAUDE.md / src/data — rien d'inventé :
// pas de coordonnées GPS (la fiche Google Maps est liée via hasMap).
import { SITE_URL, contact, socials, maps, pages as PAGES, t as dict } from '../data/site.js';
import { localizedService } from '../data/services-content.js';

const OG_IMAGE = '/og-image.jpg'; // public/og-image.jpg (1200 × 630)

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
export const abs = (lang, path = '') => `${SITE_URL}/${lang}/${path}`;

// Nom court de chaque page (fil d'Ariane)
const NAMES = {
  fr: {
    'dr-elaouni/': 'Dr Elaouni', 'services/': 'Services', 'equipements/': 'Équipements', 'cabinet/': 'Le cabinet',
    'conseils/': 'Conseils santé', 'faq/': 'FAQ', 'contact/': 'Contact',
    'mentions-legales/': 'Mentions légales', 'confidentialite/': 'Confidentialité',
  },
  ar: {
    'dr-elaouni/': 'الدكتورة العوني', 'services/': 'الخدمات', 'equipements/': 'التجهيزات', 'cabinet/': 'العيادة',
    'conseils/': 'نصائح صحية', 'faq/': 'أسئلة شائعة', 'contact/': 'التواصل',
    'mentions-legales/': 'الإشعار القانوني', 'confidentialite/': 'سياسة الخصوصية',
  },
};

function breadcrumb(lang, path) {
  if (!path) return null;
  const items = [{ name: dict[lang].nav.home, url: abs(lang) }];
  const svc = path.match(/^services\/([\w-]+)\/$/);
  if (svc) {
    items.push({ name: NAMES[lang]['services/'], url: abs(lang, PAGES.services) });
    items.push({ name: localizedService(svc[1], lang).name, url: abs(lang, path) });
  } else {
    items.push({ name: NAMES[lang][path] || path, url: abs(lang, path) });
  }
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

// Cabinet + médecin (identiques sur toutes les pages, langue de la page)
function organization(lang) {
  const ar = lang === 'ar';
  const address = {
    '@type': 'PostalAddress',
    streetAddress: ar
      ? '69، شارع الجيش الملكي، إقامة أمنية، الطابق الثالث، المكتب رقم 17'
      : '69, Avenue des FAR, Résidence Oumnia, 3ème étage, Bureau N°17',
    addressLocality: ar ? 'فاس' : 'Fès',
    postalCode: '30000',
    addressCountry: 'MA',
  };
  const hours = [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
  ];
  const sameAs = Object.values(socials).filter(Boolean);
  const clinic = {
    '@type': 'MedicalClinic',
    '@id': `${SITE_URL}/#cabinet`,
    name: ar ? 'عيادة طب وجراحة العيون – الدكتورة العوني رجاء' : 'Cabinet d’ophtalmologie Dr Elaouni Rajae',
    url: abs(lang),
    logo: `${SITE_URL}/favicon-512.png`,
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: '+212532391818',
    email: contact.email,
    address,
    openingHoursSpecification: hours,
    medicalSpecialty: 'Ophthalmologic',
    hasMap: maps.place,
    isAcceptingNewPatients: true,
    availableLanguage: ['fr', 'ar'],
    ...(sameAs.length ? { sameAs } : {}),
  };
  const physician = {
    '@type': 'Physician',
    '@id': `${SITE_URL}/#dr-elaouni`,
    name: ar ? 'الدكتورة العوني رجاء' : 'Dr Elaouni Rajae',
    url: abs(lang, PAGES.about),
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: '+212532391818',
    address,
    medicalSpecialty: 'Ophthalmologic',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Faculté de Médecine, de Pharmacie et de Médecine Dentaire de Fès',
    },
    memberOf: { '@type': 'Organization', name: 'Société Française d’Ophtalmologie' },
    parentOrganization: { '@id': `${SITE_URL}/#cabinet` },
  };
  return [clinic, physician];
}

export function seoTags({ lang, path }, { title, description }) {
  const other = lang === 'fr' ? 'ar' : 'fr';
  const url = abs(lang, path);
  const graph = [...organization(lang)];
  const bc = breadcrumb(lang, path);
  if (bc) graph.push(bc);
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');

  return `<link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="${lang}" href="${url}">
  <link rel="alternate" hreflang="${other}" href="${abs(other, path)}">
  <link rel="alternate" hreflang="x-default" href="${abs('fr', path)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${lang === 'ar' ? 'الدكتورة العوني رجاء – طبيبة العيون' : 'Dr Elaouni Rajae – Ophtalmologue'}">
  <meta property="og:locale" content="${lang === 'ar' ? 'ar_MA' : 'fr_MA'}">
  <meta property="og:locale:alternate" content="${lang === 'ar' ? 'fr_MA' : 'ar_MA'}">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${SITE_URL}${OG_IMAGE}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${lang === 'ar' ? 'شعار الدكتورة العوني رجاء وصورتها بالعيادة' : 'Logo et photo du Dr Elaouni Rajae au cabinet'}">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${jsonLd}</script>`;
}
