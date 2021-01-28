import Vue from "vue";
import Vuex from "vuex";
import Data from "../Storage/DATA.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profiles: []
  },
  getters: {
    getProfiles(state) {
      return state.profiles;
    }
  },
  actions: {
    async fetchProfiles(ctx) {
      const posts = await Data;
      ctx.commit("updateProfiles", posts);
    }
  },
  mutations: {
    updateProfiles(state, profile) {
      state.profiles = profile;
    }
  }
});
