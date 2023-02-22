'use strict';

//Definizione variabili base
let userName;
let kmUser;
let ageUser;
let ticketPrice;
const inputButton = document.getElementById('calculate');
const resetButton = document.getElementById('cancel');

//Variabili sconti
const discountMinor = 0.2;
const discountOver = 0.4;

//Variabili campi da riempire
const ticketName = document.getElementById('user-name-ticket');
const ticketOffert = document.getElementById('offert');
const ticketCar = document.getElementById('car');
const ticketCp = document.getElementById('cp');

//Variabili casuali
const carNumber = document.getElementById('car');
const cpNumber = document.getElementById('cp');

//Variabile visualizza / nasconde dettagli
const controlSwitch = document.getElementById('control'); 

//Definizione condizioni per valutare eventuale sconto e stampa calcolo su click del bottone
inputButton.addEventListener('click', 
    function() {
        //Popolazione variabili definite da utente
        userName = document.getElementById('user-name').value;
        kmUser = document.getElementById('km').value;
        ageUser = document.getElementById('age').value;
        //inserimento valori base
        ticketOffert.innerHTML = 'Biglietto standard';
        ticketPrice = 0.21 * kmUser;
        //Condizioni sconti
        if (ageUser === 'minor') {
            ticketPrice -= ticketPrice * discountMinor;
            ticketOffert.innerHTML = 'Sconto giovani';
        } else if (ageUser === 'over') {
            ticketPrice -= ticketPrice * discountOver;
            ticketOffert.innerHTML = 'Sconto over';
        }
        //Arrotondamento valore prezzo
        const ticketPriceFinal = ticketPrice.toFixed(2);
        //Inserimento valori su dettagli biglietti
        ticketName.innerHTML = userName;
        carNumber.innerHTML = Math.floor(Math.random() * 7) + 1;
        cpNumber.innerHTML = Math.floor(Math.random() * 99999) + 1;
        document.getElementById('ticket-price').innerHTML = ticketPriceFinal;
        
        //Attiva / Disattiva visualizzazione dettagli
        if (!controlSwitch.classList.contains('show')) {
            controlSwitch.classList.add('show');
        }


        console.log(kmUser, ageUser);
        console.log(ticketPrice.toFixed(2));
        }
)

//Nasconde dettagli alla pressione del bottone annulla
resetButton.addEventListener('click', 
    function() {
        controlSwitch.classList.remove('show');
    }
)

