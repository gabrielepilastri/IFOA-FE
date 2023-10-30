/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// SCRIVI QUI LA TUA RISPOSTA 

document.getElementById("titolo").innerHTML="number sarà un numero, string sarà un testo, boolean sarà o vero o falso, null è un dato che non ha valore (0) mentre undefined è un dato a cui per ora non è assegnato valore ma che verrà assegnato in seguito"
// number= il dato sarà un numero
//  string= il dato sarà un testo scritto
//  boolean= il dato sarà unn valore che può essere o  vero o falso
//  null= al dato è stato volontariamente assegnato un valore nullo (0)
// undefined= il dato per ora ha valore indefinito 


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome= "Gabriele";
console.log(nome)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primoNumero= 12;
let secondoNumero= 20;
let somma= primoNumero += secondoNumero;
console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x= 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
nome= "Pilastri";
console.log(nome)



// const a= 2;
// console.log(a)
// const a= 3;


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione= 4 - x;
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1= "john";
let name2= "John";
let verifica= (name1 === name2) ? "sono uguali" : "sono diversi";
console.log(verifica)
let verificona= (name1.toLowerCase === name2.toLowerCase) ? "sono uguali" : "sono diversi"
console.log(verificona)

// let verifica= !(name1 === name2.toLowerCase);
// console.log(verifica)