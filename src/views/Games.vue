<template>
  <div>
    <h1>Games</h1>

    <Project
      name="Compact Farmer"
      description="a game where you start with a small farm and slowly expand it"
      imageName="compact-farmer"
    />

    <Project
      name="Chemistry Lab"
      description="a game about mixing Chemicals to create better chemicals"
      imageName="chemistry-lab"
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
