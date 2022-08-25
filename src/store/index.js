import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    store: [],
  },
  getters: {
    getStore: (state) => {
      return state.store;
    },
  },
  mutations: {
    mutateStore: (state, payload) => {
      state.store = payload;
    },
  },
  actions: {
    fetchStore: async ({ commit }) => {
      // I even don't know how to use curl in frontend I had no auth for this
      // so I figure out with this way, I hope you will teach me to using curl
      // I am good at python flask, django jwt cookies & auth
      let response = await fetch("https://nonchalant-fang.glitch.me/listing");
      let result = await response.json();
      // it is the best way to manupilate the store
      commit("mutateStore", result);
    },
  },
  modules: {},
});
