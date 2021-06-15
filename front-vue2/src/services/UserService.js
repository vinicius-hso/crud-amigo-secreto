// Arquivo responsável pelos métodos de requisições das APIs via HTTP
import Api from './Api';

export default {
// Método reponsável por criar um novo 'User'
// (POST): localhost:3000/api/users
  async createNewUser(participante) {
    try {
      const response = await Api().post('/users', participante);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // Método responsável por atualizar um 'User' por Id
  // (PUT): localhost:3000/users/:id
  async updateUser() {
    try {
      const response = await Api().put(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // Método responsável por excluir um 'User' por Id
  // (DELET): localhost:3000/api/users/:id
  async deleteUser(id) {
    try {
      const response = await Api().delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);            
    }
  },

  // Método reponsável por listar todos os 'User'
  // (GET): localhost:3000/api/users
  async getUsers() {
    try {
      const response = await Api().get('/users');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // Método responsável por listar os 'User' por Id
  // (GET): localhost:3000/api/users/:id
  async getUserId(id) {
    try {
      const response = await Api().get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
