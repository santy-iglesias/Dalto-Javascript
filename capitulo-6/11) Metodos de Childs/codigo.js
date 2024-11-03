/* Métodos de "childs"

- replaceChild()
- removeChild()
- hasChildNodes()

*/

const contenedor = document.querySelector(".contenedor");


// Creando elementos:
const parrafo = document.createElement("p");
const h2_nuevo = document.createElement("h2");

// Ingresando texto en los elementos creados:
parrafo.innerHTML = "Parrafo";
h2_nuevo.innerHTML = "Titulo";


const h2_antiguo = document.querySelector(".h2");
const parrafo_antiguo = document.querySelector(".parrafo");




// "replaceChild()"  -  Reemplaza un hijo por otro. (parametro 1 = NUEVO elemento  ,  parametro 2 = elemento ANTIGUO)  --------------------

contenedor.replaceChild(h2_nuevo , h2_antiguo);




// "removeChild()"  -  Remueve un elemento hijo del elemento padre.  ----------------------------------------------------------------------

contenedor.removeChild(parrafo_antiguo);   // Comentar para agregar el parrafo eliminado.





// "hasChildNodes()"  -  Verifica si un elemento padre tiene un elemento hijo.  -----------------------------------------------------------

let respuesta = contenedor.hasChildNodes();

if(respuesta == true)
{
    document.write("El elemento tiene hijos.");
}
else
{
    document.write("El elemento NO tiene hijos.");
}