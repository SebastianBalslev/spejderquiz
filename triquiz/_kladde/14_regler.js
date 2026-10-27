/* =====================================================================
   REGLER OG DRAFTING  (emne: "regler")
   ===================================================================== */
// Tegner en vej set oppefra med en forreste rytter (A) og en bagved (B). Kørselsretning mod højre.
// Draftzonen er tegnet som et stiplet felt bag A. 12 m ≈ 72 px.
// v: "inde" (B kører i zonen) | "ude" (B er bag zonen) | "side" (B kører side om side og blokerer) | "forbi" (B overhaler i venstre side) | "blok" (A kører midt på vejen)
const DRAFT = (v) => {
  const ax = 150, ay = v === "blok" ? 70 : 86;
  const bx = v === "inde" ? 110 : v === "ude" ? 50 : v === "side" ? 150 : v === "forbi" ? 120 : 34;
  const by = v === "side" || v === "forbi" ? 56 : 86;
  const rytter = (x, y, f, t) => `<g transform="translate(${x} ${y})"><rect x="-14" y="-4" width="28" height="8" rx="4" fill="#1b2530"/><ellipse cx="0" cy="0" rx="8" ry="6" fill="${f}"/><text y="-9" font-size="10" font-weight="800" text-anchor="middle" fill="#1b2530">${t}</text></g>`;
  return TEGNING(`<rect width="200" height="140" fill="#9cc79a"/><rect y="36" width="200" height="72" fill="#7d8790"/>
    <path d="M0 72 L200 72" stroke="#fff" stroke-width="2" stroke-dasharray="10 8"/>
    <rect x="${ax - 14 - 72}" y="${ay - 10}" width="72" height="20" fill="rgba(230,57,70,.18)" stroke="#e63946" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="${ax - 50}" y="${ay + 22}" font-size="9" font-weight="800" text-anchor="middle" fill="#e63946">draftzone 12 m</text>
    <path d="M178 24 L194 24 M188 19 L194 24 L188 29" stroke="#1b2530" stroke-width="2" fill="none"/>
    ${rytter(ax, ay, "#e0662a", "A")}${rytter(bx, by, "#1d6fa5", "B")}
    ${v === "forbi" ? `<path d="M${bx + 18} ${by} L${bx + 34} ${by} M${bx + 28} ${by - 5} L${bx + 34} ${by} L${bx + 28} ${by + 5}" stroke="#1d6fa5" stroke-width="2.5" fill="none"/>` : ""}`);
};

// --- Bronze (let) ---
Q("regler", 1, "Hvad betyder 'drafting' på cyklen?",
  ["At køre i læ tæt bag en anden rytter", "At tegne ruten på et kort, før løbet starter", "At køre i aeroposition", "At skifte gear ofte"],
  "I læ bag en anden sparer du mange kræfter. Derfor er det forbudt i de fleste amatørløb.");
Q("regler", 1, "Er drafting tilladt i de fleste amatørløb og i Ironman?",
  ["Nej, man skal holde afstand", "Ja, man må køre lige så tæt man vil, som i et cykelløb", "Kun op ad bakke", "Kun de sidste 10 km"],
  "De fleste amatørløb er 'non-drafting'. Undtagelser findes, fx nogle sprintløb og eliteløb.");
Q("regler", 1, "Hvad er en 'draftzone'?",
  ["Et område bag en rytter, hvor du ikke må blive", "Et område i skiftezonen, hvor cyklerne skal stå til check-in", "Et sted, hvor man må hvile", "En zone med vand og mad"],
  "Draftzonen er et felt bag den forreste. Du må kun være der kortvarigt, mens du overhaler.");
QM("regler", 1, "Rytter B kører bag rytter A. Hvad er problemet?",
  ["B kører inde i A's draftzone", "B kører for langt væk fra A", "B kører i den forkerte retning", "Der er intet problem"],
  "B er inde i det stiplede felt. B skal enten overhale eller falde tilbage bag zonen.",
  DRAFT("inde"));
QM("regler", 1, "Er rytter B's placering i orden?",
  ["Ja, B er bag draftzonen", "Nej, B er inde i draftzonen", "Nej, B skal køre side om side med A", "Nej, B skal overhale med det samme"],
  "B holder god afstand bag zonen. Det er lovligt.",
  DRAFT("ude"));
