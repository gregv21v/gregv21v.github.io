import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Games from "@/views/Games.vue";
import Apps from "@/views/Apps.vue";
import Courses from "@/views/Courses.vue";
import Plants from "@/views/Plants.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
