// Sentencia "throw"

// Se utiliza para tirar un error


try 
{
    // Tambien puede tirar objetos:
    throw {
        error: "Nombre del error",
        info: "Información del error",
    }

    // throw "pito";
}
catch (e)
{
    console.log(e);
}
finally
{
    
}


// Funciona tambien fuera del "catch":

throw "error de boludo";


// El "throw" lanza una excepcion y podemos mostrar el dato que querramos.