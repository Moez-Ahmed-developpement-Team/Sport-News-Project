<template>

  <div id="News" class="AllNews">

    <div id="container-post"></div>
    <form id="post" v-for=" (admin,index)  in AllAdmins" :key="index">
      <li>{{admin.adminName}}</li>
      <button @click = "deleteAdmin(admin.id)"> Remove Admin</button>
      <br/>
      </form>
    </div>
  </template>
  
  <script>
    import axios from 'axios'
    
    export default {
      mounted() {
        this.getAllAdmins()
      },
      name:'all-posts',
      data() {
        return{
          AllAdmins:[],
          id : ""
        }
     
      },
    
      methods: {
        getAllAdmins() {
          axios.get('http://localhost:3000/allAdmin').then((result) => {this.AllAdmins=result.data}, console.log(this.AllAdmins)).catch((err) => console.log(err))
        },
        deleteAdmin(id){
          console.log(id);
            axios.delete(`http://localhost:3000/delete/${id}`).then((result) => {this.getAllAdmins(), console.log(result);}).catch((err) => console.log(err))
       
          }
    }


  

  methods: {
    getAllAdmins() {
      axios.get('http://localhost:3000/allAdmin').then((result) => { this.AllAdmins = result.data }, console.log(this.AllAdmins)).catch((err) => console.log(err))
    },
    deleteAdmin(id) {
      console.log(id);
      axios.delete(`http://localhost:3000/delete/${id}`).then((result) => { this.getAll(), console.log(result); }).catch((err) => console.log(err))
    },
    getComments(id) {
      axios.get(`http://localhost:3000/comment/allComments/${id}`).then((result) => { this.AllComments = result.data }).catch((err) => console.log(err))
    },
    addComment(id) {
      this.data.postId = id
      console.log("data==>", this.data);
      axios.post(`http://localhost:3000/comment/add`, this.data).then((result) => { this.AllComments = result.data }).catch((err) => console.log(err))
    },
  }
}
</script>
<style>
li {
  color: rgb(233, 144, 12);
}
</style>
  