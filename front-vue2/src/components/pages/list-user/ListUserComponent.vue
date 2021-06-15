<template>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Participantes</h3>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <th class="text-center">Nome</th>
                <th class="text-center">Email</th>
                <th class="text-center">Ações</th>
              </thead>
              <tbody v-for="participante in participantes" :key="participante._id">
                <tr>
                  <td>{{ participante.username }}</td>
                  <td>{{ participante.useremail }}</td>
                  <td>
                    <router-link
                    :to="{ name: 'edit', params: { id: participante.user_id } }"
                    class="btn btn-success">
                    <font-awesome-icon :icon="['fas', 'user-edit']" /> Editar
                  </router-link>
                  </td>
                  <td>
                    <button @click="removeUser(participante.user_id)"
                    class="btn btn-danger">
                    <font-awesome-icon :icon="['fas', 'trash']" /> Deletar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script>
import UserService from '../../../services/UserService';

export default {
  name: 'ListUserComponent',
  data() {
    return {
      participantes: [],
    };
  },
  mounted() {
    this.listAllUsers();
  },
  methods: {
    async listAllUsers() {
      const response = await UserService.getUsers();
      this.participantes = response;
    },

    async removeUser(id) {
      this.$swal({
        title: 'Tem certeza que deseja deletar esse participante?',
        text: 'Atenção! Este participante será deletado!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim! Por favor, delete o participante!',
      }).then(async (result) => {
        if (result.value) {
          await UserService.deleteUser(id);
          this.$swal('Deleted', 'Deletado com sucesso', 'success');
          this.listAllUsers();
        } else {
          this.$swal('Cancelled', 'Cancelado', 'info');
        }
      });
    },
  },
};
</script>

<style>
.card {
  margin-top: 50px;
}
</style>
