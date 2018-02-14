<template>
  <v-container fill-height fluid class="pink darken-3 white--text">
    <v-layout flex align-center justify-center>
      <v-flex class="text-xs-center" xs6>
        <my-bg></my-bg>
      </v-flex>
      <v-flex xs5>
        <h1 class="display-2 pb-3">Manage Job Applications</h1>
        <h3 class="pb-2">Keep record of jobs you apply & details like resume version, contact person name and much more!</h3>
        <v-btn large class="green accent-3 pl-5 pr-5" to="profile">Get Started</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import Bg from "./Bg.vue";
export default {
  components: {
    "my-bg": Bg
  }
};
</script>
<style scoped>
button {
  color: black;
  font: 1em sans-serif;
  box-shadow: 1px 1px 5px 1px #636363;
}
</style>
