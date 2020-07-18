<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Team Good Cirlce</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body class="home-page-container">
      <header>
        <h1>This is the Header</h1>
      </header>
      <NavBar />
      <main>
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <div class="home-into-paragraph-container">
              Good Circle is the programming team from the University of Central
              Florida. Please explore and see how you can help us to keep
              attending competitions.
            </div>
            <div>
              <img
                class="home-logo-container"
                src="@/assets/Team_Good_Circle_Log.png"
                alt="Good Cirlce Logo"
              />
            </div>
          </div>
          <div class="col"></div>
        </div>
      </main>
      <footer class="home-footer-container">
        This is the footer
      </footer>
    </body>
  </html>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
