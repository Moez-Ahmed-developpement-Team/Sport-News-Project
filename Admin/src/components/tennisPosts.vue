<template>

    <label id="News" class="AllNews">
      <form id="post"  v-for=" (post,index)  in Allposts" :key="index" >
          <button @click="deletePost(post.id)">X</button>
      <li>{{post.title}}</li>
      <br/>
      <img id="pictureofNews" v-bind:src="post.image"/>
      <button @click.prevent = "getComments(post.id)"> showComments
      <form id="comment"  v-for=" (comment,index)  in AllComments" :key="index" >
        <ul v-if="comment.postId===post.id">
          <li>{{comment.text}}</li>
          <button @click="deleteComment(comment.id)">X</button>
          <br/>
        </ul>
      </form>
      <input type="text"  v-model="data.text"/>
      <button @click.prevent = "addComment(post.id)">Comment</button>
    </button>
  </form>
  
    </label>
  </template>
  <script>
    import axios from 'axios'
    
    export default {
      mounted() {
        this.getTennisPosts()
      },
      name:"tennisNews",
      data() {
    return{
      Allposts:[],}},
      methods: {
        getTennisPosts() {
      axios.get('http://localhost:3000/getOnePost/tennis').then((result) => {this.Allposts=result.data}).catch((err) => console.log(err))
    },
    getComments(id){
    console.log(id);
    axios.get(`http://localhost:3000/comment/allComments/${id}`).then((result) => {this.AllComments=result.data}, console.log(this.AllComments)).catch((err) => console.log(err))
  },
  addComment(id){
this.data.postId = id
console.log("data==>",this.data);
    axios.post(`http://localhost:3000/comment/add`,this.data).then((result) => {this.AllComments=result.data}).catch((err) => console.log(err))
  },
  deleteComment(id){
    axios.delete(`http://localhost:3000/comment/delete/${id}`).then((result) => {console.log(result)}).catch((err) => console.log(err))
  },
  deletePost(id){
    axios.delete(`http://localhost:3000/${id}`).then((result) => { console.log(result)}).catch((err) => console.log(err))
  },
}
    }
</script>