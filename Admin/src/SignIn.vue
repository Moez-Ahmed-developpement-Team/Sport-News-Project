<template>
    <div id="app">
  <article>
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
      </div>
      <form class="sign-in" action="#">
        <h2>Sign In</h2>
        <div>Use your account</div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>
  </article>
</div>
</template>

<script>
import axios from 'axios';

  export default {
    name:'signIn',
    methods:{
      newadmin(){
        axios.post('http://localhost:3000/')
      }
    }
}
</script>