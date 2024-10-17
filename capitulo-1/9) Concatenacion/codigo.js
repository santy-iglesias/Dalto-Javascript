// Concatenación

// Concatenando palabras / cadenas de texto:

saludo = "¡hola pedro!";
pregunta = " ¿Cómo estas?";

frase = saludo + pregunta;

// Mostrando en pantalla:
alert(frase);



// Concatenando numeros:

numero1 = 5;
numero2 = 8;

resultado = "" + numero1 + numero2;           // Cuando se detecta "texto", convierte todo a una cadena de texto, permitiendonos concatenar los numeros.

// De esta forma "resultado" muestra "58" en vez de 13.


alert(resultado);




// Concantenando con "Concat":

// Es necesario que alguno de los dos datos sea SI O SI un "string", por lo tanto no es muy optima para concaternar numeros. Para eso es preferible la segunda opción.

n1 = "53";
n2 = 8;

res = n1.concat(n2);

alert(res);



// Concatenando con "backsticks y la variable entre '${}' ":

nombre = "santiago iglesias";
frase = `soy ${nombre} y estoy caminando`;

// Para poner los backticks:     Alt Gr + cierre de llave (}) dos veces

alert(frase);

// Podemos usar el backtick para escribir codigo "html" en javascript.






// Escape de comillas dobles:

frase = 'soy "santiago" y soy crack';


// Escape de comillas simples:

frase = "soy 'santiago' y soy crack";


// Los "backticks" funcionan de la misma manera.