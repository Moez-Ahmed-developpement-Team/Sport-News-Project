<template>

  <div id="News" class="AllNews">

    <div id="container"></div>{{getAll()}}
    <ul id="post" v-for=" (post,index) in Allposts" :key="index">
    <li>{{post.text}}</li>
    <br/>
    <img id="pictureofNews" v-bind:src="post.content"/>
    
    <br/>
    <li>{{post.id}}</li>
    </ul>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name:'all-post',
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
}
</script>



<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  display: inline-block;
  list-style-type: none;
  padding: 1% 1% 1% 1%;
  width:400px;
  height: 250px;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}

#pictureofNews{
  width: 300px;
  height: 200px;
}
#container{
  display :flex;
}
</style>
