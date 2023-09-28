let bouton = document.querySelector(".bouton");
bouton.addEventListener('click', (e) => {
   e.preventDefault()
   let tabutilisateur = JSON.parse(localStorage.getItem("listutilisateur")) || []
   let nom = document.querySelector(".nom").value;
   let numero = document.querySelector(".numero").value;
   let email = document.querySelector(".email").value;
   let motDePasse = document.querySelector(".motDePasse").value;
   let confimation = document.querySelector(".confimation").value;

      if(nom ===""){
         
            alert("erreur");
            return false;
      
      }

      if(numero ===""){
         
         alert("erreur");
         return false;
   
   }

   if(email ===""){
         
      alert("erreur");
      return false;

}

if(motDePasse ===""){
         
   alert("erreur");
   return false;

}

if(confimation ===""){
         
   alert("erreur");
   return false;

}
         
   if (motDePasse === confimation) {
     
      let utilisateur = {
         nom: nom,
         numero: numero,
         email: email,
         motDePasse: motDePasse,
         confimation: confimation  
      }

      if(tabutilisateur.find(user=>user.email==utilisateur.email)){
         return alert("ce compte existe déjà")
      }
     
      tabutilisateur.push(utilisateur)

      localStorage.setItem("listutilisateur", JSON.stringify(tabutilisateur))
      alert("validé")
      window.location.href = "./connexion.html"

   } else{
      alert("Votre mot de passe n'est pas identique")
      window.location.reload()
   }


})