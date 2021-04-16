<template>
  <div class="container">
    <div class="image">
      <img :src="`./screenshots/${imageName}.png`" width="200" height="100">
    </div>
    <div class="description">
      <h1>{{name}}</h1>
      <p><strong>Description: </strong>{{description}}</p>
      <p>Here is a link to the Github repo: <a :href="repoLink">{{repoLink}}</a></p>
    </div>
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
  .image {
    align-items: center;
    margin: auto;
    padding: 10px;
  }

  .description {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .container {
    margin: auto;
    width: 700px;
    display: flex;
    flex-direction: row;
    background-color: #3483eb;
    border: solid black 2px;
  }
  h1 {
    text-align: left;
  }
</style>
