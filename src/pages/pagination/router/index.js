import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from '@/config/routers';

import ClientPagination from '../views/ClientPagination.vue';
import ServerPagination from '../views/ServerPagination.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ClientPagination',
    component: ClientPagination,
    props: true,
  },
  {
    path: '/server',
    name: 'ServerPagination',
    component: ServerPagination,
    props: true,
  },
];

const router = new VueRouter({
  mode: routerConfig.mode,
  base: '/page',
  routes,
});

export default router;
