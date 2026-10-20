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
- **Spejderhytten – ugens spejdermøde:** én gang om ugen (ISO-uge) holder spejderen møde i hytten: åbning med flaghejsning i rundkreds, mødets quiz (ugens udfordring), ugens aktivitet efter årstiden, patruljetid (hvis man er i en patrulje med mindst 2) og afslutning ved bålet med en historie. Alt vælges ud fra år + ugenummer, så alle får det samme møde. Mødet giver point og materialer til lejrpladsen (ekstra ved mindst 8 rigtige), møde-point til ting i hytten, fremmødemærket i bronze/sølv/guld (4/12/26 møder) og en mødestreak. For hver 8 møder optjener man en sygemelding, som automatisk redder streaken, hvis man springer en uge over. 10/10 gør en til *ugens stjerne* på profilen. Gamle møder kan ikke indhentes, men quizzerne fra de sidste 4 uger kan trænes uden belønning
- **Indstillinger pr. spejder:** lyd til/fra, større tekst og oplæsning af spørgsmål og svar på dansk
- Lejrplads, hvor man bygger telte, bål, pionerarbejde og meget mere for sine point. Mange ting kræver et bestemt mærke
- Pionerarbejde kræver, at man selv binder surringerne (kvadrat-, diagonal- og trefodssurring), og store ting tager tid at bygge
- Materialer og arbejde på lejrpladsen: sæt patruljens spejdere til at fælde grantræer (→ granstammer → afgrenes til rafter) og løvtræer (→ løvstammer → kløves til brænde). Lav jeres eget tovværk: saml brændenælder og bast, sno tovværk og takl det (kræver Knob og reb). Pionerarbejde koster rafter og reb, og bål koster brænde
- Alt på lejrpladsen kan opgraderes i 5 niveauer (Normal → Mester) – fx bliver lejrporten flottere og flottere
- Telte kan man gå ind i og indrette
- Aktiviteter på lejrpladsen: sæt dig ved lejrbålet (læg brænde på, rist skumfiduser, hør historier, lejrbålsquiz), bag snobrød, find stjernebilleder i stjernekikkerten, tag en tur på svævebanen, hejs flaget, sejl på søen m.m.
- Flere spejdere på samme telefon. Alt gemmes lokalt i browseren
- **Backup:** gem alle spejdere i en fil og indlæs den igen – eller flyt en enkelt spejder til en anden telefon. Find det under profilen
- **Patruljer og adventureløb:** saml spejderne i en patrulje (mindst 2) og gå 10 adventureløb sammen på én telefon – fra 4 til 25 poster. Før start fordeles rollerne patruljeleder, kortlæser, sanitet, bålmester og signalist, og telefonen gives videre til den, der har rollen ved hver post. Posterne er videns-, pioner-, kompas-, signal-, førstehjælps-, bål-, natur-, vand- og kodeposter. Undervejs er der vejkryds (kort og risikabel eller lang og sikker vej), hændelser, energi, jokere og spiltid på et kort, der kan zoomes. De lange løb er delt i etaper med lejrplads (og overnatning) imellem, og løbet gemmes efter hver post. Løbene giver 1-3 stjerner, point og materialer, samarbejdsmærket i bronze/sølv/guld efter løb 3, 6 og 9 og titlen Mesterpatrulje efter løb 10

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

## Ret i adventureløbene
Løbene står i listen `LOEB` i `index.html` (søg efter `ADVENTURELØB`). Hvert løb har:
- `nr`, `navn`, `ikon`, `poster` (antal), `niveau` (spørgsmålenes sværhed 1-3) og `etaper`
- `energi` (start-energi), `jokere`, `kryds` (antal vejkryds), `haendelserPr` (én hændelse pr. så mange poster, 0 = ingen) og `maalTid` (minutter for tredje stjerne)
- `typer` (posttyperne i løbet, fx `videns`, `pioner`, `kompas`, `signal`, `forstehjaelp`, `baal`, `natur`, `vand`) og `pioner` (projekterne fra `OPGAVER`)
- kortet: `bund` (farve) og `terraen` (fx `{ skov:3, soe:1 }` – eller en liste med ét kort pr. etape). Muligheder: skov, plantage, bakke, eng, soe, mose, hede, fjeld, ruin og aa
- historien: `intro`, `mellem` (tekster mellem posterne), `slut` og evt. `etapeTekst` (start på hver etape)
- særlige regler: `moerkt` (mørkt kort, radius), `signal` (fx `["morse"]`), `vejrskift`, `startVejr`, `vejrEnergi` (regn og storm koster ekstra på lange ruter), `regnbaal`, `kode` (kodeposter i to trin), `overnatning` og `tidsgraense` (minutter pr. etape)

Et nyt løb tilføjes ved at sætte et nyt objekt ind i `LOEB` med næste nummer og tælle `ANTAL_LOEB` op. Løbet åbner, når det forrige er gennemført. Hændelserne står i `HAENDELSER`, førstehjælpsscenarierne i `FH_SCEN`, bålopgaverne i `BAAL_OPG` og rollerne i `ROLLER`. Et løb i gang gemmes i patruljens `igang`, og resultaterne gemmes i `loeb`.

## Ret i spejderhytten
Ugens aktiviteter står i listen `MOEDE_AKT` i `index.html` – mindst én pr. årstid (`foraar`, `sommer`, `efteraar`, `vinter`). Hver aktivitet har en `type`: `surring` (bind surringerne på en ting fra `OPGAVER`, angivet med `opg`), `stjerner`, `baal` eller `koekken` (aktiviteterne fra lejrpladsen) eller en lille quiz med 3 opgaver: `raekke`, `morse`, `semafor`, `billede` (evt. med `emner:[…]`) eller `kode`. Tingene til hytten står i `HYTTE_INDBO` (pris i møde-point, evt. et `krav` som i teltet og placering `x`/`y`/`w` i procent af hyttens tegning). Grænserne for fremmødemærket står i `MOEDE_KRAV`, og belønningen beregnes i `moedeAfslut`. Spejderens møder gemmes i `c.moeder`.

## Installér som app
Appen kan installeres på telefonen fra https://sebastianbalslev.github.io/spejderquiz/ og virker derefter uden internet.
- **Android (Chrome):** tryk på *Installér* i appen, eller vælg *Installér app* i menuen ⋮.
- **iPhone (Safari):** tryk på *Del* og vælg *Føj til hjemmeskærm*.

Når du ændrer `index.html`, skal du også tælle versionsnummeret op i `sw.js` (fx `spejderquiz-v2`), så telefonerne henter den nye udgave.
