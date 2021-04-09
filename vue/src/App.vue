<template>
  <div>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/apps">Apps</router-link> |
        <router-link to="/art">Art</router-link> |
        <router-link to="/courses">Courses</router-link> |
        <router-link to="/games">Games</router-link> |
        <router-link to="/plants">Plants</router-link>

    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

a {
  color: black
}

h1 {
  color: darkblue
}

body {
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-image: linear-gradient(to bottom, #204d8a, #152a45);
  background-attachment: fixed;
}
</style>
