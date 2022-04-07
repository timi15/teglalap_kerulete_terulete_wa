const aoldal = document.getElementById("aoldal");
const boldal = document.getElementById("boldal");
const kerulet = document.getElementById("kerulet");
const terulet = document.getElementById("terulet");
const gomb = document.getElementById("szamol");
const atlo = document.getElementById("atlo");


function szamol() {

    if ((Number)(aoldal.value) > 0 && (Number)(boldal.value) > 0) {

        kerulet.innerHTML = 2 * ((Number)(aoldal.value) + (Number)(boldal.value)) + " cm";
        terulet.innerHTML = (Number)(aoldal.value) * (Number)(boldal.value) + " cm2";
        atlo.innerHTML = Math.round(Math.sqrt(((Number)(aoldal.value) * (Number)(aoldal.value)) + ((Number)(boldal.value) * (Number)(boldal.value)))) + " cm";


    }
    else {
        kerulet.innerHTML = "Érvénytelen";
        terulet.innerHTML = "Érvénytelen";
        atlo.innerHTML = "Érvénytelen";

    }



}


gomb.addEventListener("click", szamol)