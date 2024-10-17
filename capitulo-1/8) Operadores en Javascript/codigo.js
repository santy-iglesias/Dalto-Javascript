// Operadores en Javascript

// Los OPERADORES ARITMÉTICOS toman valores numéricos (ya sean literales o variables) como sus operandos y retornan un valor numérico único.

// Un OPERADOR DE ASIGNACIÓN asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.




/* Los OPERADORES DE ASIGNACIÓN son los mismos utilizados en C++.

    x = y          x += y          x -= y        x *= y
    x /= y         x %= y

    
    Asignación de EXPONENCIACIÓN     =====>     x **= y
    
    Asignación de desplazamiento a izquierda    =====>    x <<= y                                    ↓  De aca para abajo se utlizan para casos muy específicos  ↓

    Asignación de desplazamiento a derecha    =====>    x >>= y

    Asignación sin signo de desplazamiento a derecha    =====>    x >>>= y

    Asignación AND    =====>    x &= y

    Asignación XOR    =====>    x ^= y

    Asignación OR    =====>    x |= y
    
    */



let numero = 10;

numero += 5;

alert(numero);




/* Los OPERADORES ARITMÉTICOS son los mismos utilizados en C++.

    +   -    *    /    %     ++    --   


    Exponenciación   ======>   **exponente

    Negación unaria  =======>  -numero

*/

numero = 10;

let resultado = numero ** 3;

alert(resultado);