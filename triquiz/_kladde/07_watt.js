/* =====================================================================
   PACING OG WATT  (emne: "watt")
   ===================================================================== */
// --- Bronze (let) ---
Q("watt", 1, "Hvad betyder 'pacing'?",
  ["At fordele kræfterne klogt over hele løbet", "At køre så hurtigt som muligt fra start, mens benene er friske", "At holde præcis samme fart op og ned ad bakke", "At cykle med andre i en gruppe"],
  "God pacing betyder, at du ikke brænder ud tidligt. Det er især vigtigt, fordi du skal løbe bagefter.");
Q("watt", 1, "Hvad måles watt i, når du cykler?",
  ["Den kraft, du træder med", "Hvor hurtigt hjertet slår, målt i slag pr. minut", "Hvor langt du er kørt", "Hvor mange kalorier du har spist"],
  "Watt er et mål for effekt – hvor meget arbejde du laver pr. sekund.");
Q("watt", 1, "Hvorfor er watt et bedre mål end fart, når du cykler i blæst?",
  ["Watt viser din indsats uanset vinden", "Fordi farten altid er forkert på cykelcomputeren i blæsevejr", "Fordi fart ikke kan måles på en cykel", "Watt er ikke bedre"],
  "I modvind kører du langsomt, selvom du arbejder hårdt. Watt fortæller sandheden om indsatsen.");
Q("watt", 1, "Hvad sker der typisk, hvis du starter cykelturen i et løb alt for hårdt?",
  ["Du bliver træt og taber tid senere – også på løbet", "Du vinder altid, fordi du får et forspring", "Ingenting, kroppen vænner sig til det", "Du får mere energi til løbet, fordi musklerne er blevet varmet godt op"],
  "For hård start koster mere senere, end du vandt i starten. Især løbet bliver tungt.");
Q("watt", 1, "Hvorfor skal du ofte køre lidt roligere end du kunne på cyklen i triathlon?",
  ["Du skal også kunne løbe bagefter", "Fordi det er forbudt at køre for stærkt på cykeldelen", "For at spare på cyklens dæk og kæde", "For at kunne snakke med de andre"],
  "Cyklingen skal sætte dig op til et godt løb. Det er den samlede tid, der tæller.");
Q("watt", 1, "Hvad er FTP?",
  ["Den effekt, du kan holde i ca. en time", "Den hurtigste fart, du har kørt", "Din puls, når du hviler om morgenen lige efter, du er vågnet", "En type cykelpedal"],
  "Functional Threshold Power – omtrent den effekt, du kan holde i en time. Bruges til at lave træningszoner.");
Q("watt", 1, "Hvad er 'W/kg'?",
  ["Watt pr. kilo kropsvægt", "Hvor meget cyklen vejer i forhold til hjulene", "Vandflasker pr. kilometer", "Vind pr. kilometer"],
  "W/kg fortæller, hvor stærk du er i forhold til din vægt. Det betyder meget op ad bakke.");
Q("watt", 1, "Hvad sker der med watt, når du kører op ad en bakke i samme fart?",
  ["Du skal træde med mange flere watt", "Du skal træde med færre watt, fordi bakken hjælper", "Watt er det samme", "Watt kan ikke måles op ad bakke"],
  "Du skal både løfte dig selv og cyklen. Derfor skal der mange flere watt til.");
Q("watt", 1, "Hvordan bør du køre op ad en bakke i triathlon?",
  ["Lidt hårdere end på flad vej, men ikke helt ud", "Så hårdt du overhovedet kan, mens du står op på pedalerne hele vejen", "Helt roligt, så du næsten står stille", "Ved at stige af og gå"],
  "Lidt ekstra op ad bakke er fint, men undgå at skyde pulsen helt op. Det koster på løbet.");
Q("watt", 1, "Hvad kan du gøre ned ad en bakke for at spare kræfter?",
  ["Ligge lavt, hvile benene og lade cyklen rulle", "Træde endnu hårdere end op ad bakken for at vinde mest mulig tid", "Rette dig op og sætte dig, så luften bremser", "Bremse hele vejen ned"],
  "På stejle nedkørsler giver ekstra tråd ikke meget fart. Det er bedre at ligge lavt og restituere.");
