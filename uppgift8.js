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
    console.log("Titel: " + book.title + "Författare: " + book.author + "Utgivningsår: " + book.publishDate);
};

bookInfo ();




/*
console.log("Titel: " + title + "," + "Författare: " + author + "," + "Utgivningsår: " + publishDate + ".");


function bookInfo (titleInput, authorInput, publishedInput) {
    this.title = titleInput;
    this.authour = authorInput;
    this.published = publishedInput;
    this.info = function () {
        console.log (`Titel: ${this.title}, Författare: ${this.author}, Utgivningsår: ${this.published}`)
    }

}
    */