<template>
  <!-- Question tab -->
  <div class="tab-question">
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">Survey ID</div>
          <div class="control">
            <input type="text" class="input" v-model="store.state.details.survey_id" disabled >
          </div>
        </div>
        <div class="field">
          <div class="label">Question (Prompt)</div>
          <div class="control">
            <input type="text" class="input" v-model="store.state.questions[question_id].question" >
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">Question Audio File</div>
          <div class="control has-icons-left">
            <div class="select is-fullwidth">
              <select v-model="store.state.questions[question_id].audio_file" >
                <option v-for="file in store.state.uploaded_files" :key="file">{{ file }}</option>
              </select>
            </div>
            <span class="icon is-small is-left">
              <i class="fas fa-file"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="label">Question Label (e.g. "3-5")</div>
          <div class="control">
            <input type="text" class="input" v-model="store.state.questions[question_id].label" >
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <button class="button is-info" @click="addAnswer">Add Answer +</button>
      </div>
    </div>

    <!-- Answer row -->
    <Answer
      v-for="answer in store.state.questions[question_id].answers"
      :key="answer.id"
      :answer_id="answer.id"
      :question_id="question_id"
    ></Answer>
  </div>
</template>

<script>
import { EventBus } from "../event-bus/event-bus";
import Answer from "./Answer.vue";
import { store } from "../store";

export default {
  name: "Question",
  components: {
    Answer: Answer
  },
  data() {
    return {
      store,
      question_id: this.$route.params.id - 1
    };
  },
  methods: {
    addAnswer() {
      let answers_count = this.store.state.questions[this.question_id].answers.length || 0;
      this.store.state.questions[this.question_id].answers.push({
        id: answers_count,
        answer: '',
        dtmf: '',
        goto_question: 0
      })
    },
    test() {
      debugger
    }
  }
};
</script>
