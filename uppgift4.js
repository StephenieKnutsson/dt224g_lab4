/* Lösning till Uppgift 4 - Loopar och villkor. Av Stephenie Knutsson, 2026 */
"use strict"


// Loop som skriver ut alla heltal från 1 till 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


// Ändring av loopen --> endast jämna tal skrivs ut (ett villkor INOM loopen)
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
}
