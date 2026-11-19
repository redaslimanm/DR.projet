# Projet : site web du cabinet d'ophtalmologie Dr Elaouni Rajae (Fès)

Ce fichier résume tout le cadrage du projet. Lis-le en entier avant d'écrire du code.

## Comment travailler avec moi

- Je parle en darija (écrite en lettres latines) mélangée avec du français technique. Réponds-moi de la même façon : darija claire + termes techniques en français.
- Avance **étape par étape**. À la fin de chaque étape, résume ce qui a été fait et attends mon « sala » / « next » avant de passer à la suivante.
- **Mobile-first** : chaque section doit être parfaite sur mobile avant le desktop. Les concurrents sont faibles sur mobile, c'est notre avantage principal.
- N'ajoute **aucune bibliothèque** en dehors de la stack ci-dessous sans me demander.
- N'invente aucun contenu médical, avis patient, chiffre ou statistique. Si une info manque, mets un placeholder visible `[À COMPLÉTER : …]`.
- HTML/CSS d'abord, **animations après** : on n'anime une section que quand son design est validé.

## Stack technique (validée, pas de WordPress)

| Outil | Rôle |
|---|---|
| HTML / CSS / JS (vanilla) | Base du site |
| Vite | Serveur de dev + build multi-pages optimisé |
| Lenis | Smooth scroll |
| GSAP + ScrollTrigger + SplitText | Animations au scroll, titres ligne par ligne (GSAP et ses plugins sont gratuits) |
| Three.js | Un seul effet 3D, dans le hero de l'accueil |
| Swiper | Sliders (équipements et avis sur mobile) |
| GLightbox | Lightbox pour la galerie du cabinet |

Intégration Lenis + ScrollTrigger : `lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t * 1000))`, `gsap.ticker.lagSmoothing(0)`.

Hébergement prévu : Netlify, Vercel ou Cloudflare Pages (site statique). Pas de CMS : c'est moi qui ferai les mises à jour (contrat de maintenance).

## Le client

- **Nom** : Dr Elaouni Rajae — Spécialiste en ophtalmologie (الدكتورة العوني رجاء — اختصاصية في طب و جراحة العيون)
- **Adresse** : Avenue des FAR, Résidence Oumnia, 3ème étage, Bureau N°17, Fès
  - Repères : entre Biougnach (électroménager) et **Eight Pool Academy** (salle de billard, pas un café)
  - AR : شارع الجيش الملكي، إقامة أمنية (بين بيوغناش و Eight Pool)، الطابق الثالث، المكتب رقم 17، فاس
  - Ascenseur disponible, parking à proximité
