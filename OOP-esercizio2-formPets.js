// creo la classe per gli oggetti dei pets
class Pets {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName
      this.ownerName = _ownerName
      this.species = _species
      this.breed = _breed
    }
    //metodo per vedere se hanno lo stesso padrone
    sameOwnerName = function(otherPet){
    //return this.ownerName === otherPet.ownerName
    if (this.ownerName === otherPet.ownerName){
        return true
    }else{
        return false
    }
    }
  }
  //la memoria della mia lista
const petsList = []

document.getElementsByTagName('form')[0].addEventListener('submit', function (e){  // Aggiungere l'evento di submit al form
    e.preventDefault()    //blocco il comportamento di default del form
 
    const petNameInput = document.getElementById('petName')   //recupero id dei miei campi input
    const ownerNameInput = document.getElementById('ownerName')
    const petSpeciesInput = document.getElementById('petSpecies')
    const petBreedInput = document.getElementById('petBreed')

    const petNameValue = petNameInput.value // leggo i valori dei miei input
    const ownerNameValue = ownerNameInput.value 
    const petSpeciesValue =  petSpeciesInput.value
    const petBreedValue = petBreedInput.value

    const petElement = new Pets (petNameValue, ownerNameValue, petSpeciesValue, petBreedValue)  //creo con una classe un oggeto co le proprieta dei pets

    petsList.push(petElement) //inserisco nel mio array l'elemento appena creato

    //controllo se uno dei animali ha lo stesso padrone
    let sameOwnerLet = false;  //tengo traccia se si trova un altro pet con lo stesso padrone
    for(let i = 0; i < petsList.length -1; i++ ){  //uso il ciclo for per controllare tutta la lista e il -1 per raggiungere l'ultimo elemento del mio array
        if(petElement.sameOwnerName(petsList[i])){   // controllo se un altro animale ha lo stesso padrone nella lista faccendo rifferimento al metodo scritto sopra
            sameOwnerLet = true;   //aggiorno il  let sameOwner ed esco dal coclo con break
            break;
        }
    }
    //Aggiungo il messaggio nel pip <p>
    const pMessage = document.getElementById('sameOwner');  //recupero il mio elemento in html, l'id del <p> dove verra scritto il mio messaggio
    if ( sameOwnerLet){   // se il mio sameOwnerLet e vero- scrivo il messaggio, altrimenti ho una stringa vuota
        pMessage.innerHTML = 'This pet has the same owner as the other'
    }else {
        pMessage.innerText = ' ';
    }

    const unorderPetList = document.getElementById('completePetList') //faccio rifferimento all'id della mia <ul>

    unorderPetList.innerHTML = '' //svuoto la mia lista di dati per evitare che i risultati si accumulino.

    //ciclo la petsList per creare <li>
    for (let i = 0; i < petsList.length; i++){
        //creo un <li> vuoto
        const emptyLi = document.createElement('li')
        //ora riempio la mia <li> con i dati
        emptyLi.innerText = petsList[i].petName + ' ,di proprietá di '+ petsList[i].ownerName + ', é un/una ' + petsList[i].species + ' di razza ' + petsList[i].breed

        emptyLi.classList.add('list-group-item') //aggiungo la classe di bootstrap alla mia <li>

        unorderPetList.appendChild(emptyLi)  //  appendo l'<li>  alla mia <ul>
    }

    document.getElementsByTagName('form')[0].reset()  //resetto il mio formo 

})