Q("watt", 1, "Hvad betyder 'jævn indsats' på cyklen?",
  ["At holde nogenlunde samme watt hele vejen", "At køre præcis lige hurtigt, uanset om der er bakker eller ej", "At skifte mellem spurter og pauser", "At køre med lige mange kræfter i begge ben"],
  "Med jævn watt bruger du kræfterne bedst og undgår at blive træt af hårde rykker.");
Q("watt", 1, "Hvorfor kan en pulsmåler også bruges til pacing?",
  ["Pulsen viser, hvor hårdt kroppen arbejder", "Fordi pulsen viser præcis din fart i km/t", "Fordi pulsen ikke ændrer sig i løbet", "Det kan den ikke"],
  "Puls reagerer langsommere end watt, men giver et godt billede af den samlede belastning.");
Q("watt", 1, "Hvad er 'oplevet anstrengelse' (RPE)?",
  ["Hvor hårdt det føles, fx på en skala 1-10", "En ny type pulsmåler, der sidder på armen", "Din fart målt med GPS", "Antal tråd pr. minut"],
  "RPE er gratis og altid med. Lær at forbinde følelsen med puls og watt.");
Q("watt", 1, "Hvad sker der typisk med din fart, hvis du kører med samme watt i modvind?",
  ["Farten falder", "Farten stiger, fordi vinden hjælper", "Farten er den samme", "Du står stille"],
  "Samme indsats giver lavere fart i modvind. Det er normalt – hold indsatsen, ikke farten.");
Q("watt", 1, "Hvorfor er det godt at kende sin FTP?",
  ["Så du kan vælge den rigtige watt i træning og løb", "Fordi det er påkrævet for at stille op i triathlon", "For at kunne købe den rigtige cykel", "Det er ikke godt"],
  "Med FTP kan du lave zoner og sætte et realistisk mål for din cykeltid.");
REGNE = true;
Q("watt", 1, "Du vejer 60 kg og har en FTP på 180 watt. Hvad er din FTP i W/kg?",
  ["3,0 W/kg", "2,5 W/kg", "3,5 W/kg", "4,0 W/kg"],
  "180 ÷ 60 = 3,0 W/kg.");
Q("watt", 1, "Du vejer 70 kg og har en FTP på 210 watt. Hvad er din FTP i W/kg?",
  ["3,0 W/kg", "2,8 W/kg", "3,3 W/kg", "2,1 W/kg"],
  "210 ÷ 70 = 3,0 W/kg.");
Q("watt", 1, "Din FTP er 200 watt. Hvad er 75 % af den?",
  ["150 watt", "175 watt", "125 watt", "160 watt"],
  "200 × 0,75 = 150 watt.");
Q("watt", 1, "Du kører 20 km på 40 minutter. Hvad er din fart?",
  ["30 km/t", "25 km/t", "35 km/t", "20 km/t"],
  "40 minutter er ⅔ time. 20 ÷ ⅔ = 30 km/t.");
Q("watt", 1, "Du vejer 50 kg og kan holde 150 watt. Hvad er det i W/kg?",
  ["3,0 W/kg", "2,0 W/kg", "3,5 W/kg", "1,5 W/kg"],
  "150 ÷ 50 = 3,0 W/kg.");
REGNE = false;
Q("watt", 1, "Hvad er en powermeter?",
  ["En måler på cyklen, der viser watt", "En stor lampe på styret, der lyser op om natten", "Et batteri til cyklen", "En pumpe til dækkene"],
  "Powermeteren måler kraften i pedalerne, krankarmen eller navet.");
Q("watt", 1, "Hvad kan du bruge, hvis du ikke har en powermeter?",
  ["Puls og oplevet anstrengelse", "Ingenting – uden watt kan man slet ikke styre indsatsen", "Kun cyklens farve", "Hvor mange gange du har drukket"],
  "Mange triatleter styrer fint med puls og fornemmelse. Watt er et ekstra værktøj.");
