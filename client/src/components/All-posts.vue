<template>

  <div id="News" class="AllNews">

    <div id="container-post"></div>{{getAll()}}
    <form id="post"  v-for=" (post,index)  in Allposts" :key="index" >
      <button @click.once = "say(post)">
    <li>{{post.text}}</li>
    <br/>
    <img id="pictureofNews" v-bind:src="post.content"/>
      </button>
    </form>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name:'all-posts',
  data() {
    return{
      Allposts:[],
      id : ""
    }
 
  },

  methods: {
    getAll() {
      axios.get('http://localhost:3000/getAll').then((result) => {this.Allposts=result.data}).catch((err) => console.log(err))
    },
    say(message) {
    console.log(message)
  }

  },
}
</script>



<style scoped lang="scss">
  #News{
    justify-items: center;
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
  width: 500px;
  height: 400px;
}
#container-post{
  display :flex;
}

</style>
