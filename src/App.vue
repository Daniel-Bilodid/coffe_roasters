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
img {
  max-width: unset;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 310px;
  margin-right: 310px;
  margin-top: 43.56px;
}

@media (max-width: 1800px) {
  #app {
    margin-left: 209px;
    margin-right: 209px;
  }
}

@media (max-width: 1600px) {
  #app {
    margin-left: 109px;
    margin-right: 109px;
  }
}

@media (max-width: 1024px) {
  #app {
    margin-left: 55px;
    margin-right: 55px;
  }
}

@media (max-width: 768px) {
  #app {
    margin-left: 35px;
    margin-right: 35px;
  }
}
@media (max-width: 425px) {
  #app {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
