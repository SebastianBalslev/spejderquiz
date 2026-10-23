# Spejderquiz

En mobilvenlig quiz-app for spejdere i alderen 10-16 år. Man er patruljeleder for en patrulje på 5 spejdere, tager prøver i 22 emner og samler mærker i bronze, sølv og guld.

Hele appen ligger i én fil, `index.html`. Den virker offline og kan åbnes direkte i telefonens browser.

## Indhold
- 22 emner med hvert sit mærke i bronze, sølv og guld, delt i fire grupper på mærkesiden:
  - **Friluftsliv:** Lejrliv og telte, Tur og udrustning, Bål, Friluftskøkken, Kniv, sav og økse, Overlevelse
  - **Natur:** Natur og miljø, Dyr, Fugle, Spor og sporing, Planter og svampe, Vejr, Stjerner og nattehimmel
  - **Færdigheder:** Knob og reb, Førstehjælp, Orientering og kompas, GPS og geocaching, Vand og sejlads, Koder og signaler (med blinkende morselampe og semafor)
  - **Spejderliv:** Spejderhistorie og traditioner, Lejrbål og sang, Ledelse og ansvar

  Mærkesiden viser fremgangen i hver gruppe, fx »Natur: 8 af 21 mærker«. Et emne vises først, når det har mindst 10 spørgsmål på hvert niveau (`ANTAL_SPG_MIN`)
