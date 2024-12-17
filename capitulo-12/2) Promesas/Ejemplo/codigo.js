// Callbacks y Promesas - Ejemplo

// Con "Ctrl + h" se busca un texto y se peude remplazar por otra cosa.


class Persona {
    constructor(nombre , instagram)
    {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};


const datosPersonas = [
    ["Lucas Dalto" , "@soyDalto"],
    ["Santiago Iglesias" , "@santi.iglesias__"],
    ["Matias Meliga" , "@mati.meliga"],
    ["Martina"],
];


const personas = [];


for (let i = 0 ; i < datosPersonas.length ; i++)
{
    personas[i] = new Persona(datosPersonas[i][0] , datosPersonas[i][1]);
}



// ------------------------------------------------- Funciones -------------------------------------------------------------------------------------

const obtenerPersona = (id) => {
    
    return new Promise( (resolve , reject)=>{
        
        if(personas[id] == undefined)
        {
            reject("No se ha encontrado la persona");
        }
        else
        {
            resolve( personas[id] );
        }
    } );
}


const obtenerInstagram = (id) => {

    return new Promise( (resolve , reject)=>{

        if(personas[id].instagram == undefined)
        {
            reject("No se ha encontrado el instagram");
        }
        else
        {
            resolve(personas[id].instagram);
        }
    } );
}


// -------------------------------------------------------------------------------------------------------------------------------------------------


let id = 3;

// Llamando a la funcion "obtenerPersona()":
obtenerPersona( id ).then( (persona)=>{

    console.log(persona.nombre);
    
    return obtenerInstagram( id );

} ).then( (instagram)=>{

    console.log(instagram);

} ).catch( (error)=>{

    console.log(error);

} );