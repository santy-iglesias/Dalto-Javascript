// Finally

// Se ejecuta sin importar lo que pase



try 
{
    console.log("No hay errores");
}
catch 
{
    if (3 < 5)
    {
        console.log("3 < 5, por lo tanto se ejecuta este mensaje");
    }
    else
    {
        console.log("Tranquilo, funciona todo bien");
    }
}
finally
{
    console.log("Me muestro igual");
}