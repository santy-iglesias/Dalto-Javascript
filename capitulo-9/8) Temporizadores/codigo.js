// Temporizadores


// setTimeout()  -  Primer parametro: una función  ,  Segundo parámetro: tiempo que pasa antes de ejecutarse.  -------------------------------------

setTimeout( ()=>{
    document.write("hola");
} , 2000 );

// El "Segundo parámetro" debe pasarse en "milisegundos".




// clearTimeout()  -  Limpia el temporizador.  -----------------------------------------------------------------------------------------------------

const temporizador = setTimeout( ()=>{
    alert("Bienvenido a nuestra página");
} , 3000 );


clearTimeout(temporizador);

// Esta variable no se ejecuta.




// setInterval()  -  Ejecuta la función pasada cada cierto tiempo.  --------------------------------------------------------------------------------

const intervalo = setInterval( ()=>{
    document.write("<br> Esto se ejecuta cada 6 segundos. <br>");
} , 6000 );



// Dejando de ejecutar el intervalo a los "18 segundos":
setTimeout( ()=>{
    clearInterval(intervalo);
} , 18000 );




// Los temporizadores consumen muchos recursos, por lo tanto no se recomienda que se usen para todo.