/* =====================================================================
   LØBETEKNIK  (emne: "loebeteknik")
   ===================================================================== */
// Tegner en løber set fra siden (løber mod højre).
// v: "god" | "lang" (overskridt skridt) | "hofte" (knækket i hoften) | "bagover" | "hoved" (kigger ned) | "spaendt" (løftede skuldre, knyttede hænder)
const LOEBER = (v) => {
  const P = { hoved: [106, 22], skulder: [103, 38], hofte: [98, 72], fk: [116, 88], ff: [108, 122], bk: [88, 96], bf: [70, 100],
    fa: [112, 52], fh: [122, 44], ba: [92, 54], bh: [88, 66] };
  if (v === "lang") { P.fk = [124, 94]; P.ff = [140, 120]; }
  if (v === "hofte") { P.hofte = [92, 72]; P.skulder = [116, 44]; P.hoved = [126, 32]; P.fa = [124, 58]; P.fh = [134, 52]; P.ba = [106, 60]; P.bh = [100, 72]; }
  if (v === "bagover") { P.skulder = [88, 40]; P.hoved = [82, 25]; P.fa = [104, 50]; P.fh = [114, 44]; P.ba = [84, 52]; P.bh = [80, 64]; }
  if (v === "hoved") { P.hoved = [113, 38]; P.fa = [112, 56]; P.fh = [124, 58]; }
  if (v === "spaendt") { P.skulder = [103, 34]; P.fa = [110, 46]; P.fh = [116, 34]; P.ba = [96, 48]; P.bh = [98, 40]; }
  const L = (a, b, w) => `<path d="M${a} L${b}" stroke-width="${w}"/>`;
  return TEGNING(`<rect width="200" height="140" fill="#eaf1f5"/><rect y="124" width="200" height="16" fill="#c9b79a"/>
    <g stroke="#0f3b5f" stroke-linecap="round" stroke-linejoin="round" fill="none">
      ${L(P.hofte, P.bk, 7)}${L(P.bk, P.bf, 6)}${L(P.skulder, P.ba, 5)}${L(P.ba, P.bh, 4)}</g>
    <g stroke="#1d6fa5" stroke-linecap="round" stroke-linejoin="round" fill="none">
      ${L(P.hofte, P.skulder, 9)}${L(P.skulder, P.hoved, 5)}${L(P.hofte, P.fk, 7)}${L(P.fk, P.ff, 6)}${L(P.skulder, P.fa, 5)}${L(P.fa, P.fh, 4)}</g>
    ${v === "spaendt" ? `<circle cx="${P.fh[0]}" cy="${P.fh[1]}" r="4" fill="#1d6fa5"/>` : ""}
    <path d="M${P.ff[0] - 4} ${P.ff[1] + 2} L${P.ff[0] + 8} ${P.ff[1] + 2}" stroke="#e0662a" stroke-width="4" stroke-linecap="round"/>
    <circle cx="${P.hoved[0]}" cy="${P.hoved[1]}" r="9" fill="#e0662a" stroke="#1b2530" stroke-width="1.5"/>
    <path d="M${P.hofte[0]} 124 L${P.hofte[0]} 130" stroke="#7a6a50" stroke-width="2" stroke-dasharray="2 2"/>`);
};

// --- Bronze (let) ---
Q("loebeteknik", 1, "Hvordan skal overkroppen være, når du løber?",
  ["Rank og let foroverlænet fra anklerne", "Krummet forover fra hoften, så tyngden trækker dig frem", "Lænet langt tilbage", "Drejet til siden"],
  "Tænk 'høj og let'. En let fremadlæning kommer fra anklerne – ikke fra et knæk i hoften.");
Q("loebeteknik", 1, "Hvordan skal armene bevæge sig, når du løber?",
  ["Frem og tilbage med ca. 90° i albuen", "På tværs foran kroppen, så skuldrene drejer med", "Helt stille ned langs siden", "Over hovedet"],
  "Armene holder rytmen og balancen. Svinger de på tværs, vrider overkroppen sig og koster energi.");
