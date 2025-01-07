<template>
  <div class="ml-[86px] mr-[86px] relative">
    <img class="w-[1111px]" :src="collection" alt="" />

    <div class="flex absolute top-20">
      <div>
        <img class="w-[255px] h-[193px]" :src="gran" alt="gran espresso" />
        <p>Gran Espresso</p>
        <p>
          Light and flavorful blend with cocoa and black pepper for an intense
          experience.
        </p>
      </div>

      <div>
        <img class="w-[255px] h-[193px]" :src="planato" alt="gran espresso" />
        <p>Planato</p>
        <p>
          Brazilian dark roast with rich and velvety body, and hints of fruits
          and nuts.
        </p>
      </div>

      <div>
        <img class="w-[255px] h-[193px]" :src="piccollo" alt="gran espresso" />
        <p>Piccollo</p>
        <p>
          Mild and smooth blend featuring notes of toasted almond and dried
          cherry.
        </p>
      </div>

      <div>
        <img class="w-[255px] h-[193px]" :src="danche" alt="gran espresso" />
        <p>Danche</p>
        <p>
          Ethiopian hand-harvested blend densely packed with vibrant fruit
          notes.
        </p>
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
