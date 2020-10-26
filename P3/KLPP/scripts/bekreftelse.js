//få feedback vinduet
let response = document.getElementById("userFeedback");

//koblinger fra elementer
let close = document.getElementsByClassName("close-window")[0];

//enkel validering for søk jobb
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
//funksjon til søk jobb
function giveFeedback(){
    validate();
}

//funksjon til bestill time, bruker validate funksjonen i check
function giveResponse(){
    check();
}

//enkel validering til behandlingene i bestill time
function check(){
    let theForm = document.forms["fyll_inn"];
    let dame= theForm.elements["dame"];
    let herre= theForm.elements["herre"];
    let barn= theForm.elements["barn"];
    let student= theForm.elements["student"];
    let senior= theForm.elements["senior"];
    let foliestriper= theForm.elements["foliestriper"];
    let bayalage= theForm.elements["bayalage"];
    let ettervekst= theForm.elements["ettervekst"];
    let vipper= theForm.elements["vipper"];
    let glans= theForm.elements["glans"];
    let maskinklipp= theForm.elements["maskinklipp"];
    let knivbarbering= theForm.elements["knivbarbering"];
    let vask= theForm.elements["vask"];
    let styling= theForm.elements["styling"];
    let extensions= theForm.elements["extensions"];
    let hårvask= theForm.elements["hårvask"];
    if(!((dame.checked == true) || (herre.checked == true) || (barn.checked == true) ||
        (student.checked == true) || (senior.checked == true) || (foliestriper.checked == true) ||
        (bayalage.checked == true) || (ettervekst.checked == true) || (vipper.checked == true) ||
        (glans.checked == true) || (maskinklipp.checked == true) || (knivbarbering.checked == true) ||
        (vask.checked == true) || (styling.checked == true) || (extensions.checked == true) ||
        (hårvask.checked == true))
    ) {
        console.log("Du må velge en behandling");
        return null;
    }
    //sjekker at dato er fylt ut
    let datofelt = document.getElementById("dato").value;
    console.log(datofelt);
    if(datofelt == ""){
        console.log("Du må velge en dato");
        return null; 
    }
    //sjekker at covidboks er krysset av
    let covidboks = theForm.elements["agree"];
    if(!(covidboks.checked == true)){
        console.log("Du må godkjenne å ha lest covid vilkårene")
        return null;
    }
    //sjekker gjenværende felt, og hvis rett så viser den feedback blokk
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