Q("loebeteknik", 1, "Hvordan skal skuldrene være, når du løber?",
  ["Afslappede og nede", "Trukket højt op mod ørerne", "Skubbet langt frem", "Drejet bagud"],
  "Spændte skuldre bruger energi og stivner nakken. Ryst dem løs, hvis du mærker, de kryber op.");
Q("loebeteknik", 1, "Hvor skal du kigge hen, når du løber?",
  ["Fremad, 10-20 meter foran dig", "Ned på dine egne fødder, så du ser hvert fodisæt", "Op i himlen", "Tilbage efter de andre"],
  "Blikket frem holder hovedet og nakken i en god stilling.");
Q("loebeteknik", 1, "Hvad betyder det at 'overskride' i løb?",
  ["At sætte foden langt foran kroppen", "At løbe for hurtigt i starten og gå død i slutningen", "At tage for korte skridt", "At løbe forbi en anden løber"],
  "Når foden lander langt foran, bremser du hvert skridt. Lad foden lande tættere under kroppen.");
QM("loebeteknik", 1, "Hvad er fejlen i løberens teknik?",
  ["Foden lander langt foran kroppen", "Løberen er knækket i hoften", "Løberen kigger ned", "Der er ingen fejl"],
  "Benet er strakt ud foran, og hælen lander langt foran hoften. Det bremser hvert eneste skridt.",
  LOEBER("lang"));
QM("loebeteknik", 1, "Hvordan er løberens holdning på tegningen?",
  ["God – rank krop og foden lander under kroppen", "Løberen er knækket i hoften", "Foden lander langt foran kroppen", "Løberen læner sig bagover"],
  "Kroppen er rank, foden lander tæt under hoften, og armene svinger frem og tilbage.",
  LOEBER("god"));
QM("loebeteknik", 1, "Hvad er fejlen i løberens holdning?",
  ["Løberen er knækket i hoften", "Foden lander langt foran kroppen", "Løberen læner sig bagover", "Der er ingen fejl"],
  "Når overkroppen falder frem fra hoften, sidder man 'på bagdelen'. Skub hoften frem og løb højt.",
  LOEBER("hofte"));
Q("loebeteknik", 1, "Hvad er kadence i løb?",
  ["Antal skridt pr. minut", "Antal kilometer pr. time", "Hvor langt hvert skridt er", "Hvor høj pulsen er"],
  "Mange gode løbere ligger omkring 170-180 skridt pr. minut, men det varierer med højde og fart.");
Q("loebeteknik", 1, "Hvad sker der typisk, hvis du øger kadencen lidt?",
  ["Skridtene bliver kortere, og foden lander tættere under kroppen", "Du bliver altid langsommere", "Du løber automatisk med længere skridt, fordi benene får mere fart, og derfor lander foden også længere foran", "Ingenting"],
  "Lidt højere kadence (5-10 %) kan mindske overskridning og belastning på knæ og hofter.");
Q("loebeteknik", 1, "Hvad er 'skipping' i løbetræning?",
  ["En hoppende øvelse med høje knæ og rytme", "At springe en træning over, når kroppen er træt", "At løbe baglæns", "At hoppe i tov"],
  "A-skips og B-skips træner koordination, knæløft og fodisæt.");
Q("loebeteknik", 1, "Hvad er 'stigningsløb' (strides)?",
  ["Korte løb på 60-100 m, hvor farten øges gradvist", "Lange løb op ad en bakke", "Løb på trapper", "Rolige ture i skoven"],
  "Strides gør benene hurtige og afslappede uden at være hårde. Gode efter et roligt løb.");
Q("loebeteknik", 1, "Hvad gør du med hænderne, når du løber?",
  ["Holder dem løse, som om du holder en kartoffelchips", "Knytter dem hårdt, så armene får mere kraft i svinget og driver dig frem", "Holder dem helt strakte", "Har dem i lommerne"],
  "Knyttede hænder spænder hele armen og skulderen. Hold dem løse.");
Q("loebeteknik", 1, "Hvordan løber du bedst op ad en bakke?",
  ["Kortere skridt, let foroverlænet og armene arbejder", "Lange skridt og lænet bagover", "Med hænderne skubbende på knæene hele vejen op til toppen", "Baglæns"],
  "Kortere skridt og aktive arme holder kadencen oppe. Hold indsatsen – ikke farten.");
