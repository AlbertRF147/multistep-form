<template>
  <div class="navigation">
    <nav class="level" v-if="parseInt(store.state.survey.number_of_questions) > 0">
      <router-link class="level-item button" to="/preview">Preview Survey</router-link>
    </nav>
    <nav class="level">
      <router-link class="level-item button" to="/">Start</router-link>
      <router-link class="level-item button" to="/details">Details</router-link>
      <router-link
        v-for="n in parseInt(store.state.survey.number_of_questions)|0"
        :key="n"
        class="level-item button"
        :to="'/question/' + n"
      >Question {{ n }}</router-link>
    </nav>
  </div>
</template>

<script>
import { store } from "../store";
import { EventBus } from "../event-bus/event-bus";
export default {
  name: "Navigation",
  data() {
	  return {
      store,
	  }
  },
};
</script>
