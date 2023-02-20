import { createRouter, createWebHistory } from "vue-router";
import InternsLIstView from "@/views/InternsLIstView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      component: InternsLIstView,
    },
    {
      path: "/edit-intern/:id",
      name: "edit",
      component: () => import("../views/EditInternView.vue"),
    },
    {
      path: "/add-intern",
      name: "add",
      component: () => import("../views/AddInternView.vue"),
    },
  ],
});

export default router;
