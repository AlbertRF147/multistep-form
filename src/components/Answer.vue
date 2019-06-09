<template>
  <div class="columns">
    <div class="column is-4">
      <div class="field">
        <div class="label">Answer</div>
      </div>
      <div class="field">
        <div class="control">
          <input type="text" class="input" v-model="store.state.questions[question_id].answers[answer_id].answer">
        </div>
      </div>
    </div>
    <div class="column is-4">
      <div class="field">
        <div class="label">DMFT</div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select name id v-model="store.state.questions[question_id].answers[answer_id].dtmf">
              <option v-for="key in keys" :key="key.uuid">{{ key.label }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div
      class="column is-3"
      v-if="
        store.state.survey.skip_logic == true &&
        question_id !== store.state.questions.length - 1
      "
    >
      <div class="field">
        <div class="label">Skip Action</div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select name id v-model="store.state.questions[question_id].answers[answer_id].goto_question">
              <option
                v-for="question in store.state.survey.number_of_questions"
                :key="question"
              >Go To Question {{ question }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-1">
      <div class="field">
        <div class="label" style="visibility: hidden;">'</div>
      </div>
      <div class="field">
        <button class="button is-danger" @click="removeAnswer()">
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus/event-bus";
import { store } from "../store";

export default {
  name: "Answer",
  data() {
    return {
      //answer_id: '',
      keys: [
        { id: 1, label: 1 },
        { id: 2, label: 2 },
        { id: 3, label: 3 },
        { id: 4, label: 4 },
        { id: 5, label: 5 },
        { id: 6, label: 6 },
        { id: 7, label: 7 },
        { id: 8, label: 8 },
        { id: 9, label: 9 },
        { id: 10, label: "*" },
        { id: 11, label: 0 },
        { id: 12, label: "#" }
      ],
      store,
      question_id: this.$attrs.question_id,
      answer_id: this.$attrs.answer_id
    };
  },
  methods: {
    removeAnswer() {
      store.state.questions[this.question_id].answers.splice(this.answer_id, 1)
    }
  }
};
</script>
