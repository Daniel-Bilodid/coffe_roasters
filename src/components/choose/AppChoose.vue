<template>
  <div class="xl:ml-[86px] xl:mr-[86px] mt-[189px] relative">
    <div
      class="bg-customDarkBlue h-[652px] sm:w-[100%] md:h-[573px] rounded-[10px]"
    >
      <p
        class="text-white pt-[64px] xl:pt-[110px] text-[28px] sm:text-[32px] xl:text-[40px] font-black font-fraunces"
      >
        Why choose us?
      </p>
      <p
        class="font-barlow text-base text-descriptionGray w-[279px] md:w-[540px] text-center mx-auto mt-[32px]"
      >
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
    </div>

    <div
      class="flex flex-col items-center xl:flex-row mt-[-304px] xl:mt-[-224px] gap-[24px] xl:gap-0 md:justify-center"
    >
      <div
        v-for="card in chooseCards"
        :key="card.id"
        class="w-[279px] h-[382px] sm:w-[90%] sm:h-[180px] xl:w-[382px] xl:h-[350px] bg-customGreen mx-[30px] rounded-[8px] flex flex-col sm:flex-row xl:block"
      >
        <img
          class="xl:mx-auto mx-auto sm:ml-[70.5px] mt-[62px] xl:mt-[72px]"
          :src="card.icon"
          :alt="card.title"
          :style="{ width: card.id === 3 ? '72px' : '71px', height: '72px' }"
        />
        <div>
          <p
            class="font-black text-2xl font-fraunces text-descriptionGray mt-[41px] xl:mt-[56px] text-left xl:text-center ml-[55.5px] xl:ml-0"
          >
            {{ card.title }}
          </p>
          <p
            class="font-barlow text-base text-left font-normal text-descriptionGray w-[81%] ml-[55.5px] mb-[41px] xl:mb-0 xl:ml-[20px] xl:w-[255px] xl:text-center mx-auto mt-[24px]"
          >
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chooseCards } from "@/data/choose.js";

export default {
  name: "AppChoose",
  data() {
    return {
      chooseCards,
    };
  },
};
</script>

<style></style>
