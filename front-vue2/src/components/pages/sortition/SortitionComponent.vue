<template>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Participantes</h3>
            <button type="submit" class="btn btn-success" @click="sortition()">Sortear</button>
          </div>
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
        </div>
      </div>
</template>

<script>
import emailjs from 'emailjs-com';
import UserService from '../../../services/UserService';

export default {
  name: 'SortitionComponent',
  data() {
    return {
      sorteados: [],
      presenteados: [],
      name: '',
      email: '',
      message: '',
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

    sendEmail() {
      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      try {
        emailjs.send('service_gx979cr', 'template_f0hzs8t', templateParams, 'user_8NIL0GZcXZVUfsw81sc53');
      } catch (error) {
        console.log(error);
      }
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
        this.name = sortName[0];
        console.log(sortName[0]);
        this.email = sort[0];
        console.log(sort[0]);
        this.message = pres[0];
        console.log(pres[0]);
        sortName.shift();
        sort.shift();
        pres.shift();
        this.sendEmail();
      }
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
</style>
