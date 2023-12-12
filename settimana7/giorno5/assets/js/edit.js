const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmIwZWMwNTgzNTAwMTg1MjJkNDgiLCJpYXQiOjE3MDIzNzQxNTgsImV4cCI6MTcwMzU4Mzc1OH0.7B3gcFcKWz0LZxh4amP-BKaZQ3kviJ7wQ6STRqlePCs"
};

// Ottenere l'ID del prodotto dalla query string dell'URL
const urlParams = new URLSearchParams(myUrl);
const productId = urlParams.get('id');
console.log(productId);






document.addEventListener('DOMContentLoaded', function() {
    
    fetch(`${myUrl}``${productId}`, { headers: headers })
    .then (response => response.json())
    .then((data) => {
        console.log(data._id);
    })
    
});



// function populate() {
//     fetch(myUrl, {headers})
//     .then((response) => response.json())
//     .then((data) => {



async function editCard() {
    let editName = document.getElementById("editName").value;
    let editBrand = document.getElementById("editBrand").value;
    let editPrice = document.getElementById("editPrice").value;
    let editImage = document.getElementById("editImage").value;
    let editDescription = document.getElementById("editDescription").value;

    try {
        let response = await fetch(myUrl, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: headers.Authorization,
            },
            body: JSON.stringify({
                "name": `${editName}`,
                "brand": `${editBrand}`,
                "price": `${editPrice}`,
                "imageUrl": `${editImage}`,
                "description": `${editDescription}`,
            }),
        });
        let data = await response.json();
        console.log(data);

         window.location.href = "../index.html";
    }   catch (error) {
        console.error(error);
    }
}



// function populateEditPage() {
//     let editName = document.getElementById("editName");
//     let editBrand = document.getElementById("editBrand");
//     let editPrice = document.getElementById("editPrice");
//     let editImage = document.getElementById("editImage");
//     let editDescription = document.getElementById("editDescription");

//     editName.value = data.name;
//     editBrand.value = data.brand;
//     editPrice.value = data.price;
//     editImage.value = data.imageUrl;
//     editDescription.value = data.description;
// }