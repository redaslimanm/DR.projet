// =========================================================
// Contenu des pages service (FR) — une seule source pour :
//   - les 21 pages /fr/services/<slug>/ (13 aussi en AR : /ar/services/<slug>/) (template src/partials/service.js)
//   - la page index /fr/services/
//   - la section « Pages services » de textes-a-valider.md
//     (régénérée par : node scripts/export-textes.mjs)
//
// TOUS les textes médicaux ci-dessous sont des PROPOSITIONS à faire valider
// par la doctora (affichées avec [À VALIDER] sur le site). Pas de promesse
// de résultat, pas de superlatif. Les réponses de FAQ sont laissées vides
// (placeholder) : elles seront rédigées par la doctora.
// =========================================================

const GENERAL =
  'Lauréate de la Faculté de Médecine, de Pharmacie et de Médecine Dentaire de Fès. Ancienne médecin interne au CHU Hassan II – Fès.';
const SFO = 'Ancienne médecin interne au CHU Hassan II – Fès. Membre de la Société Française d’Ophtalmologie.';
const UK_CATARACTE =
  'Diplômée en chirurgie de la cataracte par phacoémulsification, Collège Royal des Ophtalmologues (Royaume-Uni).';
const UK_REFRACTIVE = 'Diplômée en chirurgie réfractive, Collège Royal des Ophtalmologues (Royaume-Uni).';
const ES_LENTILLES = 'Diplômée en adaptation en lentilles de contact, Université Isabel I (Espagne).';

const CTA_TEXT = 'Le secrétariat vous répond du lundi au vendredi de 9h à 17h et le samedi de 9h à 13h.';

