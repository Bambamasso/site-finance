let bouton = document.querySelector(".enregistrement");
 bouton.addEventListener('submit', (e) => { 
  e.preventDefault();
  let formulaire = e.target;
  console.log(formulaire)
   let tableEpargne = JSON.parse(localStorage.getItem("EPARGNE")) || []
   let mois = document.querySelector(".mois");
   let objectif = document.querySelector(".objectif");
   let montant = document.querySelector(".montant");

 if(mois.value.replaceAll(" ","")){
  if(objectif.value){
    if(montant.value){
      let epargne = {
        mois: mois.value,
        objectif: objectif.value,
        montant: montant.value,
      };

      tableEpargne.push(epargne)

      localStorage.setItem("EPARGNE", JSON.stringify(tableEpargne))
      alert("effectué avec succès");
      
      window.location.reload()

    }else{
      mois.focus()
    }
  }else{
    objectif.focus()
  }
 }else{
  montant.value=""
  montant.focus()
 }
  

 })

 function toDoListe(){
  const epargnes = localStorage.EPARGNE;
  const tbody=document.querySelector("tbody");

  if(epargnes && JSON.parse(epargnes).length){
    JSON.parse(epargnes).forEach((element,indice)=>{
      tbody.innerHTML+=`
      <tr>
        <td>${element.mois}</td>
        <td >${element.objectif} fcfa</td>
        <td>${element.montant}</td>
      </tr>
      `
    })
  }
 
 }
toDoListe();