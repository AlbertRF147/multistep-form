<template>
  <div class="tab-details">
    <div class="columns">
      <div class="column is-6">
        <div class="field">
          <div class="label">Survey ID</div>
          <div class="field control">
            <input type="text" class="input">
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <div class="label">Response Tracking Question</div>
          <div class="field control">
            <div class="select is-fullwidth">
              <select>
                <option v-for="n in parseInt($attrs.questions)|0" :key="n" value>Question {{n}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <div class="field">
          <div class="label">Select Intro Audio File</div>
          <div class="control has-icons-left">
            <div class="select is-fullwidth">
              <select name id>
                <option v-for="file in $attrs.uploadedFiles" :key="file">{{ file }}</option>
              </select>
            </div>
            <span class="icon is-small is-left">
              <i class="fas fa-file"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <div class="label">Select Hangup Audio File</div>
          <div class="control has-icons-left">
            <div class="select is-fullwidth">
              <select name id>
                <option v-for="file in $attrs.uploadedFiles" :key="file">{{ file }}</option>
              </select>
            </div>
            <span class="icon is-small is-left">
              <i class="fas fa-file"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus/event-bus";
export default {
  name: "Details",
  data() {
    return {
      questions: 0
    };
  },
  mounted() {
    var files = document.getElementsByClassName("file-input");
    [].forEach.call(files, function(file) {
      file.onchange = () => {
        if (file.files.length > 0) {
          var filenameDOM = file.parentElement.getElementsByClassName(
            "file-name"
          )[0];
          filenameDOM.innerHTML = file.files[0].name;
        }
      };
    });
    EventBus.$on("questions-updated", questions => {
      this.questions = questions;
    });
  }
};
</script>

