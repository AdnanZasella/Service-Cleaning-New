---
name: E&I Städ & fastighetsservice
description: Ett besiktningsprotokoll i tryck: vit blankett, djup bläcknavy, blågrå ifyllnadsyta och gul överstrykningspenna där man ringer.
colors:
  ink: "#14202b"
  ink-soft: "#3f4d5a"
  ink-mist: "#dbe5ea"
  paper: "#ffffff"
  field: "#f3f5f6"
  rule: "#c9d1d6"
  tint: "#e2edf1"
  tint-rule: "#aebfc7"
  mark: "#f2c200"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.6rem + 5vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.4rem + 1.1vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  phone:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 10.5vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Source Sans 3 Variable, Source Sans 3, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Source Sans 3 Variable, Source Sans 3, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)"
    fontWeight: 700
    lineHeight: 1.55
rounded:
  sm: "2px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "64px"
  section: "96px"
  tap: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-mark:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-mark-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  phone-mark:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    padding: "0.08em 0.2em"
  header-call:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    padding: "0 11px"
    height: "48px"
  logo-mark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mark}"
    width: "44px"
    height: "44px"
  menu-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "16px 0 40px"
  hero:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "40px 0 64px"
  steps-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "64px 0"
  rut-strip:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    padding: "11px 0"
  checklist-band:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    padding: "64px 0"
  offer-band:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    padding: "64px 0"
  field-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8.8px 16px"
    height: "48px"
  form-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "24px"
  mobile-bar-call:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    height: "56px"
  mobile-bar-offer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    height: "56px"
  footer-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "64px 0"
---

# Design System: E&I Städ & fastighetsservice

## Overview

**Creative North Star: "Besiktningsprotokollet"**

Sidan är det svenska överlämnandeprotokollet: en blankett där varje rad är ikryssad, så att besökaren ser exakt vad som ingår. Allt är uppritat med tunna linjer, rutade rader och fält som ser ut som ifyllnadsrutor. Djup bläcknavy bär text, linjer och de mörka banden (hero, "Så går det till", sidfot, mobilmeny); en kall blågrå ton (tint) ligger bakom checklistan och offertformuläret som ifyllnadsyta; en gul överstrykningspenna används där man ringer. Tonen är saklig och rak, aldrig dekorativ.

Sidan växlar mellan tre ytor: vit blankett, mörkt bläckband och blågrå ifyllnadsyta. Densiteten är medel: generösa luftrum mellan sektioner (96px), men inom sektionerna tätt satta rader åtskilda av linjer. Djup skapas av linjer och tonbyte, inte skuggor. Telefonnumret är det största typografiska elementet i hero och krymper aldrig ned till brödtextstorlek.

**Key Characteristics:**
- Vit blankett, navybläck, blågrå ifyllnadsyta, gul markering på ringytor.
- Mörkt bläckband i hero med nedtonat fotografi bakom (bläck i 84 % täckning, vänsterstark gradient från 56rem).
- Linjer (1.5px bläck, 1px grå hårlinje, 1px tint-linje på blågrå yta) i stället för skuggor och kort.
- Ritade kryssrutor som SVG, stämpeln "UTFÖRT" som enda dekor.
- Tabulära siffror på alla telefonnummer.
- Fasta kolumner för tjänsteraderna på bred skärm, staplade rader på mobil.

## Colors

Kall och nästan monokrom: blåsvart bläck mot vitt, en blågrå ifyllnadsyta, en kall grå linje och en enda varm gul.

