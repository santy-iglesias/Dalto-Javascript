// Objeto "Event"


const button = document.querySelector(".button");

button.addEventListener("click" , ( event )=>{
    console.log( event );
    console.log( event.target );     // Muestra en donde se ejecutó el evento
});