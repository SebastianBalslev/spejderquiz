/* =====================================================================
   PACE OG INTERVALLER  (emne: "pace")
   ===================================================================== */
// --- Bronze (let) ---
Q("pace", 1, "Hvad betyder 'pace' i løb?",
  ["Tid pr. kilometer", "Hvor mange kilometer du løber på en hel uge", "Antal skridt pr. minut", "Din højeste puls på en tur"],
  "Pace skrives fx 5:30 min/km. Jo lavere tal, jo hurtigere løber du.");
Q("pace", 1, "Hvad er hurtigst: 4:30 min/km eller 5:00 min/km?",
  ["4:30 min/km", "5:00 min/km, fordi tallet er højere", "De er lige hurtige", "Det kan man ikke vide uden pulsen"],
  "Pace er tid pr. km. Færre minutter pr. km betyder højere fart.");
Q("pace", 1, "Hvad er et interval i løbetræning?",
  ["Et hurtigt stykke med pause bagefter", "En lang tur i roligt tempo uden pauser, hvor du snakker", "En pause midt i en løbetur", "En strækøvelse"],
  "Intervaller veksler mellem hårdt arbejde og pauser. Det gør det muligt at løbe meget i høj fart.");
Q("pace", 1, "Hvad er 'snakketempo'?",
  ["Så roligt, at du kan føre en samtale", "Så hurtigt, at du kun kan sige ét ord ad gangen", "Det tempo, hvor du snakker med dig selv", "Tempoet i en spurt"],
  "Det meste af en udholdenhedsatlets træning bør være så roligt, at man kan snakke.");
Q("pace", 1, "Hvor stor en del af træningen bør typisk være rolig for de fleste udholdenhedsatleter?",
  ["Ca. 80 %", "Ca. 20 %, fordi resten skal være hårdt for at give fremgang", "Ca. 50 %", "0 % – al træning skal være hård"],
  "Mange følger '80/20': ca. 80 % roligt og 20 % moderat til hårdt.");
Q("pace", 1, "Hvad er en 'langtur'?",
  ["Ugens længste løbetur i roligt tempo", "Et kort, hurtigt interval på banen, hvor du løber det længste stykke", "En gåtur i skoven", "En tur på cyklen"],
  "Langturen bygger udholdenhed og vænner kroppen til lang tid på benene.");
Q("pace", 1, "Hvad er 'fartleg'?",
  ["Leg med farten – skift mellem hurtigt og roligt efter lyst", "Et løb, hvor man skal fange de andre", "Et løb i præcis samme fart hele vejen, styret af et ur med alarm", "En type løbesko"],
  "Fartleg betyder 'fartleg' på svensk. Det er en fri og sjov måde at træne intervaller på.");
Q("pace", 1, "Hvorfor skal du varme op før et intervalpas?",
  ["Kroppen bliver klar til høj fart, og risikoen for skader falder", "Fordi intervallerne ellers ikke tæller med i træningsdagbogen og uret ikke kan registrere dem", "For at blive træt før intervallerne", "Det skal du ikke"],
  "10-15 minutters rolig løb og et par stigningsløb gør musklerne klar.");
Q("pace", 1, "Hvad er 'negativ split' i et løb?",
  ["Anden halvdel er hurtigere end første", "Du løber langsommere og langsommere hele vejen", "Du stopper midt i løbet", "Du løber baglæns"],
  "Negativ split betyder god pacing. Det er ofte den hurtigste måde at løbe en distance på.");
Q("pace", 1, "Hvad sker der typisk, hvis du starter et 10 km løb alt for hurtigt?",
  ["Du bliver tung og taber tid til sidst", "Du vinder altid, fordi du har et forspring, som de andre ikke kan indhente", "Ingenting", "Du får ekstra energi"],
  "En for hurtig start koster mere tid sidst i løbet, end du vandt i starten.");
