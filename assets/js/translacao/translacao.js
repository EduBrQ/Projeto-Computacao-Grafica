/**
 * Created by eduardobq3 on 08/10/2017.
 */
$(document).on('click', '#trans', function () {

    var tx = parseInt($('#tx').val());

    var ty = parseInt($('#ty').val());

    translation(tx, ty);

});

function translation(tx, ty) {

    x1 = x1 + tx;
    y1 = y1 + ty;
    x2 = x2 + tx;
    y2 = y2 + ty;

    return dda(x1,y1,x2,y2);
}