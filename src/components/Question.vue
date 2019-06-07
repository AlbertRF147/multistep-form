<template>
  <!-- Question tab -->
  <div class="tab-question">
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">Survey ID</div>
          <div class="control">
            <input type="text" class="input" v-model="store.state.details.survey_id">
          </div>
        </div>
        <div class="field">
          <div class="label">Question (Prompt)</div>
          <div class="control">
            <input type="text" class="input" v-model="store.state.question.question">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">Question Audio File</div>
          <div class="control has-icons-left">
            <div class="select is-fullwidth">
              <select v-model="store.state.question.audio_file">
                <option v-for="file in store.state.files" :key="file">{{ file }}</option>
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
            <input type="text" class="input" v-model="store.state.question.label">
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
      v-for="answer in question.answers"
      :key="answer.id"
      :questions="$attrs.questions"
      :answer_id="answer.id"
      :use_skip_logic="$attrs.useSkipLogic"
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
		store
	};
  },
  created() {
    EventBus.$on("questions-updated", questions => {
      this.questions = questions;
    });
    EventBus.$on("answer-removed", answer_id => {
      this.question.answers.forEach((e, i) => {
        if (e.id == answer_id) this.question.answers.splice(i, 1);
      });
    });
  },
  methods: {
    addAnswer() {
      this.question.answers.push({
        id: uuid(),
        answer: "",
        action: ""
      });
    }
  }
};

function uuid() {
  return Math.random()
    .toString(16)
    .slice(2);
}
</script>
