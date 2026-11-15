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
const price = ("Pris: " + productPrice + " kr"); // OUTPUT: Pris: 100 kr
const count = ("Antal: " + productCount); // OUTPUT: Antal: 3
const totalPrice = ("Totalt: " + productPrice * productCount + " kr"); // OUTPUT: Totalt: 300 kr


// Deklarerar variabler för beräkning av moms och total moms
const moms = productPrice * 0.25; // OUTPUT: 25 
const totalMoms = (productPrice + moms) * productCount; // OUTPUT: 375 
const finalPrice = ("Totalt inklusive moms: " + totalMoms + " kr"); // OUTPUT: Totalt inklusive moms: 375 kr


// Result som en array för att skriva ut variablerna på separata rader
const result = price + " " + count + " " + totalPrice + " " + finalPrice;

console.log(result); // OUPUT: Pris: 100 kr Antal: 3 Totalt: 300 kr Totalt inklusive moms: 375 kr
