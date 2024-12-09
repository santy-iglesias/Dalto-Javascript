// Flujo de eventos (Orden en el que se ejecutan los eventos)

// "Event Bubbling" o "Event Capturing"


const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");



contenedor.addEventListener("click" , ( event )=>{        // Al poner este abajo funciona de la misma manera
    alert("Di click en el contenedor");
});

button.addEventListener("click" , ( event )=>{
    alert("Di click en un boton");
});



// Event Bubbling: el flujo de eventos va desde el "más específico" hasta el "menos específico".

// Event Capturing: el flujo de eventos va desde el "menos específico" hasta el "más específico".