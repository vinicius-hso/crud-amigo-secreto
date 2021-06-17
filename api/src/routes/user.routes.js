// @ts-nocheck
/**
 * Arquivo: src/routes/user.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'User'.
 * Data: 04/03/2020
 * Author Glaucia Lemos
 */

const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do CRUD - 'User':

// ==> Rota responsável por criar um novo 'User': (POST): localhost:3000/api/users
router.post('/users', userController.createUser);

// ==> Rota responsável por listar todos os 'Users': (GET): localhost:3000/api/users
router.get('/users', userController.listAllUsers);

// ==> Rota responsável por sortear todos os 'Users': (GET): localhost:3000/api/users
router.get('/usersSortition', userController.sortUsers);

// ==> Rota responsável por selecionar 'User' pelo 'Id': (GET): localhost:3000/api/users/:id
router.get('/users/:id', userController.findUserById);

// ==> Rota responsável por atualizar 'User' pelo 'Id': (PUT): localhost: 3000/api/users/:id
router.put('/users/:id', userController.updateUserById);

// ==> Rota responsável por excluir 'User' pelo 'Id': (DELETE): localhost:3000/api/users/:id
router.delete('/users/:id', userController.deleteUserById);

// ==> Rota responsável por realizar o envio de email (POST): localhost:3000/api/users/:id
// router.post('/email', userController.sendEmail);

module.exports = router;
