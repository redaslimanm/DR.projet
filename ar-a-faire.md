# Version arabe — à faire (étape 18)

Pendant les étapes 1 à 17 du cahier de modifications, seule la version FR change.
Ce fichier liste, étape par étape, tout ce qu'il faudra reporter en AR pour que
`/ar/` soit **exactement équivalent** à `/fr/` : mêmes pages, sections, textes
(traduits), FAQ, images, encadrés, même nombre de services.

Les traductions et les images en arabe seront fournies, validées par la doctoresse.

## Mécanique (à connaître avant de commencer)

- Pages services AR = données FR (`src/data/services-content.js`) **fusionnées** avec
  `src/data/services-content.ar.js` (fonction `localizedService`).
- `FR_ONLY` (dans `services-content.js`) : champs FR jamais affichés en AR tant qu'ils
  ne sont pas traduits. Quand un champ est traduit dans `services-content.ar.js`, le
  **retirer de `FR_ONLY`**. Valeur actuelle : `validated`, `callouts`, `situations`, `signCards`, `warnings`.
- **Règle images (en vigueur depuis l'étape 9)** :
  - photos **sans texte** → affichées en AR **dès maintenant** (alt AR existant réutilisé
    quand il décrit bien la photo, sinon alt AR **provisoire** marqué `TODO AR`) ;
  - photos **avec du texte français** → ancienne photo gardée en AR via `photoAr`
    jusqu'à l'étape 18 ;
  - images placées dans une **section FR uniquement** → affichées en AR à l'étape 18,
    avec leur section.
- `photoAr` : ancienne photo gardée en AR parce que la nouvelle contient du texte en
  français. À **supprimer** quand la version arabe de l'image est intégrée.
- `photos` (2 photos côte à côte) : affiché en AR avec les alt de `photosAlt` dans
  `services-content.ar.js` (le build échoue s'il en manque un).
- **Alt / légendes AR provisoires** (à remplacer par la traduction validée) : chercher
  `TODO AR` dans le code. Liste à jour :
  - `src/data/services-content.ar.js` → `cataracte.photosAlt` (2 alt) ;
  - `ar/cabinet/index.html` → photo `cabinet-deco` (alt + légende « ديكور العيادة »).
  - `src/data/services-content.ar.js` → `'chirurgie-refractive'.photoAlt` (nouvelle photo).
  - `src/data/services-content.ar.js` → `laser.photosAlt` (2 alt).
  - `src/data/services-content.ar.js` → `keratocone.photoAlt` (nouvelle photo).
  - `src/data/services-content.ar.js` → `'lentilles-de-contact'.photoAlt` (nouvelle photo).
- FAQ AR : actuellement des chaînes (questions sans réponse, placeholder affiché). À
  passer au format FR `{ q, a }` (réponses traduites). Le JSON-LD FAQPage des pages
  services est aujourd'hui limité au FR (`build/partials-plugin.js`) : l'ouvrir à l'AR
  avec les mêmes règles (vraies réponses, sans doublon avec `/ar/faq/`).
- Badge `[À VALIDER]` : en AR il est affiché partout ; une fois la traduction validée,
  ajouter le champ `validated` en AR (même valeur qu'en FR) ou le retirer de `FR_ONLY`.
- Contrôle final : parité page par page (mêmes sections), aucun texte français sur une
  page AR, aucune image cassée, mise en page RTL correcte.

---

## Étape 1 — Accueil et informations pratiques

Fichiers : `ar/index.html`, `ar/faq/index.html`, `ar/contact/index.html`, `src/data/meta.js`.

- [ ] **Logo** « CHU Hassan II – Fès, Service d’ophtalmologie » à ajouter dans la bande
      « Formation et affiliations » de `ar/index.html` (après le logo CHU existant) :
      `/src/assets/logos/parcours/chu-hassan2-fes-ophtalmologie.webp`, 286×160,
      `class="is-tall"`, **alt à traduire**. **Image avec texte français** (logo officiel,
      pas de version arabe possible) : pas encore affichée en AR ; à décider avec la
      doctoresse (les autres logos en lettres latines, comme SFO, sont déjà affichés en AR).
- [ ] **Chiffres clés** (`ar/index.html`, section `.stats`) : « 5 » → « 3 » examens
      d’imagerie (le libellé AR reste à vérifier). Le bug des compteurs en double est
      déjà corrigé en AR (HTML).
- [ ] **Encadré « الاتفاقيات »** (CNSS, CNOPS…) à supprimer dans « Préparer votre visite ».
- [ ] **Documents à apporter** : CIN uniquement (retirer « ورقة الانخراط في التعاضدية ») —
      encadré de l'accueil, FAQ de l'accueil, `ar/faq/index.html`, `ar/contact/index.html`.
- [ ] **Question « ما هي الاتفاقيات المعمول بها؟ »** à retirer de `ar/faq/index.html`.
- [ ] **FAQ « كم يستغرق الفحص؟ »** (accueil + `ar/faq/`) : traduire « Environ 15 minutes,
      voire plus selon les examens complémentaires nécessaires. » — **selon la durée
      confirmée** (point client 2).
- [ ] **Meta description** de la page FAQ AR (`src/data/meta.js`, clé `ar` → `'faq/'`) :
      retirer « اتفاقيات CNSS و CNOPS » (comme en FR).
- [ ] **Badges CNSS · CNOPS · التعاضديات** (hero ligne 37 + bande verte mobile ligne 75) :
      même décision qu'en FR (point client 3).

## Étape 2 — Page « Consultation et dépistage »

Clé : `'consultation-depistage'` dans `src/data/services-content.ar.js`.

- [ ] `what` : traduire les **2 paragraphes** (tableau de 2 chaînes, comme en FR).
- [ ] `callouts` (**nouveau champ**, à ajouter) : encadré d'alerte « Urgence oculaire : … »
      + encadré « Une surveillance particulière est recommandée pour : » avec ses
      4 éléments (titre + texte ; les icônes viennent du FR). Puis retirer `callouts` de `FR_ONLY`.
- [ ] `steps[2]` (« Examen des yeux ») : traduire « Examen à la lampe à fente des
      paupières, de la cornée et du cristallin… » — **selon la réponse au point client 1**.
- [ ] `faq` : remplacer les 3 questions actuelles par les **8 questions avec réponses**
      du FR, même ordre (format `{ q, a }`). La question sur la durée porte
      `schema: false` en FR (doublon avec `/fr/faq/`) : idem en AR.
- [ ] La question « هل يلزم وصفة طبية للفحص؟ » (= « Faut-il une ordonnance pour
      consulter ? ») est en `draft` en FR : la masquer aussi en AR tant qu'elle n'a pas de réponse.
- [ ] `what` AR actuel mentionne « 15 دقيقة » : disparaît avec la nouvelle traduction.
- [ ] Badge `[À VALIDER]` : retirer sur `what` et `steps` (FR : `validated: ['what', 'steps']`).

## Étape 3 — Page « Ophtalmologie pédiatrique »

Clé : `'ophtalmologie-pediatrique'`.

- [ ] **Image** : l'affiche `pediatrie-hero` contient du **texte en français**
      (« Le dépistage précoce… ») → **version arabe de l'affiche à fournir**. Puis
      l'optimiser (`scripts/optimize-images.py`, ex. `pediatrie-hero-ar`), l'utiliser
      en AR et supprimer `photoAr: 'salle-examen'`. Affichage « image entière »
      (`photoFit: 'full'`), comme en FR.
- [ ] `photoAlt` : traduire l'alt (il décrit l'enfant et reprend le texte de l'affiche).
- [ ] `faq` : 3 questions **avec réponses** à traduire (format `{ q, a }`).
- [ ] Badge `[À VALIDER]` : retirer sur `what`, `signs`, `steps`
      (sections validées par la doctoresse).

## Étape 4 — Page « Strabisme »

Clé : `strabisme`.

- [ ] **Image** : l'affiche `strabisme-hero` contient du **texte en français**
      (« Le strabisme chez l’enfant… ») → **version arabe de l'affiche à fournir**,
      à optimiser (ex. `strabisme-hero-ar`) puis utiliser en AR ; supprimer
      `photoAr: 'salle-examen'`. Affichage « image entière » (`photoFit: 'full'`).
- [ ] `photoAlt` : traduire l'alt (il reprend le texte de l'affiche).
- [ ] `faq` : 3 questions **avec réponses** à traduire (format `{ q, a }`).

## Étape 5 — Page « Glaucome »

Clé : `glaucome`.

- [ ] `steps[1]` (« Examen du nerf optique ») : traduire « Fond d’œil pour évaluation
      de la papille optique, OCT du nerf optique et champ visuel. »
- [ ] FAQ : aucune réponse fournie pour l'instant (3 questions en `draft` en FR, section
      FAQ masquée en FR). En AR, aligner sur le FR quand les réponses seront données.

## Étape 6 — Page « Équipements »

Fichier : `ar/equipements/index.html` (page HTML, pas de données partagées). Reprendre
la structure de `fr/equipements/index.html` (même ordre des 7 blocs).

- [x] **Frontofocomètre** : photo `frontofocometre-huvitz` **déjà affichée en AR** (même
      appareil, alt AR existant « جهاز قياس النظارات Huvitz » conservé).
- [ ] L'image `frontofocometre` ne sert plus : la retirer de `scripts/optimize-images.py`
      et de `src/assets/images/`.
- [ ] **Nouveau bloc** « Autoréfractomètre, phoroptère et écran d’acuité visuelle »
      (section FR uniquement) : titre + 5 paragraphes à traduire ; grille de 4 photos
      (`autorefractometre`, `phoropteur`, `phoropteur-console`, `ecran-acuite-visuelle`,
      classe `equip-row__media--grid`) ; 4 alt à traduire ; lien Consultation.
- [ ] **Lampe à fente** : le bloc AR « المصباح الشقي وجهاز قياس الانكسار » (photo
      `huvitz`, qui correspond encore à son texte AR) devient « Lampe à fente » : titre +
      3 paragraphes à traduire ; grille de 2 photos (`lampe-a-fente`, `lampe-a-fente-volk`),
      2 alt à traduire. Les photos passent en AR avec la section.
- [ ] **Nouveau bloc** « Le tonomètre – Mesure de la pression intraoculaire » (section FR
      uniquement) : titre + 2 paragraphes à traduire ; photo `tonometre` (alt à traduire) ;
      lien Glaucome.
- Images : aucune ne contient de texte en français (écrans d'appareils seulement).

## Étape 7 — Page « Le cabinet »

Fichier : `ar/cabinet/index.html`.

- [x] **Galerie** : **déjà à parité** (8 photos, même ordre, `gallery-page--8`). Alt et
      légendes AR existants réutilisés pour `coin-salon` (= ركن الصالون) et
      `salle-examen-2` (= قاعة الفحص).
- [ ] **Alt + légende provisoires** de `cabinet-deco` (« ديكور العيادة ») : à remplacer par
      la traduction validée (`TODO AR` dans le fichier).
- [ ] L'image `salon` ne sert plus nulle part : la retirer de `scripts/optimize-images.py`
      et de `src/assets/images/`.
- [ ] **Section Accès** : remplacer l'encadré « [À DEMANDER : photo de la façade] » (en
      français, encore affiché en AR) par la mise en page `about about--access` du FR
      (photo `facade`, `about__photo--full`). **Alt à traduire.** Bloc « Accès » en AR à
      reprendre (label, titre, 3 cartes, bouton dans `about__content`).
- [ ] **Image avec texte français à décider avec la doctoresse** : `facade` est une vraie
      photo, mais la plaque du cabinet y est en français. Pas encore affichée en AR.
      L'afficher telle quelle (pas de version arabe possible d'une photo réelle) ?

