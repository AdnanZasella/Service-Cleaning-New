# Handoff: E&I Städ, status 2026-10-10

Läs först: CLAUDE.md, PRODUCT.md, SITEMAP.md (godkänd), DESIGN.md, `.impeccable/surfaces/src-pages-index-astro.md` (direction contract).

## Gjort
- Astro (static) + Netlify Forms. Dev: `npx astro dev --port 4321`. Build: `npx astro build`.
- Riktning: Besiktningsprotokollet, kod-först. Ink `#14202b`, gult `#f2c200` (markör), tint `#e2edf1`. Fonts: Archivo + Source Sans 3 (fontsource).
- Sidor (13): `/`, 5 tjänstesidor (flyttstad/hemstad/storstad/fonsterputsning/kontorsstadning `-trollhattan`), `/fastighetsservice-trollhattan` (noindex, TODO-innehåll), `/kontakt`, `/rut-avdrag`, `/recension` (noindex), `/integritetspolicy` (utkast, behöver juridisk granskning), `/tack`, `/404`. robots.txt, sitemap exkluderar noindex.
- Komponenter: Header (mobilmeny via `<details>`), Footer, MobileBar, Hero (bakgrundsbild + mörkt täcke), Checklist, Steps, OfferForm. Layout: `Base.astro`, `ServiceLayout.astro` (datadriven, se flyttstad-trollhattan.astro).
- NAP och tjänster: `src/config/site.ts` (enda källa).
- Bilder: `src/assets/` (från `Images-to-be-used/`, ägarlevererade). Originalen driftsätts aldrig.
- QA körd: ingen horisontell scroll 360–1440 px, en H1 per sida, tap targets fixade.

## Kvar att göra (i ordning)
1. Uppdatera DESIGN.md: tint-token, mörk hero med bakgrundsbild, navbar/meny, steps i ink, PageLayout/Checklist/Steps.
2. `/impeccable critique` + `polish` på hela sajten; Lighthouse mobil; Rich Results Test. Skärmbilder av alla tjänstesidor på mobil/tablet (bara flyttstäd, fönsterputs och kontakt är visuellt granskade).
3. Fyll TODO med ägaren (se nedan); ta bort noindex på fastighetsservice och recension när innehåll/länk finns.
4. Netlify: formulärnotiser till ägarens e-post; byt domän `https://todo-doman.se` (site.ts, robots.txt).
5. Valfritt: egna foton, riktiga recensioner, long-tail-guider (flyttstädschecklista).

## Öppna TODO för ägaren
Priser/från-priser, RUT-hantering och fakturering, omfattning fastighetsservice, tjänster per ort (Grästorp/Lysekil/Smögen), svarstid, bekräfta checklistorna, GBP-länk och kategorier, öppettider, logo, domän + domänmail, F-skatt/försäkring/garantier, fler foton och riktiga recensioner.

## Att tänka på
- Visibla `[TODO: ...]` är avsiktliga. Hitta alla: `grep -rn "TODO" src`.
- Gult används på telefonnummer, ring-knappar och RUT-bandet. Dra ner om det blir för mycket.
- Skärmbilder: sticky header/bar syns mitt i helsidesbilder (artefakt). Sätt `scroll-behavior:auto` före skärmbild.

## Uppdatering efter critique + polish (2026-10-10)
- Hero = protokollblankett med nummer + riktiga fält (Ort/Tjänst, förifyller formuläret via `?ort=&tjanst=`). RUT-bandet borttaget. Startsidan: hjälte, tjänstetabell, flyttstäd-teaser, orter, steg, formulär.
- Fastighetsservice är dold från listor (`hidden: true` i site.ts), sidan finns som noindex.
- Publika TODO borttagna; kvar synliga bara på fastighetsservice, integritetspolicy, recension.
- og:image genereras från lägenhetsbilden (1200x630). Domänen är fortfarande placeholder.
- Mobilmenyn stängs med Esc. Sticky bar göms när formuläret syns.
- Nästa: Netlify-koppling, riktig domän, fakta från ägaren, egna foton, Lighthouse + Rich Results Test.
