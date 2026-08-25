# Cinematen Quiz Webapp — Project Context

## 1. What we're building

We are **self-hosting Fuiz** (open-source live-quiz platform, AGPL-3.0-or-later) and
**fully restyling its frontend** to match the **Cinematen** brand
("Jouw dagelijkse dosis film- en seriekenners" — a Dutch/Flemish film & TV news,
review, and podcast site).

End result: an audience-facing live quiz product ("Cinematen Quiz") that runs on
Fuiz's game engine but looks and feels like a Cinematen product — same colors,
type, logo, tone of voice, no visible trace of upstream Fuiz branding.

> ⚠️ **Legal note:** Fuiz is licensed AGPL-3.0-or-later. Self-hosting a modified
> version and serving it to an audience over a network triggers AGPL §13 — the
> modified source must be made available to users of the service. Confirm this
> is acceptable / plan for public source availability before going live.

---

## 2. Fuiz architecture (upstream)

Fuiz is **3 separate repos**, not 2 — `game-backend` is a headless API, the actual
UI lives in a third repo (`website`) that isn't in the org's most-advertised list.
GitLab is the canonical source; GitHub repos are mirrors (may lag).

| Repo | Canonical URL | Role |
|---|---|---|
| `self-hosted` | `gitlab.com/fuiz/self-hosted` (mirror: `github.com/fuiz/self-hosted`) | Docker Compose + Caddy reverse proxy that wires the other services together for self-hosting. Ops-only, no app code. |
| `game-backend` | `gitlab.com/fuiz/game-backend` (mirror: `github.com/fuiz/game-backend`) | Rust (actix-web) workspace: `fuiz-server` (real-time game engine/WebSocket protocol) + `corkboard-server` (image upload/storage). Headless — no UI. |
| `website` | `gitlab.com/fuiz/website` (mirror: `github.com/fuiz/website`) | **The frontend.** SvelteKit 5 app. **This is the repo we fork and restyle.** |

### 2.1 `self-hosted` — deployment glue

- Docker Compose services: `caddy`, `web` (→ `website` image), `game-server` (→ `fuiz-server`), `corkboard` (→ `corkboard-server`)
- Caddy path-routes a single domain: `/api/*` → game-server:8080, `/corkboard/*` → corkboard:5040, everything else → web:3000
- Persistent volumes: `web-data` (SQLite `fuiz.db` + `kv.db` + fallback media), `corkboard-data`, `caddy-data`, `caddy-config`
- No external Postgres/Redis needed — SQLite + filesystem is sufficient
- Setup: `generate_config.sh <domain>` → `.env`, then `docker compose up -d`
- To deploy a custom-branded frontend image: point `compose.override.yml`'s `web.image` at your own build, e.g.:
  ```yaml
  services:
    web:
      image: fuiz-web:cinematen
  ```
- Key env vars (`.env`):
  ```bash
  FUIZ_DOMAIN=quiz.cinematen.be
  FUIZ_PORT=80
  FUIZ_TLS_PORT=443
  ORIGIN=https://quiz.cinematen.be
  PUBLIC_DISPLAY_PLAY_URL=quiz.cinematen.be
  PUBLIC_PLAY_URL=https://quiz.cinematen.be
  PUBLIC_BACKEND_URL=https://quiz.cinematen.be/api
  PUBLIC_WS_URL=wss://quiz.cinematen.be/api
  PUBLIC_CORKBOARD_URL=https://quiz.cinematen.be/corkboard
  FUIZ_ALLOWED_ORIGINS=["https://quiz.cinematen.be"]
  CORKBOARD_ALLOWED_ORIGINS=["https://quiz.cinematen.be"]
  ```
- **No branding/theming env vars exist at the deployment layer.** Theming is compile-time, inside `website` source.

### 2.2 `game-backend` — engine (no UI, generally untouched by us)

- Rust, Cargo workspace, actix-web 4 + actix-ws, edition 2024
- `game/logic` — pure game-state logic (no I/O), compiles to native + WASM
- `game/server` → `fuiz-server` binary: routes `/hello`, `/add` (create game), `/alive/{game_id}`, `/watch/{game_id}/{watcher_id}` (WS upgrade — carries the entire live protocol: host actions, player answers, state sync, 5s heartbeat ping/pong)
- `corkboard/server` → `corkboard-server` binary: `/hello`, `/get/{media_id}`, `/thumbnail`, `/upload` (images auto-delete after 1h unless referenced by a saved quiz)
- Quiz question types: MultipleChoice, TypeAnswer, Order, Slider, Scale, Poll, Pin, FreeText, Brainstorm, InfoSlide
- Runtime-tunable via `FUIZ_SETTINGS_<SECTION>__<FIELD>` env vars (e.g. max players, default 1000; max slides, default 500) — no code changes needed for scale/format tweaks
- No branding hooks here at all — not relevant to the rebrand beyond config env vars

