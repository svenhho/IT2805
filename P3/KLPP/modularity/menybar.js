function myFunction() {
    console.log(document.getElementById("myTopnav"))
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function menybar() {
    let meny = document.getElementById("myTopnav");

    const klpp = document.createElement("a");
    const klpp_tekst = document.createTextNode("KLPP.");
    klpp.href= "hjemmeside.html";
    klpp.id= "klpp"
    klpp.appendChild(klpp_tekst);
    meny.appendChild(klpp);
    
    const covid_19 = document.createElement("a");
    const covid_19_tekst = document.createTextNode("COVID-19");
    covid_19.href= "covid_19.html";
    covid_19.id = "covid_19_id";
    covid_19.appendChild(covid_19_tekst);
    meny.appendChild(covid_19);

    const galleri = document.createElement("a");
    const galler_tekst = document.createTextNode("GALLERI");
    galleri.href= "galleri.html";
    galleri.id = "galleri_id";
    galleri.appendChild(galler_tekst);
    meny.appendChild(galleri);

    const sok_jobb = document.createElement("a");
    const sok_jobb_tekst = document.createTextNode("SØK JOBB");
    sok_jobb.href= "søk_jobb.html";
    sok_jobb.id = "søk_jobb_id";
    sok_jobb.appendChild(sok_jobb_tekst);
    meny.appendChild(sok_jobb);

    const om_oss = document.createElement("a");
    const om_oss_tekst = document.createTextNode("OM OSS");
    om_oss.href= "om_oss.html";
    om_oss.id = "om_oss_id";
    om_oss.appendChild(om_oss_tekst);
    meny.appendChild(om_oss);

    const behandlinger = document.createElement("a");
    const behanlinger_tekst = document.createTextNode("BEHANDLINGER");
    behandlinger.href= "behandlinger.html";
    behandlinger.id = "behandlinger_id";
    behandlinger.appendChild(behanlinger_tekst);
    meny.appendChild(behandlinger);

    const bestill_time = document.createElement("a");
    const bestill_time_tekst = document.createTextNode("BESTILL TIME");
    bestill_time.id = "bestill_time_id";
    bestill_time.className = "active";
    bestill_time.href= "bestill_time.html";
    bestill_time.appendChild(bestill_time_tekst);
    meny.appendChild(bestill_time);
}


menybar()


