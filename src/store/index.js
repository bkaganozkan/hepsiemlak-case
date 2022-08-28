import Vue from "vue";
import Vuex from "vuex";
import productModule from "./modules/product";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    clientSideSize: "",
    isMobile: false,
  },
  getters: {
    getClientSide: (state) => {
      return state.clientSideSize;
    },

    isMobile: (state) => {
      console.log(state.isMobile);
      return state.isMobile;
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

    // We could use this for detect mobile apps but for now unnecessary
    isMobile(state) {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        state.isMobile = true;
      } else {
        state.isMobile = false;
      }
    },
  },
  actions: {},
  modules: {
    productModule,
  },
});
