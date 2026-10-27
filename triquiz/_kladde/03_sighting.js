/* =====================================================================
   SIGHTING OG BØJER  (emne: "sighting")
   ===================================================================== */
const BANE = (ekstra) => `<rect width="200" height="140" fill="#4a9fd0"/><rect y="122" width="200" height="18" fill="#e3cf9a"/>${ekstra}`;
const BOEJE = (x, y, f) => `<path d="M${x-7} ${y+8} L${x} ${y-12} L${x+7} ${y+8}Z" fill="${f||"#f2711c"}" stroke="#7a3410" stroke-width="1"/><path d="M${x-4} ${y} H${x+4}" stroke="#fff" stroke-width="1.5"/>`;
// --- Bronze (let) ---
Q("sighting", 1, "Hvad er sighting?",
  ["At løfte øjnene og kigge frem mod målet", "At svømme med lukkede øjne for at koncentrere sig", "At tælle bøjerne på ruten inden start", "At kigge bagud efter de andre svømmere"],
  "I open water er der ingen streg at følge. Du løfter øjnene kort over vandet og sigter mod bøjen eller et pejlemærke.");
Q("sighting", 1, "Hvor højt skal du løfte hovedet, når du sigter?",
  ["Kun så øjnene kommer op", "Så hele hagen kommer over vandet", "Så skuldrene også kommer op", "Helt op som i brystsvømning"],
  "Kun øjnene skal over vandet – som en krokodille. Løfter du mere, synker benene, og du bremser.");
Q("sighting", 1, "Hvad kaldes teknikken, hvor kun øjnene kommer op over vandet?",
  ["Krokodilleøjne", "Delfinhop", "Fugleblik", "Periskopsving"],
  "Krokodilleøjne: kun øjnene titter op, munden bliver under vandet. Derefter drejer du hovedet til siden og trækker vejret.");
Q("sighting", 1, "Hvor ofte bør du sigte i et løb med god sigt og roligt vand?",
  ["Ca. hvert 6.-10. tag", "Ved hvert eneste armtag", "Kun én gang pr. 500 meter", "Aldrig – man følger bare de andre"],
  "Hvert 6.-10. tag er en god tommelfingerregel. I bølger, modlys eller ved bøjerne skal du sigte oftere.");
Q("sighting", 1, "Hvad er en vendebøje?",
  ["En bøje, du skal svømme rundt om", "En bøje, du kan hvile dig på", "En bøje, der viser vandets temperatur", "En bøje, der markerer et farligt sted"],
  "Ved vendebøjerne skifter ruten retning. De er ofte større eller har en anden farve end bøjerne, der bare viser vejen.");
Q("sighting", 1, "Hvad betyder det, at en bøje skal holdes på venstre side?",
  ["Bøjen skal være på din venstre hånd, når du runder den", "Du skal svømme forbi på bøjens venstre side, sådan som den ses fra land", "Du skal ånde til venstre ved bøjen", "Du skal svømme baglæns ved bøjen"],
  "'Bøjen på venstre side' betyder, at bøjen er ved din venstre skulder, mens du runder den – så svømmer du mod uret rundt.");
Q("sighting", 1, "Hvorfor sigter mange efter noget stort bag ved bøjen, fx et træ eller et hus?",
  ["Det er lettere at se end en lille bøje", "Bøjerne flytter sig hele tiden med strøm og vind", "Det er påkrævet i reglerne", "Fordi bøjerne er gennemsigtige"],
  "En lille bøje forsvinder let mellem bølgerne. Et højt træ, et tårn eller et hus i samme retning ses langt bedre.");
Q("sighting", 1, "Hvornår i armtaget er det lettest at sigte?",
  ["Mens den forreste arm støtter", "Midt i tilbageføringen af armen", "Mens du laver en kolbøttevending", "Mens du sparker hårdt med benene"],
  "Når den forreste arm presser lidt ned og frem, løfter den hovedet. Så kan du kigge op og bagefter dreje hovedet og ånde.");
Q("sighting", 1, "Hvad skal du gøre lige efter, du har kigget frem?",
  ["Dreje hovedet til siden og trække vejret", "Holde hovedet oppe et par tag mere for at være sikker", "Stoppe og træde vande", "Dykke helt ned"],
  "Kig frem, og drej så hovedet til siden for at ånde. Sighting og vejrtrækning kombineres, så hovedet kun er oppe kort tid.");
