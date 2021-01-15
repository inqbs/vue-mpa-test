import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

import VueMoment from 'vue-moment'
Vue.use(VueMoment)

//  vue-bootstrap (only modal / sidebar / etc..)
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

//  font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPen)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// validation
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import * as rules from "vee-validate/dist/rules"
import ko from 'vee-validate/dist/locale/ko.json'

// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize('ko', ko)

Vue.component("ValidationObserver", ValidationObserver)
Vue.component("ValidationProvider", ValidationProvider)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

router.replace('/client')
