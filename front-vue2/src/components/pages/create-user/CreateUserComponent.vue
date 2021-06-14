<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>Adicionar participante</h3>
        </div>
        <div class="card-body">

          <!-- FORMULÁRIO -->
          <form @submit.prevent="handleSubmitForm">
            <!-- INÍCIO DO BLOCO: NOME DO PARTICIPANTE -->
            <div class="form-group">
              <label class="font-weight-bold" for="user-name">Nome</label>
              <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Digite o nome"
              v-model="participante.username"
              :class="{ 'is-invalid': isSubmitted && $v.participante.username.$error }"
              >
              <div
              v-if="isSubmitted && !$v.participante.username.required"
              class="invalid-feedback">
                Insira o 'Nome' do participante!
              </div>
            </div>
            <!-- FIM DO BLOCO: NOME DO PARTICIPANTE -->

            <!-- INÍCIO DO BLOCO: EMAL DO PARTICIPANTE -->
            <div class="form-group">
              <label class="font-weight-bold" for="user-name">Email</label>
              <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="Digite o email"
              v-model="participante.useremail"
              :class="{ 'is-invalid': isSubmitted && $v.participante.useremail.$error }"
              >
              <div
              v-if="isSubmitted && !$v.participante.useremail.required"
              class="invalid-feedback">
                Insira o 'Email' do participante!
              </div>
            </div>
            <!-- FIM DO BLOCO: EMAIL DO PARTICIPANTE -->

            <div class="form-group">
              <button @click="submitNewUser" class="btn btn-primary">
                <font-awesome-icon :icon="['fas', 'user-plus']"></font-awesome-icon>
                Participante
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import UserService from '../../../services/UserService';

export default {
  name: 'CreateUserComponent',
  data() {
    return {
      participante: {
        username: null,
        useremail: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    participante: {
      username: { required },
      useremail: { required },
    },
  },
  methods: {
    handleSubmitForm() {},
    async submitNewUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops! Preencha todos os campos!', 'error');
          return;
        }

        await UserService.createNewUser(this.participante);
        // this.$alert("Hello Vue Simple Alert.");
        this.$swal({
          title: 'Participante adicionado com sucesso!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.card {
  margin-top: 50px;
}
.form-group {
  margin-top: 10px;
}
</style>
