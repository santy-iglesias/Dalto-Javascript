// Métodos de cadenas (Parte 2)  -  Métodos para modificar cadenas

let cadena = "Hola, como, estas?";
let resultado;



// "split()"  -  Divide la cadena como le pidamos.  ----------------------------------------------------------------------------------------------------------------------------

document.write("Método '<b>split()</b>':  <br><br>");

resultado = cadena.split(",");         // Separando la cadena por "comas (,)"       /         La cadena se transforma en un array

document.write(resultado[0] + " ---- " + resultado[1] + " ---- " + resultado[2] + "<br>");


cadena = "Hola como estas?";
resultado = cadena.split("como");
document.write(resultado + "<br><br><br><br>");



// "subString()"  -  Nos retorna un pedazo de la cadena que seleccionamos (Crea un nuevo "string").  ---------------------------------------------------------------------------

document.write("Método '<b>substring()</b>':  <br><br>");

cadena = "ABCDEFGHIJKL";
resultado = cadena.substring(0 , 4);         // Arranca en la posicion "0" y termina en la posicion "4 - 1" que sería la posicion "3".
document.write(resultado + "<br>");


resultado = cadena.substring(3 , 9);
document.write(resultado + "<br><br><br><br>");




// "toLowerCase()"  -  Convierte una cadena a minúscula.  -----------------------------------------------------------------------------------------------------------------------

document.write("Método '<b>toLowerCase()</b>':  <br><br>");

// cadena = "ABCDEFGHIJKL";
resultado = cadena.toLowerCase();
document.write(resultado + "<br>");


cadena = "A MATIAS le metieron un gol";
resultado = cadena.toLowerCase();
document.write(resultado + "<br><br><br><br>");




// "toUpperCase()"  -  Convierte una cadena a mayúscula.  -----------------------------------------------------------------------------------------------------------------------

document.write("Método '<b>toUpperCase()</b>':  <br><br>");

cadena = "abcdefghi";
resultado = cadena.toUpperCase();
document.write(resultado + "<br>");


cadena = "a julieta le gusta el DEPORTE";
resultado = cadena.toUpperCase();
document.write(resultado + "<br><br><br><br>");




// "toString()"  -  Convierte un dato en una cadena.  --------------------------------------------------------------------------------------------------------------------------

document.write("Método '<b>toString()</b>':  <br><br>");

cadena = 3456;
resultado = cadena.toString();          // Convirtiendo el numero "3456" en un string.
document.write(2 + " - " + resultado + "<br>");


cadena = ["pedro","matias"];
resultado = cadena.toString();           // Convirtiendo el array en una cadena.
document.write(resultado[0] + resultado[1] + resultado[2] + "<br><br><br><br>");




// "trim()"  -  Elimina los espacios en blanco al principio y al final de una cadena.  -----------------------------------------------------------------------------------------

document.write("Método '<b>trim()</b>':  <br><br>");

cadena = "   pedro   ";
resultado = cadena.length;                
document.write("Cadena CON espacios  ----------->  " + `<b>${resultado}</b> <br>`);


// cadena.lenght   -   Cuenta los caracteres de una cadena.


resultado = cadena.trim();      // Sacando los espacios de la cadena.
document.write("Cadena SIN espacios  ----------->  " + `<b>${resultado.length}</b> <br><br><br><br>`);





// "trimEnd()"  -  Elimina los espacios en blanco al final de una cadena.  -----------------------------------------------------------------------------------------------------

document.write("Método '<b>trimEnd()</b>':  <br><br>");

let cadena2;

cadena = "pedro    ";
resultado = cadena.length;
document.write(`Cadena CON espacios  --------->  <b>${resultado}</b> <br>`);


cadena2 = cadena.trimEnd();      // Eliminando los espacios al final de la cadena.
resultado = cadena2.length;
document.write(`Cadena SIN espacios  --------->  <b>${resultado}</b> <br><br><br><br>`);




// "trimStart()"  -  Elimina los espacios en blanco al principio de una cadena.  -----------------------------------------------------------------------------------------------

document.write("Método '<b>trimStart()</b>':  <br><br>");

cadena = "           pedro";
resultado = cadena.length;
document.write(`Cadena CON espacios  ----------->  <b>${resultado}</b> <br>`);


cadena2 = cadena.trimStart();     // Eliminando los espacios al principio de la cadena.
resultado = cadena2.length;
document.write(`Cadena SIN espacios  ----------->  <b>${resultado}</b> <br><br><br><br>`);