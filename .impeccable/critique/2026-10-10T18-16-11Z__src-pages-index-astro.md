---
target: startsida och tjänstemall
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\adnan\\OneDrive\\Skrivbord\\Hemsidor för företag\\Fastighet-Städ\\src\\pages\\index.astro"
target_fingerprint: "sha256:9255f82bb67315e0806740917de00a96f51456512fcfbee1881f2fe56afd1abf"
target_path: "C:\\Users\\adnan\\OneDrive\\Skrivbord\\Hemsidor för företag\\Fastighet-Städ\\src\\pages\\index.astro"
timestamp: 2026-10-10T18-16-11Z
slug: src-pages-index-astro
closed: true
---
# Kritik av E&I Städ (startsida, flyttstäd, kontakt)

Method: dual-agent. Score 25/32 (heuristik 7 och 10 n/a). 0 P0, 2 P1.

## Verdict
Delvis egen värld (ca 60 %). Checklistan, bockarna och stämpeln är specifika; första vyn är den vanliga lokala hantverkarhjälten och bär inte protokolltesen.

## Prioriterade problem
- [P1] Synliga [TODO: ...] i sidtext (orter, svarstid, fastighetsservice-rad). Fix: sann minimitext eller byggflagga, dölj fastighetsservice-raden. Kommando: clarify.
- [P1] Samma bilder återanvänds på flera sidor (golv/skum på /, flyttstäd, storstäd; skrapa på /, fönsterputs). Fix: en bild per sida, egna foton senare. Kommando: shape.
- [P2] För många Ring/Offert-knappar i mobilens första vy. Fix: hjälten till rubrik, ingress och nummer; baren som enda knappar; dölj baren när formuläret syns. Kommando: distill + adapt.
- [P2] Gula RUT-bandet bryter markörregeln och bryter ful på mobil. Fix: linje i ink eller flytta orterna till ingressen. Kommando: quieter.
- [P2] Flyttstädchecklista före tjänstetabell på startsidan och dubblerad på flyttstädsidan. Fix: tabell direkt efter hjälten, teaser av checklistan. Kommando: layout.
- [P3] Tomt förtroende mitt på sidan. Kommando: clarify.

## Evidens (B)
Detektor 0 fynd. Ingen horisontell scroll, 0 konsolfel, inga kontraster under 4,5:1 mot solid färg (ej mätt mot fotopixlar). Små tap targets (~22 px) på inline-telefon/e-postlänkar. Startsida titel 61 tecken, meta 157. Ingen og:image. Canonical använder placeholder-domän.
