<template>
  <v-toolbar prominent flat dark class="pink darken-3 pt-2 pb-2">
    <v-toolbar-side-icon 
    class="hidden-md-and-up"
    @click.stop="showMobileHeader=!showMobileHeader"
    ></v-toolbar-side-icon>
    <v-toolbar-title @click="$router.push('/profile')" style="cursor:pointer;">Main header</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!showMobileHeader" class="hidden-sm-and-down">
      <v-btn flat class="transparent" to="/new-entry">New entry</v-btn>
      <v-btn flat class="transparent">Search</v-btn>
    </v-toolbar-items>
    <v-navigation-drawer temporary fixed light v-model="showMobileHeader">
    <v-toolbar>
      <v-list light>
        <v-list-tile>
          <v-list-tile-title class="title">
            Job Application App
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list light>
      <v-list-tile>
        New Entry
      </v-list-tile>
      <v-list-tile>
        Search
      </v-list-tile>
      <v-list-tile @click="logout">
        Logout
      </v-list-tile>
    </v-list>
    
  </v-navigation-drawer>
  </v-toolbar>
</template>


<script>
export default {
  data() {
    return {
      showMobileHeader: false
    };
  },
  methods: {
    logout() {
      window.location =
        "https://job-app.auth.ap-southeast-2.amazoncognito.com/logout?client_id=79b3joqoelgu3egdbujkk6s876&logout_uri=http://localhost:8080/logout";
    }
  },
  components: {}
};
</script>

<style>
button {
  font-weight: bold;
}
</style>