Q("sighting", 1, "Hvorfor skal du kende ruten før start?",
  ["Så du ved, hvilke bøjer der skal rundes og hvordan", "Fordi der ikke er bøjer på ruten", "Fordi man ikke må løfte hovedet og kigge op under svømningen", "Fordi alle ruter er ens"],
  "Se rutekortet og gå ned til vandet før start. Find vendebøjerne og et pejlemærke bag hver af dem.");
Q("sighting", 1, "Hvad kan du gøre, hvis solen blænder dig, når du skal sigte?",
  ["Bruge spejlbriller eller tonede briller", "Svømme med lukkede øjne", "Svømme baglæns", "Tage brillerne af og svømme med hovedet oppe"],
  "Tonede eller spejlbelagte briller dæmper solen. I modlys kan du også følge svømmerne foran dig – men tjek retningen engang imellem.");
Q("sighting", 1, "Hvad bør du gøre, hvis du er i tvivl om retningen?",
  ["Kigge frem flere gange i træk", "Fortsætte og håbe på det bedste", "Svømme tilbage til start", "Spørge svømmeren ved siden af"],
  "Sigt hellere et par ekstra gange end at svømme langt i den forkerte retning. Det koster kun få sekunder.");
Q("sighting", 1, "Hvorfor svømmer de fleste ikke helt lige uden at sigte?",
  ["De trækker lidt mere med den ene arm", "Vandet drejer altid mod højre", "Brillerne er skæve", "Våddragten trækker altid kroppen lidt til den ene side"],
  "De fleste har en stærkeste side eller en lille skævhed i taget. Uden pejlemærker ender man i en bue.");
Q("sighting", 1, "Hvad er fordelen ved at svømme lige bag en anden svømmer, der svømmer lige?",
  ["Du kan følge fødderne og sigte sjældnere", "Du får en bonus i tiden", "Du må ikke sigte, når du ligger bagved", "Fødderne viser dig, hvornår du skal ånde"],
  "Ligger du på fødderne af en, der svømmer rigtigt, kan du følge boblerne. Men tjek, at den foran rent faktisk svømmer mod bøjen.");
Q("sighting", 1, "Hvor går du hen efter sidste bøje i de fleste løb?",
  ["Mod svømmeudgangen", "Tilbage til startbøjen", "Rundt om den første bøje igen", "Ind til en tilfældig strand"],
  "Efter sidste bøje svømmer du mod udgangen – ofte markeret med en bue eller et stort skilt. Find den før start.");
Q("sighting", 1, "Hvad sker der med benene, hvis du sigter for højt og for længe?",
  ["De synker, og du bremser", "De flyder op og sparker af sig selv", "Der sker intet med benene", "De bliver automatisk varmere"],
  "Ligesom ved vejrtrækningen fungerer kroppen som en vippe. Kig kort og lavt – og et lille ekstra benspark kan holde benene oppe.");
QM("sighting", 1, "Hvordan skal bøjen rundes på tegningen, når pilen viser retningen?",
  ["Mod uret med bøjen på venstre hånd", "Med uret, så bøjen hele tiden er på din højre hånd", "Lige forbi uden at runde den", "Under bøjen"],
  "Pilen går mod uret rundt om bøjen. Så har du bøjen på din venstre side, mens du svømmer rundt.",
  TEGNING(BANE(`${BOEJE(100,60)}<path d="M60 115 L80 70 Q100 40 120 70 L140 115" stroke="#fff" stroke-width="3" fill="none" stroke-dasharray="6 4"/><path d="M140 115 l-2 -10 l8 4Z" fill="#fff"/>`)));
QM("sighting", 1, "Hvad viser tegningen bedst, når du skal sigte mod bøjen?",
  ["Et højt pejlemærke bag bøjen", "Bøjen er for lille til at se", "Der er strøm i vandet", "Ruten er en løkke"],
  "Kirketårnet står lige bag bøjen. Når du sigter efter tårnet, rammer du bøjen, selvom den forsvinder i bølgerne.",
  TEGNING(`<rect width="200" height="140" fill="#cfe6f2"/><rect y="70" width="200" height="70" fill="#4a9fd0"/><rect y="56" width="200" height="16" fill="#6f9a45"/>
    <rect x="94" y="16" width="14" height="44" fill="#e3e7ea" stroke="#9aa6b2"/><path d="M92 18 L101 2 L110 18Z" fill="#c0392b"/>${BOEJE(101,86)}
    <path d="M60 100 q8 -4 16 0 t16 0 M120 112 q8 -4 16 0 t16 0" stroke="#e6f4fb" stroke-width="2" fill="none"/>`));
