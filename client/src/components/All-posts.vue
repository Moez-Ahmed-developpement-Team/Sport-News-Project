<template>

  <div id="News" class="AllNews">

    <div id="container-post" ></div>{{getAll()}}
    <ul id="post" v-on:submit.prevent="getOne" v-for=" (post,index) in Allposts" :key="index">
    <li>{{post.text}}</li>
    <br/>
    <img id="pictureofNews" v-bind:src="post.content"/>
    </ul>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name:'all-posts',
  data() {
    return{
      Allposts:[],
    }
 
  },

  methods: {
    getAll() {
      axios.get('http://localhost:3000/getAll').then((result) => {this.Allposts=result.data;console.log(this.Allposts)}).catch((err) => console.log(err))
    }
  },
  getOne(){
    axios.get("http://localhost:3000/getOnePost", post.id).then((result) =>{console.log(result);}
  }
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
#post{
  box-shadow: gray;
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
