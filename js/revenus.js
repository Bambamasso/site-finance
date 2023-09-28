let bouton = document.querySelector(".enregistrement");
if (bouton){
  bouton.addEventListener('submit', (e) => { 
    e.preventDefault();
    let formulaire = e.target;
    console.log(formulaire)
     let tableRevenus = JSON.parse(localStorage.getItem("REVENUS")) || []
     let date = document.querySelector(".date");
     let type = document.querySelector(".type");
     let mois = document.querySelector(".mois");
     let montant=document.querySelector(".montant");
  
   if(date.value.replaceAll(" ","")){
    if(type.value){
      if(mois.value){
      if(montant.value){
          let revenus = {
              date: date.value,
              type: type.value,
              mois: mois.value,
              montant:montant.value
      
            };
      
            tableRevenus.push(revenus)
      
            localStorage.setItem("REVENUS", JSON.stringify(tableRevenus))
            alert("effectué avec succès");
            
            window.location.reload()
      }else{
          montant.focus()
      }
  
      }else{
        mois.focus()
      }
    }else{
      type.focus()
    }
   }else{
    date.value=""
    date.focus()
   }
    
  
   })
}
 

 function toDoListe(){
  const revenuses = localStorage.REVENUS;
  const tbody=document.querySelector("tbody");
  let somme=0;
  if(tbody){
    if(revenuses && JSON.parse(revenuses).length){
      JSON.parse(revenuses).forEach((element,indice)=>{
        console.log(element)
        tbody.innerHTML+=`
        <tr>
          <td>${element.date}</td>
          <td>${element.type}</td>
          <td>${element.mois}</td>
          <td>${element.montant} fcfa</td>
        </tr>
        `
      })
    }
  }
  

  JSON.parse(revenuses).forEach(element => {
    somme+=Number(element.montant);
    
   });console.log(somme);

   let span = document.querySelector("span")
    span.innerHTML= somme+" fcfa";

 }
toDoListe();