Q("sighting", 1, "Hvorfor kan det være godt at øve sighting i bassinet?",
  ["Så bevægelsen er automatisk, før du skal bruge den", "Fordi det er lettere at svømme lige der", "Fordi der er bøjer i alle bassiner", "Fordi man ikke må øve i søen"],
  "Kig efter en vandflaske på kanten hvert sjette tag. Så er bevægelsen indlært, når du skal bruge den i søen.");
Q("sighting", 1, "Hvordan ved du, at du er på vej i den rigtige retning, hvis du ikke kan se bøjen?",
  ["Sigt efter pejlemærket, du fandt inden start", "Svøm i den retning, solen står", "Følg den største bølge", "Stop op og vent, til livredderen råber retningen til dig"],
  "Find før start et højt træ, en mast eller en bygning bag hver bøje. De er synlige, selv når bøjen gemmer sig.");
Q("sighting", 1, "Hvorfor står der ofte mange svømmere tæt ved en vendebøje?",
  ["Alle vil runde tættest på bøjen", "Fordi bøjen er et hvilested", "Fordi der er drikkevand ved bøjen", "Fordi man skal stoppe ved bøjen"],
  "Den korteste vej går tæt på bøjen, så alle presser sig sammen. Det kan give slag og trængsel.");
Q("sighting", 1, "Hvad betyder det, hvis bøjerne har to farver i et løb?",
  ["Typisk viser den ene vej og den anden vending", "At det er to forskellige løb", "At halvdelen af bøjerne er forbudte at svømme tæt på", "At vandet er koldt ved de mørke"],
  "Mange løb bruger fx gule bøjer til at vise vejen og orange eller røde til at vende. Læs løbsinformationen.");
Q("sighting", 1, "Hvad kan du gøre for at svømme mere lige?",
  ["Sigte oftere og øve et symmetrisk tag", "Svømme med hovedet over vandet", "Kun trække vejret til én side", "Svømme med pullbuoy i løbet, så benene ikke styrer dig skævt"],
  "Et lige tag og hyppige små sigtninger holder dig på kurs. Bilateral vejrtrækning hjælper også mange med at svømme lige.");
Q("sighting", 1, "Hvorfor skal du sigte oftere, når du nærmer dig en vendebøje?",
  ["For at ramme den tæt og undgå at svømme forbi", "Fordi det er påkrævet i reglerne", "Fordi vandet bliver dybere", "For at se, hvem der fører, og hvor langt du er efter"],
  "Tæt på bøjen skal du finde den rigtige linje. Sigter du for sjældent, ender du for langt ude eller rammer andre svømmere.");
Q("sighting", 1, "Hvad er det typisk, du sigter efter, når du skal svømme i land?",
  ["Svømmeudgangen, fx en bue eller et stort flag", "Den første bøje på ruten", "Et tilfældigt hus eller træ et stykke oppe på stranden", "Skyerne over stranden"],
  "Svømmeudgangen er ofte markeret med en oppustelig bue eller store flag. Se den an fra stranden før start.");

// --- Sølv (mellem) ---
Q("sighting", 2, "Hvorfor er det bedre at sigte to-tre gange kort i træk end én gang længe?",
  ["Hovedet er oppe kortere tid ad gangen", "Det er påkrævet i World Triathlons regler", "Brillerne dugger mindre", "Du kan ånde gennem næsen"],
  "Ét kort kig giver et glimt; to-tre kig i træk giver et sikkert billede – uden at hovedet er oppe så længe, at benene synker.");
Q("sighting", 2, "Hvordan sigter du bedst i høje bølger?",
  ["Kig op, når du er på toppen af en bølge", "Kig op, når du er i bunden mellem bølgerne", "Sigt aldrig i bølger", "Svøm med hovedet oppe hele tiden"],
  "I bølgedalen kan du kun se vand. Mærk rytmen, og løft øjnene, når en bølge løfter dig.");
Q("sighting", 2, "Hvad er en 'kork-trækker'-vending ved en bøje?",
  ["Du ruller om på ryggen og videre over på maven, mens du drejer", "Du dykker ned under bøjen", "Du laver en kolbøtte foran bøjen", "Du griber fat i bøjen med den ene hånd og svinger dig rundt om den"],
  "Ved en skarp vending kan du rulle én omgang om din egen længdeakse. Det drejer kroppen hurtigt og uden at stoppe.");
Q("sighting", 2, "Hvorfor kan det betale sig at svømme lidt uden om trængslen ved en bøje?",
  ["Du undgår at stoppe og miste rytmen", "Den ydre linje er altid kortere", "Fordi man får en tidsbonus", "Fordi det er påkrævet for nybegyndere"],
  "Ved bøjen klumper feltet sig. Et par meter ekstra uden om kan være hurtigere end at stå stille i en klump af arme og ben.");
