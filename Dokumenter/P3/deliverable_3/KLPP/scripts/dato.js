//kobling til covid-19 siden
let date = document.getElementById("oppdatering");

let q = new Date();
let w = q.getDate();
let i = q.getMonth();

console.log(q);
console.log(w);
console.log(i);

let month = new Array();
month[0] = "januar";
month[1] = "februar";
month[2] = "mars";
month[3] = "april";
month[4] = "mai";
month[5] = "juni";
month[6] = "juli";
month[7] = "august";
month[8] = "september";
month[9] = "oktober";
month[10] = "november";
month[11] = "desember";
let n = month[q.getMonth()];

document.getElementById("oppdatering").innerHTML = "Oppdatert: " + w + ". " + n;

console.log("Oppdatert: " + w + ". " + n)
