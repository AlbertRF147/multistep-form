<template>
  <div id="app" class="container box">
    <Navigation></Navigation>
    <Keep-Alive>
      <router-view :key="$route.path"></router-view>
    </Keep-Alive>
  </div>
</template>

<script>
import { EventBus } from "./event-bus/event-bus";
import Navigation from "./components/Nav.vue";
export default {
  name: "app",
  components: {
    Navigation: Navigation
  },
  data() {
    return {
      questions: 0,
      uploadedFiles: [],
      useSkipLogic: false,
      answers: []
    };
  },
  mounted() {
    EventBus.$on("uploaded-files", filename => {
      this.uploadedFiles.push(filename);
    });
    EventBus.$on("questions-updated", questions => {
      this.questions = questions;
    });
    EventBus.$on("skip-logic-updated", skipLogic => {
      this.useSkipLogic = skipLogic;
    });
    EventBus.$on("field-updated", answer => {
      if(this.answers.length == 0) this.answers.push(answer);
      this.answers.forEach((element, index) => {
        debugger
        let answer_exists = false;
        if (element.id == answer.id) {
          answer_exists = true;
        }

        if (!answer_exists) {
          this.answers.push(answer);
        } else {
          alert("Answer exists!");
        }
      });
    });
  }
};
</script>