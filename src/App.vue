<template>
  <appNav />
  <!-- <appHero />
  <AppCollection />
  <AppChoose />
  <AppWork />
  <AppFooter /> -->
  <AppAboutHero />
  <AppCommitment />
  <AppQuality />
  <AppHeadquartes />
</template>

<script>
import AppNav from "./components/nav/AppNav.vue";
// import AppHero from "./components/hero/AppHero.vue";
// import AppCollection from "./components/collection/AppCollection.vue";
// import AppChoose from "./components/choose/AppChoose.vue";
// import AppWork from "./components/work/AppWork.vue";
// import AppFooter from "./components/footer/AppFooter.vue";
import AppAboutHero from "./components/aboutPage/aboutHero/AppAboutHero.vue";
import AppCommitment from "./components/aboutPage/commitment/AppCommitment.vue";
import AppQuality from "./components/aboutPage/quality/AppQuality.vue";
import AppHeadquartes from "./components/aboutPage/headquarters/AppHeadquartes.vue";
export default {
  name: "App",
  components: {
    AppNav,
    // AppHero,
    // AppCollection,
    // AppChoose,
    // AppWork,
    // AppFooter,
    AppAboutHero,
    AppCommitment,
    AppQuality,
    AppHeadquartes,
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