Q("regler", 1, "I hvilken side skal du overhale på cykelruten i Danmark?",
  ["I venstre side", "I højre side", "Hvor der er plads", "Man må ikke overhale"],
  "Du kører i højre side og overhaler i venstre – som i trafikken. Tjek altid løbsmanualen.");
Q("regler", 1, "Hvad skal du gøre, når nogen overhaler dig på cyklen?",
  ["Falde tilbage ud af deres draftzone", "Sætte farten op, så de ikke kommer forbi", "Køre side om side med dem", "Køre tæt bag dem i læ"],
  "Når du er blevet overhalet, er det dit ansvar at falde tilbage.");
Q("regler", 1, "Må man bruge høretelefoner under et triathlonløb?",
  ["Nej, det er forbudt", "Ja, på cyklen og løbet", "Kun i svømningen", "Kun hvis musikken er lav"],
  "Både World Triathlon og Ironman forbyder høretelefoner. Du skal kunne høre officials og trafik.");
Q("regler", 1, "Må du få hjælp fra familie eller venner undervejs i et løb?",
  ["Nej, udefrakommende hjælp er ikke tilladt", "Ja, de må give dig mad og drikke når som helst", "Ja, de må cykle ved siden af dig", "Ja, de må reparere din cykel"],
  "Du må tage imod mad og drikke fra officielle depoter. Hjælp fra egne folk kan give straf.");
Q("regler", 1, "Hvad skal du gøre med affald (fx gel-papir) under løbet?",
  ["Smide det i de markerede affaldszoner", "Smide det i grøftekanten", "Smide det på vejen bag dig", "Give det til en tilskuer eller en hjælper, der står i vejkanten"],
  "Littering uden for affaldszonerne giver straf. Gem papiret i lommen til næste zone.");
Q("regler", 1, "Hvad sker der ofte, hvis du kører uden at holde afstand i et non-drafting-løb?",
  ["Du får tidsstraf", "Du får en bonus på din tid", "Ingenting", "Du skal svømme igen"],
  "Officials på motorcykel holder øje. Straffen afsones typisk i en penaltyboks.");
Q("regler", 1, "Hvem bestemmer, hvordan reglerne er i et bestemt løb?",
  ["Regelsættet, løbet følger (fx World Triathlon, Ironman eller DTriF), og løbsmanualen", "Den hurtigste deltager i feltet", "Tilskuerne", "Du selv"],
  "Læs løbsmanualen. Små forskelle i regler kan betyde meget.");
Q("regler", 1, "Hvad er et 'teknisk møde' eller 'race briefing'?",
  ["Et møde, hvor arrangøren gennemgår rute og regler", "En teknisk test af din cykel, hvor bremser og gear bliver godkendt", "En træning dagen før", "Et møde for kun proffer"],
  "Briefingen kan indeholde vigtige detaljer om ruten og ændringer i reglerne. Deltag!");
Q("regler", 1, "Må man gå på løbet i et triathlonløb?",
  ["Ja, det er tilladt", "Nej, man skal løbe hele vejen", "Kun de sidste 100 meter", "Kun i Ironman"],
  "Du må gerne gå. Mange går kort ved depoterne.");
Q("regler", 1, "Må man stå på bunden eller holde fast i en bøje for at hvile i svømningen?",
  ["Ja, hvis man ikke kommer frem ved det", "Nej, så bliver man diskvalificeret med det samme af livredderne", "Kun i saltvand", "Kun med våddragt"],
  "Hvile er tilladt, men du må ikke trække dig frem i bøjen eller båden.");
Q("regler", 1, "Hvilken svømmestil må du bruge i triathlon?",
  ["Hvilken som helst", "Kun crawl", "Kun brystsvømning", "Kun rygcrawl"],
  "De fleste svømmer crawl, men du må bruge enhver stil. Finner og paddles er forbudt.");
Q("regler", 1, "Må man bruge finner i triathlon-svømningen?",
  ["Nej", "Ja, hvis vandet er koldt", "Ja, men kun korte finner", "Kun i Ironman"],
  "Hjælpemidler, der giver fremdrift, som finner og paddles, er forbudt.");
Q("regler", 1, "Hvad skal du have på overkroppen under hele løbet ifølge World Triathlon?",
  ["Den skal være dækket", "Ingenting – bar overkrop er tilladt", "Kun en våddragt", "En regnjakke"],
  "Torsoen skal være dækket under cykling og løb. Lyn trisuiten.");
