// Eventos de la Interfaz

const img = document.querySelector(".img-prueba");
const input = document.querySelector(".input-prueba");
const seleccionado = document.querySelector(".seleccionado");


// error  -  Ocurre cuando sucede un error durante la carga de un archivo multimedia.  -------------------------------------------------------------

img.addEventListener("error" , (event)=>{
    console.log("Ha ocurrido un error");
});



// load  -  Ocurre cuando un objeto se ha cargado.  ------------------------------------------------------------------------------------------------

window.addEventListener("load" , (e)=>{
    console.log("Ha cargado el sitio");
});


/* Otra forma de llamar al evento:

addEventListener("load" , (e)=>{
    console.log("Ha cargado el sitio.");
});

*/




// beforeunload  -  Ocurre antes de que el documento esté a punto de descargarse.  -----------------------------------------------------------------

addEventListener("beforeunload" , (e)=>{
    console.log("Te estás por ir del sitio");
});



// unload  -  Ocurre una vez que se ha descargado una página.  -------------------------------------------------------------------------------------

addEventListener("unload" , (e)=>{
    console.log("Te fuiste  otro sitio");
});



// resize  -  Ocurre cuando se cambia el tamaño de la vista del documento.  ------------------------------------------------------------------------

addEventListener("resize" , (e)=>{
    console.log("Se ha modificado la resolución");
});



// scroll  -  Ocurre cuando se desplaza la barra de desplazamiento de un elemento.  ----------------------------------------------------------------

addEventListener("scroll" , (e)=>{
    console.log("Se ha scrolleado");
});



// select  -  Ocurre después de que el usuario selecciona algún texto de "<input>" o "<textarea>".  ------------------------------------------------

input.addEventListener("select" , (e)=>{
    console.log("Se ha seleccionado un input");
    console.log(e);
    console.log("Selection Start: " + e.target.selectionStart);
    console.log("Selection End: " + e.target.selectionEnd);


    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;

    seleccionado.innerHTML = textoCompleto.substring(start , end);
});