Q("sighting", 2, "Hvad betyder det, når en rute er 'mod uret'?",
  ["Bøjerne holdes på venstre side", "Bøjerne holdes på højre side", "Man svømmer mod strømmen", "Man starter i den modsatte ende"],
  "Svømmer du mod uret, drejer du til venstre ved bøjerne – de er altså på din venstre skulder.");
Q("sighting", 2, "Hvad er risikoen ved altid at følge fødderne foran dig?",
  ["Den foran kan svømme forkert", "Du må ikke ligge på fødder i triathlon", "Du kommer bagud i tid", "Du bliver for varm"],
  "Drafting er effektivt, men den foran kan også tage en dårlig linje. Sigt selv en gang imellem, så du ikke svømmer forkert sammen.");
Q("sighting", 2, "Hvorfor kan tonede briller være en dårlig idé ved en start i tåge eller tidligt om morgenen?",
  ["De gør det sværere at se i svagt lys", "De er ikke tilladt før kl. 8", "De dugger altid til", "De dugger altid hurtigere til end klare briller i koldt vand"],
  "Mørke glas er gode i sol, men i tåge eller morgenlys kan klare eller lyse glas give bedre sigt. Vælg efter vejret.");
Q("sighting", 2, "Hvad er en god måde at træne sighting på i bassinet?",
  ["Sigte på en flaske på kanten hvert 6. tag", "Svømme med lukkede øjne", "Svømme baglæns i rygcrawl", "Svømme hele vejen med pullbuoy og hovedet over vandet"],
  "Læg en flaske eller et håndklæde for enden af banen, og løft øjnene mod den. Kombinér det med vejrtrækningen.");
Q("sighting", 2, "Hvorfor svømmer man ofte længere end den officielle distance i open water?",
  ["Ingen svømmer helt lige mellem bøjerne", "Bøjerne bliver flyttet undervejs", "Distancen er altid målt forkert", "Fordi strømmen altid gør selve ruten længere"],
  "Små sving fra side til side lægger meter til. Gode sightere svømmer tættere på den korteste linje.");
Q("sighting", 2, "Hvad gør du, hvis du ikke kan finde den næste bøje efter en vending?",
  ["Sigt efter pejlemærket eller de andre svømmere", "Svøm tilbage rundt om bøjen", "Stop og tag brillerne af", "Svøm hurtigere i samme retning"],
  "Efter en vending kan den næste bøje være svær at se. Brug pejlemærket, du fandt før start, eller den samlede strøm af svømmere.");
Q("sighting", 2, "Hvorfor kan et ekstra benspark hjælpe, når du sigter?",
  ["Det holder benene oppe, mens hovedet løftes", "Det gør dig mere synlig for livredderne i kajakkerne", "Det får vandet til at blive roligt", "Det er påkrævet ved sighting"],
  "Når hovedet løftes, vil benene synke. Et par kraftige spark i det øjeblik holder kroppen vandret.");
Q("sighting", 2, "Hvorfor står vendebøjer typisk længere fra land end de bøjer, der bare viser vejen?",
  ["Det gør de ikke nødvendigvis – ruten afgør det", "Fordi de skal være i dybt vand", "Fordi de er tungere", "Fordi livredderne holder ved dem"],
  "Bøjernes placering afhænger helt af ruten. Derfor skal du altid læse rutekortet – ingen ruter er ens.");
Q("sighting", 2, "Hvad er en 'rektangulær' rute med to vendebøjer typisk?",
  ["Ud, på tværs og tilbage mod land", "En rute, der kun går ét sted hen", "En rute i et bassin", "En rute uden bøjer"],
  "Mange ruter går ud til første bøje, på tværs til den næste og tilbage. Kend antallet af vendinger, så du ikke vender for tidligt.");
Q("sighting", 2, "Hvorfor kan to omgange af ruten give problemer?",
  ["Man kan glemme, hvor mange omgange man har svømmet", "Man skal skifte svømmehætte og våddragt mellem omgangene", "Man må kun svømme én omgang ad gangen", "Bøjerne er forskellige i hver omgang"],
  "I et langt løb kan det være svært at holde styr på omgangene. Nogle løb har en 'australsk exit', hvor man løber kort på land mellem omgangene.");
