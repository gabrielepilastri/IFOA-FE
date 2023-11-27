window.addEventListener("scroll", function(event) {
    let header = document.querySelector("header")
    let main = document.querySelector("main")

    let mainHeight = main.offsetHeight


    if (window.pageYOffset >= mainHeight - 80) {
        console.log("scrolled")
        header.classList.add("scrolled")
    }
    else {
        header.classList.remove("scrolled")
        console.log("in place")
    }
})



function mRandom() {

    let m = document.querySelectorAll("g[stroke-linecap=butt]")
    let random = Math.floor(Math.random() * m.length);
    let myM = m[random];
    return myM;
};

function mVanish () {
    let opaca = mRandom()
    let opacity = parseInt(opaca.getAttribute("opacity"))
    if (opacity === 0) {
        opaca.setAttribute("opacity", 1)
    } else {
        opaca.setAttribute("opacity", 0)
    }
};

function alterna () {
    setInterval(function () {
        mVanish()
    }, 20)
}

alterna()
