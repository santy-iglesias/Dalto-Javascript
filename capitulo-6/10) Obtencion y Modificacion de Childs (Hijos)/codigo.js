/* Obtención y Modificación de Childs (Hijos)

    - firstChild
    - lastChild
    - firstElementChild
    - lastElementChild
    - childNodes
    - children
*/

const contenedor = document.querySelector(".contenedor");



// "firstChild" y "lastChild":

console.log("Propiedades 'firstChild' y 'lastChild':");
const hijo1 = contenedor.firstChild;     // Funciona al sacarle los espacios al "div".
console.log(hijo1);

const hijo2 = contenedor.lastChild;     // Funciona al sacarle los espacios al "div".
console.log(hijo2);





// "firstElementChild" y "lastElementChild":       (MEJOR FORMA DE SELECCIONAR ELEMENTOS HIJOS)

console.log("Propiedades 'firstElementChild' y 'lastElementChild':");

const hijo3 = contenedor.firstElementChild;
console.log(hijo3);

const hijo4 = contenedor.lastElementChild;
console.log(hijo4);




// "childNodes":
console.log("Atributo 'childNodes':");
const hijos = contenedor.childNodes;
console.log(hijos);

console.log("Recorriendo el 'NodeList':");
hijos.forEach( hijo => console.log(hijo) );



// "children":
console.log("Atributo 'children':");
const hijos2 = contenedor.children;
console.log(hijos2);


console.log("Recorriendo la 'HTMLCollection':");

for(hijo of hijos2)             // De otra manera no funciona.
{
    console.log(hijo);
}