Q("regler", 1, "Hvem må være på ruten og hjælpe dig med en punktering i de fleste amatørløb?",
  ["Kun du selv eller officiel teknisk support", "Alle tilskuere", "Din træner, hvis han eller hun har et officielt trænerkort", "Din familie"],
  "Du må typisk kun få hjælp fra officielle servicefolk. Ellers skal du klare det selv.");
Q("regler", 1, "Hvad er reglen om at køre i vejsiden i de fleste løb?",
  ["Kør i højre side, når du ikke overhaler", "Kør midt på vejen, så du har plads til at undvige huller i begge sider", "Kør i venstre side hele tiden", "Kør hvor du vil"],
  "Blokering – at køre midt på vejen eller i venstre side – kan give straf.");
REGNE = true;
Q("regler", 1, "Draftzonen er 12 m. En cykel er ca. 2 m lang. Hvor mange cykellængder svarer zonen til?",
  ["6", "4", "8", "12"],
  "12 ÷ 2 = 6 cykellængder. Det er længere, end man tror.");
Q("regler", 1, "Du får 5 minutters straf og bruger 30 sekunder på at stoppe og starte. Hvor meget tid taber du?",
  ["5 min 30 s", "5 min", "4 min 30 s", "6 min"],
  "5:00 + 0:30 = 5:30.");
REGNE = false;
Q("regler", 1, "Hvad betyder et rødt kort typisk i triathlon?",
  ["Diskvalifikation", "En advarsel", "En bonus", "At du skal drikke mere"],
  "Et rødt kort betyder, at du er ude af løbet.");

// --- Sølv (mellem) ---
Q("regler", 2, "Hvor lang er draftzonen typisk i World Triathlons non-drafting-løb på standard distance og længere?",
  ["12 meter", "3 meter", "25 meter", "50 meter"],
  "World Triathlon bruger 12 m på standard distance og længere og 10 m i sprint og kortere. Tjek løbsmanualen.");
Q("regler", 2, "Hvor lang tid har du typisk til at overhale gennem draftzonen i Ironman?",
  ["25 sekunder", "5 sekunder", "2 minutter", "Ubegrænset tid"],
  "Ironman giver 25 sekunder til at passere gennem den 12 m lange zone. Kommer du ikke forbi, skal du falde tilbage.");
QM("regler", 2, "Hvad gør rytter B på tegningen?",
  ["Overhaler A lovligt i venstre side", "Kører i A's draftzone", "Blokerer vejen", "Kører i forkert retning mod de andre ryttere"],
  "B er ude i venstre side og på vej forbi. Det er lovligt, hvis B kommer forbi inden for tidsgrænsen.",
  DRAFT("forbi"));
Q("regler", 2, "Hvorfor må to ryttere ikke køre side om side i et non-drafting-løb?",
  ["De spærrer vejen for andre, der vil overhale", "Fordi den ene så kører i den andens draftzone bagfra", "Fordi det er for hyggeligt", "Det må de godt"],
  "At køre side om side er blocking. Overhal eller fald tilbage.");
QM("regler", 2, "Hvad er problemet med rytter A's placering?",
  ["A kører midt på vejen og blokerer for overhaling", "A kører i B's draftzone", "A kører for langt ude til højre, tæt på grøftekanten", "Der er intet problem"],
  "Kører man midt på vejen, kan andre ikke overhale. Hold til højre.",
  DRAFT("blok"));
Q("regler", 2, "Hvad betyder et blåt kort i Ironman?",
  ["En draftingstraf, der afsones i et penaltytelt", "At du skal svømme en ekstra runde", "At du har vundet din aldersgruppe og skal på podiet efter målstregen", "At du skal skifte cykel"],
  "Blå kort bruges ved drafting. Straffen afsones i det næste penaltytelt på cykelruten.");
Q("regler", 2, "Hvad sker der efter tre blå kort i et Ironman-løb?",
  ["Diskvalifikation", "Du får en medalje", "Du skal stoppe i 1 minut", "Ingenting"],
  "Tre blå kort betyder diskvalifikation. Hold afstand!");
Q("regler", 2, "Hvad betyder 'draft-legal'?",
  ["At drafting er tilladt, som i World Triathlons eliteløb", "At du skal holde mindst 12 meters afstand til alle andre ryttere hele tiden", "At du skal cykle alene", "At der ikke er drafting"],
  "I draft-legal løb kører man i grupper. Racercykler er påkrævet, og lange aerobøjler er forbudt.");
