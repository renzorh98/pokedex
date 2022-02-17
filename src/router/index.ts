import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/welcome/welcome.vue"
import Pokedex from "../views/pokedex/pokedex.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/pokedex",
    name: "Pokedex",
    component: Pokedex,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
