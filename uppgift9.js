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


// ----------------------------------------------------------------------------------------------------------------------------------------

// Funktion som loopar igenom arrayens innehåll
function objectInfo() {
    for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
};
}

objectInfo(); 
// OUPUT:
// {name: 'Anna', age: 30, city: 'Sundsvall'}
// {name: 'Sofie', age: 45, city: 'Hudiksvall'}
// {name: 'Markus', age: 16, city: 'Härnösand'}


// ----------------------------------------------------------------------------------------------------------------------------------------


// Funktion som:
    // 1. skriver ut varje persons namn och stad 
    // 2. använder ett villkor för att avgöra om personen är myndig
function fullInfo() {
    for (let i = 0; i < people.length; i++) {
        if (people[i].age < 18) {   // UNDER 18 år
        console.log(people[i].name + " bor i " + people[i].city + " och är " + "inte myndig.");
        } else { // MYNDIG
        console.log(people[i].name + " bor i " + people[i].city + " och är " + "myndig.");
        }
    }
}

fullInfo(); 
// OUPUT
// Anna bor i Sundsvall och är myndig.
// Sofie bor i Hudiksvall och är myndig.
// Markus bor i Härnösand och är inte myndig.
