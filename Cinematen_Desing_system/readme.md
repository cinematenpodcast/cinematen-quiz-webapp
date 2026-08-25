# Cinematen Design System

Design system for **Cinematen.be**, a Dutch/Flemish film & TV news and review site ("Jouw dagelijkse dosis film- en seriekenners" — your daily dose of film & series experts). Editorial content: breaking news, reviews, retrospectives, blogs, and a weekly podcast, covering blockbusters, streaming, and TV.

## Sources
Built from the assets attached to this project (no live Figma or codebase was linked — everything below was read directly from these files):
- `homepage.html` / `homepage.png` — coded homepage mockup (Tailwind, an earlier iteration with its own ad-hoc color scale).
- `overzicht_pagination.html` / `.png` — coded news-overview/listing page with filters and pagination.
- `artikel_detail.html` / `.png` — coded article detail page.
- `cinematic_design system.md` — a written "Cinematic Noir" design spec (colors, type scale, radii, spacing) matching the token values baked into the two most recent coded pages (overview + article).
- Logo files: `Cinematen_logo_dark.png`, `Cinematen_logo_white.png`, `LogoCleanSmaller_white.png`, `LogoCleanSmaller_white-horizontal.png`.
- Fonts: `Rubik-VariableFont_wght.ttf`, `RubikMonoOne-Regular.ttf`.

No design tool link or repository was provided — if one exists, attach it via the Import menu to sharpen anything flagged below as inferred.

