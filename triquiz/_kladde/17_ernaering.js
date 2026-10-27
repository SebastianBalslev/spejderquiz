/* =====================================================================
   ERNÆRING OG ENERGI  (emne: "ernaering")
   ===================================================================== */
// Tegner en næringsdeklaration fra en pakke (fx gel eller bar).
const DEKL = (navn, linjer) => TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/>
  <rect x="30" y="8" width="140" height="124" rx="8" fill="#fff" stroke="#1b2530" stroke-width="2"/>
  <rect x="30" y="8" width="140" height="26" rx="8" fill="#e0662a"/><rect x="30" y="24" width="140" height="10" fill="#e0662a"/>
  <text x="100" y="26" font-size="13" font-weight="800" text-anchor="middle" fill="#fff">${navn}</text>
  <text x="40" y="50" font-size="9" font-weight="800" fill="#1b2530">Næringsindhold</text>
  ${linjer.map((l, i) => `<text x="40" y="${68 + i * 16}" font-size="10" fill="#1b2530">${l[0]}</text><text x="160" y="${68 + i * 16}" font-size="10" font-weight="800" text-anchor="end" fill="#1b2530">${l[1]}</text><path d="M40 ${72 + i * 16} L160 ${72 + i * 16}" stroke="#d6dde3"/>`).join("")}`);

// --- Bronze (let) ---
Q("ernaering", 1, "Hvad er kroppens vigtigste brændstof, når du træner hårdt?",
  ["Kulhydrat", "Protein, som kroppen henter fra musklerne", "Vitaminer", "Vand"],
  "Ved høj intensitet bruger musklerne mest kulhydrat. Fedt er vigtigst ved lav intensitet.");
Q("ernaering", 1, "Hvor gemmer kroppen kulhydrat?",
  ["Som glykogen i muskler og lever", "I knoglerne som en slags kalk", "I huden", "I blodet, hvor det omdannes til fedt og bliver der"],
  "Glykogenlagrene er begrænsede. Derfor skal man spise kulhydrat på lange ture.");
Q("ernaering", 1, "Hvad betyder det at 'gå sukkerkold' eller 'ramme muren'?",
  ["Kroppen er løbet tør for kulhydrat, og du bliver pludselig meget træt", "At du har spist så meget slik før start, at blodsukkeret er for højt og du bliver svimmel", "At du fryser i vandet", "At du har fået krampe"],
  "Det sker, når glykogenet er brugt op. Spis i tide – ikke først når du er sulten.");
Q("ernaering", 1, "Hvad er en energigel?",
  ["En lille pose med koncentreret kulhydrat", "En creme mod gnavesår", "En gel til håret", "En type sportsdrik med kun salt og mineraler"],
  "En gel indeholder typisk 20-30 g kulhydrat. Tag den med vand.");
Q("ernaering", 1, "Hvorfor skal man drikke vand til en energigel?",
  ["Det gør den lettere at optage og skåner maven", "Fordi gelen ellers stivner i maven og bliver til en hård klump", "For at fortynde koffeinen helt væk", "Det skal man ikke"],
  "En gel uden vand kan give maveproblemer. Tag den ved et depot.");
Q("ernaering", 1, "Hvornår bør du begynde at spise på en lang cykeltur?",
  ["Tidligt – fx efter 30-45 minutter", "Først når du føler dig helt tom og svimmel", "Efter turen", "Aldrig"],
  "Kroppen skal have energi, før lagrene er tomme. Spis lidt og ofte.");
Q("ernaering", 1, "Hvad er en god snack efter træning?",
  ["Noget med kulhydrat og protein, fx kakaomælk eller en sandwich", "Kun en kop sort kaffe", "Ingenting de næste fire timer, så kroppen forbrænder mere fedt i hvilen", "Kun vand"],
  "Kulhydrat fylder lagrene op, og protein hjælper musklerne med at reparere sig.");
Q("ernaering", 1, "Hvad er protein især vigtigt for?",
  ["At bygge og reparere muskler", "At give hurtig energi i en spurt", "At holde dig varm i vandet", "At gøre dig hurtigere i svømning"],
  "Protein findes i fx kød, fisk, æg, mejeriprodukter, bønner og linser.");
Q("ernaering", 1, "Hvad er en banan god til på en cykeltur?",
  ["Den giver let fordøjelig kulhydrat og lidt kalium", "Den giver meget protein, som musklerne bruger direkte som brændstof", "Den erstatter vand", "Den er god at sidde på"],
  "En banan giver ca. 25 g kulhydrat. Klassisk cykelmad!");
Q("ernaering", 1, "Hvorfor skal du ikke prøve en ny gel for første gang i et løb?",
  ["Maven kan reagere dårligt på den", "Fordi nye gels er forbudt i løb, indtil arrangøren har godkendt dem", "Fordi den smager for godt", "Det kan du godt"],
  "Test al ernæring i træningen først.");
Q("ernaering", 1, "Hvad er 'træn maven'?",
  ["At vænne maven til at optage mad og drikke under træning", "At lave mavebøjninger efter hver tur for at få en stærk core", "At spise mindre", "At faste"],
  "Maven kan trænes til at tåle mere kulhydrat. Øv det på lange ture.");
Q("ernaering", 1, "Hvad sker der, hvis du træner meget og spiser for lidt over lang tid?",
  ["Du kan blive træt, syg oftere og få skader", "Du bliver altid hurtigere, fordi du bliver lettere og har mindre at slæbe på", "Ingenting", "Du bliver stærkere"],
  "For lidt energi i forhold til træningen (RED-S) kan skade både præstation og helbred.");
Q("ernaering", 1, "Hvad er en god morgenmad før et langt træningspas?",
  ["Havregryn, brød eller frugt – noget med kulhydrat, du kender", "En meget fed morgenmad med bacon og pølser lige før, fordi fedt holder længst", "Ingenting", "Kun kaffe"],
  "Spis 2-3 timer før, så maven har tid til at fordøje.");
Q("ernaering", 1, "Hvad er 'fibre' i maden – og hvorfor skal man passe på med dem lige før et løb?",
  ["De er sunde, men kan give maveproblemer under løb", "De giver ekstra energi i spurten, fordi de optages lynhurtigt", "De er farlige altid", "De gør dig tungere i vandet"],
  "Mange spiser fiberfattigt dagen før og morgenen før løbet.");
Q("ernaering", 1, "Hvorfor kan det være godt at spise varieret?",
  ["Kroppen får alle de vitaminer og mineraler, den har brug for", "Fordi det gør maden billigere", "Fordi man ikke må spise det samme to dage i træk", "Det er ligegyldigt"],
  "Masser af grøntsager, frugt, fuldkorn og protein dækker de fleste behov.");
Q("ernaering", 1, "Hvad er et 'depot' i triathlon?",
  ["En station, hvor du kan få vand, sportsdrik og mad", "Et sted, hvor man opbevarer cykler og våddragter natten før løbet", "Et toilet", "En startlinje"],
  "Depoterne ligger på cykel- og løberuten. Kend dem på forhånd.");
REGNE = true;
Q("ernaering", 1, "En gel har 25 g kulhydrat. Du tager 3 gels. Hvor meget kulhydrat er det?",
  ["75 g", "50 g", "100 g", "60 g"],
  "3 × 25 = 75 g.");
Q("ernaering", 1, "Du vil have 60 g kulhydrat i timen i 2 timer. Hvor mange gram i alt?",
  ["120 g", "60 g", "90 g", "180 g"],
  "60 × 2 = 120 g.");
Q("ernaering", 1, "1 g kulhydrat giver ca. 4 kcal. Hvor mange kcal er 50 g kulhydrat?",
  ["200 kcal", "150 kcal", "250 kcal", "450 kcal"],
  "50 × 4 = 200 kcal.");
QM("ernaering", 1, "Hvor meget kulhydrat er der i 2 af disse gels?",
  ["44 g", "22 g", "66 g", "40 g"],
  "Én gel har 22 g kulhydrat. 2 × 22 = 44 g.",
  DEKL("ENERGIGEL", [["Energi", "90 kcal"], ["Kulhydrat", "22 g"], ["– heraf sukker", "10 g"], ["Natrium", "50 mg"]]));
REGNE = false;
Q("ernaering", 1, "Hvorfor kan for meget fed mad lige før træning give problemer?",
  ["Fedt fordøjes langsomt og kan give en tung mave", "Fordi fedt sætter sig i armene og giver krampe, når du svømmer", "Fordi det gør dig hurtigere", "Det kan det ikke"],
  "Gem de fede måltider til efter træningen.");
Q("ernaering", 1, "Hvorfor er det vigtigt at spise nok kulhydrat i en periode med meget træning?",
  ["Så du kan træne godt og restituere til næste pas", "Fordi kulhydrat bygger muskler hurtigere end protein og gør dig stærkere", "Fordi man ikke må spise protein", "Det er ikke vigtigt"],
  "Kulhydratbehovet stiger med træningsmængden.");
Q("ernaering", 1, "Hvad kan cola være godt til sidst i et langt løb?",
  ["Hurtigt sukker og lidt koffein", "Det giver protein til musklerne", "Det fjerner krampe med det samme", "Ingenting"],
  "Mange depoter serverer cola sidst i lange løb. Afprøv det i træning.");

// --- Sølv (mellem) ---
Q("ernaering", 2, "Hvor meget kulhydrat kan kroppen typisk optage i timen fra ét slags sukker (glukose)?",
  ["Ca. 60 g", "Ca. 10 g", "Ca. 200 g", "Ubegrænset"],
  "Med kun glukose er grænsen omkring 60 g i timen. Blandet med fruktose kan man optage mere.");
Q("ernaering", 2, "Hvorfor blander mange sportsprodukter glukose og fruktose?",
  ["De optages via forskellige transportører, så du kan optage mere kulhydrat i timen", "Fordi fruktose smager sødere", "Fordi glukose er forbudt", "For at give mere protein"],
  "Med en blanding kan mange optage 90 g i timen eller mere.");
Q("ernaering", 2, "Hvor meget energi har kroppen ca. lagret som glykogen?",
  ["Ca. 1.500-2.000 kcal", "Ca. 50.000 kcal", "Ca. 100 kcal", "Ca. 20.000 kcal"],
  "Det rækker til et par timers hård træning. Fedtlagrene er langt større.");
Q("ernaering", 2, "Hvorfor kan du ikke bare leve af fedtlagrene i en Ironman?",
  ["Fedt forbrændes for langsomt til at dække høj intensitet alene", "Fordi fedt er forbudt i Ironman", "Fordi fedtlagrene er for små hos de fleste atleter og er brugt op efter en time", "Det kan du godt"],
  "Selv slanke atleter har fedt nok til mange dage – men fedt giver ikke energi hurtigt nok.");
Q("ernaering", 2, "Hvor meget protein har en udholdenhedsatlet typisk brug for om dagen?",
  ["Ca. 1,2-2,0 g pr. kg kropsvægt", "Ca. 0,1 g pr. kg", "Ca. 5 g pr. kg", "Ingen protein"],
  "Fordel proteinet over dagens måltider – fx 20-40 g pr. måltid.");
Q("ernaering", 2, "Hvad er 'kulhydratladning'?",
  ["At spise ekstra meget kulhydrat 1-2 dage før en lang distance", "At spise kulhydrat under løbet", "At undgå kulhydrat i en uge, så kroppen bliver tvunget til at brænde fedt i løbet", "At spise kun protein"],
  "Typisk 8-12 g kulhydrat pr. kg pr. dag i 36-48 timer. Kun relevant for løb over ca. 90 minutter.");
Q("ernaering", 2, "Hvad er RED-S?",
  ["Relativ energimangel i sport – når man spiser for lidt i forhold til træningen", "En rød sportsdrik", "En regel om, hvor tæt depoterne skal ligge på ruten", "En type gel"],
  "RED-S kan påvirke hormoner, knogler, immunforsvar og præstation. Søg hjælp, hvis du er i tvivl.");
Q("ernaering", 2, "Hvorfor er jern vigtigt for udholdenhedsatleter?",
  ["Jern bruges til at transportere ilt i blodet", "Jern gør musklerne tungere", "Jern giver hurtig energi til musklerne i spurter og op ad bakke", "Det er ikke vigtigt"],
  "Jernmangel giver træthed og dårligere præstation. Især kvinder og vegetarer kan være i risiko.");
Q("ernaering", 2, "Hvorfor tager mange koffein før et løb?",
  ["Det kan forbedre udholdenhed og sænke oplevet anstrengelse", "Det giver masser af kulhydrat", "Det fjerner behovet for at drikke, fordi kroppen holder bedre på væsken", "Det er forbudt"],
  "Typisk 3-6 mg pr. kg ca. en time før. Afprøv det i træning.");
Q("ernaering", 2, "Hvad er en almindelig fejl i ernæringen under en halv Ironman?",
  ["At spise for lidt på cyklen og gå sukkerkold på løbet", "At spise for meget protein på cyklen", "At drikke for lidt kaffe", "At spise for mange grøntsager i dagene før og så mangle protein på løbsdagen"],
  "Cyklen er det bedste sted at spise. Det betaler sig på løbet.");
Q("ernaering", 2, "Hvorfor kan fast føde (bar, banan) være lettere på cyklen end på løbet?",
  ["Maven bliver rystet mindre på cyklen", "Fordi man ikke må spise på løbet", "Fordi bars kun virker, når benene arbejder i en rund bevægelse", "Det kan den ikke"],
  "På løbet bruger mange gels og drik, fordi fast føde kan give maveproblemer.");
Q("ernaering", 2, "Hvad betyder 'low carb – high fat' (LCHF) for præstationen i højt tempo?",
  ["Mange studier viser dårligere præstation i højt tempo", "Det gør altid atleter hurtigere, fordi fedt giver mere energi pr. gram", "Det har ingen effekt", "Det giver mere kulhydrat"],
  "Kroppen bliver bedre til at forbrænde fedt, men dårligere til at bruge kulhydrat i høj fart.");
Q("ernaering", 2, "Hvorfor er 'restitutionsvinduet' efter træning vigtigt, hvis du træner igen samme dag?",
  ["Glykogen fyldes hurtigere op, når du spiser kulhydrat tidligt efter træning", "Fordi musklerne lukker helt af for næring efter 30 minutter og først åbner igen dagen efter", "Fordi du ellers bliver diskvalificeret", "Det er ikke vigtigt"],
  "Har du et døgn til næste pas, betyder timingen mindre end den samlede mængde.");
Q("ernaering", 2, "Hvorfor kan rødbedejuice være populær hos nogle udholdenhedsatleter?",
  ["Nitrat kan give lidt bedre udnyttelse af ilten", "Fordi den giver meget protein", "Fordi den farver tisset rødt", "Den er forbudt"],
  "Effekten er lille og varierer – størst hos mindre trænede. (Ja, tisset kan blive rødt.)");
Q("ernaering", 2, "Hvorfor kan du få maveproblemer, hvis du drikker for koncentreret sportsdrik?",
  ["For meget sukker trækker vand ind i tarmen og kan give diarré", "Fordi sportsdrik er giftig", "Fordi den er for kold og giver maven krampe", "Det kan du ikke"],
  "Følg blandingsforholdet. 6-8 % kulhydrat er en almindelig sportsdrik.");
Q("ernaering", 2, "Hvad er 'glykæmisk indeks' (GI)?",
  ["Hvor hurtigt en fødevare får blodsukkeret til at stige", "Hvor mange kalorier en fødevare har pr. 100 gram", "Hvor meget protein der er", "Hvor meget fedt der er"],
  "Højt GI giver hurtig energi – godt under løb. Lavt GI giver mere jævn energi i hverdagen.");
REGNE = true;
Q("ernaering", 2, "Du vejer 65 kg og vil spise 1,6 g protein pr. kg om dagen. Hvor mange gram er det?",
  ["104 g", "65 g", "130 g", "96 g"],
  "65 × 1,6 = 104 g.");
Q("ernaering", 2, "Du vil have 80 g kulhydrat i timen i 3 timer på cyklen. Hver gel har 25 g, og sportsdrikken giver 30 g pr. flaske. Du drikker 1 flaske i timen. Hvor mange gels skal du bruge?",
  ["6 gels", "4 gels", "8 gels", "10 gels"],
  "Pr. time: 80 − 30 = 50 g fra gels = 2 gels. 3 timer × 2 = 6 gels.");
QM("ernaering", 2, "Du spiser 1,5 af disse bars. Hvor meget kulhydrat får du?",
  ["63 g", "42 g", "84 g", "56 g"],
  "1,5 × 42 g = 63 g kulhydrat.",
  DEKL("ENERGIBAR", [["Energi", "230 kcal"], ["Kulhydrat", "42 g"], ["Protein", "5 g"], ["Fedt", "4 g"]]));
Q("ernaering", 2, "Du vejer 75 kg og vil kulhydratlade med 10 g pr. kg. Hvor mange gram kulhydrat pr. dag?",
  ["750 g", "500 g", "1.000 g", "600 g"],
  "75 × 10 = 750 g – det er meget mad. Saft, ris, brød og pasta hjælper.");
REGNE = false;
R("ernaering", 2, "Sæt en god dag op til et langt løb i rækkefølge.",
  ["Kulhydratrig frokost dagen før", "Tidlig, kendt aftensmad med lidt fibre", "Morgenmad 2-3 timer før start", "Lidt sportsdrik eller en gel kort før start", "Første energi efter 20-30 minutter på cyklen"],
  "Kendte måltider og god timing giver fyldte lagre og en rolig mave.");
Q("ernaering", 2, "Hvorfor tager vegetarer og veganere ofte ekstra hensyn til B12 og jern?",
  ["De findes mest i animalske fødevarer", "Fordi grøntsager er forbudt", "Fordi grøntsager med B12 og jern smager dårligt og derfor sjældent bliver spist", "Det behøver de ikke"],
  "Planlæg kosten, og tal med en læge eller diætist om evt. tilskud.");

// --- Guld (svær) ---
Q("ernaering", 3, "Hvor meget kulhydrat i timen anbefales ofte til en Ironman for veltrænede atleter med trænet mave?",
  ["Ca. 90 g eller mere", "Ca. 10-20 g", "Ca. 30 g", "Ingen – fedt er nok"],
  "Mange eliteatleter ligger i dag på 90-120 g i timen. Det kræver en trænet mave.");
Q("ernaering", 3, "Hvorfor kan meget høje kulhydratmængder (fx 120 g/t) give maveproblemer hos utrænede?",
  ["Tarmens optagelse er begrænset, og ikke-optaget sukker giver ubehag", "Fordi sukker gør dig dehydreret med det samme", "Fordi maven bliver for lille", "Det kan de ikke"],
  "Maven kan trænes – byg langsomt op i træningen.");
Q("ernaering", 3, "Hvad er 'train low' (træne med lave glykogenlagre)?",
  ["En metode, hvor nogle pas trænes med lave lagre for at forbedre fedtforbrænding og tilpasning", "At træne med lav puls", "At træne i lav højde, fx under havets overflade i Holland", "At træne uden at drikke"],
  "Metoden er omdiskuteret og bør bruges sparsomt – aldrig før intervaller eller løb.");
Q("ernaering", 3, "Hvorfor kan 'fuel for the work required' være en god tommelfingerregel?",
  ["Spis mere kulhydrat på hårde/lange dage og mindre på lette dage", "Spis altid det samme hver dag", "Spis kun efter træning, så kroppen lærer at klare sig med sine egne lagre", "Spis aldrig kulhydrat"],
  "Ernæringen tilpasses træningen. Det giver energi til de vigtige pas.");
Q("ernaering", 3, "Hvad sker der med fedtforbrændingen, når intensiteten stiger?",
  ["Andelen af fedt falder, og andelen af kulhydrat stiger", "Fedtforbrændingen stiger altid lineært med pulsen, så du forbrænder mest fedt i en spurt", "Den er uændret", "Kroppen stopper med at bruge kulhydrat"],
  "Ved høj intensitet bruger musklerne mest kulhydrat, fordi det giver energi hurtigere.");
Q("ernaering", 3, "Hvad er 'FatMax'?",
  ["Den intensitet, hvor du forbrænder mest fedt i absolutte gram pr. time", "Den maksimale mængde fedt, du må spise om dagen ifølge sundhedsmyndighederne", "En type fedtgel", "Din maksimalpuls"],
  "FatMax ligger typisk ved moderat intensitet, ca. zone 2.");
Q("ernaering", 3, "Hvorfor er 'kalorie-tælling' i en Ironman sjældent målet i sig selv?",
  ["Optagelsen af kulhydrat er flaskehalsen – du kan ikke erstatte alt, du forbrænder", "Fordi kalorier ikke findes under træning", "Fordi alle Ironman-atleter spiser 10.000 kcal", "Det er altid målet"],
  "Du forbrænder ofte 600-900 kcal i timen, men kan kun optage ca. 360-480 kcal kulhydrat.");
Q("ernaering", 3, "Hvorfor kan proteintilskud være overflødige for mange atleter?",
  ["Almindelig, varieret kost dækker ofte behovet", "Fordi protein er forbudt", "Fordi muskler ikke bruger protein, men kun kulhydrat og fedt", "De er altid nødvendige"],
  "Tilskud er praktiske, men ikke nødvendige, hvis maden er god.");
Q("ernaering", 3, "Hvad betyder 'periodiseret ernæring'?",
  ["At tilpasse kosten til træningens faser og mål", "At spise på faste tidspunkter hver dag, uanset om du træner eller ej", "At faste hver anden dag", "At spise samme mad hele året"],
  "Fx mere kulhydrat i hårde perioder og på konkurrencedage.");
Q("ernaering", 3, "Hvad er en almindelig dosis koffein, som forskning viser kan forbedre udholdenhed?",
  ["Ca. 3-6 mg pr. kg kropsvægt", "Ca. 50 mg pr. kg", "Ca. 0,1 mg pr. kg", "Koffein har ingen effekt"],
  "For en 70 kg atlet svarer 3 mg/kg til ca. 210 mg – et par kopper kaffe.");
Q("ernaering", 3, "Hvorfor skal kvinder især være opmærksomme på RED-S og menstruation?",
  ["Udebleven menstruation kan være tegn på energimangel og skade knoglerne", "Fordi kvinder ikke må træne hårdt", "Fordi menstruation giver mere energi, så kvinder kan spise mindre i de perioder", "Det skal de ikke"],
  "Søg hjælp hos læge eller sportsdiætist, hvis menstruationen udebliver.");
REGNE = true;
Q("ernaering", 3, "Du forbrænder 750 kcal i timen og optager 90 g kulhydrat i timen. Hvor stor del af forbrændingen dækker du?",
  ["Ca. 48 %", "Ca. 25 %", "Ca. 75 %", "Ca. 100 %"],
  "90 g × 4 kcal = 360 kcal. 360 ÷ 750 = 0,48 = 48 %.");
Q("ernaering", 3, "Du vejer 70 kg og vil tage 3 mg koffein pr. kg. En gel har 75 mg. Hvor mange gels giver den dosis?",
  ["2,8 gels – altså ca. 3", "2 gels – det er altid nok", "4 gels", "1 gel"],
  "70 × 3 = 210 mg. 210 ÷ 75 = 2,8.");
Q("ernaering", 3, "Du vil have 90 g kulhydrat i timen i 5,5 timer på en Ironman-cykel. Hvor meget kulhydrat i alt?",
  ["495 g", "450 g", "540 g", "405 g"],
  "90 × 5,5 = 495 g.");
QM("ernaering", 3, "Sportsdrikken har denne deklaration pr. 500 ml. Hvor mange ml skal du drikke for at få 60 g kulhydrat?",
  ["750 ml", "500 ml", "1.000 ml", "600 ml"],
  "40 g pr. 500 ml = 8 g pr. 100 ml. 60 g ÷ 8 g = 7,5 × 100 ml = 750 ml.",
  DEKL("SPORTSDRIK 500 ml", [["Energi", "160 kcal"], ["Kulhydrat", "40 g"], ["Natrium", "400 mg"], ["Koffein", "0 mg"]]));
Q("ernaering", 3, "Du skal bruge 1,2 g kulhydrat pr. kg i timen de første 4 timer efter et hårdt pas. Du vejer 60 kg. Hvor meget pr. time?",
  ["72 g", "60 g", "84 g", "48 g"],
  "60 × 1,2 = 72 g kulhydrat pr. time.");
REGNE = false;
Q("ernaering", 3, "Hvorfor kan 'mouth rinse' med sportsdrik forbedre præstationen en smule – selv uden at sluge?",
  ["Receptorer i munden signalerer kulhydrat til hjernen og mindsker oplevet anstrengelse", "Fordi kulhydratet optages direkte gennem tænderne og tandkødet og går lige i blodet", "Fordi det fjerner tørst", "Det kan det ikke"],
  "Effekten ses især i korte, hårde løb (ca. 1 time) og ved tom mave.");
R("ernaering", 3, "Sæt en god restitutionsplan efter et hårdt pas i rækkefølge.",
  ["Drik og spis noget med kulhydrat og protein inden for 30-60 min", "Få tørt tøj på og hold dig varm", "Spis et ordentligt måltid inden for et par timer", "Drik jævnt resten af dagen", "Sov godt om natten"],
  "Energi, protein, væske og søvn – i den rækkefølge – er restitutionens grundsten.");
Q("ernaering", 3, "Hvorfor kan du få 'løbemave' (diarré) under løb?",
  ["Blodet går fra tarmen til musklerne, og rystelserne belaster maven", "Fordi man spiser for lidt fibre", "Fordi man har drukket for lidt kaffe om morgenen, så maven ikke er kommet i gang", "Det sker aldrig"],
  "Fiberfattig mad før løb, trænet mave og nok væske hjælper.");
Q("ernaering", 1, "Hvorfor er det smart at have lidt mad med på en lang træningstur, selvom du ikke er sulten?",
  ["Sulten kommer ofte først, når energien allerede er ved at slippe op", "Fordi man ellers ikke må træne i en klub", "For at have noget at give væk", "Det er ikke smart"],
  "Spis før du bliver sulten. Så holder du energien jævn.");
Q("ernaering", 1, "Hvad er 'sportsdrik'?",
  ["Drik med kulhydrat og salt, der giver både energi og væske", "Almindeligt vand fra hanen i en sportsflaske", "En energidrik med meget koffein", "Mælk"],
  "Sportsdrik er især nyttig på ture over en time og i varme.");
Q("ernaering", 2, "Hvorfor kan for meget fruktose alene give maveproblemer?",
  ["Fruktose optages langsommere og kan give gas og løs mave", "Fordi fruktose er forbudt i løb", "Fordi fruktose er salt", "Det kan det ikke"],
  "Derfor kombineres fruktose med glukose i de fleste sportsprodukter.");
Q("ernaering", 2, "Hvorfor kan et stort glas mælk eller kakaomælk være en god restitutionsdrik?",
  ["Det giver både kulhydrat, protein og væske", "Fordi mælk er forbudt i træning og derfor sparet op", "Fordi mælk giver koffein", "Det kan det ikke"],
  "Kakaomælk er billig og effektiv efter træning.");
Q("ernaering", 2, "Hvor lang tid før et løb bør du spise et større måltid?",
  ["Ca. 2-4 timer før", "5 minutter før start, så energien er helt frisk", "Mindst 12 timer før", "Under løbet"],
  "Maven skal nå at fordøje. Et lille snack kan tages 30-60 minutter før.");
Q("ernaering", 3, "Hvorfor kan en atlet have brug for mere salt (natrium) i sportsdrikken i varme?",
  ["Sved indeholder natrium, og store tab kan påvirke væskebalancen", "Fordi salt giver hurtig energi", "Fordi salt sænker pulsen", "Det kan de ikke"],
  "Natriumtabet i sved varierer meget fra person til person.");
Q("ernaering", 3, "Hvad er 'gut training' i praksis?",
  ["Gradvist at øge kulhydrat- og væskeindtaget på lange træningspas", "At faste i 24 timer før hver lang tur", "At drikke kun vand i en måned", "At spise meget fiber før løb"],
  "Øg fx fra 40 til 60 til 90 g/t over flere uger. Maven tilpasser sig.");
Q("ernaering", 3, "Hvorfor kan hydrogel-sportsdrikke være populære?",
  ["De kan give en blidere passage i maven ved høje kulhydratmængder – effekten er omdiskuteret", "Fordi de giver mere protein", "Fordi de er forbudt", "Fordi de er gratis"],
  "Nogle atleter tåler dem godt. Forskningen er ikke entydig.");
REGNE = true;
Q("ernaering", 3, "En 70.3-cykeltur tager 2 t 40 min. Du vil have 75 g kulhydrat i timen. Hvor meget i alt?",
  ["200 g", "150 g", "225 g", "180 g"],
  "2 t 40 min = 2,667 t. 2,667 × 75 = 200 g.");
Q("ernaering", 3, "Du vejer 80 kg og spiser 2 g kulhydrat pr. kg 3 timer før start. Hvor mange gram er det?",
  ["160 g", "120 g", "200 g", "80 g"],
  "80 × 2 = 160 g kulhydrat – fx havregrød, brød, banan og juice.");
REGNE = false;
Q("ernaering", 3, "Hvorfor er det svært at spise på løbet i en Ironman sammenlignet med cyklen?",
  ["Rystelser, højere puls og blod væk fra maven gør fordøjelsen sværere", "Fordi depoterne kun har vand på løbet", "Fordi det er forbudt at spise på løbet", "Det er lettere"],
  "Mange skifter til gels, cola og sportsdrik på løbet.");
