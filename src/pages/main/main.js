import Vue from 'vue';
import App from './App.vue';
import store from '@/store';

//  vue-bootstrap (only modal / sidebar / etc..)
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import * as rules from "vee-validate/dist/rules";
import ko from 'vee-validate/dist/locale/ko.json'

// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('ko', ko)

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
