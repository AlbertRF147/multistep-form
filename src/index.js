import style from './style.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router/router-index';



const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    questions: 0
  }
});