Q("watt", 1, "Hvorfor skal man ikke 'jage' andre ryttere, der kører forbi i et løb?",
  ["Du skal køre dit eget løb og din egen plan", "Fordi det er forbudt at køre forbi nogen, der lige har kørt forbi dig", "Fordi de altid er professionelle", "For ikke at blive set"],
  "Andre har deres egen plan – og måske er de stærkere svømmere eller dårligere løbere. Kør dit eget løb.");
Q("watt", 1, "Hvad sker der typisk, når en uerfaren triatlet får adrenalin efter svømningen?",
  ["Starter for hårdt på cyklen", "Kører alt for langsomt og falder i søvn på cyklen", "Glemmer at tage cyklen", "Bliver mere sulten"],
  "Adrenalin gør, at det føles let i starten. Se på watt eller puls og hold igen de første 15-20 minutter.");

// --- Sølv (mellem) ---
Q("watt", 2, "Hvordan finder man ofte sin FTP med en 20-minutters test?",
  ["Ca. 95 % af gennemsnitswatt over 20 minutter", "Den højeste watt, du rammer i ét enkelt sekund", "Gennemsnitswatt over 20 minutter gange to", "Den watt, du har efter 5 minutter"],
  "Fordi du kan holde lidt mere i 20 minutter end i en hel time, trækker man ca. 5 % fra.");
Q("watt", 2, "Hvad er 'normalized power' (NP)?",
  ["En beregnet watt, der tager højde for udsving i indsatsen", "Den laveste watt, du har haft på en tur", "Din watt, når du står stille ved et lyskryds og holder balancen på cyklen", "Watt delt med vægten"],
  "Hårde udsving koster mere end jævn kørsel. NP viser, hvad turen 'kostede' i jævn watt.");
Q("watt", 2, "Hvad er 'Variability Index' (VI)?",
  ["NP divideret med gennemsnitswatt", "Antal bakker på ruten delt med distancen", "Din puls delt med watt", "Antal gearskift pr. time"],
  "VI tæt på 1,00 betyder jævn kørsel. I triathlon på flad rute er målet ofte under 1,05.");
Q("watt", 2, "Hvad er 'Intensity Factor' (IF)?",
  ["NP divideret med FTP", "Gennemsnitsfart divideret med distancen", "Puls divideret med kadence", "Antal intervaller i træningen"],
  "IF viser, hvor hård en tur var i forhold til din FTP. 0,75 betyder 75 % af FTP.");
Q("watt", 2, "Hvilken IF kører mange amatører typisk i en Ironman-cykeltur?",
  ["Ca. 0,65-0,75", "Ca. 0,95-1,05", "Ca. 0,30-0,40", "Over 1,10"],
  "Over 180 km og med maraton bagefter må indsatsen være moderat. Mere er sjældent klogt.");
Q("watt", 2, "Hvilken IF er typisk for cykeldelen i en halv Ironman?",
  ["Ca. 0,75-0,85", "Ca. 0,55-0,60", "Ca. 0,95-1,05", "Ca. 1,10-1,20"],
  "Halvdistancen er kortere, så du kan køre lidt hårdere – men stadig med en halvmaraton bagefter.");
Q("watt", 2, "Hvilken IF er typisk for cykeldelen på olympisk distance?",
  ["Ca. 0,85-0,95", "Ca. 0,60-0,65", "Ca. 1,10-1,20", "Ca. 0,40-0,50"],
  "40 km er ca. en times kørsel, så du kan køre tæt på din FTP. Husk dog de 10 km løb bagefter.");
Q("watt", 2, "Hvad er 'TSS' (Training Stress Score)?",
  ["Et tal for, hvor hård og lang en træning var", "Et tal for, hvor mange gear cyklen har bag på", "Din samlede tid i en triathlon", "Din puls i hvile"],
  "TSS = timer × IF² × 100. En time på FTP giver 100 TSS.");
Q("watt", 2, "Hvorfor er det dyrt at køre i korte, hårde rykker i en Ironman?",
  ["Hvert ryk tærer på glykogenet og musklerne", "Fordi det er forbudt i Ironmans regelsæt at køre ujævnt", "Fordi rykker giver punktering", "Det er ikke dyrt"],
  "Rykker over FTP bruger meget kulhydrat og trætter musklerne. Det ses senere på løbet.");
