import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import List from "@/views/List";
import Checkout from "@/views/Checkout";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "",
    component: Layout,
    children: [
      {
        path: "",
        name: "List",
        component: List,
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
