<template>
  <div class="home">
    <Allposts msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Allposts from '@/components/All-posts.vue';

export default {
  name: 'All-posts',
  components: {
    Allposts,
  }
}
</script>


<style lang="scss">

  </style>
  