## Étape 8 — Page « Dr Elaouni »

Fichier : `ar/dr-elaouni/index.html`.

- [x] **Photo du haut de page** : `dr-elaouni-hero` **déjà affichée en AR**, avec l'alt AR
      existant « الدكتورة العوني رجاء أمام المصباح الشقي » (déjà utilisé sur le site
      pour la même scène). Pas de texte sur l'image.
- `dr-oct` reste utilisée ailleurs (accueil, encart médecin des services, Équipements) :
  ne pas la supprimer.

## Étape 9 — Page « Cataracte »

Clé : `cataracte`.

- [x] **Photos** (`cataracte-1`, `cataracte-2`, champ `photos`) : **déjà affichées en AR**.
- [ ] `photosAlt` : **2 alt AR provisoires** à remplacer par la traduction validée
      (`TODO AR`). Le champ `photoAlt` AR (ancienne photo `dr-lampe`) ne sert plus sur
      cette page.
- [ ] `faq` : 3 questions **avec réponses** à traduire (format `{ q, a }`).

## Étape 10 — Page « Rétine »

Clé : `retine`.

- [ ] `faq` : 5 questions **avec réponses** à traduire (format `{ q, a }`), même ordre
      qu'en FR. La question « ما هو التنكس البقعي المرتبط بالسن؟ » (= « Qu’est-ce que la DMLA ? ») est en
      `draft` en FR (sans réponse) : la masquer aussi en AR tant qu'elle n'a pas de réponse.

