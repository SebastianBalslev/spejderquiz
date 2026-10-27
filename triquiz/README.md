# Triquiz

En mobilvenlig quiz-app for triatleter i alderen 16-30 år. Du er kaptajn for et hold på 5 triatleter, tager prøver i 22 emner og samler medaljer i bronze, sølv og guld.

Triquiz er bygget med samme struktur og teknik som Spejderquiz. Hele appen ligger i én fil, `index.html`. Den virker offline, kan installeres som app fra GitHub Pages, og alt gemmes lokalt i browseren.

## Indhold
- **22 emner** med hver sin medalje i bronze, sølv og guld, delt i fem grupper på medaljesiden:
  - **Svøm:** Svømmeteknik og tag, Open water og våddragt, Sighting og bøjer, Svømmetræning
  - **Cykel:** Cykel og udstyr, Vedligehold og reparation, Pacing og watt, Position og aerodynamik
  - **Løb:** Løbeteknik, Løbesko og udstyr, Pace og intervaller, Brick og løb efter cykel
  - **Race:** Skiftezoner (T1/T2), Regler og drafting, Distancer og racetyper, Raceplan og strategi
  - **Krop:** Ernæring og energi, Væske og salt, Restitution og søvn, Skader og forebyggelse, Pulszoner og træningslære, Triathlonhistorie

  Et emne vises først, når det har mindst 10 spørgsmål på hvert niveau (`ANTAL_SPG_MIN`).
- **1.651 spørgsmål** med forklaringer – mindst 25 pr. emne og niveau. Heraf:
  - 80 billedspørgsmål med tegninger på 200 × 140: cykeldele, rytterens position, løbestil, svømmetag, bøjer og strøm, skiftezonen og monteringslinjen, draftzonen set oppefra, løbesko med drop, højdeprofiler, næringsdeklarationer, urinfarver, smertepunkter på kroppen og pulskurver. Mange er »find fejlen«-opgaver
  - 42 opgaver, hvor man sætter trin i rækkefølge, fx T1 og T2, slangeskift, crawlens faser, en FTP-test og løbsmorgenen
  - 199 regneopgaver: pace → sluttid, W/kg, kulhydrat i timen, svømmetid pr. 100 m, svedrate, pulszoner og meget mere
  - Den samme tegning eller den samme regneopgave kommer aldrig to gange i samme prøve
- **Regler:** reglerne er forskellige hos World Triathlon, Ironman og DTriF. Spørgsmål om regler skriver altid, hvilke regler der menes
- **Holdet:** når man starter, opretter man et hold på 5: kaptajn (det er en selv), svømmer, cykelrytter, løber og træner. Medaljerne er fælles – når man tager en medalje, får hele holdet den – og holdet deler træningsbasen. Kaptajnen ranger efter antal medaljer (af 66): Motionist (0), Sprinttriatlet (3), Olympisk triatlet (12), Halv-Ironman (28) og Ironman (50). Guld i Ernæring og energi giver titlen Energimester, og guld i Raceplan og strategi giver titlen Racetaktiker
- **Træning:** fri træning, nedtælling, point og streak. *Øv dine fejl* samler spørgsmål, man har svaret forkert på – de forsvinder efter to rigtige svar i træk. *Ugens udfordring* er 10 spørgsmål, som er de samme for alle hele ugen
- **Indstillinger (⚙️ på forsiden):** redigér udseende og hold, lyd, større tekst, oplæsning på dansk og backup af holdet, medaljerne og basen til en fil

## Ret eller tilføj spørgsmål
Spørgsmålene står mellem `/* <<SPØRGSMÅL>> */` og `/* <</SPØRGSMÅL>> */` i den første `<script>`-blok i `index.html`. Formatet er det samme som i Spejderquiz:

```js
Q("watt", 1, "Spørgsmålet?",
  ["RIGTIGT svar", "Forkert", "Forkert", "Forkert"],
  "Forklaring.");
```

Det rigtige svar står altid først. Niveau 1 = bronze, 2 = sølv, 3 = guld.

- `R(...)` er en opgave, hvor trinnene sættes i rækkefølge (skriv dem i den rigtige rækkefølge – de blandes automatisk)
- `QM(...)` er et spørgsmål med en tegning: ``TEGNING(`<path …/>`)`` til sidst (SVG på 200 × 140). Flere emner har små tegnefunktioner lige over spørgsmålene, fx `CYKEL("kassette")`, `RYTTER("hoej")`, `LOEBER("lang")`, `LINJE("foer")`, `DRAFT("inde")`, `SKO(32, 24)`, `PROFIL(["A","B"])`, `DEKL(...)`, `URIN(7)`, `UGER([8,9,10,6])`, `KROP("knaefront")`, `FOD("achilles")` og `PULSGRAF("drift")`
- Regneopgaver skrives som almindelige `Q(...)` mellem `REGNE = true;` og `REGNE = false;`
- Brug 'enkelte' anførselstegn inde i teksten

Tjek, at det rigtige svar ikke er let at gætte, fordi det er det længste:

```
python3 find_lette_svar.py index.html --md rapport.md
```

Scriptet afslutter med kode 0, når det rigtige svar er det længste i under 35 % af spørgsmålene. Lige nu er det 18 %.

## Træningsbasen
Træningsbasen erstatter Spejderquiz' lejrplads. Man bygger en triathlonklub op fra en lokal klub til en Ironman-base.

