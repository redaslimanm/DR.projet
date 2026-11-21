# Parité FR / AR — état avant publication

Vérification du site généré (`npm run build`, dossier `dist/`), page par page, sans
`SHOW_DRAFT_BADGES` (réglage de production : badges de travail masqués).
Tout ce qui reste à faire en AR est détaillé dans `ar-a-faire.md` (étape 18).

Légende : ✅ conforme · ⏳ écart prévu, documenté dans `ar-a-faire.md` (traduction de
l'étape 18) — rien de faux ni de français visible · ⚠ décision à prendre (même état en FR et
en AR, ou hors périmètre).

## Corrections faites avant publication

| # | Point | État |
|---|---|---|
| 1 | Conventions CNSS / CNOPS / mutuelles : encadré, question FAQ (+ JSON-LD), Contact, meta description `/ar/faq/` retirés en AR | ✅ |
| 2 | Documents à apporter : « البطاقة الوطنية » seule (accueil : encadré + FAQ, `/ar/faq/`, `/ar/contact/`) | ✅ |
| 3 | Chiffres : « 3 » examens d'imagerie en AR | ✅ |
| 4 | Durée : « حوالي 15 دقيقة، وقد تزيد حسب الفحوصات التكميلية اللازمة. » (accueil, `/ar/faq/`, Consultation) ; TODO point client 2 dans les deux langues | ✅ |
| 5 | Questions sans réponse non affichées en AR ; section FAQ retirée s'il n'en reste aucune ; section « في أي حالات؟ » du Laser AR masquée ; aucun `[À VALIDER]` / `[À COMPLÉTER]` visible | ✅ |
| 6 | FAQ Glaucome masquée en AR comme en FR | ✅ |
| + | Option `SHOW_DRAFT_BADGES` (FR + AR), blocs `data-draft` (titre + texte qui n'était qu'un placeholder : FAQ « Questions médicales », Mentions légales, CNDP) | ✅ |

## Pages

| Page | Images | Sections / cartes / FAQ | Textes AR | Infos pratiques | État |
|---|---|---|---|---|---|
| Accueil | AR sans le logo « CHU – Service d'ophtalmologie » (texte FR sur le logo) | identiques (3 infos, 4 FAQ) | à jour | identiques ; services : FR 12 / AR 10 | ⏳ |
| Dr Elaouni | identiques | identiques | à jour | identiques | ✅ |
| Services | — | « Examens au cabinet » : FR 3 / AR 1 (Rétinographie, OCT non traduits) | à jour | — | ⏳ |
| Rétinographie, OCT | FR seulement | — | pages AR à créer | — | ⏳ |
| Équipements | FR 11 / AR 5 (blocs autoréfractomètre, lampe à fente, tonomètre en FR seulement) | FR 7 blocs / AR 5 | anciens textes AR cohérents entre eux | — | ⏳ |
| Le cabinet | AR sans la façade (texte FR sur la plaque) | galerie identique (8) ; Accès : AR affiche encore « [À DEMANDER : photo de la façade…] » | — | identiques | ⚠ |
| Contact | identiques | identiques | à jour | identiques | ✅ |
| FAQ | — | identiques (6 + 3 questions, JSON-LD 9 / 9) | à jour | identiques | ✅ |
| Conseils | — | identiques | à jour | — | ✅ |
| Mentions légales | — | identiques | « [À FAIRE RELIRE : …] » visible (FR et AR) | — | ⚠ |
| Confidentialité | — | identiques | « [À FAIRE RELIRE] », « [À DÉCIDER] », « [À METTRE À JOUR] » visibles (FR et AR) | — | ⚠ |
| Consultation | identiques | AR : sans encadrés ni FAQ | anciens textes (cohérents, durée corrigée) | — | ⏳ |
| Cataracte, Chirurgie réfractive, Échographie, Rétine | identiques | AR : sans FAQ | anciens textes | — | ⏳ |
| Strabisme, Pédiatrie | AR : ancienne photo (affiches avec texte FR) | AR : sans FAQ | anciens textes | — | ⏳ |
| Glaucome | identiques | sans FAQ dans les deux langues | anciens textes | — | ⏳ |
| Kératocône | AR sans les 3 images des étapes (étapes AR à traduire) ; schéma AR ✅ | AR : sans FAQ | anciens textes | — | ⏳ |
| Laser | identiques | AR : sans « Situations » ni FAQ ; étape 3 « الحصة » affichée sans texte | anciens textes | — | ⏳ |
| Lentilles | identiques | AR : sans « Les gestes à ne jamais faire » ni FAQ ; « Pour qui ? » 4 cartes (FR 3) | anciens textes | — | ⏳ |

## Transversal

| Contrôle | État |
|---|---|
| Alt des images AR : tous en arabe et fidèles à l'image affichée ; 6 provisoires (`TODO AR`) | ✅ (provisoires ⏳) |
| Téléphone, WhatsApp, email, adresse, horaires : identiques | ✅ |
| Menu : FR 12 / AR 10 (Rétinographie, OCT) ; footer identique | ⏳ |
| Liens AR → pages AR (seul le sélecteur de langue mène au FR) ; aucun lien cassé (46 pages) | ✅ |
| `lang="ar" dir="rtl"`, titres et descriptions en arabe, canonical, hreflang réciproques (sauf Rétinographie / OCT, voulu) | ✅ |
| JSON-LD FAQPage : pages services FR seulement (aucune réponse AR) ; `/ar/faq/` 9 = `/fr/faq/` 9 | ⏳ |
| Badges `[À VALIDER]` / `[À COMPLÉTER]` visibles | ✅ aucun (FR et AR) |
| Affichage mobile 390 px (FR et AR) | ✅ |

## Restent à décider (⚠)

1. **Placeholders hors `[À VALIDER]` / `[À COMPLÉTER]`, visibles en FR et en AR** :
   avis Google (`[À INTÉGRER : …]`, `[Prénom du patient]`), « ans d'expérience » (`[X]`,
   `[À CONFIRMER]`), Mentions légales et Confidentialité (`[À FAIRE RELIRE]`,
   `[À DÉCIDER]`, `[À METTRE À JOUR]`). Les masquer aussi en production ?
2. **Le cabinet (AR)** : l'encadré « [À DEMANDER : photo de la façade…] » (en français)
   est encore affiché en AR, alors que le FR montre la photo. Afficher la photo de la façade
   en AR (vraie photo, plaque en français) ou masquer l'encadré ?
3. **Laser (AR)** : l'étape 3 « الحصة » n'a plus de texte (c'était un placeholder).
