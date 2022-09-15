<template>

  <div id="News" class="AllNews">
    <h1> All the News </h1>
    <div class="box">{{Allposts}}</div>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  data() {
    return {
      Allposts: ['ahmed Sassi']
    }
  },

methods: {
  getAll(){axios.get('http://localhost:3069/').then((result)=>console.log(result)).catch((err)=>console.log(err))
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
</style>
