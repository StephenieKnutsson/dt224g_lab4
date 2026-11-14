/* Lösning till Uppgift 2 - Operatorer och beräkningar. Av Stephenie Knutsson, 2026 */
"use strict"

/*
Du ska skapa två variabler. 
Den ena ska lagra priset för en produkt och den andra ska lagra antal produkter, till exempel värdena 100 och 3.

Beräkna:
- totalpriset för samtliga antal produkter
- pris inklusive 25 % moms
*/


// Deklarerar två variabler
let productPrice = 100;
let productCount = 3;

// Deklarerar variabler för beskrivning och beräkning
let price = ("Pris: " + productPrice + " kr");
let count = ("Antal: " + productCount);
let totalPrice = ("Totalt: " + productPrice * productCount + " kr");

// Deklarerar variabler för beräkning av moms och total moms
let moms = (productPrice + (productPrice * 0,25));
let totalMoms = ("Totalt inklusive moms: " + moms * productCount + " kr");

// Result som en array för att skriva ut variablerna på separata rader
let result = [price, count, totalPrice, totalMoms];

console.log(result);