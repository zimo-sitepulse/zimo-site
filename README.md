# ZiMO-nettsiden

Norskspråklig Astro-nettside for SitePulse, med forside, fem produktsider, BREEAM-NOR-side og egen kontaktside. Publiseres på GitHub Pages på [zimo.no](https://zimo.no).

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
- `src/components/SitePulseHero.astro`: kompakt hero med tekst og illustrasjon ved siden av hverandre på desktop, og stablet på mobil.
- `src/components/SitePulseArchitecture.astro`: systemillustrasjonen i heroen. Delkomponenter for sensorer, forbindelser, systemnoder og ZiMO-symbol ligger i `src/components/architecture/`.
- `src/components/architecture/model.ts`: felles koblingsmodell, etiketter og egne koordinater for desktop og mobil.
- `src/styles/architecture.css` og `src/scripts/architecture.ts`: illustrasjonens uttrykk og korte intro ved innrulling. Uten JavaScript eller med redusert bevegelse vises den ferdig tegnet.
- `src/pages/breeam-nor/index.astro`: dokumentasjonsstøtte for Man 03 og Mat 05, med lenker til offisiell veiledning.
- `src/pages/kontakt/index.astro`: kontaktsiden. E-postlenker åpner besøkendes e-postprogram; nettstedet har ingen innsendingstjeneste.
- `src/layouts/Layout.astro`: felles toppmeny, hovedinnhold og bunntekst. `BaseLayout.astro` håndterer dokumentet og metadata.
- `src/scripts/navigation.ts`: mobilmeny og produkt-dropdown, inkludert tastaturhåndtering.
- `src/styles/global.css`: globale stiler og merkefargene `brand` og `brand-hover`.

## Publisering

Push til `main` starter `.github/workflows/deploy.yml`, som kontrollerer, bygger og publiserer til GitHub Pages. Ikke legg `dist/` i Git.