## Étape 11 — Page « Chirurgie réfractive »

Clé : `'chirurgie-refractive'`.

- [x] **Photo** `chirurgie-refractive` (sans texte) : **déjà affichée en AR**.
- [ ] `photoAlt` : alt AR **provisoire** à remplacer par la traduction validée (`TODO AR`).
- [ ] `steps` : remplacer les 4 étapes par les 4 étapes du FR (titres + textes à traduire :
      Consultation initiale, Bilan préopératoire, Choix de la technique, Intervention et
      suivi postopératoire). Badge `[À VALIDER]` à retirer sur `steps`.
- [ ] `faq` : 6 questions **avec réponses** à traduire (format `{ q, a }`), même ordre.
      La question « Combien de temps dure le bilan ? » est en `draft` en FR : la masquer
      aussi en AR tant qu'elle n'a pas de réponse.

## Étape 12 — Page « Laser »

Clé : `laser`.

- [x] **Illustrations** `laser-1`, `laser-2` (sans texte, `photos` + `photosLayout: 'equal'`) :
      **déjà affichées en AR**.
- [ ] `photosAlt` : 2 alt AR **provisoires** à remplacer (`TODO AR`).
- [ ] `what` : 3 paragraphes à traduire (« À quoi sert le laser en ophtalmologie ? »).
- [ ] `situations` (**nouveau champ**, liste numérotée titre + texte) : 4 situations à
      traduire (PPR, déchirures rétiniennes, iridotomie YAG, capsulotomie YAG), puis
      retirer `situations` de `FR_ONLY`. Les cartes AR actuelles (`signs`, avec
      placeholders [À COMPLÉTER]) disparaissent alors de la page.
