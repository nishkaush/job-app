<template>
  <v-menu
  :close-on-content-click="false"
  full-width
  :nudge-right="40">
    <v-text-field
      color="green lighten-1"
      v-model="appliedDate"
      slot="activator"
      label="Date Applied"
      prepend-icon="event"
      readonly
    ></v-text-field>
      <v-date-picker v-model="appliedDate" color="green lighten-1" @input="dateOfApplication" no-title scrollable actions>
        <template slot-scope="{ save, cancel }">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="green lighten-1" @click="cancel">Cancel</v-btn>
            <v-btn flat color="green lighten-1" @click="save">OK</v-btn>
          </v-card-actions>
        </template>
      </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      appliedDate: null
    };
  },
  methods: {
    dateOfApplication() {
      console.log(this.appliedDate);
      this.$emit("appDate", this.appliedDate);
    }
  }
};
</script>
