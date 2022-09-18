<template>
    <div id="app">
        <article>
            <div class="container" :class="{'sign-up-active' : signUp}">
                <div class="overlay-container">
                </div>
                <form class="sign-up" action="#">
                    <h2>Create login</h2>
                    <div>Use your email for registration</div>
                    <input type="text" placeholder="Name" v-model="infos.adminName" />
                    <input type="email" placeholder="Email" v-model="infos.email" />
                    <input type="password" placeholder="Password" v-model="infos.password" />
                    <button>Sign Up</button>
                </form>
            </div>
        </article>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddAdmin',
    data() {
        return{ infos :{
            adminName: "",
                email : "",
                password : ""
        }}
    },
    methods: {
        newadmin() {
            console.log(this.infos)
            axios.post('http://localhost:3000/', this.infos).then((result)=> console.log(result)).catch((err)=> console.log(err))
        }
    }
}
</script>