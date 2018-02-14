<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="text-xs-center">
        <v-icon x-large color="green accent-3">check_circle</v-icon>
      </v-flex>
      <v-flex xs6 offset-xs3 class="text-center" align-center>
        <h1>Your Entry has been submitted Successfully!</h1>
        <p class="text-xs-center">Go Back to Home Page to see your Entry</p>
        <v-btn large class="green accent-3" block to="/profile">Back To Home</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