export const servicesContent = [
  {
    slug: 'consultation-depistage',
    icon: 'eye', // icône Lucide (modale RDV)
    name: 'Consultation et dépistage',
    label: 'Consultation',
    photo: 'dr-lampe',
    photoAlt: 'Dr Elaouni Rajae à la lampe à fente',
    card: 'Examen complet de la santé oculaire, dépistage des troubles visuels et prise en charge personnalisée.',
    intro:
      'Un examen complet de la santé de vos yeux, pour les adultes comme pour les enfants : dépistage des troubles visuels et prise en charge personnalisée.',
    // Sections dont le texte a été fourni par la doctoresse (pas de badge [À VALIDER])
    validated: ['what', 'steps'],
    whatTitle: 'En quoi consiste la consultation ?',
    what: [
      'La consultation ophtalmologique consiste en un examen complet de la santé des yeux et de la fonction visuelle. Elle comprend l’évaluation de l’acuité visuelle, la recherche d’éventuels troubles de la réfraction (myopie, hypermétropie, astigmatisme, presbytie), l’examen des différentes structures de l’œil, la mesure de la pression intraoculaire ainsi que l’examen du fond d’œil lorsque cela est indiqué.',
      'Selon les besoins de chaque patient, des examens complémentaires peuvent être réalisés afin d’établir un diagnostic précis et de proposer une prise en charge personnalisée.',
    ],
    signsTitle: 'Quand consulter ?',
    signs: [
      ['scanEye', 'Vision floue, de près ou de loin'],
      ['check', 'Contrôle régulier ou renouvellement de lunettes'],
      ['badgeCheck', 'Dépistage chez l’enfant'],
      ['shieldCheck', 'Suivi d’une maladie générale (diabète, tension…)'],
    ],
    // Encadrés beiges (FR uniquement)
    callouts: [
      { type: 'alert', lead: 'Urgence oculaire :', text: 'baisse brutale de la vision, douleur, rougeur oculaire ou traumatisme.' },
      {
        title: 'Une surveillance particulière est recommandée pour :',
        items: [
          ['baby', 'Les enfants', 'Dépistage précoce des troubles visuels'],
          ['droplet', 'Les personnes diabétiques', 'Surveillance des complications oculaires du diabète'],
          ['users', 'Les antécédents familiaux', 'Dépistage des maladies oculaires héréditaires ou familiales'],
          ['glasses', 'Les personnes de plus de 40 ans', 'Dépistage du glaucome et des changements visuels liés à l’âge'],
        ],
      },
    ],
    stepsTitle: 'Comment se déroule la consultation ?',
    // 6 étapes illustrées (maquette de la doctoresse, « dernière modification site web.docx »,
    // 25/11/2026) : [titre, texte, images (aucune), { icon, ifNeeded }] — ifNeeded = étiquette
    // « (si besoin) ». Remplace les 4 étapes précédentes (dont « Conclusion »).
    steps: [
      ['Échange', 'Vos antécédents, vos symptômes et vos besoins visuels.', null, { icon: 'messageCircleMore' }],
      ['Bilan visuel', 'Évaluation de l’acuité visuelle et de la réfraction (mesure de la vue).', null, { icon: 'eyeChart' }],
      // « … » après « cristallin » : demandé par la doctoresse, confirmé le 25/11/2026 (point client 1)
      ['Examen des yeux', 'Examen à la lampe à fente des paupières, de la cornée et du cristallin…', null, { icon: 'slitLamp' }],
      ['Examen de la rétine', 'Dilatation pupillaire pour une évaluation approfondie de la rétine (fond d’œil).', null, { icon: 'retina', ifNeeded: true }],
      ['Mesure de la pression oculaire', 'Dépistage d’une hypertension oculaire ou d’un glaucome.', null, { icon: 'tonometer' }],
      ['Examens complémentaires', 'Selon votre situation : OCT, champ visuel, rétinographie, et autres examens du cabinet.', null, { icon: 'clipboardCheck', ifNeeded: true }],
    ],
    doctor: GENERAL,
    faq: [
      {
        q: 'Peut-on consulter même si l’on voit bien ?',
        a: 'Oui. Certaines maladies oculaires, comme le glaucome ou la rétinopathie diabétique, peuvent évoluer sans symptômes au début. Un dépistage permet de les détecter précocement.',
      },
      {
        q: 'À quelle fréquence faut-il consulter un ophtalmologue ?',
        a: 'La fréquence des contrôles dépend de l’âge, des antécédents et de l’état de santé oculaire. Un suivi plus rapproché peut être nécessaire chez les enfants, les personnes diabétiques ou les patients présentant des facteurs de risque de maladies oculaires.',
      },
      {
        q: 'À partir de quel âge faire examiner les yeux d’un enfant ?',
        a: 'Un examen ophtalmologique peut être réalisé dès la naissance si nécessaire. Un dépistage visuel est recommandé dès la petite enfance, notamment entre 3 et 4 ans, même en l’absence de symptômes. En cas de strabisme, de reflet pupillaire anormal ou de suspicion de trouble visuel, il est important de consulter sans attendre.',
      },
      {
        q: 'Faut-il apporter ses anciennes lunettes et ordonnances ?',
        a: 'Oui, il est conseillé d’apporter vos lunettes actuelles, vos anciennes ordonnances et, si vous en disposez, vos examens ophtalmologiques précédents. Cela facilite l’évaluation de l’évolution de votre vision.',
      },
      // Durée corrigée par la doctoresse le 25/11/2026 : « 15 à 20 minutes en moyenne » (au lieu de
      // « entre 20 et 30 minutes ») ; l'accueil et /fr/faq/ alignés sur la même durée.
      // Exclue du JSON-LD : même sujet que « Combien de temps dure une consultation ? » de /fr/faq/.
      {
        q: 'Combien de temps dure une consultation ophtalmologique ?',
        a: 'La durée varie selon le motif de consultation et les examens nécessaires. Une consultation habituelle dure généralement 15 à 20 minutes en moyenne, mais elle peut être prolongée en cas de dilatation pupillaire ou d’examens complémentaires.',
        schema: false,
      },
      {
        q: 'A-t-on toujours besoin de dilater les pupilles lors d’une consultation ?',
        a: 'Non, la dilatation des pupilles n’est pas systématique. Notre cabinet est équipé d’un rétinographe permettant de réaliser des photographies du fond d’œil sans dilatation dans de nombreux cas. Cependant, une dilatation pupillaire peut être nécessaire pour un examen plus approfondi de la rétine, évaluer certaines cataractes ou réaliser une réfraction sous cycloplégie chez l’enfant.',
      },
      {
        q: 'Quand faut-il consulter en urgence ?',
        a: 'Une baisse brutale de la vision, une douleur oculaire intense, un traumatisme, une brûlure chimique ou l’apparition soudaine d’un voile noir nécessitent une évaluation ophtalmologique urgente.',
      },
      {
        q: 'Le diabète peut-il affecter la vision ?',
        a: 'Oui. Le diabète peut entraîner des complications oculaires, notamment une rétinopathie diabétique, parfois sans aucun symptôme initial. Un examen régulier de la rétine est donc recommandé.',
      },
      { q: 'Faut-il une ordonnance pour consulter ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Besoin d’un contrôle de la vue ?',
    related: ['ophtalmologie-pediatrique', 'glaucome', '@equipements'],
    meta: {
      title: 'Consultation et dépistage à Fès – Dr Elaouni Rajae',
      description:
        'Consultation ophtalmologique et dépistage des troubles visuels à Fès, adultes et enfants. Cabinet du Dr Elaouni Rajae, Avenue des FAR. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'cataracte',
    icon: 'aperture', // icône Lucide (modale RDV)
    name: 'Chirurgie de la cataracte',
    label: 'Chirurgie',
    photo: 'dr-lampe',
    photoAlt: 'Dr Elaouni Rajae à la lampe à fente',
    // FR : deux photos du bloc opératoire (remplacent la photo ci-dessus, gardée en AR)
    photos: [
      { name: 'cataracte-1', alt: 'Dr Elaouni Rajae au microscope opératoire pendant une chirurgie de la cataracte' },
      { name: 'cataracte-2', alt: 'Dr Elaouni Rajae en tenue de bloc opératoire, devant le microscope et la plateforme de phacoémulsification' },
    ],
    card: 'Prise en charge par phacoémulsification, une technique moderne pour retrouver une vision plus claire.',
    intro:
      'Une prise en charge par phacoémulsification, technique moderne permettant de retrouver une vision plus claire.',
    whatTitle: 'Qu’est-ce que la cataracte ?',
    what: 'La cataracte correspond à l’opacification progressive du cristallin, la lentille naturelle de l’œil. La vision devient floue ou voilée. Elle est le plus souvent liée à l’âge, mais peut avoir d’autres causes.',
    signsTitle: 'Signes qui doivent alerter',
    signs: [
      ['scanEye', 'Vision floue ou voilée'],
      ['shieldCheck', 'Gêne à la lumière, éblouissements'],
      ['badgeCheck', 'Couleurs plus ternes'],
      ['check', 'Changements fréquents de lunettes'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Consultation et bilan', 'Examen complet pour confirmer le diagnostic et évaluer le retentissement sur votre vision.'],
      ['Examens préopératoires', 'Mesures précises de l’œil pour choisir l’implant adapté.'],
      ['Intervention', 'Retrait du cristallin opacifié par phacoémulsification et pose d’un implant.'],
      ['Suivi', 'Contrôles après l’intervention pour surveiller la récupération visuelle.'],
    ],
    doctor: UK_CATARACTE,
    faq: [
      {
        q: 'L’intervention est-elle douloureuse ?',
        a: 'La chirurgie de la cataracte est généralement indolore. Elle est le plus souvent réalisée sous anesthésie locale, à l’aide de gouttes anesthésiantes. Le patient peut ressentir une légère pression ou une gêne pendant l’intervention, mais habituellement pas de douleur.',
      },
      {
        q: 'Combien de temps dure la récupération ?',
        a: 'La vision commence généralement à s’améliorer dès les premiers jours suivant l’intervention. La récupération visuelle se poursuit progressivement sur plusieurs semaines, selon l’état de l’œil et les particularités de chaque patient. Un traitement par collyres et des consultations de contrôle sont nécessaires après l’opération.',
      },
      {
        q: 'Faut-il opérer les deux yeux ?',
        a: 'Non, pas systématiquement. La décision dépend du degré de cataracte et de la gêne visuelle de chaque œil. Lorsque les deux yeux nécessitent une intervention, ils sont généralement opérés séparément, à des dates différentes, afin de permettre une bonne récupération et un suivi adapté.',
      },
    ],
    ctaTitle: 'Votre vision devient floue ?',
    related: ['chirurgie-refractive', '@equipements', 'consultation-depistage'],
    meta: {
      title: 'Chirurgie de la cataracte à Fès – Dr Elaouni Rajae, ophtalmologue',
      description:
        'Cataracte : prise en charge par phacoémulsification à Fès. Dr Elaouni Rajae, diplômée du Collège Royal des Ophtalmologues (Royaume-Uni).',
    },
  },
  {
    slug: 'chirurgie-refractive',
    icon: 'glasses', // icône Lucide (modale RDV)
    name: 'Chirurgie réfractive',
    label: 'Chirurgie',
    photo: 'chirurgie-refractive',
    photoAlt: 'Patiente allongée sous le laser pendant une chirurgie réfractive',
    // Déroulement fourni par la doctoresse (PDF, étape 11.2) : pas de badge [À VALIDER]
    validated: ['steps'],
    card: 'Évaluation des possibilités de correction chirurgicale de la myopie, de l’hypermétropie et de l’astigmatisme.',
    intro:
      'Un bilan complet pour évaluer si une correction chirurgicale de votre myopie, hypermétropie ou astigmatisme est envisageable dans votre cas.',
    whatTitle: 'Qu’est-ce que la chirurgie réfractive ?',
    what: 'La chirurgie réfractive regroupe des techniques qui visent à réduire la dépendance aux lunettes ou aux lentilles. Toutes les personnes ne sont pas candidates : un bilan préalable permet de vérifier si l’intervention est adaptée à vos yeux.',
    signsTitle: 'Pour qui ?',
    signs: [
      ['scanEye', 'Myopie, hypermétropie ou astigmatisme'],
      ['check', 'Correction stable depuis au moins un an'],
      ['shieldCheck', 'Intolérance aux lentilles de contact'],
      ['badgeCheck', 'Bilan préopératoire compatible'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Consultation initiale', 'Échange sur vos attentes, vos antécédents médicaux et vos besoins visuels, suivi d’un examen ophtalmologique complet.'],
      ['Bilan préopératoire', 'Réalisation d’examens approfondis, notamment la réfraction, la topographie cornéenne, l’aberrométrie, la pachymétrie et l’évaluation de la surface oculaire, afin de déterminer votre éligibilité à la chirurgie réfractive.'],
      ['Choix de la technique', 'Selon les résultats du bilan, discussion des différentes techniques envisageables (LASIK, PKR ou autres), de leurs bénéfices, de leurs limites et des risques éventuels.'],
      ['Intervention et suivi postopératoire', 'Après l’intervention, un suivi ophtalmologique régulier permet de surveiller la cicatrisation, la récupération visuelle et de dépister d’éventuelles complications.'],
    ],
    doctor: UK_REFRACTIVE,
    faq: [
      {
        q: 'Suis-je candidat à la chirurgie réfractive ?',
        a: 'La chirurgie réfractive permet de corriger certains défauts visuels, notamment la myopie, l’hypermétropie et l’astigmatisme. L’éligibilité dépend de plusieurs critères : la stabilité de la correction, l’épaisseur et la forme de la cornée, l’état de la surface oculaire et la santé générale des yeux. Un bilan préopératoire approfondi est indispensable pour déterminer si une intervention est envisageable et choisir la technique la plus adaptée.',
      },
      {
        q: 'À partir de quel âge peut-on se faire opérer ?',
        a: 'La chirurgie réfractive est généralement envisagée à partir de 18 ans, à condition que la correction visuelle soit stable depuis au moins un an, parfois davantage selon la situation. L’âge seul ne suffit pas : un examen ophtalmologique complet est nécessaire pour confirmer l’éligibilité.',
      },
      {
        q: 'La chirurgie réfractive est-elle douloureuse ?',
        a: 'L’intervention est généralement indolore grâce à l’utilisation de gouttes anesthésiantes. Après l’opération, une gêne, des picotements ou une sensation de corps étranger peuvent apparaître. Leur intensité et leur durée varient selon la technique utilisée, notamment entre le LASIK et la PKR.',
      },
      {
        q: 'Quelle est la différence entre le LASIK et la PKR ?',
        a: 'Le LASIK et la PKR sont deux techniques de chirurgie réfractive au laser permettant de corriger certains défauts visuels. Le LASIK offre généralement une récupération visuelle plus rapide, tandis que la PKR nécessite une cicatrisation de la surface cornéenne plus longue. Le choix dépend notamment de l’épaisseur et de la forme de la cornée, ainsi que des caractéristiques de chaque patient.',
      },
      {
        q: 'Combien de temps faut-il pour retrouver une bonne vision ?',
        a: 'La récupération visuelle dépend de la technique utilisée. Après un LASIK, la vision s’améliore généralement dès les premières 24 à 48 heures. Après une PKR, l’amélioration est plus progressive et peut nécessiter plusieurs semaines pour se stabiliser.',
      },
      {
        q: 'Peut-on se faire opérer si l’on porte des lentilles de contact ?',
        a: 'Oui, le port de lentilles n’empêche pas nécessairement une chirurgie réfractive. Toutefois, il est indispensable de les retirer pendant une période déterminée avant le bilan préopératoire, car elles peuvent modifier temporairement la forme de la cornée et fausser les mesures.',
      },
      { q: 'Combien de temps dure le bilan ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Envie de vous renseigner ?',
    related: ['keratocone', 'lentilles-de-contact', '@equipements'],
    meta: {
      title: 'Chirurgie réfractive à Fès – Dr Elaouni Rajae',
      description:
        'Bilan de chirurgie réfractive à Fès : myopie, hypermétropie, astigmatisme. Dr Elaouni Rajae, diplômée du Collège Royal des Ophtalmologues (Royaume-Uni).',
    },
  },
  {
    slug: 'strabisme',
    icon: 'moveHorizontal', // icône Lucide (modale RDV)
    name: 'Chirurgie du strabisme',
    label: 'Chirurgie',
    photo: 'strabisme-hero',
    photoAlt:
      'Enfant portant des lunettes, un œil qui dévie. Texte : « Le strabisme chez l’enfant. Un œil qui dévie de l’axe visuel. Plus il est dépisté tôt, plus la prise en charge est efficace et la vision de l’enfant mieux protégée. »',
    photoFit: 'full',
    card: 'Bilan et prise en charge du strabisme chez l’enfant et l’adulte, y compris par la chirurgie lorsqu’elle est indiquée.',
    intro:
      'Bilan et prise en charge du strabisme chez l’enfant et l’adulte, y compris par la chirurgie lorsqu’elle est indiquée.',
    whatTitle: 'Qu’est-ce que le strabisme ?',
    what: 'Le strabisme est un défaut d’alignement des yeux : un œil peut dévier vers l’intérieur, l’extérieur, le haut ou le bas. Chez l’enfant, un dépistage précoce est important pour le développement de la vision.',
    signsTitle: 'Signes qui doivent alerter',
    signs: [
      ['scanEye', 'Un œil qui dévie, en permanence ou par moments'],
      ['check', 'Tête penchée ou tournée pour regarder'],
      ['shieldCheck', 'Vision double chez l’adulte'],
      ['badgeCheck', 'Un œil fermé en plein soleil'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Bilan', 'Examen de la vision et mesure de la déviation.'],
      ['Traitement optique', 'Lunettes ou rééducation lorsque c’est indiqué.'],
      ['Chirurgie si nécessaire', 'Intervention sur les muscles de l’œil dans certains cas.'],
      ['Suivi', 'Contrôles réguliers de la vision et de l’alignement.'],
    ],
    doctor: GENERAL,
    faq: [
      {
        q: 'À quel âge consulter pour un strabisme ?',
        a: 'Dès qu’une déviation des yeux est remarquée, quel que soit l’âge de l’enfant. Un strabisme persistant, même chez un nourrisson, nécessite un examen ophtalmologique. Une prise en charge précoce permet notamment de prévenir l’amblyopie (œil paresseux) et de favoriser le bon développement de la vision.',
      },
      {
        q: 'Le strabisme se corrige-t-il tout seul ?',
        a: 'Un strabisme véritable ne disparaît généralement pas spontanément. Certaines déviations apparentes chez le nourrisson peuvent être liées à un pseudo-strabisme. Seul un examen ophtalmologique permet de faire la différence et de déterminer si un traitement est nécessaire.',
      },
      {
        q: 'La chirurgie est-elle toujours nécessaire ?',
        a: 'Non, la chirurgie n’est pas systématique. Selon le type de strabisme, le traitement peut reposer sur le port de lunettes, une correction de l’amblyopie par occlusion ou d’autres traitements adaptés. Une intervention chirurgicale peut être proposée dans certains cas pour améliorer l’alignement des yeux.',
      },
    ],
    ctaTitle: 'Un doute sur l’alignement des yeux ?',
    related: ['ophtalmologie-pediatrique', 'consultation-depistage', '@equipements'],
    meta: {
      title: 'Strabisme à Fès : bilan et chirurgie – Dr Elaouni Rajae',
      description:
        'Bilan et prise en charge du strabisme chez l’enfant et l’adulte à Fès, cabinet du Dr Elaouni Rajae, Avenue des FAR. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'lentilles-de-contact',
    icon: 'circleDot', // icône Lucide (modale RDV)
    name: 'Adaptation en lentilles de contact',
    label: 'Contactologie',
    photo: 'adaptation-lentilles',
    photoAlt: 'Lentille de contact posée sur le bout du doigt, devant une lampe à fente',
    // Textes fournis par la doctoresse (PDF, étape 14) : pas de badge [À VALIDER]
    validated: ['what', 'signs', 'steps'],
    card: 'Adaptation personnalisée en lentilles souples, rigides et sclérales, notamment pour le kératocône.',
    intro:
      'Une adaptation personnalisée en lentilles souples, rigides ou sclérales, y compris pour les cornées irrégulières comme le kératocône.',
    whatTitle: 'Pourquoi une adaptation ?',
    what: [
      'Chaque œil possède des caractéristiques spécifiques : courbure de la cornée, qualité du film lacrymal et besoins visuels.',
      'L’adaptation des lentilles permet de choisir le type de lentille le mieux adapté, d’évaluer sa stabilité, son confort et sa qualité visuelle, tout en préservant la santé oculaire.',
      'Elle comprend également un apprentissage de la pose, du retrait et des règles d’hygiène et d’entretien des lentilles.',
    ],
    signsTitle: 'Pour qui ?',
    signs: [
      ['scanEye', 'Myopie, hypermétropie, astigmatisme'],
      ['check', 'Presbytie (lentilles multifocales)'],
      ['badgeCheck', 'Kératocône et cornées irrégulières'],
      ['shieldCheck', 'Sport et activités sans lunettes'],
    ],
    // FR : 3 cartes titre + texte (PDF, étape 14.3) à la place des 4 cartes ci-dessus (gardées en AR)
    signCards: [
      ['scanEye', 'Myopie, hypermétropie et astigmatisme', 'Correction des défauts visuels par des lentilles adaptées à la réfraction et aux caractéristiques de l’œil.'],
      ['badgeCheck', 'Kératocône et cornées irrégulières', 'Adaptation de lentilles spécialisées, notamment rigides et sclérales, permettant d’améliorer la qualité visuelle lorsque les lunettes ne suffisent plus.'],
      ['shieldCheck', 'Sport et activités quotidiennes', 'Une alternative aux lunettes offrant une plus grande liberté de mouvement, selon l’activité pratiquée.'],
    ],
    stepsTitle: 'Comment se déroule l’adaptation ?',
    steps: [
      ['Bilan initial', 'Examen ophtalmologique, évaluation de la réfraction, de la cornée et du film lacrymal afin de déterminer le type de lentille adapté.'],
      ['Essai des lentilles', 'Pose de lentilles d’essai pour évaluer leur centrage, leur stabilité, leur confort et leur adaptation à la surface oculaire.'],
      ['Optimisation de la correction', 'Réalisation d’une surréfraction et ajustement des paramètres de la lentille afin d’obtenir la meilleure qualité visuelle possible.'],
      ['Apprentissage et suivi', 'Apprentissage de la manipulation, de l’hygiène et de l’entretien des lentilles, suivi de contrôles réguliers pour vérifier leur tolérance et préserver la santé des yeux.'],
    ],
    // Nouvelle rubrique de mise en garde (PDF, étape 14.6)
    warnings: {
      title: 'Les gestes à ne jamais faire avec vos lentilles',
      items: [
        ['Ne dormez jamais avec vos lentilles.', 'Dormir avec des lentilles augmente le risque d’infection cornéenne, parfois grave.'],
        ['Ne rincez jamais vos lentilles à l’eau du robinet.', 'L’eau, même potable, peut contenir des micro-organismes, notamment des amibes responsables de kératites graves. Utilisez uniquement les solutions adaptées à votre type de lentilles.'],
        ['Ne nagez pas et ne prenez pas de douche avec vos lentilles.', 'Le contact avec l’eau de piscine, de mer ou de douche augmente le risque d’infections oculaires, notamment de kératite à Acanthamoeba.'],
        ['Ne réutilisez jamais une ancienne solution d’entretien.', 'Renouvelez entièrement la solution après chaque utilisation et respectez les consignes de nettoyage, de désinfection et de remplacement de l’étui.'],
      ],
      note: {
        lead: 'À retenir :',
        text: 'en cas de douleur, rougeur, photophobie ou baisse de vision, retirez immédiatement vos lentilles et consultez rapidement un ophtalmologue. Une infection cornéenne peut évoluer rapidement et menacer la vision.',
      },
    },
    doctor: ES_LENTILLES,
    faq: [
      {
        q: 'Quelle différence entre lentilles souples, rigides et sclérales ?',
        a: [
          [
            '<strong>Lentilles souples :</strong> flexibles et généralement confortables dès les premières utilisations, elles corrigent notamment la myopie, l’hypermétropie, l’astigmatisme et la presbytie.',
            '<strong>Lentilles rigides :</strong> perméables à l’oxygène, elles offrent une excellente qualité optique et peuvent être particulièrement utiles en cas d’astigmatisme irrégulier.',
            '<strong>Lentilles sclérales :</strong> de plus grand diamètre, elles reposent sur la sclère et passent au-dessus de la cornée, avec un réservoir de liquide entre la lentille et l’œil. Elles sont particulièrement adaptées à certaines cornées irrégulières, notamment en cas de kératocône.',
          ],
        ],
      },
      {
        q: 'Les lentilles sclérales sont-elles adaptées au kératocône ?',
        a: 'Oui. Les lentilles sclérales constituent une excellente option pour améliorer la vision des patients atteints de kératocône, notamment lorsque les lunettes ou les lentilles classiques ne permettent plus d’obtenir une vision satisfaisante. Elles permettent de compenser les irrégularités optiques de la cornée tout en offrant souvent un bon confort. Cependant, elles ne stoppent pas l’évolution du kératocône. Un suivi régulier reste indispensable.',
      },
      {
        q: 'Combien de temps dure l’adaptation ?',
        a: 'La durée varie selon le type de lentille et les caractéristiques de chaque œil. L’adaptation comprend un bilan initial, des essais de lentilles, une évaluation du confort et de la vision, ainsi qu’un apprentissage de leur manipulation. Pour les lentilles spécialisées, notamment sclérales, plusieurs rendez-vous et ajustements peuvent être nécessaires afin d’obtenir une adaptation optimale.',
      },
    ],
    ctaTitle: 'Envie de passer aux lentilles ?',
    related: ['keratocone', 'chirurgie-refractive', '@equipements'],
    meta: {
      title: 'Lentilles de contact à Fès – Dr Elaouni Rajae',
      description:
        'Lentilles souples, rigides et sclérales à Fès, y compris pour le kératocône. Dr Elaouni Rajae, diplômée de l’Université Isabel I (Espagne).',
    },
  },
  {
    slug: 'keratocone',
    icon: 'focus', // icône Lucide (modale RDV)
    name: 'Kératocône et maladies de la cornée',
    label: 'Cornée',
    // TODO client (point 4) : keratocone-hero (version HD) provient du site du laboratoire Dencott.
    // Droits d'utilisation NON confirmés : à obtenir (ou remplacer l'image) AVANT la mise en ligne.
    photo: 'keratocone-hero',
    photoAlt: 'Œil vu de profil : la cornée, amincie, prend une forme de cône',
    // Schéma œil normal / kératocône (SVG ; version arabe dans services-content.ar.js)
    whatFigure: {
      src: 'oeil-normal-vs-keratocone-fr.svg',
      alt: 'Schéma comparant un œil normal, à la cornée régulière en forme de dôme, et un œil atteint de kératocône, à la cornée amincie et déformée en cône',
      width: 1200,
      height: 600,
    },
    // Déroulement fourni par la doctoresse (PDF, étape 13.2) : pas de badge [À VALIDER]
    validated: ['steps'],
    card: 'Diagnostic, surveillance et traitement par Cross-Linking cornéen (CXL) pour freiner son évolution.',
    intro:
      'Diagnostic, surveillance et prise en charge du kératocône et des maladies de la cornée, dont le Cross-Linking cornéen (CXL).',
    whatTitle: 'Qu’est-ce que le kératocône ?',
    what: 'Le kératocône est une déformation progressive de la cornée, qui s’amincit et prend une forme de cône. La vision devient déformée et l’astigmatisme évolue. Il apparaît souvent à l’adolescence ou chez l’adulte jeune.',
    signsTitle: 'Signes qui doivent alerter',
    signs: [
      ['scanEye', 'Vision déformée ou dédoublée'],
      ['check', 'Astigmatisme qui augmente'],
      ['shieldCheck', 'Lunettes de moins en moins efficaces'],
      ['badgeCheck', 'Frottement fréquent des yeux'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Diagnostic', 'Examen ophtalmologique complet avec réalisation d’une topographie cornéenne et d’une pachymétrie pour analyser la forme, la courbure et l’épaisseur de la cornée, et évaluer la sévérité du kératocône.'],
      ['Surveillance de l’évolution', 'Un suivi régulier, adapté à l’âge et au stade de la maladie, permet de détecter une éventuelle progression du kératocône grâce à la comparaison des examens cornéens successifs.'],
      [
        'Stabilisation du kératocône',
        'En cas de kératocône évolutif, un Cross-Linking cornéen (CXL) peut être indiqué pour renforcer la cornée et freiner, voire stopper, la progression de la maladie. Chez les patients jeunes à haut risque, il peut être envisagé sans attendre une progression documentée.',
        [{ name: 'cross-linking', alt: 'Séance de Cross-Linking cornéen (CXL) : l’œil, maintenu ouvert, sous l’appareil d’irradiation' }],
      ],
      [
        'Réhabilitation visuelle',
        'Selon le stade du kératocône, la vision peut être améliorée par des lunettes ou des lentilles de contact spécialisées, notamment les lentilles sclérales, permettant de corriger les irrégularités optiques de la cornée.',
        [
          { name: 'lentille-sclerale-pose', alt: 'Pose d’une lentille sclérale à l’aide d’une ventouse remplie de solution' },
          { name: 'lentille-sclerale', alt: 'Lentille sclérale tenue sur une ventouse devant l’œil' },
        ],
      ],
    ],
    doctor: ES_LENTILLES,
    faq: [
      {
        q: 'Le kératocône est-il évolutif ?',
        a: 'Oui, le kératocône est une maladie de la cornée qui peut évoluer progressivement, particulièrement chez les enfants, les adolescents et les jeunes adultes. Son évolution varie d’une personne à l’autre. Un suivi ophtalmologique régulier, notamment par topographie cornéenne, permet de détecter une éventuelle progression et de proposer un traitement adapté pour la freiner.',
      },
      {
        q: 'En quoi consiste le Cross-Linking ?',
        a: 'Le Cross-Linking cornéen (CXL) est un traitement destiné à renforcer la structure de la cornée afin de freiner, voire stopper, l’évolution du kératocône. Il consiste à appliquer de la riboflavine (vitamine B2) sur la cornée, puis à l’exposer à une lumière ultraviolette A (UVA) selon un protocole contrôlé. Son objectif principal est de stabiliser la maladie et non de corriger directement la vision. Il peut être associé au port de lunettes ou de lentilles spécialisées.',
      },
      {
        q: 'Peut-on porter des lentilles avec un kératocône ?',
        a: 'Oui. Les lentilles de contact spécialisées constituent une solution efficace pour améliorer la vision des patients atteints de kératocône. Selon la forme et la sévérité de la maladie, différentes lentilles peuvent être proposées, notamment les lentilles rigides perméables aux gaz et les lentilles sclérales. Ces dernières reposent sur la sclère et passent au-dessus de la cornée, permettant souvent d’obtenir une meilleure qualité visuelle et un bon confort. Une adaptation personnalisée et un suivi régulier sont indispensables.',
      },
      {
        q: 'Le kératocône peut-il entraîner une perte de vision ?',
        a: 'Oui. Le kératocône provoque une déformation progressive de la cornée, pouvant entraîner une vision floue, déformée et un astigmatisme irrégulier. Dans les formes avancées, des cicatrices cornéennes peuvent altérer davantage la vision. Un diagnostic précoce, une surveillance adaptée et les traitements disponibles permettent de limiter le risque de complications et d’améliorer la qualité visuelle.',
      },
    ],
    ctaTitle: 'Votre astigmatisme augmente ?',
    related: ['lentilles-de-contact', 'chirurgie-refractive', '@equipements'],
    meta: {
      title: 'Kératocône et Cross-Linking (CXL) à Fès – Dr Elaouni Rajae',
      description:
        'Diagnostic et suivi du kératocône à Fès : topographie cornéenne, Cross-Linking (CXL), lentilles sclérales. Cabinet du Dr Elaouni Rajae, Avenue des FAR.',
    },
  },
  {
    slug: 'retine',
    icon: 'scanEye', // icône Lucide (modale RDV)
    name: 'Maladies de la rétine',
    label: 'Rétine',
    photo: 'icare',
    photoAlt: 'Rétinographe numérique iCare du cabinet',
    photoFit: 'full', // source 680 px : affichée à sa taille (pas d'agrandissement flou)
    card: 'Diagnostic et suivi des pathologies rétiniennes, dont la rétinopathie diabétique et la DMLA.',
    intro:
      'Diagnostic et suivi des pathologies de la rétine, dont la rétinopathie diabétique et la DMLA, avec des examens réalisés au cabinet.',
    whatTitle: 'Qu’est-ce que la rétine ?',
    what: 'La rétine tapisse le fond de l’œil et transforme la lumière en images. Certaines maladies, comme la rétinopathie diabétique ou la DMLA, peuvent l’atteindre sans gêne au début : un examen régulier du fond d’œil permet de les dépister.',
    signsTitle: 'Signes qui doivent alerter',
    signs: [
      ['scanEye', 'Lignes droites qui paraissent déformées'],
      ['shieldCheck', 'Tache sombre au centre de la vision'],
      ['check', 'Baisse de vision, même légère'],
      ['badgeCheck', 'Diabète : contrôle du fond d’œil régulier'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Examen du fond d’œil', 'Observation de la rétine à la lampe à fente.'],
      ['Imagerie', 'Rétinographie, OCT ou angiographie selon les cas.'],
      ['Explication', 'Résultats commentés et plan de suivi.'],
      ['Suivi', 'Contrôles réguliers adaptés à votre situation.'],
    ],
    doctor: SFO,
    faq: [
      {
        q: 'Pourquoi un diabétique doit-il faire contrôler son fond d’œil ?',
        a: 'Le diabète peut endommager progressivement les petits vaisseaux de la rétine et provoquer une rétinopathie diabétique, parfois sans aucun symptôme au début. Un examen régulier du fond d’œil permet de détecter précocement ces anomalies et de prévenir les complications pouvant entraîner une baisse de la vision.',
      },
      {
        q: 'L’examen de la rétine est-il douloureux ?',
        a: 'Non, l’examen de la rétine est généralement indolore. Il peut être réalisé à l’aide d’un rétinographe ou par un examen du fond d’œil. Dans certains cas, des gouttes sont utilisées pour dilater les pupilles afin de mieux visualiser les différentes structures de la rétine.',
      },
      {
        q: 'Faut-il toujours dilater les pupilles pour examiner la rétine ?',
        a: 'Non, pas systématiquement. Notre cabinet dispose d’un rétinographe permettant de photographier la rétine sans dilatation pupillaire dans de nombreuses situations. Cependant, une dilatation peut être nécessaire pour examiner plus complètement la rétine, notamment sa périphérie, ou rechercher certaines anomalies qui ne sont pas visibles sur les photographies.',
      },
      {
        q: 'Combien de temps dure l’effet des gouttes de dilatation ?',
        a: 'L’effet des gouttes dure généralement plusieurs heures, selon le produit utilisé et la sensibilité du patient. Pendant cette période, la vision de près peut être floue et les yeux plus sensibles à la lumière. Il est préférable d’éviter de conduire tant que la vision n’est pas redevenue normale.',
      },
      {
        q: 'Peut-on avoir une maladie de la rétine sans ressentir de symptômes ?',
        a: 'Oui. Certaines maladies rétiniennes, notamment la rétinopathie diabétique, peuvent évoluer silencieusement pendant plusieurs années. C’est pourquoi un suivi ophtalmologique régulier est essentiel, particulièrement chez les personnes diabétiques ou présentant des facteurs de risque.',
      },
      { q: 'Qu’est-ce que la DMLA ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Diabétique ou plus de 50 ans ?',
    related: ['retinographie', 'oct', 'glaucome'],
    meta: {
      title: 'Maladies de la rétine à Fès (diabète, DMLA) – Dr Elaouni',
      description:
        'Diagnostic et suivi des maladies de la rétine à Fès : rétinopathie diabétique, DMLA. Rétinographie et OCT au cabinet du Dr Elaouni Rajae.',
    },
  },
  {
    slug: 'glaucome',
    icon: 'gauge', // icône Lucide (modale RDV)
    name: 'Glaucome',
    label: 'Glaucome',
    photo: 'dr-oct',
    photoAlt: 'Dr Elaouni Rajae devant un examen OCT',
    card: 'Dépistage, diagnostic et suivi spécialisé pour préserver le nerf optique et la fonction visuelle.',
    intro: 'Dépistage, diagnostic et suivi spécialisé du glaucome, pour préserver le nerf optique et la fonction visuelle.',
    whatTitle: 'Qu’est-ce que le glaucome ?',
    what: 'Le glaucome est une maladie du nerf optique, souvent liée à une pression trop élevée dans l’œil. Il évolue le plus souvent sans douleur et sans gêne au début : seul un examen permet de le dépister.',
    signsTitle: 'Qui doit se faire dépister ?',
    signs: [
      ['check', 'Personnes de plus de 40 ans'],
      ['badgeCheck', 'Antécédents de glaucome dans la famille'],
      ['scanEye', 'Forte myopie'],
      ['shieldCheck', 'Traitement prolongé par cortisone'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Mesure de la pression', 'Mesure de la pression intraoculaire.'],
      ['Examen du nerf optique', 'Fond d’œil pour évaluation de la papille optique, OCT du nerf optique et champ visuel.'],
      ['Traitement', 'Collyres, laser ou autres options selon les cas.'],
      ['Suivi', 'Contrôles réguliers pour adapter le traitement.'],
    ],
    doctor: SFO,
    // FAQ fournie par la doctoresse (« dernière modification site web.docx », 25/11/2026), mot pour
    // mot. Remplace les brouillons « …symptômes ? » et « …héréditaire ? » (mêmes questions).
    faq: [
      {
        q: 'Le glaucome donne-t-il des symptômes ?',
        a: "Le glaucome chronique évolue généralement sans douleur ni symptôme perceptible au début. La perte du champ visuel est progressive et peut passer inaperçue pendant plusieurs années, d'où l'importance du dépistage.",
      },
      {
        q: 'À partir de quel âge faut-il se faire dépister ?',
        a: 'Un dépistage régulier est particulièrement recommandé à partir de 40 ans, ou plus tôt en présence de facteurs de risque, notamment des antécédents familiaux de glaucome.',
      },
      {
        q: 'Peut-on avoir un glaucome avec une tension oculaire normale ?',
        a: 'Oui. Il existe des glaucomes à pression normale. La mesure de la pression oculaire seule ne suffit donc pas à exclure un glaucome.',
      },
      {
        q: 'Une tension oculaire élevée signifie-t-elle forcément que j’ai un glaucome ?',
        a: "Non. Une pression oculaire élevée constitue un facteur de risque, mais ne signifie pas nécessairement qu'il existe une atteinte du nerf optique.",
      },
      {
        q: 'Le glaucome peut-il rendre aveugle ?',
        a: 'Oui, en l’absence de prise en charge, le glaucome peut entraîner une perte irréversible de la vision. Un diagnostic précoce et un traitement adapté permettent généralement de ralentir son évolution et de préserver la vision.',
      },
      {
        q: 'Le glaucome est-il héréditaire ?',
        a: 'Les antécédents familiaux de glaucome augmentent le risque de développer cette maladie. Un dépistage régulier est particulièrement recommandé chez les personnes ayant un parent, un frère ou une sœur atteint de glaucome.',
      },
      {
        q: 'Quels examens permettent de diagnostiquer un glaucome ?',
        a: 'Le diagnostic repose sur plusieurs examens : mesure de la pression intraoculaire, examen du nerf optique, pachymétrie cornéenne, gonioscopie, OCT du nerf optique et champ visuel.',
      },
      {
        q: 'Peut-on guérir définitivement du glaucome ?',
        a: 'Les lésions du nerf optique liées au glaucome sont irréversibles. Cependant, les traitements par collyres, laser ou chirurgie permettent de contrôler la maladie et de limiter sa progression.',
      },
      {
        q: 'Puis-je arrêter mes gouttes si ma tension oculaire est redevenue normale ?',
        a: 'Non. La normalisation de la pression oculaire est souvent liée à l’efficacité du traitement. Toute modification ou interruption doit être décidée avec votre ophtalmologue.',
      },
      // Brouillon non affiché (pas dans le document de la doctoresse) — conservé en attente
      { q: 'Le traitement est-il à vie ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    // Encadré d'alerte juste après la FAQ (maquette de la doctoresse, 25/11/2026)
    faqAlert: {
      title: 'Le glaucome : une maladie silencieuse qui menace la vision',
      text: "N'attendez pas l'apparition de symptômes pour consulter. Le dépistage précoce est essentiel pour préserver votre vision.",
    },
    ctaTitle: 'Plus de 40 ans ?',
    related: ['@equipements', 'retine', 'laser'],
    meta: {
      title: 'Glaucome à Fès : dépistage et suivi – Dr Elaouni Rajae',
      description:
        'Dépistage, diagnostic et suivi du glaucome à Fès : mesure de la pression, OCT du nerf optique. Cabinet du Dr Elaouni Rajae, Avenue des FAR.',
    },
  },
  {
    slug: 'ophtalmologie-pediatrique',
    icon: 'baby', // icône Lucide (modale RDV)
    name: 'Ophtalmologie pédiatrique',
    label: 'Enfants',
    photo: 'pediatrie-hero',
    photoAlt:
      'Enfant portant des lunettes, un œil caché par un cache-œil. Texte : « Le dépistage précoce permet de détecter tôt les troubles visuels chez l’enfant et d’assurer une prise en charge optimale. »',
    photoFit: 'full',
    // Sections validées par la doctoresse (PDF, étape 3.2) : pas de badge [À VALIDER]
    validated: ['what', 'signs', 'steps'],
    card: 'Dépistage et suivi de la myopie, de l’hypermétropie, de l’astigmatisme, de l’amblyopie et du strabisme.',
    intro:
      'Dépistage et suivi des troubles visuels de l’enfant : myopie, hypermétropie, astigmatisme, amblyopie et strabisme.',
    whatTitle: 'Pourquoi examiner les yeux d’un enfant ?',
    what: 'La vision se développe pendant l’enfance. Un trouble non corrigé peut gêner les apprentissages et le développement visuel. Un enfant se plaint rarement de mal voir : le dépistage permet de repérer ces troubles tôt.',
    signsTitle: 'Signes qui doivent alerter',
    signs: [
      ['scanEye', 'Plisse les yeux ou s’approche des écrans'],
      ['check', 'Difficultés de lecture ou de concentration'],
      ['shieldCheck', 'Un œil qui dévie'],
      ['badgeCheck', 'Maux de tête, yeux qui piquent'],
    ],
    stepsTitle: 'Comment se déroule la consultation ?',
    steps: [
      ['Accueil', 'Un temps adapté à l’âge de l’enfant.'],
      ['Mesure de la vision', 'Tests adaptés à l’âge.'],
      ['Examen des yeux', 'Avec gouttes si nécessaire, pour une mesure précise.'],
      ['Correction et suivi', 'Lunettes si besoin et contrôles réguliers.'],
    ],
    doctor: GENERAL,
    faq: [
      {
        q: 'À quel âge faire le premier examen ?',
        a: 'Un examen des yeux peut être réalisé dès la naissance si nécessaire. Le dépistage visuel commence dès les premiers mois de vie, avec un examen recommandé entre 3 et 4 ans, même en l’absence de symptômes. En cas de strabisme, de reflet pupillaire anormal ou de suspicion de trouble visuel, il est important de consulter sans attendre.',
      },
      {
        q: 'Mon enfant doit-il porter ses lunettes en permanence ?',
        a: 'Cela dépend du trouble visuel et de la prescription de l’ophtalmologue. Dans certains cas, notamment en présence d’une amblyopie, d’un strabisme ou d’un défaut visuel important, le port permanent des lunettes est essentiel au bon développement de la vision.',
      },
      {
        q: 'Les écrans abîment-ils les yeux des enfants ?',
        a: 'Une utilisation prolongée des écrans peut provoquer une fatigue visuelle, une sécheresse oculaire et des troubles du sommeil. Le temps passé devant les écrans, particulièrement lorsqu’il remplace les activités en extérieur, est également associé à un risque accru de myopie. Il est recommandé de limiter les écrans, d’encourager les activités en plein air et de faire des pauses régulières.',
      },
    ],
    ctaTitle: 'Un doute sur la vue de votre enfant ?',
    related: ['strabisme', 'consultation-depistage', 'lentilles-de-contact'],
    meta: {
      title: 'Ophtalmologie pédiatrique à Fès – Dr Elaouni Rajae',
      description:
        'Dépistage et suivi de la vue des enfants à Fès : myopie, astigmatisme, amblyopie, strabisme. Cabinet du Dr Elaouni Rajae, Avenue des FAR.',
    },
  },
  {
    slug: 'echographie-oculaire',
    icon: 'audioWaveform', // icône Lucide (modale RDV)
    name: 'Échographie oculaire',
    label: 'Examen',
    photo: 'echo',
    photoAlt: 'Salle d’échographie oculaire du cabinet',
    card: 'Examen par ultrasons pour observer l’intérieur de l’œil lorsque le fond d’œil n’est pas visible.',
    intro:
      'Un examen par ultrasons, réalisé au cabinet, pour observer l’intérieur de l’œil et l’orbite lorsque c’est nécessaire.',
    whatTitle: 'Qu’est-ce que l’échographie oculaire ?',
    what: 'L’échographie utilise des ultrasons pour obtenir des images de l’intérieur de l’œil. Elle est utile notamment lorsque le fond d’œil n’est pas visible, par exemple en cas de cataracte dense, ou pour certaines mesures avant une chirurgie.',
    signsTitle: 'Quand est-elle prescrite ?',
    signs: [
      ['scanEye', 'Fond d’œil non visible (cataracte dense…)'],
      ['check', 'Mesures avant une chirurgie de la cataracte'],
      ['shieldCheck', 'Suspicion de décollement de rétine'],
      ['badgeCheck', 'Bilan d’une anomalie de l’œil ou de l’orbite'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Installation', 'Vous êtes installé confortablement, paupières fermées.'],
      ['Examen', 'Une sonde avec du gel est posée sur la paupière.'],
      // Durée alignée sur la réponse de la doctoresse (PDF, étape 15)
      ['Durée', 'L’examen dure généralement entre 5 et 15 minutes, selon les structures à examiner et les mesures nécessaires.'],
      ['Résultats', 'Les images sont analysées et expliquées.'],
    ],
    doctor: GENERAL,
    faq: [
      {
        q: 'L’échographie oculaire est-elle douloureuse ?',
        a: 'Non, l’échographie oculaire est un examen indolore et non invasif. Elle peut être réalisée à travers la paupière fermée après instillation de gouttes anesthésiantes.',
      },
      {
        q: 'Faut-il une préparation particulière ?',
        a: 'Non, aucune préparation particulière n’est nécessaire. L’examen peut être réalisé lors d’une consultation ophtalmologique.',
      },
      {
        q: 'Combien de temps dure l’examen ?',
        a: 'L’échographie oculaire est un examen rapide, qui dure généralement entre 5 et 15 minutes, selon les structures à examiner et les mesures nécessaires.',
      },
    ],
    ctaTitle: 'Un examen vous a été prescrit ?',
    related: ['cataracte', 'retine', '@equipements'],
    meta: {
      title: 'Échographie oculaire à Fès – Cabinet Dr Elaouni Rajae',
      description:
        'Échographie oculaire réalisée au cabinet d’ophtalmologie du Dr Elaouni Rajae à Fès, Avenue des FAR. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'retinographie',
    icon: 'camera', // icône Lucide (modale RDV)
    name: 'Rétinographie',
    label: 'Examen',
    photo: 'icare',
    photoAlt: 'Rétinographe numérique iCare du cabinet',
    card: 'La rétinographie est un examen rapide, indolore et non invasif qui permet de photographier le fond d’œil, notamment la rétine, la macula et le nerf optique.',
    intro:
      'Elle permet de dépister certaines maladies oculaires, de documenter les anomalies et de suivre leur évolution au fil du temps.',
    // Textes fournis par la doctoresse (PDF, étape 16.3) : pas de badge [À VALIDER]
    validated: ['intro', 'what', 'signs', 'steps'],
    whatTitle: 'Qu’est-ce que la rétinographie ?',
    what: [
      'La rétinographie est un examen rapide, indolore et non invasif qui permet de photographier le fond d’œil, notamment la rétine, la macula et le nerf optique.',
      'Elle permet de dépister certaines maladies oculaires, de documenter les anomalies et de suivre leur évolution au fil du temps.',
      'Grâce au rétinographe disponible au cabinet, cet examen peut être réalisé sans dilatation des pupilles dans de nombreuses situations.',
    ],
    signsTitle: 'Quand est-elle prescrite ?',
    signs: [],
    signCards: [
      ['droplet', 'Rétinopathie diabétique', 'Dépistage et surveillance des anomalies rétiniennes liées au diabète.'],
      ['scanEye', 'DMLA', 'Détection et suivi de certaines anomalies de la macula.'],
      ['shieldCheck', 'Glaucome', 'Photographie de la papille optique pour documenter et surveiller son aspect.'],
      ['badgeCheck', 'Maladies vasculaires rétiniennes', 'Recherche d’hémorragies et d’autres anomalies visibles des vaisseaux rétiniens.'],
      ['check', 'Bilan ophtalmologique', 'Documentation de l’état du fond d’œil et comparaison des images au cours du suivi.'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Préparation', 'Le patient est installé devant le rétinographe. Une dilatation des pupilles n’est pas nécessaire.'],
      ['Prise des photographies', 'Le patient fixe une cible lumineuse pendant que l’appareil capture des images de la rétine. L’examen est rapide, sans contact avec l’œil et indolore.'],
      ['Analyse des images', 'Les photographies sont analysées par l’ophtalmologue afin de rechercher d’éventuelles anomalies de la rétine, de la macula ou du nerf optique.'],
      ['Après l’examen', 'Le patient peut généralement reprendre immédiatement ses activités habituelles. Selon les résultats, un examen complémentaire, notamment un OCT ou un fond d’œil après dilatation, peut être nécessaire.'],
    ],
    doctor: SFO,
    faq: [
      {
        q: 'Faut-il dilater les pupilles pour réaliser une rétinographie ?',
        a: 'Pas systématiquement. Le rétinographe disponible au cabinet permet de photographier la rétine sans dilatation dans de nombreuses situations. Cependant, une dilatation peut être nécessaire pour obtenir de meilleures images ou réaliser un examen plus complet du fond d’œil.',
      },
      {
        q: 'La rétinographie est-elle douloureuse ?',
        a: 'Non, la rétinographie est un examen indolore, rapide et sans contact avec l’œil. Le patient doit simplement fixer une cible lumineuse pendant la prise des photographies.',
      },
      {
        q: 'Combien de temps dure l’examen ?',
        a: 'La prise des photographies ne dure généralement que quelques minutes. La durée peut être prolongée si une dilatation pupillaire est nécessaire.',
      },
      {
        q: 'Peut-on conduire après une rétinographie ?',
        a: 'Oui, généralement, si l’examen est réalisé sans dilatation. En revanche, si des gouttes dilatatrices sont utilisées, il est préférable de ne pas conduire tant que la vision n’est pas redevenue normale.',
      },
      {
        q: 'La rétinographie remplace-t-elle l’examen du fond d’œil ?',
        a: 'Non, pas systématiquement. Elle permet de photographier et de surveiller certaines structures de la rétine, mais un examen après dilatation peut être nécessaire, notamment pour explorer la périphérie rétinienne.',
      },
    ],
    ctaTitle: 'Un examen vous a été prescrit ?',
    related: ['retine', 'oct', 'glaucome'],
    meta: {
      title: 'Rétinographie à Fès – Cabinet Dr Elaouni Rajae',
      description:
        'Rétinographie au cabinet du Dr Elaouni Rajae à Fès : photographie du fond d’œil, souvent sans dilatation des pupilles. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'oct',
    icon: 'layers', // icône Lucide (modale RDV)
    name: 'OCT',
    label: 'Examen',
    photo: 'dr-oct',
    photoAlt: 'Dr Elaouni Rajae devant un examen OCT',
    card: 'L’OCT (Tomographie par Cohérence Optique) est un examen rapide, indolore et non invasif qui permet d’obtenir des images en coupe très détaillées des différentes structures de l’œil.',
    intro:
      'Il permet de détecter précocement certaines anomalies, parfois avant l’apparition de symptômes, et de suivre leur évolution avec précision.',
    // Textes fournis par la doctoresse (PDF, étape 16.4) : pas de badge [À VALIDER]
    validated: ['intro', 'what', 'signs', 'steps'],
    whatTitle: 'Qu’est-ce que l’OCT ?',
    what: [
      'L’OCT (Tomographie par Cohérence Optique) est un examen rapide, indolore et non invasif qui permet d’obtenir des images en coupe très détaillées des différentes structures de l’œil, notamment de la rétine, de la macula et du nerf optique.',
      'Il permet de détecter précocement certaines anomalies, parfois avant l’apparition de symptômes, et de suivre leur évolution avec précision.',
      'Cet examen peut être réalisé sans contact avec l’œil et, dans de nombreuses situations, sans dilatation des pupilles.',
    ],
    signsTitle: 'Quand est-il prescrit ?',
    signs: [],
    signCards: [
      ['scanEye', 'DMLA', 'Diagnostic et surveillance des anomalies maculaires, notamment la présence de liquide rétinien.'],
      ['droplet', 'Rétinopathie diabétique', 'Dépistage et suivi de l’œdème maculaire diabétique.'],
      ['shieldCheck', 'Glaucome', 'Analyse de l’épaisseur des fibres nerveuses rétiniennes (RNFL) et des cellules ganglionnaires pour aider au diagnostic et au suivi.'],
      ['badgeCheck', 'Maladies de la macula', 'Diagnostic et surveillance des membranes épirétiniennes, trous maculaires et autres anomalies maculaires.'],
      ['check', 'Baisse de vision inexpliquée', 'Recherche d’anomalies structurelles de la rétine ou du nerf optique.'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Préparation', 'Le patient est installé devant l’appareil OCT. Une dilatation des pupilles n’est généralement pas nécessaire.'],
      ['Acquisition des images', 'Le patient fixe une cible lumineuse pendant que l’appareil réalise des images en coupe des structures oculaires. L’examen est rapide, sans contact avec l’œil et indolore.'],
      ['Analyse des résultats', 'Les images sont analysées par l’ophtalmologue afin de rechercher d’éventuelles anomalies de la rétine, de la macula ou du nerf optique et de comparer les résultats aux examens précédents.'],
      ['Après l’examen', 'Le patient peut reprendre immédiatement ses activités habituelles. Selon les résultats, des examens complémentaires ou une surveillance régulière peuvent être nécessaires.'],
    ],
    doctor: SFO,
    faq: [
      {
        q: 'L’OCT est-il douloureux ?',
        a: 'Non, l’OCT est un examen totalement indolore, non invasif et sans contact avec l’œil. Il utilise un faisceau lumineux pour obtenir des images détaillées de la rétine et du nerf optique.',
      },
      {
        q: 'Faut-il dilater les pupilles pour un OCT ?',
        a: 'Pas systématiquement. L’OCT peut généralement être réalisé sans dilatation. Cependant, des gouttes dilatatrices peuvent être nécessaires dans certaines situations pour améliorer la qualité des images.',
      },
      {
        q: 'Combien de temps dure un OCT ?',
        a: 'L’examen dure généralement entre 5 et 10 minutes, selon les zones à analyser et la coopération du patient.',
      },
      {
        q: 'Peut-on conduire après un OCT ?',
        a: 'Oui, si aucune dilatation pupillaire n’a été réalisée et que votre vision le permet. En cas de dilatation, il est recommandé d’attendre le retour à une vision normale avant de conduire.',
      },
      {
        q: 'L’OCT présente-t-il des contre-indications ?',
        a: 'L’OCT est un examen très sûr, utilisant de la lumière et non des rayons X. Il ne présente pas de contre-indication majeure connue. Certaines situations, comme une opacité importante des milieux oculaires ou une difficulté à fixer, peuvent toutefois limiter la qualité des images.',
      },
    ],
    ctaTitle: 'Un examen vous a été prescrit ?',
    related: ['glaucome', 'retine', 'retinographie'],
    meta: {
      title: 'OCT (tomographie par cohérence optique) à Fès – Dr Elaouni',
      description:
        'OCT au cabinet du Dr Elaouni Rajae à Fès : images en coupe de la rétine, de la macula et du nerf optique, sans contact. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'laser',
    icon: 'zap', // icône Lucide (modale RDV)
    name: 'Laser',
    label: 'Traitement',
    photo: 'salle-examen',
    photoAlt: 'Salle d’examen du cabinet',
    card: 'Traitements au laser de certaines pathologies de l’œil, selon l’indication posée en consultation. [À COMPLÉTER : types de laser]',
    intro:
      'Des traitements au laser pour certaines pathologies de l’œil, lorsque l’indication est posée en consultation. [À COMPLÉTER : types de laser disponibles au cabinet]',
    // FR : deux illustrations (remplacent la photo ci-dessus, gardée seulement si `photos` absent)
    photos: [
      { name: 'laser-1', alt: 'Schéma en coupe d’un œil : un faisceau laser traverse le cristallin jusqu’à la rétine' },
      { name: 'laser-2', alt: 'Patient installé à la lampe à fente pendant un traitement au laser, une lentille posée sur l’œil' },
    ],
    photosLayout: 'equal',
    // Textes fournis par la doctoresse (PDF, étape 12) : pas de badge [À VALIDER]
    validated: ['what', 'signs', 'steps'],
    whatTitle: 'À quoi sert le laser en ophtalmologie ?',
    what: [
      'Le laser est une technologie utilisée en ophtalmologie pour traiter certaines maladies de la rétine, du glaucome et des complications survenant après une chirurgie de la cataracte.',
      'Il permet d’agir de manière ciblée sur les structures de l’œil, généralement sans incision chirurgicale. Le type de laser utilisé dépend de la pathologie et de l’objectif du traitement.',
      'Un examen ophtalmologique approfondi est indispensable pour déterminer l’indication du laser.',
    ],
    signsTitle: 'Dans quelles situations ?',
    // FR : situations détaillées (liste numérotée) à la place des cartes ci-dessous (gardées en AR)
    situations: [
      ['Rétinopathie diabétique – Photocoagulation panrétinienne (PPR)', 'La PPR est un traitement au laser indiqué notamment dans certaines formes avancées de rétinopathie diabétique, caractérisées par l’apparition de vaisseaux sanguins anormaux sur la rétine. Elle permet de réduire le risque de complications graves, notamment les hémorragies intraoculaires et certaines formes de décollement de rétine.'],
      ['Déchirures rétiniennes – Photocoagulation au laser', 'Lorsqu’une déchirure de la rétine présente un risque de décollement, le laser permet de créer une barrière cicatricielle autour de celle-ci. L’objectif est de limiter le passage de liquide sous la rétine et de réduire le risque de décollement rétinien.'],
      ['Glaucome par fermeture de l’angle – Iridotomie périphérique au laser YAG', 'L’iridotomie consiste à réaliser une petite ouverture dans la périphérie de l’iris afin de faciliter la circulation de l’humeur aqueuse. Elle est notamment indiquée dans certaines situations de fermeture de l’angle iridocornéen ou d’angle étroit à risque, selon le mécanisme identifié.'],
      ['Cataracte secondaire – Capsulotomie au laser YAG', 'Après une chirurgie de la cataracte, la capsule située derrière l’implant peut progressivement devenir opaque, entraînant une baisse de la vision. Le laser YAG permet de créer une ouverture dans cette capsule opacifiée afin de rétablir la transparence de l’axe visuel et d’améliorer la vision lorsque cette opacification est responsable de la gêne.'],
    ],
    signs: [
      ['shieldCheck', '[À COMPLÉTER : indication 1]'],
      ['scanEye', '[À COMPLÉTER : indication 2]'],
      ['check', '[À COMPLÉTER : indication 3]'],
      ['badgeCheck', '[À COMPLÉTER : indication 4]'],
    ],
    stepsTitle: 'Comment se déroule une séance de laser ?',
    steps: [
      ['Consultation', 'Un examen ophtalmologique complet permet d’établir le diagnostic, de confirmer l’indication du laser et d’expliquer les bénéfices ainsi que les risques du traitement.'],
      ['Préparation', 'Des gouttes sont instillées pour préparer l’œil. Selon le type de laser, elles permettent de dilater ou de contracter la pupille et d’anesthésier la surface oculaire.'],
      ['Séance de laser', 'Le patient est installé devant un appareil spécifique. Le médecin dirige les impacts laser vers la zone à traiter, parfois à l’aide d’une lentille de contact. La séance dure généralement quelques minutes à plusieurs dizaines de minutes selon le traitement. Une gêne ou une douleur transitoire peut être ressentie, particulièrement lors de certaines photocoagulations rétiniennes.'],
      ['Suivi', 'Un contrôle ophtalmologique est organisé selon le type de laser réalisé afin de vérifier l’efficacité du traitement et de rechercher d’éventuelles complications. Certaines pathologies peuvent nécessiter plusieurs séances ou des traitements complémentaires.'],
    ],
    doctor: SFO,
    faq: [
      {
        q: 'Le laser est-il douloureux ?',
        a: 'La plupart des traitements au laser sont bien tolérés grâce à l’utilisation de gouttes anesthésiantes. Une légère gêne ou une sensation de picotement peut être ressentie. Cependant, certains traitements, notamment la photocoagulation panrétinienne (PPR), peuvent être plus douloureux. Le confort varie selon le type de laser et la sensibilité de chaque patient.',
      },
      {
        q: 'Combien de séances faut-il ?',
        a: 'Le nombre de séances dépend de la maladie traitée et du type de laser utilisé. Une seule séance suffit généralement pour une iridotomie ou une capsulotomie au laser YAG. En revanche, la photocoagulation panrétinienne peut nécessiter plusieurs séances. Le traitement des déchirures rétiniennes est souvent réalisé en une séance, mais des séances complémentaires peuvent parfois être nécessaires.',
      },
      {
        q: 'Peut-on reprendre ses activités après la séance ?',
        a: 'La plupart des patients peuvent reprendre progressivement leurs activités habituelles après un traitement au laser. Cependant, une vision floue temporaire, une sensibilité à la lumière ou une gêne oculaire peuvent survenir, notamment après une dilatation pupillaire. Il est recommandé d’éviter de conduire tant que la vision n’est pas redevenue normale et de respecter les consignes spécifiques données par l’ophtalmologue.',
      },
    ],
    ctaTitle: 'Un traitement laser vous a été proposé ?',
    related: ['glaucome', 'retine', '@equipements'],
    meta: {
      title: 'Traitements laser en ophtalmologie à Fès – Dr Elaouni Rajae',
      description:
        'Traitements au laser de certaines pathologies de l’œil au cabinet du Dr Elaouni Rajae à Fès, Avenue des FAR. Tél. 05 32 39 18 18.',
    },
  },

  // =========================================================
  // 8 nouvelles pages (assets-source/Instructions_nouvelles_pages_site.pdf, nov. 2026)
  // Textes fournis par la doctoresse, repris tels quels : pas de badge [À VALIDER].
  // Pas de photo en tête ni de texte d'intro dans le bandeau vert (absents du PDF) :
  // les images sont dans « Qu'est-ce que… » (whatImage) et « Déroulement » (stepsImage
  // ou image d'une étape). `card` = 1re phrase de « Qu'est-ce que… ».
  // Bandeau final : ctaTitle + ctaText du PDF + bouton « Prendre rendez-vous ».
  // FR seulement pour l'instant (traduction AR : ar-a-faire.md).
  // Meta title/description : rédigés sur le modèle des autres pages, à valider.
  // =========================================================

  // ---------- Menu Chirurgie ----------
  {
    slug: 'implant-icl',
    icon: 'circleDot',
    name: 'Chirurgie réfractive par implant ICL',
    label: 'Chirurgie',
    validated: ['what', 'signs', 'steps'],
    card: 'La chirurgie par implant ICL (Implantable Collamer Lens) consiste à placer une lentille artificielle à l’intérieur de l’œil, entre l’iris et le cristallin, sans retirer ce dernier.',
    whatTitle: 'Qu’est-ce que la chirurgie réfractive par implant ICL ?',
    what: 'La chirurgie par implant ICL (Implantable Collamer Lens) consiste à placer une lentille artificielle à l’intérieur de l’œil, entre l’iris et le cristallin, sans retirer ce dernier. Elle permet de corriger certains défauts visuels, notamment la myopie et l’astigmatisme, et constitue une alternative à la chirurgie laser chez certains patients.',
    whatImage: { name: '01-icl-implant', alt: 'Implant ICL (Implantable Collamer Lens) tenu par une pince', caption: 'Implant ICL' },
    signsTitle: 'Signes qui peuvent motiver une consultation',
    signs: [
      ['glasses', 'Myopie importante'],
      ['focus', 'Astigmatisme associé à une myopie'],
      ['shieldCheck', 'Contre-indication à la chirurgie laser'],
      ['circleDot', 'Intolérance aux lentilles de contact'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Consultation et bilan', 'Examen ophtalmologique complet pour évaluer le défaut visuel et déterminer l’éligibilité à la chirurgie par implant ICL.'],
      ['Examens préopératoires', 'Mesures précises de l’œil, notamment la profondeur de la chambre antérieure, la densité des cellules endothéliales et les dimensions oculaires, afin de choisir l’implant adapté.'],
      ['Intervention', 'Insertion de l’implant ICL à travers une petite incision cornéenne, sous anesthésie locale, tout en conservant le cristallin naturel.'],
      ['Suivi', 'Contrôles postopératoires pour surveiller la récupération visuelle, la pression intraoculaire et le bon positionnement de l’implant.'],
    ],
    stepsImage: { name: '02-icl-schema-oeil', alt: "Schéma de l'œil montrant l'implant ICL placé entre l'iris et le cristallin" },
    doctor: UK_REFRACTIVE,
    faq: [
      {
        q: 'L’intervention est-elle douloureuse ?',
        a: 'L’intervention est généralement réalisée sous anesthésie locale, le plus souvent par collyres anesthésiants. Elle est habituellement peu douloureuse, mais une légère gêne peut être ressentie.',
      },
      {
        q: 'Combien de temps dure la récupération ?',
        a: 'L’amélioration visuelle est souvent rapide, dès les premiers jours. La stabilisation de la vision peut prendre plusieurs semaines selon les patients.',
      },
      {
        q: 'Quelle est la différence entre l’ICL et le LASIK ?',
        a: 'Le LASIK corrige la vision en remodelant la cornée à l’aide d’un laser. L’ICL consiste à implanter une lentille à l’intérieur de l’œil sans modifier la forme de la cornée. Le choix dépend du défaut visuel et des caractéristiques de chaque œil.',
      },
    ],
    ctaTitle: 'Vous souhaitez vous libérer de vos lunettes ?',
    ctaText: 'Un bilan ophtalmologique spécialisé permet de déterminer si la chirurgie par implant ICL est adaptée à votre vision.',
    related: ['chirurgie-refractive', 'topographie-corneenne', 'microscopie-speculaire'],
    meta: {
      title: 'Implant ICL (chirurgie réfractive) à Fès – Dr Elaouni Rajae',
      description:
        'Chirurgie réfractive par implant ICL à Fès : correction de la myopie et de l’astigmatisme sans retirer le cristallin. Dr Elaouni Rajae. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'pterygion',
    icon: 'eye',
    name: 'Chirurgie de ptérygion',
    label: 'Chirurgie',
    validated: ['what', 'signs', 'steps'],
    card: 'Le ptérygion est une excroissance bénigne de la conjonctive qui s’étend progressivement sur la cornée.',
    whatTitle: 'Qu’est-ce que le ptérygion ?',
    what: 'Le ptérygion est une excroissance bénigne de la conjonctive qui s’étend progressivement sur la cornée. Souvent favorisé par l’exposition au soleil, au vent et à la poussière, il peut provoquer une irritation, une rougeur et parfois une baisse de la vision.',
    whatImage: { name: '03-pterygion-photo', alt: "Photo d'un ptérygion sur l'œil", caption: 'Photo de ptérygion' },
    signsTitle: 'Signes qui doivent alerter',
    signs: [
      ['droplet', 'Rougeur oculaire persistante'],
      ['scanEye', 'Vision floue ou déformée'],
      ['shieldCheck', 'Sensation de corps étranger ou irritation'],
      ['eye', 'Gêne esthétique'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Consultation et bilan', 'Examen ophtalmologique pour évaluer la taille du ptérygion, son évolution et son retentissement sur la vision.'],
      ['Préparation préopératoire', 'Bilan de la surface oculaire et choix de la technique chirurgicale adaptée.'],
      // Phrase barrée dans le PDF (doublon de l'ancienne version) volontairement non reprise
      ['Intervention', 'Retrait chirurgical du ptérygion, avec réalisation d’une autogreffe conjonctivale ou d’un recouvrement par membrane amniotique, selon les caractéristiques du ptérygion et les besoins de chaque patient.'],
      ['Suivi', 'Contrôles postopératoires pour surveiller la cicatrisation et dépister une éventuelle récidive.'],
    ],
    stepsImage: { name: '04-pterygion-chirurgie', alt: 'Chirurgienne réalisant une chirurgie de ptérygion au microscope' },
    doctor: GENERAL,
    faq: [
      {
        q: 'L’intervention est-elle douloureuse ?',
        a: 'L’intervention est généralement réalisée sous anesthésie locale. Elle est habituellement peu douloureuse, mais une gêne, des picotements ou une sensation de corps étranger peuvent survenir pendant les premiers jours.',
      },
      {
        q: 'Combien de temps dure la récupération ?',
        a: 'La cicatrisation initiale prend généralement une à deux semaines. La rougeur peut persister plusieurs semaines et la récupération complète varie selon les patients.',
      },
      {
        q: 'Le ptérygion peut-il revenir après l’opération ?',
        a: 'Oui, une récidive est possible. L’utilisation d’une autogreffe conjonctivale permet de réduire ce risque. Une protection contre les UV et un suivi régulier sont recommandés.',
      },
    ],
    ctaTitle: 'Votre œil est souvent rouge ou irrité ?',
    ctaText: 'Un examen ophtalmologique permet d’évaluer votre ptérygion et de déterminer si une intervention est nécessaire.',
    related: ['chalazion', 'keratocone', 'consultation-depistage'],
    meta: {
      title: 'Chirurgie du ptérygion à Fès – Dr Elaouni Rajae',
      description:
        'Chirurgie de ptérygion à Fès, avec autogreffe conjonctivale ou membrane amniotique. Cabinet du Dr Elaouni Rajae, Avenue des FAR. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'chalazion',
    icon: 'eye',
    name: 'Chirurgie de chalazion',
    label: 'Chirurgie',
    validated: ['what', 'signs', 'steps'],
    card: "Le chalazion est une inflammation localisée de la paupière, provoquée par l'obstruction d'une glande de Meibomius.",
    whatTitle: 'Qu’est-ce que le chalazion ?',
    what: "Le chalazion est une inflammation localisée de la paupière, provoquée par l'obstruction d'une glande de Meibomius. Il se manifeste par une petite boule ou un gonflement de la paupière, parfois accompagné d'une rougeur ou d'une gêne. Lorsqu'il persiste malgré un traitement médical adapté, une intervention chirurgicale peut être proposée.",
    whatImage: { name: '05-chalazion-photo', alt: 'Chalazion de la paupière inférieure', caption: 'Image de chalazion' },
    signsTitle: 'Signes qui doivent alerter',
    signs: [
      ['circleDot', 'Boule ou gonflement de la paupière'],
      ['droplet', 'Rougeur ou inflammation locale'],
      ['eye', 'Gêne ou sensation de lourdeur palpébrale'],
      ['rotateCcw', 'Chalazion persistant ou récidivant'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Consultation et bilan', "Examen de la paupière pour confirmer le diagnostic, évaluer le chalazion et rechercher d'éventuels facteurs favorisants."],
      ['Traitement médical initial', 'Compresses chaudes et massages palpébraux, associés si nécessaire à un traitement médical adapté.'],
      ['Intervention', 'En cas de chalazion persistant, une incision et un curetage peuvent être réalisés sous anesthésie locale, généralement par la face interne de la paupière, sans cicatrice cutanée visible.'],
      ['Suivi', "Contrôle de la cicatrisation et surveillance de l'évolution, avec conseils d'hygiène palpébrale pour limiter les récidives."],
    ],
    stepsImage: {
      name: '06-chalazion-cure-chirurgicale',
      alt: 'Cure chirurgicale de chalazion (incision et curetage)',
      caption: 'Cure chirurgicale de chalazion',
    },
    // Reel Instagram sur le chalazion (demande de la doctoresse, PDF page 7), lien fourni le
    // 24/11/2026. URL complète attendue ; reel: null = emplacement vide (placeholder en dev).
    reel: 'https://www.instagram.com/reel/DfAYsQQRq_N/',
    // Khota A (khota-a.md) : Instagram bloque l'intégration (post « Age-restricted ») → vidéo
    // hébergée sur le site, lue sur place, + bouton « Voir sur Instagram » (lien `reel`).
    // Source : assets-source/videos/reel-chalazion.mp4 (H.264 720×1280, 2,3 Mo, faststart).
    reelVideo: {
      src: '/src/assets/videos/reel-chalazion.mp4',
      poster: 'reel-chalazion-poster', // image extraite à 7,5 s (aucune image opératoire)
      title: 'Vidéo du Dr Elaouni Rajae sur le chalazion',
    },
    doctor: GENERAL,
    faq: [
      {
        q: "L'intervention est-elle douloureuse ?",
        a: "L'intervention est généralement réalisée sous anesthésie locale. Une légère gêne peut être ressentie lors de l'anesthésie, mais le geste chirurgical est habituellement peu douloureux.",
      },
      {
        q: 'Combien de temps dure la récupération ?',
        a: "Un gonflement ou un petit hématome peut persister quelques jours après l'intervention. La récupération se fait généralement en une à deux semaines.",
      },
      {
        q: 'Un chalazion nécessite-t-il toujours une opération ?',
        a: 'Non. De nombreux chalazions régressent avec des soins locaux adaptés. La chirurgie est envisagée principalement lorsque le chalazion persiste, devient gênant ou résiste au traitement initial.',
      },
    ],
    ctaTitle: 'Une boule persistante sur votre paupière ?',
    ctaText: "Un examen ophtalmologique permet d'identifier la cause et de proposer le traitement le plus adapté.",
    related: ['pterygion', 'consultation-depistage', '@equipements'],
    meta: {
      title: 'Chirurgie du chalazion à Fès – Dr Elaouni Rajae',
      description:
        'Chalazion persistant : soins locaux, puis incision et curetage sous anesthésie locale si nécessaire. Cabinet du Dr Elaouni Rajae à Fès. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'injections-intravitreennes',
    icon: 'droplet',
    name: 'Injections intravitréennes (IVT)',
    label: 'Chirurgie',
    validated: ['what', 'signs', 'steps'],
    card: 'L’injection intravitréenne (IVT) consiste à administrer un médicament directement à l’intérieur de l’œil, dans le vitré.',
    whatTitle: 'Qu’est-ce qu’une injection intravitréenne (IVT) ?', // espace insécable : pas de « ? » seul en fin de ligne
    what: 'L’injection intravitréenne (IVT) consiste à administrer un médicament directement à l’intérieur de l’œil, dans le vitré. Elle permet de traiter certaines maladies de la rétine, notamment la dégénérescence maculaire liée à l’âge (DMLA) néovasculaire, l’œdème maculaire diabétique et les occlusions veineuses rétiniennes.',
    whatImage: { name: '07-ivt-schema-injection', alt: "Schéma d'une injection intravitréenne dans le vitré" },
    signsTitle: 'Signes qui doivent alerter',
    signs: [
      ['scanEye', 'Baisse de la vision centrale'],
      ['focus', 'Vision déformée (lignes ondulées)'],
      ['eye', 'Apparition d’une tache sombre au centre de la vision'],
      ['glasses', 'Difficulté à lire ou à reconnaître les visages'],
    ],
    stepsTitle: 'Comment se déroule la prise en charge ?',
    steps: [
      ['Consultation et bilan', 'Examen ophtalmologique complet, associé notamment à une OCT maculaire, pour établir le diagnostic et déterminer l’indication du traitement.'],
      ['Préparation', 'Désinfection rigoureuse de l’œil et de son environnement, puis instillation de gouttes anesthésiantes pour assurer le confort du patient.'],
      [
        'Injection',
        'Administration du médicament dans le vitré à l’aide d’une aiguille très fine, dans des conditions strictes d’asepsie. Le geste ne dure que quelques secondes.',
        // Image placée dans l'étape 3 (PDF) ; natural = image entière, sans recadrage
        [{ name: '08-ivt-geste-injection', alt: "Geste d'injection intravitréenne sous blépharostat", natural: true }],
      ],
      ['Suivi', 'Contrôles ophtalmologiques et OCT pour évaluer la réponse au traitement et adapter le rythme des injections si nécessaire.'],
    ],
    doctor: SFO,
    faq: [
      {
        q: 'L’injection est-elle douloureuse ?',
        a: 'L’injection est réalisée sous anesthésie locale par collyre. Elle est généralement peu douloureuse, mais une légère pression ou une gêne passagère peuvent être ressenties.',
      },
      {
        q: 'Combien d’injections sont nécessaires ?',
        a: 'Le nombre d’injections dépend de la maladie traitée et de sa réponse au traitement. Certaines pathologies nécessitent plusieurs injections espacées de quelques semaines, puis un suivi régulier.',
      },
      {
        q: 'Peut-on reprendre ses activités après l’injection ?',
        a: 'La plupart des activités habituelles peuvent être reprises rapidement. Une légère irritation ou une rougeur peut survenir après le geste. Il est recommandé de ne pas se frotter l’œil et de respecter les consignes postopératoires.',
      },
    ],
    ctaTitle: 'Votre vision devient floue ou déformée ?',
    ctaText: 'Un examen ophtalmologique et une OCT maculaire permettent d’identifier certaines maladies de la rétine et de déterminer si un traitement par injection intravitréenne est indiqué.',
    related: ['retine', 'oct', 'angiographie-retinienne'],
    meta: {
      title: 'Injections intravitréennes (IVT) à Fès – Dr Elaouni Rajae',
      description:
        'Injections intravitréennes à Fès pour la DMLA, l’œdème maculaire diabétique et les occlusions veineuses rétiniennes. Dr Elaouni Rajae. Tél. 05 32 39 18 18.',
    },
  },

  // ---------- Menu Explorations ----------
  {
    slug: 'angiographie-retinienne',
    icon: 'scanEye',
    name: 'Angiographie rétinienne',
    label: 'Examen',
    validated: ['what', 'signs', 'steps'],
    card: 'L’angiographie rétinienne est un examen d’imagerie qui permet d’étudier la circulation sanguine dans les vaisseaux de la rétine et de la choroïde.',
    whatTitle: 'Qu’est-ce que l’angiographie rétinienne ?',
    what: [
      'L’angiographie rétinienne est un examen d’imagerie qui permet d’étudier la circulation sanguine dans les vaisseaux de la rétine et de la choroïde.',
      'Elle consiste à réaliser une série de photographies du fond d’œil après l’injection d’un colorant, généralement la fluorescéine, dans une veine du bras.',
      'Cet examen permet de détecter certaines anomalies vasculaires, de localiser des zones de mauvaise circulation sanguine ou des fuites de liquide et d’orienter la prise en charge de différentes maladies rétiniennes.',
    ],
    whatImage: { name: '09-angiographie-cliche-fluoresceine', alt: 'Cliché d’angiographie rétinienne à la fluorescéine' },
    signsTitle: 'Quand est-elle prescrite ?',
    signs: [],
    signCards: [
      ['droplet', 'Rétinopathie diabétique', 'Recherche de zones d’ischémie rétinienne, de fuites vasculaires et de néovaisseaux pour évaluer la sévérité de la maladie.'],
      ['scanEye', 'DMLA', 'Recherche et analyse de néovaisseaux anormaux responsables de certaines formes de dégénérescence maculaire liée à l’âge.'],
      ['badgeCheck', 'Occlusions vasculaires rétiniennes', 'Évaluation des troubles de la circulation sanguine rétinienne, notamment des zones d’ischémie et des anomalies vasculaires associées.'],
      ['shieldCheck', 'Vascularites rétiniennes', 'Détection et évaluation des inflammations des vaisseaux rétiniens, permettant de visualiser les fuites vasculaires, les zones d’ischémie et de surveiller l’évolution de la maladie.'],
      ['glasses', 'Néovaisseaux du fort myope', 'Détection et évaluation des néovaisseaux choroïdiens liés à la forte myopie, responsables de saignements ou de fuites pouvant entraîner une baisse de la vision centrale.'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Préparation', 'Un interrogatoire médical est réalisé afin de rechercher d’éventuels antécédents de réaction au colorant. Les pupilles sont généralement dilatées à l’aide de gouttes.'],
      ['Injection du colorant', 'Un colorant fluorescent est injecté dans une veine du bras. Il circule dans le sang et permet de visualiser les vaisseaux de la rétine.'],
      ['Acquisition des images', 'Une série de photographies du fond d’œil est réalisée pendant la circulation du colorant, afin d’analyser les vaisseaux rétiniens et de rechercher d’éventuelles anomalies.'],
      ['Après l’examen', 'Une coloration jaunâtre temporaire de la peau et des urines orangées peuvent apparaître après l’injection de fluorescéine. La dilatation pupillaire peut entraîner une vision floue pendant quelques heures.'],
    ],
    stepsImage: { name: '10-angiographie-examen', alt: "Patient pendant un examen d'angiographie rétinienne" },
    doctor: SFO,
    faq: [
      {
        q: 'L’angiographie rétinienne est-elle douloureuse ?',
        a: 'L’examen est généralement indolore. Seule une légère gêne peut être ressentie lors de l’injection du colorant. Les photographies sont indolores, mais les flashs lumineux peuvent être un peu éblouissants.',
      },
      {
        q: 'L’injection du colorant présente-t-elle des risques ?',
        a: 'L’angiographie à la fluorescéine est généralement bien tolérée. Des nausées passagères peuvent survenir. Des réactions allergiques, parfois graves, restent rares. Il est important de signaler tout antécédent de réaction à la fluorescéine avant l’examen.',
      },
      {
        q: 'Peut-on conduire après une angiographie rétinienne ?',
        a: 'Il est déconseillé de conduire immédiatement après l’examen lorsque les pupilles ont été dilatées, car la vision peut rester floue et sensible à la lumière pendant plusieurs heures.',
      },
      {
        q: 'Quelle est la différence entre l’OCT et l’angiographie rétinienne ?',
        a: 'L’OCT permet d’obtenir des images en coupe des structures de la rétine, sans injection. L’angiographie à la fluorescéine étudie la circulation sanguine rétinienne après injection d’un colorant. Ces deux examens sont complémentaires.',
      },
    ],
    ctaTitle: 'Un examen approfondi de votre rétine est nécessaire ?',
    ctaText: 'L’angiographie rétinienne permet d’explorer certaines anomalies vasculaires et d’orienter le diagnostic et le traitement des maladies de la rétine.',
    related: ['retine', 'oct', 'retinographie'],
    meta: {
      title: 'Angiographie rétinienne à Fès – Dr Elaouni Rajae',
      description:
        'Angiographie rétinienne à la fluorescéine : étude de la circulation de la rétine (diabète, DMLA, occlusions). Dr Elaouni Rajae, ophtalmologue à Fès.',
    },
  },
  {
    slug: 'topographie-corneenne',
    icon: 'focus',
    name: 'Topographie cornéenne',
    label: 'Examen',
    validated: ['what', 'signs', 'steps'],
    card: 'La topographie cornéenne est un examen rapide, indolore et non invasif qui permet d’analyser avec précision la forme et la courbure de la cornée, la surface transparente située à l’avant de l’œil.',
    whatTitle: 'Qu’est-ce que la topographie cornéenne ?',
    what: [
      'La topographie cornéenne est un examen rapide, indolore et non invasif qui permet d’analyser avec précision la forme et la courbure de la cornée, la surface transparente située à l’avant de l’œil.',
      'Elle permet de détecter certaines anomalies cornéennes, notamment le kératocône, parfois avant l’apparition de symptômes, et de suivre leur évolution.',
      'Selon la technologie utilisée, l’examen peut également fournir une analyse de la face postérieure de la cornée et de son épaisseur (pachymétrie), offrant une évaluation plus complète de sa structure.',
    ],
    whatImage: { name: '11-topographie-corneenne', alt: 'Appareil de topographie cornéenne avec cartes cornéennes à l’écran' },
    signsTitle: 'Quand est-elle prescrite ?',
    signs: [],
    signCards: [
      ['focus', 'Kératocône', 'Dépistage précoce, diagnostic et surveillance de l’évolution du kératocône, une maladie caractérisée par une déformation progressive de la cornée.'],
      ['glasses', 'Bilan de chirurgie réfractive', 'Analyse de la forme et de la régularité de la cornée avant une chirurgie réfractive, afin d’évaluer l’éligibilité du patient et de rechercher d’éventuelles contre-indications.'],
      ['scanEye', 'Astigmatisme', 'Évaluation de la courbure cornéenne pour identifier et caractériser les astigmatismes réguliers ou irréguliers.'],
      ['circleDot', 'Adaptation des lentilles de contact', 'Analyse de la forme cornéenne pour orienter l’adaptation de certaines lentilles spécialisées, notamment en cas de kératocône ou de cornée irrégulière.'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Préparation', 'Le patient est installé devant l’appareil de topographie cornéenne, le menton et le front positionnés sur un support. Aucune dilatation des pupilles n’est nécessaire.'],
      ['Acquisition des images', 'Le patient fixe une cible lumineuse pendant que l’appareil analyse la forme et la courbure de la cornée. L’examen est rapide, sans contact avec l’œil et indolore.'],
      ['Analyse des résultats', 'Les cartes cornéennes sont analysées par l’ophtalmologue afin de rechercher d’éventuelles anomalies de courbure, d’épaisseur ou de régularité de la cornée.'],
      ['Après l’examen', 'Le patient peut reprendre immédiatement ses activités habituelles. Selon les résultats, une surveillance régulière ou des examens complémentaires peuvent être proposés.'],
    ],
    doctor: UK_REFRACTIVE,
    faq: [
      {
        q: 'La topographie cornéenne est-elle douloureuse ?',
        a: 'Non. Il s’agit d’un examen indolore, sans contact avec l’œil et ne nécessitant aucune injection.',
      },
      {
        q: 'Faut-il arrêter les lentilles de contact avant l’examen ?',
        a: "Oui, dans certaines situations. Les lentilles peuvent modifier temporairement la forme de la cornée et fausser les mesures. La durée d'arrêt dépend du type de lentilles et de l'indication de l'examen.",
      },
      {
        q: 'La topographie permet-elle de dépister un kératocône précoce ?',
        a: 'Oui. La topographie, notamment lorsqu’elle est associée à une analyse tomographique de la cornée, permet de détecter des anomalies évocatrices d’un kératocône à un stade précoce, parfois avant l’apparition d’une baisse de vision.',
      },
      {
        q: 'Quelle est la différence entre la topographie et la pachymétrie cornéenne ?',
        a: 'La topographie analyse principalement la forme et la courbure de la cornée, tandis que la pachymétrie mesure son épaisseur. Certains appareils permettent de réaliser ces deux analyses au cours du même examen.',
      },
    ],
    ctaTitle: 'Vous présentez un astigmatisme ou une suspicion de kératocône ?',
    ctaText: 'La topographie cornéenne permet une analyse détaillée de votre cornée afin de dépister certaines anomalies et d’orienter une prise en charge adaptée.',
    related: ['keratocone', 'lentilles-de-contact', 'chirurgie-refractive'],
    meta: {
      title: 'Topographie cornéenne à Fès – Dr Elaouni Rajae',
      description:
        'Topographie cornéenne : examen rapide et indolore pour dépister le kératocône et préparer une chirurgie réfractive. Dr Elaouni Rajae, ophtalmologue à Fès.',
    },
  },
  {
    slug: 'biometrie-oculaire',
    icon: 'audioWaveform',
    name: 'Biométrie oculaire',
    label: 'Examen',
    validated: ['what', 'signs', 'steps'],
    card: 'La biométrie oculaire est un examen rapide, indolore et non invasif qui permet de mesurer avec précision les différentes dimensions de l’œil, notamment sa longueur axiale et la courbure de la cornée.',
    whatTitle: 'Qu’est-ce que la biométrie oculaire ?',
    what: [
      'La biométrie oculaire est un examen rapide, indolore et non invasif qui permet de mesurer avec précision les différentes dimensions de l’œil, notamment sa longueur axiale et la courbure de la cornée.',
      'Elle joue un rôle essentiel dans le bilan préopératoire de la cataracte, en permettant de calculer la puissance de l’implant intraoculaire destiné à remplacer le cristallin naturel.',
      'La biométrie permet également de surveiller l’évolution de la myopie, notamment chez l’enfant, grâce à la mesure de la longueur axiale de l’œil.',
    ],
    whatImage: { name: '12-biometrie-oculaire', alt: 'Patient pendant un examen de biométrie oculaire' },
    signsTitle: 'Quand est-elle prescrite ?',
    signs: [],
    signCards: [
      ['aperture', 'Chirurgie de la cataracte', 'Mesures précises des dimensions oculaires pour calculer la puissance de l’implant intraoculaire et optimiser le résultat visuel après l’intervention.'],
      ['glasses', 'Chirurgie réfractive', 'Analyse de certains paramètres anatomiques de l’œil dans le cadre du bilan préopératoire, notamment pour la planification de certaines chirurgies par implants intraoculaires.'],
      ['baby', 'Myopie évolutive chez l’enfant', 'Mesure et surveillance de la longueur axiale de l’œil afin d’évaluer la progression de la myopie et l’efficacité des stratégies de freination myopique.'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Préparation', 'Le patient est installé devant l’appareil de biométrie oculaire, le menton et le front positionnés sur un support. Aucune dilatation des pupilles n’est généralement nécessaire.'],
      ['Acquisition des mesures', 'Le patient fixe une cible lumineuse pendant que l’appareil mesure les paramètres oculaires, notamment la longueur axiale et, selon l’équipement, la courbure cornéenne. L’examen est rapide, sans contact avec l’œil et indolore lorsqu’il est réalisé par biométrie optique.'],
      ['Analyse des résultats', 'Les mesures sont analysées par l’ophtalmologue afin de calculer la puissance de l’implant intraoculaire ou de surveiller l’évolution de la longueur axiale, selon l’indication.'],
      ['Après l’examen', 'Le patient peut reprendre immédiatement ses activités habituelles. Les résultats permettent d’orienter la prise en charge et de planifier les étapes suivantes si nécessaire.'],
    ],
    doctor: UK_CATARACTE,
    faq: [
      {
        q: 'La biométrie oculaire est-elle douloureuse ?',
        a: 'Non. La biométrie optique est un examen indolore, sans contact avec l’œil et ne nécessitant aucune injection.',
      },
      {
        q: 'Pourquoi réaliser une biométrie avant une chirurgie de la cataracte ?',
        a: 'La biométrie permet de calculer la puissance de l’implant qui remplacera le cristallin opacifié. Elle est indispensable pour choisir un implant adapté aux caractéristiques de chaque œil et optimiser la vision après l’intervention.',
      },
      {
        q: 'Peut-on réaliser une biométrie en cas de cataracte très dense ou d’hémorragie intravitréenne ?',
        a: 'Certaines situations, notamment une cataracte très dense, une hémorragie intravitréenne ou d’autres opacités des milieux oculaires, peuvent empêcher la réalisation des mesures par biométrie optique. Notre cabinet dispose également d’un équipement de biométrie échographique par contact, permettant de mesurer la longueur axiale de l’œil lorsque la biométrie optique n’est pas réalisable. Cette technique complémentaire permet d’obtenir les mesures nécessaires au calcul de la puissance de l’implant intraoculaire, même lorsque les milieux oculaires sont opaques.',
      },
      {
        q: 'La biométrie permet-elle de surveiller la myopie chez l’enfant ?',
        a: 'Oui. La mesure régulière de la longueur axiale permet de suivre la croissance de l’œil et d’évaluer la progression de la myopie, en complément des examens de réfraction.',
      },
      {
        q: 'Faut-il dilater les pupilles avant une biométrie ?',
        a: 'Non, la dilatation n’est généralement pas nécessaire pour réaliser une biométrie optique. Elle peut toutefois être indiquée dans le cadre d’un examen ophtalmologique complémentaire.',
      },
    ],
    ctaTitle: 'Vous préparez une chirurgie de la cataracte ?',
    ctaText: 'La biométrie oculaire permet de réaliser les mesures indispensables au calcul de votre implant intraoculaire et à la préparation de votre intervention.',
    related: ['cataracte', 'implant-icl', 'echographie-oculaire'],
    meta: {
      title: 'Biométrie oculaire à Fès – Dr Elaouni Rajae',
      description:
        'Biométrie oculaire optique et échographique : calcul de l’implant avant une chirurgie de la cataracte, suivi de la myopie. Dr Elaouni Rajae à Fès.',
    },
  },
  {
    slug: 'microscopie-speculaire',
    icon: 'layers',
    name: 'Microscopie spéculaire',
    label: 'Examen',
    validated: ['what', 'signs', 'steps'],
    card: 'La microscopie spéculaire est un examen rapide, indolore et non invasif qui permet d’analyser les cellules endothéliales de la cornée, situées sur sa face interne.',
    whatTitle: 'Qu’est-ce que la microscopie spéculaire ?',
    what: [
      'La microscopie spéculaire est un examen rapide, indolore et non invasif qui permet d’analyser les cellules endothéliales de la cornée, situées sur sa face interne.',
      'Ces cellules jouent un rôle essentiel dans le maintien de la transparence cornéenne en régulant son hydratation.',
      'Cet examen permet de mesurer leur densité, d’étudier leur taille et leur forme, et de détecter d’éventuelles anomalies pouvant compromettre la transparence de la cornée.',
    ],
    whatImage: { name: '13-microscopie-speculaire', alt: 'Appareil de microscopie spéculaire' },
    signsTitle: 'Quand est-elle prescrite ?',
    signs: [],
    signCards: [
      ['aperture', 'Bilan préopératoire de la cataracte', 'Évaluation de la densité et de la qualité des cellules endothéliales avant une chirurgie de la cataracte, notamment chez les patients présentant des facteurs de risque de décompensation cornéenne.'],
      ['focus', 'Dystrophies cornéennes', 'Diagnostic et surveillance de certaines maladies de l’endothélium cornéen, notamment la dystrophie endothéliale de Fuchs, pouvant entraîner un œdème et une baisse de vision.'],
      ['circleDot', 'Chirurgie réfractive par implant phaque ICL', "Évaluation de la densité des cellules endothéliales avant l'implantation d'une lentille intraoculaire et surveillance à long terme après l'intervention."],
      ['shieldCheck', 'Surveillance après chirurgie oculaire', 'Contrôle de l’état de l’endothélium cornéen après certaines interventions intraoculaires ou une greffe de cornée, afin de dépister une éventuelle perte cellulaire.'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Préparation', 'Le patient est installé devant l’appareil de microscopie spéculaire, le menton et le front positionnés sur un support. Aucune dilatation des pupilles n’est nécessaire.'],
      ['Acquisition des images', 'Le patient fixe une cible lumineuse pendant que l’appareil réalise des photographies agrandies des cellules endothéliales de la cornée. L’examen est rapide, sans contact avec l’œil et indolore.'],
      ['Analyse des résultats', 'L’ophtalmologue analyse la densité cellulaire, la variation de taille des cellules (polymégathisme) et la variation de leur forme (pléomorphisme), afin d’évaluer l’état de l’endothélium cornéen.'],
      ['Après l’examen', 'Le patient peut reprendre immédiatement ses activités habituelles. Selon les résultats, une surveillance régulière ou des examens complémentaires peuvent être proposés.'],
    ],
    doctor: UK_CATARACTE,
    faq: [
      {
        q: 'La microscopie spéculaire est-elle douloureuse ?',
        a: 'Non. Il s’agit d’un examen indolore, sans contact avec l’œil, ne nécessitant aucune injection ni dilatation pupillaire.',
      },
      {
        q: 'Pourquoi réaliser une microscopie spéculaire avant une chirurgie de la cataracte ?',
        a: 'La chirurgie de la cataracte peut entraîner une perte de cellules endothéliales. Cet examen permet d’évaluer leur réserve avant l’intervention et d’identifier les patients présentant un risque accru d’œdème cornéen postopératoire.',
      },
      {
        q: 'Les cellules endothéliales de la cornée se régénèrent-elles ?',
        a: 'Les cellules endothéliales humaines possèdent une capacité de régénération très limitée dans les conditions physiologiques. Lorsque leur nombre diminue, les cellules restantes s’étalent pour maintenir la fonction de l’endothélium. Une perte importante peut entraîner un œdème cornéen et une baisse de vision.',
      },
      {
        q: 'Quelle est la différence entre la microscopie spéculaire et la pachymétrie cornéenne ?',
        a: 'La microscopie spéculaire analyse les cellules endothéliales de la cornée, tandis que la pachymétrie mesure son épaisseur. Ces deux examens sont complémentaires pour évaluer la santé cornéenne.',
      },
    ],
    ctaTitle: 'Vous préparez une chirurgie oculaire ou présentez une maladie de la cornée ?',
    ctaText: 'La microscopie spéculaire permet d’évaluer la santé de votre endothélium cornéen et d’orienter une prise en charge adaptée.',
    related: ['cataracte', 'implant-icl', 'keratocone'],
    meta: {
      title: 'Microscopie spéculaire à Fès – Dr Elaouni Rajae',
      description:
        'Microscopie spéculaire : analyse des cellules endothéliales de la cornée avant une chirurgie de la cataracte ou un implant ICL. Dr Elaouni Rajae à Fès.',
    },
  },
];

export const CTA_DEFAULT_TEXT = CTA_TEXT;

export function serviceBySlug(slug) {
  return servicesContent.find((s) => s.slug === slug);
}

// Version localisée : FR = données ci-dessus ; AR = textes de services-content.ar.js
// fusionnés avec la structure FR (slug, photo, icônes, liens).
import { servicesContentAr } from './services-content.ar.js';

// Un service existe-t-il dans cette langue ?
export function serviceAvailable(slug, lang = 'fr') {
  return Boolean(serviceBySlug(slug) && (lang === 'fr' || servicesContentAr[slug]));
}

// Version AR = textes de services-content.ar.js + éléments non textuels du FR
// (icônes, images, liens, réglages). Tout contenu FR contenant du texte doit avoir
// sa traduction : sinon le build s'arrête (jamais de texte français sur une page AR).
const TRANSLATED = ['callouts', 'situations', 'signCards', 'warnings', 'whatFigure', 'whatImage', 'stepsImage', 'ctaText', 'reelVideo', 'faqAlert'];

// Image d'une section (whatImage / stepsImage) : fichier du FR, alt et légende de l'AR
const localizedMedia = (fr, ar, fail, what) => {
  if (!ar.alt || (fr.caption && !ar.caption)) fail(`alt / légende de ${what}`);
  return { ...fr, alt: ar.alt, ...(fr.caption ? { caption: ar.caption } : {}) };
};

export function localizedService(slug, lang = 'fr') {
  const base = serviceBySlug(slug);
  if (!base || lang === 'fr') return base;
  const ar = servicesContentAr[slug];
  if (!ar) throw new Error(`[services] traduction AR manquante : ${slug}`);
  const fail = (what) => { throw new Error(`[services] traduction AR manquante (${what}) : ${slug}`); };
  for (const key of TRANSLATED) if (base[key] && !ar[key]) fail(key);
  if (ar.steps.length !== base.steps.length) fail('steps');

  const out = {
    ...base,
    ...ar,
    // `photo` AR = version arabe d'une image avec texte (affiches) ; sinon l'image FR
    photo: ar.photo ?? base.photo,
    signs: base.signs.map(([icon], i) => [icon, ar.signs[i]]),
    // étapes : texte AR, images du FR avec leurs alt AR (3e élément)
    steps: ar.steps.map(([t, d, alts], i) => {
      const imgs = base.steps[i][2];
      const opts = base.steps[i][3]; // icône / « si besoin » : non textuels, repris du FR
      if (!imgs) return opts ? [t, d, null, opts] : [t, d];
      if (alts?.length !== imgs.length) fail(`alt des images de l'étape ${i + 1}`);
      return [t, d, imgs.map((p, k) => ({ ...p, alt: alts[k] }))];
    }),
  };
  // Vidéo hébergée (khota A) : fichier et poster du FR, titre de l'AR
  if (base.reelVideo) {
    if (!ar.reelVideo?.title) fail('reelVideo.title');
    out.reelVideo = { ...base.reelVideo, title: ar.reelVideo.title };
  }
  if (base.whatImage) out.whatImage = localizedMedia(base.whatImage, ar.whatImage, fail, 'whatImage');
  if (base.stepsImage) out.stepsImage = localizedMedia(base.stepsImage, ar.stepsImage, fail, 'stepsImage');
  if (base.signCards) out.signCards = base.signCards.map(([icon], i) => [icon, ...ar.signCards[i]]);
  if (base.callouts) {
    out.callouts = base.callouts.map((c, i) =>
      c.type === 'alert'
        ? { ...c, ...ar.callouts[i] }
        : { ...c, title: ar.callouts[i].title, items: c.items.map(([icon], k) => [icon, ...ar.callouts[i].items[k]]) },
    );
  }
  // Photos sans texte : alt arabes dans `photosAlt`
  if (base.photos) {
    if (ar.photosAlt?.length !== base.photos.length) fail('photosAlt');
    out.photos = base.photos.map((p, i) => ({ ...p, alt: ar.photosAlt[i] }));
  }
  return out;
}

// Groupes pour la page index /fr/services/
export const serviceGroups = [
  { title: 'Consultation et suivi', slugs: ['consultation-depistage', 'ophtalmologie-pediatrique', 'glaucome', 'retine'] },
  {
    title: 'Chirurgie et traitements',
    slugs: ['cataracte', 'chirurgie-refractive', 'implant-icl', 'strabisme', 'pterygion', 'chalazion', 'injections-intravitreennes', 'laser'],
  },
  { title: 'Cornée et lentilles', slugs: ['keratocone', 'lentilles-de-contact'] },
  {
    title: 'Examens au cabinet',
    slugs: [
      'echographie-oculaire', 'retinographie', 'oct',
      'angiographie-retinienne', 'topographie-corneenne', 'biometrie-oculaire', 'microscopie-speculaire',
    ],
  },
];
