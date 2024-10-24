/* A) Cofla ya está terminando el primer semestre del primer ciclo, la tarea que debe realizar es mucho más avanzada de la que tenía antes. Además de suma, resta, 
multiplicación y división, ahora tambaién necesitará calcular potencias, raíces cuadradas y cúbicas. 


                            CREAR SOLUCIONES
                            
                            - Perfeccionar calculadora para poder implementar las nuevas funciones.                                                             */





class Calculadora {

    // Propiedades:
    constructor() {

    }


    // Métodos:
    sumar = (num1 , num2) => {
        let resultado = parseInt(num1) + parseInt(num2);
        return resultado;
    }
    
    restar(num1 , num2){
        let resultado = parseInt(num1) - parseInt(num2);
        return resultado;
    }
    
    multiplicar(num1 , num2){
        let resultado = parseInt(num1) * parseInt(num2);
        return resultado;
    }
    
    dividir(num1 , num2){
        let resultado = parseInt(num1) / parseInt(num2);
        return resultado;
    }

    potenciacion(num , exp){
        let resultado = 1;

        for(let i = 0 ; i < exp ; i++)
        {
            resultado *= num;
        }

        // otra forma:    return  resultado ** num

        return resultado;
    }

    raizCuadrada(num){
        let resultado = Math.sqrt(num);

        return resultado;
    }

    raizCubica(num){
        let resultado = Math.cbrt(num);

        return resultado;
    }
}

                            
                            
                            
const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: sumar  ,  2: restar  ,  3: multiplicar  ,  4: dividir   ,   5: potenciación   ,   6: raíz cuadrada   ,   7: raíz cúbica");
let res , numero1 , numero2;


if (operacion == 1)
{
    numero1 = prompt("Primer numero para sumar:");
    numero2 = prompt("Segundo numero para sumar:");

    res = calculadora.sumar(numero1 , numero2);

    alert("Resultado = " + res);
}
else if (operacion == 2)
{
    numero1 = prompt("Primer numero para restar:");
    numero2 = prompt("Segundo numero para restar:");

    res = calculadora.restar(numero1 , numero2);

    alert("Resultado = " + res);
}
else if (operacion == 3)
{
    numero1 = prompt("Primer numero para multiplicar:");
    numero2 = prompt("Segundo numero para multiplicar:");

    res = calculadora.multiplicar(numero1 , numero2);

    alert("Resultado = " + res);
}
else if (operacion == 4)
{
    numero1 = prompt("Primer numero para dividir:");
    numero2 = prompt("Segundo numero para dividir:");

    res = calculadora.dividir(numero1 , numero2);

    alert("Resultado = " + res);
}
else if (operacion == 5)
{
    numero1 = prompt("Ingrese la base de la potencia:");
    numero2 = prompt("Ingrese el exponente:");

    res = calculadora.potenciacion(numero1 , numero2);

    alert("Resultado = " + res);
}
else if (operacion == 6)
{
    numero1 = prompt("Raíz cuadrada de:");

    res = calculadora.raizCuadrada(numero1);

    alert("Resultado = " + res);
}
else if (operacion == 7)
{
    numero1 = prompt("Raíz cúbica de:");

    res = calculadora.raizCubica(numero1);

    alert("Resultado = " + res);
}
else
{
    alert("Valor incorrecto.");
}