Q("pace", 1, "Hvorfor løber man langsommere i triathlon end i et rent løb på samme distance?",
  ["Du er allerede træt efter svøm og cykel", "Fordi ruten i triathlon altid er længere end opgivet", "Fordi man skal løbe med cykelhjelm", "Det gør man ikke"],
  "Selv gode triatleter løber typisk lidt langsommere end i et frisk løb. Det skal din pacing tage højde for.");
REGNE = true;
Q("pace", 1, "Du løber 5 km med 6:00 min/km. Hvad bliver tiden?",
  ["30:00", "25:00", "35:00", "32:30"],
  "5 × 6:00 = 30:00.");
Q("pace", 1, "Du løber 10 km på 50 minutter. Hvad er din pace?",
  ["5:00 min/km", "4:30 min/km", "5:30 min/km", "6:00 min/km"],
  "50 ÷ 10 = 5:00 min/km.");
Q("pace", 1, "Du løber 5 km på 25 minutter. Hvad er din pace?",
  ["5:00 min/km", "4:00 min/km", "5:30 min/km", "6:00 min/km"],
  "25 ÷ 5 = 5:00 min/km.");
Q("pace", 1, "Du løber 6 × 400 m. Hvor langt løber du i intervallerne i alt?",
  ["2,4 km", "2,0 km", "4,0 km", "3,2 km"],
  "6 × 400 m = 2.400 m = 2,4 km.");
Q("pace", 1, "Du løber 10 km med 5:30 min/km. Hvad bliver tiden?",
  ["55:00", "50:00", "53:30", "57:30"],
  "10 × 5:30 = 55:00.");
Q("pace", 1, "Du løber 2,5 km med 6:00 min/km i en supersprint. Hvad bliver løbetiden?",
  ["15:00", "12:30", "17:30", "14:00"],
  "2,5 × 6 = 15 minutter.");
Q("pace", 1, "Du løber 1 km på 4 minutter. Hvor mange km/t er det?",
  ["15 km/t", "12 km/t", "16 km/t", "20 km/t"],
  "60 ÷ 4 = 15 km/t.");
REGNE = false;
Q("pace", 1, "Hvad betyder '8 × 400 m med 90 sek. pause'?",
  ["Otte gange 400 meter med 90 sekunders pause imellem", "400 meter otte gange uden pause", "Otte minutters løb efterfulgt af 400 meters pause, hvor du går", "800 meter i 90 sekunder"],
  "Pausen er ofte jog eller gang. Den giver tid til at komme lidt ned i puls.");
Q("pace", 1, "Hvad er en 'tempotur'?",
  ["En tur i et kontrolleret, ret hårdt tempo i fx 20-30 minutter", "En helt rolig tur, hvor du kan snakke hele vejen og holde præcis samme tempo", "En kort spurt", "En gåtur"],
  "Tempoløb tæt på tærsklen lærer kroppen at holde en høj fart længe.");
Q("pace", 1, "Hvad bør du gøre efter et hårdt intervalpas?",
  ["Løbe roligt et par kilometer for at varme ned", "Sætte dig med det samme og ikke røre dig resten af dagen", "Løbe et nyt intervalpas", "Spise slik"],
  "Nedløb hjælper kroppen med at falde til ro.");
Q("pace", 1, "Hvorfor er rolige ture vigtige, selvom de føles 'for lette'?",
  ["De bygger udholdenhed og giver plads til de hårde pas", "Fordi hårde ture er forbudt for triatleter under 30 i de fleste klubber", "Fordi de giver ondt i benene", "Det er de ikke"],
  "Rolig træning udvikler den aerobe motor uden at give for meget træthed.");

// --- Sølv (mellem) ---
Q("pace", 2, "Hvad er 'tærskeltempo'?",
  ["Det tempo, du kan holde i ca. en time", "Det tempo, du kan holde i præcis to minutter, før benene syrer", "Tempoet på en langtur", "Gangtempo"],
  "Tærsklen ligger omkring det tempo, hvor mælkesyre ophobes hurtigere, end den fjernes.");
