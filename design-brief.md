# SUNDAY HOUSE — design brief

## 2026-09 revamp — Heart of Zoe register (supersedes palette/type below)
- Ground: Petal pink art-paper `#F7E3E9` with vertical fibre + speckle texture; raised sheets `#FDF1F4`.
- Ink: cocoa `#2C2625`; secondary `#3A322F`; mauve accent `#8A5F6E`; hairlines `#EFD0DA` / `#E6C1CD`.
- Footer: dark cocoa bar `#2D2625` with pale pink type.
- Type (all free): Instrument Serif (display, weight 400), EB Garamond (body), Lekton typewriter mono
  (nav, labels, buttons, micro-copy), Pinyon Script (handwritten accents, via Google Fonts).
  All Envato fonts removed.
- Square hairline buttons (`.hz-btn`), underline-only form fields, flat surfaces (no shadows/gilding).
- Every page closes on a moody photo band + "Let's Keep What Matters." contact sheet.

## Design read
A wedding photography, film and planning house for couples and families across
Seattle, Tacoma and the Pacific Northwest. Bright, spacious, editorial and
romantic with old-world elegance and a modern digital ease underneath. The
visitor arrives to celebrate, to plan, to be photographed, or just to look; the
site should feel like walking into a beautiful, quiet house full of things
worth keeping.

## Concept spine
**A house for the things worth keeping.** The whole journey enacts entering a
luminous home: the visitor steps through warm ivory light, passes the moments
worth keeping (the aisle, the rings, the candlelit table), and is led toward a
place where those moments can live (photography, House Objects, My House). A
photograph album, a keepsake box, an ode to "the things worth keeping."

## Delivery tier
`cinema` (default). Animated single-shot scroll-scrub film as the Tier-1 hero,
with restrained editorial micro-motion across the rest of the page. The scroll
plays the film. Motivated, never gimmicky. Full `prefers-reduced-motion`
fallback.

## Locked palette (from the Sunday House brand style guide)
- **Ivory** `#FAF7F2` — page ground, hero light
- **Paper** `#EFE6D8` — secondary surface, soft panels
- **Gold** `#B38A4A` — primary accent (gilding, lines, heart fills)
- **Antique Gold** `#8D672F` — deep accent (hover, emphasis)
- **Brown** `#302720` — secondary ink, warm neutral
- **Ink** `#191714` — primary text

One accent f=family (antique gold / gold) used across the whole page. Bright
ivory base with enormous negative space; linen/fine-art paper texture that
barely shows. Warm near-black ink. Whites stay white. Not vintage-filtered.

## Locked type
- **Display serif: Instrument Serif** — emotional/editorial statements
  (the brand style guide explicitly names it; journal-style fashion register).
- **Elegant serif: EB Garamond** — chapter bodies, editorial paragraphs.
- **Sans: Inter** — tiny wide-tracked uppercase nav labels, functional text.

Serif justified by the brand: an editorial/luxury wedding & photography house.

## Animation mode: animated-website (user chose the cinematic scroll journey at
intake).

### Journey shape: `single-shot`
One continuous ~15s film of a wedding celebration and its keepsakes, scrubbed
end to end. No seams because there is only one clip; chapters ARE the HTML
reading over it.

### Journey (chapters over the one film)
1. **You said yes. — "We'll help with what comes next."** Focal point: the
   airy aisle + bride in golden light. CTAs: PLAN A WEDDING / BOOK
   PHOTOGRAPHY; secondary inline "Just looking around? Come inside".
2. **Let's figure this out.** Weddings + planning. Focal point: the rings +
   bouquet. Proof tags: venues / planners / vendors.
3. **We photograph weddings, too.** Focal point: the couple before the gold
   mirror. Proof tags: engagements / elopements / weekends / films.
4. **There is life outside the aisle.** Focal point: candlelit linen table.
   Seniors, families, newborns, couples, portraits, celebrations.
5. **A place for the things worth keeping.** Focal point: warm glowing
   reception hall. House Objects, My House, an album to keep. CTA: COME
   INSIDE.

Align left, story scrim as ivory; film stays bright with center-safe subject.

### World grammar
Bright filmic ivory and warm golden window light; shallow depth of field; soft
film-grain editorial photography; slow, steady, one continuous gentle dolly;
subject center-safe with generous negative space on the left for copy; gold
foil details; locked warm exposure, no flicker, no on-screen text.

### Mobile framing
Subject and key focal points stay in the center-safe zone; lighter mobile
encode; copy reads over the ivory bottom scrim.

### Delivery budget
Desktop ≤ 32 MiB, mobile ≤ 16 MiB total clips.

## Section plan (homepage)
1. Hero (scroll-scrub film) — full-bleed, centered copy over warm light.
2. "What brings you to the House?" — interactive stationery-style choice
   cards (bend-but-not-saaS). Layout: editorial multi-card, image-light.
3. Weddings invitation band — split editorial, gold rule lines.
4. Photography — alternating split (image + text), max 2 splits in a row.
5. Life outside the aisle — asymmetric gallery grid of six life services.
6. House Objects — catalogue editorial (frame / album / print / folio rows).
7. People We Like + journal preview — quiet editorial list band.
8. Footer — sunken cream, gold hairline, house mark.

Eyebrow budget ceil(8/3) = 3, used at most 3 times.

## Asset plan (Phase 2)
- Scroll film (single-shot, seedance) — the hero.
- Section plates: cou, bride window, candlelit table, reception glow.
- Life imagery: seniors, family, maternity+newborn, couples, portrait,
  celebration.
- House Objects: album, frame, print (editorial still lifes on ivory linen).
- Content imagery: 2–3 editorial wedding photographs for sections.
- Jin journal thumbs: reused from plate pool where possible.
- Brand marks: house-with-heart + SH monogram drawn as inline SVG (brand
  system from the style guide).
- Launch branding: generate_app_branding (cover, OG, favicon) — submitted
  once with the film.

## CTA inventory (each its own garment)
- PLAN A WEDDING — framed gold button, thin border, fills gold on hover.
- BOOK PHOTOGRAPHY — ink solid block, lifts on press (stamp/press).
- COME INSIDE — oversized underlined text-link whose underline draws in
  (a seam/route), magnetic.
- "Come inside" nav CTA — gold pill (the one pill on the page).
- Inline "offer" links — serif italic with gold goldunderline.
- House Objects / journal links — row CTA band that shears on hover.

## Interactions
- Reveals on mount / scroll-affixed, transform-only, reduced-motion safe.
- Tiny heart fills gold when something is saved.
- SH monogram loading / footer sign-off.
- No SaaS dashboard chrome: everything reads as paper + linen + editorial.