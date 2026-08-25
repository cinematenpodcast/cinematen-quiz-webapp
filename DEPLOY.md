# Deploy — Cinematen Quiz

Self-hosted Docker Compose stack op eigen VPS. Domein: `quiz.cinematen.be`.

## Vereisten (handmatig, buiten scope van deze repo)

1. VPS met Docker + Docker Compose v2 geïnstalleerd.
2. DNS A/AAAA-record: `quiz.cinematen.be` → VPS IP.
3. Poorten 80 + 443 open (Caddy regelt TLS via Let's Encrypt automatisch).

## Deploy stappen

```bash
# op de VPS, in de gekloonde repo
cd vendor/self-hosted

# genereert .env met FUIZ_DOMAIN/ORIGIN/PUBLIC_*/CORS voor quiz.cinematen.be
./generate_config.sh quiz.cinematen.be

# compose.override.yml (al aanwezig, gecommit) bouwt web-service uit
# ../website i.p.v. het upstream registry.gitlab.com/fuiz/website image
docker compose up -d --build
```

`compose.override.yml` wordt door `docker compose` automatisch naast `compose.yml`
ingeladen (standaard override-bestand) — geen `-f` vlag nodig.

## Wat er draait

| Service | Bron | Wijziging |
|---|---|---|
| `caddy` | upstream image | ongewijzigd, reverse proxy + TLS |
| `web` | **lokale build** uit `vendor/website` | Cinematen-restyle (dit project) |
| `game-server` | upstream `fuiz-server` image | ongewijzigd, alleen env/CORS |
| `corkboard` | upstream `corkboard-server` image | ongewijzigd, alleen env/CORS |

## Na deploy — verificatie

- `https://quiz.cinematen.be` laadt, dark-only, Cinematen-kleuren/logo/font
- Quiz aanmaken (`/create`) en hosten (`/host/<code>`) werkt
- Spelen via `/play` met gamecode werkt, WebSocket-verbinding via `/api/*`
- Footer-link "Broncode (AGPLv3)" wijst naar
  `https://github.com/cinematenpodcast/cinematen-quiz-webapp` (AGPL-verplichting)

## Rebuild na code-wijzigingen

```bash
cd vendor/self-hosted
docker compose up -d --build web
```

## Niet gedekt door deze repo (handmatige taken)

- VPS provisioning / firewall
- DNS-configuratie
- Publieke bereikbaarheid van deze GitHub-repo bevestigen (AGPL §13 —
  repo `cinematenpodcast/cinematen-quiz-webapp` moet publiek zijn, niet privé)
- Juridische review van `/privacy` en `/terms` (machinaal aangepast, bevat
  redactienotitie — zie QA-rapport)
