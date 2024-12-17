/* A) Cofla esta en su ultimo año y necesita recuperar todas sus notas para que le puedan decir si efectivamente pasó al último semestre. De ser
así, Cofla ya estaría a un solo paso de finalizar su carrera como ingeniero. Sin embargo, estas notas estan almacenadas en otro servidor.


                    - Crear un sistema que almacene toda la información de las materias y las muestre en pantalla de forma ordenada

*/


const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 4",
        nota: 7,
    },{
        nombre: "Calculo 3",
        nota: 8,
    },{
        nombre: "Bases de Datos 3",
        nota: 9,
    },{
        nombre: "Matematica Discreta 2",
        nota: 7,
    },{
        nombre: "Programacion 4",
        nota: 8,
    }
];



const obtenerMateria = (id)=>{
    return new Promise( (resolve , reject)=>{
        let materia = materias[id];

        if(materia == undefined)
        {
            reject("La materia no existe");
        }

        // Este "else" podria sacarse, es simplemente para que se entienda.
        else
        {
            setTimeout( ()=>{resolve(materia)} , Math.random()*1400);
        }
    } );
}



const devolverMaterias = async ()=> {
    
    let materia = [];

    for (let i = 0 ; i < materias.length ; i++)
    {
        materia[i] = await obtenerMateria(i);
        console.log(materia[i]);


        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;

        materiasHTML.innerHTML += newHTMLCode;
    }
}


devolverMaterias();