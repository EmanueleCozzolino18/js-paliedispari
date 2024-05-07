/* STRICT MODE */
"use strict";

console.log("Lo script funziona correttamente")

//REGISTRIAMO LE SCELTE DEL UTENTE
let sceltaUser = prompt("Scrivi pari o dispari");
let sceltaNumUser = parseInt(prompt("scrivi un numero da 1 a 5"));
let sceltaNumComputer = computerRandomNumber(1, 5);
let sommaNum = sceltaNumUser + sceltaNumComputer;

//Portiamo in upper case l'input utente
let upperCaseInput = sceltaUser.toUpperCase();

//FUNZIONE PER GENERARE NUMERO PC
function computerRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//CREATE LE CONDIZIONI DI VERIFICA
if (upperCaseInput == "PARI" || upperCaseInput == "DISPARI") {
    //verifica della somma dei numeri
    if (sommaNum % 2 == 0 && upperCaseInput == "PARI") {
        console.log(`${sommaNum} è pari, hai vinto!`);
    } else if (sommaNum % 2 != 0 && upperCaseInput == "DISPARI") {
        console.log(`${sommaNum} è dispari hai vinto!`);
    }
    else if (sommaNum % 2 == 0 && upperCaseInput == "DISPARI") {
        console.log(`${sommaNum} è pari hai scelto disperi hai perso!`);
    } else if (sommaNum % 2 != 0 && upperCaseInput == "PARI") {
        console.log(`${sommaNum} è dispari hai scelto pari hai perso!`);
    }
} else {
    console.log("Non hai inserito se il numero è pari o dispari")
}


