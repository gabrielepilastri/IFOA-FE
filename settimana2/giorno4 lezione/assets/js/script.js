let numero1;
let numero2;
let operazione;


function eventHandler() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    operazione = document.getElementById("operazione").value;



    if (controlla()) {
        calcola();
        scrivi();
        cancellaForm();
    } else {
        return;
    }
}

function controlla() {
    if (numero1 === "" || numero2 === "" || operazione === "") {
        alert("inserire i due numeri e scegliere un'operazione");
        return false;
    } else {
        return true;
    }
}

function calcola() {
    let nomeOperazione;
    let risultato;
    switch(operazione)  {
        case "1":
            nomeOperazione = "addizionne";
            risultato = Number(numero1) + Number(numero2);
            break;
            case "2":
                nomeOperazione= "sottrazione";
            risultato = Number(numero1) - Number(numero2);
            break;
            case "3":
                nomeOperazione = "moltiplicazione";
            risultato = Number(numero1) * Number(numero2);
            break;
            case "4":
                nomeOperazione = "divisione";
            risultato = Number(numero1) / Number(numero2);
            break;
    }
    scrivi(nomeOperazione, risultato);
}

function scrivi() {
    document.getElementById("risultato").innerHTML = "il risultato della " + nomeOperazione + " è: " + risultato;
}