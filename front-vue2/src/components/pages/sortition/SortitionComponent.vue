<template>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Participantes</h3>
            <div class="btn-div">
              <button type="submit" class="btn btn-success" @click="sortition()">Sortear</button>
            </div>
          </div>
        <!-- INÍCIO --- GERA UMALISTA DE COM OS SORTEADOS -->
          <!-- <div v-if="sorteados"  class="card-body">
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
          </div> -->
        <!-- FIM --- GERA UMALISTA DE COM OS SORTEADOS -->
        </div>
      </div>
</template>

<script>
// import emailjs from 'emailjs-com';
import UserService from '../../../services/UserService';

export default {
  name: 'SortitionComponent',
  data() {
    return {
      sorteados: [],
      presenteados: [],
      sorteio: {
        name: '',
        email: '',
        amigo: '',
      },
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
      this.teste();
    },

    async send() {
      await UserService.sendEmail(this.sorteio);
    },

    teste() {
      const sortName = [];
      const sort = [];
      const pres = [];
      this.sorteados.forEach((element) => {
        sortName.push(element.username);
      });
      this.sorteados.forEach((element) => {
        sort.push(element.useremail);
      });
      this.presenteados.forEach((element) => {
        pres.push(element.username);
      });
      while (sort.length > 0) {
        this.sorteio.name = sortName[0];
        this.sorteio.email = sort[0];
        this.sorteio.amigo = pres[0];
        sortName.shift();
        sort.shift();
        pres.shift();
        this.send();
      }
      this.$swal('Sucesso!', 'Sorteio realizado! Cheque seu email!', 'success');
      this.$router.push({ name: 'list' });
    },
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

.btn-div{
  text-align: center;
}
</style>
