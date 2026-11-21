// =========================================================
// Contenu des pages service (FR) — une seule source pour :
//   - les 13 pages /fr/services/<slug>/ (template src/partials/service.js)
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
    steps: [
      ['Échange', 'Vos antécédents, vos symptômes et vos besoins visuels.'],
      ['Mesure de la vision', 'Évaluation de l’acuité visuelle et de la réfraction.'],
      // TODO client (point 1) : la doctoresse demande « … » après « cristallin ».
      // Points de suspension seulement, ou d'autres structures (conjonctive, iris…) ? En attente.
      ['Examen des yeux', 'Examen à la lampe à fente des paupières, de la cornée et du cristallin…'],
      ['Conclusion', 'Explication des résultats, ordonnance si besoin et suivi adapté.'],
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
      // TODO client (point 2) : « entre 20 et 30 minutes » ici, « environ 15 minutes » sur l'accueil et /fr/faq/.
      // Exclue du JSON-LD : même sujet que « Combien de temps dure une consultation ? » de /fr/faq/.
      {
        q: 'Combien de temps dure une consultation ophtalmologique ?',
        a: 'La durée varie selon le motif de consultation et les examens nécessaires. Une consultation habituelle dure généralement entre 20 et 30 minutes, mais elle peut être prolongée en cas de dilatation pupillaire ou d’examens complémentaires.',
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
    name: 'Chirurgie de la cataracte',
    label: 'Chirurgie',
    photo: 'dr-lampe',
    photoAlt: 'Dr Elaouni Rajae à la lampe à fente',
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
      { q: 'L’intervention est-elle douloureuse ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Combien de temps dure la récupération ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Faut-il opérer les deux yeux ?', draft: true }, // TODO réponse à fournir par la doctoresse
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
    name: 'Chirurgie réfractive',
    label: 'Chirurgie',
    photo: 'huvitz',
    photoAlt: 'Autoréfractomètre et lampe à fente du cabinet',
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
      ['Consultation', 'Échange sur vos attentes et examen complet des yeux.'],
      ['Bilan préopératoire', 'Mesures de la cornée et de la réfraction pour vérifier si vous êtes candidat.'],
      ['Décision', 'Explication des options possibles, de leurs limites et de leurs risques.'],
      ['Suivi', 'Contrôles réguliers après l’intervention, le cas échéant.'],
    ],
    doctor: UK_REFRACTIVE,
    faq: [
      { q: 'Suis-je candidat à la chirurgie réfractive ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'À partir de quel âge peut-on se faire opérer ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Combien de temps dure le bilan ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Envie de vous renseigner ?',
    related: ['topographie-corneenne', 'lentilles-de-contact', 'keratocone'],
    meta: {
      title: 'Chirurgie réfractive à Fès – Dr Elaouni Rajae',
      description:
        'Bilan de chirurgie réfractive à Fès : myopie, hypermétropie, astigmatisme. Dr Elaouni Rajae, diplômée du Collège Royal des Ophtalmologues (Royaume-Uni).',
    },
  },
  {
    slug: 'strabisme',
    name: 'Chirurgie du strabisme',
    label: 'Chirurgie',
    photo: 'salle-examen',
    photoAlt: 'Salle d’examen du cabinet',
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
      { q: 'À quel âge consulter pour un strabisme ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Le strabisme se corrige-t-il tout seul ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'La chirurgie est-elle toujours nécessaire ?', draft: true }, // TODO réponse à fournir par la doctoresse
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
    name: 'Adaptation en lentilles de contact',
    label: 'Contactologie',
    photo: 'dr-lampe',
    photoAlt: 'Dr Elaouni Rajae à la lampe à fente',
    card: 'Adaptation personnalisée en lentilles souples, rigides et sclérales, notamment pour le kératocône.',
    intro:
      'Une adaptation personnalisée en lentilles souples, rigides ou sclérales, y compris pour les cornées irrégulières comme le kératocône.',
    whatTitle: 'Pourquoi une adaptation ?',
    what: 'Chaque œil est différent : la forme de la cornée, la qualité des larmes et vos habitudes influencent le choix de la lentille. L’adaptation permet de choisir le type de lentille, de vérifier son confort et d’apprendre à la manipuler.',
    signsTitle: 'Pour qui ?',
    signs: [
      ['scanEye', 'Myopie, hypermétropie, astigmatisme'],
      ['check', 'Presbytie (lentilles multifocales)'],
      ['badgeCheck', 'Kératocône et cornées irrégulières'],
      ['shieldCheck', 'Sport et activités sans lunettes'],
    ],
    stepsTitle: 'Comment se déroule l’adaptation ?',
    steps: [
      ['Bilan', 'Examen de la cornée et mesure de la réfraction.'],
      ['Essai', 'Pose de lentilles d’essai et vérification de la vision et du confort.'],
      ['Apprentissage', 'Pose, retrait et entretien des lentilles.'],
      ['Contrôle', 'Visite de contrôle pour ajuster si nécessaire.'],
    ],
    doctor: ES_LENTILLES,
    faq: [
      { q: 'Quelle différence entre lentilles souples, rigides et sclérales ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Les lentilles sclérales sont-elles adaptées au kératocône ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Combien de temps dure l’adaptation ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Envie de passer aux lentilles ?',
    related: ['keratocone', 'topographie-corneenne', 'chirurgie-refractive'],
    meta: {
      title: 'Lentilles de contact à Fès – Dr Elaouni Rajae',
      description:
        'Lentilles souples, rigides et sclérales à Fès, y compris pour le kératocône. Dr Elaouni Rajae, diplômée de l’Université Isabel I (Espagne).',
    },
  },
  {
    slug: 'keratocone',
    name: 'Kératocône et maladies de la cornée',
    label: 'Cornée',
    photo: 'huvitz',
    photoAlt: 'Équipement d’examen de l’œil du cabinet',
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
      ['Diagnostic', 'Examen de la cornée et topographie cornéenne.'],
      ['Surveillance', 'Contrôles réguliers pour suivre l’évolution.'],
      ['Traitement', 'Cross-Linking (CXL) lorsque c’est indiqué, pour freiner l’évolution.'],
      ['Correction de la vision', 'Lunettes ou lentilles adaptées, dont les lentilles sclérales.'],
    ],
    doctor: ES_LENTILLES,
    faq: [
      { q: 'Le kératocône est-il évolutif ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'En quoi consiste le Cross-Linking ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Peut-on porter des lentilles avec un kératocône ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Votre astigmatisme augmente ?',
    related: ['topographie-corneenne', 'lentilles-de-contact', 'chirurgie-refractive'],
    meta: {
      title: 'Kératocône et Cross-Linking (CXL) à Fès – Dr Elaouni Rajae',
      description:
        'Diagnostic et suivi du kératocône à Fès : topographie cornéenne, Cross-Linking (CXL), lentilles sclérales. Cabinet du Dr Elaouni Rajae, Avenue des FAR.',
    },
  },
  {
    slug: 'retine',
    name: 'Maladies de la rétine',
    label: 'Rétine',
    photo: 'icare',
    photoAlt: 'Rétinographe numérique iCare du cabinet',
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
      { q: 'Pourquoi un diabétique doit-il faire contrôler son fond d’œil ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Qu’est-ce que la DMLA ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'L’examen de la rétine est-il douloureux ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Diabétique ou plus de 50 ans ?',
    related: ['angiographie-retinienne', '@equipements', 'glaucome'],
    meta: {
      title: 'Maladies de la rétine à Fès (diabète, DMLA) – Dr Elaouni',
      description:
        'Diagnostic et suivi des maladies de la rétine à Fès : rétinopathie diabétique, DMLA. Rétinographie et OCT au cabinet du Dr Elaouni Rajae.',
    },
  },
  {
    slug: 'glaucome',
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
      ['Examen du nerf optique', 'Fond d’œil et OCT du nerf optique.'],
      ['Traitement', 'Collyres, laser ou autres options selon les cas.'],
      ['Suivi', 'Contrôles réguliers pour adapter le traitement.'],
    ],
    doctor: SFO,
    faq: [
      { q: 'Le glaucome donne-t-il des symptômes ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Le glaucome est-il héréditaire ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Le traitement est-il à vie ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
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
    name: 'Ophtalmologie pédiatrique',
    label: 'Enfants',
    photo: 'salle-examen',
    photoAlt: 'Salle d’examen du cabinet',
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
      { q: 'À quel âge faire le premier examen ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Mon enfant doit-il porter ses lunettes en permanence ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Les écrans abîment-ils les yeux des enfants ?', draft: true }, // TODO réponse à fournir par la doctoresse
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
      ['Durée', 'L’examen ne dure que quelques minutes.'],
      ['Résultats', 'Les images sont analysées et expliquées.'],
    ],
    doctor: GENERAL,
    faq: [
      { q: 'L’échographie oculaire est-elle douloureuse ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Faut-il une préparation particulière ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Combien de temps dure l’examen ?', draft: true }, // TODO réponse à fournir par la doctoresse
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
    slug: 'angiographie-retinienne',
    name: 'Angiographie rétinienne',
    label: 'Examen',
    photo: 'icare',
    photoAlt: 'Rétinographe numérique iCare du cabinet',
    card: 'Photographies des vaisseaux de la rétine pour le diagnostic et le suivi de certaines maladies rétiniennes.',
    intro:
      'Un examen d’imagerie des vaisseaux de la rétine, utile pour le diagnostic et le suivi de certaines maladies rétiniennes.',
    whatTitle: 'Qu’est-ce que l’angiographie rétinienne ?',
    what: 'L’angiographie consiste à photographier la rétine après l’injection d’un colorant dans une veine du bras. Le colorant permet de visualiser la circulation dans les vaisseaux de la rétine.',
    signsTitle: 'Quand est-elle prescrite ?',
    signs: [
      ['scanEye', 'Rétinopathie diabétique'],
      ['shieldCheck', 'DMLA'],
      ['check', 'Occlusion d’une veine ou d’une artère de la rétine'],
      ['badgeCheck', 'Bilan d’une baisse de vision inexpliquée'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Préparation', 'Dilatation des pupilles avec des gouttes.'],
      ['Injection', 'Injection d’un colorant dans une veine du bras.'],
      ['Photographies', 'Série de photographies de la rétine.'],
      ['Après l’examen', 'Vision gênée par la dilatation pendant quelques heures.'],
    ],
    doctor: SFO,
    faq: [
      { q: 'Faut-il être à jeun ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Puis-je conduire après l’examen ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Y a-t-il des contre-indications ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Un examen vous a été prescrit ?',
    related: ['retine', '@equipements', 'glaucome'],
    meta: {
      title: 'Angiographie rétinienne à Fès – Cabinet Dr Elaouni Rajae',
      description:
        'Angiographie rétinienne au cabinet d’ophtalmologie du Dr Elaouni Rajae à Fès : examen des vaisseaux de la rétine. Tél. 05 32 39 18 18.',
    },
  },
  {
    slug: 'topographie-corneenne',
    name: 'Topographie cornéenne',
    label: 'Examen',
    photo: 'huvitz',
    photoAlt: 'Équipement d’examen de l’œil du cabinet',
    card: 'Cartographie de la surface de la cornée, utile pour le kératocône, les lentilles et la chirurgie réfractive.',
    intro:
      'Une cartographie précise de la surface de la cornée, rapide et sans contact.',
    whatTitle: 'Qu’est-ce que la topographie cornéenne ?',
    what: 'La topographie cornéenne mesure la forme et la courbure de la cornée, la surface transparente à l’avant de l’œil. Elle produit une carte en couleurs qui aide au diagnostic et aux décisions de traitement.',
    signsTitle: 'Quand est-elle utile ?',
    signs: [
      ['badgeCheck', 'Dépistage et suivi du kératocône'],
      ['check', 'Bilan avant chirurgie réfractive'],
      ['scanEye', 'Adaptation de lentilles de contact'],
      ['shieldCheck', 'Astigmatisme important ou irrégulier'],
    ],
    stepsTitle: 'Comment se déroule l’examen ?',
    steps: [
      ['Installation', 'Vous posez le menton sur l’appareil.'],
      ['Mesure', 'Vous fixez une lumière quelques secondes, sans contact avec l’œil.'],
      ['Analyse', 'La carte de la cornée est calculée.'],
      ['Résultats', 'Les résultats sont expliqués et intégrés au bilan.'],
    ],
    doctor: ES_LENTILLES,
    faq: [
      { q: 'L’examen est-il douloureux ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Faut-il retirer ses lentilles avant l’examen ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Combien de temps dure l’examen ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Un examen vous a été prescrit ?',
    related: ['keratocone', 'lentilles-de-contact', 'chirurgie-refractive'],
    meta: {
      title: 'Topographie cornéenne à Fès – Cabinet Dr Elaouni Rajae',
      description:
        'Topographie cornéenne au cabinet du Dr Elaouni Rajae à Fès : kératocône, lentilles de contact, bilan de chirurgie réfractive.',
    },
  },
  {
    slug: 'laser',
    name: 'Laser',
    label: 'Traitement',
    photo: 'salle-examen',
    photoAlt: 'Salle d’examen du cabinet',
    card: 'Traitements au laser de certaines pathologies de l’œil, selon l’indication posée en consultation. [À COMPLÉTER : types de laser]',
    intro:
      'Des traitements au laser pour certaines pathologies de l’œil, lorsque l’indication est posée en consultation. [À COMPLÉTER : types de laser disponibles au cabinet]',
    whatTitle: 'À quoi sert le laser en ophtalmologie ?',
    what: 'Le laser permet de traiter certaines pathologies de l’œil de façon ciblée. Le type de laser et son intérêt dépendent de la maladie à traiter ; l’indication est toujours posée après un examen complet.',
    signsTitle: 'Dans quelles situations ?',
    signs: [
      ['shieldCheck', '[À COMPLÉTER : indication 1]'],
      ['scanEye', '[À COMPLÉTER : indication 2]'],
      ['check', '[À COMPLÉTER : indication 3]'],
      ['badgeCheck', '[À COMPLÉTER : indication 4]'],
    ],
    stepsTitle: 'Comment se déroule la séance ?',
    steps: [
      ['Consultation', 'Examen complet et décision du traitement.'],
      ['Préparation', 'Gouttes et installation à l’appareil.'],
      ['Séance', '[À COMPLÉTER : déroulement de la séance]'],
      ['Suivi', 'Contrôle après la séance.'],
    ],
    doctor: SFO,
    faq: [
      { q: 'Le laser est-il douloureux ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Combien de séances faut-il ?', draft: true }, // TODO réponse à fournir par la doctoresse
      { q: 'Peut-on reprendre ses activités après la séance ?', draft: true }, // TODO réponse à fournir par la doctoresse
    ],
    ctaTitle: 'Un traitement laser vous a été proposé ?',
    related: ['glaucome', 'retine', '@equipements'],
    meta: {
      title: 'Traitements laser en ophtalmologie à Fès – Dr Elaouni Rajae',
      description:
        'Traitements au laser de certaines pathologies de l’œil au cabinet du Dr Elaouni Rajae à Fès, Avenue des FAR. Tél. 05 32 39 18 18.',
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

// Champs ajoutés en FR (demandes de la doctoresse) et pas encore traduits :
// jamais affichés en AR, qui garde son contenu actuel.
// TODO traduction AR : traduire ces contenus puis les ajouter dans services-content.ar.js.
const FR_ONLY = ['validated', 'callouts'];

export function localizedService(slug, lang = 'fr') {
  const base = serviceBySlug(slug);
  if (!base || lang === 'fr') return base;
  const ar = servicesContentAr[slug];
  if (!ar) throw new Error(`[services] traduction AR manquante : ${slug}`);
  const out = {
    ...base,
    ...ar,
    // photoAr : ancienne photo gardée en AR quand la nouvelle contient du texte en français
    photo: base.photoAr ?? base.photo,
    signs: base.signs.map(([icon], i) => [icon, ar.signs[i]]),
  };
  for (const key of FR_ONLY) delete out[key];
  return out;
}

// Groupes pour la page index /fr/services/
export const serviceGroups = [
  { title: 'Consultation et suivi', slugs: ['consultation-depistage', 'ophtalmologie-pediatrique', 'glaucome', 'retine'] },
  { title: 'Chirurgie et traitements', slugs: ['cataracte', 'chirurgie-refractive', 'strabisme', 'laser'] },
  { title: 'Cornée et lentilles', slugs: ['keratocone', 'lentilles-de-contact'] },
  { title: 'Examens au cabinet', slugs: ['echographie-oculaire', 'angiographie-retinienne', 'topographie-corneenne'] },
];
