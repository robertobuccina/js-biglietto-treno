

var kmPercorrenza = parseInt(prompt("Km che si desidera percorrere"));
var etaPasseggero =parseInt(prompt("età passeggero"));
var prezzoBiglietto = (kmPercorrenza * 0.21)


if (Number.isNaN(kmPercorrenza) || Number.isNaN(prezzoBiglietto)){
    alert ("dati mancanti o incompleti")
}

if (etaPasseggero >= 65) {
    console.log (prezzoBiglietto - (prezzoBiglietto * 0.4));
}

if (etaPasseggero <= 18) {
    console.log (prezzoBiglietto - (prezzoBiglietto * 0.2));
}

if (etaPasseggero > 18 || etaPasseggero > 65) {
    console.log (prezzoBiglietto)
}

document.getElementById("risultato").innerHTML = "Euro" + " " + prezzoBiglietto;

document.getElementById("passeggero").innerHTML = "Età Passeggero" + ":" + etaPasseggero;

document.getElementById("km-tratta").innerHTML = "Km tratta" + ":" + kmPercorrenza;








