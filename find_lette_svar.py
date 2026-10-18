#!/usr/bin/env python3
"""Find spørgsmål i Spejderquiz, hvor det rigtige svar er let at gætte, fordi det er længst.

Brug:  python3 find_lette_svar.py index.html [--md rapport.md]

Et spørgsmål markeres, når det rigtige svar (altid det første) er det længste
og mindst 1.4 gange så langt som gennemsnittet af de forkerte svar.
Exit-kode 0, når det rigtige svar er det længste i under 35 % af spørgsmålene.
"""
import re
import sys

GRAENSE_ANDEL = 0.35
GRAENSE_FAKTOR = 1.4


def laes_streng(s, i):
    """Læs en JS-streng ("..." eller `...`) fra position i. Returnerer (tekst, dynamisk, ny_i)."""
    q = s[i]
    i += 1
    ud = []
    dynamisk = False
    while i < len(s):
        ch = s[i]
        if ch == "\\":
            ud.append(s[i + 1])
            i += 2
            continue
        if ch == q:
            return "".join(ud), dynamisk, i + 1
        if q == "`" and s.startswith("${", i):
            dynamisk = True
            dybde = 0
            while i < len(s):
                if s[i] == "{":
                    dybde += 1
                elif s[i] == "}":
                    dybde -= 1
                    if dybde == 0:
                        break
                i += 1
            ud.append("…")
            i += 1
            continue
        ud.append(ch)
        i += 1
    raise ValueError("Uafsluttet streng")


def spring_over(s, i):
    while i < len(s) and s[i] in " \t\r\n,":
        i += 1
    return i


def laes_vaerdi(s, i):
    """Læs en simpel JS-værdi. Returnerer (værdi, ny_i). Ukendte udtryk giver None."""
    i = spring_over(s, i)
    ch = s[i]
    if ch in "\"`'":
        tekst, dyn, i = laes_streng(s, i)
        return (None if dyn else tekst), i
    if ch == "[":
        i += 1
        liste = []
        while True:
            i = spring_over(s, i)
            if s[i] == "]":
                return liste, i + 1
            v, i = laes_vaerdi(s, i)
            liste.append(v)
    # tal, objekter og andre udtryk: spring frem til næste komma/parentes på samme niveau
    dybde = 0
    start = i
    while i < len(s):
        c = s[i]
        if c in "\"`'":
            _, _, i = laes_streng(s, i)
            continue
        if c in "([{":
            dybde += 1
        elif c in ")]}":
            if dybde == 0:
                break
            dybde -= 1
        elif c == "," and dybde == 0:
            break
        i += 1
    tekst = s[start:i].strip()
    return (int(tekst) if tekst.isdigit() else None), i


def find_spoergsmaal(kilde):
    for m in re.finditer(r"^(QM?)\(", kilde, re.M):
        i = m.end()
        args = []
        try:
            while True:
                i = spring_over(kilde, i)
                if kilde[i] == ")":
                    break
                v, i = laes_vaerdi(kilde, i)
                args.append(v)
        except (ValueError, IndexError):
            continue
        if len(args) < 4 or not isinstance(args[3], list):
            continue
        linje = kilde.count("\n", 0, m.start()) + 1
        yield {"linje": linje, "emne": args[0], "niveau": args[1], "spm": args[2], "svar": args[3]}


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    sti = sys.argv[1]
    md = sys.argv[sys.argv.index("--md") + 1] if "--md" in sys.argv else None
    kilde = open(sti, encoding="utf-8").read()

    alle, laengst, markeret = [], 0, []
    for q in find_spoergsmaal(kilde):
        svar = q["svar"]
        if len(svar) != 4 or any(not isinstance(x, str) for x in svar):
            continue
        alle.append(q)
        rigtig, forkerte = len(svar[0]), [len(x) for x in svar[1:]]
        if rigtig > max(forkerte):
            laengst += 1
            faktor = rigtig / (sum(forkerte) / 3)
            if faktor >= GRAENSE_FAKTOR:
                markeret.append((faktor, q))

    andel = laengst / len(alle) if alle else 0
    print(f"Spørgsmål med svarmuligheder: {len(alle)}")
    print(f"Rigtigt svar er det længste: {laengst} ({andel:.0%}) – mål: under {GRAENSE_ANDEL:.0%}")
    print(f"Markeret (længst og ≥ {GRAENSE_FAKTOR}× de forkerte): {len(markeret)}")

    if md:
        markeret.sort(key=lambda x: -x[0])
        pr_emne = {}
        for q in alle:
            pr_emne.setdefault(q["emne"], [0, 0])[1] += 1
        for _, q in markeret:
            pr_emne[q["emne"]][0] += 1
        ud = ["# Lette svar i Spejderquiz", "",
              f"- Spørgsmål med svarmuligheder: {len(alle)}",
              f"- Rigtigt svar er det længste: {laengst} ({andel:.0%}) – mål: under {GRAENSE_ANDEL:.0%}",
              f"- Markeret (længst og ≥ {GRAENSE_FAKTOR}× de forkerte): {len(markeret)}", "",
              "| Emne | Markeret | I alt |", "|---|---|---|"]
        ud += [f"| {e} | {m} | {n} |" for e, (m, n) in sorted(pr_emne.items())]
        for faktor, q in markeret:
            ud += ["", f"## Linje {q['linje']} · {q['emne']} niv. {q['niveau']} · {faktor:.1f}×",
                   f"**{q['spm']}**", ""]
            ud += [f"- ✅ {q['svar'][0]}"] + [f"- ❌ {x}" for x in q["svar"][1:]]
        open(md, "w", encoding="utf-8").write("\n".join(ud) + "\n")
        print(f"Rapport skrevet til {md}")

    return 0 if andel < GRAENSE_ANDEL else 1


if __name__ == "__main__":
    sys.exit(main())
