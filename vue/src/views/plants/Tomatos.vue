<template>
  <div>
    <h1>Tomatos</h1>
    <p class="lastUpdated"><strong>Updated 4/18/2021</strong></p>

    <p>I am growing tomatos, basil, arugala, and peppers this year.</p>

    <p>
      Some of the basil seeds that I got this year is from basil I grew last year.
      Others are from basil seed I bought last year.
    </p>
    <img src="https://lh3.googleusercontent.com/-nezdzb1MZYTpr_UZbfR8TXQw9-ox5ZUwJyJEwygyLNRp4M_bU07TOgYPKmluczMj49CjaEihMg6vjE37XW5cUttCiXWFkI2kfFGsKAqCHHJXE-PpQiPc3vTxxt-P8e7-4RAjVcpxw=w2400" width="300" alt="">
  </div>

</template>

<script>
  export default {
    created() {
      document.title = "Tomatos"
    },
    name: "Tomatos"
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
