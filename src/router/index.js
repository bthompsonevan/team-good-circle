import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HowToHelp from "../views/HowToHelp.vue";

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
    component: HowToHelp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
