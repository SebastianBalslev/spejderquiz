/* =====================================================================
   RACEPLAN OG STRATEGI  (emne: "raceplan")
   ===================================================================== */
// Tegner en højdeprofil for en cykelrute med punkterne A, B og C.
const PROFIL = (pkt) => {
  const y = [100, 98, 70, 44, 40, 64, 96, 100, 98, 86, 74, 80, 96, 100];
  const pts = y.map((v, i) => `${10 + i * 14},${v}`).join(" ");
  const P = { A: [2, y[2]], B: [5, y[5]], C: [9, y[9]], D: [7, y[7]] };
  return TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/>
    <polygon points="10,120 ${pts} ${10 + 13 * 14},120" fill="#9cc79a" stroke="#2a6b3a" stroke-width="2"/>
    <path d="M10 120 L192 120" stroke="#1b2530" stroke-width="2"/>
    <text x="10" y="134" font-size="9" fill="#1b2530">0 km</text><text x="192" y="134" font-size="9" text-anchor="end" fill="#1b2530">90 km</text>
    ${pkt.map(k => `<circle cx="${10 + P[k][0] * 14}" cy="${P[k][1]}" r="9" fill="#e0662a" stroke="#fff" stroke-width="2"/><text x="${10 + P[k][0] * 14}" y="${P[k][1] + 4}" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">${k}</text>`).join("")}`);
};

// --- Bronze (let) ---
Q("raceplan", 1, "Hvad betyder 'nothing new on race day'?",
  ["Prøv ikke nyt udstyr, ny mad eller ny taktik på løbsdagen", "At man ikke må købe noget på expoen før løbet", "At løbet altid er det samme hvert år", "At man skal have nyt tøj på, så man føler sig frisk og klar på dagen"],
  "Alt, du bruger på løbsdagen, skal være afprøvet i træning.");
Q("raceplan", 1, "Hvad er 'taper' før et løb?",
  ["En periode med mindre træning, så kroppen bliver frisk", "En periode med ekstra meget og hård træning lige op til start", "En type tape til cyklen", "En pause på et halvt år"],
  "Du holder lidt fart i træningen, men skærer ned på mængden de sidste 1-2 uger.");
Q("raceplan", 1, "Hvorfor er det vigtigt at sove godt i ugen før løbet?",
  ["Natten før er tit urolig – søvnen i ugen før betyder mest", "Fordi man ikke må sove natten før løbet", "Fordi søvn gør musklerne tungere og stærkere, så du har mere kraft i benene", "Det er ikke vigtigt"],
  "Mange sover dårligt af nerver natten før. Det gør ikke så meget, hvis du har sovet godt i ugen før.");
Q("raceplan", 1, "Hvad bør du spise til morgenmad på løbsdagen?",
  ["Noget let og kendt med kulhydrat, 2-3 timer før start", "En stor bøf med fedt og løg lige før start", "Ingenting overhovedet", "Noget helt nyt og spændende fra hotellets store buffet, så du får mange forskellige næringsstoffer"],
  "Afprøvet morgenmad, fx havregrød, brød eller bananer. Spis i god tid.");
Q("raceplan", 1, "Hvornår bør du ankomme til løbsområdet?",
  ["I god tid, så du kan klargøre skiftezonen og varme op uden stress", "Fem minutter før start, så du ikke bliver nervøs af at vente", "Efter starten", "Dagen efter"],
  "Kom tidligt – køer ved toiletter og skiftezone tager tid.");
Q("raceplan", 1, "Hvad er en tjekliste til løbsdagen godt for?",
  ["Så du ikke glemmer udstyr som hjelm, våddragt og sko", "For at vise arrangøren, at du er klar til at starte", "For at have noget at læse, mens du venter i køen ved toiletterne", "Det er ikke godt"],
  "Pak efter liste dagen før. Tjek igen om morgenen.");
Q("raceplan", 1, "Hvad er et A-løb?",
  ["Sæsonens vigtigste løb, som du forbereder dig mest til", "Et løb, hvor man kun må få karakteren A", "Det første løb i alfabetet", "Et løb kun for de hurtigste i A-gruppen, som skal kvalificere sig"],
  "Mange har ét eller to A-løb og flere B- og C-løb som træning eller generalprøver.");
Q("raceplan", 1, "Hvorfor er det godt at have flere mål til et løb (fx A-, B- og C-mål)?",
  ["Så du kan være tilfreds, selv hvis dagen ikke går perfekt", "Fordi arrangøren kræver, at du skriver tre forskellige mål på tilmeldingen, så de kan dele dig i startgrupper", "For at gøre det mere stressende", "Det er ikke godt"],
  "A: drømmemålet. B: realistisk. C: gennemføre og have det godt.");
Q("raceplan", 1, "Hvor skal du stille dig i en massestart, hvis du er en langsom svømmer?",
  ["Bagerst eller ude i siden", "Helt forrest i midten", "Hvor de hurtigste står, så du kan svømme i læ bag dem", "Det er lige meget"],
  "Så undgår du at blive svømmet over af hurtige svømmere.");
Q("raceplan", 1, "Hvorfor laver man en plan for, hvad man spiser og drikker i løbet?",
  ["Så du får energi nok og undgår at gå sukkerkold", "Fordi man ikke må tage mad fra depoterne uden en plan, som er godkendt af arrangøren", "For at vise depoterne", "Det gør man ikke"],
  "Især på lange distancer skal kroppen have energi undervejs. En plan gør det lettere.");
Q("raceplan", 1, "Hvad kan du gøre, hvis du bliver nervøs før start?",
  ["Trække vejret dybt og tænke på din plan", "Drikke et stort glas kaffe mere end normalt", "Løbe en hurtig 5 km", "Gå hjem"],
  "Nervøsitet er normalt. Rolig vejrtrækning og fokus på det, du kan styre, hjælper.");
Q("raceplan", 1, "Hvorfor er det godt at kende ruten før løbet?",
  ["Du ved, hvor bakker, sving og depoter er", "Fordi du skal tegne den til dommerne", "For at kunne finde de smarte genveje, som de fleste ikke kender", "Det er ikke godt"],
  "Kør eller kør med bil ruten, eller studér kortet. Det giver ro og bedre pacing.");
Q("raceplan", 1, "Hvad betyder det at 'dele løbet op i bidder'?",
  ["At tænke på ét stykke ad gangen, fx til næste depot", "At stoppe og spise noget hver eneste kilometer hele vejen", "At lave hele løbet om", "At svømme flere gange"],
  "En lang dag føles lettere, når man fokuserer på næste mål – ikke på hele distancen.");
QM("raceplan", 1, "På højdeprofilen: Hvor er det klogt at holde igen og ikke køre for hårdt?",
  ["Ved A – op ad den lange stigning", "Ved B – ned ad bakken", "Ved alle punkter lige meget", "Ingen steder"],
  "Lange stigninger frister til at køre for hårdt. Hold et loft på watt eller puls.",
  PROFIL(["A", "B"]));
Q("raceplan", 1, "Hvad bør du gøre de sidste dage før løbet?",
  ["Træne lidt og let og hvile meget", "Træne mere end nogensinde for at være sikker", "Prøve en ny cykel", "Gå i fitness og løfte tungt"],
  "Formen er bygget. De sidste dage handler om at være frisk.");
Q("raceplan", 1, "Hvad er en 'race-uge'?",
  ["Ugen op til løbet med taper, planlægning og hvile", "En uge med kun løbetræning og ingen svømning", "En uge, hvor man ser gamle løb i fjernsynet for at blive motiveret", "Ugen efter løbet"],
  "Brug ugen på at hvile, spise godt, tjekke udstyr og lave planen færdig.");
Q("raceplan", 1, "Hvorfor skal du tjekke vejrudsigten før løbet?",
  ["Så du kan vælge tøj, væske og tempo efter vejret", "Fordi løbet altid aflyses i regnvejr", "For at vide, om du skal tage paraply med på cyklen", "Det skal du ikke"],
  "Varme, vind og kulde ændrer planen for tempo, tøj og drikke.");
Q("raceplan", 1, "Hvad er et 'B-løb'?",
  ["Et vigtigt, men ikke det vigtigste løb – ofte en generalprøve", "Et løb kun for begyndere", "Et løb for dem i aldersgruppe B, dvs. over 40 år", "Et løb uden svømning"],
  "B-løb bruges til at teste plan, udstyr og form uden fuld taper.");
REGNE = true;
Q("raceplan", 1, "Du forventer svøm 15 min, T1 2 min, cykel 40 min, T2 1 min og løb 25 min. Hvad bliver sluttiden?",
  ["1 t 23 min", "1 t 20 min", "1 t 25 min", "1 t 18 min"],
  "15 + 2 + 40 + 1 + 25 = 83 min = 1 t 23 min.");
Q("raceplan", 1, "Starten går kl. 8:00. Du vil spise morgenmad 3 timer før. Hvornår spiser du?",
  ["Kl. 5:00", "Kl. 6:00", "Kl. 4:00", "Kl. 7:00"],
  "8:00 − 3 timer = 5:00.");
REGNE = false;
R("raceplan", 1, "Sæt løbsmorgenen i en god rækkefølge.",
  ["Stå op og spis den afprøvede morgenmad", "Tag til løbsområdet i god tid", "Klargør din plads i skiftezonen", "Tag våddragten på og varm op", "Stil dig til start"],
  "En fast rækkefølge giver ro. Øv den gerne til B-løb.");
Q("raceplan", 1, "Hvad skal du gøre, hvis planen ikke holder undervejs – fx fordi du får punktering?",
  ["Tilpas planen og fokuser på det, du kan gøre nu", "Give op med det samme, for dagen er ødelagt", "Blive vred på andre", "Køre hurtigere end nogensinde for at hente tiden"],
  "Ting går galt for alle. Den, der omstiller sig hurtigst, klarer sig bedst.");

// --- Sølv (mellem) ---
QM("raceplan", 2, "På højdeprofilen: Hvor giver det typisk mest tid at træde lidt ekstra?",
  ["Ved C – op ad den lille stigning, hvor farten er lav", "Ved B – ned ad den stejle bakke", "Ved B og C lige meget", "Ingen steder – man skal altid holde præcis samme fart"],
  "Ekstra watt giver mest tid, hvor farten er lav. Ned ad bakke giver ekstra tråd næsten intet.",
  PROFIL(["B", "C"]));
Q("raceplan", 2, "Hvorfor laver mange en 'kulhydratladning' før en lang distance?",
  ["For at fylde glykogenlagrene i muskler og lever", "For at tage flere kilo på i vægt, så man er stærkere og har mere at tære på", "For at undgå at drikke", "For at sove bedre"],
  "1-2 dage med ekstra kulhydrat (fx 8-10 g pr. kg) fylder lagrene. Ikke relevant for korte løb.");
Q("raceplan", 2, "Hvordan bør en taper typisk se ud de sidste 10 dage før en Ironman?",
  ["Mængden skæres gradvist ned, men intensiteten holdes kort og skarp", "Ingen træning overhovedet i 10 dage", "Dobbelt så meget træning som normalt", "Kun lange, rolige ture"],
  "Kortere pas med lidt fart holder kroppen skarp. For meget hvile kan gøre dig flad.");
Q("raceplan", 2, "Hvad er fordelen ved en 'race-simulation' 3-5 uger før løbet?",
  ["Du tester tempo, ernæring, udstyr og tidsplan under realistiske forhold", "Du kan nå at aflyse løbet og få pengene tilbage, hvis det går dårligt", "Du får en medalje", "Ingen fordel"],
  "Generalprøven afslører, hvad der skal justeres, mens der stadig er tid.");
Q("raceplan", 2, "Hvorfor skal du svømme lidt roligere de første 200 m i en massestart, hvis du er nervøs?",
  ["Så pulsen og vejrtrækningen falder til ro, og du undgår panik", "Fordi det er forbudt at svømme hurtigt i starten", "For at lade andre komme forbi, så du kan ligge i læ bag dem resten af vejen og spare masser af kræfter", "Det skal du ikke"],
  "Find din rytme. Du kan altid øge farten, når du har ro på.");
Q("raceplan", 2, "Hvad er en 'mental strategi' i et langt løb?",
  ["Fx mantraer, positiv selvsnak og at fokusere på næste del", "At ignorere alle følelser og tanker i løbet", "At tænke på alt, der kan gå galt, så man er forberedt på det værste hele tiden", "At lytte til musik"],
  "Positiv selvsnak og fokus på proces kan forbedre præstationen målbart.");
Q("raceplan", 2, "Hvad er 'special needs bags' i Ironman?",
  ["Poser med egne ting, du kan hente halvvejs på cykel og løb", "Poser til deltagere med skader", "Poser med førstehjælp og plaster, som deles ud til alle ved depoterne", "Poser med medaljer"],
  "Pak fx ekstra ernæring, sokker eller en lille ting, der giver motivation.");
Q("raceplan", 2, "Hvorfor kan det være en fejl at vælge mål ud fra en ven, der er hurtigere?",
  ["Du risikerer at følge et tempo, der er for hårdt for dig", "Fordi venner altid snyder lidt med deres tider for at virke hurtigere", "Fordi man ikke må have mål", "Det er ingen fejl"],
  "Lav dit mål ud fra dine egne testresultater og træning.");
Q("raceplan", 2, "Hvad er en god plan for opvarmning før en sprinttriathlon?",
  ["Kort løb eller cykel, lidt mobilitet og en kort svømmetur med et par hurtige tag", "Ingen opvarmning – man skal spare kræfterne", "En hel time hård træning", "Kun udstrækning"],
  "Korte løb starter hurtigt. Kroppen skal være klar fra første tag.");
Q("raceplan", 2, "Hvorfor vælger mange at gå i vandet til en opvarmning før en kold svømmestart?",
  ["Kuldechokket kommer før start, og vejrtrækningen falder til ro", "Fordi det er påkrævet af livredderne", "For at få våddragten våd, så den bliver lettere", "Det gør ingen"],
  "En kort tur i vandet mindsker gisperefleksen ved starten.");
Q("raceplan", 2, "Hvad betyder 'kør dit eget løb'?",
  ["Følg din plan og lad være med at reagere på alle andres tempo", "Kør så hurtigt, at ingen kan følge dig og bruge dig til læ, så du har vejen for dig selv", "Kør alene uden for ruten", "Lad være med at drikke"],
  "Andre kan have en anden plan – eller en dårlig plan.");
Q("raceplan", 2, "Hvorfor er det godt at have en 'plan B' for vejret?",
  ["Fx lavere watt i varme eller ekstra tøj i kulde", "Fordi løbet altid aflyses i dårligt vejr, og så skal man have et andet løb klar", "Fordi plan A aldrig virker", "Det er ikke godt"],
  "Vejret kan ændre alt. En plan B gør, at du ikke skal improvisere under pres.");
Q("raceplan", 2, "Hvad er 'pacing-loft' (cap) på cyklen?",
  ["En maksimal watt eller puls, du ikke vil overskride – fx op ad bakke", "Et loft over hvor meget du må spise og drikke i timen ifølge reglerne", "En særlig hjelm", "En regel fra arrangøren"],
  "Et loft forhindrer de dyre spikes, der koster på løbet.");
Q("raceplan", 2, "Hvordan bør du bruge depoterne i en halv Ironman?",
  ["Efter din plan – tag det, du har brug for, og ikke nyt, du ikke har prøvet", "Tag alt, hvad der tilbydes ved hver eneste station, så du er sikker på at få nok energi og væske", "Spring dem alle over", "Stop og sid ned ved hvert depot"],
  "Kend depotets produkter på forhånd og træn med dem, hvis du vil bruge dem.");
Q("raceplan", 2, "Hvorfor er det dumt at gå ud for hurtigt på løbet i en olympisk triathlon?",
  ["Mælkesyre og træthed kommer tidligt, og tempoet falder meget", "Fordi den første km tæller dobbelt i resultatet, hvis du er hurtigere end planlagt", "Fordi løbet så bliver kortere", "Det er ikke dumt"],
  "Jævnt eller negativt split er næsten altid hurtigst.");
REGNE = true;
Q("raceplan", 2, "Du vejer 70 kg og vil kulhydratlade med 8 g pr. kg. Hvor mange gram kulhydrat skal du spise pr. dag?",
  ["560 g", "480 g", "700 g", "350 g"],
  "70 × 8 = 560 g kulhydrat pr. dag.");
Q("raceplan", 2, "Halv Ironman: svøm 38 min, T1 4 min, cykel 2 t 50 min, T2 3 min, løb 1 t 55 min. Hvad er sluttiden?",
  ["5 t 30 min", "5 t 20 min", "5 t 40 min", "5 t 15 min"],
  "38 + 4 + 170 + 3 + 115 = 330 min = 5 t 30 min.");
Q("raceplan", 2, "Starten går kl. 7:00. Du skal være ved skiftezonen 1 t 30 min før, og turen derhen tager 25 min. Hvornår skal du køre?",
  ["Kl. 5:05", "Kl. 5:30", "Kl. 4:50", "Kl. 5:15"],
  "7:00 − 1:30 = 5:30. 5:30 − 0:25 = 5:05.");
REGNE = false;
R("raceplan", 2, "Sæt en typisk taper-uge før en olympisk triathlon i rækkefølge.",
  ["Mandag: hvile eller let svømning", "Tirsdag: kort pas med lidt race pace", "Onsdag-torsdag: lette pas og kort brick", "Fredag: hvile og pak udstyr", "Lørdag: kort aktivering og check-in"],
  "Hold lidt fart, men lad kroppen komme sig. Pak i god tid.");
Q("raceplan", 2, "Hvorfor skal man være forsigtig med koffein, hvis man ikke er vant til det?",
  ["Det kan give mavebesvær, uro og høj puls", "Fordi koffein er forbudt i triathlon", "Fordi det gør dig langsommere", "Det skal man ikke"],
  "Koffein kan forbedre præstationen, men skal afprøves i træning.");
Q("raceplan", 2, "Hvad er fordelen ved at skrive en raceplan ned?",
  ["Du tænker den igennem og kan huske den, når du er træt", "Fordi arrangøren skal godkende den, før du får dit startnummer udleveret", "For at vise den til andre", "Ingen fordel"],
  "Skriv tempo, ernæring og plan B ned. Nogle tager den med på et lille kort.");

// --- Guld (svær) ---
Q("raceplan", 3, "Hvorfor er en lille 'opvarmningsaktivering' dagen før løbet populær?",
  ["Korte stigninger og intervaller holder nervesystemet skarpt uden at give træthed", "Fordi det er reglen hos Ironman", "Fordi det fylder glykogenlagrene", "Det er ikke populært"],
  "Fx 20-30 minutter let med et par korte stigninger i hver disciplin.");
Q("raceplan", 3, "Hvad er risikoen ved at 'taper for meget' (for lang eller for total hvile)?",
  ["Du kan føle dig flad og tung på løbsdagen", "Du bliver altid hurtigere", "Du bliver for sulten og spiser så meget, at du tager flere kilo på", "Ingen risiko"],
  "Kroppen skal hvile, men stadig have lidt fart for at føle sig skarp.");
Q("raceplan", 3, "Hvorfor bør en Ironman-plan have tidsgrænser for hver del med margin?",
  ["Så du kan se, om du er på vej mod en delgrænse, og justere i tide", "Fordi arrangøren kræver det skriftligt ved check-in, ellers må du ikke starte", "For at gøre løbet hurtigere", "Det bør den ikke"],
  "Kender du delgrænserne, kan du prioritere, hvis noget går galt.");
Q("raceplan", 3, "Hvilke tre fejl ødelægger oftest et løb for amatører?",
  ["For hård start, for lidt energi og ny mad eller udstyr", "For meget søvn, for meget vand og for lidt varme", "For lidt opvarmning, for lidt koffein og for lidt musik", "Der er ingen typiske fejl"],
  "Næsten alle dårlige løb kan spores til pacing, ernæring eller noget uprøvet.");
Q("raceplan", 3, "Hvorfor kan det være klogt at køre den første halvdel af en Ironman-cykeltur på lavere watt end anden halvdel?",
  ["Det sparer glykogen og giver mulighed for at tage tid til sidst", "Fordi vinden altid er stærkere i anden halvdel", "Fordi reglerne kræver det", "Det er ikke klogt"],
  "En rolig start gør det muligt at holde planen – også når trætheden kommer.");
Q("raceplan", 3, "Hvad er 'centralt guvernør'-teorien i forbindelse med pacing?",
  ["At hjernen regulerer indsatsen for at beskytte kroppen mod overbelastning", "At dommerne på motorcykel styrer tempoet for feltet, så ingen kører for hurtigt", "At hjertet bestemmer alt", "At musklerne aldrig bliver trætte"],
  "Teorien forklarer, hvorfor mange kan spurte til sidst, selv når de føler sig helt tomme.");
Q("raceplan", 3, "Hvorfor kan 'mod slutningen'-spurten være dyr i en Ironman-maraton, men ikke i en sprint?",
  ["I Ironman er glykogen og muskler så tømte, at et for tidligt ryk kan give sammenbrud", "Fordi spurt er forbudt i Ironman", "Fordi Ironman-maraton er kortere", "Den er ikke dyr"],
  "Gem spurten til de sidste få km, hvis kræfterne er der.");
Q("raceplan", 3, "Hvad er 'implementation intentions' i mental træning?",
  ["Hvis-så-planer: 'Hvis jeg får krampe, så sænker jeg tempoet og drikker'", "At skrive en dagbog om træning, hvor du noterer, hvad du har tænkt dig at gøre i næste uge og om en måned", "At sætte mål for næste år", "At meditere før start"],
  "Hvis-så-planer gør det lettere at handle rigtigt under pres.");
Q("raceplan", 3, "Hvorfor vælger nogle at tage koffein midt i eller sidst i en lang distance?",
  ["Koffein kan mindske oplevet anstrengelse, når trætheden er størst", "Fordi koffein er forbudt før start", "For at kunne sove bedre efter løbet, fordi koffein virker beroligende, når man er træt", "Det gør ingen"],
  "Mange bruger koffeingels eller cola sent i løbet. Afprøv dosis i træning.");
Q("raceplan", 3, "Hvorfor kan en løber, der svømmer dårligt, vælge en anden strategi end en stærk svømmer?",
  ["Fordi man skal spille på sine styrker og begrænse tabet i den svage disciplin", "Fordi reglerne er forskellige", "Fordi svømning ikke tæller", "Det kan man ikke"],
  "Kend dine styrker. En stærk løber kan acceptere at tabe tid i svømningen og hente den på løbet.");
Q("raceplan", 3, "Hvad er en 'race review' efter løbet?",
  ["En gennemgang af hvad der gik godt og skidt – til næste gang", "En bedømmelse af løbets arrangør, som deltagerne skal udfylde for at få deres medalje", "En liste over præmier", "En video af målstregen"],
  "Skriv ned, mens du husker det: tempo, mad, udstyr, mentalt. Det er guld til næste løb.");
QM("raceplan", 3, "Højdeprofilen viser en kuperet rute. Hvor bør du typisk spise og drikke for at gøre det let?",
  ["Ved D – på det flade stykke i dalen", "Ved A – midt op ad den lange stigning", "Ved C – på vej op ad den lille bakke", "Det er lige meget, bare det sker hver time"],
  "Spis og drik, hvor du kan sidde stille og styre sikkert – ikke midt i en hård stigning eller et skarpt sving.",
  PROFIL(["A", "C", "D"]));
REGNE = true;
Q("raceplan", 3, "Du har A-mål 10:30, B-mål 11:15 og C-mål 12:00. Du kommer i mål på 11:05. Hvilket mål nåede du?",
  ["B-målet", "A-målet", "C-målet", "Intet mål"],
  "11:05 er hurtigere end B-målet (11:15), men langsommere end A-målet (10:30).");
Q("raceplan", 3, "Du taber 4 min ved at starte løbet for hurtigt og gå de sidste 5 km. Planen var 5:30 min/km på 42,2 km. Hvad blev maratontiden?",
  ["3 t 56 min 06 s", "3 t 52 min 06 s", "4 t 00 min 06 s", "3 t 48 min 06 s"],
  "42,2 × 330 s = 13.926 s = 3:52:06. Plus 4 min = 3:56:06.");
Q("raceplan", 3, "Du skal bruge 90 g kulhydrat i timen på en 6-timers cykeltur. Hvor mange gram i alt?",
  ["540 g", "360 g", "600 g", "450 g"],
  "90 × 6 = 540 g.");
Q("raceplan", 3, "Taper: Du træner normalt 12 timer om ugen og skærer 40 % ned i race-ugen. Hvor mange timer træner du?",
  ["7 t 12 min", "4 t 48 min", "8 t", "6 t"],
  "12 × 0,6 = 7,2 timer = 7 t 12 min.");
REGNE = false;
R("raceplan", 3, "Sæt Ironman-dagens fokuspunkter i rækkefølge.",
  ["Rolig og kontrolleret svømning", "Rolig start på cyklen og fyld energi på", "Jævn watt med loft på bakker", "Første del af maratonet roligt med fast plan ved depoterne", "Giv alt, hvad der er tilbage, de sidste 10 km"],
  "Ironman vindes sjældent tidligt, men tabes ofte tidligt.");
Q("raceplan", 3, "Hvorfor kan det være en dårlig idé at bruge et A-løb som 'første forsøg' på en ny distance med et stort tidsmål?",
  ["Uden erfaring er pacing og ernæring svære at ramme – det øger risikoen for sammenbrud", "Fordi man ikke må have tidsmål i første løb", "Fordi det er for let", "Det er en god idé"],
  "Første gang på en distance er ofte bedst med 'gennemfør godt' som hovedmål.");
Q("raceplan", 1, "Hvad bør du gøre lige efter målstregen?",
  ["Gå lidt, drikke og spise noget og få tørt tøj på", "Sætte dig helt stille i solen og vente, til nogen henter dig", "Løbe en ekstra tur", "Hoppe i en iskold sø"],
  "Hold kroppen i bevægelse et øjeblik, og få væske og energi. Så kommer restitutionen i gang.");
Q("raceplan", 1, "Hvorfor pakker mange deres taske aftenen før løbet?",
  ["Morgenen bliver rolig, og man glemmer ikke noget", "Fordi man ikke må pakke om morgenen på løbsdagen", "For at tasken bliver lettere", "Det gør ingen"],
  "En rolig morgen giver en rolig start.");
Q("raceplan", 1, "Hvad kan du gøre, hvis du føler dig dårlig undervejs i et løb?",
  ["Sænke tempoet, drikke og spise lidt – og stoppe, hvis det er alvorligt", "Presse dig selv videre, uanset hvad kroppen siger", "Lade som ingenting", "Spurte for at blive hurtigt færdig"],
  "Lyt til kroppen. Ved brystsmerter, svimmelhed eller forvirring: stop og søg hjælp.");
Q("raceplan", 2, "Hvorfor er det smart at prøve depoternes sportsdrik i træningen?",
  ["Så du ved, om maven kan tåle den", "Fordi depoterne kun har vand", "Fordi den er forbudt i træning", "Det er ikke smart"],
  "Tjek løbsmanualen for, hvilken drik og gel der bliver serveret.");
Q("raceplan", 2, "Hvad er fordelen ved at besigtige svømmeruten dagen før?",
  ["Du ser bøjerne fra vandet og finder pejlemærker", "Du kan flytte bøjerne, så ruten bliver kortere", "Du får tidsbonus", "Ingen fordel"],
  "Mange arrangører tilbyder en prøvesvømning. Brug den.");
Q("raceplan", 2, "Hvordan kan du tænke, når det bliver rigtig hårdt i et løb?",
  ["'Det er normalt at have det sådan – det går over, hold rytmen'", "'Nu er løbet ødelagt, og jeg kan lige så godt give op'", "'Jeg skal spurte nu'", "'Jeg burde aldrig have startet'"],
  "Hårde perioder kommer og går. Erfarne atleter ved, at et dårligt øjeblik ikke er et dårligt løb.");
Q("raceplan", 2, "Hvorfor kan du have det bedre i et løb, hvis du har en plan for svære øjeblikke?",
  ["Du reagerer roligt i stedet for at gå i panik", "Fordi svære øjeblikke så ikke kommer", "Fordi planen gør dig hurtigere", "Det har man ikke"],
  "Fx: 'Hvis jeg får sidestik, sænker jeg tempoet og ånder ud.'");
Q("raceplan", 3, "Hvorfor kan det være smart at sætte et mål for en indsats (watt/puls) i stedet for en tid på en ukendt rute?",
  ["Tiden afhænger af rute og vejr, men indsatsen kan du styre", "Fordi tid ikke måles i triathlon", "Fordi indsats altid giver præmier", "Det er ikke smart"],
  "Ukendte forhold gør tidsmål usikre. Indsatsmål holder dig på sporet.");
Q("raceplan", 3, "Hvorfor svømmer nogle med vilje lidt ude i siden ved en massestart?",
  ["Lidt længere distance, men meget mindre slagsmål og stress", "Fordi midten er forbudt for amatører", "For at komme hurtigere op", "Det gør ingen"],
  "Ekstra meter kan være prisen værd for ro og en god rytme.");
Q("raceplan", 3, "Hvad er 'periodisering' af en sæson?",
  ["At inddele træningen i faser mod hovedløbet – grundtræning, opbygning, skærpning og taper", "At træne samme program hele året", "At holde pause hver anden måned", "At deltage i så mange løb som muligt"],
  "Faserne bygger oven på hinanden, så formen topper til A-løbet.");
Q("raceplan", 3, "Hvorfor holder mange en pause på 1-2 uger efter en Ironman?",
  ["Kroppen har brug for restitution – muskler, immunforsvar og hoved", "Fordi det er Ironmans regler", "Fordi cyklen skal til service", "Det gør ingen"],
  "En Ironman belaster hele kroppen. Hvile forebygger skader og sygdom.");
REGNE = true;
Q("raceplan", 3, "Dit mål er 5:00:00 i en halv Ironman. Svøm 35 min, skift i alt 6 min, løb 1:45. Hvor lang tid har du til cyklingen?",
  ["2 t 34 min", "2 t 40 min", "2 t 29 min", "2 t 45 min"],
  "300 − 35 − 6 − 105 = 154 min = 2 t 34 min.");
Q("raceplan", 3, "Du vil holde 30 km/t på 90 km, men de første 45 km går med 33 km/t. Hvor hurtigt skal anden halvdel køres for at nå et 3-timers mål?",
  ["Ca. 27,5 km/t", "Ca. 30 km/t", "Ca. 25 km/t", "Ca. 32 km/t"],
  "45 ÷ 33 ≈ 1,364 t. Tilbage: 3 − 1,364 = 1,636 t. 45 ÷ 1,636 ≈ 27,5 km/t.");
REGNE = false;
Q("raceplan", 3, "Hvorfor kan et for ambitiøst mål få dig til at lave fejl tidligt i løbet?",
  ["Du følger et tempo, der ikke passer til din form og dagens forhold", "Fordi høje mål altid er forbudt", "Fordi det gør dig mere afslappet", "Det kan det ikke"],
  "Realistiske mål og en fleksibel plan giver ofte bedre resultater end drømmetal.");