Q("regler", 2, "Hvem har ansvaret for at undgå drafting, når en rytter overhaler dig?",
  ["Du, der er blevet overhalet, skal falde tilbage", "Den, der overhaler, skal sætte farten ned og køre tilbage bag dig", "Ingen – det er tilladt", "Dommeren"],
  "Når du er overhalet, er du i den andens zone. Du skal falde tilbage.");
Q("regler", 2, "Må man drafte bag en motorcykel eller bil i et triathlonløb?",
  ["Nej, det er heller ikke tilladt", "Ja, motorkøretøjer er undtaget fra reglerne", "Kun op ad bakke", "Kun i medvind"],
  "Drafting bag køretøjer er forbudt. Mediemotorcykler holder afstand for ikke at give læ.");
Q("regler", 2, "Hvad er 'blocking' i triathlon?",
  ["At køre i venstre side eller midt på vejen, så andre ikke kan overhale", "At blokere for bølger i svømningen", "At holde fast i en bøje", "At stoppe ved et depot"],
  "Blocking giver straf. Hold til højre, når du ikke overhaler.");
Q("regler", 2, "Hvad sker der typisk, hvis du smider affald uden for affaldszonen i Ironman?",
  ["Du får straf", "Ingenting", "Du får en bøde efter løbet", "Du skal samle alt affald på ruten"],
  "Littering giver straf. Brug de markerede zoner ved depoterne.");
Q("regler", 2, "Hvad er reglen om våddragt for aldersgruppeatleter hos World Triathlon ved meget koldt vand?",
  ["Den bliver obligatorisk under en vis temperatur", "Den er altid forbudt", "Den er valgfri ved alle temperaturer", "Man må kun svømme med neoprenhætte og -sokker, ikke med en hel dragt"],
  "Ved meget koldt vand er våddragt påkrævet. Ved varmt vand er den forbudt. Grænserne afhænger af distancen.");
Q("regler", 2, "Hvad betyder DTriF?",
  ["Dansk Triathlon Forbund", "Dansk Trænings- og Idrætsforening", "Den Triathlon-internationale Federation", "Dansk Tri-Institut for Fitness"],
  "DTriF er det danske forbund. Det følger i høj grad World Triathlons regler med danske tilpasninger.");
Q("regler", 2, "Hvad er 'løbsmanualen' (athlete guide)?",
  ["Arrangørens dokument med ruter, tider og regler for netop det løb", "En bog om løbeteknik", "En træningsplan, som arrangøren sender ud til alle tilmeldte et halvt år før løbet", "En liste over vindere"],
  "Læs den grundigt. Den beskriver fx draftzone, våddragtsregler og depoter.");
Q("regler", 2, "Må du løbe med en klapvogn eller et barn over målstregen i Ironman?",
  ["Nej, det er ikke tilladt i Ironman i dag", "Ja, altid", "Kun børn under 5 år, og kun hvis de holder dig i hånden", "Kun ved første Ironman"],
  "Ironman har forbudt familiemedlemmer på målstregen af sikkerhedshensyn.");
Q("regler", 2, "Hvad er reglen om at have cyklen med uden for ruten?",
  ["Du skal blive på den afmærkede rute – skærer du af, kan du blive diskvalificeret", "Du må tage genveje", "Du må køre på fortovet", "Der er ingen regel"],
  "At afkorte ruten er snyd og giver diskvalifikation.");
REGNE = true;
Q("regler", 2, "Ved 40 km/t kører du ca. 11 m pr. sekund. Hvor mange meter kører du på de 25 sekunder, du har til at overhale?",
  ["Ca. 275 m", "Ca. 100 m", "Ca. 400 m", "Ca. 25 m"],
  "11 m/s × 25 s ≈ 275 m. Du skal være forbi, før tiden er gået.");
Q("regler", 2, "Ironman-draftzonen er 12 m, og du skal holde 12 m til rytteren foran. Hvor mange ryttere kan højst køre lovligt på 120 m?",
  ["Ca. 10", "Ca. 5", "Ca. 20", "Ca. 60"],
  "120 m ÷ 12 m = 10 pladser. I virkeligheden kommer cykellængden oveni.");
REGNE = false;

