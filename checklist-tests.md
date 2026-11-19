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
- [ ] La barre fixe du bas ne cache pas le contenu, et ne passe pas sous la barre d'accueil de l'iPhone
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
- [ ] Une page service (ex. cataracte) : bouton « Prendre rendez-vous » descend vers les boutons d'appel

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
