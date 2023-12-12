const url = "https://striveschool-api.herokuapp.com/books"

fetch(url)
.then(response => response.json()
.then(data => populateHomePage(data)));

function populateHomePage(data) {
    data.forEach(book =>{
        let card = document.createElement("div", "col-md-4");
        card.classList.add("card", "carta", "bg-dark", "text-white",);

        let img = document.createElement("img");
        img.src = book.img;
        img.classList.add("card-img-top", "mt-3");
        img.alt = "";

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = book.title;

        let cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = book.category;

        let cardBuy = document.createElement("a");
        cardBuy.classList.add("btn", "btn-primary");
        cardBuy.href = "#";
        cardBuy.innerText = "Buy";

        let cardRemove = document.createElement("a");
        cardRemove.classList.add("btn", "btn-warning", "ms-2");
        cardRemove.href = "#";
        cardRemove.innerText = "Remove";

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardBuy);
        cardBody.appendChild(cardRemove);

        card.appendChild(img);
        card.appendChild(cardBody);

        document.querySelector("#root").appendChild(card);

        cardBuy.addEventListener("click", function(){
            libriAcquistati.push(this.title)
        })

       
    })
}



let libriAcquistati = [];

console.log(libriAcquistati);