//--------------------------RELACION 2----------------------------------------

//--------------------Declaracion de variables--------------------------------

//--------------------Declaracion de funciones--------------------------------

const handleClickSpan = (event) => {
    const span = event.target;
    //cambio el color de fondo aleatoriamente
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //cambio el estilo inline de color
    span.style.backgroundColor = `#${randomColor}`;
};

const handlerDobleClickParrafo = (event)=>{
    const parrafo = event.target;
    alert(parrafo.textContent);
};

//Ej-1 -> Añade un evento de clic a todos los elementos <span> dentro del contenedorSecundario. Cuando se haga clic, cambia el color de fondo del elemento al azar.
//Ej-2 -> Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
//Ej-3 -> Añade un evento de cambio a un <select> que está fuera del contenedorPrincipal. Cuando se cambie el valor, actualiza el texto del elemento h1 al nuevo valor seleccionado.
//Ej-4 -> Crea una función que cambie el contenido de todos los párrafos dentro del contenedorSecundario cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
//Ej-5 -> Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
//Ej-6 -> Crea una función que cambie el color de todos los elementos <span> dentro del contenedorSecundario cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.
//Ej-7 -> Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".
//Ej-8 -> Crea una función que cambie el tamaño del texto de todos los párrafos dentro del contenedorPrincipal cuando se haga clic en el elemento img. El nuevo tamaño debe ser el doble del tamaño actual.
//Ej-9 -> Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.
//Ej-10 -> Crea una función que cambie el color de fondo del contenedorPrincipal cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.

document.addEventListener("DOMContentLoaded", function() {
    //EJERCICIO 1:
    // document.querySelectorAll("#contenedorSecundario span")
    // .forEach(span => {
    //     //tengo que asignar un evento al click de ese span
    //     span.addEventListener("click",handleClickSpan)
    // })

    //EJERCICIO 2: 
    // document.querySelectorAll(".parrafo").forEach((parrafo) => {
    //     parrafo.addEventListener("dblclick",handlerDobleClickParrafo);
    // });

    //EJERCICIO 4: 
    // document.addEventListener("keydown",(event) => {
    //     //como saber que elemento ha lanzado el evento keydown?
    //     if(event.key === "Enter"){
    //         document.querySelectorAll("#contenedorSecundario p").forEach((parrafo) => {
    //             parrafo.textContent = "Has pulsado Enter";
    //             // parrafo.innerText = "Has pulsado Enter2";
    //             // parrafo.innerHTML = "<strong>Has pulsado Enter3</strong>";
    //     });
    //     }
    // });

    //EJERCICIO 5:
    // document.querySelectorAll(".etiqueta").forEach((etiqueta) => {
    //     etiqueta.addEventListener("click", () => {
    //         etiqueta.remove();
    //     });
    // });

    //EJERCICIO 6:
    // document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
    //     //cuando me posicione encima
    //     span.addEventListener("mouseover", () => {
    //         span.style.color = "blue";
    //     });
    //     span.addEventListener("mouseout", () => {
    //         span.style.color = "";
    //     });
    // });

    //EJERCICIO 8:
    // document.querySelector("#contenedorPrincipal img").addEventListener("click", ()=>{
    //     document.querySelectorAll("#contenedorPrincipal p")
    //         .forEach((parrafo) => {
    //             const currentSize = window.getComputedStyle(parrafo).fontSize;
    //             console.log("currentSize -->", typeof currentSize);     
    //             parrafo.style.fontSize = `${parseInt(currentSize) * 2}px`;       
    //         });
    // });

    //EJERCICIO 9:
    

});

