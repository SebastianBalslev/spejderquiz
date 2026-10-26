# Spejderquiz

En mobilvenlig quiz-app for spejdere i alderen 10-16 år. Man er patruljeleder for en patrulje på 5 spejdere, tager prøver i 22 emner og samler mærker i bronze, sølv og guld.

Hele appen ligger i én fil, `index.html`. Den virker offline og kan åbnes direkte i telefonens browser.

## Indhold
- 22 emner med hvert sit mærke i bronze, sølv og guld, delt i fire grupper på mærkesiden:
  - **Friluftsliv:** Lejrliv og telte, Tur og udrustning, Bål, Friluftskøkken, Kniv, sav og økse, Overlevelse
  - **Natur:** Natur og miljø, Dyr, Fugle, Spor og sporing, Planter og svampe, Vejr, Stjerner og nattehimmel
  - **Færdigheder:** Knob og reb, Førstehjælp, Orientering og kompas, GPS og geocaching, Vand og sejlads, Koder og signaler (med blinkende morselampe og semafor)
  - **Spejderliv:** Spejderhistorie og traditioner, Lejrbål og sang, Ledelse og ansvar

  Mærkesiden viser fremgangen i hver gruppe. Emner, man kan begynde på, står med »Tag mærket« og et svagt bronzemærke. Knappen øverst (»🙈 Skjul de mærker, du ikke kan tage endnu«) skjuler de emner, lejrpladsen ikke har låst op – valget huskes (`skjulLaasteMaerker`), fx »Natur: 8 af 21 mærker«. Et emne vises først, når det har mindst 10 spørgsmål på hvert niveau (`ANTAL_SPG_MIN`)
