/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function area(l1, l2) {
    risultato = l1 * l2;
    return risultato;
}

console.log(area(4, 3))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
    if (n1 != n2) {
        somma = n1 + n2;
        return somma;
    } else {
        somma = (n1 + n2) * 3;
        return somma;
    }
}

console.log(crazySum(4, 4))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let diff = 19;

function crazyDiff(num1, diff) {
    if (num1 <= 19) {
        differenza = Math.abs(num1 - diff);
        return differenza;
    } else {
        differenza = (num1 - diff) * 3;
        return differenza;
    }
}

console.log(crazyDiff(6, diff))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
     if (n >= 20 && n <= 100 || n === 400) {
        return true
     }
     else {
        return false
     }
}

console.log(boundary(55))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let parola = "EPICODE ";

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
    return stringa;
    } else {
        return (parola + stringa)
    }
}


console.log(epify("ciao a tutti"))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(positivo) {
    if (positivo > 0) {
        if (positivo % 7 === 0 || positivo % 3 === 0) {
            return "Il numero è un multiplo di 3 o di 7";
        } else {
            return "Il numero non è un multiplo di 3 o di 7";
        }
    } else {
        return "non è un numero positivo";
    }
}

console.log(check3and7(70))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let parola1 = "EPICODE";
let parola2 = "";

function reverseString(invertire) {
   
    for (let i = invertire.length -1; i >= 0; i--) {
    parola2 += parola1[i]
    }
    return parola2;
}

console.log(reverseString(parola1))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let frase1 = "tutte le prime lettere maiuscole";

function upperFirst(stringa) {
    let arrayFrase = stringa.split(" ");
    let risultato1= [];
    for (let i = 0; i < arrayFrase.length; i++) {
        // let prima = arrayFrase[i].charAt(0);
        // let parolaTagliata = arrayFrase[i].slice(1);
        // let parolaFinale = prima.toUpperCase() + parolaTagliata;
        let parolaFinale = arrayFrase[i].charAt(0).toUpperCase() + arrayFrase[i].substring(1);
        risultato1.push(parolaFinale);
    }
    return risultato1.join(" ");
}

console.log(upperFirst(frase1))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let frase = "EPICODE";

function cutString(taglia) {
    tagliata = frase.substring(1);
    tagliatissima = tagliata.slice(0,-1)
    return tagliatissima
}

console.log(cutString(frase))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let arrayNumeri = [];
    for (let i = 0; i < n; i++) {
        arrayNumeri.push(Math.floor(Math.random() * 11));
    }
    return arrayNumeri;
}

console.log(giveMeRandom(5))