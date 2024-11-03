// Document  -  Métodos de Selección de Elementos


// document.getElementById()  -  Selecciona un elemento por ID.  ----------------------------------------------------------------------------------------------------------------

let parrafo = document.getElementById("prueba");
document.write(parrafo + "<br><br><br><br>");


// document.getElementsByTagName()  -  Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.  -------------------------------------------------

parrafo = document.getElementsByTagName("p");
document.write(parrafo + "<br><br><br><br>");


// document.querySelector()  -  Devuelve el primer elemento que coincida con el grupo especificado de selectores.  --------------------------------------------------------------

parrafo = document.querySelector(".parrafo");
document.write(parrafo + "<br>");

parrafo = document.querySelector("#prueba");
document.write(parrafo + "<br><br><br><br>");



// document.querySelectorAll()  -  Devuelve todos los elementos que coincidan con el grupo especificado de selectores.  ---------------------------------------------------------

parrafo = document.querySelectorAll(".parrafo");
document.write(parrafo + "<br><br><br><br>");