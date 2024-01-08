class MioOggetto {
    constructor (arrayOpzionale = []){
        this.array = arrayOpzionale;
    }
    controllaArray(controllo) {
        if (this.array.length > 0) {
            console.log("ho un array");
        }
        else {
            console.log("array vuoto");
        }
    }
    divisibile() {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] % 3 === 0 && this.array[i] % 5 === 0) {
                console.log("pippo");
            } else if (this.array[i] % 5 === 0) {
                console.log("pluto"); 
            } else if (this.array[i] % 3 === 0) {
                console.log("paperino");
            }else {
                console.log(this.array[i])
            }
        }
    }
}
const arrayProva = [1,2,3,4,5,10,15,18]
const prova = new MioOggetto(arrayProva)
prova.divisibile()