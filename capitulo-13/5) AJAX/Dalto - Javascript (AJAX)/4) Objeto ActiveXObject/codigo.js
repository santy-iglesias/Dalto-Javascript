// Objeto ActiveXObject

// AJAX no es soportado por todos los navegadores.


let peticion;

if(window.XMLHttpRequest) 
{
    peticion = new XMLHttpRequest;
}
// En caso de que estemos en otro navegador que no sea "Google Chrome":
else
{
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}



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
    console.log( JSON.parse(respuesta) );
});



peticion.open("GET" , "informacion.txt");

peticion.send();