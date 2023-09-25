function validatform(){
    let categorie = document.getElementById("categorie").value;
    let montant = document.getElementById("montant").value;
    let mois = document.getElementById("mois").value;

    if(categorie ===""){
        alert("erreur");
        return false;
    }

    if(montant ===""){
        alert("erreur");
        return false;
    }

    if(mois ===""){
        alert("erreur");
        return false;
    }
}


function showData(){
    let peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList =[];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

  let html = " ";

  peopleList.forEach(function (element , index) {
    html += "<tr>";
    html += "<td>" +element.categorie + "</td>";
    html += "<td>" +element.montant + "</td>";
    html += "<td>" +element.mois + "</td>";
    html += '<td> <button onclick="deleteData ('+index+')"class="btn">Suprimer</button>'

    html += "</tr>";

    console.log(peopleList)
   
  });
 document.querySelector("#table tbody").innerHTML = html;
}

document.onload = showData();

function addData(){
    if (validatform() == true){
        let categorie = document.getElementById("categorie").value;
        let montant = document.getElementById("montant").value;
        let mois = document.getElementById("mois").value;

        let peopleList;

        if(localStorage.getItem("peopleList") == null){
            peopleList =[];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peoleList"))
        }
    peopleList.push({
        categorie: categorie,
        montant: montant,
        mois: mois,

       
    });

    localStorage.setItem("peopleList",JSON.stringify(peopleList));
    showData();
    document.getElementById("categorie").value =" ";
    document.getElementById("montant").value =" ";
    document.getElementById("mois").value =" ";
    }
    
}

