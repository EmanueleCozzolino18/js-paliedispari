/* STRICT MODE */
"use strict";

//LOG PER VERIFCA CONESSIONE INDEX
console.log("Lo script è parito correttamente");

//Registriamo la parola del utente
let paliUser = prompt("Inserisci una parola");
let paliCheck = (paliUser)

console.log(paliUser)
console.log(paliCheck)


//Funzione 
function paliSwap(parola) {
    let swapPali = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        swapPali += parola[i]
    }
    return swapPali;
}

