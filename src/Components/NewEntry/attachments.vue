<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 v-for="item in inputBtnArr" :key="item.class" class="mb-2">
        <input type="file" style="display:none" :id="item.id" @change="onFilePick(item.id)">
        <v-btn @click="attachFile(item.id)">{{item.btnText}}</v-btn>
        <span :data-id="item.id">{{item.hint}}</span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      filename: "",
      inputBtnArr: [
        {
          id: "resume",
          btnText: "Attach Resume",
          hint: "Attach the copy of resume you sent"
        },
        {
          id: "coverletter",
          btnText: "Attach Cover Letter",
          hint: "Attach the cover letter you sent"
        },
        {
          id: "jobdetails",
          btnText: "Attach Job Description",
          hint: "Attach screenshot of job description"
        }
      ]
    };
  },
  methods: {
    attachFile(arg) {
      document.getElementById(`${arg}`).click();
    },
    onFilePick(id) {
      let vm = this;
      const file = document.getElementById(`${id}`).files[0];
      document.querySelector(`[data-id='${id}']`).innerHTML = file.name;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        let finalFile = fileReader.result;
        vm.$emit("sendFiles", [{ type: id, file: finalFile }]);
      });
      fileReader.readAsDataURL(file);
    }
  }
};
</script>


<style>

</style>
