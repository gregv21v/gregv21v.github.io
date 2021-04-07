<template>
  <div>

    <h1>
      <a href="/pages">{{name}}</a>
    </h1>


    <p>{{description}}</p>
    <img :src="`./screenshots/${imageName}.png`" width="600" height="300">
  </div>
</template>

<script>
  export default {
    name: "Project",
    props: {
      name: String,
      description: String,
      imageName: String
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