Q("watt", 2, "Hvilken watt-zone (Coggan) er 'Sweet Spot' typisk?",
  ["Ca. 88-94 % af FTP", "Ca. 50-60 % af FTP", "Ca. 120-150 % af FTP", "Præcis 100 % af FTP"],
  "Sweet Spot er hårdt, men kontrolleret. Det giver meget træning for indsatsen.");
Q("watt", 2, "Hvad er Zone 2 typisk efter Coggans zoner?",
  ["Ca. 56-75 % af FTP", "Ca. 91-105 % af FTP", "Under 30 % af FTP", "Over 120 % af FTP"],
  "Zone 2 er 'udholdenhedszonen'. Den bygger den aerobe motor, som triatleter lever af.");
Q("watt", 2, "Hvorfor bliver watten ofte lidt lavere end planlagt, når du kører i aeroposition?",
  ["Mange kan ikke presse lige så mange watt i den lave position", "Fordi powermeteren altid måler forkert, når du ligger ned i aeroposition på bøjlerne", "Fordi luften er tyndere tæt på vejen", "Det gør den aldrig"],
  "Den lukkede hoftevinkel gør det sværere at træde. Test din FTP i den position, du kører løb i.");
Q("watt", 2, "Hvad betyder 'negative split' på en cykeltur?",
  ["Sidste halvdel køres med lidt højere watt", "Sidste halvdel køres meget langsommere end den første", "Du kører baglæns på ruten", "Du holder pause i midten"],
  "Starter du lidt roligt og slutter stærkt, har du styret pacingen godt.");
Q("watt", 2, "Hvorfor kan det være smart at køre lidt hårdere i modvind og lidt lettere i medvind?",
  ["Du vinder mere tid, hvor farten er lav", "Fordi medvind er farligt, og man skal holde igen", "Fordi det er påkrævet", "Det er aldrig smart"],
  "Hvor farten er lav, giver lidt ekstra watt flere sekunder. Hold det dog i rimelige grænser.");
Q("watt", 2, "Hvad er 'decoupling' mellem puls og watt?",
  ["At pulsen stiger, mens watten er den samme", "At watten stiger, mens pulsen falder til hvilepuls", "At pulsmåleren falder af", "At du skifter cykel"],
  "Stiger pulsen meget ved samme watt, er du ved at blive træt, dehydreret eller varm.");
REGNE = true;
Q("watt", 2, "Din 20-minutters test giver 260 watt i gennemsnit. Hvad er din FTP cirka?",
  ["247 watt", "260 watt", "273 watt", "234 watt"],
  "260 × 0,95 = 247 watt.");
Q("watt", 2, "Din FTP er 240 watt. Du vil køre en Ironman på IF 0,70. Hvilken watt sigter du efter?",
  ["168 watt", "180 watt", "156 watt", "192 watt"],
  "240 × 0,70 = 168 watt.");
Q("watt", 2, "Du kører 1 time med IF 0,80. Hvad er TSS?",
  ["64", "80", "100", "48"],
  "TSS = 1 × 0,80² × 100 = 64.");
Q("watt", 2, "Du vejer 75 kg og har en FTP på 270 watt. Hvad er din W/kg?",
  ["3,6 W/kg", "3,2 W/kg", "3,9 W/kg", "2,7 W/kg"],
  "270 ÷ 75 = 3,6 W/kg.");
Q("watt", 2, "Din gennemsnitswatt er 200, og din NP er 220. Hvad er VI?",
  ["1,10", "1,02", "0,91", "1,20"],
  "VI = NP ÷ gennemsnit = 220 ÷ 200 = 1,10. Det er ret ujævnt for en triathlon.");
Q("watt", 2, "Du kører 90 km med 32 km/t i snit. Hvor lang tid tager det?",
  ["2 t 49 min", "2 t 30 min", "3 t 05 min", "2 t 41 min"],
  "90 ÷ 32 ≈ 2,81 timer. 0,81 × 60 ≈ 49 minutter.");
