// Viser spørgsmål i én fil, hvor det rigtige svar er længst
const fs=require('fs');const f=process.argv[2];const S=[];
global.REGNE=false;global.Q=(e,n,spm,svar)=>S.push({n,spm,svar});global.QM=global.Q;global.R=()=>{};global.TEGNING=x=>x;
eval(fs.readFileSync(f,'utf8').replace(/^const /gm,'var '));
let l=0;for(const q of S){const L=q.svar.map(x=>x.length);if(L[0]>Math.max(...L.slice(1))){l++;console.log(`${q.n}| ${q.spm}\n   ✔ ${q.svar[0]}\n   ✘ ${q.svar.slice(1).join(' | ')}`);}}
console.log(`${l}/${S.length} = ${(l/S.length*100).toFixed(0)} %`);
