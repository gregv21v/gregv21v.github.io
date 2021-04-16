<template>
  <div id="header">
    <div id="logo">
      <router-link to="/" class="home">Gregv21v</router-link>
    </div>
    <div id="nav">
        <router-link to="/apps" class="link">Apps</router-link> |
        <router-link to="/art" class="link">Art</router-link> |
        <router-link to="/courses" class="link">Courses</router-link> |
        <router-link to="/games" class="link">Games</router-link> |
        <router-link to="/plants" class="link">Plants</router-link>
    </div>
  </div>
  <router-view />

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#logo {
  float: left;
  width: 25%;
  text-align: left;
}

.link, .home {
  text-decoration: none;
}

#logo .router-link-active {
  background-color: inherit;
}

.router-link-active {
  background-color: #3483eb;
}


#nav {
  width: 75%;
  float: right;
  margin-top: auto;
  margin-bottom: auto;
  text-align: right;
}

#header {
  width: 700px;
  display: flex;
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

a, p {
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
