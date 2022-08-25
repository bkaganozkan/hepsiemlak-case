import Vue from "vue";
import VueRouter from "vue-router";
import List from "@/views/List";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "List",
    component: List,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
