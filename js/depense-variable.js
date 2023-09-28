let bouton = document.querySelector(".enregistrement");
 bouton.addEventListener('submit', (e) => { 
  e.preventDefault();
  let formulaire = e.target;
  console.log(formulaire)
   let tableBudget = JSON.parse(localStorage.getItem("BUDGET_VARIABLE")) || []
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

      localStorage.setItem("BUDGET_VARIABLE", JSON.stringify(tableBudget))
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
  const budgets = localStorage.BUDGET_VARIABLE;
  const tbody=document.querySelector("tbody");
  let variable = 0;

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
    variable +=Number(element.montant);
    
   });console.log( variable);

   let p =document.querySelector(".totale")
   p.innerHTML=  variable+" fcfa";
 }
toDoListe();