<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
    @vdropzone-success="getUploadedFiles"
  ></vue-dropzone>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import { EventBus } from "../event-bus/event-bus";
import { store } from "../store";

export default {
  name: 'app',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" },
          addRemoveLinks: true
      },
    }
  },
  methods: {
    getUploadedFiles(file, response) {
      store.state.uploaded_files.push(file.name)
    }
  }
}
</script>

