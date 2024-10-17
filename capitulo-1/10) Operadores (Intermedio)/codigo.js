// Operadores (Intermedios)

/* Operadores de Comparación:

Los OPERADORES DE COMPARACIÓN comparan dos expresiones y devuelven un valor "booleano" que representa la relación de sus valores.


- Igualdad               ===>  a == b
     
- Desigualdad            ===>  a != b
     
- Identidad              ===>  a === b                 (Para preguntar si es el mismo dato y mismo tipo de dato)
     
- Desidentidad           ===>  a !== b
     
- Mayor que              ===>  a > b

- Mayor o igual que      ===>  a >= b

- Menor que              ===>  a < b

- Menor o igual que      ===>  a <= b

*/

alert("Operadores de Comparación");

let numero1 = 23;
let numero2 = 12;
let texto1 = "23";
let texto2 = "texto 2";


alert(numero1 != numero2);
alert(texto1 == texto2);
alert(texto1 == numero1);
alert(texto1 === numero1);


let resultado = numero1 > numero2;
alert(resultado);





/* Operadores Lógicos:

Los OPERADORES LÓGICOS nos devuelven un resultado a partir de que se cumpla (o no) una condición, su resultado es "booleano", y sus operandos son valores lógicos o asimilables
a ellos.


- AND (&&) lógico     ===>   expresion1  &&  expresion2             // Para que sea "true" ambas expresiones deben ser "true".
   
- OR (||) lógico      ===>   expresion1  ||  expresion2             // Para que sea "true" al menos una de las expresiones debe ser "true".
     
- NOT (!) lógico      ===>   !expresion

*/

alert("Operadores Lógicos");

let num1 = 12; 
let num2 = 23;
let valor1 = true;

let afirmacion1 = num1 > num2;
let afirmacion2 = num1 != num2;

let resultado3 = !valor1;

alert(afirmacion1 && afirmacion2);      // Para que sea "true" ambas expresiones deben ser "true".
alert(afirmacion1 || afirmacion2);      // Para que sea "true" al menos una de las expresiones debe ser "true".
alert(resultado3);