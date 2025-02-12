<template>
  <div
    class="w-[100%] h-[509px] md:h-[474px] bg-customDarkBlue mt-[12rem] xl:mt-[254px] rounded-[10px]"
  >
    <div class="flex flex-col-reverse xl:flex-row xl:gap-[125px] gap-[0px]">
      <div class="xl:ml-[85px]">
        <div
          class="font-fraunces md:w-[517px] h-[48px] md:text-[40px] font-black text-descriptionGray md:text-left mb-[41px] tracking-[0.8px] mx-auto xl:mx-0 mt-[64px] xl:mt-[82px] w-[279px] text-center text-[28px]"
        >
          Uncompromising quality
        </div>
        <div
          class="font-barlow xl:text-base opacity-[0.8] md:w-[540px] h-[130px] text-descriptionGray xl:text-left leading-[26px] text-[15px] text-center mx-auto xl:mx-0 w-[279px] mt-[24px] md:mt-[0px]"
        >
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </div>
      </div>
      <div>
        <img
          class="mt-[-88px] rounded-[8px] hidden xl:block"
          :src="quality"
          alt="quality"
          style="max-width: none; height: auto"
        />

        <img
          class="rounded-[8px] block xl:hidden mx-auto mt-[-82px] md:mt-[-173px] w-[279px] h-[156px] md:w-[573px] md:h-[320px]"
          :src="tabletQuality"
          alt="tabletQuality"
          style="max-width: none; height: auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import quality from "@/assets/about/desktop/image-quality.jpg";
import tabletQuality from "@/assets/about/tablet/image-quality.jpg";

export default {
  name: "AppQuality",
  data() {
    return {
      quality,
      tabletQuality,
    };
  },
};
</script>
