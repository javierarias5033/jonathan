
//declarar variables 
let servicio, costo,forma, descuento;
alert("servicios disponibles");
servicio=prompt("ingrese \n 1 para alisado \n 2- uñas \n 3-tintes \n 4- cortes \n 5-tratamiento de cabello");
while(servicio<1 || servicio>3)
{
    servicio=parseInt(prompt("ingrese correctamente \n 1 para alisado \ 2 para uñas \n 3 para tintes\n 4 para corte \n 5 para tratamiento de cabello"));

}
 forma=parseInt(prompt("ingrese la forma de pago \n 1- targeta \n 2- efectivo \n 3-cliente frecuente"));
 while(forma<1 || forma>3)
 {
    forma=parseInt(prompt("ingrese la forma de pago"));
 }

  switch (servicio)
  {
  case 1:
    {
    costo=50;
    break;
    }
 case 2:
{
 costo=25;
 break;
 }
 default:
    {
        costo=35;
        break;
    }
    case 3:
    {
costo=5
break;
    }
    case 3:
        {
    costo=100
    break;
        }
  }
    //impresion
    if(forma==1 && servicio==1)
    {
        document.write("usted se hizo un alisado<br>");
        document.write("usted canceló con targeta de credito <br>");
        document.write("el costo es de "+costo+"<br>");
        document.write("se le hará un reccardo del 10%"+(costo*0.10)+"<br>");
        document.write("el pago total será de:"+(costo*1,10));
    }

    if(forma==2 && servicio==1)
    {
        document.write("usted se hizo un alisado<br>");
        document.write("usted canceló en efectivo <br>");
        document.write("el costo es de "+costo+"<br>");
        document.write("el pago total será de:"+costo);
    }
    if(forma==3 && servicio==1)
        {
            costo=costo*1,10
            descuento=costo*0.25
            document.write("usted se hizo un alisado<br>");
            document.write("usted canceló con targeta de credito <br>");
            document.write("el costo es de "+costo+"<br>");
            document.write("se le hará un reccardo del 10%"+(costo*0.10)+"<br>");
            document.write("el pago total será de:"+(costo*1,10)+descuento);
        }
    
 
    if(forma==2 && servicio==1)
        {
            document.write("usted se hizo un alisado<br>");
            document.write("usted canceló en efectivo <br>");
            document.write("el costo es de "+costo+"<br>");
            document.write("el pago total será de:"+costo);
        }
        



    if(forma==1 && servicio==2)
    {
        document.write("usted se hizo las uñas<br>");
        document.write("usted canceló con targeta de credito <br>");
        document.write("el costo es de "+costo+"<br>");
        document.write("se le hará un reccardo del 10%"+(costo*0.10)+"<br>");
        document.write("el pago total será de:"+(costo*1,10));
    }

    if(forma==2 && servicio==2)
    {
        document.write("usted se hizo las uñas<br>");
        document.write("usted canceló en efectivo <br>");
        document.write("el costo es de "+costo+"<br>");
        document.write("el pago total será de:"+costo);
    }

    if(forma==1 && servicio==3)
    {
        document.write("usted se pintó el cabello <br>");
        document.write("usted canceló con targeta de credito <br>");
        document.write("el costo es de "+costo+"<br>");
        document.write("se le hará un reccardo del 10%"+(costo*0.10)+"<br>");
        document.write("el pago total será de:"+(costo*1,10));
    }

    if(forma==2 && servicio==3)
    {
        document.write("usted se pintó el cabello <br>");
        document.write("usted canceló en efectivo <br>");
        document.write("el costo es de "+costo+"<br>");
        document.write("el pago total será de:"+costo);
    }


