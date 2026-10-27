/* =====================================================================
   VÆSKE OG SALT  (emne: "vaeske")
   ===================================================================== */
// Tegner et farveskema for urin (1 = lys, 8 = mørk) med en pil på den valgte farve.
const URIN = (n) => {
  const f = ["#fbfbe6", "#f7f3b7", "#f1e88a", "#e9d860", "#dfc43e", "#cfa92b", "#b98c22", "#9a6f1a"];
  return TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/>
    ${f.map((c, i) => `<rect x="${12 + i * 22}" y="40" width="20" height="56" rx="4" fill="${c}" stroke="#9aa7b1"/><text x="${22 + i * 22}" y="110" font-size="10" font-weight="800" text-anchor="middle" fill="#1b2530">${i + 1}</text>`).join("")}
    <path d="M${22 + (n - 1) * 22} 34 L${16 + (n - 1) * 22} 22 L${28 + (n - 1) * 22} 22 Z" fill="#e63946"/>
    <text x="12" y="128" font-size="9" fill="#1b2530">lys</text><text x="188" y="128" font-size="9" text-anchor="end" fill="#1b2530">mørk</text>`);
};

// --- Bronze (let) ---
Q("vaeske", 1, "Hvorfor sveder du, når du træner?",
  ["For at køle kroppen ned", "For at komme af med fedt hurtigere", "For at gøre huden blød", "For at gøre dig tungere"],
  "Sveden fordamper fra huden og tager varme med sig.");
Q("vaeske", 1, "Hvad indeholder sved udover vand?",
  ["Salt, især natrium", "Sukker og kulhydrat", "Protein", "Ingenting – kun vand"],
  "Derfor kan man se hvide saltrande på tøjet efter en lang tur.");
Q("vaeske", 1, "Hvad er et tegn på, at du mangler væske?",
  ["Tørst, mørk urin og hovedpine", "At du har lyst til at sove i vandet", "At du tisser meget og helt klart", "At du bliver mere sulten"],
  "Tørst er et signal. Mørk urin kan også være et tegn.");
QM("vaeske", 1, "Pilen viser farven på din urin om morgenen. Hvad fortæller den typisk?",
  ["Du er godt hydreret", "Du mangler meget væske og bør drikke med det samme", "Du har spist for meget salt", "Du har feber"],
  "Lys, strågul urin er et godt tegn. Helt klar urin kan betyde, at du har drukket rigeligt.",
  URIN(2));
QM("vaeske", 1, "Pilen viser farven på din urin efter en lang, varm træning. Hvad fortæller den typisk?",
  ["Du mangler væske og bør drikke", "Du er perfekt hydreret", "Du har drukket alt for meget og skal holde pause med vand", "Det betyder ingenting"],
  "Mørk urin efter træning tyder på væskemangel. Drik jævnt over de næste timer.",
  URIN(7));
Q("vaeske", 1, "Hvornår er det særlig vigtigt at drikke under træning?",
  ["I varme og på lange ture", "Kun når det er koldt og regner", "Kun i svømmehallen", "Aldrig"],
  "Jo varmere og længere, jo mere væske mister du.");
Q("vaeske", 1, "Hvorfor skal du også drikke, når du træner i kulde?",
  ["Du sveder stadig og mister væske, selvom du ikke er tørstig", "Fordi kold luft gør dig tungere", "For at holde varmen, fordi kold drik får kroppen til at producere mere varme", "Det skal du ikke"],
  "Tørsten er svagere i kulde, men du taber stadig væske – også gennem vejrtrækningen.");
Q("vaeske", 1, "Hvad er en god tommelfingerregel for at drikke på en cykeltur over en time?",
  ["Drik små slurke jævnligt", "Drik en hel liter på én gang ved starten", "Drik kun efter turen", "Drik kun når du stopper"],
  "Små slurke ofte er lettere for maven end store mængder sjældent.");
Q("vaeske", 1, "Hvorfor indeholder sportsdrik salt?",
  ["For at erstatte det salt, du sveder ud, og hjælpe kroppen med at holde på væsken", "For at smage som havvand", "For at gøre dig mere tørstig, så du husker at drikke nok på hele turen og ikke glemmer flasken, når det bliver hårdt", "For at give protein"],
  "Natrium hjælper med at optage væsken og holde balancen.");
Q("vaeske", 1, "Kan man drikke for meget vand under et langt løb?",
  ["Ja, det kan give farligt lavt saltindhold i blodet", "Nej, man kan aldrig drikke for meget – kroppen tisser bare det overskydende ud", "Kun i kulde", "Kun hvis vandet er koldt"],
  "Det kaldes hyponatriæmi. Drik efter behov – og få salt med på lange distancer.");
Q("vaeske", 1, "Hvordan kan du holde dig kølig på løbet i et varmt løb?",
  ["Hælde vand over hovedet og bruge is ved depoterne", "Løbe med en tyk jakke", "Lade være med at drikke, så du ikke får en tung mave, der varmer", "Løbe hurtigere"],
  "Is i kasketten og vand over nakken hjælper på varmen.");
Q("vaeske", 1, "Hvad er et 'vanddepot'?",
  ["En station på ruten med vand og ofte sportsdrik", "En sø, du skal svømme i", "En stor flaske, der sidder på cyklen bag sadlen", "En pumpe"],
  "Kend afstanden mellem depoterne, så du ved, om du skal have egne flasker med.");
Q("vaeske", 1, "Hvorfor skal du drikke efter træning?",
  ["For at erstatte den væske, du har tabt", "Fordi huden ellers bliver tør, når man går i bad", "For at blive tungere", "Det skal du ikke"],
  "Drik jævnt de næste timer – sammen med mad, så kroppen holder bedre på væsken.");
Q("vaeske", 1, "Hvorfor kan du blive tørstig i svømmehallen?",
  ["Du sveder også i vandet, og hallen er ofte varm", "Fordi klorvandet suger væsken ud gennem huden, mens du svømmer", "Fordi man sluger luft", "Det kan du ikke"],
  "Hav en flaske på kanten.");
Q("vaeske", 1, "Hvad kan 'saltrande' på trisuiten fortælle dig?",
  ["Du taber meget salt i sveden og kan have brug for mere salt i drikken", "At trisuiten skal vaskes ved 90 grader, før salten ødelægger stoffet og lynlåsen helt", "At du har svømmet i havet", "Ingenting"],
  "Nogle sveder meget salt. De kan have gavn af mere natrium på lange distancer.");
REGNE = true;
Q("vaeske", 1, "Du vejer 70 kg før og 69 kg efter en træning, og du har ikke drukket. Hvor meget væske har du ca. tabt?",
  ["Ca. 1 liter", "Ca. 0,5 liter", "Ca. 2 liter", "Ca. 0,1 liter"],
  "1 kg vægttab svarer ca. til 1 liter væske.");
Q("vaeske", 1, "Du drikker 500 ml i timen i 3 timer. Hvor meget har du drukket?",
  ["1,5 liter", "1 liter", "2 liter", "3 liter"],
  "3 × 500 ml = 1.500 ml = 1,5 liter.");
Q("vaeske", 1, "En flaske holder 750 ml. Hvor mange flasker skal du bruge til 3 liter?",
  ["4 flasker", "3 flasker", "5 flasker", "6 flasker"],
  "3.000 ÷ 750 = 4.");
REGNE = false;
Q("vaeske", 1, "Hvad er hedeslag?",
  ["En livsfarlig tilstand, hvor kroppen bliver alt for varm", "En slags solskoldning, der kun sidder i huden", "Et slag af en bølge, når man svømmer i varmt vand", "En træningsform"],
  "Tegn er forvirring, kvalme, ophør af sved eller sammenbrud. Ring 112 og køl ned med det samme.");
Q("vaeske", 1, "Hvad skal du gøre, hvis en makker bliver forvirret og meget varm på en træningstur i hede?",
  ["Stoppe, køle ned med vand og skygge og ringe efter hjælp", "Sige at hun eller han bare skal tage sig sammen og løbe videre", "Give en varm drik", "Løbe videre alene"],
  "Forvirring i varme er et alarmsignal. Køl ned og få hjælp.");
Q("vaeske", 1, "Hvorfor er det smart at vænne sig til varme før et løb i et varmt land?",
  ["Kroppen bliver bedre til at svede og køle sig", "Fordi man så ikke behøver at drikke noget på løbsdagen", "Fordi varme gør dig lettere", "Det er ikke smart"],
  "Varmetilvænning tager ca. 10-14 dage.");
Q("vaeske", 1, "Hvad er en god drikke-vane i hverdagen for en triatlet?",
  ["Drik jævnt hele dagen, så urinen er lys", "Drik kun, når du træner", "Drik så meget, at du tisser hvert kvarter", "Drik kun kaffe"],
  "Jævn væske i hverdagen gør, at du møder frisk op til træning.");

// --- Sølv (mellem) ---
Q("vaeske", 2, "Hvad er hyponatriæmi?",
  ["For lavt natrium i blodet – ofte fordi man drikker for meget vand", "For meget sukker i blodet efter for mange gels", "For høj puls", "For lidt søvn"],
  "Symptomer kan være kvalme, hovedpine, hævelse og forvirring. Det kan være livsfarligt.");
Q("vaeske", 2, "Hvorfor kan hyponatriæmi være svær at skelne fra væskemangel?",
  ["Begge kan give kvalme, hovedpine og træthed", "Fordi begge altid giver blå læber og kolde fingre", "Fordi de er det samme", "Det er let at skelne"],
  "Hvis du har drukket meget og har det dårligt, så lad være med at drikke endnu mere vand – søg hjælp.");
Q("vaeske", 2, "Hvordan beregner du din svedrate?",
  ["Vej dig før og efter træning, læg det, du drak, til, og del med tiden", "Tæl antallet af dråber på panden pr. minut og gang med 60", "Mål pulsen", "Det kan ikke beregnes"],
  "Svedraten varierer meget. Mål den i forskellige temperaturer.");
Q("vaeske", 2, "Hvor meget sveder mange triatleter typisk i timen?",
  ["Ca. 0,5-2 liter", "Ca. 0,05 liter – svarer til et lille glas", "Ca. 5 liter", "Ingenting"],
  "Det afhænger af varme, intensitet og den enkelte.");
Q("vaeske", 2, "Hvor meget vægttab af væske kan typisk begynde at påvirke præstationen i varme?",
  ["Ca. 2 % af kropsvægten", "Ca. 0,1 %", "Ca. 20 %", "Kun over 50 % af kropsvægten"],
  "Ved større væsketab stiger puls og temperatur, og præstationen falder.");
Q("vaeske", 2, "Hvorfor kan 'drik efter tørst' være en god strategi på kortere løb?",
  ["Tørst er en god guide for de fleste ved moderate forhold", "Fordi man ifølge reglerne ikke må tage vand ved depoterne, hvis man ikke er tørstig", "Fordi tørst kun kommer i kulde", "Det er en dårlig strategi"],
  "På lange, varme løb kan en plan være bedre, fordi tørsten kan halte efter.");
Q("vaeske", 2, "Hvad er 'salttabletter' eller elektrolytkapsler?",
  ["Tilskud med natrium og andre salte til lange løb", "Tabletter med koffein", "Tabletter mod kvalme og mavekramper, som man tager før svømningen", "Tabletter med protein"],
  "Brug dem efter en plan, og test dem i træning. For meget kan også give problemer.");
Q("vaeske", 2, "Hvorfor kan kold drik være en fordel i varme?",
  ["Den køler kroppen en smule indefra", "Fordi kold drik giver mere energi end varm drik med samme indhold", "Fordi den er saltere", "Det er ingen fordel"],
  "Iskold drik og slush kan sænke kropstemperaturen lidt før og under løb i varme.");
Q("vaeske", 2, "Hvad gør kaffe ved væskebalancen hos folk, der er vant til det?",
  ["Moderat kaffe giver kun lille vanddrivende effekt og tæller med i væsken", "Kaffe dehydrerer altid kraftigt, så hver kop skal erstattes med tre glas vand ved siden af", "Kaffe erstatter sportsdrik", "Kaffe giver salt"],
  "Hos vante kaffedrikkere er effekten lille.");
Q("vaeske", 2, "Hvorfor kan alkohol efter et løb forsinke restitutionen?",
  ["Det påvirker væskebalance, søvn og muskelreparation", "Fordi alkohol giver ekstra protein, som musklerne ikke kan bruge", "Fordi alkohol er salt", "Det kan det ikke"],
  "En øl kan være hyggelig, men vand og mad først.");
Q("vaeske", 2, "Hvad er varmetilvænning (heat acclimation)?",
  ["Gentagen træning i varme, så kroppen sveder tidligere og mere, og pulsen bliver lavere", "At sidde i solen og slappe af hver dag i ugen før løbet uden at træne, mens man drikker meget vand", "At træne om vinteren", "At tage varme bade"],
  "Typisk 10-14 dage med 60-90 min træning i varme. Sauna efter træning kan også hjælpe lidt.");
Q("vaeske", 2, "Hvorfor kan sauna efter træning give en lille varmetilvænning?",
  ["Kroppen udsættes for varmestress og tilpasser sig", "Fordi sauna fylder glykogenlagrene op, når kroppen er varm", "Fordi sauna giver salt", "Det kan den ikke"],
  "Effekten er mindre end træning i varme, men kan hjælpe. Drik godt.");
Q("vaeske", 2, "Hvad er en almindelig fejl med væske i et Ironman-løb i varme?",
  ["At drikke store mængder vand uden salt", "At drikke for lidt kaffe, så man bliver træt og glemmer at drikke", "At drikke sportsdrik", "At bruge is"],
  "Kombiner væske, salt og kulhydrat efter din plan.");
Q("vaeske", 2, "Hvorfor kan du tisse mere, hvis du drikker meget vand uden mad?",
  ["Kroppen holder dårligere på ren væske uden salt og næring", "Fordi vand er vanddrivende", "Fordi nyrerne er trætte efter træning og ikke kan holde på noget", "Det kan du ikke"],
  "Mad og salt hjælper kroppen med at holde på væsken.");
REGNE = true;
Q("vaeske", 2, "Du vejer 72,0 kg før og 71,2 kg efter 1 times løb. Du drak 0,4 liter. Hvad er din svedrate?",
  ["1,2 liter i timen", "0,8 liter i timen", "0,4 liter i timen", "1,6 liter i timen"],
  "Vægttab 0,8 kg + 0,4 l drukket = 1,2 l på 1 time.");
Q("vaeske", 2, "Du vejer 60 kg. Hvor mange kg svarer 2 % væsketab til?",
  ["1,2 kg", "0,6 kg", "2 kg", "3 kg"],
  "60 × 0,02 = 1,2 kg.");
Q("vaeske", 2, "Din sved indeholder 1.000 mg natrium pr. liter, og du sveder 1,5 liter i timen. Hvor meget natrium taber du i timen?",
  ["1.500 mg", "1.000 mg", "2.500 mg", "750 mg"],
  "1,5 × 1.000 = 1.500 mg.");
Q("vaeske", 2, "Du sveder 1 liter i timen og vil erstatte 70 %. Hvor meget skal du drikke i timen?",
  ["0,7 liter", "1 liter", "0,5 liter", "1,4 liter"],
  "1 × 0,7 = 0,7 liter. Man behøver sjældent at erstatte alt under løbet.");
REGNE = false;
QM("vaeske", 2, "Pilen viser farven på din urin morgenen før et vigtigt løb. Hvad bør du gøre?",
  ["Drikke lidt mindre – den helt klare farve kan betyde, at du drikker rigeligt", "Drikke meget mere vand straks og fortsætte til farven er mørkere og helt stabil igen", "Tage salttabletter", "Ingenting – det er perfekt"],
  "Helt klar urin kan betyde, at du har drukket mere end nødvendigt. Drik efter tørst og få salt med maden.",
  URIN(1));
Q("vaeske", 2, "Hvorfor er det farligt at 'tømme' sig for væske for at veje mindre før et løb?",
  ["Dehydrering giver dårligere præstation og større risiko for hedeslag", "Fordi man så synker, når man svømmer, fordi kroppen har mindre vand og derfor mindre opdrift", "Fordi vægten ikke tæller", "Det er ikke farligt"],
  "Vægttab via væske er midlertidigt og skadeligt.");

// --- Guld (svær) ---
Q("vaeske", 3, "Hvorfor varierer anbefalingerne for natrium meget mellem atleter?",
  ["Natriumindholdet i sved kan variere fra ca. 200 til over 2.000 mg pr. liter", "Fordi natrium er forbudt for nogle aldersgrupper i World Triathlons regler, og andre har særlige dispensationer", "Fordi alle sveder ens", "Det gør de ikke"],
  "En svedtest kan vise, om du er en 'salt sweater'.");
Q("vaeske", 3, "Hvad er 'pre-loading' med natrium før et løb i varme?",
  ["At drikke en salt drik før start for at øge blodvolumen lidt", "At spise meget salt hver dag i en uge før løbet for at fylde lagrene helt op", "At drikke kun vand dagen før", "At undgå salt"],
  "En stærk elektrolytdrik 1-2 timer før kan hjælpe nogle atleter i varme. Test i træning.");
Q("vaeske", 3, "Hvad sker der med blodvolumenet under varmetilvænning?",
  ["Det øges, hvilket hjælper både køling og kredsløb", "Det falder kraftigt", "Det er uændret", "Det bliver gradvist til sved, så du har mindre blod efter tilvænningen"],
  "Større blodvolumen giver bedre køling og lavere puls ved samme arbejde.");
Q("vaeske", 3, "Hvad betyder WBGT (Wet Bulb Globe Temperature)?",
  ["Et mål for varmebelastning, der kombinerer temperatur, luftfugtighed, sol og vind", "Vandtemperaturen i svømningen", "Hvor våd en våddragt er", "En type termometer, der måler temperaturen på drikkevarerne i depoterne, så de ikke bliver for varme i solen"],
  "Arrangører bruger WBGT til at vurdere, om løb skal ændres af hensyn til varme.");
Q("vaeske", 3, "Hvorfor er høj luftfugtighed særlig belastende i varme?",
  ["Sveden fordamper dårligere, så kroppen køler mindre", "Fordi fugtig luft er tungere at trække vejret i og giver mindre ilt i lungerne", "Fordi der er mere ilt", "Det er den ikke"],
  "Sved, der drypper af, køler ikke. Det er fordampningen, der køler.");
Q("vaeske", 3, "Hvad er et alvorligt tegn på hyponatriæmi efter et langt løb?",
  ["Forvirring, opkast og hævede hænder trods meget drikkeri", "Lys urin og godt humør efter målstregen", "Lidt ømme ben", "Sult"],
  "Søg lægehjælp. Drik ikke mere vand.");
Q("vaeske", 3, "Hvorfor kan kvinder være lidt mere udsatte for hyponatriæmi i lange løb?",
  ["Mindre kropsstørrelse og ofte længere tid på ruten med mange drikkestop", "Fordi kvinder altid sveder mere salt end mænd, uanset hvor meget de træner, og derfor mister mere", "Fordi kvinder drikker mindre", "Det kan de ikke"],
  "Risikoen hænger sammen med at drikke mere, end man sveder, over lang tid.");
Q("vaeske", 3, "Hvorfor er 'ice slurry' (knust is-drik) før et løb i varme populært?",
  ["Det kan sænke kernetemperaturen lidt før start", "Fordi det giver ekstra kulhydrat", "Fordi det er forbudt at drikke vand i skiftezonen før start", "Det er ikke populært"],
  "Kølingen før start giver lidt mere 'plads', før kroppen bliver for varm.");
Q("vaeske", 3, "Hvorfor skal du ikke kun stole på vægten for at vurdere væskebehovet under en Ironman?",
  ["Kroppen frigiver også vand, når glykogen og fedt forbrændes", "Fordi vægten er forkert", "Fordi man ikke må veje sig under et løb, og vægte ikke findes i skiftezonen", "Det skal du"],
  "Et vist vægttab er normalt over en Ironman – også hos velhydrerede atleter.");
REGNE = true;
Q("vaeske", 3, "Du sveder 1,4 l/t og drikker 0,8 l/t i 5 timer. Hvor meget væske har du tabt netto?",
  ["3 liter", "4 liter", "2 liter", "7 liter"],
  "(1,4 − 0,8) × 5 = 0,6 × 5 = 3 liter.");
Q("vaeske", 3, "Du vejer 75 kg og taber 3 liter. Hvor mange procent af kropsvægten er det?",
  ["4 %", "3 %", "2 %", "7,5 %"],
  "3 ÷ 75 = 0,04 = 4 %.");
Q("vaeske", 3, "Sportsdrikken har 500 mg natrium pr. liter. Du vil have 800 mg natrium i timen og drikker 0,8 l/t. Hvor meget mangler du?",
  ["400 mg", "300 mg", "500 mg", "0 mg"],
  "0,8 × 500 = 400 mg. 800 − 400 = 400 mg mangler, fx fra salttabletter.");
Q("vaeske", 3, "Du sveder 1,2 l/t i 10 timer og har en svedkoncentration på 900 mg natrium/l. Hvor meget natrium taber du?",
  ["10.800 mg", "9.000 mg", "1.080 mg", "12.000 mg"],
  "1,2 × 10 × 900 = 10.800 mg natrium.");
REGNE = false;
Q("vaeske", 3, "Hvorfor kan det være skadeligt at drikke store mængder vand de sidste timer før start?",
  ["Det kan fortynde natrium og give mange toiletbesøg", "Fordi vand altid giver krampe i maven, hvis man drikker det samme morgen, som man skal svømme", "Fordi det er forbudt", "Det er ikke skadeligt"],
  "Drik normalt de sidste dage – ikke ekstra store mængder kort før start.");
QM("vaeske", 3, "Pilen viser urinfarven efter en varm Ironman. Hvad er den bedste reaktion?",
  ["Drik jævnt med salt og mad over de næste timer – søg hjælp ved andre symptomer", "Drik 3 liter vand hurtigst muligt", "Ingenting – det er normalt", "Drik kun kaffe"],
  "Meget mørk urin tyder på væskemangel. Genopfyld roligt, og hold øje med andre tegn.",
  URIN(8));
R("vaeske", 3, "Sæt førstehjælp ved mistanke om hedeslag i rækkefølge.",
  ["Ring 112", "Få personen i skygge", "Køl ned med koldt vand og is", "Hold øje med vejrtrækning og bevidsthed", "Fortsæt kølingen, til hjælpen kommer"],
  "Hurtig køling er det vigtigste. 'Cool first, transport second.'");
Q("vaeske", 3, "Hvorfor kan nogle atleter få muskelkramper, selvom de har drukket nok?",
  ["Kramper skyldes ofte træthed i nervesystemet og musklerne – ikke kun væske og salt", "Fordi de har drukket for lidt kaffe", "Fordi de har sovet for meget", "Det kan de ikke"],
  "Forskning peger på neuromuskulær træthed som en vigtig årsag. Pacing og træning hjælper.");
Q("vaeske", 1, "Hvor mange drikkeflasker har mange triatleter med på en lang cykeltur?",
  ["Ofte 2 eller flere", "Ingen – man drikker kun efter turen er slut", "Altid præcis 5", "En kop"],
  "På varme dage skal du måske fylde op undervejs. Planlæg ruten efter vandposter.");
Q("vaeske", 1, "Hvorfor skal du skylle munden med vand, hvis du har fået saltvand i munden under svømningen?",
  ["Saltvandet kan give tørst og kvalme", "Fordi saltvand giver krampe i armene med det samme", "Fordi det er reglen", "Det skal du ikke"],
  "En slurk frisk vand i T1 kan fjerne den salte smag og hjælpe maven.");
Q("vaeske", 1, "Hvad er tegn på, at du har drukket rigeligt før træning?",
  ["Du har lys urin og ingen tørst", "Du har mørk urin og hovedpine", "Du er meget tørstig", "Du har kramper"],
  "Lys urin og ingen tørst er tegn på god væskebalance.");
Q("vaeske", 2, "Hvorfor kan det være smart at fryse en flaske halvt med vand før en varm cykeltur?",
  ["Drikken holder sig kold længere", "Fordi frosset vand giver mere energi", "For at cyklen bliver tungere", "Det er ikke smart"],
  "Kold drik smager bedre og køler en smule. Fyld resten op med vand.");
Q("vaeske", 2, "Hvorfor sveder trænede atleter ofte mere end utrænede?",
  ["Kroppen er blevet bedre til at køle sig", "Fordi de drikker mindre", "Fordi de er mere nervøse", "Det gør de ikke"],
  "Træning – især i varme – øger svedproduktionen og gør den hurtigere i gang.");
Q("vaeske", 2, "Hvorfor kan løb i varme give højere puls ved samme tempo?",
  ["Blod sendes til huden for at køle, så hjertet skal pumpe mere", "Fordi varm luft har mindre ilt", "Fordi skoene bliver tungere", "Det kan det ikke"],
  "Sæt tempoet ned i varme. Pulsen er en god guide.");
Q("vaeske", 2, "Hvad er 'kardiovaskulær drift' i varme?",
  ["At pulsen stiger gradvist, selvom intensiteten er den samme", "At blodet flyder hurtigere i kulde", "At hjertet stopper", "At pulsen falder"],
  "Væsketab og varme får pulsen til at 'drive' opad.");
Q("vaeske", 2, "Hvor mange dage tager varmetilvænning typisk at få de fleste fordele ved?",
  ["Ca. 10-14 dage", "1 time", "6 måneder", "2 dage"],
  "Mange tilpasninger kommer i løbet af den første uge, resten inden for ca. 2 uger.");
Q("vaeske", 3, "Hvad sker der med svedens saltindhold efter varmetilvænning?",
  ["Det falder typisk, så kroppen sparer på natrium", "Det stiger kraftigt", "Sveden bliver sød", "Det er uændret"],
  "Kroppen bliver bedre til at holde på salt.");
Q("vaeske", 3, "Hvorfor kan en svedtest være nyttig for en Ironman-atlet?",
  ["Den viser, hvor meget salt du taber, så du kan planlægge natrium", "Den viser din maksimale puls", "Den viser, hvor meget glykogen du har", "Den er ikke nyttig"],
  "En svedtest måler natriumkoncentrationen. Kombiner med din svedrate.");
Q("vaeske", 3, "Hvad er fordelen ved at køle håndfladerne eller nakken under løb i varme?",
  ["Hurtig lokal afkøling kan føles godt og mindske varmebelastningen", "Det sænker pulsen til hvileniveau", "Det giver mere energi", "Det er forbudt"],
  "Is i hænderne, våde svampe og vand over nakken er populære tricks.");
REGNE = true;
Q("vaeske", 3, "Svedrate 1,0 l/t, løbet varer 3 t, og du vil højst tabe 2 % af 70 kg. Hvor meget skal du mindst drikke?",
  ["1,6 liter", "1,4 liter", "3 liter", "0,6 liter"],
  "2 % af 70 = 1,4 kg. Tab 3 l − 1,4 l = 1,6 l skal du mindst drikke.");
Q("vaeske", 3, "Du vejer 68,0 kg før og 66,6 kg efter 2 timer og drak 1,0 liter. Hvad er svedraten?",
  ["1,2 l/t", "0,7 l/t", "2,4 l/t", "1,0 l/t"],
  "Vægttab 1,4 + drukket 1,0 = 2,4 l på 2 timer = 1,2 l/t.");
Q("vaeske", 3, "En salttablet har 250 mg natrium. Du vil have 600 mg i timen, og drikken giver 350 mg. Hvor mange tabletter i timen?",
  ["1", "2", "3", "0"],
  "600 − 350 = 250 mg = 1 tablet.");
REGNE = false;
Q("vaeske", 3, "Hvorfor tager medicinsk personale ofte en blodprøve for natrium ved kollaps efter et langt løb?",
  ["Behandlingen af hyponatriæmi og dehydrering er helt forskellig", "Fordi de skal teste for doping", "Fordi det er reglen", "Det gør de ikke"],
  "Får en person med hyponatriæmi mere vand, kan det blive værre.");
Q("vaeske", 3, "Hvorfor anbefales det ikke at drikke efter et fast skema uden at kende sin svedrate?",
  ["Man kan drikke langt mere eller mindre, end kroppen har brug for", "Fordi skemaer er forbudt", "Fordi svedraten altid er 1 liter", "Det anbefales"],
  "Mål svedraten i træning, og lav en personlig plan.");