REGNE = false;
Q("watt", 2, "Hvorfor er en kuperet rute særlig svær at pace?",
  ["Det er fristende at køre for hårdt op ad bakkerne", "Fordi powermeteren ikke virker op ad bakke", "Fordi man ikke må skifte gear på bakker, og derfor skal holde samme gear", "Det er ikke svært"],
  "Mange kører langt over deres plan op ad bakke. Sæt et loft – fx 110 % af løbswatt.");
Q("watt", 2, "Hvorfor skal du teste din FTP igen efter nogle måneders træning?",
  ["FTP ændrer sig, og zonerne skal passe", "Fordi powermeteren skal kalibreres med testen", "Fordi den ellers udløber", "Det skal man ikke"],
  "Bliver du stærkere, er de gamle zoner for lette. Test hver 6.-8. uge eller brug løbsdata.");
Q("watt", 2, "Hvad er 'kalibrering' (zero offset) af en powermeter?",
  ["En nulstilling, så den måler præcist", "En opladning af batteriet i måleren, så den holder hele løbet", "En test af din FTP", "En vask af kæden"],
  "Temperatur kan få powermeteren til at måle skævt. Nulstil før vigtige ture og løb.");

// --- Guld (svær) ---
Q("watt", 3, "Hvorfor kan NP være vildledende på meget korte ture (under 20 minutter)?",
  ["Formlen bruger 30-sekunders glidende gennemsnit og passer bedst til længere ture", "Fordi NP kun virker på hometrainer, hvor der ikke er vind, bakker eller sving", "Fordi NP altid er lavere end gennemsnit", "Det er den ikke"],
  "NP er designet til at beskrive den fysiologiske belastning over længere tid.");
Q("watt", 3, "Hvad er 'CTL' (Chronic Training Load)?",
  ["Et glidende gennemsnit af daglig TSS over ca. 6 uger", "Den højeste watt, du har kørt i en sæson", "Antal ture pr. uge i gennemsnit over hele sæsonen, uanset hvor lange de er", "Din puls efter træning"],
  "CTL beskriver din 'form-grundlag'. Den stiger langsomt, når du træner konsekvent.");
Q("watt", 3, "Hvad er 'TSB' (Training Stress Balance)?",
  ["CTL minus ATL – et tal for, hvor udhvilet du er", "Antal timer, du har sovet efter en hård tur, sammenlignet med en normal nat", "Watt divideret med vægt", "Antal intervaller pr. uge"],
  "Positiv TSB betyder, at du er udhvilet. Før et løb vil man ofte have TSB lidt over nul.");
Q("watt", 3, "Hvorfor ser man ofte, at Ironman-amatører, der kører over IF 0,80, får et svært maraton?",
  ["De har brugt for meget glykogen og trættet musklerne", "Fordi de har drukket for meget vand på cyklen og har fået en tung, oppustet mave", "Fordi løbet er længere end opgivet", "Det ser man ikke"],
  "Over 180 km tæller hver procent. En for høj IF koster ofte mere på løbet, end den gav på cyklen.");
Q("watt", 3, "Hvad er 'kJ' på en cykeltur et mål for?",
  ["Det samlede mekaniske arbejde", "Hvor mange kilometer du har kørt på turen", "Hvor høj puls du har haft", "Din højeste fart"],
  "Gennemsnitswatt × sekunder ÷ 1.000 = kJ. Det svarer omtrent til de kcal, kroppen har forbrændt.");
Q("watt", 3, "Hvorfor svarer kJ arbejde omtrent til forbrændte kcal på cyklen?",
  ["Kroppen er ca. 20-25 % effektiv, og 1 kcal = 4,18 kJ – de to tal ophæver næsten hinanden", "Fordi cykler er 100 % effektive", "Fordi kJ og kcal er to navne for præcis den samme enhed, ligesom km og kilometer", "Det er en tilfældighed"],
  "Det er en praktisk tommelfingerregel til at planlægge energi.");
