/* Lösning till Uppgift 8 - Objekt. Av Stephenie Knutsson, 2026 */
"use strict"


let book = {
    title: "The Eye of the World",
    author: "Robert Jordan",
    publishDate: "1990",
};

console.log(book.author);




// Funktion som återger beskrivning av objektet
function bookInfo () {
    console.log("Titel: " + book.title + ", författare: " + book.author + ", utgivningsår: " + book.publishDate);
};

bookInfo (); // OUTPUT ==> Titel: The Eye of the World, författare: Robert Jordan, utgivningsår: 1990



