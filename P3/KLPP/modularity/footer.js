const foot = document.getElementById("foot");

function footer() {
    const kontaktinfo = document.createElement("h4");
    const kontaktinfo_tekst = document.createTextNode("KONTAKTINFO");
    kontaktinfo.id = "kontakt";
    kontaktinfo.appendChild(kontaktinfo_tekst);
    foot.appendChild(kontaktinfo);

    const lade = document.createElement("div");
    lade.className = "kontaktlokasjon";

    const lade_h4 = document.createElement("h4");
    lade_h4.id = "lade";
    const lade_h4_tekst = document.createTextNode("LADE");
    lade_h4.appendChild(lade_h4_tekst);
    lade.appendChild(lade_h4);

    const lade_p1 = document.createElement("p");
    const lade_p1_tekst = document.createTextNode("ÅPNINGSTIDER: man-lør(10-18)");
    lade_p1.appendChild(lade_p1_tekst);
    lade.appendChild(lade_p1);

    const lade_p2 = document.createElement("p");
    const lade_p2_tekst = document.createTextNode(" ADR: Haakon VIIs gate 9");
    lade_p2.appendChild(lade_p2_tekst);
    lade.appendChild(lade_p2);

    const lade_p3 = document.createElement("p");
    const lade_p3_tekst = document.createTextNode("E-MAIL: lade@klipp.no");
    lade_p3.appendChild(lade_p3_tekst);
    lade.appendChild(lade_p3);

    const lade_p4 = document.createElement("p");
    const lade_p4_tekst = document.createTextNode("TLF: 968 19 067");
    lade_p4.appendChild(lade_p4_tekst);
    lade.appendChild(lade_p4);

    foot.appendChild(lade);


    const solsiden = document.createElement("div");
    solsiden.className = "kontaktlokasjon";

    const solsiden_h4 = document.createElement("h4");
    solsiden_h4.id = "solsiden";
    const solsiden_h4_tekst = document.createTextNode("SOLSIDEN");
    solsiden_h4.appendChild(solsiden_h4_tekst);
    solsiden.appendChild(solsiden_h4);

    const solsiden_p1 = document.createElement("p");
    const solsiden_p1_tekst = document.createTextNode("ÅPNINGSTIDER: man-lør(10-18)");
    solsiden_p1.appendChild(solsiden_p1_tekst);
    solsiden.appendChild(solsiden_p1);

    const solsiden_p2 = document.createElement("p");
    const solsiden_p2_tekst = document.createTextNode(" ADR: Beddingen 10");
    solsiden_p2.appendChild(solsiden_p2_tekst);
    solsiden.appendChild(solsiden_p2);

    const solsiden_p3 = document.createElement("p");
    const solsiden_p3_tekst = document.createTextNode("E-MAIL: solsiden@klipp.no");
    solsiden_p3.appendChild(solsiden_p3_tekst);
    solsiden.appendChild(solsiden_p3);

    const solsiden_p4 = document.createElement("p");
    const solsiden_p4_tekst = document.createTextNode("TLF: 968 19 068");
    solsiden_p4.appendChild(solsiden_p4_tekst);
    solsiden.appendChild(solsiden_p4);

    foot.appendChild(solsiden);


    const tiller = document.createElement("div");
    tiller.className = "kontaktlokasjon";

    const tiller_h4 = document.createElement("h4");
    tiller_h4.id = "tiller";
    const tiller_h4_tekst = document.createTextNode("TILLER");
    tiller_h4.appendChild(tiller_h4_tekst);
    tiller.appendChild(tiller_h4);

    const tiller_p1 = document.createElement("p");
    const tiller_p1_tekst = document.createTextNode("ÅPNINGSTIDER: man-lør(10-18)");
    tiller_p1.appendChild(tiller_p1_tekst);
    tiller.appendChild(tiller_p1);

    const tiller_p2 = document.createElement("p");
    const tiller_p2_tekst = document.createTextNode(" ADR: Østre Rosten 28-30");
    tiller_p2.appendChild(tiller_p2_tekst);
    tiller.appendChild(tiller_p2);

    const tiller_p3 = document.createElement("p");
    const tiller_p3_tekst = document.createTextNode("E-MAIL: tiller@klipp.no");
    tiller_p3.appendChild(tiller_p3_tekst);
    tiller.appendChild(tiller_p3);

    const tiller_p4 = document.createElement("p");
    const tiller_p4_tekst = document.createTextNode("TLF: 968 19 068");
    tiller_p4.appendChild(tiller_p4_tekst);
    tiller.appendChild(tiller_p4);

    foot.appendChild(tiller);

    const soMe = document.createElement("div");
    soMe.id = "so_me";

    const insta = document.createElement("div");
    insta.id = "insta"
    const insta_bilde = document.createElement("img");
    const insta_tekst = document.createElement("p");
    const insta_teksten = document.createTextNode("instagram.com/klpp")
    insta_bilde.src = "images/instagram_logo.svg";
    insta_bilde.id = "instagram"
    insta_tekst.appendChild(insta_teksten);
    insta.appendChild(insta_bilde);
    insta.appendChild(insta_tekst);
    soMe.appendChild(insta);

    const face = document.createElement("div");
    face.id = "face"
    const face_bilde = document.createElement("img");
    const face_tekst = document.createElement("p");
    const face_teksten = document.createTextNode("facebook.com/klpp")
    face_bilde.src = "images/facebook_logo.svg";
    face_bilde.id = "facebook"
    face_tekst.appendChild(face_teksten);
    face.appendChild(face_bilde);
    face.appendChild(face_tekst);
    soMe.appendChild(face);


    foot.appendChild(soMe);

}

footer()


