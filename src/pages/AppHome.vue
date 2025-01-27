<template>
  <appHero />
  <AppCollection />
  <!-- <AppChoose />
  <AppWork /> -->
</template>

<script>
import AppHero from "@/components/hero/AppHero.vue";
import AppCollection from "@/components/collection/AppCollection.vue";
// import AppChoose from "@/components/choose/AppChoose.vue";
// import AppWork from "@/components/work/AppWork.vue";
export default {
  name: "AppHome",
  components: {
    AppHero,
    AppCollection,
    // AppChoose,
    // AppWork,
  },
};
</script>
