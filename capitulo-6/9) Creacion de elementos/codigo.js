/* Creación de elementos:

    - createElement()
    - createTextNode()
    - createDocumentFragment()
    - appendChild()

*/

const contenedor = document.querySelector(".contenedor");

const item = document.createElement("li");

// const textoDelItem = document.createTextNode("Este es un item de la lista");



// Ingresando un objeto "Nodo texto" dentro del "li":
// item.appendChild(textoDelItem);
// console.log(item);



// Ingresando el "li" al "contendor":
// contenedor.appendChild(item);


// Otra forma:

item.textContent = "Este es un elemento de la lista";
contenedor.appendChild(item);






// Agregar muchos elementos sin consumir demasiados recursos:

const fragmento = document.createDocumentFragment();

for(let i = 0 ; i < 20 ; i++)
{
    const item = document.createElement("li");
    item.innerHTML = "Este es un elemento de la lista";

    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);


console.log(fragmento);