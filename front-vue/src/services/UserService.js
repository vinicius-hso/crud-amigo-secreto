// Arquivo responsável pelos métodos de requisições das APIs via HTTP

import Api from './Api';

// Método reponsável por listar todos os 'User'
// (GET): localhost:3000/api/users
export default {
    async getUsers() {
        const response = await Api().get('/users');
        return response.data;
    }
};