<template>
  <div id="app" class="container box">
    <h1 class="title is-3">Phone Survey</h1>
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

    };
  },
};
</script>