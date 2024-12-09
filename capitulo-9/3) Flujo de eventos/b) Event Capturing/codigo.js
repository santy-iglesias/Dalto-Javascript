// Event Capturing: el flujo de eventos va desde el "menos específico" hasta el "más específico".


const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");


contenedor1.addEventListener("click" , ( event )=>{    
    alert("Di click en el contenedor morado");
}, true);                                                  // Para trabajar con "Event Capturing" se agrega "true" como ultimo parámetro.

contenedor2.addEventListener("click" , ( event )=>{    
    alert("Di click en el contenedor celeste");
}, true);                                             

button.addEventListener("click" , ( event )=>{
    alert("Di click en un boton");
});



// Se ejecutan primero los que tiene como parámetro "true".