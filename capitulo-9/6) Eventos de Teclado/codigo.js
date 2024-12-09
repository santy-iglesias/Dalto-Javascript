// Eventos de Teclado: Ocurren cuando sucede algo con las teclas.

const input = document.querySelector(".input-prueba");


// keypress  -  Ocurre cuando una tecla se presiona y se suelta en un elemento.  -------------------------------------------------------------------

input.addEventListener("keydown" , (event)=>{
    console.log("Una tecla fue presionada.");
});



// keydown  -  Ocurre cuando una tecla se deja de presionar.  --------------------------------------------------------------------------------------

input.addEventListener("keypress" , (event)=>{
    console.log("Un usuario presionó una tecla y la soltó.");
});



// keyup  -  Ocurre después de que los eventos anteriores hayan concluido consecutivamente.  -----------------------------------------------------

input.addEventListener("keyup" , (event)=>{
    console.log("Una tecla fue soltada.");
});