const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmIwZWMwNTgzNTAwMTg1MjJkNDgiLCJpYXQiOjE3MDIzNzQxNTgsImV4cCI6MTcwMzU4Mzc1OH0.7B3gcFcKWz0LZxh4amP-BKaZQ3kviJ7wQ6STRqlePCs"
};


function populate() {
    fetch(myUrl, {headers})
    .then((response) => response.json())
    .then((data) => {
        let card = document.getElementById("cards");
        card.innerHTML = "";
        
        data.forEach((el) => {
            console.log(el._id);
            card.innerHTML += `<div class="col">
                <div class="card border border-success bg-dark text-light p-2 mt-3">
                    <img src="${el.imageUrl}" class="card-img-top" alt="..."/>
                    <div class="card-body d-flex justify-content-around">
                        <div>
                            <h5 class="card-title">${el.name}</h5>
                            <p class="card-text">${el.description}</p>
                            <a onclick="populateForm('${el}')" class="btn btn-warning border border-dark me-2 mb-1 px-4">Edit</a>
                            <a onclick="#" class="btn btn-primary border text-light border-light" onclick="miPage('${el._id}')">More Info</a>
                        </div>
                        <div>
                            <h4 class="text-success">Price: ${el.price}</h4>
                        </div>
                    </div>
                </div>
            </div>`;
        });
    });
}



function editPage(productId) {
    console.log(productId);

    fetch(`${myUrl}${productId}`, { 
        headers: { "Content-Type": "application/json", Authorization: headers.Authorization,
    "Accept": "application/json" } })
        .then((response) => response.json())
        .then((data) => {

            console.log(data.name)
            
           populateEditPage(data.name, data.brand, data.price, data.imageUrl, data.description);
        })
        .catch((error) => {
            console.error("Errore durante il recupero dei dati:", error);
        });
}






function populateForm() {
    window.location.href = "../edit.html";
}

   


  