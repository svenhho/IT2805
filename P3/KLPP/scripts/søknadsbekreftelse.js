//få feedback vinduet
let response = document.getElementById("userFeedback-jobb");

//koblinger fra elementer
let close = document.getElementsByClassName("close-jobb")[0];
let fornavn = document.getElementById("fnavn");

//validering
function validate(){
    let flengde = document.getElementById("fnavn").value;
    let elengde = document.getElementById("enavn").value;
    let mlengde = document.getElementById("email").value;
    let tlengde = document.getElementById("tlf").value;
    if(flengde.length < 1){
        console.log("fyll inn fornavn")
        return null;
    }
    if(elengde.length < 1){
        console.log("fyll inn etternavn")
        return null;
    }
    if(mlengde.length < 1){
        console.log("fyll inn mailen")
        return null;
    }
    if(tlengde.length < 1){
        console.log("fyll inn telefonnummer")
        return null;
    }
    response.style.display = "block";

}

function giveFeedback(){
    validate();
}

//lukker vindu
function closingWindow(){
     response.style.display = "none";
     location.reload();
}

//lukker vindu hvis en klikker utenom vindu
window.onclick = function(event){
    if(event.target == response){
        response.style.display = "none";
        location.reload();
    }
}
