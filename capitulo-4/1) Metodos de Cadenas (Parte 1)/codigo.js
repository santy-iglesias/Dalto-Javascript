// Métodos de cadenas (Parte 1)  -  Métodos para buscar en cadenas que devuelven un valor

let resultado;
let cadena = new String("cadena de prueba");       // Otra forma de declarar e inicializar una cadena (las "cadenas" son un objeto en Javascript)
let cadena2 = " cadena 2";



// "concat()"  -  junta dos o más cadenas y retorna una nueva.  -----------------------------------------------------------------------------------------------------------------

document.write("Método '<b>concat()</b>':  <br><br>");

resultado = cadena.concat(" hola");
document.write(resultado + "<br>");

resultado = cadena.concat(cadena2);
document.write(resultado + "<br><br><br><br>");




// "startsWith()"  -  si una cadena comienza con los caracteres de otra cadena, devuelve "true", sino devuelve "false".  --------------------------------------------------------

document.write("Método '<b>startsWith()</b>':  <br><br>");

cadena2 = "cadena";
resultado = cadena.startsWith(cadena2);
document.write(resultado + "<br>");


cadena2 = " cadena";
resultado = cadena.startsWith(cadena2);
document.write(resultado + "<br><br><br><br>");




// "endsWith()"  -  si una cadena termina con los caracteres de otra cadena, devuelve "true", sino devuelve "false".  -----------------------------------------------------------

document.write("Método '<b>endsWith()</b>':  <br><br>");

cadena2 = "prueba";
resultado = cadena.endsWith(cadena2);
document.write(resultado + "<br>");


cadena2 = "prueba ";
resultado = cadena.endsWith(cadena2);
document.write(resultado + "<br><br><br><br>");




// "includes()"  -  si una cadena puede encontrarse dentro de otra cadena, devuelve "true", sino devuelve "false".  ------------------------------------------------------------

document.write("Método '<b>includes()</b>':  <br><br>");

cadena2 = "prueba";
resultado = cadena.includes(cadena2);
document.write(resultado + "<br>");

cadena2 = "perro";
resultado = cadena.includes(cadena2);
document.write(resultado + "<br><br><br><br>");




// "indexOf()" - si una cadena puede encontrarse dentro de otra cadena, devuelve el índice (posición) del primer caracter de la cadena entre parentesis si, no existe devuelve "-1".  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.write("Método '<b>indexOf()</b>':  <br><br>");

// cadena = "cadena de prueba"
cadena2 = "prueba";
resultado = cadena.indexOf(cadena2);
document.write(resultado + "<br>");          // Devuelve "10" porque comienza a contar desde cero.


cadena2 = "casa";
resultado = cadena.indexOf(cadena2);
document.write(resultado + "<br><br><br><br>");




// "lastIndexOf()" - Si una cadena puede encontrarse dentro de otra cadena, devuelve el último índice (posición) del primer caracter de la cadena entre parentesis, si no existe devuelve "-1".  ---------------------------------------------------------------------------------------------------------------------------------------------------------------

document.write("Método '<b>lastIndexOf()</b>':  <br><br>");

cadena = "pedro es un tarado tarado";
cadena2 = "tarado";
resultado = cadena.lastIndexOf(cadena2);
document.write(resultado + "<br><br><br><br>");


// Como la cadena "tarado" coincide 2 veces, devuelve el índice del primer caracter de la segunda coincidencia.





// "padStart()" [propuesta de estándar]  -  Rellenar cadena al principio con los caracteres deseados.  -------------------------------------------------------------------------

document.write("Método '<b>padStart()</b>':  <br><br>");

cadena = "abc";
resultado = cadena.padStart(10 , "1");    // Rellena el principio de la cadena con el SEGUNDO PARÁMETRO hasta que la cadena alcance la cantidad ingresada en el PRIMER PARAMETRO
document.write(resultado + "<br><br><br><br>");




// "padEnd()" [propuesta de estándar]  -  Rellenar cadena al final con los caracteres deseados.  ------------------------------------------------------------------------------

document.write("Método '<b>padEnd()</b>':  <br><br>");

// cadena = "abc";
resultado = cadena.padEnd(10 , "1");  // Rellena el final de la cadena con el SEGUNDO PARÁMETRO hasta que la cadena alcance la cantidad ingresada en el PRIMER PARAMETRO
document.write(resultado + "<br><br><br><br>");




// "repeat()"  -  Devuelve la misma cadena pero repetida la cantidad de veces que queramos.  -----------------------------------------------------------------------------------

document.write("Método '<b>repeat()</b>':  <br><br>");

cadena = "123 ";
resultado = cadena.repeat(4);        // Repitiendo la cadena "4 veces".
document.write(resultado + "<br><br><br><br>");