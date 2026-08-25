# Cinematen → Fuiz Token Mapping

Bron: `Cinematen_Desing_system/tokens/{colors,typography,spacing}.css` (canonical periwinkle/Obsidian Blue systeem).
Doel: `vendor/website/src/routes/+layout.svelte` `<style>` block.

## Kleurtokens (directe overname canonical)

| Fuiz token | Canonical bron | Waarde |
|---|---|---|
| `--surface` | `--surface` | `#0d1730` |
| `--on-surface` | `--on-surface` | `#e2e2e8` |
| `--surface-variant` | `--surface-variant` | `#333539` |
| `--on-surface-variant` | `--on-surface-variant` | `#c2c6d6` |
| `--outline` | `--outline` | `#8c909f` |
| `--primary` | `--primary` | `#adc6ff` |
| `--on-primary` | `--on-primary` | `#002e6a` |
| `--primary-container` | `--primary-container` | `#4d8eff` |
| `--on-primary-container` | `--on-primary-container` | `#00285d` |
| `--secondary` | `--secondary` | `#c6c6c7` |
| `--on-secondary` | `--on-secondary` | `#2f3131` |
| `--secondary-container` | `--secondary-container` | `#454747` |
| `--on-secondary-container` | `--on-secondary-container` | `#b4b5b5` |
| `--tertiary` | `--tertiary` | `#c0c7d3` |
| `--on-tertiary` | `--on-tertiary` | `#2a313b` |
| `--tertiary-container` | `--tertiary-container` | `#8a919d` |
| `--on-tertiary-container` | `--on-tertiary-container` | `#232a34` |

Dark-only: `:root` en `[data-theme='dark']` krijgen dezelfde waarden. `[data-theme='light']` block + `@media (prefers-color-scheme: dark)` duplicatie → verwijderd (zie theme-toggle verwijdering).

## Fixed light/dark (niet-theme-responsive, tekst op gekleurde knoppen)

- `--palette-light` (tekst op donkere/gekleurde bg) → `#e2e2e8` (canonical `--on-surface`)
- `--palette-dark` (tekst op lichte bg, zeldzaam) → `#0a1128` (canonical `--surface-container-lowest`)

## Correct/incorrect (Okabe-Ito colorblind-safe) — ONGEWIJZIGD

`--correct:#0072b2` / `--incorrect:#d55e00` blijven staan. Geen Cinematen-equivalent gespecificeerd; dit zijn functionele colorblind-veilige kleuren (blauw/vermiljoen), losstaand van merkidentiteit. Wijzigen = regressie in toegankelijkheid. Behouden.

## Answer-button 8-kleuren palet (`--btn-bg-0..7` / `--btn-deep-0..7`)

Canonical tokens definiëren geen 8-slot antwoordpalet. Functionele eis: 8 maximaal onderscheidbare kleuren nodig onder tijdsdruk (gameplay-UX), niet puur esthetisch. Ontwerpbeslissing: spectrum-spreiding behouden (usability-vereiste), maar getemperd naar donkerder/verzadigder "Cinematic Noir"-stemming i.p.v. Fuiz' warme/felle origineel. Geen legacy-accentkleuren (`--accent-blue/purple/yellow`) gebruikt — puur nieuwe HSL-afgeleiden passend bij Obsidian Blue mood.

| Slot | Hue | bg (HSL) | deep (HSL) |
|---|---|---|---|
| 0 | cinematisch rood | `hsl(355,70%,40%)` | `hsl(355,70%,28%)` |
| 1 | periwinkle-blauw (primary-aligned) | `hsl(221,70%,40%)` | `hsl(221,70%,28%)` |
| 2 | diepe teal-groen | `hsl(165,55%,28%)` | `hsl(165,55%,18%)` |
| 3 | amber | `hsl(30,70%,42%)` | `hsl(30,70%,30%)` |
| 4 | violet | `hsl(280,55%,38%)` | `hsl(280,55%,26%)` |
| 5 | cyaan-blauw | `hsl(195,60%,32%)` | `hsl(195,60%,22%)` |
| 6 | olijf (gedesatureerd) | `hsl(90,45%,35%)` | `hsl(90,45%,24%)` |
| 7 | neutraal antraciet | `hsl(0,0%,22%)` | `hsl(0,0%,14%)` |

## Typografie

- `--font-sans: 'Rubik', sans-serif` — alle UI/body/headlines
- `--font-display: 'Rubik Mono One', 'Rubik', sans-serif` — **uitsluitend logo/wordmark**, nooit headers
- `body { font-family: var(--font-sans); font-size: 16px; }` (canonical body-md), koppen zwaar (800) via Rubik
- Fontsource-pakketten: `@fontsource-variable/rubik` + `@fontsource/rubik-mono-one` (self-hosted, geen Google Fonts CDN)
- Verwijderen: Poppins, Atkinson Hyperlegible Next, Noto Sans, Noto Sans Arabic imports

## Component edit-points (ongewijzigd t.o.v. PRD §8)

- Kleurtokens: `src/routes/+layout.svelte` `<style>`
- Antwoordpalet: zelfde bestand, `.palette-0..7` classes (waarden hierboven)
- Fonts: `src/routes/+layout.svelte` imports + `:global(body)`
- Theme-toggle: `src/lib/ui/theme.svelte.ts` + `src/app.html` inline script — VERWIJDEREN, `data-theme='dark'` hardcoded
- Logo: `src/lib/media/Logo.svelte` → `LogoCleanSmaller_white-horizontal.png`
- Favicon/titel/OG: `src/app.html`, `static/favicon.ico`/`favicon.svg`, `static/image.png`
