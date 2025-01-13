<template>
  <div class="relative">
    <img
      class="mt-[45px] rounded-[10px] w-[100%] h-[450px]"
      :src="hero"
      alt=""
    />
    <div class="absolute top-0">
      <h1
        class="text-7xl text-white font-black font-fraunces w-[493px] text-left mt-[137px] ml-[85px]"
      >
        Create a plan
      </h1>
      <p
        class="text-base w-[445px] text-descriptionGray text-left font-normal font-barlow ml-[86px] mt-[32px]"
      >
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </div>
  </div>
</template>

<script>
import hero from "@/assets/plan/desktop/image-hero-blackcup.jpg";
export default {
  name: "AppPlanHero",
  data() {
    return {
      hero,
    };
  },
};
</script>
