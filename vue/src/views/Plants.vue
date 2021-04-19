<template>
  <div>
    <h1>Plants</h1>

    <p class="lastUpdated"><strong>Updated 4/12/2021</strong></p>

    <p>Welcome to my page on plants. Click the link of the plant you want to learn more about.</p>
    <img src="https://lh3.googleusercontent.com/sAu8iO51UM9SKOosy7qTXcqa3Ww4aX4YhZSAYlYhHrsNmGgy854raYAcp5EfJaOOXtRYlPRg9OZT4DJzoAjbDcVfJYyFLC8RanYMx4FAS7iadI1yJvM9kxHOP3nyhgVduVFV0444MA=w2400" width="300" alt="">
    <ul>
      <li><router-link to="/avocados">Avocados</router-link></li>
      <li><router-link to="/basil">Basil</router-link></li>
      <li><router-link to="/arugala">Arugala</router-link></li>
      <li><router-link to="/tomatos">Tomatos</router-link></li>
      <li><router-link to="/peppers">Peppers</router-link></li>
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