- [ ] `stepsTitle` (« Comment se déroule une séance de laser ? ») + `steps` : 4 étapes à
      traduire.
- [ ] `faq` : 3 questions **avec réponses** à traduire (format `{ q, a }`).
- [ ] Badge `[À VALIDER]` à retirer sur `what`, `signs`, `steps`.
- [ ] `card` et `intro` AR contiennent encore « [À COMPLÉTER : types de laser] » (comme le FR) :
      à aligner sur le FR quand le texte sera fourni.

## Étape 13 — Page « Kératocône »

Clé : `keratocone`.

- [x] **Photo principale** `keratocone-hero` (version HD, sans texte) : **déjà affichée en AR**.
      ⚠ Droits non confirmés (point client 4, image du laboratoire Dencott) : même décision
      en FR et en AR.
- [ ] `photoAlt` : alt AR **provisoire** à remplacer (`TODO AR`).
- [x] **Schéma** œil normal / kératocône : **réglé**. Version arabe fournie
      (`oeil-normal-vs-keratocone-ar.svg`), déjà affichée en AR via `whatFigure` dans
      `services-content.ar.js` (alt arabe repris du titre du SVG). Le build échoue si une
      page avec schéma n'a pas sa version AR.
- [ ] `steps` : 4 étapes à traduire (Diagnostic, Surveillance de l’évolution, Stabilisation
      du kératocône, Réhabilitation visuelle). Les étapes 3 et 4 portent des images
      (3e élément du tableau : `cross-linking` ; `lentille-sclerale-pose` +
      `lentille-sclerale`, sans texte) → les reprendre en AR avec **3 alt à traduire**.
      Badge `[À VALIDER]` à retirer sur `steps`.
