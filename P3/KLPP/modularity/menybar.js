const menyboks = document.getElementById("menyboks");
const meny = document.createElement("div");
meny.id = "meny";
menyboks.appendChild(meny);

/*const klpp_div = document.createElement("div");
klpp_div.id = "klpp_div";
menyboks.appendChild(klpp_div);*/


function menybar() {
    const klpp = document.createElement("a");
    const klpp_tekst = document.createTextNode("KLPP.");
    klpp.href= "hjemmeside.html";
    klpp.id= "klpp"
    klpp.appendChild(klpp_tekst);
    meny.appendChild(klpp);

    const bestill_time = document.createElement("a");
    const bestill_time_tekst = document.createTextNode("BESTILL TIME");
    bestill_time.href= "bestill_time.html";
    bestill_time.appendChild(bestill_time_tekst);
    meny.appendChild(bestill_time);

    const behandlinger = document.createElement("a");
    const behanlinger_tekst = document.createTextNode("BEHANDLINGER");
    behandlinger.href= "behandlinger.html";
    behandlinger.appendChild(behanlinger_tekst);
    meny.appendChild(behandlinger);

    const om_oss = document.createElement("a");
    const om_oss_tekst = document.createTextNode("OM OSS");
    om_oss.href= "om_oss.html";
    om_oss.appendChild(om_oss_tekst);
    meny.appendChild(om_oss);

    const søk_jobb = document.createElement("a");
    const søk_jobb_tekst = document.createTextNode("SØK JOBB");
    søk_jobb.href= "søk_jobb.html";
    søk_jobb.appendChild(søk_jobb_tekst);
    meny.appendChild(søk_jobb);

    const galleri = document.createElement("a");
    const galler_tekst = document.createTextNode("GALLERI");
    galleri.href= "galleri.html";
    galleri.appendChild(galler_tekst);
    meny.appendChild(galleri);

    const covid_19 = document.createElement("a");
    const covid_19_tekst = document.createTextNode("COVID-19");
    covid_19.href= "covid_19.html";
    covid_19.appendChild(covid_19_tekst);
    meny.appendChild(covid_1);
}


menybar()


