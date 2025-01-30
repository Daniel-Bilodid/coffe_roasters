<template>
  <AppAboutHero />
  <AppCommitment />
  <AppQuality />
  <!-- <AppHeadquartes /> -->
</template>

<script>
import AppAboutHero from "@/components/aboutPage/aboutHero/AppAboutHero.vue";
import AppCommitment from "@/components/aboutPage/commitment/AppCommitment.vue";
import AppQuality from "@/components/aboutPage/quality/AppQuality.vue";
// import AppHeadquartes from "@/components/aboutPage/headquarters/AppHeadquartes.vue";
export default {
  name: "AppAbout",
  components: {
    AppAboutHero,
    AppCommitment,
    AppQuality,
    // AppHeadquartes,
  },
};
</script>