- **Materialer:** svømmemeter, cykel-km og løbe-km optjenes ved at sætte holdet på træningsjob (svømning i hallen, open water, langtur, hometrainer, tempotur, bane, trail og brick). Energi kommer fra køkkenet og smoothiebaren, og udstyrsdele fra cykelværkstedet. Mængderne vises i enheder (`MATENHED`: 100 m svømning, 5 km cykel, 1 km løb)
- **Lager:** hvert materiale har sin lagerbygning (`LAGER_BYG`): svømmehal, cykelskur, omklædning, spisekammer og udstyrsrum
- **Træthed og restitution:** efter et job skal triatleten restituere, før næste job. Sauna, isbad, fysioterapi og sovesal giver hurtigere restitution, og Restitution og søvn giver 5 % pr. medaljeniveau (`RESTI_BYG`, `restiBonus`, højst 60 %)
- **Bygninger:** 46 bygninger i `BYG`, fx skiftezone, målstreg, badebro, løbebane, vindtunnel, velodrom og atlethotel. Mange kræver en medalje (`krav:["openwater",2]` = Open water i sølv). Alt kan opgraderes til niveau 99
- **Baseniveau 1-100** med trinene Lokal klub (1), Klubcenter (5), Regionalt center (10), Træningslejr (20), Landsholdscenter (45) og Ironman-base (100) i `LEJR_TRIN`. Basen vokser fra 3 × 3 til 16 × 6 felter
- **Placeringsregler** (`INSPEKTION`): isbadet skal stå ved saunaen, sovesalen må ikke stå ved støjende bygninger eller ved vandet
- **Reklamer** halverer ventetiden. Appen er offline, så »reklamerne« er egne tips med en nedtælling på 15 sekunder (`REKLAME_SEK`). Rigtige reklamer kræver et reklamenetværk i `visReklame`

### Ironman-dagen
Ironman-starten ved søen kræver Open water, Pacing og watt og Pace og intervaller i guld, baseniveau 42 og mange materialer. Hele holdet på 5 skal være ledigt. Ironman-dagen varer altid 17 timer (`IRONMAN_TIMER`) og kan ikke halveres med en reklame. Første gang får holdet den særlige medalje »Ironman Finisher« (`SAERMAERKER`).

## Løbsserien
10 løb fra Supersprint i havnen til Ironman-mesterskabet (`LOEB`). Før start fordeler kaptajnen rollerne pacer, energiansvarlig, mekaniker og skifteansvarlig (`ROLLER`) og vælger strategi: forsigtig, jævn eller aggressiv (`STRATEGIER`).

- Løbet følger posterne Svøm → T1 → Cykel → T2 → Løb med vidensposter, regneposter, mekanikerposter og depoter (`POSTTYPER`)
- Undervejs er der vejkryds, hændelser (fx punktering og sidevind), energi (glykogen) og jokere (gels). De lange løb er delt i etaper
- Løbene giver 1-3 stjerner, point og materialer, holdmedaljen i bronze, sølv og guld efter løb 3, 6 og 9 og titlen *Ironman-hold* efter løb 10

## Ugens klubtræning
Én gang om ugen holder holdet klubtræning: opvarmning, ugens quiz, ugens øvelse efter årstiden, holdtid (3 spørgsmål) og nedvarmning med en historie fra triathlonhistorien. Alt vælges ud fra år og ugenummer, så alle får den samme træning.

- Træningen giver point og materialer (ekstra ved mindst 8 rigtige), fremmødemedaljen i bronze, sølv og guld (4, 12 og 26 træninger, `MOEDE_KRAV`) og en træningsstreak
- For hver 8 træninger optjener man en skadepause, som redder streaken, hvis man springer en uge over
- 10 rigtige af 10 gør en til *ugens stjerne*
- Øvelserne står i `MOEDE_AKT`, historierne i `HISTORIER` og tingene til klubhuset i `HYTTE_INDBO`

## Forskelle fra Spejderquiz
- Interne navne er beholdt for at gøre det let at sammenligne koden: `lejr` = træningsbasen, `patrulje` = holdet, `moede` = klubtræningen, `hytte` = klubhuset, `sygemeldinger` = skadepauser
- Morse, semafor og besnøringsopgaver er fjernet. Tegninger, rækkefølger og regneopgaver er de nye opgavetyper
- Skoven og træfældning er erstattet af træningsjob, der giver svømmemeter, cykel-km og løbe-km
- Spejderhyttens møder er blevet til ugens klubtræning, og adventureløbene er blevet til løbsserien

## Installér som app
Opret et repository med navnet `triquiz`, læg indholdet af denne mappe i roden, og slå GitHub Pages til. Så kan appen installeres fra `https://sebastianbalslev.github.io/triquiz/` og virker derefter uden internet.
- **Android (Chrome):** tryk på *Installér* i appen, eller vælg *Installér app* i menuen ⋮.
- **iPhone (Safari):** tryk på *Del* og vælg *Føj til hjemmeskærm*.

Når du ændrer `index.html`, skal du også tælle versionsnummeret op i `sw.js` (fx `triquiz-v2`), så telefonerne henter den nye udgave.

## Google Play senere
Appen er en almindelig PWA med manifest, ikoner og service worker, så den kan pakkes som en Trusted Web Activity (fx med Bubblewrap) og lægges på Google Play. Rigtige reklamer kræver, at et reklamenetværk kobles på i `visReklame`.
