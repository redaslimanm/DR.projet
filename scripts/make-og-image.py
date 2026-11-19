"""
Image de partage (Open Graph) 1200 × 630 → public/og-image.jpg

    python scripts/make-og-image.py

Fond crème, logo couleur à gauche, photo du hero dans une arche avec cercle
doré à droite (même langage visuel que le site). Sans texte : valable FR et AR.
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
CREAM = (245, 237, 226)
GOLD_LIGHT = (217, 179, 138)
SCALE = 2  # rendu ×2 puis réduction (bords lisses)

img = Image.new("RGB", (W * SCALE, H * SCALE), CREAM)
draw = ImageDraw.Draw(img)

# --- photo dans une arche (à droite)
photo = Image.open(ROOT / "assets-source" / "MYXJ_20261008105842700_save.jpg").convert("RGB")
photo = photo.crop((0, 0, photo.width - 9, photo.height))  # bande noire de l'original
aw, ah = 400 * SCALE, 560 * SCALE
ax, ay = 700 * SCALE, H * SCALE - ah
photo = ImageOps.fit(photo, (aw, ah), centering=(0.5, 0.0))
mask = Image.new("L", (aw, ah), 0)
m = ImageDraw.Draw(mask)
m.rectangle((0, aw // 2, aw, ah), fill=255)
m.ellipse((0, 0, aw, aw), fill=255)

# cercle doré derrière l'arche
r = 250 * SCALE
cx, cy = ax + aw // 2, ay + 230 * SCALE
draw.ellipse((cx - r, cy - r, cx + r, cy + r), outline=GOLD_LIGHT, width=3 * SCALE)
img.paste(photo, (ax, ay), mask)

# --- logo (à gauche)
logo = Image.open(ROOT / "assets-source" / "logo-dr-elaouni-couleur.png").convert("RGBA")
lw = 520 * SCALE
logo = logo.resize((lw, round(logo.height * lw / logo.width)), Image.LANCZOS)
lx, ly = 90 * SCALE, (H * SCALE - logo.height) // 2
img.paste(logo, (lx, ly), logo)

out = ROOT / "public" / "og-image.jpg"
img.resize((W, H), Image.LANCZOS).save(out, quality=85, optimize=True, progressive=True)
print(out, round(out.stat().st_size / 1024), "Ko")
