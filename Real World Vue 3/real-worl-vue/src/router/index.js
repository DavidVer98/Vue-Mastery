import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventList.vue";
import About from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventListView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
