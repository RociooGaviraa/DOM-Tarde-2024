//Creo un div
const divCard = document.createElement("div");
divCard.id = "card";
//Añado una clase
divCard.classList.add("principal card");

//Creo un parrafo
const p = document.createElement("p");
p.textContent = "Este es un párrafo.";
divCard.appendChild(p);

//Creo un boton
const mensajeButton = document.createElement("button");
mensajeButton.textContent = "Mostrar Mensaje";