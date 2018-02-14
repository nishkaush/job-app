<template>
<v-container>
  <v-layout wrap>
    <v-flex xs12 v-if="showSpinner===true" class="text-xs-center">
      <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" color="green accent-3"></v-progress-circular>
    </v-flex>
    <v-flex v-else xs12 class="text-xs-center">
        <h1>Welcome you are successfully signed in!!</h1>
        <p>Here you will see all the recent added posts</p>
    </v-flex>
    <v-flex xs10 offset-xs1>
      <v-card v-for="(item,i) in entriesArr" :key="i" class="mb-4">
        <p class="text-xs-right pr-2 pt-2 mt-0 mb-0">{{item.dateApplied}}</p>
        <v-card-title class="headline pt-0">{{item.applicant}}</v-card-title>
        <v-card-text class="pt-0">
          <span class="subheading">{{item.company}}&nbsp; - </span>
          <span>{{item.position}}</span>
        </v-card-text>
        <v-card-actions class="text-xs-right pt-0">
          <v-btn class="">Show More</v-btn>
          <v-btn>Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser
} from "amazon-cognito-identity-js";
export default {
  data() {
    return {
      username: "",
      showSpinner: false,
      entriesArr: [
        {
          applicant: "Bob",
          company: "Amazon",
          position: "Engineer",
          dateApplied: "8/1/2018"
        },
        {
          applicant: "Susan",
          company: "Apple",
          position: "Doctor",
          dateApplied: "8/1/2018"
        },
        {
          applicant: "Jennifer",
          company: "Google",
          position: "Laywer",
          dateApplied: "8/1/2018"
        },
        {
          applicant: "Sam",
          company: "Canva",
          position: "Engineer",
          dateApplied: "8/1/2018"
        }
      ]
    };
  },
  created() {
    //send request via api gateway to lambda to fetch results from dynamodb
    //if fetch request successful, "showSpinner prop is false";
  }
};
</script>
