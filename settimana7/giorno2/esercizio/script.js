let nomePrecedente = document.getElementById("nomePrecedente");
let campoNome = document.getElementById("campoNome");
let inserisci = document.getElementById("inserisci");
let cancella = document.getElementById("cancella");


inserisci.addEventListener("click", () => {
    let nome = campoNome.value;
    if (nome == "") {
        alert("Inserisci un nome");
    } else {
       localStorage.setItem("nomePrecedente", nome);
    };
    check();
});

cancella.addEventListener("click", () => {
    localStorage.removeItem("nomePrecedente");
    check();
});

function check() {
    if (localStorage.getItem("nomePrecedente")) {
        testo = `Ciao, ${localStorage.getItem("nomePrecedente")}`;
    } else {
        testo = "Non hai inserito nessun nome";
    }
    nomePrecedente.innerHTML = testo;
}

window.onload = check();







let timer = document.getElementById("timer");
let i = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;

function contatore() {
    i= i +1;
    timer.innerText = `${i} secondi trascorsi`;
    sessionStorage.setItem("count", i);
}

setInterval(contatore, 1000);