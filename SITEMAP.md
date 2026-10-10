# Sitemap och sökordskarta (godkänd av ägaren 2026-10-10)

Alla sidor byggs i första omgången. Fokus är Trollhättan. Grästorp, Lysekil och Smögen nämns som serviceområden på startsidan, på tjänstesidorna och på kontaktsidan, utan egna ortsidor.

| URL | Sida | Primärt sökord | Sekundära sökord | Unikt innehåll |
|---|---|---|---|---|
| `/` | Startsida | städfirma Trollhättan | städning Trollhättan, städ- och fastighetsservice Trollhättan, städfirma Grästorp / Lysekil / Smögen | Alla tjänster, serviceområden, ring + offert |
| `/flyttstad-trollhattan` | Flyttstäd | flyttstäd Trollhättan | flyttstädning Trollhättan, flyttstädning pris, flyttstäd RUT | Checklista, överlämning, hyresvärd/mäklare, RUT, FAQ |
| `/hemstad-trollhattan` | Hemstäd | hemstäd Trollhättan | hemstädning Trollhättan, städhjälp Trollhättan | Vad ingår, återkommande vs engång, RUT, FAQ |
| `/storstad-trollhattan` | Storstäd | storstäd Trollhättan | storstädning Trollhättan, vårstädning | Vad ingår rum för rum, RUT, FAQ |
| `/fonsterputsning-trollhattan` | Fönsterputs | fönsterputsning Trollhättan | fönsterputs Trollhättan, fönsterputsare, fönsterputs Lysekil, fönsterputs Smögen | Inglasade altaner, flera plan, fritidshus på kusten, RUT, FAQ |
| `/kontorsstadning-trollhattan` | Kontorsstäd | kontorsstädning Trollhättan | kontorsstäd, lokalvård Trollhättan, städfirma företag | Frekvens, avtal, vad ingår, FAQ |
| `/fastighetsservice-trollhattan` | Fastighetsservice | fastighetsservice Trollhättan | fastighetsskötsel Trollhättan, fastighetsstäd | **Omfattning TBD** `[TODO: vad ingår i fastighetsservice]`. Inget om bygg |
| `/offert` | Offertförfrågan | (konvertering) | | Kort formulär, Netlify Forms |
| `/tack` | Tack (noindex) | | | Bekräftelse, ring vid brådska |
| `/kontakt` | Kontakt | E&I Städ Trollhättan | | Telefon, e-post, serviceområden, LocalBusiness-schema |
| `/rut-avdrag` | RUT-avdrag | rut-avdrag städning | | Länkas från tjänsterna, inga procentsatser innan reglerna verifierats |
| `/recension` | Lämna recension | | | Skickar till Googles recensionsformulär `[TODO: GBP-länk]` |
| `/integritetspolicy` | Integritetspolicy | | | Krävs för formuläret |
| `/404` | Egen 404 | | | Ring, offert, tjänstelänkar |

**Senare (long-tail):** `/guide/flyttstadschecklista`, `/guide/vad-ingar-i-storstadning`. `/om-oss` när riktiga fakta och foton finns.

## Interlänkning

- Startsidan länkar till alla tjänster.
- Tjänstesidor länkar till varandra (flyttstäd, storstäd, hemstäd; fönsterputs, storstäd), till `/rut-avdrag` och `/offert`.
- Varje tjänstesida har en kort rad om serviceområdena.
- Beskrivande ankartexter, t.ex. "läs mer om flyttstäd i Trollhättan".

## Beslut

- Inga separata ortsidor.
- Allt byggs direkt, ingen fasindelning.
- Fastighetsservice är med, bygg är det inte.
- URL:er behåller `-trollhattan`.

## Avvägning att känna till

Utan egna ortsidor blir det svårare att ranka organiskt på "fönsterputsning Lysekil" eller "städning Smögen". Där bär Google Business Profile (serviceområden) mest, och orterna nämns konkret på tjänstesidorna. Ortsidor kan läggas till senare om efterfrågan visar sig.

## TODO från ägaren

- Vad fastighetsservice omfattar
- Vilka tjänster som gäller i Grästorp, Lysekil och Smögen, samt tillgänglighet
- Priser eller "från"-priser, RUT-hantering
- Foton, recensioner, GBP-länk och kategorier
