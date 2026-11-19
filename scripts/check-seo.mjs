// Contrôle SEO des pages buildées (à lancer après `npm run build`) :
//   node scripts/check-seo.mjs
// Vérifie : title (≤ 65 car.), meta description (70–160), canonical, hreflang
// réciproques, 1 seul H1, alt sur chaque image, JSON-LD valide, doublons.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html' && /[\\/](fr|ar)[\\/]/.test(p)) files.push(p);
  }
})(DIST);

const get = (html, re) => (html.match(re) || [])[1];
const issues = [];
const seen = { title: new Map(), desc: new Map() };
const canonicals = new Map();
const pages = [];

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const page = '/' + relative(DIST, f).replace(/\\/g, '/').replace(/index\.html$/, '');
  const title = get(html, /<title>([^<]*)<\/title>/);
  const desc = get(html, /<meta name="description" content="([^"]*)"/);
  const canonical = get(html, /<link rel="canonical" href="([^"]*)"/);
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const imgsNoAlt = [...html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)].length;
  const lang = get(html, /<html lang="([^"]+)"/);
  const say = (m) => issues.push(`${page} : ${m}`);

  if (!title) say('title manquant');
  else if (title.length > 65) say(`title trop long (${title.length} car.)`);
  if (!desc) say('meta description manquante');
  else if (desc.length < 70 || desc.length > 160) say(`description ${desc.length} car. (idéal 70–160)`);
  if (!canonical) say('canonical manquant');
  else if (!canonical.endsWith(page)) say(`canonical ≠ page (${canonical})`);
  if (!alts.some(([l]) => l === 'x-default')) say('hreflang x-default manquant');
  if (h1 !== 1) say(`${h1} H1`);
  if (imgsNoAlt) say(`${imgsNoAlt} image(s) sans alt`);
  if (!lang || !page.startsWith(`/${lang}/`)) say(`lang="${lang}" incohérent`);
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { say(`JSON-LD invalide : ${e.message}`); }
  }
  for (const [k, v] of [['title', title], ['desc', desc]]) {
    if (!v) continue;
    if (seen[k].has(v)) say(`${k} identique à ${seen[k].get(v)}`);
    else seen[k].set(v, page);
  }
  canonicals.set(canonical, page);
  pages.push({ page, title, desc, alts });
}

// hreflang réciproques : si A pointe vers B, B doit pointer vers A
for (const { page, alts } of pages) {
  for (const [l, href] of alts) {
    if (l === 'x-default') continue;
    const target = canonicals.get(href);
    if (!target) { issues.push(`${page} : hreflang ${l} → page inexistante (${href})`); continue; }
    const back = pages.find((p) => p.page === target);
    if (!back.alts.some(([, h]) => canonicals.get(h) === page)) issues.push(`${page} : hreflang ${l} non réciproque`);
  }
}

const t = pages.map((p) => p.title.length), d = pages.map((p) => p.desc.length);
console.log(`${pages.length} pages contrôlées`);
console.log(`title : ${Math.min(...t)}–${Math.max(...t)} car. · description : ${Math.min(...d)}–${Math.max(...d)} car.`);
console.log(issues.length ? `\n${issues.length} point(s) :\n- ${issues.join('\n- ')}` : '\nAucun problème détecté.');