- 1.664 spørgsmål med forklaringer – mindst 25 pr. emne og niveau. Heraf opgaver, hvor man skal vise, hvordan knob og besnøringer bindes, og billedspørgsmål med tegninger af dyr, dyrespor, blade, svampe, knob og surringer
- Den samme morse- eller semaforopgave kommer aldrig to gange i samme prøve
- **Én spiller – én patrulje:** når man starter, opretter man en patrulje på 5 spejdere og vælger patruljeleder (det er en selv) og patruljeassistent. Under »Redigér patruljen« kan man ændre navn og udseende på alle i patruljen. Mærkerne er fælles – når man tager et mærke, får hele patruljen det – og patruljen deler lejrpladsen. Patruljelederen har valgfrit udseende og ranger efter antal mærker (af 66): Ny spejder (0), Spejder (3), Erfaren spejder (12), Vildmarksspejder (28) og Mesterspejder (50). Guld i Lejrbål og sang og Ledelse og ansvar giver titlerne Lejrbålsleder og Patruljeleder
- Fri træning, nedtælling på 20 sekunder, point og streak
- **Øv dine fejl:** spørgsmål, man har svaret forkert på, samles under Træning. Et spørgsmål forsvinder, når man har svaret rigtigt på det to gange i træk
- **Ugens udfordring:** 10 spørgsmål fra forskellige emner, som er de samme for alle spejdere hele ugen (valgt ud fra år og ugenummer). Spejderens bedste resultat for ugen vises på profilen
- **Spejderhytten – ugens spejdermøde:** én gang om ugen (ISO-uge) holder spejderen møde i hytten: åbning med flaghejsning i rundkreds, mødets quiz (ugens udfordring), ugens aktivitet efter årstiden, patruljetid (3 spørgsmål, man svarer selv) og afslutning ved bålet med en historie. Alt vælges ud fra år + ugenummer, så alle får det samme møde. Mødet giver point og materialer til lejrpladsen (ekstra ved mindst 8 rigtige), møde-point til ting i hytten, fremmødemærket i bronze/sølv/guld (4/12/26 møder) og en mødestreak. For hver 8 møder optjener man en sygemelding, som automatisk redder streaken, hvis man springer en uge over. 10/10 gør en til *ugens stjerne* på profilen. Gamle møder kan ikke indhentes, men quizzerne fra de sidste 4 uger kan trænes uden belønning
- **Indstillinger (⚙️ på forsiden):** redigér udseende og patrulje, lyd til/fra, større tekst og oplæsning af spørgsmål og svar på dansk
- Lejrplads, hvor man bygger telte, bål, pionerarbejde og meget mere for sine point. Mange ting kræver et bestemt mærke
- Lejrpladsen fylder hele skærmen (6 × 12 felter). Tryk på et tomt felt for at åbne Byg-panelet (på søen med kategorien Vand). I bunden er tre knapper, der åbner et panel: 🏗️ **Byg** (byggelisten, delt i kategorier som Lejrliv, Bål og mad, Værksted og lager, Træer og natur, Pionering, Orientering og vejr, Signaler, Førstehjælp og Vand – vælg en kategori i fanerne øverst eller se »Alle«; kategorierne står i `BYGKAT`, og ting uden kategori kommer under »Andet«; ting, man kun kan have én af, står med »✓ Bygget«, når de er på lejrpladsen – vælg en ting, så lukker panelet, og du trykker på et felt), 👥 **Patrulje og opgaver** (giv spejderne job – der kommer ingen pop op-besked, når de går i gang; tiden ses i panelet) og 📦 **Lager**. Hvert panel har en kort hjælpetekst – tryk »Læs mere« for hele forklaringen (`merTekst`). Øverst står point og de vigtigste materialer.
- Pionering kræver, at man selv binder besnøringerne (vinkel-, kryds- og ottetalsbesnøring), og store ting tager tid at bygge
- Materialer og arbejde på lejrpladsen: der er ingen skov mere – man bygger ét grantræ eller løvtræ ad gangen på lejrpladsen. Tryk på et voksent træ, og vælg, hvem i patruljen der skal fælde det (→ granstammer → afgrenes til rafter, og løvstammer → kløves til brænde). Mens det fældes, står der en økse på feltet, og bagefter gror træet automatisk op igen på samme felt (🌱 med nedtælling, `GENVAEKST`). Giver man et job som »Fæld et grantræ« fra patruljepanelet, tages det ledige træ med højest niveau. Fældning af grantræer kræver Kniv, sav og økse i bronze, fældning af løvtræer kræver sølv, og kløvning kræver mærket i bronze og en huggeplads, hvor højere niveau giver mere brænde og hurtigere kløvning. En afgreningsstation (8 rafter og 4 reb, kræver Kniv, sav og økse i guld) giver 1 rafte mere pr. afgrenet granstamme – og 1 mere på niveau 5, 10, 20, 40, 60, 80 og 99 (op til +8). Stationen kræver flere rafter og reb at opgradere i de første niveauer (pointprisen er normal): dobbelt til niveau 2, og tillægget aftager jævnt til normal pris ved niveau 11 (`DYR_START`). Hvert træ har sit eget niveau: et træ på niveau 10 giver kun flere stammer, når netop det træ fældes – 1 stamme fra start og 1 mere på niveau 5, 10, 20, 40, 52, 64, 75, 87 og 99, op til 10 (se `stammerPrTrae`). Træernes vækst gemmes i `traer` på spejderen.
- Lageret har fra start plads til 10 rafter, 10 brænde og 10 af hver slags reb og plantefibre (stammer har ingen grænse). Raftegården, Brændeskuret, Materialeskuret (til reb, utaklede reb og plantefibre) og Jordkøleskabet (til mad) giver 20 pladser mere, når de er bygget, og 10 mere for hvert niveau, de opgraderes. Det, der ikke er plads til, går tabt
- **Mad:** maden opbevares i jordkøleskabet (10 portioner uden). Bag snobrød (2 brænde → 1 portion mad, hvis det ikke er råt eller brændt), eller sæt en spejder til at lave mad i lejrkøkkenet (2 brænde → 2 portioner mad) eller bage brød i bagerovnen (3 brænde → 5 portioner mad). For hvert 5. niveau på køkkenet eller ovnen giver det en portion mere. Opgraderinger fra niveau 6 koster mad (niveau − 5 portioner), og bagerovnen koster 6 brænde at bygge
- **Aktivitetsplads** (Ledelse og ansvar i sølv, 150 point, 6 rafter og 3 reb): sæt en fra patruljen til at facilitere en aktivitet. Det tager altid 2 timer (kan halveres med en reklame) og giver 100 point + 10 pr. niveau over 1 til byggerier
- **Signalbålet** kan tændes for 5 brænde. Det brænder i 30 min (+3 min pr. niveau), og imens går alle nye job 25 % hurtigere
- Brænde på bålet tages fra lageret. River man noget ned, får man ingen point tilbage – kun 30 % af materialerne
- Byggeri, opgraderinger, job og træer, der vokser, tager tid. Man kan se en reklame for at halvere tiden (én gang pr. byggeri, opgradering, job og træ). Appen er offline, så »reklamerne« er appens egne tips med en nedtælling på 15 sekunder – rigtige reklamer kræver et reklamenetværk i `visReklame` Lav jeres eget tovværk: saml brændenælder og bast, sno tovværk og takl det (kræver Knob og reb). Med en rebslåningsmaskine (Knob og reb i bronze) snos tovværket 40 % hurtigere af 2 fibre i stedet for 3, og for hvert 5. niveau giver den et reb mere. Pionerarbejde koster rafter og reb, og bål koster brænde
- Alt på lejrpladsen kan opgraderes fra niveau 1 til 99. Bygningerne skifter udseende på niveau 2, 3, 4, 5, 10, 15, 25, 50 og 99 (græs og blomster, flag, vimpler, guldstjerne, lanterne, stenkant, guldkant, gylden aura og gnister, og til sidst krone og regnbueglans), og lejrporten får sine egne trin med vimpler på tårnene, patruljens skjold, fakler, gylden bue, krone og fyrværkeri. Bygninger, der giver noget ved opgradering (lager, huggeplads, træer, afgreningsstation, køkken, bagerovn, rebslåningsmaskine, signalbål og bygninger med aktiviteter), har knappen »📈 Se, hvad hvert niveau giver« med en tabel over de niveauer, hvor fordelen eller udseendet skifter (`nivEffekt`). Niveauet står som et lille tal i hjørnet af feltet (se `TRIN_NIV`, `nivPynt`, `nivBag` og `portSVG`). Opgraderingen tager længere tid, jo højere niveauet er (fra få minutter til flere dage)
- Telte kan man gå ind i og indrette
- Aktiviteter på lejrpladsen: sæt dig ved lejrbålet (læg brænde på, rist skumfiduser, hør historier, lejrbålsquiz), bag snobrød, find stjernebilleder i stjernekikkerten, tag en tur på svævebanen, hejs flaget, tag på kano- og flådetur på søen m.m.
- Alt gemmes lokalt i browseren
- **Backup:** gem patruljen, mærkerne og lejrpladsen i en fil og indlæs den igen. Find det under ⚙️ Indstillinger på forsiden
- **Patruljer og adventureløb:** led patruljen gennem 10 adventureløb – fra 4 til 25 poster. Du er selv patruljeleder, og før start fordeler du rollerne kortlæser, sanitet, bålmester og signalist. Ved vidensposterne svarer du selv – man vælger ikke, hvem i patruljen der svarer – og belønningen er ét samlet pointtal til dig (ikke point til hver spejder). Posterne er videns-, pioner-, kompas-, signal-, førstehjælps-, bål-, natur-, vand- og kodeposter. Undervejs er der vejkryds (kort og risikabel eller lang og sikker vej), hændelser, energi, jokere og spiltid på et kort, der kan zoomes. De lange løb er delt i etaper med lejrplads (og overnatning) imellem, og løbet gemmes efter hver post. Løbene giver 1-3 stjerner, point og materialer, samarbejdsmærket i bronze/sølv/guld efter løb 3, 6 og 9 og titlen Mesterpatrulje efter løb 10

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