Q("sighting", 2, "Hvad er en australsk exit?",
  ["At man løber kort på land mellem to svømmeomgange", "En svømmestart, hvor alle springer ud fra en høj klippe", "At man kravler op ad en stige", "At man svømmer med finner"],
  "Ved en australsk exit kommer man op på land og løber over en strækning, før man går i vandet til omgang to. Det giver publikum noget at se på.");
Q("sighting", 2, "Hvorfor skal du være ekstra opmærksom ved den første bøje efter en massestart?",
  ["Feltet er tættest, og der er mest kamp", "Fordi den første bøje altid er fortøjet løst", "Fordi man skal stoppe ved den", "Fordi den står på land"],
  "Ved den første bøje er alle stadig samlet. Der kan være slag og trængsel – hold armene foran hovedet og svøm målrettet.");
QM("sighting", 2, "Ruten på tegningen svømmes mod uret. Hvilken side skal bøjerne være på?",
  ["Venstre", "Højre", "Skiftevis venstre og højre", "Det er lige meget"],
  "Mod uret drejer du til venstre ved hver bøje, så de er på din venstre side.",
  TEGNING(BANE(`${BOEJE(40,30)}${BOEJE(160,30)}<path d="M150 118 L165 45 Q160 22 140 30 L55 30 Q36 30 38 50 L50 118" stroke="#fff" stroke-width="2.4" fill="none" stroke-dasharray="6 4"/><path d="M50 118 l-6 -8 l8 -1Z" fill="#fff"/><text x="146" y="134" font-size="10" fill="#1b2530" font-weight="800">START</text>`)));
