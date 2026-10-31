# 90's South Kitchen: website

Nuxt 4 · Vue 3 (Composition API, `<script setup lang="ts">`) · TypeScript · Tailwind CSS 4 + hand-written CSS.

Pages: **Home**, **About Us**, **Contact Us**, **Request a Quote**.

> **Status:** this source was written without being able to run `npm install` or a build
> (the authoring environment had no access to the npm registry). The form validation logic was
> tested with Node; the Vue pages, styling and Nuxt config have **not** been run in a browser.
> Please run the steps below and expect to tweak small things after the first look.

## Run it

```bash
nvm use            # Node 22 (any Node >= 20.19 works)
npm install        # also runs `nuxt prepare`
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start      # serves .output/ (needed for the form API routes)
```

Type check: `npm run typecheck`.

## Before you launch

1. **Add photographs.** See `public/images/README.md` for the exact filenames and sizes.
   Until they exist, the site shows placeholder tiles with the dish names.
   `npm run check:images` lists what is missing.
2. **Connect the forms.** The contact and quote forms post to `/api/contact` and `/api/quote`
   (`server/api/`). They validate on the client and server, include a honeypot spam trap, and
   then call `deliverSubmission()` in `server/utils/deliver.ts`.
   - Set `NUXT_FORM_WEBHOOK_URL` (see `.env.example`) to forward submissions as JSON to
     Zapier, Make, Formspree, a Google Apps Script web app, or your own endpoint.
   - With no webhook set, submissions are only logged to the server console. Visitors would
     still see a success message, so **configure delivery before going live**.
3. **Hosting.** The form routes need a server runtime (Node, Vercel, Netlify, Cloudflare, ...).
   `nuxt generate` alone produces a static site with no working forms.
4. **Review copy.** Dish descriptions, "About" text and the quote-page wording are
   draft copy written from the brief. Please check them against what the restaurant really serves
   and offers. Opening hours and prices are intentionally not shown.
5. **Google Maps embed** on the Contact page uses a plain `maps?q=...&output=embed` URL built from the address.
   Check that the pin lands correctly and swap in a precise Place link if needed (`app/data/site.ts`).

## Brand and logo

- `public/brand/90sk-badge.png` and `public/brand/90sk-lockup.png` are the supplied files,
  byte-for-byte unchanged (no recolouring, re-typesetting, stretching or transparency changes).
- The header and footer show the horizontal logo. The supplied cover artboard has a lot of white
  margin, so `BrandLogo.vue` + `.brand-logo` in `app/assets/css/vintage.css` choose which part of
  the artboard is visible using CSS only, scaled uniformly. The badge is shown the same way, hiding
  the 1px grey frame on the artboard edge.
- The badge is also the favicon and touch icon.

Palette, taken from the logo (`app/assets/css/main.css`):

| Role | Hex |
| --- | --- |
| Forest green (badge lettering) | `#014d2e` |
| Forest green (wordmark) | `#025b3d` |
| Clay red (pot) | `#a73515` |
| Sand (outer border) | `#e8ca95` |
| Brown (inner border) | `#603813` |
| Saffron (pot rim stripe) | `#edbe5a` |
| Cream (badge background) | `#fdfaed` |

Other steps in the scale are lighter or darker shades of those hues.

## Structure

```
app/
  app.vue                    shell: skip link, header, <NuxtPage>, footer, JSON-LD
  pages/                     index, about, contact, request-a-quote
  components/                SiteHeader (hamburger menu), SiteFooter, BrandLogo, FoodImage,
                             FormField, PageHero, SectionHeading, OrnamentDivider
  composables/useFormSubmit  validation + submit + focus management
  data/site.ts, menu.ts      address, phone, links, dishes
  assets/css/main.css        Tailwind import + brand theme tokens
  assets/css/vintage.css     hand-written component and texture styles
shared/validation.ts         form rules used by both browser and server
server/api/                  contact.post.ts, quote.post.ts
server/utils/deliver.ts      webhook / console delivery
```

## Business details used

- Dining District, Patancheru Industrial Area, Hyderabad, Telangana 502319, India
- Phone: 086394 08555 (links use `tel:+918639408555`)
- https://diningdistrict.in/ (opens in a new tab with `rel="noopener noreferrer"`)

## Fonts

Fraunces (headings) and Nunito Sans (body) are loaded from Google Fonts in `nuxt.config.ts`,
with system serif / sans fallbacks. To self-host, add `@nuxt/fonts` or download the files into `public/`.
