import Vue from "vue";
import Router from "vue-router";
import NewEntry from "./../Components/NewEntry/NewEntry.vue";
import Home from "./../Components/Home/Home.vue";
import Profile from "./../Components/Profile/profile.vue";
import Success from "./../Components/Success/success.vue";
Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/new-entry",
      component: NewEntry
    },
    {
      path: "/success",
      component: Success
    }
  ]
});
