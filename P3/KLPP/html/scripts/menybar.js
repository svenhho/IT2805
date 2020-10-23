const menyboks = document.getElementById("menyboks");
const meny = document.createElement("div");
meny.id = "meny";
menyboks.appendChild(meny);


function menybar() {
    const bestill_time = document.createElement("a");
    const bestill_time_text = document.createTextNode("BESTILL TIME");
    bestill_time.href= "bestill_time.html";
    bestill_time.appendChild(bestill_time_text);
    meny.appendChild(bestill_time);

    const behandlinger = document.createElement("a");
    const behanlinger_text = document.createTextNode("BEHANDLINGER");
    behandlinger.href= "behandlinger.html";
    behandlinger.appendChild(behanlinger_text);
    meny.appendChild(behandlinger);
}

menybar()


/*
function oversikten() {
    let container = document.createElement("div")
    container.className = "menyboks"
    //let container = document.getElementsByClassName("meny")
    let div = document.createElement("div")
    div.className = "meny"
/*    const bestill = document.createElement("BESTILL TIME")
    const behandlinger = document.createElement("BEHANDLINGER")
    const omOss = document.createElement("OM OSS")
    const søkJobb = document.createElement("SØK JOBB")
    const galleri = document.createElement("GALLERI")
    const covid = document.createElement("COVID-19")
    bestill.className ="meny"
    behandlinger.className= "meny"
    omOss.className = "meny"
    søkJobb.className = "meny"
    galleri.className = "meny"
    covid.className = "meny"
    div.appendChild(bestill)
    div.appendChild(behandlinger)
    div.appendChild(omOss)
    div.appendChild(søkJobb)
    div.appendChild(galleri)
    div.appendChild(covid)

    let bes = document.createElement('a');
    let beh = document.createElement('a');
    let oms = document.createElement('a');
    let sok = document.createElement('a');
    let gal = document.createElement('a');
    let cov = document.createElement('a');

    bes.className = "meny";
    beh.className = "meny";
    oms.className = "meny";
    sok.className = "meny";
    gal.className = "meny";
    cov.className = "meny";
    
    let linkbes = document.createTextNode("BESTILL TIME");
    let linkbeh = document.createTextNode("BEHANDLINGER");
    let linkoms = document.createTextNode("OM OSS");
    let linksok = document.createTextNode("SØK JOBB");
    let linkgal = document.createTextNode("GALLERI");
    let linkcov = document.createTextNode("COVID-19");

    bes.appendChild(linkbes);
    beh.appendChild(linkbeh);
    oms.appendChild(linkoms);
    sok.appendChild(linksok);
    gal.appendChild(linkgal);
    cov.appendChild(linkcov);

    bes.title = "BESTILL TIME"
    beh.title = "BEHANDLINGER"
    oms.title = "OM OSS"
    sok.title = "SØK JOBB"
    gal.title = "GALLERI"
    cov.title = "COVID-19"

    bes.href = "bestill_time.html";
    beh.href = "behandlinger.html";
    oms.href = "om_oss.html";
    sok.href = "sok_jobb.html";
    gal.href = "galleri.html";
    cov.href = "covid_19.html";

    div.appendChild(bes);
    div.appendChild(beh);
    div.appendChild(oms);
    div.appendChild(sok);
    div.appendChild(gal);
    div.appendChild(cov);




    container.appendChild(div)

}
oversikten()           
*/