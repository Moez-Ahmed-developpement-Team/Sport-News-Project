<template>
  <div class="about">
    <Allposts/>
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