Q("watt", 3, "Hvorfor kan du ikke bare bruge din FTP fra hometraineren på vejen?",
  ["Varme, position og køling kan give forskellige tal", "Fordi hometrainere altid viser for høje tal og skal ganges med 0,8", "Fordi FTP kun gælder indendørs", "Det kan du altid"],
  "Indendørs er det ofte varmt, og du sidder anderledes. Mange har 5-10 % lavere FTP indendørs.");
Q("watt", 3, "Hvad er 'durability' i udholdenhedsforskning?",
  ["Evnen til at holde sin effekt efter mange timers arbejde", "Hvor længe cykelstellet holder", "Hvor mange år man kan dyrke sport på højt niveau, før kroppen bliver slidt", "Hvor holdbare dækkene er"],
  "To ryttere med samme FTP kan være vidt forskellige efter 4 timer. Lange ture træner durability.");
Q("watt", 3, "Hvorfor øger varme pulsen ved samme watt?",
  ["Mere blod skal til huden for at køle, så hjertet arbejder mere", "Fordi powermeteren måler for lavt i varme, så du i virkeligheden træder hårdere end du tror", "Fordi luften er tungere", "Det gør den ikke"],
  "I varme stiger pulsen. Mange skruer watten ned for at holde den samme fysiologiske belastning.");
Q("watt", 3, "Hvorfor kan pacing efter puls være for forsigtig i starten af et løb og for hård senere?",
  ["Pulsen er høj af nerver i starten og stiger langsomt af træthed", "Fordi pulsen er konstant hele løbet", "Fordi pulsmålere kun virker rigtigt på løb og ikke på cyklen, hvor du sidder stille i overkroppen", "Det er altid perfekt"],
  "Puls 'driver' opad over tid. Kombiner med watt eller fornemmelse for at pace bedre.");
REGNE = true;
Q("watt", 3, "Du kører 4 timer med IF 0,70. Hvad er TSS?",
  ["196", "280", "140", "175"],
  "TSS = 4 × 0,70² × 100 = 4 × 0,49 × 100 = 196.");
Q("watt", 3, "Du kører 3 timer med 180 watt i snit. Hvor mange kJ har du lavet?",
  ["1.944 kJ", "540 kJ", "3.240 kJ", "1.620 kJ"],
  "180 W × 10.800 s = 1.944.000 J = 1.944 kJ – ca. 1.944 kcal forbrændt.");
Q("watt", 3, "Rytter A vejer 60 kg og har 4,0 W/kg. Rytter B vejer 80 kg og har 3,5 W/kg. Hvem har flest watt?",
  ["B med 280 W (A har 240 W)", "A med 280 W (B har 240 W)", "De har lige mange watt", "A med 300 W (B har 260 W)"],
  "A: 60 × 4,0 = 240 W. B: 80 × 3,5 = 280 W. B er stærkest på flad vej, A op ad bakke.");
Q("watt", 3, "Din FTP er 250 W. Du vil køre en halv Ironman på IF 0,80. Hvilken watt sigter du efter?",
  ["200 W", "180 W", "220 W", "190 W"],
  "250 × 0,80 = 200 W.");
Q("watt", 3, "Din NP på en tur er 210 W, og din FTP er 280 W. Hvad er IF?",
  ["0,75", "0,80", "0,70", "1,33"],
  "IF = NP ÷ FTP = 210 ÷ 280 = 0,75.");
Q("watt", 3, "Du vejer 68 kg og vil op på 4,0 W/kg. Hvilken FTP skal du have?",
  ["272 W", "256 W", "288 W", "240 W"],
  "68 × 4,0 = 272 W.");
REGNE = false;
Q("watt", 3, "Hvorfor er W/kg vigtigere i Alpe d'Huez-triathlon end i Ironman Kalmar?",
  ["Bjergruter belønner lav vægt; flade ruter belønner rå watt og aerodynamik", "Fordi Ironman Kalmar har flere bakker", "Fordi W/kg kun måles i Frankrig", "Der er ingen forskel"],
  "Op ad stejle bakker bestemmer W/kg farten. På flad vej betyder watt og CdA mest.");
Q("watt", 3, "Hvad er 'watt pr. CdA' et mål for?",
  ["Hvor hurtigt du er på flad vej", "Hvor godt du klatrer på lange bjergstigninger", "Hvor hurtigt du svømmer", "Hvor stor din kadence er"],
  "På flad vej bestemmer forholdet mellem watt og luftmodstand farten.");
