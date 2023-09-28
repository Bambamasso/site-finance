if(localStorage.session) window.location.href="../index.html";

let form = document.querySelector("form")

form.addEventListener("submit", (s) =>{
s.preventDefault();

let tabutilisateur = JSON.parse(localStorage.getItem("listutilisateur"));
let r;
let email = document.querySelector(".email").value ;
let motDePasse = document.querySelector(".motDePasse").value;
tabutilisateur.forEach(element => {
    if(element.email === email && element.motDePasse === motDePasse){
        
        r = element;
    }

})
if (typeof r !== "undefined") {
    console.log(r)
    alert("l'operation est un succès ")
    
    localStorage.setItem("session", JSON.stringify(r))
    window.location.href = "accueil.html"
   
    //console.log("passer")
}else{
    alert('faux')
    window.location.reload()
}

})