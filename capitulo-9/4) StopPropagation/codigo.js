// Stop Propagation


const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");



// Ejemplo con "Event Bubbling":
contenedor1.addEventListener("click" , ( event )=>{    
    alert("Di click en el contenedor morado");
});                                                  

contenedor2.addEventListener("click" , ( event )=>{    
    alert("Di click en el contenedor celeste");
});                                             

button.addEventListener("click" , ( event )=>{
    alert("Di click en un boton");

    event.stopPropagation();     // Deteniendo la propagación
});


// "stopPropagation" detiene la propagación de eventos.