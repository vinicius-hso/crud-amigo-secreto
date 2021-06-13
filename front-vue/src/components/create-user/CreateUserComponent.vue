<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Participante</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm">
          <!-- INÍCIO DO BLOCO: NOME DO PARTICIPANTE -->
          <div class="form-group">
            <label class="font-weight-bold">Nome do Participante</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Nome"
              v-model="userForm.username"
              :class="{ 'is-invalid': isSubmitted && v$.userForm.username.$error }"
            />
            <!-- <div v-if="isSubmitted && !v$.participanteForm.username.required" class="invalid-feedback"> Informe o nome do participante!
            </div> -->
          </div>
          <!-- FIM DO BLOCO: NOME DO PARTICIPANTE -->

          <!-- INÍCIO DO BLOCO: EMAIL DO PARTICIPANTE -->
          <div class="form-group">
            <label class="font-weight-bold">Email do Participante</label>
            <input
              type="text"
              name=""
              id=""
              class="form-control"
              placeholder="Email"
              v-model="userForm.useremail"
              :class="{ 'is-invalid': isSubmitted && v$.userForm.useremail.$error }"
            />
            <!-- <div v-if="isSubmitted && !v$.participanteForm.useremail.required" class="invalid-feedback"> Informe o email do participante!
            </div> -->
          </div>
          <!-- FIM DO BLOCO: EMAIL DO PARTICIPANTE -->

          <div class="form-group">
            <button @click="submitNewUser" class="btn btn-primary" >
              <font-awesome-icon :icon="['fas', 'user-plus']"/> Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { component } from "vue/types/umd";
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import UserService from '../../services/UserService';

export default {
  components: {
    name: 'CreateUserComponent',
  },
  data() {
    return {
      v$: useValidate(),
      userForm: {
        username: null,
        useremail: null,
      },
      isSubmitted: false,
    };
  },
  methods: {
    handleSubmitForm() {
      this.v$.$validate();// Checa todas as entradas
      if (!this.v$.$error) { // se alguma validação de entrada falhar 
      } else {
        this.isSubmitted = true;
      }
    },
    async submitNewUser() {
      try {
        await UserService.createNewUser(this.userForm);
        this.$router.push({
          name: 'list',
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  validations() {
    return {
      participanteForm: {
        username: { required },
        useremail: { required },
      },
    };
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
