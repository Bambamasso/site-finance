let session=localStorage.session;
if(session){
    // document.querySelector("#deconnexion").
    document.querySelector("#connexion").remove()
    document.querySelector("#deconnexion").addEventListener('click',e=>{
        if(confirm("Voulez-vous vraiment vous deconnecter?")){
            localStorage.removeItem("session");
        location.reload()      }
    })
}
else{
    // document.querySelector("#connexion")
    document.querySelector("#deconnexion").remove() ;

}
