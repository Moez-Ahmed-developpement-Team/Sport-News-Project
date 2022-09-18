<template>
    <div id="app">
  <article>
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
      </div>
      <form class="sign-up" action="#">
        <h2>Create login</h2>
        <div>Use your email for registration</div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
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