<template>
  <div>
    <h1>Plants</h1>

    <p class="lastUpdated"><strong>Updated 4/12/2021</strong></p>

    <p>Welcome to my page on plants. Click the link of the plant you want to learn more about.</p>

    <ul>
      <li><router-link to="/avocados">Avocados</router-link></li>
    </ul>

  </div>

</template>


<script>
  export default {
    created() {
      document.title = "Plants"
    },
    name: "Plants"
  }

</script>


<style scoped>
  ul {
    list-style-type: none;
    align-items: center;
  }

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
