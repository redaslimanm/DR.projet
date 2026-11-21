"""
Optimise les photos du site → AVIF + WebP en plusieurs largeurs.

    python scripts/optimize-images.py

Sources : originaux de assets-source/ quand on les a identifiés,
sinon les versions déjà recadrées de maquette/images/.
Sortie : src/assets/images/<nom>-<largeur>.{avif,webp} + manifest.json
(lu par le plugin partials pour générer les <picture>).
Outil de dev uniquement (Pillow), rien n'est ajouté au site.
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "assets" / "images"
SRC_ORIG = ROOT / "assets-source"
SRC_MAQ = ROOT / "maquette" / "images"
TS = SRC_ORIG / "tsawer-site"  # images fournies avec le cahier des modifications (PDF)

# nom final → fichier source (identifié visuellement ; attention : certains
# noms de fichiers de maquette/images/ sont inversés, ne pas s'y fier)
IMAGES = {
    "dr-hero": SRC_ORIG / "MYXJ_20261008105842700_save.jpg",          # bras croisés
    "dr-oct": SRC_ORIG / "MYXJ_20260618103939998_save.jpg",           # devant l'OCT
    "dr-lampe": SRC_ORIG / "MYXJ_20260806160146887_save.jpg",         # lampe à fente
    "reception": SRC_ORIG / "MYXJ_20260701110527039_save.jpg",        # comptoir RECEPTION
    "attente": SRC_ORIG / "MYXJ_20260624233802233_save.jpg",          # grande salle d'attente
    "attente-vision": SRC_ORIG / "MYXJ_20260624233739382_save - Copie.jpg",  # « Vision is the art… »
    "diplomes": SRC_ORIG / "MYXJ_20260626163019608_save.jpg",         # mur de diplômes + bibliothèque
    "salon": SRC_ORIG / "MYXJ_20260713130127321_save.jpg",            # coin canapé vert + cadres
    "salle-examen": SRC_ORIG / "MYXJ_20260624234015734_save.jpg",     # salle d'examen
    "huvitz": SRC_ORIG / "MYXJ_20260624233857337_save.jpg",           # lampe à fente + autoréfractomètre
    "frontofocometre": SRC_ORIG / "MYXJ_20260626162930464_save.jpg",  # frontofocomètre Huvitz
    "icare": SRC_ORIG / "unnamed (2).webp",                           # rétinographe iCare
    "echo": SRC_ORIG / "unnamed.webp",                                # salle d'échographie
    "plan-acces": SRC_MAQ / "plan-acces.jpg",                         # verso carte de visite (recadré)
    # --- Cahier des modifications (tsawer-site/) ---
    "pediatrie-hero": TS / "02-pediatrie" / "pediatrie-hero.png",     # affiche dépistage enfant (texte FR)
    "strabisme-hero": TS / "03-strabisme" / "strabisme-hero.jpg",     # affiche strabisme enfant (texte FR)
    "autorefractometre": TS / "04-equipements" / "autorefractometre.jpg",
    "phoropteur": TS / "04-equipements" / "phoropteur.jpg",
    "phoropteur-console": TS / "04-equipements" / "phoropteur-console.jpg",
    "ecran-acuite-visuelle": TS / "04-equipements" / "ecran-acuite-visuelle.jpg",
    "frontofocometre-huvitz": TS / "04-equipements" / "frontofocometre.jpg",  # remplace « frontofocometre » (gardé en AR)
    "lampe-a-fente": TS / "04-equipements" / "lampe-a-fente-1.jpg",
    "lampe-a-fente-volk": TS / "04-equipements" / "lampe-a-fente-2-lentilles-volk.jpg",
    "tonometre": TS / "04-equipements" / "tonometre.png",
    "salle-examen-2": TS / "05-cabinet" / "coin-salon-1.jpg",       # fichier nommé « coin-salon-1 » mais montre la salle d'examen
    "coin-salon": TS / "05-cabinet" / "coin-salon-2.jpg",           # coin salon (canapé vert), remplace « salon » (gardé en AR)
    "facade": TS / "05-cabinet" / "facade.jpg",                     # entrée de la Résidence Oumnia + plaque du cabinet
    "cabinet-deco": TS / "05-cabinet" / "cabinet-nouvelle-photo.png",  # canapé + décoration murale en lettres E
    "dr-elaouni-hero": TS / "06-dr-elaouni" / "dr-elaouni-photo-hero.jpg",  # portrait à la lampe à fente (page Dr Elaouni)
    "cataracte-1": TS / "07-cataracte" / "cataracte-1.jpg",           # au microscope opératoire (paysage)
    "cataracte-2": TS / "07-cataracte" / "cataracte-2.jpg",           # au bloc, plateforme Centurion (portrait)
}

# Recadrages (gauche, haut, droite, bas) en px retirés des bords
CROP = {
    "dr-hero": (0, 0, 9, 0),  # bande noire de 9 px sur le bord droit de l'original
}

# Qualité renforcée pour les portraits très visibles (source petite → moins de compression)
QUALITY = {
    "dr-oct": {"avif": 74, "webp": 90, "sharpen": True},
}

WIDTHS = [480, 800, 1200]
AVIF_Q = 52
WEBP_Q = 78


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = {}
    total = 0
    only = set(sys.argv[1:])  # ex. python scripts/optimize-images.py dr-oct
    if only and (OUT / "manifest.json").exists():
        manifest = json.loads((OUT / "manifest.json").read_text(encoding="utf-8"))
    for name, src in IMAGES.items():
        if only and name not in only:
            continue
        q = QUALITY.get(name, {})
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        if name in CROP:
            l, t, r, b = CROP[name]
            im = im.crop((l, t, im.width - r, im.height - b))
        w0, h0 = im.size
        widths = sorted({w for w in WIDTHS if w < w0} | {min(w0, WIDTHS[-1])})
        for w in widths:
            h = round(h0 * w / w0)
            resized = im.resize((w, h), Image.LANCZOS) if w != w0 else im
            if q.get("sharpen"):
                resized = resized.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
            for ext, opts in (
                ("avif", {"quality": q.get("avif", AVIF_Q)}),
                ("webp", {"quality": q.get("webp", WEBP_Q), "method": 6}),
            ):
                path = OUT / f"{name}-{w}.{ext}"
                resized.save(path, **opts)
                total += path.stat().st_size
        manifest[name] = {"width": w0, "height": h0, "widths": widths}
        print(f"{name:16} {w0}x{h0}  -> {widths}")

    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8", newline="\n")
    print(f"\nTotal : {total / 1024:.0f} Ko ({len(IMAGES)} images)")


if __name__ == "__main__":
    main()