Q("pace", 2, "Hvad er 'VO₂max-intervaller' typisk?",
  ["3-5 minutter hårdt med cirka lige så lang pause", "30 minutter i snakketempo uden pause, mens du trækker vejret dybt", "10 sekunders spurter", "En times rolig løb"],
  "Intervaller tæt på max iltoptagelse er hårde. De forbedrer motoren, men kræver god restitution.");
Q("pace", 2, "Hvad er fordelen ved bakkeintervaller?",
  ["Styrke og kondition med mindre belastning end hurtigt løb på flad vej", "De er lettere end flade intervaller, fordi du kan gå op ad bakken", "De giver ingen træning", "De er kun for trailløbere"],
  "Op ad bakke er belastningen på bevægeapparatet mindre, mens hjerte og ben arbejder hårdt.");
Q("pace", 2, "Hvorfor kan man ikke bare løbe intervaller hver dag?",
  ["Kroppen har brug for restitution for at blive stærkere", "Fordi kroppen kun kan optage ilt fra intervaller to gange om måneden", "Fordi det er kedeligt", "Det kan man godt"],
  "Træning nedbryder, hvile bygger op. For mange hårde pas giver overtræning og skader.");
Q("pace", 2, "Hvad betyder 'progressiv tur'?",
  ["En tur, hvor farten øges gradvist", "En tur, hvor farten falder gradvist mod slutningen", "En tur med mange pauser", "En tur op ad bakke"],
  "Progressive ture lærer dig at slutte stærkt, også når du er træt.");
Q("pace", 2, "Hvor hårdt skal du løbe 'strides' (stigningsløb)?",
  ["Op mod ca. 90 % – hurtigt, men afslappet", "Helt maksimalt, så du er udmattet efter hvert", "Helt roligt i snakketempo", "Gående"],
  "Strides skal føles hurtige og lette – ikke som en spurt til døden.");
Q("pace", 2, "Hvorfor er GPS-pace ikke altid præcis på en løbebane?",
  ["GPS har svært ved de skarpe sving og korte distancer", "Fordi banen er længere end 400 m", "Fordi GPS ikke virker udendørs", "Det er altid præcist"],
  "På banen er det bedre at tage tid pr. omgang. 400 m i inderste bane er præcist.");
Q("pace", 2, "Hvad er 'race pace'-træning?",
  ["Træning i det tempo, du vil løbe i konkurrencen", "Træning i så højt tempo som overhovedet muligt, så løbet føles let", "Rolig løb med hunden", "Løb uden ur"],
  "Det lærer kroppen og hovedet, hvordan løbstempoet føles.");
REGNE = true;
Q("pace", 2, "Du løber en halvmaraton (21,1 km) med 5:00 min/km. Hvad bliver tiden?",
  ["1:45:30", "1:40:00", "1:50:30", "1:42:15"],
  "21,1 × 5:00 = 105,5 minutter = 1 time 45 minutter og 30 sekunder.");
Q("pace", 2, "Du løber 10 km på 45:00. Hvad er din pace?",
  ["4:30 min/km", "4:15 min/km", "4:45 min/km", "5:00 min/km"],
  "45 ÷ 10 = 4,5 min = 4:30 min/km.");
Q("pace", 2, "Du løber med 12 km/t. Hvad er din pace?",
  ["5:00 min/km", "4:30 min/km", "5:30 min/km", "6:00 min/km"],
  "60 ÷ 12 = 5 minutter pr. km.");
Q("pace", 2, "Du løber 400 m på 1:40. Hvad svarer det til pr. km?",
  ["4:10 min/km", "4:00 min/km", "4:20 min/km", "3:50 min/km"],
  "1:40 = 100 s. 100 × 2,5 = 250 s = 4:10 min/km.");
