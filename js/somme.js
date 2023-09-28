
let fixe =JSON.parse(localStorage.getItem("BUDGET_FIXE"));
let variable =JSON.parse(localStorage.getItem("BUDGET_VARIABLE"));
let occasion =JSON.parse(localStorage.getItem("BUDGET_OCCASIONNELLE"));
console.log(fixe, variable, occasion)
let somation=0;
const s1=fixe.length?fixe.forEach(a=> somation+=parseInt(a.montant)): 0;
const s2=variable.length?variable.forEach(a=> somation+=parseInt(a.montant)): 0;
const s3=occasion.length?occasion.forEach(a=> somation+=parseInt(a.montant)): 0;
document.querySelector(".prix").textContent=(s1+s2+s3);