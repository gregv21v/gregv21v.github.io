<template>
  <div>
    <h1>
      {{name}}
    </h1>
    <p>{{description}}</p>
    <img :src="`./screenshots/${imageName}.png`" width="600" height="300">
    <p>Here is a link to the Github repo: <a :href="repoLink">{{repoLink}}</a></p>
  </div>
</template>

<script>
  export default {
    name: "Project",
    props: {
      name: String,
      description: String,
      imageName: String,
      repoLink: String
    }
  }
</script>

<style scoped>
  div {
    width: 700px;
    margin: auto;
    background-color: #3483eb;
  }
  h1 {
    text-align: left;
  }
</style>
