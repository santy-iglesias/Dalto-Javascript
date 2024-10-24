// Métodos de Array

let nombres = ["santiago","maria","jorge"];
let resultado;


// ____________________________________________________  Métodos TRANSFORMADORES  ______________________________________________________________________________________________


// "pop()"  -  Saca el último elemento de un array y lo develve.  -----------------------------------------------------------------------------------------------------------

document.write(`Método "<b>pop()</b>":  <br><br>`);

document.write(nombres + "<br><br>");               // Mostrando el array original.


resultado = nombres.pop();                           // Sacando y mostrando el ÚLTIMO elemento.
document.write(resultado + "<br>");  


document.write(nombres + "<br><br><br><br>");        // Mostrando los demás elementos del array.

// "jorge" ya no se muestra porque fue quitado del array por la funcion "pop()".





// "shift()"  -  Saca el primer elemento de un array y lo devuelve.  -----------------------------------------------------------------------------------------------------------

document.write(`Método "<b>shift()</b>":  <br><br>`);

nombres = ["santiago","maria","jorge"];
document.write(nombres + "<br><br>");            // Mostrando el array original.


resultado = nombres.shift();                     // Sacando y mostrando el PRIMER elemento.
document.write(resultado + "<br>");


document.write(nombres + "<br><br><br><br>");      // Mostrando el resto del array.



// "push()"  -  Agrega un elemento al final de la lista (array).  --------------------------------------------------------------------------------------------------------------

document.write(`Método "<b>push()</b>":  <br><br>`);

nombres = ["santiago","maria","jorge"];
document.write(nombres + "<br><br>"); 


resultado = nombres.push("lucas");                // "push()" devuelve la cantidad de elementos que AHORA tiene el array.
document.write(resultado + "<br>");


document.write(nombres + "<br><br><br><br>");      // Mostrando el array con un elemento agregado.





// "reverse()"  -  Invierte el orden de los elementos de un array.  -------------------------------------------------------------------------------------------------------------

document.write(`Método "<b>reverse()</b>":  <br><br>`);

nombres = ["santiago","maria","jorge"];
document.write(nombres + "<br><br>"); 


nombres.reverse();
// resultado = nombres.reverse();                    Es lo mismo que la linea de arriba (71)
document.write(nombres + "<br><br><br><br>");





// "unshift()"  -  Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.  --------------------------------------------------------------------

document.write(`Método "<b>unshift()</b>":  <br><br>`);

nombres = ["santiago","maria","jorge"];
document.write(nombres + "<br><br>"); 


nombres.unshift("juan" , "julieta" , "matias");          // Agregando elementos al PRINCIPIO del array.
document.write(nombres + "<br><br><br><br>");




// "sort()"  -  Ordena los elementos de un array localmente y devuelve el array ordenado.  --------------------------------------------------------------------------------------

document.write(`Método "<b>sort()</b>":  <br><br>`);

let numeros = [1,5,2,4,7,3,5];
nombres = ["santiago","maria","jorge","ana","brenda","matias","camila","paulina"];


// Ejemplo con "numeros":
document.write(numeros + "<br>");

numeros.sort();                             // Ordenando el array.
document.write(numeros + "<br><br>");



// Ejemplo con "cadenas de caracteres":
document.write(nombres + "<br>");

nombres.sort();                             // Ordenando el array ALFABETICAMENTE.
document.write(nombres + "<br><br><br><br>");




// "splice()"  -  Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.  -------------------------------------------------------------

document.write(`Método "<b>splice()</b>":  <br><br>`);


document.write(`<b>Array original:</b> <br>`);
nombres = ["santiago","maria","jorge","ana","brenda","matias","camila","paulina"];
document.write(nombres + "<br><br>");

document.write(`<b>Eliminando elementos:</b> <br>`);
nombres.splice(2 , 3);           // PRIMER PARAMETRO: posicion en la que comienza   |  SEGUNDO PARAMETRO: la cantidad de elementos que elimina desde el PRIMER PARAMETRO
document.write(nombres + "<br><br>");



nombres = ["santiago","maria","jorge","ana","brenda","matias","camila","paulina"];

document.write(`<b>Reemplazando elementos:</b> <br>`);
nombres.splice(2 , 3 , "robert galati" , "luquitas rodriguez");     // Reemplazando 3 elementos a partir de la posicion "2".
document.write(nombres + "<br><br>");



nombres = ["santiago","maria","jorge","ana","brenda","matias","camila","paulina"];

document.write(`<b>Agregando elementos al PRINCIPIO:</b> <br>`);
nombres.splice(0 , 0 , "robert galati" , "luquitas rodriguez");     // Agregando elementos al principio del array.
document.write(nombres + "<br><br>");



nombres = ["santiago","maria","jorge","ana","brenda","matias","camila","paulina"];

document.write(`<b>Agregando elementos al FINAL:</b> <br>`);
nombres.splice(-1 , 0 , "robert galati" , "luquitas rodriguez");     // Agregando elementos entre la ANTEÚLTIMA y la ÚLTIMA posicion.
document.write(nombres + "<br><br>");