- 1.664 spørgsmål med forklaringer – mindst 25 pr. emne og niveau. Heraf opgaver, hvor man skal vise, hvordan knob og besnøringer bindes, og billedspørgsmål med tegninger af dyr, dyrespor, blade, svampe, knob og surringer
- Den samme morse- eller semaforopgave kommer aldrig to gange i samme prøve
- **Én spiller – én patrulje:** når man starter, opretter man en patrulje på 5 spejdere og vælger patruljeleder (det er en selv) og patruljeassistent. Under »Redigér patruljen« kan man ændre navn og udseende på alle i patruljen. Mærkerne er fælles – når man tager et mærke, får hele patruljen det – og patruljen deler lejrpladsen. Patruljelederen har valgfrit udseende og ranger efter antal mærker (af 66): Ny spejder (0), Spejder (3), Erfaren spejder (12), Vildmarksspejder (28) og Mesterspejder (50). Guld i Lejrbål og sang og Ledelse og ansvar giver titlerne Lejrbålsleder og Patruljeleder
- Fri træning, nedtælling på 20 sekunder, point og streak
- **Øv dine fejl:** spørgsmål, man har svaret forkert på, samles under Træning. Et spørgsmål forsvinder, når man har svaret rigtigt på det to gange i træk
- **Ugens udfordring:** 10 spørgsmål fra forskellige emner, som er de samme for alle spejdere hele ugen (valgt ud fra år og ugenummer). Spejderens bedste resultat for ugen vises på profilen
- **Spejderhytten – ugens spejdermøde:** én gang om ugen (ISO-uge) holder spejderen møde i hytten: åbning med flaghejsning i rundkreds, mødets quiz (ugens udfordring), ugens aktivitet efter årstiden, patruljetid (3 spørgsmål, man svarer selv) og afslutning ved bålet med en historie. Alt vælges ud fra år + ugenummer, så alle får det samme møde. Mødet giver point og materialer til lejrpladsen (ekstra ved mindst 8 rigtige), møde-point til ting i hytten, fremmødemærket i bronze/sølv/guld (4/12/26 møder) og en mødestreak. For hver 8 møder optjener man en sygemelding, som automatisk redder streaken, hvis man springer en uge over. 10/10 gør en til *ugens stjerne* på profilen. Gamle møder kan ikke indhentes, men quizzerne fra de sidste 4 uger kan trænes uden belønning
- **Indstillinger (⚙️ på forsiden):** redigér udseende og patrulje, lyd til/fra, større tekst og oplæsning af spørgsmål og svar på dansk, og om lejrpladsen skal følge dag og nat
- Lejrplads, hvor man bygger telte, bål, pionerarbejde og meget mere for sine point. Mange ting kræver et bestemt mærke
- Lejrpladsen ligner én sammenhængende græsmark: en græsstrå-tekstur (inline SVG), slåede baner og lidt lys og skygge ligger på hele `.lejrmap`, og felterne er næsten gennemsigtige med en meget svag kant. Vandfelterne flyder sammen til en sø.
- Lejrpladsen får præcis så meget luft i bunden, at knapperne Byg/Patrulje/Lager og fanerne aldrig dækker de nederste rækker. Højden måles på skærmen efter hver tegning og ved ændret størrelse (`lejrLuft`, CSS-variablen `--lejrluft`), så det passer med stor tekst, knapper på to linjer og telefonens navigationslinje.
- **Én stil – ingen emoji på pladsen:** alt på selve lejrpladsen er tegnet som SVG i samme stil som hytten, porten og tårnet (flade farver, få konturer, samme palet). Telt, patruljetelt, grantræ, løvtræ, brændeskur, bålbænke, signalbål, lejrkøkken, bagerovn, huggeplads, pindsvinehus (med pindsvin), stjernekikkert, fugletårn, sporkasse, patruljehjørne, geocache, kano, jamboree-telt og blomsterbed står i `PIONER` (feltet `svg` i `BYG`). Ræven, kronhjorten, fuglene, kimplanten, øksen, blåbærrene, vejrhanen, stjerneskuddet og ikonerne i nedtællingerne er også SVG (`RAEV_SVG`, `HJORT_SVG`, `FUGL_SVG`, `UNG_SVG`, `OKSE_SVG`, `BLAABAER`, `TID_SVG`). Tingene har stadig deres emoji (`ikon`) i tekster og beskeder.
- **Dybde:** alt på pladsen har en blød elliptisk skygge (`.skygge`), og tingen ligger i `.ting`. Høje ting (`HOEJ`: træer, kæmpeeg, tårne, hytter, flagstang, stjernekikkert, svævebane, signalmast, totempæl, signalbål, fyrtårn) tegnes større fra bunden af feltet og rager op over feltet ovenover. Rækkerne tegnes oppefra og ned (`z-index` = 10 + række), så en ting længere nede altid ligger foran.
- Lejrpladsen fylder hele skærmen og vokser med lejrniveauet: 3 × 3 felter på Teltpladsen og op til 16 × 6 på Verdensjamboree (se »Lejrniveau«). Tryk på et tomt felt for at åbne Byg-panelet (på søen med kategorien Vand, på land med »Alle«). I bunden er tre knapper, der åbner et panel: 🏗️ **Byg** (byggelisten, delt i kategorier som Lejrliv, Bål og mad, Værksted og lager, Træer og natur, Pionering, Orientering og vejr, Signaler, Førstehjælp og Vand – vælg en kategori i fanerne øverst eller se »Alle«; kategorierne står i `BYGKAT`, og ting uden kategori kommer under »Andet«; ting, man kun kan have én af, står med »✓ Bygget«, når de er på lejrpladsen – vælg en ting, så lukker panelet, og du trykker på et felt), 👥 **Patrulje og opgaver** (giv spejderne job – der kommer ingen pop op-besked, når de går i gang; tiden ses i panelet) og 📦 **Lager**. Hvert panel har en kort hjælpetekst – tryk »Læs mere« for hele forklaringen (`merTekst`). Øverst står point og de vigtigste materialer.
- Pionering kræver, at man selv binder besnøringerne (vinkel-, kryds- og ottetalsbesnøring), og store ting tager tid at bygge
- Materialer og arbejde på lejrpladsen: der er ingen skov mere – man bygger ét grantræ eller løvtræ ad gangen på lejrpladsen. Tryk på et voksent træ, og vælg, hvem i patruljen der skal fælde det (→ granstammer → afgrenes til rafter, og løvstammer → kløves til brænde). Mens det fældes, står der en økse på feltet, og bagefter gror træet automatisk op igen på samme felt (et træ, der gror op eller bliver fældet, kan ikke rives ned – ellers kunne man snyde ved at plante et nyt) (🌱 med nedtælling, `GENVAEKST`). Giver man et job som »Fæld et grantræ« fra patruljepanelet, tages det ledige træ med højest niveau. Fældning af grantræer og løvtræer kræver Kniv, sav og økse i bronze, og kløvning kræver mærket i bronze og en huggeplads, hvor højere niveau giver mere brænde og hurtigere kløvning. En afgreningsstation (8 rafter og 4 reb, kræver Kniv, sav og økse i guld) giver 1 rafte mere pr. afgrenet granstamme – og 1 mere på niveau 5, 10, 20, 40, 60, 80 og 99 (op til +8). Stationen kræver flere rafter og reb at opgradere i de første niveauer (pointprisen er normal): dobbelt til niveau 2, og tillægget aftager jævnt til normal pris ved niveau 11 (`DYR_START`). Hvert træ har sit eget niveau: et træ på niveau 10 giver kun flere stammer, når netop det træ fældes – 1 stamme fra start og 1 mere på niveau 5, 10, 20, 40, 52, 64, 75, 87 og 99, op til 10 (se `stammerPrTrae`). Træernes vækst gemmes i `traer` på spejderen.
- **Lager:** pladsen pr. materiale (rafter, reb og utaklede reb, plantefibre, brænde og mad) er trinnets `grund` + lagerbygningens niveau × trinnets `prNiv` (`lagerKap`, `lagerPlads`). Tryk på et materiale på lageret for at se, hvordan man skaffer det, hvad det bruges til, og hvor det opbevares (`matSkaf`): raftegården → rafter, materialeskuret → reb og fibre, brændeskuret → brænde, jordkøleskabet → mad. Stammer har ingen grænse. Det, der ikke er plads til, går tabt. Man starter uden materialer.
- **Mad:** maden opbevares i jordkøleskabet (10 portioner uden). Bag snobrød (2 brænde → 1 portion mad, hvis det ikke er råt eller brændt), eller sæt en spejder til at lave mad i lejrkøkkenet (2 brænde → 2 portioner mad) eller bage brød i bagerovnen (3 brænde → 5 portioner mad). For hvert 5. niveau på køkkenet eller ovnen giver det en portion mere. Opgraderinger fra niveau 6 koster mad (niveau − 5 portioner), og bagerovnen koster 6 brænde at bygge
- **Aktivitetsplads** (Ledelse og ansvar i sølv, 150 point, 6 rafter og 3 reb): sæt en fra patruljen til at facilitere en aktivitet. Det tager altid 2 timer (kan halveres med en reklame) og giver 100 point + 10 pr. niveau over 1 til byggerier
- **Signalbålet** kan tændes for 5 brænde. Det brænder i 30 min (+3 min pr. niveau), og imens går alle nye job 25 % hurtigere
- Brænde på bålet tages fra lageret. River man noget ned, får man ingen point tilbage – kun 30 % af materialerne
- Byggeri, opgraderinger, job og træer, der vokser, tager tid. Man kan se en reklame for at halvere tiden (én gang pr. byggeri, opgradering, job og træ). Appen er offline, så »reklamerne« er appens egne tips med en nedtælling på 15 sekunder – rigtige reklamer kræver et reklamenetværk i `visReklame` Lav jeres eget tovværk: saml brændenælder og bast, sno tovværk og takl det (kræver Knob og reb). Med en rebslåningsmaskine (Knob og reb i bronze) snos tovværket 40 % hurtigere af 2 fibre i stedet for 3, og for hvert 5. niveau giver den et reb mere. Pionerarbejde koster rafter og reb, og bål koster brænde
- Alt på lejrpladsen kan opgraderes fra niveau 1 til 99. Bygningerne skifter udseende på niveau 2, 3, 4, 5, 10, 15, 25, 50 og 99 (græs og blomster, flag, vimpler, guldstjerne, lanterne, stenkant, guldkant, gylden aura og gnister, og til sidst krone og regnbueglans), og lejrporten får sine egne trin med vimpler på tårnene, patruljens skjold, fakler, gylden bue, krone og fyrværkeri. Bygninger, der giver noget ved opgradering (lager, huggeplads, træer, afgreningsstation, køkken, bagerovn, rebslåningsmaskine, signalbål og bygninger med aktiviteter), har knappen »📈 Se, hvad hvert niveau giver« med en tabel over de niveauer, hvor fordelen eller udseendet skifter (`nivEffekt`). Niveauet står i feltmenuen. På selve pladsen vises niveautallet og de farvede rammer kun i **byggetilstand** – knappen »📐 Niveauer« i lejrpladsens øverste hjørne (`lejrByggetilstand`, huskes på enheden). Ting, der bygges eller opgraderes, står bag et stillads (`STILLADS`) med nedtællingen under (se `TRIN_NIV`, `nivPynt`, `nivBag` og `portSVG`). Opgraderingen tager længere tid, jo højere niveauet er (fra få minutter til flere dage)
- Telte kan man gå ind i og indrette
- Aktiviteter på lejrpladsen: sæt dig ved lejrbålet (læg brænde på, rist skumfiduser, hør historier, lejrbålsquiz), bag snobrød, find stjernebilleder i stjernekikkerten, tag en tur på svævebanen, hejs flaget, tag på kanotur på søen m.m. – og med lejrniveauet kommer flere (se »Nye bygninger og aktiviteter«)
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

