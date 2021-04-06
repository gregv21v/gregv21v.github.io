var categories = [
  {
    name: "Games",
    projects: [
      {
        name: "Compact Farmer",
        description: "a game where you start with a small farm and slowly expand it",
        url: "./pages/compact-farmer/index.html"
      },
      {
        name: "Chemistry Lab",
        description: "A game about mixing chemicals",
        url: "./pages/chemistry-lab.html"
      }
    ]
  },
  {
    name: "Apps",
    projects: [
      {
        name: "Spending Tracker",
        description: "an app for tracking your receipts",
        url: "./pages/spending-tracker.html"
      }
    ]
  },
  {
    name: "Courses and Tutorials",
    projects: [
      {
        name: "Expo Course",
        description: "a course to teach you about Expo while making a game.",
        url: "./pages/expo-course/index.html"
      }
    ]
  }
]

var currentlyWorkingOn = "Compact Farmer"



function linkFuncGen(url) {
  return function() {
    window.location = url;
  }
}

var categoriesDiv = document.getElementById("categories")
for (var category of categories) {
  var categoryDiv = document.createElement("div")
  //div.classList.add("project")

  var categoryTitle = document.createElement("h2")
  categoryTitle.innerHTML = category.name


  categoryDiv.appendChild(categoryTitle)
  //div.appendChild(categoryTitle)
  //div.addEventListener("click", linkFuncGen(project.url))

  categoriesDiv.appendChild(categoryDiv)
}
