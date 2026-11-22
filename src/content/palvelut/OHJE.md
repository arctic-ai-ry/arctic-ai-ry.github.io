# Palveluluettelon kortit

Sivu on osoitteessa `/fi/palvelut` ja `/en/palvelut`. Kortit luetaan tämän kansion markdown-tiedostoista. `OHJE.md` ei ole kortti, eikä sitä näytetä sivulla.

Luettelo on jäsenyrityksille, muille yleishyödyllisille toimijoille ja yhteistyökumppaneille. Jäsen lähettää nimen, linkin ja esittelyn osoitteeseen elina.heikkinen@logean.com. Kortin lisää se, joka ylläpitää sivustoa: uusi tiedosto tähän kansioon, sitten julkaisu `main`-haaraan.

## Uusi kortti

Tee yksi tiedosto toimijaa kohti. Nimeä se pienillä kirjaimilla ja väliviivoilla, esimerkiksi `oulun-yliopisto.md`. Tiedoston nimeä ei näytetä sivulla. Runko jätetään tyhjäksi. Kaikki näkyvä sisältö on otsikkotiedoissa.

```yaml
---
name: Oulun yliopisto
url: https://www.oulu.fi
kind: julkinen
summary:
  fi: Lyhyt kuvaus siitä, mitä tekoälyyn liittyvää toimija tarjoaa.
  en: A short description of what they offer around AI.
---
```

| Kenttä | Mitä siihen tulee |
|---|---|
| `name` | Nimi siinä muodossa, jossa sen pitää näkyä. Sama molemmilla kielillä. |
| `url` | Täysi osoite, `https://` alussa. Linkki avautuu uuteen välilehteen. |
| `kind` | `yritys`, `julkinen` tai `kumppani`. `julkinen` on jäsenluokka Muu yleishyödyllinen toimija. `kumppani` on yhteistyökumppani. Muita arvoja ei ole. |
| `summary.fi` | Suomenkielinen esittely, 1–280 merkkiä. |
| `summary.en` | Englanninkielinen esittely, 1–280 merkkiä. Voi jättää pois. Silloin englanninkielinen sivu näyttää suomenkielisen tekstin. |

Sivu jakaa kortit kahteen ryhmään ja järjestää nimet suomen aakkosjärjestykseen. Erillistä järjestyskenttää ei ole.

Kun kansiossa ei ole yhtään korttia, sivu kertoo, että luettelo on tyhjä, ja näyttää ohjeen mukaan pääsemisestä.
