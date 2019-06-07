<template>
  <div class="columns">
    <div class="column is-4">
      <div class="field">
        <div class="label">Answer</div>
      </div>
      <div class="field">
        <div class="control">
          <input type="text" class="input" v-model="answer.answer">
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
            <select name id v-model="answer.dmft">
              <option v-for="key in keys" :key="key.uuid">{{ key.label }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div
      class="column is-3"
      v-if="
        $attrs.use_skip_logic == true &&
        parseInt($route.path.slice( $route.path.length - 1, $route.path.length )) !== parseInt($attrs.questions)"
    >
      <div class="field">
        <div class="label">Skip Action</div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select name id v-model="answer.skip_action">
              <option
                v-for="question in parseInt($attrs.questions)|0"
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
        <button class="button is-danger" @click="removeAnswer($attrs.answer_id)">
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
      answer: {
        id: this.$attrs.answer_id,
        answer: "",
        dmft: "",
        skip_action: ""
      }
    };
  },
  mounted() {
    var elements = document.querySelectorAll("input, select");
    Array.from(elements).forEach( (e, i) => {
      e.onchange = () => {
        EventBus.$emit('field-updated', this.answer)
      };
    });
  },
  methods: {
    removeAnswer(answer) {
      EventBus.$emit("answer-removed", answer);
    }
  }
};
</script>
