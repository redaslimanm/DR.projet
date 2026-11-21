# Version arabe — état

**Étape 18 terminée** : la version AR est à parité avec la version FR (23 / 23 pages,
détail dans `parite-fr-ar.md`). Les 163 blocs de `a-traduire-ar.md`, traduits et validés,
sont intégrés ; les affiches `pediatrie-hero-ar` et `strabisme-hero-ar` sont en ligne.

## Mécanique (pour les prochaines modifications)

- Pages services AR = données FR (`src/data/services-content.js`) + textes de
  `src/data/services-content.ar.js` (fonction `localizedService`). Le FR fournit les
  éléments non textuels (icônes, images, liens, réglages) ; l'AR fournit tous les textes.
- **Garde-fou** : tout contenu FR avec du texte (`callouts`, `situations`, `signCards`,
  `warnings`, `whatFigure`, alt de `photos` et des images d'étapes, nombre d'étapes) doit avoir
  sa traduction en AR, sinon **le build s'arrête** (aucun texte français ne peut passer en AR).
- `photo` dans le fichier AR = version arabe d'une image avec texte (affiches).
- FAQ : `{ q, a }` publiée ; `{ q, draft: true }` non affichée ; `schema: false` = exclue du JSON-LD.
- Pages HTML (accueil, Équipements, Le cabinet, FAQ, Contact…) : un fichier par langue
  (`fr/…`, `ar/…`) à modifier en même temps.
- Badges de travail : `SHOW_DRAFT_BADGES` (voir `DEPLOIEMENT.md`).
- Toute nouvelle modification FR : l'ajouter ici tant que la traduction n'est pas faite.

## Reste à faire

- [ ] **Point client 1** (« … » après « cristallin » / « العدسة ») : mettre à jour FR + AR.
- [ ] **Point client 2** (durée de consultation) : unifier accueil, FAQ et page Consultation
      en FR + AR, puis remettre la question dans le JSON-LD (`schema: false` à retirer).
- [ ] **Point client 3** (badges CNSS / CNOPS du hero) : même décision en FR + AR.
- [ ] **Point client 4** (droits de `keratocone-hero`) : même image en FR + AR.
- [ ] Questions sans réponse (Consultation, Chirurgie réfractive, Rétine, Glaucome) : traduire
      les réponses quand la doctoresse les aura fournies.
- [ ] Facultatif : préciser en AR la question « كم يستغرق الفحص؟ » des pages Échographie et
      Rétinographie pour qu'elle revienne dans le JSON-LD (voir `parite-fr-ar.md`).
