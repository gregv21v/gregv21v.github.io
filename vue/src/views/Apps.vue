<template>
  <div>
    <h1>Apps</h1>

    <Project
      name="Spending Tracker"
      description="An app to keep track of your spending."
      imageName="spending-tracker-1"
    />

  </div>

</template>


<script>
  import Project from "@/components/Project.vue"

  export default {
    name: "Apps",
    components: {
      Project
    }
  }

</script>
