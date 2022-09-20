<template>

  <label id="News" class="AllNews">
    <form id="post" v-for=" (post,index)  in Allposts" :key="index">
      <button @click="deletePost(post.id)">X</button>
      <li>{{post.title}}</li>
      <br />
      <img id="pictureofNews" v-bind:src="post.image" />
      <button @click.prevent="showComments(post.id)"> showComments
        <form id="comment" v-for=" (comment,index)  in AllComments" :key="index">
          <ul v-if="show && comment.postId===post.id">
            <li>{{comment.text}}</li>
            <button @click="deleteComment(comment.id)">X</button>
            <br />
          </ul>
        </form>
        <input type="text" v-model="data.text" />
        <button @click.prevent="addComment(post.id)">AddComment</button>
      </button>
      <button @click.prevent="update()">updatePost</button>
      <div  v-if="updatepostcheck" >

      <input type="text" v-model="data2.title" />
      <input type="text" v-model="data2.content" />
      <input type="text"  v-model="data2.theme" />
      <br/>
      <button @click.prevent="updatePost(post.id),getall()">confirm</button>
    </div>
    </form>
 

  </label>
</template>



<script>
import axios from 'axios'

export default {
  mounted() {
    this.getAll()
  },
  name: 'all-posts',
  data() {
    return {
      Allposts: [],
      AllComments: [],
      show:false,
      updatepostcheck:false,
      data: {
        text: "",
        postId: ""
      },
      data2: {
        title: "",
        content: "",
        theme: ""
      }
    }

  },

  methods: {
    getAll() {
      axios.get('http://localhost:3000/getAll').then((result) => { this.Allposts = result.data }).catch((err) => console.log(err))
    },
    getComments(id) {
      console.log(id);
      axios.get(`http://localhost:3000/comment/allComments/${id}`).then((result) => 
      { this.AllComments = result.data }, console.log(this.AllComments)).catch((err) => 
      console.log(err))
    },
    addComment(id) {
      this.data.postId = id
      console.log("data==>", this.data);
      axios.post(`http://localhost:3000/comment/add`, this.data).then((result) =>
       { this.AllComments = result.data }).catch((err) =>
        console.log(err))
    },
    deleteComment(id) {
      axios.delete(`http://localhost:3000/comment/delete/${id}`).then((result) => { console.log(result) }).catch((err) => console.log(err))
    },
    deletePost(id) {
      axios.delete(`http://localhost:3000/${id}`).then((result) => { console.log(result) }).catch((err) => console.log(err))
    },
    update(){
 this.updatepostcheck=!this.updatepostcheck
    },
updatePost(id){
  axios.put(`http://localhost:3000/updatePost/${id}`,this.data2).then((result) => { console.log(result) }).catch((err) => console.log(err))
    },

    showComments(idComment){
        this.show = !this.show
        this.getComments(idComment)
      }
  },
}
</script>



<style scoped lang="scss">
#News {
  justify-items: center;
}

#post {
  display: flex;
  flex-direction: column;

}

h3 {
  margin: 40px 0 0;
}

#post {

  align-items: center;
  padding: 1% 1% 1% 1%;
  border: 3px;
  border-color: aliceblue;
  border-style: hidden;
  color: rgb(254, 255, 255);
  font-size: 20px;
  margin-right: 30%;
  margin-left: 30%;
  cursor: pointer;
}

#post:hover {
  box-shadow: rgb(255, 255, 255);
  border-style: solid;
}

li {
  display: inline-block;

}

a {
  color: #ffffff;
}

#pictureofNews {
  width: 500px;
  height: 400px;
}

#container-post {
  display: flex;
}
</style>
