// Await & Async


const obtenerInformacion = (text)=>{
    return new Promise( (resolve , reject)=>{
        setTimeout( ()=>{resolve(text)} , Math.random()*3000 );
    } );
}


// Sin funciones asincronas:
obtenerInformacion("pito").then(resultado => console.log(resultado));
obtenerInformacion("bernardo").then(resultado => console.log(resultado));
obtenerInformacion("julian").then(resultado => console.log(resultado));




// Con funciones asincronas:

const mostrarData = async ()=> {
    data1 = await obtenerInformacion("1: pito");
    data2 = await obtenerInformacion("2: bernardo");
    data3 = await obtenerInformacion("3: eduardo");


    // "await"  -  Hasta que no se consigue la informacion, no se sigue con el programa.


    console.log(data1);
    console.log(data2);
    console.log(data3);
}  


mostrarData();