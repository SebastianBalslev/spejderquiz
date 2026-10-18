# Spejderquiz

En mobilvenlig quiz-app for spejdere i alderen 10-16 år. Man laver sin egen spejder, tager prøver i 12 emner og samler mærker i bronze, sølv og guld.

Hele appen ligger i én fil, `index.html`. Den virker offline og kan åbnes direkte i telefonens browser.

## Indhold
- 13 emner med hvert sit mærke i bronze, sølv og guld – bl.a. Koder og signaler med blinkende morselampe og semafor
- Over 570 spørgsmål med forklaringer, heraf opgaver hvor man skal vise, hvordan knob og surringer bindes
- Karakter med valgfrit udseende og ranger fra Ny spejder til Mesterspejder
- Fri træning, nedtælling på 20 sekunder, point og streak
- Lejrplads, hvor man bygger telte, bål, pionerarbejde og meget mere for sine point. Mange ting kræver et bestemt mærke
- Pionerarbejde kræver, at man selv binder surringerne (kvadrat-, diagonal- og trefodssurring), og store ting tager tid at bygge
- Materialer og arbejde på lejrpladsen: sæt patruljens spejdere til at fælde grantræer (→ granstammer → afgrenes til rafter) og løvtræer (→ løvstammer → kløves til brænde). Pionerarbejde koster rafter, og bål koster brænde
- Telte kan man gå ind i og indrette
- Aktiviteter på lejrpladsen: sæt dig ved lejrbålet (læg brænde på, rist skumfiduser, hør historier, lejrbålsquiz), bag snobrød, find stjernebilleder i stjernekikkerten, tag en tur på svævebanen, hejs flaget, sejl på søen m.m.
- Flere spejdere på samme telefon. Alt gemmes lokalt i browseren
- Patruljer: saml spejderne i en patrulje og løs opgaver sammen på samme telefon – patruljequiz på skift (man vælger, hvem der skal svare, og har jokere) og pionerprojekter, hvor hver spejder binder sine egne surringer. Patruljen kan optjene samarbejdsmærket i bronze, sølv og guld

## Ret eller tilføj spørgsmål
Spørgsmålene står øverst i den første `<script>`-blok i `index.html`:

```js
Q("knob", 1, "Spørgsmålet?",
  ["RIGTIGT svar", "Forkert", "Forkert", "Forkert"],
  "Forklaring.");
```

Det rigtige svar står altid først. Niveau 1 = bronze, 2 = sølv, 3 = guld.

Opgaver, hvor man skal sætte trin i rækkefølge, skrives med `R(...)` (trinnene i den rigtige rækkefølge). Spørgsmål med morselampe eller semafor skrives med `QM(...)` og fx `{ type:"morse", tekst:"HEJ" }` eller `{ type:"semafor", tekst:"KANO" }` til sidst.

## Ret i lejrpladsen
Tingene, man kan bygge, står i listen `BYG` i `index.html`. Hver ting har en pris og evt. et krav, fx `krav:["knob",2]` = Knob og reb i sølv. Byggetider står i `BYGTID`, materialepriser i `BYGMAT`, arbejdsopgaverne i `JOB`, surringsopgaverne i `OPGAVER` tingene til teltet i `INDBO` og aktiviteterne i `AKT_FOR`, `HISTORIER` og `DYREFAKTA`.

## Installér som app
Appen kan installeres på telefonen fra https://sebastianbalslev.github.io/spejderquiz/ og virker derefter uden internet.
- **Android (Chrome):** tryk på *Installér* i appen, eller vælg *Installér app* i menuen ⋮.
- **iPhone (Safari):** tryk på *Del* og vælg *Føj til hjemmeskærm*.

Når du ændrer `index.html`, skal du også tælle versionsnummeret op i `sw.js` (fx `spejderquiz-v2`), så telefonerne henter den nye udgave.
