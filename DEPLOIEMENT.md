# Mise en ligne — site Dr Elaouni Rajae

Site 100 % statique : `npm run build` produit le dossier `dist/` (HTML, CSS, JS, images, `sitemap.xml`, `robots.txt`, `404.html`).

**Hébergeur choisi : Vercel** (offre gratuite, HTTPS automatique). Toute la configuration est dans `vercel.json` : redirection `/` → `/fr/`, URLs avec `/` final, en-têtes de sécurité, cache 1 an des fichiers `/assets/` (noms avec empreinte). La page `404.html` est utilisée automatiquement.

La mise en ligne se fera **quand le domaine sera choisi**.

## 1. Mettre le code sur GitHub (une fois)

1. Créer un dépôt **privé** sur github.com (ex. `site-dr-elaouni`).
2. Dans le dossier du projet :
   ```
   git remote add origin https://github.com/<compte>/site-dr-elaouni.git
   git push -u origin master
   ```
   Les originaux lourds (`assets-source/`) et `.env` ne sont pas envoyés (`.gitignore`).

## 2. Créer le projet sur Vercel

vercel.com → *Add New… → Project* → importer le dépôt GitHub. Framework : *Other* (ou *Vite*).

Réglages à saisir (identiques partout) :

- **Commande de build** : `npm run build`
- **Dossier publié** : `dist`
- **Version de Node** : 22
- **Variable d'environnement** `SITE_URL` : l'adresse définitive, ex. `https://www.dr-elaouni.ma` (sans `/` final). Tant qu'elle n'est pas définie, le site utilise une adresse provisoire dans les balises SEO.
- **Variable d'environnement** `SHOW_DRAFT_BADGES` (facultative) : `true` affiche les badges de travail `[À VALIDER]` / `[À COMPLÉTER]` et les blocs `data-draft` (FR et AR) ; `false` les retire. Sans variable : affichés avec `npm run dev`, **retirés au build** (production). Les textes restent dans le code et dans `textes-a-valider.md`.

Chaque `git push` sur `master` redéploie le site automatiquement (environ 1 minute). Les autres branches donnent des adresses de prévisualisation (pratique pour faire valider un changement par la doctora).

## 3. Domaine

1. Acheter le domaine (`.ma` auprès d'un registraire agréé par l'ANRT, ou `.com`).
2. Vercel → projet → *Settings → Domains* → ajouter `www.domaine` et `domaine` → créer chez le registraire les enregistrements DNS indiqués par Vercel.
3. Choisir la redirection `domaine` → `www.domaine` (proposée par Vercel).
4. *Settings → Environment Variables* : `SITE_URL` = `https://www.domaine`, puis *Redeploy*.
5. HTTPS est activé automatiquement (quelques minutes à quelques heures).

## 4. Après la mise en ligne

- [ ] Vérifier les pages principales FR et AR, les boutons Appeler / WhatsApp, la carte, la galerie.
- [ ] PageSpeed Insights (https://pagespeed.web.dev) : `/fr/`, `/ar/`, une page service, Contact.
- [ ] Google Search Console : ajouter le domaine, envoyer `https://<domaine>/sitemap.xml`.
- [ ] Fiche Google (Google Business Profile) : renseigner l'adresse du site.
- [ ] Tester l'aperçu de partage (WhatsApp, Facebook) : logo + photo.
- [ ] Mettre à jour les mentions légales (hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — à vérifier sur vercel.com/legal) et la politique de confidentialité.

## Maintenance

- Modifier un texte de service : `src/data/services-content.js` (FR) et `services-content.ar.js` (AR), puis `npm run textes` pour régénérer `textes-a-valider.md`.
- Nouvelles photos : les placer dans `assets-source/`, les déclarer dans `scripts/optimize-images.py`, lancer `python scripts/optimize-images.py`.
- Avant chaque mise en ligne : `npm run build` puis `npm run check:seo`.
