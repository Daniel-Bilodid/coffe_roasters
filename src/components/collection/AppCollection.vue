<template>
  <div>
    <div class="ml-[86px] mr-[86px] relative mt-[100px]">
      <img class="w-[1111px]" :src="collection" alt="" />

      <div class="flex w-[100%] gap-[25px] justify-center mt-[-50px]">
        <div>
          <img class="w-[255px] h-[193px]" :src="gran" alt="gran espresso" />
          <p
            class="text-customBlack font-black text-2xl font-fraunces w-[255px] mt-[61.55px] mb-[24px]"
          >
            Gran Espresso
          </p>
          <p class="font-barlow text-base font-normal text-center w-[255px]">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience.
          </p>
        </div>

        <div>
          <img class="w-[255px] h-[193px]" :src="planato" alt="gran espresso" />
          <p
            class="text-customBlack font-black text-2xl font-fraunces w-[255px] mt-[61.55px] mb-[24px]"
          >
            Planato
          </p>
          <p class="font-barlow text-base font-normal text-center w-[255px]">
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts.
          </p>
        </div>

        <div>
          <img
            class="w-[255px] h-[193px]"
            :src="piccollo"
            alt="gran espresso"
          />
          <p
            class="text-customBlack font-black text-2xl font-fraunces w-[255px] mt-[61.55px] mb-[24px]"
          >
            Piccollo
          </p>
          <p class="font-barlow text-base font-normal text-center w-[255px]">
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry.
          </p>
        </div>

        <div>
          <img class="w-[255px] h-[193px]" :src="danche" alt="gran espresso" />
          <p
            class="text-customBlack font-black text-2xl font-fraunces w-[255px] mt-[61.55px] mb-[24px]"
          >
            Danche
          </p>
          <p class="font-barlow text-base font-normal text-center w-[255px]">
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import collection from "@/assets/home/desktop/collection.png";
import gran from "@/assets/home/desktop/image-gran-espresso.png";
import planato from "@/assets/home/desktop/image-planalto.png";
import piccollo from "@/assets/home/desktop/image-piccollo.png";
import danche from "@/assets/home/desktop/image-danche.png";
export default {
  name: "AppCollection",
  data() {
    return {
      collection,
      gran,
      planato,
      piccollo,
      danche,
    };
  },
};
</script>

<style></style>
