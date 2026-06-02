# Danubius AI Solutions — Landing

Statikus landing oldal a **Build vs Buy 2026** koncepcióhoz. Nincs build lépés, nincs szerver — tiszta HTML/CSS/JS, GitHub Pages-en azonnal fut.

## Fájlok
- `index.html` — a teljes oldal szerkezete és tartalma
- `styles.css` — dizájn (márkaszínek, reszponzív elrendezés)
- `main.js` — sticky header, mobil menü, scroll-reveal, count-up számok

## Helyi megtekintés
Csak nyisd meg az `index.html`-t böngészőben (dupla katt). Élő újratöltéshez bármilyen statikus szerver is jó, de **nem kötelező**:
```bash
python3 -m http.server 8000   # majd: http://localhost:8000
```

## Közzététel GitHub Pages-en
1. Töltsd fel a fájlokat egy repo gyökerébe (pl. `ai.danubius.io`).
2. **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.
3. Saját domainhez (`ai.danubius.io`): adj hozzá egy `CNAME` fájlt a domainnel, és állítsd be a DNS-t.

## Mit kell még testreszabni
- **E-mail cím**: jelenleg `hello@danubius.io` (CTA gomb + footer). Cseréld a valódira.
- **Domain/URL**: `danubius.io` a footerben.
- **Esettanulmány számai**: a 900 → 140 embernap (−84%) a prezi referenciaprojektje; ha kell, pontosítsd.
- **OG-kép**: jelenleg nincs kép megadva (`og:image`); közösségi megosztáshoz érdemes egy 1200×630 képet hozzáadni.

## Dizájn
- Megnyugtató mély kék–fehér paletta, visszafogott teal/narancs/arany kiemelés (a prezi vizuális világához igazítva).
- Betűk: *Fraunces* (display serif) + *Inter* (sans) — Google Fonts CDN-ről. Offline ezek a rendszer-betűkre esnek vissza, az oldal így is működik.
- A vitorlás logó inline SVG, nincs külön képfájl.
