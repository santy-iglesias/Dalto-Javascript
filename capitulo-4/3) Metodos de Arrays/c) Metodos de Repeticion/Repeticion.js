// Métodos de array

let nombres = ["santiago","ana","brenda","matias","valentin"];
let resultado;


// ________________________________________________________  Métodos de  Repetición  ___________________________________________________________________________________________


// "filter()"  -  Crea un nuevo array con todos los elementos que cumplan la condición  y/o  ejecuta la función indicada una vez por cada elemento del array. -------------------

document.write(`Método '<b>filter()</b>':  <br><br>`);


nombres.filter( nombre => document.write(nombre + "<br>") );

document.write("<br><br>");


// Otra forma:
nombres.filter( (nombre) => {
    document.write(nombre + "<br>");
} )

document.write("<br><br>");



// Con condidiones:
resultado = nombres.filter( nombre => nombre.length > 6 );             // Se ejecuta solamente si se cumple la condición (si el nombre tiene mas de 4 letras).
document.write(resultado + "<br>");


document.write("<br><br><br><br>");


// El "filter()" permite hacer lo mismo que el "forEach()" y además nos poermite usarlo con codiciones.




// "forEach()"  -  Ejecuta la función indicada una vez por cada elemento del array.  -------------------------------------------------------------------------------------------

document.write(`Método '<b>forEach()</b>':  <br><br>`);

nombres.forEach( nombre => document.write(nombre + "<br>") );


// Otra forma:
nombres.filter( (nombre) => {
    document.write(nombre + "<br>");
} )

document.write("<br><br><br><br>");


// Funciona similar a "filter()".