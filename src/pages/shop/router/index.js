import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from '@/config/routers';

import Home from '../views/Home.vue';
import Electronic from '../views/Electronic.vue';
import Clothing from '../views/Clothing.vue';
import Food from '../views/Food.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/electronic',
    name: 'Electronic',
    component: Electronic,
    props: true,
  },
  {
    path: '/clothing',
    name: 'Clothing',
    component: Clothing,
    props: true,
  },
  {
    path: '/food',
    name: 'Food',
    component: Food,
    props: true,
  },
];

const router = new VueRouter({
  mode: routerConfig.mode,
  base: '/shop/',
  routes,
});

export default router;