## Lejrniveau (1-100)
Lejrpladsen har ét samlet niveau, som vises på skiltet øverst på lejrpladsen (trin-ikon, titel, niveau og XP-bjælke). Tryk på skiltet for at se XP-fordelingen, milepælen med ✅/❌, placeringsreglerne og hvad næste niveau låser op. Patruljesiden viser lejrniveauet ved hvert medlem.

- **Lejr-XP** regnes hver gang ud fra pladsen og mærkerne (`lejrXP`): hver færdig bygning (også i materielvognen) giver (pris + pointprisen for alle dens opgraderinger) / 10, hver forskellig slags bygning giver 50 XP (`LEJR_XP_BREDDE`), hvert komplet sæt i `LEJR_SAET` giver 150 XP (`LEJR_XP_SAET`), og hvert emne giver 30 / 60 / 100 XP for bronze / sølv / guld (`LEJR_XP_MAERKE`). Desuden tæller alle point fra aktiviteter (snobrød, skumfiduser, spisetelt, kano osv. – alt, der går gennem `belon`, og de daglige opgaver ved bygningerne som fællesspisning i spiseteltet, lejrbålsprogrammet, totempælen og signalposten, der går gennem `dagBelon`) med 1 XP pr. point, og en facilitering giver 1 XP pr. niveau på aktivitetspladsen (niveau 1 = 1 XP, niveau 2 = 2 XP osv.). De gemmes i `c.aktXP` og tælles fra nu af (gamle gemte spil starter på 0).
- **XP-krav** (`LEJR_XP_ANKER`, `lejrXPKrav`): niveau 2-4 = 100, 200, 300 · 5 = 400 · 10 = 1.400 · 20 = 6.400 · 30 = 14.400 · 45 = 23.000 · 60 = 33.000 · 100 = 67.000, med geometrisk interpolation mellem ankrene, afrundet til nærmeste 10.
- **Milepæle** (`LEJR_MILEPAEL`): man rykker kun ind i et nyt trin, når trinnets milepæl er klaret. Ellers stopper niveauet på trinnets sidste niveau, og XP gemmes op. Skiltet viser præcist, hvad der mangler (nuværende og krævet niveau).
  - Patruljelejr (5): telt, bålplads, huggeplads, grantræ, løvtræ
  - Tropslejr (10): patruljetelt, lejrkøkken, raftegård, bålplads niveau 3
  - Gruppetur (15): lejrport, lejrbålsplads, vejviser, latrin
  - Divisionslejr (20): lejrport niveau 5, lejrbålsplads niveau 3, spisetelt, flagstang, førstehjælpsstation, vandstation, kano
  - Korpslejr (30): spejderhytte niveau 10, udsigtstårn niveau 10, bagerovn, kæmpeeg, 10 mærker i sølv eller bedre
  - Landslejr (45): svævebane niveau 20, signalmast niveau 20, lejrbutik, lejrradio, tømmerflåde, 15 mærker i sølv eller bedre og 5 i guld
  - Jamboree (60): ridderborg niveau 25, storscene niveau 10, vandrutsjebane, 10 guldmærker inkl. Spejderhistorie
  - Verdensjamboree (100): jamboree-telt niveau 50, flagalléen komplet, jamboree-portal, fyrtårn, alle 22 mærker i guld
  - Alle milepæle har desuden et **deltagerkrav** – nok sovepladser på pladsen: Patruljelejr 5, Tropslejr 10, Gruppetur 30, Divisionslejr 50, Korpslejr 100, Landslejr 200, Jamboree 400 og Verdensjamboree 1.000 (`{sove:N}` i `LEJR_MILEPAEL`). Skiltet viser fx »❌ 👥 Sovepladser 23/30« med et tip om, hvilken bygning der giver flest pladser pr. felt, og guiden foreslår at bygge den.
