<template>
<div>
<section class="home"><!-- Início seção home -->
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex"><!-- Textos da seção -->
            <div class="align-self-center">
              <h1 class="display-4">PetShop Quilate!!</h1>
              <p>
                Tratando seu pet como joia desde 2015.
              </p>
              <form class="mt-4 mb-4">
                <div class="input-group input-group-lg">
                  <div class="input-group-append">
                    <router-link to="/Cadastro"><a class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Novo aqui ?</a></router-link>
                  </div>
                </div>
              </form>

            </div>
          </div><!--/fim textos da seção -->
          <div class="col-md-6 d-none d-md-block">
            <img class="image_capa" src="imagens_gerais/cao.png">
          </div>
        </div>
      </div>
    </section><!--/fim seção home -->

    

    <section class="caixa"><!--/Início seção juros -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="imagens_gerais/vet.jpg" class="img-fluid">
          </div>
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2>Da nossa família para a sua!</h2>
              <h5>
                Temos a melhor equipe para atender o seu melhor amigo!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section><!--/FIM seção juros -->
    <section class="caixa"><!--/Início seção saiba -->
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2>Vai viajar ?</h2>
              <h5>
                Não se preocupe, deixe seu pet conosco! Temos ótimas instalações.
              </h5>
            </div>
          </div>
          <div class="col-md-6">
            <img src="imagens_gerais/pets.jpg" class="img-fluid">
          </div>
        </div>
      </div>
    </section><!--/FIM seção saiba -->

    <section class="caixa"><!--/Início seção recursos -->
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="imagens_gerais/medic_3.png" class="image_bottom">
            <h4>Fácil de acompanhar</h4>
            <p>
              Acompanhe os exames do seu pet atraves de nosso aplicativo.
            </p>
          </div>
          <div class="col-md-4">
            <img src="imagens_gerais/bul.png" class="image">
            <h4>Economize seu tempo</h4>
            <p>
              Não perca tempo indo até a loja, nos entregamos direto no conforto do seu lar!
            </p>
          </div>
          <div class="col-md-4">
            <img src="imagens_gerais/suporte.png" class="image">
            <h4>Fale sempre conosco</h4>
            <p>
              Dúvidas? Perguntas? Nosso time está sempre pronto para ajudá-lo.
            </p>
          </div>
        </div>
      </div>
    </section><!--/FIM seção recursos -->
    </div>
</template>


<script>
    export default {
        name: "AppHome"
    }
</script>

<style scoped>
</style>