## Components
`components/<group>/`
- **core/** — `Button`, `Badge`, `Chip`
- **cards/** — `ArticleCard` (default, overlay, and row/list variants)
- **navigation/** — `Header`, `Breadcrumb`, `Pagination`
- **media/** — `HeroCarousel`, `PodcastPlayer`, `PodcastCallout`
- **layout/** — `Footer` — brand/player column (accepts a text tagline or a widget like an embedded Spotify player) + link columns + legal row

This inventory was enumerated from the three coded mockups — every recurring UI unit on those pages has a component; nothing beyond that was invented.

## UI Kit
- `ui_kits/website/` — interactive click-through recreation of the desktop site (Homepage → Article → Overview), see its own README.
- `ui_kits/website-mobile/` — mobile counterpart (390px), reusing the same components — the shared `Header` collapses to a hamburger/drawer via a container query rather than needing a separate mobile component.

## Foundations
`guidelines/` — specimen cards for color, type, spacing/radii, and brand motifs (elevation, glass, scrim). Visible in the Design System tab under **Colors / Type / Spacing / Brand**.

## Index
- `styles.css` → `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`
- `assets/fonts/`, `assets/logos/`
- `components/` (see above)
- `ui_kits/website/`
- `guidelines/`
- `SKILL.md` — portable skill package for Claude Code / Desktop

---

## Content fundamentals

**Language & voice.** Copy is written in Dutch (Flemish/Belgian register — e.g. "Beleef de epische reis…", "Blijf op de hoogte…"). Second person is used for direct address in intros ("Blijf op de hoogte van de laatste nieuwtjes…") but bylines and article bodies are third-person reportage. No first-person "I"; "we" appears rarely and only in the podcast/newsletter voice ("we weten wel dat…", "onze podcast").

**Tone.** Enthusiastic entertainment journalism — confident, a little breathless about franchises ("Epic Sci-Fi Masterpiece", "een visueel spektakel"), but written like real news copy, not marketing fluff: attributions ("Volgens Deadline…"), named sources, dates, and plausible industry detail (showrunner departures, casting rumors) ground every piece.

**Headlines** are declarative and specific, often naming the property + the stakes ("God of War-serie moet op zoek naar een nieuwe Kratos"). Dek/excerpt copy trims to 1–2 sentences, always ending mid-thought with `…`.

**Category labels** are short, uppercase, in Dutch or English depending on convention (TV, Film, Podcast, REVIEW, BLOG, RETRO REVIEW, Streaming Nieuws, Exclusief).

**Casing.** Sentence case for headlines and body; uppercase + letter-spacing for labels, badges, nav categories, and metadata (dates, read time).

**Emoji.** None anywhere in the source material — do not introduce any.

**Numbers/ratings.** Reviews carry an `x/10` score plus a read-time estimate ("9/10 · 5 min leestijd"). Dates are `DD-MM-YYYY` or `DD.MM.YYYY` (both forms appear in source; pick one per surface and stay consistent — the overview/article pages use hyphens, the homepage uses dots).

---

## Visual foundations

**Two color eras — read before you build.** The three coded pages don't agree on their accent color, and both are preserved here rather than silently merged:
- `overzicht_pagination.html` and `artikel_detail.html` (both dated to the current day in their sample data) use a full Material-3-style token set — a soft periwinkle **primary** (`#adc6ff`) with a dark `on-primary`, plus the full surface/secondary/tertiary/error token ladder. This matches `cinematic_design system.md`'s YAML frontmatter exactly and is treated as the **canonical token system** (`tokens/colors.css`).
- `homepage.html` is an earlier pass using a simpler ad-hoc Tailwind scale (`brand-900/800/700`, a saturated `blue-500` `#3b82f6` for CTAs/links, plus purple/yellow badge colors). Its layout patterns (hero carousel, podcast banner, glass nav) are genuinely useful and are kept in `--accent-blue`/`--accent-purple`/`--accent-yellow` tokens and the Homepage UI-kit screen, styled with its own real values rather than forced onto the periwinkle primary.

Component defaults follow the M3 token system; `Button`'s `accent` variant and a couple of card badge kinds intentionally reach for the legacy blue/purple/yellow when recreating the Homepage screen. If you're picking one direction going forward, ask — see the caveats below.

**Color.** Base surface is a deep navy "Obsidian Blue" (`#0a1128`–`#0d1730`), not pure black — depth comes from *lightening* successive surface levels (`surface-container-low/​…/​highest`), not from shadows. Primary periwinkle (`#adc6ff`) marks active/selected state (filter pills, current breadcrumb crumb) with a dark navy `on-primary` for contrast; the more saturated `#3b82f6` blue does the same job on the legacy Homepage screen. Text is off-white (`#e2e2e8`) for primary content, a cooler grey-blue (`#c2c6d6`) for secondary/muted text — never pure white body copy.

**Type.** Two real typefaces were supplied (no Inter files, despite the spec doc naming Inter — see Caveats). **Rubik Mono One** is reserved strictly for the CINEMATEN logo/brand-mark — it must never be used for headers or headlines. **Rubik** (variable, 300–900) handles everything else, including headlines: display/headline text uses Rubik at weight 800 with tight tracking (`-0.01em` to `-0.02em`) to keep the "movie title card" impact without borrowing the logo's typeface. Body copy is comfortably loose (1.6 line-height) for long-form reading in the dark; labels/categories are small, bold, uppercase, and letter-spaced (`0.1em`).

**Spacing.** 8px base rhythm; 24px grid gutter; 16px mobile / 64px desktop side margins; content caps at 1280px, but hero/carousel sections bleed full-width.

**Backgrounds.** No illustration, no repeating pattern/texture, no gradient backgrounds as decoration — the only gradients are *functional* scrims: a bottom-to-top dark fade behind text over a photo, and a left-to-right fade behind hero copy. Photography (movie stills, press photos) is the dominant visual material — always full-bleed or edge-to-edge within a rounded card, always 16:9 in grids.

**Animation.** Minimal and utilitarian: opacity crossfades on the hero carousel (700ms), a small scale-up on card image hover, translateY(-2px) lift on overview cards. No bounce, no spring, no elaborate choreography.

**Hover / press states.** Hover: text shifts to primary/accent-blue, borders brighten from `outline-variant` to `primary`, card images scale ~1.05, buttons drop opacity slightly. No press/active states are visible in the source material — Button includes a subtle `scale(.97)` as a reasonable, minimal default; revisit if the real product does something different.

**Borders & "glow".** Cards use a 1px hairline border (`outline-variant`, or `#ffffff10` on darker surfaces) rather than shadow to separate from the background; it brightens to primary on hover. No inner glow was actually observed in the coded pages despite the spec doc mentioning one — treat that as aspirational, not implemented.

**Shadows.** Essentially unused for elevation (see tonal-layer note above); a couple of large soft shadows appear only under the homepage's podcast banner and blog cards (`shadow-2xl`/`shadow-lg`), not as a systemic pattern.

**Glassmorphism / blur.** Used exactly twice: the fixed top nav (`backdrop-blur-xl`, ~80% surface opacity) and the homepage mini podcast-player card. Not used on regular content cards.

**Corner radii.** Cards/media: 12–16px (`--radius-lg`/`--radius-xl`). Buttons/inputs: 8–12px (`--radius-md`/`--radius-lg`). Pills/chips/badges/pagination circles: fully rounded (`--radius-full`).

**Imagery color vibe.** Cool, cinematic, desaturated-toward-blue stills (desert/sci-fi tones in the sample hero images) — no warm color grading, no grain/texture effects applied by the UI itself.

---

## Iconography

Two icon sources appear in the coded pages: **Google Material Symbols Outlined** (loaded via Google Fonts, variable weight/fill axis — used for calendar, clock, chevrons, play/volume controls, podcast glyph) and a handful of **inline SVG** brand marks (X/Twitter, Instagram in the footer, star rating icon, chevron arrows). No icon PNGs, no emoji, no unicode-glyph icons anywhere in source.

No icon assets were bundled into this design system yet — component code currently uses plain text glyphs (‹ › ▶) as lightweight stand-ins where an icon was structurally required. **To match the real product exactly, link the Material Symbols Outlined stylesheet** (`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1`) in any consuming page and swap the placeholder glyphs for `<span class="material-symbols-outlined">calendar_today</span>` etc. — flagging this rather than guessing at a different icon set.

---

## Intentional additions
- **Chip** — the filter-pill pattern appears in the overview page's "Alles / Film nieuws / TV nieuws" row but wasn't factored out in source; split out as its own primitive since it's reused wherever filtering appears.
- **PodcastPlayer / PodcastCallout** — split into two components (compact mini-player vs. wide subscribe banner) because the source uses genuinely different layouts for the same underlying concept in different places.

## Caveats — please help me get this right
1. **Font mismatch:** `cinematic_design system.md` specifies **Inter** throughout, but the only font files attached are **Rubik** + **Rubik Mono One**. I built the whole type system on Rubik as the real, current brand voice and treated the doc's "Inter" as stale. Rubik Mono One (the logo's lettering) is reserved for the CINEMATEN mark only, per direct guidance — never for headers/headlines, which use Rubik at 800 weight. If Inter is actually still correct somewhere, say so and I'll split the system.
2. **Two color systems, not one:** see "Visual foundations" above — Homepage vs. Overview/Article disagree on accent color and I kept both rather than picking a winner. Tell me which one is current and I'll consolidate.
3. **No real photography/logos beyond the 4 provided PNGs:** every movie still, press photo, and partner logo in the UI kit is an `<image-slot>` placeholder — the mockups' images are Google-hosted stock/promotional photos I can't license into this project. Drop real assets in, or point me at a media library.
4. **No icon set was bundled** — see Iconography above; only Material Symbols was inferred from the `<link>` tags in source, not verified against an actual icon export.
5. No Figma file or codebase was linked to this project, so component behavior (exact hover/press timing, real click-through flows) is inferred from the two static screenshots + three static HTML mockups only.
