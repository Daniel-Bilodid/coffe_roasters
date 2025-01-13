<template>
  <AppPlanHero />
  <AppPlanWork />
</template>

<script>
import AppPlanHero from "@/components/planPage/planHero/AppPlanHero.vue";

import AppPlanWork from "@/components/planPage/planWork/AppPlanWork.vue";

export default {
  name: "AppPlan",
  components: {
    AppPlanHero,
    AppPlanWork,
  },
};
</script>