Q("pace", 2, "Du løber 10 km i en olympisk triathlon med 5:15 min/km. Hvad bliver løbetiden?",
  ["52:30", "50:15", "55:00", "51:45"],
  "10 × 5:15 = 52,5 min = 52:30.");
Q("pace", 2, "Pace 4:00 min/km. Hvor mange km/t er det?",
  ["15 km/t", "14 km/t", "16 km/t", "12 km/t"],
  "60 ÷ 4 = 15 km/t.");
Q("pace", 2, "Du løber 5 × 1 km på 4:20 med 2 min pause. Hvor lang tid tager hele serien, inkl. pauser imellem?",
  ["29:40", "21:40", "31:40", "27:40"],
  "5 × 4:20 = 21:40. Plus 4 pauser à 2 min = 8 min. I alt 29:40.");
REGNE = false;
Q("pace", 2, "Hvad er 80/20-princippet i udholdenhedstræning?",
  ["Ca. 80 % af træningen roligt og 20 % moderat-hårdt", "80 % hårdt og 20 % roligt", "80 minutter hver dag i 20 dage", "80 km om ugen og 20 km om dagen"],
  "Undersøgelser af eliteatleter viser, at de fleste træner meget roligt det meste af tiden.");
Q("pace", 2, "Hvorfor er det svært at løbe roligt nok på rolige dage?",
  ["Mange føler, at roligt er 'for let', og løber i en grå zone", "Fordi uret altid viser forkert", "Fordi rolige ture er forbudt i klubber", "Det er ikke svært"],
  "En for hård rolig tur gør dig træt til de vigtige pas. Brug puls eller snakketesten.");
Q("pace", 2, "Hvad er en 'cruise interval'?",
  ["Tærskelintervaller med kort pause, fx 4 × 2 km med 1 min pause", "En rolig løbetur uden ur, hvor du 'cruiser' i det tempo, der føles behageligt", "En spurt på 100 m", "En lang tur uden ur"],
  "Korte pauser gør, at du kan løbe meget i tærskeltempo uden at blive udmattet.");
Q("pace", 2, "Hvorfor kan du løbe hurtigere pr. km i intervaller end på en lang tempotur?",
  ["Pauserne giver kroppen mulighed for at komme sig lidt", "Fordi intervaller altid er kortere end 100 m, og så når kroppen ikke at blive træt", "Fordi uret måler forkert", "Det kan du ikke"],
  "Pauserne fjerner noget af trætheden, så du kan arbejde i højere fart.");
Q("pace", 2, "Hvorfor kan løb i varme gøre dit pace langsommere ved samme puls?",
  ["Kroppen bruger blod til køling, så pulsen stiger ved samme fart", "Fordi asfalten bliver blød i varmen, så hvert skridt synker lidt ned og bremser", "Fordi uret måler forkert i varme", "Det gør den ikke"],
  "Juster tempoet i varme. Hold indsatsen, ikke tallene.");

// --- Guld (svær) ---
Q("pace", 3, "Hvad er 'VDOT'?",
  ["Et tal fra Jack Daniels' system, der bruges til at beregne træningstempo ud fra løbstider", "En type GPS-ur, der måler din iltoptagelse direkte fra håndleddet", "Et mål for, hvor mange gange du løber om ugen", "En ilt-maske"],
  "Med en løbstid kan du finde din VDOT og få anbefalede tempi til rolig løb, tærskel og intervaller.");
Q("pace", 3, "Hvad sker der typisk med tempoet fra 10 km til maraton for en veltrænet løber?",
  ["Maratontempoet er ca. 15-25 sek. langsommere pr. km", "Maratontempoet er hurtigere end 10 km-tempoet", "Tempoet er det samme", "Maratontempoet er mindst 2 minutter langsommere pr. km, fordi distancen er over fire gange så lang"],
  "Længere distancer kræver lavere intensitet. Forholdet afhænger af træning og udholdenhed.");