Q("loebeteknik", 1, "Hvordan løber du bedst ned ad en bakke?",
  ["Korte, hurtige skridt og let foroverlænet", "Lange skridt og lænet bagover for at bremse", "Med stive ben", "Så langsomt som muligt"],
  "At læne sig bagover og bremse belaster knæene. Lad tyngdekraften hjælpe med hurtige fødder.");
Q("loebeteknik", 1, "Hvorfor er det godt at træne løbeteknik?",
  ["Bedre teknik bruger mindre energi og giver færre skader", "Fordi dommere giver point for flot stil", "Fordi dommerne i triathlon giver tidsbonus for en flot og ren løbestil", "Det er det ikke"],
  "Små forbedringer i teknik kan spare energi over mange kilometer – især efter en lang cykeltur.");
Q("loebeteknik", 1, "Hvor skal foden helst lande i forhold til kroppen?",
  ["Tæt under kroppens tyngdepunkt", "Langt foran kroppen", "Bag kroppen", "Ude til siden"],
  "Når foden lander under dig, bliver bremsen mindre, og du kan skubbe bedre fra.");
Q("loebeteknik", 1, "Hvad er 'høje knæ' som øvelse?",
  ["Løb på stedet eller fremad, hvor knæene løftes højt", "At løfte vægte med knæene", "At hoppe op på en kasse", "At ligge på ryggen på en måtte og løfte de strakte ben op og ned"],
  "Øvelsen træner hoftebøjerne og et aktivt knæløft.");
Q("loebeteknik", 1, "Hvad er 'hælspark' som øvelse?",
  ["Løb, hvor hælene sparkes op mod bagdelen", "At sparke en bold med hælen", "At lande hårdt på hælen i hvert skridt for at styrke knoglerne", "At gå på hælene"],
  "Hælspark træner et hurtigt 'tilbagetræk' af benet.");
Q("loebeteknik", 1, "Hvordan trækker du bedst vejret, når du løber roligt?",
  ["Roligt og rytmisk gennem både mund og næse", "Kun gennem næsen, også i spurten", "Holder vejret i op ad bakke", "Så hurtigt som muligt hele tiden, så musklerne får mest ilt"],
  "I roligt tempo kan du ofte snakke. Find en rolig rytme, fx 3 skridt ind og 3 ud.");
Q("loebeteknik", 1, "Hvad kan styrketræning gøre for din løbeteknik?",
  ["Gøre kroppen stærkere, så den kan holde formen, når du bliver træt", "Gøre dig tungere og langsommere", "Ingenting – løbere skal kun løbe, og styrketræning gør kun benene tunge og stive", "Gøre benene stive"],
  "Stærke hofter, ben og core holder teknikken stabil, også sidst i et løb.");
Q("loebeteknik", 1, "Hvad sker der ofte med teknikken, når du bliver træt?",
  ["Den falder fra – fx knæk i hoften og tunge skridt", "Den bliver altid bedre", "Den er uændret", "Du løber automatisk hurtigere, fordi kroppen vil i mål"],
  "Træthed gør teknikken sjusket. Tjek dig selv: høj krop, løse skuldre, hurtige fødder.");
Q("loebeteknik", 1, "Hvordan kan du se din egen løbeteknik?",
  ["Få nogen til at filme dig fra siden", "Kigge ned på fødderne, mens du løber", "Læse om det i en bog", "Det kan man ikke"],
  "En kort video i slowmotion afslører meget – fx overskridt skridt eller knæk i hoften.");
Q("loebeteknik", 1, "Hvad er 'løbeøkonomi'?",
  ["Hvor lidt energi du bruger ved en given fart", "Hvor meget dine løbesko koster pr. kilometer, før de skal skiftes", "Hvor mange løb du har råd til", "Hvor langt du kan løbe"],
  "God løbeøkonomi betyder, at du kan holde samme fart med mindre ilt og energi.");

