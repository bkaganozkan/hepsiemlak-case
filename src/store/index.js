import Vue from "vue";
import Vuex from "vuex";
import productModule from "./modules/product";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clientSideSize: "",
  },
  getters: {
    getClientSide: (state) => {
      return state.clientSideSize;
    },
  },
  mutations: {
    calculateClientWindow: (state, value) => {
      if (value < 600) state.clientSideSize = "xs";
      else if (value > 600 && value < 960) state.clientSideSize = "s";
      else if (value > 960 && value < 1264) state.clientSideSize = "md";
      else if (value > 1264 && value < 1904) state.clientSideSize = "lg";
      else state.clientSideSize = "xl";
    },
  },
  actions: {},
  modules: {
    productModule,
  },
});
