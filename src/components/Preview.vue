<template>
<div>
    <!-- First row -->
    <div class="form-section-label">Survey Data</div>
    <div class="form-section">
      <div class="columns">
        <div class="column is-3">
          <div class="label">Survey ID</div>
          <div class="form-field is-required"> {{ store.state.details.survey_id }} </div>
        </div>
        <div class="column is-3">
          <div class="label">Survey Short Name</div>
          <div class="form-field is-required" > {{ store.state.survey.name }} </div>
        </div>
        <div class="column is-6">
          <div class="label">Survey Description</div>
          <div class="form-field"> {{ store.state.survey.description }} </div>
        </div>
      </div>
      <!-- Second row -->
      <div class="columns">
        <div class="column is-3">
          <div class="label">Number of Questions</div>
          <div class="form-field is-required"> {{ store.state.survey.number_of_questions }} </div>
        </div>
        <div class="column is-3">
          <div class="label">Survey Response Goal</div>
          <div class="form-field is-required"> {{ store.state.survey.response_goal }} </div>
        </div>
        <div class="column is-6">
          <div class="label">Audio Volume</div>
          <div class="form-field is-required"> {{ store.state.survey.audio_volume }} </div>
        </div>
      </div>
      <!-- Third row -->
      <div class="columns">
        <div class="column is-3">
          <div class="label">Survey Created</div>
          <div class="form-field is-required"> {{ store.state.survey.created_date }} </div>
        </div>
        <div class="column is-3">
          <div class="label">Survey Start Date</div>
          <div class="form-field is-required"> {{ store.state.survey.start_date }} </div>
        </div>
        <div class="column is-3">
          <div class="label">Survey End Date</div>
          <div class="form-field is-required"> {{ store.state.survey.end_date }} </div>
        </div>
        <div class="column is-3">
          <div class="label">Survey Start-End Time</div>
          <div class="form-field is-required"> {{ survey_start_end_time }} </div>
        </div>
      </div>
      <!-- Fourth row -->
      <div class="columns">
        <div class="column is-2">
          <div class="label">Use Survey Skip Logic?</div>
          <div class="form-field"> {{ skip_logic_string }} </div>
        </div>
        <div class="column is-2">
          <div class="label">Enable AMD?</div>
          <div class="form-field"> {{ amd_string }} </div>
        </div>
        <div class="column is-2">
          <div class="label">Timeout</div>
          <div class="form-field is-required"> {{ store.state.survey.timeout }} </div>
        </div>
        <div class="column is-2">
          <div class="label">Channels</div>
          <div class="form-field is-required"> {{ store.state.survey.channels }} </div>
        </div>
        <div class="column is-2">
          <div class="label">Trunk</div>
          <div class="form-field is-required"> {{ store.state.survey.trunk }} </div>
        </div>
      </div>
    </div>

  <!-- Details row -->
    <div class="form-section-label">Survey Details</div>
    <div class="form-section">
      <div class="columns">
        <div class="column is-4">
          <div class="label">Response Tracking Question</div>
          <div class="form-field is-required"> Question {{ store.state.details.response_tracking_question + 1 }} </div>
        </div>
        <div class="column is-4">
          <div class="label">Intro Audio File</div>
          <div class="form-field is-required"> {{ store.state.details.intro_audio_file }} </div>
        </div>
        <div class="column is-4">
          <div class="label">Hangup Audio File</div>
          <div class="form-field"> {{ store.state.details.hangup_audio_file }} </div>
        </div>
      </div>
    </div>

    <!-- Question rows -->
    <div class="form-section-label">Questions Data</div>
    <div class="form-section">
      <div class="columns question-row-labels">
        <div class="column is-5">
          <div class="label">Question (Prompt)</div>
        </div>
        <div class="column is-3">
          <div class="label">Question Audio File</div>
        </div>
        <div class="column is-4">
          <div class="label">Question Label</div>
        </div>
      </div>
      <div class="columns questions" v-for="question in store.state.questions" :key="question.id">
        <div class="column is-5">
          <div class="form-field"> {{ question.question }} </div>
          <div class="columns answers" v-for="answer in question.answers" :key="answer.id">
            <div class="column is-4"> DTMF: {{ answer.dtmf }} </div>
            <div class="column is-4"> Answer: {{ answer.answer }} </div>
            <div class="column is-4"> {{ answer.goto_question }} </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="form-field"> {{ question.audio_file }} </div>
        </div>
        <div class="column is-4">
          <div class="form-field"> {{ question.label }} </div>
        </div>
      </div>
    </div>

    <button class="button is-fullwidth is-primary" @click="validateSurvey">Submit Survey</button>

</div>
</template>

<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      skip_logic: store.state.survey.skip_logic
    }
  },
  methods: {
    validateSurvey() {
      let form_inputs = document.getElementsByClassName('is-required');

      Array.from(form_inputs).forEach( (e, i) => {
        if( e.innerText == '') {
          e.previousElementSibling.style = 'color: red'
        } else {
          e.previousElementSibling.style = 'color: black'
        }
      });
    }
  },
  computed: {
    skip_logic_string: (vm) => {
      if( vm.store.state.survey.skip_logic ) {
        return 'Yes'
      }
      return 'No'
    },
    amd_string: (vm) => {
      if( vm.store.state.survey.amd ) {
        return 'Yes'
      }
      return 'No'
    },
    survey_start_end_time: (vm) => {
      if( vm.store.state.survey.start_time !== '' && vm.store.state.survey.end_time !== '') {
        return store.state.survey.start_time + ' - ' + store.state.survey.end_time
      } else {
        return ''
      }
    }
  }
}
</script>
