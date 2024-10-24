// Métodos de arrays

let nombres = ["santiago","ana","maria","jorge"];
let resultado;


// ____________________________________________________________  Métodos ACCESORES  _____________________________________________________________________________________________


// "join()"  -  Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.  --------------------------------------------------------------------------

document.write(`Método '<b>join()</b>': <br><br>`);

resultado = nombres.join();                         // Convirtiendo el array en una "cadena de texto".
document.write(resultado + "<br><br>");


resultado = nombres.join(" - ");                 
document.write(resultado + "<br><br><br><br>")





// "slice()"  -  Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).  -------------------------------------------------------

document.write(`Método '<b>slice()</b>': <br><br>`);

document.write("<b>Array:</b> " + nombres + "<br><br>");

resultado = nombres.slice(0 , 2);
document.write(resultado + "<br><br>");


nombres = ["santiago","ana","maria","jorge"];
resultado = nombres.slice(0 , -1);                   // Para mostrar todos los elementos MENOS el último.
document.write(resultado + "<br><br>");


nombres = ["santiago","ana","maria","jorge"];
resultado = nombres.slice(0);                       // Para mostrar TODOS los elementos.
document.write(resultado + "<br><br><br><br>");




// Otros métodos ya vistos que funcionan de la misma manera:    toString()   ,   includes()  -----------------------------------------------------------------------------------



// "indexOf()" y "lastIndexOf()"  funcionan de manera similar a lo visto anteriormente solo que en vez de buscar en una cadena de texto, busca el elemento deseado en un array.