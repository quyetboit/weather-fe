import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard-route",
    component: () => import("./pages/DashboardComponent.vue"),
  },

  {
    path: "/dashboard",
    name: "analytics-route",
    component: () => import("./pages/DashboardComponent.vue"),
  },

  {
    path: "/dashboard",
    name: "location-route",
    component: () => import("./pages/DashboardComponent.vue"),
  },

  {
    path: "/calendar",
    name: "calendar-route",
    component: () => import("./pages/CalendarComponent.vue"),
  },

  {
    path: "/settings",
    name: "settings-route",
    component: () => import("./pages/SettingsComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
