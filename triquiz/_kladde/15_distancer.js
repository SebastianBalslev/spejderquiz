/* =====================================================================
   DISTANCER OG RACETYPER  (emne: "distancer")
   ===================================================================== */
// Tegner tre søjler for svøm, cykel og løb med de angivne distancer.
const DIST = (svom, cykel, loeb) => {
  const maks = Math.max(cykel, 1), h = k => Math.max(4, 90 * k / maks);
  const soejle = (x, k, farve, ikon, tekst) => `<rect x="${x}" y="${112 - h(k)}" width="40" height="${h(k)}" rx="4" fill="${farve}"/>
    <text x="${x + 20}" y="${106 - h(k)}" font-size="10" font-weight="800" text-anchor="middle" fill="#1b2530">${tekst}</text>
    <text x="${x + 20}" y="128" font-size="14" text-anchor="middle">${ikon}</text>`;
  return TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/><path d="M14 112 L186 112" stroke="#1b2530" stroke-width="2"/>
    ${soejle(22, svom, "#1d6fa5", "🏊", (svom < 1 ? svom * 1000 + " m" : String(svom).replace(".", ",") + " km"))}
    ${soejle(80, cykel, "#e0662a", "🚴", cykel + " km")}
    ${soejle(138, loeb, "#2a9d8f", "🏃", String(loeb).replace(".", ",") + " km")}`);
};

// --- Bronze (let) ---
Q("distancer", 1, "Hvilke tre discipliner er der i triathlon?",
  ["Svømning, cykling og løb", "Svømning, roning og løb", "Cykling, løb og skiløb", "Svømning, cykling og gang"],
  "Altid i den rækkefølge: svøm, cykel, løb.");
Q("distancer", 1, "Hvad er distancerne i en sprinttriathlon?",
  ["750 m svøm, 20 km cykel, 5 km løb", "1,5 km svøm, 40 km cykel og 10 km løb", "3,8 km svøm, 180 km cykel, 42,2 km løb", "100 m svøm, 5 km cykel, 1 km løb"],
  "Sprint er halvdelen af den olympiske distance – og en god første triathlon.");
Q("distancer", 1, "Hvad er distancerne på olympisk (standard) distance?",
  ["1,5 km svøm, 40 km cykel, 10 km løb", "750 m svøm, 20 km cykel og 5 km løb", "1,9 km svøm, 90 km cykel, 21,1 km løb", "3 km svøm, 100 km cykel, 20 km løb"],
  "Det er distancen fra De Olympiske Lege. I alt 51,5 km.");
Q("distancer", 1, "Hvad er distancerne i en hel Ironman?",
  ["3,8 km svøm, 180 km cykel, 42,2 km løb", "1,9 km svøm, 90 km cykel og en halvmaraton", "1,5 km svøm, 40 km cykel, 10 km løb", "5 km svøm, 200 km cykel, 50 km løb"],
  "I alt ca. 226 km – eller 140,6 miles.");
Q("distancer", 1, "Hvad er distancerne i en halv Ironman (70.3)?",
  ["1,9 km svøm, 90 km cykel, 21,1 km løb", "3,8 km svøm, 180 km cykel og et helt maraton", "750 m svøm, 20 km cykel, 5 km løb", "1 km svøm, 50 km cykel, 10 km løb"],
  "70.3 er det samlede antal miles. Distancen er præcis halvdelen af en hel Ironman.");
Q("distancer", 1, "Hvorfor hedder en halv Ironman '70.3'?",
  ["Det er den samlede distance i miles", "Det er den hurtigste tid nogensinde i timer", "Det er antallet af deltagere i det første løb", "Det er årstallet for det første løb"],
  "1,2 + 56 + 13,1 miles = 70,3 miles ≈ 113 km.");
Q("distancer", 1, "Hvad er en duathlon?",
  ["Løb, cykel, løb", "Svøm og cykel", "Svøm og løb", "To svømninger med en kort cykeltur imellem"],
  "Duathlon har ingen svømning. Det er godt om vinteren eller for dem, der ikke svømmer.");
Q("distancer", 1, "Hvad er en akvathlon?",
  ["Svømning og løb", "Svømning og cykling", "Kun svømning i havet", "Cykling og løb"],
  "Akvathlon kombinerer svøm og løb – ofte løb, svøm, løb eller svøm, løb.");
Q("distancer", 1, "Hvad er en supersprint?",
  ["En meget kort triathlon, fx ca. 400 m svøm, 10 km cykel og 2,5 km løb", "En hel Ironman på én dag uden pauser", "En sprint på 100 meter, hvor man kun løber, som afslutning på en triathlon-dag", "En triathlon på 100 km"],
  "Supersprint er kort og intens – populær i holdkonkurrencer og som første løb.");
Q("distancer", 1, "Hvad er rækkefølgen i en almindelig triathlon?",
  ["Svøm, cykel, løb", "Løb, cykel, svøm", "Cykel, svøm, løb", "Svøm, løb, cykel"],
  "Svømningen er først, fordi den er sikrest, når alle er friske.");
Q("distancer", 1, "Hvad er 'aldersgrupper' i triathlon?",
  ["Klasser opdelt efter alder, fx 25-29 år", "Grupper delt efter hvor hurtige deltagerne er", "Grupper efter vægt", "Grupper efter cykeltype"],
  "Typisk er aldersgrupperne på 5 år. Du konkurrerer mod dem på din egen alder.");
Q("distancer", 1, "Hvilken distance vælger mange som deres første triathlon?",
  ["Sprint eller supersprint", "En hel Ironman", "Et ultraløb", "En hel Ironman, så de har prøvet det hele"],
  "En kort distance giver erfaring med skift og pacing, uden at træningen behøver være enorm.");
Q("distancer", 1, "Hvad er en stafet-triathlon?",
  ["Hold, hvor hver deltager laver en disciplin", "En triathlon, hvor alle deltagere skal svømme dobbelt så langt som normalt", "En triathlon kun for proffer", "En triathlon uden cykel"],
  "Én svømmer, én cykler og én løber – godt for klubhold og venner.");
Q("distancer", 1, "Hvad kaldes en triathlon på mountainbike og trailløb?",
  ["Cross-triathlon", "Bjergtriathlon i havet", "Indendørstriathlon", "Duathlon"],
  "Cross-triathlon (fx XTERRA) foregår i terræn. Svømningen er typisk i åbent vand.");
QM("distancer", 1, "Hvilken distance viser tegningen?",
  ["Sprint", "Olympisk (standard) distance", "Halv Ironman", "Hel Ironman"],
  "750 m svøm, 20 km cykel og 5 km løb er sprintdistancen.",
  DIST(0.75, 20, 5));
QM("distancer", 1, "Hvilken distance viser tegningen?",
  ["Olympisk (standard)", "Sprint", "Halv Ironman", "Supersprint (kort udgave af sprint)"],
  "1,5 km svøm, 40 km cykel og 10 km løb er den olympiske distance.",
  DIST(1.5, 40, 10));
REGNE = true;
Q("distancer", 1, "Hvor mange km er en sprinttriathlon i alt (750 m + 20 km + 5 km)?",
  ["25,75 km", "25 km", "26,5 km", "30 km"],
  "0,75 + 20 + 5 = 25,75 km.");
Q("distancer", 1, "Hvor mange km er den olympiske distance i alt (1,5 + 40 + 10)?",
  ["51,5 km", "50 km", "55 km", "41,5 km"],
  "1,5 + 40 + 10 = 51,5 km.");
Q("distancer", 1, "Halv Ironman er halvdelen af en hel. Hvor langt cykler man i en hel Ironman, når 70.3 er 90 km?",
  ["180 km", "90 km", "120 km", "200 km"],
  "90 × 2 = 180 km.");
REGNE = false;
Q("distancer", 1, "Hvad betyder 'langdistance' i triathlon?",
  ["Distancer som halv og hel Ironman", "Alle løb over 5 km", "Kun svømning over 10 km i åbent vand, fx over Storebælt", "Sprint og supersprint"],
  "Langdistance dækker typisk halv- og helddistance og endnu længere løb.");
Q("distancer", 1, "Hvornår blev triathlon en del af De Olympiske Lege første gang?",
  ["I Sydney 2000", "I Moskva 1980", "I Barcelona 1992", "I Tokyo 2020"],
  "Triathlon kom på programmet ved OL i Sydney i 2000.");
Q("distancer", 1, "Hvad er en 'aquabike'?",
  ["Svømning og cykling uden løb", "Cykling på en særlig vandcykel med pontoner på en sø", "Svømning med finner", "En cykel med flydere"],
  "Aquabike passer til dem, der ikke kan eller vil løbe.");
Q("distancer", 1, "Hvad kaldes det danske triathlonforbund?",
  ["Dansk Triathlon Forbund (DTriF)", "Danmarks Idrætsforbund for Svømning", "Dansk Cykle Union", "Dansk Atletik Forbund"],
  "DTriF organiserer triathlon i Danmark, fx DM og licenser.");
R("distancer", 1, "Sæt distancerne i rækkefølge fra kortest til længst.",
  ["Supersprint", "Sprint", "Olympisk", "Halv Ironman (70.3)", "Hel Ironman"],
  "Hver distance er ca. dobbelt så lang som den foregående – i hvert fald fra sprint og op.");

// --- Sølv (mellem) ---
Q("distancer", 2, "Hvad er 'mixed relay' i triathlon?",
  ["Stafet med to kvinder og to mænd, der hver laver en kort triathlon", "En triathlon, hvor hver deltager selv vælger rækkefølgen af de tre discipliner, og bedste kombination vinder", "En stafet med kun svømning", "En triathlon med to cykler"],
  "Mixed relay kom på OL-programmet i Tokyo (afholdt i 2021). Hver deltager laver en supersprint.");
Q("distancer", 2, "Hvor afholdes Ironman-VM traditionelt?",
  ["Kona på Hawaii", "Roth i Tyskland", "København", "Nice i Frankrig"],
  "Kona på Hawaii er Ironmans legendariske VM-sted. VM har dog også været afholdt andre steder.");
Q("distancer", 2, "Hvad er Challenge Roth?",
  ["Et meget stort langdistanceløb i Tyskland med fuld distance", "Et sprintløb i Danmark", "En type cykel", "En svømmekonkurrence i Rhinen, hvor man svømmer med strømmen fra Schweiz"],
  "Roth er kendt for enorme tilskuermængder og hurtige tider på fuld distance.");
Q("distancer", 2, "Hvad er tidsgrænsen typisk for en hel Ironman?",
  ["17 timer", "10 timer", "24 timer", "12 timer"],
  "Mange Ironman-løb har en grænse på 17 timer. Der er også delgrænser for svøm og cykel.");
Q("distancer", 2, "Hvad er en 'ultra-triathlon'?",
  ["Længere end en hel Ironman, fx dobbelt eller tredobbelt", "En sprinttriathlon, der afholdes i ekstremt varmt vejr i ørkenen", "En triathlon på løbebånd", "En triathlon kun for børn"],
  "Ultra-triathlon kan vare flere dage. Det er ekstremt krævende.");
Q("distancer", 2, "Hvad er 'swimrun'?",
  ["Skift mellem svømning og løb mange gange, ofte i par, i sko og våddragt", "En svømning i et bassin efterfulgt af løb på bane", "En cykeltur langs vandet", "En triathlon uden cykel"],
  "Swimrun stammer fra Sverige (ÖtillÖ). Man løber i våddragt og svømmer i sko.");
Q("distancer", 2, "Hvad er en vintertriathlon?",
  ["Løb, mountainbike og langrend på sne", "Svømning i isvand efterfulgt af skøjteløb og kælkning", "Indendørs triathlon", "En triathlon i december"],
  "Vintertriathlon har typisk løb, MTB og langrend.");
Q("distancer", 2, "Hvorfor er der delgrænser (cut-offs) i et langdistanceløb?",
  ["Af sikkerhedshensyn og for at ruter og depoter kan lukkes", "For at gøre løbet sværere for de hurtige", "Fordi tilskuerne vil hjem", "Der er ingen delgrænser"],
  "Når du ikke når en delgrænse, tages du ud af løbet. Kend grænserne.");
Q("distancer", 2, "Hvad er paratriathlon?",
  ["Triathlon for atleter med funktionsnedsættelse, i klasser", "Triathlon, hvor man starter med et faldskærmsudspring over vandet", "Triathlon på parkeringspladser", "Triathlon i par"],
  "Paratriathlon har været med ved De Paralympiske Lege siden Rio 2016 – på sprintdistance.");
Q("distancer", 2, "Hvad er T100 (tidligere PTO-løb)?",
  ["En professionel serie over 100 km: 2 km svøm, 80 km cykel, 18 km løb", "Et ultraløb, hvor man har 100 timer til at gennemføre så mange runder som muligt af en fast rute", "En sprint på 100 meter", "En serie kun for amatører"],
  "T100-serien blev lanceret for proffer med en distance mellem olympisk og halv Ironman.");
Q("distancer", 2, "Hvad er forskellen på 'Ironman' og 'fuld distance'?",
  ["Ironman er et varemærke – andre arrangører kalder samme distance fx 'full distance' eller 'langdistance'", "Ironman er længere end fuld distance", "Der er ingen distance kaldet fuld distance", "Fuld distance har ingen svømning"],
  "Navnet Ironman ejes af en virksomhed. Challenge og andre bruger andre navne.");
Q("distancer", 2, "Hvad er standarddistancen i duathlon hos World Triathlon?",
  ["10 km løb, 40 km cykel, 5 km løb", "5 km løb, 20 km cykel og 2,5 km løb", "21,1 km løb, 90 km cykel, 10 km løb", "1,5 km løb, 40 km cykel, 10 km løb"],
  "Standard duathlon er 10-40-5. Sprint er det halve: 5-20-2,5.");
Q("distancer", 2, "Hvad er ITU?",
  ["Det tidligere navn for World Triathlon", "Ironmans amerikanske ejerselskab, som ejer alle store løb", "Det danske triathlonforbund", "En type våddragt"],
  "International Triathlon Union skiftede navn til World Triathlon i 2020.");
Q("distancer", 2, "Hvilken distance bruges ved De Olympiske Lege for individuel triathlon?",
  ["Olympisk (standard) distance", "Sprint", "Halv Ironman", "Supersprint"],
  "1,5 km svøm, 40 km cykel og 10 km løb – og drafting er tilladt.");
Q("distancer", 2, "Hvad er Ironman 70.3 VM?",
  ["Verdensmesterskabet på halv distance, der flytter mellem lande", "Et løb på 70,3 km", "Et sprintmesterskab", "Et løb, der altid afholdes på Hawaii samme uge som det store VM"],
  "70.3 VM afholdes forskellige steder i verden hvert år.");
QM("distancer", 2, "Hvilken distance viser tegningen?",
  ["Halv Ironman (70.3)", "Hel Ironman", "Olympisk", "T100"],
  "1,9 km svøm, 90 km cykel og 21,1 km løb er halv Ironman.",
  DIST(1.9, 90, 21.1));
QM("distancer", 2, "Hvilken distance viser tegningen?",
  ["Hel Ironman", "Halv Ironman (70.3)", "T100", "Olympisk"],
  "3,8 km svøm, 180 km cykel og 42,2 km løb er en hel Ironman.",
  DIST(3.8, 180, 42.2));
REGNE = true;
Q("distancer", 2, "Hvor mange km er en hel Ironman i alt (3,8 + 180 + 42,2)?",
  ["226 km", "220 km", "232 km", "210 km"],
  "3,8 + 180 + 42,2 = 226 km.");
Q("distancer", 2, "Hvor mange km er en halv Ironman i alt (1,9 + 90 + 21,1)?",
  ["113 km", "110 km", "116 km", "100 km"],
  "1,9 + 90 + 21,1 = 113 km. Det svarer til 70,3 miles.");
Q("distancer", 2, "Hvor mange procent af en hel Ironmans samlede distance er cykling (180 af 226 km)?",
  ["Ca. 80 %", "Ca. 50 %", "Ca. 65 %", "Ca. 90 %"],
  "180 ÷ 226 ≈ 0,80. Cyklingen fylder mest – både i km og ofte i tid.");
Q("distancer", 2, "En T100 er 2 km svøm, 80 km cykel og 18 km løb. Hvor langt er det i alt?",
  ["100 km", "98 km", "102 km", "113 km"],
  "2 + 80 + 18 = 100 km.");
REGNE = false;
Q("distancer", 2, "Hvad er en 'vigtig forskel' på at træne til sprint og til Ironman?",
  ["Sprint kræver mere intensitet; Ironman mere mængde og ernæringsplan", "Der er ingen forskel", "Ironman kræver især lange svømmeture, fordi svømningen afgør det meste", "Sprint kræver mere mængde"],
  "Begge kræver alle tre discipliner, men balancen mellem fart og udholdenhed er forskellig.");

// --- Guld (svær) ---
Q("distancer", 3, "Hvor blev den første Ironman afholdt, og hvornår?",
  ["På Oahu, Hawaii, i 1978", "I Roth i 1990", "I Nice i 1982", "I Kona på Hawaii i 1990"],
  "Den første Ironman i 1978 havde 15 startende. Løbet flyttede til Kona i 1981.");
Q("distancer", 3, "Hvorfor kombinerede de første Ironman-arrangører netop 3,8 km svøm, 180 km cykel og et maraton?",
  ["De lagde tre eksisterende løb på Hawaii sammen", "Fordi det var den længste distance, man kunne nå på en dag", "Fordi det var olympiske distancer", "Det var tilfældigt"],
  "Waikiki Roughwater Swim, Around-Oahu Bike Race (forkortet) og Honolulu Marathon blev slået sammen.");
Q("distancer", 3, "Hvad er 'Kona-kvalifikation'?",
  ["En plads til Ironman-VM, som vindes i kvalificerende løb efter aldersgruppe", "En særlig træningslejr på Hawaii", "En medalje for at gennemføre", "En licens fra DTriF, som alle danskere skal have for at stille op i Ironman-løb i udlandet"],
  "Pladserne fordeles mellem aldersgrupper i hvert kvalificerende Ironman-løb.");
Q("distancer", 3, "Hvad er en 'kvadrupel Ironman' (Quadruple)?",
  ["Fire gange hel Ironman-distance i ét løb", "Fire Ironman-løb i fire forskellige lande inden for samme år", "En Ironman med fire skift", "En stafet med fire personer"],
  "Ultra-triathlon findes i dobbelt, tredobbelt, firedobbelt og endnu længere.");
Q("distancer", 3, "Hvorfor bruger mixed relay og Super League meget korte distancer?",
  ["Korte, intense løb er spændende for tilskuere og tv", "Fordi sprint er tilladt uden cykel", "Fordi Ironman er forbudt i hold", "Det er den ikke"],
  "Kort distance giver tæt kamp og mange skift – godt tv.");
Q("distancer", 3, "Hvad er 'super league triathlon'?",
  ["En professionel serie med meget korte, flere-runde formater", "En Ironman-serie for amatører, der kører over en hel sæson", "En liga i svømning", "En liga i duathlon"],
  "Formater som 'Triple Mix' og 'Eliminator' gør løbene korte og intense.");
Q("distancer", 3, "Hvorfor svømmer man ofte hurtigere på 'Ironman-distancen' i salt vand end i ferskvand?",
  ["Saltvand giver mere opdrift", "Saltvand er altid varmere", "Saltvandsruter er kortere, fordi de måles langs kysten", "Det gør man ikke"],
  "Mere opdrift giver bedre position og hurtigere tider.");
Q("distancer", 3, "Hvad er en almindelig delgrænse for svømningen i en hel Ironman?",
  ["Ca. 2 t 20 min", "Ca. 1 time", "Ca. 4 timer", "Ingen grænse – man må svømme, så længe det er lyst"],
  "Mange Ironman-løb har en svømmegrænse omkring 2 t 20 min. Tjek altid løbsmanualen.");
Q("distancer", 3, "Hvorfor kan to løb på 'samme distance' give vidt forskellige tider?",
  ["Rute, højdemeter, vejr, strøm og vandtemperatur er forskellige", "Fordi distancerne aldrig er de samme", "Fordi tidtagningen er forskellig", "Det giver de ikke"],
  "Sammenlign tider med omtanke. En kuperet rute i varme er langt langsommere.");
Q("distancer", 3, "Hvilken distance i paratriathlon bruges ved De Paralympiske Lege?",
  ["Sprint (750 m, 20 km, 5 km)", "Olympisk (1,5 km, 40 km, 10 km)", "Halv Ironman", "Supersprint"],
  "Paratriathlon køres på sprintdistance med forskellige klasser.");
Q("distancer", 3, "Hvad er 'Norseman' (Norseman Xtreme Triathlon)?",
  ["En ekstrem fuld-distance triathlon i Norge med fjordsvømning og bjergløb", "En sprinttriathlon i Danmark", "En duathlon i Sverige", "En vintertriathlon i Finland med langrend over frosne søer og løb i sne"],
  "Norseman starter med et spring fra en færge i Hardangerfjorden og slutter på bjerget Gaustatoppen.");
Q("distancer", 3, "Hvad er 'ÖtillÖ'?",
  ["Et kendt swimrun-løb i den svenske skærgård", "En svensk Ironman, der afholdes i Stockholm hvert år i august", "En type våddragt", "En cykelrute i Norge"],
  "Navnet betyder 'ø til ø'. Det startede som et væddemål mellem venner.");
REGNE = true;
Q("distancer", 3, "En hel Ironman er 140,6 miles. Hvor mange km er det (1 mile ≈ 1,609 km)?",
  ["Ca. 226 km", "Ca. 210 km", "Ca. 240 km", "Ca. 180 km"],
  "140,6 × 1,609 ≈ 226 km.");
Q("distancer", 3, "Hvor mange miles er det at cykle 180 km (1 mile ≈ 1,609 km)?",
  ["Ca. 112 miles", "Ca. 100 miles", "Ca. 120 miles", "Ca. 90 miles"],
  "180 ÷ 1,609 ≈ 112 miles.");
Q("distancer", 3, "Svømmegrænsen er 2:20 for 3,8 km. Hvilket tempo pr. 100 m skal du mindst holde (cirka)?",
  ["Ca. 3:41 pr. 100 m", "Ca. 3:00 pr. 100 m", "Ca. 4:10 pr. 100 m", "Ca. 2:30 pr. 100 m"],
  "140 min ÷ 38 = 3,68 min ≈ 3:41 pr. 100 m.");
Q("distancer", 3, "En dobbelt Ironman er 2 × hel distance. Hvor mange km løber man?",
  ["84,4 km", "42,2 km", "63,3 km", "100 km"],
  "2 × 42,2 = 84,4 km.");
Q("distancer", 3, "Tidsgrænsen er 17 timer. Du svømmer på 1:20, cykler på 7:00 og bruger 15 min i skiftene. Hvor lang tid har du til maratonet?",
  ["8 t 25 min", "8 t 40 min", "9 t 25 min", "7 t 55 min"],
  "17:00 − 1:20 − 7:00 − 0:15 = 8:25.");
REGNE = false;
Q("distancer", 3, "Hvorfor gør drafting olympisk triathlon til et helt andet løb end amatørløb på samme distance?",
  ["Cyklingen bliver taktisk i grupper, og løbeturen afgør ofte konkurrencen", "Fordi distancen er længere", "Fordi der ikke er svømning", "Det gør det ikke"],
  "I eliteløb er svømning og løb ofte vigtigst, fordi cyklingen køres i grupper.");
QM("distancer", 3, "Hvilket løb viser tegningen?",
  ["T100", "Halv Ironman (70.3)", "Olympisk", "Hel Ironman"],
  "2 km svøm, 80 km cykel og 18 km løb er T100-distancen.",
  DIST(2, 80, 18));
Q("distancer", 3, "Hvorfor kan det være smart at starte med sprint og olympisk, før man tager en hel Ironman?",
  ["Man får erfaring med skift, pacing og ernæring uden enorm træningsbelastning", "Fordi man ikke må tilmelde sig en Ironman uden at have gennemført mindst tre sprintløb og to olympiske med godkendte tider", "Fordi Ironman er kortere", "Det er ikke smart"],
  "Mange bruger et par sæsoner på kortere distancer, før de tager springet.");
Q("distancer", 1, "Hvor langt løber man i en hel Ironman?",
  ["Et maraton – 42,2 km", "En halvmaraton på 21,1 km, fordi man er træt", "10 km", "100 km"],
  "Maratonet kommer efter 3,8 km svømning og 180 km cykling.");
Q("distancer", 2, "Hvad kaldes en triathlon, hvor svømningen foregår i et bassin?",
  ["Bassintriathlon (pool triathlon)", "Open water-triathlon, fordi der er vand", "Akvathlon", "Duathlon"],
  "Mange begynderløb svømmer i bassin. Der starter man ofte én ad gangen.");
Q("distancer", 2, "Hvorfor starter deltagerne ofte med mellemrum i en bassintriathlon?",
  ["Der er kun plads til få svømmere i hver bane", "Fordi de hurtigste skal have et forspring på en hel time", "For at tilskuerne kan se hver enkelt", "Det gør de ikke"],
  "Ofte starter man efter forventet svømmetid, så banerne ikke bliver for trange.");
Q("distancer", 2, "Hvad er en 'rolling start' i mange Ironman-løb?",
  ["Deltagerne går i vandet få ad gangen efter forventet svømmetid", "Alle starter på samme tid fra stranden i én stor gruppe", "Man starter på cyklen", "En start, hvor man ruller ned ad en bakke"],
  "Rolling start mindsker trængsel og gør svømningen mere sikker.");
Q("distancer", 3, "Hvad er Ironman 70.3's tidsgrænse typisk?",
  ["8 t 30 min", "6 timer", "12 timer", "17 timer, ligesom en hel Ironman"],
  "Tjek løbsmanualen. Der er også delgrænser for svøm og cykel.");
Q("distancer", 3, "Hvorfor er der forskel på cykeldistancen i World Triathlons 'long distance' og Ironman?",
  ["World Triathlons long distance-regler tillader forskellige distancer, fx 3 km svøm, 120 km cykel og 30 km løb", "Fordi World Triathlon ikke har langdistance", "Fordi Ironman altid er kortere", "Der er ingen forskel"],
  "World Triathlons langdistance-VM har brugt varierende distancer, fx 3-120-30.");
Q("distancer", 3, "Hvorfor kaldes den olympiske distance også 'standard distance'?",
  ["Det er World Triathlons officielle betegnelse for 1,5-40-10", "Fordi den er den mest kedelige distance", "Fordi den kun bruges ved OL", "Fordi alle skal starte med den"],
  "'Standard distance' bruges i reglerne. 'Olympisk' er det populære navn.");
REGNE = true;
Q("distancer", 3, "Mixed relay: hver af 4 deltagere svømmer 300 m, cykler 6,8 km og løber 2 km. Hvor langt er holdets samlede distance?",
  ["36,4 km", "9,1 km", "27,2 km", "40 km"],
  "Én deltager: 0,3 + 6,8 + 2 = 9,1 km. Fire deltagere: 4 × 9,1 = 36,4 km.");
Q("distancer", 3, "Hvor mange sprintløb svarer en hel Ironmans samlede distance til (226 km ÷ 25,75 km)?",
  ["Ca. 8,8", "Ca. 5", "Ca. 12", "Ca. 4,4"],
  "226 ÷ 25,75 ≈ 8,8 sprintløb.");
REGNE = false;
