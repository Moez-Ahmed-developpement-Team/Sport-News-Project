<template>

    <div id="News" class="AllNews">
  
      <div id="container-post"></div> 
      <form id="post"  v-for=" (admin,index)  in AllAdmins" :key="index" >
      <li>{{admin.adminName}}</li>
      <button @click.prevent = "deleteAdmin(admin.id)"></button>
      <br/>
      </form>
    </div>
  </template>
  
  <script>
    import axios from 'axios'
    
    export default {
      mounted() {
        this.getAll()
      },
      name:'all-posts',
      data() {
        return{
          AllAdmins:[],
          id : ""
        }
     
      },
    
      methods: {
        getAll() {
          axios.get('http://localhost:3000/allAdmin').then((result) => {this.AllAdmins=result.data}).catch((err) => console.log(err))
        },
        deleteAdmin(id){
            axios.delete(`http://localhost:3000/delete/${id}`).then((result) => {this.getAll(), console.log(result);}).catch((err) => console.log(err))
        }
    }
    }
    </script>
  