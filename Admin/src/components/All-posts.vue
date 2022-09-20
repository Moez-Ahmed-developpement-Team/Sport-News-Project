<template>

  <label id="News" class="AllNews">
    <form id="post" v-for=" (post,index)  in Allposts" :key="index">
  
      
      <button class="deletebutton" @click="deletePost(post.id)">X</button>
      <li>{{post.title}}</li>
      <br />
      <img id="pictureofNews" v-bind:src="post.image" />
      <button class="themodificationparts" @click.prevent="getComments(post.id)"> showComments
        <br/>
        <form id="comment" v-for=" (comment,index)  in AllComments" :key="index">
          <ul v-if="comment.postId===post.id">
            <li>{{comment.text}}</li>
            <button @click="deleteComment(comment.id)">X</button>
            <br />
          </ul>
        </form>
        <input type="text" v-model="data.text" />
        <button class="addcommentbutton" @click.prevent="addComment(post.id)">AddComment</button>
      </button>
      <button class="addcommentbutton" @click.prevent="update()">updatePost</button>
      <div  v-if="updatepostcheck" >

      <input type="text"  v-model="data2.title" />
      <input type="text" v-model="data2.content" />
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

  },
}
</script>



<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Quicksand&display=swap');
#News {
  justify-items: center;
}



h3 {
  margin: 40px 0 0;
}

#post {
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 1% 1% 1% 1%;
  border: 3px;
  border-color: aliceblue;
  border-style: hidden;
  color: rgb(254, 255, 255);
  font-size: 20px;
  margin-right: 20%;
  margin-left: 20%;
  cursor: pointer;
  margin-left: 400px;
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
.deletebutton{
  color:white;
  background-color: red;
  border:none;
  border-radius: 60%;
  position:relative;
  left:250px;

}
.themodificationparts{
  border: none;
  background: none;
  color: white;
  font-family: 'Orbitron', sans-serif;
  input{
    border-radius: 10%;
    width:530px;
  }
}
.addcommentbutton{
  align-items: center;
  background-color: black;
  border: 2px solid #06f;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border-radius: 20px;
}

.button-58:focus {
  color: #171e29;
}

.button-58:hover {
  background-color: #3385ff;
  border-color: #3385ff;
  fill: #06f;
}

.button-58:active {
  background-color: #3385ff;
  border-color: #3385ff;
  fill: #06f;
}

@media (min-width: 768px) {
  .button-58 {
    min-width: 170px;
  }
}
</style>
