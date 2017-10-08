/**
 * Created by pabliciotjg on 14/09/2017.
 */

//global que guarda a largura da linha. Quanto maior, mais rápido o processamento.

tamanhoPixel = 1;

function setPixel(x, y) {

    var pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = pixel.style.height = tamanhoPixel + 'px';
    pixel.style.left = x + 'px';
    pixel.style.top = (-y) + 'px';

    return $('#content').append(pixel);
}

function setOrigin(x, y) {

    setPixel(x,y);

    return "<div style='position: absolute;top: " + y + "px;left: " + x + "px;font-size: 10px;'>0</div>";

}


$(document).ready( function () {
    $('#content').append(setOrigin(-97, -197));
});