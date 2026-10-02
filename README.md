# ZiMO-nettsiden

Norskspråklig Astro-nettside for SitePulse, med forside, fem produktsider og egen kontaktside. Publiseres på GitHub Pages på [zimo.no](https://zimo.no).

## Lokal utvikling

```sh
npm ci
npm run dev
```

Åpne adressen Astro skriver i terminalen (normalt `http://localhost:4321`).

## Kontroller og bygg

```sh
npm run format:check
npm run check
npm run build
```

`npm run format` formaterer kildekoden. Produksjonsbygget ligger i `dist/` og kan vises med `npm run preview`.

## Hvor endringer gjøres

- `src/data/site.ts`: kontaktinformasjon, felles lenker og sosiale medier.
- `src/data/products.ts`: produkttekster, bilder og status. Hvert produkt får en side via `src/pages/produkter/[slug].astro`.
- `src/pages/sitepulse/index.astro`: forsiden. Rotadressen videresender hit.
- `src/pages/kontakt/index.astro`: kontaktsiden. E-postlenker åpner besøkendes e-postprogram; nettstedet har ingen innsendingstjeneste.
- `src/layouts/Layout.astro`: felles toppmeny, hovedinnhold og bunntekst. `BaseLayout.astro` håndterer dokumentet og metadata.
- `src/scripts/navigation.ts`: mobilmeny og produkt-dropdown, inkludert tastaturhåndtering.
- `src/styles/global.css`: globale stiler og merkefargene `brand` og `brand-hover`.

## Publisering

Push til `main` starter `.github/workflows/deploy.yml`, som kontrollerer, bygger og publiserer til GitHub Pages. Ikke legg `dist/` i Git.