Q("pace", 3, "Hvorfor kan 'Riegels formel' (T2 = T1 × (D2/D1)^1,06) give for optimistiske maratontider?",
  ["Den forudsætter, at du er lige så godt trænet til den lange distance", "Fordi den kun virker for børn", "Fordi den er lavet til cykling", "Den er altid præcis"],
  "Formlen virker bedst, hvis du har trænet specifikt til distancen.");
Q("pace", 3, "Hvorfor laver mange Ironman-atleter deres løbeplan med en 'gå-strategi' ved depoterne?",
  ["Korte gå-pauser ved depoter giver tid til at drikke og kan give et hurtigere løb i alt", "Fordi det er forbudt at løbe gennem depoterne", "Fordi de ikke kan lide at løbe", "Det gør de ikke"],
  "Planlagte, korte gå-pauser kan holde tempoet stabilt længere end at løbe til man knækker.");
Q("pace", 3, "Hvad er 'kardiel drift' på en lang løbetur?",
  ["At pulsen stiger langsomt, selvom tempoet er det samme", "At hjertet slår uregelmæssigt", "At pulsen falder, når du bliver træt", "At du langsomt driver ud til siden af vejen, fordi det ene ben er stærkere"],
  "Væsketab, varme og træthed får pulsen til at stige over tid ved samme fart.");
Q("pace", 3, "Hvorfor er en 'double threshold'-dag (to tærskelpas samme dag) populær blandt nogle eliteløbere?",
  ["Mere tid ved tærsklen med kontrolleret laktat og mindre træthed end ét langt pas", "Fordi to pas altid giver dobbelt så meget fremgang som ét", "Fordi det er lettere", "Det er forbudt"],
  "Metoden er kendt fra norske løbere. Laktaten styres for at undgå at blive for træt.");
Q("pace", 3, "Hvad viser en 'laktattest'?",
  ["Mælkesyre i blodet ved forskellige tempi – bruges til at finde tærsklen", "Mængden af mælkeprodukter, du kan tåle at spise før et løb uden mavekramper", "Din maksimale puls", "Hvor hurtigt du kan løbe 100 m"],
  "En lille blodprøve fra fingeren eller øret måler laktat. Det giver præcise træningszoner.");
Q("pace", 3, "Hvad er 'Yasso 800'?",
  ["10 × 800 m, hvor tiden i minutter svarer til maratontiden i timer", "800 meter løb, hvor du skal holde præcis samme tempo som din ven", "800 km på en måned", "En type løbesko"],
  "Fx 10 × 800 m på 3:30 skal pege på et maraton på 3 t 30 min. Det er en tommelfingerregel – ikke en sikker spådom.");
REGNE = true;
Q("pace", 3, "Du løber et maraton (42,2 km) med 5:30 min/km. Hvad bliver tiden?",
  ["3:52:06", "3:45:00", "4:01:30", "3:48:42"],
  "42,2 × 330 s = 13.926 s = 3 timer 52 minutter og 6 sekunder.");
Q("pace", 3, "Du vil løbe en halvmaraton (21,1 km) på under 1:30. Hvilken pace skal du mindst holde?",
  ["Ca. 4:16 min/km", "Ca. 4:30 min/km", "Ca. 4:05 min/km", "Ca. 4:22 min/km"],
  "90 min ÷ 21,1 = 4,265 min ≈ 4:16 min/km.");
Q("pace", 3, "Du løber 3:00 min pr. 800 m. Hvad er din pace pr. km?",
  ["3:45 min/km", "3:30 min/km", "3:55 min/km", "4:00 min/km"],
  "180 s ÷ 0,8 = 225 s = 3:45 min/km.");
Q("pace", 3, "Pace 4:45 min/km. Hvor mange km/t er det (cirka)?",
  ["12,6 km/t", "12,0 km/t", "13,2 km/t", "11,8 km/t"],
  "4:45 = 4,75 min. 60 ÷ 4,75 ≈ 12,6 km/t.");
