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
  {
    //问卷调查
    path: "/questionnaire",
    name: "questionnaire",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/questionnaire/index.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
