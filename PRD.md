# PRD: Cinematen Quiz Webapp
**Datum:** 2026-08-25
**Status:** Draft

## 0. Orchestratie Metadata
> Deze sectie is bedoeld voor de multi-agent-coordinator — vul altijd in.

- **Project type:** Conversie van bestaand product (fork + restyle van open-source webapp)
- **Platformen:** Web (desktop + mobile browser, responsive)
- **Primaire tech stack:** SvelteKit 5 (frontend, fork van fuiz/website), Rust/actix-web (game-backend, ongewijzigd), Docker Compose (deploy), SQLite (persistentie)
- **Specialistische domeinen nodig:** UI/design system implementatie, frontend restyle, DevOps/Docker deploy, licentie-compliance (AGPL)
- **Bestaande systemen:** Fuiz open-source quiz platform (self-hosted, 3 repos: self-hosted, game-backend, website), Cinematen Design System (`Cinematen_Desing_system/` in deze repo), eigen VPS van de klant
- **Complexiteit:** medium

## 1. Project Overzicht
Self-hosted, volledig Cinematen-gebrande live quiz webapp gebouwd op een geforkte en geherstylede Fuiz SvelteKit-frontend, draaiend op de ongewijzigde Fuiz game-engine (Rust). Deployment via Docker Compose op de eigen VPS van Cinematen, met het Cinematic Noir / Obsidian Blue design system en zonder zichtbare Fuiz-branding.

## 2. Doelgroep
- **Eindgebruikers (spelers):** Cinematen's publiek — Vlaams/Nederlands film- en serieliefhebbers, wisselend technisch niveau, spelen via smartphone/browser tijdens live quiz-events.
- **Host/beheerder:** Cinematen content-team, maakt en host quizzes via de webapp.
- **Schaal:** max. 100 spelers per quiz-sessie — verkeer/load is geen aandachtspunt.

## 3. Kernfuncties — MVP
| Feature | Beschrijving | Prioriteit | Domein |
|---------|-------------|-----------|--------|
| Kleuren-rebrand | Vervang Fuiz CSS custom properties door Cinematen Obsidian Blue/periwinkle tokens (canonical systeem, geen legacy accent) | Hoog | frontend/ui-designer |
| Typografie-rebrand | Rubik (body/UI) + Rubik Mono One (enkel logo/wordmark) i.p.v. Fuiz default fonts | Hoog | frontend/ui-designer |
| Logo & branding-assets | Fuiz logo vervangen door Cinematen logo (horizontale witte variant), favicon, page title, OG meta | Hoog | frontend/ui-designer |
| Dark-only mode | Light theme + toggle volledig verwijderen (Cinematen is dark-only) | Hoog | frontend |
| Component-restyle | Answer-button 8-kleuren-palet, Header, Button, Badge, Chip herstylen naar Cinematen radii/spacing/hover-states | Hoog | frontend/ui-designer |
| i18n vereenvoudiging | Paraglide-js multi-language setup strippen, Dutch-only hardcoded strings, copy in Cinematen tone-of-voice | Midden | frontend |
| Docker deploy op VPS | `self-hosted` compose-stack (Caddy + game-server + corkboard + custom web-image) draaien op eigen VPS, domein quiz.cinematen.be | Hoog | backend/devops (fullstack-developer) |
| AGPL source-availability | Publieke repo met gewijzigde website-source, gelinkt vanuit de app (bv. footer-link) | Midden | fullstack-developer |

## 4. Tech Stack
- **Frontend:** SvelteKit 5 (runes), Bun, Vite, scoped CSS met custom properties (geen Tailwind/component-lib) — geforkt/gevendord van `fuiz/website`
- **Backend/engine:** Rust (actix-web + actix-ws) — `fuiz-server` (game-engine) + `corkboard-server` (media-upload) — **ongewijzigd**, alleen config/env
- **Database:** SQLite (`bun:sqlite`) voor quiz-authoring data; live gamestate in-memory in game-backend
- **Reverse proxy:** Caddy (uit `self-hosted` repo, ongewijzigd)
- **Hosting:** eigen VPS van Cinematen, Docker Compose
- **Domein:** quiz.cinematen.be
- **Fonts:** Rubik (variable, 300-900) + Rubik Mono One, self-hosted via Fontsource
- **Icons:** Google Material Symbols Outlined

## 5. Architectuur Overzicht
Docker Compose stack met 4 services (uit `self-hosted` repo):
1. **caddy** — reverse proxy, path-routing (`/api/*` → game-server, `/corkboard/*` → corkboard, overig → web)
2. **web** — custom Docker image `fuiz-web:cinematen`, gebouwd uit geherstylede `website`-fork (source vendored, geen submodule)
3. **game-server** — `fuiz-server` Rust binary, WebSocket game-protocol, ongewijzigd
4. **corkboard** — media-upload service, ongewijzigd

