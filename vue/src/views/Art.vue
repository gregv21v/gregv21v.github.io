<template>
  <div>
    <h1>Art</h1>

    <p>Here is where I will showcase my art work.</p>



    <div class="artwork">
      <ArtPieceRow
        v-for="pieces in artwork"
        :pieces="pieces"
        v-bind:key="pieces[0].imageName"
      />
    </div>



  </div>

</template>

<script>
  import ArtPieceRow from "@/components/ArtPieceRow.vue"

  export default {
    created() {
      document.title = "Art"
    },
    name: "Art",
    components: {
      ArtPieceRow
    },
    data() {
      return {
        artwork: [
          [
            {
              title: "Ant",
              imageName: "ant"
            },
            {
              title: "An ant that is more realistic",
              imageName: "better-ant"
            }
          ],
          [
            {
              title: "Spider",
              imageName: "spider"
            },
            {
              title: "Spider that is more realistic",
              imageName: "better-spider"
            }
          ],
          [
            {
              title: "Rocket Ship",
              imageName: "rocket-ship"
            }
          ]
        ]
      }
    }
  }

</script>


<style scoped>
  p {
    color: darkblue;
  }

  .artwork {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  div {
    width: 700px;
    margin: auto;
    background-color: #3483eb;
  }
</style>
