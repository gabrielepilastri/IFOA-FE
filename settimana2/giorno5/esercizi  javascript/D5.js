/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("esercizio 1")

const pets = ['dog', 'cat', 'hamster', 'redfish', 'beever']

console.log(pets)

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("esercizio 2")

let petsAlfabetici = pets.sort();

console.log(petsAlfabetici)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("eserizio 3")

let petsInvertiti = pets.reverse();

console.log(petsInvertiti)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("esercizio 4")

function spostaPets() {
  let togliPrimo = pets.shift();
  pets.push(togliPrimo);
}

spostaPets();

console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("esercizio 5")

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = "CI 340 AO";
cars[1].licensePlate = "CO 567 ME";
cars[2].licensePlate = "ST 789 AI";

console.log(cars[0].licensePlate)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("esercizio 6")

serie1 = {
  brand : 'BMW',
  model : 'Serie 1',
  color : 'white',
  trims : ['GT', 'sport', 'M'],
  licensePlate : "BE 123 NE",
}

cars.push(serie1)

console.log(cars[3].trims)

let rimuoviTrim = cars[0,1,2,3].trims.pop();

console.log(cars[3].trims)



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("esercizio 7")

const justTrims = [];

let primoTrims = cars[0].trims.shift();

let secondoTrims = cars[1].trims.shift();

let terzoTrims = cars[2].trims.shift();

let quartoTrims = cars[3].trims.shift();

justTrims.push(primoTrims, secondoTrims, terzoTrims, quartoTrims);

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("esercizio 8")

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz")
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("esercizio 9")

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


let i = 0;