Q("pace", 3, "Du løber første halvdel af en halvmaraton på 52:00 og anden halvdel på 50:30. Hvad er sluttiden?",
  ["1:42:30", "1:41:30", "1:43:00", "1:40:30"],
  "52:00 + 50:30 = 102:30 = 1 time 42 minutter og 30 sekunder. Det er en negativ split.");
Q("pace", 3, "Du løber 10 km på 42:00 i en åben løb. I en olympisk triathlon forventer du at løbe 6 % langsommere. Hvad bliver løbetiden cirka?",
  ["44:31", "42:00", "46:12", "43:10"],
  "42:00 × 1,06 = 44,52 min ≈ 44:31.");
Q("pace", 3, "Ironman-maraton: 42,2 km med 6:15 min/km. Hvad bliver tiden?",
  ["4:23:45", "4:15:00", "4:30:15", "4:10:20"],
  "42,2 × 375 s = 15.825 s = 4 t 23 min 45 s.");
REGNE = false;
Q("pace", 3, "Hvorfor skal en triatlet ikke bare bruge sin rene 10 km-tid til at sætte tempo i en olympisk triathlon?",
  ["Trætheden fra svøm og cykel gør det rene tempo for hurtigt", "Fordi ruten i triathlon er kortere", "Fordi man løber med cykelsko", "Det skal man"],
  "Start lidt langsommere end din rene 10 km-tid, og øg hvis du har overskud efter halvvejs.");
Q("pace", 3, "Hvad er risikoen ved at lave for mange intervaller i 'grå zone' (lige under tærsklen) hele tiden?",
  ["Du bliver træt uden at få det fulde udbytte af hverken rolig eller hård træning", "Du bliver hurtigere hurtigere end ved alle andre former", "Ingen risiko", "Du løber for langsomt"],
  "Midt-intensitet kan være nyttigt, men for meget af det giver træthed. Variation er vigtig.");
Q("pace", 3, "Hvorfor kan løbetempoet på en kuperet rute være misvisende?",
  ["Bakker gør tempoet langsommere op og hurtigere ned, uden at indsatsen ændres", "Fordi bakker gør ruten kortere end opmålt, så uret viser for hurtigt tempo", "Fordi GPS ikke virker op ad bakke", "Det er aldrig misvisende"],
  "Brug puls, oplevet anstrengelse eller løbe-watt på kuperede ruter.");
Q("pace", 3, "Hvorfor kan 'gennemsnitspace' skjule dårlig pacing?",
  ["En hurtig start og et sammenbrud kan give samme gennemsnit som et jævnt løb", "Fordi gennemsnittet altid er forkert", "Fordi pace kun kan måles præcist på en atletikbane og ellers altid er et gæt", "Det kan den ikke"],
  "Se på splits pr. km – ikke kun på gennemsnittet.");
R("pace", 2, "Sæt et klassisk intervalpas i rækkefølge.",
  ["Rolig opvarmning", "Løbeøvelser og stigningsløb", "Intervallerne med pauser", "Rolig nedløb", "Strækøvelser eller mobilitet"],
  "Opvarmning og øvelser gør kroppen klar. Nedløb og mobilitet hjælper restitutionen.");
R("pace", 3, "Sæt tempo-zonerne i rækkefølge fra roligst til hårdest.",
  ["Restitutionsløb", "Rolig langtur", "Maratontempo", "Tærskeltempo", "VO₂max-intervaller"],
  "Hver zone har et formål. De fleste km bør løbes i de rolige zoner.");
Q("pace", 3, "Hvad betyder det at 'løbe på tid' frem for 'løbe på distance' i træning?",
  ["At planlægge efter minutter i stedet for kilometer", "At løbe uden ur", "At løbe på atletikbane", "At løbe for at slå en personlig rekord på hver eneste træningstur"],
  "Tidsbaseret træning gør, at langsomme og hurtige løbere får samme belastning i tid.");
