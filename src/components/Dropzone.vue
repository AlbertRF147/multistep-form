<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
    @vdropzone-success="getUploadedFiles"
    @vdropzone-removed-file="removeUploadedFile"
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
    },
    removeUploadedFile(file) {
      store.state.uploaded_files.forEach( (e, i) => {
        if(e == file.name) store.state.uploaded_files.splice(i, 1)
      });
    }
  }
}
</script>

