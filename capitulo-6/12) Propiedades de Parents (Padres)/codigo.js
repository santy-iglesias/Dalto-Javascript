/* Propiedades de parents(Padres)

- parentElement
- parentNode

*/


let respuesta;
const titulo = document.querySelector(".h2");

const h2_nuevo = document.createElement("h2");
h2_nuevo.innerHTML = "Un nuevo titulo";



// "parentElement"  -  Busca una etiqueta HTML padre.  ---------------------------------------------------------------------------------------------

console.log("Propiedad 'parentElement':");

respuesta = titulo.parentElement;
console.log(respuesta);


respuesta = h2_nuevo.parentElement;   // Muestra "null" porque no fue ingresado dentro de ningún contenedor.
console.log(respuesta);




// "parentNode"  -  Busca un Nodo padre. (No necesariamente tiene que ser una etiquta HTML) -------------------------------------------------------

// Funciona similar al anterior (De momento).

console.log("Propiedad 'parentNode':");

respuesta = titulo.parentNode;
console.log(respuesta);


respuesta = h2_nuevo.parentNode;   // Muestra "null" porque no fue ingresado dentro de ningún contenedor.
console.log(respuesta);