// Funciones

// ----------------------------------------------------------  "Parámetros" de una funcion  -----------------------------------------------------------------------------------

function suma(num1 , num2)
{
    let res = num1 + num2;

    return res;
}

let resultado;

resultado = suma(32 , 12);
document.write(resultado + "<br>" + "<br>");

resultado = suma(2 , 2);
document.write(resultado + "<br>" + "<br>");

resultado = suma(14 , 17);
document.write(resultado + "<br>" + "<br>");




// ---------------------------------------------------------  Ejemplo  --------------------------------------------------------------------------------------------------------

function saludar(nombre)
{
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    alert(frase);
}


let nombre = prompt("Cual es tu nombre?");
saludar(nombre);