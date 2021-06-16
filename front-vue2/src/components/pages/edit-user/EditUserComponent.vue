<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>Editar Participante</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="editUser">
            <!-- INÍCIO DO BLOCO: NOME DO PARTICIPANTE -->
            <div class="form-group">
              <label for="name" class="font-weight-bold">Nome</label>
              <input
              type="text"
              name="username"
              id="username"
              class="form-control"
              v-model="participante.username">
            </div>
            <!-- FIM DO BLOCO: NOME DO PARTICIPANTE -->

            <!-- INÍCIO DO BLOCO: EMAIL DO PARTICIPANTE -->
            <div class="form-group">
              <label for="email" class="font-weight-bold">Email</label>
              <input
              type="email"
              name="useremail"
              id="useremail"
              class="form-control"
              v-model="participante.useremail">
            </div>
            <!-- FIM DO BLOCO: EMAIL DO PARTICIPANTE -->

            <div class="form-group">
              <button type="submit" class="btn btn-primary">
                <font-awesome-icon :icon="['fas', 'user-edit']"></font-awesome-icon>
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import UserService from '../../../services/UserService';

export default {
  name: 'EditUserComponent',
  data() {
    return {
      participante: {
        username: null,
        useremail: null,
      },
    };
  },

  mounted() {
    this.getUserById();
  },

  methods: {
    async getUserById() {
      const { id } = this.$route.params;
      const response = await UserService.getUserId(id);
      this.participante = { ...response };
    },

    async editUser(id) {
      // Chamada do service passando as propriedades por meio do 'participante' (funciona)
      await UserService.updateUser(this.$route.params.id, {
        username: this.participante.username, // username corresponde ao nome da coluna no banco
        useremail: this.participante.useremail, // useremail corresponde ao nome da coluna no banco
      });
      this.$swal({
        title: 'Participante editado com sucesso!',
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
