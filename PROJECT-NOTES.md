# Danubius AI Solutions — Landing · Projekt-jegyzet

> Cél: holnap (vagy bármikor) ebből a fájlból folytatható legyen a munka.
> Minden input, döntés, jelenlegi állapot és a nyitott teendők itt vannak.

---

## 1. Mi ez a projekt

Statikus landing oldal a **Danubius AI Solutions** számára, a CEO **„Build vs Buy?
— Hol kezdődik a versenyelőny 2026-ban?"** prezentációjához kapcsolódóan.
A CEO erről fog előadni (BusinessFest, Budapest).

- **Nincs szerver, nincs build lépés** — tiszta natív HTML/CSS/JS, GitHub Pages-en fut.
- **Repo:** https://github.com/b3cking/ai.danubius.io
- **Tervezett domain:** `ai.danubius.io` (még be kell állítani, lásd 7. pont)

---

## 2. Fájlstruktúra

| Fájl | Tartalom |
|---|---|
| `index.html` | teljes oldal szerkezete + szövegek |
| `styles.css` | dizájn, márka-színrendszer, reszponzív |
| `main.js` | sticky header, mobil menü, scroll-reveal, count-up számok |
| `README.md` | rövid indítási + deploy útmutató |
| `PROJECT-NOTES.md` | **ez a fájl** — teljes átadó |

Helyi megtekintés: dupla katt `index.html`-en (szerver nem kell).

---

## 3. Dizájn-rendszer (a prezi vizuális világából)

- **Színek (CSS változók a `styles.css` tetején):** mély navy (`#0f2942`, `#0a1f33`),
  kék (`#1e6ba8`, `#2b7bb9`, `#4a95ce`), világoskék (`#a8cce8`), fehér/„paper" (`#f5f9fc`).
  Visszafogott kiemelés: **teal** (`#178c84`), **narancs** (`#e8590c`), **arany** (`#d9a043`).
- **Irány:** megnyugtató kék–fehér (a felhasználó kérése).
- **Betűk (Google Fonts CDN):** *Fraunces* (display serif, nagy címek) + *Inter* (sans, szöveg).
  Offline rendszer-betűkre esik vissza, az oldal úgy is működik.
- **Logó:** inline SVG vitorlás (navy + világoskék vitorla), nincs külön képfájl.

---

## 4. Oldal-szerkezet (jelenlegi állapot)

1. **Hero** — „Ami tegnap még elérhetetlen volt, ma már csak üzleti döntés kérdése." +
   badge „Építeni vagy venni? · 2026" + statok (3–5×, −84%, Hetek→pilot) + mini-mátrix kártya
2. **Trust strip** — IT-cég háttér / saját IT nélkül is / Aimee építőkövek
3. **A váltás** (`#valtas`) — régi szabály vs. frissített szabály (2026)
4. **A szoftverek csapdája** — 4 fájdalompont (dobozos, drága fejlesztés, drága tanácsadó, ért(het)etlen fejlesztők)
5. **AI a fejlesztésben** (`#ai-fejlesztes`) — 3–5× / −84% / „De… szakértelem kell"
6. **Döntési mátrix** — címkézett 2×2 „Építeni vagy venni?" (lásd 6. pont, ezt írtuk át)
7. **Amit kínálunk** (`#ajanlat`) — 2 pillér:
   - **Danubius** (bal, sötét kártya): egyedi, AI-támogatott fejlesztés
   - **Aimee** (jobb, fehér kártya): gyorsan bevethető AI megoldások (Cégre szabott / Sokoldalú / Megbízható / Naprakész)
8. **Esettanulmány** (`#eset`) — belső ERP, 900 → 140 embernap (−84%, ~6,4×), oszlopdiagram
9. **Ahogy mi dolgozunk** — „A kockázat" vs. „Ahogy mi dolgozunk"
10. **Az AI alkalmazása** — 8 képesség-kártya (dokumentumok, tudásbázis, hang/kép, űrlapok, adatelemzés, workflow, web/mobil, legacy)
11. **CTA** (`#kapcsolat`) — „Ti hol tartotok az AI-jal? Gyertek, beszélgessünk!" + BusinessFest stand
12. **Footer**

---

## 5. Eddigi visszajelzések és döntések

**1. kör — alap landing elkészült** a brief + a 15 oldalas prezi alapján.

**2. kör — a mátrix átírása (a felhasználó kritikája):**
- A skálák nem voltak egyértelműek, főleg az Y tengely (csak egy kérdés lógott, érték nélkül).
- „Most már BUILD" / „Új zóna 2026" magyar–angol keverék zavaró volt.
- Kérés: **ne angolról fordítva, hanem eredetileg magyarul** írjunk.

