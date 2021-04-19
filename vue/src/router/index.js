import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Games from "@/views/Games.vue";
import Apps from "@/views/Apps.vue";
import Courses from "@/views/Courses.vue";
import Plants from "@/views/Plants.vue";
import Avocados from "@/views/plants/Avocados.vue";
import Basil from "@/views/plants/Basil.vue";
import Arugala from "@/views/plants/Arugala.vue";
import Tomatos from "@/views/plants/Tomatos.vue";
import Peppers from "@/views/plants/Peppers.vue";
import Art from "@/views/Art.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/apps",
    name: "Apps",
    component: Apps,
  },
  {
    path: "/plants",
    name: "Plants",
    component: Plants,
  },
  {
    path: "/avocados",
    name: "Avocados",
    component: Avocados,
  },
  {
    path: "/arugala",
    name: "Arugala",
    component: Arugala,
  },
  {
    path: "/basil",
    name: "Basil",
    component: Basil,
  },
  {
    path: "/tomatos",
    name: "Tomatos",
    component: Tomatos,
  },
  {
    path: "/peppers",
    name: "Peppers",
    component: Peppers,
  },
  {
    path: "/art",
    name: "Art",
    component: Art,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
