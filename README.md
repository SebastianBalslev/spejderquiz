# Spejderquiz

En mobilvenlig quiz-app for spejdere i alderen 10-16 år. Man laver sin egen spejder, tager prøver i 12 emner og samler mærker i bronze, sølv og guld.

Hele appen ligger i én fil, `index.html`. Den virker offline og kan åbnes direkte i telefonens browser.

## Indhold
- 12 emner med hvert sit mærke i bronze, sølv og guld
- 524 spørgsmål med forklaringer
- Karakter med valgfrit udseende og ranger fra Ny spejder til Mesterspejder
- Fri træning, nedtælling på 20 sekunder, point og streak
- Flere spejdere på samme telefon. Alt gemmes lokalt i browseren

## Ret eller tilføj spørgsmål
Spørgsmålene står øverst i den første `<script>`-blok i `index.html`:

```js
Q("knob", 1, "Spørgsmålet?",
  ["RIGTIGT svar", "Forkert", "Forkert", "Forkert"],
  "Forklaring.");
```

Det rigtige svar står altid først. Niveau 1 = bronze, 2 = sølv, 3 = guld.

## Installér som app
Appen kan installeres på telefonen fra https://sebastianbalslev.github.io/spejderquiz/ og virker derefter uden internet.
- **Android (Chrome):** tryk på *Installér* i appen, eller vælg *Installér app* i menuen ⋮.
- **iPhone (Safari):** tryk på *Del* og vælg *Føj til hjemmeskærm*.

Når du ændrer `index.html`, skal du også tælle versionsnummeret op i `sw.js` (fx `spejderquiz-v2`), så telefonerne henter den nye udgave.
