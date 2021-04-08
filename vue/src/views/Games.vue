<template>
  <div>
    <h1>Games</h1>

    <Project
      name="Compact Farmer"
      description="a game where you start with a small farm and slowly expand it"
      imageName="compact-farmer"
      repoLink="https://github.com/gregv21v/Compact-Farmer"
    />

    <Project
      name="Chemistry Lab"
      description="a game about mixing Chemicals to create better chemicals"
      imageName="chemistry-lab"
      repoLink="https://github.com/gregv21v/Chem-Lab"
    />

  </div>
</template>

<script>
  import Project from "@/components/Project.vue"

  export default {
    name: "Games",
    components: {
      Project
    }
  }

</script>
