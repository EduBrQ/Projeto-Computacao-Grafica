/**
 * Created by pabliciotjg on 14/09/2017.
 */

$(document).on('click', '#add', function () {

    var x1 = parseInt($('#x1').val());

    var y1 = parseInt($('#y1').val());

    var x2 = parseInt($('#x2').val());

    var y2 = parseInt($('#y2').val());

    corpo = dda(x1, y1, x2, y2);

    $("#table").append(corpo);

});

function dda(x1, y1, x2, y2) {

    var tamanho;

    var k;

    dx = Math.abs(x2 - x1);

    dy = Math.abs(y2 - y1);

    tamanho = dx;

    dy > tamanho ? tamanho = dy : '';

    xinc = dx / tamanho;

    yinc = dy / tamanho;

    x = x1;

    y = y1;

    corpo = '';

    // setPixel(Math.round(x), Math.round(y));

    for (k = 0; k <= tamanho; k++) {

        setPixel(Math.round(x), Math.round(y));

        corpo += '<tr>' +
            '<td>' + Math.round(x) + '</td>' +
            '<td>' + Math.round(y) + '</td>' +
            '</tr>';

        x += xinc;
        y += yinc;
    }
    return corpo;
}