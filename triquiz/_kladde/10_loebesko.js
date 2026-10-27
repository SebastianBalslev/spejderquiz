/* =====================================================================
   LØBESKO OG UDSTYR  (emne: "loebesko")
   ===================================================================== */
// Tegner en løbesko set fra siden med mål for hæl- og forfodshøjde.
const SKO = (hael, forfod, plade) => TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/>
  <path d="M30 ${100 - hael} Q28 ${60 - hael} 60 ${52 - hael} L110 ${56 - forfod} Q150 ${70 - forfod} 172 ${96 - forfod} L172 100 L30 100Z" fill="#1d6fa5" stroke="#12507a" stroke-width="2"/>
  <path d="M30 100 L30 ${100 - hael} L172 ${100 - forfod} L172 100Z" fill="#f2f4f6" stroke="#9aa7b1" stroke-width="1.5"/>
  ${plade ? `<path d="M34 ${100 - hael * 0.55} Q100 ${100 - (hael + forfod) * 0.28} 168 ${100 - forfod * 0.25}" stroke="#1b2530" stroke-width="2.5" fill="none" stroke-dasharray="6 3"/>` : ""}
  <path d="M70 ${50 - hael} L80 ${60 - forfod} M80 ${48 - hael} L90 ${58 - forfod} M90 ${46 - hael} L100 ${56 - forfod}" stroke="#fff" stroke-width="2"/>
  <path d="M30 100 L172 100" stroke="#1b2530" stroke-width="2"/>
  <g font-size="10" font-weight="800" fill="#1b2530" text-anchor="middle">
    <path d="M18 100 L18 ${100 - hael} M14 100 L22 100 M14 ${100 - hael} L22 ${100 - hael}" stroke="#e63946" stroke-width="2"/>
    <text x="18" y="${96 - hael - 4}">${hael} mm</text>
    <path d="M184 100 L184 ${100 - forfod} M180 100 L188 100 M180 ${100 - forfod} L188 ${100 - forfod}" stroke="#e63946" stroke-width="2"/>
    <text x="182" y="${96 - forfod - 4}">${forfod} mm</text></g>`);

// --- Bronze (let) ---
Q("loebesko", 1, "Hvad er det vigtigste, når du vælger løbesko?",
  ["At de passer godt og føles behagelige", "At de er dyre", "At de har samme farve som din trisuit", "At de er de letteste i butikken"],
  "Pasform og komfort betyder mest. Prøv dem, og løb gerne en tur i butikken.");
Q("loebesko", 1, "Hvor meget plads skal der typisk være foran tæerne i en løbesko?",
  ["Ca. en tommelfingerbredde", "Ingen – tæerne skal røre skoens spids", "Mindst 5 centimeter, så foden kan svulme helt op", "Det betyder ikke noget"],
  "Fødderne svulmer, når du løber langt. Lidt plads forebygger sorte tånegle.");
Q("loebesko", 1, "Hvad er elastiske snørebånd godt til i triathlon?",
  ["Du kan tage skoene på uden at binde dem i T2", "De gør skoene lettere", "De lukker skoen tæt, så den holder sig tør i regnvejr", "De er påkrævet i Ironman"],
  "Med elastikbånd eller lynsnøre glider foden direkte i. Det sparer sekunder i T2.");
Q("loebesko", 1, "Hvor mange kilometer holder et par løbesko typisk?",
  ["Ca. 500-800 km", "Ca. 50 km", "Ca. 5.000 km", "De holder for evigt"],
  "Dæmpningen slides langsomt. Mærk efter – og hold øje med slidte såler.");
Q("loebesko", 1, "Hvad er et nummerbælte?",
  ["Et elastikbælte, som startnummeret sidder på", "Et bælte med indbygget lommeregner", "Et bælte med en chip, der viser din tid til speakeren", "Et bælte til at holde bukserne oppe"],
  "Nummerbæltet drejes, så nummeret er foran, når du løber. Det sparer tid i skiftet.");
Q("loebesko", 1, "Hvor skal startnummeret sidde, når du løber i triathlon?",
  ["Foran på kroppen, så det kan ses", "Bag på ryggen, hvor det ikke blafrer", "På hjelmen", "I lommen"],
  "Startnummeret skal være synligt foran under løbet. Tjek reglerne for cyklingen – mange steder skal det sidde bag.");
Q("loebesko", 1, "Må man løbe med høretelefoner i et triathlonløb?",
  ["Nej, det er normalt forbudt", "Ja, altid – og musikken må gerne være høj", "Kun i Ironman", "Kun på de sidste 5 km"],
  "Både World Triathlon og Ironman forbyder høretelefoner under løbet. Du skal kunne høre officials og andre.");
Q("loebesko", 1, "Hvad er en GPS-ur godt til i løbetræning?",
  ["At måle fart, distance og puls", "At finde din cykel i skiftezonen", "At give dig mere energi", "At holde dig varm"],
  "Et GPS-ur hjælper dig med at styre tempo og registrere træning.");
Q("loebesko", 1, "Hvad bør du have på hovedet, når du løber i stærk sol?",
  ["En kasket eller visor", "En tyk hue af uld", "Ingenting – så kommer solen bedre til", "Din cykelhjelm"],
  "Kasket eller visor skærmer for solen. Du kan også hælde vand i den for at køle.");
Q("loebesko", 1, "Hvorfor bruger mange glidecreme på løbeture?",
  ["For at undgå gnavesår", "For at løbe hurtigere", "For at holde fødderne varme", "For at undgå myggestik"],
  "Gnavesår kommer typisk under armene, mellem lårene og ved trisuitens kanter.");
Q("loebesko", 1, "Hvorfor skal man ikke løbe et løb i helt nye sko?",
  ["De kan gnave, og du ved ikke, hvordan de føles efter mange kilometer", "Fordi nye sko er forbudt, indtil de har været godkendt ved check-in, og det tager flere dage at få dem stemplet", "Fordi de er for hurtige", "Fordi de ikke har snørebånd"],
  "Nothing new on race day. Løb skoene ind på nogle træningsture først.");
Q("loebesko", 1, "Hvad kan du gøre for at blive set, når du løber i mørke?",
  ["Bruge refleks og pandelampe eller lys", "Løbe midt på vejen", "Løbe i sort tøj", "Løbe midt på vejen, så bilerne kan se dig i lygterne"],
  "Refleks og lys gør dig synlig for bilister og cyklister.");
Q("loebesko", 1, "Hvad er trailsko?",
  ["Løbesko med grov sål til stier og terræn", "Sko med lange pigge, som kun bruges på atletikbanens røde underlag", "Sko til at gå tur i byen", "Sko til cykling"],
  "Trailsko har bedre greb i mudder og på rødder. På asfalt er almindelige løbesko bedre.");
Q("loebesko", 1, "Hvorfor kan løbestrømper være bedre end almindelige bomuldsstrømper?",
  ["De transporterer sved væk og giver færre vabler", "De er altid billigere", "De er tykkere og varmere, så musklerne i fødderne bliver hurtigere varme", "De gør benene længere"],
  "Bomuld suger vand og gnaver. Tekniske løbestrømper holder foden tørrere.");
Q("loebesko", 1, "Hvad betyder det, at en løbesko er 'neutral'?",
  ["Den har ingen ekstra støtte mod at foden ruller indad", "Den har ingen farve", "Den kan bruges til alle sportsgrene, også fodbold og tennis, uden at slides", "Den har ingen dæmpning"],
  "Neutrale sko passer til de fleste løbere. Stabilitetssko har lidt ekstra støtte.");
Q("loebesko", 1, "Hvad kan en pulsmåler bruges til, når du løber?",
  ["At holde indsatsen i den rigtige zone", "At måle afstand og vise vej", "At holde fødderne varme", "At tælle dine skridt præcist og regne din skridtlængde ud"],
  "Pulsen viser, hvor hårdt kroppen arbejder. Det er godt til rolige ture, hvor man ofte løber for hårdt.");
Q("loebesko", 1, "Hvorfor er det smart at have to par løbesko i brug?",
  ["Dæmpningen får tid til at komme sig, og du kan variere", "Fordi man ikke må løbe i samme sko to dage i træk", "Fordi det ser pænt ud", "Det er ikke smart"],
  "Variation i sko kan give lidt forskellig belastning. Og skoene kan tørre mellem turene.");
Q("loebesko", 1, "Hvad skal du gøre med våde løbesko efter en tur i regn?",
  ["Fylde dem med avispapir og lade dem tørre ved stuetemperatur", "Lægge dem i ovnen", "Putte dem i tørretumbleren på højeste varme i en time, så de er tørre til næste morgen", "Lade dem stå i en lukket pose"],
  "Stærk varme kan ødelægge lim og skum. Avispapir suger fugten.");
Q("loebesko", 1, "Hvad er en løbevest?",
  ["En let vest med plads til vand og energi", "En vest, der holder dig varm om vinteren", "En vest med startnummer", "En refleksvest"],
  "Løbevesten bruges mest på lange ture og trailløb. Den sidder tæt og hopper ikke.");
Q("loebesko", 1, "Hvorfor kan solbriller være gode på løbet?",
  ["De beskytter øjnene og gør dig mere afslappet i ansigtet", "Fordi det er et krav", "For at se sejere ud på billederne, så sponsorerne bliver glade", "De holder svedet væk"],
  "Når du ikke skal knibe øjnene sammen, slapper ansigt og skuldre bedre af.");
Q("loebesko", 1, "Hvad er 'sokkeløs' løb i triathlon?",
  ["At løbe uden strømper for at spare tid i T2", "At løbe barfodet hele vejen for at spare tid til sko i T2", "At løbe uden sko", "At løbe i badesko"],
  "Nogle spare strømperne for at være hurtigere. Det kræver sko, der ikke gnaver, og øvelse – brug talkum eller glidecreme.");
Q("loebesko", 1, "Hvorfor skal du snøre skoene rigtigt?",
  ["For at foden sidder fast uden at blive klemt", "For at skoene kan løbe hurtigere", "For at de kan holde vand ude, når du løber gennem vanddepoterne", "Det betyder intet"],
  "Snører du for stramt, kan foden sove. For løst, og foden glider og giver vabler.");
Q("loebesko", 1, "Hvad er 'kompressionsstrømper'?",
  ["Tætte strømper, der trykker på læggene", "Strømper med en indbygget pude under hælen, der dæmper stødet", "Strømper uden tæer", "Strømper til svømning"],
  "Nogle bruger dem under eller efter løb. Effekten på præstationen er lille, men mange synes, de føles godt.");
REGNE = true;
QM("loebesko", 1, "Tegningen viser en løbesko med hælhøjde og forfodshøjde. Hvad er skoens 'drop'?",
  ["8 mm", "6 mm", "10 mm", "4 mm"],
  "Drop = hælhøjde − forfodshøjde = 32 − 24 = 8 mm.",
  SKO(32, 24));
REGNE = false;

// --- Sølv (mellem) ---
Q("loebesko", 2, "Hvad betyder 'drop' på en løbesko?",
  ["Forskellen i højde mellem hæl og forfod", "Hvor meget skoen vejer", "Hvor langt du kan løbe i den, før dæmpningen er slidt op", "Hvor stor sålen er"],
  "En sko med 10 mm drop har hælen 10 mm højere end forfoden. Lavt drop belaster mere lægge og akillessene.");
Q("loebesko", 2, "Hvad er 'stack height'?",
  ["Hvor tyk sålen er under foden", "Skoens højde over anklen målt fra jorden og op", "Antal huller til snørebånd", "Hvor høj løberen er"],
  "Høj stack giver mere dæmpning, men kan give mindre stabilitet.");
Q("loebesko", 2, "Hvad er en karbonplade i en løbesko?",
  ["En stiv plade i sålen, der sammen med skummet kan give bedre løbeøkonomi", "En plade, der beskytter fodsålen mod skarpe sten og glasskår på stierne og samtidig giver skoen mere vægt", "En plade, der gør skoen tungere", "En plade, der holder varmen"],
  "Kombinationen af stiv plade og elastisk skum kan spare energi. Mange bruger dem kun til konkurrence.");
QM("loebesko", 2, "Hvad viser den stiplede linje i skoens sål?",
  ["En stiv plade, fx af karbon", "En luftlomme, der holder skoen let", "Et snørebånd inde i sålen", "En vandkanal til at lede sved væk"],
  "Pladen gør sålen stiv og giver en 'vippe-effekt' fremad i afsættet.",
  SKO(38, 30, true));
Q("loebesko", 2, "Hvorfor skifter mange triatleter til sko med lavere drop gradvist?",
  ["Lægge og akillessener skal vænne sig til større belastning", "Fordi lavt drop er forbudt i Ironman", "Fordi lavt drop gør sålen tykkere", "Det skal man ikke"],
  "Et lavere drop flytter belastning fra knæ til lægge og akillessene. Skift langsomt.");
Q("loebesko", 2, "Hvad er 'stabilitetssko'?",
  ["Sko med lidt ekstra støtte mod at foden ruller indad", "Sko med små pigge under sålen, der giver et stabilt greb på glat føre", "Sko uden dæmpning", "Sko til atletikbaner"],
  "Nyere forskning viser, at komfort ofte er en bedre guide end en fodanalyse alene.");
Q("loebesko", 2, "Hvorfor er komfort en god rettesnor, når du vælger løbesko?",
  ["Forskning tyder på, at komfortable sko kan give færre skader", "Fordi komfortable sko altid er de billigste i butikken, og så sparer man penge til en dyrere cykel", "Fordi komfort gør dig langsommere", "Det er ikke en god rettesnor"],
  "Studier peger på, at den sko, der føles bedst, ofte er et godt valg.");
Q("loebesko", 2, "Hvad gør du for at undgå vabler i et langt løb?",
  ["Bruger afprøvede sko og strømper, glidecreme og holder fødderne tørre", "Køber nye sko dagen før", "Løber i bomuldsstrømper", "Tager to par tykke bomuldsstrømper på, så foden ikke kan glide rundt i skoen"],
  "Gnav opstår ved friktion og fugt. Afprøvet udstyr er det bedste værn.");
Q("loebesko", 2, "Hvorfor skal startnummeret sidde foran på løbet i de fleste regelsæt?",
  ["Så officials og fotografer kan identificere dig", "For at holde maven varm", "For at holde maven varm i modvind på de sidste kilometer", "Det skal det ikke"],
  "Nummeret bruges til at identificere dig. Følg arrangørens instruktioner.");
Q("loebesko", 2, "Hvad siger World Triathlons regler om at løbe med bar overkrop?",
  ["Overkroppen skal være dækket hele løbet", "Det er tilladt på løbet", "Det er tilladt, hvis det er over 25 grader i skyggen", "Kun eliten må"],
  "Torsoen skal være dækket under hele konkurrencen. Lyn trisuiten op.");
Q("loebesko", 2, "Hvad gør en 'lynsnøre' (lock laces)?",
  ["Lader dig stramme skoene med ét træk og en lås", "Gør skoene vandtætte", "Lyser op i mørke, så bilister kan se dine fødder bevæge sig", "Lyser i mørke"],
  "Med lynsnøre kan du hurtigt få skoene på i T2 og stramme dem uden at binde.");
Q("loebesko", 2, "Hvorfor kan det være smart med en kasket med is eller vand under et varmt løb?",
  ["Det køler hovedet og hjælper med at holde temperaturen nede", "Fordi det er påkrævet", "For at drikke vandet, der drypper ned fra kasketten, så du ikke behøver depoterne", "For at se bedre"],
  "Kulde på hoved og nakke føles godt og kan mindske varmebelastningen.");
Q("loebesko", 2, "Hvad er et pulsbælte, og hvorfor bruger nogle det i stedet for pulsen fra uret?",
  ["Et bælte om brystet, der ofte måler pulsen mere præcist end håndleddet", "Et bælte med små flasker, der holder vandet tæt på kroppen, så pulsen ikke stiger af varmen", "Et bælte med startnummer", "Et bælte, der varmer ryggen"],
  "Optisk puls på håndleddet kan være upræcis ved intervaller og i kulde.");
Q("loebesko", 2, "Hvorfor skal du tjekke sålen på dine løbesko jævnligt?",
  ["Ujævnt eller hårdt slid kan betyde, at skoene skal skiftes", "For at se, om sten har sat sig fast i mønsteret, så sålen ikke bliver skæv", "Fordi de kan blive for tunge", "Det skal man ikke"],
  "Når mønsteret er slidt eller skummet føles fladt, er det tid til nye sko.");
Q("loebesko", 2, "Hvad er 'super shoes'?",
  ["Løbesko med karbonplade og meget elastisk skum", "Sko lavet til superhelte", "Sko med en lille fjeder af stål i hælen, der skyder dig frem", "Sko uden såler"],
  "Siden 2017 har super shoes ændret langdistanceløb. Mange tider er blevet hurtigere.");
Q("loebesko", 2, "Hvad er risikoen ved at løbe alt i meget dæmpede karbonsko?",
  ["Fødder og ankler får mindre træning, og nogle får skader", "At skoene eksploderer", "At du bliver så hurtig, at du ikke kan holde tempoet i konkurrencerne", "Ingen risiko"],
  "Mange bruger super shoes til konkurrence og hurtige pas, men almindelige sko til det meste træning.");
Q("loebesko", 2, "Hvorfor bruger mange talkum i skoene, hvis de løber uden strømper?",
  ["Det mindsker fugt og friktion, så foden glider ind og gnaver mindre", "Det giver bedre lugt", "Det gør skoene lidt lettere, fordi pulveret suger luften ud af sålen og gør den hårdere", "Det er påkrævet"],
  "Talkum hjælper foden ind i skoen og tager fugt. Afprøv i træning.");
Q("loebesko", 2, "Hvad er fordelen ved at lægge løbeudstyret i en bestemt rækkefølge i T2?",
  ["Du kan gøre tingene i fast rækkefølge uden at tænke", "Fordi dommere tjekker rækkefølgen og giver straf, hvis tingene ligger forkert", "For at det ser pænt ud", "Ingen fordel"],
  "En fast rutine sparer tid og forhindrer, at du glemmer noget.");
Q("loebesko", 2, "Hvorfor er det vigtigt at træne i det tøj, du vil løbe i til et løb?",
  ["Du opdager gnav og ubehag, før det er for sent", "Fordi tøjet ellers krymper første gang, du sveder i det", "Fordi det er reglerne", "Det er ikke vigtigt"],
  "Trisuiten kan gnave andre steder på løbet end på cyklen. Test den over en brick.");
Q("loebesko", 2, "Hvad kan en 'løbebælte-flaskeholder' bruges til?",
  ["At bære små flasker med vand eller sportsdrik", "At holde startnummeret", "At bære cykelværktøj", "At holde mobilen tør i vandet under svømningen, så du kan ringe efter hjælp"],
  "På lange løb uden mange depoter kan egne flasker være praktiske.");
Q("loebesko", 2, "Hvad betyder 'heel counter' på en løbesko?",
  ["Den stive kappe omkring hælen", "En lille tæller i hælen, der registrerer antal skridt", "Den bløde del ved tæerne", "Snørebåndene"],
  "Hælkappen holder hælen på plads. Den skal passe godt, så foden ikke glider op.");
REGNE = true;
Q("loebesko", 2, "Dine sko holder 700 km. Du løber 35 km om ugen. Hvor mange uger holder de?",
  ["20 uger", "15 uger", "25 uger", "35 uger"],
  "700 ÷ 35 = 20 uger.");
QM("loebesko", 2, "Hvad er droppet på skoen på tegningen?",
  ["4 mm", "8 mm", "2 mm", "6 mm"],
  "Drop = 28 − 24 = 4 mm. Et lavt drop som dette belaster læggene lidt mere.",
  SKO(28, 24));
Q("loebesko", 2, "Et par sko koster 1.200 kr. og holder 600 km. Hvad koster de pr. km?",
  ["2 kr.", "1,20 kr.", "6 kr.", "0,50 kr."],
  "1.200 ÷ 600 = 2 kr. pr. km.");
REGNE = false;

// --- Guld (svær) ---
Q("loebesko", 3, "Hvilken maksimal sålhøjde tillader World Athletics i konkurrencesko på vej (ikke bane)?",
  ["40 mm", "20 mm", "60 mm", "Der er ingen grænse"],
  "Reglerne fra 2020 sætter et loft på 40 mm for vejløb. Triatleter følger deres eget forbunds regler, men mange bruger det samme som reference.");
Q("loebesko", 3, "Hvor meget kan 'super shoes' typisk forbedre løbeøkonomien i laboratorietests?",
  ["Ca. 2-4 %", "Ca. 20-30 %", "Ca. 50 %", "Slet ikke"],
  "Tests med Nike Vaporfly viste ca. 4 % bedre løbeøkonomi i gennemsnit. Effekten varierer mellem løbere.");
Q("loebesko", 3, "Hvorfor kan karbonsko være mindre effektive for nogle langsomme løbere?",
  ["Pladen og skummet er designet til højere fart og kraft", "Fordi de vejer mere for langsomme løbere", "Fordi de kun virker på atletikbaner med gummibelægning, ikke på asfalt eller grus", "Det er de ikke"],
  "Ved lav fart bliver skummet ikke presset så meget sammen, og gevinsten kan blive mindre.");
Q("loebesko", 3, "Hvad er 'PEBA'-skum?",
  ["Et let, elastisk skum, der bruges i mange konkurrencesko", "En type karbonplade", "En slags snørebånd", "En gummisål med dybe knopper, der giver greb på mudrede trailstier"],
  "PEBA (fx Pebax) giver meget energi tilbage og er en del af super shoes' hemmelighed.");
Q("loebesko", 3, "Hvorfor bruger nogle triatleter lidt større sko til et Ironman-maraton?",
  ["Fødderne svulmer efter mange timers aktivitet i varme", "Fordi de skal løbe med to lag strømper, så de ikke får vabler efter mange timer", "For at kunne have is i skoene", "For at være hurtigere"],
  "Efter svøm og cykel i varme hæver fødderne. Lidt ekstra plads kan forebygge sorte negle og vabler.");
Q("loebesko", 3, "Hvorfor er det ikke sikkert, at en fodanalyse i butikken finder den rigtige sko?",
  ["Forskning viser, at 'pronationstype' alene er en dårlig forudsigelse for skader", "Fordi butikkerne altid tager fejl", "Fordi der ikke findes forskellige sko", "Det er altid sikkert"],
  "Komfort og gradvis tilvænning ser ud til at betyde mere end at matche pronation.");
Q("loebesko", 3, "Hvad er risikoen ved at gå direkte fra 12 mm drop til 0 mm drop?",
  ["Overbelastning af lægge og akillessene", "At skoene bliver tungere", "At knæene får mere belastning", "Ingen risiko"],
  "Et stort spring i drop flytter belastningen hurtigt. Det kan give akillessenebetændelse.");
Q("loebesko", 3, "Hvorfor kan et GPS-ur vise for lang distance i en storby med høje huse?",
  ["Signalet reflekteres fra bygninger og giver unøjagtige positioner", "Fordi huse gør vejene længere", "Fordi uret måler alle sving og omveje, som vejen ikke tæller med i den officielle distance, og derfor altid lægger 10 % til", "Det kan det ikke"],
  "Høje bygninger forstyrrer GPS-signalet. Brug fodpod eller kendte afstande til at tjekke tempoet.");
Q("loebesko", 3, "Hvad er en 'fodpod'?",
  ["En lille sensor på skoen, der måler fart og kadence", "En pude i skoen mod vabler", "En gummisko til at bruge i bassinet og ved åbent vand, så fødderne ikke skæres", "En del af snørebåndet"],
  "Fodpod kan måle tempo indendørs og i områder med dårlig GPS.");
Q("loebesko", 3, "Hvad kan 'løbe-watt' (running power) bruges til?",
  ["At styre indsatsen, også op ad bakke og i vind", "At måle, hvor meget energi skoene giver tilbage i hvert skridt, så du kan se, når de er slidt op", "At oplade uret", "At måle temperaturen"],
  "Løbe-watt beregnes ud fra fart, stigning og bevægelse. Målingerne er dog mindre standardiserede end på cyklen.");
Q("loebesko", 3, "Hvorfor kan kompressionsstrømper være omdiskuterede?",
  ["Studier viser kun små og usikre effekter på præstationen", "Fordi de er forbudt i alle løb", "Fordi de giver dårlig blodcirkulation hos alle", "Fordi de vejer meget"],
  "Nogle studier viser lidt mindre ømhed efter løb, men effekten på tid er lille.");
Q("loebesko", 3, "Hvad sker der med skummet i en løbesko, når det er meget koldt?",
  ["Det bliver hårdere og dæmper mindre", "Det bliver blødere og hurtigere", "Det smelter", "Ingenting"],
  "Mange skumtyper bliver stivere i kulde. Sko føles derfor hårdere om vinteren.");
Q("loebesko", 3, "Hvorfor kan sko med meget høj stack være ustabile i sving?",
  ["Foden sidder højt over jorden, og sålen kan vippe", "Fordi de har for lidt greb under sålen, så de glider på våd asfalt", "Fordi de er for lette", "Det kan de ikke"],
  "Høj stack giver mere vægtstang omkring anklen. Brede såler hjælper på stabiliteten.");
Q("loebesko", 3, "Hvorfor kan det være en fordel at bruge samme sko til træningens hurtige pas som til løbet?",
  ["Kroppen vænner sig til skoens følelse og belastning i høj fart", "Fordi skoene ellers ikke må bruges i løb", "Fordi det sparer skoen", "Det er ingen fordel"],
  "Test konkurrenceskoene på intervaller og en lang tur, så du kender dem.");
Q("loebesko", 3, "Hvad siger Ironmans regler typisk om at have en ledsager, der løber med dig?",
  ["Det er forbudt – ingen må pace eller løbe med dig udefra", "Det er tilladt de sidste 10 km", "Kun familie må løbe med, og kun hvis de har et særligt armbånd fra arrangøren", "Det er altid tilladt"],
  "Hjælp udefra er ikke tilladt. Tilskuere må heppe, men ikke løbe ved siden af.");
REGNE = true;
Q("loebesko", 3, "En sko forbedrer løbeøkonomien med 3 %. Hvad betyder det for en løber på 4:00 pr. km, hvis tempoet ændres med det halve af økonomien?",
  ["Ca. 3:56 pr. km", "Ca. 3:52 pr. km", "Ca. 3:40 pr. km", "Ca. 4:04 pr. km"],
  "3 % ÷ 2 = 1,5 % af 240 s ≈ 3,6 s. 240 − 3,6 ≈ 236 s = ca. 3:56 pr. km.");
QM("loebesko", 3, "Tegningen viser en konkurrencesko. Hvad er droppet?",
  ["8 mm", "6 mm", "10 mm", "4 mm"],
  "Drop = 40 − 32 = 8 mm. Sålen er høj, men stadig inden for 40 mm-grænsen i vejløb.",
  SKO(40, 32, true));
Q("loebesko", 3, "Du skifter sko hver 650 km og løber 2.600 km om året. Hvor mange par bruger du?",
  ["4 par", "3 par", "5 par", "6 par"],
  "2.600 ÷ 650 = 4 par.");
Q("loebesko", 3, "Du sparer 15 s i T2 med elastiske snørebånd og 10 s med sokkeløs løb. Hvor meget sparer du over 6 løb?",
  ["2 min 30 s", "1 min 30 s", "3 min", "2 min"],
  "(15 + 10) × 6 = 150 s = 2 minutter og 30 sekunder.");
REGNE = false;
Q("loebesko", 3, "Hvad betyder 'rocker' på en løbesko?",
  ["At sålen er buet, så foden ruller fremad", "At skoen larmer", "At skoen er lavet til koncerter", "At sålen er helt flad og hård, så den 'rokker' mindst muligt under foden"],
  "En rocker-sål hjælper foden med at rulle frem og kan aflaste anklen og tæerne.");
Q("loebesko", 3, "Hvorfor er det vigtigt at kende reglerne for udstyr i det konkrete løb?",
  ["Reglerne varierer mellem forbund og arrangører", "Fordi reglerne er ens overalt", "Fordi alle regler er hemmelige", "Det er ikke vigtigt"],
  "World Triathlon, Ironman og nationale forbund som DTriF kan have forskellige regler. Læs løbsmanualen.");
Q("loebesko", 3, "Hvad er fordelen ved at sætte nummerbæltet på i T2 og ikke i T1, hvis nummeret ikke kræves på cyklen?",
  ["Mindre ting på cyklen, men et ekstra greb i T2 – det afhænger af løbets regler", "Det er altid forbudt at have nummer på cyklen", "Det gør cyklen hurtigere", "Der er ingen forskel"],
  "Tjek reglerne. Nogle løb kræver nummer bag på cyklen, andre ikke.");
Q("loebesko", 1, "Hvornår på dagen er det bedst at prøve nye løbesko i butikken?",
  ["Om eftermiddagen, når fødderne er lidt hævede", "Tidligt om morgenen, før du har stået op og gået rundt", "Lige efter et koldt bad", "Det er lige meget"],
  "Fødderne bliver lidt større i løbet af dagen. Prøver du sko om eftermiddagen, passer de bedre, når du løber.");
Q("loebesko", 2, "Hvorfor åbner mange løbeskoene helt og stiller dem med åbningen opad i skiftezonen?",
  ["Så foden kan glide direkte i uden at fumle", "Så skoene kan tørre i solen, mens du cykler", "Fordi dommerne ellers ikke kan se nummeret i skoen", "For at undgå, at andre tager dem"],
  "Med åbne sko og elastiske snørebånd tager det få sekunder at komme i skoene i T2.");
Q("loebesko", 3, "Hvorfor kan en lidt bredere sko være bedre til et langt løb end en meget smal konkurrencesko?",
  ["Fødderne hæver, og en smal sko kan klemme og give vabler", "Fordi brede sko altid er hurtigere og har en karbonplade", "Fordi smalle sko er forbudt i Ironman", "Der er ingen forskel"],
  "Over mange timer hæver fødderne. Pasform betyder mere end et par gram.");
Q("loebesko", 3, "Hvad sker der med dæmpningen i en løbesko over tid?",
  ["Skummet trykkes sammen og giver mindre energi tilbage", "Skummet udvider sig og bliver blødere og bedre", "Den bliver bedre jo mere du løber", "Den er uændret, til sålen er slidt helt igennem"],
  "Skummet ældes og mister elasticitet. Mange mærker det som 'flade' sko.");
Q("loebesko", 3, "Hvorfor har mange trailsko et 'rock plate'?",
  ["En beskyttende plade, der skærmer foden mod skarpe sten", "En karbonplade, der giver mere fart på asfalt", "En plade, der gør skoen vandtæt", "En plade til at montere pigge"],
  "Rock plate giver beskyttelse i stenet terræn. Den er ikke designet til at give fart.");
