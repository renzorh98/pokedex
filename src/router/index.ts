import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Welcome from "../views/welcome/welcome.vue";
import Pokedex from "../views/pokedex/pokedex.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
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
