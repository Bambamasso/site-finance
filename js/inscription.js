let bouton = document.querySelector(".bouton");
bouton.addEventListener('click', (e) => {
   e.preventDefault()
   let tabutilisateur = JSON.parse(localStorage.getItem("listutilisateur")) || []
   let nom = document.querySelector(".nom").value;
   let numero = document.querySelector(".numero").value;
   let email = document.querySelector(".email").value;
   let motDePasse = document.querySelector(".motDePasse").value;
   let confimation = document.querySelector(".confimation").value;
   if (motDePasse === confimation) {
      alert("validé")
      let utilisateur = {
         nom: nom,
         numero: numero,
         email: email,
         motDePasse: motDePasse,
         confimation: confimation
      }
      tabutilisateur.push(utilisateur)

      localStorage.setItem("listutilisateur", JSON.stringify(tabutilisateur))
      window.location.href = "./connexion.html"
   } else{
      alert("Votre mot de passe n'est pas identique")
      window.location.reload()
   }
})