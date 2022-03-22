<template>
    <div class="background"></div>
    <div class="front">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/person">Person</router-link> |
        <router-link to="/building">Building</router-link> |
        <router-link to="/screen">Screen</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/>
    </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.front{
  z-index:1;
}

.background {
  background: url("./assets/bg01.jpeg") no-repeat fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
</style>
