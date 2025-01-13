import { createRouter, createWebHistory } from "vue-router";

import AppHome from "@/pages/AppHome.vue";
import AppAbout from "@/pages/AppAbout.vue";
import AppPlan from "@/pages/AppPlan.vue";

const routes = [
  {
    path: "/",
    name: "AppHome",
    component: AppHome,
  },
  {
    path: "/about",
    name: "AppAbout",
    component: AppAbout,
  },
  {
    path: "/plan",
    name: "AppPlan",
    component: AppPlan,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
