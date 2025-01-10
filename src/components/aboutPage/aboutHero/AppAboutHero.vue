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
        About Us
      </h1>
      <p
        class="text-base w-[445px] text-descriptionGray text-left font-normal font-barlow ml-[86px] mt-[32px]"
      >
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </div>
  </div>
</template>

<script>
import hero from "@/assets/about/desktop/image-hero-whitecup.jpg";
export default {
  name: "AppAboutHero",
  data() {
    return {
      hero,
    };
  },
};
</script>
