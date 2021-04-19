<template>
  <div>
    <h1>Peppers</h1>
    <p class="lastUpdated"><strong>Updated 4/18/2021</strong></p>

    <p>I collected my peppers seeds from store bought peppers. The pepper seeds are all mixed up, so I'm not sure which pepper is which.</p>


    <img src="https://lh3.googleusercontent.com/mZa1hlc7sS3iPmKtGXCD0YAyEY3kYyvYlLjV2xNNLJdEHwUDuR9w94xOYNFRDM5AdkCE5fi0TBhHpQhKpYLnuUjefV86Rbk_fK6I3FCQReGHnmTv_E2_0KIbF84Ubo1CVTedtgIscQ=w2400" width="300" alt="">

  </div>

</template>

<script>
  export default {
    created() {
      document.title = "Peppers"
    },
    name: "Peppers"
  }
</script>

<style scoped>
  p {
    color: darkblue;
  }

  .lastUpdated {
    text-align: right;
    padding-right: 5px;
  }

  div {
    width: 700px;
    margin: auto;
    background-color: lightgreen;
  }
</style>
