<template>
  <AppPlanHero />
  <AppPlanWork />
  <AppPlanPick />
</template>

<script>
import AppPlanHero from "@/components/planPage/planHero/AppPlanHero.vue";
import AppPlanWork from "@/components/planPage/planWork/AppPlanWork.vue";
import AppPlanPick from "@/components/planPage/planPick/AppPlanPick.vue";

export default {
  name: "AppPlan",
  components: {
    AppPlanHero,
    AppPlanWork,
    AppPlanPick,
  },
};
</script>
