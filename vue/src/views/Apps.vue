<template>
  <div>
    <h1>Apps</h1>

    <Project
      name="Spending Tracker"
      description="An app to keep track of your spending."
      imageName="spending-tracker-1"
      repoLink="https://github.com/gregv21v/SpendingTracker"
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
