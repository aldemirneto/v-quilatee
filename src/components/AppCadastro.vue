<template>
<div>
<section class="bg-light"><!-- Início seção home -->
      <div class="container">
        <div class="row">
         
            <div class="align-self-center">
              <h3 class="display-4 text-left ">Cadastro</h3>
            </div>
          
        </div>
      </div>
    </section><!--/fim seção home -->
    <section class=""><!-- Início seção home -->
        <div class="container">
          <div class="row">
           
              <div class="align-self-center">
                <h1 class="display-4 text-center ">Faça parte do nosso clube!!!</h1>
                <h5 class="text-center">
                  Promoções, sorteios e novidades, tudo isso em um só lugar! Se interessou ? Preencha o formulário abaixo e venha fazer parte dessa família!
                </h5>
              </div>
            
          </div>
        </div>
      </section><!--/fim seção home -->

    <section><!-- Início seção home -->
        <div class="container mb-4">
            <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Nome</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Nome">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Sobrenome</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Sobrenome">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Email</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="E-mail">
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Endereço</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Rua Bairro Número">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Cidade</label>
                    <input type="text" class="form-control" id="inputCity">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">Estado</label>
                    <select id="inputState" class="form-control">
                      <option selected>SP</option>
                      <option>SP</option>
                      <option>RJ</option>
                      <option>RS</option>
                      <option>MG</option>
                      <option>SC</option>
                      <option>PR</option>
                    </select>
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip">CEP</label>
                    <input type="text" class="form-control" id="inputZip">
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                      Concordo em receber e-mails com anúncios e promoções.
                    </label>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Cadastrar</button>
                <button type="submit" class="btn btn-danger">Cancelar</button>
              </form>
        </div>
        <br><br>
      </section><!--/fim seção home -->
      </div>
</template>


<script>
    export default {
        name: "AppCadastro"
    }
</script>

<style scoped>
</style>