Q("pace", 1, "Hvad er 'restitutionsløb'?",
  ["En meget rolig, kort tur dagen efter hård træning", "Et hårdt interval, der skal få benene til at glemme gårsdagens træning", "En løbetur uden sko", "En spurt til bussen"],
  "En kort, meget rolig tur får blodet til at cirkulere uden at give ny træthed.");
Q("pace", 1, "Hvad hedder det, når du deler et løb op i kilometertider?",
  ["Splits", "Laps i svømmehallen", "Kadence", "Drop"],
  "Splits viser din tid pr. km eller pr. omgang. Så kan du se, om du holdt tempoet.");
REGNE = true;
Q("pace", 1, "Du løber 5 km på 30 minutter i en sprinttriathlon. Hvad er din pace?",
  ["6:00 min/km", "5:00 min/km", "6:30 min/km", "5:30 min/km"],
  "30 ÷ 5 = 6:00 min/km.");
Q("pace", 2, "Du løber 3 × 2 km i tærskeltempo på 4:40 min/km. Hvor lang tid løber du i alt i intervallerne?",
  ["28:00", "14:00", "26:40", "30:20"],
  "6 km × 4:40 = 28 minutter.");
Q("pace", 2, "Du løber 1.000 m på 3:50. Hvor lang tid tager 400 m i samme tempo?",
  ["1:32", "1:28", "1:36", "1:40"],
  "230 s × 0,4 = 92 s = 1:32.");
REGNE = false;
Q("pace", 2, "Hvad er fordelen ved at løbe intervaller på en atletikbane?",
  ["Præcise distancer og flad, jævn bane", "Banen er altid kortere end opgivet, så tiderne bliver hurtigere", "Der er ingen fordel", "Man må løbe med cykel"],
  "På banen ved du præcist, hvor langt du løber – godt til at styre tempoet.");
Q("pace", 2, "Hvad bør pausen typisk være i korte, hurtige intervaller på 200 m?",
  ["Lang nok til, at du kan holde farten på hvert interval", "Så kort som muligt – helst ingen pause overhovedet", "Mindst 20 minutter", "Det er ligegyldigt"],
  "Formålet med korte intervaller er ofte fart og teknik. Så skal pausen give dig mulighed for at løbe hurtigt igen.");
Q("pace", 3, "Hvorfor holder mange Ironman-atleter igen de første 10 km af maratonløbet?",
  ["Det føles let lige efter cyklen, men et for hurtigt tempo koster dyrt sidst", "Fordi de første 10 km altid er op ad bakke på alle Ironman-ruter i verden", "Fordi det er reglerne", "Det gør de ikke"],
  "Benene føles ofte overraskende friske i starten. Tålmodighed giver det hurtigste maraton.");
REGNE = true;
Q("pace", 3, "Du vil løbe 10 km på 40:00 med negativ split, 20 sekunder hurtigere på anden halvdel. Hvad skal første 5 km tage?",
  ["20:10", "20:00", "19:50", "20:20"],
  "x + (x − 20 s) = 40:00. 2x = 2.420 s. x = 1.210 s = 20:10.");
Q("pace", 3, "Du løber en halv Ironman-halvmaraton (21,1 km) med 5:40 min/km. Hvad bliver tiden?",
  ["1:59:34", "1:55:00", "2:03:10", "1:57:20"],
  "21,1 × 340 s = 7.174 s = 1 t 59 min 34 s.");
Q("pace", 3, "Du løber 5 km på 20:00. Med Riegels formel (×(D2/D1)^1,06) – hvad bliver en forudsagt 10 km-tid cirka?",
  ["41:42", "40:00", "43:30", "42:50"],
  "20:00 × 2^1,06 ≈ 20 × 2,085 = 41,7 min ≈ 41:42.");
REGNE = false;
