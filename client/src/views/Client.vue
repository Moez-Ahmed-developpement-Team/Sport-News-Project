<template>
  <div class="client">
    <Allposts/>
    <button></button>
  </div>
</template>
<script>

  import Allposts from '@/components/All-posts.vue';
  
  export default {
    name: 'client-',
    components: {
    Allposts, 
}
  }
  </script>