- **Tømmerflåden og mærket »24 timer på tømmerflåde«:** tømmerflåden kræver både Vand og sejlads i guld og Knob og reb i guld (`ekstraKrav` giver en ting flere mærkekrav), koster 250 point, 100 rafter, 50 reb, 10 brænde og 20 portioner mad og tager 10 timer at bygge (man skal have lagerplads til materialerne). Man kan kun have én. Tryk på flåden for at tage på en 24 timers tur med alle 5 i patruljen – alle skal være ledige. Turen varer altid 24 timer – den kan ikke halveres med en reklame – og giver 1.500 point (`FLAADE_POINT`), og første gang får man det særlige mærke »24 timer på tømmerflåde«. Særlige mærker står i `SAERMAERKER`, gemmes i `saermaerker` på spejderen, vises under »Særlige mærker« på mærkesiden og sidder på uniformens højre ærme.

## Ret i lejrpladsen
Tingene, man kan bygge, står i listen `BYG` i `index.html`. Hver ting har en pris og evt. et krav, fx `krav:["knob",2]` = Knob og reb i sølv. Alle ventetider styres af `TIDSFAKTOR` (4 = fire gange grundtiden). Lagerpladsen styres af `LAGER_START`, `LAGER_BYGGET` og `LAGER_PR_NIV`, træerne af `TRAETYPE` og `GENVAEKST`, nedrivning af `RIV_ANDEL`, det højeste niveau af `MAKSNIV`, og reklamerne af `REKLAME_SEK` og `REKLAMER`. Byggetider står i `BYGTID`, materialepriser i `BYGMAT`, arbejdsopgaverne i `JOB`, besnøringsopgaverne i `OPGAVER` tingene til teltet i `INDBO` og aktiviteterne i `AKT_FOR`, `HISTORIER`, `HISTORIER_LB` og `DYREFAKTA`.

## Det, mærkerne låser op
Mange mærker giver adgang til ting på lejrpladsen (se `krav` i `BYG`). De ni nyeste emner låser desuden dette op:

