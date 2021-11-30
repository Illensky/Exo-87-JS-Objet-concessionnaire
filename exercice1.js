let voiture = {
    "Nom": "Eggo",
    "imgUrl": "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues": 4,
    "Couleur": "Marron",
    "Contructeur": "Citroen",
    "Carburant": "Solaire",
    "nombrePortes": 3,
    "Autonomie": "450km",
    "vitesseMaxi": "120km/h"
};

for (const property in voiture) {
    if (property === "imgUrl") {
        let newImage = document.createElement("img");
        let newBr = document.createElement("br")
        newImage.src = voiture[property];
        document.querySelector('body').appendChild(newImage)
        document.querySelector('body').appendChild(newBr)
    }
    else {
        let newSpan = document.createElement("span");
        newSpan.innerHTML = property + " : " + voiture[property] + "<br>"
        console.log(voiture[property])
        document.querySelector('body').appendChild(newSpan)
    }
}



