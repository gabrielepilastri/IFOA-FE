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

