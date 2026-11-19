// Régénère la partie « pages » de textes-a-valider.md à partir des données du site.
//   node scripts/export-textes.mjs
// Tout ce qui suit le marqueur <!-- AUTO --> est réécrit ; les sections
// au-dessus (accueil, OCT) restent écrites à la main.
import { readFileSync, writeFileSync } from 'node:fs';
import { servicesContent } from '../src/data/services-content.js';

const FILE = new URL('../textes-a-valider.md', import.meta.url);
const MARKER = '<!-- AUTO : section générée par scripts/export-textes.mjs, ne pas modifier à la main -->';

const check = '- [ ] Validé tel quel\n- [ ] À corriger — Correction :\n';
const quote = (t) => `> ${t}\n\n${check}`;

const out = [];
out.push('## 3. Pages services (13 pages)\n');
out.push(
  'Une page par service, toutes sur le même plan. Les textes sont des **propositions** : vous pouvez tout corriger, remplacer ou supprimer. Les questions fréquentes sont à valider, et leurs réponses à rédiger.\n',
);

servicesContent.forEach((s, i) => {
  out.push(`### 3.${i + 1} ${s.name}\n`);
  out.push(`Adresse prévue : \`/fr/services/${s.slug}/\`\n`);
  out.push('**Résumé (carte de la page Services)**\n');
  out.push(quote(s.card));
  out.push('**Introduction (haut de page)**\n');
  out.push(quote(s.intro));
  out.push(`**« ${s.whatTitle} »**\n`);
  out.push(quote(s.what));
  out.push(`**« ${s.signsTitle} » (4 cartes)**\n`);
  out.push(s.signs.map(([, t], k) => `${k + 1}. ${t}`).join('\n') + '\n\n' + check);
  out.push(`**« ${s.stepsTitle} » (4 étapes)**\n`);
  out.push(s.steps.map(([t, d], k) => `${k + 1}. **${t}** — ${d}`).join('\n') + '\n\n' + check);
  out.push('**Questions fréquentes (réponses à rédiger)**\n');
  out.push(s.faq.map((q) => `**${q}**\n\nRéponse :\n`).join('\n'));
  out.push('---\n');
});

out.push('## 4. Page « Équipements & examens »\n');
out.push('Les textes de la lampe à fente, du rétinographe et de l’OCT sont ceux des sections 1.3 et 2.\n');
out.push('**Frontofocomètre**\n');
out.push(quote('Mesure précise de la correction de vos lunettes actuelles, pour la comparer à votre vision.'));
out.push('**Échographie oculaire**\n');
out.push(quote('Examen par ultrasons pour observer l’intérieur de l’œil lorsque le fond d’œil n’est pas visible.'));
out.push('---\n');
out.push('## 5. À rédiger par la doctora (pas de proposition)\n');
out.push('- **Laser** : quels types de laser sont disponibles au cabinet, pour quelles indications, et comment se déroule une séance.');
out.push('- **Page FAQ** : questions médicales fréquentes (3 à 6) et leurs réponses.');
out.push('- **Conseils santé** : premiers articles (sujets proposés : enfants et écrans ; diabète et fond d’œil ; lentilles de contact, les bons gestes).\n');

out.push('---\n');
out.push('## 6. Version arabe\n');
out.push(
  'Tout le site existe aussi en arabe (`/ar/`). Les textes arabes sont une **traduction** des textes français ci-dessus (fichier `src/data/services-content.ar.js` pour les services, pages dans `ar/`). Une fois les textes français validés, la version arabe devra être **relue par la doctora ou par une personne arabophone** (vocabulaire médical en particulier), puis mise à jour.\n',
);
out.push('- [ ] Traduction arabe relue — Corrections :\n');

const src = readFileSync(FILE, 'utf8');
const cut = src.indexOf(MARKER);
const head = cut >= 0 ? src.slice(0, cut) : src.slice(0, src.indexOf('## 3. Page « Consultation et dépistage »'));
writeFileSync(FILE, `${head}${MARKER}\n\n${out.join('\n')}`, 'utf8');
console.log(`textes-a-valider.md : ${servicesContent.length} pages services exportées`);
