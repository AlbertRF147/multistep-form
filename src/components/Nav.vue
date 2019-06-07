<template>
  <div class="navigation">
    <nav class="level" v-if="parseInt(questions) > 0">
      <router-link class="level-item button is-info" to="/preview">Preview Survey</router-link>
    </nav>
    <nav class="level">
      <router-link class="level-item button" to="/">Start</router-link>
      <router-link class="level-item button" to="/details">Details</router-link>
      <router-link
        v-for="n in parseInt(questions)|0"
        :key="n"
        class="level-item button"
        :to="'/question-' + n"
      >Question {{ n }}</router-link>
    </nav>
  </div>
</template>

<script>
import { EventBus } from "../event-bus/event-bus";
export default {
  name: "Navigation",
  props: ["questions"]
};
</script>
