<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Team Good Cirlce</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>

    <body class="home-page-container">
      <div class="secondary-border">
        <header class="header-container">
          <SiteHeader />
          <div class="nav-container">
            <NavBar />
          </div>
        </header>

        <main>
          <b-container fluid>
            <b-row>
              <b-col class="side-content">
                <h1>Left</h1>
                <h1>side</h1>
                <h1>screen</h1>
                <h1>content</h1>
                <h1>Placeholder</h1></b-col
              >
              <b-col>
                <div class="home-into-paragraph-container">
                  Good Circle is the programming team from the University of
                  Central Florida. Please explore and see how you can help us to
                  keep attending competitions.
                </div>
                <br />
                <div class="home-logo-container">
                  <img
                    class="home-logo"
                    src="@/assets/Team_Good_Circle_Log.png"
                    alt="Good Cirlce Logo"
                  />
                  <br />
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

                  <h3>Subsection</h3>

                  <p>
                    Donec ut librero sed accu vehicula ultricies a non tortor.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper
                    sed, adipiscing id dolor.
                  </p>

                  <p>
                    Pelientesque auctor nisi id magna consequat sagittis.
                    Curabitur dapibus, enim sit amet elit pharetra tincidunt
                    feugiat nist imperdiet. Ut convallis libero in urna ultrices
                    accumsan. Donec sed odio eros.
                  </p>

                  <h3>Another subsection</h3>

                  <p>
                    Donec viverra mi quis quam pulvinar at malesuada arcu
                    rhoncus. Cum soclis natoque penatibus et manis dis
                    parturient montes, nascetur ridiculus mus. In rutrum
                    accumsan ultricies. Mauris vitae nisi at sem facilisis
                    semper ac in est.
                  </p>

                  <p>
                    Vivamus fermentum semper porta. Nunc diam velit, adipscing
                    ut tristique vitae sagittis vel odio. Maecenas convallis
                    ullamcorper ultricied. Curabitur ornare, ligula semper
                    consectetur sagittis, nisi diam iaculis velit, is fringille
                    sem nunc vet mi.
                  </p>
                </article>
              </b-col>
              <b-col class="side-content">
                <h1>Right</h1>
                <h1>side</h1>
                <h1>screen</h1>
                <h1>content</h1>
                <h1>Placeholder</h1>
              </b-col>
            </b-row>
          </b-container>
        </main>
        <footer class="home-footer-container">
          <!-- Will insert graphic here for bottom
             to help emulate vintage computer screen-->
          <SiteFooter />
        </footer>
      </div>
    </body>
  </html>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    SiteHeader,
    SiteFooter
  }
};
</script>
