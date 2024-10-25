// Consola en Javascript


// ________________________________________________________  Funciones de "Registro"  ___________________________________________________________________________________________


// "log()"  -  Muestra un mensaje de DEPURACIÓN en la consola.  ---------------------------------------------------------------------------------------------------------

console.log("Funcion 'console.log()':");

console.log("hola");        // Forma de mostrar algo en la consola del navegador.



// "assert()"  -  Aparece un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera, no aparecerá nada.  (NO ESTÁNDAR)  ---------------

console.log("Funcion 'console.assert()':");

console.assert(5 > 3);           // Afirmacion verdadera  ---->  NO SE MUESTRA EN CONSOLA
console.assert(5 < 4);           // Afirmacion falsa  ----> SE MUESTRA EN CONSOLA




// "clear()"  -  Limpia la consola.  -----------------------------------------------------------------------------------------------------------------------------------

//    console.clear()     ----------->    Se escribe directamente en la consola y se limpia.




// "error()"  -  Muestra un mensaje de error en la consola.  ----------------------------------------------------------------------------------------------------------

console.log("Funcion 'console.error()':");

console.error("Che capo ¿Qué hiciste?");





// "info()"  -  Emite un mensaje INFORMATIVO en la consola.  (No confundir con "console.log()")  ----------------------------------------------------------------------

console.log("Funcion 'console.info()':");

console.info("Che muy bien tu trabajo, pero eso no se usa más.");

console.info([4,5,2,1,4,6,67,3,2]);





// "table()"  -  Esta función toma un argumento obligatorio: data, que debe ser una array o un objeto, y un parámetro adicional: columns y nos muestra una tabla en consola.   ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("Funcion 'console.table()':");

console.table([4,5,2,1,4,6,67,3,2]);      

// Muestra una tabla en la consola.





// "warn()"  -  Muestra un mensaje de advertencia en la consola.  (No necesariamente tiene que ser un error)   ---------------------------------------------------------

console.log("Funcion 'console.warn()':");

console.warn("che capo, venis bien pero cuidado porque...");




// "dir()"  -  Despliega una lista interactiva de las propiedades del objeto Javascript especificado.  (NO ESTÁNDAR)   --------------------------------------------------

console.log("Funcion 'console.dir()':");

console.dir([4,5,2,1,4,6,67,3,2]);