import Vue from "vue";
import App from "./App.vue";
import { router } from "./Router/router.js";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";

Vue.use(Vuetify);

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
