const fs=require('fs'), path=require('path');
const dir=path.join(__dirname,'spg'); const S=[]; let REGNE=false;
global.Q=(e,n,spm,svar,f)=>S.push({e,n,spm,svar,f,regne:REGNE});
global.R=(e,n,spm,trin,f)=>S.push({e,n,spm,trin,f,type:'r'});
global.QM=(e,n,spm,svar,f,m)=>S.push({e,n,spm,svar,f,m});
global.TEGNING=x=>({svg:x});
const filer=fs.readdirSync(dir).filter(f=>f.endsWith('.js')).sort();
for(const f of filer){ const kode=fs.readFileSync(path.join(dir,f),'utf8').replace(/REGNE\s*=\s*(true|false)/g,'global.__R=$1'); 
  Object.defineProperty(global,'__R',{set(v){REGNE=v;},get(){return REGNE;},configurable:true}); eval(kode); }
const emner=[...new Set(S.map(q=>q.e))];
let laengst=0, alle=0, flag=[], kortest=0;
for(const e of emner){ const r=[1,2,3].map(n=>S.filter(q=>q.e===e&&q.n===n).length); const re=S.filter(q=>q.e===e&&q.regne).length, rk=S.filter(q=>q.e===e&&q.type).length, qm=S.filter(q=>q.e===e&&q.m).length;
  console.log(e.padEnd(14), r.join(' / '), `R:${rk} QM:${qm} regne:${re}`); }
for(const q of S){ if(q.type) continue; alle++; const l=q.svar.map(x=>x.length), rig=l[0], andre=l.slice(1), gs=andre.reduce((a,b)=>a+b,0)/andre.length;
  if(rig<Math.min(...andre)) kortest++;
  if(rig>Math.max(...andre)) { laengst++; if(rig>=1.4*gs) flag.push(q.e+' '+q.n+': '+q.spm.slice(0,70)); }
  if(new Set(q.svar).size!==q.svar.length) console.log('DUBLET SVAR:', q.spm);
  if(q.svar.length!==4) console.log('IKKE 4 SVAR:', q.spm); }
const spm=S.map(q=>q.e+q.spm); const d=spm.filter((x,i)=>spm.indexOf(x)!==i); if(d.length) console.log('DUBLET SPM:', d);
console.log(`I alt ${S.length}. Rigtigt svar længst: ${laengst}/${alle} = ${(laengst/alle*100).toFixed(1)} %. Markerede: ${flag.length}. Kortest: ${(kortest/alle*100).toFixed(1)} %`);
if(process.argv[2]==='-v') console.log(flag.join('\n'));
