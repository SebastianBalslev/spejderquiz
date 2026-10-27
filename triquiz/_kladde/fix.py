# Brug: python3 fix.py fil rettelser.txt
# rettelser: blokke "spm-del\ngammelt svar\nnyt svar\n" adskilt af tom linje
import sys
f, r = sys.argv[1], sys.argv[2]
s = open(f).read()
for blok in open(r).read().strip().split("\n\n"):
    spm, gl, ny = blok.strip().split("\n")
    i = s.find(spm)
    assert i >= 0, "spm ikke fundet: " + spm
    j = s.find('"' + gl + '"', i)
    k = s.find("\n", s.find("[", i))  # svarlinjen
    assert 0 <= j < k + 400 and j < s.find('");', i) + 400, "svar ikke fundet: " + gl
    s = s[:j] + '"' + ny + '"' + s[j + len(gl) + 2:]
open(f, "w").write(s)
print("ok")
