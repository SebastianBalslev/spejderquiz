# Spejderquiz

En mobilvenlig quiz-app for spejdere i alderen 10-16 år. Man laver sin egen spejder, tager prøver i 13 emner og samler mærker i bronze, sølv og guld.

Hele appen ligger i én fil, `index.html`. Den virker offline og kan åbnes direkte i telefonens browser.

## Indhold
- 13 emner med hvert sit mærke i bronze, sølv og guld – bl.a. Koder og signaler med blinkende morselampe og semafor
- Næsten 1.000 spørgsmål med forklaringer – mindst 25 pr. emne og niveau. Heraf opgaver, hvor man skal vise, hvordan knob og surringer bindes, og billedspørgsmål med tegninger af dyr, dyrespor, blade, svampe, knob og surringer
- Den samme morse- eller semaforopgave kommer aldrig to gange i samme prøve
- Karakter med valgfrit udseende og ranger fra Ny spejder til Mesterspejder
- Fri træning, nedtælling på 20 sekunder, point og streak
- **Øv dine fejl:** spørgsmål, man har svaret forkert på, samles under Træning. Et spørgsmål forsvinder, når man har svaret rigtigt på det to gange i træk
- **Ugens udfordring:** 10 spørgsmål fra forskellige emner, som er de samme for alle spejdere hele ugen (valgt ud fra år og ugenummer). Spejderens bedste resultat for ugen vises på profilen
- **Indstillinger pr. spejder:** lyd til/fra, større tekst og oplæsning af spørgsmål og svar på dansk
- Lejrplads, hvor man bygger telte, bål, pionerarbejde og meget mere for sine point. Mange ting kræver et bestemt mærke
- Pionerarbejde kræver, at man selv binder surringerne (kvadrat-, diagonal- og trefodssurring), og store ting tager tid at bygge
- Materialer og arbejde på lejrpladsen: sæt patruljens spejdere til at fælde grantræer (→ granstammer → afgrenes til rafter) og løvtræer (→ løvstammer → kløves til brænde). Lav jeres eget tovværk: saml brændenælder og bast, sno tovværk og takl det (kræver Knob og reb). Pionerarbejde koster rafter og reb, og bål koster brænde
- Alt på lejrpladsen kan opgraderes i 5 niveauer (Normal → Mester) – fx bliver lejrporten flottere og flottere
- Telte kan man gå ind i og indrette
- Aktiviteter på lejrpladsen: sæt dig ved lejrbålet (læg brænde på, rist skumfiduser, hør historier, lejrbålsquiz), bag snobrød, find stjernebilleder i stjernekikkerten, tag en tur på svævebanen, hejs flaget, sejl på søen m.m.
- Flere spejdere på samme telefon. Alt gemmes lokalt i browseren
- **Backup:** gem alle spejdere i en fil og indlæs den igen – eller flyt en enkelt spejder til en anden telefon. Find det under profilen
- Patruljer: saml spejderne i en patrulje og løs opgaver sammen på samme telefon – patruljequiz på skift (man vælger, hvem der skal svare, og har jokere) og pionerprojekter, hvor hver spejder binder sine egne surringer. Patruljen kan optjene samarbejdsmærket i bronze, sølv og guld

## Ret eller tilføj spørgsmål
Spørgsmålene står øverst i den første `<script>`-blok i `index.html`:

```js
Q("knob", 1, "Spørgsmålet?",
  ["RIGTIGT svar", "Forkert", "Forkert", "Forkert"],
  "Forklaring.");
```

Det rigtige svar står altid først. Niveau 1 = bronze, 2 = sølv, 3 = guld.

Opgaver, hvor man skal sætte trin i rækkefølge, skrives med `R(...)` (trinnene i den rigtige rækkefølge). Spørgsmål med morselampe, semafor eller en tegning skrives med `QM(...)` og fx `{ type:"morse", tekst:"HEJ" }`, `{ type:"semafor", tekst:"KANO" }` eller ``TEGNING(`<path …/>`)`` (en SVG-tegning på 200 × 140) til sidst.

Tjek, at det rigtige svar ikke er let at gætte, fordi det er det længste:

```
python3 find_lette_svar.py index.html --md rapport.md
```

Scriptet lister de spørgsmål, hvor det rigtige svar er markant længere end de forkerte, og afslutter med kode 0, når det rigtige svar er det længste i under 35 % af spørgsmålene.

## Ret i lejrpladsen
Tingene, man kan bygge, står i listen `BYG` i `index.html`. Hver ting har en pris og evt. et krav, fx `krav:["knob",2]` = Knob og reb i sølv. Alle ventetider styres af `TIDSFAKTOR` (2 = dobbelt tid). Byggetider står i `BYGTID`, materialepriser i `BYGMAT`, arbejdsopgaverne i `JOB`, surringsopgaverne i `OPGAVER` tingene til teltet i `INDBO` og aktiviteterne i `AKT_FOR`, `HISTORIER` og `DYREFAKTA`.

## Installér som app
Appen kan installeres på telefonen fra https://sebastianbalslev.github.io/spejderquiz/ og virker derefter uden internet.
- **Android (Chrome):** tryk på *Installér* i appen, eller vælg *Installér app* i menuen ⋮.
- **iPhone (Safari):** tryk på *Del* og vælg *Føj til hjemmeskærm*.

Når du ændrer `index.html`, skal du også tælle versionsnummeret op i `sw.js` (fx `spejderquiz-v2`), så telefonerne henter den nye udgave.
