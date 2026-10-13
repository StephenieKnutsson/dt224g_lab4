/* Lösning till Uppgift 6 - Funktioner. Av Stephenie Knutsson, 2026 */
"use strict"

/* Beräkna arean av en rektangel */
function calculateArea(height, width) {
    /* Deklarerar variabeln AREA genom area=height*width */
    let area = (height * width)
    /* Returvärde att funktionen ska ge räkna ut och returnera area */
    return area;
}
/* Anrop = Skriv ut text + funktionen (med värdet på variablerna) */
console.log("Arean är " + calculateArea(65, 87));
