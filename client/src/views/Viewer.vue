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
import { onMounted } from 'vue'

export default {
  name: 'Viewer-side',
  components: {
    Allposts,
    AddTest
}

}
onMounted(() => {
  return Allposts 
})
</script>


<style lang="scss">

  </style>
  