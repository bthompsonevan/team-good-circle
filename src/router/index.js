import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HowToHelp from "../views/HowToHelp.vue";
import UpcomingEvents from "../views/UpcomingEvents.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/howtohelp",
    name: "HowToHelp",
    component: HowToHelp
  },
  {
    path: "/upcomingevents",
    name: "UpcomingEvents",
    component: UpcomingEvents
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
