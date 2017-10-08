/**
 * Created by eduardobq3 on 01/10/2017.
 */

$(document).on('click', '#add2', function () {

    var x0 = parseInt($('#x0').val());

    var y0 = parseInt($('#y0').val());

    var raio = parseInt($('#raio').val());

    var y = raio, x = 0;  //y é o pivô

    var raioErro = (1.25 - x);

    corpo2 = dCirculo(x0,y0,x,y,raioErro);

    $("#circulo").append(corpo2);

});

function dCirculo(x0,y0,x,y,raioErro) {


    while(y >= x)
    {
        setPixel(x + x0, y + y0);
        setPixel(y + x0, x + y0);
        setPixel(-x + x0, y + y0);
        setPixel(-y + x0, x + y0);
        setPixel(-x + x0, -y + y0);
        setPixel(-y + x0, -x + y0);
        setPixel(x + x0, -y + y0);
        setPixel(y + x0, -x + y0);

        x++;
        if(raioErro<0)
            raioErro+=2*x+3;
        else
        {
            y--;
            raioErro+=2*(x-y) +5;
        }
    }

}