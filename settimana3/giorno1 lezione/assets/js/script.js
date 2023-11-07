let html = document.getElementById("HTML");
let css = document.getElementById("CSS");
let js = document.getElementById("JS");

let scelti = [html,  css, js];


function invia() {
    let corsi = [];
    document.getElementById("scelti").innerHTML = "";
    scelti.forEach((el) => {
        if (el.checked) {
            corsi.push(el.value);
        }
    });
    document.getElementById("scelti").innerHTML= `corsi scelti: ${corsi}`
}