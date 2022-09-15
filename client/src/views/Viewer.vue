<template>
  <div class="Viewer">
    <AddTest/>
    <Allposts msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Allposts from '@/components/All-posts.vue';
import AddTest from '@/components/AddTest.vue';

export default {
  name: 'All-posts',
  components: {
    Allposts,
    AddTest
}
}
</script>


<style lang="scss">

  </style>
  