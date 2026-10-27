/* =====================================================================
   CYKEL OG UDSTYR  (emne: "cykeludstyr")
   ===================================================================== */
// Tegner en racercykel. Et rødt pejlemærke markerer den del, der spørges om.
const CYKEL = (mark, tri) => {
  const pil = {
    saddel: [82, 40], styr: [148, 44], kaede: [108, 104], kassette: [150, 95], bremse: [141, 62],
    pedal: [96, 116], gear: [158, 104], krank: [90, 108], pind: [60, 80], ventil: [150, 64], aerobar: [158, 50]
  }[mark];
  return TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/><rect y="126" width="200" height="14" fill="#c9d3da"/>
    <g fill="none" stroke="#1b2530" stroke-width="3"><circle cx="50" cy="95" r="30"/><circle cx="150" cy="95" r="30"/></g>
    <g fill="none" stroke="#9aa7b1" stroke-width="1"><circle cx="50" cy="95" r="25"/><circle cx="150" cy="95" r="25"/></g>
    <path d="M50 95 L95 98 L84 52 Z M84 52 L138 56 L95 98 M138 56 L150 95 M138 56 L136 46" fill="none" stroke="#e0662a" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="95" cy="98" r="9" fill="none" stroke="#1b2530" stroke-width="2.5"/>
    <path d="M50 95 L95 89 M50 95 L95 107" stroke="#555" stroke-width="1.5"/>
    <circle cx="50" cy="95" r="5" fill="none" stroke="#555" stroke-width="2"/>
    <circle cx="150" cy="95" r="7" fill="#9aa7b1" stroke="#555" stroke-width="1.5"/><circle cx="150" cy="95" r="3" fill="#555"/><rect x="137" y="60" width="9" height="5" rx="1.5" fill="#1b2530"/>
    <path d="M95 98 L90 112" stroke="#1b2530" stroke-width="3"/><rect x="84" y="111" width="12" height="4" rx="1" fill="#1b2530"/>
    <path d="M84 52 L82 44" stroke="#1b2530" stroke-width="3"/><path d="M70 42 Q82 38 92 43" stroke="#1b2530" stroke-width="5" fill="none" stroke-linecap="round"/>
    ${tri ? `<path d="M136 46 L162 46" stroke="#1b2530" stroke-width="3"/><path d="M140 44 L140 40" stroke="#1b2530" stroke-width="3"/>`
          : `<path d="M136 46 L146 44 Q154 44 152 54 Q150 60 144 58" stroke="#1b2530" stroke-width="3" fill="none"/>`}
    ${pil ? `<circle cx="${pil[0]}" cy="${pil[1]}" r="9" fill="none" stroke="#e63946" stroke-width="3"/><path d="M${pil[0]+12} ${pil[1]-14} L${pil[0]+7} ${pil[1]-7}" stroke="#e63946" stroke-width="3"/>` : ""}`);
};

// --- Bronze (let) ---
Q("cykeludstyr", 1, "Hvad er det vigtigste stykke udstyr, når du cykler i triathlon?",
  ["En godkendt cykelhjelm", "Et cykelcomputer-ur", "Clipless-pedaler", "En aerohjelm med visir"],
  "Hjelmen er påkrævet i alle triathlonløb. Den skal være spændt, før du rører cyklen i skiftezonen.");
Q("cykeludstyr", 1, "Hvornår skal hjelmen være spændt i skiftezonen?",
  ["Før du tager cyklen fra stativet", "Når du er kommet ud af skiftezonen", "Når du har sat dig i sadlen", "Kun hvis det regner"],
  "Hjelmen skal være spændt, før cyklen forlader stativet – og må først løsnes, når cyklen er sat tilbage.");
Q("cykeludstyr", 1, "Hvad er en racercykel kendetegnet ved?",
  ["Smalle dæk og bøjet styr", "Brede knopdæk og affjedring", "En kurv foran og skærme", "Et stort sæde og ét gear"],
  "Racercyklen er let og hurtig på asfalt. Det bøjede styr giver flere greb og en lav position.");
Q("cykeludstyr", 1, "Hvad er en tempocykel (TT-cykel)?",
  ["En cykel bygget til at ligge lavt og aerodynamisk", "En cykel til at køre i terræn", "En elcykel med ekstra batteri til lange ture på landevejen", "En cykel med tre hjul"],
  "Tempocyklen har aerobøjler og en geometri, der lægger rytteren lavt. Den er hurtig alene på flad vej.");
Q("cykeludstyr", 1, "Må man køre en almindelig racercykel i triathlon?",
  ["Ja, det er helt almindeligt", "Nej, man skal have en tempocykel", "Kun i Ironman", "Kun hvis den har skærme"],
  "Racercyklen er tilladt i alle løb og er ofte et bedre valg på kuperede ruter og som første cykel.");
QM("cykeludstyr", 1, "Hvilken del af cyklen er markeret?",
  ["Sadlen", "Styret", "Pedalen", "Kæden"],
  "Sadlen sidder på sadelpinden. Højden betyder meget for komfort og kraft.",
  CYKEL("saddel"));
QM("cykeludstyr", 1, "Hvilken del af cyklen er markeret?",
  ["Kæden", "Bremsen", "Sadelpinden", "Ventilen"],
  "Kæden overfører kraften fra pedalerne til baghjulet. Hold den ren og smurt.",
  CYKEL("kaede"));
QM("cykeludstyr", 1, "Hvilken del af cyklen er markeret?",
  ["Pedalen", "Kassetten", "Bremsen", "Styret"],
  "Pedalen er det, du træder på. Mange triatleter bruger klikpedaler.",
  CYKEL("pedal"));
QM("cykeludstyr", 1, "Hvilken del af cyklen er markeret?",
  ["Styret", "Sadlen", "Kæden", "Pedalen"],
  "Det bøjede styr på en racercykel giver flere greb: oppe på toppen, på bremsegrebene og nede i bøjlerne.",
  CYKEL("styr"));
Q("cykeludstyr", 1, "Hvad er klikpedaler?",
  ["Pedaler, hvor skoen klikkes fast", "Pedaler, der klikker når de skal smøres", "Pedaler med lys", "Pedaler af træ"],
  "En klampe under skoen klikker fast i pedalen, så du kan både træde og trække. Øv dig i at klikke ud!");
Q("cykeludstyr", 1, "Hvad er en 'trisuit'?",
  ["En heldragt til alle tre discipliner", "En våddragt til kolde løb", "Et sæt af tre forskellige dragter – én til hver disciplin", "En regnjakke til cykling"],
  "Trisuiten bruges hele vejen – den tørrer hurtigt og har en tynd pude til cyklingen.");
Q("cykeludstyr", 1, "Hvad bruger mange triatleter til at holde startnummeret?",
  ["Et nummerbælte", "Sikkerhedsnåle i huden", "Tape på hjelmen", "Et klistermærke på armen"],
  "Nummerbæltet kan drejes: nummeret bag på cykeldelen og foran på løbet. Det sparer tid i T2.");
Q("cykeludstyr", 1, "Hvorfor skal man have en drikkeflaske med på cyklen?",
  ["Du skal drikke undervejs", "Fordi det er et krav at have to", "For at veje mere ned ad bakke", "For at kunne køle kæden"],
  "På cyklen er det lettest at drikke og spise. Flaskeholdere sidder typisk på rammen eller bag sadlen.");
Q("cykeludstyr", 1, "Hvad er en cykelcomputer?",
  ["En lille skærm, der viser fart, distance og mere", "En lille computer, der automatisk styrer og skifter gearene for dig", "En app til at bestille cykler", "En robot, der cykler for dig"],
  "Cykelcomputeren viser fx fart, kadence, puls og watt. Mange bruger den til at styre tempoet.");
Q("cykeludstyr", 1, "Hvad betyder et lavt gear på cyklen?",
  ["Det er let at træde, godt op ad bakke", "Det er tungt at træde, godt ned ad bakke", "Cyklen kører baglæns", "Bremsen er slået til"],
  "Et let gear gør det muligt at holde kadencen, når det går op ad bakke.");
Q("cykeludstyr", 1, "Hvad er kadence?",
  ["Hvor mange pedalomdrejninger du laver pr. minut", "Hvor hurtigt du kører i km/t i gennemsnit på en hel tur", "Hvor mange gear du har", "Hvor højt sadlen sidder"],
  "Kadence måles i omdrejninger pr. minut (rpm). Mange triatleter kører omkring 80-95 rpm.");
Q("cykeludstyr", 1, "Hvorfor er cykelbriller gode?",
  ["De beskytter øjnene mod vind, insekter og grus", "De gør dig hurtigere", "De er påkrævede i alle løb under World Triathlons regler", "De viser vejen"],
  "Briller holder vind, støv, regn og fluer ude af øjnene. De er gode at have i alle vejrforhold.");
Q("cykeludstyr", 1, "Hvad skal du altid have med på en længere cykeltur?",
  ["Slange, dækjern og pumpe eller CO2", "En ekstra cykel", "En våddragt", "Løbesko og et løbebælte, hvis du må gå hjem med cyklen"],
  "Punktering kan ske for alle. Med slange, dækjern og pumpe eller CO2 kan du klare dig selv.");
Q("cykeludstyr", 1, "Hvad er et 'bidon'?",
  ["En drikkeflaske til cyklen", "En del af bremsen", "En type cykelsko", "En lille taske under sadlen"],
  "Bidon er cykelsprog for drikkeflasken.");
Q("cykeludstyr", 1, "Hvorfor skal dækkene pumpes regelmæssigt?",
  ["Dæk mister luft over tid, og for lavt tryk giver punktering og modstand", "Fordi luften bliver gammel", "Fordi pumpen ellers ruster og ikke virker, når du skal bruge den", "Fordi pumpen ellers ruster"],
  "Racerdæk taber luft langsomt. Pump før hver tur og hold øje med det tryk, der står på dækket.");
Q("cykeludstyr", 1, "Hvad er sikkerhed nummer ét, når du cykler på vejen?",
  ["Følg færdselsreglerne og vær synlig", "Kør altid i midten af vejen", "Kør uden hjelm, så du bedre kan høre bilerne bag dig", "Kør så hurtigt som muligt"],
  "Træning på vejen kræver, at du følger færdselsloven, bruger lys og er synlig for bilister.");
Q("cykeludstyr", 1, "Hvad er en hometrainer?",
  ["Et stativ, så du kan cykle indendørs", "En personlig træner, der kommer hjem til dig og lægger programmer", "En cykel uden pedaler", "En slags cykelhjelm"],
  "På en hometrainer kan du træne struktureret og sikkert – også om vinteren.");
Q("cykeludstyr", 1, "Hvorfor har cykelsko en stiv sål?",
  ["Kraften fra benet når pedalen uden at gå tabt", "Så de kan bruges til løb", "For at holde fødderne varme og tørre på lange ture i regnvejr", "For at de kan flyde i vand"],
  "En stiv sål overfører kraften bedre og giver mindre trykpunkter under lange ture.");
Q("cykeludstyr", 1, "Hvad er en saddeltaske?",
  ["En lille taske under sadlen til værktøj og slange", "En taske til våddragten", "En blød pude, der spændes oven på sadlen for at give komfort", "En taske til løbeskoene"],
  "Saddeltasken er det klassiske sted at have reservedele med på turen.");
Q("cykeludstyr", 1, "Hvad hedder cykelbukser med indbygget pude?",
  ["Bibshorts eller cykelbukser med pude", "Badebukser", "Løbetights", "Compression-tights med ekstra polstring ved knæene"],
  "Puden (chamois) skåner mod gnav og tryk. En trisuit har en tyndere pude, så den også kan bruges til svøm og løb.");

// --- Sølv (mellem) ---
QM("cykeludstyr", 2, "Hvilken del af cyklen er markeret?",
  ["Kassetten", "Klingen", "Krankarmen", "Navet"],
  "Kassetten er tandhjulene på baghjulet. Flere tænder giver et lettere gear.",
  CYKEL("kassette"));
QM("cykeludstyr", 2, "Hvilken del af cyklen er markeret?",
  ["Krankarmen", "Sadelpinden", "Kædestaget", "Pedalakslen"],
  "Krankarmen forbinder pedalen med krankboksen. Typiske længder er 165-175 mm.",
  CYKEL("krank"));
QM("cykeludstyr", 2, "Hvilken del af cyklen er markeret?",
  ["Aerobøjlerne", "Bremsegrebene", "Sadelpinden", "Styrstammen"],
  "Aerobøjlerne lader dig hvile underarmene og ligge lavt og smalt. De findes på tempocykler.",
  CYKEL("aerobar", true));
Q("cykeludstyr", 2, "Hvad er forskellen på en tempocykel og en racercykel?",
  ["Tempocyklen er bygget til en lav aeroposition; racercyklen til kontrol og klatring", "Tempocyklen har ingen gear", "Racercyklen må slet ikke bruges i triathlonløb uden drafting – kun tempocykler er tilladt", "Der er ingen forskel"],
  "Tempocyklen er hurtigst alene på flad vej. Racercyklen håndterer bedre i sving, ned ad bakke og i grupper.");
Q("cykeludstyr", 2, "Hvorfor er aerohjelme formet med en lang hale?",
  ["Luften kan glide af uden hvirvler", "For at holde solen væk", "For at give plads til håret under hjelmen, når man har langt hår", "For at være lettere"],
  "Halen udfylder 'hullet' bag hovedet. Men vender du hovedet ned eller til siden, kan den give mere modstand.");
Q("cykeludstyr", 2, "Hvad er en powermeter?",
  ["En måler, der måler kraften i watt", "Et batteri til cykellygten", "En måler, der viser puls", "En måler, der viser dæktrykket i begge hjul under kørslen"],
  "Watt er et præcist mål for, hvor hårdt du arbejder – uanset vind og bakker.");
Q("cykeludstyr", 2, "Hvor kan en powermeter sidde?",
  ["I pedalen, krankarmen, kranken eller baghjulets nav", "Kun i hjelmen, hvor den måler, hvor hårdt du arbejder via pulsen i tindingen", "Kun i sadlen", "Kun i styret"],
  "Der findes flere typer. Pedalbaserede er nemme at flytte mellem cykler.");
Q("cykeludstyr", 2, "Hvad er fordelen ved dybe fælge (fx 60 mm)?",
  ["Mindre luftmodstand", "Mere komfort på brosten", "Lettere at klatre med", "Lettere at lappe"],
  "Dybe fælge er mere aerodynamiske. I sidevind kan de dog være svære at styre.");
Q("cykeludstyr", 2, "Hvad er et skivehjul?",
  ["Et lukket baghjul uden eger", "Et hjul med en bremseskive ved navet i stedet for fælgbremser", "Et hjul af træ", "Et støttehjul"],
  "Skivehjulet er meget aerodynamisk. Nogle løb forbyder det, hvis der er meget sidevind.");
Q("cykeludstyr", 2, "Hvad er tubeless-dæk?",
  ["Dæk uden slange, ofte med tætningsvæske", "Dæk uden luft", "Dæk af massivt gummi, som slet ikke skal pumpes op", "Dæk med to slanger"],
  "Tætningsvæsken kan lukke små huller af sig selv. Mange triatleter bruger tubeless for færre punkteringer.");
Q("cykeludstyr", 2, "Hvad er fordelen ved bredere dæk (fx 28 mm) frem for meget smalle (23 mm)?",
  ["Ofte lavere rullemodstand og mere komfort", "De er altid lettere", "De har altid mindre luftmodstand, fordi de leder luften rundt om fælgen", "Der er ingen forskel"],
  "Moderne forskning viser, at bredere dæk med passende tryk ofte ruller lettere på almindelig vej.");
Q("cykeludstyr", 2, "Hvad er 'gearing' 52/36 og 11-30?",
  ["Tænder på klinger foran og tandhjul bagpå", "Højde og vægt på cyklen", "Fart og kadence", "Det anbefalede dæktryk foran og bag, målt i psi"],
  "Foran er der to klinger (52 og 36 tænder). Bagpå går tandhjulene fra 11 til 30 tænder.");
Q("cykeludstyr", 2, "Hvorfor vælger nogle triatleter en mindre klinge foran til et kuperet løb?",
  ["Så de kan holde en god kadence op ad bakke", "For at cyklen vejer mindre", "Fordi store klinger er forbudt", "For at kunne træde hurtigere og køre stærkere ned ad bakke"],
  "En mindre klinge eller et større tandhjul bagpå giver lettere gear, så benene ikke bliver kørt ned.");
Q("cykeludstyr", 2, "Hvor er det smart at placere flasker på en tempocykel?",
  ["Mellem aerobøjlerne og i rammen", "Bag på hjelmen", "I trisuitens lommer på ryggen, så cyklen er helt fri for udstyr", "På forhjulet"],
  "En flaske mellem aerobøjlerne er nem at drikke fra og giver næsten ingen ekstra luftmodstand.");
Q("cykeludstyr", 2, "Hvad er en 'bento box' på cyklen?",
  ["En lille taske på overrøret til gels og bars", "En kasse til en rigtig frokost, der står klar i skiftezonen", "En særlig sadel", "En hjelmtype"],
  "Bento-boksen gør det let at få fat i energi uden at rette sig op.");
Q("cykeludstyr", 2, "Hvad er fordelen ved elektroniske gear?",
  ["Præcise skift og knapper, også på aerobøjlerne", "De gør cyklen meget lettere", "De kræver aldrig opladning og vejer meget mindre end mekaniske gear", "De er altid billigere"],
  "Med elektroniske gear kan du skifte fra både aerobøjler og bremsegreb. Husk at lade batteriet!");
Q("cykeludstyr", 2, "Hvad er forskellen på fælgbremser og skivebremser?",
  ["Skivebremser bremser på en skive ved navet og virker bedre i regn", "Fælgbremser er altid hydrauliske", "Skivebremser findes kun på mountainbikes og er forbudte i triathlon på landevej", "Der er ingen forskel"],
  "Skivebremser bremser stabilt i vådt vejr. Fælgbremser er lettere og nemmere at vedligeholde.");
Q("cykeludstyr", 2, "Hvad betyder dæktrykket for, hvordan cyklen kører?",
  ["For hårdt giver mindre greb og komfort, for blødt øger rullemodstand og punkteringsrisiko", "Jo hårdere dækket er pumpet, jo bedre – altid, uanset vej og vejr, og også i regn", "Trykket betyder ingenting", "Jo blødere, jo hurtigere altid"],
  "Det rigtige tryk afhænger af vægt, dækbredde og vej. Brug producentens anbefalinger og afprøv.");
Q("cykeludstyr", 2, "Hvorfor skal du tjekke din cykel efter flytransport til et løb?",
  ["Dele kan være skubbet ud af stilling", "Fordi luften i dækkene bliver tyndere", "Fordi tolden har adskilt den", "Det behøver man ikke"],
  "Bremser, gear og styr kan blive slået i stykker eller skæve. Lav en grundig test-tur før løbet.");
Q("cykeludstyr", 2, "Hvad er fordelen ved en cykel med lav vægt?",
  ["Den er lettere at få op ad bakke", "Den er hurtigere på helt flad vej i modvind", "Den er mere stabil i sidevind", "Den giver mere komfort"],
  "Vægt betyder mest op ad bakke. På flade ruter betyder aerodynamik langt mere.");
Q("cykeludstyr", 2, "Hvad er en 'trisadel'?",
  ["En sadel med kort, åben næse til en lav position", "En sadel til tre personer", "En sadel med indbygget flaskeholder og opbevaring bag på", "En sadel til løb"],
  "Når man læner sig frem i aeropositionen, sidder man på sadlens næse. En trisadel fjerner tryk fra bløddelene.");
Q("cykeludstyr", 2, "Hvilket tøj gør dig hurtigst i triathlon?",
  ["En tætsiddende trisuit", "En løs T-shirt og shorts", "En regnjakke", "En vindvest, der blafrer"],
  "Løst tøj blafrer og giver luftmodstand. En tætsiddende trisuit kan spare minutter over en lang distance.");
Q("cykeludstyr", 2, "Hvorfor sidder cykelskoene ofte fastspændt på pedalerne i skiftezonen hos rutinerede triatleter?",
  ["Man kan løbe barfodet med cyklen og tage skoene på i fart", "Fordi det er et krav", "For at skoene ikke bliver stjålet", "For at pedalerne ikke drejer"],
  "Det kræver øvelse! Skoene holdes vandret med elastikker og tages på efter monteringslinjen.");
REGNE = true;
Q("cykeludstyr", 2, "Du cykler 40 km på 1 time og 20 minutter. Hvad er din gennemsnitsfart?",
  ["30 km/t", "32 km/t", "28 km/t", "35 km/t"],
  "1 time og 20 minutter = 1⅓ time. 40 ÷ 1⅓ = 30 km/t.");
Q("cykeludstyr", 2, "Du cykler 90 km med 30 km/t i snit. Hvor lang tid tager det?",
  ["3 timer", "2 timer og 30 minutter", "3 timer og 30 minutter", "2 timer og 45 minutter"],
  "90 ÷ 30 = 3 timer.");
REGNE = false;

// --- Guld (svær) ---
Q("cykeludstyr", 3, "Hvad er den største modstand, du skal overvinde, når du cykler hurtigt på flad vej?",
  ["Luftmodstanden", "Rullemodstanden", "Kædefriktionen", "Tyngdekraften"],
  "Over ca. 25 km/t står luftmodstanden for langt det meste. Derfor betyder position, hjelm og tøj så meget.");
Q("cykeludstyr", 3, "Hvor stor del af luftmodstanden kommer typisk fra rytteren selv – ikke cyklen?",
  ["Ca. 70-80 %", "Ca. 10 %", "Ca. 30 % – resten kommer fra cyklen og hjulene", "Ca. 50 %"],
  "Kroppen er langt større end cyklen. Derfor giver en god position mere end en dyrere cykel.");
Q("cykeludstyr", 3, "Hvorfor vokser luftmodstanden så meget med farten?",
  ["Den stiger med farten i anden potens", "Den stiger kun, når der er modvind, og falder i medvind", "Den stiger lineært", "Den falder ved høj fart"],
  "Dobbelt fart giver fire gange luftmodstand – og effekten skal stige endnu mere (tredje potens).");
Q("cykeludstyr", 3, "Hvad er 'CdA'?",
  ["Et mål for luftmodstand (modstandstal × frontareal)", "Cyklens totale vægt", "Antallet af gear", "Kadence pr. minut målt over hele cykeldistancen i et løb"],
  "CdA kombinerer form og størrelse. Jo lavere CdA, jo mindre watt skal der til for at holde farten.");
Q("cykeludstyr", 3, "Hvorfor er en ren, smurt kæde vigtig for hurtig cykling?",
  ["En snavset kæde kan koste flere watt i friktion", "Fordi en ren kæde vejer mindre", "Fordi den er påkrævet ved bike check-in", "Fordi en snavset kæde gør cyklen langsommere ned ad bakke"],
  "En snavset kæde kan æde flere watt. Det er en af de billigste måder at blive hurtigere på.");
Q("cykeludstyr", 3, "Hvad er 'stack' og 'reach' på en cykelramme?",
  ["Lodret og vandret afstand fra krankboks til toppen af styrrøret", "Sadelhøjde og styrbredde", "Dækbredde og fælghøjde", "Kranklængde og sadelvinkel målt fra krankboksens centrum op til sadlens næse og bagud"],
  "Stack og reach beskriver, hvor høj og lang rammen er. De bruges til at vælge den rigtige størrelse.");
Q("cykeludstyr", 3, "Hvorfor har tempocykler ofte en stejlere sadelvinkel (fx 76-80°)?",
  ["Rytteren rykkes frem, så hoften bliver mere åben i lav position", "For at gøre cyklen lettere", "For at give plads til flasker", "For at gøre det lettere at stå op på pedalerne, når man skal op ad stejle bakker"],
  "Med sadlen længere fremme bliver vinklen mellem overkrop og lår mere åben. Det gør aeropositionen mere effektiv.");
Q("cykeludstyr", 3, "Hvad siger UCI's regel om sadelplacering – og gælder den i almindelig triathlon?",
  ["Den begrænser sadlens placering i cykelløb, men gælder ikke i de fleste triathlonløb uden drafting", "Den gælder alle cykelløb og triathlon", "Den gælder kun hometrainere", "Den findes ikke"],
  "UCI-reglen om sadel bag krankboksen gælder i cykelsport. I triathlon uden drafting tillades ofte en mere fremskudt sadel.");
Q("cykeludstyr", 3, "Hvilken cykel kræves i et World Triathlon-eliteløb med drafting tilladt?",
  ["En almindelig racercykel – tempocykler og lange aerobøjler er ikke tilladt", "En tempocykel med skivehjul og lange aerobøjler, så rytterne kan ligge lavt i feltet", "En mountainbike", "En hvilken som helst cykel"],
  "I draftingløb kører man i grupper. Derfor kræves racercykler, og kun korte 'clip-on'-bøjler er tilladt.");
Q("cykeludstyr", 3, "Hvorfor sætter Ironman ofte grænser for skivehjul i nogle løb?",
  ["Kraftig sidevind kan gøre dem farlige", "Fordi de er for hurtige og giver en uretfærdig fordel til dem med råd", "Fordi de larmer", "Fordi de er for tunge"],
  "Store lukkede flader kan fange vinden. Arrangøren kan forbyde skivehjul eller dybe fælge ved stærk vind.");
Q("cykeludstyr", 3, "Hvilken kranklængde vælger mange triatleter i dag, og hvorfor?",
  ["Lidt kortere krank, fx 165 mm, for at åbne hoften i aeropositionen", "Meget lange krank, fx 190 mm, så de får mere kraft og en større vægtstang i hvert eneste pedaltag", "Ingen krank – kun et hjul", "Altid samme længde som sadelhøjden"],
  "Kortere krank betyder, at knæet ikke kommer så højt op mod brystet øverst i pedaltaget.");
Q("cykeludstyr", 3, "Hvad er en 'aero-flaske' foran på styret?",
  ["En flaske, der sidder mellem aerobøjlerne med strå", "En flaske, der er formet som en flyvinge og giver opdrift på cyklen", "En flaske med helium", "En flaske, der sidder på hjelmen"],
  "Med et strå kan du drikke uden at rette dig op. Positionen holdes, og aerodynamikken forbedres.");
Q("cykeludstyr", 3, "Hvad er den største fordel ved en gennemtestet aeroposition frem for et nyt, dyrt hjulsæt?",
  ["Positionen giver ofte større tidsgevinst for færre penge", "Hjulsæt hjælper aldrig", "Positionen er påkrævet i løb", "Dyre hjul gør cyklen tungere og derfor langsommere på alle typer ruter"],
  "Fordi kroppen er den største modstand, giver en god position typisk mere end udstyr – og den er gratis at forbedre.");
Q("cykeludstyr", 3, "Hvad er en 'chain catcher'?",
  ["En lille dims, der forhindrer kæden i at hoppe af indad", "En kæde-lås til at låse cyklen fast til stativet i skiftezonen, så den ikke bliver stjålet", "Et kædeskifter-kabel", "En kæderenser"],
  "Hopper kæden af ved den lille klinge, kan den sætte sig fast. En chain catcher forhindrer det.");
QM("cykeludstyr", 3, "Hvad viser tegningen bedst, at denne cykel er bygget til?",
  ["Lav aeroposition på flad vej", "Klatring i bjerge", "Terrænkørsel", "Pendling til arbejde med bagage og tasker"],
  "Aerobøjlerne og den stejle position viser, at det er en tempocykel – bygget til fart alene på flad vej.",
  CYKEL(null, true));
REGNE = true;
Q("cykeludstyr", 3, "Luftmodstanden vokser med farten i anden potens. Hvor meget større er den ved 40 km/t end ved 20 km/t?",
  ["4 gange", "2 gange", "8 gange", "16 gange"],
  "(40/20)² = 2² = 4. Effekten, der skal til, vokser med farten i tredje potens: 8 gange.");
Q("cykeludstyr", 3, "Du cykler 180 km med 34 km/t i snit. Hvor lang tid tager det (cirka)?",
  ["5 timer og 18 minutter", "4 timer og 55 minutter", "5 timer og 45 minutter", "6 timer og 2 minutter"],
  "180 ÷ 34 ≈ 5,29 timer. 0,29 × 60 ≈ 18 minutter.");
Q("cykeludstyr", 3, "Et nyt hjulsæt sparer 6 sekunder pr. 10 km. Hvor meget sparer det på 180 km?",
  ["1 min 48 s", "54 s", "3 min 36 s", "18 s"],
  "180 km er 18 × 10 km. 18 × 6 s = 108 s = 1 minut og 48 sekunder.");
Q("cykeludstyr", 3, "Du cykler 90 km på 2 timer og 30 minutter. Hvad er gennemsnitsfarten?",
  ["36 km/t", "32 km/t", "38 km/t", "34 km/t"],
  "90 ÷ 2,5 = 36 km/t.");
REGNE = false;
Q("cykeludstyr", 3, "Hvorfor er en hård, glat dæk-overflade ikke altid hurtigst på grov asfalt?",
  ["Dækket hopper på ujævnheder og taber energi", "Fordi glatte dæk er forbudt", "Fordi glatte dæk punkterer sjældnere og derfor sjældent bliver slidt nok til at køre hurtigt", "Fordi grov asfalt altid er våd"],
  "Et dæk, der kan give sig, absorberer ujævnheder. For hårdt pumpede dæk hopper og mister fart – især på dårlig vej.");
Q("cykeludstyr", 3, "Hvad betyder 'wattbesparelse' i aerotests?",
  ["Hvor mange watt mindre du skal træde for at holde samme fart", "Hvor meget strøm cyklens elektroniske gear og lys sparer på en tur", "Hvor mange watt hjulene vejer", "Hvor meget batteri powermeteren bruger"],
  "En besparelse på 10 watt ved 40 km/t kan svare til ca. et minut over 40 km.");
Q("cykeludstyr", 3, "Hvorfor kan det være en dårlig idé at købe den dyreste tempocykel som første triathloncykel?",
  ["En dårligt tilpasset aeroposition kan koste mere end cyklen sparer", "Fordi den er forbudt for begyndere", "Fordi den har for få gear", "Fordi en tempocykel slet ikke kan bruges på en hometrainer om vinteren, og så mister du mange måneders træning"],
  "Uden bikefit og vane med positionen sidder man ofte højt og ubehageligt. Start med god pasform.");
QM("cykeludstyr", 3, "Hvilken del er markeret på cyklen?",
  ["Bremsen", "Kassetten", "Kædeskifteren", "Styrstammen"],
  "Bremsen sidder lige over forhjulet på mange racercykler med fælgbremser.",
  CYKEL("bremse"));
Q("cykeludstyr", 3, "Hvorfor kører mange triatleter med 'kompakt' klinge (50/34) frem for 53/39?",
  ["Lettere gear giver højere kadence på bakker og sparer benene", "Fordi 53/39 er forbudt i triathlon", "Fordi kompakt vejer mere og giver stabilitet", "Fordi kompakt giver højere topfart ned ad bakke og på flade strækninger med medvind"],
  "Amatører træder sjældent hårdt nok til at have brug for 53/39. Lettere gear hjælper på bakker og sparer kræfter til løbet.");
Q("cykeludstyr", 3, "Hvorfor kan en trisuit med ærmer være hurtigere end en uden?",
  ["Glat stof på overarmen giver mindre luftmodstand end bar hud", "Fordi ærmer holder musklerne varme i vandet", "Fordi ærmer er påkrævet i alle Ironman-løb, og man ellers får tidsstraf ved målstregen", "Fordi stoffet giver mere opdrift i svømningen"],
  "Vindtunneltest viser, at glat, tætsiddende stof på armene ofte giver mindre luftmodstand end bar hud.");