Persistente volumes: `web-data` (SQLite), `corkboard-data`, `caddy-data/config`. Alles draait op de VPS achter quiz.cinematen.be met TLS via Caddy.

## 6. Succescriteria
- [ ] Quiz-app volledig functioneel op quiz.cinematen.be, host kan quiz aanmaken en spelers kunnen joinen/spelen
- [ ] Geen zichtbare Fuiz-branding (naam, logo, kleuren) nergens in de UI
- [ ] Alle kleuren/fonts/spacing matchen Cinematen Cinematic Noir design system (canonical tokens)
- [ ] Dark-mode-only, geen theme-toggle meer aanwezig
- [ ] UI-copy volledig Nederlands, geen taalkeuze-UI meer
- [ ] Stack draait stabiel via Docker Compose op VPS, 100 gelijktijdige spelers zonder problemen
- [ ] Gewijzigde source publiek beschikbaar (AGPL-compliance), bereikbaar vanuit de app

## 7. Constraints & Risico's
| Constraint/Risico | Impact | Mitigatie |
|-------------------|--------|-----------|
| AGPL-3.0 verplicht publieke source-availability | Juridisch, laag risico bij naleving | Publieke repo aanmaken, footer-link naar source toevoegen |
| Website-repo vendored (geen upstream-link) | Toekomstige Fuiz-updates moeten manueel gemerged worden | Bewuste keuze klant — documenteer dit in README voor toekomstig onderhoud |
| Twee kleursystemen in design system-bron (canonical vs. legacy) | Verwarring bij implementatie | Canonical Obsidian Blue tokens zijn de enige bron van waarheid — legacy niet gebruiken |
| Font-mismatch in oudere spec (Inter vs Rubik) | Verwarring bij implementatie | Rubik + Rubik Mono One zijn bevestigd correct — oudere Inter-vermelding negeren |
| i18n-strip kan Fuiz-updates lastiger mergen | Laag, want repo is vendored (geen upstream-sync sowieso) | Niet van toepassing gezien vendoring-keuze |
| VPS-specifieke setup (OS, Docker-versie, bestaande services) onbekend | Kan deploy-obstakels geven | Backend/fullstack-developer moet VPS-omgeving eerst inventariseren |

## 8. Out of Scope (MVP)
- Functionele wijzigingen aan quiz-engine (nieuwe vraagtypes, gameplay-features)
- Multi-language support (enkel Nederlands)
- Light theme / theme-toggle
- Cloud-hosting (Vercel/Cloudflare) — VPS-only
- Git submodule/subtree-koppeling met upstream Fuiz — source is vendored (kopie)
- Legacy Cinematen-kleursysteem (blauw/paars/geel accent)

## 9. Aandachtspunten voor het team
- **Design system bron:** `Cinematen_Desing_system/` in deze repo — readme, `tokens/colors.css`, `tokens/typography.css`, fonts, component-manifest.
- **Exacte edit-points in `website`-fork** (zie CONTEXT.md §2.3 voor volledige tabel):
  - Kleurtokens: `src/routes/+layout.svelte` `<style>` block
  - Answer-button palet: `src/lib/clientOnly.ts` (`paletteClass()`)
  - Fonts: `src/routes/+layout.svelte` imports + `:global(body)`
  - Dark/light toggle: `src/lib/ui/theme.svelte.ts` + `src/app.html` — te verwijderen
  - Logo: `src/lib/media/Logo.svelte` (11:4 aspect ratio wrapper), gebruikt in `src/lib/layout/Header.svelte`
  - Favicon/titel/OG: `src/app.html`, `static/favicon.ico`/`favicon.svg`, `static/image.png`
- **Logo-assets:** gebruik witte/horizontale variant (`LogoCleanSmaller_white-horizontal.png`) — dark-mode-only app.
- **Brand voice:** Nederlands/Vlaams, enthousiaste journalistieke toon, sentence case body, uppercase+letterspacing voor labels/badges, geen emoji (zie CONTEXT.md §3.1).
- **Canonical kleurtokens:** volledige lijst in CONTEXT.md §3.2 (`--surface*`, `--primary*`, `--on-surface*` etc.) — direct overnemen uit `tokens/colors.css`.
- **Deploy:** `self-hosted` repo se `generate_config.sh <domein>` + `.env` met `FUIZ_DOMAIN=quiz.cinematen.be`, `ORIGIN=https://quiz.cinematen.be`, etc. (zie CONTEXT.md §2.1 voor volledige env var-lijst). Custom image via `compose.override.yml` (`web.image: fuiz-web:cinematen`).
- **Git:** assistant handelt alle git add/commit/push af naar `github.com/cinematenpodcast/cinematen-quiz-webapp.git`.
- **AGPL:** publieke repo met gewijzigde source moet bereikbaar zijn voor eindgebruikers van de service — footer-link of vergelijkbaar toevoegen.
