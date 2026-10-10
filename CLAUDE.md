# E&I Bygg Service Fastighet Städning AB – hemsida

Website for a cleaning and property service company based in Trollhättan, also serving Grästorp, Lysekil and Smögen.

**Goals (equally important):**
1. **Rank at the top of Google locally:** in the map results (Google Business Profile) and the organic results, for searches like "flyttstäd Trollhättan", "städfirma Trollhättan" and "fönsterputsning Lysekil".
2. Get visitors to **call** or **send an offertförfrågan**.

Every design and content decision should serve one of these two goals. If something does neither, leave it out. **SEO is not a finishing step:** page structure, URLs, headings and copy are planned for search from the start.

## Project files

- `PRODUCT.md`: product context (audience, purpose, voice). Written by `/impeccable init`.
- `DESIGN.md`: the visual design system. **Source of truth for all visual decisions.** Never invent fonts, colors, spacing or radii that aren't in it. If something is missing, propose an addition to DESIGN.md first, then use it.
- `design-refs/`: reference screenshots plus `notes.md` explaining what to take from each. These are inspiration, not things to copy.
- The company's existing poster is a source of **business information only** (services, contact details). Do not use it as a design reference.

## Language

- **All website content is in Swedish** (`<html lang="sv">`). This includes copy, buttons, form labels, error messages, alt text, meta titles and descriptions.
- Write natural, professional Swedish as a Swedish copywriter would. It must not sound translated: no anglicisms or English sentence structure.
- Address the reader as "du". The tone is warm, direct and trustworthy.
- Keep it concrete. Say what is included, where the company works and how to get in touch. Avoid empty phrases like "vi brinner för kvalitet" or "din partner för en renare vardag".
- Use Swedish formats: phone numbers like `070-013 21 39`, prices like `1 495 kr`, dates like `10 oktober 2026`.

## Business facts

- **Company name:** E&I Bygg Service Fastighet Städning AB (short name: E&I)
- **Service areas:** Trollhättan (main), Grästorp, Lysekil, Smögen
- **Services:**
  - Flyttstäd
  - Hemstäd
  - Storstäd
  - Fönsterputsning
  - Kontorsstäd
  - Construction and property services: scope TBD, confirm with the owner before writing about them.
- **Phone:** 070 0132 139 and 070 446 6754
  - Link as `tel:+46700132139` and `tel:+46704466754`.
- **Email:** emsabiscevic@gmail.com (to be replaced with a domain email when one exists).

### Never fabricate

Never invent any of the following:
- prices
- reviews or testimonials
- customer names or numbers of customers
- certifications, insurance or guarantees
- years in business
- staff names

Where real information is missing, use a clearly marked placeholder such as `[TODO: pris för flyttstäd]` and list all TODOs at the end of the task.

## Conversion

- Phone numbers are clickable `tel:` links everywhere.
- On mobile, a "Ring oss" button and an offert button must always be within easy reach (for example a sticky bottom bar).
- The offertförfrågan form should be short: name, phone or email, service, ort, message. Ask only for what is needed to send a quote.
- Every service page ends with a clear call to action.
- Mention RUT-avdrag wherever it applies (hemstäd, flyttstäd, storstäd, fönsterputsning for private customers). Don't state specific RUT percentages or caps without verifying current rules.

## SEO (local search is a top priority)

The company is setting up a **Google Business Profile (GBP)**. The website and the GBP must work together: Google trusts a business more when they agree with each other.

### Keywords and site structure

- Plan pages around what people in the area actually type into Google, in Swedish. Cover variants and synonyms naturally:
  - "flyttstäd" / "flyttstädning"
  - "hemstäd" / "hemstädning"
  - "städfirma"
  - "fönsterputs" / "fönsterputsning"
  - "kontorsstädning"
  - combined with Trollhättan, Grästorp, Lysekil and Smögen
- **The homepage** targets the main term: städfirma / städ- och fastighetsservice in Trollhättan, mentioning the other areas.
- **One page per service**, targeting "[tjänst] Trollhättan" as the primary keyword. Each page has its own unique content: what's included (a concrete checklist), who it's for, how it works, RUT where it applies, a short FAQ, and a call to action.
- **Ort pages** for Grästorp, Lysekil and Smögen only with genuinely local content: which services are offered there, travel and availability, local specifics (for example, fönsterputs for summer houses on Smögen). **No near-duplicate pages with swapped place names**; Google treats those as spam (doorway pages).
- Propose a **sitemap and keyword map** (page → primary keyword → secondary keywords) and get it approved before building pages.
- Plan room for useful long-tail content later, for example a flyttstädschecklista or "vad ingår i en storstädning".

### On-page

- Every page gets a unique Swedish `<title>` (about 60 characters max, keyword first, then "| E&I Städ Trollhättan" or similar) and a meta description (about 155 characters, with a reason to click).
- Use exactly one `<h1>` per page, containing the primary keyword, and a logical H2/H3 structure.
- Use keywords naturally. Write for people first. No keyword stuffing and no hidden text.
- Use clean, lowercase URLs without å, ä or ö: `/flyttstad-trollhattan`, `/fonsterputsning-lysekil`.
- **Internal links:**
  - the homepage links to all services
  - services link to related services and to the offert form
  - ort pages link to the relevant services
  - use descriptive anchor text ("läs mer om flyttstäd i Trollhättan", not "klicka här")
