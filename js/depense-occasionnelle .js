let bouton = document.querySelector(".enregistrement");
 bouton.addEventListener('submit', (e) => { 
  e.preventDefault();
  let formulaire = e.target;
  console.log(formulaire)
   let tableBudget = JSON.parse(localStorage.getItem("BUDGET_OCCASIONNELLE")) || []
   let categorie = document.querySelector(".categorie");
   let montant = document.querySelector(".montant");
   let mois = document.querySelector(".mois");

 if(categorie.value.replaceAll(" ","")){
  if(montant.value){
    if(mois.value){
      let budget = {
        categorie: categorie.value,
        montant: montant.value,
        mois: mois.value,
      };

      tableBudget.push(budget)

      localStorage.setItem("BUDGET_OCCASIONNELLE", JSON.stringify(tableBudget))
      alert("effectué avec succès");
      
      window.location.reload()

    }else{
      mois.focus()
    }
  }else{
    montant.focus()
  }
 }else{
  categorie.value=""
  categorie.focus()
 }
  

 })

 function toDoListe(){
  const budgets = localStorage.BUDGET_OCCASIONNELLE;
  const tbody=document.querySelector("tbody");
  let occasion = 0;

  if(budgets && JSON.parse(budgets).length){
    JSON.parse(budgets).forEach((element,indice)=>{
      tbody.innerHTML+=`
      <tr>
        <td>${element.categorie}</td>
        <td >${element.montant} fcfa</td>
        <td>${element.mois}</td>
      </tr>
      `
    })
  }

  JSON.parse(budgets).forEach(element => {
    occasion+=Number(element.montant);
    
   });console.log(occasion);

   let p =document.querySelector(".total")
   p.innerHTML= occasion+"fcfa";
 
 }
toDoListe();