- **Sovepladser** (`sove: {basis, pr5}` i `BYG`, `soveKap`, `sovepladser`): telt 5 (+1), patruljetelt 10 (+2), shelter 2 (+1), træhytte 4 (+1), spejderhytte 30 (+5) og jamboree-telt 100 (+20). Kapacitet = basis + ⌊(niveau − 1) / 5⌋ × pr5, så den stiger på niveau 6, 11, 16 osv. Kun det, der står på pladsen, tæller – ikke materielvognen og ikke ting, der stadig bygges (en bygning, der opgraderes, tæller med sit nuværende niveau). Overnatningsbygningerne kan bygges flere gange. Pr. felt giver jamboree-teltet flest (25), så spejderhytten (15) og patruljeteltet (10). Lejrskiltet viser »👥 sovepladser« ved XP-bjælken, feltmenuen på en overnatningsbygning viser kapaciteten nu og på næste trin (fx »Patruljetelt: 14 sovepladser → 16 ved niv 16«), og »Se, hvad hvert niveau giver« viser sovepladserne. Det er tjekket, at hvert deltagerkrav kan nås på pladsen i trinnet før, sammen med milepælens bygninger og placeringsreglerne.
- Det højeste niveau gemmes i `lejrNivMax`, så niveauet aldrig falder. Et trin, man har nået, tjekkes ikke igen – river man fx teltet ned eller skifter det ud med et patruljetelt, kan man stadig stige videre. Et nyt trin fejres med den nye titel og listen over det nye. Gemte spil får niveauet regnet forfra med de nye regler og én samlet besked (version 5).
- **Sæt** (`LEJR_SAET`, 14 sæt): Tømmerlejren, Rebslageriet, Bålhygge, Lejrkøkkenet, Patruljelejren, Pionerpladsen, Sikker lejr, Orientering, Vejr og himmel, Dyr og fugle, Vild natur, Søen, Lejrfest (totempæl, spisetelt, storscene) og Signalcentralen (signalpost, lejrradio, signalmast).

### Guide, byggeliste og job
- **Guiden** (»💡 Næste skridt« under skiltet) hjælper i gang fra Teltpladsen: først trinene til Patruljelejr (`GUIDE_START`: tag Kniv, sav og økse i bronze → byg grantræ og løvtræ → fæld grantræet → afgren → huggeplads → fæld løvtræet → kløv → Bål i bronze → bålplads → telt), derefter det næste, der mangler i milepælen til næste trin, og til sidst XP (`guideNaeste`). Tryk på den for at se listen og et hint med en »Vis mig«-knap, der fx vælger bygningen eller åbner mærket. Mangler man point, peger den på Træning.
- **Byggelisten** viser normalt kun det, man kan bygge lige nu (mærke og lejrniveau i orden, og ikke allerede bygget, hvis man kun må have én). Knappen »🔒 Vis også det, du ikke kan bygge endnu« øverst i listen (lige under kategorierne) viser resten.
- **Lagerplads ved job:** kan lageret ikke rumme hele udbyttet af et job (job, der allerede er i gang, regnes med), står der en advarsel i joblisten, man skal bekræfte, før jobbet startes, og jobbet viser »⚠️ Ikke plads på lageret« under Patrulje og opgaver (`lagerTab`, `jobTab`).
- **Job ved bygningen:** »Facilitér en aktivitet« (`kunVed`) står ikke i patruljens jobliste – den startes fra aktivitetspladsen. »Lav mad i lejrkøkkenet« og »Bag brød i bagerovnen« (`naarBygget`) kan startes fra bygningen og står også i patruljens jobliste, så snart lejrkøkkenet eller bagerovnen er bygget – nederst, så tovværksjobbene står samlet.

### Trin og plads
Trinnene står i `LEJR_TRIN` (nemme at justere). Hvert trin har pladsens størrelse (`r` × `k`), antal vandfelter (`vand`), den højeste medalje (`medalje`) og lagerpladsen (`grund` + lagerbygningens niveau × `prNiv`):

| Niveau | Trin | Rækker × kolonner | Vand | Materialeloft (`maxByg`) | Medalje | Lager grund | + pr. lagerniveau |
|---|---|---|---|---|---|---|---|
| 1 | Teltplads | 3 × 3 | 1 | 3 | bronze | 10 | 0 |
| 5 | Patruljelejr | 4 × 4 | 3 | 5 | sølv | 12 | 2 |
| 10 | Tropslejr | 6 × 6 | 6 | 10 | guld | 20 | 3 |
| 15 | Gruppetur | 8 × 6 | 8 | 15 | guld | 20 | 3 |
| 20 | Divisionslejr | 9 × 6 | 9 | 20 | guld | 40 | 4 |
| 30 | Korpslejr | 10 × 6 | 10 | 35 | guld | 80 | 5 |
| 45 | Landslejr | 12 × 6 | 12 | 50 | guld | 120 | 6 |
| 60 | Jamboree | 14 × 6 | 14 | 75 | guld | 160 | 7 |
| 100 | Verdensjamboree | 16 × 6 | 16 | 99 | guld | 200 | 7 |

