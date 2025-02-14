<template>
  <div class="relative">
    <img
      class="mt-[45px] rounded-[10px] w-full h-[450px] hidden lg:block"
      :src="hero"
      alt=""
    />
    <img
      class="mt-[45px] rounded-[10px] w-full h-[450px] hidden md:block lg:hidden"
      :src="heroTablet"
      alt=""
    />
    <img
      class="mt-[45px] rounded-[10px] w-full h-[450px] block md:hidden"
      :src="heroMobile"
      alt=""
    />

    <div
      class="absolute top-0 w-full flex flex-col items-center md:items-start"
    >
      <h1
        class="lg:text-7xl text-white font-black font-fraunces lg:w-[493px] md:w-[324px] w-[279px] md:text-left text-center mt-[131px] md:ml-[85px] tracking-[1.4px] sm:text-[48px] text-[40px] mx-auto"
      >
        Create plan
      </h1>
      <p
        class="text-base w-[279px] md:w-[445px] text-descriptionGray text-center md:text-left font-normal font-barlow md:ml-[86px] mt-[36px]"
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
import heroTablet from "@/assets/plan/tablet/image-hero-blackcup.jpg";
import heroMobile from "@/assets/plan/mobile/image-hero-blackcup.jpg";
export default {
  name: "AppPlanHero",
  data() {
    return {
      hero,
      heroTablet,
      heroMobile,
    };
  },
};
</script>
