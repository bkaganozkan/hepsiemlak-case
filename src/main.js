import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// import "@/assets/style.scss";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.headers["Access-Control-Allow-Origin"] = "POST, GET";
axios.defaults.headers["Access-Control-Allow-Credentials"] = true;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
