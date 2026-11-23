# Khota A : reel du chalazion hébergé sur le site

Contexte : Instagram bloque l'intégration du reel https://www.instagram.com/reel/DfAYsQQRq_N/ (post « Age-restricted »). On héberge donc la vidéo sur le site, dans un lecteur de style Instagram, avec un bouton vers Instagram.

**Pages concernées : la page chalazion FR (`/fr/services/chalazion/`) ET la page chalazion AR (`/ar/services/chalazion/`, ajoutée le 23/11/2026).** Même vidéo, même lecteur ; seuls les textes changent (voir 2 bis).

## Déclenchement
Je dépose la vidéo à la racine du projet, puis je dis « appliquer khota A ».

## 0. Préparation
- Cherche le fichier vidéo à la racine (.mp4, .mov ou .webm). S'il y en a zéro ou plusieurs, arrête-toi et demande-moi.
- Déplace-le dans assets-source/videos/reel-chalazion.<ext>. Il ne doit pas rester à la racine.

## 1. Vidéo
- Compresse-la pour le web avec ffmpeg : MP4 H.264, 720 px de large maximum, sans perte visible, objectif 2 à 5 Mo, avec +faststart. Si possible, ajoute aussi une version WebM. Le son reste, mais la vidéo démarre en muet.
- Génère une image poster à partir d'une image NON opératoire de la vidéo, en AVIF + WebP. Montre-moi l'image choisie.
- Range les fichiers finaux selon les conventions du projet pour les assets.

## 2. Lecteur sur la page chalazion
Même emplacement qu'actuellement : sous l'illustration de la cure chirurgicale, dans « Comment se déroule la prise en charge ? ».
- Cadre vertical 9:16 de style Instagram (largeur ~320 px, centré sur mobile, coins arrondis) : en haut, le logo Instagram et le nom du compte de la doctoresse ; au centre, le poster avec un bouton ▶.
- Aucun faux compteur (pas de likes, vues ni commentaires inventés).
- Pas de lecture automatique : preload="none". Avant la lecture, un avertissement par-dessus le poster : « Cette vidéo contient des images opératoires. Cliquer pour regarder. » La vidéo se lit sur place, avec les contrôles (playsinline pour mobile).
- Sous le cadre, un bouton « Voir sur Instagram » qui ouvre https://www.instagram.com/reel/DfAYsQQRq_N/ dans un nouvel onglet (target="_blank" rel="noopener").
- Accessibilité : aria-label explicite et contrôles au clavier.

## 2 bis. Page chalazion AR (`/ar/services/chalazion/`)
Même lecteur, même vidéo, même poster et même emplacement qu'en FR, avec les textes en arabe (objet `UI.ar` de `src/partials/service.js`), marqués `TODO AR` et ajoutés à `ar-a-faire.md` et à `traduction-ar-8-pages.md` pour validation par la doctoresse :
- Avertissement : « يحتوي هذا الفيديو على صور من عملية جراحية. انقروا للمشاهدة. »
- Bouton : « شاهدوا على إنستغرام » (même lien, `target="_blank" rel="noopener"`).
- aria-label du lecteur : « فيديو الدكتورة العوني رجاء حول البَرَدة (Chalazion) ».
- Nom du compte en haut du cadre : identique au FR (nom du compte Instagram, en lettres latines).
- RTL : le cadre reste centré ; le logo et le nom du compte s'alignent à droite ; le bouton ▶ ne s'inverse pas (convention lecture vidéo) ; les contrôles natifs de la vidéo restent ceux du navigateur.

## 3. Nettoyage
- Supprime le code de l'iframe Instagram au clic s'il ne sert plus à rien d'autre. Ne touche pas à la vidéo YouTube de l'accueil.
- Garde le lien Instagram dans services-content.js et ajoute le chemin de la vidéo.

## 4. Vérification
- Vérifie en mobile (390 px) et desktop (1280 px), **en FR et en AR**, que le poster s'affiche, que l'avertissement apparaît et que la vidéo se lit.
- Vérifie que les autres pages AR ne changent pas (comparaison avec le build d'avant).
- Lance le build et npm run check:seo.
- Donne-moi le poids final de la vidéo et la liste des fichiers créés ou modifiés.
- AUCUN commit, aucun push, aucune branche.
