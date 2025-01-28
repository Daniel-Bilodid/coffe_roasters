<template>
  <div class="ml-[86px] mr-[86px] mt-[189px] relative">
    <div
      class="bg-customDarkBlue w-[327px] h-[902px] md:w-[100%] md:h-[573px] rounded-[10px]"
    >
      <p
        class="text-white pt-[64px] xl:pt-[110px] text-[28px] sm:text-[32px] xl:text-[40px] font-black font-fraunces"
      >
        Why choose us?
      </p>
      <p
        class="font-barlow text-base text-descriptionGray w-[540px] text-center mx-auto mt-[32px]"
      >
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
    </div>

    <div class="flex flex-col xl:flex-row mt-[-224px]">
      <div
        v-for="card in chooseCards"
        :key="card.id"
        class="sm:w-[90%] sm:h-[180px] xl:w-[382px] xl:h-[350px] bg-customGreen mx-[30px] rounded-[8px] flex xl:block"
      >
        <img
          class="mx-auto mt-[72px]"
          :src="card.icon"
          :alt="card.title"
          :style="{ width: card.id === 3 ? '72px' : '71px', height: '72px' }"
        />
        <div>
          <p
            class="font-black text-2xl font-fraunces text-descriptionGray mt-[56px]"
          >
            {{ card.title }}
          </p>
          <p
            class="font-barlow text-base font-normal text-descriptionGray w-[255px] text-center mx-auto mt-[24px]"
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
