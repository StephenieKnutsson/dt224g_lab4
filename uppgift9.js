/* Lösning till Uppgift 9 - Sammanhängande program. Av Stephenie Knutsson, 2026 */
"use strict"

// ARRAY som innehåller 3 objekt
const people = [
    {
        name: "Anna",
        age: 30,
        city: "Sundsvall",
    },
    {
        name: "Sofie",
        age: 45,
        city: "Hudiksvall", 
    },
    {
        name: "Markus",
        age: 16,
        city: "Härnösand", 
    }
]; 

// console.log(people); // OUTPUT ==> (3) [{…}, {…}, {…}]

// console.log(people[1]); // {name: 'Sofie', age: 45, city: 'Hudiksvall'}







/*

// LOOP som går igenom arrayens innehåll
for (let i = 0; i < people.length; i++) {
    console.log(people[{i}]);
};

// HUUUUR göra när det är OBJEKT INOM ARRAY????







// Funktion som:
    1. skriver ut varje persons namn och stad 
function info () {
    console.log(people.name + " bor i " + people.city);
};
info (); // LOGGEN SKRIVER "undefined bor i undefined"



// 2. använder ett villkor för att avgöra om personen är myndig 

let ofAge = i;

if (ofAge <18) {
    console.log("inte myndig");
} else {
    console.log("myndig");
} 
    */