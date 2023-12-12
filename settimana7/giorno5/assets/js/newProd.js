const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmIwZWMwNTgzNTAwMTg1MjJkNDgiLCJpYXQiOjE3MDIzNzQxNTgsImV4cCI6MTcwMzU4Mzc1OH0.7B3gcFcKWz0LZxh4amP-BKaZQ3kviJ7wQ6STRqlePCs"
};




async function postProd() {
    let newName = document.getElementById("newName").value;
    let newBrand = document.getElementById("newBrand").value;
    let newPrice = document.getElementById("newPrice").value;
    let newImage = document.getElementById("newImage").value;
    let newDescription = document.getElementById("newDescription").value;
    
    try {
        let response = await fetch(myUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: headers.Authorization,
            },
            body: JSON.stringify({
               "name": `${newName}`,
               "brand": `${newBrand}`,
               "price": `${newPrice}`,
               "imageUrl": `${newImage}`,
               "description": `${newDescription}`,
            }),
        });

        let data = await response.json();
        console.log(data);

        // Dopo aver aggiunto il prodotto con successo, reindirizza all'index.html
        window.location.href = "./index.html";
    } catch (error) {
        console.error(error);
    }
}


function resetForm() {
    document.getElementById("newName").value = "";
    document.getElementById("newBrand").value = "";
    document.getElementById("newPrice").value = "";
    document.getElementById("newImage").value = "";
    document.getElementById("newDescription").value = "";
}



