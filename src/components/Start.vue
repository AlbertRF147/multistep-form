<template>
  <div class="tab-start">
    <div class="columns">
      <div class="column is-4">
        <div class="field">
          <div class="label">Survey Short Name</div>
        </div>
        <div class="field">
          <div class="control">
            <input type="text" class="input" v-model="store.state.survey.name">
          </div>
        </div>
      </div>

      <div class="column is-8">
        <div class="field">
          <div class="label">Description (Optional)</div>
        </div>
        <div class="field">
          <div class="control">
            <input type="text" class="input" v-model="store.state.survey.description">
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3">
        <div class="field">
          <p class="label">Number of Questions</p>
        </div>
        <div class="field has-addons">
          <p class="control">
            <button class="button is-info" @click="removeQuestion">-</button>
          </p>
          <p class="control is-center">
            <input
              v-model="store.state.survey.number_of_questions"
              type="text"
              class="input"
              disabled
            >
          </p>
          <p class="control">
            <button class="button is-info" @click="addQuestion">+</button>
          </p>
        </div>

        <div class="field">
          <p class="label">Survey Response Goal</p>
        </div>
        <div class="field has-addons">
          <p class="control">
            <button class="button is-info">-</button>
          </p>
          <p class="control is-center">
            <input type="text" class="input" v-model="store.state.survey.response_goal">
          </p>
          <p class="control">
            <button class="button is-info">+</button>
          </p>
        </div>
      </div>

      <div class="column is-3">
        <div class="field">
          <p class="label">Survey Start Date</p>
        </div>
        <div class="field">
          <p class="control">
            <Datepicker :id="'start_date'" :key="'start_date'" @date-updated="updateDate"></Datepicker>
          </p>
        </div>

        <div class="field">
          <p class="label">Survey End Date</p>
        </div>
        <div class="field">
          <p class="control">
            <Datepicker :id="'end_date'" :key="'end_date'" @date-updated="updateDate"></Datepicker>
          </p>
        </div>
      </div>

      <div class="column is-3">
        <div class="field">
          <p class="label">Survey Start Time</p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="time" v-model="store.state.survey.start_time">
            <span class="icon is-small is-left">
              <i class="fas fa-clock"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="label">Survey End Time</p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="time" v-model="store.state.survey.end_time">
            <span class="icon is-small is-left">
              <i class="fas fa-clock"></i>
            </span>
          </p>
        </div>
      </div>

      <div class="column is-3">
        <div class="field">
          <p class="label">Survey Created</p>
        </div>
        <div class="field">
          <p class="control">
            <Datepicker :id="'created_date'" :key="'created_date'" @date-updated="updateDate"></Datepicker>
          </p>
        </div>

        <div class="field">
          <p class="label">Trunk</p>
        </div>
        <div class="field has-addons">
          <p class="control is-center">
            <input type="text" class="input" v-model="store.state.survey.trunk">
          </p>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3">
        <div class="field">
          <p class="label">Use Survey Skip Logic?</p>
        </div>
        <div class="field">
          <input
            id="switchLogic"
            type="checkbox"
            name="switchLogic"
            class="switch"
            v-model="store.state.survey.skip_logic"
          >
          <label for="switchLogic">Enable</label>
        </div>
      </div>
      <div class="column is-3">
        <div class="field">
          <p class="label">Enable AMD?</p>
        </div>
        <div class="field">
          <input
            id="switchAMD"
            type="checkbox"
            name="switchAMD"
            class="switch"
            v-model="store.state.survey.amd"
          >
          <label for="switchAMD">Enable</label>
        </div>
      </div>
      <div class="column is-3">
        <div class="field">
          <p class="label has-output">
            Timeout
            <output for="sliderTimeout">50</output>
            Seconds (5 Rings)
          </p>
        </div>
        <div class="field control">
          <input
            id="sliderTimeout"
            class="slider is-fullwidth"
            min="0"
            max="100"
            value="50"
            step="10"
            type="range"
            v-model="store.state.survey.timeout"
          >
        </div>
      </div>
      <div class="column is-3">
        <div class="field">
          <p class="label has-output">
            Channels:
            <output for="sliderChannels">5</output>
          </p>
        </div>
        <div class="field control">
          <input
            id="sliderChannels"
            class="slider is-fullwidth"
            min="0"
            max="10"
            value="5"
            step="1"
            type="range"
            v-model="store.state.survey.channels"
          >
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <div class="field">
          <div class="label has-output">
            Audio Volume
            <output for="sliderVolume">50</output>
            %
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              id="sliderVolume"
              class="slider is-fullwidth"
              min="0"
              max="100"
              value="50"
              step="1"
              type="range"
              v-model="store.state.survey.audio_volume"
            >
          </div>
        </div>
      </div>
    </div>
    <Dropzone></Dropzone>
  </div>
</template>

<script>
import { store } from "../store";
import { EventBus } from "../event-bus/event-bus";
import Dropzone from "./Dropzone.vue";
import Datepicker from "./Datepicker.vue";

export default {
  name: "Start",
  components: {
    Dropzone: Dropzone,
    Datepicker: Datepicker
  },
  data() {
    return {
      store,
      questions: store.state.survey.number_of_questions
    };
  },
  methods: {
    updateDate(data) {
      store.state.survey[data.id] = data.date;
    },
    addQuestion() {
      let count = store.state.questions.length;
      store.state.questions.push({
        id: count,
        question: "",
        label: "",
        audio_file: "",
        answers: []
	  });
	  store.state.survey.number_of_questions++;
	},
	removeQuestion() {
		store.state.questions.pop();
		store.state.survey.number_of_questions-=1;
	}
  },
  mounted() {
    // Find output DOM associated to the DOM element passed as parameter
    function findOutputForSlider(element) {
      var idVal = element.id;
      var outputs = document.getElementsByTagName("output");
      for (var i = 0; i < outputs.length; i++) {
        if (outputs[i].htmlFor == idVal) return outputs[i];
      }
    }

    function getSliderOutputPosition(slider) {
      // Update output position
      var newPlace, minValue;

      var style = window.getComputedStyle(slider, null);
      // Measure width of range input
      sliderWidth = parseInt(style.getPropertyValue("width"), 10);

      // Figure out placement percentage between left and right of input
      if (!slider.getAttribute("min")) {
        minValue = 0;
      } else {
        minValue = slider.getAttribute("min");
      }
      var newPoint =
        (slider.value - minValue) / (slider.getAttribute("max") - minValue);

      // Prevent bubble from going beyond left or right (unsupported browsers)
      if (newPoint < 0) {
        newPlace = 0;
      } else if (newPoint > 1) {
        newPlace = sliderWidth;
      } else {
        newPlace = sliderWidth * newPoint;
      }

      return {
        position: newPlace + "px"
      };
    }

    document.addEventListener("DOMContentLoaded", function() {
      // Get all document sliders
      var sliders = document.querySelectorAll('input[type="range"].slider');
      [].forEach.call(sliders, function(slider) {
        var output = findOutputForSlider(slider);
        if (output) {
          if (slider.classList.contains("has-output-tooltip")) {
            // Get new output position
            var newPosition = getSliderOutputPosition(slider);

            // Set output position
            output.style["left"] = newPosition.position;
          }

          // Add event listener to update output when slider value change
          slider.addEventListener("input", function(event) {
            if (event.target.classList.contains("has-output-tooltip")) {
              // Get new output position
              var newPosition = getSliderOutputPosition(event.target);

              // Set output position
              output.style["left"] = newPosition.position;
            }

            // Update output with slider value
            output.value = event.target.value;
          });
        }
      });
    });
  }
};
</script>
