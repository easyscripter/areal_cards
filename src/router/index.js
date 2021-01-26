import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import ProfilePage from "@/views/ProfilePage";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile=:profileId',
    name: 'ProfilePage',
    component: ProfilePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