// --- Sølv (mellem) ---
QM("loebeteknik", 2, "Hvad er fejlen i løberens holdning?",
  ["Løberen læner sig bagover", "Løberen er knækket i hoften", "Foden lander langt foran kroppen", "Der er ingen fejl"],
  "At læne sig tilbage bremser og giver hårde landinger. Læn dig let frem fra anklerne.",
  LOEBER("bagover"));
QM("loebeteknik", 2, "Hvad er fejlen i løberens holdning?",
  ["Løberen kigger ned og bøjer nakken", "Løberen læner sig bagover", "Løberen tager alt for korte skridt i forhold til sin højde", "Der er ingen fejl"],
  "Når hovedet hænger, falder skuldrene frem, og vejrtrækningen bliver tungere. Løft blikket.",
  LOEBER("hoved"));
QM("loebeteknik", 2, "Hvad er fejlen i løberens overkrop?",
  ["Skuldrene er trukket op, og hænderne er knyttede", "Løberen er knækket i hoften", "Foden lander langt foran kroppen, så hvert skridt bremser løberen", "Der er ingen fejl"],
  "Spændte skuldre og knyttede hænder koster energi. Ryst armene løs og sænk skuldrene.",
  LOEBER("spaendt"));
Q("loebeteknik", 2, "Hvad er A-skip?",
  ["En øvelse med højt knæløft og aktivt fodisæt under kroppen", "En øvelse, hvor du hopper fremad på ét ben ad gangen så langt du kan, først på højre og så på venstre ben", "En lang, rolig tur", "En strækøvelse for lægge"],
  "A-skip træner at løfte knæet og trække foden ned under kroppen med et kort, aktivt isæt.");
Q("loebeteknik", 2, "Hvad er forskellen på B-skip og A-skip?",
  ["I B-skip strækkes benet frem og 'klører' tilbage ned under kroppen", "B-skip laves baglæns", "B-skip laves helt uden armbevægelser, så du træner balancen i overkroppen, mens benene arbejder", "Der er ingen forskel"],
  "B-skip tilføjer en strækning af underbenet og et aktivt træk tilbage – som i det rigtige løbeskridt.");
Q("loebeteknik", 2, "Hvad er 'jordkontakttid'?",
  ["Hvor længe foden er i kontakt med jorden i hvert skridt", "Hvor mange timer du løber på asfalt", "Hvor længe du står ved et lyskryds", "Hvor lang tid en løbetur varer i alt, når pauserne ved lyskryds er trukket fra"],
  "Kortere kontakttid hænger ofte sammen med høj fart og god elasticitet.");
Q("loebeteknik", 2, "Hvad er 'vertikal oscillation'?",
  ["Hvor meget du hopper op og ned i hvert skridt", "Hvor meget du drejer i hoften", "Hvor mange gange du kigger op", "Hvor meget pulsen svinger"],
  "Lidt op-og-ned er nødvendigt, men for meget spilder energi, som ikke bringer dig fremad.");
Q("loebeteknik", 2, "Hvad er fordelen ved at løbe med 'forfodsisæt' frem for 'hælisæt'?",
  ["Ingen af dem er altid bedst – det vigtigste er, at foden lander tæt under kroppen", "Forfod er altid hurtigst for alle løbere", "Hælisæt er altid forbudt i konkurrence", "Hælisæt er altid bedst for knæene, fordi hælen er hård og tager stødet, før det når op til knæet og hoften"],
  "Mange eliteløbere lander på mellemfoden, men mange gode løbere lander på hælen. Overskridt skridt er det store problem.");
Q("loebeteknik", 2, "Hvorfor kan plyometrisk træning (hop) forbedre løbeøkonomien?",
  ["Sener og muskler bliver bedre til at lagre og frigive energi", "Fordi hop gør benene længere", "Fordi hop forbrænder mere fedt, så du bliver lettere og derfor løber mere økonomisk", "Det kan det ikke"],
  "Achillessenen fungerer som en fjeder. Hop og spring træner fjederen – men start forsigtigt.");
Q("loebeteknik", 2, "Hvorfor svinger armene mod hinanden i forhold til benene (højre arm frem med venstre ben)?",
  ["Det modvirker rotationen i overkroppen", "For at holde balancen, når du står på én fod i hvert skridt", "For at trække vejret bedre", "Det er en tilfældig vane"],
  "Armene udligner benenes rotation, så kroppen kan bevæge sig lige frem.");
