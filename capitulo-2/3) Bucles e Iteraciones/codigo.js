// Bucles e Iteraciones en Javascript

// --------------------------------------------------------------------  Bucle "while"  -------------------------------------------------------------------------------------

let contador = 0;

document.write("<b>Bucle 'while':</b>" + "<br>" + "<br>");

while (contador < 10) {                  // Pregunta por la condicion y se ejecuta hasta que esta deje de cumplirse.
    
    contador++;
    document.write(contador + "<br>");

}

document.write("<br>" + "<br>");






// -------------------------------------------------------------------  Bucle "do while"  ------------------------------------------------------------------------------------

document.write("<b>Bucle 'do while':</b>" + "<br>" + "<br>");

contador = 0;

do {                                // Se ejecuta por lo menos 1 vez. Primero se ejecuta y despues pregunta por la condicion.

    document.write(contador);
    contador++;
    
} while (contador <= 6)


document.write("<br>" + "<br>" + "<br>");






// --------------------------------------------------------------  Sentencia "break"  -----------------------------------------------------------------------------------------

document.write("<b>Sentencia 'break':</b>" + "<br>" + "<br>");

contador = 0;

while (contador < 20) {

    document.write(contador);
    contador++;

    
    // Saliendo del bucle en "10": 
    if (contador == 10) {
        break;
    }

}

document.write("<br>" + "<br>" + "<br>");





// ------------------------------------------------------------------  Bucle "for"  -----------------------------------------------------------------------------------------

document.write("<b>Bucle 'for':</b>" + "<br>" + "<br>");

// for ( declaracion e inicializacion  ;  condicion  ;  "aumento" o "decremento" )      (Como en "C++")


for (let i = 0 ; i < 8 ; i++) {

    document.write(i + " ");

}

/* Otra forma:

let i = 6;

for (i ; i >= 0 ; i--) {

        CODIGO

}  */

document.write("<br>" + "<br>" + "<br>");






// ------------------------------------------------------------------  Sentencia "continue" ------------------------------------------------------------------------------------

document.write("<b>Sentencia 'continue':</b>" + "<br>" + "<br>");

for (let i = 0 ; i < 20 ; i++) {

    // Salteando el numero "12":
    if (i == 12) {
        continue;
    }

    document.write(i + " ");
}

document.write("<br>" + "<br>" + "<br>");





// --------------------------------------------------------------- Bucle "for in" ------------------------------------------------------------------------------------------

document.write("<b>Bucle 'for in':</b>" + "<br>" + "<br>");

let animales = ["gato","perro","tiranosaurio rex"];





document.write("Mostrando los índices de los elementos del array 'animales':" + "<br>" + "<br>");

for (let animal in animales) {
    
    document.write(animal + "<br>");
}

// Devuelve la posición en la que se encuentran los elementos.

document.write("<br>" + "<br>");



document.write("Mostrando los elementos del array 'animales':" + "<br>" + "<br>");

for (let animal in animales) {

    document.write(animales[animal] + "<br>");
}

document.write("<br>" + "<br>");




// --------------------------------------------------------------- Bucle "for of" ---------------------------------------------------------------------------------

// let animales = ["gato","perro","tiranosaurio rex"];

document.write("<b>Bucle 'for of':</b>" + "<br>" + "<br>");

for (let animal of animales) {

    document.write(animal + "<br>");
}

// Devuelve el valor de los elementos.


document.write("<br>" + "<br>" + "<br>");






// --------------------------------------------------------------- Sentencia "label" ---------------------------------------------------------------------------------------

document.write("<b>Sentencia 'label':</b>" + "<br>" + "<br>");

let array1 = ["maria" , "stefania" , "roberta"];
let array2 = ["pedro" , "marcelo" , array1 , "josefina"];


forRancio:                 // Sentencia "label"
for (let array in array2) 
{
    if (array == 2)
    {
        for (let array of array1)
        {
            document.write(array + "<br>");
            break forRancio;
        }

        // break;     // De esta forma no se muestra "josefina".
    }
    else
    {
        document.write(array2[array] + "<br>");
    }
}