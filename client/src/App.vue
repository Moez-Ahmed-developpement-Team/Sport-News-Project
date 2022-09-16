<template>
  <nav>
    <router-link to="/">All The news</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: x-large;

    &.router-link-exact-active {
      color: cornflowerblue;
      font-size: x-large;
    }
  }
}
</style>
