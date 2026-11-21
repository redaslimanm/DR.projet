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
    photo: 'strabisme-hero',
    photoAlt:
      'Enfant portant des lunettes, un œil qui dévie. Texte : « Le strabisme chez l’enfant. Un œil qui dévie de l’axe visuel. Plus il est dépisté tôt, plus la prise en charge est efficace et la vision de l’enfant mieux protégée. »',
    photoFit: 'full',
    photoAr: 'salle-examen', // image avec texte FR : ancienne photo gardée en AR (TODO traduction AR)
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
      ['Examen du nerf optique', 'Fond d’œil pour évaluation de la papille optique, OCT du nerf optique et champ visuel.'],
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
    photo: 'pediatrie-hero',
    photoAlt:
      'Enfant portant des lunettes, un œil caché par un cache-œil. Texte : « Le dépistage précoce permet de détecter tôt les troubles visuels chez l’enfant et d’assurer une prise en charge optimale. »',
    photoFit: 'full',
    photoAr: 'salle-examen', // image avec texte FR : ancienne photo gardée en AR (TODO traduction AR)
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
];

export const CTA_DEFAULT_TEXT = CTA_TEXT;

export function serviceBySlug(slug) {
  return servicesContent.find((s) => s.slug === slug);
}

// Version localisée : FR = données ci-dessus ; AR = textes de services-content.ar.js
// fusionnés avec la structure FR (slug, photo, icônes, liens).
import { servicesContentAr } from './services-content.ar.js';

// Champs ajoutés en FR (demandes de la doctoresse) et pas encore traduits :
// jamais affichés en AR, qui garde son contenu actuel (textes, sections, FAQ,
// encadrés). Les photos sans texte, elles, s'affichent déjà en AR ; les photos
// avec du texte français gardent l'ancienne image AR via `photoAr`.
// TODO traduction AR : traduire ces contenus puis les ajouter dans services-content.ar.js.
const FR_ONLY = ['validated', 'callouts', 'situations', 'signCards', 'warnings'];

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
  // Schéma : la version AR (fichier et alt arabes) doit être fournie, jamais la version FR
  if (base.whatFigure && !ar.whatFigure) throw new Error(`[services] schéma AR manquant (whatFigure) : ${slug}`);
  if (base.photoAr) delete out.photoFit; // l'ancienne photo AR garde l'affichage recadré
  // Photos sans texte : affichées en AR, avec les alt arabes (`photosAlt` dans le fichier AR)
  if (base.photos) {
    if (base.photoAr) delete out.photos;
    else {
      if (ar.photosAlt?.length !== base.photos.length) throw new Error(`[services] alt AR manquants (photosAlt) : ${slug}`);
      out.photos = base.photos.map((p, i) => ({ ...p, alt: ar.photosAlt[i] }));
    }
  }
  return out;
}

// Groupes pour la page index /fr/services/
export const serviceGroups = [
  { title: 'Consultation et suivi', slugs: ['consultation-depistage', 'ophtalmologie-pediatrique', 'glaucome', 'retine'] },
  { title: 'Chirurgie et traitements', slugs: ['cataracte', 'chirurgie-refractive', 'strabisme', 'laser'] },
  { title: 'Cornée et lentilles', slugs: ['keratocone', 'lentilles-de-contact'] },
  { title: 'Examens au cabinet', slugs: ['echographie-oculaire', 'angiographie-retinienne', 'topographie-corneenne'] },
];
