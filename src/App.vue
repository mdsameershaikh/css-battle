<template>
  <div id="app">
    <div class="main-container">
      <!-- <side-menu class="side-panel" @sideMenuCollapse="sideMenuCollapseListner($event)"></side-menu> -->
      <card-lists :height="height"></card-lists>
    </div>

  </div>
</template>

<script>
// import sidemenu from './components/sidemenu.vue';
import cardLists from './components/card-lists.vue';
export default {
  name: "App",
  components: {
    // 'side-menu': sidemenu,
    'card-lists': cardLists
  },
  data() {
    return {
      height: '',
      isSideMenuOpen: true,
    }
  },
  mounted() {
    this.height = screen.height + "px"

  },
  methods: {
    sideMenuCollapseListner(sideMenuState) {
      this.isSideMenuOpen = sideMenuState
    }
  }
};
</script>

<style>
body {

  background-color: var(--bg-color);
}

.main-container {
  display: grid;
  place-items: center;
  grid-gap: 5px;
  height: calc(v-bind('height') - 7rem);
}

#app {
  font-family: "Lucida Console", "Courier New", monospace;
}
</style>