### 2.3 `website` — the frontend we fork and restyle

- **SvelteKit 5** (runes: `$state`, `$props`, `$effect`, `$derived`), **Bun** package manager, **Vite**
- Deploy adapter controlled by `ADAPTER` env var: `cloudflare` (upstream default) vs **`node`** (what we use for self-hosting, per the `self-hosted` repo's Dockerfile)
- Styling: **plain scoped CSS in `.svelte` files using CSS custom properties** — no Tailwind, no component library, no JSON design-token file. Token naming follows a Material-Design-3-ish scheme (`--surface`, `--on-surface`, `--primary`, `--primary-container`, etc.)
- Icons: `unplugin-icons` + Material Symbols + custom icon set
- Fonts: self-hosted via Fontsource packages
- i18n: `@inlang/paraglide-js`, message files in `messages/*.json` — heavily built out, decide early whether to keep for Cinematen (Dutch-first, so likely simplify/strip)
- Self-hosted persistence: SQLite (`bun:sqlite`) for quiz authoring data; live game state itself lives in `game-backend`'s memory, not here
- Dockerfile: multi-stage `oven/bun:alpine` build, `ADAPTER=node`, runs `bun /app/build/index.js` on port 3000

#### Exact theming/branding edit points (no config system — all source edits):

| What | File | Notes |
|---|---|---|
| Color tokens (dark/light) | `src/routes/+layout.svelte` `<style>` block | Full CSS custom-property set, defined for root + `[data-theme='light']` + `[data-theme='dark']`. This is the file to replace with Cinematen's `tokens/colors.css` values. |
| Answer-button 8-color palette | `src/lib/clientOnly.ts` (`paletteClass()`) + consuming button components | `--btn-bg-0..7` / `--btn-deep-0..7` pairs, applied via `.palette-*` classes |
| Fonts | `src/routes/+layout.svelte` (imports + `:global(body){font-family:...}`) | Swap Fontsource imports for Rubik / Rubik Mono One |
| Dark/light mode toggle logic | `src/lib/ui/theme.svelte.ts` + inline bootstrap script in `src/app.html` | Cinematen brand is dark-only (Obsidian Blue base) — consider simplifying/removing the light theme + toggle entirely |
| Logo | `src/lib/media/Logo.svelte` (imports `$lib/assets/logo.svg`), consumed by `src/lib/layout/Header.svelte` | Fixed 11:4 aspect-ratio wrapper. Swap for Cinematen logo assets (`Cinematen_logo_white.png` / `LogoCleanSmaller_white-horizontal.png`) |
| Favicon / page title / OG meta | `src/app.html` (`<title>`, `<meta>` tags), `static/favicon.ico` / `favicon.svg`, `static/image.png` | Direct find-and-replace: "Fuiz" → "Cinematen Quiz", update description + OG image |

Workflow: fork `website` → edit the files above → `docker build` → publish/point `web.image` in `self-hosted`'s compose override at the new image.

---

## 3. Cinematen Design System

Source: `Cinematen_Desing_system/` in this repo (readme, token CSS files, fonts,
component manifest — built from coded mockups, no live Figma/codebase link yet).

### 3.1 Brand voice & content rules

- **Language:** Dutch/Flemish (Belgian register). Second person in intros, third-person reportage in article bodies, "we" rarely (podcast/newsletter voice only). No first-person "I".
- **Tone:** Enthusiastic entertainment journalism written like real news — attributions ("Volgens Deadline…"), named sources, dates — not marketing fluff.
- **Headlines:** declarative, specific, name the property + stakes. Excerpts trim to 1–2 sentences ending in `…`.
- **Category labels:** short, uppercase, Dutch or English per convention (TV, Film, Podcast, REVIEW, BLOG, RETRO REVIEW, Streaming Nieuws, Exclusief).
- **Casing:** sentence case for headlines/body; uppercase + letter-spacing for labels/badges/nav/metadata.
- **No emoji anywhere.**
- **Ratings:** `x/10` score + read time ("9/10 · 5 min leestijd"). Dates `DD-MM-YYYY` or `DD.MM.YYYY` — pick one per surface, stay consistent.

For quiz UI copy: mirror this voice — Dutch-first, confident/enthusiastic but not gimmicky, sentence case for body copy, uppercase+letterspaced for labels/badges/categories, no emoji.

### 3.2 Color — "Cinematic Noir" / Obsidian Blue (canonical token system)

> Two color eras exist in the source material (canonical M3-style periwinkle vs.
> legacy homepage blue). **The canonical system below is what should drive the
> quiz rebrand** unless told otherwise.

Base surfaces — deep navy, never pure black, depth via *lightening* tonal layers
(not shadows):

```css
--surface-container-lowest:#0a1128;
--surface-dim:#0d1730;
--surface:#0d1730;
--surface-container-low:#142150;
--surface-container:#1a2a63;
--surface-container-high:#243677;
--surface-container-highest:#2f4390;
--surface-bright:#3a4fa0;
--surface-variant:#333539;
--outline:#8c909f;
--outline-variant:#424754;
--on-surface:#e2e2e8;          /* primary text — off-white, never pure white */
--on-surface-variant:#c2c6d6;  /* secondary/muted text */
```

Primary — soft periwinkle, marks active/selected state (filter pills, current
breadcrumb, links, focus rings):

```css
--primary:#adc6ff;
--on-primary:#002e6a;
--primary-container:#4d8eff;
--on-primary-container:#00285d;
```

Secondary/tertiary — neutral accents for chips/muted UI (`#c6c6c7` / `#c0c7d3`
families). Error — `#ffb4ab` on `#690005` / `#93000a` container.

Legacy homepage accent (kept distinct, not primary): `--accent-blue:#3b82f6`,
`--accent-purple:#9333ea`, `--accent-yellow:#eab308`. Platform brand chips:
`--brand-spotify:#1db954`, `--brand-apple:#b150e2`.

Full token file: `Cinematen_Desing_system/tokens/colors.css`.

### 3.3 Typography

Two real typefaces (no Inter, despite an older spec doc naming it — treat Rubik
as current per readme caveat #1):

- **Rubik Mono One** — reserved **strictly** for the CINEMATEN logo/wordmark.
  Never for headers/headlines.
- **Rubik** (variable, weights 300–900) — everything else, including headlines
  at weight **800** with tight tracking (`-0.01em` to `-0.02em`) for a "movie
  title card" feel without borrowing the logo face.

Font files: `Cinematen_Desing_system/assets/fonts/Rubik-VariableFont_wght.ttf`,
`RubikMonoOne-Regular.ttf`.

Scale (from `tokens/typography.css`):

```css
--font-display:'Rubik Mono One','Rubik',sans-serif;   /* logo only */
--font-sans:'Rubik',sans-serif;                          /* everything else */
--font-headline-weight:800;

--text-headline-display-size:64px; line 1.1; tracking -0.01em;
--text-headline-lg-size:40px;      line 1.2; tracking -0.005em;   /* 32px mobile */
--text-headline-md-size:24px;      line 1.3; weight 600;

--text-body-lg-size:18px;  line 1.6;
--text-body-md-size:16px;  line 1.6;

--text-label-caps-size:12px; line 1; tracking 0.1em; weight 700;
```

Body copy: loose line-height (1.6) for long-form dark-mode reading. Labels:
small, bold, uppercase, letter-spaced.

### 3.4 Spacing, radii, elevation

```css
--space-base:8px;              /* 8px base rhythm */
--space-gutter:24px;           /* grid gutter */
--space-margin-mobile:16px;
--space-margin-desktop:64px;
--container-max:1280px;        /* hero/carousel sections may bleed full-width */

--radius-sm:0.25rem;  --radius-md:0.5rem;  --radius-lg:0.75rem;
--radius-xl:1rem;     --radius-2xl:1.5rem; --radius-full:9999px;
```

- Cards/media: 12–16px radius. Buttons/inputs: 8–12px. Pills/chips/badges/
  pagination circles: fully rounded.
- **Elevation via tonal layers, not shadows** — elevated surfaces just lighten
  (`--elevation-0/1/2` map to surface-container steps). Shadows
  (`--shadow-card`, `--shadow-lg`) are used sparingly, only under a couple of
  homepage elements — not a systemic pattern.

### 3.5 Visual texture & motion

- No illustration, no decorative gradients/patterns/textures. Photography
  (movie stills, press photos) is the dominant visual material — full-bleed or
  edge-to-edge in rounded cards, 16:9 in grids. Only *functional* gradients:
  scrims behind text over photos.
- Borders: 1px hairline (`outline-variant` / `#ffffff1a`), brightens to primary
  on hover — this is the separation mechanism, not shadow.
- Glassmorphism: used exactly twice upstream (top nav, mini podcast-player
  card) — `backdrop-blur-xl` (~20px), ~80–90% surface opacity / 10% white tint.
  Not used on regular content cards.
- Animation: minimal/utilitarian. Opacity crossfades (~700ms), small
  image-scale on card hover (~1.05), `translateY(-2px)` lift on hover. No
  bounce/spring. Press state: subtle `scale(.97)` is a reasonable default
  (not directly observed in source, treat as inferred).
- Imagery vibe: cool, cinematic, desaturated-toward-blue — no warm grading, no
  grain/texture.

### 3.6 Iconography

- **Google Material Symbols Outlined** (variable weight/fill) for functional
  icons (calendar, clock, chevrons, play/volume, podcast glyph):
  `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1`
- A few inline SVG brand marks (X/Twitter, Instagram) for footer socials.
- No icon set has been bundled into the design system yet — link the Google
  Fonts stylesheet and use `<span class="material-symbols-outlined">name</span>`
  rather than inventing a different icon language.

### 3.7 Logo assets

Available in the design system source: `Cinematen_logo_dark.png`,
`Cinematen_logo_white.png`, `LogoCleanSmaller_white.png`,
`LogoCleanSmaller_white-horizontal.png`. Since the quiz UI is dark-mode-only
(Obsidian Blue base), the **white/light logo variants** are the ones to wire
into Fuiz's `Logo.svelte` (11:4 aspect ratio wrapper — the horizontal clean
variant is the closest fit).

### 3.8 Components already specified (for reference, not all relevant to a quiz app)

From `Cinematen_Desing_system/_ds_manifest.json` / readme — built from the
editorial site's coded mockups, so most map to article/homepage UI rather than
quiz gameplay. Reusable primitives for the quiz rebrand: **Button, Badge,
Chip** (core), **Header** (navigation, collapses to hamburger via container
query on mobile — no separate mobile component needed).

### 3.9 Open caveats from the design system author (resolve before/while building)

1. Font mismatch: an older spec doc says Inter; only Rubik + Rubik Mono One
   font files exist. Treated Rubik as current/correct — flag if Inter should
   actually be used somewhere.
2. Two unreconciled color systems (canonical periwinkle M3 tokens vs. legacy
   homepage blue/purple/yellow) — this context defaults to the **canonical
   periwinkle/Obsidian-Blue system** for the quiz app; confirm if the legacy
   accent should be used instead for any quiz surface (e.g. CTAs).
3. No real photography/logos beyond the 4 provided logo PNGs — quiz UI has no
   inherent need for photography (no articles/stills), so likely low impact,
   but any "powered by Cinematen" imagery should use real assets, not
   placeholders.
4. No icon set has been formally bundled/verified — Material Symbols is
   inferred from `<link>` tags, not a verified icon export.

---

## 4. Practical plan (high-level)

1. Fork `gitlab.com/fuiz/website` (canonical — not the GitHub mirror) into this
   project or as a submodule/subtree.
2. Replace `src/routes/+layout.svelte` color tokens with Cinematen's
   `tokens/colors.css` values; replace fonts with Rubik / Rubik Mono One;
   likely strip the light-theme/toggle since Cinematen is dark-only.
3. Swap logo (`Logo.svelte` → Cinematen white/horizontal mark), favicon, page
   title/OG meta (`app.html`, `static/`).
4. Restyle shared primitives (Button, Badge, Chip, Header) to match Cinematen
   tokens — radii, spacing, hover states, uppercase letter-spaced labels.
5. Decide on i18n scope (Dutch-first — may simplify Fuiz's existing
   `paraglide-js` setup rather than keep full multi-language support).
6. Build a custom Docker image for the rebranded `website`; wire it into
   `self-hosted`'s `compose.override.yml` (`web.image: fuiz-web:cinematen`).
7. Deploy self-hosted stack (Caddy + game-server + corkboard + rebranded web)
   behind Cinematen's domain; confirm env vars (`PUBLIC_*`, `FUIZ_DOMAIN`, CORS
   allow-lists).
8. Address AGPL-3.0 source-availability obligation for the modified,
   publicly-served app.

---

## 5. Repo conventions

- I (the assistant) handle all `git add` / `commit` / `push` to
  `https://github.com/cinematenpodcast/cinematen-quiz-webapp.git` — no manual
  git steps needed from the project owner.
