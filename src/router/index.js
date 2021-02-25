import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/echarts",
    name: "echarts",
    component: () =>
      import(/* webpackChunkName: "echarts" */ "../views/echarts/echarts.vue"),
  },
  {
    path: "/circuit",
    name: "circuit",
    component: () =>
      import(/* webpackChunkName: "circuit" */ "../views/circuit/index.vue"),
  },
  //   {
  //     path: "/about",
  //     name: "about",
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/about.vue"),
  //   },
];

const router = new VueRouter({
  routes,
});

export default router;
