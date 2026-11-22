# arctic-ai-ry.github.io

[Arctic AI Association ry](https://arcai.fi) – yhdistyksen verkkosivut ([arcai.fi](https://arcai.fi), julkaisu GitHub Pagesissa).

Staattinen Astro-sivusto: etusivu, vapaaehtoiset, palveluluettelo, blogi, säännöt, tietosuoja ja sivukartta suomeksi ja englanniksi.

## Teknologia

| | |
|---|---|
| **Kehys** | [Astro](https://astro.build/) 7 |
| **Tyylit** | [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`) |
| **Node** | ≥ 22.23.4 (`package.json` → `engines`; CI käyttää Node 24) |
| **Julkaisu** | GitHub Actions → GitHub Pages (`withastro/action@v3`) |

## Astro-integraatiot

Konfiguroitu `astro.config.mjs` → `integrations`:

| Paketti | Käyttö |
|---|---|
| [`@astrojs/mdx`](https://docs.astro.build/en/guides/integrations-guide/mdx/) | MDX-sivut ja -sisältö |
| [`astro-icon`](https://www.astroicon.dev/) | Iconify-kuvakkeet komponenteissa |
| [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | `sitemap-index.xml` buildin yhteydessä |

## Muut Astro-/sisältöpaketit

| Paketti | Käyttö |
|---|---|
| [`@astrojs/markdown-satteri`](https://www.npmjs.com/package/@astrojs/markdown-satteri) | Markdown-renderöinti (Sätteri); Astro 7 -ketju, ei erillistä `integrations`-riviä |

## Tyylit ja ikonit

| Paketti | Käyttö |
|---|---|
| [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography) | `prose`-luokat Markdown/MDX-tekstille (`global.css`) |
| [`@iconify-json/lucide`](https://icon-sets.iconify.design/lucide/) | Lucide-ikonijoukko `astro-icon`-integraatiolle |

## Projektirakenne

```
src/
  components/     Landing, Volunteers, Palveluluettelo, BlogIndex, BlogPost, Rules, SiteMap
                  Button (brändin painike), PageTitle (Archivo-otsikko ja väkänen),
                  TickBand (tumma nauha ja rastitetut ruudut), CtaBand (vihreä toimintanauha),
                  AuroraBackground (revontulitausta)
  layouts/        Layout.astro (ylävalikko, alatunniste, sivukartta)
  i18n/           ui.ts (tekstit fi, en), pages.ts (sivujen osoitteet: fi/vapaaehtoiset ↔ en/volunteers)
  lib/            sitemap.ts (ylävalikko ja sivukartta yhdestä paikasta), blog.ts, palvelut.ts
  content/        blogi/, palvelut/ (palveluluettelon kortit, ohje OHJE.md)
  pages/          index.astro → /fi/, fi/*.astro, en/*.astro
  styles/         global.css, arcai/ (design systemin tokens.css ja buttons.css muuttamattomina)
public/
  brand/          logot, väkäset, nuoli ja fasetit SVG-tiedostoina (design systemistä)
  favicon.svg     logo (tunnus ja sanamerkki) neliönä
  logo.png, mark.png   vanhat rasterilogot, eivät enää käytössä sivuilla
.github/workflows/deploy.yml
```

## Ilme

Ulkoasu noudattaa Arctic AI design systemiä (v1.1, [arcai-ai-design-system](https://github.com/arctic-ai-ry/arcai-ai-design-system)):
viisi väriä, Archivo 900 / 125 % sivuotsikoissa, Familjen Grotesk muussa tekstissä, terävät kulmat.

- Logot ja graafiset elementit ovat design systemin tiedostoja kansiossa `public/brand/`. Niitä ei piirretä uudelleen.
- Tunnusta ei näytetä ilman sanamerkkiä: ylävalikossa, alatunnisteessa ja faviconissa on koko logo.
- Painike on design systemin `buttons.css` sellaisenaan (`src/components/Button.astro`).
- Sivulla on enintään yksi tumma rastinauha ja yksi vihreä toimintanauha.
- Verkossa vihreä nauha on linkki. Tämä poikkeaa painotuotteista, joissa nauha vain osoittaa osoitteeseen.
- Alatunnisteessa on fasettikulma, vaikka sivulla on myös revontulitausta. Design system erottaa nämä toisistaan; tässä ne ovat sivun eri päissä.
- Fontit tulevat npm-paketeista (`@fontsource-variable/*`), ei Google Fontsista, jotta sivu ei tee pyyntöjä kolmansille osapuolille.

## Palveluluettelo

Jäsenyritysten, muiden yleishyödyllisten toimijoiden ja yhteistyökumppaneiden kortit ovat tiedostoja kansiossa `src/content/palvelut/`. Täyttöohje on samassa kansiossa: [`OHJE.md`](src/content/palvelut/OHJE.md).

## Kehitys

```sh
npm install
npm run dev
```

Tuotantobuild ja esikatselu:

```sh
npm run build
npm run preview
```

Push `main`-haaraan käynnistää workflow **Deploy to GitHub Pages** (`.github/workflows/deploy.yml`).
