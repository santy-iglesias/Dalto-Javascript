// Peticiones "GET"

// Se utiliza para enviar una peticion a un servidor.

// Trabajar con "Google Chrome"



const peticion = new XMLHttpRequest();



/* Como se realizaba antes la validación de la información recibida por el servidor:



// Funcion para detectar los cambios del prototipo "readyState":

peticion.addEventListener("readystatechange" , ()=>{
    // console.log(peticion.readyState);


----------------------------------------------  Información --------------------------------------------------------------------------------------
                    
                    readyState:

                    Estado 1: La solicitud se creó correctamente.

                    Estado 2: La solicitud se envió correctamente.

                    Estado 3: La solicitud se está procesando.

                    Estado 4: El servidor ya nos dió una respuesta que podemos utilizar en la pagina.

-------------------------------------------------  Fin Información --------------------------------------------------------------------------------


    // console.log(peticion.response);


    // Si el servidor ya envió una respuesta  &&  Si se encontró la información solicitada ( "peticion.status == 200" ):
    if(peticion.readyState == 4 && peticion.status == 200)
    {
        console.log(peticion.response);
    }
});

*/




// Como se realiza ahora:

peticion.addEventListener("load" , ()=>{
    
    let respuesta;
    
    if(peticion.status == 200)
    {
        respuesta = peticion.response;
    }
    else
    {
        respuesta = "Lo siento, no se ha encontrado el recurso.";
    }
    console.log(respuesta);
});



// peticion.open("GET" , "ruta del archivo")  -  Método que abre una peticion "GET".  --------------------------------------------------------------

peticion.open("GET" , "informacion.txt");




// peticion.send()  -  Método que envía una peticion.  ---------------------------------------------------------------------------------------------

peticion.send();

// console.log(peticion);