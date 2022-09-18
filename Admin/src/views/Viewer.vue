<template>
  <div class="Viewer">
    <AddTest />
    <Allposts msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Allposts from '@/components/All-posts.vue';
import { onMounted } from 'vue'

export default {
  name: 'Viewer-side',
  components: {
    Allposts,
  }

}
onMounted(() => {
  return Allposts
})
</script>


<style lang="scss">
  .title{
    color:rgb(192, 192, 133);
    font-size: 30px;
  }
  body{
    background-color: #3f4141;;
  }
  .form-title {
    width: 100%;
  height: 50px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  };
  .form-select{
    width: 100%;
  height: 50px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  }
.add-post {
  margin-top: 10px;
  width: 600px;
  display: flex;
  align-items: center;
  margin-left: 30%

};

.img-box {

  width:600px;
  height: 500px;
};

.form-group {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
</style>
  