- Pladsen er 6 felter bred fra Tropslejr og vokser nedad. Søen ligger i øverste højre hjørne: (0,2) på 3 × 3, (0,2), (0,3) og (1,3) på 4 × 4 og 2 × 3 felter fra 6 × 6. På Gruppeturen løber en å langs højre kant i de to nye rækker (`vandMoenster`). Når pladsen udvides, bliver et felt, der var land, aldrig til vand i grundmønsteret (`vandSaet`). Kun feltet (0,2) går fra sø til land, når pladsen bliver 6 × 6.
- **Fra Divisionslejr (niveau 20) kommer det nye vand ved søen** (`SOE_FRA`, `soeVand`): søen breder sig ind over tomme græsfelter, der støder op til den – tættest på hjørnet først. Et felt med en bygning bliver aldrig til vand, og heller ikke et felt ved siden af et telt eller en latrin. Felterne vælges, første gang trinnet nås, og gemmes i `soeVand` på spejderen, så søen står fast. Gemte spil, der har en vandbygning på den gamle å (række 9 og ned), beholder det felt som vand (`soeGamleAa`).
- **Søen tegnes som én flade** (`soeHTML`): et SVG-lag under felterne med sandbred, lavt vand ved kanten og dybt vand i midten, runde kanter, siv ved bredden, åkander, højst to langsomme krusninger og strøm i åen (vand, der ikke hænger sammen med søen). Felterne på vandet er gennemsigtige og kan stadig trykkes på.
- **Liv** (`lejrLiv`): røg stiger op fra bålplads, lejrbålsplads, signalbål, lejrkøkken og bagerovn (højst 2 ad gangen, `ROEG_BYG`), bålene flakker med et flammeskær (højst 2, `FLAMME_BYG`), og flagstangens dannebrog og bygningernes vimpler vajer (højst 3 felter, flagstangen først). Kronhjorten og ræven går ikke længere hen over bygningerne: hvert dyr står og græsser på et tomt græsfelt, der skifter hver halve time – er der intet tomt felt, står det ved kanten (`besoegHTML`).
- **Trampestier** (`stierHTML`): lyse, slidte stier af trådt græs fra hvert telt (telt, patruljetelt, jamboree-telt – `STI_TELTE`) til nærmeste bål, latrin og lejrkøkken og fra lejrporten ind til pladsens midte. De beregnes ud fra placeringen, hver gang pladsen tegnes, og går uden om vandet (korteste vej over land, også på skrå). Stierne ligger under søen og bygningerne.
- **Spejdere på pladsen** (`spejdereHTML`): op til 5 af patruljens figurer (`avatarSVG`, små). En spejder med et job står ved stedet – ved træet, der fældes, ved huggepladsen, køkkenet, bagerovnen, rebslåningsmaskinen osv. (`JOB_STED`), eller »ude i skoven«. Uden job sidder de ved bålet om aftenen (kl. 18-23), én padler i kanoen om dagen, og de andre går langsomt mellem bygningerne (højst 2 ad gangen, aldrig hen over vandet). Om natten sover de, der har fri, i teltene. Tryk på en figur for at se navnet, og hvad spejderen laver.
- **Dag og nat** efter telefonens ur (`lejrDoegn`, `lysHTML`): morgen kl. 5-9 med dug i græsset og to tågebanker, der driver langsomt; dag kl. 9-18 som normalt; aften kl. 18-23 med varmt lys, hvor bål, lejrkøkken, bagerovn og lanterner (bygninger fra trin 6) lyser; nat kl. 23-5 med mørk overflade, lyspletter fra bål og lanterner og stjerner over søen (få af dem blinker). Fuglene flyver ikke om natten. Det er ét lag over pladsen (`.lys`), og knapperne kan stadig trykkes igennem det. Funktionen kan slås fra under ⚙️ Indstillinger → ⛺ Lejrpladsen → »🌗 Dag og nat« (`indst.doegn`) – så er det altid dag på lejrpladsen, også for spejdernes aktiviteter.
- **Animationer** på lejrpladsen har klassen `.lev`: de holder pause, når pladsen er rullet ud af syne eller appen ligger i baggrunden (`lejrSynlighed`, `lejrPause`), og slås helt fra med `prefers-reduced-motion`.
- Et felt gemmes som (række, kolonne) i ét tal: række × 6 + kolonne (`felt`, `feltR`, `feltK`), så placeringerne står fast, når pladsen vokser. Størrelse og vand regnes ud fra lejrniveauet (`lejrStr`, `lejrKol`, `lejrRaekker`, `erVand`).
- Når pladsen vokser, popper de nye felter frem med en animation.
- **Materielvognen** (`vogn`) er et lager uden for pladsen. Bygninger, der ikke kan stå på pladsen (uden for pladsen eller på et felt, der er blevet til vand), pakkes ned med niveau, opgradering og byggetid intakt (`tilpasLejr`, `pakNed`) og står øverst i Byg-panelet, hvor de kan stilles ud igen (`stilUd`).
- **Gemte spil** (version 4, `migrerTilTrin`): bygningerne får den (række, kolonne), de havde på skærmen før, niveauet regnes forfra ud fra XP og milepæle, pladsen får trinnets størrelse, og det, der ikke kan stå, lægges i materielvognen. Der vises én samlet besked.

