/* Propiedades de Siblings (Hermanos)

- nextSibling
- previousSibling
- nextElementSibling
- previousElementSibling

*/

const titulo = document.querySelector(".h2");
const parrafo = document.querySelector(".parrafo");


console.log("Propiedad 'nextSibling':");
console.log(titulo.nextSibling);

console.log("Propiedad 'previousSibling':");
console.log(parrafo.previousSibling);



console.log("Propiedad 'nextElementSibling':");      // Más usados
console.log(titulo.nextElementSibling);

console.log("Propiedad 'previousElementSibling':");      // Más usados
console.log(parrafo.previousElementSibling);