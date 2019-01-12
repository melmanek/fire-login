import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  getters: {
    email(state) {
      return state.currentUser.email;
    }
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user;
    }
  },
  actions: {
    login({ commit }, user) {
      commit("setUser", user);
    }
  }
});
