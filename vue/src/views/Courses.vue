<template>

  <div>
    <h1>Courses</h1>

    <Course
      v-for="course in courses"
      :name = "course.name"
      :url = "course.url"
      :description = "course.description"
      :sections = "course.sections"
      v-bind:key="course.name"
    />
  </div>


</template>


<script>
  import Course from "@/components/Course.vue"

  export default {
    name: "Courses",
    components: {
      Course
    },
    data() {
      return {
        courses: [
          {
            name: "Expo Tic Tac Toe Game Course",
            description: "a course that teaches you about the Expo SDK by learning how to create a Tic Tac Toe game.",
            url: "./pages/courses/expo-course/",
            sections: [
              {
                name: "Introduction",
                description: ""
              },
              {
                name: "Getting Started",
                description: "Learn how to create your project"
              },
              {
                name: "Testing Your App",
                description: "Learn how to test your app on IOS"
              },
              {
                name: "React Components",
                description: "Learn how to create components and a little about their inner workings."
              },
              {
                name: "React Props",
                description: "Learn how props work"
              },
              {
                name: "React States",
                description: "Learn how states work"
              },
              {
                name: "Styling Components",
                description: "Learn how to style components"
              },
              {
                name: "Buttons",
                description: "Learn the different types of buttons available in Expo"
              },
              {
                name: "Checking for Winner",
                description: "Implement the logic for checking for a winner"
              }
            ]
          }
        ]
      }

    }
  }

</script>
