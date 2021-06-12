import { createRouter, createWebHistory } from 'vue-router';
import Nprogress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Create New User',
    component: () => import('../components/create-user/CreateUserComponent.vue'),
  },
  {
    path: '/edit-user/:id',
    name: 'Edit User',
    component: () => import('../components/edit-user/EditUserComponent.vue'),
  },
  {
    path: '/list-user',
    name: 'List All Users',
    component: () => import('../components/list-user/ListUserComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  // Quando houver o carregamento de uma página inicial, então usar o Nprogress
  if (to.name) {
    Nprogress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Completa a animação da rota usando o progress bar
  Nprogress.done();
});

export default router;
