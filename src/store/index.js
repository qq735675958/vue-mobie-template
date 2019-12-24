import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "123"
  },
  mutations: {
    SET_USERINFO(state, info) {
      state.token = info;
    }
  },
  actions: {
    set_user_info({ commit }, data) {
      commit("SET_USERINFO", data);
    }
  },
  modules: {}
});
