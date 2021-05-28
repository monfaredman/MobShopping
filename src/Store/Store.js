import Vue from 'vue';
import Vuex from 'vuex';


import user from './Modules/User';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    user
  }
});