Q("watt", 3, "Hvorfor bruger mange professionelle en 'watt-cap' de første 30 minutter af en Ironman-cykeltur?",
  ["For ikke at lade adrenalin og frisk krop lokke dem til at køre for hårdt", "Fordi reglerne kræver det af alle proffer", "Fordi powermeteren ikke måler korrekt, før den er blevet varm, og det tager ca. en halv time", "For at spare batteri"],
  "Starten føles let. Et loft holder dig på planen, så du har kræfter til de sidste timer.");
Q("watt", 3, "Hvorfor er 'jævne watt' ikke det samme som 'jævn fart'?",
  ["Bakker og vind ændrer, hvor meget fart watten giver", "Fordi watt og fart altid følges præcist", "Fordi powermeteren i virkeligheden måler fart og bare omregner den til watt", "De er det samme"],
  "Med jævne watt varierer farten med terrænet. Det er normalt og det mest effektive.");
Q("watt", 3, "Hvad er 'kadence' typisk for de fleste triatleter i en lang cykeltur, og hvorfor?",
  ["Ca. 80-95 rpm – det sparer musklerne til løbet", "Ca. 40-50 rpm – det sparer pulsen", "Ca. 120-130 rpm – det giver mest fart og skåner knæene på en lang tur", "Kadence betyder intet"],
  "En moderat kadence fordeler belastningen mellem muskler og kredsløb. Find din egen, men undgå meget tunge gear.");
R("watt", 3, "Sæt trinnene i en 20-minutters FTP-test i den rigtige rækkefølge.",
  ["Varm op i 15-20 minutter", "Kør et kort, hårdt interval på 5 minutter", "Kør roligt i 10 minutter", "Kør 20 minutter så hårdt og jævnt du kan", "Beregn FTP som ca. 95 % af gennemsnittet"],
  "Det korte, hårde interval tømmer de hurtige kræfter, så 20-minutters testen bliver mere retvisende.");
R("watt", 2, "Sæt en god pacingplan for en olympisk cykeltur i rækkefølge.",
  ["Rolig start de første 5 minutter", "Find løbswatt og læg dig til rette", "Hold jævnt i midten", "Lidt mere op ad bakker – ikke helt ud", "Let på pedalerne de sidste 2-3 minutter før T2"],
  "De sidste minutter med lettere tråd og højere kadence forbereder benene på løbet.");
Q("watt", 1, "Hvornår i et løb er det sværest at holde igen på cyklen?",
  ["De første minutter efter T1", "De sidste kilometer før T2, når man kan se skiftezonen", "Når man kører ned ad en lang bakke", "Når man drikker"],
  "Adrenalinen pumper, og benene føles friske. Mange kører alt for hårdt de første 20 minutter.");
Q("watt", 3, "Hvad er 'ATL' (Acute Training Load)?",
  ["Et glidende gennemsnit af daglig TSS over ca. 7 dage", "Den højeste puls, du har nået i en uge, målt med pulsbælte", "Dit vægttab efter en lang tur", "Watt i aeroposition"],
  "ATL er din 'træthed' på kort sigt. Den stiger hurtigt efter hårde dage og falder hurtigt i hvile.");
Q("watt", 3, "Hvorfor kan en rytter med lavere FTP slå en med højere FTP på en flad 180 km?",
  ["Bedre aerodynamik og pacing", "Fordi lav FTP altid er bedre på lange distancer og i blæst", "Fordi FTP ikke betyder noget på cykel", "Det kan ikke ske"],
  "Watt er kun halvdelen af historien. En lav CdA og jævn pacing kan give mere end 20 ekstra watt.");
REGNE = true;
Q("watt", 3, "Du kører 180 km på 5 timer og 30 minutter. Hvad er gennemsnitsfarten (cirka)?",
  ["32,7 km/t", "30,0 km/t", "34,5 km/t", "36,0 km/t"],
  "180 ÷ 5,5 = 32,7 km/t.");
REGNE = false;
