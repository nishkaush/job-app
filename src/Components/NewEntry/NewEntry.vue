<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
      <v-alert outline color="error" icon="warning" :value="showError">
      Error Occured, Please Try Again later.
      </v-alert>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <v-card>
          <v-toolbar class="green accent-3 mt-5" dark>
            <v-toolbar-title>Add New Entry</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            
            <v-text-field
            v-for="item in textfieldArr"
            :key="item.icon"
            color="green lighten-1"
            :label="item.label"
            :prepend-icon="item.icon"
            v-model="mydata[item.dataProp]"
            required
            :rules="[(value)=>!!value|| 'This field is required']"
            ></v-text-field>

            <date-applied @appDate="mydata.dateApplied=$event"></date-applied>
            <my-attachments @sendFiles="sortFiles($event)"></my-attachments>

            <v-text-field 
            color="green lighten-1" 
            label="Extra Notes"
            textarea
            v-model="mydata.notes"
            :rules="[(value)=>value.length<=200||'Max 100 characters']"
            ></v-text-field>
          </v-card-text>

          <div class="text-xs-center pb-5">
            <v-btn large class="green accent-3" @click="submitEntry">Submit Entry</v-btn>
          </div>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Attachments from "./attachments.vue";
import DateApplied from "./dateApplied.vue";
export default {
  data() {
    return {
      showError: false,
      mydata: {
        company: "",
        dateApplied: "",
        location: "",
        position: "",
        contact: "",
        notes: "",
        resumeFile: "",
        coverLetterFile: "",
        jobDescription: ""
      },
      textfieldArr: [
        {
          label: "Company Name",
          icon: "location_city",
          dataProp: "company"
        },
        {
          label: "Location",
          icon: "location_on",
          dataProp: "location"
        },
        {
          label: "Position",
          icon: "work",
          dataProp: "position"
        },
        {
          label: "Contact Person",
          icon: "person",
          dataProp: "contact"
        }
      ]
    };
  },
  methods: {
    submitEntry() {
      let vm = this;
      console.log(this.mydata);
      let url =
        "https://jar2si431k.execute-api.ap-southeast-2.amazonaws.com/dev/add-new-entry";
      axios
        .post(url, this.mydata)
        .then(res => {
          console.log("YAY It WORKED!", res.data);
          vm.$router.push({ path: "/success" });
        })
        .catch(err => {
          console.log("ERROR", err);
          vm.showError = true;
        });
    },
    sortFiles(fileArr) {
      if (fileArr[0].type === "resume") {
        this.mydata.resumeFile = fileArr[0].file;
      } else if (fileArr[0].type === "coverletter") {
        this.mydata.coverLetterFile = fileArr[0].file;
      } else {
        this.mydata.jobDescription = fileArr[0].file;
      }
    }
  },
  components: {
    "date-applied": DateApplied,
    "my-attachments": Attachments
  }
};
</script>

