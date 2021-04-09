<template>
  <div class="row">
    <ArtPiece
      v-for="piece in pieces"
      :title = "piece.title"
      :imageName = "piece.imageName"
      v-bind:key="piece.imageName"
    />
  </div>
</template>

<script>
  import ArtPiece from "@/components/ArtPiece.vue"

  export default {
    name: "ArtPieceRow",
    components: {
      ArtPiece
    },
    props: {
      pieces: Array
    }
  }
</script>

<style scoped>
   .row {
    display: flex;
    flex-direction: row;
    flex: 0.5;
  }
</style>
