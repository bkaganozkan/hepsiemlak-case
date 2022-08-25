import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "@/assets/style.scss";

Vue.config.productionTip = false;

axios.defaults.headers["Access-Control-Allow-Origin"] = "GET, POST, OPTIONS";
axios.defaults.headers["Access-Control-Allow-Credentials"] = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
