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
const productPrice = 100;
const productCount = 3;

// Deklarerar variabler för beskrivning och beräkning
const price = ("Pris: " + productPrice + " kr");
const count = ("Antal: " + productCount);
const totalPrice = ("Totalt: " + productPrice * productCount + " kr");


// Deklarerar variabler för beräkning av moms och total moms
const moms = productPrice * 0.25;
const totalMoms = ("Totalt inklusive moms: " + moms * productCount + " kr");

console.log(moms);

// Result som en array för att skriva ut variablerna på separata rader
const result = [price, count, totalPrice, totalMoms];

console.log(result);