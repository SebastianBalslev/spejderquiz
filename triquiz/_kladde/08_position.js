/* =====================================================================
   POSITION OG AERODYNAMIK  (emne: "position")
   ===================================================================== */
// Tegner en rytter på en tempocykel set fra siden.
// v: "god" | "hoej" (sadel for høj) | "lav" (sadel for lav) | "oprejst" | "hoved" (hovedet løftet) | "rund" (rund ryg, langt frem) | "racer"
const RYTTER = (v) => {
  const P = { hofte: [80, 43], skulder: [132, 44], hoved: [146, 38], albue: [136, 62], haand: [160, 58], fod: 0.6 * Math.PI };
  if (v === "hoej") P.hofte = [78, 36];
  if (v === "lav") P.hofte = [84, 58];
  if (v === "oprejst") { P.skulder = [112, 24]; P.hoved = [118, 12]; P.albue = [132, 44]; P.haand = [150, 52]; }
  if (v === "hoved") { P.hoved = [142, 24]; }
  if (v === "rund") { P.skulder = [140, 50]; P.hoved = [156, 50]; P.albue = [146, 64]; P.haand = [170, 60]; }
  if (v === "racer") { P.skulder = [124, 34]; P.hoved = [136, 24]; P.albue = [140, 48]; P.haand = [150, 60]; }
  const BB = [95, 102], kr = 17, fod = [BB[0] + kr * Math.cos(P.fod), BB[1] + kr * Math.sin(P.fod)];
  const knae = (H, F, a, b) => {
    const dx = F[0] - H[0], dy = F[1] - H[1], d = Math.hypot(dx, dy);
    if (d >= a + b - 0.5) return [H[0] + dx * a / d, H[1] + dy * a / d];
    const al = Math.acos((a * a + d * d - b * b) / (2 * a * d)), ux = dx / d, uy = dy / d;
    const k1 = [H[0] + a * (ux * Math.cos(al) - uy * Math.sin(al)), H[1] + a * (ux * Math.sin(al) + uy * Math.cos(al))];
    const k2 = [H[0] + a * (ux * Math.cos(al) + uy * Math.sin(al)), H[1] + a * (-ux * Math.sin(al) + uy * Math.cos(al))];
    return k1[0] > k2[0] ? k1 : k2;
  };
  const K = knae(P.hofte, fod, 40, 40), f = n => n.toFixed(1);
  return TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/><rect y="128" width="200" height="12" fill="#c9d3da"/>
    <g fill="none" stroke="#1b2530" stroke-width="3"><circle cx="45" cy="100" r="28"/><circle cx="155" cy="100" r="28"/></g>
    <path d="M45 100 L95 102 L82 52 Z M82 52 L140 58 L95 102 M140 58 L155 100" fill="none" stroke="#e0662a" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="95" cy="102" r="7" fill="none" stroke="#1b2530" stroke-width="2"/>
    <path d="M82 52 L80 ${P.hofte[1] + 4}" stroke="#1b2530" stroke-width="3"/><path d="M68 ${P.hofte[1] + 4} L92 ${P.hofte[1] + 4}" stroke="#1b2530" stroke-width="4" stroke-linecap="round"/>
    ${v === "racer" ? `<path d="M140 58 L146 56 Q154 56 152 64 Q150 70 144 68" stroke="#1b2530" stroke-width="3" fill="none"/>`
                    : `<path d="M140 58 L140 60 L166 58 M136 60 L142 60" stroke="#1b2530" stroke-width="3"/>`}
    <path d="M95 102 L${f(fod[0])} ${f(fod[1])}" stroke="#555" stroke-width="3"/>
    <g stroke="#0f3b5f" stroke-width="7" stroke-linecap="round" fill="none">
      <path d="M${P.hofte} L${f(K[0])} ${f(K[1])} L${f(fod[0])} ${f(fod[1])}"/>
      <path d="M${P.hofte} L${P.skulder}"/><path d="M${P.skulder} L${P.hoved}" stroke-width="5"/>
      <path d="M${P.skulder} L${P.albue} L${P.haand}" stroke-width="5"/></g>
    <circle cx="${P.hoved[0]}" cy="${P.hoved[1]}" r="8" fill="#e0662a" stroke="#1b2530" stroke-width="1.5"/>`);
};

// --- Bronze (let) ---
Q("position", 1, "Hvad er den største modstand på cyklen, når du kører hurtigt på flad vej?",
  ["Luftmodstanden", "Rullemodstanden fra dækkene mod asfalten", "Vægten af cyklen", "Friktionen i kæden"],
  "Over ca. 25 km/t står luften for det meste af modstanden. Derfor betyder din position så meget.");
Q("position", 1, "Hvorfor ligger triatleter lavt på aerobøjlerne?",
  ["For at skære gennem luften med mindre modstand", "For at kunne se vejen bedre, når de kører hurtigt", "For at hvile nakken", "Fordi det er påkrævet"],
  "En lav, smal krop har et mindre frontareal. Det giver mere fart for de samme watt.");
Q("position", 1, "Hvad er en bikefit?",
  ["En tilpasning af cyklen til din krop", "En træningsform på hometrainer med musik og instruktør", "En regel om cykelstørrelser", "En vask af cyklen"],
  "Ved en bikefit justeres sadel, styr og klamper, så du sidder effektivt og uden smerter.");
Q("position", 1, "Hvad er tegn på, at sadlen er for høj?",
  ["Hoften vipper fra side til side, og benet er helt strakt", "Knæet kommer helt op til brystet øverst i omdrejningen, og du træder meget tungt", "Du kan nå jorden med flade fødder", "Ingen tegn – højere er altid bedre"],
  "For høj sadel får hoften til at vugge, og du kan få smerter bag i knæet.");
Q("position", 1, "Hvad er tegn på, at sadlen er for lav?",
  ["Knæet er meget bøjet i bunden af tråd", "Benet er helt strakt i bunden af tråd, og hoften vugger", "Du sidder meget behageligt", "Det er umuligt at se"],
  "For lav sadel giver dårlig kraft og belaster forsiden af knæet.");
QM("position", 1, "Hvad er fejlen i rytterens position?",
  ["Sadlen er for høj – benet er helt strakt", "Sadlen er for lav, så knæet er meget bøjet", "Hovedet er løftet for højt", "Der er ingen fejl"],
  "Benet strækkes helt i bunden, og hoften må vugge for at nå pedalen. Sænk sadlen lidt.",
  RYTTER("hoej"));
QM("position", 1, "Hvad er fejlen i rytterens position?",
  ["Sadlen er for lav – knæet er meget bøjet", "Sadlen er for høj, så benet strækkes helt ud", "Rytteren sidder for oprejst", "Der er ingen fejl"],
  "Med knæet så bøjet i bunden mister du kraft og belaster knæet. Hæv sadlen.",
  RYTTER("lav"));
QM("position", 1, "Hvad er fejlen i rytterens position på tempocyklen?",
  ["Rytteren sidder alt for oprejst", "Sadlen er for lav, så knæet bøjes meget", "Rytteren ligger for lavt med hovedet nede", "Der er ingen fejl"],
  "Når overkroppen er oppe som et sejl, fanger den meget vind. Brug aerobøjlerne.",
  RYTTER("oprejst"));
Q("position", 1, "Hvor skal du kigge hen, når du ligger på aerobøjlerne?",
  ["Fremad på vejen et stykke foran dig", "Ned på forhjulet hele tiden", "Op i himlen, så nakken får en pause fra den lave position", "Bagud efter andre ryttere"],
  "Kig fremad, så du kan se trafik og forhindringer. Hold hovedet lavt, men aldrig blindt.");
Q("position", 1, "Hvorfor er det farligt at kigge ned på forhjulet i lang tid?",
  ["Du kan ikke se, hvad der sker foran dig", "Fordi forhjulet kan blive skævt, når du flytter vægten frem", "Fordi du bliver svimmel af egerne", "Det er ikke farligt"],
  "Ulykker sker, når man ikke ser parkerede biler eller huller. Løft blikket.");
Q("position", 1, "Hvad gør en tætsiddende trisuit for aerodynamikken?",
  ["Mindsker luftmodstanden", "Øger luftmodstanden, fordi stoffet er glat og klistrer", "Gør dig tungere", "Ingenting"],
  "Løst tøj blafrer og bremser. En tætsiddende dragt kan spare flere minutter over en lang tur.");
Q("position", 1, "Hvorfor skal en ny aeroposition trænes gradvist?",
  ["Nakke, ryg og hofter skal vænne sig til den", "Fordi man ellers ikke må bruge den i et løb", "Fordi cyklen skal køres til", "Det skal den ikke"],
  "Kan du ikke holde positionen i hele løbet, er den ikke hurtig. Træn den på længere ture.");
Q("position", 1, "Hvad er fordelen ved en racercykel i forhold til en tempocykel for begyndere?",
  ["Den er lettere at styre og sikrere i trafik", "Den er hurtigere på helt flad vej i modvind", "Den har ingen bremser", "Den er altid dyrere"],
  "Racercyklen giver bedre kontrol, og bremserne er lige ved hånden.");
Q("position", 1, "Hvad kan du sætte på en racercykel for at ligge mere aerodynamisk?",
  ["Clip-on aerobøjler", "En ekstra stor sadel med blød pude", "Brede knopdæk", "Skærme"],
  "Clip-on bøjler monteres på styret. De giver mulighed for at ligge lavere og smallere.");
Q("position", 1, "Hvorfor er det vigtigt at kunne nå bremserne hurtigt fra aeropositionen?",
  ["For sikkerheden, hvis noget pludselig sker", "Fordi bremserne skal bruges hele tiden", "Fordi det er påkrævet at bremse ved hver bøje", "Det er ikke vigtigt"],
  "På en tempocykel sidder bremserne på basebaren. Øv dig i at skifte hurtigt.");
Q("position", 1, "Hvilken kropsdel giver mest luftmodstand på cyklen?",
  ["Kroppen og hovedet", "Hjulene og egerne, som pisker luften rundt", "Kæden", "Pedalerne"],
  "Rytteren står for størstedelen af modstanden. Derfor er positionen vigtigere end udstyret.");
Q("position", 1, "Hvad betyder 'aero' i triathlon?",
  ["Lav luftmodstand", "Høj fart ned ad bakke uanset position", "Lav vægt", "God vejrtrækning"],
  "Aero kommer af aerodynamik – hvor let du glider gennem luften.");
Q("position", 1, "Hvorfor sidder mange triatleter lidt længere fremme på sadlen i aeropositionen?",
  ["For at åbne hoften og få plads til benene", "For at kunne nå jorden med fødderne, når de holder for rødt", "For at sidde blødere", "Det gør de ikke"],
  "Når du læner dig frem, ruller bækkenet. Ved at sidde længere fremme bliver vinklen mere åben.");
Q("position", 1, "Hvad er risikoen ved en meget lav position, du ikke kan holde?",
  ["Du sætter dig op igen og bliver langsommere", "Du bliver for hurtig og risikerer at få en fartbøde", "Du får for meget luft", "Ingen risiko"],
  "En position, du skal rejse dig fra hvert femte minut, er langsommere end en lidt højere, du kan holde.");
Q("position", 1, "Hvorfor kan smerter i nakken komme efter lange ture i aeroposition?",
  ["Du skal holde hovedet oppe for at se frem", "Fordi hjelmen er for let", "Fordi luften er kold", "Fordi aerobøjlerne er for korte, så armene ligger for langt tilbage"],
  "Nakken arbejder hele tiden. Styrketræning og en lidt højere front kan hjælpe.");
Q("position", 1, "Hvem kan hjælpe dig med at finde den rigtige position?",
  ["En bikefitter", "En svømmetræner uden kendskab til cykler", "En bilmekaniker", "Ingen – det skal man klare selv"],
  "En erfaren bikefitter måler og justerer, så du sidder både hurtigt og behageligt.");
Q("position", 1, "Hvad er en god tommelfingerregel for knæet i bunden af tråd?",
  ["Let bøjet, ikke helt strakt", "Helt strakt, så du får mest kraft i hvert tråd", "Meget bøjet", "Det er lige meget"],
  "En let bøjning (ca. 25-35°) giver kraft og skåner knæet.");
Q("position", 1, "Hvorfor er det godt at tage et billede af din position fra siden?",
  ["Så du kan se fejl, du ikke mærker", "Så du kan sende det til arrangøren som bevis", "For at vise cyklen frem", "Det er ikke godt"],
  "Et billede eller en video afslører fx en løftet skulder, rund ryg eller for høj sadel.");

// --- Sølv (mellem) ---
QM("position", 2, "Hvad er fejlen i rytterens position?",
  ["Hovedet er løftet højt og fanger vind", "Sadlen er for høj, så benet strækkes helt ud", "Rytteren sidder for langt bagud", "Der er ingen fejl"],
  "Et løftet hoved giver mere frontareal. Sænk hovedet mellem skuldrene, men se stadig frem.",
  RYTTER("hoved"));
QM("position", 2, "Hvordan ser rytterens position ud på tegningen?",
  ["God aeroposition – lav ryg og let bøjet knæ", "Sadlen er for lav, så knæet er alt for bøjet i bunden af tråd", "Hovedet er løftet for højt", "Rytteren sidder for oprejst"],
  "Ryggen er lav, hovedet ligger mellem skuldrene, og knæet er let bøjet i bunden.",
  RYTTER("god"));
QM("position", 2, "Hvilken type cykel kører rytteren på tegningen?",
  ["En racercykel med bøjet styr", "En tempocykel med aerobøjler", "En mountainbike", "En hometrainer"],
  "Rytteren holder på et bøjet racerstyr. Det er tilladt i alle triathlonløb.",
  RYTTER("racer"));
Q("position", 2, "Hvad er 'frontareal'?",
  ["Det areal, du og cyklen viser frem mod vinden", "Størrelsen på cyklens forhjul og fælg målt i kvadratcentimeter", "Hvor stort styret er", "Størrelsen på sadlen"],
  "Jo mindre frontareal, jo mindre luft skal skubbes til side.");
Q("position", 2, "Hvorfor kan det hjælpe at 'trække skuldrene op' (shrugging) i aeroposition?",
  ["Hovedet glider ned mellem skuldrene og fylder hullet bag hovedet", "Fordi det giver mere kraft i benene, når musklerne i ryggen spændes", "For at holde varmen", "Det hjælper ikke"],
  "Skuldrene danner en skjold. Hovedet fylder hullet, så luften glider glat af.");
Q("position", 2, "Hvad er en passende vinkel i albuen på aerobøjlerne?",
  ["Ca. 90-110 grader", "Ca. 30 grader, helt bøjet", "Helt strakt arm – 180 grader", "Det betyder intet"],
  "Med albuerne under skuldrene og en vinkel omkring 90-110° kan du hvile og holde positionen længe.");
Q("position", 2, "Hvorfor kan for bred armstilling på aerobøjlerne koste fart?",
  ["Armene skaber mere frontareal og vind ind mod brystet", "Fordi bøjlerne bliver ustabile og begynder at vibrere i fart, så cyklen bremses", "Fordi armene bliver trætte", "Det koster ikke fart"],
  "Smalle arme kan spare watt. Men for smalt kan give dårlig styring – find balancen.");
Q("position", 2, "Hvad kan en for lang aeroposition (for langt til bøjlerne) give?",
  ["Rund ryg, skuldersmerter og dårlig kontrol", "Bedre kraft i benene og mindre træthed, fordi kroppen er strakt helt ud", "Mere komfort i nakken", "Intet"],
  "Når du må strække dig for langt, bliver ryggen rund, og du kan ikke styre godt.");
QM("position", 2, "Hvad er problemet med rytterens position?",
  ["Rytteren strækker sig for langt frem, så ryggen bliver rund", "Rytteren sidder for oprejst", "Sadlen er for lav, så knæet bøjes meget i bunden af hvert eneste tråd", "Der er ingen fejl"],
  "Hænderne er for langt fremme. Kortere bøjler eller en kortere frempind giver en bedre ryg.",
  RYTTER("rund"));
Q("position", 2, "Hvad er 'hip angle' (hoftevinkel) i aeropositionen?",
  ["Vinklen mellem overkrop og lår øverst i tråd", "Vinklen på sadlens næse", "Vinklen mellem cyklens sadelrør og overrør, målt ved sadelpinden", "Vinklen på hjelmen"],
  "En for lukket hoftevinkel gør det svært at træde. Sadelplacering og kranklængde kan åbne den.");
Q("position", 2, "Hvorfor bør du ikke skifte position kort før et vigtigt løb?",
  ["Kroppen er ikke vant til den nye position", "Fordi reglerne forbyder ændringer efter tilmelding", "Fordi cyklen skal godkendes igen", "Det er fint at skifte"],
  "En ny position kræver uger at vænne sig til. Lav ændringer tidligt i sæsonen.");
Q("position", 2, "Hvor meget kan en aerohjelm typisk spare i forhold til en almindelig vejhjelm over 40 km?",
  ["Ca. 30-60 sekunder", "Ca. 10 minutter", "Mindre end et sekund", "Den gør dig langsommere"],
  "Gevinsten afhænger af hovedholdningen. Kigger du ned, kan halen stikke op og koste fart.");
Q("position", 2, "Hvorfor kan en aerohjelm være langsommere for nogle ryttere?",
  ["Hvis rytteren kigger ned, stikker halen op i vinden", "Fordi aerohjelme er tungere og derfor bremser, især op ad bakke og i sving", "Fordi de har for mange huller", "Det kan de ikke"],
  "Hjelmens form virker kun, når hovedet holdes rigtigt. Test den i din egen position.");
Q("position", 2, "Hvad gør du for at holde aeropositionen længe i et løb?",
  ["Træner i positionen og styrker ryg og core", "Sænker sadlen meget for at sidde mere stabilt", "Kører kun i positionen ned ad bakke", "Strækker dig aldrig"],
  "Lange ture i aeroposition, plus core- og mobilitetstræning, gør positionen holdbar.");
Q("position", 2, "Hvornår er det klogt at rejse sig fra aeropositionen?",
  ["Op ad stejle bakker, i skarpe sving og ved fare", "Hele tiden, når det blæser, så du kan holde bedre balance på cyklen", "Kun når du drikker", "Aldrig"],
  "Kontrol og sikkerhed går forud. Brug basebaren, når du skal bremse og styre.");
Q("position", 2, "Hvorfor er en lav front ikke altid hurtigst?",
  ["Hvis den lukker hoftevinklen, falder watten mere, end luftmodstanden falder", "Fordi lav front lægger mere vægt på forhjulet, som så punkterer langt oftere", "Fordi reglerne forbyder lav front", "Den er altid hurtigst"],
  "Hurtigst er balancen mellem lav modstand og høj watt. Test begge dele.");
Q("position", 2, "Hvad er 'stack' på aerobøjlerne?",
  ["Hvor højt albuepuderne sidder", "Hvor mange flasker der er på cyklen", "Hvor langt sadlen er fra jorden", "Hvor bredt styret er"],
  "Ved at hæve eller sænke albuepuderne ændres positionen mest.");
Q("position", 2, "Hvorfor kan 'praying mantis' – hænder løftet højt foran ansigtet – være hurtig?",
  ["Hænderne foran ansigtet skærmer for vinden", "Fordi den gør rytteren tungere", "Fordi hænderne er tæt på bremserne, så du kan bremse sent i sving", "Den er aldrig hurtig"],
  "Hænderne løftet foran hovedet kan lede luften rundt. Men det kræver styrke og vane.");
Q("position", 2, "Hvorfor kører man i et tempoløb med en tætsiddende hjelm og uden løse lommer?",
  ["Alt, der stikker ud eller blafrer, giver modstand", "Fordi lommer er forbudt i alle løb under både World Triathlon og Ironman", "For at se pæn ud", "Det betyder intet"],
  "Små ting tæller. Tape kabler, fjern løse ting og hav glat tøj.");
Q("position", 2, "Hvorfor bruges vindtunnel og 'aerotest' på velodrom?",
  ["For at måle, hvor meget luftmodstand en position eller udstyret giver", "For at se, hvor hurtigt cyklen accelererer fra stillestående og op til topfart", "For at teste dæktryk", "For at træne i varmen"],
  "Ved at måle CdA i forskellige positioner kan man finde den hurtigste.");
Q("position", 2, "Hvad er 'sadelnæse-tryk'?",
  ["Ubehag, når man sidder på sadlens forreste del i aeroposition", "Trykket i sadlens indbyggede luftpude, som skal pumpes op før hvert løb", "En regel om sadelhøjde", "En type sadeltaske"],
  "Mange triatleter bruger korte, åbne trisadler for at mindske trykket.");
Q("position", 2, "Hvad gør en for lang krank ved hofte og knæ i aeropositionen?",
  ["Knæet kommer højere op og lukker hoftevinklen", "Giver mere plads og en mere åben hofte, fordi pedalen kommer længere ud", "Gør cyklen lettere", "Intet"],
  "Kortere krank giver en mere åben hofte øverst i tråd. Derfor kører mange triatleter 165-170 mm.");
Q("position", 2, "Hvorfor må man ikke køre med aerobøjlerne i et draftingløb (World Triathlon elite)?",
  ["Det er farligt i tætte grupper, hvor man skal nå bremserne", "Fordi aerobøjler gør cyklen for let", "Fordi aerobøjlerne giver en uretfærdig fordel til dem, der har råd til dyrt udstyr", "Det må man godt"],
  "I draftingløb kører man tæt, så kun korte bøjler er tilladt. Hænderne skal være tæt på bremserne.");

// --- Guld (svær) ---
Q("position", 3, "Hvad er tommelfingerreglen 'KOPS'?",
  ["Knæ over pedalakslen, når kranken står vandret frem", "Kadence over power i sving", "Knæ op på styret i sving", "Kort overrør, passende sadel – en regel for, hvordan man vælger stelstørrelse"],
  "KOPS er en gammel startregel for sadlens frem-tilbage-placering. I aeroposition sidder triatleter ofte foran den.");
Q("position", 3, "Hvor meget af den samlede luftmodstand står rytteren typisk for?",
  ["Ca. 75-80 %", "Ca. 20-25 %", "Ca. 50 %", "Ca. 5 %"],
  "Cyklen står for resten. Derfor giver en bedre position typisk mere end et nyt stel.");
Q("position", 3, "Hvor mange watt skal der typisk til for at gå fra 40 til 42 km/t, når luftmodstand dominerer?",
  ["Ca. 15 % flere watt", "Ca. 5 % flere watt", "Ca. 50 % flere watt", "Præcis samme watt"],
  "Effekten stiger med farten i tredje potens: (42/40)³ ≈ 1,16. Hver km/t koster mere og mere.");
Q("position", 3, "Hvad betyder det, at CdA er 0,25 m² i stedet for 0,30 m²?",
  ["Mindre luftmodstand – du kører hurtigere for de samme watt", "Mere luftmodstand – du kører langsommere", "At cyklen er 0,05 kg lettere, fordi der er brugt mindre carbon i rammen", "At du har mindre FTP"],
  "Et fald på 0,05 m² kan give 1-2 km/t ved samme watt. Det er en stor gevinst.");
Q("position", 3, "Hvorfor kan et lille drej på hovedet (kigge ned eller til siden) koste mange watt?",
  ["Hjelmen og hovedet ændrer form mod vinden og skaber turbulens", "Fordi musklerne i nakken bruger mere energi, når hovedet holdes skævt", "Fordi pulsen stiger", "Det koster ingenting"],
  "Aeroeffekten af hjelmen afhænger af præcis hovedholdning. Hold blikket stabilt fremad.");
Q("position", 3, "Hvad gør en 'saddle setback' (sadlens placering bag krankboksen)?",
  ["Bestemmer hvor langt bagud du sidder i forhold til pedalerne", "Bestemmer sadlens højde over jorden", "Bestemmer, hvor bred sadlen er bagtil, hvor sædeknoglerne hviler", "Bestemmer sadlens vægt"],
  "Racercyklister sidder længere tilbage. Triatleter sidder ofte længere frem for at åbne hoften.");
Q("position", 3, "Hvorfor er sadlens placering frem-tilbage begrænset af UCI i cykelløb, men ofte friere i triathlon uden drafting?",
  ["Cykelsport har sine egne regler om position; triathlon har tilpasset reglerne til aeroposition", "Fordi triatleter er mindre", "Fordi triathloncykler er tungere, og en fremskudt sadel ville gøre dem ustabile ned ad bakke, så UCI har forbudt det af sikkerhedsgrunde", "Der er ingen forskel"],
  "Tjek reglerne i dit forbund og løb. Ironman og mange nationale forbund tillader fremskudte sadler.");
Q("position", 3, "Hvad er risikoen ved at stille sadlen for langt frem uden at ændre resten af positionen?",
  ["For meget vægt på hænderne og dårlig styring", "Mindre vægt på hænderne og bedre styring, fordi vægten flyttes bagud", "Cyklen bliver lettere", "Ingen risiko"],
  "Når du rykker frem, skal styret ofte også ændres, så vægten fordeles godt.");
Q("position", 3, "Hvad er 'yaw' i aerodynamik?",
  ["Vinklen, som vinden rammer fra – fx skrå sidevind", "Hvor meget cyklen vipper i sving", "Hvor hurtigt hjulet drejer rundt, målt i omdrejninger pr. minut", "Hjelmens vægt"],
  "Vinden rammer sjældent lige forfra. Dybe hjul og aerohjelme testes derfor ved forskellige yaw-vinkler.");
Q("position", 3, "Hvorfor kan dybe fælge give en 'sejl-effekt' ved bestemte vindvinkler?",
  ["Fælgen kan danne løft fremad i skrå vind", "Fordi den hule fælg fyldes med luft, der presser hjulet fremad", "Fordi fælgen bliver tungere", "Det kan den ikke"],
  "Som et sejl kan fælgen omdanne skrå vind til fremdrift. Men i kraftig sidevind bliver den svær at styre.");
Q("position", 3, "Hvorfor tester mange deres aeroposition med 'field testing' på en flad vej?",
  ["Det er billigere end en vindtunnel og viser forskelle under rigtige forhold", "Fordi vindtunneler er forbudt", "Fordi det kræver færre watt at køre på vejen end at sidde i en vindtunnel, og testen derfor bliver lettere", "Det gør man ikke"],
  "Med powermeter og gentagne kørsler i samme forhold kan man beregne CdA og sammenligne.");
Q("position", 3, "Hvad betyder det, at en position er 'sustainable'?",
  ["Du kan holde den med god kraft i hele løbet", "Den er lavet med udstyr af genbrugte materialer, fx genbrugt carbon", "Den er billig at opnå", "Den er godkendt af UCI"],
  "Den hurtigste position i 5 minutter er ikke altid den hurtigste i 5 timer.");
Q("position", 3, "Hvorfor kan bedre mobilitet i hofte og bagside lår forbedre aeropositionen?",
  ["Du kan rotere bækkenet frem uden at ryggen bliver rund", "Fordi det gør benene længere", "Fordi mobilitet øger din FTP direkte, så du kan træde flere watt", "Det kan det ikke"],
  "Med bedre mobilitet kan du få en flad ryg og lav front – uden at lukke hoften helt.");
REGNE = true;
Q("position", 3, "En ny position sparer 20 watt ved 40 km/t. Hvad betyder det cirka over 180 km?",
  ["Flere minutter hurtigere", "Mindre end et sekund", "Præcis 20 minutter – et minut for hver watt", "Ingen forskel"],
  "Ved 40 km/t svarer 20 watt omtrent til 1 km/t. Over 180 km giver det flere minutter.");
Q("position", 3, "Effekten mod luft stiger med farten i tredje potens. Hvor mange gange mere effekt skal der til for at gå fra 30 til 36 km/t?",
  ["Ca. 1,7 gange", "Ca. 1,2 gange", "Ca. 2,5 gange", "Ca. 3,0 gange"],
  "(36/30)³ = 1,2³ ≈ 1,73.");
Q("position", 3, "Du sparer 1 minut pr. 40 km med en bedre position. Hvor meget sparer du på 180 km?",
  ["4 min 30 s", "3 min", "6 min", "1 min 30 s"],
  "180 ÷ 40 = 4,5. 4,5 × 1 minut = 4 minutter og 30 sekunder.");
Q("position", 3, "Luftmodstanden stiger med farten i anden potens. Hvor meget større er den ved 45 km/t end ved 30 km/t?",
  ["2,25 gange", "1,5 gange", "3,4 gange", "4,5 gange"],
  "(45/30)² = 1,5² = 2,25.");
REGNE = false;
Q("position", 3, "Hvorfor sparer en langsom rytter ofte flere minutter på en bedre position end en hurtig?",
  ["Rytteren er længere tid på ruten", "Fordi luftmodstanden er størst ved lav fart, hvor rytteren næsten står stille", "Fordi langsomme ryttere altid har dårligere cykler", "Fordi hurtige ryttere ikke kan blive mere aerodynamiske"],
  "Er du længere tid om ruten, sparer den samme procentvise gevinst flere minutter.");
Q("position", 3, "Hvorfor bruger mange proffer 'shoulder shrug' og smalle albuer?",
  ["Det mindsker frontarealet og leder luften omkring kroppen", "Fordi det giver plads til lungerne, så vejrtrækningen bliver lettere og dybere", "Fordi det er påkrævet", "For at kunne nå flasken"],
  "Små ændringer i overkroppen kan give mange watt – hvis de kan holdes.");
Q("position", 3, "Hvad betyder 'reach' på aerobøjlerne?",
  ["Den vandrette afstand fra sadel til albuepuder", "Hvor højt albuepuderne sidder over styret, målt fra rørets midte", "Hvor bredt bøjlerne står", "Hvor lange bøjlerne er"],
  "For lang reach giver rund ryg. For kort giver en sammenkrøllet overkrop.");
Q("position", 3, "Hvorfor er det vigtigt at kunne løbe godt efter at have ligget i aeroposition?",
  ["Hoftebøjerne har været forkortet i lang tid og skal åbnes", "Fordi aero gør benene længere", "Fordi aero gør dig mere sulten, så du skal spise mere i T2", "Det er ikke vigtigt"],
  "En meget lukket hofte kan give stive første kilometer på løbet. Mobilitet og brick-træning hjælper.");
R("position", 3, "Sæt trinnene i en enkel bikefit i rækkefølge.",
  ["Indstil klamperne under skoene", "Find sadelhøjden", "Find sadlens frem-tilbage-placering", "Indstil højde og længde på styret eller aerobøjlerne", "Test positionen på en længere tur"],
  "Start ved fødderne og arbejd dig op. Hver ændring kan påvirke de næste.");
Q("position", 3, "Hvorfor kan to ryttere med samme højde have brug for meget forskellige cykelstørrelser?",
  ["Forskellige proportioner – fx benlængde, armlængde og mobilitet", "Fordi den ene vejer mere, og cykler laves i størrelser efter kropsvægt", "Fordi cykler måles i vægt", "Det kan de ikke"],
  "Stack og reach skal passe til din krop – ikke kun til din højde.");
Q("position", 1, "Hvorfor skal klamperne under cykelskoene sidde rigtigt?",
  ["Forkert placering kan give smerter i knæ og fødder", "Fordi skoene ellers ikke kan bruges til at løbe i bagefter", "For at skoene ser pæne ud", "Det betyder ingenting"],
  "Klampernes vinkel og placering bestemmer, hvordan foden og knæet arbejder. Små justeringer kan fjerne smerter.");
Q("position", 1, "Hvad kan følelsesløse tæer på en lang tur være tegn på?",
  ["For stramme sko eller tryk under foden", "At du har cyklet for hurtigt, og at blodet derfor er løbet til hovedet", "At sadlen er for blød", "At du har drukket for meget"],
  "Løsn skoene lidt, og tjek klamper og indlæg. Fødderne hæver ofte på lange ture.");
Q("position", 2, "Hvad er en almindelig metode til at finde sadelhøjden?",
  ["Hælen på pedalen med strakt ben i bunden", "Sadlen skal være i samme højde som styret, uanset kropsbygning", "Sadlen skal være så høj som muligt", "Sadlen skal flugte med hoftebenet"],
  "Med hælen på pedalen og strakt ben bliver knæet let bøjet, når du træder med forfoden. Det er et godt startpunkt.");
Q("position", 2, "Hvorfor skal fødderne ofte have indlæg eller kiler i cykelskoene?",
  ["Fødder er forskellige, og de rette indlæg kan give en mere stabil fod og knæ", "Fordi det er påkrævet i Ironman", "For at gøre skoene tungere", "For at skoene kan flyde"],
  "Indlæg og kiler kan rette en fod, der vipper, så knæet bevæger sig mere lige op og ned.");
Q("position", 3, "Hvad betyder det, at en rytter har en 'tilted pelvis' (vippet bækken) i aeroposition?",
  ["Bækkenet ruller frem, så ryggen kan være flad", "Rytteren sidder skævt på sadlen, så den ene hofte hænger lavere end den anden hele tiden", "Rytteren sidder langt bagud", "Rytteren har en lav sadel"],
  "En flad ryg kommer fra et bækken, der ruller frem – ikke fra at bøje ryggen. Det kræver mobilitet og den rette sadel.");
Q("position", 3, "Hvorfor kan en bikefit med kun 'statiske' mål være utilstrækkelig?",
  ["Kroppen bevæger sig anderledes under belastning og træthed", "Fordi målene ændrer sig, når cyklen bliver vasket og smurt", "Fordi bikefittere ikke må måle", "Den er altid nok"],
  "En god bikefit ser rytteren træde – helst også efter en tid, når trætheden kommer.");
