<template>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Participantes</h3>
            <button class="btn btn-success" @click="sortition()">Sortear</button>
          </div>
          <div v-if="sorteados"  class="card-body">
            <table class="table table-striped">
              <thead>
                <th class="text-center">Amigo</th>
                <th class="text-center">presenteia</th>
                <th class="text-center">Amigo Secreto</th>
              </thead>
              <tbody>
                <tr>
                  <div v-for="sorteado in sorteados" :key="sorteado._id">
                    <td>{{ sorteado.username }}</td>
                  </div>
                  <td><strong></strong></td>
                  <div v-for="presenteado in presenteados" :key="presenteado._id">
                    <td>{{ presenteado.username }}</td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script>
// import $ from 'jquery';
import UserService from '../../../services/UserService';

export default {
  name: 'SortitionComponent',
  data() {
    return {
      sorteados: [],
      presenteados: [],
    };
  },
  mounted() {
  },
  methods: {
    async sortition() {
      const response = await UserService.sortUsers();
      this.sorteados = [];
      this.presenteados = [];
      this.sorteados = response;
      this.sorteados.forEach((element) => {
        this.presenteados.push(element);
      });
      const i = this.presenteados[0];
      this.presenteados.shift();
      this.presenteados.push(i);

      const data = {
        email: 'viniciushsoliveira@gmail.com',
        text: 'Você está participando do Amigo Secreto!',
      };
      // $.post('/api/email', data, () => {
      //   console.log('Server received our data!');
      // });
    },
    // async sendEmail() {
    //   try {
    //     await UserService.sendEmail(this.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
};
</script>

<style>
.card {
  margin-top: 50px;
}

td{
  text-align: center;
}
</style>