// --- Guld (svær) ---
Q("regler", 3, "Hvorfor bruger Ironman en draftzone på hele 12 m?",
  ["For at mindske fordelen ved læ, som også virker på længere afstand", "For at gøre ruten længere", "For at få færre deltagere", "For at gøre det lettere for dommerne at tælle cykellængder fra motorcyklen"],
  "Studier viser, at der er læ selv på 10+ m. Den længere zone gør løbet mere fair.");
Q("regler", 3, "Hvor stor en energibesparelse kan drafting tæt bag en anden rytter typisk give?",
  ["Op til ca. 30-40 %", "Ca. 1-2 % – så lidt, at det kun betyder noget for proffer", "Ca. 80-90 %", "Ingen"],
  "Tæt bag en rytter kan du spare en stor del af energien. Selv på længere afstand er der en lille gevinst.");
Q("regler", 3, "Hvad er 'pack riding' i amatørløb, og hvorfor er det et problem?",
  ["Mange ryttere kører i en gruppe med for lidt afstand – det er drafting og giver urimelige fordele", "At pakke cyklen ned efter løbet", "At køre med en rygsæk", "At cykle i skiftezonen"],
  "Store felter kan gøre det svært at holde afstand, men det er rytterens ansvar.");
Q("regler", 3, "Hvor lang er draftzonen i World Triathlons non-drafting-løb på sprintdistance og kortere?",
  ["10 meter", "12 meter, ligesom på standard distance og længere", "7 meter", "20 meter"],
  "World Triathlon bruger 10 m på sprint og kortere og 12 m på standard distance og længere. Tjek altid den aktuelle udgave.");
Q("regler", 3, "Hvad er 'unsportsmanlike conduct' i triathlon?",
  ["Usportslig opførsel, fx at true officials eller snyde – kan give diskvalifikation", "At gå på løbet", "At bruge våddragt i vand, der er varmere end grænsen, uden at have fået lov", "At drikke cola"],
  "Respekt for officials, frivillige og andre atleter er en del af reglerne.");
Q("regler", 3, "Hvad sker der, hvis du ikke afsoner en tidsstraf, du har fået?",
  ["Du bliver diskvalificeret", "Den bliver lagt til tiden dobbelt", "Ingenting", "Den bliver glemt"],
  "Det er dit ansvar at stoppe i penaltyboksen eller penaltyteltet.");
Q("regler", 3, "Hvorfor er glasflasker forbudt i mange løb?",
  ["Glasskår på ruten er farligt for cykler og løbere", "Fordi glas er for tungt", "Fordi sponsorerne kun vil have deres egne plastflasker på billederne fra løbet", "De er ikke forbudt"],
  "Skår giver punkteringer og skader. Brug plastflasker.");
Q("regler", 3, "Hvad er reglen om 'pacing' på løberuten i de fleste triathlonløb?",
  ["Det er forbudt at blive ledsaget eller paced af personer, der ikke er i løbet", "Det er tilladt de sidste 10 km", "Det er tilladt, hvis ledsageren cykler og ikke løber ved siden af dig", "Det er altid tilladt"],
  "Tilskuere må heppe, men ikke løbe eller cykle ved siden af.");
Q("regler", 3, "Hvorfor er der i Ironman særlige regler for aldersgruppe-atleter, der bruger våddragt mellem 24,6 og 28,8 °C?",
  ["De må bruge den, men kan ikke vinde præmier eller kvalificere sig", "De får tidsstraf", "De bliver diskvalificeret, hvis de ikke tager dragten af inden 1.000 m", "Der er ingen regler"],
  "Ironman lader atleter vælge sikkerhed frem for konkurrence i varmt vand.");
Q("regler", 3, "Hvad er 'positionsreglen' i mange non-drafting-løb – hvornår er du officielt overhalet?",
  ["Når den anden rytters forhjul er foran dit", "Når den anden rytter er mindst 50 meter foran dig på ruten", "Når I er side om side", "Når dommeren siger det"],
  "Når forhjulet er foran dit, er du overhalet og skal falde tilbage.");
Q("regler", 3, "Hvorfor er der regler om lange aerobøjler i draft-legal-løb?",
  ["Det er farligt at ligge i aeroposition i tætte grupper, hvor bremserne er langt væk", "Fordi aerobøjler gør cyklen hurtigere end lovligt", "For at alle cykler ser ens ud", "Der er ingen regler"],
  "Korte clip-on bøjler er tilladt under bestemte mål. Sikkerhed går forud.");