**Amit megcsináltunk:**
- Igazi, **fejlécezett 2×2 táblázat** lett, mindkét tengelyen kiírt skálával:
  - vízszintes: „Megkülönbözteti a cégedet a piacon?" → **NEM** / **IGEN**
  - függőleges: **NINCS** / **VAN** „jó, megfizethető kész megoldás"
- A kiemelt mező: badge „★ 2026 — itt fordult meg a szabály", cím „Most már építsd meg",
  és egy konkrét **„Régen: drága licenc → Ma: saját fejlesztés"** váltás.
- Angol címkék helyett magyar igék (Építsd / Vedd meg készen).
- Anglicizmusok cseréje: `AI-assisted` → **AI-támogatott**; `PoC` → „rövid pilot szakasz".
- „Build vs Buy" csak ott maradt, ahol a prezi címe is használja; a felületen „Építeni vagy venni?".

**Megjegyzés:** a „vibe-kódolási sebességgel" a felhasználó eredeti megfogalmazása,
ezért szándékosan bent maradt (cserélhető, ha kell).

---

## 6. NYITOTT TEENDŐK (innen folytatható holnap)

- [ ] **GitHub Pages bekapcsolása**: Settings → Pages → Source: Deploy from a branch → `main` / root.
- [ ] **Custom domain** `ai.danubius.io`: Pages „Custom domain" mező + DNS CNAME → `b3cking.github.io`.
      (Felajánlva: be tudom állítani `gh` CLI-vel, ha van auth a gépen.)
- [ ] **Valódi e-mail cím** beírása `hello@danubius.io` helyett (CTA gomb + footer).
- [ ] **Esettanulmány számai** (900 → 140 embernap, −84%) — ellenőrizni / pontosítani, ha publikus.
- [ ] **OG-kép** közösségi megosztáshoz (1200×630), jelenleg nincs `og:image`.
- [ ] Eldönteni: marad-e a „vibe-kódolási sebességgel" megfogalmazás.
- [ ] Opcionális: valódi kapcsolatfelvételi űrlap szerver nélkül (pl. Formspree).
- [ ] Opcionális: az egész szöveg további magyarosító/élesítő átnézése (a felhasználó jelezte, hogy a 2. körben csak a mátrixot kértük élesíteni).

---

## 7. Git / deploy

```bash
# A repo már inicializálva, remote beállítva, main felpusholva.
git remote -v        # origin https://github.com/b3cking/ai.danubius.io.git
git add -A && git commit -m "..." && git push   # további változások

# Helyi futtatás (nem kötelező, fájlból is megy):
python3 -m http.server 8000   # http://localhost:8000
```

Commit-konvenció: a commit üzenet végén szerepeljen a `Co-Authored-By: Claude ...` sor.

---

## 8. EREDETI INPUTOK (verbatim, referenciának)

### 8.1 Fő üzenet / koncepció (felhasználói brief)

> „Ami tegnap még elérhetetlen volt, ma már csak üzleti döntés kérdése.
>
> Működő AI-megoldások és AI-assisted egyedi fejlesztés"

**Danubius AI Solutions → mit tudnánk nekik csinálni (IT-cég háttér):**
- Egyedi, személyre szabott fejlesztés
- Gyors pilot az üzleti validációhoz
- Üzleti oldallal koordinált együttműködés, akár saját IT nélkül is
- Mérnöki biztonság és minőség, vibe-kódolási sebességgel
- Csapatotok AI-edukálása a használatba vételhez

**Aimee → keretrendszeri komponensek (építőkövek konkrétan) — gyorsan bevethető AI megoldások:**
- Cégre szabott, gyorsan beépíthető „AI kollégák"
- Széleskörű portfólió a sales-től a HR-ig
- Kontrollált, megbízható működés üzleti környezetben
- Újdonságok folyamatos tesztelése, beépítése

**Hosszabb verzió (Aimee tulajdonságok):**
- Cégre szabott – saját tudásra és folyamatokra hangolva
- Sokoldalú – széleskörű portfólió a szervezet különböző területeire
- Megbízható – kontrollált működés üzleti környezetben
- Naprakész – folyamatosan fejlődő és bővülő AI képességek

**Záró CTA:** „Ti hol tartotok az AI-jal? Gyertek, beszélgessünk!"

### 8.2 BPeti & Enikő — 2 hasábos elrendezés

- **Bal:** „A Te rendszereidet és csapatodat fejlesztjük"
- **Jobb:** „Gyorsan bevethető AI megoldások" + a 4 Aimee-pont (Cégre szabott / Sokoldalú / Megbízható / Naprakész)
- Idézet: „Ami tegnap még elérhetetlen volt, ma már csak üzleti döntés kérdése."

