// Try... Catch

// El "try" tiene que estar acompañado OBLIGATORIAMENTE del "catch" o del "finally"

// No podemos manejar los errores de "sintaxis" con el "try...catch"



try {
    adsadadssadsa
} 

// "catch" incondicional: (no tiene condicion dentro)
catch (error) {   
    
    // "typeof" permite ver el tipo de dato
    console.log(typeof error);           // El "error" es un objeto

    console.log("Lo siento, ocurrió un error de referencia");

}