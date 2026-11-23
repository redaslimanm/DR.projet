# Version arabe — état

**Étape 18 terminée** : la version AR est à parité avec la version FR (23 / 23 pages,
détail dans `parite-fr-ar.md`). Les 163 blocs de `a-traduire-ar.md`, traduits et validés,
sont intégrés ; les affiches `pediatrie-hero-ar` et `strabisme-hero-ar` sont en ligne.

**23/11/2026** : les 8 nouvelles pages ont leur version arabe (**31 / 31 pages à parité**).
Leur traduction est **proposée par nous**, publiée et **en attente de validation par la
doctoresse** (relecture : `traduction-ar-8-pages.md`).

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

- [ ] **8 nouvelles pages — publiées, en attente de validation par la doctoresse** (23/11/2026) :
      `implant-icl`, `pterygion`, `chalazion`, `injections-intravitreennes`,
      `angiographie-retinienne`, `topographie-corneenne`, `biometrie-oculaire`,
      `microscopie-speculaire` (`/ar/services/<slug>/`). Traductions proposées par nous
      (`src/data/services-content.ar.js`, commentaires `TODO AR`, `validated: []` → badges
      [À VALIDER] en dev). Fichier de relecture : **`traduction-ar-8-pages.md`** (FR | AR côte à
      côte + glossaire). Après validation : reporter les corrections, retirer `validated: []` et
      les `TODO AR`, cocher ici.
- [ ] **Noms arabes du menu** des 8 pages (`services` dans `src/data/site.js`, `TODO AR`) : à
      valider avec la relecture (même fichier).
- [ ] **Intertitres du menu groupé AR** (`serviceMenuGroups`, `TODO AR`) : « الجراحة »,
      « الفحوصات », « الاستشارة والمتابعة ». « الاستشارة والمتابعة » remplace aussi
      « الفحص والمتابعة » comme titre de groupe sur `/ar/services/` (`serviceGroupsAr`), pour ne
      pas ressembler à « الفحوصات ». À valider (fichier de relecture, section 1).
- [ ] **Bloc reel Instagram (page Chalazion AR)** : textes « شاهدوا الفيديو على إنستغرام » et
      la note (objet `UI.ar` de `src/partials/service.js`, `TODO AR`). Le lecteur Instagram reste
      en erreur (post « Age-restricted ») jusqu'à l'application de **khota A** (`khota-a.md`),
      qui couvre aussi la page AR.

- [ ] **Point client 1** (« … » après « cristallin » / « العدسة ») : mettre à jour FR + AR.
- [ ] **Point client 2** (durée de consultation) : unifier accueil, FAQ et page Consultation
      en FR + AR, puis remettre la question dans le JSON-LD (`schema: false` à retirer).
- [ ] **Point client 3** (badges CNSS / CNOPS du hero) : même décision en FR + AR.
- [ ] **Point client 4** (droits de `keratocone-hero`) : même image en FR + AR.
- [ ] Questions sans réponse (Consultation, Chirurgie réfractive, Rétine, Glaucome) : traduire
      les réponses quand la doctoresse les aura fournies.
- [ ] **Modale « Réserver RDV » — version simplifiée (23/11/2026)** : nouveaux libellés « الاسم الشخصي », « الاسم العائلي », étapes « معلوماتكم / الملخص », erreurs associées. Les anciens libellés ci-dessous (motif, téléphone, première visite, message) ne sont plus utilisés.
- [ ] **Modale « Réserver RDV »** (`src/partials/rdv.js`, objet `RDV_UI.ar`, marqué `TODO AR`) :
      textes d'interface traduits par nous, **à faire valider** par la doctoresse. Liste :
      titre « طلب موعد », « الخطوة {n} من 4 », étapes « السبب / التاريخ / معلوماتكم / الملخص »,
      « ما سبب الاستشارة؟ », « حالة مستعجلة؟ اتصلوا مباشرة بالعيادة », « أخرى / لا أعرف »
      (validé dans la demande) + « ستوجّهكم العيادة. », « أي يوم يناسبكم؟ », « في أي فترة من اليوم؟ »,
      « صباحاً / بعد الزوال », « يوم السبت، العيادة مفتوحة في الصباح فقط. »,
      « ستؤكد لكم العيادة الساعة المحددة للموعد. », « الاسم الكامل », « رقم الهاتف », « مثال: … أو … »,
      « هل هذه زيارتكم الأولى للعيادة؟ », « نعم / مريض(ة) سابق(ة) », « رسالة (اختياري) »,
      « معلومة مفيدة للعيادة. », « تحققوا من طلبكم », « تعديل », libellés du récap
      (السبب، اليوم، الفترة، الاسم، الهاتف، الزيارة الأولى، الرسالة),
      « ستُفتح الرسالة في واتساب: يكفي أن ترسلوها. », « رجوع / التالي / إرسال عبر واتساب »,
      « رسالتكم جاهزة في واتساب », « أرسلوها، وستتواصل معكم العيادة لتأكيد يوم وساعة الموعد. »,
      « لم يُفتح واتساب؟ أعيدوا المحاولة », « إغلاق », les 7 messages d'erreur et le message
      WhatsApp (« السلام عليكم، أود طلب موعد في عيادة الدكتورة العوني رجاء. » …
      « المرجو تأكيد ساعة الموعد. شكراً. »). Les noms des motifs et des groupes viennent
      des pages services (déjà validés).
- [ ] **Page نصائح صحية** (`ar/conseils/`, marqué `TODO AR`) : traduction des 3 articles (enfants et écrans, diabète, lentilles) — à faire valider ; le texte FR est lui-même « à valider ».
- [ ] **Accueil — vidéo** (`ar/index.html`, marqué `TODO AR`) : « فيديو », « نصائح الدكتورة العوني بالفيديو », phrase d'intro, alt et libellé du bouton lecture.
- [ ] **Accueil — avant / après cataracte** (`ar/index.html`, marqué `TODO AR`) : titre « قبل وبعد جراحة الجلالة », alt du poster, libellé du slider « مقارنة العين قبل العملية وبعدها ». Le texte d'aide « حرّك المؤشر فوق العينين باش يبانو واضحين » est fourni tel quel par le client (darija).
- [ ] **Accueil** (`ar/index.html`, section التجهيزات, marqué `TODO AR`) : bouton « عرض جميع التجهيزات ».
- [ ] **Page Équipements** (`ar/equipements/`, marqué `TODO AR`) : étiquette « تجهيز مميز » (bande Lampe à fente).
- [ ] **Page الدكتورة** (`ar/dr-elaouni/`, marqué `TODO AR`) : textes alternatifs des 2 photos du bloc
      opératoire (« الدكتورة العوني رجاء أمام المجهر الجراحي… », « …بلباس غرفة العمليات… »).
- [ ] **Page Confidentialité** (`ar/confidentialite/`, marqué `TODO AR`) : phrase « لا يسجّل هذا الموقع
      أي معطيات شخصية… » et paragraphe « طلب الموعد » (modale RDV) — traductions à faire valider,
      le texte FR est lui-même « à faire valider ».
- [ ] Facultatif : préciser en AR la question « كم يستغرق الفحص؟ » des pages Échographie et
      Rétinographie pour qu'elle revienne dans le JSON-LD (voir `parite-fr-ar.md`).
