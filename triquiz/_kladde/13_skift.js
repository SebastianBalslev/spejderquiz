/* =====================================================================
   SKIFTEZONER (T1/T2)  (emne: "skift")
   ===================================================================== */
// Tegner en triatlet ved monteringslinjen set fra siden.
// v: "foer" (sidder på cyklen før linjen) | "efter" (stiger på efter linjen) | "hjelm" (løber med cyklen, hjelmen ikke spændt) | "cykler" (cykler inde i zonen)
const LINJE = (v) => {
  const x = v === "efter" ? 130 : v === "foer" ? 48 : v === "cykler" ? 36 : 60;
  const cykel = (cx) => `<g fill="none" stroke="#1b2530" stroke-width="2.5"><circle cx="${cx - 22}" cy="108" r="16"/><circle cx="${cx + 22}" cy="108" r="16"/></g>
    <path d="M${cx - 22} 108 L${cx} 110 L${cx - 6} 84 Z M${cx - 6} 84 L${cx + 18} 86 L${cx} 110 M${cx + 18} 86 L${cx + 22} 108" fill="none" stroke="#e0662a" stroke-width="3"/>
    <path d="M${cx - 12} 81 L${cx} 81 M${cx + 18} 86 L${cx + 22} 80" stroke="#1b2530" stroke-width="3"/>`;
  const rytter = (cx) => `<g stroke="#1d6fa5" stroke-width="5" stroke-linecap="round" fill="none"><path d="M${cx - 6} 78 L${cx + 10} 58 L${cx + 22} 80"/><path d="M${cx - 6} 78 L${cx + 4} 96 L${cx} 112"/></g>
    <circle cx="${cx + 14}" cy="50" r="7" fill="#e0662a"/><path d="M${cx + 6} 47 Q${cx + 14} 38 ${cx + 22} 47" fill="#1b2530"/>`;
  const loeber = (cx, aaben) => `<g stroke="#1d6fa5" stroke-width="5" stroke-linecap="round" fill="none"><path d="M${cx} 92 L${cx + 2} 60 L${cx + 22} 76"/><path d="M${cx} 92 L${cx + 12} 106 L${cx + 8} 122 M${cx} 92 L${cx - 10} 106 L${cx - 18} 118"/></g>
    <circle cx="${cx + 3}" cy="50" r="7" fill="#e0662a"/><path d="M${cx - 5} 47 Q${cx + 3} 38 ${cx + 11} 47" fill="#1b2530"/>
    ${aaben ? `<path d="M${cx - 4} 48 L${cx - 8} 60 M${cx + 10} 48 L${cx + 14} 60" stroke="#1b2530" stroke-width="1.5"/>` : `<path d="M${cx - 4} 48 L${cx + 3} 57 L${cx + 10} 48" stroke="#1b2530" stroke-width="1.5" fill="none"/>`}`;
  return TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/><rect y="124" width="200" height="16" fill="#9aa7b1"/>
    <rect x="108" y="124" width="6" height="16" fill="#e63946"/><text x="114" y="16" font-size="8" font-weight="800" fill="#e63946">MONTERINGSLINJE</text>
    <path d="M111 24 L111 122" stroke="#e63946" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="6" y="16" font-size="8" font-weight="800" fill="#1b2530">SKIFTEZONE</text>
    ${v === "cykler" ? `<path d="M2 60 L22 60 M5 60 L5 124 M19 60 L19 124" stroke="#555" stroke-width="3"/>` : ""}
    ${v === "efter" || v === "foer" || v === "cykler" ? cykel(x + 22) + rytter(x + 20) : cykel(x + 46) + loeber(x + 4, true)}`);
};

// --- Bronze (let) ---
Q("skift", 1, "Hvad er T1 i triathlon?",
  ["Skiftet fra svømning til cykling", "Skiftet fra cykling til løb", "Den første svømmebøje, som alle skal runde efter start", "Tidstagning ved start"],
  "T står for transition. T1 kommer efter svømningen, T2 efter cyklingen.");
Q("skift", 1, "Hvad er T2 i triathlon?",
  ["Skiftet fra cykling til løb", "Skiftet fra svømning til cykling", "Den anden omgang på løberuten", "Pausen efter målstregen"],
  "I T2 stiller du cyklen, tager hjelmen af og løber ud.");
Q("skift", 1, "Hvornår skal hjelmen være spændt i T1?",
  ["Før du tager cyklen fra stativet", "Når du har sat dig på cyklen efter linjen", "Efter den første kilometer", "Når du kører op ad en bakke"],
  "Reglen gælder i stort set alle løb: hjelm spændt, før cyklen forlader stativet.");
Q("skift", 1, "Hvornår må du tage hjelmen af i T2?",
  ["Når cyklen hænger på stativet igen", "Så snart du har krydset afmonteringslinjen", "Mens du stadig cykler ind mod skiftezonen", "Når du er halvvejs gennem løbet"],
  "Hjelmen bliver spændt, til cyklen er sat tilbage på din plads.");
Q("skift", 1, "Hvor må du sætte dig op på cyklen?",
  ["Efter monteringslinjen", "Lige ved din plads i skiftezonen", "Hvor du vil, bare det går hurtigt", "Ved svømmeudgangen"],
  "Du skal trække eller løbe med cyklen ud af skiftezonen. Først efter linjen må du sætte dig op.");
QM("skift", 1, "Hvad er fejlen på tegningen?",
  ["Triatleten sidder på cyklen før monteringslinjen", "Triatleten har glemt løbeskoene", "Triatleten har ingen hjelm på, men en kasket, der ikke er godkendt", "Der er ingen fejl"],
  "Du må først sætte dig på cyklen, når du er forbi monteringslinjen. Før linjen skal du gå eller løbe med cyklen.",
  LINJE("foer"));
QM("skift", 1, "Er der en fejl på tegningen?",
  ["Nej – triatleten stiger på efter linjen", "Ja – triatleten skal stige på før linjen", "Ja – triatleten skal løbe med cyklen hele ruten", "Ja – hjelmen må ikke være spændt"],
  "Monteringslinjen er passeret, så nu må triatleten sætte sig op og køre.",
  LINJE("efter"));
QM("skift", 1, "Hvad er fejlen på tegningen?",
  ["Hjelmen er ikke spændt, mens triatleten har cyklen", "Triatleten løber med cyklen i stedet for at køre den ud til monteringslinjen", "Triatleten er efter monteringslinjen", "Der er ingen fejl"],
  "Remmen hænger løs. Hjelmen skal være spændt, før cyklen tages fra stativet.",
  LINJE("hjelm"));
Q("skift", 1, "Hvad betyder det, at skiftezonen er 'personlig'?",
  ["Du skal holde dit udstyr på din egen plads", "Du må låne udstyr fra alle andre i zonen, hvis du selv har glemt noget", "Du må tage din familie med ind", "Den er kun for professionelle"],
  "Du må kun bruge din egen plads. Udstyr, der spredes ud i andres plads, kan give straf.");
Q("skift", 1, "Hvorfor er det smart at gå skiftezonen igennem, før løbet starter?",
  ["Så du ved, hvor din plads er, og hvor du skal ind og ud", "Fordi dommerne kræver, at alle går den igennem mindst tre gange", "For at se andres cykler", "Det er ikke smart"],
  "Find faste pejlemærker ved din plads. Mange har svært ved at finde den efter svømningen.");
Q("skift", 1, "Hvordan kan du finde din plads hurtigere i en stor skiftezone?",
  ["Lære et pejlemærke, fx et skilt, et træ eller nummeret på stativet", "Lægge en stor ballon ved cyklen, så alle andre kan se den", "Spørge de andre deltagere", "Løbe rundt, til du finder den"],
  "Mange arrangører forbyder balloner og flag. Brug rækkenummer og faste pejlemærker.");
Q("skift", 1, "Hvad gør du med våddragten i T1?",
  ["Tager den af og lægger den ved din plads", "Beholder den på hele cykelturen, så du holder dig varm i vinden", "Smider den i vandet", "Giver den til en tilskuer"],
  "Våddragten skal ligge på din plads. Ikke i vejen for andre.");
Q("skift", 1, "Hvad er rækkefølgen i T2?",
  ["Stil cyklen, tag hjelmen af, tag løbesko på og løb", "Tag løbesko på, stil cyklen bagefter og tag hjelmen af sidst", "Spis et måltid først", "Løb ud med hjelmen på"],
  "Cyklen skal hænge, før hjelmen tages af. Så skoene, og afsted.");
Q("skift", 1, "Må man cykle inde i skiftezonen?",
  ["Nej, man skal gå eller løbe med cyklen", "Ja, så længe man kører langsomt og råber, så andre kan flytte sig", "Kun i T2", "Kun hvis man har travlt"],
  "Det er farligt at cykle mellem løbende atleter. Det giver straf.");
QM("skift", 1, "Hvad er fejlen på tegningen?",
  ["Triatleten cykler inde i skiftezonen", "Triatleten har glemt hjelmen", "Triatleten er efter monteringslinjen", "Der er ingen fejl"],
  "Man må ikke cykle i skiftezonen. Gå eller løb med cyklen ud til monteringslinjen.",
  LINJE("cykler"));
Q("skift", 1, "Hvad er en afmonteringslinje?",
  ["Linjen, du skal være stået af cyklen før", "Linjen, hvor du skal sætte dig op på cyklen", "Målstregen", "Linjen ved svømmestarten"],
  "Når du kommer tilbage efter cyklingen, skal du stå af før afmonteringslinjen.");
Q("skift", 1, "Hvorfor lægger mange et lille håndklæde ved deres plads?",
  ["Til at tørre fødderne og markere pladsen", "Til at lægge sig og hvile på mellem disciplinerne", "Fordi det er påkrævet", "Til at svømme med"],
  "Et lille håndklæde kan bruges til at tørre fødderne og som 'måtte' for skoene.");
Q("skift", 1, "Hvad skal du have klar i T1 til cykeldelen?",
  ["Hjelm, cykelsko, briller og evt. nummerbælte", "Løbesko, kasket og en ekstra svømmehætte", "En våddragt", "Ingenting"],
  "Læg tingene i den rækkefølge, du skal bruge dem. Hjelmen ofte øverst på cyklen.");
Q("skift", 1, "Hvorfor lægger mange hjelmen på styret med åben rem?",
  ["Så den hurtigt kan tages på og spændes", "Så den ikke blæser væk i vinden, mens den ligger og venter", "Fordi det er reglen", "For at den kan tørre"],
  "Hjelmen klar til at tage på – med brillerne i – sparer tid.");
REGNE = true;
Q("skift", 1, "Din T1 tager 2:30 og din T2 1:30. Hvor lang tid bruger du i skiftezonen i alt?",
  ["4:00", "3:30", "4:30", "3:00"],
  "2:30 + 1:30 = 4:00.");
Q("skift", 1, "Du sparer 20 sekunder i T1 og 15 sekunder i T2. Hvor meget sparer du i alt?",
  ["35 sekunder", "25 sekunder", "45 sekunder", "30 sekunder"],
  "20 + 15 = 35 sekunder.");
REGNE = false;
R("skift", 1, "Sæt T1 i den rigtige rækkefølge.",
  ["Løb op fra vandet og tag hætte og briller af", "Tag våddragten af ved din plads", "Tag hjelmen på og spænd den", "Tag cyklen fra stativet og løb med den", "Stig på efter monteringslinjen"],
  "Hjelmen først, så cyklen. Først efter linjen må du sætte dig op.");
R("skift", 1, "Sæt T2 i den rigtige rækkefølge.",
  ["Stå af før afmonteringslinjen", "Løb med cyklen til din plads", "Hæng cyklen på stativet", "Tag hjelmen af", "Tag løbeskoene på og løb ud"],
  "Cyklen skal hænge, før hjelmen må tages af.");
Q("skift", 1, "Hvad sker der, hvis du ikke følger skiftezonens regler?",
  ["Du kan få tidsstraf eller blive diskvalificeret", "Ingenting – reglerne i skiftezonen er bare gode råd fra arrangøren", "Du får en præmie", "Du skal starte forfra"],
  "Officials holder øje med hjelm, linjer og pladser. Straffen afhænger af regelsættet.");

// --- Sølv (mellem) ---
Q("skift", 2, "Hvad er 'flyvende start' (flying mount)?",
  ["At hoppe op på cyklen i fart efter monteringslinjen", "At starte svømningen med et spring fra broen", "At cykle ind i skiftezonen", "At tage hjelmen på i luften"],
  "Det sparer tid, men kræver øvelse. Uøvede risikerer at falde og vælte andre.");
Q("skift", 2, "Hvorfor sætter nogle skoene fast på pedalerne før løbet?",
  ["Så de kan løbe barfodet med cyklen og tage skoene på undervejs", "Fordi skoene ellers bliver stjålet af andre deltagere i skiftezonen om natten", "Fordi det er reglen i alle løb", "For at cyklen bliver tungere"],
  "Elastikker holder skoene vandrette. Det er hurtigt, men skal øves meget.");
Q("skift", 2, "Hvad er risikoen ved at tage skoene på, mens du cykler?",
  ["Du kan miste balancen eller ramme andre", "Ingen risiko – det er altid sikrest", "Skoene bliver for stramme, fordi fødderne er hævet efter svømningen", "Du får punktering"],
  "Træn det på en tom vej først. I et løb skal du holde øje med andre.");
Q("skift", 2, "Hvad er 'skifteposer' (transition bags) i mange Ironman-løb?",
  ["Poser med udstyr til cykel og løb, som hentes i skiftet", "Poser til affald fra depoterne", "Poser, du får efter målstregen", "Poser, som du bærer på ryggen med våddragten under hele løbet"],
  "I mange Ironman-løb hænger dit udstyr i poser, og du skifter i et telt. Udstyr må ikke ligge ved cyklen.");
Q("skift", 2, "Hvorfor er det vigtigt at kende farven på dine skifteposer i Ironman?",
  ["Fordi poserne til cykel og løb har forskellige farver", "Fordi du får straf for at bruge den forkerte farve trisuit", "Fordi poserne bliver solgt bagefter", "Det er ikke vigtigt"],
  "Typisk er der én farve til cyklen og én til løbet. Pak dem omhyggeligt dagen før.");
Q("skift", 2, "Hvorfor tager man ofte våddragten halvt af allerede på vej op fra vandet?",
  ["Den glider lettere af, mens den er våd", "Fordi det er påkrævet", "For at blive tør hurtigere, så trisuiten ikke er våd på cyklen", "For at vise trisuiten frem"],
  "Lyn op og træk armene ud, mens du løber. Ved pladsen skal du kun have benene fri.");
Q("skift", 2, "Hvad gør du, hvis våddragten sidder fast om anklerne?",
  ["Træd på den med den anden fod og træk benet op", "Klip den op med en saks fra skiftezonen", "Lad den sidde og cykel med den", "Bed en tilskuer eller en fra familien om at trække den af dig hen over hegnet"],
  "Glidecreme på anklerne før start hjælper. Udefrakommende hjælp er normalt ikke tilladt.");
Q("skift", 2, "Hvorfor skal du løbe med cyklen ved at holde i sadlen eller styret – og ikke skubbe den foran dig vildt?",
  ["Det giver kontrol, så du ikke rammer andre", "Fordi det er hurtigere at løbe baglæns", "For at cyklen ikke bliver beskidt af græsset og sandet i skiftezonen", "Det er lige meget"],
  "Mange øvede holder kun i sadlen og styrer cyklen med hoften. Øv det først.");
Q("skift", 2, "Hvorfor tager mange sokkeløse cykelsko på i T1?",
  ["Det er hurtigere end at tage strømper på våde fødder", "Fordi strømper er forbudt på cyklen", "Fordi cykelsko ikke passer med strømper", "For at holde varmen"],
  "Våde fødder og strømper er en dårlig kombination. Talkum i skoene hjælper.");
Q("skift", 2, "Hvad er 'clean transition' – en god vane i skiftezonen?",
  ["At holde dit udstyr samlet og minimalt på din plads", "At vaske cyklen ren i skiftezonen mellem svømning og cykling, så den kører hurtigt", "At tage alt muligt ekstra udstyr med", "At lægge udstyret i andres plads"],
  "Mindre udstyr betyder færre valg og hurtigere skift.");
Q("skift", 2, "Hvor skal cyklen hænge, når du kommer tilbage i T2?",
  ["På din egen plads på stativet", "Hvor der er plads nærmest udgangen", "På jorden ved siden af stativet", "Uden for skiftezonen"],
  "Cyklen skal tilbage på din plads. Hænger den forkert, kan du få straf.");
Q("skift", 2, "Hvorfor øver eliteatleter skift så meget?",
  ["Sekunder i skiftet kan afgøre placeringer, især i korte løb", "Fordi skiftezonen er det sjoveste", "Fordi de ikke kan lide at svømme", "Det gør de ikke"],
  "I sprintløb kan et langsomt skift betyde, at du mister gruppen på cyklen.");
Q("skift", 2, "Hvad er en almindelig fejl hos nye triatleter i T1?",
  ["At bruge for lang tid på at tørre sig og tage tøj på", "At løbe for hurtigt med cyklen og ankomme for tidligt", "At glemme at svømme", "At tage hjelmen på for hurtigt"],
  "Du behøver ikke være tør. Trisuiten tørrer på cyklen.");
Q("skift", 2, "Hvad skal du gøre, hvis du ikke kan finde din plads i skiftezonen?",
  ["Stoppe kort, finde dit pejlemærke og orientere dig", "Tage en tilfældig cykel i samme størrelse og bytte tilbage i T2", "Løbe rundt i cirkler", "Gå hjem"],
  "Et øjebliks ro er bedre end panik. Derfor er det vigtigt at øve vejen før start.");
Q("skift", 2, "Hvorfor sætter mange gels fast på cyklen eller i bento-boksen før løbet?",
  ["Så de ikke skal huske at tage dem med i T1", "Fordi gels er forbudt at have med i skiftezonen og skal sidde på cyklen ved check-in", "For at gøre cyklen tungere", "Det gør de ikke"],
  "Jo mindre du skal huske i skiftet, jo bedre.");
REGNE = true;
Q("skift", 2, "Fra svømmeudgangen til din plads er der 300 m, og du løber med 4:00 min/km. Hvor lang tid tager det?",
  ["1:12", "1:00", "1:20", "0:48"],
  "0,3 × 240 s = 72 s = 1:12.");
Q("skift", 2, "Du bruger 3:10 i T1 og 1:50 i T2. Du øver dig og sparer 25 % på begge. Hvor meget sparer du i alt?",
  ["1:15", "1:00", "1:30", "0:50"],
  "Samlet 5:00 × 0,25 = 1:15.");
REGNE = false;
Q("skift", 2, "Du er stået af cyklen før afmonteringslinjen i T2. Hvad er det næste, der skal ske?",
  ["Løbe med cyklen til pladsen og hænge den op", "Tage hjelmen af med det samme her ved linjen", "Køre ind i skiftezonen", "Lægge cyklen på jorden"],
  "Hjelmen bliver på, til cyklen hænger på stativet.");

// --- Guld (svær) ---
Q("skift", 3, "Hvad sker der efter World Triathlons regler, hvis du får en tidsstraf for en skiftezone-fejl i et sprintløb?",
  ["Du afsoner den typisk i en penaltyboks på løberuten", "Du skal svømme en ekstra runde", "Du skal starte forfra", "Du får en bøde i kroner, som skal betales, før resultatet bliver godkendt"],
  "Mange straffe afsones i en penaltyboks. Tjek løbsmanualen – detaljerne varierer.");
Q("skift", 3, "Hvorfor kan et skiftetelt i Ironman have særlige regler om påklædning?",
  ["Nogle løb har separate telte, og omklædning skal ske diskret i teltet", "Fordi man skal skifte til tøj i en bestemt farve", "Fordi teltet er åbent for tilskuere", "Der er ingen regler"],
  "Nøgenhed uden for teltet er ikke tilladt. Følg arrangørens anvisninger.");
Q("skift", 3, "Hvad er reglen om at 'sprede' udstyr i skiftezonen hos World Triathlon?",
  ["Udstyret skal blive i din tildelte plads, ellers kan det give straf", "Du må lægge udstyret hvor som helst", "Udstyret skal ligge i en kasse af en bestemt størrelse, som arrangøren har godkendt", "Der er ingen regel"],
  "Udstyr, der spærrer for andre, er farligt og kan give straf.");
Q("skift", 3, "Hvorfor kan 'flying mount' være en dårlig idé i et stort amatørløb?",
  ["Mange atleter står og monterer ved linjen, og risikoen for at ramme nogen er stor", "Fordi det er forbudt i alle amatørløb", "Fordi det er langsommere end at sætte sig roligt op, uanset hvor øvet man er, og derfor kun bruges af tilskuerhensyn", "Det er altid en god idé"],
  "Vurder situationen. Hvis der er trængsel, er en sikker montering hurtigst i sidste ende.");
Q("skift", 3, "Hvad betyder det, at hjelmen skal være 'spændt' – ikke bare sat på?",
  ["Hagestroppen skal være lukket", "At hjelmen skal sidde skævt", "At den skal være stram om panden", "At visiret skal være nede"],
  "Hjelmen tæller kun som 'på', når stroppen er lukket. Ellers kan det give straf.");
Q("skift", 3, "Hvorfor lægger mange ikke strømper til løbet i en sprinttriathlon?",
  ["Det tager tid at få strømper på våde fødder, og distancen er kort", "Fordi strømper er forbudt på løbet", "Fordi skoene er for små", "Fordi strømper gør dig langsommere"],
  "På kort distance kan sekunderne være vigtigere end komforten. På Ironman vælger mange strømper.");
Q("skift", 3, "Hvorfor kan det være smart at have cyklen i et let gear, når du stiller den i skiftezonen før start?",
  ["Det er lettere at komme op i fart efter monteringen", "Fordi tunge gear er forbudt i skiftezonen", "For at kæden ikke ruster eller strækkes, mens cyklen hænger i skiftezonen natten over", "Det er ikke smart"],
  "Et let gear gør de første tråd lette – særligt hvis der er en bakke lige efter linjen.");
Q("skift", 3, "Hvad er en almindelig regel for, hvordan cyklen skal hænge på stativet i mange løb?",
  ["Arrangøren angiver, fx at den skal hænge i sadlen eller styret – følg anvisningen", "Den skal ligge på jorden", "Den skal stå på hovedet", "Der er aldrig regler om det"],
  "Mange løb kræver, at cyklen hænger på en bestemt måde. Læs løbsmanualen.");
Q("skift", 3, "Hvorfor kan det være en fordel at have startnummeret i nummerbælte og ikke sat fast på trisuiten?",
  ["Du kan dreje det fra ryggen (cykel) til maven (løb) og bruge samme trisuit hele vejen", "Fordi nummeret ellers bliver vådt", "Fordi det er forbudt at have nummer på trisuiten i alle løb under både Ironman, World Triathlon og DTriF, og det giver straf", "Det er ingen fordel"],
  "Hvis reglerne kræver nummer bagpå på cyklen, skal det drejes frem til løbet.");
Q("skift", 3, "Hvorfor er der ofte 'one-way'-flow i skiftezonen?",
  ["Så alle bevæger sig i samme retning, og ingen kolliderer", "Fordi det ser pænere ud", "Fordi dommerne kun kan se én retning fra deres tårn i midten af zonen", "Det er der ikke"],
  "Svøm ind, cykel ud, cykel ind og løb ud følger en fast rute gennem zonen.");
Q("skift", 3, "Hvorfor er det en dårlig idé at efterlade en våddragt halvt ude i gangen?",
  ["Andre kan falde over den, og det kan give straf", "Fordi den bliver stjålet", "Fordi den tørrer for hurtigt i solen og bliver stiv og svær at bruge igen", "Det er ligegyldigt"],
  "Hold gangene fri. Det er sikkerhed – og regler.");
REGNE = true;
Q("skift", 3, "Du løber 450 m fra vand til cykel og 200 m med cyklen til monteringslinjen med 4:30 min/km og bruger 40 s ved pladsen. Hvad er T1?",
  ["3:35,5", "3:10,0", "3:55,0", "2:55,5"],
  "650 m × 0,27 s/m = 175,5 s. Plus 40 s = 215,5 s = 3:35,5.");
Q("skift", 3, "Din T1 og T2 er 2:50 og 1:40. En konkurrent har 1:55 og 1:05. Hvor meget taber du i alt i skiftene?",
  ["1:30", "1:10", "1:50", "0:55"],
  "(2:50 − 1:55) + (1:40 − 1:05) = 0:55 + 0:35 = 1:30.");
Q("skift", 3, "Du taber 1:20 til gruppen foran i T1 i et draftingløb. Gruppen kører 42 km/t. Hvor mange meter er du bagud?",
  ["Ca. 930 m", "Ca. 560 m", "Ca. 1.400 m", "Ca. 280 m"],
  "42 km/t = 11,67 m/s. 80 s × 11,67 ≈ 933 m.");
REGNE = false;
R("skift", 3, "Sæt et hurtigt T1 med sko på pedalerne i rigtig rækkefølge.",
  ["Træk våddragten ned til hoften på vej op", "Tag våddragten helt af ved pladsen", "Tag hjelm og briller på og spænd hjelmen", "Løb barfodet med cyklen til monteringslinjen", "Hop op på cyklen og stik fødderne i skoene, når farten er oppe"],
  "Kræver øvelse – men sparer tid, fordi du ikke løber i cykelsko.");
R("skift", 2, "Sæt skiftezonens strøm i den rigtige rækkefølge for en triatlet.",
  ["Svøm ind", "Find din plads og gør dig klar til cykel", "Cykel ud forbi monteringslinjen", "Cykel ind før afmonteringslinjen", "Løb ud"],
  "Følg pilene og skiltene. Zonen har ofte faste ruter, som du ikke må skære.");
Q("skift", 3, "Hvorfor kan det koste mere end selve skiftetiden at være langsom i T1 i et draftingløb?",
  ["Du kan miste gruppen og skal cykle alene i vinden", "Fordi T1 tæller dobbelt", "Fordi du får straf", "Det koster ikke mere"],
  "I draftingløb er gruppen alt. Få sekunder kan blive til minutter senere.");
Q("skift", 3, "Hvad er det vigtigste ved at pakke skifteposer i Ironman?",
  ["Alt nødvendigt i den rigtige pose og intet ekstra – og øv rækkefølgen", "At poserne er så tunge som muligt", "At bruge samme pose til alt", "At pakke dem på selve løbsdagen kl. 5, så tingene er helt friske og tørre"],
  "Pak dagen før. Lav en tjekliste. Tjek igen.");
Q("skift", 3, "Hvad er reglen i mange løb om at efterlade udstyr (fx en gel-indpakning) i skiftezonen?",
  ["Affald skal i dit område eller i affaldsspande – ikke smides i zonen", "Det er tilladt at smide alt", "Det skal tages med på løbet", "Der er ingen regel"],
  "Littering giver straf i mange løb. Hold zonen ren.");
Q("skift", 1, "Hvornår åbner skiftezonen typisk for check-in?",
  ["Før start – tiden står i løbsinformationen", "Først når du er kommet op af vandet efter svømningen", "Efter løbet", "Den er altid åben"],
  "Check-in sker før start, ofte aftenen før eller tidligt om morgenen. Kom i god tid.");
Q("skift", 2, "Hvorfor kigger mange på skiftezonen fra svømmeudgangen før start?",
  ["For at se, hvilken vej de skal løbe til deres plads", "For at tælle hvor mange cykler, der er dyrere end deres egen", "For at finde tilskuerne", "Det gør ingen"],
  "Gå ruten fra svømmeudgangen til din plads. Så ved du, hvor du skal dreje.");
Q("skift", 2, "Hvad er fordelen ved at have brillerne klar inde i hjelmen?",
  ["Du tager begge dele på i én bevægelse", "Fordi briller er påkrævet inde i hjelmen ved check-in", "Fordi brillerne ellers dugger", "Ingen fordel"],
  "Små vaner som denne sparer sekunder og gør, at du ikke glemmer noget.");
Q("skift", 2, "Hvorfor skal du stoppe helt før afmonteringslinjen – og ikke rulle over den?",
  ["Fordi linjen markerer, hvor du skal være stået af – ellers kan det give straf", "Fordi du skal vente på, at en dommer giver dig lov", "Fordi cyklen skal vejes", "Det skal du ikke"],
  "Mange tager den ene fod ud af skoen tidligt og stiger af i fart før linjen.");
Q("skift", 2, "Hvad betyder 'drop-off' i et Ironman-skifte?",
  ["At aflevere cyklen til en hjælper, der hænger den op", "At tabe sin cykel i skiftezonen", "At smide affald på ruten", "At udgå af løbet"],
  "I mange Ironman-løb tager frivillige imod cyklen i T2, så du kan løbe direkte til skifteposerne.");
Q("skift", 2, "Hvorfor kan et skift tage længere tid i kulde?",
  ["Kolde fingre gør det svært at lukke spænder og tage tøj på", "Fordi kulde gør skiftezonen længere", "Fordi dommerne kræver mere tøj", "Det tager ikke længere tid"],
  "Øv dig med kolde hænder, og vælg udstyr med store spænder og lynlåse.");
Q("skift", 2, "Hvad gør du med hjelmen, hvis du er ved at løbe ud af T2 og opdager, at du stadig har den på?",
  ["Løb tilbage og læg den på din plads", "Smid den ind over hegnet til en tilskuer", "Løb med den hele vejen", "Læg den på jorden i gangen"],
  "Udstyr skal efterlades på din plads. At smide den kan give straf.");
Q("skift", 3, "Hvorfor sidder skiftezoner ofte tæt på svømmeudgangen, men med lang løbestrækning i Ironman?",
  ["Store felter kræver plads til mange cykler og telte", "Fordi arrangørerne ønsker, at atleterne løber mest muligt", "Fordi skiftetiden ikke tæller med", "Det gør de ikke"],
  "I store løb kan T1 være flere hundrede meter. Indregn det i din forventede tid.");
Q("skift", 3, "Tæller skiftetiden med i din samlede tid?",
  ["Ja, uret kører fra start til mål", "Nej, skiftene er gratis tid", "Kun T1 tæller med", "Kun for eliten"],
  "Skiftet er en del af løbet. Derfor kaldes det ofte 'den fjerde disciplin'.");
Q("skift", 3, "Hvorfor kaldes skiftet ofte 'den fjerde disciplin'?",
  ["Fordi det kan trænes og koster eller vinder tid ligesom de andre discipliner", "Fordi der gives særskilte medaljer for det hurtigste skift", "Fordi det er det længste stykke", "Fordi det er det sjoveste"],
  "Med træning kan man spare et halvt til helt minut – gratis fart.");
Q("skift", 3, "Hvad er risikoen ved at tage en ny hjelm med ukendt spænde til et løb?",
  ["Du kan fumle med spændet i T1 og miste tid eller få straf", "Den nye hjelm er altid forbudt", "Den gør dig langsommere på cyklen", "Ingen risiko"],
  "Øv spændet mange gange – også med våde og kolde fingre.");
REGNE = true;
Q("skift", 3, "Dit T1 er 90 s hurtigere end sidste år, men din svømning er 40 s langsommere. Hvad er nettoændringen fra start til cykel?",
  ["50 s hurtigere", "130 s hurtigere", "50 s langsommere", "40 s hurtigere"],
  "−90 s + 40 s = −50 s. Du er 50 sekunder hurtigere.");
Q("skift", 3, "Ved 5 sprintløb sparer du 25 s pr. løb i skiftene. Hvor meget sparer du over sæsonen?",
  ["2 min 5 s", "1 min 40 s", "2 min 30 s", "1 min 25 s"],
  "5 × 25 s = 125 s = 2 minutter og 5 sekunder.");
REGNE = false;
Q("skift", 3, "Hvorfor tager eliteatleter ofte ikke strømper og trøje på i T1 i et sprintløb?",
  ["Trisuiten er nok, og sekunderne tæller mere end komforten", "Fordi strømper er forbudt i eliteløb", "Fordi de ikke fryser", "Det gør de altid"],
  "På kort distance er alt ekstra udstyr tidsspild. Over Ironman-distancen er det anderledes.");
