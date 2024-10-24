// Objeto Math

let numero;


// _______________________________________________________________  Métodos  ____________________________________________________________________________________________________


// "sqrt()"  -  Devuelve la raíz cuadrada positiva de un número.  -------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.sqrt()</b>': <br><br>`);

numero = Math.sqrt(25);
document.write(numero + "<br><br><br><br>");



// "cbrt()"  -  Devuelve la raíz cúbica positiva de un número.  -------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.cbrt()</b>': <br><br>`);

numero = Math.cbrt(8);
document.write(numero + "<br><br><br><br>");



// "max()"  -  Devuelve el mayor de cero o más números.  ----------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.max()</b>': <br><br>`);

numero = Math.max(4,1,6,23,875,231,5,32,1);
document.write(numero + "<br><br><br><br>");




// "min()"  -  Devuelve el menor de cero o más números.  ----------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.min()</b>': <br><br>`);

numero = Math.min(4,1,6,23,875,231,5,32,1);
document.write(numero + "<br><br><br><br>");



// "random()"  -  Devuelve un número pseudo-aleatorio entre 0 y 1.  -------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.random()</b>': <br><br>`);

numero = Math.random();
document.write(numero + "<br><br><br><br>");



// "round()"  -  Devuelve el valor de un número redondeado al número entero más cercano.  ---------------------------------------------------------------------------------------

document.write(`'<b>Math.round()</b>': <br><br>`);

numero = Math.random() * 100;
numero = Math.round(numero);

document.write(numero + "<br><br><br><br>");



// "floor()"  -  Devuelve el mayor entero menor que o igual a un número.  -------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.floor()</b>': <br><br>`);

numero = Math.floor(4.999999);
document.write(numero + "<br>");

numero = Math.floor(3.9999);
document.write(numero + "<br>");

numero = Math.floor(5.1);
document.write(numero + "<br><br><br><br>");




/* Ejemplo:  obtener numeros entre 0 y 100  (0 y 100 no estan incluidos)

    for(let i = 0 ; i < 100000 ; i++)
    {
        let numero = Math.random() * 99;
        numero = Math.floor(numero + 1);

        document.write(numero + "<br>");
    }

*/




// "fround()"  -  Devuelve la representación flotante de presición simple más cercana de un número.  ---------------------------------------------------------------------------

document.write(`'<b>Math.fround()</b>': <br><br>`);

numero = Math.fround(9.999999999999);
document.write(numero + "<br>");


numero = Math.fround(4.75526471829999999999999);        // Redondea a 4 bits (16 caracteres).
document.write(numero + "<br><br><br><br>");




// "trunc()"  -  Devuelve la parte entera del número "x", la eliminación de los dígitos fraccionarios.  -------------------------------------------------------------------------

document.write(`'<b>Math.trunc()</b>': <br><br>`);

numero = Math.trunc(9.999);
document.write(numero + "<br>");


numero = Math.trunc(9.43453);
document.write(numero + "<br><br><br><br>");






// _______________________________________________________________  Propiedades  _______________________________________________________________________________________________


// "PI"  -  Devuelve el valor del número PI.  ---------------------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.PI</b>': <br><br>`);

numero = Math.PI;
document.write(numero + "<br><br><br><br>");



// "SQRT1_2"  -  Devuelve la raíz cuadrada de "1/2".  --------------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.SQRT1_2</b>': <br><br>`);

numero = Math.SQRT1_2;
document.write(numero + "<br><br><br><br>");



// "SQRT2"  -  Devuelve la raíz cuadrada de "2".  --------------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.SQRT2</b>': <br><br>`);

numero = Math.SQRT2;
document.write(numero + "<br><br><br><br>");



// "E"  -  Constante de Euler, la base de los logaritmos naturales.  -----------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.E</b>': <br><br>`);

numero = Math.E;
document.write(numero + "<br><br><br><br>");



// "LN2"  -  Logaritmo natural de 2.  ------------------------------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.LN2</b>': <br><br>`);

numero = Math.LN2;
document.write(numero + "<br><br><br><br>");



// "LN10"  -  Logaritmo natural de 10.  ----------------------------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.LN10</b>': <br><br>`);

numero = Math.LN10;
document.write(numero + "<br><br><br><br>");



// "LOG2E"  -  Logaritmo de E con base 2.  -----------------------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.LOG2E</b>': <br><br>`);

numero = Math.LOG2E;
document.write(numero + "<br><br><br><br>");




// "LOG10E"  -  Logaritmo de E con base 10.  -----------------------------------------------------------------------------------------------------------------------------------

document.write(`'<b>Math.LOG10E</b>': <br><br>`);

numero = Math.LOG10E;
document.write(numero + "<br><br><br><br>");