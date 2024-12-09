// Eventos


const button = document.querySelector(".button");


/* Ya no se recomienda trabajar con eventos de esta forma:


button.onclick = ()=> {
    alert("Hola, como estas?");
}

*/



// Forma recomendada usando "Event Listeners":

button.addEventListener("click" , saludar);

function saludar()
{
    alert("Hola");
}

// Cuando se trabaja con eventos, las "funciones flecha" no se pueden utilizar.



/* Forma de utilizar las funciones flecha con eventos: 

button.addEventListener("click" , ()=>{
    alert("hola")} );

*/



/* Otra forma de trabajar con eventos: 

button.addEventListener("click" , saludar);

function saludar()
{
    alert("Hola");
    button.removeEventListener("click" , saludar)            // De esta forma se remueve el evento y no se vuelve a ejecutar
}

*/