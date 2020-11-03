let show = true; 

function showCheckboxes() { 
    let checkboxes =  
        document.getElementById("checkBoxes"); 

    if (show) { 
        checkboxes.style.display = "block"; 
        show = false; 
    } else { 
        checkboxes.style.display = "none"; 
        show = true; 
    } 
} 

function dame() {
    let damePris=0;
    let theForm = document.forms["fyll_inn"];
    let dame= theForm.elements["dame"];
    if(dame.checked==true) {
        damePris=700;
    }
    return damePris;
}

function herre() {
    let herrePris=0;
    let theForm = document.forms["fyll_inn"];
    let herre= theForm.elements["herre"];
    if(herre.checked==true) {
        herrePris=500;
    }
    return herrePris;
}
      
function barn() {
    let barnePris=0;
    let theForm = document.forms["fyll_inn"];
    let barn= theForm.elements["barn"];
    if(barn.checked==true) {
        barnePris=300;
    }
    return barnePris;
}

function student() {
    let studentPris=0;
    let theForm = document.forms["fyll_inn"];
    let student= theForm.elements["student"];
    if(student.checked==true) {
        studentPris=300;
    }
    return studentPris;
}

function senior() {
    let seniorPris=0;
    let theForm = document.forms["fyll_inn"];
    let senior= theForm.elements["senior"];
    if(senior.checked==true) {
        seniorPris=300;
    }
    return seniorPris;
}

function foliestriper() {
    let foliestriperPris=0;
    let theForm = document.forms["fyll_inn"];
    let foliestriper= theForm.elements["foliestriper"];
    if(foliestriper.checked==true) {
        foliestriperPris=700;
    }
    return foliestriperPris;
}

function bayalage() {
    let bayalagePris=0;
    let theForm = document.forms["fyll_inn"];
    let bayalage= theForm.elements["bayalage"];
    if(bayalage.checked==true) {
        bayalagePris=700;
    }
    return bayalagePris;
}

function ettervekst() {
    let ettervekstPris=0;
    let theForm = document.forms["fyll_inn"];
    let ettervekst= theForm.elements["ettervekst"];
    if(ettervekst.checked==true) {
        ettervekstPris=700;
    }
    return ettervekstPris;
}

function vipper() {
    let vipperPris=0;
    let theForm = document.forms["fyll_inn"];
    let vipper= theForm.elements["vipper"];
    if(vipper.checked==true) {
        vipperPris=700;
    }
    return vipperPris;
}

function glans() {
    let glasPris=0;
    let theForm = document.forms["fyll_inn"];
    let glans= theForm.elements["glans"];
    if(glans.checked==true) {
        glasPris=700;
    }
    return glasPris;
}

function maskinklipp() {
    let maskinklippPris=0;
    let theForm = document.forms["fyll_inn"];
    let maskinklipp= theForm.elements["maskinklipp"];
    if(maskinklipp.checked==true) {
        maskinklippPris=700;
    }
    return maskinklippPris;
}

function knivbarbering() {
    let knivbarberingPris=0;
    let theForm = document.forms["fyll_inn"];
    let knivbarbering= theForm.elements["knivbarbering"];
    if(knivbarbering.checked==true) {
        knivbarberingPris=700;
    }
    return knivbarberingPris;
}

function vask() {
    let vaskPris=0;
    let theForm = document.forms["fyll_inn"];
    let vask= theForm.elements["vask"];
    if(vask.checked==true) {
        vaskPris=700;
    }
    return vaskPris;
}

function styling() {
    let stylingPris=0;
    let theForm = document.forms["fyll_inn"];
    let styling= theForm.elements["styling"];
    if(styling.checked==true) {
        stylingPris=700;
    }
    return stylingPris;
}

function extensions() {
    let extensionPris=0;
    let theForm = document.forms["fyll_inn"];
    let extensions= theForm.elements["extensions"];
    if(extensions.checked==true) {
        extensionPris=700;
    }
    return extensionPris;
}

function hårvask() {
    let hårvaskPris=0;
    let theForm = document.forms["fyll_inn"];
    let hårvask= theForm.elements["hårvask"];
    if(hårvask.checked==true) {
        hårvaskPris=700;
    }
    return hårvaskPris;
}

function calculateTotal() {

    let finalPrice = dame() + herre() + barn() + student() + senior() + foliestriper() + bayalage() + ettervekst() + vipper() + glans() + maskinklipp() + knivbarbering() + vask() + styling() + extensions() + hårvask();
if(finalPrice == null){divobj.innerHTML = "Totalpris: "}

    let divobj = document.getElementById('totalPris');
    divobj.style.display='block';
    divobj.innerHTML= "Totalpris: "+finalPrice+",-"
}

calculateTotal()