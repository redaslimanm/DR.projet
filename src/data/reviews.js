// =========================================================
// Avis Google du cabinet — lus au build depuis src/data/reviews.json (export de la
// fiche Google, sans API ni clé). Mise à jour : remplacer reviews.json par un nouvel
// export, puis relancer le build (voir CLAUDE.md, « Avis Google »).
//
// Règles :
//   - avis sans texte : non affichés (ils comptent dans la note et le nombre d'avis) ;
//   - auteurs de EXCLUDED_AUTHORS : ni affichés, ni comptés dans la note ;
//   - texte affiché tel quel (pas de correction) ; pas de date (relatives : « il y a 4 mois »
//     deviendrait faux) ; pas de photo Google (initiale à la place) ; pas de réponse du cabinet ;
//   - ordre : les avis les plus détaillés (texte le plus long) en premier.
// Aucun JSON-LD AggregateRating / Review n'est généré à partir de ces données.
// =========================================================
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const FILE = 'src/data/reviews.json';

// Auteurs exclus (comparaison sans casse ni espaces superflus)
export const EXCLUDED_AUTHORS = ['laila elaouni'];

const norm = (s) => String(s ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

export function loadReviews() {
  const raw = JSON.parse(readFileSync(resolve(process.cwd(), FILE), 'utf8'));
  if (!Array.isArray(raw)) throw new Error(`[reviews] ${FILE} : un tableau d'avis est attendu`);
  const excluded = new Set(EXCLUDED_AUTHORS.map(norm));
  const kept = raw.filter((r) => !excluded.has(norm(r.author)) && Number(r.rating) >= 1);

  // Note moyenne et nombre d'avis : tous les avis conservés (avec ou sans texte)
  const count = kept.length;
  const average = count ? kept.reduce((s, r) => s + Number(r.rating), 0) / count : 0;

  const shown = kept
    .filter((r) => typeof r.text === 'string' && r.text.trim())
    .map((r, i) => ({
      author: String(r.author).trim(),
      url: r.author_url || null,
      rating: Math.round(Number(r.rating)),
      text: r.text.trim(),
      i, // ordre d'origine, pour un tri stable
    }))
    .sort((a, b) => b.text.length - a.text.length || a.i - b.i);

  return { average, count, reviews: shown };
}
