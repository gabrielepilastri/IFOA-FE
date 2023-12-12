const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmIwZWMwNTgzNTAwMTg1MjJkNDgiLCJpYXQiOjE3MDIzNzQxNTgsImV4cCI6MTcwMzU4Mzc1OH0.7B3gcFcKWz0LZxh4amP-BKaZQ3kviJ7wQ6STRqlePCs",

};

// Ottenere l'ID del prodotto dalla query string dell'URL



function populateForm() {

    fetch(myUrl, {headers})
    .then((response) => response.json())
    .then((data) => {
        data.forEach((el) => {
            console.log(el._id);
            populateEditPage(el.name, el.brand, el.price, el.imageUrl, el.description);
        })});
    function populateEditPage(editName, editBrand, editPrice, editImage, editDescription) {
        document.getElementById("editName").value = editName;
        document.getElementById("editBrand").value = editBrand;
        document.getElementById("editPrice").value = editPrice;
        document.getElementById("editImage").value = editImage;
        document.getElementById("editDescription").value = editDescription;
}
}
populateForm();








// async function createObject() {
//     try {
//         let response = await fetch(myUrl, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': headers.Authorization
//             },
           
//         })
        
        

//         if (!response.ok) {
//             throw new Error('Errore durante la creazione dell\'oggetto');
//         }

//         // Estrai l'ID dall'API
//         const responseObject = await response.json();
//         const objectId = responseObject._id;
//         console.log(objectId);

//         // Esegui una nuova richiesta GET per ottenere i dettagli completi dell'oggetto
//         const detailsResponse = await fetch(`${myUrl}${objectId}`, {
//             headers: {
//                 'Authorization': headers.Authorization
//             }
//         });
        

//         if (!detailsResponse.ok) {
//             throw new Error('Errore durante il recupero dei dettagli dell\'oggetto');
//         }

//         // Estrai i dettagli completi dell'oggetto
//         const objectDetails = await detailsResponse.json();

//         // Ora puoi utilizzare objectDetails per popolare il tuo form HTML
//         populateForm(objectDetails);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Funzione per popolare il form HTML con i dettagli dell'oggetto
// function populateForm(objectDetails) {
//     // Usa objectDetails per popolare il form
//     document.getElementById('editName').value = objectDetails.name;
//     document.getElementById('editInput').value = objectDetails.description;
//     document.getElementById('editBrand').value = objectDetails.brand;
//     document.getElementById('editPrice').value = objectDetails.price;
//     document.getElementById('editImage').value = objectDetails.imageUrl;
// }

// // Chiamare la funzione per creare l'oggetto e popolare il form
// createObject();



















//  function populate() {
//      fetch(myUrl, {headers})
//      .then((response) => response.json())
//      .then((data) => {



//  async function editCard() {
//      let editName = document.getElementById("editName").value;
//      let editBrand = document.getElementById("editBrand").value;
//      let editPrice = document.getElementById("editPrice").value;
//      let editImage = document.getElementById("editImage").value;
//      let editDescription = document.getElementById("editDescription").value;

//      try {
//          let response = await fetch(myUrl, {
//              method: 'PUT',
//              headers: {
//                  "Content-Type": "application/json",
//                  Authorization: headers.Authorization,
//              },
//              body: JSON.stringify({
//                  "name": `${editName}`,
//                  "brand": `${editBrand}`,
//                  "price": `${editPrice}`,
//                  "imageUrl": `${editImage}`,
//                  "description": `${editDescription}`,
//              }),
//          });
//          let data = await response.json();
//          console.log(data);

//           window.location.href = "../index.html";
//      }   catch (error) {
//          console.error(error);
//      }
//  }



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







// function editCard() {
//     fetch(myUrl, {headers})
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((el) => {
//             console.log(el._id);
//             populateEditPage(el.name, el.brand, el.price, el.imageUrl, el.description);
//         })});
//     function populateEditPage(editName, editBrand, editPrice, editImage, editDescription) {
//         document.getElementById("editName").value = editName;
//         document.getElementById("editBrand").value = editBrand;
//         document.getElementById("editPrice").value = editPrice;
//         document.getElementById("editImage").value = editImage;
//         document.getElementById("editDescription").value = editDescription;
// }
// }
// populateForm();

