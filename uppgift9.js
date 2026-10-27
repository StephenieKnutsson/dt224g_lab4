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


// -------------------------------------------------------------------------





/*
// LOOP som går igenom arrayens innehåll
for (let i = 1; i < people.length; i++) {
    console.log(people[{i}]);
};
*/


// HUUUUR göra när det är OBJEKT INOM ARRAY????





// ---------------------------------------------------------------


// Funktion som:
    //1. skriver ut varje persons namn och stad 
function info () {
    console.log(people[1].name + " bor i " + people[1].city);
};
info (); // OUTPUT: "Sofie bor i Hudiksvall"

function info () {
    console.log(people[2].name + " bor i " + people[2].city);
};
info (); // OUTPUT: "Markus bor i Härnösand"

function info () {
    console.log(people[0].name + " bor i " + people[0].city);
};
info (); // OUTPUT: "Anna bor i Sundsvall"


// ---------------------------------------------------------------


// Funktion som:
    //2. använder ett villkor för att avgöra om personen är myndig
function fullInfo () {
    if (people.age <18) {
        console.log(people[1].name + " bor i " + people[1].city + " och är " + "inte myndig.");
    } else {
        console.log(people[1].name + " bor i " + people[1].city+ " och är " + "myndig.");
    }
};
fullInfo (); // OUTPUT: "Sofie bor i Hudiksvall och är myndig."

function fullInfo () {
    if (people.age <18) {
        console.log(people[0].name + " bor i " + people[0].city + " och är " + "inte myndig.");
    } else {
        console.log(people[0].name + " bor i " + people[0].city+ " och är " + "myndig.");
    }
};
fullInfo (); // OUTPUT: "Anna bor i Sundsvall och är myndig."

function fullInfo () {
    if (people[2].age <18) {
        console.log(people[2].name + " bor i " + people[2].city + " och är " + "inte myndig.");
    } else {
        console.log(people[2].name + " bor i " + people[2].city+ " och är " + "myndig.");
    }
};
fullInfo (); // OUTPUT: "Markus bor i Härnösand och är inte myndig."
