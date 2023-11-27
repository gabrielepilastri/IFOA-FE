window.addEventListener("scroll", function(event) {
    let header = document.querySelector("header")
    let main = document.querySelector("main")

    let mainHeight = main.offsetHeight


    if (window.pageYOffset >= mainHeight - 80) { /* 80 is to make the change happen a little early on before the end of the hero section, no particular other reason why it's there (just like the original one) */
        console.log("scrolled")
        header.classList.add("scrolled")
    }
    else {
        header.classList.remove("scrolled")
        console.log("in place")
    }
})