Q("loebeteknik", 2, "Hvad er 'hoftedrop' (Trendelenburg) i løb?",
  ["At hoften falder ned på den modsatte side, når du står på ét ben", "At du falder over din egen fod", "At hoften er for høj", "At du løber med så lange skridt, at hoften synker ned mellem dem"],
  "Hoftedrop tyder på svage hoftemuskler (gluteus medius). Styrketræning kan hjælpe.");
Q("loebeteknik", 2, "Hvilke muskler er særligt vigtige at styrke for at holde løbeteknikken stabil?",
  ["Baller, hofter, lægge og core", "Kun biceps og bryst", "Kun nakkemusklerne", "Kun fingrene"],
  "Disse muskler holder bækkenet stabilt og gør afsættet stærkt.");
Q("loebeteknik", 2, "Hvorfor kan løb på blødt underlag (fx skovstier) være godt for teknikken?",
  ["Fødder og ankler træner balance og styrke", "Fordi man løber hurtigere i skoven", "Fordi man slet ikke kan overskride på stier, da rødderne tvinger dig til korte skridt", "Det er ikke godt"],
  "Ujævnt underlag træner de små muskler i fødder og ankler.");
Q("loebeteknik", 2, "Hvor meget bør du øge kadencen ad gangen, hvis du vil ændre den?",
  ["Ca. 5 %", "Ca. 30 %", "Ca. 50 %", "Det skal ske på én dag"],
  "Små ændringer er lettere at vænne sig til. Brug fx en metronom-app.");
Q("loebeteknik", 2, "Hvad er 'barfodsløb' godt til, hvis det gøres forsigtigt?",
  ["At styrke fødderne og mærke fodisættet", "At løbe hurtigere i konkurrence", "At undgå al slags skader, fordi foden selv dæmper stødene", "Ingenting"],
  "Kort barfodsløb på græs kan styrke foden. Start meget forsigtigt.");
Q("loebeteknik", 2, "Hvorfor er hurtige 'stigningsløb' en god idé efter et roligt løb?",
  ["De træner hurtig teknik uden at give meget træthed", "De erstatter intervaltræning helt", "De giver mest kondition", "De er en del af nedvarmningen og får pulsen hurtigere ned igen"],
  "4-6 stigningsløb på 80 m holder benene hurtige og teknikken skarp.");
Q("loebeteknik", 2, "Hvad er 'falde-øvelsen' (lean drill)?",
  ["At lade kroppen falde frem fra anklerne, indtil du må tage et skridt", "At øve sig i at falde uden at slå sig, hvis man snubler på en sti eller i en rundkørsel", "At lægge sig ned efter løb", "At løbe ned ad en bakke"],
  "Øvelsen lærer kroppen, hvordan en let fremadlæning fra anklerne føles.");
Q("loebeteknik", 2, "Hvorfor kan det være godt at løbe op ad bakke for teknikken?",
  ["Det tvinger dig til korte skridt, aktive arme og et kraftigt afsæt", "Fordi bakker er lettere end flad vej", "Fordi man ikke kan overskride op ad bakke", "Det er dårligt for teknikken"],
  "Bakkeløb bygger styrke og en god løbestil uden at belaste så meget som hurtigt løb på flad vej.");
Q("loebeteknik", 2, "Hvad sker der med armene, når du løber hurtigere?",
  ["De svinger kraftigere og hurtigere", "De holdes helt stille", "De går over hovedet", "De krydser foran kroppen"],
  "Benene følger armene. Hurtigere arme giver hurtigere ben.");
Q("loebeteknik", 2, "Hvorfor kan det koste energi at lande med strakt knæ?",
  ["Benet kan ikke dæmpe stødet, og det bremser fremdriften", "Fordi strakte knæ giver længere skridt", "Fordi et strakt knæ trækker blodet væk fra hjertet og ned i benene", "Det koster ikke energi"],
  "Et let bøjet knæ ved landing fungerer som en fjeder, der både dæmper og skubber fra.");
