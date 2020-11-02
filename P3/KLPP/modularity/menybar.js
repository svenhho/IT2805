const menyboks = document.getElementById("menyboks");
const meny = document.createElement("div");
meny.id = "meny";
menyboks.appendChild(meny);

function menybar() {
    const klpp = document.createElement("a");
    const klpp_tekst = document.createTextNode("KLPP.");
    klpp.href= "hjemmeside.html";
    klpp.id= "klpp"
    klpp.appendChild(klpp_tekst);
    meny.appendChild(klpp);

    const overst = document.createElement("div");
    overst.id ="overst";
    const bestill_time = document.createElement("a");
    const bestill_time_tekst = document.createTextNode("BESTILL TIME");
    bestill_time.id = "bestill_time_id";
    bestill_time.href= "bestill_time.html";
    bestill_time.appendChild(bestill_time_tekst);
    overst.appendChild(bestill_time);

    const behandlinger = document.createElement("a");
    const behanlinger_tekst = document.createTextNode("BEHANDLINGER");
    behandlinger.href= "behandlinger.html";
    behandlinger.id = "behandlinger_id";
    behandlinger.appendChild(behanlinger_tekst);
    overst.appendChild(behandlinger);

    const om_oss = document.createElement("a");
    const om_oss_tekst = document.createTextNode("OM OSS");
    om_oss.href= "om_oss.html";
    om_oss.id = "om_oss_id";
    om_oss.appendChild(om_oss_tekst);
    overst.appendChild(om_oss);
    meny.appendChild(overst);

    const nederst = document.createElement("div");
    nederst.id = "nederst";
    const søk_jobb = document.createElement("a");
    const søk_jobb_tekst = document.createTextNode("SØK JOBB");
    søk_jobb.href= "søk_jobb.html";
    søk_jobb.id = "søk_jobb_id";
    søk_jobb.appendChild(søk_jobb_tekst);
    nederst.appendChild(søk_jobb);

    const galleri = document.createElement("a");
    const galler_tekst = document.createTextNode("GALLERI");
    galleri.href= "galleri.html";
    galleri.id = "galleri_id";
    galleri.appendChild(galler_tekst);
    nederst.appendChild(galleri);

    const covid_19 = document.createElement("a");
    const covid_19_tekst = document.createTextNode("COVID-19");
    covid_19.href= "covid_19.html";
    covid_19.id = "covid_19_id";
    covid_19.appendChild(covid_19_tekst);
    nederst.appendChild(covid_19);
    meny.appendChild(nederst);
}


menybar()


