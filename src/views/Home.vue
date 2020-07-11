<template>
  <div class="home-page-container">
    <NavBar />
    <div class="home-into-paragraph-container">
      Good Circle is the programming team from the University of Central
      Florida. Please explore and see how you can help us to keep attending
      competitions.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue"

export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