### Nye bygninger og aktiviteter
Aktiviteterne står i `AKT_NY` (scene og knapper) og i `AKT_FOR` (knappen på bygningen). De genbruger spørgsmålene og mekanikkerne fra resten af spillet, og hver bygning giver højst én belønning om dagen (`dagBelon`; højere niveau giver lidt flere point, som ved de andre aktiviteter). Dagens spørgsmål, land og ord er de samme hele dagen (`dagTal`).
- **Totempæl** (niv 8, Dyr bronze): »Dagens dyr« – ét spørgsmål fra Dyr. Hvert trin (udseende-niveau) får et nyt udskåret dyr på tegningen (`TOTEMDYR`).
- **Spisetelt** (niv 12, Friluftskøkken bronze): »Fællesspisning« – regn ud, hvor mange gryder der skal til X spejdere. Bruger 3 portioner mad fra lageret (`FS_MAD`).
- **Lejrbålspladsen**: »Planlæg lejrbålet« – dagens rækkefølge-opgave fra Lejrbål og sang (`R(...)`-spørgsmålene, `lbOpg`).
- **Signalpost**: dagens besked i morse – og med Koder og signaler i sølv også en i semafor (`SIGNALORD`).
- **Udsigtstårn**: »Pejling fra tårnet« – krydspejling til kirken og masten, vælg det rigtige sted på kortet (`pejlOpg`).
- **Lejrbutik** (niv 32, Ledelse bronze): sælg overskydende materialer for point (`BUTIK_PRIS`) med et dagligt tilbud til dobbelt pris – højst 150 point om dagen (`BUTIK_LOFT`).
- **Lejrradio** (niv 38, Koder sølv): »JOTA« – et land kalder via stavealfabetet (`STAVE`), gæt landet og saml QSL-kort (`qsl`).
- **Ridderborg** (niv 45, Knob guld) og **Jamboree-portal** (niv 75, Knob guld): store pionerprojekter i tre etaper med vinkel-, kryds- og ottetalsbesnøringer – én etape om dagen (`PROJEKT`, `OPGAVER.ridderborg_1` osv., gemt i `projekt`). En etape kan bygges alene eller med patruljen, hvor besnøringerne fordeles på skift mellem spejderne og giver 15 patruljepoint (`PROJEKT_PPOINT`). Når projektet er færdigt, er der en daglig quiz.
- **Vandrutsjebane** (niv 50, Vand sølv, står på land lige ved søen eller åen – `vedSoe`): »Badevagt« – et sikkerhedsspørgsmål om Vand og sejlads, før den må bruges den dag.
- **Storscene** (niv 55, Lejrbål guld): »Lejrshow« – sæt en sketch, en sang og et råb sammen; giver patruljepoint.
- **Jamboree-telt** (niv 60, 600 point): dagligt besøg fra et nyt land med et spørgsmål om landet eller dets spejdertraditioner. Rigtigt svar = landets flag (`flag`).
- **Flagallé** (niv 65, Historie guld): viser de indsamlede flag.
- **Fyrtårn** (niv 90, Koder guld, ved søen): »Natsignaler« – send dagens ord i morse til skibet på søen. Fyret er tændt fra kl. 17 til 7.
- **Lande** (`LANDE`, 32 lande): navn, flag og et spørgsmål med det rigtige svar først og en forklaring. Bruges af jamboreen, flagalléen og lejrradioen. Milepælen til Verdensjamboree kræver en komplet flagallé med alle landes flag.

### Placeringsregler og materielvogn
Reglerne står i `INSPEKTION` og gælder altid (nabo betyder også på skrå):
- a) Bålplads, lejrbålsplads og signalbål må ikke være nabo til telte (telt, patruljetelt, spisetelt, jamboree-telt), hytter (spejderhytte, træhytte, shelter) eller træer (grantræ, løvtræ, kæmpeeg).
- b) Latrinen må ikke være nabo til telte, lejrkøkkenet, spiseteltet eller vand.
- c) Lejrkøkkenet skal være nabo til en bålplads.
- d) Brændeskuret må ikke være nabo til et bål.
- e) Huggepladsen må ikke være nabo til telte.
- f) Telte må ikke være nabo til vand.

Når man bygger, flytter eller stiller noget ud, står bygningens regler i bjælken øverst, fx »📏 Må ikke stå ved siden af telte, hytter, træer eller brændeskuret – heller ikke på skrå« (`regelLinjer`), og de forbudte felter er røde, og et tryk på et rødt felt viser reglen og en kort spejderforklaring (`nyeBrud`, `brudTekst`). Man kan ikke bygge, flytte eller rive ned, hvis det bryder en regel (fx en bålplads, som et køkken står ved). Man kan ikke selv pakke ting ned – men bygninger fra gamle spil, der ikke kan stå på pladsen eller bryder en regel, pakkes automatisk i **materielvognen** (`tilpasLejr`) og kan stilles ud igen under Byg.

