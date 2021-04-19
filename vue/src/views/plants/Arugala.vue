<template>
  <div>
    <h1>Arugala</h1>
    <p class="lastUpdated"><strong>Updated 4/18/2021</strong></p>

    <p>
      I'm growing two types of arugula this year: Wasabi Arugala (the small arugala in the pictures below), and rocket arugala (the bigger arugala in the picture below).
    </p>
    <img src="https://lh3.googleusercontent.com/PXgayDDFIjzudGv4vAoxZ1XBOQjLarsw3vK4o_r3cCmXrhutN8bhdY345XOABPv9BmWtwwAtTTWWnrChfPRml6SdujUpCtTf9ny7PM5aehCMlubvQhQuvZ8Xv5jq8E8iOSqF3k6PWQ=w2400" width="300" alt="">

    <img src="https://lh3.googleusercontent.com/uim_OQfcsUojVF2Om5sPJyC12TQGwiY7HlmTN36FsrtxOU4II8K0r9pNlq2QLHWpp4XmHSXnqHntbs_I79EOW5_OYx3DTkAQ5hjHH-Unlh3lmmNrXTEax9ZApRjZKY85xeHGrGQwNw=w2400" width="300" alt="">
  </div>

</template>

<script>
  export default {
    created() {
      document.title = "Arugala"
    },
    name: "Arugala"
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
