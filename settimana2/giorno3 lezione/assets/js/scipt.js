let nome;
let anno;
let eta;
let stato; 
let errore = document.getElementById("errore")
let esegui = false

function eventHandler() {
    leggiForm();
    if (anno >= 1900 && anno<= 2023 && nome != "") {
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else {
        errore.innerHTML = "Attenzione! compila tutti i campi e inserisci un numero tra 1900 e 2023";
        return;
    }
}

function leggiForm() {
    nome = document.getElementById("nome").value;
    anno = document.getElementById("anno").value;
    console.log(nome, anno)
}

function calcolaEta() {
    eta = 2023 - Number(anno);
}

function verifica() {
    stato = (eta >= 18) ? "maggiorenne" : "minorenne";
    console.log(stato)
}

function scrivi() {
    document.getElementById("mioNome").innerHTML = "Ciao " + nome + ";";
    document.getElementById("miaVerifica").innerHTML = "Hai " + eta + " anni e sei " + stato
}