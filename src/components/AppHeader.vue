<template>
<header><!-- inicio Cabecalho -->
       <nav class="navbar navbar-expand-sm navbar-light home">
        <div class="container">
          
            
         <router-link to="/"> <a class="navbar-brand display-4">Quilate</a>  </router-link>        
          <router-link to="/"><a class="navbar-brand">
            <img class="image_logo" src="imagens_gerais/pata.png">
          </a></router-link>
          
          
          <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="nav-principal">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/"><a class="nav-link">Home</a></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Services"><a class="nav-link">Serviços</a></router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/Contato"><a class="nav-link">Contato</a></router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/Cadastro"><a href="cadastro.html" class="nav-link">Cadastro</a></router-link>
                
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  
</template>


<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>
</style>