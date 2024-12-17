// Callbacks

// Callback: funcion que llama a otra funcion. Funcion que se pasa como parametro a otra funcion.


function prueba(callback) {
    callback("roberto");
}


function decirNombre(nombre) {
    console.log(nombre);
}


prueba(decirNombre);



/* Otras formas:


prueba(function decirNombre(nombre) {
    console.log(nombre);
});



prueba(function (nombre) {
    console.log(nombre);
});



prueba( (nombre)=>{
    console.log(nombre);
} );


prueba( nombre => console.log(nombre) );


*/