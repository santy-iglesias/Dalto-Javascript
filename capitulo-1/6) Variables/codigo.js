/* ---------------------------------------------------------------  Todo sobre VARIABLES  ------------------------------------------------------------------------------------------*/

recipiente = "papel";

// Mostrando en pantalla la variable "recipiente":
alert(recipiente);



/* -----------------------------------------------------  Tipos de datos y formas de declarar una variable ---------------------------------------------------------------------------*/


string = "cadena de texto";
number = 19;                                    // Son tipos de datos PRIMITIVOS, es decir que son originales del lenguaje.    
booleano = false;    // o true         



/* Hay tres formas de declarar una variables:  'var'  ,  'let'  ,  'const'    

- 'var'  tiene alcance GLOBAL (NO SE RECOMIENDA).
- 'let'  tiene alcance LOCAL.
- 'const'  mantiene SIEMPRE su valor. Se inicializa una sola vez. Se debe declarar e inicializa en la misma línea, sino se genera un ERROR.

*/


// Declarando e inicializando la variable "numero":
let numero = 15;


// Declarando una variable "cosa":
let cosa;                              // Valor "undefined": la variable existe en el programa pero no tiene ningun valor.
alert(cosa);



/*  const numero;

    numero = 2;         ====>    ERROR

    alert(numero); */



// Declarando más de una variable en la misma línea:
let numero1, numero2, numero3;

numero1 = 12;
numero2 = 3;
numero3 = 67;

alert(numero1);
alert(numero2);
alert(numero3);



// Declarando e inicializando más de una variable en la misma línea:
let x = 10, y = 23, z = 14;





/* --------------------------------------------------------------------------- Valor "null" ------------------------------------------------------------------------------------------*/

recipiente = null;          // La variable recipiente está "vacía". 

// "null" es dintinta de "undefined".



/* --------------------------------------------------------------------------- Valor "NaN" ------------------------------------------------------------------------------------------*/

// Utilizando variables declaradas anteriormente:
numero = 5;
numero = "pedro";

alert(numero * numero2);

// NaN  =  "not a number"

// El valor "NaN" se obtiene al hacer una operación la cual debe recibir unicamente numeros.