Q("loebeteknik", 2, "Hvad er 'cross-over gait'?",
  ["At fødderne lander over midterlinjen, som på en line", "At løbe med armene over kors foran brystet for at spare energi", "At skifte retning hurtigt", "At løbe baglæns"],
  "Fødderne lander på tværs af midten. Det kan tyde på svage hofter og give skader.");

// --- Guld (svær) ---
Q("loebeteknik", 3, "Hvad viser forskningen om at ændre en løbers naturlige fodisæt?",
  ["Det giver ikke automatisk færre skader eller bedre økonomi", "Forfodsisæt halverer altid antallet af skader, og hælisæt bør derfor forbydes i løbeklubber", "Hælisæt gør altid løbere hurtigere", "Det har man aldrig undersøgt"],
  "Ændringer kan flytte belastningen fra knæ til lægge og akillessener. Vær forsigtig og gradvis.");
Q("loebeteknik", 3, "Hvad er 'stivhed' (leg stiffness) i løb?",
  ["Benets evne til at modstå sammentrykning og fungere som en fjeder", "At benene er ømme dagen efter", "At man ikke kan bøje knæet", "At man har stramme muskler i baglåret, som skal strækkes ud efter hver tur"],
  "En passende stivhed giver effektiv energioverførsel. For meget kan give skader.");
Q("loebeteknik", 3, "Hvorfor øges kadencen naturligt, når farten stiger?",
  ["Både skridtlængden og skridtfrekvensen øges for at gå hurtigere", "Fordi skridtene bliver kortere og kortere, så benene må bevæge sig hurtigere for at følge med", "Fordi pulsen falder", "Det gør den ikke"],
  "Ved lav fart øges mest skridtlængden; ved høj fart stiger kadencen mere.");
Q("loebeteknik", 3, "Hvad er 'triple extension' i et løbeskridt?",
  ["Strækning i ankel, knæ og hofte i afsættet", "Tre skridt på hver fod", "At strække armene tre gange", "Tre forskellige kadencer"],
  "Et kraftigt afsæt kommer fra alle tre led. Det trænes fx med bakkeløb og styrketræning.");
Q("loebeteknik", 3, "Hvorfor kan 'løb efter cykel' give dårligere teknik?",
  ["Hoftebøjerne er stramme efter aeropositionen, og musklerne er trætte", "Fordi cyklen gør benene længere", "Fordi man har drukket så meget på cyklen, at maven er fyldt, og man ikke kan løbe frit med en rank og afslappet overkrop", "Det giver bedre teknik"],
  "Mange løber knækket i hoften de første kilometer. Træn bricks og tænk 'høj hofte'.");
Q("loebeteknik", 3, "Hvorfor tager mange eliteløbere mange skridt med kort jordkontakt?",
  ["Det udnytter senernes elasticitet og mindsker bremsen", "Fordi de har korte ben", "Fordi reglerne kræver det", "For at spare på skoene, så sålen holder til et helt maraton"],
  "Hurtige, elastiske skridt giver god økonomi ved høj fart.");
Q("loebeteknik", 3, "Hvad betyder det, at akillessenen 'lagrer energi'?",
  ["Den strækkes ved landing og giver energi tilbage i afsættet", "Den gemmer sukker fra maden, som musklerne kan bruge sidst i et løb", "Den bliver tykkere efter løb", "Den varmer foden"],
  "Senen fungerer som en fjeder og kan stå for en stor del af energien i hvert skridt.");
Q("loebeteknik", 3, "Hvorfor kan meget tung styrketræning med få gentagelser forbedre løbeøkonomien?",
  ["Musklerne bliver stærkere og stivere, så hvert skridt koster mindre", "Fordi det gør dig meget tungere", "Fordi tunge løft forbedrer konditionen og iltoptagelsen direkte, ligesom intervaller gør", "Det kan det ikke"],
  "Studier viser, at tung styrketræning kan forbedre løbeøkonomi uden at give meget muskelmasse.");
Q("loebeteknik", 3, "Hvad er 'pose method' og 'chi running'?",
  ["Løbestilsmetoder med fokus på fremadlæning og fodisæt under kroppen", "Typer af løbesko", "Navne på løbeløb", "Strækprogrammer for lægge"],
  "Begge metoder lægger vægt på at undgå overskridt skridt. Effekten på skader er omdiskuteret.");
