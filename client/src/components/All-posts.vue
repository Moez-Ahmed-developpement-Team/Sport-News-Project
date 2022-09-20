<template>

  <div id="News" class="AllNews">

    <div id="container-post"></div> 
    <form id="post"  v-for=" (post,index)  in Allposts" :key="index" >
      <ul>
        <li>{{post.title}}</li>
        <br/>
      </ul>
    <br/>
    <img id="pictureofNews" v-bind:src="post.image"/>
    <button class='btn1' @click.prevent = "showComments(post.id)"> showComments</button>
    <form id="comment"  v-for=" (comment,index)  in AllComments" :key="index" >
      <ul v-if="show && comment.postId===post.id">
        <li >{{comment.text}}</li>
      </ul>
    </form>
    <input type="text"  v-model="data.text"/>
    <button class='btn1' @click.prevent = "addComment(post.id)">Comment</button>
    <div  v-if="updateCommentcheck" >

<input type="text" v-model="data.text"/>
<br/>
<button @click.prevent="updatePost(post.id),getall()">confirm</button>
</div>
    </form>
  </div>
</template>



<script>
import axios from 'axios'

export default {
  mounted() {
    this.getAll()
  },
  name:'all-posts',
  data() {
    return{
      Allposts:[],
      AllComments:[],
      show:false,
      data: {
          text: "",
          postId: ""
        }
    }
  },

  methods: {
    getAll() {
      axios.get('http://localhost:3000/getAll').then((result) => {this.Allposts=result.data}).catch((err) => console.log(err))
    },
    getOne(id) {
    axios.get(`http://localhost:3000/getOnePost/${id}`).then((result) => { this.Allposts=[result.data]; console.log(this.Allposts);}).catch((err) => console.log(err))
  },
  getComments(id){
    console.log(id);
    axios.get(`http://localhost:3000/comment/allComments/${id}`).then((result) => {this.AllComments=result.data}).catch((err) => console.log(err))
  },
  addComment(id){
this.data.postId = id
console.log("data==>",this.data);
    axios.post(`http://localhost:3000/comment/add`,this.data).then((result) => {this.AllComments=result.data}).catch((err) => console.log(err))
  },
    showComments(idComment){
      this.show = !this.show
      this.getComments(idComment)
    }
}
}
</script>



<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
  #News{
    justify-items: center;
    font-family: 'Orbitron', sans-serif;
  }
  #post{
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
  border-style:hidden;
  color: rgb(254, 255, 255);
  font-size: 20px;
margin-right: 30%;
margin-left: 30%;
cursor: pointer;
}
#post:hover{
  box-shadow: rgb(255, 255, 255);
  border-style: solid;
}

li {
  display: inline-block;

}

a {
  color: #ffffff;
}

#pictureofNews{
  width: 700px;
  height: 400px;
}
#container-post{
  display :flex;
}
.selectOne{
  background: none;
  border:none;
}
.AllNews{
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/95097826056641.5634eedc62c87.png');
}


</style>
