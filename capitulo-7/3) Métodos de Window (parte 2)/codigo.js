// Métodos de Window (Parte 2)

// alert()  -  Muestra un cuadro de alerta con el contenido especificado y un botón aceptar.  ------------------------------------------------------

window.alert("hola, como estas?");



// print()  -  Abre un cuadro de diálogo "Imprimir" para imprimir el documento actual.  ------------------------------------------------------------

window.print();       // Literalmente te deja imprimir.



// prompt()  -  Abre un cuadro de diálogo con un mensaje que solicita al usuario un dato (string). -------------------------------------------------

window.prompt("Escribi cualquier cosa:");



// confirm()  -  Abre un cuadro de diálogo con un mensaje y dos botones: aceptar y cancelar. (true o false) ----------------------------------------

let respuesta = confirm("Estas seguro que desea salir del sitio web?");

console.log("'confirm()'");
console.log(respuesta);