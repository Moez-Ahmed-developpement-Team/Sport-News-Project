<template>
    <div class="add-post">
        <form v-on:submit.prevent="upload">
          <div >
            <label class="title">Title</label>
              <input type="text" class ="form-title" >
            <br>
            <label class="title">Content</label>
            <textarea class="form-group"
            @input="event => text = event.target.value">
            </textarea>
          </div>
          <div >
          <label class="title">Theme</label> <br>
          <select class="form-select" type="select">
            <option>Football</option>
            <option>Basketball</option>
            <option>Tennis</option>
          </select>
        </div>
        <div>
          <hr/>
            <input type="file" id="avatar" name="avatar" accept="image/*" v-on:change="handleFileChange($event)" > <br>
            <hr/>
            <img class="img-box" id="output" width="500" />
          <hr/>
            <input type="submit" value="upload">
        </div>
      </form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
      name: "AddPost",
      data() {
        return {
          results: null,
          errors: [],
          file: null,
          filesSelected: 0,
          cloudName: "dtwuychif",
          tags: "browser-upload",
          progress: 0,
          showProgress: false,
          fileContents: null,
          formData:null
        };
      },
      methods: {
  handleFileChange: function(event) {
    console.log("handlefilechange", event.target.files);
    this.file = event.target.files[0];
    this.filesSelected = event.target.files.length;
    var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0])
  },
  prepareFormData: function() {
    this.formData = new FormData();
    this.formData.append("upload_preset", "xjfviymd");
    this.formData.append("file", this.fileContents);
  },
  upload: function() {
    console.log("upload", this.file.name);
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      function() {
        this.fileContents = reader.result;
        this.prepareFormData();
        let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/dtwuychif/upload`;
        let requestObj = {
          url: cloudinaryUploadURL,
          method: "POST",
          data: this.formData,
        };
        axios(requestObj)
          .then(response => {
            let results = response.data;
            console.log(results);
          })
          .catch(error => {
           console.log(error);
          })
      }.bind(this),
      false
    );
    if (this.file && this.file.name) {
      reader.readAsDataURL(this.file);
    }
  }
}}
    </script>
    <style>

    </style>