**Store bygninger** fylder flere felter (`str` i `BYG`): spejderhytten og storscenen 2 × 1, jamboree-teltet og ridderborgen 2 × 2. Bygningen gemmes på sit øverste venstre felt (ankeret), og de andre felter er dækket (`fodspor`, `lejrDaekket`). Man vælger ankeret, når man bygger, flytter eller stiller ud – hele fodsporet skal være frit, på land og inden for pladsen (`kanStaa`, `fodsporFrit`), ellers står der fx »Der er ikke plads – spejderhytte fylder 2 × 1 felter«. Reglerne tæller alle felterne: naboerne er naboerne til hele bygningen (`regelBrudKort`). På pladsen tegnes bygningen som ét felt, der spænder over sine felter, med brede tegninger til hytten og scenen (`PIONER_BRED`). **Svævebanen** fylder stadig kun ét felt, men tegnes som to master med en wire og en gondol over 3 felter (til venstre ved højre kant, `SVAEVE_WIRE`). Gemte spil: en stor bygning, der ikke kan få plads (uden for pladsen, på vand eller oven i en anden bygning), pakkes i materielvognen – de små bygninger bliver stående (`tilpasLejr`).

### Økonomi
- Der er ingen grænse for, hvor højt bygningerne kan opgraderes på de enkelte trin. Fra niveau 4 kræver en opgradering et bedre mærke i bygningens emne – sølv fra niveau 4 og guld fra et niveau mellem 6 og 9, der varierer fra bygning til bygning (`guldFra`). Bygninger, der kun kræver bronze for at blive bygget, kræver guld fra niveau 8 eller 9, de øvrige fra niveau 6 eller 7 (bygninger, der kræver guld for at blive bygget, kræver det altid). Opgraderingskortet viser, hvornår guldkravet kommer (`kravNiv` i `opgKost`). Så længe patruljen ikke kan tage mærket i den medalje, er opgraderingen låst. `maxByg` bruges kun til materialeloftet: en opgradering kræver højst 80 % af lageret i det trin, hvor niveauet hører til, og aldrig mere, end lageret kan rumme på patruljens nuværende trin.
- Ingen opgradering kræver flere materialer, end lageret kan rumme: materialeprisen er højst 80 % af en fuldt udbygget lagerbygning i det trin, hvor niveauet bliver muligt (`opgKost`).
- Teltpladsens milepæl kan nås fra start: fæld et grantræ → afgren det (2 rafter) → byg en huggeplads → fæld et løvtræ → kløv det (4 brænde) → byg en bålplads. Grantræer og løvtræer kræver intet mærke, og fældning kræver Kniv, sav og økse i bronze.
- Det er tjekket, at alt, der kan bygges og opgraderes på hvert trin, kan være på lageret, at milepælenes bygninger er låst op i tide, og at hver milepæl kan placeres på det forrige trins plads uden at bryde en placeringsregel.

### Oplåsning af bygninger
Feltet `lejrniv` i `BYG` er det lejrniveau, en ting kræver – sammen med mærkekravet. Låste ting står i byggemenuen med fx »🔒 Tropslejr (niv 14)«. Ting, der allerede står på pladsen, bliver stående. Aktivitetspladsen har intet lejrniveau-krav (den kræver Ledelse og ansvar i sølv).
- Teltplads 1: telt, grantræ, løvtræ, bålplads, huggeplads
- Patruljelejr 5: patruljetelt, latrin, raftegård, brændeskur, materialeskur, jordkøleskab · 6: lejrkøkken, flagstang, førstehjælpsstation · 7: pionerbord, rebslåningsmaskine · 8: totempæl, patruljehjørne
- Tropslejr 10: lejrport, bålbænke, kano, shelter, afgreningsstation, pindsvinehus, fuglekasse, blomsterbed · 12: spisetelt, vejviser, vejrstation, signalpost · 14: lejrbålsplads, sporkasse, geocache, insekthotel, fugletårn · 16: badebro, vandstation, stjernekikkert · 18: kompasrose
- Divisionslejr 20: spejderhytte · 22: udsigtstårn · 24: bagerovn · 25: solur · 26: kæmpeeg · 28: bistade
- Korpslejr 30: svævebane · 32: lejrbutik · 34: signalbål · 36: træhytte · 38: lejrradio · 40: signalmast · 42: tømmerflåde
- Landslejr 45: ridderborg · 50: vandrutsjebane · 55: storscene
- Jamboree 60: jamboree-telt (600 point) · 65: flagallé · 75: jamboree-portal · 90: fyrtårn

### Mærker og adventureløb låses op af lejrniveauet
Det er patruljelederens (eller den aktive spejders) lejrniveau, der tæller (`lederNiv`). Mærker, man allerede har, beholdes.
- **Emner** (`EMNE_TRIN`): Teltplads: Lejrliv, Bål, Kniv, sav og økse, Knob og reb, Førstehjælp, Planter og svampe. Patruljelejr: + Friluftskøkken, Ledelse og ansvar, Dyr, Fugle, Natur og miljø, Spejderhistorie, Tur og udrustning. Tropslejr: + Orientering, Vejr, Koder og signaler, Spor og sporing, GPS og geocaching, Vand og sejlads, Overlevelse, Lejrbål og sang, Stjerner.
- **Højeste mærke** følger trinnets `medalje`: bronze på Teltpladsen, sølv i Patruljelejren og guld fra Tropslejren. Efter en bestået prøve er der kun en knap til næste niveau, hvis det er låst op – ellers står der, hvilket trin der låser det op. Det samme gælder knappen, når man trykker på et mærke på uniformen.
- Låste emner står som »🔒 Låses op i Patruljelejr« på mærkesiden og i træningen. Ugens udfordring, spejdermødet, patruljetiden, lejrbålsquizzen og vidensposterne på løbene tager kun spørgsmål fra de åbne emner – så længe der er færre end 10 åbne emner, tager ugens udfordring nogle emner to gange med forskellige spørgsmål.
- **Adventureløb** (`LOEB_NIV`): løb 1 kræver lejrniveau 5, løb 2 → 8, 3 → 10, 4 → 14, 5 → 17, 6 → 20, 7 → 25, 8 → 30, 9 → 45 og 10 → 60, og det forrige løb skal stadig være gennemført. Låste løb står med »🔒 Lejrniveau 14« på patruljesiden.
- Skiltet og fejringen af et nyt trin viser alt nyt: pladsen, medalje, emner, løb og bygninger (`trinNytListe`).

