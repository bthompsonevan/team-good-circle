<template>
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Team Good Cirlce</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <header>
          <SiteHeader />
        <div class="nav-container">
          <NavBar />
        </div>
        </header>

        <main>

        </main>

        <footer>
           <SiteFooter />
        </footer>

    </body>
    </html>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "UpcomingEvents",
  components: {
    NavBar,
    SiteHeader,
    SiteFooter
  }
}
</script>


<style>

</style>