 /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
        document.querySelector("h1").innerText = "Modificato"
       };

       changeTitle();

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        document.querySelector("h1").className = "myHeading"
       };

       addClassToTitle();
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        let paragrafi = document.querySelectorAll("div p");
        paragrafi.forEach(element => element.innerText = "testo cambiato");
       };
 
       changePcontent();

       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        let tuttiLink = document.getElementsByTagName("a");
        for (let i = 0; i < tuttiLink.length - 1; i++) {
            tuttiLink[i].href = "https://www.google.com"
        }
       };

       changeUrls();
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {
        let secondList = document.getElementById("secondList");
        let lista = document.createElement("li");
        secondList.appendChild(lista);
        lista.innerText = "4th"
       }

       addToTheSecond();
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        let primoDiv = document.getElementById("primoDiv");
        let paragrafo = document.createElement("p");
        primoDiv.appendChild(paragrafo);
        paragrafo.innerText = "ciao"
       }

       addParagraph();
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {
        let firstList = document.getElementById("firstList");
        firstList.style.display = "none";
       }

       hideFirstUl();
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        document.querySelectorAll("ul").forEach(element => element.className = "verdi");
       }

       paintItGreen();
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
        let titolo = document.querySelector("h1");
        titolo.onclick = removeLetter()
       }

       makeItClickable()

       function removeLetter() {
        let titolo = document.querySelector("h1");
        titolo.onclick= function() {
            titolo.innerText titolo.innerText.slice(0, 1);
        }
       };
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        const footer = document.querySelector("footer");
        footer.onclick = function() {
            const link = document.querySelector("footer a");
            alert(link.getAttribute("href"))
        }
       }

       revealFooterLink();
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {
        const prodotti = [
            {
                id: 1,
                immagine: "immagine1",
                nomeProd: "prodotto1",
                quantita: 32,
                prezzo: 43,
            },
            {
                id: 2,
                immagine: "immagine2",
                nomeProd: "prodotto2",
                quantita: 37,
                prezzo: 46,
            },
            {
                id: 3,
                immagine: "immagine3",
                nomeProd: "prodotto3",
                quantita: 33,
                prezzo: 45,
            },
            {
                id: 4,
                immagine: "immagine4",
                nomeProd: "prodotto4",
                quantita: 66,
                prezzo: 77,
            },
            {
                id: 5,
                immagine: "immagine5",
                nomeProd: "prodotto5",
                quantita: 33,
                prezzo: 22,
            },
        ]
       }

       let contenitore = document.getElementById("tableArea");
       const tabella = document.createElement("table");

       let primaRiga = document.createElement("tr");

       const intImmagine = document.createElement("th");
       intImmagine.innerText= "immmagine";
       const intNome = document.createElement("th");
       intNome.innerText= "nome";
       const intqty = document.createElement("th");
       intqty.innerText= "quantità";
       const intPrezzo = document.createElement("th");
       intPrezzo.innerText= "prezzo";


 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {} //button!!!!!
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}