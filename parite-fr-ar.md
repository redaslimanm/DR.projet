# Parité FR / AR

Vérification du site généré (`npm run build`, dossier `dist/`), page par page, avec le réglage
de production (`SHOW_DRAFT_BADGES` non défini : badges de travail masqués).
Contrôles : images (nombre, fichiers, ordre, emplacement), alt AR, sections, cartes, étapes,
questions de FAQ, textes, chiffres et infos pratiques, menu, footer, liens, métadonnées,
JSON-LD, affichage mobile (390 px) et RTL.

**Résultat : 23 / 23 pages à parité.**

| # | Page | Parité | Remarque |
|---|---|---|---|
| 1 | Accueil | ✅ | 17 images (dont le logo CHU ophtalmologie), 12 services, compteurs 12 / 3 / 3 |
| 2 | Dr Elaouni | ✅ | |
| 3 | Services | ✅ | 13 cartes dans les deux langues |
| 4 | Consultation et dépistage | ✅ | encadrés + 8 FAQ (TODO client 1 et 2 dans les deux langues) |
| 5 | Cataracte | ✅ | 2 photos, 3 FAQ |
| 6 | Chirurgie réfractive | ✅ | 4 étapes, 6 FAQ |
| 7 | Strabisme | ✅ | affiche en version arabe (`strabisme-hero-ar`) |
| 8 | Lentilles de contact | ✅ | 3 cartes, rubrique « gestes à ne jamais faire » + « À retenir », 3 FAQ |
| 9 | Kératocône | ✅ | schéma SVG arabe, images des étapes 3 et 4, 4 FAQ |
| 10 | Maladies de la rétine | ✅ | 5 FAQ, services liés identiques |
| 11 | Glaucome | ✅ | sans FAQ dans les deux langues (réponses non fournies) |
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