QM("sighting", 2, "Hvilken vej er hurtigst rundt om bøjen på tegningen, når der er en klump af svømmere tæt på bøjen?",
  ["Lidt uden om klumpen (A)", "Lige gennem klumpen (B)", "På den forkerte side af bøjen (C)", "Under klumpen (D)"],
  "Den indre linje er kortest, men en klump svømmere kan få dig til at stoppe helt. Et par meter uden om holder farten.",
  TEGNING(BANE(`${BOEJE(100,50)}${[[88,70],[96,74],[106,72],[114,68],[100,80],[92,82],[110,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#f2c94c"/>`).join("")}
    <path d="M60 118 Q50 50 100 24 Q150 50 140 118" stroke="#fff" stroke-width="2.4" fill="none" stroke-dasharray="5 4"/><text x="40" y="60" font-size="12" fill="#fff" font-weight="800">A</text>
    <path d="M80 118 L100 72 L120 118" stroke="#1b2530" stroke-width="2" fill="none" stroke-dasharray="4 3"/><text x="70" y="104" font-size="12" fill="#1b2530" font-weight="800">B</text>
    <text x="130" y="44" font-size="12" fill="#e63946" font-weight="800">C</text><text x="96" y="110" font-size="12" fill="#f2c94c" font-weight="800">D</text>`)));
Q("sighting", 2, "Hvad er den største fordel ved bilateral vejrtrækning i open water?",
  ["Du kan se til begge sider og vælge side", "Du kan sigte uden at løfte hovedet", "Du kommer hurtigere frem", "Du sluger mindre saltvand"],
  "Med vejrtrækning til begge sider kan du se bøjer og svømmere på begge sider og vælge læsiden, når der er bølger.");
Q("sighting", 2, "Hvordan svømmer du, når solen står lige over den næste bøje?",
  ["Sigt efter noget ved siden af, eller følg feltet", "Svøm med lukkede øjne mod solen", "Vent, til solen forsvinder", "Svøm rygcrawl, så solen er bag dig og ikke blænder"],
  "Lige mod solen kan bøjen være umulig at se. Find et pejlemærke ved siden af, eller følg svømmerne foran – og sigt ofte.");
Q("sighting", 2, "Hvorfor tæller nogle tag mellem bøjerne?",
  ["For at vide, hvornår næste bøje er tæt på", "Fordi man skal stoppe efter et bestemt antal", "For at holde vejret længere", "For at få en bonus i tiden"],
  "Kender du cirka antallet af tag på en strækning, ved du, hvornår du skal begynde at sigte efter vendebøjen.");
Q("sighting", 2, "Hvad er 'brudt sighting' – en typisk fejl?",
  ["At stoppe taget og løfte hele overkroppen for at kigge", "At kigge op hvert sjette tag", "At kombinere sighting med vejrtrækning", "At sigte efter et højt pejlemærke"],
  "Mange stopper næsten op og kigger som i brystsvømning. Det koster fart. Sighting skal være en lille del af det normale tag.");
Q("sighting", 2, "Hvorfor kan det være smart at svømme lidt bredt ind mod en bøje, der skal rundes skarpt?",
  ["Så du kan dreje skarpt tæt om bøjen", "Fordi det er påkrævet i reglerne", "For at undgå livredderne og kajakkerne ved bøjen", "For at kunne se tilbage"],
  "Kommer du lidt bredt ind, kan du runde stramt og komme ud på den rette linje mod næste bøje.");
Q("sighting", 2, "Hvad kan du bruge de andre svømmeres arme til i et stort felt?",
  ["Et groft billede af, hvor feltet svømmer hen", "Et sikkert tegn på, at du er forrest", "Et signal om, at du skal stoppe", "Ingenting – du skal kun kigge på bøjen"],
  "Plasker der arme i én retning, svømmer feltet derhen. Det er en hjælp, men tjek selv bøjen engang imellem.");
R("sighting", 2, "Sæt en god sighting i den rigtige rækkefølge.",
  ["Den forreste arm strækkes og støtter", "Løft øjnene frem som en krokodille", "Kig efter bøjen eller pejlemærket", "Drej hovedet til siden og træk vejret", "Hovedet tilbage i vandet og fortsæt taget"],
  "Kig, drej og ånd – i én flydende bevægelse. Så er hovedet kun oppe et kort øjeblik.");

// --- Guld (svær) ---
Q("sighting", 3, "Hvor mange ekstra meter kan det typisk give at svømme 5 grader skævt i 400 meter?",
  ["Ca. 35 meter væk fra linjen", "Under 1 meter, fordi det er så lille en vinkel", "Præcis 5 meter", "Over 200 meter"],
  "400 m × sin(5°) ≈ 35 m. Svømmer du 5 grader skævt, ender du ca. 35 meter ved siden af bøjen og må rette op – det koster tid.");
Q("sighting", 3, "Hvorfor sigter erfarne open water-svømmere ofte i rytme med vejrtrækningen hvert 3. eller 6. tag?",
  ["Det bliver en fast del af rytmen", "Det er påkrævet ved elite-løb", "Det giver mindre vand i brillerne", "Det holder pulsen helt nede"],
  "Når sighting er en fast del af rytmen, koster det næsten ingen fart. Kig frem, drej og ånd – uden pause.");
Q("sighting", 3, "Hvad er fordelen ved at svømme på den side af feltet, der er tættest på vendebøjen i en lang strækning?",
  ["Du kommer ind på den korteste linje", "Du får mere læ for vinden", "Det er påkrævet efter første omgang", "Du kan hvile på bøjerne"],
  "Placering betyder noget. Ligger du på den indre side, har du den korteste vej ind til vendebøjen.");
Q("sighting", 3, "Hvorfor kan en strøm langs kysten gøre det vigtigt at sigte på to punkter, der står bag hinanden?",
  ["Står de på linje, er du på den rigtige kurs", "Fordi bøjerne er gemt bag hinanden", "Det er den eneste lovlige måde at sigte på i saltvand", "Fordi strøm gør vandet uklart"],
  "Ligesom ved navigation på søen: to mærker på linje – fx bøjen og et kirketårn – viser, om strømmen har skubbet dig ud af kurs.");
Q("sighting", 3, "Hvad sker der med svømmetiden, hvis du svømmer 3,8 km med 10 % omvej?",
  ["Du svømmer 380 meter ekstra", "Du svømmer 38 meter ekstra", "Du svømmer 3,8 meter ekstra", "Det ændrer ikke tiden"],
  "10 % af 3.800 m er 380 m – det svarer til mange minutter for de fleste. God navigation er en af de billigste forbedringer.");
Q("sighting", 3, "Hvorfor sigter mange efter bøjens top og ikke bøjens bund?",
  ["Toppen er synlig over bølgerne", "Bunden er under vandet og usynlig", "Det er reglen ved vendebøjer", "Toppen har en anden farve"],
  "Bøjens spids rager op over bølgerne og er det første, du ser. Et lysende flag på bøjen hjælper også.");
Q("sighting", 3, "Hvad kan det koste at gå for langt ude ved en vendebøje i en stor gruppe?",
  ["Mange meter og forbindelsen til gruppen", "Ingenting, man kommer altid tilbage i gruppen bagefter", "Diskvalifikation", "Kun et enkelt sekund"],
  "Går du bredt ud, mister du fødderne foran og må måske svømme alene i modvind. Find balancen mellem trængsel og omvej.");
Q("sighting", 3, "Hvorfor kan en svømmer med et tydeligt skævt tag have mere brug for at sigte?",
  ["Svømmeren trækker hele tiden til den ene side", "Svømmeren svømmer hurtigere end de fleste andre i feltet", "Svømmeren har bedre opdrift", "Svømmeren kan ikke ånde til siden"],
  "Et skævt tag giver en fast afdrift. Jo større skævheden er, jo oftere skal man rette op – og jo mere betaler teknisk træning sig.");
Q("sighting", 3, "Hvorfor kan det være en fordel at ånde mod land ved en kystnær svømning med sol fra havet?",
  ["Du ser pejlemærker og undgår at blive blændet", "Det giver mere opdrift", "Fordi der altid er færre bølger på den side, der vender mod land", "Det er påkrævet i saltvand"],
  "Mod land er der huse, træer og flag at styre efter. Mod havet kan solen blænde. Vælg side efter forholdene.");
Q("sighting", 3, "Hvad er et 'transit' i navigation på vandet?",
  ["To kendte punkter, der står på linje", "En særlig bøje, som kun elite-svømmerne skal runde", "En hurtig vending ved en bøje", "En strækning uden bølger"],
  "Når to punkter står på linje, ved du, at du er på den linje, der går gennem dem. Det kan bruges til at holde kursen i strøm.");
Q("sighting", 3, "Hvorfor kan det betale sig at gå ud i vandet og svømme en del af ruten før start?",
  ["Du ser bøjerne fra vandhøjde og tjekker pejlemærkerne", "Det er påkrævet for at få tidtagning", "Du kan flytte bøjerne", "Så du ved, hvor livredderne holder"],
  "Fra stranden ser alt anderledes ud end fra vandhøjde. Se bøjerne og pejlemærkerne, som du ser dem i løbet.");
Q("sighting", 3, "Hvorfor er det dyrt at svømme forbi en vendebøje og skulle tilbage?",
  ["Du svømmer dobbelt og mister feltet", "Det koster altid fem minutters straf", "Du skal starte forfra", "Bøjen bliver flyttet efter dig"],
  "Svømmer du forbi, skal du både svømme tilbage og rundt – og har mistet gruppen. Hyppigere sighting tæt på bøjen forebygger det.");
Q("sighting", 3, "Hvorfor kan en orange bøje være svær at se ved solnedgang?",
  ["Det orange lys glider sammen med himlen", "Bøjen bliver mørk om aftenen", "Den skifter farve, når vandet bliver koldere om aftenen", "Den synker om aftenen"],
  "I lavt, varmt lys kan orange og gul smelte sammen med himlen og glinset på vandet. Brug pejlemærker og flere kig.");
Q("sighting", 3, "Hvad er en typisk regel om bøjer i de fleste regelsæt, fx hos World Triathlon?",
  ["Man skal runde dem som anvist og ikke skære af", "Man må svømme på hvilken som helst side", "Man skal røre hver eneste bøje med hånden, når man passerer", "Man skal stoppe ved hver bøje"],
  "Bøjerne skal rundes på den anviste side. Skærer man en bøje af, kan man få straf eller blive diskvalificeret.");
Q("sighting", 3, "Hvorfor kan man svømme hurtigere i en lige linje bag et kajakføret felt i et eliteløb?",
  ["Kajakken viser kursen, og feltet giver læ", "Fordi kajakken trækker svømmerne", "Fordi der er strøm bag kajakken", "Fordi kajakken laver bølger, der skubber svømmerne fremad"],
  "I eliteløb sejler en føringskajak foran. Svømmerne kan sigte efter den og ligge i læ af hinanden.");
Q("sighting", 3, "Hvad er det bedste valg, når to vendebøjer er tæt på hinanden og skal rundes i en 'U'?",
  ["Runde stramt om den første og komme på linje mod den anden", "Svømme helt bredt ud om begge", "Stoppe mellem dem og orientere sig", "Svømme baglæns mellem dem"],
  "Ved en U-vending gælder det om at runde den første bøje tæt og allerede sigte mod den anden. Så sparer du både meter og fart.");
QM("sighting", 3, "Tegningen viser to svømmeres spor mellem to bøjer. Hvem har svømmet kortest?",
  ["Den gule", "Den røde", "De har svømmet lige langt", "Det kan ikke ses"],
  "Den gule linje er næsten lige, mens den røde slår store sving. Hvert sving lægger meter til – og koster tid.",
  TEGNING(BANE(`${BOEJE(30,70)}${BOEJE(170,70)}<path d="M38 72 Q100 66 162 72" stroke="#f2c94c" stroke-width="3" fill="none"/>
    <path d="M38 72 Q60 30 80 72 T120 72 T162 72" stroke="#e63946" stroke-width="3" fill="none"/>`)));
QM("sighting", 3, "Tegningen viser bøjen, et tårn og en svømmer i strøm. Hvad fortæller det, at tårnet IKKE står bag bøjen, set fra svømmeren?",
  ["Svømmeren er drevet ud af den tænkte linje", "Svømmeren er på perfekt kurs", "Bøjen er blevet flyttet et godt stykke af strømmen", "Tårnet er flyttet"],
  "Når to mærker ikke står på linje, er du ikke på linjen gennem dem. Juster kursen, til tårnet igen står bag bøjen.",
  TEGNING(`<rect width="200" height="140" fill="#cfe6f2"/><rect y="40" width="200" height="100" fill="#4a9fd0"/><rect y="26" width="200" height="16" fill="#6f9a45"/>
    <rect x="96" y="4" width="10" height="26" fill="#e3e7ea" stroke="#9aa6b2"/>${BOEJE(100,70)}<circle cx="150" cy="120" r="6" fill="#f2c94c"/>
    <path d="M150 116 L100 70" stroke="#fff" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M150 116 L101 16" stroke="#1b2530" stroke-width="1.5" stroke-dasharray="3 3"/>
    ${[20,60].map(y=>`<path d="M14 ${y+60} H40 l-5 -3 M40 ${y+60} l-5 3" stroke="#e6f4fb" stroke-width="2" fill="none"/>`).join("")}`));
Q("sighting", 3, "Hvorfor kan man se dårligere med svømmebriller, der er indstillet for stramt?",
  ["De trykker og kan give hovedpine og sløret syn", "De gør glassene mørkere", "De lukker for meget lys ind", "De giver mere dug"],
  "For stramme briller trykker på øjenhulerne og kan give hovedpine. Sæt dem tæt nok til at være tætte – ikke strammere.");
Q("sighting", 3, "Hvad betyder 'sighting frequency' for en svømmer i en fast gruppe i et eliteløb?",
  ["Man sigter sjældnere, fordi gruppen viser vejen", "Man skal sigte ved hvert eneste tag i hele løbet", "Man må ikke sigte", "Det er helt uændret i forhold til at svømme alene"],
  "I en stabil gruppe kan man bruge feltet som 'linje' og kun tjekke retningen engang imellem. Men tæt på bøjerne skal man selv holde øje.");
Q("sighting", 3, "Hvorfor kan det være en fordel at kende vindretningen før svømningen?",
  ["Den afgør bølger og strøm og dermed din linje", "Vinden afgør, hvor arrangøren lægger bøjerne ud på dagen", "Vinden gør vandet varmere", "Vinden bestemmer starttidspunktet"],
  "Vinden skaber bølger og strøm ved overfladen. Med vinden fra siden skal du sigte lidt op mod den for at holde kursen.");
Q("sighting", 3, "Hvad er den mest effektive måde at sigte på, hvis du bruger hvert 2. tag til vejrtrækning?",
  ["Sigt lige før en vejrtrækning", "Sigt midt mellem to vejrtrækninger", "Sigt med hovedet til siden", "Sigt under vandet"],
  "Løft øjnene lige før du drejer hovedet for at ånde. Så bliver sighting og vejrtrækning én bevægelse.");
R("sighting", 3, "Sæt en god plan for navigationen i et open water-løb i rækkefølge.",
  ["Læs rutekortet og tæl vendebøjerne", "Find et pejlemærke bag hver bøje fra stranden", "Svøm en del af ruten i opvarmningen", "Start i den side, der passer til første bøje", "Sigt oftere tæt på bøjerne"],
  "God navigation begynder før start. Kend ruten, find pejlemærkerne, test dem fra vandet, og placer dig klogt i starten.");
Q("sighting", 3, "Hvad betyder det, at mange triatleter svømmer langsommere i open water end i bassinet på samme distance?",
  ["Navigation, bølger og ingen vendinger tæller med", "At bassiner er kortere end opgivet", "At våddragter gør dig langsommere", "At der er mindre ilt ved søen"],
  "Ingen vendinger med fraspark, sighting, bølger og omveje gør open water langsommere for de fleste – selv med våddragtens opdrift.");
Q("sighting", 3, "Hvorfor ligger der ofte en kajak eller båd ved hver vendebøje i et løb?",
  ["Officials holder øje med, at bøjen rundes rigtigt", "For at trække svømmerne rundt", "For at dele vand ud til svømmere, der bliver tørstige undervejs", "For at flytte bøjen"],
  "Ved vendebøjerne holder officials og livreddere øje med både sikkerhed og at alle runder bøjen på den rigtige side.");
