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
  **retirer de `FR_ONLY`**. Valeur actuelle : `validated`, `callouts`.
- `photoAr` : ancienne photo gardée en AR parce que la nouvelle contient du texte en
  français. À **supprimer** quand la version arabe de l'image est intégrée.
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
      `class="is-tall"`, **alt à traduire**.
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
