//------------------------------RELACION 1------------------------------

const init = () => {};

//---------Inicio de la aplicación---------
document.addEventListener("DOMContentLoaded", ()=> {

    //Ej-1 -> Selecciona el elemento "h1" por su ID.
    const elementDiv = document.getElementById("contenedorPrincipal");
    const elementH1 = elementDiv.querySelector("h1");
    console.log(elementH1.textContent); //Solo el texto de la etiqueta
    //mas rapido de hacer:
    // const elementH2 = document.getElementById("contenedorPrincipal").querySelector("h1");
    // console.log(elementH2.textContent);    
});


//Ej-2 -> Selecciona todos los párrafos con la clase "parrafo" dentro del contenedorSecundario.
const parrafosDiv = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(parrafosDiv);

//Ej-3 -> Selecciona el elemento img por su atributo src.
const elementImg = document.querySelector("img[src='imagen.png']");
console.log(elementImg);

//Ej-4 -> Selecciona todos los elementos <span> dentro del contenedorSecundario.
const elementsSpan = document.querySelectorAll("#contenedorSecundario span")
console.log(elementsSpan);

//Ej-5 -> Selecciona el primer párrafo con la clase "importante".
const primerParrafoImportante = document.querySelector(".parrafo.importante");
console.log(primerParrafoImportante);

//Ej-6 -> Selecciona todos los párrafos que están dentro de un elemento con el id "contenedorPrincipal".
const parrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");
console.log(parrafosContenedorPrincipal);

//Ej-7 -> Selecciona todos los elementos que tienen el atributo data-atributo con valor "valor1".
const elementosConAtributo = document.querySelectorAll("[data-atributo='valor1']");
console.log(elementosConAtributo);

//Ej-8 -> Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
const parrafosImportante = document.querySelectorAll(".parrafo.importante");
parrafosImportante.length>1 ? console.log(parrafosImportante[1]) : null;

//Ej-9 -> Selecciona todos los elementos <span> que están dentro de cualquier elemento con la clase "contenedorSecundario". (imaginamos que hay mas de uno)
const spanDentroContenedores = document.querySelectorAll("#contenedorSecundario span");
console.log(spanDentroContenedores);

//Ej-10 -> Selecciona el tercer párrafo dentro del contenedorPrincipal que tiene la clase "parrafo".
const tercerParrafoContenedor = document.querySelectorAll("#contenedorPrincipal .parrafo");
const tercerParrafo = parrafosContenedorPrincipal.length>2 ? tercerParrafoContenedor[2] : null;
console.log(tercerParrafoContenedor);