### Oprydning i bygningerne
Nogle bygninger er fjernet eller lagt sammen (`GAMMEL`, `FJERNET` og `FLET`). Gemte spil ryddes op én gang (`migrerLejr`, styret af `lejrV`), og spilleren får én samlet besked:
- **Fjernet:** Brændestabel og Sten (point og materialer gives tilbage).
- **Svampe og blåbær** er ikke bygninger mere. De vokser vildt på tomme græsfelter (`VILD`): kantareller med Planter og svampe i bronze, blåbær med sølv – et nyt fund hver 2. time, højst 3 ad gangen. Tryk for at plukke dem til mad (1 og 2 portioner).
- **Kronhjorten og ræven** er ikke bygninger mere, men kommer på besøg og står på et tomt græsfelt, når der står mindst 3 naturbygninger (`NATUR_BYG`): hjorten med Dyr i sølv, ræven med Dyr i guld. Tryk på dyret for en fakta.
- **Lagt sammen** (den nye bygning får det højeste niveau af de gamle, resten gives tilbage): Orienteringspost → Vejviser · Vejrhane → trin på Vejrstationen (Vejr i sølv) · Båre og Hjertestarter → trin på Førstehjælpsstationen (Førstehjælp i sølv/guld) · Liljeskilt → pynt på Lejrporten (Spejderhistorie i sølv) · Morselampe og Semaforpost → den nye Signalpost (morse med Koder og signaler i bronze, semafor med sølv) · Stjernetårn → de høje trin på Stjernekikkerten (Stjerner i guld). Trinnene vises på bygningernes ikoner (`bygEkstra`).
- Besnøringsopgaven »Båre« findes stadig på løbene og til møderne – den er bare ikke en bygning mere.

## Ret i lejrpladsen
Tingene, man kan bygge, står i listen `BYG` i `index.html`. Hver ting har en pris og evt. et krav, fx `krav:["knob",2]` = Knob og reb i sølv. Alle ventetider styres af `TIDSFAKTOR` (4 = fire gange grundtiden). Lagerpladsen styres af `LAGER_START`, `LAGER_BYGGET` og `LAGER_PR_NIV`, træerne af `TRAETYPE` og `GENVAEKST`, nedrivning af `RIV_ANDEL`, det højeste niveau af `MAKSNIV`, og reklamerne af `REKLAME_SEK` og `REKLAMER`. Byggetider står i `BYGTID`, materialepriser i `BYGMAT`, arbejdsopgaverne i `JOB`, besnøringsopgaverne i `OPGAVER` tingene til teltet i `INDBO` og aktiviteterne i `AKT_FOR`, `HISTORIER`, `HISTORIER_LB` og `DYREFAKTA`.

## Det, mærkerne låser op
Mange mærker giver adgang til ting på lejrpladsen (se `krav` i `BYG`). De ni nyeste emner låser desuden dette op:

| Emne | Bronze | Sølv | Guld |
|---|---|---|---|
| Stjerner og nattehimmel | Stjernekikkerten og Orion i kikkerten | Planeten Jupiter og den tiltagende/aftagende måne i kikkerten | Stjernekikkerten bliver til et stjernetårn |
| Friluftskøkken | Snobrød over bålet på bålpladsen | Lejrkøkken (før Bål i sølv) | Bagerovn |
| Kniv, sav og økse | Fælde grantræer (rafter), huggeplads og kløve brænde (job) | Fælde løvtræer (job) | Afgreningsstation og kløvning 25 % hurtigere |
| Tur og udrustning | Rygsækstativ i teltet | Fleecetrøje, uldsokker, termoflaske og vabelplaster i teltet | Madpakken på løbene giver +3 energi i stedet for +2 |
| Fugle | Fuglekasse (før Dyr i bronze) | Fugletårn | Fugle flyver hen over lejrpladsen |
| Spor og sporing | Sporkasse | Hændelsen »Friske spor« på løbene (+10 point) | Også »Sporjagt« på løbene (+20 point ved rigtigt svar) |
| GPS og geocaching | Geocache på lejrpladsen | Første »Kig på kortet igen« på et løb er gratis | Pandelampen lyser 60 % længere på løb med mørke (løb 4) |
| Lejrbål og sang | 6 ekstra historier ved bålet | Lejrbålsplads (før Bål i guld) | Titlen Lejrbålsleder og »Lav et råb« og »Opfør en sketch« ved bålet |
| Ledelse og ansvar | Patruljehjørne | Patruljelederen på et løb giver en ekstra joker | Titlen Patruljeleder og +25 % point på løbene |

De pladser, der blev ledige under de gamle emner, har fået nye ting: Pindsvinehus (Dyr, bronze), Vejrhane (Vejr, sølv – nu et trin på vejrstationen), Bålbænke (Bål, sølv) og Signalbål (Bål, guld). Stjernekikkerten kræver nu Stjerner og nattehimmel i bronze i stedet for Vejr i sølv.

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
