// Fetch



// Es una forma de trabajar con el objeto "XMLHttpRequest".

// Basado en "Promesas"


let peticion;

peticion = fetch("https://reqres.in/api/users/2");


/* "fetch" tiene el método "GET" por defecto, por lo tanto para utilizar este método no es necesario aclararlo. */

peticion
    .then(respuesta => respuesta.text())
    .then(respuesta => console.log(respuesta));


console.log(peticion);


console.log(" ");
console.log(" ");
console.log(" ");




// ".text()"  -  Para desencapsular el valor de la promesa en un texto.  -------------------------------------------------------------------------

console.log("Método '.text()'");


// Forma aún más corta de escribir lo de arriba:

fetch("https://reqres.in/api/users/2")
    .then(res => res.text())
    .then(res => console.log(res));




// ".json()"  - Para desencapsular el valor de la promesa en un json.  -----------------------------------------------------------------------------

console.log("Método '.json()'");

fetch("https://reqres.in/api/users/2")
    .then(res => res.json())         
    .then(res => console.log(res));





fetch("https://reqres.in/api/users" , {
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Santiago",
        "apellido" : "Iglesias",
    }),
    headers: {"Content-type" : "application/json"}
})
    .then(res => res.json())         
    .then(res => console.log(res));




// Lo de arriba más resumido:

fetch("https://reqres.in/api/users" , {
    method : "POST",
    body : `{"nombre" : "Santiago","apellido" : "Iglesias"}`,
    headers: {"Content-type" : "application/json"}
})
    .then(res => res.json())         
    .then(res => console.log(res));



// Dependiendo el tipo de informacion que enviemos, se pone una cabecera (header) distinta y un valor de cabecera distinto.





// ".blob()"

const imagen = document.querySelector(".imagen");


fetch("imagen.jpg")
    .then(res => res.blob())
    .then(img => imagen.src = URL.createObjectURL(img));     // Crea una ruta temporal en donde se va a almacenar la imagen para poder mostrarla