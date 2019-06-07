import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../components/Start.vue';
import Details from '../components/Details.vue';
import Question from '../components/Question.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/question-1',
      name: 'Question-1',
      component: Question
    },
    {
      path: '/question-2',
      name: 'Question-2',
      component: Question
    },
    {
      path: '/question-3',
      name: 'Question-3',
      component: Question
    },
    {
      path: '/question-4',
      name: 'Question-4',
      component: Question
    },
    {
      path: '/question-5',
      name: 'Question-5',
      component: Question
    },
    {
      path: '/question-6',
      name: 'Question-6',
      component: Question
    },
    {
      path: '/question-7',
      name: 'Question-7',
      component: Question
    },
    {
      path: '/question-8',
      name: 'Question-8',
      component: Question
    },
    {
      path: '/question-9',
      name: 'Question-9',
      component: Question
    },
    {
      path: '/question-10',
      name: 'Question-10',
      component: Question
    }
  ]
});