import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '../../store';

//  pure bootstrap

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//  vue-bootstrap (only modal / sidebar / etc..)
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

//  font-awesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
