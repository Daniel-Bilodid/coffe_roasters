<template>
  <div class="w-[100%] h-[474px] bg-customDarkBlue mt-[168px] rounded-[10px]">
    <div class="flex gap-[125px]">
      <div class="ml-[85px]">
        <div
          class="font-fraunces w-[517px] h-[48px] text-[40px] font-black text-descriptionGray text-left mt-[90px] mb-[32px]"
        >
          Uncompromising quality
        </div>
        <div
          class="font-barlow text-base opacity-[0.8] w-[540px] h-[130px] text-descriptionGray text-left"
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
        <img class="mt-[-70px] rounded-[8px]" :src="quality" alt="quality" />
      </div>
    </div>
  </div>
</template>

<script>
import quality from "@/assets/about/desktop/image-quality.jpg";
export default {
  name: "AppQuality",
  data() {
    return {
      quality,
    };
  },
};
</script>
