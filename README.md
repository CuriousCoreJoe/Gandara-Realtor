# Angelina Gándara — El Paso Real Estate Website

A production-ready, conversion-first, fully bilingual (English + Spanish) marketing
website for Angelina Gándara, a licensed El Paso, TX real estate sales agent. This
site is the "front door" of a GoHighLevel (GHL) marketing system: every form, chat,
click-to-call, and booking is designed to feed GHL.

> The capture layer is built. The GHL vendor wires authentication/embeds later — all
> embed slots are clearly marked placeholders (see [GHL embeds](#go-high-level-ghl-embeds)).

---

## Stack

| Concern            | Choice                                                              |
| ------------------ | ------------------------------------------------------------------- |
| Package manager    | [Bun](https://bun.sh) (`bun install`, `bun run dev`, `bun run build`) |
| Framework          | Next.js (App Router), TypeScript **strict**                          |
| Deploy             | Netlify, **static export** (`output: 'export'`, no Node server)      |
| Styling            | Tailwind CSS v4 (design tokens in `src/app/globals.css`)             |
| Icons              | `lucide-react` (inline SVG, stroke-based — no emoji icons)           |
| i18n               | `next-intl` with `messages/en.json` + `messages/es.json`             |
| Fonts              | Fraunces (display serif) + Inter (body), via `next/font/google`      |

## Commands

```bash
bun install         # install dependencies (one command)
bun run dev         # start the dev server
bun run build       # typecheck + build + static export to ./out
bun run lint        # ESLint (flat config)
bun run typecheck   # tsc --noEmit
bun run netlify:dev # serve ./out with Netlify redirects/headers (see below)
```

---

## Project structure

```
messages/                 # translation files (THE source of all visible text)
  en.json
  es.json
netlify.toml              # publish dir, CSP-lite, redirects
src/
  app/
    layout.tsx            # root passthrough (html/body live in [locale]/layout.tsx)
    page.tsx              # redirects / → /en
    sitemap.ts            # bilingual sitemap (hreflang alternates)
    robots.ts
    [locale]/
      layout.tsx          # <html lang>, fonts (no client provider needed)
      page.tsx            # Home (both locales)
      about/ sobre/       # English + Spanish slugs
      buyers/ compradores/
      sellers/ vendedores/
      listings/ propiedades/
      contact/ contacto/
      book/ reservar/
      neighborhoods/ + 4 guides (same slug both locales)
      legal/ privacy|terms|trec (+ Spanish privacidad|terminos)
  components/
    layout/               # header, footer, sticky CTA, mobile menu
    pages/                # one content component per page type
    ghl/                  # GhlForm / GhlChat / GhlCalendar embed slots
    ui/                   # button, container, placeholder image, etc.
  i18n/                   # routing.ts + request.ts
  lib/                    # site constants, routes, metadata, JSON-LD, helpers
```

---

## Internationalization

### Routing

- `localePrefix: 'always'` (required for static export — no middleware runs).
- **English** lives at `/en/...`, **Spanish** at `/es/...`.
- `/` 301-redirects to `/en/` (Netlify) and also self-redirects via `app/page.tsx`.
- A few Spanish pages use translated slugs (`/es/sobre`, `/es/compradores`,
  `/es/vendedores`, `/es/propiedades`, `/es/contacto`, `/es/reservar`,
  `/es/legal/privacidad`, `/es/legal/terminos`). Neighborhood guides keep the same
  slug in both locales.
- Every page emits `<html lang>`, a canonical URL, and full `hreflang`
  alternates (`en`, `es`, `x-default`).

### Adding / editing translated strings

1. Open `messages/en.json` and `messages/es.json`.
2. Add or edit a key **in both files** (they must stay in sync — same keys, same
   nesting). Spanish must be a faithful, complete translation (not a teaser).
3. Reference the string in a component via `getTranslations` (server) or
   `useTranslations` (client), e.g.:

   ```ts
   const t = await getTranslations('home');
   <h1>{t('heroTitle')}</h1>
   ```

TypeScript is augmented with `Messages: typeof en.json` (`src/global.d.ts`), so a
wrong key or namespace fails the build. To verify key parity manually:

```bash
bun -e "
const e=require('./messages/en.json'), s=require('./messages/es.json');
const k=o=>Object.keys(o).flatMap(x=>typeof o[x]==='object'?k(o[x]).map(y=>x+'.'+y):x);
console.log('missing in es:', k(e).filter(x=>!k(s).includes(x)));
console.log('missing in en:', k(s).filter(x=>!k(e).includes(x)));
"
```

**Keep identifiers out of the message files.** The phone number, email, license
number, broker name, and Instagram URL are proper nouns / fixed facts and live in
`src/lib/site.ts` (identical in both languages). Only real sentences/labels go in
the JSON files.

---

## Brand palette & layout

Brand colors are defined once in `src/app/globals.css` under `@theme` (Tailwind v4):

| Token              | Value     | Usage                                      |
| ------------------ | --------- | ------------------------------------------ |
| `copyblue`         | `#005779` | primary brand / headers / buttons          |
| `copyblue-dark`    | `#00445e` | button/link hover                          |
| `yellow`           | `#ffb353` | accent / highlights / CTA emphasis         |
| `gray-soft`        | `#efeff6` | backgrounds / borders / soft fills         |
| `ink`              | `#0f2733` | body text / headings (dark navy)           |
| `muted`            | `#4f626c` | muted body text                            |

To change the palette, edit the `--color-*` variables in `@theme` — every component
uses these tokens, so the whole site updates. The theme also derives typography
(`--font-sans`, `--font-display`) from `next/font` CSS variables wired in
`src/app/[locale]/layout.tsx`.

Contrast notes (WCAG AA): white text is only ever used on `copyblue`/`ink`; dark
`ink` text is used on `yellow` and light surfaces. Never put white text on yellow.

---

## Go HighLevel (GHL) embeds

Four capture points are wired as clearly-marked placeholder components in
`src/components/ghl/ghl-embeds.tsx`:

| Slot      | Component      | Where it's used                        |
| --------- | -------------- | -------------------------------------- |
| Form      | `<GhlForm>`    | Home, Buyers, Sellers, Contact         |
| Chat      | `<GhlChat>`    | Contact                                |
| Calendar  | `<GhlCalendar>`| Contact + Book (`/en/book`, `/es/reservar`) |

Each renders a dashed placeholder with an HTML comment showing exactly where the
snippet/iframe goes, e.g.:

```html
<!-- GHL: paste form embed here (script + iframe). -->
```

To wire GHL, replace the placeholder `<div id="ghl-...-embed">` content with the
vendor's snippet, e.g.:

```html
<script src="https://link.<account>.msgsndr.com/js/form_embed.js"></script>
<iframe src="https://link.<account>.msgsndr.com/widget/form/<formId>" ...></iframe>
```

Then add the client's GHL origins to the Content-Security-Policy in
`netlify.toml` (`script-src`, `frame-src`, `form-action`) — common origins are
already whitelisted. There is **no backend or custom form handler**; capture is
100% GHL.

---

## Deploying to Netlify

The repo is configured for a zero-config Netlify static deploy:

- `netlify.toml` sets the build command (`bun install --frozen-lockfile && bun run build`)
  and publish dir (`out`), plus a CSP-lite header and `/` → `/en/` redirect.

```bash
# Option A — Netlify Git integration: point Netlify at the repo, done.
# Option B — Netlify CLI:
bun run build
netlify deploy --prod --dir=out
```

### Local dev with Netlify

To preview the static export locally **with production-accurate redirects and
headers**, build then run the Netlify dev server:

```bash
bun install
bun run build
bun run netlify:dev
# → http://localhost:8888
```

`netlify.toml` sets `[dev] framework = "#static"` and `publish = "out"`, so Netlify
Dev serves `./out` as a plain static file server and does **not** try to boot a
Next.js dev server. The `netlify:dev` script deliberately invokes the CLI via
`node` (`node node_modules/netlify-cli/bin/run.js dev`) rather than `bun`, because
`netlify-cli` is a heavy Node CLI whose HTTP proxy mis-validates the CSP header
under Bun's runtime and crashes. Running it under Node is required.

Redirects behave exactly like production under this server: `GET /` → `301 /en/`,
`GET /en/` → `200`, `GET /es/` → `200`, deep routes like `/en/sellers` and
`/es/vendedores` → `200`, and one-locale-only routes (`/en/compradores`,
`/es/about`) → `404`. No Netlify login is required for local dev.

---

## Launch checklist

Before going live:

1. **Set the real domain** — `SITE_URL` in `src/lib/site.ts` (or the
   `NEXT_PUBLIC_SITE_URL` env var). It drives canonical, hreflang, Open Graph,
   JSON-LD, and sitemap URLs. A build-time guard in `next.config.ts` prints a loud
   warning whenever the placeholder domain is still in use — do not deploy while
   that warning fires.
2. **Wire the GHL embeds** (form / chat / calendar) — see [GHL embeds](#go-high-level-ghl-embeds),
   then add the client's GHL origins to the CSP in `netlify.toml`.
3. **Drop in real assets** — headshot + property photos replace the gray-gradient
   placeholders (no stock photos).
4. **Confirm broker inputs** — the broker name (Home Pros Real Estate Group LLC) is
   set from the provided facts; replace if the broker provides a different name.
5. **Confirm the IABS URL** stays current — it points at the TREC IABS form *page*
   (not a versioned PDF), so it tracks the current form automatically.

---

## SEO & structured data

- Per-page metadata: `title`, `description`, canonical, `hreflang` (`en`/`es`/`x-default`),
  Open Graph, and Twitter cards (see `src/lib/metadata.ts`).
- JSON-LD: `RealEstateAgent`/`LocalBusiness` on Home, `Service` (Free Home Valuation)
  on Sellers (`src/lib/jsonld.ts`).
- `sitemap.xml` and `robots.txt` are generated for **both** locales with hreflang
  alternates.

## TREC compliance

- Broker **Home Pros Real Estate Group LLC** appears on every page (footer trust bar)
  at a size at least half of the largest contact info (the phone number).
- License line `Angelina Gándara · Licensed Real Estate Agent · TREC #844593-SA`.
- IABS link (TREC Information About Brokerage Services) on the homepage and contact
  page, plus a dedicated `/en/legal/trec` (and `/es/legal/trec`) page.
- Fair Housing statement in the footer.
- REALTORS® non-affiliation disclaimer in the footer and TREC page.

---

## Phase 2 (planned — not yet built)

- **IDX / MLS live search** — listings are currently placeholder cards; a live MLS
  feed replaces them.
- **Blog** — market updates and neighborhood stories.
- **PCS relocation hub** — dedicated content for military families relocating to
  Fort Bliss.

---

## Notes & assumptions

- Reviews/testimonials are clearly-framed placeholders (no fabricated reviews).
- No real listings, no real neighborhood market data (marked "Data verified in
  Phase 2"), no IDX feed, no stock photos, no external image CDNs — gray-gradient
  placeholder images with `aria-label`s stand in for the headshot/property photos.
- Lighthouse (mobile, simulated throttling) with production-like gzip serving:
  Performance **90–93** and Accessibility **100** on Home/Sellers/Contact. The
  local `netlify dev` static server does **not** gzip assets, so scores measured
  against it will read a few points lower than Netlify production (which Brotli
  compresses). HTML is ~66 KB (well under the 100 KB target, images excluded); the
  remaining weight is the Next.js/React client runtime, which is inherent to the
  mandated App Router stack.
