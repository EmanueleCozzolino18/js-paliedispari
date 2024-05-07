/* STRICT MODE */
"use strict";

console.log("Lo script funziona correttamente")

//REGISTRIAMO LE SCELTE DEL UTENTE
let sceltaUser = prompt("Scrivi pari o dispari");
let sceltaNumUser = parseInt(prompt("scrivi un numero da 1 a 5"));
let sceltaNumComputer = computerRandomNumber(1, 5);
let sommaNum = sceltaNumUser + sceltaNumComputer;

//
console.log(`La scelta del computer è ${sceltaNumComputer} somma: ${sommaNum}`)

//LOGGHIAMO LE SCELTE DEL UTENTE
console.log(`Hai scelto ${sceltaUser} e il numero ${sceltaNumUser}`)

//FUNZIONE PER GENERARE NUMERO PC
function computerRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

