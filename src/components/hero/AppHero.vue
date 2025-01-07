<template>
  <div class="relative">
    <img class="mt-[45px] rounded-[10px] w-[100%]" :src="hero" alt="" />
    <div class="absolute top-0">
      <h1
        class="text-7xl text-white font-black font-fraunces w-[493px] text-left mt-[117px] ml-[85px]"
      >
        Great coffe made simple
      </h1>
      <p
        class="text-base w-[445px] text-descriptionGray text-left font-normal font-barlow ml-[86px] mt-[32px]"
      >
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>

      <button
        class="bg-primaryBtn w-[217px] h-[56px] rounded-[6px] absolute left-[86px] mt-[56px] text-white font-fraunces font-black text-lg"
      >
        Create your plan
      </button>
    </div>
  </div>
</template>

<script>
import hero from "../../assets/home/desktop/image-hero-coffeepress.jpg";
export default {
  name: "AppHero",
  data() {
    return {
      hero,
    };
  },
};
</script>

<style lang="scss" scoped></style>
