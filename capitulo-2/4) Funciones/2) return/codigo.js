// Funciones

// ----------------------------------------------------------  "return"  -----------------------------------------------------------------------------------------------------

function sumar() 
{
    let a = 5, b = 10;

    let suma = a + b;

    return suma;      // retornando el valor de la variable "suma". Finaliza la funcion, todo lo que haya despues del "return" no se ejecuta.
}


let respuesta = sumar();

document.write("Retornando el valor de la variable 'suma':" + "<br>");
document.write(respuesta);