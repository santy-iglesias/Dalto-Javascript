/* C) Cofla feliz por haber empezado las clases volvió a su casa y ya tiene tarea básica de cálculo; tiene que hacer un par de ejercicios de matemática que incluyen suma,
resta, multiplicación y división, realizar esto con una calculadora puede ser mucho mas efectivo. 

                - Crear una calculadora que nos simplifique el trabajo.                                                                                                    */


const sumar = (num1 , num2) => {
    let resultado = parseInt(num1) + parseInt(num2);
    return resultado;
}

const restar = (num1 , num2) => {
    let resultado = parseInt(num1) - parseInt(num2);
    return resultado;
}

const multiplicar = (num1 , num2) => {
    let resultado = parseInt(num1) * parseInt(num2);
    return resultado;
}

const dividir = (num1 , num2) => {
    let resultado = parseInt(num1) / parseInt(num2);
    return resultado;
}




alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: sumar  ,  2: restar  ,  3: multiplicar  ,  4: dividir");


if (operacion == 1)
{
    let numero1 = prompt("Primer numero para sumar:");
    let numero2 = prompt("Segundo numero para sumar:");

    let res = sumar(numero1 , numero2);

    alert("Resultado = " + res);
}
else if (operacion == 2)
{
    let numero1 = prompt("Primer numero para restar:");
    let numero2 = prompt("Segundo numero para restar:");

    let res = restar(numero1 , numero2);

    alert("Resultado = " + res);
}
else if (operacion == 3)
{
    let numero1 = prompt("Primer numero para multiplicar:");
    let numero2 = prompt("Segundo numero para multiplicar:");

    let res = multiplicar(numero1 , numero2);

    alert("Resultado = " + res);
}
else if (operacion == 4)
{
    let numero1 = prompt("Primer numero para dividir:");
    let numero2 = prompt("Segundo numero para dividir:");

    let res = dividir(numero1 , numero2);

    alert("Resultado = " + res);
}
else
{
    alert("Valor incorrecto.");
}