- [ ] `faq` : 4 questions **avec réponses** à traduire (format `{ q, a }`).

## Étape 14 — Page « Lentilles de contact »

Clé : `'lentilles-de-contact'`.

- [x] **Photo** `adaptation-lentilles` (sans texte) : **déjà affichée en AR**.
- [ ] `photoAlt` : alt AR **provisoire** à remplacer (`TODO AR`).
- [ ] `what` (« Pourquoi une adaptation ? ») : 3 paragraphes à traduire.
- [ ] `signCards` (**nouveau champ**, 3 cartes titre + texte) : à traduire, puis retirer
      `signCards` de `FR_ONLY` ; les 4 cartes AR actuelles (`signs`) disparaissent alors.
- [ ] `steps` : 4 étapes à traduire (Bilan initial, Essai des lentilles, Optimisation de la
      correction, Apprentissage et suivi).
- [ ] `warnings` (**nouvelle rubrique** « Les gestes à ne jamais faire avec vos lentilles ») :
      titre, 4 cartes (titre + texte) et encadré « À retenir » à traduire, puis retirer
      `warnings` de `FR_ONLY`.
- [ ] `faq` : 3 questions **avec réponses** à traduire (format `{ q, a }`). La 1re réponse
      est une **liste à puces** (sous-tableau) avec libellés en `<strong>`.
- [ ] Badge `[À VALIDER]` à retirer sur `what`, `signs`, `steps`.

## Étape 15 — Page « Échographie oculaire »

Clé : `'echographie-oculaire'`.

- [ ] `faq` : 3 questions **avec réponses** à traduire (format `{ q, a }`).
- [ ] `steps[2]` (« Durée ») : traduire « L’examen dure généralement entre 5 et 15 minutes,
      selon les structures à examiner et les mesures nécessaires. » (aligné sur la FAQ).

## Étape 16 — Services : Angiographie et Topographie → Rétinographie et OCT

Déjà fait en AR (pour ne laisser aucun lien cassé) :
- [x] Pages `ar/services/angiographie-retinienne/` et `ar/services/topographie-corneenne/`
      supprimées, redirections **301** vers `/ar/services/` (`vercel.json`).
- [x] Menu AR à **10 services** ; page « الخدمات » à 11 cartes ; services liés AR sans
      lien mort ; liens retirés de « Examens réalisés au cabinet » (`ar/equipements/`).
- [x] Accueil AR : compteurs passés de 12 à **10** (bande verte, bouton mobile, chiffres).

À faire à l'étape 18 :
- [ ] **Traduire** les deux nouveaux services dans `src/data/services-content.ar.js`
      (nouvelles clés `retinographie` et `oct`) : `name`, `label`, `photoAlt`, `card`,
      `intro`, `whatTitle`, `what` (3 paragraphes), `signsTitle`, `signCards`
      (5 cartes titre + texte), `stepsTitle`, `steps` (4), `doctor`, `faq` (5 questions
      avec réponses), `ctaTitle`, `meta` (title ≤ 65 car., description 70–160).
- [ ] **Créer les pages** `ar/services/retinographie/index.html` et `ar/services/oct/index.html`
      (copie d'une page service AR, même gabarit).
- [ ] **Menu** : noms arabes dans `src/data/site.js` (`services` → `ar: null` à remplacer)
      → le menu AR repasse à 12.
- [ ] **Accueil AR** (`ar/index.html`) : remettre **12** aux 3 endroits marqués
      `TODO AR (étape 18)`.
- [ ] **Équipements AR** : ajouter Rétinographie et OCT dans « Examens réalisés au cabinet »
      (emplacement marqué `TODO AR`) ; liens des blocs rétinographe → `/ar/services/retinographie/`
      et OCT → `/ar/services/oct/` (comme en FR).
- [ ] **Services liés** : `retine.related` AR → retirer la surcharge (`TODO AR`) pour
      reprendre le FR (`retinographie`, `oct`, `glaucome`).
- [ ] Vérifier ensuite : hreflang FR ↔ AR et sélecteur de langue des 2 pages (aujourd'hui
      ils mènent à `/ar/services/`), sitemap (46 URL), JSON-LD FAQ AR.
