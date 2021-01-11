import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import SecureLS from "secure-ls";

const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

import shopCart from './modules/ShopCart'

export default new Vuex.Store({
  modules: {
    shopCart
  },
  plugins:[
    createPersistedState({
      key: 'vue-mpa-test',
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ]
});
