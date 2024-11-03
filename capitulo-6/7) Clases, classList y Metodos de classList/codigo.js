// Clases, classList y Métodos de classList


const titulo = document.querySelector(".titulo");
let valor;



// "classList.add()"  - Añade una clase.

titulo.classList.add("grande" , "casa");



// "classList.remove()"  -  Remueve una clase.

titulo.classList.remove("casa");



// "classList.item()"  -  Devuelve la clase del índice especificado.

valor = titulo.classList.item(0);        // Comienza la numeracion desde el cero
console.log(valor);



// "classList.contains()"  -  Verifica si ese elemento posee o no, la clase especificada.

valor = titulo.classList.contains("grandeeee");

if(valor == true)
{
    alert(`La clase existe.`);
}
else
{
    alert(`La clase no existe.`);
}




// "classList.replace()"  -  Reemplaza una clase por otra.

titulo.classList.replace("grande" , "chico");




// "classList.toggle()"  -  Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

titulo.classList.toggle("titulo-secundario");     // Agrega la clase.

alert("pausa");

titulo.classList.toggle("titulo-secundario");     // Remueve la clase.



/* Otras formas:        nombre.classList.toggle("nombreClase" , true);         Si ya la tiene, la deja.

                        nombre.classList.toggle("nombreClase" , false);         Si la tiene, la elimina SIEMPRE.                           */