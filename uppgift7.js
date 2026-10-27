/* Lösning till Uppgift 7 - Arrayer och funktioner. Av Stephenie Knutsson, 2026 */
"use strict"


// ARRAY med sex st tal
let numbers = [5, 7, 3, 1, 8, 6]; 

console.log(numbers); // OUTPUT ===> (6) [5, 7, 3, 1, 8, 6]


// --------------------------------------------------------------------------------------------------------------------------------------------


// LOOP som går igenom arrayens innehåll
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
} // OUTPUT ===> 5, 7, 3, 1, 8, 6


// --------------------------------------------------------------------------------------------------------------------------------------------


// Funktion som beräknar summan av alla talen i arrayen
function calculateSum (numbers) {
    let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }    

    return sum;
}

console.log("Summan är " + calculateSum(numbers)); // OUTPUT: Summan är 30

