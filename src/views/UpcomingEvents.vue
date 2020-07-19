<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Team Good Cirlce</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body class="upcomingevents-container">
      <header class="upcomingevents-header-container">
        <SiteHeader />
        <div class="nav-container">
          <NavBar />
        </div>
      </header>

      <main>
        <b-container fluid>
          <b-row>
            <b-col>
              <!-- Will insert graphic here for left
                   side. to help emulate vintage computer screen -->
              <h1>Left</h1>
              <h1>side</h1>
              <h1>screen</h1>
              <h1>content</h1>
              <h1>Placeholder</h1>
            </b-col>
            <b-col></b-col>
            <b-col>
              <div>
                Page Text Placeholder
              </div>
              <article>
                <h2>Article heading</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Donec a diam lectus. Set sit amet ipsum mauris. Maecenas
                  congue ligula as quam viverra nec consectetur ant hendrerit.
                  Donec et mollis dolor. Praesent et diam eget libero egestas
                  mattis sit amet vitae augue. Nam tincidunt congue enim, ut
                  porta lorem lacinia consectetur.
                </p>
              </article>
            </b-col>
            <b-col></b-col>
            <b-col>
              <!-- Will insert graphic here for right
                   side. to help emulate vintage computer screen 
                   this graphic will have a few knobs and a logo-->
              <h1>Right</h1>
              <h1>side</h1>
              <h1>screen</h1>
              <h1>content</h1>
              <h1>Placeholder</h1>
            </b-col>
          </b-row>
        </b-container>
      </main>

      <footer class="upcoming-footer-container">
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
};
</script>

<style></style>
