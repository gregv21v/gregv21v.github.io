<template>
  <div>
    <h1>Games</h1>

    <Project
      name="Compact Farmer"
      description="a game where you start with a small farm and slowly expand it"
      imageName="compact-farmer"
      repoLink="https://github.com/gregv21v/Compact-Farmer"
      page="https://gregv21v.github.io/Compact-Farmer/"
    />

    <Project
      name="Chemistry Lab"
      description="a game about mixing Chemicals to create better chemicals"
      imageName="chemistry-lab"
      repoLink="https://github.com/gregv21v/Chem-Lab"
      page="https://gregv21v.github.io/Chem-Lab/"
    />

  </div>
</template>

<script>
  import Project from "@/components/Project.vue"

  export default {
    created() {
      document.title = "Games"
    },
    name: "Games",
    components: {
      Project
    }
  }

</script>

<style scoped>
  div {
    width: 700px;
    margin: auto;
    background-color: #3483eb;
  }
</style>
