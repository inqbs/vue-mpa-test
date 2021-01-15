import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from '@/config/routers'

import ClientPagination from '../views/ClientPagination.vue'
import ServerPagination from '../views/ServerPagination.vue'

import NotFoundComponent from '@/components/NotFoundComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/client',
    name: 'ClientPagination',
    component: ClientPagination,
  },
  {
    path: '/server',
    name: 'ServerPagination',
    component: ServerPagination,
  },
]

const router = new VueRouter({
  mode: 'abstract',
  base: '/page',
  routes,
})

export default router
