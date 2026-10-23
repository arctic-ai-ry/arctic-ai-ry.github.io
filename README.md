# arctic-ai-ry.github.io

[Arctic AI Association ry](https://arctic-ai-ry.github.io) – yhdistyksen verkkosivut GitHub Pagesissa.

Staattinen Astro-sivusto: etusivu, yhteinen layout ja revontulitausta (`AuroraBackground`).

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
  components/     AuroraBackground.astro
  layouts/        Layout.astro
  pages/          index.astro
  styles/         global.css
.github/workflows/deploy.yml
```

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