- **Téléphone fixe (secrétariat, appels)** : 05 32 39 18 18 → `tel:+212532391818`
- **WhatsApp (messages uniquement, PAS d'appels)** : 07 62 97 08 15 → `https://wa.me/212762970815`
- **Email** : dr.elaouni.rajae@gmail.com
- **Horaires** : lundi – vendredi 9h – 17h · samedi 9h – 13h · dimanche fermé
- **Consultation** : environ 15 min en moyenne. Urgences acceptées. Adultes et enfants.
- **Documents à apporter** : CIN + fiche d'adhésion mutuelle
- **Conventions** (confirmées par la doctora) : CNSS, CNOPS, mutuelles. Ne PAS écrire « assurances ».
- **Tarifs** : ne PAS les afficher (demande de la cliente)
- **Réseaux sociaux** : `[À CONFIRMER]`

### Parcours (texte validé, issu de sa carte de visite)

- Lauréate de la Faculté de Médecine, de Pharmacie et de Médecine Dentaire de Fès
- Ancienne médecin interne au CHU Hassan II – Fès
- Ancienne médecin à l'Hôpital Omar Drissi – Fès
- Membre de la Société Française d'Ophtalmologie
- Diplômée en :
  - Adaptation en lentilles de contact — Université Isabel I, Espagne
  - Chirurgie de la cataracte par phacoémulsification — Collège Royal des Ophtalmologues, Royaume-Uni
  - Chirurgie réfractive — Collège Royal des Ophtalmologues, Royaume-Uni

### Services (12)

Chirurgie de la cataracte · Chirurgie réfractive · Chirurgie du strabisme · Adaptation en lentilles de contact (souples, rigides, sclérales) · Kératocône et maladies de la cornée (Cross-Linking CXL) · Maladies de la rétine (rétinopathie diabétique, DMLA) · Glaucome · Ophtalmologie pédiatrique · Échographie oculaire · Angiographie rétinienne · Topographie cornéenne · Laser

(Validé : 12 services, comme sur la carte de visite. L'OCT n'est pas une page service : il est présenté dans « Équipements & examens ».)

Page supplémentaire avec le même template : **Consultation et dépistage** (`/fr/services/consultation-depistage/`), carte 01 de l'accueil. Elle ne compte pas dans les « 12 spécialités ».

Les textes médicaux du site sont regroupés dans `textes-a-valider.md` (racine, hors site) pour validation par la doctora. Tant qu'ils ne sont pas validés, ils restent marqués `[À VALIDER]`.

AR (depuis la carte de visite) : جراحة الجلالة – الجراحة الانكسارية – جراحة الحَوَل – العدسات اللاصقة – القرنيّة المخروطية وأمراض القرنيّة – أمراض الشبكية – الزرق – طب العيون عند الأطفال – الإكوغرافيا – تصوير الشبكية – تصوير القرنية – الليزر

Équipements visibles sur les photos : lampe à fente et autoréfractomètre Huvitz, frontofocomètre Huvitz, rétinographe iCare, échographe, OCT.

### Concurrence et positionnement

À Fès, plusieurs ophtalmologues sont sur l'Avenue des FAR, dont une juste à côté (près du Café Odyssée) avec un parcours très proche. Le site doit mettre en avant ce qui distingue Dr Elaouni : **formation au Royaume-Uni** (cataracte, réfractive), **lentilles sclérales / kératocône**, **plateau technique sur place**, **cabinet neuf et soigné**.

Benchmark des sites concurrents : ils ont tous photo du médecin, RDV/WhatsApp, arabe, services détaillés, carte, avis, blog/FAQ. Ce qu'on garde : preloader rapide avec icône, animations au scroll qui rendent le site « vivant ». Leur gros point faible : **le responsive mobile**.

### Déontologie (important)

Site médical au Maroc : pas de superlatifs (« le meilleur… »), pas de promesses de résultats, prudence sur les témoignages (à valider par la doctora avec l'Ordre des Médecins). Tous les textes médicaux (FAQ des services notamment) doivent être validés par la doctora → placeholders en attendant.

## Identité visuelle

### Couleurs (extraites du logo et de la déco du cabinet)

| Rôle | Code |
|---|---|
| Vert profond (principal) | `#2F4F3A` |
| Vert footer | `#23392B` |
| Or / bronze (accent) | `#92704B` |
| Or clair | `#D9B38A` |
| Or foncé (petit texte sur fond clair, contraste OK) | `#7A5C3A` |
| Beige crème (fonds de sections) | `#F5EDE2` |
| Blanc | `#FFFFFF` |
| Texte | `#2B2B2B` |
| Texte secondaire | `#5A5A5A` / `#6B6B6B` |
| WhatsApp (uniquement boutons WhatsApp) | `#25D366` |

Le logo a un dégradé or (bandes claires/foncées) : `#8A6946 → #D3AD85 → #9A7752 → #957350 → #D3AF87 → #A88560`.

### Typographie (Google Fonts)

| Usage | Police | Mobile | Desktop |
|---|---|---|---|
| H1 | Cormorant Garamond 600 | 38 px | 64 px |
| H2 | Cormorant Garamond 600 | 32 px | 46 px |
| H3 | Montserrat 600 | 16–18 px | 18–20 px |
| Texte | Montserrat 400 | 15–16 px | 16–17 px |
| Labels (MAJUSCULES, letter-spacing 2.5–3 px) | Montserrat 600 | 11 px | 13 px |
| Arabe (titres et texte) | Tajawal 400/700/800 | 16 px texte, 28–34 px titres | |

### Grille et composants

- Espacements en multiples de 8 px. Conteneur max 1200 px, marges 24 px (desktop) / 20 px (mobile).
- Espace entre sections : ~64 px mobile, ~110–120 px desktop.
- Boutons en pilule (`border-radius: 999px`), hauteur 52 px sur mobile. Cible tactile ≥ 44 px.
- Bouton principal : fond vert, texte blanc. Secondaire : bordure or. WhatsApp : bordure ou fond `#25D366`.
- Cartes : fond blanc, bordure `#EDE3D4`, radius 16–18 px.
- Icônes : style trait fin (Lucide), pas d'emoji.

## Arborescence du site

```
/fr/  et  /ar/  (mêmes pages, l'arabe en dir="rtl")
├── Accueil
├── Dr Elaouni (À propos)
├── Services (index) + 1 page par service (même template)
├── Équipements & examens
├── Le cabinet (galerie)
├── Conseils santé (blog)
├── FAQ
├── Contact & accès
└── Mentions légales + Politique de confidentialité (loi 09-08 / CNDP)
```

Menu : Accueil · Dr Elaouni · Services ▾ · Équipements · Le cabinet · Conseils · Contact + bouton « Prendre RDV ». Switch FR ↔ AR qui mène à la même page dans l'autre langue.

### Accueil : ordre des sections (validé)

1. Barre haute (horaires, adresse, switch FR/AR) — desktop uniquement
2. Header sticky : logo, menu (burger en mobile), bouton RDV
3. Hero (fond beige) : label « OPHTALMOLOGUE À FÈS », H1 « Prendre soin de vos yeux, à chaque âge de la vie », sous-titre, boutons « Appeler » + « WhatsApp », photo de la doctora (bras croisés) dans une arche avec un cercle doré derrière, badge « Formée au Royaume-Uni — Collège Royal des Ophtalmologues »
4. Bande de confiance (fond vert) : 12 spécialités · diplômes UK/Espagne · membre SFO · OCT/rétinographe/échographie
5. Services : 8 cartes numérotées (01, 02…) + « Voir tous les services »
6. À propos : photo devant l'OCT + texte + liste des diplômes + bouton
7. Plateau technique : 3 cartes équipements
8. Le cabinet : galerie (réception, salles d'attente, espace diplômes)
9. Citation : « La vision est l'art de voir l'invisible. » — Jonathan Swift (phrase écrite sur le mur du cabinet)
10. Avis patients : note Google + 3 avis → placeholders `[À INTÉGRER]`, jamais d'avis inventés
11. Infos pratiques (horaires, conventions, documents, annulation) + FAQ (4 questions, en `<details>`)
12. Contact : adresse + repères, téléphone, WhatsApp, email, carte Google Maps, plan d'accès (image tirée de la carte de visite)
13. Footer (fond `#23392B`, logo blanc)

**Mobile** : barre fixe en bas avec 2 boutons « Appeler » (vert) + « WhatsApp » (vert WhatsApp), `padding-bottom: env(safe-area-inset-bottom)`.

Titre AR du hero : « نعتني بعيونكم في كل مراحل العمر ».

### Template page service

1. Hero vert : fil d'Ariane, label, H1, intro, bouton RDV
2. Photo
3. « Qu'est-ce que … ? »
4. Signes / pour qui (cartes)
5. Déroulement de la prise en charge (étapes numérotées)
6. Encart Dr Elaouni (diplôme lié au service)
7. FAQ du service (réponses `[À VALIDER par la doctora]`)
8. CTA appel + WhatsApp
9. Services liés

## Plan d'animations

| Section | Animation |
|---|---|
| Preloader | Icône œil du logo tracée en SVG stroke puis fondu, < 1 s, fermeture forcée à 1,5 s max |
| Hero | H1 ligne par ligne (SplitText), photo révélée par un masque circulaire, Three.js en fond |
| Bande confiance | Compteurs 0 → 12 |
| Services | Cartes en stagger ; hover desktop : légère montée + bordure dorée |
| À propos | Parallax léger sur la photo, diplômes ligne par ligne |
| Équipements | Desktop : section « pinnée » avec défilement horizontal. Mobile : Swiper (pas de pin) |
| Le cabinet | Reveal des photos en clip-path |
| Citation | Mots qui s'éclairent au scroll |
| Autres | Fade-up simple |

Règles : tout respecte `prefers-reduced-motion` (contenu affiché directement) ; animations plus légères sur mobile ; le contenu est toujours présent dans le HTML (rien qui n'existe que via JS) ; en arabe, les animations latérales sont inversées.

### Three.js : « l'iris doré »

Particules dorées disposées en anneau façon iris (rappel du logo), rotation lente, réaction légère à la souris, derrière la photo du hero. Règles de performance :
- chargé en `import()` dynamique après l'affichage du hero ;
- pause quand le hero sort de l'écran (IntersectionObserver) ;
- `renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))` ;
- beaucoup moins de particules sur mobile, image statique si appareil faible ou `prefers-reduced-motion` ;
- uniquement sur l'accueil.

## Bilingue FR / AR

- Dossiers `/fr/` et `/ar/`, `<html lang="ar" dir="rtl">` pour l'arabe, police Tajawal.
- CSS en **propriétés logiques** (`margin-inline-start`, `padding-inline`, `inset-inline-end`…) pour que le RTL marche sans tout réécrire.
- Header/footer en partials partagés (une seule source).
- Balises `hreflang` entre les deux versions.

## Objectifs qualité (PageSpeed Insights, mobile)

Performance ≥ 90 · Accessibilité ≥ 95 · SEO = 100 · accueil < 1,5 Mo · images WebP/AVIF avec `width`/`height` et `loading="lazy"` (sauf hero) · `alt` sur chaque image · HTML sémantique (`<header>`, `<nav>`, `<main>`, `<section>`, vrais `<button>` et `<a>`).

SEO local : schema.org `Physician` / `MedicalClinic` (adresse, téléphone, horaires, géo), `sitemap.xml`, `robots.txt`, titres et meta descriptions par page. Exemple accueil :
- Title : `Ophtalmologue à Fès – Dr Elaouni Rajae | Avenue des FAR`
- Description : `Cabinet d'ophtalmologie à Fès : consultation, dépistage, chirurgie de la cataracte, kératocône, glaucome. Adultes et enfants. Tél. 05 32 39 18 18.`

## Assets disponibles

Je les mets dans `assets-source/` :
- `logo-dr-elaouni-couleur.svg`, `logo-dr-elaouni-blanc.svg` (pour fond vert), `icone-oeil.svg`, `favicon.svg`, `favicon-512.png`
- Photos (réelles, à convertir en WebP/AVIF) : doctora bras croisés (hero), doctora devant l'OCT (à propos), doctora à la lampe à fente (pages services), réception, salle d'attente « Vision is the art of seeing the invisible », grande salle d'attente, salle d'examen, équipements Huvitz, rétinographe iCare, salle d'échographie, espace diplômes, carte de visite recto/verso (le verso contient le plan d'accès)
- Manquant : photo de la façade / entrée de la Résidence Oumnia `[À DEMANDER]`
- Photo « coin canapé vert + cadres » (`salon` dans `scripts/optimize-images.py`) : à utiliser dans la page « Le cabinet ».
- Attention : les noms de fichiers de `maquette/images/` sont en partie inversés (reception/diplomes, echo/icare). La correspondance correcte est dans `scripts/optimize-images.py`.

## Maquette validée : `maquette/`

Le dossier `maquette/` contient la maquette validée en HTML (lis `maquette/README.md`) :
accueil desktop, accueil mobile, template page service, accueil arabe. **C'est la référence visuelle** :
respecte ses couleurs, typos, espacements, ordre des sections et textes. Ne copie pas son code
(styles inline de maquette) : reconstruis-le proprement selon ce fichier.

## Ordre de développement

1. Setup Vite multi-pages + structure + tokens CSS (variables)
2. Header / footer (partials) + Lenis
3. Accueil FR : HTML + CSS, **mobile d'abord**, sans animations
4. Animations GSAP de l'accueil
5. Three.js dans le hero
6. Autres pages FR (template service ×12)
7. Version AR
8. SEO (meta, schema, sitemap, hreflang)
9. Tests (mobile réel, PageSpeed, accessibilité, liens tel/WhatsApp)
10. Mise en ligne (hébergement + domaine)
