<template>
  <div>
    <b-nav nav nav-tabs fill class="nav-bar-container">
      <b-nav-item 
        v-on:click="setActive('home')"
        :class="{ active: isActive('home') }"
      >
        <router-link to="/">
          {{ transformText("Home", "home") }}
        </router-link>
      </b-nav-item>
      <b-nav-item 
        v-on:click="setActive('upcomingevents')"
        :class="{ active: isActive('upcomingevents') }"
      >
        <router-link to="upcomingevents">
          {{ transformText("Upcoming Events", "upcomingevents") }}
        </router-link>
      </b-nav-item>
      <b-nav-item 
        v-on:click="setActive('howtohelp')"
        :class="{ active: isActive('howtohelp') }"
      >
        <router-link to="/howtohelp">
          {{ transformText("How To Help", "howtohelp") }}
        </router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "home"
    };
  },
  methods: {
    isActive: function(navigationItem) {
      return this.activeTab === navigationItem;
    },
    setActive: function(navigationItem) {
      return (this.activeTab = navigationItem);
    },
    transformText: function(displayedText, clickedTab) {
      if (this.activeTab == clickedTab) {
        let transformedText = displayedText.replace(
          displayedText,
          ">> " + displayedText + " <<"
        );
        return transformedText;
      } else {
        return displayedText;
      }
    }
  }
};
</script>


