
// Exo 1

let diceElement= document.createElement("div"); // Je crée ma div
    
let divElement = document.querySelector("div"); //je sélectionne la div existante dans le html
    divElement.appendChild(diceElement); // J'implante la nouvelle div dans la div déjà existante
    diceElement.classList.add("dice"); //je lui donne la classe "dice" présente dans le css

    // On ajoute une fonction pour tirer un nombre aléatoire entre 1 et 6
const min = 1
const max = 6


function randomNumber(min, max) { // de 1 à 6
    return Math.floor(Math.random() * (max - min + 1) + min) //generation du chiffre
  }
  
const diceNumber= randomNumber(1, 6) //const de la fonction

console.log(diceNumber); //affichage du chiffre


{
    background-image: url("../images/dice-sprite.png"));
    background-position: 10px 50px; /* Visible coordinates in image */
    height: 100px; /* height Visible  */
    width: 100px; /* width Visible  */
}
