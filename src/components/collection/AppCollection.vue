<template>
  <div>
    <div class="md:ml-[86px] md:mr-[86px] relative mt-[100px]">
      <img
        class="w-[375px] md:w-[unset] mx-auto mt-[134px]"
        :src="collection"
        alt=""
      />

      <div
        class="flex flex-col xl:flex-row w-[100%] gap-[25px] items-center xl:justify-center mt-[30px] md:mt-[-50px]"
      >
        <div
          v-for="card in cards"
          :key="card.id"
          class="text-center sm:flex xl:block"
        >
          <img
            class="w-[255px] h-[193px] md:mt-[-5px] md:ml-[13px]"
            :src="card.src"
            :alt="card.title"
          />
          <div>
            <p
              class="text-customBlack font-black text-2xl font-fraunces w-[255px] mt-[58px] mb-[24px] text-center sm:text-left xl:text-center md:ml-[5px]"
            >
              {{ card.title }}
            </p>
            <p
              class="font-barlow text-base font-normal w-[255px] text-center sm:text-left xl:text-center"
            >
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import collection from "@/assets/home/desktop/collection.png";
import { cards } from "@/data/cards.js";

export default {
  name: "AppCollection",
  data() {
    return {
      collection,
      cards,
    };
  },
};
</script>
