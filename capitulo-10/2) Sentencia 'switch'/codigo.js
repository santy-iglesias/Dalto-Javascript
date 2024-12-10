// Sentencia "switch"

/*

switch (expresion)
{
    case 1:
    case 2:
    case 3:

    default:
}

*/


let expresion = prompt("¿Banana, Pera o Manzana?");

switch (expresion)
{
    case "Banana": 
        console.log("Esta fruta es amarilla");
        alert("Es banana")
        break;                                  // Para evitar que el resto se siga ejecutando.

    case "Pera":
        console.log("Tiene forma de mi tio Roberto");
        alert("Es pera")
        break;

    case "Manzana": 
        console.log("Los primeros humanos pecaron comiendola");
        alert("Es manzana")
        break;

    default:
        alert("No es ninguna");
}



/* Otra forma de hacerlo: 


if (expresion == "Banana") console.log("Esta fruta es amarilla");

else if (expresion == "Pera") console.log("Tiene forma de mi tio Roberto");

else if (expresion == "Manzana") console.log("Los primeros humanos pecaron comiendola");

*/



/* Usar "if" o "else if" brinda un mejor rendimiento que usar un "switch" pero en algunos casos se recomienda su utilización para hacer el
código más legible. */