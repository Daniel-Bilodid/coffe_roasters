<template>
  <appNav />
  <router-view />
  <AppFooter />
</template>

<script>
import AppNav from "./components/nav/AppNav.vue";

import AppFooter from "./components/footer/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNav,

    AppFooter,
  },
};
</script>

<style>
html,
body {
  height: 100%;

  background-color: #fefcf7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 43.56px;
}
</style>
