/* A) 3 chicos de 23 años perfectamente normales entran en una heladería a comprar un helado pero hay un problema: los precios no están al lado de cada estante con su 
respectivo helado.

Ellos quieren comprar el helado más caro que puedan con la plata que tienen, asi que... veamos como ayudarlos.

Roberto tiene  $1.5 USD
Pedro tiene  $1.7 USD
Cofla tiene  $3 USD

Los precios de los helados son los siguientes:
- Palito de helado de agua: $0.6 USD
- Palito de helado de crema: $1 USD
- Bombón helado marca heladix: $1.6 USD
- Bombón helado marca heladovich: $1.7 USD
- Bombón helado marca helardo: $1.8 USD
- Potecito de helado con confites: $2.9 USD
- Pote de 1/4 KG: $2.9 USD


Crear soluciones:
- Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que puedan comprar.
- Si hay 2 o más con el mismo precio, mostrar ambos.
- Cofla quiere saber cuanto es el vuelto.                                                                                                                                   */


let dineroRoberto = prompt("Cuanto dinero tienes roberto?");

if(dineroRoberto >= 0.6  &&  dineroRoberto < 1)
{
    alert("Comprate el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6)
{
    alert("Comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7)
{
    alert("Comprate el helado marca heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8)
{
    alert("Comprate el helado marca heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9)
{
    alert("Comprate el helado marca helardo");
}
else if (dineroRoberto >= 2.9)
{
    alert("Comprate el helado con confites o el pote de 1/4 KG");
}
else
{
    alert("No te alcanza para nada pobre de mierda");
}




let dineroPedro = prompt("Cuanto dinero tienes pedro?");

if(dineroPedro >= 0.6  &&  dineroPedro < 1)
{
    alert("Comprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6)
{
    alert("Comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7)
{
    alert("Comprate el helado marca heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8)
{
    alert("Comprate el helado marca heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9)
{
    alert("Comprate el helado marca helardo");
}
else if (dineroPedro >= 2.9)
{
    alert("Comprate el helado con confites o el pote de 1/4 KG");
}
else
{
    alert("No te alcanza para nada pobre de mierda");
}




let dineroCofla = prompt("Cuanto dinero tienes cofla?");

// Convirtiendo la cadena de caracteres ingresada en un ENTERO:
dineroCofla = parseInt(dineroCofla);   


if(dineroCofla >= 0.6  &&  dineroCofla < 1)
{
    alert("Comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6)
{
    alert("Comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7)
{
    alert("Comprate el helado marca heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8)
{
    alert("Comprate el helado marca heladovich");
    alert("y te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9)
{
    alert("Comprate el helado marca helardo");
    alert("y te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9)
{
    alert("Comprate el helado con confites o el pote de 1/4 KG");
    alert("y te sobran " + (dineroCofla - 2.9));
}
else
{
    alert("No te alcanza para nada pobre de mierda");
}