Q("loebeteknik", 3, "Hvad er 'overpronation'?",
  ["At foden ruller meget indad efter landing", "At foden ruller udad", "At man løber for hurtigt", "At man løber med for lange skridt, så knæet strækkes for meget"],
  "Pronation er normal. Hvor meget der er 'for meget', og om det giver skader, er omdiskuteret.");
Q("loebeteknik", 3, "Hvorfor bør teknikændringer ske gradvist over uger og måneder?",
  ["Sener og knogler har brug for tid til at tilpasse sig den nye belastning", "Fordi det er reglerne i klubben", "Fordi man glemmer den nye teknik, hvis man lærer den for hurtigt, og så skal man starte forfra igen", "Det skal de ikke"],
  "Muskler tilpasser sig hurtigt, sener og knogler langsomt. For hurtige ændringer kan give skader.");
REGNE = true;
Q("loebeteknik", 3, "Du løber med kadence 170 i 40 minutter. Hvor mange skridt tager du?",
  ["6.800", "4.250", "8.500", "7.000"],
  "170 × 40 = 6.800 skridt.");
Q("loebeteknik", 3, "Din kadence er 160. Du vil øge den med 5 %. Hvad er den nye kadence?",
  ["168", "165", "170", "176"],
  "160 × 1,05 = 168.");
Q("loebeteknik", 3, "Du løber 1 km på 5:00 med kadence 175. Hvor mange skridt tager du på 1 km?",
  ["875", "700", "1.000", "950"],
  "5 minutter × 175 = 875 skridt.");
Q("loebeteknik", 3, "Du løber 1 km med 800 skridt. Hvor lang er hver skridtlængde i gennemsnit?",
  ["1,25 m", "0,80 m", "1,50 m", "1,00 m"],
  "1.000 m ÷ 800 = 1,25 m pr. skridt.");
Q("loebeteknik", 3, "Du løber 10 km med 1,10 m skridtlængde. Hvor mange skridt er det cirka?",
  ["9.100", "11.000", "8.200", "10.000"],
  "10.000 ÷ 1,10 ≈ 9.091 skridt.");
REGNE = false;
Q("loebeteknik", 3, "Hvad er en almindelig årsag til 'løberknæ' (smerter foran knæet)?",
  ["For hurtig øgning i mængde og evt. svage hofter", "For meget svømning", "For lav kadence på cyklen", "At man løber for langsomt"],
  "Overbelastning er den hyppigste årsag. Styrke i hofter og lår plus gradvis øgning hjælper.");
Q("loebeteknik", 3, "Hvorfor kan 'løbedrills' før et hårdt interval give bedre kvalitet?",
  ["De aktiverer nervesystemet og musklerne til hurtig bevægelse", "Fordi de erstatter opvarmningen", "Fordi de gør dig træt", "Det giver de ikke"],
  "Drills og stigningsløb efter opvarmning gør kroppen klar til høj fart.");
Q("loebeteknik", 3, "Hvad betyder det, at en løber har 'god løbeøkonomi' ved samme VO₂max?",
  ["Løberen bruger mindre ilt ved samme fart og kan derfor løbe hurtigere", "Løberen har dyrere sko", "Løberen løber færre kilometer", "Løberen har højere puls"],
  "To løbere med samme VO₂max kan have meget forskellig tid. Økonomien gør forskellen.");
Q("loebeteknik", 3, "Hvorfor svinger armene typisk lidt mere på tværs hos mange løbere end hos eliteløbere?",
  ["Svag core og stive skuldre giver mere rotation i overkroppen", "Fordi de har længere arme", "Fordi de løber i varme", "Det gør de ikke"],
  "Core-styrke og afslappede skuldre hjælper armene med at svinge frem og tilbage.");
R("loebeteknik", 2, "Sæt en god teknikøvelse-serie i rækkefølge før et intervalpas.",
  ["Rolig opvarmning 10-15 minutter", "Dynamisk mobilitet for hofter og ankler", "A-skips og B-skips", "Høje knæ og hælspark", "4 stigningsløb på 80 meter"],
  "Fra roligt til hurtigt: kroppen bliver varm, leddene bevægelige og musklerne klar til fart.");
