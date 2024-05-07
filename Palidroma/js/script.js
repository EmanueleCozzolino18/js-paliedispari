/* STRICT MODE */
"use strict";

//LOG PER VERIFCA CONESSIONE INDEX
console.log("Lo script è parito correttamente");

//Registriamo la parola del utente
let paliUser = prompt("Inserisci una parola");
let paliCheck = paliSwap(paliUser)

//Condizione per verificare se la parola è palindroma
if (paliUser == paliCheck) {
    console.log("La parola inserita è plindroma: " + paliCheck);
}

else {
}
console.log("La parola inserita non è palindroma: " + paliCheck);

//Funzione 
function paliSwap(parola) {
    let swapPali = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        swapPali += parola[i]
    }
    return swapPali;
}

