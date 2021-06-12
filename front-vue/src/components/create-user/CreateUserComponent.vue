<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar participante</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!-- INÍCIO DO BLOCO: NOME DO PARTICIPANTE -->
          <div class="form-group">
            <label class="font-weight-bold">Nome do Partipicante</label>
            <input
              type="text"
              name=""
              id=""
              class="form-control"
              placeholder="Nome"
              v-model="participante.username"
              required
            />
          </div>
          <!-- FIM DO BLOCO: NOME DO PARTICIPANTE -->

          <!-- INÍCIO DO BLOCO: EMAIL DO PARTICIPANTE -->
          <div class="form-group">
            <label class="font-weight-bold">Email do Partipicante</label>
            <input
              type="text"
              name=""
              id=""
              class="form-control"
              placeholder="Email"
              v-model="participante.useremail"
              required
            />
          </div>
          <!-- FIM DO BLOCO: EMAIL DO PARTICIPANTE -->

          <div class="form-group">
            <button class="btn btn-primary" type="submit">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { component } from "vue/types/umd";

export default {
  components: {
    name: 'CreateUserComponent',
  },
  data() {
    return {
      participante: {
        username: '',
        useremail: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>

<style>
.card {
  display: flex;
  margin-top: 100px;
}

.form-group {
  margin-top: 10px;
}
</style>