### 8.3 BPeti — általános koncepcióirány

- Egyre többször éri meg saját megoldást / szoftvert fejleszteni → tud az üzlet diktálni
- AI-assisted módon a fejlesztés sokkal gyorsabb és költséghatékonyabb
- Már egy PoC / pilot időszakra is látványos saját megoldások készülhetnek el — emiatt akár KKV-k is relevánsak
- Az Aimee ebbe beleilleszthető, mint a koncepció konkrét kivetülései

### 8.4 A prezentáció tartalma (`~/Downloads/AI-prezi-draft.pptx.pdf`, 15 dia)

1. **Címlap:** „Build vs Buy? — Hol kezdődik a versenyelőny 2026-ban?" (vitorlás kép, Danubius AI Solutions logó)
2. Telefon-vizuál: „Fontos ügyfél — Incoming call: 20 millió HUF" (az elszalasztott lehetőség)
3. **A szoftverek csapdája:** Rugalmatlan dobozos megoldás · Méregdrága fejlesztés, ami sosem készül el · Méregdrága tanácsadó · Ért(het)etlen fejlesztők
4. **A régi szabály:** „Akkor költs egyedi fejlesztésre, ha a piaci tevékenységedre megkülönböztető hatással lehet."
5. **AI a fejlesztésben:** Töredék idő (akár 3–5× gyorsabban) · Töredék költség (tízmilliós tételekből töredék) · De… tudás, tapasztalat, szakértelem továbbra is kell!
6. **Build vs Buy mátrix:** Y = „Létezik rá jó, megfizethető piaci megoldás?" (NEM/IGEN), X = „Differenciál a piacon (versenyelőnyt ad)?" (NEM/IGEN).
   - ★ ÚJ ZÓNA 2026 → „Most már BUILD" (drága licenc/rossz illeszkedés, ma megéri lecserélni)
   - „Magabiztosan" BUILD (megkülönböztet, nincs rá jó kész megoldás)
   - „Vedd készen" BUY (szabadság-nyilvántartó esete)
   - „A megkülönböztetőt építsd" BUILD (nincs kompromisszum)
7. **Esettanulmány — egy ERP rendszer:** projektkontrolling, munkaidő-kimutatás, számlázás, be/kimenő számlák költséghelyekkel, projekt-allokáció tervezés, teljesítési igazolások, belső HR-nyilvántartás, cégautók. Diagram: 900 vs 140.
8. Esettanulmány — „PBA Insura / ReAssurance" (placeholder dia)
9. **A legrosszabb döntés — „majd mi megcsináljuk" csapda:**
   - *A kockázat:* belső csapat módszer és AI-kompetencia nélkül vág bele; ég a pénz és az idő, a végén nincs meg, amire az üzletnek szüksége volt.
   - *Ahogy mi dolgozunk:* nem csak szállítunk — az ügyfél csapatát is enabláljuk; együtt gondolkodunk az üzleti területtel; AI-t ott és csak ott, ahol értelme és haszna van.
10. **Amit ma tanácsolnék:** „A versenyelőnyt adót: változatlanul építsd." ÚJ: a kényelmetlen, drága belső rendszereidet is lecserélheted — mert a build már megfizethető. („2026-ban talán mást tanácsolnék annak az IT igazgatónak.")
11. **Danubius AI Solutions** záró: „Egyedi szoftver — ma már elérhető árú. Beszéljük át a te Build vs. Buy döntésedet." / „Gyere a standunkhoz · BusinessFest, Budapest"
12. Valós projekt — belső ERP a gyakorlatban (lefedett területek rácsa)
13. **A szám, ami megüt:** 900 → **140** embernap · ~6,4× kevesebb · −84% · +30–50 nap bevezetéstámogatás
14. **Az AI alkalmazása:** Hagyományos szoftverfejlesztés (gyorsabb, költséghatékonyabb; webes/mobil appok, workflow-szoftverek, segédprogramok, legacy modernizáció) · AI beépítése (dokumentumok feldolgozása/ellenőrzése/kiértékelése/generálása, tudásbázis, hang- és képfeldolgozás, űrlapok kitöltése, adatelemzés)
15. „Köszönöm a figyelmet!" (vitorlás záró)

### 8.5 Felhasználói preferenciák / kérések

- Nagyon modern landing oldal.
- Megnyugtató kék-fehér szín (de nem kötelező, szabad kéz).
- **Szerver nélkül**, GitHub Pages-en natív HTML/JS-ként fusson.
- Eredetileg magyarul írt szöveg, ne angolból fordított.
