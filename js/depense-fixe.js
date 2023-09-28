  
  
 let bouton = document.querySelector(".enregistrement");
 bouton.addEventListener('submit', (e) => { 
  e.preventDefault();
  let formulaire = e.target;
  console.log(formulaire)
   let tableBudget = JSON.parse(localStorage.getItem("BUDGET_FIXE")) || []
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

      localStorage.setItem("BUDGET_FIXE", JSON.stringify(tableBudget))
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
  const budgets = localStorage.BUDGET_FIXE;
  const tbody=document.querySelector("tbody");
  let somme= 0;

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
    somme+=Number(element.montant);
    
   });console.log(somme);

   let p =document.querySelector(".totale")
   p.innerHTML= somme+"fcfa";

 }
toDoListe();


 


// function validatform(){
//     let categorie = document.getElementById("categorie").value;
//     let montant = document.getElementById("montant").value;
//     let mois = document.getElementById("mois").value;

    // if(categorie ===""){
       //  alert("erreur");
        // return false;
    // }

//     if(montant ===""){
//         alert("erreur");
//         return false;
//     }

//     if(mois ===""){
//         alert("erreur");
//         return false;
//     }

// }


// function showData(){
//     let peopleList;
//     if(localStorage.getItem("peopleList")== null){
//         peopleList =[];
//     }
//     else{
//         peopleList = JSON.parse(localStorage.getItem("peopleList"))
//     }

//   let html = " ";

//   peopleList.forEach(function (element , index) {
//     html += "<tr>";
//     html += "<td>" +element.categorie + "</td>";
//     html += "<td>" +element.montant + "</td>";
//     html += "<td>" +element.mois + "</td>";
//     html += '<td> <button onclick="deleteData ('+index+')"class="btn">Suprimer</button>'

//     html += "</tr>";

//     console.log(peopleList)
   
//   });
//  document.querySelector("#table tbody").innerHTML = html;
// }

// document.onload = showData();

// function addData(){
//     if (validatform() == true){
//         let categorie = document.getElementById("categorie").value;
//         let montant = document.getElementById("montant").value;
//         let mois = document.getElementById("mois").value;

//         let peopleList;

//         if(localStorage.getItem("peopleList") == null){
//             peopleList =[];
//         }
//         else{
//             peopleList = JSON.parse(localStorage.getItem("peoleList"))
//         }
//     peopleList.push({
//         categorie: categorie,
//         montant: montant,
//         mois: mois,

       
//     });

//     localStorage.setItem("peopleList",JSON.stringify(peopleList));
//     showData();
//     document.getElementById("categorie").value =" ";
//     document.getElementById("montant").value =" ";
//     document.getElementById("mois").value =" ";
//     }
    
// }

