import Vue from 'vue';
import VueRouter from 'vue-router';
import Nprogress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'create',
    component: () => import('../components/pages/create-user/CreateUserComponent.vue'),
  },
  {
    path: '/list-user',
    name: 'list',
    component: () => import('../components/pages/list-user/ListUserComponent.vue'),
  },
  {
    path: '/edit-user/:id',
    name: 'edit',
    component: () => import('../components/pages/edit-user/EditUserComponent.vue'),
  },
  {
    path: '/sortition',
    name: 'sortition',
    component: () => import('../components/pages/sortition/SortitionComponent.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
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
