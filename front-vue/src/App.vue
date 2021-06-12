<template>
  <div>
    <!-- INÍCIO DA NAVBAR -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand order-last"> Amigo Secreto </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Adicionar participante
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/edit-user/:id">
              Editar participante
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list-user/">
              Listar participantes
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- FIM DA NAVBAR -->
  </div>
  <router-view />
</template>
