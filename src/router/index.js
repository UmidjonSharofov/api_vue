import { createRouter, createWebHistory } from "vue-router";
import { HomeView, RegisterViews, LoginViews } from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterViews,
    },
    {
      path: "/login",
      name: "login",
      component: LoginViews,
    },
  ],
});

export default router;
