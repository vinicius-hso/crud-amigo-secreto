<template>
  <div class="create-user">
    <!-- INÍCIO: CABEÇALHO -->
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Amigo Secreto App</span>
      </div>
    </nav> 
    <!-- FIM: CABEÇALHO -->

    <div class="row justify-content-center">
      <!-- INÍCIO: FORMULÁRIO -->
      <form>
        <div class="mb-3">
          <label for="nameInput" class="form-label">Nome</label>
          <input type="text" class="form-control" id="nameInput">
        </div>
        <div class="mb-3">
          <label for="emailInput" class="form-label">Email</label>
          <input type="email" class="form-control" id="emailInput">
        </div>
        <button type="submit" class="btn btn-primary">Adicionar</button>
      </form>
      <!-- FIM: FORMULÁRIO -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>
