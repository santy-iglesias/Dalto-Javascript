/* A) Un joven muy afortunado logró ganar el primer premio de la loteria... exacto, estamos hablando del pobre al que Cofla le dió una mano, este pobre decide hacer una
fiesta para festejar que salió de la pobreza con este millonario compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas...

            - Dejar pasar solo a los mayores de edad
            - La primer persona que entre despues de las 2 AM, no paga.                                                                                              */


let free = false;

const validarCliente = (time) => {
    let edad = prompt("Cual es tu edad?");

    if (edad >= 18)
    {
        if (time >= 2  &&  time < 7  &&  free == false)
        {
            alert("podes pasar gratis porque sos la primer persona despues de las 2 AM");
            free = true;
        }
        else
        {
            alert(`son las ${time} y podes pasar pero tenes que pagar la entrada`);
        }
    }
    else
    {
        alert("mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
    }
}




validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
validarCliente(6);
validarCliente(1.4);