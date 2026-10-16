/* Lösning till Uppgift 7 - Arrayer och funktioner. Av Stephenie Knutsson, 2026 */
"use strict"

// ARRAY med tal
let age = []; 



// FUNKTION som tar emot arrayen som parameter och räknar ut summan av talen i arrayen
function calculateSum ([age]) {
    let sum = (age [0] + [1] + [2] + [3] + [4] + [5])
    return sum;
}

console.log("Summan är " + calculateSum);



// LOOP som går igenom arrayens innehåll
for (let i = 0; i < age.length; i++) {
    console.log(age[i]);
};