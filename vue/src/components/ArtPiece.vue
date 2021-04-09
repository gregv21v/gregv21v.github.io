<template>
  <div class="artPiece">
    <figure>
      <img :src="`./svgArt/${imageName}.svg`" width="200" height="200">
      <figcaption>{{title}}</figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    name: "ArtPiece",
    props: {
      title: String,
      imageName: String
    }
  }
</script>

<style scoped>
   .artPiece {
    display: flex;
    flex-direction: row;
    flex: 0.5;
  }
</style>
