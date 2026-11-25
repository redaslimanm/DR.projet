# Parité FR / AR

Vérification du site généré (`npm run build`, dossier `dist/`), page par page, avec le réglage
de production (`SHOW_DRAFT_BADGES` non défini : badges de travail masqués).
Contrôles : images (nombre, fichiers, ordre, emplacement), alt AR, sections, cartes, étapes,
questions de FAQ, textes, chiffres et infos pratiques, menu, footer, liens, métadonnées,
JSON-LD, affichage mobile (390 px) et RTL.

**Résultat : 31 / 31 pages à parité** (23 pages à l'étape 18, + 8 pages le 23/11/2026).

**Mise à jour du 23/11/2026 — 31 / 31 pages à parité.** Les 8 nouvelles pages
(`Instructions_nouvelles_pages_site.pdf`) ont leur version arabe, **traduite par nous, publiée
et en attente de validation par la doctoresse** (relecture : `traduction-ar-8-pages.md`,
suivi : `ar-a-faire.md`).

| # | Page | URL FR | URL AR | Parité | Remarque |
|---|---|---|---|---|---|
| 24 | Chirurgie réfractive par implant ICL | `/fr/services/implant-icl/` | `/ar/services/implant-icl/` | ✅ | 2 images (1 légende), 4 signes, 4 étapes, 3 FAQ |
| 25 | Chirurgie de ptérygion | `/fr/services/pterygion/` | `/ar/services/pterygion/` | ✅ | 2 images (1 légende), 4 signes, 4 étapes, 3 FAQ |
| 26 | Chirurgie de chalazion | `/fr/services/chalazion/` | `/ar/services/chalazion/` | ✅ | 2 images (2 légendes), bloc reel, 3 FAQ |
| 27 | Injections intravitréennes (IVT) | `/fr/services/injections-intravitreennes/` | `/ar/services/injections-intravitreennes/` | ✅ | image dans l'étape 3, 3 FAQ |
| 28 | Angiographie rétinienne | `/fr/services/angiographie-retinienne/` | `/ar/services/angiographie-retinienne/` | ✅ | 2 images, 5 indications, 4 FAQ |
| 29 | Topographie cornéenne | `/fr/services/topographie-corneenne/` | `/ar/services/topographie-corneenne/` | ✅ | 1 image, 4 indications, 4 FAQ |
| 30 | Biométrie oculaire | `/fr/services/biometrie-oculaire/` | `/ar/services/biometrie-oculaire/` | ✅ | 1 image, 3 indications, 5 FAQ |
| 31 | Microscopie spéculaire | `/fr/services/microscopie-speculaire/` | `/ar/services/microscopie-speculaire/` | ✅ | 1 image, 4 indications, 4 FAQ |

Contrôles du 23/11/2026 (build de production) :
- Menu « Services ▾ » groupé dans les deux langues, même ordre : « Chirurgie / الجراحة »,
  « Explorations / الفحوصات », « Consultation et suivi / الاستشارة والمتابعة » (20 services).
- Accueil : 20 services dans les deux langues (bande de confiance, compteur, bouton).
- `/ar/services/` : 21 cartes ; groupe 1 renommé « الاستشارة والمتابعة » (au lieu de
  « الفحص والمتابعة »).
- hreflang FR ↔ AR réciproques et sélecteur de langue vers la même page ; sitemap 62 URL.
- JSON-LD FAQPage AR des 8 pages : textes identiques à la page, 29 questions avec réponse.
- Alt et légendes en arabe ; aucun texte français dans le contenu AR (hors sigles et termes
  volontairement entre parenthèses : ICL, IVT, OCT, LASIK, Ptérygion, Chalazion…).
- Liens internes : aucun lien cassé (62 pages), aucun lien AR → FR hors sélecteur de langue.
- Aucun débordement horizontal à 390 px ni à 1280 px (31 pages AR) ; RTL vérifié en capture
  (Chalazion, IVT, Angiographie, Microscopie, menu à 390 / 1024 / 1280 px).
- Les 23 pages FR d'origine sont identiques ; les 23 pages AR d'origine ne changent que par le
  menu, le chiffre de l'accueil (12 → 20) et la page des services (cartes + intertitre).

Tableau d'origine (23 pages) :

| # | Page | Parité | Remarque |
|---|---|---|---|
| 1 | Accueil | ✅ | 17 images (dont le logo CHU ophtalmologie), 12 services, compteurs 12 / 3 / 3 |
| 2 | Dr Elaouni | ✅ | |
| 3 | Services | ✅ | 13 cartes dans les deux langues |
| 4 | Consultation et dépistage | ✅ | encadrés, 6 étapes illustrées (25/11/2026), 8 FAQ ; points client 1 et 2 réglés |
| 5 | Cataracte | ✅ | 2 photos, 3 FAQ |
| 6 | Chirurgie réfractive | ✅ | 4 étapes, 6 FAQ |
| 7 | Strabisme | ✅ | affiche en version arabe (`strabisme-hero-ar`) |
| 8 | Lentilles de contact | ✅ | 3 cartes, rubrique « gestes à ne jamais faire » + « À retenir », 3 FAQ |
| 9 | Kératocône | ✅ | schéma SVG arabe, images des étapes 3 et 4, 4 FAQ |
| 10 | Maladies de la rétine | ✅ | 5 FAQ, services liés identiques |
| 11 | Glaucome | ✅ | 9 FAQ + encadré « maladie silencieuse » dans les deux langues (FR de la doctoresse, AR proposée à valider) ; JSON-LD 9 / 9 |
| 12 | Ophtalmologie pédiatrique | ✅ | affiche en version arabe (`pediatrie-hero-ar`) |
| 13 | Échographie oculaire | ✅ | 3 FAQ |
| 14 | Laser | ✅ | 4 situations, 4 étapes, 3 FAQ |
| 15 | Rétinographie | ✅ | page AR créée, hreflang FR ↔ AR |
| 16 | OCT | ✅ | page AR créée, hreflang FR ↔ AR |
| 17 | Équipements | ✅ | 7 blocs, 11 images, 3 examens |
| 18 | Le cabinet | ✅ | galerie 8 photos + façade |
| 19 | Conseils | ✅ | |
| 20 | Contact | ✅ | |
| 21 | FAQ | ✅ | 9 + 3 questions, JSON-LD 9 / 9 |
| 22 | Mentions légales | ✅ | |
| 23 | Confidentialité | ✅ | |

## Transversal

| Contrôle | État |
|---|---|
| Alt des images AR : tous en arabe et fidèles à l'image ; plus aucun alt provisoire | ✅ |
| Téléphone, WhatsApp, email, adresse, horaires, documents à apporter : identiques | ✅ |
| Menu : 12 services dans les deux langues ; footer identique | ✅ |
| Liens AR → pages AR (seul le sélecteur de langue mène au FR) ; aucun lien cassé (46 pages) | ✅ |
| `lang="ar" dir="rtl"` ; titres et descriptions AR dans les limites (Rétinographie 47 / 113 car., OCT 51 / 139 car.) ; hreflang réciproques ; sitemap 46 URL | ✅ |
| JSON-LD FAQPage AR : textes identiques à la page, vraies réponses uniquement | ✅ |
| Affichage mobile 390 px sans débordement (46 pages) et RTL | ✅ |
| Badges `[À VALIDER]` / `[À COMPLÉTER]` visibles | ✅ aucun |

## Points à connaître (n'empêchent pas la parité)

1. **JSON-LD AR, Échographie (2 questions contre 3 en FR) et Rétinographie (4 contre 5)** :
   la question traduite « كم يستغرق الفحص؟ » a exactement le même libellé que la question
   « durée de la consultation » de `/ar/faq/`. Elle reste affichée sur la page mais est exclue
   du JSON-LD (règle : pas de doublon avec la page FAQ). Pour l'y remettre, il suffirait de
   préciser la question AR (ex. « كم تستغرق الإكوغرافيا العينية؟ »).
2. **Placeholders encore visibles, identiques en FR et en AR** (non couverts par
   `SHOW_DRAFT_BADGES`) : avis Google (`[À INTÉGRER : …]`, `[Prénom du patient]`),
   « ans d'expérience » (`[X]`, `[À CONFIRMER]`), Mentions légales et Confidentialité
   (`[À FAIRE RELIRE]`, `[À DÉCIDER]`, `[À METTRE À JOUR]`). Ce sont les seuls textes en
   français visibles sur des pages AR (avec le sélecteur de langue « Français »).
3. Termes latins conservés dans la traduction validée : « PRK », « LASIK », « Cross-Linking »
   (entre parenthèses), « Huvitz », « Volk », « iCare », « OCT », « CXL », « YAG », « UVA »,
   « RNFL ».
