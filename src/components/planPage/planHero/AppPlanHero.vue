<template>
  <div class="relative">
    <img
      class="mt-[45px] rounded-[10px] w-[100%] h-[450px]"
      :src="hero"
      alt=""
    />
    <div class="absolute top-0">
      <h1
        class="text-7xl text-white font-black font-fraunces w-[493px] text-left mt-[131px] ml-[85px] tracking-[1.4px]"
      >
        Create plan
      </h1>
      <p
        class="text-base w-[445px] text-descriptionGray text-left font-normal font-barlow ml-[86px] mt-[36px]"
      >
        Coffee the way you wanted it to be. For coffee delivered tomorrow, or
        next week. For whatever brew method you use. For choice, for
        convenience, for quality.
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
