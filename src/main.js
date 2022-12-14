import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// import "@/assets/style.scss";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = true;
axios.defaults.baseURL = process.env.VUE_APP_HOST + process.env.VUE_APP_API;

axios.defaults.headers["Access-Control-Allow-Origin"] = "POST, GET";
axios.defaults.headers["Access-Control-Allow-Credentials"] = true;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
