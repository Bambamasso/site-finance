let bouton = document.querySelector(".enregistrement");
bouton.addEventListener('submit', (e) => { 
 e.preventDefault();
 let formulaire = e.target;
 console.log(formulaire)
  let tableDepense = JSON.parse(localStorage.getItem("DEPENSE")) || []
  let date = document.querySelector(".date");
  let type = document.querySelector(".type");
  let montant = document.querySelector(".montant");
   let categorie = document.querySelector(".categorie");

if(date.value.replaceAll(" ","")){
 if(type.value){
   if(montant.value){
    if(categorie.value){

        let depense = {
            date: date.value,
            type: type.value,
            montant: montant.value,
            categorie:categorie.value
     
          };
     
          tableDepense.push(depense)
     
          localStorage.setItem("DEPENSE", JSON.stringify(tableDepense))
          alert("effectué avec succès");
          
          window.location.reload()
     
    }else{
        categorie.value
    }

   }else{
     montant.focus()
   }
 }else{
   type.focus()
 }
}else{
 date.value=""
 date.focus()
}
 

})



function toDoListe(){
    const categorie = localStorage.BUDGET_FIXE;
    const select =document.querySelector(".categorie");
  
    if(categorie && JSON.parse(categorie).length){
      JSON.parse(categorie).forEach((element,indice)=>{
        select.innerHTML+=`
        <option value="${element.categorie}">${element.categorie}</option>
        `
      });

    }
     
    const budgets = localStorage.BUDGET_OCCASIONNELLE;
    const selection=document.querySelector(".categorie");
  
    if(budgets && JSON.parse(budgets).length){
      JSON.parse(budgets).forEach((element,indice)=>{
        selection.innerHTML+=`
        <option value="${element.categorie}">${element.categorie}</option>
        `
      })
    }
     
    
    const budget = localStorage.BUDGET_VARIABLE;
    const selecte=document.querySelector(".categorie");
  
    if(budget && JSON.parse(budget).length){
      JSON.parse(budget).forEach((element,indice)=>{
        selecte.innerHTML+=`
        <option value="${element.categorie}">${element.categorie}</option>
        `
      })
    }


    const depenses = localStorage.DEPENSE;
    const tbody=document.querySelector("tbody");

    if(depenses && JSON.parse(depenses).length){
      JSON.parse(depenses).forEach((element,indice)=>{
        tbody.innerHTML+=`
        <tr>
       
          <td>${element.date} </td>
          <td>${element.type} </td>
          <td>${element.montant} fcfa</td>
          <td>${element.categorie} </td>
        </tr>
        `
      })
    }
   
   }
  toDoListe();
  