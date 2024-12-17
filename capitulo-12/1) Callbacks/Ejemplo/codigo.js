// Callbacks - Ejemplo

// Con "Ctrl + h" se busca un texto y se peude remplazar por otra cosa.

// Callback: funcion que llama a otra funcion. Funcion que se pasa como parametro a otra funcion.


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
    ["Martina" , "@martuuu"],
];


const personas = [];


for (let i = 0 ; i < datosPersonas.length ; i++)
{
    personas[i] = new Persona(datosPersonas[i][0] , datosPersonas[i][1]);
}


console.log( personas );
console.log( personas[0].nombre );



// ------------------------------------------------- Funciones -------------------------------------------------------------------------------------

const obtenerPersona = (id , callback) => {
    
    if (personas[id] == undefined)
    {
        callback("No se ha encontrado la persona");
    }
    else
    {
        callback(null , personas[id] , id);
    }
}


const obtenerInstagram = (id , callback) => {

    if (personas[id].instagram == undefined)
    {
        callback("No se ha encontrado el instagram");
    }
    else
    {
        callback(null , personas[id].instagram);
    }
}


// -------------------------------------------------------------------------------------------------------------------------------------------------


// Llamando a la funcion "obtenerPersona()":
obtenerPersona(3 , (error , persona , id)=>{

    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(persona.nombre);

        // Llamando a la función "obtenerInstagram()":
        obtenerInstagram(id , (error , instagram)=>{

            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log(instagram);
            }
        });
    }
});