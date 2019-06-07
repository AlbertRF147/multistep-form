<template>
  <!-- Question tab -->
  <div class="tab-question">
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">Survey ID</div>
          <div class="control">
            <input type="text" class="input" v-model="question.survey_id">
          </div>
        </div>
        <div class="field">
          <div class="label">Question (Prompt)</div>
          <div class="control">
            <input type="text" class="input" v-model="question.question">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">Question Audio File</div>
          <div class="control has-icons-left">
            <div class="select is-fullwidth">
              <select v-model="question.audio_file">
                <option v-for="file in $attrs.uploadedFiles" :key="file">{{ file }}</option>
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
            <input type="text" class="input" v-model="question.question_label">
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

    <!-- Tiles -->
    <!-- <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div v-for="i in this.items" :key="i.id" class="tile is-child is-4 box is-radiusless">
          <input type="checkbox" v-model="i.checked">
          DMFT {{ i.label }}
          <div v-show="i.checked">
            <div class="field">
              <div class="label">Answer</div>
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option
                        v-for="n in parseInt($attrs.questions)|0"
                        :key="n"
                        value
                      >Go To Question {{n}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import { EventBus } from "../event-bus/event-bus";
import Answer from "./Answer.vue";
export default {
  name: "Question",
  components: {
    Answer: Answer
  },
  data() {
    return {
      //questions: 0,
      question: {
        id: this.$route.path.slice(
          this.$route.path.length - 1,
          this.$route.path.length
        ),
        survey_id: "",
        question: "",
        question_label: "",
        audio_file: "",
        answers: []
      },
      answers: []
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
