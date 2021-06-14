// Arquivo responsável por inicializar o axios e as requisições da url base dos HTTP's

import axios from 'axios';

export default () => axios.create({
    // 'baseURL' do Back-End -> fará a comunicação do Back com o Front
    baseURL: 'http://localhost:3000/api'
});