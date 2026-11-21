# Checklist — tests sur téléphone réel (étape 9)

À faire sur **un iPhone (Safari)** et **un Android (Chrome)**, idéalement aussi une tablette.
Lancer `npm run build` puis `npx vite preview --host` : le terminal affiche une adresse
`http://192.168.x.x:4173` à ouvrir sur le téléphone (même Wi-Fi que l'ordinateur).

## 1. Accueil (FR puis AR)
- [ ] La photo de la doctora s'affiche tout de suite (pas d'écran vide au chargement)
- [ ] L'œil du logo se trace dans le header à la 1re visite, pas à la 2e (même onglet)
- [ ] Le titre apparaît ligne par ligne, sans saut de mise en page
- [ ] L'iris doré : image fixe au départ, puis animation après avoir touché / fait défiler l'écran
- [ ] Le compteur « 12 » compte de 0 à 12
- [ ] Carrousels Équipements et Avis : glisser au doigt, les points suivent la carte visible
- [ ] La citation s'éclaire mot à mot en faisant défiler
- [ ] Rien ne dépasse sur les côtés (pas de défilement horizontal de la page)
- [ ] En arabe : tout est bien à droite, flèches et carrousels dans le bon sens

## 2. Boutons d'action (le plus important)
- [ ] « Appeler » (barre du bas, hero, pages) ouvre le téléphone sur **05 32 39 18 18**
- [ ] « WhatsApp » ouvre une conversation avec **07 62 97 08 15** (message, pas d'appel)
- [ ] Le bouton flottant (FAB) ne cache pas le bas du footer, ne passe pas sous la barre d'accueil de l'iPhone, et son menu s'ouvre / se ferme (fond, action, Échap)
- [ ] L'email ouvre l'application mail

## 3. Menu et navigation
- [ ] Le burger ouvre / ferme le menu ; la page derrière ne défile pas quand il est ouvert
- [ ] Le sous-menu Services s'ouvre ; chaque service mène à sa page
- [ ] Le bouton « ع » / « FR » mène à la même page dans l'autre langue
- [ ] Les liens du footer (Instagram, Facebook, mentions légales) fonctionnent

## 4. Pages
- [ ] Contact : « Afficher la carte » charge la carte Google ; « Itinéraire » ouvre Google Maps
- [ ] Le cabinet : toucher une photo l'ouvre en grand (glisser pour passer à la suivante, fermer)
- [ ] FAQ : les questions s'ouvrent et se ferment
- [ ] Une page service (ex. cataracte) : « Prendre rendez-vous » ouvre la modale avec le service déjà coché
- [ ] Modale RDV : voir la section 6 ci-dessous

## 5. Réglages du téléphone
- [ ] Avec « Réduire les animations » activé (iOS : Accessibilité › Mouvement ; Android : Accessibilité › Supprimer les animations) : tout le contenu est visible, sans animation
- [ ] Texte agrandi (taille de police système au maximum) : rien ne se chevauche
- [ ] Mode paysage : la mise en page reste correcte

## 6. Après la mise en ligne (étape 10)
- [ ] PageSpeed Insights (https://pagespeed.web.dev) sur `/fr/`, `/ar/`, une page service, Contact — objectifs : Performance ≥ 90, Accessibilité ≥ 95, SEO = 100
- [ ] Partager le lien sur WhatsApp : l'aperçu montre le logo et la photo
- [ ] Google Search Console : envoyer `sitemap.xml`

Noter ici tout problème (téléphone, navigateur, page, capture d'écran) :

-

## 6. Modale « Réserver RDV » (iPhone Safari + Android Chrome, FR puis AR)
Ouvrir depuis le FAB (« Réserver RDV »), depuis une page service (motif déjà coché) et avec
l'adresse `…/fr/#rdv`.
- [ ] **WhatsApp installé** : « Envoyer sur WhatsApp » ouvre l'application directement sur la
      conversation avec **07 62 97 08 15**, sans pop-up bloqué
- [ ] **WhatsApp non installé** (ou désinstallé pour le test) : la page wa.me s'ouvre et propose
      de télécharger WhatsApp ou d'utiliser WhatsApp Web ; le site reste ouvert dans l'onglet d'origine
- [ ] **Message complet** dans WhatsApp : salutation, motif, jour + matin/après-midi, nom,
      téléphone, première visite, message (s'il a été saisi), phrase finale ; accents et arabe corrects
- [ ] **Swipe** : glisser la poignée ou l'en-tête vers le bas ferme la modale au-delà d'environ un
      quart de la hauteur ou avec un geste rapide ; un petit glissement la fait revenir en place ;
      faire défiler la liste des motifs ne ferme jamais la modale
- [ ] Avec « Réduire les animations » : la modale s'ouvre / se ferme sans glissement, le swipe marche
- [ ] **Clavier** : à l'étape 3, le clavier ne cache ni le champ en cours de saisie ni son message
      d'erreur ; le téléphone affiche le **pavé numérique** ; pas de zoom automatique sur iPhone
- [ ] Erreurs : laisser un champ vide ou saisir « 08 12 34 » → message rouge sous le champ
- [ ] **Retour sur le site après WhatsApp** (bouton retour d'Android, « ‹ Safari » en haut à gauche
      sur iPhone, ou changement d'appli) : l'écran « Votre message est prêt » est toujours affiché ;
      « Réessayer » rouvre WhatsApp ; « Fermer » rend la page normale (elle défile à nouveau)
- [ ] En arabe : modale en miroir (fermeture à gauche, flèches inversées), numéro de téléphone
      saisi de gauche à droite
