<template>
  <v-app class="main">
    <my-header v-if="$route.path!=='/'"></my-header>
    <router-view></router-view>
    <my-footer v-if="$route.path==='/'"></my-footer>
  </v-app>
</template>

<script>
import Header from "./Components/Header/header.vue";
import Footer from "./Components/Footer/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    "my-header": Header,
    "my-footer": Footer
  }
};
</script>