Q("regler", 3, "Hvad skal du gøre, hvis en official viser dig et kort, du ikke forstår?",
  ["Fortsætte og følge instruktionen – spørg ved penaltyboksen eller efter løbet", "Stoppe og diskutere med officialen midt på ruten, til du har forstået reglen", "Ignorere det", "Køre hurtigere væk"],
  "Diskussion på ruten er farligt og kan give straf for usportslig opførsel.");
Q("regler", 3, "Hvorfor gives der straf for at have lynlåsen på trisuiten åben helt ned i nogle regelsæt?",
  ["Reglerne om dækket overkrop – en helt åben dragt kan tælle som 'bar torso'", "Fordi lynlåse er forbudt", "Fordi det giver luftmodstand", "Det gives der aldrig straf for"],
  "Tjek regelsættet. World Triathlon har regler om, hvor meget lynlåsen må være åben.");
REGNE = true;
Q("regler", 3, "Du kører 36 km/t og rytteren foran 34 km/t. Hvor lang tid tager det at køre 12 m tættere på (passere draftzonen)?",
  ["Ca. 22 sekunder", "Ca. 6 sekunder", "Ca. 60 sekunder", "Ca. 12 sekunder"],
  "Forskel 2 km/t ≈ 0,56 m/s. 12 m ÷ 0,56 m/s ≈ 21,6 s. Under 25 sekunders-grænsen i Ironman – lige.");
Q("regler", 3, "Drafting sparer 30 % energi. Uden læ skal du træde 250 W. Hvor mange watt skal du træde i læ?",
  ["175 W", "220 W", "150 W", "125 W"],
  "250 × 0,70 = 175 W. Derfor er drafting forbudt i non-drafting-løb.");
Q("regler", 3, "En rytter får 5 min straf for drafting men sparede 3 min ved at køre i læ. Hvad er nettoresultatet?",
  ["2 minutter langsommere", "3 minutter hurtigere", "8 minutter langsommere", "Ingen forskel"],
  "+5 min straf − 3 min gevinst = 2 minutter langsommere. Og et advarselskort.");
REGNE = false;
Q("regler", 3, "Hvad er det vigtigste at tjekke i løbsmanualen om draftreglerne?",
  ["Zonens længde, tid til at overhale og hvordan straffe afsones", "Farven på dommernes jakker og motorcykler, så du kan genkende dem", "Hvor mange tilskuere der kommer", "Navnene på dommerne"],
  "Reglerne kan variere mellem løb. Læs dem, før du stiller op.");
Q("regler", 3, "Hvorfor kan det være lovligt at køre tæt bag en anden rytter kortvarigt i non-drafting-løb?",
  ["Ved overhaling, sikkerhed, ved depoter eller skarpe sving, som reglerne beskriver", "Det er aldrig lovligt", "Når man er træt", "Når det blæser"],
  "Reglerne har undtagelser fx ved overhaling, sikkerhedssituationer og vendepunkter.");
Q("regler", 3, "Hvorfor er der regler om kropsmaling eller reklamer på startnummeret?",
  ["Nummeret skal være let at læse og må ikke ændres", "Fordi farver er forbudt", "For at undgå, at deltagernes egne sponsorer konkurrerer med arrangørens", "Der er ingen regler"],
  "Nummeret må ikke foldes eller klippes, så officials kan se det.");
R("regler", 2, "Sæt en lovlig overhaling på cyklen i rækkefølge.",
  ["Se dig tilbage og tjek, at der er plads", "Træk ud i venstre side", "Passér rytteren inden for tidsgrænsen", "Træk ind i højre side igen foran rytteren", "Fortsæt i dit eget tempo"],
  "Den overhalede skal derefter falde tilbage ud af din draftzone.");
Q("regler", 1, "Hvad skal du gøre, hvis du vil udgå af et løb?",
  ["Give besked til en official eller ved tidstagningen", "Bare gå hjem uden at sige noget til nogen", "Smide startnummeret i vandet", "Skjule dig i skiftezonen"],
  "Arrangøren skal vide, at du er ude – ellers kan de tro, du er forsvundet på ruten.");
Q("regler", 1, "Hvad er tidstagningschippen?",
  ["En chip, typisk om anklen, der registrerer dine tider", "En lille snack, du får ved målstregen", "Et kort, du skal vise ved depoterne", "En del af cyklens gear"],
  "Chippen registrerer tider ved måtter i start, skift og mål. Mister du den, skal du give besked.");