### Primary
- **Blåsvart bläck** (ink, #14202b): text, alla 1.5px-linjer, primärknappar, loggomärkets bakgrund, hero, "Så går det till", mobilmenyns panel, huvudortens block, sidfot och mobilens "Be om offert". Färgen på nästan allt.

### Secondary
- **Överstrykningsgult** (mark, #f2c200): telefonnumret i hero, ringknappar (hero, mobilmenyn), headerns telefonknapp, "Ring oss" i mobilfältet, texten "E&I" i loggomärket, understrykning vid hover på desktopnavigationen, RUT-/orts-remsan på startsidan, textmarkering (::selection) och fokusringens halo. Text på gult är alltid bläck.

### Tertiary
- **Ifyllnadsblått** (tint, #e2edf1): bakgrund för checklistan och offertsektionen, så att vita formulärbladet ligger som ett blad på ett blågrått underlägg.
- **Tintlinje** (tint-rule, #aebfc7): 1px delare mellan checklistrader på tint-ytan.

### Neutral
- **Blankettvit** (paper, #ffffff): sidans yta, formulärblad, text på bläck och knappbakgrund vid hover.
- **Fältgrå** (field, #f3f5f6): rullningslistens spår.
- **Mjukt bläck** (ink-soft, #3f4d5a): sekundär text: tjänstebeskrivningar, tabellhuvud, formulärnotis, loggans undertext.
- **Dimblå ljus text** (ink-mist, #dbe5ea): löptext på bläckbakgrund: hero-ingress, "Eller ring", brödsmulor, sidhuvudets ingress.
- **Linjegrå** (rule, #c9d1d6): 1px hårlinje mellan tjänsterader, FAQ och relaterade tjänster på vit yta.

### Named Rules
**The Call Marker Rule.** Gult betyder "ring här": telefonnummer, ringknappar, headerns telefonknapp, mobilfältets "Ring oss" och loggomärkets bokstäver. Den enda ytstora gula ytan utöver det är en smal remsa med RUT-och-orter-text på startsidan; den är högst en per sida. Gult används aldrig för rubriker, sektionsbakgrunder eller dekor.

**The Ink-On-Yellow Rule.** Text på gult är alltid bläck (#14202b); vit text på gult förekommer inte.

**The Three-Grounds Rule.** En sektion ligger på ett av tre underlag: vit (paper), bläck (ink) eller blågrå (tint). Underlagen alternerar nedför sidan; blågrått hör till innehåll som fylls i eller kryssas av (checklista, offert), bläck till inramning och process.

## Typography

**Display Font:** Archivo Variable (med Archivo, system-ui, sans-serif)
**Body Font:** Source Sans 3 Variable (med Source Sans 3, system-ui, sans-serif)

**Character:** En kraftig grotesk med tyngd för rubriker och telefonnummer, parad med en saklig textgrotesk för löptext. Rubrikerna ser ut som tryckta fältetiketter, brödtexten som ifylld blankett.

### Hierarchy
- **Display** (800, clamp(2.6rem, 1.6rem + 5vw, 6rem), 1.05): H1 i hero, max 14ch. På textsidor (sidhuvud) clamp(2.25rem, 1.6rem + 4vw, 4.5rem).
- **Phone** (800, clamp(2.25rem, 10.5vw, 5.5rem) på mobil, clamp(2.25rem, 3.4vw, 3.5rem) från 56rem, 1.05, -0.03em): telefonnumret på den gula raden i hero; tabulära siffror.
- **Headline** (800, clamp(1.625rem, 1.4rem + 1.1vw, 2.25rem), 1.05): H2 per sektion, stegnummer i "Så går det till".
- **Title** (700, clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem), 1.05): H3, rumsnamn, ortsnamn, tjänstenamn, hero-ingress, mobilmenyns länkar (700).
- **Body** (400, clamp(1rem, 0.97rem + 0.15vw, 1.0625rem), 1.55): löptext, max 68ch.
- **Label** (700, clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)): formuläretiketter, tabellhuvud och brödsmulor. Vanlig versalisering, inte versaler.

### Named Rules
**The Numerals Rule.** Telefonnummer sätts alltid med `tabular-nums`; de är aldrig mindre än brödtext och aldrig kursiva. I hero, header, mobilfält och menyknapp sätts de i displayfonten.

## Layout

Ett enda innehållsspår, max 76rem (1216px) med sidopadding clamp(1rem, 4vw, 2.5rem). Sektioner staplas med 96px mellanrum; inuti används en 8-punktsnära skala (8, 12, 16, 24, 40, 64, 96px). Mörka och blågrå band är fullbredd med innehållet i samma spår och 64px lodrät padding. Layouten varieras per sektion: hero i två kolumner (1.35fr / 1fr) med ringblocket till höger från 56rem, checklistan med klistrig rubrikkolumn (1fr / 2.2fr, rum i två kolumner), tjänstetabell i fasta kolumner (2.2 / 1.4 / 1.1 / 0.8fr från 48rem), orter med fotografi (1fr / 1.7fr) och huvudorten över hela bredden, tre steg i rad på mörkt band från 56rem, tre målgrupper i rad på tjänstesidor, offertsektion i två kolumner (1fr / 1.6fr). Textsidor (PageLayout) har bläcksidhuvud med brödsmulor och en enkel proselåda; tjänstesidor (ServiceLayout) följer ordningen hero, checklista, målgrupp, steg, RUT, FAQ, relaterade tjänster, offert.

Brytpunkter: 30rem (hero-knappar i två kolumner, telefonnumret visas i headern), 40rem, 48rem (tabell), 56rem (hero i två kolumner, mobilfältet döljs) och 68rem (desktopnavigation med tjänstelänkar; Meny-knappen döljs). På mobil staplas allt, med ett fast fält längst ned (Ring oss / Be om offert) och sidan får bottenmarginal så innehållet inte täcks. Pekytor är minst 48px (formulär och knappar), länkrader minst 44px.

## Elevation & Depth

Systemet är platt. Det finns inga skuggor för djup: hierarki bärs av 1.5px bläcklinjer, 1px hårlinjer och tonskifte mellan vitt, blågrått och bläck. Enda "lyft" är den roterade stämpeln (-4deg). Fotografier i hero ligger bakom en bläckfärgad täckning, inte bakom en skugga. Fokusläge är en 3px bläckram med 3px gul halo (vit ram på mörka ytor).

### Named Rules
**The Ruled-Not-Raised Rule.** Skillnader mellan ytor skapas med linje eller tonbyte, aldrig med box-shadow (fokushalon undantagen).

## Shapes

Närmast rätvinkligt: 2px radie på knappar och formulärfält, 0 på block, rader, loggomärke, menyknapp och bilder. Alla kanter ritas med 1.5px bläcklinje (`--line`); interna delare är 1px linjegrå (på tint: tintlinje). Kryssrutor är kvadrater med fyrkantig bockändelse; pilar har fyrkantig ände. Bilder ramas av samma bläcklinje, inte rundade hörn; i hero ligger fotot oramat som fullbredd bakgrund.

## Components

### Buttons
- **Shape:** nästan rak kant (2px), 1.5px bläckram, minst 48px hög, 24px sidopadding, displayfont 700.
- **Primary:** bläck bakgrund, vit text. Hover inverterar till vit bakgrund med bläcktext (0.2s, ease-out-expo). Active flyttar 1px nedåt.
- **Ghost:** vit bakgrund med bläcktext, inverteras till bläck vid hover. I hero och mobilmeny: transparent med vit ram och vit text, vit bakgrund vid hover.
- **Mark (ring):** gul bakgrund med bläcktext; hover till vit bakgrund. Används för "Ring oss" i hero (med bläcktext och gul ram) och "Ring 070-013 21 39" i mobilmenyn.

### Hero
Bläckband med fotografi som fullbredd bakgrund under en bläckfärgad täckning (84 % på mobil, gradient 92 % till 66 % från vänster på desktop). H1 max 14ch i vitt, ingress i dimblått, brödsmulor i dimblått. Ringblocket: etikett "Ring oss för offert", telefonnumret på gul yta i phone-skala, därefter "Ring oss" (gul) och "Be om offert" (ghost), och det andra numret i vit text. Fokusring vit.

### Header och navigation
- **Style:** sticky, vit yta, 1.5px bläcklinje under, minst 64px hög. Till vänster loggomärke (44px bläckruta med "E&I" i gult, Archivo 800), bredvid "Städ" och undertexten "Trollhättan med omnejd" (dold under 30rem). Till höger gul telefonknapp med ikon och nummer (nummer visas från 30rem) och, under 68rem, Meny-knappen.
- **Desktop (från 68rem):** tjänstelänkar plus Kontakt i displayvikt 600 med 3px gul understrykning vid hover.
- **Mobil Meny:** `details`-panel. Knappen är en vit ruta med 1.5px ram, tre stapar och texten "Meny"; öppen blir den bläck med stapar som korsas (0.25s). Panelen är bläck, fullbredd under headern, med vita länkrader (Title-storlek, 52px höga, 1px genomskinlig vit delare), därefter "Ring" (gul) och "Be om offert" (ghost). Länkklick stänger panelen.
- **Mobilfält:** fast, två delar, 56px högt, gult "Ring oss" med ikon och bläck "Be om offert", 1.5px bläcklinje ovanför; dolt från 56rem.

### RUT-remsa
Fullbredd gul remsa direkt under hero på startsidan, 1.5px bläcklinje över och under, centrerad enradig text i displayfont 700 ("RUT-avdrag kan gälla · orter"). Bläcktext. En per sida.

### Checklista (signaturkomponent)
Blågrått band (tint). Rumsblock med en 1.5px bläcklinje överst, rumsnamn som H3 och rader med ritad kryssruta (SVG, 22px) till vänster, åtskilda av 1px tintlinje. Rubrikkolumnen är klistrig från 56rem och kan bära en bläckramad bild (16/10). Kryssrutorna ritas in vänster till höger vid scroll där webbläsaren stödjer det. Avslutas med den roterade "UTFÖRT"-stämpeln.

### Steg ("Så går det till")
Bläckband med vit text. Rubrik H2, tre rader med 1.5px vit linje överst, stort nummer (Headline-storlek, displayfont) i en 3rem-kolumn och H3 plus löptext. Tre kolumner från 56rem.

### Tjänstetabell
Rader i fasta kolumner (tjänst, för vem, RUT, länk) med 1.5px linje ovanför och under huvudet, hårlinje mellan raderna. Tjänstenamn i displayfont, övrig text i mjukt bläck. Under 48rem staplas varje rad.

### Inputs / Fields och OfferForm
- **Style:** vit bakgrund, 1.5px bläckram, 2px radie, minst 48px hög, etikett ovanför i label-stil. Fälten är namn, telefon eller e-post, tjänst (select), ort (select), meddelande (textarea, minst 112px) och en bläck sändknapp över hela bredden.
- **Focus:** global fokusring (3px bläck + 3px gul halo).
- **Layout:** offertsektionen är ett blågrått band med 1.5px linje över och under; formuläret är ett vitt blad med bläckram; två kolumner från 56rem, meddelande, knapp och notis över hela bredden.

### FAQ och relaterade tjänster
FAQ som `details`-rader med hårlinje, 56px höga summary i displayfont 700, max 52rem. Relaterade tjänster som tvåkolumns länklista med 1.5px linje överst och hårlinje mellan rader.

### Ortsblock
Huvudorten ligger på ett fyllt bläckblock med vit text över hela bredden; övriga orter är linjetopp (1.5px) utan bakgrund. Fotografi med bläckram och bildtext-länk i kolumnen bredvid.

## Do's and Don'ts

### Do:
- **Do** rita all struktur med 1.5px bläcklinje (`--line`) och 1px linjegrå hårlinje (`--hair`); på tint-ytor används tintlinje.
- **Do** sätta varje telefonnummer som `tel:`-länk med tabulära siffror, och i Archivo i hero, header och mobilfält.
- **Do** begränsa gult till ringytor (nummer, ringknappar, headerns telefonknapp, mobilfältet, loggomärkets bokstäver) och den enda RUT-remsan, alltid med bläcktext ovanpå.
- **Do** lägga innehåll som kryssas av eller fylls i (checklista, offert) på tint, och inramning och process (hero, steg, sidfot, meny) på bläck.
- **Do** använda 2px radie på knappar och fält, 0 på övriga ytor.
- **Do** variera sektionernas layout (kolumntal, klistrig kolumn, tabell, rad) i stället för att upprepa samma kort.
- **Do** lägga en bläckfärgad täckning över fotografier som bär text, och hålla fotot i hero utan ram.
- **Do** hålla pekytor på minst 48px (länkrader minst 44px) och visa fokusringen på alla interaktiva element.

### Don't:
- **Don't** använda skuggor, rundade kort eller blur för att skapa djup.
- **Don't** låta gult bli rubrikfärg, dekor eller bakgrund för sektioner utöver den enda RUT-remsan.
- **Don't** förminska telefonnumret till brödtextstorlek i hero, header eller mobilfält.
- **Don't** blanda in en tredje typfamilj eller färger utanför de nio tokens.
- **Don't** använda emoji eller teckenglyfer som ikoner; ikoner är ritade SVG-symboler med fyrkantiga ändar.
- **Don't** centrera hela sektioner; text är vänsterställd mot blanketten (remsan är undantaget).
- **Don't** lägga vit text på tint eller bläcktext på bläck; kontrasten mellan underlag och text är alltid bläck-på-ljust eller vitt-på-bläck.