- Image file names and alt text in Swedish and descriptive (`flyttstad-kok-trollhattan.webp`).
- Add canonical tags on every page, plus Open Graph and Twitter meta tags for sharing.

### Structured data (JSON-LD)

- **LocalBusiness** (subtype `HouseCleaningService` / `CleaningService` where it fits) on the homepage and contact page:
  - name, phone numbers, email, logo, url
  - `areaServed` (all four orter)
  - opening hours (when known)
  - `sameAs` with the GBP link (when it exists)
- **Service** schema on each service page.
- **BreadcrumbList** on all subpages.
- Never mark up reviews or ratings that don't exist on the page.
- Validate the schema with Google's Rich Results Test before calling a page done.

### NAP consistency with Google Business Profile

- Business name, phone and area (and address, if it is shown) must be **character-for-character identical** on the website, in the schema and in the GBP. Store them in one shared config file and render them from there everywhere; never hard-code them in multiple places.
- If the company operates as a service-area business without a public address, don't show an address on the site either. Show the service areas instead.
- The services listed on the site should match the services and categories set in the GBP.

### Technical SEO

- Fast pages (Core Web Vitals in the green on mobile), mobile-first, static HTML.
- `sitemap.xml` (auto-generated), `robots.txt`, a custom Swedish 404 page.
- No content hidden behind JavaScript; everything important is in the HTML.
- Prepare for Google Search Console verification and sitemap submission at launch.

### Reviews

Reviews are among the strongest local ranking factors.
- Include a simple way for customers to leave a Google review (a link or a short `/recension` page that sends them to the GBP review form), to use in follow-up messages after a job.
- Show real reviews only, once they exist.

## Tech

- **Stack:** Astro with static output (recommended for speed and SEO; confirm before scaffolding if not yet decided).
- **Styling:** CSS custom properties generated from DESIGN.md tokens. No ad-hoc values.
- **Images:**
  - Use `<img>` with width/height, `loading="lazy"` below the fold, and modern formats (AVIF or WebP).
  - Write meaningful Swedish alt text.
  - Keep `design-refs/` outside `public/`; it must never be deployed.
- **Performance:** aim for Lighthouse 95+ on mobile. Use minimal JavaScript; the site should work without it except for small enhancements.
- **Accessibility:** WCAG AA contrast, visible focus states, labeled form fields, touch targets of at least 44px.

## Design rules (anti-slop)

In addition to Impeccable's rules:

- **No visual clichés:**
  - no purple or blue gradients or gradient text
  - no emoji used as icons
  - no 3-icon feature grids as a default pattern
- **No generic layout:**
  - don't put everything in rounded cards with shadows
  - don't center every section
  - vary section layouts
- **Imagery:**
  - no generic cleaning stock clichés (yellow gloves, spray bottles, smiling woman with a mop) unless the owner supplies them
  - prefer real photos; until they exist, use neutral placeholders marked `[TODO: foto]`
- Copy is written before layout is polished; design around real Swedish text, not lorem ipsum.

## Visual verification with Playwright MCP

You cannot judge a design from code. After any **visually relevant change**, use the Playwright MCP to look at the result in the running dev server before saying it's done.

**Take screenshots after:**
- building or rebuilding a section or page
- layout, spacing or grid changes
- typography, color or DESIGN.md token changes
- new or changed images
- navigation, header, footer or the mobile call/offert bar
- responsive fixes
- anything the user says looks wrong

**No screenshots needed for:**
- copy tweaks that don't change length much
- meta tags and schema
- refactors with no visual effect
- config changes
- fixing a typo

**How:**
- Use `browser_take_screenshot` (the accessibility snapshot tells you nothing about how the page looks).
- Check **1440px** (desktop) and **390px** (mobile). Add 768px (tablet) for layout changes.
- Screenshot the changed section, not just the top of the page. Use full-page screenshots when reviewing a whole page.
- Scroll first so lazy-loaded content and scroll animations have rendered.
- Look at the screenshot critically against DESIGN.md:
  - spacing and alignment
  - hierarchy and contrast
  - text wrapping and overflow
  - nothing cut off
  - no horizontal scroll on mobile
- Fix the issues you see, then screenshot again.
- Say briefly what you checked and what you fixed. Don't claim something "looks good" without having looked.
- Save screenshots in `.screenshots/` (gitignored), not in `public/` or `design-refs/`.

## Workflow

1. Build **one section at a time**. Don't one-shot whole pages.
2. After each section, verify it visually with Playwright (see above).
3. Run `/impeccable critique` on the section and fix the issues before moving on.
4. Before calling a page done:
   - check that all links and `tel:` links work and the form submits
   - check there is no horizontal scroll on mobile
   - run `/impeccable polish`
5. Keep a short list of open TODOs (missing info from the owner) and report it at the end of each session.

## Open questions for the owner

- Prices (or "från"-priser) per service
- Whether they work under RUT, and how invoicing is handled
- Which bygg and fastighetsservice tasks they offer
- Real photos (team, car, before/after)
- Reviews they can share, and their Google Business Profile
- Domain name and domain email
- Google Business Profile: link, chosen categories, whether the address is shown publicly
- Opening hours
- Insurance, F-skatt, any guarantee
- Where form submissions should be sent
