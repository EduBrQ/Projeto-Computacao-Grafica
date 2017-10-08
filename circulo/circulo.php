<!--AQUI ADICIONO MEU PLANO CARTESIANO VIA JQUERY-->
<div class="cartesiano"></div>

<!--AQUI ADICIONO MINHA RETA-->
<div id="content"></div>

<!--AQUI ADICIONO MINHA TABELA E MEUS CAMPOS DE TEXTO-->

<div class="row">

    <div class="row">
        <h4>Algorítimo do DDA</h4>

        <div class="col-lg-3">
            <input placeholder="X0" id="x0" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="Y0" id="y0" value="" type="text" class="form-control">
        </div>
        <div class="col-lg-3">
            <input placeholder="RAIO" id="raio" value="" type="text" class="form-control">
        </div>

    </div>

    <div class="row">
        <br>
        <div class="col-lg-3">
            <button class="btn btn-info" onclick="dCirculo();" id="add2">Desenhar</button>
        </div>
    </div>
</div>