| Emne | Bronze | Sølv | Guld |
|---|---|---|---|
| Stjerner og nattehimmel | Stjernekikkerten og Orion i kikkerten | Planeten Jupiter og den tiltagende/aftagende måne i kikkerten | Stjernetårn |
| Friluftskøkken | Snobrød over bålet på bålpladsen | Lejrkøkken (før Bål i sølv) | Bagerovn |
| Kniv, sav og økse | Fælde grantræer (rafter), huggeplads og kløve brænde (job) | Fælde løvtræer (job) | Afgreningsstation og kløvning 25 % hurtigere |
| Tur og udrustning | Rygsækstativ i teltet | Fleecetrøje, uldsokker, termoflaske og vabelplaster i teltet | Madpakken på løbene giver +3 energi i stedet for +2 |
| Fugle | Fuglekasse (før Dyr i bronze) | Fugletårn | Fugle flyver hen over lejrpladsen |
| Spor og sporing | Sporkasse | Hændelsen »Friske spor« på løbene (+10 point) | Også »Sporjagt« på løbene (+20 point ved rigtigt svar) |
| GPS og geocaching | Geocache på lejrpladsen | Første »Kig på kortet igen« på et løb er gratis | Pandelampen lyser 60 % længere på løb med mørke (løb 4) |
| Lejrbål og sang | 6 ekstra historier ved bålet | Lejrbålsplads (før Bål i guld) | Titlen Lejrbålsleder og »Lav et råb« og »Opfør en sketch« ved bålet |
| Ledelse og ansvar | Patruljehjørne | Patruljelederen på et løb giver en ekstra joker | Titlen Patruljeleder og +25 % point på løbene |

De pladser, der blev ledige under de gamle emner, har fået nye ting: Pindsvinehus (Dyr, bronze), Vejrhane (Vejr, sølv), Bålbænke (Bål, sølv) og Signalbål (Bål, guld). Stjernekikkerten kræver nu Stjerner og nattehimmel i bronze i stedet for Vejr i sølv.

Ting, der allerede er bygget, bliver stående, selv om kravet er flyttet, og job, der er i gang, gør sig færdige. Ved løbene tæller det højeste mærke i patruljen, men den ekstra joker kræver, at spejderen med rollen patruljeleder selv har mærket. Fordelene vises, når rollerne fordeles, og regnes ud ved start (`loebFordele`). I koden står det i `LAAS_OP` (teksterne ved et nyt mærke), `JOB` (`kraever` og `bygning`), `jobGiver`, `STJERNEOPG_ALLE`, `HISTORIER_LB`, `RAAB`, `SKETCHES`, `AKT_FOR` (tredje felt er et krav) og `titler`.

Tilpasninger i forhold til de første ønsker:
- Sølv i Spor og sporing og guld i Ledelse og ansvar giver bonus til patruljens point, fordi løbene ikke har en anden pointtavle.
- »Kig på kortet igen virker to gange« er lavet sådan, at det første kortforsøg er gratis og ikke koster en joker.
- Geocachen er en ting på lejrpladsen med fakta om geocaching, ligesom fuglekassen.
- Rangen »Patruljeleder« hedder nu »Vildmarksspejder«, så den ikke forveksles med titlen fra Ledelse og ansvar.
- Patruljen oprettes nu fra start, så Ledelse og ansvar i bronze giver et Patruljehjørne i stedet for retten til at oprette en patrulje. Huggepladsen kræver nu bronze (i stedet for guld), fordi al kløvning kræver en huggeplads.

Gamle gemte spil virker stadig: den aktive spejder bliver patruljeleder i sin patrulje (eller i en ny), patruljen fyldes op til 5 spejdere (har den flere, fjernes de sidste – patruljelederen og -assistenten bliver), og alle i patruljen får de højeste mærker, nogen af dem havde. Spejdere, der ikke var med i patruljen, fjernes. Træerne fra den gamle skov forsvinder, men grantræer og løvtræer, der er bygget på lejrpladsen, bliver stående.

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
Ugens aktiviteter står i listen `MOEDE_AKT` i `index.html` – mindst én pr. årstid (`foraar`, `sommer`, `efteraar`, `vinter`). Hver aktivitet har en `type`: `surring` (bind besnøringerne på en ting fra `OPGAVER`, angivet med `opg`), `stjerner`, `baal` eller `koekken` (aktiviteterne fra lejrpladsen) eller en lille quiz med 3 opgaver: `raekke`, `morse`, `semafor`, `billede` (evt. med `emner:[…]`) eller `kode`. Tingene til hytten står i `HYTTE_INDBO` (pris i møde-point, evt. et `krav` som i teltet og placering `x`/`y`/`w` i procent af hyttens tegning). Grænserne for fremmødemærket står i `MOEDE_KRAV`, og belønningen beregnes i `moedeAfslut`. Spejderens møder gemmes i `c.moeder`.

## Installér som app
Appen kan installeres på telefonen fra https://sebastianbalslev.github.io/spejderquiz/ og virker derefter uden internet.
- **Android (Chrome):** tryk på *Installér* i appen, eller vælg *Installér app* i menuen ⋮.
- **iPhone (Safari):** tryk på *Del* og vælg *Føj til hjemmeskærm*.

Når du ændrer `index.html`, skal du også tælle versionsnummeret op i `sw.js` (fx `spejderquiz-v2`), så telefonerne henter den nye udgave.
