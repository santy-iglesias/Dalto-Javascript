// Event Bubbling: el flujo de eventos va desde el "más específico" hasta el "menos específico".


const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");


contenedor1.addEventListener("click" , ( event )=>{     
    alert("Di click en el contenedor morado");
});

contenedor2.addEventListener("click" , ( event )=>{        
    alert("Di click en el contenedor celeste");
});

button.addEventListener("click" , ( event )=>{
    alert("Di click en un boton");
});