<template>
  <div class="relative">
    <img
      class="mt-[45px] rounded-[10px] w-full xl:h-[600px] h-[500px] object-cover"
      :src="hero"
      alt="Hero Image"
    />
    <div
      class="absolute inset-0 flex flex-col gap-[14px] justify-center sm:items-start items-center sm:text-left text-center sm:ml-[58px] xl:ml-[86px]"
    >
      <h1
        class="xl:text-7xl sm:text-[48px] text-[40px] text-white font-black font-fraunces xl:w-[493px] sm:w-[329px] w-[279px] xl:leading-[72px] sm:leading-[45px] leading-[40px] md:mt-[-39px] md:tracking-[1.44px]"
      >
        Great coffee made simple.
      </h1>
      <p
        class="text-base xl:w-[445px] sm:w-[398px] w-[279px] text-descriptionGray font-normal font-barlow mt-[20px] opacity-[0.8]"
      >
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <button
        class="bg-primaryBtn w-[217px] h-[56px] rounded-[6px] mt-[32px] text-white font-fraunces font-black text-lg"
      >
        Create your plan
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import heroDesktop from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import heroTablet from "../../assets/home/tablet/image-hero-coffeepress.jpg";
import heroMobile from "../../assets/home/mobile/image-hero-coffeepress.jpg";

export default {
  name: "AppHero",
  setup() {
    const screenWidth = ref(window.innerWidth);

    const updateScreenWidth = () => {
      screenWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", updateScreenWidth);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateScreenWidth);
    });

    const hero = computed(() => {
      if (screenWidth.value >= 1024) return heroDesktop;
      if (screenWidth.value >= 768) return heroTablet;
      return heroMobile;
    });

    return { hero };
  },
};
</script>

<style lang="scss" scoped></style>
