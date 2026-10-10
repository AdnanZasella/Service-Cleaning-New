# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro with static output (confirmed by the owner). Styling via CSS custom properties generated from DESIGN.md tokens. Minimal JavaScript. Deployed on Netlify; the offert form uses Netlify Forms, with submissions forwarded to the owner's email.

## Users

- **Privatpersoner** in Trollhättan, Grästorp, Lysekil and Smögen who need flyttstäd, hemstäd, storstäd or fönsterputsning, often with RUT-avdrag. They arrive from a local Google search, usually on a phone, and want to know quickly what is included, whether the company works in their ort, and how to reach someone.
- **Företag och BRF:er** needing kontorsstäd or recurring property service.
- **Hyresvärdar och mäklare** needing flyttstäd before inspection and handover.

Primary job: decide whether this company is the right one and call or send an offertförfrågan.

## Product Purpose

The website of E&I Bygg Service Fastighet Städning AB (short name: E&I), a cleaning and property service company based in Trollhättan. It exists to (1) rank at the top of Google locally, in map results (Google Business Profile) and organic results, and (2) turn visitors into phone calls or offertförfrågningar. Every decision serves one of the two.

## Positioning

A local cleaning and property service firm that covers Trollhättan and also travels to Grästorp, Lysekil and Smögen, combining städning with bygg- and fastighetsservice. The owner confirms the differentiators: coverage of the coast (Lysekil, Smögen) as well as Trollhättan, and städ plus bygg/fastighetsservice in one company, with fastighetsservice/fastighetsskötsel (exact scope still to confirm) and no bygg offering on the site. Specifics beyond this (guarantees, years in business, price position) are not confirmed and must not be claimed.

## Operating Context

- Service-area business; whether a public address is shown is undecided (if not, show service areas only).
- A Google Business Profile is being set up; site and GBP must agree character-for-character on name, phone and area (NAP) and on services.
- Primary contact route is **phone / SMS**. The offertförfrågan form is secondary and must stay short: name, phone or email, service, ort, message.
- Form submissions go through Netlify Forms and are forwarded to the owner's email (emsabiscevic@gmail.com for now, to be replaced by a domain email). Response time is not stated.
- Existing company poster (`Company current poster.pdf`) is a source of business information only, not a design reference.

## Capabilities and Constraints

- **Language:** all content in Swedish, `lang="sv"`, addressing the reader as "du"; warm, direct, concrete, no empty phrases.
- **Services:** Flyttstäd, Hemstäd, Storstäd, Fönsterputsning, Kontorsstäd. Construction and property services: scope TBD, confirm with the owner before writing about them.
- **Orter:** Trollhättan (main), Grästorp, Lysekil, Smögen.
- **Phone:** 070 0132 139 (`tel:+46700132139`) and 070 446 6754 (`tel:+46704466754`). Formatted in Swedish style on the site.
- **Email:** emsabiscevic@gmail.com (to be replaced with a domain email).
- **Confirmed by owner (2026-10-10):** prices depend on size and how dirty; distance may affect price. All services are available in all orters. Response time max 48 hours. Hours Mon–Fri 07–16, emergency jobs also weekends. RUT: 50 % of labour cost per owner and secondary sources (verify with Skatteverket); how E&I handles RUT invoicing is NOT confirmed. Google Business Profile is wanted but not created yet; org number unknown. No logo or own photos yet.
- **RUT-avdrag:** mention where it applies (private customers: hemstäd, flyttstäd, storstäd, fönsterputsning). Do not state percentages or caps without verifying current rules.
- **SEO:** one page per service, genuine local content for ort pages (no doorway pages), unique title/meta, one H1, JSON-LD (LocalBusiness, Service, BreadcrumbList), sitemap, robots, Swedish 404, NAP from one shared config.
- **Conversion:** clickable `tel:` links everywhere; persistent mobile call and offert bar; every service page ends with a CTA; a simple Google review path (`/recension`).
- **Performance/accessibility:** Lighthouse 95+ mobile, WCAG AA, 44px touch targets, works without JS.

## Brand Commitments

Company name must appear exactly as "E&I Bygg Service Fastighet Städning AB" (short: E&I). No logo or brand assets have been supplied.

## Evidence on Hand

- Company poster PDF (services and contact details).
- One reference screenshot in `design-refs/` (inspiration only).
- **Absent, must not be fabricated:** prices, reviews/testimonials, customer names or counts, certifications, insurance, guarantees, years in business, staff names, real photos, opening hours, GBP link, domain.

Use clearly marked placeholders such as `[TODO: pris för flyttstäd]` and `[TODO: foto]`.

## Product Principles

1. **Local search first.** Structure, URLs, headings and copy are planned for Swedish local queries from the start.
2. **Make contact effortless.** A call or a short form is always one tap away.
3. **Concrete over claims.** Say what is included, where, and how to book; never invent proof.
4. **One source of truth for business facts.** NAP and services render from a shared config and match the GBP.
5. **Honest placeholders.** Missing facts are marked and reported, not filled in.

## Accessibility & Inclusion

WCAG AA contrast, visible focus states, labeled form fields, touch targets of at least 44px. Readable by a broad Swedish-speaking audience, including older homeowners on mobile.

## Open Decisions

- Prices (or "från"-priser) per service; RUT handling and invoicing
- Bygg and fastighetsservice scope
- Real photos, reviews, GBP link and categories, public address or not
- Domain and domain email; response time
- Opening hours; insurance, F-skatt, guarantees