while (numericArray[i] !== 32) {
  console.log(numericArray[i])
  i++
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("esercizio 10")

const charactersArray = ['g', 'n', 'u', 'z', 'd'];

let lettera = charactersArray[i]

let charactersLetters = [];


//SO CHE è UN CASINO MA DOPO DUE ORE è L'UNICO MODO CHE HO TROVATO PER OTTENERE IL GIUSTO OUTPUT

switch (charactersArray[0]) {
  case "a":
    charactersLetters.push(1);
    break;
    case "b":
    charactersLetters.push(2);
    break;
    case "c":
    charactersLetters.push(3);
    break;
    case "d":
    charactersLetters.push(4);
    break;
    case "e":
    charactersLetters.push(5);
    break;
    case "f":
    charactersLetters.push(6);
    break;
    case 'g':
    charactersLetters.push(7);
    break;
    case "h":
    charactersLetters.push(8);
    break;
    case "i":
    charactersLetters.push(9);
    break;
    case "l":
    charactersLetters.push(10);
    break;
    case "m":
    charactersLetters.push(11);
    break;
    case "n":
    charactersLetters.push(12);
    break;
    case "o":
    charactersLetters.push(13);
    break;
    case "p":
    charactersLetters.push(14);
    break;
    case "q":
    charactersLetters.push(15);
    break;
    case "r":
    charactersLetters.push(16);
    break;
    case "s":
    charactersLetters.push(17);
    break;
    case "t":
    charactersLetters.push(18);
    break;
    case "u":
    charactersLetters.push(19);
    break;
    case "v":
    charactersLetters.push(20);
    break;
    case "z":
    charactersLetters.push(21);
    break;
}
switch (charactersArray[1]) {
  case "a":
    charactersLetters.push(1);
    break;
    case "b":
    charactersLetters.push(2);
    break;
    case "c":
    charactersLetters.push(3);
    break;
    case "d":
    charactersLetters.push(4);
    break;
    case "e":
    charactersLetters.push(5);
    break;
    case "f":
    charactersLetters.push(6);
    break;
    case 'g':
    charactersLetters.push(7);
    break;
    case "h":
    charactersLetters.push(8);
    break;
    case "i":
    charactersLetters.push(9);
    break;
    case "l":
    charactersLetters.push(10);
    break;
    case "m":
    charactersLetters.push(11);
    break;
    case "n":
    charactersLetters.push(12);
    break;
    case "o":
    charactersLetters.push(13);
    break;
    case "p":
    charactersLetters.push(14);
    break;
    case "q":
    charactersLetters.push(15);
    break;
    case "r":
    charactersLetters.push(16);
    break;
    case "s":
    charactersLetters.push(17);
    break;
    case "t":
    charactersLetters.push(18);
    break;
    case "u":
    charactersLetters.push(19);
    break;
    case "v":
    charactersLetters.push(20);
    break;
    case "z":
    charactersLetters.push(21);
    break;
}

switch (charactersArray[2]) {
  case "a":
    charactersLetters.push(1);
    break;
    case "b":
    charactersLetters.push(2);
    break;
    case "c":
    charactersLetters.push(3);
    break;
    case "d":
    charactersLetters.push(4);
    break;
    case "e":
    charactersLetters.push(5);
    break;
    case "f":
    charactersLetters.push(6);
    break;
    case 'g':
    charactersLetters.push(7);
    break;
    case "h":
    charactersLetters.push(8);
    break;
    case "i":
    charactersLetters.push(9);
    break;
    case "l":
    charactersLetters.push(10);
    break;
    case "m":
    charactersLetters.push(11);
    break;
    case "n":
    charactersLetters.push(12);
    break;
    case "o":
    charactersLetters.push(13);
    break;
    case "p":
    charactersLetters.push(14);
    break;
    case "q":
    charactersLetters.push(15);
    break;
    case "r":
    charactersLetters.push(16);
    break;
    case "s":
    charactersLetters.push(17);
    break;
    case "t":
    charactersLetters.push(18);
    break;
    case "u":
    charactersLetters.push(19);
    break;
    case "v":
    charactersLetters.push(20);
    break;
    case "z":
    charactersLetters.push(21);
    break;
}

switch (charactersArray[3]) {
  case "a":
    charactersLetters.push(1);
    break;
    case "b":
    charactersLetters.push(2);
    break;
    case "c":
    charactersLetters.push(3);
    break;
    case "d":
    charactersLetters.push(4);
    break;
    case "e":
    charactersLetters.push(5);
    break;
    case "f":
    charactersLetters.push(6);
    break;
    case 'g':
    charactersLetters.push(7);
    break;
    case "h":
    charactersLetters.push(8);
    break;
    case "i":
    charactersLetters.push(9);
    break;
    case "l":
    charactersLetters.push(10);
    break;
    case "m":
    charactersLetters.push(11);
    break;
    case "n":
    charactersLetters.push(12);
    break;
    case "o":
    charactersLetters.push(13);
    break;
    case "p":
    charactersLetters.push(14);
    break;
    case "q":
    charactersLetters.push(15);
    break;
    case "r":
    charactersLetters.push(16);
    break;
    case "s":
    charactersLetters.push(17);
    break;
    case "t":
    charactersLetters.push(18);
    break;
    case "u":
    charactersLetters.push(19);
    break;
    case "v":
    charactersLetters.push(20);
    break;
    case "z":
    charactersLetters.push(21);
    break;
}

switch (charactersArray[4]) {
  case "a":
    charactersLetters.push(1);
    break;
    case "b":
    charactersLetters.push(2);
    break;
    case "c":
    charactersLetters.push(3);
    break;
    case "d":
    charactersLetters.push(4);
    break;
    case "e":
    charactersLetters.push(5);
    break;
    case "f":
    charactersLetters.push(6);
    break;
    case 'g':
    charactersLetters.push(7);
    break;
    case "h":
    charactersLetters.push(8);
    break;
    case "i":
    charactersLetters.push(9);
    break;
    case "l":
    charactersLetters.push(10);
    break;
    case "m":
    charactersLetters.push(11);
    break;
    case "n":
    charactersLetters.push(12);
    break;
    case "o":
    charactersLetters.push(13);
    break;
    case "p":
    charactersLetters.push(14);
    break;
    case "q":
    charactersLetters.push(15);
    break;
    case "r":
    charactersLetters.push(16);
    break;
    case "s":
    charactersLetters.push(17);
    break;
    case "t":
    charactersLetters.push(18);
    break;
    case "u":
    charactersLetters.push(19);
    break;
    case "v":
    charactersLetters.push(20);
    break;
    case "z":
    charactersLetters.push(21);
    break;
}


// charactersLetters.push(lettera);

console.log(charactersLetters)

