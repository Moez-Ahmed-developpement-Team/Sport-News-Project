<template>
    <div class="add-post">
        <form v-on:submit.prevent="upload">
          <div >
            <label class="title">Title</label>
              <input type="text" class ="form-title" v-model="post.title" >
            <br>
            <label class="content">Content</label>
            <textarea class="form-group"
            v-model="post.content">
            </textarea>
          </div>
        <div>
          <hr/>
            <input type="file" id="avatar" name="avatar" accept="image/*" > <br>
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
          post:{
            title:"",
            content:"",
          }
        };
      },
      methods: {

  
  updatePost(){
            axios.put(`http://localhost:3000/updatePost/${id}`, this.post).then((result) => {console.log(result);}).catch((err) => console.log(err))
          }
         
  }}
    </script>