Q("regler", 2, "Hvad er en 'penaltyboks' i World Triathlon-løb?",
  ["Et markeret område, hvor du afsoner tidsstraffe", "En kasse, du skal lægge dit affald i", "En boks med reservedele", "Et omklædningsrum"],
  "Tidsstraffe afsones ofte i penaltyboksen på løberuten. Dit nummer står på en tavle.");
Q("regler", 2, "Hvad sker der, hvis du mister din tidstagningschip under løbet?",
  ["Du skal give besked til en official, så dine tider kan registreres", "Du bliver automatisk diskvalificeret med det samme", "Du skal svømme tilbage og finde den", "Ingenting"],
  "Uden chip mangler dine tider. Sig det til en official hurtigst muligt.");
Q("regler", 2, "Hvorfor holder officials ofte øje med cykelhjelmen ved check-in?",
  ["Hjelmen skal være godkendt og hel", "Fordi alle hjelme skal have samme farve", "For at tjekke din hovedstørrelse", "Det gør de ikke"],
  "En revnet eller ikke-godkendt hjelm kan betyde, at du ikke må starte.");
Q("regler", 2, "Hvad er reglen om kropsnummer (body marking) i mange løb?",
  ["Dit startnummer skrives på arme og/eller ben", "At du skal male dig i klubbens farver", "At du skal have tatoveringer", "Der er ingen regel"],
  "Body marking gør det let for officials at identificere dig, også i vandet.");
Q("regler", 2, "Hvad betyder det, at svømningen bliver 'forkortet' eller aflyst?",
  ["Arrangøren ændrer ruten af sikkerhedshensyn, fx ved storm eller kulde", "At de hurtigste må svømme kortere", "At man må vælge selv", "At løbet bliver en duathlon med det samme"],
  "Sikkerhed går forud. Ved dårligt vejr kan svømningen kortes ned eller erstattes af løb.");
Q("regler", 3, "Hvad er en almindelig regel om at forlade ruten for at gå på toilet?",
  ["Du må gå på toilet i de opstillede toiletter og fortsætte, hvor du stoppede", "Du må tisse hvor som helst langs ruten", "Det er forbudt at gå på toilet under løbet", "Du skal udgå"],
  "Offentlig urinering kan give straf eller diskvalifikation. Brug toiletterne ved depoterne.");
Q("regler", 3, "Hvorfor tillader nogle regelsæt ikke, at du bærer din cykel over målstregen eller i skiftezonen på bestemte måder?",
  ["Sikkerhed – cyklen kan ramme andre", "Fordi det ser dumt ud", "For at spare plads", "Der er ingen sådanne regler"],
  "Følg anvisningerne. I skiftezonen skal cyklen trækkes eller føres sikkert.");
Q("regler", 3, "Hvordan bliver en kvalifikation (slot) til VM fordelt i Ironman?",
  ["Efter aldersgruppe og placering i kvalificerende løb", "Ved lodtrækning blandt alle deltagere på løbsdagen", "Efter hvem der har den dyreste cykel", "Alle får en slot"],
  "Slots fordeles mellem aldersgrupper. Har du vundet en, skal du ofte acceptere den på stedet.");
Q("regler", 3, "Hvad er 'DNF' i resultatlisten?",
  ["Did Not Finish – gennemførte ikke", "Did Not Fail – gennemførte med straf", "Draft Not Found – ingen drafting", "Dansk Nationalt Forbund"],
  "DNF betyder, at atleten startede men ikke kom i mål. DNS betyder, at atleten ikke startede.");
Q("regler", 3, "Hvad er 'DSQ' i resultatlisten?",
  ["Diskvalificeret", "Dobbelt svømmetid", "Dommerens særlige kvalifikation", "Delt sidsteplads"],
  "DSQ betyder diskvalifikation, fx for ikke at afsone en straf eller for usportslig opførsel.");
Q("regler", 3, "Hvorfor kan det være forbudt at bruge en powermeter eller GPS med radiokommunikation til en træner under løbet?",
  ["Fordi det kan give udefrakommende hjælp og information", "Fordi powermetre er forbudt i al triathlon", "Fordi de giver luftmodstand", "Det er aldrig forbudt"],
  "Selve målerne er tilladt i amatørløb. Det er tovejs-kommunikation med andre, der er problemet.");