R("loebeteknik", 3, "Sæt fasen i et løbeskridt i rækkefølge, startende med landing.",
  ["Foden lander under kroppen", "Kroppen passerer over foden (midtstand)", "Afsæt med strækning i ankel, knæ og hofte", "Benet svinger frem i luften", "Knæet løftes, og foden gør klar til næste landing"],
  "Et løbeskridt er en cyklus: landing, midtstand, afsæt, svingfase – og så forfra.");
Q("loebeteknik", 3, "Hvorfor kan løbebåndsløb give en lidt anderledes teknik end udendørs?",
  ["Båndet trækker underlaget, og der er ingen luftmodstand eller variation", "Fordi båndets gummi er blødere end asfalt, så du hopper højere og lander tungere i hvert skridt, og det ændrer hele rytmen", "Fordi man løber baglæns", "Der er ingen forskel"],
  "Mange sætter båndet på 1 % stigning for at efterligne luftmodstanden udendørs.");
Q("loebeteknik", 1, "Hvad kan du gøre, hvis du får sidestik?",
  ["Sænke farten og trække vejret dybt og roligt", "Løbe hurtigere, så det går væk af sig selv, når kroppen bliver varm", "Spise en banan", "Stoppe og lægge dig ned"],
  "Sidestik går ofte over, når du sænker tempoet og ånder dybt ud. Undgå store måltider lige før løb.");
Q("loebeteknik", 2, "Hvorfor laver mange løbere 'strides' barfodet på græs?",
  ["Fødderne arbejder mere og bliver stærkere", "Fordi skoene ellers slides for hurtigt, når de løber hurtigt", "For at løbe hurtigere end med sko", "Fordi græs er hårdere"],
  "Kort barfodsløb på blødt græs giver fødderne træning, som sko ellers tager over.");
Q("loebeteknik", 2, "Hvad kan en metronom-app hjælpe med i løb?",
  ["At holde en bestemt kadence", "At måle din puls og fortælle dig, hvornår du skal sætte farten ned", "At finde vej", "At tælle kalorier"],
  "Appen bipper i en fast rytme. Du lader fødderne følge bippet for at vænne dig til en ny kadence.");
Q("loebeteknik", 2, "Hvorfor er det vigtigt at være afslappet i ansigtet, når du løber hårdt?",
  ["Spændinger breder sig ofte til nakke og skuldre", "Fordi fotografer ellers tager grimme billeder af dig ved målstregen", "Fordi det sænker pulsen til hvileniveau", "Det er ikke vigtigt"],
  "Mange eliteløbere 'smiler' sig gennem hårde stykker for at slappe af. Det kan hjælpe.");
Q("loebeteknik", 3, "Hvad betyder 'hip extension' for løbefart?",
  ["Et kraftigt afsæt bag kroppen giver længere skridt uden at overskride", "At hoften løftes højt foran kroppen, så knæet når brystet i hvert skridt", "At hoften drejer meget fra side til side", "Det har ingen betydning"],
  "Når hoften strækkes godt bagud, kommer længden fra afsættet – ikke fra at række foden frem.");
Q("loebeteknik", 3, "Hvorfor kan sko med meget høj stødpude ændre løbeteknikken?",
  ["Foden mærker mindre af underlaget, og nogle lander hårdere", "Fordi de altid gør løberen hurtigere", "Fordi de tvinger alle til forfodsisæt", "Det kan de ikke"],
  "Kroppen tilpasser sig skoen. Skift gradvist, hvis du går fra minimale til meget dæmpede sko – eller omvendt.");
Q("loebeteknik", 3, "Hvorfor anbefales det at lave løbeøvelser efter en let opvarmning frem for helt kolde muskler?",
  ["Varme muskler og sener tåler hurtige, kraftige bevægelser bedre", "Fordi øvelserne er forbudt før kl. 10 i de fleste klubber", "Fordi de ellers ikke tæller", "Det betyder intet"],
  "Øvelser med hop og hurtige skridt belaster sener. Varm op først.");
