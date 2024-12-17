// Promesas


let nombre = "pesdro";


const promesa = new Promise( (resolve , reject)=>{

    if(nombre !== "pedro")
    {
        reject("Lo siento, el nombre no es 'pedro'");
    }
    else
    {
        resolve(nombre);
    }
} );


console.log(promesa);




// Para acceder a los datos dentro de la "promesa":      (Para acceder a "resolve" y "reject" se utiliza esto)

promesa.then( (resultado)=>{

    console.log(resultado);

} ).catch( (error)=>{

    console.log(error);
    
} );


// En caso de que todo salga bien, se ejecuta la primera parte del "then()", sino se ejecuta la segunda parte (la del "catch").