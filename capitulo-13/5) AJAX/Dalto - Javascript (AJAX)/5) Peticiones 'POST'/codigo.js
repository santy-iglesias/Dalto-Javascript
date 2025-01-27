// Peticiones "POST"

let peticion;


// Si estamos en "Google Chrome":
if(window.XMLHttpRequest)
{
    peticion = new XMLHttpRequest;
}
// Si estamos en cualquier otro navegador:
else
{
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}


peticion.addEventListener("load",()=>{
    let respuesta;


    // Tanto "200" como "201" son ambos un codigo de exito.
    if(peticion.status == 200 || peticion.status == 201)
    {
        respuesta = peticion.response;
    }
    else
    {
        respuesta = "Lo siento, no se ha encontrado el recurso.";
    }

    console.log( JSON.parse(respuesta) );
});


peticion.open("POST" , "https://reqres.in/api/users");

peticion.setRequestHeader("Content-type" , "application/json;charset=UTF8");

peticion.send( JSON.stringify({
    "name": "santiago",
    "job": "mecanico"
}) );