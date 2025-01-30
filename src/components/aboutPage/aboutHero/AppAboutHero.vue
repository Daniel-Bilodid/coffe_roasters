<template>
  <div class="relative">
    <img
      class="mt-[45px] rounded-[10px] w-[100%] h-[450px] object-cover xl:object-none"
      :src="hero"
      alt=""
    />
    <div class="absolute top-0 w-full">
      <h1
        class="lg:text-[40px] md:text-[32px] text-[28px] text-white font-black font-fraunces md:w-[493px] w-[150px] text-center md:text-left mt-[137px] mx-auto md:mx-0 md:ml-[85px]"
      >
        About Us
      </h1>
      <p
        class="text-base lg:w-[445px] md:w-[398px] w-[279px] text-descriptionGray md:text-left text-center font-normal font-barlow mx-auto md:ml-[86px] mt-[24px]"
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
