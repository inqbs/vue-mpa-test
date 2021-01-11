import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

import shopCart from './modules/ShopCart'

export default new Vuex.Store({
  modules: {
    shopCart
  },
  plugins:[
    createPersistedState({
      key: 'vue-mpa-test',
      storage: window.sessionStorage
    })
  ]
});
