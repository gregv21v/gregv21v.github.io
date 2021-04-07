<template>
  <div>
    <h1>
      <router-link to="/">{{name}}</router-link>
    </h1>
    <p>{{description}}</p>
    <div v-for='section in sections' :key="section.name">
      <strong>{{ section.name }}</strong>:{{ section.description }} <br />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Course",
    props: {
      name: String,
      description: String,
      sections: Array
    }
  }
</script>

<style scoped>
  div {
    width: 700px;
    margin: auto;
    background-color: #3483eb;
    text-align: left;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
  }

  h1 {
    text-align: left;
  }

</style>
