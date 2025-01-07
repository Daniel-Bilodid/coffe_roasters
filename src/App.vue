<template>
  <appNav />
  <appHero />
  <AppCollection />
</template>

<script>
import AppNav from "./components/nav/AppNav.vue";
import AppHero from "./components/hero/AppHero.vue";
import AppCollection from "./components/collection/AppCollection.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppHero,
    AppCollection,
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
