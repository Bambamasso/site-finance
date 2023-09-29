
let fixe =localStorage.getItem("BUDGET_FIXE")?JSON.parse(localStorage.getItem("BUDGET_FIXE")):[];
let variable =localStorage.getItem("BUDGET_VARIABLE")?JSON.parse(localStorage.getItem("BUDGET_VARIABLE")):[];
let occasion =localStorage.getItem("BUDGET_OCCASIONNELLE")?JSON.parse(localStorage.getItem("BUDGET_OCCASIONNELLE")):[];
let somation=0;
const s1=fixe.length?fixe.reduce((a,b)=> Number(a.montant)+Number(b.montant)): 0;
const s2=variable.length? variable.length>1?variable.reduce((a,b)=>Number(a.montant)+Number(b.montant)):variable[0].montant: 0;
const s3=occasion.length?occasion.reduce((a,b)=> Number(a.montant)+Number(b.montant)): 0;
console.log(fixe.reduce((a,b)=> Number(a.montant)+Number(b.montant)),s2,s3);
document.querySelector(".prix").textContent=(s1+s2+s3)+ " FCFA";