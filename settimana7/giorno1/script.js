class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const user1 = new User('Franco', 30);
const user2= new User ("Pippo", 18);

function confronto(user1, user2) {
    if (user1.age > user2.age) {
        console.log(`${user1.name} è più grande di ${user2.name}`);
} else if (user1.age < user2.age) {
        console.log(`${user2.name} è più grande di ${user1.name}`);
} else {
    console.log(`${user1} e ${user2} hanno la stessa età`)
}
}

confronto(user1, user2);








// es.2








let form = document.getElementById("form");
let petNamee = document.getElementById("petName");
let ownerNamee = document.getElementById("ownerName");
let speciess = document.getElementById("species");
let breedd = document.getElementById("breed");
let bottone = document.getElementById("bottone");
const petList = document.getElementById("petList");
let pets = [];


class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    controllaOwner(otherPet) {
        if (this.ownerName == otherPet.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

bottone.addEventListener("click", () => {

    addPet();
    resetForm();

   
});


function addPet() {

    let newPet = new Pet(petNamee.value, ownerNamee.value, speciess.value, breedd.value);
   

    pets.push(newPet);
    console.log(pets);

    petsUl();
    resetForm();

}


function petsUl() {
    
    petList.innerHTML = "";

    pets.forEach(pet => {
        const li = document.createElement("li");
        li.innerText = `pet name: ${pet.petName}, owner name: ${pet.ownerName}, species: ${pet.species}, breed: ${pet.breed}`;
        petList.appendChild(li);
    })

}


function resetForm() {
    petNamee.value = "";
    ownerNamee.value = "";
    speciess.value = "";
    breedd.value = "";
}