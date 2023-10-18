// COMMON
const prezzoBase = 0.21;
const scontoMinori = 0.20;
const scontoOver = 0.40;


// RACCOLTA DATI
const userNome = prompt("Ciao come ti chiami?");
const userChilometri = parseInt(prompt("Dimmi quanti chilometri vuoi fare"));
const userEtà = parseInt(prompt("Dimmi quanti anni hai"));
console.log(userChilometri, userEtà);


// LOGICA DEL PROGRAMMA
const biglettoIntero = (userChilometri * prezzoBase) .toFixed(2);
console.log(biglettoIntero);
let message = ""

if ( !(userEtà < 18 || userEtà >= 65)) {
    let biglietto = biglettoIntero;
    console.log(biglietto);

    message = 
    `
    <h2> Ciao ${userNome} !</h2>
    <p> Il costo intero del biglietto per una tratta di ${userChilometri} km e di ${biglettoIntero} € </p>
    `

} else if (userEtà > 65) {
    let biglietto  = biglettoIntero - (biglettoIntero * scontoOver);
    biglietto = biglietto.toFixed(2);

    message = 
    `
    <h2> Ciao ${userNome} !</h2>
    <p> Il costo intero del biglietto per una tratta di ${userChilometri} km e di ${biglettoIntero} € ma visto che te hai ${userEtà} anni hai diritto ad uno sconto del 40% </p>
    <p> Quindi il prezzo del biglietto con sconto applicato è di ${biglietto} €
    `

} else if (userEtà < 18) {
    let biglietto = biglettoIntero - (biglettoIntero * scontoMinori);
    biglietto = biglietto.toFixed(2);

    message = 
    `
    <h2> Ciao ${userNome} !</h2>
    <p> Il costo intero del biglietto per una tratta di ${userChilometri} km e di ${biglettoIntero} € ma visto che te hai ${userEtà} anni hai diritto ad uno sconto del 20% </p>
    <p> Quindi il prezzo del biglietto con sconto applicato è di ${biglietto} €
    `
}

// STAMPA IL RISULTATO

document.getElementById("biglietto").innerHTML = message;



