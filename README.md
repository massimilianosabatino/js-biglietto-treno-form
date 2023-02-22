# Esercizio Costo biglietto del treno con form insermiento dati

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
- Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- - il prezzo del biglietto è definito in base ai km (0.21 € al km)
- - va applicato uno sconto del 20% per i minorenni
- - va applicato uno sconto del 40% per gli over 65.

__MILESTONE 1:__  
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

__MILESTONE 2:__  
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Ricordate: il primo push dovrà essere un file README.md (potete scrivere testo senza concentrarvi sullo stile markdown) contenente la risoluzione dell’esercizio in linguaggio naturale!

//Creazione in html di un campo input di tipo numerico per km  
//Creazione in html di un campo input di tipo scelta per età (Minorenne - Maggiorenne - Over 65 [Default Maggiorenne])  
//Creazione bottone in html per avviare il calcolo

//Inizializzazione variabile userName chiedendo all'utente il nome e il cognome tramite campo di tipo testo  
//Inizializzazione variabile kmUser chiedendo all'utente il numero di Km che vuole percorrere tramite campo di tipo numerico (convertire in numero con la funzione number)  
//Inizializzazione variabile ageUser chiedendo all'utente l'età tramite campo di tipo select  
//Inizializzazione variabile ticketPrice con valore derivato dal calcolo del costo chilometrico moltiplicando 0.21 (prezzo € al km definito) * la variabile kmUser  
//Inizializzazione variabile discountMinor con valore 0.2  
//Inizializzazione variabile discountOver con valore 0.4

//Definizione condizioni per valutare eventuale sconto  
   //SE ageUser === minor  
      modifico il valore della variabile ticketPrice con --> ticketPrice -= ticketPrice * discountMinor  
   //ALTRIMENTI SE ageUser === over  
      modifico il valore della variabile ticketPrice con --> ticketPrice -= ticketPrice * discountOver  

//Converto il risultato in una stringa con 2 decimali usando il metodo .toFixed(2) 

---Milestone 1 raggiunta---

//Creazione struttura pagina html. Nella parte superiore verra realizato un form con:
- Campo di testo per nome e cognome
- Campo numerico per i km
- Campo select per l'età
- Bottone genera che avvia il calcolo
- Bottone annulla che resetta i campi  

//Crazione in html della parte inferiore della pagina (questa parte viene visualizzata quando viene premuto il bottone genera e scompare quando viene premuto il bottone annulla) contenente:
- Nome e cognome passeggero
- Tipologia di offerta applicata
- Numero carrozza
- Codice cambio prenotazione
- Costo biglietto

//Inizializzazione variabile con numero di carrozza casuale  
//Inizializzazione variabile con codice cp casuale  
//Creazione evento in ascolto che attende il click sul bottone genera  
   //Al click manipola il DOM per visualizzare la parte inferiore
//Manipolazione del DOM per inserire i dati contenuti nelle variabili all'interno degli spazi predisposti