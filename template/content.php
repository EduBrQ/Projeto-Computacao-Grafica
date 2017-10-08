<!-- Page Content -->
<div id="page-wrapper">
    <div class="container-fluid">

        <?php

//            include 'tela/tela.php';

            $pagina = filter_input(INPUT_GET, 'rota');

            if(isset($pagina)){
                // faça um tratamento em "pagina" pra evitar qualquer ataque malicioso
                include $pagina . '.php';
            }

        ?>


        <!-- ... Your content goes here ... -->

    </div>
</div>


