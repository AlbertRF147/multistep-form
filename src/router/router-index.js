import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../components/Start.vue';
import Details from '../components/Details.vue';
import Question from '../components/Question.vue';
import Preview from '../components/Preview.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Start
    },
    {
      path: '/details',
      component: Details
    },
    {
      path: '/question/:id',
      component: Question
    },
    {
      path: '/preview',
      component: Preview
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});