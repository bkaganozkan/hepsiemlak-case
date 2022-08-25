import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import List from "@/views/List";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "List",
        component: List,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
