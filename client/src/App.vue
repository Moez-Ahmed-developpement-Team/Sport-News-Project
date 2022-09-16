<template> 
  <nav >
    <router-link to="/">All The news</router-link>
    <router-link to="/client">Client</router-link>
  </nav>
  <router-view />
</template>



<script setup>
import { onMounted } from 'vue'
import Allposts from '@/components/All-posts.vue';

onMounted(() => {
   return Allposts
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-image: url('https://i.pinimg.com/originals/33/de/1d/33de1df074005037e02381ff15ebf69b.jpg');

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: x-large;

    &.router-link-exact-active {
      color: cornflowerblue;
      font-size: x-large;
    }
  }
}
</style>
