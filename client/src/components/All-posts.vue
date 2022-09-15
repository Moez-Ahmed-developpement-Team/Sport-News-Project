<template>

  <div id="News" class="AllNews">
    <h1> All the News </h1>
    <div id="post" v-for=" (post,index) in Allposts" :key="index">
    <li>{{post.name}}</li>
    <br/>
    <li>{{post.age}}</li>
    <br/>
    <li>{{post.number}}</li>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      Allposts: [
        {
          name: 'ahmed',
          age: 7,
          number: 10
        },
        {
          name: 'ahmed',
          age: 7,
          number: 10
        }
      ]
    }
  },

  methods: {
    getAll() {
      axios.get('http://localhost:3069/').then((result) => {result}).catch((err) => console.log(err))
    }
  },
}
// const getAll = axios.get('http://localhost:3069/').then((result)=>console.log(result)).catch((err)=>console.log(err))
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#post{
  margin: 5% 5% 5% 5%;
  display: flex;
  width:30%;
  height: 30%;
  flex-direction: row;
}
</style>
