<template>
  <section class="navigation">
    <div class="nav-container">
      <div>
        <img class="brand" src="./assets/Logo1.png" />
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="allPosts">Home </router-link>
          </li>
          <li v-if="check">
            <form class="sign-in" @submit.prevent="loginVerification ">
              <input type="username" placeholder="username" v-model="user.username" />
              <input type="password" placeholder="Password" v-model="user.password" />
              <button class="btn" @click="alertF"> Sign In </button>
            </form>
          </li>
          <li>
            <router-link to="signIn"> <a href="#!">Sign Up</a></router-link>
            
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <div class="sidebar">
    <!-- <img class="side-nav-Pic"
      src="./assets/fifa-world-cup-2022-poster-template-design-a01aa1db754051369a125491efd0edf7_screen.jpg"> -->
  </div>
  <router-view />
</template>



<script >
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
      user: { username: '', password: '' },
      check: true
    }
  },
  methods: {
    async loginVerification() {
      await axios.post('http://localhost:3000/user/signin', this.user, { withCredentials: true }).then((result) => {
        if(result.data.message==="welcome Back"){
          this.message = result.data.message;
        this.checking()}
      }).catch((error) => {
        console.log(error); this.message = error
      })

    },

    alertF() {
      alert(this.message)
    },
    checking() {
      this.check = !this.check;
    }
  }
}



</script>

<style lang="scss">


$content-width: 1000px;
$breakpoint: 799px;
$nav-height: 70px;
$nav-background: #262626;
$nav-font-color: #ffffff;
$link-hover-color: #74201d;

// Outer navigation wrapper
.navigation {
  height: $nav-height;
  background: $nav-background;
}

// Logo and branding
.brand {
  position: absolute;
  padding-left: 20px;
  float: left;
  line-height: $nav-height;
  text-transform: uppercase;
  font-size: 1.4em;

  a,
  a:visited {
    color: $nav-font-color;
    text-decoration: none;
  }
}

// Container with no padding for navbar
.nav-container {
  max-width: $content-width;
  margin: 0 auto;
}

// Navigation 
.brand {
  width: 100px;
  height: 100px;
}

nav {
  float: right;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      float: left;
      position: relative;

      a,
      a:visited {
        display: block;
        padding: 0 20px;
        line-height: $nav-height;
        background: $nav-background;
        color: $nav-font-color;
        text-decoration: none;

        &:hover {
          background: $link-hover-color;
          color: $nav-font-color;
        }

        &:not(:only-child):after {
          padding-left: 4px;
          content: ' ▾';
        }
      }

      // Dropdown list
      ul li {
        min-width: 190px;

        a {
          padding: 15px;
          line-height: 20px;
        }
      }
    }
  }
}

// Dropdown list binds to JS toggle event
.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 1;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile navigation */

// Binds to JS Toggle
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: $nav-background;
  height: $nav-height;
  width: $nav-height;
}

@media only screen and (max-width: 798px) {

  // Hamburger nav visible on mobile only
  .nav-mobile {
    display: block;
  }

  nav {
    width: 100%;
    padding: $nav-height 0 15px;

    ul {
      display: none;

      li {
        float: none;

        a {
          padding: 15px;
          line-height: 20px;
        }

        ul li a {
          padding-left: 30px;
        }
      }
    }
  }

  .nav-dropdown {
    position: static;
  }
}

@media screen and (min-width: $breakpoint) {
  .nav-list {
    display: block !important;
  }
}

#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: $nav-font-color;
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
  }

  span:before {
    top: -10px;
  }

  span:after {
    bottom: -10px;
  }

  &.active span {
    background-color: transparent;

    &:before,
    &:after {
      top: 0;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}

.all-posts {

  margin-right: 20px;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

$color: rgb(250, 250, 246);

.side-nav-Pic {
  width: 200px;
  height: 600px;
  margin-top: 20px;

}

.brand {
  display: relative;
  height: 160px;
  width: 300px;


  margin-left: -600px;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  position: fixed;
  height: 100%;
  overflow: auto;
  margin-right: -83%;
}

.sidebar img {
  width: 200px;
  height: 700px;
  margin-top: 20px;
}

.sidebar img.active {}

.sidebar img:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }

  .sidebar img {
    float: left;
  }

  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar img {
    text-align: center;
    float: none;
  }

}

.sign-in {
  display: flex;
  margin-top: 25px;
}
.btn{

  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 5px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.button-64:active,
.button-64:hover {
  outline: 0;
}

.button-64 span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.button-64:hover span {
  background: none;
}

@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}
.btn1{
  margin: 5% 5% 5% 5%;
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 10px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.btn1:active,
.btn1:hover {
  outline: 0;
}

.btn1 span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.btn1:hover span {
  background: none;
}

@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}

</style>
