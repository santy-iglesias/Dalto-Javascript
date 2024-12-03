// Métodos de "Window" (Parte 1)

// open()  -  Abrir una nueva ventana.  -----------------------------------------------------------------------------------------------------------

alert("Abriendo ventana");

let ventana;
let youtubeURL = "https://youtube.com";
ventana = window.open(youtubeURL);


// close()  -  Cerrar una ventana.  ---------------------------------------------------------------------------------------------------------------

alert("Cerrando ventana");
ventana.close();



// closed  -  Indica si la ventana referenciada está cerrada o no. (muestra "true" o "false") ---------------------------------------------------

alert(ventana.closed);



// stop()  -  Detiene la carga de recursos en el contexto de navegación actual.  -------------------------------------------------------------------

// window.stop();