'use strict';

//Definizione variabili base
//let userName = document.getElementById('user-name').value('Mario Rossi');
let kmUser;
let ageUser;
let ticketPrice;
const inputButton = document.getElementById('calculate');

//Variabili sconti
const discountMinor = 0.2;
const discountOver = 0.4;

//Definizione condizioni per valutare eventuale sconto e stampa calcolo su click del bottone
inputButton.addEventListener('click', 
    function() {
        kmUser = document.getElementById('km').value;
        ageUser = document.getElementById('age').value;
        ticketPrice = 0.21 * kmUser;
        if (ageUser === 'minor') {
            ticketPrice -= ticketPrice * discountMinor;
        } else if (ageUser === 'over') {
            ticketPrice -= ticketPrice * discountOver;
        }
        console.log(kmUser, ageUser)
        console.log(ticketPrice.toFixed(2));
        }
)


