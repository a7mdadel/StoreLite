<template>
  <mainNavbar />
  <router-view />
  <footerPage />
</template>
<script setup>
import mainNavbar from "./components/mainNavbar.vue";
import footerPage from "./components/footerPage.vue";
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    padding: 5px 15px;
    font-weight: bold;
    color: #2c3e50;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    &.router-link-exact-active {
      color: #032a5a;
    }
    &:hover {
      color: #638fc5 !important;
      background-color: #1a2733;
    }
  }
}
</style>
